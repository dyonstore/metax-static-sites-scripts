/* ==========================================================================
   FISCORA — Dynamic listing pages
   Runs after the shared shell is mounted (called by js/site.js).
   Handles: home grids, category hubs, library filtering, tools index,
   learning paths with saved progress, reading list, glossary search.
   ========================================================================== */

window.FiscoraPage = function (h) {
  const D = window.FiscoraData;
  const page = document.body.dataset.page;
  const card = h.postCard;
  const $ = s => document.querySelector(s);
  const readMap = h.store.get(h.LS.read, {});
  const savedList = h.store.get(h.LS.saved, []);

  const fill = (sel, html) => { const el = $(sel); if (el) el.innerHTML = html; };

  /* Titles and labels come from our own content graph, but these strings are
     concatenated into innerHTML, so they get escaped on principle rather than
     on trust — the graph is edited by hand and an unescaped quote would break
     the surrounding attribute silently. */
  const esc = s => String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

  /* Chrome translation, mirroring js/site.js. Falls back to the English
     literal so listings keep working with no locale pack loaded. */
  const tr = (key, en) => {
    const I = window.FiscoraI18N;
    if (!I || I.isDefault) return en;
    const v = I.t(key);
    return (v && v !== key) ? v : en;
  };
  const rtl = () => { const I = window.FiscoraI18N; return !!(I && I.dir === 'rtl'); };
  const arrow = () => 'fa-solid ' + (rtl() ? 'fa-arrow-left' : 'fa-arrow-right');
  /* Learning-path difficulty labels are data values, not UI keys. */
  const lvl = v => tr('level.' + String(v || '').toLowerCase(), v);

  /* ---------------------------------------------------------------- RESUME
     Returning-visitor hook (growth trick #5). Surfaces, in priority order:
       1. the next unread step of any path already begun but unfinished
       2. guides started in an earlier session but never finished
     The section stays hidden for a first-time visitor, so we never render an
     empty "welcome back" shelf to someone who has never been here. */
  function resumeCards() {
    const out = [];
    const seen = Object.create(null);

    /* 1 — paths in progress. */
    (window.PATHS || []).forEach(p => {
      const done = p.steps.filter(s => readMap[s]).length;
      if (!done || done >= p.steps.length) return;        /* untouched or finished */
      const next = p.steps.find(s => !readMap[s]);
      const sp = next && window.BY_SLUG[next];
      if (!sp || seen[next]) return;
      seen[next] = 1;
      const pct = Math.round((done / p.steps.length) * 100);
      out.push(
        '<article class="resume reveal">' +
          '<div class="resume__top">' +
            '<span class="chip chip--violet"><i class="fa-solid ' + p.icon + '"></i> ' + esc(p.title) + '</span>' +
            '<span class="tiny muted nowrap">' + done + ' ' + tr('path.of', 'of') + ' ' + p.steps.length + '</span>' +
          '</div>' +
          '<div class="bar-track"><div class="bar-fill" style="width:' + pct + '%"></div></div>' +
          '<h3 class="resume__title">' + esc(sp.title.split(':')[0]) + '</h3>' +
          '<p class="resume__meta tiny muted">Next step · ' + (sp.read || 0) + ' ' + tr('meta.min', 'min') + '</p>' +
          '<a class="btn btn--primary btn--sm" href="' + esc(next) + '">' +
            tr('path.resume', 'Resume path') + ' <i class="' + arrow() + '"></i></a>' +
        '</article>');
    });

    /* 2 — saved-but-unread guides, most recently saved first. */
    savedList.slice().reverse().forEach(slug => {
      if (out.length >= 3 || readMap[slug] || seen[slug]) return;
      const sp = window.BY_SLUG[slug];
      if (!sp) return;
      seen[slug] = 1;
      const c = (window.CATEGORIES || {})[sp.cat];
      out.push(
        '<article class="resume reveal">' +
          '<div class="resume__top">' +
            '<span class="chip"><i class="fa-regular fa-bookmark"></i> Saved for later</span>' +
            (c ? '<span class="tiny muted nowrap">' + esc(c.short || c.label) + '</span>' : '') +
          '</div>' +
          '<h3 class="resume__title">' + esc(sp.title.split(':')[0]) + '</h3>' +
          '<p class="resume__meta tiny muted">Not finished · ' + (sp.read || 0) + ' ' + tr('meta.min', 'min') + '</p>' +
          '<a class="btn btn--ghost btn--sm" href="' + esc(slug) + '">' +
            'Pick this up <i class="' + arrow() + '"></i></a>' +
        '</article>');
    });

    return out.slice(0, 3);
  }

  /* ------------------------------------------------------------------ HOME */
  if (page === 'home') {
    const arts = D.articles();

    const resume = resumeCards();
    if (resume.length) {
      fill('#resume-grid', resume.join(''));
      const sec = $('#resume-section');
      if (sec) sec.hidden = false;
    }

    const latest = arts.slice().sort((a, b) => (b.updated || '').localeCompare(a.updated || ''));
    fill('#lead-grid', latest.slice(0, 3).map(p => card(p)).join(''));
    fill('#pillar-grid', arts.filter(a => a.pillar).slice(0, 6).map(p => card(p)).join(''));
    fill('#tool-grid', D.tools().map(p => card(p)).join(''));

    fill('#path-grid', window.PATHS.map(p => {
      const done = p.steps.filter(s => readMap[s]).length;
      const pctDone = Math.round((done / p.steps.length) * 100);
      return '<article class="path-card reveal">' +
        '<div class="flex between"><span class="chip chip--violet"><i class="fa-solid ' + p.icon + '"></i> ' + lvl(p.level) + '</span>' +
        '<span class="tiny muted">' + p.steps.length + ' ' + tr('path.steps', 'steps') + ' · ' + p.steps.reduce((s, x) => s + ((window.BY_SLUG[x] || {}).read || 0), 0) + ' ' + tr('meta.min', 'min') + '</span></div>' +
        '<h3 style="font-size:1.2rem">' + p.title + '</h3>' +
        '<p class="small soft">' + p.blurb + '</p>' +
        '<div class="bar-track"><div class="bar-fill" style="width:' + pctDone + '%"></div></div>' +
        '<span class="tiny muted">' + done + ' ' + tr('path.of', 'of') + ' ' + p.steps.length + ' ' + tr('path.complete', 'complete') + '</span>' +
        '<a class="btn btn--ghost btn--sm" href="' + p.steps[Math.min(done, p.steps.length - 1)] + '">' +
        (done ? tr('path.resume', 'Resume path') : tr('path.start', 'Start path')) + ' <i class="' + arrow() + '"></i></a>' +
        '</article>';
    }).join(''));

    fill('#cat-strip', Object.values(window.CATEGORIES).filter(c => c.key !== 'tools').map(c => {
      const n = D.pagesIn(c.key).filter(p => p.type === 'article').length;
      return '<a class="card reveal" href="' + c.url + '">' +
        '<span class="card__icon"><i class="fa-solid ' + c.icon + '"></i></span>' +
        '<h3 style="font-size:1.08rem">' + c.label + '</h3>' +
        '<p>' + c.blurb + '</p>' +
        '<span class="chip mt-3">' + n + ' in-depth guides <i class="fa-solid fa-arrow-right"></i></span>' +
        '</a>';
    }).join(''));
  }

  /* ---------------------------------------------------------------- AUTHOR */
  if (document.getElementById('author-grid')) {
    const recent = D.articles().slice()
      .sort((a, b) => (b.updated || '').localeCompare(a.updated || ''))
      .slice(0, 6);
    fill('#author-grid', recent.map(p => card(p)).join(''));
  }

  /* ------------------------------------------------------------------- HUB */
  if (page === 'hub') {
    const cat = document.body.dataset.cat;
    const list = D.pagesIn(cat).filter(p => p.type === 'article');
    const feature = list.find(p => p.pillar) || list[0];
    const rest = list.filter(p => p !== feature);

    if (feature) {
      fill('#hub-feature',
        '<article class="post post--wide reveal">' +
          '<a class="post__art ' + feature.art + '" href="' + feature.slug + '"' +
            (feature.imgSrc ? ' style="--img:url(\'' + feature.imgSrc + '\')"' : '') +
            ' data-img="' + (feature.img || '') + '"><i class="fa-solid ' + feature.icon + '"></i></a>' +
          '<div class="post__body"><span class="chip chip--gold" style="align-self:flex-start">Start here</span>' +
          '<h3 style="font-size:1.45rem"><a href="' + feature.slug + '">' + feature.title + '</a></h3>' +
          '<p class="post__dek">' + feature.dek + '</p>' +
          '<div class="post__meta"><span><i class="fa-regular fa-clock"></i> ' + feature.read + ' min</span>' +
          '<span><i class="fa-regular fa-calendar"></i> ' + h.fmtDate(feature.updated) + '</span></div></div>' +
        '</article>');
    }
    fill('#hub-grid', rest.map(p => card(p)).join(''));

    const relTools = window.PAGES.filter(p => p.type === 'tool').filter(t =>
      (t.tags || []).some(tag => list.some(a => (a.tags || []).includes(tag))) ||
      (cat === 'investing' && /compound|retirement/.test(t.slug)) ||
      (cat === 'credit' && /mortgage|debt/.test(t.slug)) ||
      (cat === 'insurance' && /insurance/.test(t.slug))
    ).slice(0, 3);
    fill('#hub-tools', (relTools.length ? relTools : D.tools().slice(0, 3)).map(p => card(p)).join(''));

    const relPaths = window.PATHS.filter(p => p.steps.some(s => (window.BY_SLUG[s] || {}).cat === cat));
    fill('#hub-paths', relPaths.map(p =>
      '<a class="path-step reveal" href="' + p.steps[0] + '"><span class="path-step__n"><i class="fa-solid ' + p.icon + '" style="font-size:.62rem"></i></span>' +
      '<b>' + p.title + '</b><span class="tiny muted">· ' + p.steps.length + ' ' + tr('path.steps', 'steps') + '</span></a>').join(''));
  }

  /* --------------------------------------------------------------- LIBRARY */
  if (page === 'library') {
    const all = window.PAGES.filter(p => p.type === 'article' || p.type === 'tool');
    let state = { cat: 'all', sort: 'new', q: '', depth: 'all' };

    const render = () => {
      let list = all.slice();
      if (state.cat !== 'all') list = list.filter(p => p.cat === state.cat);
      if (state.depth === 'quick') list = list.filter(p => p.read <= 12);
      if (state.depth === 'deep') list = list.filter(p => p.read > 12);
      if (state.q) {
        const q = state.q.toLowerCase();
        list = list.filter(p => (p.title + p.dek + (p.tags || []).join(' ') + (p.kw || '')).toLowerCase().includes(q));
      }
      if (state.sort === 'new') list.sort((a, b) => (b.updated || '').localeCompare(a.updated || ''));
      if (state.sort === 'long') list.sort((a, b) => b.read - a.read);
      if (state.sort === 'az') list.sort((a, b) => a.title.localeCompare(b.title));
      fill('#lib-count', rtl()
        ? list.length + ' ' + tr('lib.results', 'results')
        : list.length + ' result' + (list.length === 1 ? '' : 's'));
      fill('#lib-grid', list.length ? list.map(p => card(p)).join('') :
        '<div class="empty-state" style="grid-column:1/-1"><i class="fa-solid fa-filter-circle-xmark"></i><p>' + tr('lib.empty', 'No guides match those filters yet.') + '</p></div>');
      if (window.FiscoraRevealRefresh) window.FiscoraRevealRefresh();
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-in'));
    };

    fill('#lib-filters',
      '<button class="chip is-active" data-f="cat" data-v="all">' + tr('lib.allTopics', 'All topics') + '</button>' +
      Object.values(window.CATEGORIES).map(c => '<button class="chip" data-f="cat" data-v="' + c.key + '"><i class="fa-solid ' + c.icon + '"></i> ' + c.short + '</button>').join(''));
    fill('#lib-depth',
      '<button class="chip is-active" data-f="depth" data-v="all">' + tr('lib.anyLength', 'Any length') + '</button>' +
      '<button class="chip" data-f="depth" data-v="quick"><i class="fa-solid fa-bolt"></i> ' + tr('lib.under12', 'Under 12 min') + '</button>' +
      '<button class="chip" data-f="depth" data-v="deep"><i class="fa-solid fa-book"></i> ' + tr('lib.deepDive', 'Deep dive') + '</button>');

    document.addEventListener('click', e => {
      const b = e.target.closest('[data-f]');
      if (!b) return;
      state[b.dataset.f] = b.dataset.v;
      document.querySelectorAll('[data-f="' + b.dataset.f + '"]').forEach(x => x.classList.toggle('is-active', x === b));
      render();
    });
    const q = $('#lib-search');
    if (q) q.addEventListener('input', () => { state.q = q.value; render(); });
    const s = $('#lib-sort');
    if (s) s.addEventListener('change', () => { state.sort = s.value; render(); });
    render();
  }

  /* ----------------------------------------------------------------- TOOLS */
  if (page === 'tools') {
    fill('#tools-grid', D.tools().map(p => card(p)).join(''));
    fill('#tools-related', D.articles().filter(a => a.pillar).slice(0, 3).map(p => card(p)).join(''));
  }

  /* ------------------------------------------------------------ MYTH AUDIT */
  if (page === 'myth-audit' && window.FiscoraMythAudit) {
    window.FiscoraMythAudit.init();
  }

  /* ------------------------------------------------------- DECISION GUIDES */
  if (page === 'decide' && window.FiscoraRouters_engine) {
    window.FiscoraRouters_engine.initPage();
  }

  /* ----------------------------------------------------------------- PATHS */
  if (page === 'paths') {
    fill('#paths-grid', window.PATHS.map(p => {
      const done = p.steps.filter(s => readMap[s]).length;
      const mins = p.steps.reduce((s, x) => s + ((window.BY_SLUG[x] || {}).read || 0), 0);
      return '<article class="path-card reveal">' +
        '<div class="flex between"><span class="chip chip--violet"><i class="fa-solid ' + p.icon + '"></i> ' + lvl(p.level) + '</span>' +
        '<span class="tiny muted">' + p.steps.length + ' ' + tr('path.steps', 'steps') + ' · ' + mins + ' ' + tr('path.minTotal', 'min total') + '</span></div>' +
        '<h3>' + p.title + '</h3><p class="soft">' + p.blurb + '</p>' +
        '<div class="bar-track"><div class="bar-fill" style="width:' + Math.round((done / p.steps.length) * 100) + '%"></div></div>' +
        '<span class="tiny muted">' + done + ' ' + tr('path.of', 'of') + ' ' + p.steps.length + ' ' + tr('path.complete', 'complete') + '</span>' +
        '<div class="path-card__steps">' + p.steps.map((s, i) => {
          const sp = window.BY_SLUG[s] || { title: s, read: 0 };
          return '<div class="path-step' + (readMap[s] ? ' is-done' : '') + '">' +
            '<span class="path-step__n">' + (readMap[s] ? '<i class="fa-solid fa-check" style="font-size:.6rem"></i>' : (i + 1)) + '</span>' +
            '<a href="' + s + '">' + sp.title + '</a><span class="tiny muted nowrap">' + sp.read + ' ' + tr('meta.min', 'min') + '</span></div>';
        }).join('') + '</div>' +
        '<a class="btn btn--primary btn--sm" href="' + p.steps[Math.min(done, p.steps.length - 1)] + '">' + (done ? tr('path.resumeLong', 'Resume where you left off') : tr('path.begin', 'Begin step 1')) + ' <i class="' + arrow() + '"></i></a>' +
        '</article>';
    }).join(''));
  }

  /* ------------------------------------------------------------ READING LIST */
  if (page === 'saved') {
    const saved = savedList.map(s => window.BY_SLUG[s]).filter(Boolean);
    fill('#saved-grid', saved.length ? saved.map(p => card(p)).join('') :
      '<div class="empty-state" style="grid-column:1/-1"><i class="fa-regular fa-bookmark"></i><p>' + tr('saved.empty', 'Nothing saved yet. Tap <b>Save</b> on any guide and it lands here — your list stays on this device.') + '</p><a class="btn btn--primary btn--sm mt-3" href="library.html">' + tr('saved.browse', 'Browse the library') + '</a></div>');

    const read = Object.keys(readMap).map(s => window.BY_SLUG[s]).filter(Boolean)
      .sort((a, b) => readMap[b.slug] - readMap[a.slug]);
    fill('#read-grid', read.length ? read.slice(0, 9).map(p => card(p, { noDek: true })).join('') :
      '<div class="empty-state" style="grid-column:1/-1"><i class="fa-solid fa-glasses"></i><p>' + tr('saved.noHistory', 'Your reading history will appear here once you finish a guide.') + '</p></div>');

    const totalMin = read.reduce((s, p) => s + p.read, 0);
    fill('#saved-stats',
      '<div><b>' + read.length + '</b><span>' + tr('saved.completed', 'Guides completed') + '</span></div>' +
      '<div><b>' + totalMin + '</b><span>' + tr('saved.minutes', 'Minutes invested') + '</span></div>' +
      '<div><b>' + savedList.length + '</b><span>' + tr('saved.forLater', 'Saved for later') + '</span></div>' +
      '<div><b>' + window.PATHS.filter(p => p.steps.every(s => readMap[s])).length + '</b><span>' + tr('saved.pathsDone', 'Paths finished') + '</span></div>');

    fill('#saved-paths', window.PATHS.map(p => {
      const done = p.steps.filter(s => readMap[s]).length;
      return '<div class="mb-3"><div class="flex between"><b class="small">' + p.title + '</b><span class="tiny muted">' + done + '/' + p.steps.length + '</span></div>' +
        '<div class="bar-track mt-1"><div class="bar-fill" style="width:' + Math.round(done / p.steps.length * 100) + '%"></div></div></div>';
    }).join(''));

    const clear = $('#clear-saved');
    if (clear) clear.addEventListener('click', () => {
      h.store.set(h.LS.saved, []);
      location.reload();
    });
  }

  /* -------------------------------------------------------------- GLOSSARY */
  if (page === 'glossary') {
    const terms = (window.GLOSSARY || []).slice().sort((a, b) => a.t.localeCompare(b.t));
    let filter = { q: '', c: 'all', letter: 'all' };

    const letters = Array.from(new Set(terms.map(t => t.t[0].toUpperCase()))).sort();
    fill('#gloss-letters', '<button class="chip is-active" data-g="letter" data-v="all">' + tr('gloss.all', 'All') + '</button>' +
      letters.map(l => '<button class="chip" data-g="letter" data-v="' + l + '">' + l + '</button>').join(''));
    fill('#gloss-cats', '<button class="chip is-active" data-g="c" data-v="all">' + tr('gloss.everyTopic', 'Every topic') + '</button>' +
      Object.values(window.CATEGORIES).filter(c => c.key !== 'tools').map(c =>
        '<button class="chip" data-g="c" data-v="' + c.key + '"><i class="fa-solid ' + c.icon + '"></i> ' + c.short + '</button>').join(''));

    const render = () => {
      let list = terms;
      if (filter.c !== 'all') list = list.filter(t => t.c === filter.c);
      if (filter.letter !== 'all') list = list.filter(t => t.t[0].toUpperCase() === filter.letter);
      if (filter.q) {
        const q = filter.q.toLowerCase();
        list = list.filter(t => (t.t + ' ' + t.d).toLowerCase().includes(q));
      }
      fill('#gloss-count', list.length + ' ' + tr('path.of', 'of') + ' ' + terms.length + ' ' + tr('gloss.terms', 'terms'));
      fill('#gloss-list', list.length ? list.map(t => {
        const c = window.CATEGORIES[t.c] || window.CATEGORIES.tools;
        return '<div class="glossary-item" id="term-' + t.t.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '">' +
          '<div class="flex between"><h3>' + t.t + '</h3><a class="chip" href="' + c.url + '"><i class="fa-solid ' + c.icon + '"></i> ' + c.short + '</a></div>' +
          '<p>' + t.d + '</p>' +
          (t.l ? '<a class="chip chip--brand mt-2" href="' + t.l + '">' + tr('gloss.fullGuide', 'Full guide') + ' <i class="' + arrow() + '"></i></a>' : '') +
          '</div>';
      }).join('') : '<div class="empty-state"><i class="fa-solid fa-magnifying-glass"></i><p>No term matches that search.</p></div>');
    };

    document.addEventListener('click', e => {
      const b = e.target.closest('[data-g]');
      if (!b) return;
      filter[b.dataset.g] = b.dataset.v;
      document.querySelectorAll('[data-g="' + b.dataset.g + '"]').forEach(x => x.classList.toggle('is-active', x === b));
      render();
    });
    const gs = $('#gloss-search');
    if (gs) gs.addEventListener('input', () => { filter.q = gs.value; render(); });
    render();
  }

  /* re-observe newly injected reveal elements */
  const io = new IntersectionObserver(en => en.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
  }), { rootMargin: '0px 0px -6% 0px' });
  document.querySelectorAll('.reveal:not(.is-in)').forEach(el => io.observe(el));
};
