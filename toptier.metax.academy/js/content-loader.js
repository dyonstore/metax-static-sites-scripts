/**
 * Content loading layer.
 * Fetches categories.json, tags.json, posts-manifest.json and every
 * Markdown file listed in the manifest, then exposes a simple in-memory
 * "database" the rest of the site can query synchronously after init().
 */
const ContentStore = {
  categories: [],
  tags: [],
  posts: [],
  countryCpm: null,
  ready: false,

  async init() {
    if (this.ready) return this;
    const [categories, tags, manifest, countryCpm] = await Promise.all([
      fetch('data/categories.json').then(r => r.json()).catch(() => []),
      fetch('data/tags.json').then(r => r.json()).catch(() => []),
      fetch('data/posts-manifest.json').then(r => r.json()).catch(() => []),
      fetch('data/country-cpm.json').then(r => r.json()).catch(() => null)
    ]);
    this.categories = categories;
    this.tags = tags;
    this.countryCpm = countryCpm;

    const posts = await Promise.all(
      manifest.map(async filename => {
        try {
          const res = await fetch(`posts/${filename}`);
          if (!res.ok) return null;
          const raw = await res.text();
          return this._buildPost(filename, raw);
        } catch (e) {
          console.warn('Could not load post:', filename, e);
          return null;
        }
      })
    );

    this.posts = posts
      .filter(Boolean)
      .sort((a, b) => new Date(b.date) - new Date(a.date));

    this.ready = true;
    return this;
  },

  _buildPost(filename, raw) {
    const { data, content } = parseFrontMatter(raw);
    const slug = filename.replace(/\.md$/, '');
    const html = renderMarkdown(content);
    const plainText = content.replace(/[#*_`>\-\[\]!()]/g, ' ').replace(/\s+/g, ' ').trim();
    const wordCount = plainText.split(' ').filter(Boolean).length;
    const readingTime = Math.max(1, Math.round(wordCount / 200));

    return {
      slug,
      title: data.title || slug.replace(/-/g, ' '),
      description: data.description || plainText.slice(0, 160) + '…',
      date: data.date || '2026-01-01',
      // "Last Verified" freshness stamp (CONTENT_TRICKS.md #1) — optional
      // frontmatter field; only rendered on the article page when present,
      // so untouched articles simply show no stamp rather than a fake date.
      lastVerified: data.last_verified || null,
      // All articles are written/edited under a single named byline, "Maher"
      // (see author.html), per the site's editorial-honesty policy — this
      // overrides whatever a post's Markdown frontmatter says.
      author: 'Maher',
      category: data.category || 'general',
      tags: Array.isArray(data.tags) ? data.tags : (data.tags ? [data.tags] : []),
      image: data.image || (SITE_CONFIG.defaultImages[data.category] || SITE_CONFIG.defaultImages.default),
      featured: data.featured === true,
      html,
      wordCount,
      readingTime
    };
  },

  getCategory(slug) {
    return this.categories.find(c => c.slug === slug);
  },

  getTag(slug) {
    return this.tags.find(t => t.slug === slug);
  },

  getPostBySlug(slug) {
    return this.posts.find(p => p.slug === slug);
  },

  getPostsByCategory(slug) {
    return this.posts.filter(p => p.category === slug);
  },

  getPostsByTag(slug) {
    return this.posts.filter(p => Array.isArray(p.tags) && p.tags.includes(slug));
  },

  getFeaturedPosts(limit = 4) {
    const featured = this.posts.filter(p => p.featured);
    return (featured.length ? featured : this.posts).slice(0, limit);
  },

  getRelatedPosts(post, limit = 3) {
    return this.posts
      .filter(p => p.slug !== post.slug && (p.category === post.category || p.tags.some(t => post.tags.includes(t))))
      .slice(0, limit);
  },

  search(query) {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return this.posts.filter(p => {
      return (
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q))
      );
    });
  },

  /** Categories/tags sorted by CPM tier, highest first — used on the Top Topics pages. */
  getCategoriesByCpm() {
    const order = { 'Very High': 0, 'High': 1, 'Medium-High': 2, 'Medium': 3, 'Low': 4 };
    return [...this.categories].sort((a, b) => (order[a.cpm_tier] ?? 9) - (order[b.cpm_tier] ?? 9));
  },

  getTagsByCpm() {
    const order = { 'Very High': 0, 'High': 1, 'Medium-High': 2, 'Medium': 3, 'Low': 4 };
    return [...this.tags].sort((a, b) => (order[a.cpm_tier] ?? 9) - (order[b.cpm_tier] ?? 9));
  },

  /** data/country-cpm.json row for a given 2-letter country code, or the dataset's default row. */
  getCountryCpmRow(countryCode) {
    if (!this.countryCpm) return null;
    const row = (this.countryCpm.countries || []).find(c => c.code === countryCode);
    return row || this.countryCpm.default || null;
  },

  /** All country rows, for building the "CPM ranges per country" table. */
  getAllCountryCpmRows() {
    if (!this.countryCpm) return [];
    return this.countryCpm.countries || [];
  },

  /**
   * Categories sorted so a visitor's country's top_categories (per
   * data/country-cpm.json) come first, then the remaining categories in
   * their normal global-CPM order. Falls back to getCategoriesByCpm() if
   * no country row / no match is available.
   */
  getCategoriesForCountry(countryCode, limit) {
    const byCpm = this.getCategoriesByCpm();
    const row = this.getCountryCpmRow(countryCode);
    if (!row || !Array.isArray(row.top_categories) || !row.top_categories.length) {
      return limit ? byCpm.slice(0, limit) : byCpm;
    }
    const priority = row.top_categories;
    const sorted = [...byCpm].sort((a, b) => {
      const ai = priority.indexOf(a.slug);
      const bi = priority.indexOf(b.slug);
      const aRank = ai === -1 ? priority.length : ai;
      const bRank = bi === -1 ? priority.length : bi;
      return aRank - bRank;
    });
    return limit ? sorted.slice(0, limit) : sorted;
  },

  /** Posts whose category is one of the visitor's country's top_categories. */
  getPostsForCountry(countryCode, limit) {
    const row = this.getCountryCpmRow(countryCode);
    const priority = (row && row.top_categories) || [];
    if (!priority.length) return limit ? this.posts.slice(0, limit) : this.posts;
    const matched = this.posts.filter(p => priority.includes(p.category));
    const rest = this.posts.filter(p => !priority.includes(p.category));
    const combined = [...matched, ...rest];
    return limit ? combined.slice(0, limit) : combined;
  },

  /** Tags sorted so tags belonging to the visitor's country's top_categories come first. */
  getTagsForCountry(countryCode, limit) {
    const byCpm = this.getTagsByCpm();
    const row = this.getCountryCpmRow(countryCode);
    const priority = (row && row.top_categories) || [];
    if (!priority.length) return limit ? byCpm.slice(0, limit) : byCpm;
    const sorted = [...byCpm].sort((a, b) => {
      const aIn = priority.includes(a.category) ? 0 : 1;
      const bIn = priority.includes(b.category) ? 0 : 1;
      return aIn - bIn;
    });
    return limit ? sorted.slice(0, limit) : sorted;
  }
};

function formatDate(dateStr) {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  } catch (e) {
    return dateStr;
  }
}

function qs(param) {
  return new URLSearchParams(window.location.search).get(param);
}
