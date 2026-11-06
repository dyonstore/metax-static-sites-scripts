/**
 * SEO helper — injects canonical URLs, Open Graph / Twitter Card meta tags,
 * and JSON-LD structured data (schema.org) into the current page <head>.
 * Call the relevant function AFTER you know the page's title/description/etc.
 */
const SEO = {
  siteUrl() {
    // Uses the current origin so this works on any deployed domain.
    return window.location.origin;
  },

  _setMeta(attr, key, value) {
    let el = document.querySelector(`meta[${attr}="${key}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attr, key);
      document.head.appendChild(el);
    }
    el.setAttribute('content', value);
  },

  _setLink(rel, href) {
    let el = document.querySelector(`link[rel="${rel}"]`);
    if (!el) {
      el = document.createElement('link');
      el.setAttribute('rel', rel);
      document.head.appendChild(el);
    }
    el.setAttribute('href', href);
  },

  _setJsonLd(id, data) {
    let el = document.getElementById(id);
    if (!el) {
      el = document.createElement('script');
      el.type = 'application/ld+json';
      el.id = id;
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(data);
  },

  /** Resolve a possibly-relative image URL to an absolute one for OG/Twitter tags. */
  _absoluteImage(image) {
    const fallback = this.siteUrl() + '/images/og-default.jpg';
    if (!image) return fallback;
    if (/^https?:\/\//i.test(image)) return image;
    return this.siteUrl() + '/' + image.replace(/^\//, '');
  },

  /** Canonical + Open Graph + Twitter Card basics used on every page. */
  setBasic({ title, description, image, path }) {
    const url = this.siteUrl() + '/' + (path || '').replace(/^\//, '');
    const absImage = this._absoluteImage(image);
    this._setLink('canonical', url);
    this._setMeta('property', 'og:type', 'website');
    this._setMeta('property', 'og:site_name', SITE_CONFIG.siteName);
    this._setMeta('property', 'og:locale', 'en_US');
    this._setMeta('property', 'og:title', title);
    this._setMeta('property', 'og:description', description);
    this._setMeta('property', 'og:image', absImage);
    this._setMeta('property', 'og:image:secure_url', absImage);
    this._setMeta('property', 'og:image:alt', title);
    this._setMeta('property', 'og:url', url);
    this._setMeta('name', 'twitter:card', 'summary_large_image');
    this._setMeta('name', 'twitter:title', title);
    this._setMeta('name', 'twitter:description', description);
    this._setMeta('name', 'twitter:image', absImage);
    this._setMeta('name', 'twitter:image:alt', title);
  },

  /** Article-specific Open Graph tags + Article + Breadcrumb JSON-LD. */
  setArticle(post, categoryName) {
    const url = this.siteUrl() + '/post.html?slug=' + post.slug;
    this._setMeta('property', 'og:type', 'article');
    this._setMeta('property', 'article:published_time', post.date);
    this._setMeta('property', 'article:modified_time', post.date);
    this._setMeta('property', 'article:author', this.siteUrl() + '/author.html');
    this._setMeta('property', 'article:section', categoryName);
    (post.tags || []).forEach((tSlug) => {
      const t = (typeof ContentStore !== 'undefined' && ContentStore.getTag) ? ContentStore.getTag(tSlug) : null;
      let el = document.createElement('meta');
      el.setAttribute('property', 'article:tag');
      el.setAttribute('content', t ? t.name : tSlug);
      document.head.appendChild(el);
    });

    this._setJsonLd('ld-article', {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": post.title,
      "description": post.description,
      "image": [post.image],
      "datePublished": post.date,
      "dateModified": post.date,
      // Named Person byline (not a generic "Organization"/"Editorial Team")
      // for stronger E-E-A-T signal — see author.html for Maher's bio.
      "author": {
        "@type": "Person",
        "name": post.author || 'Maher',
        "url": this.siteUrl() + '/author.html'
      },
      "publisher": {
        "@type": "Organization",
        "name": SITE_CONFIG.siteName,
        "logo": { "@type": "ImageObject", "url": this.siteUrl() + '/images/icon-512.png' }
      },
      "mainEntityOfPage": { "@type": "WebPage", "@id": url }
    });

    this._setJsonLd('ld-breadcrumb', {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": this.siteUrl() + '/index.html' },
        { "@type": "ListItem", "position": 2, "name": categoryName, "item": this.siteUrl() + '/category.html?slug=' + post.category },
        { "@type": "ListItem", "position": 3, "name": post.title, "item": url }
      ]
    });
  },

  /** FAQPage schema — pass an array of {question, answer} pairs. */
  setFaq(faqs) {
    if (!faqs || !faqs.length) return;
    this._setJsonLd('ld-faq', {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(f => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": { "@type": "Answer", "text": f.answer }
      }))
    });
  },

  /** Generic BreadcrumbList for non-article pages. */
  setBreadcrumb(items) {
    this._setJsonLd('ld-breadcrumb', {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((it, idx) => ({
        "@type": "ListItem", "position": idx + 1, "name": it.name, "item": this.siteUrl() + '/' + it.path
      }))
    });
  },

  /** WebSite + SearchAction schema for the homepage (enables sitelinks search box). */
  setWebsiteSchema() {
    this._setJsonLd('ld-website', {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": SITE_CONFIG.siteName,
      "url": this.siteUrl() + '/index.html',
      "publisher": { "@type": "Organization", "name": SITE_CONFIG.siteName },
      "potentialAction": {
        "@type": "SearchAction",
        "target": this.siteUrl() + "/search.html?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    });
    this._setJsonLd('ld-organization', {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": SITE_CONFIG.siteName,
      "url": this.siteUrl() + '/index.html',
      "logo": { "@type": "ImageObject", "url": this.siteUrl() + '/images/icon-512.png' },
      "description": SITE_CONFIG.siteDescription,
      // TopTier Insights is edited under MetaX Academy's editorial umbrella —
      // see author.html / metax.academy/about for verified details.
      "founder": { "@type": "Person", "name": "Maher", "url": this.siteUrl() + '/author.html' },
      "sameAs": ["https://metax.academy"]
    });
  },

  /** ItemList schema for listing pages (category/tag/search) — helps rich results. */
  setItemList(posts, path) {
    if (!posts || !posts.length) return;
    this._setJsonLd('ld-itemlist', {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": posts.slice(0, 20).map((p, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "url": this.siteUrl() + '/post.html?slug=' + p.slug
      }))
    });
  }
};
