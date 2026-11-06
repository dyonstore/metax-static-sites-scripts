/**
 * Visitor growth & retention utilities:
 * - Recently viewed articles (localStorage)
 * - Trending articles (localStorage view-count simulation)
 * - Newsletter signup capture (localStorage demo; swap in a real ESP endpoint)
 * - Reading progress bar
 * - Table of contents auto-builder for long articles
 * - Scroll-to-top button
 * - "Back to site" nudge via Web Share API on mobile
 */
const Engagement = {
  STORAGE_KEYS: {
    recent: 'ttinsights_recently_viewed',
    views: 'ttinsights_view_counts',
    newsletter: 'ttinsights_newsletter_subs'
  },

  trackView(slug) {
    if (!slug) return;
    try {
      // Recently viewed (max 8, most recent first, de-duped)
      let recent = JSON.parse(localStorage.getItem(this.STORAGE_KEYS.recent) || '[]');
      recent = recent.filter(s => s !== slug);
      recent.unshift(slug);
      recent = recent.slice(0, 8);
      localStorage.setItem(this.STORAGE_KEYS.recent, JSON.stringify(recent));

      // View counts (drives "Trending" sections client-side)
      let views = JSON.parse(localStorage.getItem(this.STORAGE_KEYS.views) || '{}');
      views[slug] = (views[slug] || 0) + 1;
      localStorage.setItem(this.STORAGE_KEYS.views, JSON.stringify(views));
    } catch (e) { /* localStorage may be unavailable in some contexts */ }
  },

  getRecentlyViewed(excludeSlug, limit = 4) {
    try {
      const recent = JSON.parse(localStorage.getItem(this.STORAGE_KEYS.recent) || '[]');
      return recent
        .filter(s => s !== excludeSlug)
        .map(s => ContentStore.getPostBySlug(s))
        .filter(Boolean)
        .slice(0, limit);
    } catch (e) { return []; }
  },

  getTrending(limit = 5) {
    try {
      const views = JSON.parse(localStorage.getItem(this.STORAGE_KEYS.views) || '{}');
      const withViews = ContentStore.posts.map(p => ({ post: p, count: views[p.slug] || 0 }));
      const hasRealViews = withViews.some(w => w.count > 0);
      let sorted;
      if (hasRealViews) {
        sorted = withViews.sort((a, b) => b.count - a.count).map(w => w.post);
      } else {
        // Fallback: featured + newest act as "trending" until real views accumulate
        sorted = [...ContentStore.posts];
      }
      return sorted.slice(0, limit);
    } catch (e) {
      return ContentStore.posts.slice(0, limit);
    }
  },

  renderRecentlyViewed(containerId, excludeSlug) {
    const el = document.getElementById(containerId);
    if (!el) return;
    const items = this.getRecentlyViewed(excludeSlug);
    if (!items.length) { el.closest('.sidebar-card')?.style.setProperty('display', 'none'); return; }
    el.innerHTML = items.map(p => `<a href="post.html?slug=${p.slug}"><span>${escapeHTML(p.title)}</span></a>`).join('');
  },

  renderTrending(containerId, limit = 5) {
    const el = document.getElementById(containerId);
    if (!el) return;
    const items = this.getTrending(limit);
    el.innerHTML = items.map((p, i) => `
      <a href="post.html?slug=${p.slug}" class="trending-item">
        <span class="trending-rank">${i + 1}</span>
        <span class="trending-title">${escapeHTML(p.title)}</span>
      </a>
    `).join('') || emptyStateHTML('No trending articles yet.');
  },

  initNewsletterForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      const email = input ? input.value.trim() : '';
      if (!email) return;
      try {
        let subs = JSON.parse(localStorage.getItem(this.STORAGE_KEYS.newsletter) || '[]');
        if (!subs.includes(email)) subs.push(email);
        localStorage.setItem(this.STORAGE_KEYS.newsletter, JSON.stringify(subs));
      } catch (e) { /* ignore */ }
      const successEl = form.querySelector('.newsletter-success') || document.getElementById(formId + '-success');
      if (successEl) successEl.style.display = 'flex';
      form.reset();
    });
  },

  initReadingProgressBar() {
    let bar = document.getElementById('reading-progress-bar');
    if (!bar) {
      bar = document.createElement('div');
      bar.id = 'reading-progress-bar';
      document.body.appendChild(bar);
    }
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
      bar.style.width = pct + '%';
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
  },

  initScrollToTop() {
    let btn = document.getElementById('scroll-to-top-btn');
    if (!btn) {
      btn = document.createElement('button');
      btn.id = 'scroll-to-top-btn';
      btn.setAttribute('aria-label', 'Scroll to top');
      btn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
      document.body.appendChild(btn);
    }
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 480);
    }, { passive: true });
  },

  /** Builds a clickable Table of Contents from <h2>/<h3> inside the article body. */
  buildTableOfContents(articleBodySelector, tocContainerId) {
    const body = document.querySelector(articleBodySelector);
    const tocEl = document.getElementById(tocContainerId);
    if (!body || !tocEl) return;
    const headings = body.querySelectorAll('h2, h3');
    if (headings.length < 2) { tocEl.closest('.sidebar-card')?.style.setProperty('display', 'none'); return; }

    const items = [];
    headings.forEach((h, idx) => {
      const id = 'section-' + idx + '-' + h.textContent.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 40);
      h.id = id;
      items.push({ id, text: h.textContent, level: h.tagName === 'H3' ? 3 : 2 });
    });

    tocEl.innerHTML = items.map(it => `<a href="#${it.id}" class="toc-link toc-level-${it.level}">${escapeHTML(it.text)}</a>`).join('');
  },

  registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(() => {});
      });
    }
  }
};
