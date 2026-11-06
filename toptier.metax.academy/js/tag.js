/** Tag detail page controller */
(async function () {
  renderLayout('tags');

  const bannerContent = document.getElementById('banner-content');
  const postsGrid = document.getElementById('posts-grid');
  const parentCategory = document.getElementById('parent-category');
  const otherTags = document.getElementById('other-tags');

  bannerContent.innerHTML = skeletonBannerHTML();
  postsGrid.innerHTML = skeletonGridHTML(6);
  document.getElementById('results-count').innerHTML = '<span class="skeleton skeleton--line" style="display:inline-block;width:160px;"></span>';
  if (parentCategory) parentCategory.innerHTML = skeletonSidebarListHTML(1);
  if (otherTags) otherTags.innerHTML = skeletonSidebarListHTML(6);

  await ContentStore.init();
  renderFooterCategories();
  renderMegaMenu();

  const slug = qs('slug');
  const tag = ContentStore.getTag(slug);
  const crumb = document.getElementById('crumb-current');

  if (!tag) {
    bannerContent.innerHTML = `<h1>Topic Not Found</h1><p>The topic you're looking for doesn't exist. <a href="tags.html">Browse all topics</a>.</p>`;
    crumb.textContent = 'Not Found';
    document.getElementById('results-count').innerHTML = '';
    postsGrid.innerHTML = '';
    if (parentCategory) parentCategory.innerHTML = '';
    if (otherTags) otherTags.innerHTML = '';
    renderAdUnit('ad-top-leaderboard', 'leaderboard', 'Advertisement');
    renderAdUnit('ad-sidebar', 'sidebar', 'Advertisement');
    return;
  }

  document.title = `${tag.name} Topic Articles — TopTier Insights`;
  crumb.textContent = tag.name;

  // Animated hero background: reuses the parent category's image index
  // ("category-XX" — see IMAGE_PROMPTS.md) so tags don't need their own
  // unique image set. Applied as a CSS custom property (not an <img> tag)
  // so a not-yet-generated file just falls back to the accent-colored
  // gradient overlay, never a broken-image icon.
  const parentCat = ContentStore.getCategory(tag.category);
  const tagBanner = document.getElementById('tag-banner');
  const tagImgNum = String((parentCat && parentCat.img_index) || 0).padStart(2, '0');
  const tagAccent = (parentCat && parentCat.color) || '#2563eb';
  tagBanner.classList.add('page-banner--hero');
  tagBanner.style.setProperty('--hero-image', `url('img/category-${tagImgNum}.jpg')`);
  tagBanner.style.setProperty('--hero-accent', tagAccent);
  if (!tagBanner.querySelector('.hero-bg-layer')) {
    tagBanner.insertAdjacentHTML('afterbegin', `
      <div class="hero-bg-layer" aria-hidden="true"></div>
      <div class="hero-bg-overlay" aria-hidden="true"></div>
    `);
  }

  bannerContent.innerHTML = `
    <span class="hero-eyebrow"><i class="fa-solid fa-tag"></i> Topic</span>
    <h1>${tag.name}</h1>
    <p>Articles tagged with “${tag.name}”.</p>
    <span class="cpm-badge cpm-badge--${slugifyTier(tag.cpm_tier)}">${tag.cpm_tier} CPM</span>
  `;

  const allPosts = ContentStore.getPostsByTag(slug);
  const perPage = SITE_CONFIG.postsPerPage;
  let currentPage = 1;

  function render() {
    const start = (currentPage - 1) * perPage;
    const pagePosts = allPosts.slice(start, start + perPage);
    document.getElementById('results-count').textContent = `${allPosts.length} article${allPosts.length === 1 ? '' : 's'} tagged “${tag.name}”`;
    postsGrid.innerHTML = pagePosts.map(postCardHTML).join('') || emptyStateHTML('No articles tagged with this term yet.');
    renderPagination('pagination', allPosts.length, perPage, currentPage, (page) => {
      currentPage = page;
      render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  render();

  if (parentCategory) parentCategory.innerHTML = parentCat
    ? `<a href="category.html?slug=${parentCat.slug}" class="sidebar-list" style="display:flex;align-items:center;gap:10px;"><i class="${parentCat.icon}" style="color:${parentCat.color}"></i> <span>${parentCat.name}</span></a>`
    : '<p style="color:#888;font-size:0.85rem;">No parent category.</p>';

  const others = ContentStore.getTagsByCpm().filter(t => t.slug !== slug).slice(0, 8);
  if (otherTags) otherTags.innerHTML = others.map(t => `<a href="tag.html?slug=${t.slug}"><span>${t.name}</span><span class="cpm-badge cpm-badge--${slugifyTier(t.cpm_tier)}">${t.cpm_tier}</span></a>`).join('');

  renderAdUnit('ad-top-leaderboard', 'leaderboard', 'Advertisement');
  renderAdUnit('ad-sidebar', 'sidebar', 'Advertisement');

  SEO.setBasic({ title: document.title, description: `Browse articles about the topic ${tag.name}.`, path: `tag.html?slug=${slug}` });
  SEO.setBreadcrumb([
    { name: 'Home', path: 'index.html' },
    { name: 'Topics', path: 'tags.html' },
    { name: tag.name, path: `tag.html?slug=${slug}` }
  ]);
  SEO.setItemList(allPosts, `tag.html?slug=${slug}`);
})();
