/* Builds the HTML sitemap from every registered site data file. */
(function () {
  "use strict";
  var reg = window.MDN_SITES || {};
  var NET = window.NETWORK;
  var total = 0;
  var out = NET.sites.map(function (s) {
    var D = reg[s.slug];
    if (!D) { return ""; }
    var groups = {};
    Object.keys(D.pages).forEach(function (id) {
      var p = D.pages[id];
      var g = id === "index" ? "Home" : (p.section || "Guides");
      (groups[g] = groups[g] || []).push({ id: id, t: p.title });
      total++;
    });
    var cols = Object.keys(groups).map(function (g) {
      return "<div><h3 style='font-size:.9rem;text-transform:uppercase;letter-spacing:.06em;color:var(--ink-soft)'>" + g + "</h3><ul style='font-size:.92rem'>" +
        groups[g].map(function (p) {
          return "<li><a href='sites/" + s.slug + "/" + p.id + ".html'>" + p.t + "</a></li>";
        }).join("") + "</ul></div>";
    }).join("");
    return "<section class='section' style='border-top:1px solid var(--line);padding:26px 0'>" +
      "<h2 style='margin-top:0'><a href='sites/" + s.slug + "/index.html'>" + s.brand + "</a> " +
      "<span style='font-weight:400;font-size:.9rem;color:var(--ink-soft)'>— " + s.topic + "</span></h2>" +
      "<div class='grid c4'>" + cols + "</div></section>";
  }).join("");
  document.getElementById("sitemap-body").innerHTML = out;
  document.getElementById("sitemap-count").textContent = total + " pages across " + NET.sites.length + " brands.";
})();
