/* =========================================================================
   ARTICLES LISTING ENGINE
   Two modes, both driven by data attributes on <body>:
   1) data-mode="niche"  → /niches/{slug}/articles.html  (10 articles, 1 niche)
   2) data-mode="hub"    → /articles.html                (all 100 articles)
   ========================================================================= */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var body = document.body;
    var mode = body.getAttribute("data-mode");
    var root = document.getElementById("page-root");
    if (!root) return;

    if (mode === "niche") renderNicheListing(body.getAttribute("data-niche"), root);
    else renderHubListing(root);
  });

  function esc(s) { return (s || "").toString(); }
  function fmtDate(iso) {
    var d = new Date(iso + "T00:00:00");
    if (isNaN(d)) return iso;
    return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  }

  function pathPrefix() { return window.location.pathname.indexOf("/niches/") > -1 ? "../.." : "."; }

  function headerHtml(n, isNiche) {
    var prefix = pathPrefix();
    if (isNiche) {
      return '<div class="ad-wrap"><div class="container text-center"><div class="ad-slot ad-slot-leaderboard"><span>Google Ads · Leaderboard</span><small>728×90</small></div></div></div>' +
        '<header class="site-header"><div class="header-inner">' +
        '<a href="' + prefix + '/index.html" class="brand"><span class="brand-icon"><i class="fa-solid ' + n.icon + '"></i></span>' + n.name + '</a>' +
        '<nav class="trust-strip"><span><i class="fa-solid fa-circle-check"></i>' + n.vertical + '</span></nav>' +
        '<div class="header-cta"><a href="index.html#lead-form" class="btn btn-primary">Get Free Quote</a></div>' +
        '</div></header>' +
        '<div class="container breadcrumb"><a href="' + prefix + '/index.html">Home</a> / <a href="index.html">' + n.vertical + '</a> / <span>Articles</span></div>';
    }
    return '<div class="ad-wrap"><div class="container text-center"><div class="ad-slot ad-slot-leaderboard"><span>Google Ads · Leaderboard</span><small>728×90</small></div></div></div>' +
      '<header class="site-header"><div class="header-inner">' +
      '<a href="index.html" class="brand"><span class="brand-icon"><i class="fa-solid fa-layer-group"></i></span>LeadGen Network</a>' +
      '<nav class="trust-strip"><span><i class="fa-solid fa-circle-check"></i>400+ Expert Articles</span><span><i class="fa-solid fa-circle-check"></i>40 Verticals</span></nav>' +
      '<div class="header-cta"><a href="index.html#niches" class="btn btn-primary">Browse Verticals</a></div>' +
      '</div></header>' +
      '<div class="container breadcrumb"><a href="index.html">Home</a> / <span>Resource Center</span></div>';
  }

  function footerHtml(n, isNiche) {
    var prefix = pathPrefix();
    if (isNiche) {
      return '<footer class="site-footer"><div class="container">' +
        '<div class="disclosure"><strong>Advertising Disclosure:</strong> This is an independent comparison and lead-generation website. We may receive compensation from companies mentioned on this site.</div>' +
        '<div class="footer-grid">' +
          '<div><h5>' + n.name + '</h5><p style="font-size:.85rem;">Connecting people with trusted, top-rated ' + n.vertical.toLowerCase() + ' providers nationwide.</p></div>' +
          '<div><h5>Explore</h5><a href="index.html">Get A Free Quote</a><a href="guide.html">Full Guide</a><a href="compare.html">Compare Providers</a></div>' +
          '<div><h5>Company</h5><a href="' + prefix + '/index.html">All Categories</a><a href="' + prefix + '/about.html">About</a><a href="' + prefix + '/contact.html">Contact Us</a></div>' +
          '<div><h5>Legal</h5><a href="' + prefix + '/privacy.html">Privacy Policy</a><a href="' + prefix + '/about.html#terms">Terms of Use</a><a href="' + prefix + '/contact.html">Do Not Sell My Info</a></div>' +
        '</div>' +
        '<div class="footer-bottom">© <span data-year></span> ' + n.name + '. All rights reserved.</div>' +
        '</div></footer>' +
        '<div class="sticky-cta"><a class="btn btn-dark" href="tel:18005550199"><i class="fa-solid fa-phone"></i> Call Now</a><a class="btn btn-primary" href="index.html#lead-form">Free Quote</a></div>';
    }
    return '<footer class="site-footer"><div class="container">' +
      '<div class="disclosure"><strong>Advertising Disclosure:</strong> This resource center indexes content from 40 independent lead-generation microsites, which may receive advertiser compensation.</div>' +
      '<div class="footer-grid">' +
        '<div><h5>LeadGen Network</h5><p style="font-size:.85rem;">A network of 40 high-CPM landing page verticals.</p></div>' +
        '<div><h5>Explore</h5><a href="index.html#niches">Browse Verticals</a><a href="articles.html">Resource Center</a></div>' +
        '<div><h5>Company</h5><a href="about.html">About</a><a href="contact.html">Contact</a></div>' +
        '<div><h5>Legal</h5><a href="privacy.html">Privacy Policy</a><a href="about.html#terms">Terms of Use</a><a href="contact.html">Do Not Sell My Info</a></div>' +
      '</div>' +
      '<div class="footer-bottom">© <span data-year></span> LeadGen Network. All rights reserved.</div>' +
      '</div></footer>';
  }

  function articleImg(niche, title) {
    var m = (window.NICHE_IMG && window.NICHE_IMG[niche]) || { artIndex: 0, artFile: "" };
    var prefix = pathPrefix() === "." ? "" : pathPrefix() + "/";
    return window.imgPlaceholder ? window.imgPlaceholder(m.artIndex, m.artFile, title, "card", prefix) : "";
  }

  function articleCard(a, n, linkPrefix) {
    return '<div class="article-card" data-cat="' + esc(a.category) + '">' +
      articleImg(a.niche, a.title) +
      '<div class="ac-top"><span class="ac-cat">' + esc(a.category) + '</span><br><i class="fa-solid ' + n.icon + '"></i></div>' +
      '<div class="ac-body"><h3><a href="' + linkPrefix + a.slug + '.html">' + esc(a.title) + '</a></h3><p>' + esc(a.dek) + '</p>' +
      '<div class="ac-meta"><span><i class="fa-regular fa-clock"></i>' + a.readTime + ' min</span><span>' + fmtDate(a.date) + '</span></div></div></div>';
  }

  /* ---------------- Niche listing (10 articles) ---------------- */
  function renderNicheListing(niche, root) {
    var n = window.NICHES[niche];
    var articles = (window.ARTICLES || []).filter(function (a) { return a.niche === niche; });
    document.body.setAttribute("data-theme", n.theme);
    document.title = n.vertical + " Articles & Guides | " + n.name;
    setDesc("In-depth, expert-reviewed articles about " + n.vertical.toLowerCase() + " — " + articles.length + " guides covering costs, process, and how to choose the right option.", document.title);

    var categories = uniq(articles.map(function (a) { return a.category; }));

    var html = "";
    html += headerHtml(n, true);
    html += '<section class="articles-hero"><div class="container">' +
      '<span class="eyebrow" style="background:rgba(255,255,255,.15);color:#fff;">' + n.vertical + ' Resource Center</span>' +
      '<h1>Expert Articles &amp; Guides on ' + n.vertical + '</h1>' +
      '<p>' + articles.length + ' in-depth, editorially reviewed articles to help you make informed decisions — from cost breakdowns to step-by-step processes.</p>' +
      '</div></section>';
    html += '<section class="section"><div class="container">' +
      '<div class="article-filter-bar" id="filter-bar"><button class="filter-chip active" data-filter="all">All Articles</button>' +
      categories.map(function (c) { return '<button class="filter-chip" data-filter="' + esc(c) + '">' + esc(c) + '</button>'; }).join("") + '</div>' +
      '<div class="article-grid" id="article-grid">' + articles.map(function (a) { return articleCard(a, n, "articles/"); }).join("") + '</div>' +
      '</div></section>';
    html += '<div class="ad-wrap ad-wrap-bottom"><div class="container text-center"><div class="ad-slot ad-slot-inline"><span>Google Ads · High-CPM Inline Unit</span><small>970×120</small></div></div></div>';
    html += '<section class="section"><div class="container"><div class="cta-band"><h2>Ready For Your Free, Personalized Quote?</h2><p>Skip the research and see your options directly from top-rated providers.</p><a href="index.html#lead-form" class="btn btn-primary btn-lg">Get My Free Quote <i class="fa-solid fa-arrow-right"></i></a></div></div></section>';
    html += footerHtml(n, true);

    root.innerHTML = html;
    bindFilters();
    if (window.rehydrateShared) window.rehydrateShared();
    if (window.initMegaMenu) window.initMegaMenu();
  }

  /* ---------------- Root hub listing (all 100 articles) ---------------- */
  function renderHubListing(root) {
    document.body.setAttribute("data-theme", "hub");
    document.title = "Resource Center — 400+ Expert Articles Across 40 Verticals | LeadGen Network";
    setDesc("Browse 400+ in-depth, expert-reviewed articles across legal, insurance, finance, home services, health, education, and technology verticals.", document.title);

    var order = window.NICHE_ORDER || [];
    var all = window.ARTICLES || [];

    var html = "";
    html += headerHtml(null, false);
    html += '<section class="articles-hero"><div class="container">' +
      '<span class="eyebrow" style="background:rgba(255,255,255,.15);color:#fff;">Resource Center</span>' +
      '<h1>400+ Expert Articles Across 40 High-Value Verticals</h1>' +
      '<p>In-depth, editorially reviewed guides on legal claims, insurance, personal finance, home services, health, and technology — written to help you make confident decisions.</p>' +
      '</div></section>';

    html += '<section class="section"><div class="container">' +
      '<div class="article-filter-bar" id="niche-filter-bar"><button class="filter-chip active" data-nfilter="all">All Verticals</button>' +
      order.map(function (slug) { var n = window.NICHES[slug]; return '<button class="filter-chip" data-nfilter="' + slug + '">' + n.vertical + '</button>'; }).join("") +
      '</div>' +
      '<div class="article-grid" id="hub-article-grid">' +
      all.map(function (a) {
        var n = window.NICHES[a.niche];
        return '<div class="article-card" data-niche="' + a.niche + '">' +
          articleImg(a.niche, a.title) +
          '<div class="ac-top"><span class="ac-cat">' + esc(n.vertical) + '</span><br><i class="fa-solid ' + n.icon + '"></i></div>' +
          '<div class="ac-body"><h3><a href="niches/' + a.niche + '/articles/' + a.slug + '.html">' + esc(a.title) + '</a></h3><p>' + esc(a.dek) + '</p>' +
          '<div class="ac-meta"><span><i class="fa-regular fa-clock"></i>' + a.readTime + ' min</span><span>' + fmtDate(a.date) + '</span></div></div></div>';
      }).join("") +
      '</div>' +
      '<div class="text-center" style="margin-top:32px;"><button class="btn btn-dark" id="load-more-btn">Load More Articles</button></div>' +
      '</div></section>';

    html += '<div class="ad-wrap ad-wrap-bottom"><div class="container text-center"><div class="ad-slot ad-slot-inline"><span>Google Ads · High-CPM Inline Unit</span><small>970×120</small></div></div></div>';
    html += '<section class="section"><div class="container"><div class="cta-band"><h2>Find Your Vertical &amp; Get A Free Quote</h2><p>Every article links back to a free, no-obligation quote from top-rated providers in that category.</p><a href="index.html#niches" class="btn btn-primary btn-lg">Browse All Verticals <i class="fa-solid fa-arrow-right"></i></a></div></div></section>';
    html += footerHtml(null, false);

    root.innerHTML = html;
    bindHubFilters();
    if (window.rehydrateShared) window.rehydrateShared();
    if (window.initMegaMenu) window.initMegaMenu();
  }

  function uniq(arr) { return arr.filter(function (v, i) { return arr.indexOf(v) === i; }); }
  function setDesc(desc, titleOverride) {
    var title = titleOverride || document.title;
    var url = window.location.href.split("#")[0];
    var image = url.split("/niches/")[0] + "/img/" + (window.HUB_IMG ? window.HUB_IMG.heroFile : "hub-hero.jpg");
    setTag("description", desc);
    setTag("og:title", title, true);
    setTag("og:description", desc, true);
    setTag("og:type", "website", true);
    setTag("og:url", url, true);
    setTag("og:image", image, true);
    setTag("og:site_name", "LeadGen Network", true);
    setTag("twitter:card", "summary_large_image");
    setTag("twitter:title", title);
    setTag("twitter:description", desc);
    setTag("twitter:image", image);
    var link = document.querySelector('link[rel="canonical"]');
    if (!link) { link = document.createElement("link"); link.setAttribute("rel", "canonical"); document.head.appendChild(link); }
    link.setAttribute("href", url);
  }
  function setTag(name, content, isProperty) {
    var attr = isProperty ? "property" : "name";
    var el = document.querySelector('meta[' + attr + '="' + name + '"]');
    if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
    el.setAttribute("content", content);
  }

  function bindFilters() {
    var chips = document.querySelectorAll("#filter-bar .filter-chip");
    var cards = document.querySelectorAll("#article-grid .article-card");
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        chips.forEach(function (c) { c.classList.remove("active"); });
        chip.classList.add("active");
        var filter = chip.getAttribute("data-filter");
        cards.forEach(function (card) {
          card.style.display = (filter === "all" || card.getAttribute("data-cat") === filter) ? "" : "none";
        });
      });
    });
  }

  var HUB_PAGE_SIZE = 12;
  var hubVisible = HUB_PAGE_SIZE;
  function bindHubFilters() {
    var chips = document.querySelectorAll("#niche-filter-bar .filter-chip");
    var cards = document.querySelectorAll("#hub-article-grid .article-card");
    var loadMoreBtn = document.getElementById("load-more-btn");
    var currentFilter = "all";

    function apply() {
      var visibleCount = 0;
      cards.forEach(function (card) {
        var matches = currentFilter === "all" || card.getAttribute("data-niche") === currentFilter;
        if (matches && visibleCount < hubVisible) { card.style.display = ""; visibleCount++; }
        else if (matches) { card.style.display = "none"; }
        else { card.style.display = "none"; }
      });
      var totalMatching = 0;
      cards.forEach(function (card) { if (currentFilter === "all" || card.getAttribute("data-niche") === currentFilter) totalMatching++; });
      loadMoreBtn.style.display = hubVisible >= totalMatching ? "none" : "";
    }

    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        chips.forEach(function (c) { c.classList.remove("active"); });
        chip.classList.add("active");
        currentFilter = chip.getAttribute("data-nfilter");
        hubVisible = HUB_PAGE_SIZE;
        apply();
      });
    });
    loadMoreBtn.addEventListener("click", function () {
      hubVisible += HUB_PAGE_SIZE;
      apply();
    });
    apply();
  }
})();
