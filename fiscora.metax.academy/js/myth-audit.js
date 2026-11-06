/* ==========================================================================
   FISCORA — Myth Audit index  (Growth trick #2)
   Aggregates every `.review__item` from every published article into one
   browsable, filterable reference.

   DESIGN NOTE — why this parses HTML at runtime rather than reading a data file:
   the critical reviews live in the article markup, which is the single source of
   truth. A generated JSON copy would drift the moment an article was edited and
   nobody re-ran the generator. Parsing the real pages means this index can
   never disagree with the articles it summarises.

   Cost control: pages are fetched through a small concurrency pool, results are
   rendered progressively as they land, and the parsed payload is cached in
   sessionStorage so filtering and back-navigation are instant.
   ========================================================================== */

window.FiscoraMythAudit = (function () {
  'use strict';

  const CACHE_KEY = 'fisc_myth_cache_v1';
  const POOL = 6;

  /* ------------------------------------------------------------- verdicts
     Each item is tagged by inspecting its own "where it breaks" prose. These
     are the recurring failure modes we actually found while writing the
     reviews, in priority order — the first match wins. */
  const VERDICTS = [
    {
      key: 'vendor',
      label: 'Vendor-biased',
      icon: 'fa-hand-holding-dollar',
      hint: 'The advice is produced by someone who profits from you following it.',
      re: /\b(sold|sells|selling|commission|vendor|marketing|marketers|profession that gets paid|paid for it|advertis|broker|salespeople|industry stud|self-reported|interest in the answer)\b/i
    },
    {
      key: 'scope',
      label: 'Mis-scoped',
      icon: 'fa-globe',
      hint: 'True in one jurisdiction, tax regime or account type; repeated as universal.',
      re: /\b(jurisdiction|one country|one specific statutory|local law|varies by|not universal|regime|foreign|withholding|domicile|state|country)\b/i
    },
    {
      key: 'outdated',
      label: 'Outdated',
      icon: 'fa-clock-rotate-left',
      hint: 'Was true under earlier rules, rates or thresholds, and is repeated unchanged.',
      re: /\b(has (?:since )?changed|shifting|no longer|used to|historically|vintage|current rules|been actively shifting|updated|era of)\b/i
    },
    {
      key: 'survivorship',
      label: 'Survivorship',
      icon: 'fa-filter',
      hint: 'Built on the visible winners; the failures are absent from the sample.',
      re: /\b(survivor|someone else's outcome|winners|those who failed|selection|self-selected|cluster in downturns|not randomly distributed)\b/i
    },
    {
      key: 'overstated',
      label: 'Overstated',
      icon: 'fa-arrow-up-right-dots',
      hint: 'Directionally right, but stated far more strongly than the evidence supports.',
      re: /./
    }
  ];

  const classify = txt => (VERDICTS.find(v => v.re.test(txt)) || VERDICTS[VERDICTS.length - 1]).key;
  const verdictOf = key => VERDICTS.find(v => v.key === key) || VERDICTS[VERDICTS.length - 1];

  /* ------------------------------------------------------------------ fetch */
  function targets() {
    const D = window.FiscoraData;
    if (!D) return [];
    /* Articles plus calculator pages — both carry critical reviews. */
    return D.articles().concat(D.tools())
      .filter(p => p && p.slug)
      .map(p => ({ slug: p.slug, title: p.title, cat: p.cat }));
  }

  function parsePage(html, page) {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const out = [];
    doc.querySelectorAll('#critical-review .review__item').forEach(item => {
      const sum = item.querySelector('summary');
      const claim = item.querySelector('b.claim');
      const limit = item.querySelector('b.limit');
      const border = item.querySelector('b.border');
      if (!sum) return;

      /* The label <b> sits inside the <p>; strip it to get the prose only. */
      const prose = el => {
        if (!el) return '';
        const p = el.parentElement;
        if (!p) return '';
        return p.textContent.replace(el.textContent, '').trim();
      };

      const limitTxt = prose(limit);
      const borderTxt = prose(border);
      out.push({
        myth: sum.textContent.trim().replace(/^"|"$/g, ''),
        claim: prose(claim),
        limit: limitTxt,
        border: borderTxt,
        slug: page.slug,
        title: page.title,
        cat: page.cat,
        verdict: classify(limitTxt + ' ' + borderTxt)
      });
    });
    return out;
  }

  function runPool(list, onBatch, done) {
    let i = 0, active = 0, finished = 0;
    const all = [];

    const next = () => {
      while (active < POOL && i < list.length) {
        const page = list[i++];
        active++;
        fetch(page.slug, { credentials: 'same-origin' })
          .then(r => (r.ok ? r.text() : ''))
          .catch(() => '')
          .then(html => {
            if (html) {
              const items = parsePage(html, page);
              if (items.length) { all.push.apply(all, items); onBatch(all); }
            }
            active--; finished++;
            if (finished === list.length) done(all); else next();
          });
      }
    };
    if (!list.length) done(all); else next();
  }

  /* ------------------------------------------------------------------ render */
  const esc = s => String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

  function render(items, state, els) {
    const cats = window.CATEGORIES || {};
    let rows = items.slice();

    if (state.cat !== 'all') rows = rows.filter(r => r.cat === state.cat);
    if (state.verdict !== 'all') rows = rows.filter(r => r.verdict === state.verdict);
    if (state.q) {
      const q = state.q.toLowerCase();
      rows = rows.filter(r =>
        (r.myth + ' ' + r.claim + ' ' + r.limit + ' ' + r.border + ' ' + r.title)
          .toLowerCase().indexOf(q) > -1);
    }

    /* Counters */
    if (els.count) {
      els.count.textContent = rows.length === items.length
        ? items.length + ' claims audited'
        : rows.length + ' of ' + items.length + ' claims';
    }
    if (els.stats) {
      const pages = new Set(items.map(r => r.slug)).size;
      els.stats.innerHTML =
        '<div><b>' + items.length + '</b><span>Claims audited</span></div>' +
        '<div><b>' + pages + '</b><span>Guides reviewed</span></div>' +
        '<div><b>' + VERDICTS.length + '</b><span>Failure modes</span></div>';
    }

    if (!rows.length) {
      els.list.innerHTML = '<div class="empty-state" style="grid-column:1/-1">' +
        '<i class="fa-solid fa-magnifying-glass"></i>' +
        '<p>No audited claim matches that filter yet.</p></div>';
      return;
    }

    els.list.innerHTML = rows.map(r => {
      const v = verdictOf(r.verdict);
      const cat = cats[r.cat];
      return '<article class="myth" id="myth-' + esc(r.slug.replace('.html', '')) + '-' +
          esc(r.myth.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 40)) + '">' +
        '<div class="myth__top">' +
          '<span class="myth__verdict myth__verdict--' + v.key + '" title="' + esc(v.hint) + '">' +
            '<i class="fa-solid ' + v.icon + '"></i> ' + esc(v.label) + '</span>' +
          (cat ? '<a class="chip" href="' + esc(cat.url) + '">' + esc(cat.label) + '</a>' : '') +
        '</div>' +
        '<h3 class="myth__claim">&ldquo;' + esc(r.myth) + '&rdquo;</h3>' +
        (r.limit ? '<p class="myth__limit"><b>Where it breaks</b>' + esc(trunc(r.limit, 260)) + '</p>' : '') +
        (r.border ? '<p class="myth__border"><b>Still true when</b>' + esc(trunc(r.border, 200)) + '</p>' : '') +
        '<a class="myth__src" href="' + esc(r.slug) + '#critical-review">' +
          'Full reasoning in <em>' + esc(r.title) + '</em> <i class="fa-solid fa-arrow-right"></i></a>' +
        '</article>';
    }).join('');
  }

  function trunc(s, n) {
    s = String(s || '');
    return s.length <= n ? s : s.slice(0, n).replace(/\s+\S*$/, '') + '…';
  }

  /* -------------------------------------------------------------------- init */
  function init() {
    const els = {
      list: document.getElementById('myth-list'),
      count: document.getElementById('myth-count'),
      stats: document.getElementById('myth-stats'),
      cat: document.getElementById('myth-cat'),
      verdict: document.getElementById('myth-verdict'),
      q: document.getElementById('myth-q'),
      status: document.getElementById('myth-status')
    };
    if (!els.list) return;

    const state = { cat: 'all', verdict: 'all', q: '' };
    let items = [];

    /* Filter controls */
    const cats = window.CATEGORIES || {};
    if (els.cat) {
      els.cat.innerHTML = '<option value="all">Every desk</option>' +
        Object.keys(cats).filter(k => k !== 'tools')
          .map(k => '<option value="' + esc(k) + '">' + esc(cats[k].label) + '</option>').join('');
      els.cat.addEventListener('change', () => { state.cat = els.cat.value; render(items, state, els); });
    }
    if (els.verdict) {
      els.verdict.innerHTML = '<option value="all">Every failure mode</option>' +
        VERDICTS.map(v => '<option value="' + v.key + '">' + esc(v.label) + '</option>').join('');
      els.verdict.addEventListener('change', () => { state.verdict = els.verdict.value; render(items, state, els); });
    }
    if (els.q) {
      els.q.addEventListener('input', () => { state.q = els.q.value.trim(); render(items, state, els); });
    }

    const paint = list => {
      items = list.slice().sort((a, b) => a.title.localeCompare(b.title));
      render(items, state, els);
    };

    const finish = list => {
      paint(list);
      if (els.status) {
        if (!list.length) {
          els.status.innerHTML = '<div class="callout"><i class="fa-solid fa-circle-info"></i>' +
            '<p>The audit builds itself by reading the published guides. It needs to be ' +
            'served over http(s) — opened directly from disk, the browser blocks those reads.</p></div>';
        } else {
          els.status.hidden = true;
        }
      }
      try { sessionStorage.setItem(CACHE_KEY, JSON.stringify(list)); } catch (e) {}
    };

    /* Cache-first, so filtering and back-navigation never re-fetch 56 pages. */
    let cached = null;
    try { cached = JSON.parse(sessionStorage.getItem(CACHE_KEY)); } catch (e) {}
    if (cached && cached.length) { finish(cached); return; }

    runPool(targets(), paint, finish);
  }

  return { init: init, VERDICTS: VERDICTS };
})();
