/* Responsive Google AdSense injector for the Meridian network.
   Loaded automatically by render.js (brand sites) and hub.js (network pages),
   so no individual page has to be edited to carry advertising.

   Design rules enforced here:
   - Every unit sits inside a container with a RESERVED height, so filling the
     slot cannot shift content (Core Web Vitals: CLS).
   - Units are fully responsive (data-ad-format="auto" +
     data-full-width-responsive="true") so they adapt to phone/tablet/desktop.
   - No ads are injected into comparison tables, forms or above the H1.
   - A top leaderboard and a footer banner are added once per page; in-article
     units come from the <!--AD--> markers in the content model.

   REVIEW MODE (ADS_CONFIG.reviewMode === true)
   --------------------------------------------
   Google requires that a site awaiting AdSense approval must NOT already carry
   ad units. Empty <ins> elements render as blank boxes during review, which
   reads as an unfinished layout and is a common rejection reason.

   While reviewMode is on this module:
     - STILL loads adsbygoogle.js and emits <meta name="google-adsense-account">,
       because Google uses those to verify site ownership;
     - does NOT create any <ins class="adsbygoogle"> element;
     - does NOT call adsbygoogle.push();
     - does NOT add the top leaderboard or footer banner;
     - does NOT render the word "Advertisement" anywhere;
     - marks <html data-review-mode="1"> so base.css collapses every reserved
       .ad-slot to display:none, leaving no dashed boxes or empty gaps.

   Turn reviewMode off in assets/js/network.js only after AdSense approval.
   Every slot, band and in-article unit then returns automatically on all
   pages, with the reserved heights intact. See ADSENSE-READINESS.md. */
window.MDN_ADS = (function () {
  "use strict";
  var CFG = window.ADS_CONFIG || { enabled: false };
  var loaded = false;

  /* True while the site is awaiting AdSense approval. */
  function inReview() { return CFG.reviewMode === true; }

  /* Ownership verification must keep working during review, so the library and
     the account meta tag are injected in both modes. */
  function loadLibrary() {
    if (loaded || !CFG.enabled || !CFG.client) { return; }
    loaded = true;
    var s = document.createElement("script");
    s.async = true;
    s.crossOrigin = "anonymous";
    s.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + encodeURIComponent(CFG.client);
    s.onerror = function () { /* offline / blocked: nothing else to do */ };
    document.head.appendChild(s);
    var meta = document.createElement("meta");
    meta.name = "google-adsense-account";
    meta.content = CFG.client;
    document.head.appendChild(meta);
  }

  /* Turns a reserved .ad-slot box into a live responsive AdSense unit.
     No-op during review: no <ins>, no push(). */
  function fill(box) {
    if (inReview()) { return; }
    if (!box || box.getAttribute("data-ad-ready") === "1") { return; }
    box.setAttribute("data-ad-ready", "1");
    var kind = box.classList.contains("leader") ? "leader"
      : box.classList.contains("inline") ? "inline"
        : box.classList.contains("footer") ? "footer" : "mrec";
    var slot = (CFG.slots || {})[kind];
    if (!CFG.enabled || !CFG.client || !slot) { return; }

    var ins = document.createElement("ins");
    ins.className = "adsbygoogle";
    ins.style.display = "block";
    ins.style.width = "100%";
    ins.setAttribute("data-ad-client", CFG.client);
    ins.setAttribute("data-ad-slot", slot);
    ins.setAttribute("data-ad-format", kind === "inline" ? "fluid" : "auto");
    if (kind === "inline") { ins.setAttribute("data-ad-layout", "in-article"); }
    ins.setAttribute("data-full-width-responsive", "true");
    // Keep the reserved placeholder label behind the unit: if AdSense fills the
    // slot the creative covers it; if it does not, the space stays labelled.
    box.appendChild(ins);
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) { /* blocked or duplicate push — reserved space remains */ }
  }

  /* Adds the standard top leaderboard and footer banner to any page.
     Skipped entirely during review so no empty bands appear. */
  function addPageUnits(rootEl) {
    if (inReview()) { return; }
    var main = rootEl || document.getElementById("main") || document.body;
    if (!document.getElementById("ad-top-leader")) {
      var top = document.createElement("div");
      top.id = "ad-top-leader";
      top.className = "ad-slot leader ad-band";
      top.setAttribute("role", "complementary");
      top.setAttribute("aria-label", "Advertisement");
      top.innerHTML = label();
      var header = document.getElementById("site-header");
      if (header && header.parentNode) { header.parentNode.insertBefore(top, header.nextSibling); }
    }
    if (!document.getElementById("ad-footer-banner")) {
      var bot = document.createElement("div");
      bot.id = "ad-footer-banner";
      bot.className = "ad-slot footer ad-band";
      bot.setAttribute("role", "complementary");
      bot.setAttribute("aria-label", "Advertisement");
      bot.innerHTML = label();
      var footer = document.getElementById("site-footer") || document.querySelector(".site-footer");
      if (footer && footer.parentNode) { footer.parentNode.insertBefore(bot, footer); }
      else { main.appendChild(bot); }
    }
  }

  /* Never label a box that has no ad in it. */
  function label() {
    if (inReview()) { return ""; }
    return CFG.showPlaceholderLabel ? '<span class="ad-label">Advertisement</span>' : "";
  }

  function init() {
    loadLibrary();

    if (inReview()) {
      /* Hide every reserved slot the content model already emitted, so the page
         shows a clean editorial layout with no dashed boxes or gaps. */
      var root = document.documentElement;
      if (root) { root.setAttribute("data-review-mode", "1"); }
      var reserved = document.querySelectorAll(".ad-slot");
      Array.prototype.forEach.call(reserved, function (b) {
        b.innerHTML = "";
        b.removeAttribute("aria-label");
        b.removeAttribute("role");
        b.setAttribute("aria-hidden", "true");
      });
      return;
    }

    addPageUnits();
    var boxes = document.querySelectorAll(".ad-slot");
    Array.prototype.forEach.call(boxes, function (b) {
      if (!b.querySelector(".ad-label") && CFG.showPlaceholderLabel) {
        b.innerHTML = label();
      }
      fill(b);
    });
  }

  return { init: init, fill: fill };
})();
