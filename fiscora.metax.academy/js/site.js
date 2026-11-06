/* ==========================================================================
   FISCORA — Shared application shell
   Injects identical chrome on all 43 pages: header, mega-nav, search,
   footer, reading progress, sticky TOC, recirculation, saved-list,
   learning-path progress, consent bar, table-API forms.
   ========================================================================== */

(function () {
  'use strict';

  const LS = {
    theme: 'fisc_theme',
    saved: 'fisc_saved',
    read: 'fisc_read',
    react: 'fisc_react',
    session: 'fisc_session_pages'
  };

  const slugOf = () => {
    const f = location.pathname.split('/').pop();
    return (!f || f === '') ? 'index.html' : f;
  };
  const SLUG = slugOf();
  const PAGE = (window.BY_SLUG || {})[SLUG] || null;
  const D = window.FiscoraData || {};

  const store = {
    get(k, fb) { try { return JSON.parse(localStorage.getItem(k)) ?? fb; } catch (e) { return fb; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };

  /* Chrome translation. Falls back to the English literal passed in, so the
     shell keeps working if no locale pack is loaded. */
  function tr(key, en) {
    const I = window.FiscoraI18N;
    if (!I || I.isDefault) return en;
    const v = I.t(key);
    return (v && v !== key) ? v : en;
  }
  const isRTL = () => {
    const I = window.FiscoraI18N;
    return !!(I && I.dir === 'rtl');
  };

  /* ------------------------------------------------------------------ theme */
  function initTheme() {
    const saved = localStorage.getItem(LS.theme);
    if (saved === 'light') document.documentElement.setAttribute('data-theme', 'light');
  }
  function toggleTheme() {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    if (isLight) { document.documentElement.removeAttribute('data-theme'); localStorage.setItem(LS.theme, 'dark'); }
    else { document.documentElement.setAttribute('data-theme', 'light'); localStorage.setItem(LS.theme, 'light'); }
  }

  /* ----------------------------------------------------------------- header */
  function navLink(url, label) {
    const active = SLUG === url ? ' class="is-active"' : '';
    return '<a href="' + url + '"' + active + '>' + label + '</a>';
  }

  function headerHTML() {
    const megaItems = [
      ['real-estate.html', 'fa-building', 'Real Estate & Property', 'Rent vs buy, HELOCs, rental yield'],
      ['banking-and-cash.html', 'fa-piggy-bank', 'Banking & Cash', 'HYSA, CD ladders, T-bills'],
      ['career-and-income.html', 'fa-briefcase', 'Career & Income', 'Salary, RSUs, freelance rates'],
      ['retirement-planning.html', 'fa-umbrella-beach', 'Retirement & Estate', 'Social Security, Medicare, estates'],
      ['education-and-family.html', 'fa-graduation-cap', 'Education & Family', '529s, FAFSA, childcare costs'],
      ['business-growth.html', 'fa-rocket', 'Business & SaaS', 'Pricing, margin, unit economics'],
      ['marketing.html', 'fa-bullhorn', 'Growth Marketing', 'CPC, content, lifecycle email'],
      ['tax-and-legal.html', 'fa-scale-balanced', 'Tax & Legal', 'Entity choice and deductions'],
      ['ai-and-automation-costs.html', 'fa-microchip', 'AI & Automation', 'Token maths, agent ROI, build vs buy'],
      ['cyber-and-digital-risk.html', 'fa-user-shield', 'Cyber & Digital Risk', 'Breach cost, cyber cover, fraud rules'],
      ['health-and-medical-money.html', 'fa-notes-medical', 'Health & Medical Money', 'HSAs, bill negotiation, cash pricing'],
      ['energy-and-home-tech.html', 'fa-bolt', 'Energy & Home', 'Solar payback, heat pumps, EV costs'],
      ['private-markets-and-alternatives.html', 'fa-vault', 'Private Markets', 'Private credit, fees, lock-ups'],
      ['crypto-and-digital-assets.html', 'fa-link', 'Digital Assets', 'Stablecoins, custody, crypto tax'],
      ['global-and-expat-money.html', 'fa-earth-americas', 'Global & Expat', 'Cross-border tax, FX, expat cover'],
      ['freelance-and-creator-finance.html', 'fa-pen-nib', 'Freelance & Creator', 'Quarterly tax, solo 401(k), entities'],
      ['tools.html', 'fa-calculator', 'Calculators', 'Interactive financial models'],
      ['learning-paths.html', 'fa-route', 'Learning Paths', 'Sequenced reading tracks'],
      ['myth-audit.html', 'fa-scale-unbalanced', 'The Myth Audit', 'Advice, and where it breaks'],
      ['decide.html', 'fa-diagram-project', 'Decision Guides', 'Answer a few questions, get an answer'],
      ['glossary.html', 'fa-spell-check', 'Glossary', '90+ terms in plain language']
    ].filter(i => {
      /* The publish guard removes desks with no published articles; the
         mega-menu must not keep linking them. Non-category destinations
         (tools, paths, glossary) always stay. */
      const cats = window.CATEGORIES || {};
      const isCat = ['real-estate.html', 'banking-and-cash.html', 'career-and-income.html',
                     'retirement-planning.html', 'education-and-family.html',
                     'business-growth.html', 'marketing.html', 'tax-and-legal.html',
                     'ai-and-automation-costs.html', 'cyber-and-digital-risk.html',
                     'health-and-medical-money.html', 'energy-and-home-tech.html',
                     'private-markets-and-alternatives.html', 'crypto-and-digital-assets.html',
                     'global-and-expat-money.html', 'freelance-and-creator-finance.html'].includes(i[0]);
      if (!isCat) return true;
      return Object.values(cats).some(c => c.url === i[0]);
    }).map(i =>
      '<a href="' + i[0] + '"><i class="fa-solid ' + i[1] + '"></i><span>' + i[2] + '<em>' + i[3] + '</em></span></a>'
    ).join('');

    return '' +
      '<div class="wrap site-header__bar">' +
        '<a class="brand" href="index.html" aria-label="Fiscora home">' +
          '<span class="brand__mark"><i class="fa-solid fa-bolt"></i></span>' +
          '<span>Fiscora<small>' + tr('brand.tagline', 'Money · Risk · Growth') + '</small></span>' +
        '</a>' +
        '<nav class="nav" aria-label="Primary">' +
          navLink('investing.html', tr('nav.investing', 'Investing')) +
          navLink('insurance.html', tr('nav.insurance', 'Insurance')) +
          navLink('credit-and-debt.html', tr('nav.credit', 'Credit & Debt')) +
          navLink('library.html', tr('nav.library', 'Library')) +
          '<span class="nav__group"><a href="tools.html" aria-haspopup="true">' + tr('nav.more', 'More') + ' <i class="fa-solid fa-chevron-down" style="font-size:.6rem"></i></a>' +
            '<span class="nav__panel">' + megaItems + '</span>' +
          '</span>' +
        '</nav>' +
        '<div class="header-actions">' +
          '<button class="icon-btn" id="search-open" aria-label="' + tr('a11y.search', 'Search (press /)') + '"><i class="fa-solid fa-magnifying-glass"></i></button>' +
          '<a class="icon-btn" href="reading-list.html" aria-label="' + tr('a11y.savedList', 'Your reading list') + '"><i class="fa-regular fa-bookmark"></i></a>' +
          '<span data-lang-switch></span>' +
          '<button class="icon-btn" id="theme-toggle" aria-label="' + tr('a11y.theme', 'Toggle colour theme') + '"><i class="fa-solid fa-circle-half-stroke"></i></button>' +
          '<a class="btn btn--primary btn--sm desktop-only" href="#newsletter"><i class="fa-solid fa-envelope"></i> ' + tr('nav.newsletter', 'Newsletter') + '</a>' +
          '<button class="icon-btn burger" id="burger" aria-label="' + tr('a11y.menu', 'Menu') + '" aria-expanded="false"><i class="fa-solid fa-bars"></i></button>' +
        '</div>' +
      '</div>' +
      '<div class="wrap"><div class="mobile-nav" id="mobile-nav">' +
        '<span class="mn-label">' + tr('nav.topics', 'Topics') + '</span>' +
        Object.values(window.CATEGORIES).map(c => '<a href="' + c.url + '"><i class="fa-solid ' + c.icon + '" style="width:20px;color:var(--brand-2)"></i> ' + c.label + '</a>').join('') +
        '<span class="mn-label">' + tr('nav.explore', 'Explore') + '</span>' +
        '<a href="library.html"><i class="fa-solid fa-book-open" style="width:20px;color:var(--brand-2)"></i> ' + tr('nav.fullLibrary', 'Full library') + '</a>' +
        '<a href="learning-paths.html"><i class="fa-solid fa-route" style="width:20px;color:var(--brand-2)"></i> ' + tr('nav.paths', 'Learning paths') + '</a>' +
        '<a href="myth-audit.html"><i class="fa-solid fa-scale-unbalanced" style="width:20px;color:var(--brand-2)"></i> ' + tr('nav.mythAudit', 'The Myth Audit') + '</a>' +
        '<a href="decide.html"><i class="fa-solid fa-diagram-project" style="width:20px;color:var(--brand-2)"></i> ' + tr('nav.decide', 'Decision guides') + '</a>' +
        '<a href="glossary.html"><i class="fa-solid fa-spell-check" style="width:20px;color:var(--brand-2)"></i> ' + tr('nav.glossary', 'Glossary') + '</a>' +
        '<a href="reading-list.html"><i class="fa-regular fa-bookmark" style="width:20px;color:var(--brand-2)"></i> ' + tr('nav.savedList', 'Reading list') + '</a>' +
        '<a href="about.html"><i class="fa-solid fa-users" style="width:20px;color:var(--brand-2)"></i> ' + tr('nav.about', 'About') + '</a>' +
      '</div></div>';
  }

  function footerHTML() {
    const cats = Object.values(window.CATEGORIES).filter(c => c.key !== 'tools')
      .map(c => '<li><a href="' + c.url + '">' + c.label + '</a></li>').join('');
    const toolLinks = (D.tools ? D.tools() : []).map(t => '<li><a href="' + t.slug + '">' + t.title.replace(' Calculator', '').replace(' & Contribution', '') + '</a></li>').join('');
    const year = new Date().getFullYear();
    return '' +
      '<div class="wrap">' +
        '<div class="footer-grid">' +
          '<div class="footer-col">' +
            '<a class="brand" href="index.html"><span class="brand__mark"><i class="fa-solid fa-bolt"></i></span><span>Fiscora<small>' + tr('brand.tagline', 'Money · Risk · Growth') + '</small></span></a>' +
            '<p class="small soft mt-2" style="max-width:38ch">' + tr('footer.blurb', 'Independent research on money, risk and business growth. Every model is published with its assumptions so you can pressure-test it yourself.') + '</p>' +
            '<div class="social mt-3">' +
              '<a href="#" aria-label="X"><i class="fa-brands fa-x-twitter"></i></a>' +
              '<a href="#" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>' +
              '<a href="#" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>' +
              '<a href="#" aria-label="RSS"><i class="fa-solid fa-rss"></i></a>' +
            '</div>' +
          '</div>' +
          '<div class="footer-col"><h5>' + tr('nav.topics', 'Topics') + '</h5><ul>' + cats + '</ul></div>' +
          '<div class="footer-col"><h5>' + tr('nav.tools', 'Calculators') + '</h5><ul>' + toolLinks + '</ul></div>' +
          '<div class="footer-col"><h5>' + tr('footer.company', 'Publication') + '</h5><ul>' +
            '<li><a href="myth-audit.html">' + tr('footer.mythAudit', 'The Myth Audit') + '</a></li>' +
            '<li><a href="decide.html">' + tr('footer.decide', 'Decision guides') + '</a></li>' +
            '<li><a href="about.html">' + tr('footer.about', 'About Fiscora') + '</a></li>' +
            '<li><a href="author-maher.html">' + tr('footer.author', 'Who writes this') + '</a></li>' +
            '<li><a href="editorial-policy.html">' + tr('footer.editorial', 'Editorial policy') + '</a></li>' +
            '<li><a href="part-h-statement.html">' + tr('footer.parth', 'Part H Statement') + '</a></li>' +
            '<li><a href="advertise.html">' + tr('footer.advertise', 'Advertise / media kit') + '</a></li>' +
            '<li><a href="contact.html">' + tr('footer.contact', 'Contact') + '</a></li>' +
            '<li><a href="privacy.html">' + tr('footer.privacy', 'Privacy &amp; cookies') + '</a></li>' +
            '<li><a href="terms.html">' + tr('footer.terms', 'Terms &amp; disclaimer') + '</a></li>' +
          '</ul></div>' +
        '</div>' +
        '<div class="footer-bottom">' +
          '<span>© ' + year + ' Fiscora · ' + tr('footer.parent', 'published by MetaX.Academy') + '. ' + tr('footer.disclaimer', 'Educational information only — not individualised financial, tax, legal or insurance advice.') + '</span>' +
          '<span class="flex" style="gap:14px"><a href="privacy.html">' + tr('footer.privacyShort', 'Privacy') + '</a><a href="terms.html">' + tr('footer.termsShort', 'Terms') + '</a><button class="chip" id="consent-reopen" type="button">' + tr('footer.adPrefs', 'Ad preferences') + '</button></span>' +
        '</div>' +
      '</div>';
  }

  /* ------------------------------------------------------------- components */
  /* Single real author. Legacy keys (ln, mr, ab, …) all alias to the same
     record in site-data.js, and the fallback is that record rather than an
     invented analyst, so no fabricated byline can ever reach the page. */
  function author(p) {
    const A = window.AUTHORS || {};
    return A[(p && p.author) || ''] || A.maher ||
      { name: 'Maher', initials: 'M', role: 'Founder & Editor, Fiscora', url: 'author-maher.html', bio: '' };
  }

  function postCard(p, opts) {
    opts = opts || {};
    const c = window.CATEGORIES[p.cat] || window.CATEGORIES.tools;
    const isTool = p.type === 'tool';
    /* Indexed card art: img/hero-NN.jpg layered over the gradient class, so a
       not-yet-generated image simply shows the gradient it always did. */
    const art = p.imgSrc ? ' style="--img:url(\'' + p.imgSrc + '\')"' : '';
    return '' +
      '<article class="post reveal">' +
        '<a class="post__art ' + (p.art || 'art-1') + '" href="' + p.slug + '"' + art +
          ' data-img="' + (p.img || '') + '" aria-label="' + p.title.replace(/"/g, '') + '">' +
          '<span class="chip post__cat">' + (isTool ? tr('card.tool', 'Calculator') : c.short) + '</span>' +
          '<i class="fa-solid ' + (p.icon || c.icon) + '"></i>' +
        '</a>' +
        '<div class="post__body">' +
          '<h3><a href="' + p.slug + '">' + p.title + '</a></h3>' +
          (opts.noDek ? '' : '<p class="post__dek">' + p.dek + '</p>') +
          '<div class="post__meta">' +
            '<span><i class="fa-regular fa-clock"></i> ' + p.read + ' ' + tr('meta.min', 'min') + '</span>' +
            '<span><i class="fa-regular fa-calendar"></i> ' + fmtDate(p.updated) + '</span>' +
            (p.pillar ? '<span class="chip chip--gold tiny">' + tr('card.pillar', 'Pillar') + '</span>' : '') +
          '</div>' +
        '</div>' +
      '</article>';
  }

  function fmtDate(iso) {
    if (!iso) return '';
    const d = new Date(iso + 'T00:00:00');
    const I = window.FiscoraI18N;
    /* Arabic readers get Arabic month names; digits stay Western so the
       numerals match the calculators elsewhere on the page. */
    const loc = (I && !I.isDefault) ? I.lang + '-u-nu-latn' : 'en-US';
    try {
      return d.toLocaleDateString(loc, { month: 'short', day: 'numeric', year: 'numeric' });
    } catch (e) {
      return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    }
  }

  function bylineHTML(p) {
    const a = author(p);
    const inPath = D.pathFor ? D.pathFor(p.slug) : null;
    return '' +
      '<a class="avatar" href="' + a.url + '" aria-label="' + a.name + ' — author profile">' + a.initials + '</a>' +
      '<span>' + tr('meta.by', 'By') + ' <b><a href="' + a.url + '" rel="author">' + a.name + '</a></b>' +
      '<br><span class="tiny">' + a.role + '</span></span>' +
      '<span class="dot">' + tr('meta.updated', 'Updated') + ' ' + fmtDate(p.updated) + '</span>' +
      '<span class="dot">' + p.read + ' ' + tr('meta.minRead', 'min read') + '</span>' +
      (inPath ? '<span class="chip chip--violet"><i class="fa-solid fa-route"></i> ' + inPath.path.title + ' · ' + tr('meta.step', 'step') + ' ' + (inPath.index + 1) + '/' + inPath.path.steps.length + '</span>' : '') +
      '<span style="flex:1"></span>' +
      '<button class="chip" id="save-btn" type="button"><i class="fa-regular fa-bookmark"></i> <span>' + tr('save.add', 'Save') + '</span></button>' +
      '<button class="chip" id="share-btn" type="button"><i class="fa-solid fa-share-nodes"></i> ' + tr('share.label', 'Share') + '</button>';
  }

  function crumbsHTML(p) {
    const c = window.CATEGORIES[p.cat] || window.CATEGORIES.tools;
    const chev = isRTL() ? 'fa-chevron-left' : 'fa-chevron-right';
    return '<a href="index.html">' + tr('nav.home', 'Home') + '</a><i class="fa-solid ' + chev + '"></i>' +
      '<a href="' + c.url + '">' + c.label + '</a><i class="fa-solid ' + chev + '"></i>' +
      '<span>' + (p.shortTitle || p.title.split(':')[0]) + '</span>';
  }

  /* ------------------------------------------------------------------- rail */
  function railHTML(p) {
    const inPath = D.pathFor ? D.pathFor(p.slug) : null;
    const readMap = store.get(LS.read, {});
    let pathBox = '';
    if (inPath) {
      const steps = inPath.path.steps.map((s, i) => {
        const sp = window.BY_SLUG[s] || { title: s, slug: s };
        const done = !!readMap[s];
        return '<div class="path-step' + (done ? ' is-done' : '') + '">' +
          '<span class="path-step__n">' + (done ? '<i class="fa-solid fa-check" style="font-size:.6rem"></i>' : (i + 1)) + '</span>' +
          (s === p.slug ? '<b style="font-size:.86rem">' + sp.title.split(':')[0] + '</b>' : '<a href="' + s + '">' + sp.title.split(':')[0] + '</a>') +
          '</div>';
      }).join('');
      pathBox = '<div class="rail-box"><h4><i class="fa-solid fa-route"></i> ' + inPath.path.title + '</h4><div class="path-card__steps">' + steps + '</div>' +
        '<a class="btn btn--ghost btn--sm btn--block mt-3" href="learning-paths.html">' + tr('nav.paths', 'All learning paths') + '</a></div>';
    }

    const popular = (D.articles ? D.articles().filter(a => a.pillar && a.slug !== p.slug).slice(0, 5) : []);
    const popularBox = '<div class="rail-box"><h4><i class="fa-solid fa-fire"></i> ' + tr('rail.mostRead', 'Most read this week') + '</h4>' +
      popular.map((a, i) => '<div class="post--row"><span class="rank">' + (i + 1) + '</span><div><h4><a href="' + a.slug + '">' + a.title.split(':')[0] + '</a></h4><span class="tiny muted">' + a.read + ' ' + tr('meta.min', 'min') + ' · ' + (window.CATEGORIES[a.cat] || {}).short + '</span></div></div>').join('') +
      '</div>';

    const toolBox = (function () {
      const t = (D.relatedTo ? D.relatedTo(p.slug, 6).filter(x => x.type === 'tool') : []).slice(0, 1)[0] ||
        (D.tools ? D.tools()[0] : null);
      if (!t) return '';
      return '<div class="rail-box" style="background:linear-gradient(160deg,rgba(35,213,192,.12),rgba(91,124,250,.06))">' +
        '<h4><i class="fa-solid fa-calculator"></i> ' + tr('rail.runNumbers', 'Run the numbers') + '</h4>' +
        '<p class="small soft">' + t.dek + '</p>' +
        '<a class="btn btn--primary btn--sm btn--block mt-3" href="' + t.slug + '">' + tr('rail.openTool', 'Open calculator') + ' <i class="fa-solid ' + (isRTL() ? 'fa-arrow-left' : 'fa-arrow-right') + '"></i></a></div>';
    })();

    const news = '<div class="rail-box"><h4><i class="fa-solid fa-envelope-open-text"></i> ' + tr('news.brief', 'The Friday Brief') + '</h4>' +
      '<p class="small soft">' + tr('news.blurb', 'One deep-dive, three numbers that matter, zero hype.') + '</p>' +
      '<form class="mt-3 subscribe" data-subscribe><input type="email" required placeholder="' + tr('news.email', 'you@example.com') + '" aria-label="' + tr('news.email', 'Email address') + '">' +
      '<button class="btn btn--primary btn--block" type="submit">' + tr('news.submit', 'Get the brief') + '</button></form>' +
      '<div class="form-msg" data-msg></div><p class="form-note">' + tr('footer.disclaimer2', 'No spam. Unsubscribe in one click.') + '</p></div>';

    return '<div class="rail-box rail-box--toc"><h4><i class="fa-solid fa-list-ul"></i> ' + tr('toc.title', 'On this page') + '</h4><ul class="toc" id="toc"></ul>' +
      '<div class="mt-3 tiny muted" id="read-left"></div></div>' +
      '<div data-ad="rail"></div>' + pathBox + toolBox + news + popularBox;
  }

  /* ---------------------------------------------------------- recirculation */
  function recircHTML(p) {
    const nx = D.nextFor ? D.nextFor(p.slug) : null;
    const rel = D.relatedTo ? D.relatedTo(p.slug, 3) : [];
    const a = author(p);
    let html = '';

    if (nx && nx.page) {
      html += '<div class="next-up reveal">' +
        '<div class="next-up__txt"><span class="eyebrow">' + nx.reason + '</span>' +
        '<h3>' + nx.page.title + '</h3><p class="soft small">' + nx.page.dek + '</p></div>' +
        '<a class="btn btn--primary" href="' + nx.page.slug + '">' + tr('recirc.continue', 'Continue') + ' <i class="fa-solid ' + (isRTL() ? 'fa-arrow-left' : 'fa-arrow-right') + '"></i></a>' +
        '</div>';
    }

    html += '<div class="author-box mt-4"><a class="avatar" href="' + a.url + '">' + a.initials + '</a>' +
      '<div><b class="mono small"><a href="' + a.url + '" rel="author">' + a.name + '</a></b><span class="tiny muted"> · ' + a.role + '</span>' +
      '<p>' + a.bio + '</p>' +
      '<p class="tiny muted mt-1">' + tr('author.reviewed', 'Reviewed against our editorial policy. Educational information, not individual advice.') + '</p></div></div>';

    html += '<div class="mt-4"><span class="eyebrow">' + tr('react.prompt', 'Was this useful?') + '</span>' +
      '<div class="reactions mt-2" data-reactions>' +
      '<button class="react-btn" data-react="clear"><i class="fa-regular fa-thumbs-up"></i> ' + tr('react.clear', 'Clear and useful') + ' <b data-count="clear"></b></button>' +
      '<button class="react-btn" data-react="deep"><i class="fa-solid fa-brain"></i> ' + tr('react.deep', 'Made me rethink') + ' <b data-count="deep"></b></button>' +
      '<button class="react-btn" data-react="more"><i class="fa-solid fa-magnifying-glass-plus"></i> ' + tr('react.more', 'Want more depth') + ' <b data-count="more"></b></button>' +
      '</div><div class="form-msg" data-msg></div></div>';

    html += '<div data-ad="multiplex" class="mt-4"></div>';

    html += '<div class="mt-4"><div class="section-head" style="margin-bottom:20px"><span class="eyebrow">' + tr('recirc.keepGoing', 'Keep going') + '</span><h2 style="font-size:1.6rem;margin:10px 0 0">' + tr('recirc.related', 'Related research') + '</h2></div>' +
      '<div class="grid g-3">' + rel.map(r => postCard(r)).join('') + '</div></div>';

    return html;
  }

  /* ----------------------------------------------------------------- search */
  function buildSearch() {
    const el = document.createElement('div');
    el.className = 'search-overlay';
    el.id = 'search-overlay';
    el.innerHTML = '<div class="search-panel">' +
      '<div class="search-panel__top"><i class="fa-solid fa-magnifying-glass"></i>' +
      '<input type="text" id="search-input" placeholder="Search 43 pages: guides, calculators, glossary…" aria-label="Search"></div>' +
      '<div class="search-results" id="search-results"></div>' +
      '<div class="search-hint"><span><kbd>↑</kbd><kbd>↓</kbd> navigate</span><span><kbd>enter</kbd> open</span><span><kbd>esc</kbd> close</span></div>' +
      '</div>';
    document.body.appendChild(el);

    const input = el.querySelector('#search-input');
    const out = el.querySelector('#search-results');
    let cursor = 0;

    function render(q) {
      const term = q.trim().toLowerCase();
      let list;
      if (!term) {
        list = (D.articles ? D.articles().filter(a => a.pillar) : []).slice(0, 6);
      } else {
        list = window.PAGES.map(p => {
          const hay = (p.title + ' ' + (p.dek || '') + ' ' + (p.tags || []).join(' ') + ' ' + (p.kw || '')).toLowerCase();
          let s = 0;
          if (p.title.toLowerCase().includes(term)) s += 10;
          term.split(/\s+/).forEach(w => { if (w && hay.includes(w)) s += 3; });
          return { p, s };
        }).filter(x => x.s > 0).sort((a, b) => b.s - a.s).slice(0, 8).map(x => x.p);
      }
      cursor = 0;
      if (!list.length) {
        out.innerHTML = '<div class="empty-state" style="padding:34px"><i class="fa-solid fa-ghost"></i><p class="small">Nothing matched. Try “mortgage”, “ETF”, “deduction” or “CPC”.</p></div>';
        return;
      }
      out.innerHTML = list.map((p, i) => {
        const c = window.CATEGORIES[p.cat] || window.CATEGORIES.tools;
        return '<a href="' + p.slug + '" class="' + (i === 0 ? 'is-cursor' : '') + '">' +
          '<span class="card__icon" style="width:36px;height:36px;margin:0;border-radius:11px"><i class="fa-solid ' + (p.icon || c.icon) + '"></i></span>' +
          '<span><b>' + p.title + '</b><em>' + c.label + ' · ' + p.read + ' min</em></span></a>';
      }).join('');
    }

    function open() { el.classList.add('is-open'); input.value = ''; render(''); setTimeout(() => input.focus(), 30); }
    function close() { el.classList.remove('is-open'); }

    input.addEventListener('input', () => render(input.value));
    el.addEventListener('click', e => { if (e.target === el) close(); });
    document.addEventListener('keydown', e => {
      const open$ = el.classList.contains('is-open');
      if (!open$ && (e.key === '/' || ((e.metaKey || e.ctrlKey) && e.key === 'k'))) {
        if (/input|textarea|select/i.test((e.target.tagName || ''))) return;
        e.preventDefault(); open(); return;
      }
      if (!open$) return;
      const items = Array.from(out.querySelectorAll('a'));
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        cursor = Math.max(0, Math.min(items.length - 1, cursor + (e.key === 'ArrowDown' ? 1 : -1)));
        items.forEach((it, i) => it.classList.toggle('is-cursor', i === cursor));
        if (items[cursor]) items[cursor].scrollIntoView({ block: 'nearest' });
      }
      if (e.key === 'Enter' && items[cursor]) location.href = items[cursor].getAttribute('href');
    });
    document.addEventListener('click', e => {
      if (e.target.closest('#search-open')) open();
    });
  }

  /* ------------------------------------------------------ freshness ledger
     Growth trick #4. The library deliberately avoids printing volatile
     figures (rates, contribution limits, statutory thresholds) so pages stay
     durable. That editorial choice is invisible to a reader, who cannot tell
     "omitted on purpose" from "out of date". This states it explicitly, and
     turns the annual re-check cycle into a reason to return.

     Placed at the END of the article body rather than the top: it is a
     verification note, not a warning about the content that follows. */
  function freshnessHTML(p) {
    const verified = fmtDate(p.updated);
    const c = window.CATEGORIES[p.cat] || {};
    return '<aside class="freshness" aria-labelledby="freshness-heading">' +
      '<div class="freshness__head">' +
        '<i class="fa-solid fa-rotate"></i>' +
        '<h2 id="freshness-heading">Freshness and what we deliberately left out</h2>' +
      '</div>' +
      '<p class="freshness__body">This guide avoids printing specific rates, contribution limits and ' +
        'statutory thresholds. Those move, and a number baked into the prose is the fastest way for ' +
        'an article to become quietly wrong. Where a figure matters to your decision, we tell you ' +
        'which figure to look up rather than guessing it for you.</p>' +
      '<dl class="freshness__grid">' +
        '<div><dt>Reasoning last verified</dt><dd>' + verified + '</dd></div>' +
        '<div><dt>Volatile figures printed</dt><dd>None by design</dd></div>' +
        '<div><dt>Check before acting</dt><dd>Rates, limits, thresholds</dd></div>' +
      '</dl>' +
      '<p class="freshness__note">The <em>reasoning</em> here — the mechanisms, the trade-offs and the ' +
        'conditions under which standard advice breaks — changes far more slowly than the numbers do. ' +
        'That is the part we maintain' +
        (c.url ? ', and the <a href="' + c.url + '">' + c.label + '</a> desk is where revisions land' : '') +
        '.</p>' +
      '</aside>';
  }

  /* ------------------------------------------------------ confidence labels
     Growth trick #8. Separates "this is arithmetic" from "this is our
     opinion" — a distinction almost nothing in consumer finance makes.

     Authoring, in any article body:
       inline     <span class="conf conf--contested">…claim…</span>
       paragraph  <p data-conf="local">…</p>

     Four statuses only. A longer scale invites false precision. This lives in
     the shell rather than a per-page script so adding a label to an article
     needs no new script tag. */
  const CONF_LEVELS = {
    established: {
      label: 'Well established', icon: 'fa-square-check',
      blurb: 'Arithmetic, statute, or a mechanism with broad professional consensus. If this is wrong, it is wrong as a matter of fact and we want to be told.'
    },
    contested: {
      label: 'Contested', icon: 'fa-code-compare',
      blurb: 'Competent, informed people disagree about this. We take a position and name the strongest case against it, but the debate is genuinely live.'
    },
    judgement: {
      label: 'Our judgement', icon: 'fa-user-pen',
      blurb: 'A conclusion we reached by weighing trade-offs. Reasonable people with different priorities would land elsewhere, and that is not an error on their part.'
    },
    local: {
      label: 'Jurisdiction-dependent', icon: 'fa-earth-europe',
      blurb: 'The mechanism is general but the specific rule, rate or threshold depends on where you are. Check your own jurisdiction before acting on a number.'
    }
  };
  const CONF_ORDER = ['established', 'contested', 'judgement', 'local'];

  function escAttr(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function confBadge(key) {
    const L = CONF_LEVELS[key];
    if (!L) return '';
    return '<span class="conf__badge conf__badge--' + key + '" title="' + escAttr(L.blurb) + '">' +
      '<i class="fa-solid ' + L.icon + '"></i>' + L.label + '</span>';
  }

  function mountConfidence() {
    const body = document.getElementById('article-body');
    if (!body) return 0;
    let n = 0;

    /* Paragraph-level markers. */
    body.querySelectorAll('[data-conf]').forEach(el => {
      const key = el.getAttribute('data-conf');
      if (!CONF_LEVELS[key] || el.classList.contains('is-conf-done')) return;
      el.classList.add('conf-block', 'conf-block--' + key, 'is-conf-done');
      const tag = document.createElement('span');
      tag.className = 'conf-block__tag';
      tag.innerHTML = confBadge(key);
      el.insertBefore(tag, el.firstChild);
      n++;
    });

    /* Inline markers. */
    body.querySelectorAll('.conf').forEach(el => {
      if (el.classList.contains('is-conf-done')) return;
      const key = CONF_ORDER.find(k => el.classList.contains('conf--' + k));
      if (!key) return;
      el.classList.add('is-conf-done');
      const tag = document.createElement('span');
      tag.className = 'conf__inline-tag';
      tag.innerHTML = confBadge(key);
      el.appendChild(tag);
      n++;
    });

    if (n) mountConfLegend(body);
    return n;
  }

  function mountConfLegend(body) {
    if (body.querySelector('.conf-legend')) return;
    const used = {};
    body.querySelectorAll('.conf__badge').forEach(b => {
      CONF_ORDER.forEach(k => { if (b.classList.contains('conf__badge--' + k)) used[k] = true; });
    });
    const keys = CONF_ORDER.filter(k => used[k]);
    if (!keys.length) return;

    let html = '<details class="conf-legend"><summary><i class="fa-solid fa-circle-question"></i> ' +
      'What the confidence labels mean</summary><div class="conf-legend__body">' +
      '<p>Labelled claims on this page carry an explicit epistemic status, so you can tell which ' +
      'sentences are arithmetic and which are our opinion. Most writing in personal finance does ' +
      'not distinguish the two.</p><dl>';
    keys.forEach(k => {
      html += '<dt>' + confBadge(k) + '</dt><dd>' + CONF_LEVELS[k].blurb + '</dd>';
    });
    html += '</dl><p class="tiny muted">These are our own assessments, not an external standard, and the ' +
      'boundary between &ldquo;contested&rdquo; and &ldquo;our judgement&rdquo; is itself a judgement ' +
      'call. They exist to make our confidence legible, not to borrow authority we have not earned.</p>' +
      '</div></details>';

    const holder = document.createElement('div');
    holder.innerHTML = html;
    const node = holder.firstChild;
    const review = body.querySelector('#critical-review');
    if (review) body.insertBefore(node, review);
    else body.appendChild(node);
  }

  /* --------------------------------------------------------- router teaser
     Growth trick #9. Places one relevant decision-guide entry point inside an
     article, chosen by desk from the small ROUTER_INDEX map in site-data.js.
     The full decision trees load only on decide.html. */
  function mountRouterTeaser(p) {
    if (!p || !p.cat) return;
    const idx = (window.ROUTER_INDEX || {})[p.cat];
    if (!idx) return;
    const body = document.getElementById('article-body');
    if (!body || body.querySelector('.router-teaser')) return;

    const box = document.createElement('aside');
    box.className = 'router-teaser';
    box.innerHTML =
      '<div class="router-teaser__icon"><i class="fa-solid ' + escAttr(idx.icon) + '"></i></div>' +
      '<div class="router-teaser__body">' +
        '<b>Not sure how this applies to you?</b>' +
        '<p>' + escAttr(idx.title) + ' &mdash; a short guided decision that ends in a ' +
        'recommendation, the order to act in, and where that answer is weakest.</p>' +
        '<a class="chip chip--brand" href="decide.html#r=' + escAttr(idx.id) + '">' +
        'Run the check <i class="fa-solid fa-arrow-right"></i></a>' +
      '</div>';

    /* Roughly a third of the way in, and never after the critical review. */
    const kids = Array.prototype.filter.call(body.children, el => /^(H2|P|UL|OL)$/.test(el.tagName));
    const review = body.querySelector('#critical-review');
    const anchor = kids[Math.min(kids.length - 1, Math.max(2, Math.floor(kids.length / 3)))];
    if (anchor && anchor.parentNode === body && (!review || anchor.compareDocumentPosition(review) & Node.DOCUMENT_POSITION_FOLLOWING)) {
      body.insertBefore(box, anchor);
    } else if (review) {
      body.insertBefore(box, review);
    } else {
      body.appendChild(box);
    }
  }

  /* ------------------------------------------------------ MetaX bridge
     The "More Details" section. Names the top issues this article cannot fix
     — because they are structural rather than arithmetic — and routes to the
     MetaX.Academy article that teaches mastery of them.

     Deliberately framed as UNFIXED rather than solved: ML-2.3 §H.16.3 treats
     an all-remedied compliance claim as evidence of HX-15 (compliance
     theatre), and a bridge promising MetaX "solves" these would reproduce
     that harm at article level.

     Renders nothing where the article has no mapped entry, so there is never
     a broken promise.

     The map lives in js/metax-bridge.js and is LAZY-LOADED here rather than
     added as a script tag to 85 pages. It is only fetched on article and tool
     pages, after first paint, so it costs nothing on listing pages and does
     not block rendering. Because it mounts after buildTOC, the bridge adds
     its own TOC entry explicitly. */
  function loadMetaxBridge(p) {
    if (!p || window.METAX_BRIDGE) { mountMetaxBridge(p); return; }
    const s = document.createElement('script');
    s.src = 'js/metax-bridge.js';
    s.async = true;
    s.addEventListener('load', () => mountMetaxBridge(p));
    s.addEventListener('error', () => { /* bridge is optional: fail silent */ });
    document.head.appendChild(s);
  }

  /* ---------------------------------------------------------- RIBA PARITY
     Owner decision, Sep 2026: where we explain an interest-bearing
     instrument, the asset-backed alternative is linked at EQUAL PROMINENCE.

     "Equal prominence" is the operative constraint and it is why this mounts
     near the TOP of the body rather than in the recirculation rail at the
     bottom. A parity link a reader only meets after 2,000 words is not parity
     — it is a footnote, and it would reproduce the omission it exists to fix.

     Implemented in the shell, as a component, deliberately: the editorial
     rule must not depend on an author remembering it on each new guide.

     Keyed by desk, since the instrument class follows the desk — EXCEPT for
     calculators, which all carry cat:'tools' regardless of subject. Keying on
     desk alone silently missed tool-mortgage.html, the single most
     Riba-relevant page on the site, so the tools are listed by slug. */
  const RIBA_DESKS = {
    credit:  'debt and borrowing',
    banking: 'deposits and savings',
    property: 'property finance',
    investing: 'income instruments'
  };
  const RIBA_SLUGS = {
    'tool-mortgage.html': 'property finance',
    'tool-debt-payoff.html': 'debt and borrowing',
    'tool-compound-interest.html': 'compounding and deposits'
  };

  function mountRibaParity(p) {
    if (!p || (p.type !== 'article' && p.type !== 'tool')) return;
    if (p.slug === 'metax-riba-parity.html') return;      /* not on itself */
    const topic = RIBA_SLUGS[p.slug] || RIBA_DESKS[p.cat];
    if (!topic) return;

    /* Never link an unpublished target. */
    const target = (window.BY_SLUG || {})['metax-riba-parity.html'];
    if (!target) return;

    const body = document.getElementById('article-body');
    if (!body || body.querySelector('.parity')) return;

    const el = document.createElement('aside');
    el.className = 'parity';
    el.innerHTML =
      '<i class="fa-solid fa-code-compare"></i>' +
      '<div>' +
        '<b>This guide explains an interest-bearing instrument</b>' +
        '<p>Its defining feature is a stipulated increase over principal \u2014 a structure ' +
        'a large number of readers are obliged to avoid. The asset-backed alternatives ' +
        'for ' + escAttr(topic) + ' are set out at equal length, with how they price and ' +
        'where they fail.</p>' +
        '<a class="chip chip--brand" href="metax-riba-parity.html">' +
          escAttr(target.title) + ' <i class="fa-solid fa-arrow-right"></i></a>' +
      '</div>';

    /* Immediately after the takeaways box where present, else at the very top
       of the body. Both positions are above the fold on a normal screen. */
    const takeaways = body.querySelector('.takeaways');
    if (takeaways && takeaways.parentNode === body) {
      body.insertBefore(el, takeaways.nextSibling);
    } else {
      body.insertBefore(el, body.firstChild);
    }
  }

  /* Adds the bridge heading to an already-built table of contents. */
  function addTocEntry(id, text) {
    const toc = document.getElementById('toc');
    if (!toc || toc.querySelector('a[href="#' + id + '"]')) return;
    const li = document.createElement('li');
    li.innerHTML = '<a href="#' + id + '">' + text + '</a>';
    toc.appendChild(li);
  }

  function mountMetaxBridge(p) {
    if (!p) return;
    const map = window.METAX_BRIDGE || {};
    const entry = map[p.slug];
    if (!entry) return;

    const body = document.getElementById('article-body');
    if (!body || body.querySelector('.metax')) return;

    /* Never link a MetaX article that has not been published — the publish
       guard is the single source of truth for what exists. */
    const target = (window.BY_SLUG || {})[entry.to];
    if (!target) return;

    const issues = (entry.issues || []).map(i =>
      '<li class="metax__issue">' +
        '<span class="metax__hx">' + escAttr(i.hx) + '</span>' +
        '<div><b>' + escAttr(i.title) + '</b><p>' + escAttr(i.body) + '</p></div>' +
      '</li>').join('');

    const sec = document.createElement('section');
    sec.className = 'metax';
    sec.id = 'more-details';
    sec.setAttribute('aria-labelledby', 'metax-heading');
    sec.innerHTML =
      '<div class="metax__head">' +
        '<i class="fa-solid fa-graduation-cap"></i>' +
        '<h2 id="metax-heading">More Details</h2>' +
        '<span class="metax__badge">MetaX.Academy</span>' +
      '</div>' +
      '<p class="metax__lede">' + escAttr(entry.lede) + '</p>' +
      '<h3 class="metax__sub">Top issues this guide does not fix</h3>' +
      '<ul class="metax__issues">' + issues + '</ul>' +
      '<div class="metax__cta">' +
        '<p>These are structural, not personal. They persist however well you ' +
        'follow the advice above, because they are properties of the system the ' +
        'advice operates inside. MetaX.Academy teaches mastery of them.</p>' +
        '<a class="btn btn--primary" href="' + escAttr(entry.to) + '">' +
          escAttr(target.title) + ' <i class="fa-solid fa-arrow-right"></i></a>' +
        '<p class="tiny muted">Issue identifiers reference the structural-harms ' +
        'register incorporated by the Maher License (ML-2.3), which governs this ' +
        'publication.</p>' +
      '</div>';

    /* After the steelman where one exists, else after the critical review,
       else at the end. Always before the FAQ, which reads as a closer. */
    const steel = body.querySelector('#steelman');
    const review = body.querySelector('#critical-review');
    const after = steel || review;
    if (after && after.parentNode === body) {
      body.insertBefore(sec, after.nextSibling);
    } else {
      body.appendChild(sec);
    }
    addTocEntry('more-details', 'More Details');
  }

  /* --------------------------------------------------------- print worksheet
     Growth trick #10. Adds a print affordance and an attribution block that
     appears only on paper, so a printed or PDF-saved worksheet still names
     where it came from and how to get back. Pure CSS does the formatting; this
     only supplies the trigger and the source line. */
  function mountPrint(p) {
    const body = document.getElementById('article-body');
    if (!body || body.querySelector('.print-source')) return;

    /* Attribution — hidden on screen by .print-source, shown by @media print. */
    const src = document.createElement('aside');
    src.className = 'print-source';
    const origin = ((window.SITE || {}).origin || '').replace(/\/$/, '');
    const url = (location.origin && location.origin !== 'null' && location.protocol !== 'file:')
      ? location.origin + location.pathname
      : origin + '/' + p.slug;
    src.innerHTML = '<hr><p><b>' + p.title + '</b><br>' +
      'Fiscora — ' + url + '<br>' +
      'Reasoning last verified ' + fmtDate(p.updated) + '. ' +
      'Rates, limits and thresholds change: check current figures before acting.</p>';
    body.appendChild(src);

    /* Trigger, placed in the byline row next to Save / Share. */
    const by = document.querySelector('.byline');
    if (by && !by.querySelector('#print-btn')) {
      const btn = document.createElement('button');
      btn.className = 'chip';
      btn.id = 'print-btn';
      btn.type = 'button';
      btn.title = 'Print or save this guide as a clean worksheet';
      btn.innerHTML = '<i class="fa-solid fa-print"></i> Worksheet';
      btn.addEventListener('click', () => window.print());
      by.appendChild(btn);
    }
  }

  function mountFreshness() {
    if (!PAGE) return;
    if (PAGE.type !== 'article' && PAGE.type !== 'tool') return;
    const body = document.getElementById('article-body');
    if (!body || body.querySelector('.freshness')) return;
    const el = document.createElement('div');
    el.innerHTML = freshnessHTML(PAGE);
    const node = el.firstChild;
    if (node) body.appendChild(node);
  }

  /* -------------------------------------------------------------- TOC + spy */
  function buildTOC() {
    const body = document.getElementById('article-body');
    const toc = document.getElementById('toc');
    if (!body || !toc) return;
    const heads = Array.from(body.querySelectorAll('h2, h3'));
    if (!heads.length) { const b = toc.closest('.rail-box'); if (b) b.style.display = 'none'; return; }
    heads.forEach((h, i) => {
      if (!h.id) h.id = 'sec-' + (i + 1) + '-' + h.textContent.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 32).replace(/-$/, '');
      const li = document.createElement('li');
      if (h.tagName === 'H3') li.className = 'toc--sub';
      li.innerHTML = '<a href="#' + h.id + '">' + h.textContent.replace(/^\d+\.\s*/, '') + '</a>';
      toc.appendChild(li);
    });
    const links = Array.from(toc.querySelectorAll('a'));
    const spy = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          links.forEach(l => l.classList.toggle('is-active', l.getAttribute('href') === '#' + en.target.id));
        }
      });
    }, { rootMargin: '-88px 0px -70% 0px' });
    heads.forEach(h => spy.observe(h));
  }

  /* --------------------------------------------------------- progress, dwell */
  function initProgress() {
    const rail = document.createElement('div');
    rail.className = 'progress-rail';
    rail.innerHTML = '<div class="progress-rail__fill" id="progress-fill"></div>';
    document.body.appendChild(rail);
    const fill = rail.querySelector('#progress-fill');
    const left = () => document.getElementById('read-left');
    const total = PAGE ? PAGE.read : 5;

    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const pct = max > 0 ? Math.min(100, (h.scrollTop / max) * 100) : 0;
      fill.style.width = pct + '%';
      const l = left();
      if (l) {
        const rem = Math.max(0, Math.round(total * (1 - pct / 100)));
        l.innerHTML = '<i class="fa-regular fa-hourglass"></i> ' + (rem === 0 ? 'Finished — nice work' : 'About ' + rem + ' min left');
      }
      const top = document.getElementById('to-top');
      if (top) top.classList.toggle('is-on', h.scrollTop > 900);
      if (pct > 65) markRead();
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  let readMarked = false;
  function markRead() {
    if (readMarked || !PAGE) return;
    readMarked = true;
    const m = store.get(LS.read, {});
    m[SLUG] = Date.now();
    store.set(LS.read, m);
  }

  function trackSession() {
    let list = [];
    try { list = JSON.parse(sessionStorage.getItem(LS.session)) || []; } catch (e) {}
    if (!list.includes(SLUG)) list.push(SLUG);
    try { sessionStorage.setItem(LS.session, JSON.stringify(list)); } catch (e) {}
    return list.length;
  }

  /* ------------------------------------------------------------------- saves */
  function isSaved(s) { return (store.get(LS.saved, [])).includes(s); }
  function toggleSave(s) {
    const arr = store.get(LS.saved, []);
    const i = arr.indexOf(s);
    if (i > -1) arr.splice(i, 1); else arr.push(s);
    store.set(LS.saved, arr);
    return i === -1;
  }
  function paintSave() {
    const btn = document.getElementById('save-btn');
    if (!btn) return;
    const on = isSaved(SLUG);
    btn.innerHTML = '<i class="' + (on ? 'fa-solid' : 'fa-regular') + ' fa-bookmark"></i> <span>' + (on ? 'Saved' : 'Save') + '</span>';
    btn.classList.toggle('chip--brand', on);
  }

  /* -------------------------------------------------------------- table API */
  async function apiPost(table, body) {
    const r = await fetch('tables/' + table, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    if (!r.ok) throw new Error('request failed');
    return r.json();
  }

  function initForms() {
    document.querySelectorAll('form[data-subscribe]').forEach(form => {
      form.addEventListener('submit', async e => {
        e.preventDefault();
        const msg = form.parentElement.querySelector('[data-msg]');
        const email = form.querySelector('input[type=email]').value.trim();
        const btn = form.querySelector('button[type=submit]');
        const old = btn.innerHTML;
        btn.disabled = true; btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Sending';
        try {
          await apiPost('subscribers', {
            email: email,
            source_page: SLUG,
            interest: PAGE ? PAGE.cat : 'general',
            status: 'confirmed',
            signed_up: new Date().toISOString()
          });
          if (msg) { msg.className = 'form-msg ok'; msg.innerHTML = '<i class="fa-solid fa-check"></i> You are in. The next Friday Brief lands in your inbox.'; }
          form.reset();
        } catch (err) {
          if (msg) { msg.className = 'form-msg err'; msg.textContent = 'Something went wrong — please try again in a moment.'; }
        } finally { btn.disabled = false; btn.innerHTML = old; }
      });
    });

    document.querySelectorAll('form[data-contact]').forEach(form => {
      form.addEventListener('submit', async e => {
        e.preventDefault();
        const msg = form.parentElement.querySelector('[data-msg]');
        const data = Object.fromEntries(new FormData(form).entries());
        const btn = form.querySelector('button[type=submit]');
        btn.disabled = true;
        try {
          await apiPost('messages', {
            name: data.name || '', email: data.email || '', topic: data.topic || 'general',
            message: data.message || '', page: SLUG, created: new Date().toISOString()
          });
          if (msg) { msg.className = 'form-msg ok'; msg.innerHTML = '<i class="fa-solid fa-check"></i> Message received — thank you. You will get a reply as soon as I can get to it.'; }
          form.reset();
        } catch (err) {
          /* No invented fallback address: point at the parent publisher's
             contact route, which is real and monitored. */
          if (msg) { msg.className = 'form-msg err'; msg.innerHTML = 'Could not send right now — please try again, or reach us via <a href="https://metax.academy/contact.html" rel="noopener">metax.academy/contact</a>.'; }
        } finally { btn.disabled = false; }
      });
    });
  }

  function initReactions() {
    const box = document.querySelector('[data-reactions]');
    if (!box) return;
    const done = store.get(LS.react, {});
    box.querySelectorAll('.react-btn').forEach(btn => {
      const key = btn.dataset.react;
      if (done[SLUG] === key) btn.classList.add('is-on');
      btn.addEventListener('click', async () => {
        if (done[SLUG]) return;
        done[SLUG] = key; store.set(LS.react, done);
        btn.classList.add('is-on');
        const msg = box.parentElement.querySelector('[data-msg]');
        try {
          await apiPost('feedback', { page: SLUG, reaction: key, category: PAGE ? PAGE.cat : '', created: new Date().toISOString() });
          if (msg) { msg.className = 'form-msg ok'; msg.innerHTML = '<i class="fa-solid fa-heart"></i> Thanks — that signal decides what we research next.'; }
        } catch (e) {
          if (msg) { msg.className = 'form-msg ok'; msg.textContent = 'Thanks for the feedback.'; }
        }
      });
    });
  }

  /* ------------------------------------------------------------ consent bar */
  function initConsent() {
    const bar = document.createElement('div');
    bar.className = 'consent';
    bar.id = 'consent';
    bar.innerHTML = '<p><b>' + tr('consent.title', 'We use cookies for advertising.') + '</b> ' +
      tr('consent.text', 'Partners including Google may set cookies to measure and personalise the ads that keep Fiscora free. You can choose non-personalised ads instead.') + '</p>' +
      '<div class="flex"><button class="btn btn--primary btn--sm" id="consent-yes">' + tr('consent.accept', 'Accept all') + '</button>' +
      '<button class="btn btn--ghost btn--sm" id="consent-no">' + tr('consent.reject', 'Non-personalised') + '</button>' +
      '<a class="tiny muted" href="privacy.html">' + tr('consent.details', 'Details') + '</a></div>';
    document.body.appendChild(bar);
    const shown = localStorage.getItem('fisc_consent');
    if (!shown) setTimeout(() => bar.classList.add('is-open'), 1400);
    bar.querySelector('#consent-yes').addEventListener('click', () => { window.AdEngine.setConsent('granted'); bar.classList.remove('is-open'); });
    bar.querySelector('#consent-no').addEventListener('click', () => { window.AdEngine.setConsent('limited'); bar.classList.remove('is-open'); });
    document.addEventListener('click', e => { if (e.target.closest('#consent-reopen')) bar.classList.add('is-open'); });
  }

  /* -------------------------------------------------------------- structured
     A single @graph with stable @id anchors, so Organization, Person,
     WebSite and the page entity are cross-referenced rather than repeated.
     Every URL is absolute against SITE.origin — search engines and social
     scrapers both reject relative URLs here. Runs on every page, not just
     ones present in the content graph. */
  function injectJSONLD() {
    const S = window.SITE || {};
    const abs = p => (S.abs ? S.abs(p) : p);
    const ORG = abs('#organization');
    const SITE_ID = abs('#website');
    const PERSON = abs('author-maher.html#person');
    const a = author(PAGE || {});

    const graph = [
      {
        '@type': 'Organization',
        '@id': ORG,
        name: S.name || 'Fiscora',
        url: abs(''),
        description: S.description,
        logo: { '@type': 'ImageObject', url: S.logo, width: 512, height: 512 },
        founder: { '@id': PERSON },
        publishingPrinciples: abs('editorial-policy.html'),
        parentOrganization: S.parent
          ? { '@type': 'Organization', name: S.parent.name, url: S.parent.url }
          : undefined
      },
      {
        '@type': 'Person',
        '@id': PERSON,
        name: a.name,
        url: abs(a.url || 'author-maher.html'),
        jobTitle: a.role,
        description: a.bio,
        image: (window.FiscoraData && window.FiscoraData.imgUrl) ? window.FiscoraData.imgUrl(66) : undefined,
        sameAs: a.sameAs,
        worksFor: { '@id': ORG }
      },
      {
        '@type': 'WebSite',
        '@id': SITE_ID,
        name: S.name || 'Fiscora',
        url: abs(''),
        description: S.description,
        inLanguage: (document.documentElement.lang || 'en'),
        publisher: { '@id': ORG },
        potentialAction: {
          '@type': 'SearchAction',
          target: { '@type': 'EntryPoint', urlTemplate: abs('library.html?q={search_term_string}') },
          'query-input': 'required name=search_term_string'
        }
      }
    ];

    /* -------- the page itself -------- */
    const kind = document.body.dataset.page || '';
    const url = abs(SLUG || 'index.html');
    const h1 = document.querySelector('h1');
    const metaDesc = document.querySelector('meta[name="description"]');
    const title = PAGE ? PAGE.title : (h1 ? h1.textContent.trim() : document.title);
    const desc = PAGE ? PAGE.dek : (metaDesc ? metaDesc.content : S.description);
    const image = PAGE && PAGE.imgUrl ? PAGE.imgUrl : (S.ogDefault || S.logo);

    if (PAGE && PAGE.type === 'article') {
      graph.push({
        '@type': 'Article',
        '@id': url + '#article',
        isPartOf: { '@id': SITE_ID },
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        url: url,
        headline: title,
        description: desc,
        /* No fabricated datePublished: `updated` is the one date we can
           actually substantiate, so it serves both fields. */
        datePublished: PAGE.updated,
        dateModified: PAGE.updated,
        author: { '@id': PERSON },
        creator: { '@id': PERSON },
        publisher: { '@id': ORG },
        image: { '@type': 'ImageObject', url: image, width: 1200, height: 630 },
        articleSection: (window.CATEGORIES[PAGE.cat] || {}).label,
        keywords: (PAGE.tags || []).join(', '),
        timeRequired: 'PT' + PAGE.read + 'M',
        inLanguage: (document.documentElement.lang || 'en'),
        isAccessibleForFree: true,
        license: abs('terms.html')
      });
    } else {
      graph.push({
        '@type': kind === 'hub' ? 'CollectionPage' : 'WebPage',
        '@id': url,
        isPartOf: { '@id': SITE_ID },
        url: url,
        name: title,
        description: desc,
        primaryImageOfPage: { '@type': 'ImageObject', url: image },
        publisher: { '@id': ORG },
        inLanguage: (document.documentElement.lang || 'en')
      });
    }

    /* -------- breadcrumbs -------- */
    if (PAGE && PAGE.type === 'article') {
      const c = window.CATEGORIES[PAGE.cat];
      const items = [{ name: 'Home', item: abs('index.html') }];
      if (c) items.push({ name: c.label, item: abs(c.url) });
      items.push({ name: title, item: url });
      graph.push({
        '@type': 'BreadcrumbList',
        '@id': url + '#breadcrumb',
        itemListElement: items.map((it, i) => ({
          '@type': 'ListItem', position: i + 1, name: it.name, item: it.item
        }))
      });
    }

    /* -------- hub listings -------- */
    if (kind === 'hub' && D.pagesIn) {
      const list = D.pagesIn(document.body.dataset.cat).filter(p => p.type === 'article');
      if (list.length) {
        graph.push({
          '@type': 'ItemList',
          '@id': url + '#list',
          itemListElement: list.map((p, i) => ({
            '@type': 'ListItem', position: i + 1, url: abs(p.slug), name: p.title
          }))
        });
      }
    }

    /* -------- FAQ -------- */
    const faqs = Array.from(document.querySelectorAll('.faq details'));
    if (faqs.length) {
      graph.push({
        '@type': 'FAQPage',
        '@id': url + '#faq',
        mainEntity: faqs.map(d => ({
          '@type': 'Question',
          name: ((d.querySelector('summary') || {}).textContent || '').trim(),
          acceptedAnswer: { '@type': 'Answer', text: ((d.querySelector('p') || {}).textContent || '').trim() }
        }))
      });
    }

    /* -------- calculators are software -------- */
    if (PAGE && PAGE.type === 'tool') {
      graph.push({
        '@type': 'WebApplication',
        '@id': url + '#app',
        name: title,
        url: url,
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Any (web browser)',
        browserRequirements: 'Requires JavaScript',
        publisher: { '@id': ORG },
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
      });
    }

    const s = document.createElement('script');
    s.type = 'application/ld+json';
    s.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
    document.head.appendChild(s);
  }

  /* ------------------------------------------------------- social & canonical
     Absolute canonical, og:image and twitter tags are injected here rather
     than hand-maintained in 60+ files: one implementation, no drift, and
     every URL resolves against the real domain. Any tag already present in
     the HTML is respected and left alone. */
  function injectSocialMeta() {
    const S = window.SITE || {};
    const abs = p => (S.abs ? S.abs(p) : p);
    const url = abs(SLUG || 'index.html');
    const head = document.head;

    const set = (attr, key, val) => {
      if (!val) return;
      let el = head.querySelector('meta[' + attr + '="' + key + '"]');
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        head.appendChild(el);
      }
      el.setAttribute('content', val);
    };

    /* Canonical must be absolute to be trusted; the files ship a relative one. */
    let can = head.querySelector('link[rel="canonical"]');
    if (!can) { can = document.createElement('link'); can.rel = 'canonical'; head.appendChild(can); }
    can.href = url;

    const metaDesc = head.querySelector('meta[name="description"]');
    const desc = (PAGE && PAGE.dek) || (metaDesc ? metaDesc.content : S.description);
    const ogTitleEl = head.querySelector('meta[property="og:title"]');
    const title = (ogTitleEl && ogTitleEl.content) || (PAGE && PAGE.title) || document.title;
    const image = (PAGE && PAGE.imgUrl) ? PAGE.imgUrl : (S.ogDefault || S.logo);
    const a = author(PAGE || {});

    set('property', 'og:site_name', S.name);
    set('property', 'og:url', url);
    set('property', 'og:description', desc);
    set('property', 'og:locale', (document.documentElement.lang === 'ar') ? 'ar_AR' : (S.locale || 'en_US'));
    set('property', 'og:image', image);
    set('property', 'og:image:secure_url', image);
    set('property', 'og:image:width', '1200');
    set('property', 'og:image:height', '630');
    set('property', 'og:image:alt', title);

    set('name', 'twitter:card', 'summary_large_image');
    set('name', 'twitter:title', title);
    set('name', 'twitter:description', desc);
    set('name', 'twitter:image', image);
    set('name', 'twitter:image:alt', title);

    set('name', 'author', a.name);

    if (PAGE && PAGE.type === 'article') {
      set('property', 'article:author', abs(a.url || 'author-maher.html'));
      set('property', 'article:published_time', PAGE.updated);
      set('property', 'article:modified_time', PAGE.updated);
      set('property', 'article:section', (window.CATEGORIES[PAGE.cat] || {}).label);
      (PAGE.tags || []).slice(0, 6).forEach(t => {
        const el = document.createElement('meta');
        el.setAttribute('property', 'article:tag');
        el.setAttribute('content', t);
        head.appendChild(el);
      });
    }
  }

  /* -------------------------------------------------------------------- hero
     Category hubs and articles both get an indexed image hero. Built at
     runtime from the existing head markup — the same reason the header,
     footer and byline are injected rather than duplicated across 60+ files.

     The image is decorative background (the h1/lede carry the meaning), so
     it needs no alt text; a not-yet-generated file leaves the gradient and
     scrim exactly as they render today. */
  function mountHero() {
    const kind = document.body.dataset.page || '';
    let host = null;
    let idx = 0;
    let variant = '';

    if (kind === 'article' || kind === 'tool') {
      host = document.querySelector('.article-head');
      idx = PAGE ? PAGE.img : 0;
      variant = 'page-hero--article';
    } else if (kind === 'hub') {
      const cat = window.CATEGORIES[document.body.dataset.cat];
      host = document.querySelector('#hub-intro .wrap');
      idx = cat ? cat.img : 0;
      variant = 'page-hero--hub';
    }
    if (!host || host.dataset.hero) return;
    host.dataset.hero = '1';

    /* Move the existing children into a stacking-context body. */
    const body = document.createElement('div');
    body.className = 'page-hero__body';
    while (host.firstChild) body.appendChild(host.firstChild);

    const img = document.createElement('div');
    img.className = 'page-hero__img';
    img.setAttribute('aria-hidden', 'true');
    const src = (D.imgPath ? D.imgPath(idx) : '');
    if (src) img.style.setProperty('--img', "url('" + src + "')");

    const sheen = document.createElement('div');
    sheen.className = 'page-hero__sheen';
    sheen.setAttribute('aria-hidden', 'true');

    host.classList.add('page-hero', variant);
    if (idx) host.dataset.img = idx;
    host.appendChild(img);
    host.appendChild(sheen);
    host.appendChild(body);
  }

  /* ------------------------------------------------------------------ reveal */
  function initReveal() {
    const io = new IntersectionObserver(en => {
      en.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  }

  /* -------------------------------------------------------------------- boot
     The locale must be resolved and the content graph translated BEFORE the
     shell paints, otherwise nav and hub cards render in English and then
     visibly flip. So: load storage + i18n, run preload(), then render. */
  function boot() {
    initTheme();

    loadStyle('css/i18n.css');
    loadScript('js/db.js')
      .then(() => loadScript('js/md.js'))
      .then(() => loadScript('js/i18n.js'))
      .then(() => (window.FiscoraI18N ? window.FiscoraI18N.preload() : null))
      .catch(() => {})
      .then(render);
  }

  function render() {
    const header = document.querySelector('[data-site-header]');
    if (header) { header.className = 'site-header'; header.innerHTML = headerHTML(); }
    const footer = document.querySelector('[data-site-footer]');
    if (footer) { footer.className = 'site-footer'; footer.innerHTML = footerHTML(); }

    // article scaffolding
    if (PAGE) {
      const cr = document.querySelector('[data-crumbs]');
      if (cr) { cr.className = 'crumbs'; cr.innerHTML = crumbsHTML(PAGE); }
      const by = document.querySelector('[data-byline]');
      if (by) { by.className = 'byline'; by.innerHTML = bylineHTML(PAGE); }
      const rail = document.querySelector('[data-rail]');
      if (rail) { rail.className = 'article-rail'; rail.innerHTML = railHTML(PAGE); }
      const rec = document.querySelector('[data-recirc]');
      if (rec) rec.innerHTML = recircHTML(PAGE);
      const catChip = document.querySelector('[data-catchip]');
      if (catChip) {
        const c = window.CATEGORIES[PAGE.cat] || window.CATEGORIES.tools;
        catChip.innerHTML = '<a class="chip chip--brand" href="' + c.url + '"><i class="fa-solid ' + c.icon + '"></i> ' + c.label + '</a>' +
          (PAGE.tags || []).slice(0, 3).map(t => '<span class="chip">#' + t + '</span>').join('');
        catChip.className = 'flex';
      }
    }

    // back to top
    const tt = document.createElement('button');
    tt.className = 'to-top'; tt.id = 'to-top'; tt.setAttribute('aria-label', 'Back to top');
    tt.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
    tt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    document.body.appendChild(tt);

    mountHero();
    buildSearch();
    /* Confidence labels (trick #8) upgrade authored markers into badges and
       append the legend. Must precede buildTOC so nothing it inserts is
       missed by the auto-generated table of contents. */
    mountConfidence();
    /* Router teaser (trick #9) is placed inside the body, so it also has to
       land before the TOC is generated. */
    if (PAGE && PAGE.type === 'article') mountRouterTeaser(PAGE);
    /* Riba parity block — must mount BEFORE buildTOC so it sits above the
       first heading and the TOC is unaffected by it. */
    mountRibaParity(PAGE);
    /* MetaX "More Details" bridge. Lazy-loaded, so it mounts after buildTOC
       and adds its own TOC entry rather than relying on ordering. */
    if (PAGE && (PAGE.type === 'article' || PAGE.type === 'tool')) loadMetaxBridge(PAGE);
    /* Must run BEFORE buildTOC so the freshness heading is picked up by the
       auto-generated table of contents like any other h2. */
    mountFreshness();
    if (PAGE && (PAGE.type === 'article' || PAGE.type === 'tool')) mountPrint(PAGE);
    buildTOC();
    initProgress();
    initForms();
    initReactions();
    initConsent();
    initReveal();
    injectSocialMeta();
    injectJSONLD();
    paintSave();
    trackSession();

    document.addEventListener('click', e => {
      if (e.target.closest('#theme-toggle')) toggleTheme();
      if (e.target.closest('#burger')) {
        const mn = document.getElementById('mobile-nav');
        const b = document.getElementById('burger');
        if (mn) { mn.classList.toggle('is-open'); b.setAttribute('aria-expanded', mn.classList.contains('is-open')); }
      }
      if (e.target.closest('#save-btn')) { toggleSave(SLUG); paintSave(); }
      if (e.target.closest('#share-btn')) {
        const data = { title: document.title, url: location.href };
        if (navigator.share) navigator.share(data).catch(() => {});
        else if (navigator.clipboard) {
          navigator.clipboard.writeText(location.href);
          const b = document.getElementById('share-btn');
          if (b) { b.innerHTML = '<i class="fa-solid fa-check"></i> Link copied'; setTimeout(() => { b.innerHTML = '<i class="fa-solid fa-share-nodes"></i> Share'; }, 2200); }
        }
      }
    });

    if (window.AdEngine) window.AdEngine.init();
    if (window.FiscoraTools && window.FiscoraTools.init) window.FiscoraTools.init();
    if (window.FiscoraPage && typeof window.FiscoraPage === 'function') window.FiscoraPage({ postCard, fmtDate, store, LS, isSaved });

    loadRuntime();
  }

  /* ------------------------------------------------- i18n + gate runtime
     Loaded from here rather than from 50-odd <script> tags so the whole
     site picks up the language engine and reading meter automatically. */
  function loadStyle(href) {
    if (document.querySelector('link[href="' + href + '"]')) return;
    const l = document.createElement('link');
    l.rel = 'stylesheet'; l.href = href;
    document.head.appendChild(l);
  }

  function loadScript(src) {
    return new Promise(resolve => {
      if (document.querySelector('script[src="' + src + '"]')) { resolve(); return; }
      const s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = resolve;   /* never let a missing file stall the chain */
      document.head.appendChild(s);
    });
  }

  function loadRuntime() {
    /* Storage, markdown and i18n were already loaded in boot(); the locale is
       resolved and the graph translated. Now attach the gate listener, then
       run i18n phase two (switcher + Markdown hydration). */
    loadScript('js/referral.js')
      .then(() => (window.FiscoraI18N ? window.FiscoraI18N.init() : null))
      .catch(() => {});
  }

  window.FiscoraUI = { postCard, fmtDate, store, LS, isSaved, toggleSave, slug: SLUG };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
