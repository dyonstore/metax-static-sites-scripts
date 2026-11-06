/* Meridian Decision Network — shared page renderer.
   Each HTML page is a thin shell that carries its own <title>, meta description
   and data-page id. This script assembles the chrome (header, breadcrumbs,
   sidebar, footer), the article body from the site's content file, structured
   data, and the interactive widgets (calculators, checklists, forms). */
(function () {
  "use strict";

  var D = window.SITE_DATA;
  var NET = window.NETWORK;
  if (!D) { return; }

  var body = document.body;
  var ROOT = body.getAttribute("data-root") || "./";
  var pageId = body.getAttribute("data-page") || "index";
  var P = D.pages[pageId] || D.pages.index;
  var siteMeta = NET.get(D.slug) || { brand: D.brand, mark: D.mark, color: D.color };

  /* ---------------- helpers ---------------- */
  function el(html) { var t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstElementChild; }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function href(target) {
    if (!target) { return ROOT; }
    if (/^https?:/.test(target) || target.charAt(0) === "#") { return target; }
    if (target.indexOf("/") > -1) { return ROOT + target; }          // network path e.g. "sites/hardenhq/index.html"
    return target === "index" ? "index.html" : target + ".html";       // same-site page id
  }
  function money(n, cur) { return (cur || "$") + Math.round(n).toLocaleString("en-US"); }

  /* Image block with a zero-byte CSS fallback.

     ph(label, ratio, glyph, src, eager)

     The ratio box is always reserved in CSS, so nothing shifts whether or not a
     bitmap exists (protects CLS). When `src` is given (a path under img/, e.g.
     "fig/ledgerlift-f01.jpg") a real <img> is layered over the gradient box and
     CSS hides the decorative fallback. If that file is missing or fails to load
     the img removes itself, data-img is dropped, and the gradient placeholder
     reappears automatically — so the network renders correctly before, during
     and after the image drop, with no page edits.

     `eager` marks an above-the-fold LCP image: it skips lazy-loading and asks
     the browser for high fetch priority. */
  function ph(label, ratio, glyph, src, eager) {
    var cap = label || "Illustration";
    var g = glyph || String(label || siteMeta.brand).replace(/[^A-Za-z0-9 ]/g, "").split(/\s+/)
      .slice(0, 2).map(function (w) { return w.charAt(0).toUpperCase(); }).join("");
    var out = '<div class="ph ' + (ratio || "r16") + '"' + (glyph ? "" : ' data-auto="1"');
    if (src) {
      /* The <img> carries the alt text, so the wrapper must not also expose an
         aria-label — that would announce the same thing twice. */
      out += ' data-img="1">' +
        '<img class="ph-img" src="' + ROOT + "img/" + src + '" alt="' + esc(cap) + '"' +
        (eager ? ' decoding="async" fetchpriority="high"' : ' loading="lazy" decoding="async"') +
        " onerror=\"this.parentNode.removeAttribute('data-img');this.remove();\">";
    } else {
      out += ' role="img" aria-label="' + esc(cap) + '">';
    }
    return out +
      '<span class="ph-grid" aria-hidden="true"></span>' +
      '<span class="ph-inner"><span class="ph-glyph" aria-hidden="true">' + esc(g) + "</span>" +
      '<span class="ph-cap">' + esc(cap) + "</span></span></div>";
  }

  /* Figures are numbered per brand, sequentially, in data-file page order —
     the exact scheme used to build img/IMAGE-PROMPTS.md (fig/<slug>-fNN.jpg).
     This returns how many figures precede the given page. */
  function figOffset(id) {
    var n = 0, keys = Object.keys(D.pages);
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === id) { return n; }
      n += ((D.pages[keys[i]].body || "").match(/<!--FIG:/g) || []).length;
    }
    return n;
  }
  function orbs() { return '<div class="hero-orbs" aria-hidden="true"><i></i><i></i><i></i></div>'; }
  function slugify(s) { return String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""); }
  window.MDN_UTIL = { money: money, esc: esc };
  window.MDN_PH = function () { return ph.apply(null, arguments); };

  document.documentElement.style.setProperty("--brand", siteMeta.color);
  document.documentElement.style.setProperty("--brand-dark", shade(siteMeta.color, -28));
  document.documentElement.style.setProperty("--brand-soft", tint(siteMeta.color, 90));

  function hex2rgb(h) { h = h.replace("#", ""); return [parseInt(h.substr(0, 2), 16), parseInt(h.substr(2, 2), 16), parseInt(h.substr(4, 2), 16)]; }
  function shade(h, p) { var c = hex2rgb(h).map(function (v) { return Math.max(0, Math.min(255, Math.round(v + (v * p / 100)))); }); return "rgb(" + c.join(",") + ")"; }
  function tint(h, p) { var c = hex2rgb(h).map(function (v) { return Math.round(v + (255 - v) * p / 100); }); return "rgb(" + c.join(",") + ")"; }

  /* ---------------- head / meta ---------------- */
  (function headMeta() {
    var link = document.querySelector('link[rel="canonical"]');
    if (!link) { link = document.createElement("link"); link.rel = "canonical"; document.head.appendChild(link); }
    link.href = location.href.split("#")[0].split("?")[0];
    var desc = (document.querySelector('meta[name="description"]') || {}).content || "";
    addMeta("property", "og:title", document.title);
    addMeta("property", "og:description", desc);
    addMeta("property", "og:type", pageId === "index" ? "website" : "article");
    addMeta("property", "og:site_name", siteMeta.brand);
    addMeta("name", "twitter:card", "summary_large_image");
    /* Absolute, normalised URL: crawlers ignore relative og:image values, and a
       path still containing "../.." is unreliable. new URL() collapses it. */
    var ogImg;
    try {
      ogImg = new URL(ROOT + "img/og/" + D.slug + ".jpg", location.href).href;
    } catch (e) {
      ogImg = "";
    }
    addMeta("property", "og:image", ogImg);
    addMeta("property", "og:image:width", "1200");
    addMeta("property", "og:image:height", "628");
    addMeta("name", "twitter:image", ogImg);
    addMeta("name", "robots", P.noindex ? "noindex,follow" : "index,follow,max-image-preview:large");
    addMeta("name", "author", P.author || D.defaultAuthor || siteMeta.brand + " editorial team");
  })();
  function addMeta(attr, key, val) {
    if (!val) { return; }
    var m = document.querySelector("meta[" + attr + '="' + key + '"]');
    if (!m) { m = document.createElement("meta"); m.setAttribute(attr, key); document.head.appendChild(m); }
    m.setAttribute("content", val);
  }

  /* ---------------- header + mega menu ---------------- */
  function megaPanel() {
    /* Columns 1..n: topic clusters. Then tools, then trust/company. */
    var cols = (D.clusters || []).slice(0, 4).map(function (c) {
      var links = c.pages.map(function (id) {
        var p = D.pages[id]; if (!p) { return ""; }
        return '<li><a href="' + href(id) + '">' + esc(p.h1 || p.title) + "</a></li>";
      }).join("");
      return '<div class="mega-col"><h4>' + esc(c.name) + '</h4><p class="mega-note">' + esc(c.desc) + "</p><ul>" + links + "</ul></div>";
    }).join("");

    var tools = (D.toolLinks || []).map(function (t) {
      return '<li><a href="' + href(t.page) + '">' + esc(t.label) + "</a></li>";
    }).join("");
    var trust = '<li><a href="' + href("about") + '">About &amp; team</a></li>' +
      '<li><a href="' + href("editorial-policy") + '">Editorial policy</a></li>' +
      '<li><a href="' + href("review-methodology") + '">Review methodology</a></li>' +
      '<li><a href="' + href("disclosures") + '">Advertiser disclosure</a></li>' +
      '<li><a href="' + href("contact") + '">Contact</a></li>';
    var extras = '<div class="mega-col"><h4>Free tools &amp; trust</h4>' +
      (tools ? '<p class="mega-note">Calculators and checklists that save your progress.</p><ul>' + tools + "</ul>" : "") +
      '<h4 style="margin-top:14px">How we work</h4><ul>' + trust + "</ul></div>";

    var sisters = (D.partners || []).map(function (p) {
      var s = NET.get(p.slug); if (!s) { return ""; }
      return '<a href="' + ROOT + "sites/" + s.slug + '/index.html"><span class="mega-dot" style="background:' + s.color +
        '"></span>' + esc(s.brand) + " — " + esc(p.why) + "</a>";
    }).join("");

    return '<div class="mega-panel" id="mega-panel" role="region" aria-label="All topics"><div class="mega-inner">' +
      '<p class="mega-lead">Every ' + esc(siteMeta.brand) + " guide, grouped by decision. Each cluster has one pillar guide and the supporting pages that answer the follow-up questions.</p>" +
      '<div class="mega-grid">' + cols + extras + "</div>" +
      (sisters ? '<div class="mega-foot"><strong>Elsewhere in the network:</strong>' + sisters + "</div>" : "") +
      "</div></div>";
  }

  function header() {
    var nav = D.nav.map(function (n) {
      var cur = n.page === pageId ? ' aria-current="page"' : "";
      return '<li><a href="' + href(n.page) + '"' + cur + ">" + esc(n.label) + "</a></li>";
    }).join("");
    var megaBtn = '<li><button class="mega-toggle" id="mega-toggle" type="button" aria-expanded="false" aria-controls="mega-panel">' +
      'All topics<span class="caret" aria-hidden="true"></span></button></li>';
    return '<header class="site-header" id="site-header">' +
      '<div class="net-bar"><div class="wrap">' +
        '<span>Part of the <a href="' + ROOT + 'index.html">' + NET.name + "</a> — independent, ad- and affiliate-supported</span>" +
        '<span><a href="' + href("disclosures") + '">Advertiser disclosure</a></span>' +
      "</div></div>" +
      '<div class="wrap header-main">' +
        '<a class="brand" href="' + href("index") + '">' +
          '<span class="brand-mark" aria-hidden="true">' + esc(siteMeta.mark) + "</span>" +
          '<span class="brand-name">' + esc(siteMeta.brand) + '<span class="brand-tag">' + esc(D.tagline) + "</span></span>" +
        "</a>" +
        '<button class="nav-toggle" id="nav-toggle" aria-expanded="false" aria-controls="site-nav">Menu</button>' +
        '<nav class="site-nav" id="site-nav" aria-label="Main"><ul>' + megaBtn + nav + "</ul></nav>" +
      "</div>" + megaPanel() + "</header>";
  }

  /* ---------------- footer ---------------- */
  function footer() {
    var partners = (D.partners || []).map(function (p) {
      var s = NET.get(p.slug); if (!s) { return ""; }
      return '<li><a href="' + ROOT + "sites/" + s.slug + '/index.html">' + esc(s.brand) + "</a> — " + esc(p.why) + "</li>";
    }).join("");
    var topics = (D.nav || []).slice(0, 6).map(function (n) {
      return '<li><a href="' + href(n.page) + '">' + esc(n.label) + "</a></li>";
    }).join("");
    return '<footer class="site-footer" id="site-footer"><div class="wrap">' +
      '<div class="footer-grid">' +
        "<div><h4>" + esc(siteMeta.brand) + "</h4><p>" + esc(D.footerAbout) + "</p>" +
          '<p><a href="' + href("about") + '">About &amp; team</a> · <a href="' + href("contact") + '">Contact</a></p></div>' +
        "<div><h4>Topics</h4><ul>" + topics + "</ul></div>" +
        "<div><h4>Trust</h4><ul>" +
          '<li><a href="' + href("editorial-policy") + '">Editorial policy</a></li>' +
          '<li><a href="' + href("review-methodology") + '">Review methodology</a></li>' +
          '<li><a href="' + href("disclosures") + '">Advertiser disclosure</a></li>' +
          '<li><a href="' + ROOT + 'privacy.html">Privacy</a></li>' +
          '<li><a href="' + ROOT + 'terms.html">Terms</a></li>' +
        "</ul></div>" +
        "<div><h4>Related in the network</h4><ul>" + partners + "</ul></div>" +
      "</div>" +
      '<p class="footer-legal">© ' + new Date().getFullYear() + " " + NET.publisher + ". " + esc(D.legalLine) +
      " " + esc(siteMeta.brand) + " is published by " + NET.publisher + ", part of the " + NET.name +
      ". Rates and figures shown in worked examples are illustrative unless a source is cited; verify current terms with the provider before acting.</p>" +
      "</div></footer>";
  }

  /* ---------------- sidebar ---------------- */
  function sidebar() {
    var pop = (D.popular || []).map(function (id) {
      var p = D.pages[id]; if (!p) { return ""; }
      return '<li><a href="' + href(id) + '">' + esc(p.title) + "</a></li>";
    }).join("");
    var tools = (D.toolLinks || []).map(function (t) {
      return '<li><a href="' + href(t.page) + '">' + esc(t.label) + "</a></li>";
    }).join("");
    return '<aside class="sidebar" id="sidebar"><div class="sidebar-sticky">' +
      newsletterCard("sidebar") +
      (tools ? '<section class="widget">' + ph("Free tools", "r21") + "<h3>Free tools</h3><ul>" + tools + "</ul></section>" : "") +
      '<div class="ad-slot mrec" role="complementary" aria-label="Advertisement">Advertisement</div>' +
      (pop ? '<section class="widget">' + ph("Most read", "r21") + "<h3>Most read</h3><ul>" + pop + "</ul></section>" : "") +
      '<section class="widget"><h3>Find a guide</h3><label for="site-search" class="hint">Filter every page on this site</label>' +
        '<input type="text" id="site-search" placeholder="e.g. cost, checklist, quote" autocomplete="off">' +
        '<ul id="site-search-results" style="margin-top:10px"></ul></section>' +
      "</div></aside>";
  }

  function newsletterCard(ctx) {
    var n = D.newsletter;
    return '<section class="widget newsletter" aria-labelledby="nl-h-' + ctx + '">' +
      ph(n.name, ctx === "home" ? "r16" : "r21") +
      '<h3 id="nl-h-' + ctx + '">' + esc(n.name) + "</h3><p>" + esc(n.pitch) + "</p>" +
      '<form class="nl-form" data-ctx="' + ctx + '">' +
        '<div class="form-row"><label for="nl-email-' + ctx + '">Email address</label>' +
        '<input type="email" id="nl-email-' + ctx + '" name="email" required placeholder="you@company.com"></div>' +
        '<div class="form-row"><label class="checkbox"><input type="checkbox" name="consent" required> ' +
        "Email me " + esc(n.cadence) + " updates. I can unsubscribe any time.</label></div>" +
        '<button class="btn block" type="submit">' + esc(n.cta) + "</button>" +
        '<p class="form-msg" role="status"></p>' +
      "</form><p style=\"font-size:.75rem;margin:0;color:var(--ink-soft)\">Lead magnet: " + esc(n.magnet) + "</p></section>";
  }

  /* ---------------- article parts ---------------- */
  function breadcrumbs() {
    var trail = [{ label: siteMeta.brand, page: "index" }];
    if (P.section) { trail.push({ label: P.section, page: P.sectionPage || null }); }
    var html = trail.map(function (t) {
      return t.page ? '<a href="' + href(t.page) + '">' + esc(t.label) + "</a>" : esc(t.label);
    }).join("<span>›</span>");
    if (pageId !== "index") { html += "<span>›</span>" + esc(P.title); }
    return '<nav class="breadcrumbs" aria-label="Breadcrumb">' + html + "</nav>";
  }

  function byline() {
    if (pageId === "index") { return ""; }
    var a = P.author || D.defaultAuthor;
    var r = P.reviewer || D.defaultReviewer;
    var words = (P.body || "").split(/\s+/).length + 250;
    var mins = Math.max(3, Math.round(words / 230));
    return '<div class="byline">' +
      "<span>By <strong>" + esc(a) + "</strong></span>" +
      (r ? '<span class="badge rev">Reviewed by ' + esc(r) + "</span>" : "") +
      "<span>Updated <strong>" + esc(P.updated || D.updated) + "</strong></span>" +
      "<span>" + mins + " min read</span>" +
      '<span><a href="' + href("editorial-policy") + '">How we verify</a></span>' +
      "</div>";
  }

  function comparison(t) {
    if (!t) { return ""; }
    var head = "<tr>" + t.headers.map(function (h) { return "<th scope='col'>" + esc(h) + "</th>"; }).join("") + "</tr>";
    var rows = t.rows.map(function (r) {
      var cls = r.best ? ' class="best"' : "";
      var cells = r.cells.map(function (c, i) {
        return i === 0 ? "<th scope='row'>" + c + "</th>" : "<td>" + c + "</td>";
      }).join("");
      return "<tr" + cls + ">" + cells + "</tr>";
    }).join("");
    return '<div class="table-scroll"><table class="compare-table">' +
      (t.caption ? "<caption style='text-align:left;font-size:.85rem;color:var(--ink-soft);padding-bottom:8px'>" + esc(t.caption) + "</caption>" : "") +
      "<thead>" + head + "</thead><tbody>" + rows + "</tbody></table></div>" +
      (t.note ? '<p style="font-size:.83rem;color:var(--ink-soft)">' + t.note + "</p>" : "");
  }

  function faqBlock() {
    if (!P.faq || !P.faq.length) { return ""; }
    return '<section class="faq" id="faq"><h2>Frequently asked questions</h2>' +
      P.faq.map(function (f) {
        return "<details><summary>" + esc(f.q) + "</summary><div>" + f.a + "</div></details>";
      }).join("") + "</section>";
  }

  function sourcesBlock() {
    if (!P.sources || !P.sources.length) { return ""; }
    return '<section class="sources" id="sources"><h2>Sources &amp; further reading</h2><ul>' +
      P.sources.map(function (s) {
        return "<li>" + (s.url ? '<a href="' + esc(s.url) + '" rel="nofollow noopener" target="_blank">' + esc(s.name) + "</a>" : esc(s.name)) +
          (s.note ? " — " + esc(s.note) : "") + "</li>";
      }).join("") + "</ul></section>";
  }

  /* ---------------- content edge ----------------
     Implements the differentiation method in CONTENT-EDGE-PLAYBOOK.md: for a
     given topic, identify what the dominant existing coverage gets wrong or
     omits, then publish the correction explicitly. This is the single highest-
     value block on a page — it is the part no competitor has, so it is what
     earns links, citations and "helpful content" credit.

     Data shape on a page:
       edge: {
         intro: "optional lead sentence",
         gaps:  [ { claim, problem, ours } ],
         only:  [ "things only this page gives the reader" ]
       }
     Every factual figure inside must be traceable to P.sources. */
  function edgeBlock() {
    var e = P.edge;
    if (!e) { return ""; }
    var out = '<section class="edge" id="what-others-miss">' +
      '<h2>What most guides on this topic get wrong</h2>';
    if (e.intro) { out += "<p>" + e.intro + "</p>"; }
    if (e.gaps && e.gaps.length) {
      out += '<div class="edge-list">' + e.gaps.map(function (g) {
        return '<div class="edge-item">' +
          '<p class="edge-claim"><span class="edge-tag">Common claim</span> ' + g.claim + "</p>" +
          '<p class="edge-problem"><span class="edge-tag bad">Why it misleads</span> ' + g.problem + "</p>" +
          '<p class="edge-ours"><span class="edge-tag good">What we found</span> ' + g.ours + "</p>" +
          "</div>";
      }).join("") + "</div>";
    }
    if (e.only && e.only.length) {
      out += '<div class="edge-only"><h3>Only on this page</h3><ul>' +
        e.only.map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul></div>";
    }
    return out + "</section>";
  }

  function ctaBlock() {
    var c = P.cta; if (!c) { return ""; }
    return '<section class="callout tip" id="page-cta"><span class="h">' + esc(c.title) + "</span><p>" + c.text + "</p>" +
      (c.btn ? '<a class="btn" href="' + href(c.href) + '">' + esc(c.btn) + "</a>" : "") + "</section>";
  }

  function relatedBlock() {
    var rel = (P.related || []).map(function (id) {
      var p = D.pages[id]; if (!p) { return ""; }
      return '<article class="card">' + ph(p.section || "Guide", "r21") +
        '<span class="kicker">' + esc(p.section || "Guide") + '</span><h3><a href="' + href(id) + '">' +
        esc(p.title) + "</a></h3><p>" + esc(p.dek || "") + "</p></article>";
    }).join("");
    var cross = (P.crossRefs || []).map(function (c) {
      var s = NET.get(c.slug); if (!s) { return ""; }
      return '<article class="card">' + ph(s.brand, "r21", s.mark, "hub/" + c.slug + ".jpg") +
        '<span class="kicker">' + esc(s.brand) + " · sister site</span><h3><a href=\"" + ROOT + "sites/" + c.slug + "/" + c.page + '.html">' +
        esc(c.label) + "</a></h3><p>" + esc(c.why) + "</p></article>";
    }).join("");
    if (!rel && !cross) { return ""; }
    return '<section class="section" id="related" style="padding-bottom:0"><h2>Keep reading</h2><div class="grid c2">' + rel + cross + "</div></section>";
  }

  function disclosureBlock() {
    if (!P.disclosure) { return ""; }
    return '<p class="disclosure"><strong>Advertiser disclosure:</strong> ' + esc(D.disclosureText) +
      ' <a href="' + href("disclosures") + '">Read the full disclosure</a>.</p>';
  }

  /* ---------------- MetaX layer ----------------
     Two blocks, both driven by assets/data/metax-series.js:

       noticeBlock()  — the estate's own verified conditions, each mapped to
                        the structural harm it instantiates. Rendered high on
                        the page because a notice below the fold is a notice
                        the reader was not given.
       metaxBlock()   — the MetaX.Academy course series that teaches the
                        decision this brand covers. TOC only, labelled as
                        planned rather than shipped.

     Both degrade to "" if the MetaX file is absent, so no page depends on it. */

  function metaxData() {
    return (typeof window !== "undefined" && window.METAX) ? window.METAX : null;
  }

  function noticeBlock() {
    var M = metaxData(); if (!M || !M.notices) { return ""; }
    var slug = D.slug;
    var list = M.notices.filter(function (n) {
      if (n.scope && n.scope !== "all" && n.scope !== slug) { return false; }
      /* Page-level suppression: a page may opt out by id, e.g. a policy page
         that already states the same thing in its own prose. */
      return !(P.hideNotices && P.hideNotices.indexOf(n.id) > -1);
    });
    /* Only the actionable kinds are surfaced inline on an article. The full
       set, including standing disclosures, lives on the network notices page. */
    var inline = list.filter(function (n) { return n.kind === "error" || n.kind === "warn"; });
    if (!inline.length) { return ""; }

    var items = inline.map(function (n) {
      return '<li class="notice notice-' + n.kind + '" id="notice-' + n.id + '">' +
        '<p class="notice-head"><span class="notice-kind">' +
          (n.kind === "error" ? "Open defect" : "Known limitation") +
        '</span><span class="notice-harm" title="' + esc(n.harmName || "") + '">' +
          esc(n.harm) + "</span></p>" +
        "<p class=\"notice-title\"><strong>" + esc(n.title) + "</strong></p>" +
        "<p class=\"notice-body\">" + n.body + "</p>" +
        '<p class="notice-status"><em>' + esc(n.status) + "</em></p>" +
      "</li>";
    }).join("");

    return '<section class="notices" id="estate-notices" aria-label="Known defects and limitations of this network">' +
      "<h2>What is currently wrong with this page's publisher</h2>" +
      "<p>We publish our own open defects rather than only other people's. Each is mapped to the structural harm it instantiates in the register this network is licensed under. " +
      '<a href="' + ROOT + 'notices.html">The full list, including standing disclosures, is here</a>.</p>' +
      "<ul class=\"notice-list\">" + items + "</ul>" +
    "</section>";
  }

  function metaxBlock() {
    var M = metaxData(); if (!M || !M.series) { return ""; }
    var s = M.series[D.slug]; if (!s) { return ""; }
    var b = M.brand;

    var toc = s.courses.map(function (c) {
      return '<li class="mx-course">' +
        '<span class="mx-n">' + (c.n < 10 ? "0" + c.n : c.n) + "</span>" +
        "<div><h4>" + esc(c.title) + "</h4>" +
        '<p class="mx-sub">' + esc(c.sub) + "</p>" +
        "<p>" + esc(c.desc) + "</p></div></li>";
    }).join("");

    return '<section class="metax" id="metax-solutions">' +
      '<div class="mx-head">' +
        '<span class="mx-eyebrow">MetaX.Academy · ' + esc(s.pillar) + "</span>" +
        "<h2>" + esc(s.title) + "</h2>" +
        '<p class="mx-subtitle">' + esc(s.subtitle) + "</p>" +
        '<p class="mx-meta"><span>' + esc(s.code) + "</span><span>Author: " + esc(b.author) +
          "</span><span>" + esc(b.license) + "</span></p>" +
      "</div>" +
      "<p class=\"mx-promise\">" + esc(s.promise) + "</p>" +
      '<p class="mx-status"><strong>Status:</strong> ' + esc(b.status) + " " +
        "This series addresses the harms " + s.harms.join(", ") + " named in the register." +
      "</p>" +
      "<h3>Course series — table of contents</h3>" +
      '<ol class="mx-toc">' + toc + "</ol>" +
      '<div class="mx-foot">' +
        "<p><strong>Cadence.</strong> " + esc(b.cadence) + "</p>" +
        "<p><strong>Capstone.</strong> " + esc(s.capstone) + "</p>" +
        "<p><strong>Rails in every series.</strong> " + b.rails.join(" · ") + ".</p>" +
        "<p><strong>Credential ladder.</strong> " + b.ladder.join(" → ") +
          ". Mastery is never conferred by completion.</p>" +
        '<p class="mx-brandline"><a href="' + b.url + '" rel="noopener">' + esc(b.name) +
          "</a> · " + esc(b.curatorLine) + "</p>" +
      "</div>" +
    "</section>";
  }

  /* ---------------- page types ---------------- */
  function homeHTML() {
    var h = P.hero;
    var clusters = (D.clusters || []).map(function (c, ci) {
      var links = c.pages.map(function (id) {
        var p = D.pages[id]; if (!p) { return ""; }
        return '<li><a href="' + href(id) + '">' + esc(p.title) + "</a></li>";
      }).join("");
      return '<article class="card">' +
        ph(c.name, "r21", null, "cluster/" + D.slug + "-c" + (ci + 1) + ".jpg") +
        '<span class="kicker">' + esc(c.kicker) + "</span><h3>" + esc(c.name) + "</h3><p>" +
        esc(c.desc) + '</p><ul style="font-size:.9rem;padding-left:1.1em">' + links + "</ul></article>";
    }).join("");
    var feat = (D.featured || []).map(function (id) {
      var p = D.pages[id]; if (!p) { return ""; }
      return '<article class="card">' + ph(p.section || "Pillar guide", "r16") +
        '<span class="kicker">' + esc(p.section || "Guide") + '</span><h3><a href="' + href(id) + '">' +
        esc(p.title) + "</a></h3><p>" + esc(p.dek || "") + '</p><p style="font-size:.78rem;color:#8b95a1">Updated ' + esc(p.updated || D.updated) + "</p></article>";
    }).join("");
    var tools = (D.toolLinks || []).map(function (t) {
      return '<article class="card">' + ph("Free tool", "r16") +
        '<span class="kicker">Free tool</span><h3><a href="' + href(t.page) + '">' + esc(t.label) +
        "</a></h3><p>" + esc(t.desc) + "</p></article>";
    }).join("");
    var stats = (h.stats || []).map(function (s) {
      return '<div class="card"><div style="font-size:1.7rem;font-weight:700;color:var(--brand)">' + esc(s.v) + '</div><p style="margin:0">' + esc(s.l) + "</p></div>";
    }).join("");

    return '<section class="hero" id="hero-section">' + orbs() + '<div class="wrap"><div class="hero-grid">' +
        "<div>" +
          '<p class="eyebrow rise">' + esc(D.tagline) + "</p>" +
          '<h1 class="rise d1">' + esc(h.h1) + "</h1>" +
          '<p class="lead rise d2">' + esc(h.lead) + "</p>" +
          '<div class="hero-actions rise d3"><a class="btn" href="' + href(h.primary.page) + '">' + esc(h.primary.label) + "</a>" +
          '<a class="btn ghost" href="' + href(h.secondary.page) + '">' + esc(h.secondary.label) + "</a></div>" +
          '<div class="trust-row rise d4">' + (h.trust || []).map(function (t) { return "<span>" + esc(t) + "</span>"; }).join("") + "</div>" +
        "</div>" +
        '<div class="rise d2">' + ph(siteMeta.topic || D.tagline, "r16", siteMeta.mark, "hero/" + D.slug + ".jpg", true) + "</div>" +
      "</div></div></section>" +
      (stats ? '<section class="section"><div class="wrap"><div class="grid c4">' + stats + "</div></div></section>" : "") +
      '<section class="section alt"><div class="wrap"><div class="section-head"><h2>Start with a pillar guide</h2>' +
        '<a href="' + href(D.nav[1].page) + '">Browse all guides →</a></div><div class="grid c3">' + feat + "</div></div></section>" +
      '<section class="section"><div class="wrap"><div class="section-head"><h2>Topic clusters</h2>' +
        "<span style=\"font-size:.88rem;color:var(--ink-soft)\">Every article links back to its pillar</span></div>" +
        '<div class="grid c2">' + clusters + "</div></div></section>" +
      (tools ? '<section class="section alt"><div class="wrap"><h2>Tools you will come back to</h2><div class="grid c3">' + tools + "</div></div></section>" : "") +
      '<section class="section"><div class="wrap"><div class="grid c2" style="align-items:start">' +
        '<div><h2 style="margin-top:0">Why ' + esc(siteMeta.brand) + " exists</h2>" + P.why + "</div>" +
        "<div>" + newsletterCard("home") + "</div></div></div></section>" +
      '<section class="section alt"><div class="wrap"><div id="notices-mount"></div></div></section>' +
      '<section class="section"><div class="wrap"><div id="metax-mount"></div></div></section>';
  }

  /* Animated hero for every non-home page: badge, title, dek, byline over
     drifting orbs, with a staggered entrance. */
  function pageHero() {
    var badge = P.section || P.eyebrow || "Guide";
    return '<section class="page-hero" id="hero-section">' + orbs() +
      breadcrumbs() +
      '<p class="hero-badge rise"><span class="pulse" aria-hidden="true"></span>' + esc(badge) +
        " · updated " + esc(P.updated || D.updated) + "</p>" +
      (P.eyebrow ? '<p class="eyebrow rise d1">' + esc(P.eyebrow) + "</p>" : "") +
      '<h1 class="rise d1">' + esc(P.h1 || P.title) + "</h1>" +
      (P.dek ? '<p class="dek rise d2">' + esc(P.dek) + "</p>" : "") +
      '<div class="rise d3">' + byline() + "</div>" +
      "</section>";
  }

  function articleHTML() {
    var inlineAd = '<div class="ad-slot inline" role="complementary" aria-label="Advertisement">Advertisement</div>';
    var bodyHtml = P.body || "";
    bodyHtml = bodyHtml.split("<!--AD-->").join(inlineAd);
    /* Authors can drop <!--FIG:Caption--> anywhere for a reserved visual block.
       Each marker maps to img/fig/<slug>-fNN.jpg, numbered per brand across the
       whole site in page order (see img/IMAGE-PROMPTS.md §7). */
    var figN = figOffset(pageId);
    bodyHtml = bodyHtml.replace(/<!--FIG:([^>]*?)-->/g, function (m, cap) {
      figN++;
      var file = "fig/" + D.slug + "-f" + (figN < 10 ? "0" + figN : figN) + ".jpg";
      return "<figure>" + ph(cap, "r43", null, file) +
        "<figcaption>" + esc(cap) + "</figcaption></figure>";
    });
    return '<div class="wrap"><div class="layout' + (P.wide ? " full" : "") + '">' +
      '<main class="article" id="main">' +
        pageHero() +
        disclosureBlock() +
        '<div id="notices-mount"></div>' +
        (P.answer ? '<div class="answer-box"><span class="lbl">Short answer</span><p>' + P.answer + "</p></div>" : "") +
        '<div id="toc-mount"></div>' +
        (P.table ? comparison(P.table) : "") +
        '<div class="prose" id="prose">' + bodyHtml + "</div>" +
        edgeBlock() +
        '<div id="metax-mount"></div>' +
        (P.leadForm ? leadFormHTML() : "") +
        ctaBlock() +
        faqBlock() +
        (P.methodology ? '<section class="callout"><span class="h">How we produced this page</span>' + P.methodology + "</section>" : "") +
        sourcesBlock() +
        relatedBlock() +
      "</main>" + (P.wide ? "" : sidebar()) + "</div></div>";
  }

  function leadFormHTML() {
    var f = P.leadForm;
    return '<section class="tool" id="lead-form-section"><div class="tool-head"><h2>' + esc(f.title) + "</h2><p>" + esc(f.sub) + "</p></div>" +
      '<div class="tool-body"><form id="lead-form">' +
        '<div class="form-row"><label for="lf-name">Name</label><input type="text" id="lf-name" name="name" required></div>' +
        '<div class="form-row"><label for="lf-email">Work email</label><input type="email" id="lf-email" name="email" required></div>' +
        '<div class="form-row"><label for="lf-company">Company / household</label><input type="text" id="lf-company" name="company"></div>' +
        '<div class="form-row"><label for="lf-head">' + esc(f.numberLabel || "People covered") + '</label><input type="number" id="lf-head" name="headcount" min="0" value="1"></div>' +
        '<div class="form-row"><label for="lf-notes">What are you trying to solve?</label><textarea id="lf-notes" name="notes" rows="3"></textarea></div>' +
        '<div class="form-row"><label class="checkbox"><input type="checkbox" name="consent" required> ' + esc(f.consent) + "</label></div>" +
        '<button class="btn" type="submit">' + esc(f.cta) + '</button><p class="form-msg" role="status"></p>' +
      "</form>" +
      '<div class="tool-results"><h3 style="margin-top:0">What happens next</h3><ol style="font-size:.9rem">' +
        f.steps.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") +
      '</ol><p style="font-size:.8rem;color:var(--ink-soft)">' + esc(f.privacy) + "</p></div></div></section>";
  }

  /* ---------------- interactive widgets ---------------- */
  function buildTOC() {
    if (P.toc === false || pageId === "index") { return; }
    var mount = document.getElementById("toc-mount");
    var hs = document.querySelectorAll("#prose h2");
    if (!mount || hs.length < 3) { return; }
    var items = "";
    Array.prototype.forEach.call(hs, function (h) {
      if (!h.id) { h.id = slugify(h.textContent); }
      items += '<li><a href="#' + h.id + '">' + esc(h.textContent) + "</a></li>";
    });
    mount.innerHTML = '<nav class="toc" aria-label="On this page"><h2>On this page</h2><ol>' + items + "</ol></nav>";
  }

  function buildCalculator() {
    var host = document.getElementById("calculator");
    if (!host || !P.calculator) { return; }
    var c = P.calculator;
    var fields = c.fields.map(function (f) {
      var input;
      if (f.type === "select") {
        input = '<select id="c-' + f.id + '" data-fid="' + f.id + '">' + f.options.map(function (o) {
          return '<option value="' + esc(o.value) + '"' + (o.value === f.value ? " selected" : "") + ">" + esc(o.label) + "</option>";
        }).join("") + "</select>";
      } else {
        input = '<input type="number" id="c-' + f.id + '" data-fid="' + f.id + '" value="' + f.value + '" min="' + (f.min != null ? f.min : 0) +
          '" max="' + (f.max != null ? f.max : 1000000000) + '" step="' + (f.step || 1) + '">';
      }
      return '<div class="form-row"><label for="c-' + f.id + '">' + esc(f.label) +
        (f.hint ? '<span class="hint">' + esc(f.hint) + "</span>" : "") + "</label>" + input + "</div>";
    }).join("");
    host.innerHTML = '<div class="tool"><div class="tool-head"><h2>' + esc(c.title) + "</h2><p>" + esc(c.sub) + "</p></div>" +
      '<div class="tool-body"><form id="calc-form" novalidate>' + fields +
        '<p style="font-size:.8rem;color:var(--ink-soft)">' + esc(c.disclaimer) + "</p></form>" +
      '<div class="tool-results" id="calc-results" aria-live="polite"></div></div>' +
      '<div style="padding:0 22px 22px"><form id="calc-save" style="display:flex;gap:10px;flex-wrap:wrap;align-items:flex-end">' +
        '<div style="flex:1;min-width:220px"><label for="calc-email">Email my results and follow-up checklist</label>' +
        '<input type="email" id="calc-email" placeholder="you@company.com" required></div>' +
        '<button class="btn alt" type="submit">Save my numbers</button><p class="form-msg" role="status" style="width:100%"></p></form></div></div>';

    function run() {
      var v = {};
      c.fields.forEach(function (f) {
        var node = document.getElementById("c-" + f.id);
        v[f.id] = f.type === "select" ? node.value : parseFloat(node.value || 0);
      });
      var out = c.compute(v);
      document.getElementById("calc-results").innerHTML = out.map(function (r) {
        return '<div class="result-item"><div class="rl">' + esc(r.label) + '</div><div class="rv">' + r.value + "</div>" +
          (r.hint ? '<div class="rh">' + r.hint + "</div>" : "") + "</div>";
      }).join("");
      host.setAttribute("data-summary", out[0].label + ": " + String(out[0].value).replace(/<[^>]+>/g, ""));
      host.setAttribute("data-inputs", JSON.stringify(v));
    }
    host.addEventListener("input", run);
    host.addEventListener("change", run);
    run();

    document.getElementById("calc-save").addEventListener("submit", function (e) {
      e.preventDefault();
      var msg = this.querySelector(".form-msg");
      var email = document.getElementById("calc-email").value;
      post("tool_sessions", {
        site: D.slug, tool: pageId, inputs: host.getAttribute("data-inputs"),
        result_summary: host.getAttribute("data-summary"), email: email
      }).then(function () {
        msg.className = "form-msg ok";
        msg.textContent = "Saved. We emailed nothing yet — this demo stores your scenario so you can revisit it.";
      }).catch(function () { msg.className = "form-msg err"; msg.textContent = "Could not save right now. Please try again."; });
      post("subscribers", { email: email, site: D.slug, source_page: pageId, lead_magnet: D.newsletter.magnet, consent: true, status: "pending" });
    });
  }

  function buildChecklist() {
    var host = document.getElementById("checklist");
    if (!host || !P.checklist) { return; }
    var key = "mdn:" + D.slug + ":" + pageId;
    var saved = {};
    try { saved = JSON.parse(localStorage.getItem(key) || "{}"); } catch (e) { saved = {}; }
    var total = 0;
    var groups = P.checklist.groups.map(function (g, gi) {
      var items = g.items.map(function (item, ii) {
        var id = "chk-" + gi + "-" + ii; total++;
        return '<label for="' + id + '"><input type="checkbox" id="' + id + '" data-k="' + id + '"' + (saved[id] ? " checked" : "") + "> <span>" + item + "</span></label>";
      }).join("");
      return '<section class="checklist-group"><h3>' + esc(g.title) + "</h3>" + (g.note ? '<p style="font-size:.88rem;color:var(--ink-soft)">' + g.note + "</p>" : "") + items + "</section>";
    }).join("");
    host.innerHTML = '<div id="chk-progress"><p style="margin-bottom:4px;font-size:.88rem"><strong id="chk-count">0</strong> of ' + total +
      ' items complete — progress saves in this browser.</p><div class="progress-bar"><i id="chk-bar"></i></div></div>' + groups +
      '<p><button class="btn ghost" id="chk-print" type="button">Print / save as PDF</button> <button class="btn ghost" id="chk-reset" type="button">Reset</button></p>';

    function refresh() {
      var boxes = host.querySelectorAll('input[type="checkbox"]');
      var done = 0; var state = {};
      Array.prototype.forEach.call(boxes, function (b) { if (b.checked) { done++; state[b.dataset.k] = 1; } });
      document.getElementById("chk-count").textContent = done;
      document.getElementById("chk-bar").style.width = (done / total * 100) + "%";
      try { localStorage.setItem(key, JSON.stringify(state)); } catch (e) { /* private mode */ }
    }
    host.addEventListener("change", refresh);
    document.getElementById("chk-print").addEventListener("click", function () { window.print(); });
    document.getElementById("chk-reset").addEventListener("click", function () {
      Array.prototype.forEach.call(host.querySelectorAll('input[type="checkbox"]'), function (b) { b.checked = false; });
      refresh();
    });
    refresh();
  }

  function post(table, data) {
    return fetch(ROOT + "tables/" + table, {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data)
    }).then(function (r) { if (!r.ok) { throw new Error("bad status"); } return r.json(); });
  }

  function wireForms() {
    Array.prototype.forEach.call(document.querySelectorAll(".nl-form"), function (f) {
      f.addEventListener("submit", function (e) {
        e.preventDefault();
        var msg = f.querySelector(".form-msg");
        msg.className = "form-msg"; msg.textContent = "Saving…";
        post("subscribers", {
          email: f.querySelector('input[type="email"]').value, site: D.slug, source_page: pageId,
          lead_magnet: D.newsletter.magnet, consent: true, status: "pending"
        }).then(function () {
          msg.className = "form-msg ok";
          msg.textContent = "You're on the list. Your first issue includes: " + D.newsletter.magnet + ".";
          f.reset();
        }).catch(function () { msg.className = "form-msg err"; msg.textContent = "Signup failed — please retry."; });
      });
    });
    var lf = document.getElementById("lead-form");
    if (lf) {
      lf.addEventListener("submit", function (e) {
        e.preventDefault();
        var msg = lf.querySelector(".form-msg");
        msg.className = "form-msg"; msg.textContent = "Sending…";
        post("leads", {
          name: lf.name.value, email: lf.email.value, company: lf.company.value, site: D.slug, page: pageId,
          offer: P.leadForm.offer, headcount: parseInt(lf.headcount.value || 0, 10), notes: lf.notes.value, consent: true
        }).then(function () {
          msg.className = "form-msg ok"; msg.textContent = "Request received. Nothing is shared with a partner until you confirm by email.";
          lf.reset();
        }).catch(function () { msg.className = "form-msg err"; msg.textContent = "Could not submit — please retry."; });
      });
    }
  }

  function wireSearch() {
    var input = document.getElementById("site-search");
    if (!input) { return; }
    var out = document.getElementById("site-search-results");
    var index = Object.keys(D.pages).filter(function (k) { return k !== "index"; }).map(function (k) {
      return { id: k, t: D.pages[k].title, d: D.pages[k].dek || "" };
    });
    input.addEventListener("input", function () {
      var q = input.value.toLowerCase().trim();
      if (q.length < 2) { out.innerHTML = ""; return; }
      var hits = index.filter(function (i) { return (i.t + " " + i.d).toLowerCase().indexOf(q) > -1; }).slice(0, 8);
      out.innerHTML = hits.length ? hits.map(function (h) {
        return '<li><a href="' + href(h.id) + '">' + esc(h.t) + "</a></li>";
      }).join("") : "<li>No match on this site.</li>";
    });
  }

  function wireNav() {
    var t = document.getElementById("nav-toggle");
    var n = document.getElementById("site-nav");
    if (t && n) {
      t.addEventListener("click", function () {
        var open = n.classList.toggle("open");
        t.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }
    wireMega();
  }

  function wireMega() {
    var btn = document.getElementById("mega-toggle");
    var panel = document.getElementById("mega-panel");
    var head = document.getElementById("site-header");
    if (!btn || !panel) { return; }
    var timer = null;
    function desktop() { return window.matchMedia("(min-width: 641px)").matches; }
    /* The panel is absolutely positioned under a sticky header, so it cannot rely on
       page scroll. Cap its height to the space actually left on screen and let it
       scroll internally — otherwise the lower columns are rendered but unreachable. */
    function fit() {
      if (!desktop()) { panel.style.maxHeight = ""; return; }
      var top = panel.getBoundingClientRect().top;
      panel.style.maxHeight = Math.max(220, window.innerHeight - top - 12) + "px";
    }
    function open() { panel.classList.add("open"); btn.setAttribute("aria-expanded", "true"); fit(); }
    function close() { panel.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); }
    function toggle() { panel.classList.contains("open") ? close() : open(); }
    window.addEventListener("resize", function () { if (panel.classList.contains("open")) { fit(); } });
    window.addEventListener("scroll", function () { if (panel.classList.contains("open")) { fit(); } }, { passive: true });

    btn.addEventListener("click", function (e) { e.stopPropagation(); toggle(); });
    btn.addEventListener("mouseenter", function () { if (desktop()) { clearTimeout(timer); open(); } });
    head.addEventListener("mouseleave", function () {
      if (desktop()) { timer = setTimeout(close, 220); }
    });
    panel.addEventListener("mouseenter", function () { clearTimeout(timer); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && panel.classList.contains("open")) { close(); btn.focus(); }
    });
    document.addEventListener("click", function (e) {
      if (panel.classList.contains("open") && !panel.contains(e.target) && e.target !== btn) { close(); }
    });
    /* Close after keyboard tabbing out of the panel entirely. */
    panel.addEventListener("focusout", function (e) {
      if (desktop() && !panel.contains(e.relatedTarget) && e.relatedTarget !== btn) { close(); }
    });
  }

  /* ---------------- structured data ---------------- */
  function jsonLD() {
    var base = location.href.split("#")[0];
    var graph = [];
    var org = {
      "@type": "Organization", "@id": base + "#publisher", name: siteMeta.brand,
      description: D.description, publishingPrinciples: base.replace(/[^/]*$/, "") + "editorial-policy.html",
      parentOrganization: { "@type": "Organization", name: NET.publisher }
    };
    graph.push(org);
    if (pageId === "index") {
      graph.push({ "@type": "WebSite", url: base, name: siteMeta.brand, description: D.description, publisher: { "@id": base + "#publisher" } });
    } else {
      graph.push({
        "@type": P.schema || "Article",
        headline: P.title,
        description: (document.querySelector('meta[name="description"]') || {}).content || "",
        datePublished: P.published || "2026-01-15",
        dateModified: P.modified || "2026-07-20",
        author: { "@type": "Person", name: P.author || D.defaultAuthor },
        reviewedBy: { "@type": "Person", name: P.reviewer || D.defaultReviewer },
        publisher: { "@id": base + "#publisher" },
        mainEntityOfPage: base
      });
      graph.push({
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: siteMeta.brand, item: base.replace(/[^/]*$/, "") + "index.html" },
          { "@type": "ListItem", position: 2, name: P.title, item: base }
        ]
      });
      if (P.faq && P.faq.length) {
        graph.push({
          "@type": "FAQPage",
          mainEntity: P.faq.map(function (f) {
            return { "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a.replace(/<[^>]+>/g, "") } };
          })
        });
      }
    }
    var s = document.createElement("script");
    s.type = "application/ld+json";
    s.textContent = JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
    document.head.appendChild(s);
  }

  /* ---------------- title icons ----------------
     icons.js is loaded asynchronously (same pattern as the ad loader) so the
     existing page shells need no edit. Once it arrives we walk the DOM that the
     renderer already produced and prepend a decorative glyph to each title. */
  function loadIcons() {
    if (window.MDN_ICONS) { paintIcons(); return; }
    var s = document.createElement("script");
    s.src = ROOT + "assets/js/icons.js";
    s.onload = paintIcons;
    document.head.appendChild(s);
  }

  function paintIcons() {
    var I = window.MDN_ICONS;
    if (!I) { return; }

    function decorate(nodes, kind, fallback) {
      Array.prototype.forEach.call(nodes, function (n) {
        if (!n || n.getAttribute("data-ico") === "1") { return; }
        if (n.querySelector(".ico, .h-ico")) { return; }
        n.setAttribute("data-ico", "1");
        var txt = n.textContent || "";
        n.insertAdjacentHTML("afterbegin", kind === "chip" ? I.chip(txt, fallback) : I.inline(txt, fallback));
      });
    }

    /* Body section headings get the tinted chip variant. */
    decorate(document.querySelectorAll("#prose h2"), "chip");
    decorate(document.querySelectorAll(".section-head h2, .faq > h2, .sources > h2, #related > h2, .tool-head h2"), "chip");
    /* Card, widget and callout titles get the compact inline variant. */
    decorate(document.querySelectorAll(".card h3"), "inline", "doc");
    decorate(document.querySelectorAll(".widget h3"), "inline", "list");
    decorate(document.querySelectorAll(".callout .h"), "inline", "info");
    decorate(document.querySelectorAll(".toc h2"), "inline", "list");
    decorate(document.querySelectorAll(".mega-col h4"), "inline", "list");

    /* Swap the auto-generated initials in placeholder badges for a real glyph. */
    Array.prototype.forEach.call(document.querySelectorAll('.ph[data-auto="1"] .ph-glyph'), function (g) {
      if (g.querySelector(".ico")) { return; }
      var box = g.closest ? g.closest(".ph") : null;
      var label = box ? (box.getAttribute("aria-label") || "") : "";
      g.innerHTML = I.inline(label, "doc");
    });
  }

  /* MetaX layer: the estate's own defect notices and the MetaX.Academy course
     series for this brand. Loaded centrally, exactly like icons and ads, so
     none of the 245 page shells needs an extra script tag. Both blocks mount
     into placeholders, so a slow or missing file leaves an empty div rather
     than a broken page. */
  function loadMetaX() {
    if (window.METAX) { paintMetaX(); return; }
    var s = document.createElement("script");
    s.src = ROOT + "assets/data/metax-series.js";
    s.onload = paintMetaX;
    document.head.appendChild(s);
  }

  function paintMetaX() {
    var n = document.getElementById("notices-mount");
    if (n && !n.getAttribute("data-filled")) {
      var nh = noticeBlock();
      if (nh) { n.innerHTML = nh; n.setAttribute("data-filled", "1"); }
      else if (n.parentNode && n.parentNode.className === "wrap") {
        /* Homepage wrapper with nothing to show: remove the empty section. */
        var sec = n.parentNode.parentNode;
        if (sec && sec.parentNode) { sec.parentNode.removeChild(sec); }
      }
    }
    var m = document.getElementById("metax-mount");
    if (m && !m.getAttribute("data-filled")) {
      var mh = metaxBlock();
      if (mh) { m.innerHTML = mh; m.setAttribute("data-filled", "1"); }
      else if (m.parentNode && m.parentNode.className === "wrap") {
        var sec2 = m.parentNode.parentNode;
        if (sec2 && sec2.parentNode) { sec2.parentNode.removeChild(sec2); }
      }
    }
  }

  /* Motion layer: scroll reveal, reading progress, sticky-header state, TOC
     spy. Async and purely additive, so the page is complete without it. */
  function loadMotion() {
    if (window.MDN_MOTION_READY) { return; }
    var s = document.createElement("script");
    s.src = ROOT + "assets/js/motion.js";
    s.defer = true;
    document.head.appendChild(s);
  }

  /* Responsive AdSense: loaded centrally so no page template carries ad code. */
  function loadAds() {
    function go() { if (window.MDN_ADS) { window.MDN_ADS.init(); } }
    if (window.MDN_ADS) { go(); return; }
    var s = document.createElement("script");
    s.src = ROOT + "assets/js/ads.js";
    s.onload = go;
    document.head.appendChild(s);
  }

  /* ---------------- boot ----------------
     Crawler-visible static content (A1 pre-render): a shell may carry a
     <div id="static-prerender"> holding the page's headline, summary and body
     copy as real HTML. Any client that does not execute JavaScript — including
     a crawler that skips rendering — sees that content directly. When this
     script does run we remove it first, so the interactive version replaces it
     and nothing is ever duplicated for a human reader. */
  var pre = document.getElementById("static-prerender");
  if (pre && pre.parentNode) { pre.parentNode.removeChild(pre); }

  var shell = '<a class="skip-link" href="#main">Skip to content</a>' + header() +
    (pageId === "index" ? '<main id="main">' + homeHTML() + "</main>" : articleHTML()) + footer();
  body.insertAdjacentHTML("afterbegin", shell);
  loadAds();
  buildTOC();
  buildCalculator();
  buildChecklist();
  wireForms();
  wireSearch();
  wireNav();
  jsonLD();
  loadIcons();
  loadMetaX();
  loadMotion();
})();
