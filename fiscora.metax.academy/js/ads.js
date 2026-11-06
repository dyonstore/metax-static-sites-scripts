/* ==========================================================================
   FISCORA — Ad Engine
   Responsive Google AdSense delivery with:
   · lazy mounting (IntersectionObserver) so units load near-viewport → better viewability → higher CPM
   · automatic in-article injection at natural section breaks (high-value fluid units)
   · sticky desktop rail (300x600 — historically the strongest CPM inventory)
   · matched-content / multiplex recirculation block at article end
   · mobile anchor unit with a close control
   · consent gating: non-personalised ads until the reader opts in
   Placeholders render whenever no publisher ID is configured, so layout,
   CLS reservations and spacing are identical before and after activation.
   ========================================================================== */

/* -----------------------------------------------------------------
   1) CONFIGURE HERE — paste your AdSense IDs and every unit goes live
   ----------------------------------------------------------------- */
const AD_CONFIG = {
  /* Verified publisher account for fiscora.metax.academy.
     ads.txt at the site root authorises the same ID:
       google.com, pub-4463113802541266, DIRECT, f08c47fec0942fa0        */
  publisherId: 'ca-pub-4463113802541266',

  /* data-ad-slot IDs from the AdSense dashboard.

     LEAVE A SLOT EMPTY UNTIL YOU HAVE CREATED THAT UNIT. An empty slot
     renders the CLS-reserving placeholder instead of an <ins> carrying an
     invalid slot ID. A wrong ID serves blank space — which reads as a
     defect during site review — whereas a placeholder is site furniture.

     Create these six units under Ads → By ad unit, then paste the numeric
     ID beside the matching key. Nothing else needs to change. */
  slots: {
    leaderboard: '',   // Display · responsive — top of page
    inarticle: '',     // In-article · fluid
    rail: '',          // Display · 300×600 half-page (sticky sidebar)
    multiplex: '',     // Multiplex · matched content (page foot)
    anchor: '',        // Display · responsive (mobile anchor)
    incontent: ''      // In-feed · listing and hub grids
  },

  /* Placement discipline. Google requires ads to be clearly distinguishable
     from content and never to dominate it, so in-article units are spaced
     generously and capped. Manual placement only — no Auto ads, because
     reviewers judge deliberate placement far more kindly. */
  injectEvery: 5,      // minimum content blocks between in-article units
  maxInArticle: 3,     // hard ceiling per article
  lazyMargin: '350px',
  enableAnchor: true,

  /* body[data-page] values that must never carry ads. Utility and reference
     pages showing ads is a classic "low value content" review failure. */
  excludePages: ['saved', 'static', 'glossary'],

  testMode: false      // true → force placeholders even with a publisher ID
};

