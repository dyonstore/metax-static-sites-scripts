/* =========================================================================
   ARTICLE ENGINE — fetches /content/{niche}/{slug}.md, parses frontmatter +
   markdown body (via marked.js), and renders a full premium article page:
   SEO <head> tags, JSON-LD schema (Article + Breadcrumb + FAQPage), social
   share, sticky reading progress bar, TOC, ad slots, related articles.
   Shell page only needs: <body data-niche="slug" data-slug="article-slug">
   and <div id="page-root"></div>, plus marked.js + niches-data + articles-index.
   ========================================================================= */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var body = document.body;
    var niche = body.getAttribute("data-niche");
    var slug = body.getAttribute("data-slug");
    var root = document.getElementById("page-root");
    var nicheData = window.NICHES && window.NICHES[niche];
    var meta = (window.ARTICLES || []).find(function (a) { return a.niche === niche && a.slug === slug; });
    if (!root || !nicheData || !meta) {
      if (root) root.innerHTML = '<div class="section container"><p>Article not found.</p></div>';
      return;
    }
    document.body.setAttribute("data-theme", nicheData.theme);

    var mdPath = "../../../content/" + niche + "/" + slug + ".md";
    fetch(mdPath)
      .then(function (res) { if (!res.ok) throw new Error("MD fetch failed: " + res.status); return res.text(); })
      .then(function (raw) {
        var parsed = parseFrontmatter(raw);
        renderArticle(niche, slug, nicheData, meta, parsed, root);
      })
      .catch(function (err) {
        console.error(err);
        root.innerHTML = '<div class="section container"><p>Unable to load article content.</p></div>';
      });
  });

  /* ---------------- Frontmatter + Markdown parsing ---------------- */
  function parseFrontmatter(raw) {
    var fm = {};
    var body = raw;
    if (raw.slice(0, 3) === "---") {
      var end = raw.indexOf("\n---", 3);
      if (end > -1) {
        var block = raw.slice(3, end).trim();
        body = raw.slice(end + 4).replace(/^\s+/, "");
        block.split("\n").forEach(function (line) {
          var idx = line.indexOf(":");
          if (idx === -1) return;
          var key = line.slice(0, idx).trim();
          var val = line.slice(idx + 1).trim().replace(/^["']|["']$/g, "");
          fm[key] = val;
        });
      }
    }
    return { fm: fm, body: body };
  }

  function renderArticle(niche, slug, nicheData, meta, parsed, root) {
    var htmlBody = window.marked ? window.marked.parse(parsed.body) : "<pre>" + esc(parsed.body) + "</pre>";
    var toc = extractHeadings(htmlBody);
    htmlBody = addHeadingIds(htmlBody);

    var faq = extractFaqFromMd(parsed.body);
    var canonicalUrl = window.location.href.split("#")[0];
    var pageTitle = (parsed.fm.seoTitle || meta.title) + " | " + nicheData.name;
    var pageDesc = parsed.fm.seoDescription || meta.dek;
    var imgMeta = (window.NICHE_IMG && window.NICHE_IMG[niche]) || {};
    var fallbackImage = canonicalUrl.split("/niches/")[0] + "/img/" + (imgMeta.artFile || "hub-hero.jpg");

    setHeadMeta(pageTitle, pageDesc, canonicalUrl, parsed.fm.image || fallbackImage, nicheData);
    injectSchema(niche, slug, nicheData, meta, parsed, canonicalUrl, faq);

    var html = "";
    html += header(niche, nicheData);
    html += articleHero(niche, nicheData, meta, parsed);
    html += adBlock("Google Ads · High-CPM Inline Unit", "ad-slot-inline");
    html += mainLayout(niche, nicheData, meta, htmlBody, toc, faq, canonicalUrl);
    html += adBlock("Google Ads · High-CPM Inline Unit", "ad-slot-inline", true);
    html += relatedArticles(niche, slug, nicheData);
    html += ctaBand(niche, nicheData);
    html += footer(niche, nicheData);

    root.innerHTML = html;
    if (window.rehydrateShared) window.rehydrateShared();
    if (window.initMegaMenu) window.initMegaMenu();
    bindTocScroll();
    bindReadingProgress();
    bindShareCopy();
  }

  function esc(s) { return (s || "").toString().replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  function slugifyHeading(text) {
    return text.toLowerCase().replace(/<[^>]+>/g, "").replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-").slice(0, 60);
  }

  function extractHeadings(html) {
    var out = [];
    var re = /<h2[^>]*>(.*?)<\/h2>/gi;
    var m;
    while ((m = re.exec(html))) out.push({ text: m[1].replace(/<[^>]+>/g, ""), id: slugifyHeading(m[1]) });
    return out;
  }

  function addHeadingIds(html) {
    return html.replace(/<h2[^>]*>(.*?)<\/h2>/gi, function (full, inner) {
      return '<h2 id="' + slugifyHeading(inner) + '">' + inner + "</h2>";
    });
  }

  function extractFaqFromMd(mdBody) {
    // Looks for a "## Frequently Asked Questions" section with "### Q" sub-headings
    var faq = [];
    var idx = mdBody.search(/##\s*Frequently Asked Questions/i);
    if (idx === -1) return faq;
    var section = mdBody.slice(idx);
    var re = /###\s*(.+)\n+([\s\S]*?)(?=\n###|\n##|$)/g;
    var m;
    while ((m = re.exec(section))) {
      faq.push({ q: m[1].trim(), a: m[2].trim().replace(/\n+/g, " ") });
    }
    return faq;
  }

  /* ---------------- SEO head tags ---------------- */
  function setHeadMeta(title, desc, url, image, nicheData) {
    document.title = title;
    setMeta("description", desc);
    setMeta("og:title", title, true);
    setMeta("og:description", desc, true);
    setMeta("og:type", "article", true);
    setMeta("og:url", url, true);
    if (image) setMeta("og:image", image, true);
    setMeta("og:site_name", "LeadGen Network", true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", desc);
    if (image) setMeta("twitter:image", image);
    var link = document.querySelector('link[rel="canonical"]');
    if (!link) { link = document.createElement("link"); link.setAttribute("rel", "canonical"); document.head.appendChild(link); }
    link.setAttribute("href", url);
  }
  function setMeta(name, content, isProperty) {
    var attr = isProperty ? "property" : "name";
    var el = document.querySelector('meta[' + attr + '="' + name + '"]');
    if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
    el.setAttribute("content", content);
  }

  /* ---------------- JSON-LD schema ---------------- */
  function injectSchema(niche, slug, nicheData, meta, parsed, url, faq) {
    var graph = [];
    graph.push({
      "@type": "Article",
      "headline": meta.title,
      "description": meta.dek,
      "datePublished": meta.date,
      "dateModified": parsed.fm.updated || meta.date,
      "author": { "@type": "Organization", "name": nicheData.name },
      "publisher": { "@type": "Organization", "name": nicheData.name },
      "mainEntityOfPage": { "@type": "WebPage", "@id": url }
    });
    var siteRoot = url.split("/niches/")[0];
    graph.push({
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": siteRoot + "/index.html" },
        { "@type": "ListItem", "position": 2, "name": nicheData.vertical, "item": siteRoot + "/niches/" + niche + "/index.html" },
        { "@type": "ListItem", "position": 3, "name": "Articles", "item": siteRoot + "/niches/" + niche + "/articles.html" },
        { "@type": "ListItem", "position": 4, "name": meta.title, "item": url }
      ]
    });
    if (faq.length) {
      graph.push({
        "@type": "FAQPage",
        "mainEntity": faq.map(function (f) {
          return { "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } };
        })
      });
    }
    var script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
    document.head.appendChild(script);
  }

  /* ---------------- Layout builders ---------------- */
  function header(niche, n) {
    return (
      '<div class="ad-wrap"><div class="container text-center"><div class="ad-slot ad-slot-leaderboard"><span>Google Ads · Leaderboard</span><small>728×90 — Top CPM Placement</small></div></div></div>' +
      '<header class="site-header"><div class="header-inner">' +
        '<a href="../../../index.html" class="brand"><span class="brand-icon"><i class="fa-solid ' + n.icon + '"></i></span>' + n.name + '</a>' +
        '<nav class="trust-strip"><span><i class="fa-solid fa-circle-check"></i>Editorially Reviewed</span><span><i class="fa-solid fa-circle-check"></i>' + n.vertical + '</span></nav>' +
        '<div class="header-cta"><div class="header-phone"><i class="fa-solid fa-phone"></i><span>Call 1-800-555-0199</span></div><a href="../index.html#lead-form" class="btn btn-primary">Get Free Quote</a></div>' +
      '</div></header>' +
      '<div class="container breadcrumb"><a href="../../../index.html">Home</a> / <a href="../index.html">' + n.vertical + '</a> / <a href="../articles.html">Articles</a> / <span>Article</span></div>'
    );
  }

  function articleHero(niche, n, meta, parsed) {
    return '<section class="article-single-hero"><div class="container">' +
      '<span class="eyebrow">' + esc(meta.category) + '</span>' +
      '<h1>' + esc(meta.title) + '</h1>' +
      '<p class="dek">' + esc(meta.dek) + '</p>' +
      '<div class="author-row">' +
        '<div class="avatar">' + n.name.split(" ").map(function (w) { return w[0]; }).join("").slice(0, 2) + '</div>' +
        '<div><div class="author-name">' + n.name + ' Editorial Team</div><div class="author-meta">Published ' + fmtDate(meta.date) + ' · ' + meta.readTime + ' min read</div></div>' +
      '</div>' +
      '<div class="share-row"><span class="share-label">Share:</span>' + shareButtons() + '</div>' +
    '</div></section>';
  }

  function shareButtons() {
    return (
      '<a class="share-btn fb" target="_blank" rel="noopener" data-share="facebook" href="#" title="Share on Facebook"><i class="fa-brands fa-facebook-f"></i></a>' +
      '<a class="share-btn tw" target="_blank" rel="noopener" data-share="twitter" href="#" title="Share on X"><i class="fa-brands fa-x-twitter"></i></a>' +
      '<a class="share-btn li" target="_blank" rel="noopener" data-share="linkedin" href="#" title="Share on LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>' +
      '<a class="share-btn wa" target="_blank" rel="noopener" data-share="whatsapp" href="#" title="Share on WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>' +
      '<a class="share-btn pin" target="_blank" rel="noopener" data-share="pinterest" href="#" title="Share on Pinterest"><i class="fa-brands fa-pinterest-p"></i></a>' +
      '<a class="share-btn mail" data-share="mail" href="#" title="Share via Email"><i class="fa-solid fa-envelope"></i></a>' +
      '<button class="share-btn copy" data-share-copy title="Copy link"><i class="fa-solid fa-link"></i></button>'
    );
  }

  function mainLayout(niche, n, meta, htmlBody, toc, faq, url) {
    var tocHtml = toc.length ? '<div class="toc-card"><h4>On This Page</h4><ol>' + toc.map(function (t) { return '<li><a href="#' + t.id + '" class="toc-link">' + esc(t.text) + '</a></li>'; }).join("") + '</ol></div>' : "";
    var imgMeta = (window.NICHE_IMG && window.NICHE_IMG[niche]) || { artIndex: 0, artFile: "" };
    var featuredImg = window.imgPlaceholder ? window.imgPlaceholder(imgMeta.artIndex, imgMeta.artFile, meta.title, "featured", "../../../") : '<div class="article-featured-img"><i class="fa-solid ' + n.icon + '"></i></div>';
    return '<section class="section"><div class="container article-single-layout">' +
      '<aside class="article-sticky-share">' + shareButtons() + '</aside>' +
      '<div class="article-body-content">' +
        featuredImg +
        '<div class="article-toc-mobile">' + tocHtml + '</div>' +
        htmlBody +
        '<div class="article-tags">' + (meta.tags || []).map(function (t) { return "<span>#" + t.replace(/\s+/g, "") + "</span>"; }).join("") + '</div>' +
        '<div class="author-bio-card"><div class="avatar">' + n.name.split(" ").map(function (w) { return w[0]; }).join("").slice(0, 2) + '</div>' +
          '<div><h5>' + n.name + ' Editorial Team</h5><p>Our editorial team researches and reviews ' + n.vertical.toLowerCase() + ' content to help readers make informed, confident decisions. This article is for general informational purposes and is not professional advice.</p></div>' +
        '</div>' +
        '<div class="share-row" style="margin-top:24px;"><span class="share-label">Found this helpful? Share it:</span>' + shareButtons() + '</div>' +
      '</div>' +
      '<aside class="sticky-sidebar">' +
        tocHtml +
        '<div class="ad-slot ad-slot-square" style="margin-bottom:24px;"><span>Google Ads</span><small>300×250 Sidebar Unit</small></div>' +
        '<div class="sidebar-card" style="background:var(--c-primary);border:none;"><h4 style="color:rgba(255,255,255,.7);">Ready For A Free Quote?</h4><p style="color:rgba(255,255,255,.85);font-size:.9rem;">See your personalized options in minutes — no obligation.</p><a href="../index.html#lead-form" class="btn btn-primary btn-block">Get Free Quote</a></div>' +
      '</aside>' +
    '</div></section>';
  }

  function adBlock(label, size, bottom) {
    return '<div class="ad-wrap' + (bottom ? " ad-wrap-bottom" : "") + '"><div class="container text-center"><div class="ad-slot ' + size + '"><span>' + label + '</span><small>' + (size.indexOf("inline") > -1 ? "970×120" : "Responsive") + '</small></div></div></div>';
  }

  function relatedArticles(niche, slug, n) {
    var all = (window.ARTICLES || []).filter(function (a) { return a.niche === niche && a.slug !== slug; }).slice(0, 3);
    if (!all.length) return "";
    var imgMeta = (window.NICHE_IMG && window.NICHE_IMG[niche]) || { artIndex: 0, artFile: "" };
    return '<section class="section related-articles"><div class="container">' +
      '<div class="section-head text-center"><span class="eyebrow">Keep Reading</span><h2>Related Articles</h2></div>' +
      '<div class="grid grid-3">' + all.map(function (a) {
        return '<div class="article-card">' + (window.imgPlaceholder ? window.imgPlaceholder(imgMeta.artIndex, imgMeta.artFile, a.title, "card", "../../../") : "") +
          '<div class="ac-top"><span class="ac-cat">' + esc(a.category) + '</span><br><i class="fa-solid ' + n.icon + '"></i></div>' +
          '<div class="ac-body"><h3><a href="' + a.slug + '.html">' + esc(a.title) + '</a></h3><p>' + esc(a.dek) + '</p>' +
          '<div class="ac-meta"><span><i class="fa-regular fa-clock"></i>' + a.readTime + ' min</span><span>' + fmtDate(a.date) + '</span></div></div></div>';
      }).join("") + '</div>' +
      '<div class="text-center" style="margin-top:24px;"><a href="../articles.html" class="btn btn-outline" style="border-color:var(--c-primary);color:var(--c-primary);">View All Articles <i class="fa-solid fa-arrow-right"></i></a></div>' +
    '</div></section>';
  }

  function ctaBand(niche, n) {
    return '<section class="section"><div class="container"><div class="cta-band"><h2>Ready To Get Your Free, No-Obligation Quote?</h2><p>See your personalized options from top-rated providers in minutes.</p><a href="../index.html#lead-form" class="btn btn-primary btn-lg">Get Started Free <i class="fa-solid fa-arrow-right"></i></a></div></div></section>';
  }

  function footer(niche, n) {
    return '<footer class="site-footer"><div class="container">' +
      '<div class="disclosure"><strong>Advertising Disclosure:</strong> This is an independent comparison and lead-generation website. We may receive compensation from the companies mentioned on this site. All content is provided for general informational purposes and does not constitute professional, legal, financial, or medical advice.</div>' +
      '<div class="footer-grid">' +
        '<div><h5>' + n.name + '</h5><p style="font-size:.85rem;">Connecting people with trusted, top-rated ' + n.vertical.toLowerCase() + ' providers nationwide since 2015.</p></div>' +
        '<div><h5>Explore</h5><a href="../index.html">Get A Free Quote</a><a href="../guide.html">Full Guide</a><a href="../compare.html">Compare Providers</a><a href="../articles.html">All Articles</a></div>' +
        '<div><h5>Company</h5><a href="../../../index.html">All Categories</a><a href="../../../about.html">About</a><a href="../../../contact.html">Contact Us</a></div>' +
        '<div><h5>Legal</h5><a href="../../../privacy.html">Privacy Policy</a><a href="../../../about.html#terms">Terms of Use</a><a href="../../../contact.html">Do Not Sell My Info</a></div>' +
      '</div>' +
      '<div class="footer-bottom">© <span data-year></span> ' + n.name + '. All rights reserved.</div>' +
    '</div></footer>' +
    '<div class="sticky-cta"><a class="btn btn-dark" href="tel:18005550199"><i class="fa-solid fa-phone"></i> Call Now</a><a class="btn btn-primary" href="../index.html#lead-form">Free Quote</a></div>';
  }

  function fmtDate(iso) {
    if (!iso) return "";
    var d = new Date(iso + "T00:00:00");
    if (isNaN(d)) return iso;
    return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  }

  /* ---------------- Behaviors ---------------- */
  function bindTocScroll() {
    document.querySelectorAll(".toc-link").forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        var target = document.getElementById(link.getAttribute("href").slice(1));
        if (target) window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 96, behavior: "smooth" });
      });
    });
  }

  function bindReadingProgress() {
    var bar = document.createElement("div");
    bar.className = "reading-progress";
    document.body.appendChild(bar);
    window.addEventListener("scroll", function () {
      var h = document.documentElement;
      var pct = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
      bar.style.width = Math.min(100, Math.max(0, pct)) + "%";
    });
  }

  function bindShareCopy() {
    var url = window.location.href;
    var title = document.title;
    document.querySelectorAll("[data-share]").forEach(function (btn) {
      var type = btn.getAttribute("data-share");
      var href = "#";
      if (type === "facebook") href = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url);
      if (type === "twitter") href = "https://twitter.com/intent/tweet?url=" + encodeURIComponent(url) + "&text=" + encodeURIComponent(title);
      if (type === "linkedin") href = "https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(url);
      if (type === "whatsapp") href = "https://wa.me/?text=" + encodeURIComponent(title + " " + url);
      if (type === "pinterest") href = "https://pinterest.com/pin/create/button/?url=" + encodeURIComponent(url) + "&description=" + encodeURIComponent(title);
      if (type === "mail") href = "mailto:?subject=" + encodeURIComponent(title) + "&body=" + encodeURIComponent(url);
      btn.setAttribute("href", href);
    });
    document.querySelectorAll("[data-share-copy]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        navigator.clipboard.writeText(url).then(function () {
          var icon = btn.querySelector("i");
          icon.className = "fa-solid fa-check";
          setTimeout(function () { icon.className = "fa-solid fa-link"; }, 1500);
        });
      });
    });
  }
})();
