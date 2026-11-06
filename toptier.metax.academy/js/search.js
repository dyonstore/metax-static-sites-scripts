/** Search page controller */
(async function () {
  renderLayout('search');

  const postsGrid = document.getElementById('posts-grid');
  postsGrid.innerHTML = skeletonGridHTML(6);
  document.getElementById('results-count').innerHTML = '<span class="skeleton skeleton--line" style="display:inline-block;width:160px;"></span>';

  await ContentStore.init();
  renderFooterCategories();
  renderMegaMenu();

  const catFilter = document.getElementById('category-filter');
  ContentStore.categories.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c.slug;
    opt.textContent = c.name;
    catFilter.appendChild(opt);
  });

  const searchInput = document.getElementById('search-input');
  const sortFilter = document.getElementById('sort-filter');
  const form = document.getElementById('search-form');

  const initialQuery = qs('q') || '';
  searchInput.value = initialQuery;

  const perPage = SITE_CONFIG.postsPerPage;
  let currentPage = 1;

  function getResults() {
    const query = searchInput.value.trim();
    let results = query ? ContentStore.search(query) : [...ContentStore.posts];
    const cat = catFilter.value;
    if (cat) results = results.filter(p => p.category === cat);

    const sort = sortFilter.value;
    if (sort === 'newest') results = results.sort((a, b) => new Date(b.date) - new Date(a.date));
    if (sort === 'oldest') results = results.sort((a, b) => new Date(a.date) - new Date(b.date));

    return { results, query };
  }

  function render() {
    const { results, query } = getResults();
    const label = query ? `“${query}”` : 'all articles';
    document.getElementById('results-count').textContent = `${results.length} result${results.length === 1 ? '' : 's'} for ${label}`;

    const start = (currentPage - 1) * perPage;
    const pagePosts = results.slice(start, start + perPage);
    postsGrid.innerHTML = pagePosts.map(postCardHTML).join('') || emptyStateHTML('No articles matched your search. Try a different keyword.');

    renderPagination('pagination', results.length, perPage, currentPage, (page) => {
      currentPage = page;
      render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    currentPage = 1;
    const url = new URL(window.location.href);
    url.searchParams.set('q', searchInput.value.trim());
    window.history.replaceState({}, '', url);
    render();
  });
  catFilter.addEventListener('change', () => { currentPage = 1; render(); });
  sortFilter.addEventListener('change', () => { currentPage = 1; render(); });

  render();
  renderAdUnit('ad-top-leaderboard', 'leaderboard', 'Advertisement');

  SEO.setBasic({ title: document.title, description: 'Search all articles by keyword, category or tag.', path: 'search.html' });
  SEO.setBreadcrumb([{ name: 'Home', path: 'index.html' }, { name: 'Search', path: 'search.html' }]);
  Engagement.initScrollToTop();
})();
