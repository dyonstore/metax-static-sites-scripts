/**
 * Reusable UI-building helper functions shared across pages.
 */
function postCardHTML(post) {
  const cat = ContentStore.getCategory(post.category);
  const catName = cat ? cat.name : post.category;
  return `
    <article class="post-card">
      <a href="post.html?slug=${post.slug}" class="post-card__image-link">
        <img src="${post.image}" alt="${escapeHTML(post.title)}" loading="lazy" class="post-card__image" ${imgFallbackAttr()}>
        <span class="post-card__category">${catName}</span>
      </a>
      <div class="post-card__body">
        <h3 class="post-card__title"><a href="post.html?slug=${post.slug}">${escapeHTML(post.title)}</a></h3>
        <p class="post-card__desc">${escapeHTML(post.description)}</p>
        <div class="post-card__meta">
          <span><i class="fa-regular fa-calendar"></i> ${formatDate(post.date)}</span>
          <span><i class="fa-regular fa-clock"></i> ${post.readingTime} min read</span>
        </div>
      </div>
    </article>
  `;
}

function featuredCardHTML(post) {
  const cat = ContentStore.getCategory(post.category);
  const catName = cat ? cat.name : post.category;
  return `
    <article class="featured-card">
      <a href="post.html?slug=${post.slug}" class="featured-card__image-link">
        <img src="${post.image}" alt="${escapeHTML(post.title)}" loading="lazy" ${imgFallbackAttr()}>
      </a>
      <div class="featured-card__body">
        <span class="featured-card__category">${catName}</span>
        <h3><a href="post.html?slug=${post.slug}">${escapeHTML(post.title)}</a></h3>
        <p>${escapeHTML(post.description)}</p>
        <div class="post-card__meta">
          <span><i class="fa-regular fa-calendar"></i> ${formatDate(post.date)}</span>
          <span><i class="fa-regular fa-clock"></i> ${post.readingTime} min read</span>
        </div>
      </div>
    </article>
  `;
}

function categoryCardHTML(cat) {
  const count = ContentStore.getPostsByCategory(cat.slug).length;
  const imgNum = String(cat.img_index || 0).padStart(2, '0');
  // See IMAGE_PROMPTS.md, index "category-XX" — once the AI-generated file
  // exists at img/category-XX.jpg it renders as the card's cover photo; until
  // then the CSS gradient fallback keeps the card looking intentional instead
  // of showing a broken-image glyph.
  return `
    <a href="category.html?slug=${cat.slug}" class="category-card" style="--accent:${cat.color}" data-img-index="category-${imgNum}">
      <div class="category-card__image" style="--card-image:url('img/category-${imgNum}.jpg');">
        <div class="category-card__icon"><i class="${cat.icon}"></i></div>
      </div>
      <div class="category-card__body">
        <h3>${cat.name}</h3>
        <p>${cat.description}</p>
        <div class="category-card__footer">
          <span class="cpm-badge cpm-badge--${slugifyTier(cat.cpm_tier)}">${cat.cpm_tier} CPM · ${cat.estimated_cpm}</span>
          <span class="category-card__count">${count} article${count === 1 ? '' : 's'}</span>
        </div>
      </div>
    </a>
  `;
}

/** One row of the "CPM Ranges by Country" table on the homepage. */
function countryCpmRowHTML(row, isVisitorCountry) {
  const cats = (row.top_categories || [])
    .map(slug => {
      const cat = ContentStore.getCategory(slug);
      return cat ? cat.name : slug;
    })
    .join(', ');
  return `
    <tr class="country-cpm-row${isVisitorCountry ? ' country-cpm-row--active' : ''}">
      <td class="country-cpm-row__country">
        <span class="country-cpm-row__flag" aria-hidden="true">${row.flag || '🌍'}</span>
        <span>${escapeHTML(row.name)}</span>
        ${isVisitorCountry ? '<span class="country-cpm-row__you">You are here</span>' : ''}
      </td>
      <td>${escapeHTML(cats)}</td>
      <td><span class="cpm-badge cpm-badge--very-high">${escapeHTML(row.cpm_range)}</span></td>
    </tr>
  `;
}

/** Small pill near the hero indicating the page has been personalized by detected country. */
function geoBadgeHTML(row, source) {
  if (!row) return '';
  const label = source === 'ip' || source === 'timezone'
    ? `Showing high-value topics for ${escapeHTML(row.name)} ${row.flag || ''}`
    : `Showing globally popular high-value topics ${row.flag || '🌍'}`;
  return `<div class="geo-badge"><i class="fa-solid fa-location-dot"></i> ${label}</div>`;
}

function tagChipHTML(tag) {
  return `
    <a href="tag.html?slug=${tag.slug}" class="tag-chip">
      <span>${tag.name}</span>
      <span class="cpm-badge cpm-badge--${slugifyTier(tag.cpm_tier)}">${tag.cpm_tier}</span>
    </a>
  `;
}

/** "Last Verified" freshness stamp (CONTENT_TRICKS.md #1) — only rendered
 *  when a post has a real last_verified frontmatter date, since a stamp
 *  that isn't backed by an actual verification pass is a hollow trust
 *  signal (see the trick's own "where it breaks down" note). */
function freshnessStampHTML(post) {
  if (!post || !post.lastVerified) return '';
  return `
    <div class="freshness-stamp">
      <i class="fa-solid fa-circle-check"></i>
      <span><strong>Facts and figures last verified:</strong> ${formatDate(post.lastVerified)}. Rates, thresholds and regulations referenced below can change — see the "Where This Guide Reaches Its Limits" section for what specifically may be time-sensitive.</span>
    </div>
  `;
}

