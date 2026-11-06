/* =========================================================================
   MetaX.Academy — Articles Hub (Resource Center) renderer
   Used ONLY by the root articles.html page. Renders every article across
   all 40 topic academies into the mx-root visual system. Niche-scoped
   article listings (/niches/{slug}/articles.html) are a separate,
   bespoke-per-topic concern and are NOT rendered by this file.
   ========================================================================= */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var root = document.getElementById("mx-articles-root");
    if (!root) return;
    renderHub(root);
  });

  function esc(s) { return (s || "").toString(); }
  function fmtDate(iso) {
    var d = new Date(iso + "T00:00:00");
    if (isNaN(d)) return iso;
    return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  }

  var PAGE_SIZE = 12;
  var visible = PAGE_SIZE;

  function renderHub(root) {
    var order = window.NICHE_ORDER || [];
    var all = window.ARTICLES || [];

    var tabsHtml = '<button class="mx-filter-chip active" data-nfilter="all">All Topics</button>' +
      order.map(function (slug) {
        var n = window.NICHES[slug];
        if (!n) return "";
        return '<button class="mx-filter-chip" data-nfilter="' + slug + '">' + esc(n.vertical) + '</button>';
      }).join("");

    var cardsHtml = all.map(function (a) {
      var n = window.NICHES[a.niche];
      if (!n) return "";
      return '<a class="mx-article-card mx-reveal" data-niche="' + a.niche + '" href="niches/' + a.niche + '/articles/' + a.slug + '.html">' +
        '<div class="mx-ac-top"><span class="mx-ac-cat">' + esc(n.vertical) + '</span><i class="fa-solid ' + esc(n.icon) + '"></i></div>' +
        '<h3>' + esc(a.title) + '</h3>' +
        '<p>' + esc(a.dek) + '</p>' +
        '<div class="mx-ac-meta"><span><i class="fa-regular fa-clock"></i> ' + a.readTime + ' min</span><span>' + fmtDate(a.date) + '</span></div>' +
        '</a>';
    }).join("");

    root.innerHTML =
      '<div class="mx-article-filter-bar" id="mx-niche-filter-bar">' + tabsHtml + '</div>' +
      '<div class="mx-article-grid" id="mx-hub-article-grid">' + cardsHtml + '</div>' +
      '<div style="text-align:center;margin-top:32px;"><button class="mx-btn mx-btn-ghost" id="mx-load-more-btn">Load More Articles</button></div>';

    bindFilters();
    if (window.MXShared && window.MXShared.initReveal) window.MXShared.initReveal();
  }

  function bindFilters() {
    var chips = document.querySelectorAll("#mx-niche-filter-bar .mx-filter-chip");
    var cards = document.querySelectorAll("#mx-hub-article-grid .mx-article-card");
    var loadMoreBtn = document.getElementById("mx-load-more-btn");
    var currentFilter = "all";

    function apply() {
      var shown = 0;
      cards.forEach(function (card) {
        var matches = currentFilter === "all" || card.getAttribute("data-niche") === currentFilter;
        if (matches && shown < visible) { card.style.display = ""; shown++; }
        else { card.style.display = "none"; }
      });
      var total = 0;
      cards.forEach(function (card) { if (currentFilter === "all" || card.getAttribute("data-niche") === currentFilter) total++; });
      loadMoreBtn.style.display = visible >= total ? "none" : "";
    }

    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        chips.forEach(function (c) { c.classList.remove("active"); });
        chip.classList.add("active");
        currentFilter = chip.getAttribute("data-nfilter");
        visible = PAGE_SIZE;
        apply();
      });
    });
    loadMoreBtn.addEventListener("click", function () {
      visible += PAGE_SIZE;
      apply();
    });
    apply();
  }
})();