const AdEngine = (() => {
  const live = () => !!AD_CONFIG.publisherId && !AD_CONFIG.testMode;
  let libRequested = false;
  let mounted = 0;

  const SIZES = {
    leaderboard: { label: 'Advertisement', h: 'ad-h-leaderboard', hint: '970×90 / 728×90 / 320×100 responsive', format: 'auto' },
    inarticle: { label: 'Advertisement', h: 'ad-h-inarticle', hint: 'In-article fluid unit', format: 'fluid' },
    rail: { label: 'Advertisement', h: 'ad-h-rail', hint: '300×600 half-page (sticky)', format: 'auto' },
    multiplex: { label: 'Sponsored content', h: 'ad-h-multiplex', hint: 'Multiplex · matched content', format: 'autorelaxed' },
    incontent: { label: 'Advertisement', h: 'ad-h-inarticle', hint: '336×280 / responsive in-feed', format: 'auto' },
    anchor: { label: 'Advertisement', h: '', hint: '320×50 anchor', format: 'auto' }
  };

  function loadLibrary() {
    if (libRequested || !live()) return;
    libRequested = true;
    const s = document.createElement('script');
    s.async = true;
    s.crossOrigin = 'anonymous';
    s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + AD_CONFIG.publisherId;
    document.head.appendChild(s);
    window.adsbygoogle = window.adsbygoogle || [];
    if (!AdEngine.consentGranted()) {
      window.adsbygoogle.requestNonPersonalizedAds = 1;
    }
  }

  /** Build the inner markup for one slot (real unit or reserved placeholder). */
  function build(type) {
    const meta = SIZES[type] || SIZES.leaderboard;
    const wrapper = document.createElement('div');
    wrapper.className = 'ad-inner';

    if (live() && AD_CONFIG.slots[type]) {
      const ins = document.createElement('ins');
      ins.className = 'adsbygoogle';
      ins.style.display = 'block';
      ins.setAttribute('data-ad-client', AD_CONFIG.publisherId);
      ins.setAttribute('data-ad-slot', AD_CONFIG.slots[type]);
      if (meta.format === 'fluid') {
        ins.setAttribute('data-ad-format', 'fluid');
        ins.setAttribute('data-ad-layout', 'in-article');
      } else {
        ins.setAttribute('data-ad-format', meta.format);
        ins.setAttribute('data-full-width-responsive', 'true');
      }
      wrapper.appendChild(ins);
      return { node: wrapper, real: true, label: meta.label };
    }

    const frame = document.createElement('div');
    frame.className = 'ad-frame ' + meta.h;
    frame.innerHTML =
      '<div class="ad-frame__inner">' +
      '<i class="fa-solid fa-rectangle-ad" aria-hidden="true"></i>' +
      '<b>Responsive ad slot · ' + type + '</b>' +
      '<span>' + meta.hint + '</span>' +
      '</div>';
    wrapper.appendChild(frame);
    return { node: wrapper, real: false, label: meta.label };
  }

  function push(node) {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) { /* library not ready yet — AdSense retries on load */ }
    node.dataset.pushed = '1';
  }

  /** Mount a single container that carries data-ad="type". */
  function mount(host) {
    if (host.dataset.mounted) return;
    host.dataset.mounted = '1';
    const type = host.dataset.ad || 'leaderboard';
    const built = build(type);

    host.classList.add('ad-slot');
    if (type === 'rail') host.classList.add('ad-slot--rail');
    host.setAttribute('role', 'complementary');
    host.setAttribute('aria-label', built.label);

    const label = document.createElement('span');
    label.className = 'ad-label';
    label.textContent = built.label;
    host.appendChild(label);
    host.appendChild(built.node);
    mounted++;

    if (!built.real) return;
    loadLibrary();
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(en => {
        if (en.isIntersecting && !host.dataset.pushed) {
          push(host);
          obs.disconnect();
        }
      });
    }, { rootMargin: AD_CONFIG.lazyMargin });
    io.observe(host);
  }

  /** Insert fluid units at natural reading breaks inside an article body. */
  function autoInject(body) {
    if (!body) return;
    const blocks = Array.from(body.children).filter(el => !el.dataset.ad);
    let placed = 0;
    let sinceLast = 0;
    for (let i = 2; i < blocks.length - 1; i++) {
      sinceLast++;
      const el = blocks[i];
      const nextEl = blocks[i + 1];
      const goodBreak = sinceLast >= AD_CONFIG.injectEvery &&
        nextEl && /^H2$/i.test(nextEl.tagName) === false &&
        !/^(H2|H3)$/i.test(el.tagName);
      if (goodBreak && placed < AD_CONFIG.maxInArticle) {
        const host = document.createElement('div');
        host.dataset.ad = 'inarticle';
        el.after(host);
        mount(host);
        placed++;
        sinceLast = 0;
        i++;
      }
    }
  }

  function anchorUnit() {
    if (!AD_CONFIG.enableAnchor) return;
    if (sessionStorage.getItem('fisc_anchor_closed') === '1') return;
    const bar = document.createElement('aside');
    bar.className = 'ad-anchor';
    bar.innerHTML = '<button class="ad-anchor__close" aria-label="Close advertisement"><i class="fa-solid fa-xmark"></i></button>';
    const host = document.createElement('div');
    host.dataset.ad = 'anchor';
    bar.appendChild(host);
    document.body.appendChild(bar);
    mount(host);
    bar.querySelector('.ad-anchor__close').addEventListener('click', () => {
      bar.classList.remove('is-up');
      sessionStorage.setItem('fisc_anchor_closed', '1');
    });
    // Reveal only after the reader engages — protects above-the-fold experience
    let shown = false;
    const reveal = () => {
      if (shown) return;
      if (window.scrollY > 700) { bar.classList.add('is-up'); shown = true; }
    };
    window.addEventListener('scroll', reveal, { passive: true });
    setTimeout(reveal, 12000);
  }

  return {
    consentGranted() { return localStorage.getItem('fisc_consent') === 'granted'; },
    setConsent(v) {
      localStorage.setItem('fisc_consent', v);
      if (v === 'granted' && window.adsbygoogle) {
        delete window.adsbygoogle.requestNonPersonalizedAds;
      }
    },
    mount,
    init() {
      /* Utility / reference pages carry no advertising at all. Remove the
         hosts rather than hide them, so nothing can be lazily mounted later. */
      const kind = (document.body.dataset.page || '');
      if ((AD_CONFIG.excludePages || []).indexOf(kind) > -1) {
        document.querySelectorAll('[data-ad]').forEach(el => el.remove());
        return;
      }
      document.querySelectorAll('[data-ad]').forEach(mount);
      autoInject(document.getElementById('article-body'));
      anchorUnit();
    },
    stats() { return { mounted, live: live() }; }
  };
})();

if (typeof window !== 'undefined') { window.AD_CONFIG = AD_CONFIG; window.AdEngine = AdEngine; }
