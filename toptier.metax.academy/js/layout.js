/**
 * Shared header / footer / mobile-nav / mega-menu rendering.
 * Every page includes <header id="site-header"></header> and
 * <footer id="site-footer"></footer> placeholders; this script fills them in
 * so navigation stays consistent across the whole site.
 *
 * Nav structure: Home, then FOUR mega-menu nav items —
 *   Categories   (full category grid)
 *   Topics       (formerly a plain "Tags" link; now a mega-menu grouping
 *                 every tag/topic under its parent category, since tags are
 *                 really fine-grained sub-topics of a category rather than a
 *                 flat, unrelated cloud)
 *   MetaX.Academy (Course Series directory, grouped by pillar)
 *   Company       (About/Contact/Legal & Trust links)
 * All four share the same generalized hover-intent open/close JS below.
 */
function renderLayout(activePage = '') {
  const headerEl = document.getElementById('site-header');
  const footerEl = document.getElementById('site-footer');

  if (headerEl) {
    headerEl.innerHTML = `
      <div class="header-inner">
        <a href="index.html" class="brand">
          <i class="fa-solid fa-layer-group"></i>
          <span>${SITE_CONFIG.siteName}</span>
        </a>
        <nav class="main-nav" id="main-nav">
          <form class="mobile-nav-search" action="search.html" method="get">
            <input type="search" name="q" placeholder="Search articles…" aria-label="Search articles">
            <button type="submit" aria-label="Submit search"><i class="fa-solid fa-magnifying-glass"></i></button>
          </form>
          <a href="index.html" class="${activePage === 'home' ? 'active' : ''}">Home</a>

          <div class="nav-item has-mega" id="nav-categories-item">
            <a href="categories.html" class="${activePage === 'categories' ? 'active' : ''}" id="nav-categories-link">
              Categories <i class="fa-solid fa-chevron-down mega-caret" aria-hidden="true"></i>
            </a>
            <button type="button" class="mega-toggle" aria-expanded="false" aria-controls="mega-menu-categories-panel" aria-label="Show categories menu">
              <i class="fa-solid fa-chevron-down"></i>
            </button>
            <div class="mega-menu" id="mega-menu-categories-panel">
              <div class="mega-menu__inner">
                <div class="mega-menu__header-row">
                  <h4 class="mega-menu__heading">Browse All Categories</h4>
                  <a href="categories.html" class="mega-menu__viewall">View all categories <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div class="mega-menu__grid" id="mega-menu-categories"></div>
              </div>
            </div>
          </div>

          <div class="nav-item has-mega" id="nav-topics-item">
            <a href="tags.html" class="${activePage === 'tags' ? 'active' : ''}" id="nav-topics-link">
              Topics <i class="fa-solid fa-chevron-down mega-caret" aria-hidden="true"></i>
            </a>
            <button type="button" class="mega-toggle" aria-expanded="false" aria-controls="mega-menu-topics-panel" aria-label="Show topics menu">
              <i class="fa-solid fa-chevron-down"></i>
            </button>
            <div class="mega-menu mega-menu--topics" id="mega-menu-topics-panel">
              <div class="mega-menu__inner">
                <div class="mega-menu__header-row">
                  <h4 class="mega-menu__heading">Browse Topics by Category</h4>
                  <a href="tags.html" class="mega-menu__viewall">View all topics <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div class="mega-menu__topics-grid" id="mega-menu-topics-grid"></div>
              </div>
            </div>
          </div>

          <div class="nav-item has-mega" id="nav-academy-item">
            <a href="metax-courses.html" class="${activePage === 'academy' ? 'active' : ''}" id="nav-academy-link">
              MetaX.Academy <i class="fa-solid fa-chevron-down mega-caret" aria-hidden="true"></i>
            </a>
            <button type="button" class="mega-toggle" aria-expanded="false" aria-controls="mega-menu-academy-panel" aria-label="Show MetaX.Academy menu">
              <i class="fa-solid fa-chevron-down"></i>
            </button>
            <div class="mega-menu mega-menu--compact" id="mega-menu-academy-panel">
              <div class="mega-menu__inner">
                <div class="mega-menu__cols">
                  <div class="mega-menu__col">
                    <h4 class="mega-menu__heading">Course Series</h4>
                    <a href="metax-courses.html">Course Directory</a>
                    <a href="metax-courses.html?pillar=TopTech">TopTech pillar</a>
                    <a href="metax-courses.html?pillar=Academies%20Community">Academies Community pillar</a>
                    <a href="metax-courses.html?pillar=MacroLifeTach">MacroLifeTach pillar</a>
                  </div>
                  <div class="mega-menu__col">
                    <h4 class="mega-menu__heading">About the Series</h4>
                    <a href="https://metax.academy" target="_blank" rel="noopener noreferrer">MetaX.Academy ↗</a>
                    <a href="metax-courses/COURSE_TOC_SCHEMA.md" target="_blank" rel="noopener noreferrer">Course-TOC Format Spec ↗</a>
                    <span class="mega-menu__note">Curated by Maher — review artifacts, not finished lessons.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="nav-item has-mega" id="nav-company-item">
            <a href="about.html" class="${activePage === 'company' ? 'active' : ''}" id="nav-company-link">
              Company <i class="fa-solid fa-chevron-down mega-caret" aria-hidden="true"></i>
            </a>
            <button type="button" class="mega-toggle" aria-expanded="false" aria-controls="mega-menu-company-panel" aria-label="Show company menu">
              <i class="fa-solid fa-chevron-down"></i>
            </button>
            <div class="mega-menu mega-menu--compact" id="mega-menu-company-panel">
              <div class="mega-menu__inner">
                <div class="mega-menu__cols">
                  <div class="mega-menu__col">
                    <h4 class="mega-menu__heading">Company</h4>
                    <a href="about.html">About Us</a>
                    <a href="author.html">Our Editor, Maher</a>
                    <a href="contact.html">Contact</a>
                    <a href="search.html">Search</a>
                  </div>
                  <div class="mega-menu__col">
                    <h4 class="mega-menu__heading">Legal &amp; Trust</h4>
                    <a href="privacy.html">Privacy Policy</a>
                    <a href="disclaimer.html">Advertiser Disclosure</a>
                    <a href="corrections.html">Corrections</a>
                    <a href="feed.xml">RSS Feed</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <form class="header-search" action="search.html" method="get">
          <input type="search" name="q" placeholder="Search articles…" aria-label="Search articles">
          <button type="submit" aria-label="Submit search"><i class="fa-solid fa-magnifying-glass"></i></button>
        </form>
        <button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
    `;

    // The mega-menu panels are absolutely positioned relative to their own
    // nav-item (so each of the four can open independently), but their
    // vertical offset is pinned to the bottom edge of the actual header,
    // which can vary slightly by page/font-load state — so we measure the
    // header's real height and expose it as a CSS variable instead of
    // hard-coding a pixel value that could drift out of sync and leave a
    // hoverable "dead zone" gap between the nav and the panel.
    function updateHeaderHeightVar() {
      document.documentElement.style.setProperty('--header-height', `${headerEl.offsetHeight}px`);
    }
    updateHeaderHeightVar();
    window.addEventListener('resize', updateHeaderHeightVar);

    const toggle = document.getElementById('nav-toggle');
    const nav = document.getElementById('main-nav');

    // Mega-menu open/close is driven entirely by JS hover-intent timers
    // rather than plain CSS :hover. A pure-CSS approach (hover the trigger,
    // reveal a panel positioned elsewhere) breaks the instant the pointer
    // crosses ANY pixel that isn't part of the trigger or the panel itself —
    // which is exactly what happens here, since each panel is a wide strip
    // that starts a few pixels below the nav link. That gap used to be a
    // dead zone: moving the mouse from the trigger down into the menu made
    // it flicker shut before the pointer arrived. Using explicit
    // mouseenter/mouseleave with a short close-delay (and having the
    // panel's own mouseenter cancel that delay) means the open state
    // survives crossing the gap, however the pointer moves through it.
    //
    // Generalized to support any number of `.nav-item.has-mega` blocks (now
    // four: Categories / Topics / MetaX.Academy / Company) rather than one
    // hard-coded item — opening any one of them closes the others, matching
    // standard mega-menu UX (only one panel visible at a time).
    const OPEN_DESKTOP_MIN_WIDTH = 861;
    function isDesktop() { return window.innerWidth >= OPEN_DESKTOP_MIN_WIDTH; }

    const megaItems = Array.from(document.querySelectorAll('.nav-item.has-mega'));
    const closers = [];

    megaItems.forEach((item) => {
      const toggleBtn = item.querySelector('.mega-toggle');
      const panel = item.querySelector('.mega-menu');
      let closeTimer = null;

      function openThis() {
        clearTimeout(closeTimer);
        closers.forEach((fn) => { if (fn.item !== item) fn.closeImmediate(); });
        item.classList.add('open');
        if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'true');
      }
      function closeThis(immediate = false) {
        clearTimeout(closeTimer);
        if (immediate) {
          item.classList.remove('open');
          if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false');
          return;
        }
        closeTimer = setTimeout(() => {
          item.classList.remove('open');
          if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false');
        }, 260);
      }

      item.addEventListener('mouseenter', () => { if (isDesktop()) openThis(); });
      item.addEventListener('mouseleave', () => { if (isDesktop()) closeThis(); });
      if (panel) {
        panel.addEventListener('mouseenter', () => { if (isDesktop()) openThis(); });
        panel.addEventListener('mouseleave', () => { if (isDesktop()) closeThis(); });
      }
      // Explicit click toggle — used for the mobile accordion, and as a
      // fallback for touch/keyboard users on desktop where hover doesn't apply.
      if (toggleBtn) {
        toggleBtn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          if (item.classList.contains('open')) closeThis(true);
          else openThis();
        });
      }

      closers.push({ item, closeImmediate: () => closeThis(true) });
    });

    function closeAllMegaImmediate() {
      closers.forEach((fn) => fn.closeImmediate());
    }

    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
      if (!isOpen) closeAllMegaImmediate();
    });
    document.addEventListener('click', (e) => {
      megaItems.forEach((item) => {
        if (!item.contains(e.target)) {
          const found = closers.find((c) => c.item === item);
          if (found) found.closeImmediate();
        }
      });
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeAllMegaImmediate();
    });
  }

  renderMegaMenu();

  if (footerEl) {
    const year = new Date().getFullYear();
    footerEl.innerHTML = `
      <div class="footer-inner">
        <div class="footer-newsletter">
          <div class="newsletter-box compact" style="display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap;">
            <div style="text-align:left;">
              <h3 style="font-size:1.15rem;margin-bottom:4px;"><i class="fa-regular fa-paper-plane"></i> Stay Ahead of the Curve</h3>
              <p style="margin:0;font-size:0.9rem;">Weekly insights on insurance, finance &amp; more — straight to your inbox.</p>
            </div>
            <div>
              <form class="newsletter-form" id="newsletter-form-footer">
                <input type="email" placeholder="you@example.com" required aria-label="Email address">
                <button type="submit">Subscribe</button>
              </form>
              <p class="newsletter-success" id="newsletter-form-footer-success" style="margin-top:8px;"><i class="fa-solid fa-circle-check"></i> Subscribed!</p>
            </div>
          </div>
        </div>
        <div class="footer-col footer-brand">
          <a href="index.html" class="brand">
            <i class="fa-solid fa-layer-group"></i>
            <span>${SITE_CONFIG.siteName}</span>
          </a>
          <p>${SITE_CONFIG.siteDescription}</p>
        </div>
        <div class="footer-col">
          <h4>Explore</h4>
          <a href="index.html">Home</a>
          <a href="categories.html">All Categories</a>
          <a href="tags.html">All Topics</a>
          <a href="search.html">Search</a>
          <a href="feed.xml">RSS Feed</a>
        </div>
        <div class="footer-col">
          <h4>MetaX.Academy</h4>
          <a href="metax-courses.html">Course Directory</a>
          <a href="https://metax.academy" target="_blank" rel="noopener noreferrer">MetaX.Academy ↗</a>
          <span style="display:block;font-size:0.78rem;color:var(--footer-muted,#9aa3b5);margin-top:6px;">Curated by Maher</span>
        </div>
        <div class="footer-col">
          <h4>Top Categories</h4>
          <div id="footer-categories"></div>
        </div>
        <div class="footer-col">
          <h4>Legal</h4>
          <a href="privacy.html">Privacy Policy</a>
          <a href="disclaimer.html">Advertiser Disclosure</a>
          <a href="corrections.html">Corrections</a>
          <a href="about.html">About Us</a>
          <a href="contact.html">Contact</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; ${year} ${SITE_CONFIG.siteName}. All rights reserved.</p>
      </div>
    `;

    // Wire up the footer newsletter capture form (present on every page)
    if (typeof Engagement !== 'undefined' && Engagement.initNewsletterForm) {
      Engagement.initNewsletterForm('newsletter-form-footer');
    }

    // Must run AFTER footerEl.innerHTML is set above, since it targets
    // #footer-categories which only exists once that markup is in the DOM.
    renderFooterCategories();
  }
}

