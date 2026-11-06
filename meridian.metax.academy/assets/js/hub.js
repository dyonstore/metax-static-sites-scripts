/* Network hub chrome: shared header/footer for the root-level pages. */
(function () {
  "use strict";
  var NET = window.NETWORK;
  var current = document.body.getAttribute("data-page") || "index";
  var links = [
    { id: "index", label: "The network", href: "index.html" },
    { id: "about", label: "About us", href: "about.html" },
    { id: "standards", label: "Network standards", href: "standards.html" },
    { id: "notices", label: "Open defects", href: "notices.html" },
    { id: "advertise", label: "Advertise", href: "advertise.html" },
    { id: "sitemap", label: "Sitemap", href: "sitemap.html" },
    { id: "contact", label: "Contact", href: "contact.html" }
  ];

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  /* Ratio-boxed image block with a zero-byte CSS fallback, matching the
     per-site renderer in assets/js/render.js. When `src` (a path under img/)
     resolves, a real <img> is layered in; if the file is absent the onerror
     handler restores the decorative gradient placeholder automatically. */
  function ph(label, ratio, glyph, src) {
    var out = '<div class="ph ' + (ratio || "r11") + '"' + (glyph ? "" : ' data-auto="1"');
    if (src) {
      out += ' data-img="1">' +
        '<img class="ph-img" src="img/' + src + '" alt="' + esc(label) + '" loading="lazy" decoding="async"' +
        " onerror=\"this.parentNode.removeAttribute('data-img');this.remove();\">";
    } else {
      out += ' role="img" aria-label="' + esc(label) + '">';
    }
    return out +
      '<span class="ph-grid" aria-hidden="true"></span>' +
      '<span class="ph-inner"><span class="ph-glyph" aria-hidden="true">' + esc(glyph || "") + "</span></span></div>";
  }

  /* Mega menu: all ten publications in four columns, plus company links. */
  function megaPanel() {
    var chunk = 3;
    var cols = "";
    for (var i = 0; i < NET.sites.length; i += chunk) {
      var group = NET.sites.slice(i, i + chunk);
      cols += '<div class="mega-col"><h4>' + (i === 0 ? "Business risk &amp; legal" : i === 3 ? "Money &amp; security" : "Personal finance &amp; benefits") + "</h4><ul>" +
        group.map(function (s) {
          return '<li><a href="sites/' + s.slug + '/index.html"><span class="mega-dot" style="background:' + s.color + '"></span>' +
            esc(s.brand) + " — " + esc(s.topic) + "</a></li>";
        }).join("") + "</ul></div>";
    }
    cols += '<div class="mega-col"><h4>The publisher</h4><ul>' +
      links.slice(1).map(function (l) { return '<li><a href="' + l.href + '">' + l.label + "</a></li>"; }).join("") +
      '<li><a href="privacy.html">Privacy</a></li><li><a href="terms.html">Terms</a></li></ul></div>';
    return '<div class="mega-panel" id="mega-panel" role="region" aria-label="All publications"><div class="mega-inner">' +
      '<p class="mega-lead">Ten independent publications, each with its own editorial team, expert reviewers and review methodology. ' +
      "Titles link to each other only where the context genuinely calls for it.</p>" +
      '<div class="mega-grid">' + cols + "</div></div></div>";
  }

  var header = '<a class="skip-link" href="#main">Skip to content</a>' +
    '<header class="site-header" id="site-header"><div class="wrap header-main">' +
    '<a class="brand" href="index.html"><span class="brand-mark" style="background:#0f1417">M</span>' +
    '<span class="brand-name">Meridian<span class="brand-tag">Decision Network</span></span></a>' +
    '<button class="nav-toggle" id="nav-toggle" aria-expanded="false" aria-controls="site-nav">Menu</button>' +
    '<nav class="site-nav" id="site-nav" aria-label="Main"><ul>' +
    '<li><button class="mega-toggle" id="mega-toggle" type="button" aria-expanded="false" aria-controls="mega-panel">' +
    'All publications<span class="caret" aria-hidden="true"></span></button></li>' +
    links.map(function (l) {
      return '<li><a href="' + l.href + '"' + (l.id === current ? ' aria-current="page"' : "") + ">" + l.label + "</a></li>";
    }).join("") + "</ul></nav></div>" + megaPanel() + "</header>";

  var footer = '<footer class="site-footer"><div class="wrap"><div class="footer-grid">' +
    "<div><h4>Meridian Decision Media</h4><p>Ten specialist publications covering the expensive decisions people and small companies " +
    "only make a few times in their lives. Independent, expert-reviewed, and open about how we are paid.</p></div>" +
    "<div><h4>Network</h4><ul>" + NET.sites.slice(0, 5).map(function (s) {
      return '<li><a href="sites/' + s.slug + '/index.html">' + s.brand + "</a></li>";
    }).join("") + "</ul></div>" +
    "<div><h4>&nbsp;</h4><ul>" + NET.sites.slice(5).map(function (s) {
      return '<li><a href="sites/' + s.slug + '/index.html">' + s.brand + "</a></li>";
    }).join("") + "</ul></div>" +
    "<div><h4>Company</h4><ul>" + links.slice(1).map(function (l) {
      return '<li><a href="' + l.href + '">' + l.label + "</a></li>";
    }).join("") + '<li><a href="privacy.html">Privacy</a></li><li><a href="terms.html">Terms</a></li></ul></div>' +
    '</div><p class="footer-legal">© ' + new Date().getFullYear() + " Meridian Decision Media. Nothing on these sites is financial, legal, tax, " +
    "medical or insurance advice. Figures in worked examples are illustrative unless a source is cited; always verify " +
    "current rates and rules with the provider or authority before acting.</p></div></footer>";

  var h = document.getElementById("hub-header");
  if (h) { h.outerHTML = header; }
  var f = document.getElementById("hub-footer");
  if (f) { f.outerHTML = footer; }

  var grid = document.getElementById("network-grid");
  if (grid) {
    grid.innerHTML = NET.sites.map(function (s, i) {
      return '<article class="site-card rise' + (i % 4 ? " d" + (i % 4) : "") + '" style="--brand:' + s.color + '">' +
        ph(s.topic, "r11", null, "hub/" + s.slug + ".jpg") +
        "<div><h3><a href='sites/" + s.slug + "/index.html'>" + esc(s.brand) + "</a></h3>" +
        '<p class="meta">' + esc(s.topic) + "</p><p>" + esc(s.blurb) + "</p>" +
        "<p><a href='sites/" + s.slug + "/index.html'>Visit " + esc(s.brand) + " →</a></p></div></article>";
    }).join("");
  }

  /* Animated hero backdrop + staggered entrance on the hub pages. */
  (function heroFx() {
    var hero = document.querySelector(".net-hero");
    if (!hero) { return; }
    hero.id = hero.id || "hero-section";
    hero.style.position = "relative";
    hero.style.overflow = "hidden";
    var orbs = document.createElement("div");
    orbs.className = "hero-orbs";
    orbs.setAttribute("aria-hidden", "true");
    orbs.innerHTML = "<i></i><i></i><i></i>";
    hero.insertBefore(orbs, hero.firstChild);
    var w = hero.querySelector(".wrap");
    if (w) {
      w.style.position = "relative";
      w.style.zIndex = "2";
      var kids = w.children; var d = 0;
      for (var i = 0; i < kids.length; i++) {
        kids[i].classList.add("rise");
        if (d) { kids[i].classList.add("d" + Math.min(d, 4)); }
        d++;
      }
    }
  })();

  var t = document.getElementById("nav-toggle");
  if (t) {
    t.addEventListener("click", function () {
      var n = document.getElementById("site-nav");
      var open = n.classList.toggle("open");
      t.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  (function wireMega() {
    var btn = document.getElementById("mega-toggle");
    var panel = document.getElementById("mega-panel");
    var head = document.getElementById("site-header");
    if (!btn || !panel) { return; }
    var timer = null;
    function desktop() { return window.matchMedia("(min-width: 641px)").matches; }
    function fit() {
      if (!desktop()) { panel.style.maxHeight = ""; return; }
      var top = panel.getBoundingClientRect().top;
      panel.style.maxHeight = Math.max(220, window.innerHeight - top - 12) + "px";
    }
    function open() { panel.classList.add("open"); btn.setAttribute("aria-expanded", "true"); fit(); }
    function close() { panel.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); }
    window.addEventListener("resize", function () { if (panel.classList.contains("open")) { fit(); } });
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      panel.classList.contains("open") ? close() : open();
    });
    btn.addEventListener("mouseenter", function () { if (desktop()) { clearTimeout(timer); open(); } });
    head.addEventListener("mouseleave", function () { if (desktop()) { timer = setTimeout(close, 220); } });
    panel.addEventListener("mouseenter", function () { clearTimeout(timer); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && panel.classList.contains("open")) { close(); btn.focus(); }
    });
    document.addEventListener("click", function (e) {
      if (panel.classList.contains("open") && !panel.contains(e.target) && e.target !== btn) { close(); }
    });
  })();

  /* Title icons: icons.js is fetched asynchronously, then a single DOM pass
     prepends a decorative glyph to the headings the hub just rendered. */
  (function loadIcons() {
    function paint() {
      var I = window.MDN_ICONS;
      if (!I) { return; }
      function decorate(sel, kind, fallback) {
        Array.prototype.forEach.call(document.querySelectorAll(sel), function (n) {
          if (n.getAttribute("data-ico") === "1" || n.querySelector(".ico, .h-ico")) { return; }
          n.setAttribute("data-ico", "1");
          n.insertAdjacentHTML("afterbegin", kind === "chip" ? I.chip(n.textContent, fallback) : I.inline(n.textContent, fallback));
        });
      }
      decorate(".section-head h2, main h2, .prose h2", "chip");
      decorate(".site-card h3", "inline", "doc");
      decorate(".card h3, .widget h3", "inline", "doc");
      decorate(".mega-col h4", "inline", "list");
      decorate(".callout .h", "inline", "info");
      Array.prototype.forEach.call(document.querySelectorAll('.ph[data-auto="1"] .ph-glyph'), function (g) {
        if (g.querySelector(".ico")) { return; }
        var box = g.closest ? g.closest(".ph") : null;
        g.innerHTML = I.inline(box ? box.getAttribute("aria-label") || "" : "", "doc");
      });
    }
    if (window.MDN_ICONS) { paint(); return; }
    var s = document.createElement("script");
    s.src = "assets/js/icons.js";
    s.onload = paint;
    document.head.appendChild(s);
  })();

  /* Motion layer (scroll reveal, sticky header state) on the hub pages too. */
  (function () {
    var s = document.createElement("script");
    s.src = "assets/js/motion.js";
    s.defer = true;
    document.head.appendChild(s);
  })();

  /* Responsive AdSense on the network pages too. */
  (function () {
    var s = document.createElement("script");
    s.src = "assets/js/ads.js";
    s.onload = function () { if (window.MDN_ADS) { window.MDN_ADS.init(); } };
    document.head.appendChild(s);
  })();

  var ld = document.createElement("script");
  ld.type = "application/ld+json";
  ld.textContent = JSON.stringify({
    "@context": "https://schema.org", "@type": "Organization", name: NET.publisher,
    url: location.origin + location.pathname.replace(/[^/]*$/, ""),
    description: "Independent publisher of ten specialist decision-support publications.",
    subOrganization: NET.sites.map(function (s) { return { "@type": "Organization", name: s.brand, description: s.topic }; })
  });
  document.head.appendChild(ld);
})();
