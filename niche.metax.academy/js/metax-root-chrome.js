/* =========================================================================
   METAX ROOT CHROME — shared header/footer for the ROOT (network-level)
   pages only: index.html, about.html, contact.html, privacy.html,
   articles.html. Renders into <div id="mx-header"></div> / <div id="mx-footer">
   placeholders so the markup lives in one place, same pattern as the real
   metax.academy site's js/components.js.

   Includes the full mega-menu: all 40 topics grouped into 5 categories,
   plus a featured link to the Root Category (Category Zero). Requires
   js/niches-data.js to be loaded BEFORE this file on every root page.
   ========================================================================= */
(function () {
  "use strict";

  var NAV_LINKS = [
    { href: "articles.html", label: "Articles" },
    { href: "about.html", label: "About MetaX" },
    { href: "contact.html", label: "Contact" }
  ];

  var MEGA_CATEGORIES = [
    { name: "Legal Services", slugs: ["personal-injury-lawyer","mesothelioma-claim","medical-malpractice-lawyer","bankruptcy-attorney","dui-defense-attorney","divorce-lawyer","timeshare-exit"] },
    { name: "Insurance & Finance", slugs: ["auto-insurance-quotes","life-insurance-quotes","debt-consolidation","mortgage-refinance","medicare-supplement-plans","tax-relief-services","identity-theft-protection","structured-settlement-buyout","student-loan-refinance","business-loans","medicare-advantage-plans","personal-loans","pet-insurance","credit-repair","ltc-insurance"] },
    { name: "Home Services", slugs: ["home-security-systems","solar-panel-quotes","roofing-storm-damage","hvac-repair-replacement","home-warranty","water-damage-mold","ev-home-charger"] },
    { name: "Health & Wellness", slugs: ["addiction-rehab-centers","weight-loss-programs","dental-implants","online-therapy","hearing-aids","lasik-vision-correction","hair-restoration","assisted-living"] },
    { name: "Education & Technology", slugs: ["best-vpn-software","online-college-degrees","ai-productivity-saas"] }
  ];

  function megaColumnHTML(cat) {
    var links = cat.slugs.map(function (slug) {
      var n = window.NICHES && window.NICHES[slug];
      if (!n) return "";
      return '<a href="niches/' + slug + '/index.html"><i class="fa-solid ' + n.icon + '"></i>' + n.vertical + '</a>';
    }).join("");
    return '<div class="mx-mega-col"><h5>' + cat.name + '</h5>' + links + '</div>';
  }

  function headerHTML(activePath) {
    var links = NAV_LINKS.map(function (l) {
      var isActive = activePath && l.href.indexOf(activePath) === 0;
      return '<a href="' + l.href + '"' + (isActive ? ' class="active"' : "") + '>' + l.label + "</a>";
    }).join("");

    var megaGrid = MEGA_CATEGORIES.map(megaColumnHTML).join("");

    var mobileCategories = MEGA_CATEGORIES.map(function (cat) {
      var links = cat.slugs.map(function (slug) {
        var n = window.NICHES && window.NICHES[slug];
        if (!n) return "";
        return '<a href="niches/' + slug + '/index.html"><i class="fa-solid ' + n.icon + '"></i>' + n.vertical + '</a>';
      }).join("");
      return '<div class="mx-mm-group"><h5>' + cat.name + '</h5>' + links + '</div>';
    }).join("");

    var mobileLinks =
      '<a href="root-category/index.html" class="mm-root"><i class="fa-solid fa-atom"></i> Category Zero — The Root Category</a>' +
      '<div class="mx-mm-group"><h5>Meta Education Directory</h5><a href="index.html#directory">All 40 Topics</a></div>' +
      mobileCategories +
      NAV_LINKS.map(function (l) { return '<a href="' + l.href + '">' + l.label + "</a>"; }).join("");

    return (
      '<header class="mx-nav">' +
        '<div class="mx-nav-inner">' +
          '<a href="index.html" class="mx-brand"><span class="mx-mark">✦</span><span class="mx-name"><b>MetaX</b>.Academy<span class="mx-ver">META EDUCATION</span></span></a>' +
          '<nav class="mx-nav-links" aria-label="Primary">' +
            '<div class="mx-mega-wrap">' +
              '<button type="button" class="mx-mega-trigger" data-mega-trigger aria-expanded="false" aria-haspopup="true">Meta Education Directory <i class="fa-solid fa-chevron-down chev"></i></button>' +
              '<div class="mx-mega-panel" data-mega-panel role="menu">' +
                '<div class="mx-mega-grid">' + megaGrid + '</div>' +
                '<div class="mx-mega-root">' +
                  '<a href="root-category/index.html" class="mx-mega-root-link"><span class="mx-mega-root-badge">✦ Root Category</span><span class="mx-mega-root-name">Category Zero — How To Build A Niche That Doesn\'t Exist Yet</span></a>' +
                  '<a href="index.html#directory" class="mx-btn mx-btn-ghost" style="padding:9px 18px;font-size:.82rem;">Browse All 40 Topics</a>' +
                '</div>' +
              '</div>' +
            '</div>' +
            links +
          '</nav>' +
          '<a href="index.html#directory" class="mx-nav-cta">Explore Topics</a>' +
          '<button class="mx-nav-toggle" data-nav-toggle aria-label="Toggle menu" aria-expanded="false">&#9776;</button>' +
        "</div>" +
        '<div class="mx-mobile-menu" data-nav-menu>' + mobileLinks + "</div>" +
      "</header>"
    );
  }

  function footerHTML() {
    return (
      '<footer class="mx-root-footer"><div class="mx-wrap">' +
        '<div class="mx-root-footer-grid">' +
          '<div class="mx-rf-col"><a href="index.html" class="mx-brand"><span class="mx-mark">✦</span><span class="mx-name"><b>MetaX</b>.Academy</span></a>' +
            "<p>MetaX.Academy Meta Education — a directory of topic-specific communities, course series, and book series, each built with its own founding expert members. Curated by Maher.</p></div>" +
          '<div class="mx-rf-col"><h5>Directory</h5><a href="index.html#directory">All 40 Topics</a><a href="root-category/index.html">Category Zero (Root Category)</a><a href="articles.html">Articles</a></div>' +
          '<div class="mx-rf-col"><h5>MetaX.Academy</h5><a href="https://metax.academy" target="_blank" rel="noopener">metax.academy ↗</a><a href="about.html">About</a><a href="contact.html">Contact</a></div>' +
          '<div class="mx-rf-col"><h5>Legal</h5><a href="privacy.html">Privacy Policy</a><a href="about.html#terms">Terms of Use</a></div>' +
        "</div>" +
        '<div class="mx-rf-bottom"><span>© <span data-year></span> MetaX.Academy · Curated by Maher</span><span class="glyphs">✦ ⬡ ◉</span></div>' +
      "</div></footer>"
    );
  }

  function bindMegaMenu() {
    var trigger = document.querySelector("[data-mega-trigger]");
    var panel = document.querySelector("[data-mega-panel]");
    if (!trigger || !panel) return;
    function open() { panel.classList.add("open"); trigger.classList.add("active"); trigger.setAttribute("aria-expanded", "true"); }
    function close() { panel.classList.remove("open"); trigger.classList.remove("active"); trigger.setAttribute("aria-expanded", "false"); }
    trigger.addEventListener("click", function (e) {
      e.stopPropagation();
      if (panel.classList.contains("open")) close(); else open();
    });
    document.addEventListener("click", function (e) {
      if (!panel.contains(e.target) && e.target !== trigger) close();
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
  }

  function render() {
    var h = document.getElementById("mx-header");
    if (h) h.outerHTML = headerHTML(h.getAttribute("data-active") || "");
    var f = document.getElementById("mx-footer");
    if (f) f.outerHTML = footerHTML();
    document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
    bindMegaMenu();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", render);
  else render();

  window.MXRootChrome = { render: render };
})();