/**
 * Fills the footer's "Top Categories" column once ContentStore data is
 * available. Renders a lightweight skeleton immediately (safe to call before
 * ContentStore.init() resolves) and swaps in real links once data is ready.
 * Call this again any time after ContentStore.init() to refresh with real data.
 */
function renderFooterCategories() {
  const footerCats = document.getElementById('footer-categories');
  if (!footerCats) return;
  if (typeof ContentStore !== 'undefined' && ContentStore.categories && ContentStore.categories.length) {
    footerCats.innerHTML = ContentStore.categories
      .slice(0, 5)
      .map(c => `<a href="category.html?slug=${c.slug}">${c.name}</a>`)
      .join('');
  } else {
    footerCats.innerHTML = Array.from({ length: 5 }).map(() => `<div class="skeleton skeleton--line" style="width:${60 + Math.round(Math.random() * 25)}%;background:rgba(255,255,255,0.08);"></div>`).join('');
  }
}

/**
 * Works out which category the CURRENT page belongs to, purely from the URL
 * and already-loaded ContentStore data — so the mega-menus (and, by
 * extension, the "Categories"/"Topics" nav links) can mark the right entry
 * as selected on every category page, every tag/topic page (via the tag's
 * parent category) and every article page (via the article's own
 * category), without every page controller needing to pass that context in
 * manually.
 */
