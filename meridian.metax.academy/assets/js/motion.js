/* Meridian Decision Network — motion layer.
   Progressive enhancement only: every effect here is additive, guarded by
   feature detection, and fully disabled under prefers-reduced-motion.
   Loaded asynchronously by render.js and hub.js after the page is assembled,
   so no page shell needs to reference it. */
(function () {
  "use strict";

  if (window.MDN_MOTION_READY) { return; }
  window.MDN_MOTION_READY = true;

  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- 1. Header lifts once the page scrolls ---------- */
  (function stickyHeader() {
    var head = document.getElementById("site-header") || document.querySelector(".site-header");
    if (!head) { return; }
    var ticking = false;
    function apply() {
      head.classList.toggle("scrolled", window.pageYOffset > 8);
      ticking = false;
    }
    apply();
    window.addEventListener("scroll", function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(apply); }
    }, { passive: true });
  })();

  /* ---------- 2. Reading progress bar (article pages only) ---------- */
  (function readProgress() {
    var article = document.querySelector("main.article");
    if (!article) { return; }
    var bar = document.createElement("div");
    bar.className = "read-progress";
    bar.setAttribute("aria-hidden", "true");
    bar.innerHTML = "<i></i>";
    document.body.appendChild(bar);
    var fill = bar.firstChild;
    var ticking = false;
    function apply() {
      var rect = article.getBoundingClientRect();
      var total = rect.height - window.innerHeight;
      var done = total > 0 ? (-rect.top) / total : 0;
      fill.style.width = Math.max(0, Math.min(1, done)) * 100 + "%";
      ticking = false;
    }
    apply();
    window.addEventListener("scroll", function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(apply); }
    }, { passive: true });
    window.addEventListener("resize", apply);
  })();

  /* ---------- 3. Scroll reveal for content blocks ---------- */
  (function reveal() {
    if (reduced || !("IntersectionObserver" in window)) { return; }
    var sel = ".section .card, .site-card, .prose figure, .compare-table, " +
      ".tool, .faq details, .callout, .sources, .checklist-group, .answer-box, .section-head";
    var nodes = Array.prototype.slice.call(document.querySelectorAll(sel));
    if (!nodes.length) { return; }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) { return; }
        var el = e.target;
        /* Stagger siblings within the same grid for a wave effect. */
        var delay = parseFloat(el.getAttribute("data-rv-delay") || "0");
        setTimeout(function () { el.classList.add("in"); }, delay);
        io.unobserve(el);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

    nodes.forEach(function (el) {
      /* Anything already on screen at load stays visible — never hide the LCP. */
      var top = el.getBoundingClientRect().top;
      if (top < window.innerHeight * 0.92) { return; }
      el.classList.add("reveal");
      var parent = el.parentNode;
      if (parent && parent.classList && /grid/.test(parent.className)) {
        var i = Array.prototype.indexOf.call(parent.children, el);
        el.setAttribute("data-rv-delay", String(Math.min(i, 5) * 70));
      }
      io.observe(el);
    });
  })();

  /* ---------- 4. Table of contents follows the reader ---------- */
  (function tocSpy() {
    var toc = document.querySelector(".toc");
    var heads = document.querySelectorAll("#prose h2[id]");
    if (!toc || heads.length < 3 || !("IntersectionObserver" in window)) { return; }
    var links = {};
    Array.prototype.forEach.call(toc.querySelectorAll('a[href^="#"]'), function (a) {
      links[a.getAttribute("href").slice(1)] = a.parentNode;
    });
    var seen = [];
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var id = e.target.id;
        var at = seen.indexOf(id);
        if (e.isIntersecting && at === -1) { seen.push(id); }
        if (!e.isIntersecting && at > -1) { seen.splice(at, 1); }
      });
      for (var k in links) { if (links[k]) { links[k].classList.remove("active"); } }
      if (seen.length && links[seen[0]]) { links[seen[0]].classList.add("active"); }
    }, { rootMargin: "-88px 0px -70% 0px" });
    Array.prototype.forEach.call(heads, function (h) { io.observe(h); });
  })();

  /* ---------- 5. Pointer-tracked tilt/glow on cards ---------- */
  (function cardGlow() {
    if (reduced) { return; }
    if (!window.matchMedia || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) { return; }
    document.addEventListener("mousemove", function (e) {
      var card = e.target.closest ? e.target.closest(".card, .site-card") : null;
      if (!card) { return; }
      var r = card.getBoundingClientRect();
      card.style.setProperty("--mx", ((e.clientX - r.left) / r.width * 100).toFixed(1) + "%");
      card.style.setProperty("--my", ((e.clientY - r.top) / r.height * 100).toFixed(1) + "%");
    }, { passive: true });
  })();

  /* ---------- 6. Counters on the home stat band ---------- */
  (function counters() {
    if (reduced || !("IntersectionObserver" in window)) { return; }
    var nodes = document.querySelectorAll(".section .grid.c4 > .card > div:first-child");
    if (!nodes.length) { return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) { return; }
        var el = e.target;
        io.unobserve(el);
        var text = el.textContent.trim();
        var m = text.match(/^(\D*)(\d+)(\D*)$/);
        if (!m) { return; }
        var pre = m[1], target = parseInt(m[2], 10), post = m[3];
        if (target > 5000) { return; }
        var start = null, dur = 900;
        function step(ts) {
          if (start === null) { start = ts; }
          var p = Math.min(1, (ts - start) / dur);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = pre + Math.round(target * eased) + post;
          if (p < 1) { window.requestAnimationFrame(step); }
        }
        window.requestAnimationFrame(step);
      });
    }, { threshold: 0.5 });
    Array.prototype.forEach.call(nodes, function (n) { io.observe(n); });
  })();
})();
