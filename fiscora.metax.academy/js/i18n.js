/* ==========================================================================
   FISCORA — Multi-language engine
   Resolution order for the active locale:
     1. ?lang= URL parameter        (explicit, shareable, wins everything)
     2. IndexedDB stored preference (the reader chose it before)
     3. navigator.language          (browser default)
     4. 'en'                        (fallback)

   English content lives in the HTML itself so crawlers index it. Other
   locales are hydrated from Markdown in /content, rendered by FiscoraMD.
   ========================================================================== */

const FiscoraI18N = (() => {
  'use strict';

  const DEFAULT = 'en';

  const LOCALES = {
    en: { code: 'en', label: 'English',  native: 'English', dir: 'ltr' },
    ar: { code: 'ar', label: 'Arabic',   native: 'العربية', dir: 'rtl' }
  };

  /* Chrome strings. Article bodies come from Markdown, not from here. */
  const STRINGS = {
    en: {
      'ui.language': 'Language',
      'ui.loading': 'Loading translation…',
      'ui.failed': 'This article is not translated yet. Showing the English original.',
      'ui.translated': 'Machine-assisted translation, reviewed for terminology.',
      'ui.readEnglish': 'Read the English original',
      'gate.title': 'You have read your free articles',
      'gate.body': 'Fiscora stays free and independent. Invite one reader and the rest of this article unlocks immediately — every invitation that arrives adds another article to your balance.',
      'gate.credits': 'articles unlocked',
      'gate.copy': 'Copy invite link',
      'gate.copied': 'Copied',
      'gate.share': 'Share on',
      'gate.note': 'No account, no email. Your reading count is stored only in this browser.',
      'gate.continue': 'Continue reading',
      'meter.left': 'free articles left',
      'meter.one': 'free article left',
      'ref.thanks': 'Invitation accepted — one article credited to your balance.'
    },
    ar: {
      'ui.language': 'اللغة',
      'ui.loading': 'جارٍ تحميل الترجمة…',
      'ui.failed': 'لم تُترجم هذه المقالة بعد. نعرض النص الإنجليزي الأصلي.',
      'ui.translated': 'ترجمة بمساعدة آلية، خضعت لمراجعة المصطلحات المالية.',
      'ui.readEnglish': 'اقرأ النص الإنجليزي الأصلي',
      'gate.title': 'لقد قرأت مقالاتك المجانية',
      'gate.body': 'يبقى «فيسكورا» مجانيًا ومستقلًا. ادعُ قارئًا واحدًا ليُفتح باقي هذا المقال فورًا — وكل دعوة تصل تضيف مقالًا جديدًا إلى رصيدك.',
      'gate.credits': 'مقالات مفتوحة',
      'gate.copy': 'انسخ رابط الدعوة',
      'gate.copied': 'تم النسخ',
      'gate.share': 'شارك عبر',
      'gate.note': 'بلا حساب وبلا بريد إلكتروني. يُحفظ عدّاد القراءة في هذا المتصفح فقط.',
      'gate.continue': 'تابع القراءة',
      'meter.left': 'مقالات مجانية متبقية',
      'meter.one': 'مقال مجاني متبقٍ',
      'ref.thanks': 'قُبلت الدعوة — أُضيف مقال واحد إلى رصيدك.'
    }
  };

  let active = DEFAULT;

  /* ------------------------------------------------------- graph patching
     RTL alone left the site reading as English, because nav labels, hub
     cards, titles and deks all come from the content graph rather than from
     article Markdown. This rewrites the graph in place for the active
     locale, before the shell renders, so every derived surface — nav, hubs,
     library, search index, related rails, JSON-LD — comes out translated.
     Any string with no translation keeps its English original. */
  function packFor(code) {
    if (code === 'ar') return window.FiscoraAR || null;
    return null;
  }

  let patched = false;

  function patchGraph(code) {
    const pack = packFor(code);
    if (!pack || patched) return false;

    if (pack.categories && window.CATEGORIES) {
      Object.keys(pack.categories).forEach(key => {
        const src = pack.categories[key];
        const tgt = window.CATEGORIES[key];
        if (!tgt) return;                     /* dropped by the publish guard */
        if (src.label) tgt.label = src.label;
        if (src.short) tgt.short = src.short;
        if (src.blurb) tgt.blurb = src.blurb;
      });
    }

    if (pack.authors && window.AUTHORS) {
      Object.keys(pack.authors).forEach(key => {
        const src = pack.authors[key];
        const tgt = window.AUTHORS[key];
        if (!tgt) return;
        if (src.name) tgt.name = src.name;
        if (src.role) tgt.role = src.role;
      });
    }

    if (pack.paths && window.PATHS) {
      window.PATHS.forEach(p => {
        const src = pack.paths[p.id];
        if (!src) return;
        if (src.title) p.title = src.title;
        if (src.blurb) p.blurb = src.blurb;
      });
    }

    if (pack.pages && window.PAGES) {
      window.PAGES.forEach(p => {
        const src = pack.pages[p.slug];
        if (!src) return;
        if (src.title) p.title = src.title;
        if (src.dek) p.dek = src.dek;
      });
    }

    patched = true;
    return true;
  }

  /* ------------------------------------------------------------- helpers */
  const db = () => window.FiscoraDB;

  const slug = () => {
    const f = location.pathname.split('/').pop();
    return (!f || f === '') ? 'index.html' : f;
  };

  /** Map a full BCP-47 tag ('ar-EG', 'en-GB') onto a supported base locale. */
  function normalise(tag) {
    if (!tag) return null;
    const base = String(tag).toLowerCase().split('-')[0];
    return LOCALES[base] ? base : null;
  }

  function t(key) {
    /* Locale pack chrome first, then the built-in gate/loader strings. */
    const pack = packFor(active);
    if (pack && pack.ui && pack.ui[key]) return pack.ui[key];
    const table = STRINGS[active] || STRINGS[DEFAULT];
    return table[key] || STRINGS[DEFAULT][key] || key;
  }

  /** Best-effort synchronous guess, used before the async store resolves. */
  function guess() {
    const q = new URLSearchParams(location.search).get('lang');
    const fromQuery = normalise(q);
    if (fromQuery) return fromQuery;

    const stored = db() ? db().peek('prefs', 'lang') : null;
    const fromStore = normalise(stored);
    if (fromStore) return fromStore;

    const navs = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language];
    for (let i = 0; i < navs.length; i++) {
      const n = normalise(navs[i]);
      if (n) return n;
    }
    return DEFAULT;
  }

  /** Authoritative async resolution (query > IndexedDB > browser > en). */
  function resolve() {
    const q = normalise(new URLSearchParams(location.search).get('lang'));
    if (q) {
      return db() ? db().set('prefs', 'lang', q).then(() => q) : Promise.resolve(q);
    }
    if (!db()) return Promise.resolve(guess());
    return db().get('prefs', 'lang').then(v => {
      const stored = normalise(v);
      if (stored) return stored;
      const navs = navigator.languages && navigator.languages.length
        ? navigator.languages : [navigator.language];
      for (let i = 0; i < navs.length; i++) {
        const n = normalise(navs[i]);
        if (n) return n;
      }
      return DEFAULT;
    }).catch(() => DEFAULT);
  }

  /* ------------------------------------------------------------ document */
  function applyDocumentLocale(code) {
    const loc = LOCALES[code] || LOCALES[DEFAULT];
    document.documentElement.setAttribute('lang', loc.code);
    document.documentElement.setAttribute('dir', loc.dir);
    document.body && document.body.setAttribute('data-lang', loc.code);
  }

  /* --------------------------------------------------------------- paths */
  /** Markdown path for a page in a given locale. English is unprefixed. */
  function mdPath(pageSlug, code) {
    const base = (pageSlug || slug()).replace(/\.html$/i, '');
    return code === DEFAULT ? 'content/' + base + '.md'
                            : 'content/' + code + '-' + base + '.md';
  }

  /* ------------------------------------------------------------- switcher */
  function switcherHTML() {
    const cur = LOCALES[active] || LOCALES[DEFAULT];
    const opts = Object.keys(LOCALES).map(code => {
      const l = LOCALES[code];
      return '<button type="button" class="lang-switch__opt" data-lang-set="' + code + '"' +
        (code === active ? ' aria-current="true"' : '') + '>' +
        '<span>' + l.label + '</span>' +
        '<span class="lang-switch__native">' + l.native + '</span></button>';
    }).join('');

    return '<div class="lang-switch" id="lang-switch">' +
      '<button type="button" class="lang-switch__btn" id="lang-switch-btn" ' +
        'aria-haspopup="true" aria-expanded="false" aria-label="' + t('ui.language') + '">' +
        '<i class="fa-solid fa-globe" aria-hidden="true"></i><span>' + cur.code.toUpperCase() + '</span>' +
      '</button>' +
      '<div class="lang-switch__menu" id="lang-switch-menu" role="menu">' + opts + '</div>' +
      '</div>';
  }

  function mountSwitcher() {
    if (document.getElementById('lang-switch')) return;
    /* Prefer an explicit slot, else sit beside the theme toggle. */
    let host = document.querySelector('[data-lang-switch]');
    if (!host) {
      const themeBtn = document.getElementById('theme-toggle');
      if (themeBtn && themeBtn.parentNode) {
        host = document.createElement('span');
        themeBtn.parentNode.insertBefore(host, themeBtn);
      }
    }
    if (!host) return;
    host.innerHTML = switcherHTML();
  }

  function bindSwitcher() {
    document.addEventListener('click', e => {
      const btn = e.target.closest('#lang-switch-btn');
      const menu = document.getElementById('lang-switch-menu');
      if (btn && menu) {
        const open = menu.getAttribute('data-open') === 'true';
        menu.setAttribute('data-open', open ? 'false' : 'true');
        btn.setAttribute('aria-expanded', String(!open));
        return;
      }
      const opt = e.target.closest('[data-lang-set]');
      if (opt) { setLanguage(opt.getAttribute('data-lang-set')); return; }
      if (menu && !e.target.closest('#lang-switch')) menu.setAttribute('data-open', 'false');
    });

    document.addEventListener('keydown', e => {
      if (e.key !== 'Escape') return;
      const menu = document.getElementById('lang-switch-menu');
      if (menu) menu.setAttribute('data-open', 'false');
    });
  }

  /* ----------------------------------------------------------- switching */
  function setLanguage(code) {
    const next = normalise(code) || DEFAULT;
    if (next === active) {
      const menu = document.getElementById('lang-switch-menu');
      if (menu) menu.setAttribute('data-open', 'false');
      return Promise.resolve(next);
    }
    const p = db() ? db().set('prefs', 'lang', next) : Promise.resolve();
    return p.then(() => {
      /* Full reload keeps ads, calculators and the reading meter consistent
         rather than trying to re-initialise every subsystem in place. */
      const url = new URL(location.href);
      url.searchParams.set('lang', next);
      location.href = url.toString();
    });
  }

  /* ------------------------------------------------------------- content */
  function loadingHTML() {
    return '<div class="lang-loading"><i class="fa-solid fa-circle-notch" aria-hidden="true"></i>' +
      '<span>' + t('ui.loading') + '</span></div>';
  }

  function noticeHTML(kind) {
    const cls = kind === 'failed' ? 'callout callout--warn' : 'callout callout--insight';
    const icon = kind === 'failed' ? 'fa-triangle-exclamation' : 'fa-language';
    const text = kind === 'failed' ? t('ui.failed') : t('ui.translated');
    return '<div class="' + cls + '"><p><i class="fa-solid ' + icon + '" aria-hidden="true"></i> ' +
      text + ' <a href="?lang=en">' + t('ui.readEnglish') + '</a></p></div>';
  }

  /**
   * Hydrate the article body from Markdown.
   * English pages keep their server-rendered HTML (crawlers must see it);
   * they only hydrate if the body was intentionally left empty.
   */
  function hydrate() {
    const body = document.getElementById('article-body');
    if (!body || !window.FiscoraMD) return Promise.resolve(false);

    const declared = body.getAttribute('data-md');
    const empty = body.textContent.trim().length < 40;

    if (active === DEFAULT && !empty) return Promise.resolve(false);

    const path = declared
      ? (active === DEFAULT ? declared : declared.replace(/^content\//, 'content/' + active + '-'))
      : mdPath(slug(), active);

    const original = body.innerHTML;
    body.innerHTML = loadingHTML();

    return fetch(path, { cache: 'no-cache' })
      .then(r => { if (!r.ok) throw new Error('http-' + r.status); return r.text(); })
      .then(src => {
        const parsed = window.FiscoraMD.parseFrontmatter(src);
        const html = window.FiscoraMD.render(parsed.body);
        body.innerHTML = (active === DEFAULT ? '' : noticeHTML('ok')) + html;
        applyMeta(parsed.meta);
        body.setAttribute('data-hydrated', active);
        document.dispatchEvent(new CustomEvent('fiscora:content', { detail: { lang: active, meta: parsed.meta } }));
        return true;
      })
      .catch(() => {
        body.innerHTML = (active === DEFAULT ? '' : noticeHTML('failed')) + original;
        document.dispatchEvent(new CustomEvent('fiscora:content', { detail: { lang: active, fallback: true } }));
        return false;
      });
  }

  /** Swap headline/lede/title when the translation supplies them. */
  function applyMeta(meta) {
    if (!meta) return;
    if (meta.title) {
      const h1 = document.querySelector('.article-head h1');
      if (h1) h1.textContent = meta.title;
      document.title = meta.title + ' | ' + ((window.SITE && window.SITE.name) || 'Fiscora');
    }
    if (meta.lede) {
      const l = document.querySelector('.article-head .lede');
      if (l) l.textContent = meta.lede;
    }
  }

  /* -------------------------------------------------------------- preload
     Phase one: resolve the locale and translate the content graph BEFORE the
     application shell renders. Must complete first, or nav and hub cards
     would paint in English and then flip. */
  function preload() {
    active = guess();
    applyDocumentLocale(active);

    return resolve().then(code => {
      active = code;
      applyDocumentLocale(active);
      if (active === DEFAULT) return active;
      /* Fetch the locale pack, then rewrite the graph. */
      const one = src => new Promise(res => {
        if (document.querySelector('script[src="' + src + '"]')) return res();
        const s = document.createElement('script');
        s.src = src;
        s.onload = s.onerror = () => res();
        document.head.appendChild(s);
      });
      /* Main pack first (it creates window.FiscoraAR), then the static
         prose overrides which extend it. */
      return one('js/i18n-' + active + '.js')
        .then(() => one('js/i18n-' + active + '-static.js'))
        .then(() => { patchGraph(active); return active; });
    }).catch(() => active);
  }

  /* ----------------------------------------------------- static prose
     Hub and landing pages carry hardcoded English prose. Apply the
     per-page selector map, then sweep remaining shared headings. */
  function applyStatic() {
    const pack = packFor(active);
    if (!pack || !pack.static) return;

    const run = list => {
      if (!list) return;
      list.forEach(pair => {
        const sel = pair[0], op = pair[1];
        if (!op) return;
        let nodes;
        try { nodes = document.querySelectorAll(sel); }
        catch (e) { return; }              /* :has() unsupported — skip safely */
        nodes.forEach(el => {
          if (op.attr) el.setAttribute(op.attr, op.value);
          else if (op.html !== undefined) el.innerHTML = op.html;
          else if (op.text !== undefined) el.textContent = op.text;
        });
      });
    };

    run(pack.static['*']);
    run(pack.static[slug()]);

    /* Sweep shared headings by exact text match. Text nodes only, so no
       markup or attributes are ever disturbed. */
    if (!pack.headings) return;
    const map = new Map();
    pack.headings.forEach(h => map.set(h[0].toLowerCase(), h[1]));

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(n) {
        if (!n.nodeValue || !n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        const p = n.parentNode;
        if (!p) return NodeFilter.FILTER_REJECT;
        const tag = p.nodeName;
        if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'TEXTAREA') return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    const hits = [];
    let node;
    while ((node = walker.nextNode())) hits.push(node);

    hits.forEach(n => {
      const raw = n.nodeValue.trim();
      const exact = map.get(raw.toLowerCase());
      if (exact) { n.nodeValue = n.nodeValue.replace(raw, exact); return; }
      /* Handle 'N min read' style fragments. */
      if (/\bmin read\b/i.test(raw)) {
        n.nodeValue = n.nodeValue.replace(/\bmin read\b/i, 'دقيقة قراءة');
      }
    });
  }

  /* ---------------------------------------------------------------- init
     Phase two: runs after the shell exists — mount the switcher and
     hydrate the article body from Markdown. */
  function init() {
    return Promise.resolve().then(() => {
      mountSwitcher();
      if (active !== DEFAULT) applyStatic();
      return hydrate();
    }).then(changed => {
      /* Re-run subsystems that depend on freshly injected DOM. */
      if (changed) {
        if (window.FiscoraTools && window.FiscoraTools.init) window.FiscoraTools.init();
        if (window.AdEngine && window.AdEngine.refresh) window.AdEngine.refresh();
      }
      document.dispatchEvent(new CustomEvent('fiscora:i18n-ready', { detail: { lang: active } }));
      return active;
    });
  }

  bindSwitcher();

  return {
    init, preload, t, setLanguage, mdPath, normalise,
    get lang() { return active; },
    get dir() { return (LOCALES[active] || LOCALES[DEFAULT]).dir; },
    get isDefault() { return active === DEFAULT; },
    locales: LOCALES,
    DEFAULT
  };
})();

window.FiscoraI18N = FiscoraI18N;
