/** Homepage controller */
(async function () {
  // Render the header/footer shell immediately so nav + branding are never
  // blank while data loads, then paint skeleton placeholders into every
  // section that depends on ContentStore before awaiting it.
  renderLayout('home');

  const featuredContainer = document.getElementById('featured-container');
  const catPreview = document.getElementById('categories-preview');
  const tagsPreview = document.getElementById('tags-preview');
  const latestGrid = document.getElementById('latest-container');
  const trendingContainer = document.getElementById('home-trending');
  const countryTableEl = document.getElementById('country-cpm-table');
  const geoBadgeContainer = document.getElementById('geo-badge-container');
  const heroSearchInput = document.getElementById('hero-search-input');

  featuredContainer.innerHTML = skeletonFeaturedHTML();
  catPreview.innerHTML = skeletonCategoryGridHTML(6);
  tagsPreview.innerHTML = skeletonTagsCloudHTML(14);
  latestGrid.innerHTML = skeletonGridHTML(6);
  if (trendingContainer) trendingContainer.innerHTML = skeletonGridHTML(3);

  // Kick off content loading and (best-effort) geolocation in parallel —
  // neither depends on the other, and Geo.init() has its own internal
  // fallbacks so it never rejects.
  const [, geo] = await Promise.all([
    ContentStore.init(),
    (typeof Geo !== 'undefined' ? Geo.init() : Promise.resolve({ country: 'XX', source: 'default' }))
  ]);

  renderFooterCategories();
  renderMegaMenu();

  const countryCode = geo && geo.country ? geo.country : 'XX';
  const countryRow = ContentStore.getCountryCpmRow(countryCode);
  const isKnownCountry = ContentStore.getAllCountryCpmRows().some(c => c.code === countryCode);
  const priorityCats = (countryRow && countryRow.top_categories) || [];

  // Geo badge + personalized search placeholder
  if (geoBadgeContainer) {
    geoBadgeContainer.innerHTML = geoBadgeHTML(countryRow, isKnownCountry ? geo.source : 'default');
  }
  if (heroSearchInput && priorityCats.length) {
    const sampleCat = ContentStore.getCategory(priorityCats[0]);
    if (sampleCat) {
      heroSearchInput.placeholder = `Search for “${sampleCat.name}”, “VPN”, “debt relief”…`;
    }
  }

  // Featured section (1 large + up to 3 side cards) — prioritized toward
  // the visitor's country's top categories among the featured pool.
  const featuredPool = ContentStore.getFeaturedPosts(20);
  const featuredSorted = priorityCats.length
    ? [...featuredPool].sort((a, b) => {
        const aIn = priorityCats.includes(a.category) ? 0 : 1;
        const bIn = priorityCats.includes(b.category) ? 0 : 1;
        return aIn - bIn;
      })
    : featuredPool;
  const featured = featuredSorted.slice(0, 4);
  const featuredSubtitle = document.getElementById('featured-subtitle');
  if (featured.length) {
    const [main, ...rest] = featured;
    featuredContainer.innerHTML = `
      ${featuredCardHTML(main)}
      <div class="featured-side">
        ${rest.map(featuredCardHTML).join('')}
      </div>
    `;
    if (featuredSubtitle && isKnownCountry) {
      featuredSubtitle.textContent = `Editor's picks, prioritized for ${countryRow.name} readers`;
    }
  } else {
    featuredContainer.innerHTML = emptyStateHTML('No featured articles yet. Upload some Markdown posts to get started.');
  }

  // Categories preview (top 6 by CPM, re-ordered toward the visitor's country)
  const topCats = ContentStore.getCategoriesForCountry(countryCode, 6);
  catPreview.innerHTML = topCats.map(categoryCardHTML).join('') || emptyStateHTML('No categories configured.');
  const categoriesSubtitle = document.getElementById('categories-subtitle');
  if (categoriesSubtitle && isKnownCountry) {
    categoriesSubtitle.textContent = `Topics ranked by advertiser demand — tuned for ${countryRow.name} (${countryRow.cpm_range} CPM)`;
  }

  // Tags preview — reordered toward the visitor's country's top categories
  const topTags = ContentStore.getTagsForCountry(countryCode, 14);
  tagsPreview.innerHTML = topTags.map(tagChipHTML).join('') || emptyStateHTML('No tags configured.');
  const tagsSubtitle = document.getElementById('tags-subtitle');
  if (tagsSubtitle && isKnownCountry) {
    tagsSubtitle.textContent = `Jump straight to a specific niche — popular with ${countryRow.name} readers first`;
  }

  // Latest posts with pagination
  const perPage = SITE_CONFIG.postsPerPage;
  let currentPage = 1;

  function renderLatest() {
    const all = ContentStore.posts;
    const start = (currentPage - 1) * perPage;
    const pagePosts = all.slice(start, start + perPage);
    latestGrid.innerHTML = pagePosts.map(postCardHTML).join('') || emptyStateHTML('No articles published yet. Upload Markdown files to the /posts folder and list them in data/posts-manifest.json.');
    renderPagination('latest-pagination', all.length, perPage, currentPage, (page) => {
      currentPage = page;
      renderLatest();
      document.getElementById('latest-container').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
  renderLatest();

  // Trending (client-side view-count based, with graceful fallback) — once
  // real view-count signal exists it still leads, but ties/fallback order
  // are nudged toward the visitor's country's top categories so "Trending"
  // stays relevant even before real traffic accumulates.
  if (trendingContainer) {
    let trending = Engagement.getTrending(6);
    if (priorityCats.length) {
      trending = [...trending].sort((a, b) => {
        const aIn = priorityCats.includes(a.category) ? 0 : 1;
        const bIn = priorityCats.includes(b.category) ? 0 : 1;
        return aIn - bIn;
      });
    }
    trendingContainer.innerHTML = trending.map(postCardHTML).join('') || emptyStateHTML('No trending data yet.');
    const trendingSubtitle = document.getElementById('trending-subtitle');
    if (trendingSubtitle && isKnownCountry) {
      trendingSubtitle.textContent = `What readers are viewing most — weighted for ${countryRow.name}`;
    }
  }

  // CPM ranges by country table
  if (countryTableEl) {
    const rows = ContentStore.getAllCountryCpmRows();
    countryTableEl.innerHTML = `
      <table class="country-cpm-table">
        <thead>
          <tr>
            <th>Country</th>
            <th>Top Topics</th>
            <th>Est. CPM Range</th>
          </tr>
        </thead>
        <tbody>
          ${rows.map(r => countryCpmRowHTML(r, isKnownCountry && r.code === countryCode)).join('')}
        </tbody>
      </table>
    `;
  }

  // Newsletter capture
  Engagement.initNewsletterForm('newsletter-form-home');

  // SEO: WebSite/Organization schema + basic meta
  SEO.setWebsiteSchema();
  SEO.setBasic({
    title: document.title,
    description: document.querySelector('meta[name="description"]').getAttribute('content'),
    path: 'index.html'
  });

  // Growth utilities
  Engagement.initScrollToTop();
  Engagement.registerServiceWorker();

  // Ads
  renderAdUnit('ad-top-leaderboard', 'leaderboard', 'Advertisement');
  renderAdUnit('in-content-ad-home', 'rectangle', 'Advertisement');
})();