function getCurrentPageName() {
  // Works out the current "page" (category / tag / post / index / etc.)
  // from the URL path alone. This can NOT just compare against
  // '<name>.html' — some hosts (e.g. Cloudflare Pages' default "clean URL"
  // redirect) serve /category.html at the URL /category, stripping the
  // extension entirely, so window.location.pathname is "/category" there
  // even though every internal <a href> in this site still points at
  // "category.html". Normalizing both forms to a bare page name (no
  // extension, no trailing slash) makes the active-state logic below work
  // identically whether the extension is present or has been stripped by
  // the host.
  let last = window.location.pathname.split('/').pop() || 'index.html';
  last = last.replace(/\.html$/i, '');
  return last === '' ? 'index' : last;
}

function getContextCategorySlug() {
  if (typeof ContentStore === 'undefined' || !ContentStore.ready) return null;
  const path = getCurrentPageName();
  const slug = typeof qs === 'function' ? qs('slug') : new URLSearchParams(window.location.search).get('slug');
  if (!slug) return null;
  if (path === 'category') return slug;
  if (path === 'tag') {
    const tag = ContentStore.getTag(slug);
    return tag ? tag.category : null;
  }
  if (path === 'post') {
    const post = ContentStore.getPostBySlug(slug);
    return post ? post.category : null;
  }
  return null;
}

