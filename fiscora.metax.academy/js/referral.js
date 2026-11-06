/* ==========================================================================
   FISCORA — Metered reading + referral unlock
   Ten articles are free. Every accepted invitation adds one more.

   Deliberate design constraints:
   • Crawlers, and any visitor arriving on an invite link, are never gated —
     a wall served to Googlebot deindexes the page and a wall served beside
     an ad unit breaks AdSense program policy.
   • A substantial preview always stays in the DOM, so the page never
     becomes a bare paywall.
   • Ad slots inside the locked region are removed rather than hidden, so no
     impression is ever counted against content the reader cannot see.
   ========================================================================== */

(function () {
  'use strict';

  const FREE_LIMIT = 10;
  const PREVIEW_BLOCKS = 6;   /* top-level nodes always left visible */
  const TABLE = 'referrals';

  const db = () => window.FiscoraDB;
  const T = key => (window.FiscoraI18N ? window.FiscoraI18N.t(key) : key);

  const slug = () => {
    const f = location.pathname.split('/').pop();
    return (!f || f === '') ? 'index.html' : f;
  };

  /* ------------------------------------------------------------- identity */
  function makeId() {
    const rnd = (typeof crypto !== 'undefined' && crypto.getRandomValues)
      ? Array.from(crypto.getRandomValues(new Uint8Array(8)))
          .map(b => b.toString(36)).join('')
      : Math.random().toString(36).slice(2) + Date.now().toString(36);
    return rnd.replace(/[^a-z0-9]/g, '').slice(0, 12);
  }

  function identity() {
    if (!db()) return Promise.resolve({ id: 'anon', code: 'anon' });
    return db().get('prefs', 'visitor').then(v => {
      if (v && v.id) return v;
      const rec = { id: makeId(), code: makeId().slice(0, 8), born: Date.now() };
      return db().set('prefs', 'visitor', rec).then(() => rec);
    }).catch(() => ({ id: 'anon', code: 'anon' }));
  }

  /* -------------------------------------------------------------- reading */
  function readLog() {
    if (!db()) return Promise.resolve([]);
    return db().get('reading', 'log').then(v => Array.isArray(v) ? v : []).catch(() => []);
  }

  function recordRead(s) {
    return readLog().then(log => {
      if (log.indexOf(s) !== -1) return log;
      log.push(s);
      return db() ? db().set('reading', 'log', log).then(() => log) : log;
    });
  }

  /* -------------------------------------------------------------- credits */
  function localCredits() {
    if (!db()) return Promise.resolve(0);
    return db().get('referrals', 'credits').then(n => Number(n) || 0).catch(() => 0);
  }

  function setLocalCredits(n) {
    return db() ? db().set('referrals', 'credits', Number(n) || 0) : Promise.resolve();
  }

  /** Ask the table API how many invitations this code has actually brought in. */
  function remoteCredits(code) {
    if (!code || code === 'anon') return Promise.resolve(null);
    return fetch('tables/' + TABLE + '?search=' + encodeURIComponent(code) + '&limit=100')
      .then(r => (r.ok ? r.json() : null))
      .then(j => {
        if (!j || !Array.isArray(j.data)) return null;
        return j.data.filter(row => row && row.code === code && !row.deleted).length;
      })
      .catch(() => null);
  }

  /** Register an inbound invitation exactly once per browser. */
  function acceptInvite(code, me) {
    if (!code || code === me.code) return Promise.resolve(false);
    if (!db()) return Promise.resolve(false);

    return db().get('referrals', 'accepted').then(prev => {
      if (prev) return false;                       /* one acceptance per browser */
      return db().set('referrals', 'accepted', { code: code, at: Date.now() })
        .then(() => fetch('tables/' + TABLE, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            code: code,
            visitor: me.id,
            landing: slug(),
            lang: (window.FiscoraI18N && window.FiscoraI18N.lang) || 'en',
            credited: false
          })
        }).catch(() => null))
        .then(() => true);
    }).catch(() => false);
  }

  /* ------------------------------------------------------------ bot check */
  const BOT = /bot|crawl|spider|slurp|bingpreview|mediapartners|adsbot|google-inspection|lighthouse|headless|facebookexternalhit|embedly|quora link preview|pinterest|twitterbot|linkedinbot|whatsapp|telegram/i;

  function isExempt() {
    if (window.FISCORA_GATE_FORCE) return false;                 /* QA harness only */
    if (BOT.test(navigator.userAgent || '')) return true;
    if (navigator.webdriver) return true;                        /* automation / audits */
    const p = new URLSearchParams(location.search);
    if (p.has('ref')) return true;                               /* invited reader */
    if (p.get('gate') === 'off') return true;                    /* internal preview */
    return false;
  }

  /* --------------------------------------------------------------- invite */
  function inviteURL(code) {
    const u = new URL(location.href);
    u.searchParams.set('ref', code);
    u.searchParams.delete('gate');
    return u.toString();
  }

  function toast(msg) {
    const el = document.createElement('div');
    el.className = 'ref-toast';
    el.setAttribute('role', 'status');
    el.innerHTML = '<i class="fa-solid fa-circle-check" style="color:#7bd8c0" aria-hidden="true"></i> ' + msg;
    document.body.appendChild(el);
    requestAnimationFrame(() => el.setAttribute('data-show', 'true'));
    setTimeout(() => {
      el.setAttribute('data-show', 'false');
      setTimeout(() => el.remove(), 600);
    }, 5200);
  }

  /* ----------------------------------------------------------- the meter */
  function meterHTML(used, allowance) {
    const left = Math.max(0, allowance - used);
    const pct = allowance > 0 ? Math.min(100, (used / allowance) * 100) : 100;
    const word = left === 1 ? T('meter.one') : T('meter.left');
    return '<div class="read-meter" id="read-meter" role="status">' +
      '<i class="fa-solid fa-book-open-reader" aria-hidden="true"></i>' +
      '<span class="read-meter__count">' + left + '</span><span>' + word + '</span>' +
      '<span class="read-meter__bar"><span class="read-meter__fill" style="width:' + pct + '%"></span></span>' +
      '</div>';
  }

  function mountMeter(used, allowance) {
    const body = document.getElementById('article-body');
    if (!body || document.getElementById('read-meter')) return;
    const wrap = document.createElement('div');
    wrap.innerHTML = meterHTML(used, allowance);
    body.parentNode.insertBefore(wrap.firstChild, body);
  }

  /* ------------------------------------------------------------ the gate */
  function shareLinks(url, title) {
    const u = encodeURIComponent(url);
    const t = encodeURIComponent(title);
    return [
      ['fa-brands fa-x-twitter', 'X', 'https://twitter.com/intent/tweet?url=' + u + '&text=' + t],
      ['fa-brands fa-whatsapp', 'WhatsApp', 'https://wa.me/?text=' + t + '%20' + u],
      ['fa-brands fa-linkedin-in', 'LinkedIn', 'https://www.linkedin.com/sharing/share-offsite/?url=' + u],
      ['fa-brands fa-facebook-f', 'Facebook', 'https://www.facebook.com/sharer/sharer.php?u=' + u]
    ].map(s => '<a href="' + s[2] + '" target="_blank" rel="noopener nofollow">' +
      '<i class="' + s[0] + '" aria-hidden="true"></i> ' + s[1] + '</a>').join('');
  }

  function gateHTML(code, credits) {
    const url = inviteURL(code);
    const title = document.title;
    return '<section class="gate" id="referral-gate" aria-label="Continue reading">' +
      (credits > 0
        ? '<span class="gate__credits"><i class="fa-solid fa-key" aria-hidden="true"></i> +' +
          credits + ' ' + T('gate.credits') + '</span>'
        : '') +
      '<h3>' + T('gate.title') + '</h3>' +
      '<p>' + T('gate.body') + '</p>' +
      '<div class="gate__link">' +
        '<input type="text" id="gate-link" readonly value="' + url.replace(/"/g, '&quot;') + '" aria-label="Invite link">' +
        '<button type="button" class="btn btn--brand" id="gate-copy">' +
          '<i class="fa-solid fa-copy" aria-hidden="true"></i> ' + T('gate.copy') + '</button>' +
      '</div>' +
      '<div class="gate__share">' + shareLinks(url, title) + '</div>' +
      '<p class="gate__note">' + T('gate.note') + '</p>' +
    '</section>';
  }

  /**
   * Split the article: keep the preview, wrap the remainder in a locked
   * container, drop any ad slots that fall inside it, insert the gate.
   */
  function applyGate(code, credits) {
    const body = document.getElementById('article-body');
    if (!body || document.getElementById('referral-gate')) return;

    const kids = Array.prototype.slice.call(body.children);
    if (kids.length <= PREVIEW_BLOCKS + 2) return;   /* too short to gate fairly */

    const zone = document.createElement('div');
    zone.className = 'gate-zone';
    zone.setAttribute('data-locked', 'true');
    zone.setAttribute('aria-hidden', 'true');

    kids.slice(PREVIEW_BLOCKS).forEach(node => zone.appendChild(node));

    /* No ad may render inside content the reader cannot read. */
    zone.querySelectorAll('[data-ad], .ad-slot, ins.adsbygoogle').forEach(a => a.remove());

    const gate = document.createElement('div');
    gate.innerHTML = gateHTML(code, credits);

    body.appendChild(gate.firstChild);
    body.appendChild(zone);
    document.body.setAttribute('data-gated', 'true');
  }

  function unlock() {
    const zone = document.querySelector('.gate-zone');
    const gate = document.getElementById('referral-gate');
    if (zone) { zone.setAttribute('data-locked', 'false'); zone.removeAttribute('aria-hidden'); }
    if (gate) gate.remove();
    document.body.removeAttribute('data-gated');
  }

  /* --------------------------------------------------------------- events */
  document.addEventListener('click', e => {
    if (e.target.closest('#gate-copy')) {
      const input = document.getElementById('gate-link');
      const btn = e.target.closest('#gate-copy');
      if (!input) return;
      const done = () => {
        btn.innerHTML = '<i class="fa-solid fa-check" aria-hidden="true"></i> ' + T('gate.copied');
        setTimeout(() => {
          btn.innerHTML = '<i class="fa-solid fa-copy" aria-hidden="true"></i> ' + T('gate.copy');
        }, 2400);
      };
      if (navigator.clipboard) navigator.clipboard.writeText(input.value).then(done).catch(done);
      else { input.select(); try { document.execCommand('copy'); } catch (err) {} done(); }
    }
  });

  /* ----------------------------------------------------------------- boot */
  function start() {
    const isArticle = document.body.dataset.page === 'article';
    const s = slug();

    identity().then(me => {
      const params = new URLSearchParams(location.search);
      const inbound = params.get('ref');

      const chain = inbound ? acceptInvite(inbound, me) : Promise.resolve(false);

      return chain.then(() => Promise.all([readLog(), localCredits(), remoteCredits(me.code)]))
        .then(res => {
          const log = res[0];
          let credits = res[1];
          const remote = res[2];

          if (remote !== null && remote > credits) {
            const gained = remote - credits;
            credits = remote;
            setLocalCredits(credits);
            if (gained > 0) toast(T('ref.thanks'));
          }

          window.FiscoraReferral.state = {
            code: me.code, credits: credits, read: log.length,
            allowance: FREE_LIMIT + credits
          };

          if (!isArticle) return;

          const already = log.indexOf(s) !== -1;
          const allowance = FREE_LIMIT + credits;

          if (isExempt()) { if (!already) recordRead(s); return; }

          if (already || log.length < allowance) {
            recordRead(s).then(l => mountMeter(l.length, allowance));
            return;
          }

          mountMeter(log.length, allowance);
          applyGate(me.code, credits);
        });
    }).catch(() => {});
  }

  window.FiscoraReferral = {
    FREE_LIMIT,
    state: null,
    unlock,
    inviteURL,
    reset() {
      if (!db()) return Promise.resolve();
      return Promise.all([
        db().del('reading', 'log'),
        db().del('referrals', 'credits'),
        db().del('referrals', 'accepted')
      ]).then(() => unlock());
    }
  };

  /* Gate after content exists — i18n may replace the body wholesale. */
  document.addEventListener('fiscora:i18n-ready', start, { once: true });
  setTimeout(() => {
    if (!window.FiscoraReferral.state) start();
  }, 2500);
})();
