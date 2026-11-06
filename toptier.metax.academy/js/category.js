/** Category detail page controller */
(async function () {
  renderLayout('categories');

  const bannerContent = document.getElementById('banner-content');
  const postsGrid = document.getElementById('posts-grid');
  const relatedTags = document.getElementById('related-tags');
  const otherCategories = document.getElementById('other-categories');

  bannerContent.innerHTML = skeletonBannerHTML();
  postsGrid.innerHTML = skeletonGridHTML(6);
  document.getElementById('results-count').innerHTML = '<span class="skeleton skeleton--line" style="display:inline-block;width:160px;"></span>';
  if (relatedTags) relatedTags.innerHTML = skeletonSidebarListHTML(4);
  if (otherCategories) otherCategories.innerHTML = skeletonSidebarListHTML(5);

  await ContentStore.init();
  renderFooterCategories();
  renderMegaMenu();

  const slug = qs('slug');
  const cat = ContentStore.getCategory(slug);
  const crumb = document.getElementById('crumb-current');

  if (!cat) {
    bannerContent.innerHTML = `<h1>Category Not Found</h1><p>The category you're looking for doesn't exist. <a href="categories.html">Browse all categories</a>.</p>`;
    crumb.textContent = 'Not Found';
    document.getElementById('results-count').innerHTML = '';
    postsGrid.innerHTML = '';
    if (relatedTags) relatedTags.innerHTML = '';
    if (otherCategories) otherCategories.innerHTML = '';
    renderAdUnit('ad-top-leaderboard', 'leaderboard', 'Advertisement');
    renderAdUnit('ad-sidebar', 'sidebar', 'Advertisement');
    return;
  }

  document.title = `${cat.name} Articles — TopTier Insights`;
  document.getElementById('page-description').setAttribute('content', cat.description);
  crumb.textContent = cat.name;

  // Animated hero background: image index "category-XX" — see IMAGE_PROMPTS.md.
  // Applied as a CSS custom property (not an <img> tag) so a not-yet-generated
  // file just falls back to the accent-colored gradient overlay, never a
  // broken-image icon.
  const bannerSection = document.getElementById('category-banner');
  const imgNum = String(cat.img_index || 0).padStart(2, '0');
  bannerSection.classList.add('page-banner--hero');
  bannerSection.style.setProperty('--hero-image', `url('img/category-${imgNum}.jpg')`);
  bannerSection.style.setProperty('--hero-accent', cat.color);
  if (!bannerSection.querySelector('.hero-bg-layer')) {
    bannerSection.insertAdjacentHTML('afterbegin', `
      <div class="hero-bg-layer" aria-hidden="true"></div>
      <div class="hero-bg-overlay" aria-hidden="true"></div>
    `);
  }

  bannerContent.innerHTML = `
    <span class="hero-eyebrow"><i class="fa-solid fa-layer-group"></i> Category</span>
    <div class="page-banner-icon" style="background:${cat.color}"><i class="${cat.icon}"></i></div>
    <h1>${cat.name}</h1>
    <p>${cat.description}</p>
    <span class="cpm-badge cpm-badge--${slugifyTier(cat.cpm_tier)}">${cat.cpm_tier} CPM · ${cat.estimated_cpm}</span>
  `;

  const allPosts = ContentStore.getPostsByCategory(slug);
  const perPage = SITE_CONFIG.postsPerPage;
  let currentPage = 1;

  function render() {
    const start = (currentPage - 1) * perPage;
    const pagePosts = allPosts.slice(start, start + perPage);
    document.getElementById('results-count').textContent = `${allPosts.length} article${allPosts.length === 1 ? '' : 's'} in ${cat.name}`;
    postsGrid.innerHTML = pagePosts.map(postCardHTML).join('') || emptyStateHTML('No articles published in this category yet.');
    renderPagination('pagination', allPosts.length, perPage, currentPage, (page) => {
      currentPage = page;
      render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  render();

  // Related tags (tags belonging to this category)
  const relatedTagsData = ContentStore.tags.filter(t => t.category === slug);
  if (relatedTags) relatedTags.innerHTML = relatedTagsData.map(tagChipHTML).join('') || '<p style="color:#888;font-size:0.85rem;">No tags yet.</p>';

  // Other categories
  const others = ContentStore.getCategoriesByCpm().filter(c => c.slug !== slug).slice(0, 6);
  if (otherCategories) otherCategories.innerHTML = others.map(c => `<a href="category.html?slug=${c.slug}"><span>${c.name}</span><span class="cpm-badge cpm-badge--${slugifyTier(c.cpm_tier)}">${c.cpm_tier}</span></a>`).join('');

  renderAdUnit('ad-top-leaderboard', 'leaderboard', 'Advertisement');
  renderAdUnit('ad-sidebar', 'sidebar', 'Advertisement');

  SEO.setBasic({ title: document.title, description: cat.description, path: `category.html?slug=${slug}` });
  SEO.setBreadcrumb([
    { name: 'Home', path: 'index.html' },
    { name: 'Categories', path: 'categories.html' },
    { name: cat.name, path: `category.html?slug=${slug}` }
  ]);
  SEO.setItemList(allPosts, `category.html?slug=${slug}`);
})();
