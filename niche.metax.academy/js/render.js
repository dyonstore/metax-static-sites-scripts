/* =========================================================================
   RENDER ENGINE — builds landing / guide / compare pages from NICHES data.
   Shell pages only need: <body data-niche="slug" data-page="landing|guide|compare">
   and a <div id="page-root"></div>. Everything else is injected here.
   ========================================================================= */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var body = document.body;
    var slug = body.getAttribute("data-niche");
    var page = body.getAttribute("data-page");
    var niche = window.NICHES && window.NICHES[slug];
    var root = document.getElementById("page-root");
    if (!niche || !root) return;

    document.body.setAttribute("data-theme", niche.theme);
    setMeta(niche, page, slug);

    if (page === "landing") root.innerHTML = renderLanding(slug, niche);
    else if (page === "guide") root.innerHTML = renderGuide(slug, niche);
    else if (page === "compare") root.innerHTML = renderCompare(slug, niche);

    // re-run shared behaviors for newly injected DOM
    if (window.rehydrateShared) window.rehydrateShared();
  });

  /* ---------------- helpers ---------------- */
  function esc(s) { return (s || "").toString(); }

  function setMeta(niche, page, slug) {
    var t = niche.metaTitle, d = niche.metaDescription;
    if (page === "guide") { t = niche.guide.title + " | " + niche.name; d = niche.guide.metaDesc; }
    if (page === "compare") { t = niche.compare.title + " | " + niche.name; d = "Independent comparison: " + niche.compare.title.toLowerCase() + ". See pricing, features, and ratings side by side."; }
    document.title = t;
    var url = window.location.href.split("#")[0];
    var imgMeta = (window.NICHE_IMG && window.NICHE_IMG[slug]) || {};
    var image = url.split("/niches/")[0] + "/img/" + (imgMeta.heroFile || "hub-hero.jpg");
    setHeadTag("description", d);
    setHeadTag("og:title", t, true);
    setHeadTag("og:description", d, true);
    setHeadTag("og:type", "website", true);
    setHeadTag("og:url", url, true);
    setHeadTag("og:image", image, true);
    setHeadTag("og:site_name", "LeadGen Network", true);
    setHeadTag("twitter:card", "summary_large_image");
    setHeadTag("twitter:title", t);
    setHeadTag("twitter:description", d);
    setHeadTag("twitter:image", image);
    var link = document.querySelector('link[rel="canonical"]');
    if (!link) { link = document.createElement("link"); link.setAttribute("rel", "canonical"); document.head.appendChild(link); }
    link.setAttribute("href", url);
    injectNicheSchema(niche, page, slug, url, t, d);
  }

  function setHeadTag(name, content, isProperty) {
    var attr = isProperty ? "property" : "name";
    var el = document.querySelector('meta[' + attr + '="' + name + '"]');
    if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
    el.setAttribute("content", content);
  }

  function injectNicheSchema(niche, page, slug, url, title, desc) {
    var siteRoot = url.split("/niches/")[0];
    var graph = [];
    graph.push({
      "@type": "Service",
      "name": niche.vertical,
      "provider": { "@type": "Organization", "name": niche.name },
      "description": desc,
      "areaServed": "US"
    });
    graph.push({
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": siteRoot + "/index.html" },
        { "@type": "ListItem", "position": 2, "name": niche.vertical, "item": siteRoot + "/niches/" + slug + "/index.html" }
      ].concat(page !== "landing" ? [{ "@type": "ListItem", "position": 3, "name": page === "guide" ? "Guide" : "Compare", "item": url }] : [])
    });
    var existing = document.querySelector('script[type="application/ld+json"][data-niche-schema]');
    if (existing) existing.remove();
    var script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-niche-schema", "1");
    script.textContent = JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
    document.head.appendChild(script);
  }

  function stars(rating) {
    var full = Math.round(rating);
    var out = "";
    for (var i = 0; i < 5; i++) out += i < full ? '<i class="fa-solid fa-star"></i>' : '<i class="fa-regular fa-star"></i>';
    return out;
  }

  function initials(name) {
    return name.split(" ").map(function (w) { return w[0]; }).join("").slice(0, 2).toUpperCase();
  }

  function adSlot(sizeClass, label) {
    return '<div class="ad-slot ' + sizeClass + '"><span>' + (label || "Sponsored Content") + '</span><small>' + sizeClassDims(sizeClass) + '</small></div>';
  }
  function sizeClassDims(c) {
    if (c.indexOf("leaderboard") > -1) return "728×90";
    if (c.indexOf("inline") > -1) return "970×120";
    if (c.indexOf("square") > -1) return "300×250";
    return "Native Ad Unit";
  }

  function header(slug, niche, activePage) {
    return (
      '<div class="ad-wrap"><div class="container text-center"><div class="ad-slot ad-slot-leaderboard">' +
      '<span>Google Ads · Leaderboard</span><small>728×90 — Top CPM Placement</small></div></div></div>' +
      '<header class="site-header">' +
        '<div class="header-inner">' +
          '<a href="../../index.html" class="brand"><span class="brand-icon"><i class="fa-solid ' + niche.icon + '"></i></span>' + niche.name + '</a>' +
          '<nav class="trust-strip">' +
            '<span><i class="fa-solid fa-circle-check"></i>BBB Accredited</span>' +
            '<span><i class="fa-solid fa-circle-check"></i>SSL Secured</span>' +
            '<span><i class="fa-solid fa-circle-check"></i>' + niche.vertical + '</span>' +
          '</nav>' +
          '<div class="header-cta">' +
            '<div class="header-phone"><i class="fa-solid fa-phone"></i><span>Call 1-800-555-0199</span></div>' +
            '<a href="#lead-form" class="btn btn-primary">Get Free Quote</a>' +
          '</div>' +
        '</div>' +
      '</header>' +
      '<div class="container breadcrumb">' +
        '<a href="../../index.html">Home</a> / <a href="index.html">' + niche.vertical + '</a>' +
        (activePage === "guide" ? ' / <span>Guide</span>' : activePage === "compare" ? ' / <span>Compare</span>' : "") +
      '</div>'
    );
  }

  function footer(slug, niche) {
    return (
      '<footer class="site-footer"><div class="container">' +
        '<div class="disclosure"><strong>Advertising Disclosure:</strong> This is an independent comparison and lead-generation website. We may receive compensation from the companies mentioned on this site through advertising, referral fees, or affiliate programs. This compensation may impact how and where products appear. We do not include all companies or all available offers. All content is provided for general informational purposes and does not constitute professional, legal, financial, or medical advice.</div>' +
        '<div class="footer-grid">' +
          '<div><h5>' + niche.name + '</h5><p style="font-size:.85rem;">Connecting people with trusted, top-rated ' + niche.vertical.toLowerCase() + ' providers nationwide since 2015.</p></div>' +
          '<div><h5>Explore</h5><a href="index.html">Get A Free Quote</a><a href="guide.html">Full Guide</a><a href="compare.html">Compare Providers</a><a href="articles.html">All Articles</a></div>' +
          '<div><h5>Company</h5><a href="../../index.html">All Categories</a><a href="../../about.html">About</a><a href="../../contact.html">Contact Us</a></div>' +
          '<div><h5>Legal</h5><a href="../../privacy.html">Privacy Policy</a><a href="../../about.html#terms">Terms of Use</a><a href="../../contact.html">Do Not Sell My Info</a></div>' +
        '</div>' +
        '<div class="footer-bottom">© <span data-year></span> ' + niche.name + '. All rights reserved. This site is not affiliated with any government agency.</div>' +
      '</div></footer>' +
      '<div class="sticky-cta"><a class="btn btn-dark" href="tel:18005550199"><i class="fa-solid fa-phone"></i> Call Now</a><a class="btn btn-primary" href="#lead-form">Free Quote</a></div>'
    );
  }

  function nicheHeroImg(slug, niche) {
    var m = (window.NICHE_IMG && window.NICHE_IMG[slug]) || { heroIndex: 0, heroFile: "" };
    return window.imgPlaceholder ? window.imgPlaceholder(m.heroIndex, m.heroFile, niche.vertical + " hero visual", "hero-banner", "../../") : "";
  }
  function providerLogoImg(index) {
    var p = (window.PROVIDER_IMG && window.PROVIDER_IMG[index]) || { index: 0, file: "" };
    return window.imgPlaceholder ? window.imgPlaceholder(p.index, p.file, "Provider logo", "logo", "../../") : "";
  }

  function leadForm(slug, pageType, niche) {
    return (
      '<div class="hero-panel" id="lead-form">' +
        '<div class="stars">' + stars(5) + ' <span style="color:var(--c-text-light);font-size:.82rem;">4.8/5 from 12,000+ reviews</span></div>' +
        '<h3>Get Your Free, No-Obligation Quote</h3>' +
        '<form data-lead-form data-niche="' + slug + '" data-page-type="' + pageType + '">' +
          '<div class="form-row"><label>Full Name</label><input type="text" name="name" placeholder="Jane Doe" required></div>' +
          '<div class="form-row"><label>Email Address</label><input type="email" name="email" placeholder="you@email.com" required></div>' +
          '<div class="form-row"><label>Phone Number</label><input type="tel" name="phone" placeholder="(555) 555-5555" required></div>' +
          '<div class="form-row"><label>ZIP Code</label><input type="text" name="zip_code" placeholder="90210" required></div>' +
          '<label class="form-consent"><input type="checkbox" name="consent" required> I agree to be contacted by phone, email, or text about my request. Message/data rates may apply. Consent is not a condition of purchase.</label>' +
          '<button type="submit" class="btn btn-primary btn-block btn-lg">See My Free Options <i class="fa-solid fa-arrow-right"></i></button>' +
        '</form>' +
        '<div class="form-success"><i class="fa-solid fa-circle-check"></i> Thanks! A specialist will reach out shortly.</div>' +
        '<p class="small-muted text-center" style="margin-top:12px;">🔒 Your information is secure and never sold to third parties.</p>' +
      '</div>'
    );
  }

  /* ==================== LANDING PAGE ==================== */
  function renderLanding(slug, niche) {
    var d = niche.landing;
    var html = "";
    html += header(slug, niche, "landing");

    html += '<section class="hero"><div class="hero-inner">' +
      '<div>' +
        '<div class="hero-badge"><i class="fa-solid fa-shield-halved"></i> ' + d.badge + '</div>' +
        '<h1>' + d.h1 + '</h1>' +
        '<p class="hero-sub">' + d.sub + '</p>' +
        '<ul class="hero-bullets">' + d.bullets.map(function (b) { return '<li><i class="fa-solid fa-check"></i>' + b + '</li>'; }).join("") + '</ul>' +
        '<div class="hero-cta-row"><a href="#lead-form" class="btn btn-primary btn-lg">Get My Free Quote <i class="fa-solid fa-arrow-right"></i></a><a href="tel:18005550199" class="btn btn-outline btn-lg"><i class="fa-solid fa-phone"></i> Call 1-800-555-0199</a></div>' +
        '<p class="hero-microcopy">No obligation. Your information is 100% confidential and secure.</p>' +
      '</div>' +
      '<div>' + leadForm(slug, "landing", niche) + '</div>' +
    '</div></section>';

    html += '<div class="container" style="margin-top:-1px;">' + nicheHeroImg(slug, niche) + '</div>';

    html += '<section class="stats-band section-tight"><div class="container grid grid-4">' +
      d.stats.map(function (s) { return '<div><div class="num">' + s.num + '</div><div class="lbl">' + s.lbl + '</div></div>'; }).join("") +
    '</div></section>';

    html += '<div class="ad-wrap"><div class="container text-center">' + adSlot("ad-slot-inline", "Google Ads · High-CPM Inline Unit") + '</div></div>';

    html += '<section class="section" id="benefits"><div class="container">' +
      '<div class="section-head text-center"><span class="eyebrow">Why Choose Us</span><h2>Everything You Need To Move Forward With Confidence</h2><p>We make the process simple, transparent, and pressure-free from the very first step.</p></div>' +
      '<div class="grid grid-4">' + d.benefits.map(function (b, bi) {
        return '<div class="card"><div class="icon-badge"><i class="fa-solid ' + b.icon + '"></i></div><h3>' + b.title + '</h3><p>' + b.text + '</p>' + (bi === 0 ? providerLogoImg(0) : "") + '</div>';
      }).join("") + '</div>' +
    '</div></section>';

    html += '<section class="section section-tight" style="background:var(--c-surface);border-top:1px solid var(--c-border);border-bottom:1px solid var(--c-border);"><div class="container">' +
      '<div class="section-head text-center"><span class="eyebrow">Simple Process</span><h2>How It Works</h2><p>Get started in minutes — no paperwork headaches, no confusing jargon.</p></div>' +
      '<div class="steps">' + d.steps.map(function (s, i) {
        return '<div class="step"><div class="step-num">' + (i + 1) + '</div><h4>' + s.title + '</h4><p>' + s.text + '</p></div>';
      }).join("") + '</div>' +
    '</div></section>';

    html += '<section class="section"><div class="container">' +
      '<div class="section-head text-center"><span class="eyebrow">Real Stories</span><h2>What People Are Saying</h2></div>' +
      '<div class="grid grid-3">' + d.testimonials.map(function (t) {
        return '<div class="testimonial"><div class="stars">' + stars(5) + '</div><p>“' + t.text + '”</p>' +
          '<div class="who"><div class="avatar">' + initials(t.name) + '</div><div><div class="name">' + t.name + '</div><div class="loc">' + t.loc + '</div></div></div></div>';
      }).join("") + '</div>' +
    '</div></section>';

    html += '<div class="ad-wrap ad-wrap-bottom"><div class="container text-center">' + adSlot("ad-slot-inline", "Google Ads · High-CPM Inline Unit") + '</div></div>';

    html += '<section class="section" id="faq"><div class="container" style="max-width:820px;">' +
      '<div class="section-head text-center"><span class="eyebrow">Common Questions</span><h2>Frequently Asked Questions</h2></div>' +
      '<div>' + d.faq.map(function (f) {
        return '<div class="faq-item"><button class="faq-q">' + f.q + '<i class="fa-solid fa-plus"></i></button><div class="faq-a"><div class="faq-a-inner">' + f.a + '</div></div></div>';
      }).join("") + '</div>' +
      '<div class="text-center" style="margin-top:24px;"><a class="small-muted" href="guide.html">📖 Read our full guide on ' + niche.vertical.toLowerCase() + ' →</a> &nbsp; | &nbsp; <a class="small-muted" href="compare.html">📊 Compare top providers →</a> &nbsp; | &nbsp; <a class="small-muted" href="articles.html">📚 Browse all articles →</a></div>' +
    '</div></section>';

    html += '<section class="section"><div class="container"><div class="cta-band"><h2>' + d.ctaHeading + '</h2><p>' + d.ctaText + '</p>' +
      '<a href="#lead-form" class="btn btn-primary btn-lg">Get Started Free <i class="fa-solid fa-arrow-right"></i></a></div></div></section>';

    html += footer(slug, niche);
    return html;
  }

  /* ==================== GUIDE PAGE ==================== */
  function renderGuide(slug, niche) {
    var g = niche.guide;
    var html = "";
    html += header(slug, niche, "guide");

    html += '<section class="article-hero"><div class="container">' +
      '<span class="eyebrow">Complete Guide</span><h1>' + g.title + '</h1>' +
      '<div class="article-meta"><span><i class="fa-regular fa-clock"></i>12 min read</span><span><i class="fa-regular fa-calendar"></i>Updated 2026</span><span><i class="fa-solid fa-user-check"></i>Reviewed by Industry Specialists</span></div>' +
    '</div></section>';

    html += '<div class="ad-wrap"><div class="container text-center">' + adSlot("ad-slot-inline", "Google Ads · High-CPM Inline Unit") + '</div></div>';

    html += '<section class="section"><div class="container article-layout">' +
      '<div class="article-body">' +
        '<p style="font-size:1.08rem;">' + g.intro + '</p>' +
        g.sections.map(function (s, idx) {
          var out = '<h2 id="sec' + idx + '">' + s.h2 + '</h2>';
          out += s.paragraphs.map(function (p) { return '<p>' + p + '</p>'; }).join("");
          if (s.list) out += '<ul>' + s.list.map(function (li) { return '<li>' + li + '</li>'; }).join("") + '</ul>';
          if (idx === 1) out += '<div class="ad-slot ad-slot-native" style="margin:24px 0;"><span>Google Ads · Native In-Article Unit</span><small>Responsive Native Ad</small></div>';
          return out;
        }).join("") +
        '<h2 id="faq">Frequently Asked Questions</h2>' +
        '<div>' + g.faq.map(function (f) {
          return '<div class="faq-item"><button class="faq-q">' + f.q + '<i class="fa-solid fa-plus"></i></button><div class="faq-a"><div class="faq-a-inner">' + f.a + '</div></div></div>';
        }).join("") + '</div>' +
      '</div>' +
      '<aside class="sticky-sidebar">' +
        '<div class="toc-card"><h4>On This Page</h4><ol>' + g.toc.map(function (t) { return '<li>' + t + '</li>'; }).join("") + '</ol></div>' +
        '<div class="sidebar-card"><h4>Quick Checklist</h4><ul class="checklist">' + g.checklist.map(function (c) { return '<li><i class="fa-solid fa-square-check"></i>' + c + '</li>'; }).join("") + '</ul></div>' +
        '<div class="ad-slot ad-slot-square" style="margin-bottom:24px;"><span>Google Ads</span><small>300×250 Sidebar Unit</small></div>' +
        '<div class="sidebar-card" style="background:var(--c-primary);border:none;">' +
          '<h4 style="color:rgba(255,255,255,.7);">Ready To Take The Next Step?</h4>' +
          '<p style="color:rgba(255,255,255,.85);font-size:.9rem;">Get a free, no-obligation quote in minutes.</p>' +
          '<a href="index.html#lead-form" class="btn btn-primary btn-block">Get Free Quote</a>' +
        '</div>' +
      '</aside>' +
    '</div></section>';

    html += '<div class="ad-wrap ad-wrap-bottom"><div class="container text-center">' + adSlot("ad-slot-inline", "Google Ads · High-CPM Inline Unit") + '</div></div>';

    html += '<section class="section"><div class="container"><div class="cta-band"><h2>Get Personalized Help Today</h2><p>See your free, no-obligation options in minutes — no pressure, no commitment.</p>' +
      '<a href="index.html#lead-form" class="btn btn-primary btn-lg">Start My Free Quote <i class="fa-solid fa-arrow-right"></i></a></div></div></section>';

    html += footer(slug, niche);
    return html;
  }

  /* ==================== COMPARE PAGE ==================== */
  function renderCompare(slug, niche) {
    var c = niche.compare;
    var html = "";
    html += header(slug, niche, "compare");

    html += '<section class="article-hero"><div class="container">' +
      '<span class="eyebrow">Independent Comparison</span><h1>' + c.title + '</h1>' +
      '<div class="article-meta"><span><i class="fa-regular fa-clock"></i>9 min read</span><span><i class="fa-regular fa-calendar"></i>Updated 2026</span><span><i class="fa-solid fa-scale-balanced"></i>Editorially Independent</span></div>' +
    '</div></section>';

    html += '<div class="ad-wrap"><div class="container text-center">' + adSlot("ad-slot-inline", "Google Ads · High-CPM Inline Unit") + '</div></div>';

    html += '<section class="section"><div class="container" style="max-width:960px;">' +
      '<p style="font-size:1.08rem;color:var(--c-text-light);">' + c.intro + '</p>' +

      '<div class="provider-cards">' + c.providers.slice(0, 3).map(function (p, pi) {
        return '<div class="provider-card' + (p.highlight ? ' top' : '') + '">' + providerLogoImg(pi) + '<span class="rank">#' + p.rank + ' Pick</span>' +
          '<h4>' + p.name + (p.highlight ? '<span class="badge-best">Editor\'s Choice</span>' : '') + '</h4>' +
          '<div class="rating-stars">' + stars(p.rating) + ' ' + p.rating + '/5</div>' +
          '<div class="price">' + p.price + '</div>' +
          '<ul class="pc-list pros">' + p.pros.map(function (pr) { return '<li><i class="fa-solid fa-circle-check"></i>' + pr + '</li>'; }).join("") + '</ul>' +
          '<ul class="pc-list cons">' + p.cons.map(function (co) { return '<li><i class="fa-solid fa-circle-xmark"></i>' + co + '</li>'; }).join("") + '</ul>' +
          '<a href="index.html#lead-form" class="btn btn-dark btn-block">Get Free Quote</a>' +
        '</div>';
      }).join("") + '</div>' +

      '<h2>Full Feature Comparison</h2>' +
      '<div class="compare-table-wrap"><table class="compare-table"><thead><tr><th>Provider</th>' +
        c.tableFeatures.map(function (f) { return '<th>' + f + '</th>'; }).join("") + '</tr></thead><tbody>' +
        c.providers.map(function (p, i) {
          return '<tr><td><strong>' + p.name + '</strong> <span class="rating-stars">' + stars(p.rating) + '</span></td>' +
            c.tableData[i].map(function (cell) { return '<td>' + cell + '</td>'; }).join("") + '</tr>';
        }).join("") +
      '</tbody></table></div>' +

      '<div class="ad-slot ad-slot-native" style="margin:32px 0;"><span>Google Ads · Native In-Article Unit</span><small>Responsive Native Ad</small></div>' +

      '<h2>Frequently Asked Questions</h2>' +
      '<div>' + c.faq.map(function (f) {
        return '<div class="faq-item"><button class="faq-q">' + f.q + '<i class="fa-solid fa-plus"></i></button><div class="faq-a"><div class="faq-a-inner">' + f.a + '</div></div></div>';
      }).join("") + '</div>' +

      '<div class="text-center" style="margin-top:16px;"><a class="small-muted" href="guide.html">📖 Read the full buyer\'s guide →</a> &nbsp; | &nbsp; <a class="small-muted" href="index.html">🏠 Back to overview →</a></div>' +
    '</div></section>';

    html += '<div class="ad-wrap ad-wrap-bottom"><div class="container text-center">' + adSlot("ad-slot-inline", "Google Ads · High-CPM Inline Unit") + '</div></div>';

    html += '<section class="section"><div class="container"><div class="cta-band"><h2>Ready To Compare Your Own Options?</h2><p>Get a free, personalized quote from top-rated providers in minutes.</p>' +
      '<a href="index.html#lead-form" class="btn btn-primary btn-lg">Get My Free Quote <i class="fa-solid fa-arrow-right"></i></a></div></div></section>';

    html += footer(slug, niche);
    return html;
  }

  /* Re-bind FAQ accordions + lead forms + smooth anchors for injected content */
  window.rehydrateShared = function () {
    document.querySelectorAll(".faq-item").forEach(function (item) {
      var q = item.querySelector(".faq-q");
      var a = item.querySelector(".faq-a");
      if (!q || q.dataset.bound) return;
      q.dataset.bound = "1";
      q.addEventListener("click", function () {
        var isOpen = item.classList.contains("open");
        var parent = item.parentElement;
        parent.querySelectorAll(".faq-item.open").forEach(function (openItem) {
          if (openItem !== item) { openItem.classList.remove("open"); openItem.querySelector(".faq-a").style.maxHeight = null; }
        });
        if (isOpen) { item.classList.remove("open"); a.style.maxHeight = null; }
        else { item.classList.add("open"); a.style.maxHeight = a.scrollHeight + "px"; }
      });
    });

    document.querySelectorAll("[data-lead-form]").forEach(function (form) {
      if (form.dataset.bound) return;
      form.dataset.bound = "1";
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (window.submitLeadFormShared) window.submitLeadFormShared(form);
      });
    });

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      if (link.dataset.boundAnchor) return;
      link.dataset.boundAnchor = "1";
      link.addEventListener("click", function (e) {
        var id = link.getAttribute("href");
        if (id.length < 2) return;
        var target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        var top = target.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({ top: top, behavior: "smooth" });
      });
    });

    if (document.querySelector("[data-year]")) {
      document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
    }

    if (window.initMegaMenu) window.initMegaMenu();
  };
})();