function imgFallbackAttr() {
  return `onerror="this.onerror=null;this.removeAttribute('src');this.alt='';this.classList.add('img-fallback');"`;
}

function slugifyTier(tier) {
  return (tier || '').toLowerCase().replace(/[^a-z]+/g, '-');
}

function escapeHTML(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderPagination(containerId, totalItems, perPage, currentPage, onPageClick) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const totalPages = Math.max(1, Math.ceil(totalItems / perPage));
  if (totalPages <= 1) { el.innerHTML = ''; return; }

  let html = '';
  html += `<button class="page-btn" data-page="${currentPage - 1}" ${currentPage === 1 ? 'disabled' : ''}><i class="fa-solid fa-chevron-left"></i></button>`;
  for (let i = 1; i <= totalPages; i++) {
    html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
  }
  html += `<button class="page-btn" data-page="${currentPage + 1}" ${currentPage === totalPages ? 'disabled' : ''}><i class="fa-solid fa-chevron-right"></i></button>`;
  el.innerHTML = html;

  el.querySelectorAll('.page-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const page = parseInt(btn.getAttribute('data-page'), 10);
      if (!isNaN(page) && page >= 1 && page <= totalPages) onPageClick(page);
    });
  });
}

function emptyStateHTML(message = 'No articles found.') {
  return `
    <div class="empty-state">
      <i class="fa-regular fa-folder-open"></i>
      <p>${message}</p>
    </div>
  `;
}

function skeletonGridHTML(count = 6) {
  return Array.from({ length: count }).map(() => `
    <div class="post-card post-card--skeleton">
      <div class="skeleton skeleton--image"></div>
      <div class="post-card__body">
        <div class="skeleton skeleton--line" style="width:70%"></div>
        <div class="skeleton skeleton--line" style="width:100%"></div>
        <div class="skeleton skeleton--line" style="width:90%"></div>
      </div>
    </div>
  `).join('');
}

/* ---------- Additional skeleton placeholders (site-wide loading states) ---------- */

function skeletonFeaturedHTML() {
  return `
    <div class="featured-card featured-card--skeleton">
      <div class="skeleton skeleton--image"></div>
      <div class="featured-card__body">
        <div class="skeleton skeleton--line" style="width:30%;height:20px;"></div>
        <div class="skeleton skeleton--line" style="width:90%;height:20px;margin-top:12px;"></div>
        <div class="skeleton skeleton--line" style="width:100%"></div>
        <div class="skeleton skeleton--line" style="width:60%"></div>
      </div>
    </div>
    <div class="featured-side">
      ${Array.from({ length: 3 }).map(() => `
        <div class="featured-card featured-card--skeleton">
          <div class="skeleton skeleton--image"></div>
          <div class="featured-card__body">
            <div class="skeleton skeleton--line" style="width:100%"></div>
            <div class="skeleton skeleton--line" style="width:70%"></div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function skeletonCategoryGridHTML(count = 6) {
  return Array.from({ length: count }).map(() => `
    <div class="category-card category-card--skeleton">
      <div class="skeleton skeleton--image" style="height:140px;"></div>
      <div class="category-card__body">
        <div class="skeleton skeleton--line" style="width:60%;height:18px;"></div>
        <div class="skeleton skeleton--line" style="width:100%"></div>
        <div class="skeleton skeleton--line" style="width:85%"></div>
        <div class="category-card__footer">
          <div class="skeleton skeleton--chip"></div>
          <div class="skeleton skeleton--line" style="width:60px;height:14px;margin:0;"></div>
        </div>
      </div>
    </div>
  `).join('');
}

function skeletonTagsCloudHTML(count = 14) {
  return Array.from({ length: count }).map(() => `
    <div class="skeleton skeleton--tag-chip" style="width:${90 + Math.round(Math.random() * 70)}px"></div>
  `).join('');
}

function skeletonBannerHTML() {
  return `
    <div class="skeleton skeleton--icon" style="margin-bottom:16px;"></div>
    <div class="skeleton skeleton--line" style="width:280px;height:28px;"></div>
    <div class="skeleton skeleton--line" style="width:420px;max-width:90%;"></div>
  `;
}

function skeletonSidebarListHTML(count = 5) {
  return Array.from({ length: count }).map(() => `
    <div class="skeleton skeleton--line" style="width:${60 + Math.round(Math.random() * 30)}%"></div>
  `).join('');
}

function skeletonArticleHTML() {
  return `
    <div class="article-header" aria-hidden="true">
      <div class="skeleton skeleton--chip" style="width:120px;height:24px;border-radius:999px;margin-bottom:14px;"></div>
      <div class="skeleton skeleton--line" style="width:90%;height:30px;"></div>
      <div class="skeleton skeleton--line" style="width:60%;height:30px;margin-bottom:20px;"></div>
      <div style="display:flex;gap:20px;">
        <div class="skeleton skeleton--line" style="width:120px;"></div>
        <div class="skeleton skeleton--line" style="width:100px;"></div>
        <div class="skeleton skeleton--line" style="width:90px;"></div>
      </div>
    </div>
    <div class="skeleton skeleton--image" style="max-width:780px;margin:0 auto 32px;border-radius:var(--radius-lg);aspect-ratio:16/8;"></div>
    <div class="article-body" aria-hidden="true">
      ${Array.from({ length: 9 }).map((_, i) => `<div class="skeleton skeleton--line" style="width:${i % 3 === 2 ? '55%' : '100%'};height:16px;"></div>`).join('')}
    </div>
  `;
}