/**
 * Refreshes BOTH mega-menus (Categories grid + Topics-by-category grid) from
 * live ContentStore data. Kept as one entry point — under this same name —
 * so every existing page controller that already calls `renderMegaMenu()`
 * after `ContentStore.init()` keeps working unchanged; internally it now
 * fans out to the two panel-specific renderers below.
 */
function renderMegaMenu() {
  renderCategoriesMegaGrid();
  renderTopicsMegaMenu();
}

/**
 * Fills the header "Categories" mega-menu with the full category grid (4
 * columns, wide panel), and marks whichever category matches the currently
 * open URL as selected. Renders a skeleton immediately (safe before
 * ContentStore.init() resolves) and swaps in real content once data is
 * ready.
 */
function renderCategoriesMegaGrid() {
  const catGrid = document.getElementById('mega-menu-categories');
  if (!catGrid) return;

  const hasData = typeof ContentStore !== 'undefined' && ContentStore.categories && ContentStore.categories.length;

  if (hasData) {
    const activeCatSlug = getContextCategorySlug();

    catGrid.innerHTML = ContentStore.categories.map(c => {
      const isActive = c.slug === activeCatSlug;
      return `
      <a href="category.html?slug=${c.slug}" class="mega-menu__cat${isActive ? ' is-active' : ''}"${isActive ? ' aria-current="page"' : ''}>
        <span class="mega-menu__cat-icon" style="background:color-mix(in srgb, ${c.color} 14%, white); color:${c.color};"><i class="${c.icon}"></i></span>
        <span class="mega-menu__cat-text">
          <strong>${c.name}</strong>
          <em>${c.estimated_cpm} CPM</em>
        </span>
      </a>
    `;
    }).join('');

    // Also reflect "we're somewhere inside Categories" on the top-level nav
    // link itself, even on pages (tag/post) whose top-level active state is
    // set to something else by renderLayout's activePage argument.
    const navCategoriesLink = document.getElementById('nav-categories-link');
    if (navCategoriesLink && activeCatSlug) navCategoriesLink.classList.add('active');
  } else {
    catGrid.innerHTML = Array.from({ length: 8 }).map(() => `
      <span class="mega-menu__cat mega-menu__cat--skeleton">
        <span class="skeleton skeleton--icon"></span>
        <span class="mega-menu__cat-text">
          <span class="skeleton skeleton--line" style="width:85%;"></span>
          <span class="skeleton skeleton--line" style="width:50%;height:9px;"></span>
        </span>
      </span>
    `).join('');
  }
}

