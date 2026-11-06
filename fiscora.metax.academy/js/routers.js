/* ==========================================================================
   FISCORA — Diagnostic router engine  (growth trick #9)

   Renders the trees in js/routers-data.js as a stepped question flow ending
   in a recommendation plus the guides that justify it.

   Design notes
   - State lives in the URL hash (#r=<router>&p=<node,node,...>) so an
     outcome is linkable and survives a refresh. This reuses the convention
     established by the calculator permalinks (trick #3).
   - Suggested reads are filtered through the published content graph, so a
     slug that the publish guard has stripped simply disappears rather than
     rendering a dead link.
   - Answers are recorded as a path of node ids, which makes "back one step"
     exact rather than reconstructed.
   ========================================================================== */
window.FiscoraRouters_engine = (function () {
  'use strict';

  var LIST = window.FiscoraRouters || [];
  var byId = Object.create(null);
  LIST.forEach(function (r) { byId[r.id] = r; });

  var els = {};
  var state = { id: null, path: [], answers: [] };

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* Only pages the guard left in the graph can be linked. */
  function livePages(slugs) {
    var by = window.BY_SLUG || {};
    return (slugs || []).map(function (s) { return by[s]; }).filter(Boolean);
  }

  function isResult(router, key) {
    return !!(router.results && router.results[key]);
  }

  /* ------------------------------------------------------------------ hash */
  function readHash() {
    var h = String(location.hash || '').replace(/^#/, '');
    if (h.indexOf('r=') === -1) return null;
    var out = { id: null, path: [] };
    h.split('&').forEach(function (pair) {
      var i = pair.indexOf('=');
      if (i < 0) return;
      var k = pair.slice(0, i);
      var v = decodeURIComponent(pair.slice(i + 1));
      if (k === 'r') out.id = v;
      else if (k === 'p') out.path = v ? v.split(',') : [];
    });
    return out.id ? out : null;
  }

  function writeHash(replace) {
    if (!state.id) return;
    var h = '#r=' + encodeURIComponent(state.id);
    if (state.path.length) h += '&p=' + encodeURIComponent(state.path.join(','));
    if (replace && history.replaceState) history.replaceState(null, '', h);
    else if (history.pushState) history.pushState(null, '', h);
    else location.hash = h;
  }

  /* ------------------------------------------------------------- rendering */
  function progressHTML(router, nodeKey, done) {
    /* Depth is not fixed per tree, so this reports position rather than a
       fake percentage: honest about not knowing the remaining length. */
    var total = Object.keys(router.nodes).length;
    var step = done ? total : state.path.length + 1;
    var pct = done ? 100 : Math.min(95, Math.round((state.path.length / total) * 100) + 8);
    return '' +
      '<div class="router__meter" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + pct + '">' +
        '<div class="router__meter-fill" style="width:' + pct + '%"></div>' +
      '</div>' +
      '<p class="router__step-label tiny muted">' +
        (done ? 'Recommendation' : 'Question ' + step) +
      '</p>';
  }

  function questionHTML(router, nodeKey) {
    var n = router.nodes[nodeKey];
    if (!n) return '';
    var out = '<div class="router__stage" data-node="' + esc(nodeKey) + '">';
    out += progressHTML(router, nodeKey, false);
    out += '<h3 class="router__q">' + esc(n.q) + '</h3>';
    if (n.help) out += '<p class="router__help">' + esc(n.help) + '</p>';
    out += '<div class="router__answers">';
    (n.a || []).forEach(function (a, i) {
      out += '<button type="button" class="router__a" data-to="' + esc(a.to) + '" data-label="' + esc(a.label) + '">' +
        '<span class="router__a-key">' + (i + 1) + '</span>' +
        '<span class="router__a-text">' + esc(a.label) +
        (a.note ? '<em class="router__a-note">' + esc(a.note) + '</em>' : '') +
        '</span>' +
        '<i class="fa-solid fa-chevron-right"></i>' +
        '</button>';
    });
    out += '</div>';
    out += controlsHTML();
    out += '</div>';
    return out;
  }

  function controlsHTML() {
    var out = '<div class="router__controls">';
    if (state.path.length) {
      out += '<button type="button" class="chip" data-router-back><i class="fa-solid fa-arrow-left"></i> Back a step</button>';
    }
    out += '<button type="button" class="chip" data-router-restart><i class="fa-solid fa-rotate-left"></i> Start again</button>';
    out += '</div>';
    return out;
  }

  function trailHTML() {
    if (!state.answers.length) return '';
    var out = '<ol class="router__trail">';
    state.answers.forEach(function (a) {
      out += '<li><span>' + esc(a.q) + '</span><b>' + esc(a.label) + '</b></li>';
    });
    out += '</ol>';
    return out;
  }

  function resultHTML(router, key) {
    var r = router.results[key];
    if (!r) return '';
    var reads = livePages(r.reads);

    var out = '<div class="router__stage router__stage--result" data-result="' + esc(key) + '">';
    out += progressHTML(router, key, true);

    out += '<div class="router__verdict">' +
      '<span class="router__verdict-tag">' + esc(r.verdict) + '</span>' +
      '<h3>' + esc(r.title) + '</h3>' +
      '</div>';

    out += '<p class="router__body">' + esc(r.body) + '</p>';

    if (r.steps && r.steps.length) {
      out += '<h4 class="router__sub">What to do, in order</h4><ol class="steps router__steps">';
      r.steps.forEach(function (s) { out += '<li>' + esc(s) + '</li>'; });
      out += '</ol>';
    }

    /* The caution is not optional and not collapsible. A router that hides
       who its advice is wrong for is marketing. */
    out += '<div class="router__caution">' +
      '<b><i class="fa-solid fa-triangle-exclamation"></i> Where this answer is weakest</b>' +
      '<p>' + esc(r.caution) + '</p>' +
      '</div>';

    if (reads.length) {
      out += '<h4 class="router__sub">The reasoning behind this</h4><div class="router__reads">';
      reads.forEach(function (p) {
        out += '<a class="router__read" href="' + esc(p.slug) + '">' +
          '<i class="fa-solid ' + esc(p.icon || 'fa-file-lines') + '"></i>' +
          '<span><b>' + esc(p.title) + '</b>' +
          (p.read ? '<em>' + esc(p.read) + ' min read</em>' : '') +
          '</span></a>';
      });
      out += '</div>';
    }

    out += trailHTML();

    out += '<div class="router__controls">' +
      '<button type="button" class="chip chip--brand" data-router-share><i class="fa-solid fa-link"></i> Copy this outcome</button>' +
      '<button type="button" class="chip" data-router-back><i class="fa-solid fa-arrow-left"></i> Back a step</button>' +
      '<button type="button" class="chip" data-router-restart><i class="fa-solid fa-rotate-left"></i> Start again</button>' +
      '</div>';

    out += '</div>';
    return out;
  }

  /* Rebuild the answer trail from the recorded node path. */
  function rebuildAnswers(router) {
    state.answers = [];
    var cur = router.start;
    for (var i = 0; i < state.path.length; i++) {
      var node = router.nodes[cur];
      if (!node) break;
      var next = state.path[i];
      var picked = (node.a || []).filter(function (a) { return a.to === next; })[0];
      state.answers.push({ q: node.q, label: picked ? picked.label : '—' });
      cur = next;
    }
    return cur;
  }

  function paint(router, animate) {
    var host = els.stage;
    if (!host) return;
    var cur = rebuildAnswers(router);
    var html = isResult(router, cur) ? resultHTML(router, cur) : questionHTML(router, cur);
    host.innerHTML = html;
    if (animate) {
      var st = host.querySelector('.router__stage');
      if (st) {
        st.classList.add('is-entering');
        requestAnimationFrame(function () { st.classList.remove('is-entering'); });
      }
    }
  }

  /* -------------------------------------------------------------- controls */
  function choose(to, router) {
    state.path.push(to);
    writeHash(false);
    paint(router, true);
    focusStage();
  }

  function back(router) {
    if (!state.path.length) return;
    state.path.pop();
    writeHash(true);
    paint(router, true);
    focusStage();
  }

  function restart(router) {
    state.path = [];
    writeHash(true);
    paint(router, true);
    focusStage();
  }

  function focusStage() {
    var h = els.stage && els.stage.querySelector('.router__q, .router__verdict h3');
    if (h) {
      h.setAttribute('tabindex', '-1');
      try { h.focus({ preventScroll: true }); } catch (e) { /* older browsers */ }
    }
  }

  function copyOutcome(btn) {
    var url = location.href;
    var done = function () {
      var old = btn.innerHTML;
      btn.innerHTML = '<i class="fa-solid fa-check"></i> Link copied';
      setTimeout(function () { btn.innerHTML = old; }, 2200);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(done, function () {});
    } else {
      var t = document.createElement('textarea');
      t.value = url; document.body.appendChild(t); t.select();
      try { document.execCommand('copy'); done(); } catch (e) { /* ignore */ }
      document.body.removeChild(t);
    }
  }

  /* ------------------------------------------------------------ router page */
  function cardHTML(r) {
    return '<article class="card router-card">' +
      '<span class="card__icon"><i class="fa-solid ' + esc(r.icon || 'fa-diagram-project') + '"></i></span>' +
      '<h3>' + esc(r.title) + '</h3>' +
      '<p>' + esc(r.dek) + '</p>' +
      '<a class="chip chip--brand" href="#r=' + esc(r.id) + '" data-router-open="' + esc(r.id) + '">' +
        'Start <i class="fa-solid fa-arrow-right"></i></a>' +
      '</article>';
  }

  function mountIndex() {
    var grid = document.getElementById('router-grid');
    if (!grid) return;
    grid.innerHTML = LIST.map(cardHTML).join('');
  }

  function openRouter(id, replaceHash) {
    var router = byId[id];
    if (!router) return false;
    state.id = id;
    if (!state.path.length) state.path = [];
    var head = document.getElementById('router-active');
    if (!head) return false;

    head.hidden = false;
    var title = document.getElementById('router-title');
    var dek = document.getElementById('router-dek');
    if (title) title.textContent = router.title;
    if (dek) dek.textContent = router.dek;

    var idx = document.getElementById('router-index');
    if (idx) idx.hidden = true;

    paint(router, false);
    if (replaceHash) writeHash(true);
    return true;
  }

  function closeRouter() {
    state.id = null; state.path = []; state.answers = [];
    var head = document.getElementById('router-active');
    var idx = document.getElementById('router-index');
    if (head) head.hidden = true;
    if (idx) idx.hidden = false;
    if (history.replaceState) history.replaceState(null, '', location.pathname);
  }

  function syncFromHash() {
    var h = readHash();
    if (!h || !byId[h.id]) { closeRouter(); return; }
    state.id = h.id;
    state.path = h.path || [];
    openRouter(h.id, false);
  }

  function initPage() {
    els.stage = document.getElementById('router-stage');
    mountIndex();

    document.addEventListener('click', function (e) {
      var open = e.target.closest('[data-router-open]');
      if (open) {
        e.preventDefault();
        state.path = [];
        openRouter(open.getAttribute('data-router-open'), true);
        var host = document.getElementById('router-active');
        if (host) host.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
      var router = byId[state.id];
      if (!router) return;

      var a = e.target.closest('.router__a');
      if (a) { choose(a.getAttribute('data-to'), router); return; }
      if (e.target.closest('[data-router-back]')) { back(router); return; }
      if (e.target.closest('[data-router-restart]')) { restart(router); return; }
      var sh = e.target.closest('[data-router-share]');
      if (sh) { copyOutcome(sh); return; }
      if (e.target.closest('[data-router-close]')) { closeRouter(); return; }
    });

    /* Keyboard: 1-9 pick an answer, so a whole flow can be run without a mouse. */
    document.addEventListener('keydown', function (e) {
      if (!state.id) return;
      if (e.target && /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) return;
      var n = parseInt(e.key, 10);
      if (!n || n < 1 || n > 9) return;
      var btns = els.stage ? els.stage.querySelectorAll('.router__a') : [];
      if (btns[n - 1]) { e.preventDefault(); btns[n - 1].click(); }
    });

    window.addEventListener('hashchange', syncFromHash);
    syncFromHash();
  }

  /* The in-article teaser deliberately lives in js/site.js instead of here:
     it must appear on every article, and loading these full decision trees on
     85 pages to render one promo box would be indefensible. site.js uses the
     small ROUTER_INDEX map in site-data.js — keep the ids in sync. */

  return { initPage: initPage, list: LIST };
})();
