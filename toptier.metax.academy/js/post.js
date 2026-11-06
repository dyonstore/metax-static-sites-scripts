/** Article page controller */
(async function () {
  renderLayout('');

  await ContentStore.init();
  renderFooterCategories();
  renderMegaMenu();

  const slug = qs('slug');
  const post = ContentStore.getPostBySlug(slug);

  const loadingState = document.getElementById('loading-state');
  const contentEl = document.getElementById('article-content');
  const notFoundEl = document.getElementById('not-found-state');

  if (!post) {
    loadingState.style.display = 'none';
    notFoundEl.style.display = 'block';
    return;
  }

  const cat = ContentStore.getCategory(post.category);
  const catName = cat ? cat.name : post.category;

  document.title = `${post.title} — ${SITE_CONFIG.siteName}`;
  document.getElementById('page-description').setAttribute('content', post.description);
  document.getElementById('og-title').setAttribute('content', post.title);
  document.getElementById('og-description').setAttribute('content', post.description);
  document.getElementById('og-image').setAttribute('content', SEO._absoluteImage(post.image));

  document.getElementById('crumb-category').textContent = catName;
  document.getElementById('crumb-category').href = `category.html?slug=${post.category}`;
  document.getElementById('crumb-title').textContent = post.title;

  document.getElementById('article-category-badge').textContent = catName;
  document.getElementById('article-category-badge').onclick = null;
  document.getElementById('article-title').textContent = post.title;
  document.getElementById('article-author').innerHTML = `<a href="author.html" style="color:inherit;text-decoration:underline;text-decoration-color:rgba(255,255,255,0.4);">${post.author}</a>`;
  document.getElementById('article-date').textContent = formatDate(post.date);
  document.getElementById('article-reading-time').textContent = `${post.readingTime} min read`;

  // Animated hero background on the article banner: reuses the parent
  // category's image index ("category-XX" — see IMAGE_PROMPTS.md) so posts
  // don't need their own unique image set. Applied as a CSS custom property
  // (not an <img> tag) so a not-yet-generated file falls back to the
  // accent-colored gradient overlay, never a broken-image icon.
  const postBanner = document.getElementById('post-banner');
  const postImgNum = String((cat && cat.img_index) || 0).padStart(2, '0');
  const postAccent = (cat && cat.color) || '#2563eb';
  postBanner.classList.add('page-banner--hero');
  postBanner.style.setProperty('--hero-image', `url('img/category-${postImgNum}.jpg')`);
  postBanner.style.setProperty('--hero-accent', postAccent);
  if (!postBanner.querySelector('.hero-bg-layer')) {
    postBanner.insertAdjacentHTML('afterbegin', `
      <div class="hero-bg-layer" aria-hidden="true"></div>
      <div class="hero-bg-overlay" aria-hidden="true"></div>
    `);
  }
  document.getElementById('post-hero-eyebrow').innerHTML = `<i class="fa-solid fa-newspaper"></i> ${catName}`;

  const coverImg = document.getElementById('article-cover');
  coverImg.onerror = () => {
    coverImg.onerror = null;
    coverImg.removeAttribute('src');
    coverImg.alt = '';
    coverImg.style.background = 'linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%)';
  };
  coverImg.src = post.image;
  coverImg.alt = post.title;

  const freshnessContainer = document.getElementById('freshness-stamp-container');
  if (freshnessContainer) freshnessContainer.innerHTML = freshnessStampHTML(post);

  // Insert an in-content ad roughly midway through the article body
  const bodyEl = document.getElementById('article-body');
  const paragraphs = post.html.split('</p>');
  const insertPoint = Math.floor(paragraphs.length / 2);
  const adMarkerId = 'ad-in-content-marker';
  paragraphs.splice(insertPoint, 0, `</p><div class="in-content-ad" id="${adMarkerId}"></div>`);
  bodyEl.innerHTML = paragraphs.join('</p>').replace(`</p><div class="in-content-ad" id="${adMarkerId}"></div></p>`, `</p><div class="in-content-ad" id="${adMarkerId}"></div>`);

  // Mount any lightweight interactive calculators embedded in this article's
  // body as <div class="calc-widget" data-calc="..."> placeholders
  // (CONTENT_TRICKS.md #7) — a no-op on articles that don't have one.
  if (typeof Calculators !== 'undefined') Calculators.mount(bodyEl);

  // Tags
  const tagsEl = document.getElementById('article-tags');
  tagsEl.innerHTML = post.tags.map(tSlug => {
    const t = ContentStore.getTag(tSlug);
    const label = t ? t.name : tSlug;
    return `<a href="tag.html?slug=${tSlug}"><i class="fa-solid fa-tag"></i> ${label}</a>`;
  }).join('');

  // Related posts
  const related = ContentStore.getRelatedPosts(post, 3);
  const relatedSection = document.getElementById('related-posts-section');
  if (related.length) {
    document.getElementById('related-posts').innerHTML = related.map(postCardHTML).join('');
  } else {
    relatedSection.style.display = 'none';
  }

  // Sidebar top categories
  const topCats = ContentStore.getCategoriesByCpm().slice(0, 6);
  document.getElementById('sidebar-categories').innerHTML = topCats.map(c => `<a href="category.html?slug=${c.slug}"><span>${c.name}</span><span class="cpm-badge cpm-badge--${slugifyTier(c.cpm_tier)}">${c.cpm_tier}</span></a>`).join('');

  loadingState.style.display = 'none';
  contentEl.style.display = 'block';

  renderAdUnit('ad-sidebar', 'sidebar', 'Advertisement');
  renderAdUnit(adMarkerId, 'inContent', 'Advertisement');

  // --- SEO: canonical, Open Graph, Twitter Card, Article + Breadcrumb + FAQ schema ---
  SEO.setBasic({ title: document.title, description: post.description, image: post.image, path: `post.html?slug=${post.slug}` });
  SEO.setArticle(post, catName);
  const faqs = extractFaqFromHtml(post.html);
  if (faqs.length) SEO.setFaq(faqs);

  // --- Social share buttons (top + bottom of article) ---
  renderShareButtons('share-top', { url: window.location.href, title: post.title, image: post.image });
  renderShareButtons('share-bottom', { url: window.location.href, title: post.title, image: post.image });

  // --- Table of contents from the rendered body ---
  Engagement.buildTableOfContents('#article-body', 'table-of-contents');

  // --- Recently viewed sidebar + tracking this view ---
  Engagement.trackView(post.slug);
  Engagement.renderRecentlyViewed('recently-viewed-list', post.slug);

  // --- Reading progress bar + scroll-to-top ---
  Engagement.initReadingProgressBar();
  Engagement.initScrollToTop();
  Engagement.registerServiceWorker();

  // --- "Was this helpful?" reader feedback capture (CONTENT_TRICKS.md #10) ---
  if (typeof Feedback !== 'undefined') Feedback.render('feedback-widget-container', post.slug);
})();

/** Very small heuristic FAQ extractor: looks for "**Question?**" followed by an answer paragraph,
 *  or an "## FAQ" / "Frequently Asked Questions" section formatted as bold-question + paragraph. */
function extractFaqFromHtml(html) {
  const faqs = [];
  const container = document.createElement('div');
  container.innerHTML = html;
  const strongEls = container.querySelectorAll('p > strong:first-child');
  strongEls.forEach(strong => {
    const text = strong.textContent.trim();
    if (text.endsWith('?')) {
      const p = strong.parentElement;
      const answerParts = [];
      let sibling = p.nextElementSibling;
      // Answer is either the remainder of the same <p> or the following <p>
      const remainder = p.textContent.replace(text, '').trim();
      if (remainder) answerParts.push(remainder);
      else if (sibling && sibling.tagName === 'P') answerParts.push(sibling.textContent.trim());
      if (answerParts.length) faqs.push({ question: text, answer: answerParts.join(' ') });
    }
  });
  return faqs.slice(0, 8);
}