/**
 * Fills the header "Topics" mega-menu — tags/topics grouped under their
 * parent category (each category becomes a sub-menu heading, its tags the
 * sub-menu items underneath), instead of the old flat "Popular High-CPM
 * Tags" chip row. Every category is shown (up to its 4 highest-CPM topics,
 * with a "+N more" link into the filterable tags.html for the rest), sorted
 * category-by-CPM the same way the Categories mega-menu is, so the two
 * panels feel like one consistent taxonomy rather than two unrelated lists.
 */
function renderTopicsMegaMenu() {
  const grid = document.getElementById('mega-menu-topics-grid');
  if (!grid) return;

  const hasData = typeof ContentStore !== 'undefined' && ContentStore.categories && ContentStore.categories.length && ContentStore.tags;

  if (hasData) {
    const activeCatSlug = getContextCategorySlug();
    const path = getCurrentPageName();
    const activeTagSlug = path === 'tag' ? qs('slug') : null;
    const tierOrder = { 'Very High': 0, 'High': 1, 'Medium-High': 2, 'Medium': 3, 'Low': 4 };

    const cats = ContentStore.getCategoriesByCpm();
    grid.innerHTML = cats.map(cat => {
      const catTags = ContentStore.tags
        .filter(t => t.category === cat.slug)
        .sort((a, b) => (tierOrder[a.cpm_tier] ?? 9) - (tierOrder[b.cpm_tier] ?? 9));
      if (!catTags.length) return '';
      const shown = catTags.slice(0, 4);
      const extra = catTags.length - shown.length;
      const isCatActive = cat.slug === activeCatSlug;
      return `
        <div class="mega-menu__topic-group">
          <a href="category.html?slug=${cat.slug}" class="mega-menu__topic-group-title${isCatActive ? ' is-active' : ''}">${cat.name}</a>
          <ul class="mega-menu__topic-list">
            ${shown.map(t => `<li><a href="tag.html?slug=${t.slug}"${t.slug === activeTagSlug ? ' class="is-active" aria-current="page"' : ''}>${t.name}</a></li>`).join('')}
            ${extra > 0 ? `<li><a href="tags.html?category=${cat.slug}" class="mega-menu__topic-more">+${extra} more topic${extra === 1 ? '' : 's'}</a></li>` : ''}
          </ul>
        </div>
      `;
    }).join('');

    const navTopicsLink = document.getElementById('nav-topics-link');
    if (navTopicsLink && activeCatSlug) navTopicsLink.classList.add('active');
  } else {
    grid.innerHTML = Array.from({ length: 8 }).map(() => `
      <div class="mega-menu__topic-group mega-menu__topic-group--skeleton">
        <span class="skeleton skeleton--line" style="width:65%;height:12px;"></span>
        <span class="skeleton skeleton--line" style="width:85%;"></span>
        <span class="skeleton skeleton--line" style="width:70%;"></span>
        <span class="skeleton skeleton--line" style="width:55%;"></span>
      </div>
    `).join('');
  }
}
