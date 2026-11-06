/* =========================================================================
   LeadGen Network — Shared front-end behavior
   Used by hub page + all 10 niche landing/guide/compare pages
   ========================================================================= */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    initMobileNav();
    initMegaMenu();
    initFaqAccordions();
    initLeadForms();
    initSmoothAnchors();
    stampYear();
    initConsentBanner();
  });

  /* ---------------- Indexed image placeholder ----------------
     Renders a real <img> pointing at /img/{file}. If that file doesn't exist
     yet (404), a numbered "IMG-NN" fallback box is shown instead so editors
     always know exactly which prompt (see IMAGE-PROMPTS.md) produces the
     missing asset. Once the real file is generated and saved into /img/,
     it displays automatically on next load — no HTML/JS edits required.
     variant: "" | "card" | "logo" | "hero-banner" | "featured" */
  window.imgPlaceholder = function (index, file, alt, variant, imgPrefix) {
    var cls = "img-placeholder" + (variant ? " img-placeholder--" + variant : "");
    var idxLabel = "IMG-" + (index < 10 ? "0" + index : index);
    var src = (imgPrefix || "") + "img/" + file;
    return (
      '<div class="' + cls + '" data-img-index="' + index + '">' +
        '<img src="' + src + '" alt="' + (alt || "").replace(/"/g, "&quot;") + '" loading="lazy" ' +
          'onerror="this.style.display=\'none\';this.parentElement.querySelector(\'.img-ph-fallback\').style.display=\'flex\';">' +
        '<div class="img-ph-fallback"><i class="fa-regular fa-image"></i>' +
          '<span class="img-ph-badge">' + idxLabel + '</span>' +
          '<span class="img-ph-file">' + file + '</span>' +
        '</div>' +
      '</div>'
    );
  };

  /* ---------------- Cookie / consent notice (EEA/UK-style CMP guidance) ----------------
     Lightweight, dismissible banner. NOTE for AdSense review: once a real
     AdSense account is live, replace this custom banner with Google's own
     "Privacy & messaging" consent message (AdSense → Privacy & messaging),
     which is what Google expects reviewers/regulators to see for personalized
     ads in the EEA/UK/Switzerland. This banner is a safe placeholder/fallback
     until that's configured, and is harmless to keep either way. */
  function initConsentBanner() {
    if (document.querySelector(".consent-banner")) return;
    if (localStorage.getItem("lgn_consent_ack") === "1") return;
    var bar = document.createElement("div");
    bar.className = "consent-banner";
    bar.innerHTML =
      '<div class="consent-banner-inner">' +
        '<p>We use cookies and similar technologies to operate this site and, once Google AdSense is enabled, to serve relevant advertising. See our <a href="' + consentPrivacyHref() + '">Privacy Policy</a> for details.</p>' +
        '<div class="consent-actions"><button type="button" class="btn btn-dark" data-consent-ack>Accept</button></div>' +
      '</div>';
    document.body.appendChild(bar);
    bar.querySelector("[data-consent-ack]").addEventListener("click", function () {
      localStorage.setItem("lgn_consent_ack", "1");
      bar.remove();
    });
  }
  function consentPrivacyHref() {
    var path = window.location.pathname;
    var idx = path.indexOf("/niches/");
    if (idx === -1) return "privacy.html";
    var rest = path.slice(idx + "/niches/".length);
    var depth = rest.split("/").length;
    var up = "";
    for (var i = 0; i < depth; i++) up += "../";
    return up + "privacy.html";
  }

  /* ---------------- Mobile nav ---------------- */
  function initMobileNav() {
    var toggle = document.querySelector("[data-nav-toggle]");
    var menu = document.querySelector("[data-nav-menu]");
    if (!toggle || !menu) return;
    toggle.addEventListener("click", function () {
      menu.classList.toggle("open");
    });
  }

  /* ---------------- Mega Menu ----------------
     Injected into any page's <header class="site-header"> once NICHES data is
     available. Works on the hub (index.html/articles.html) and every
     /niches/{slug}/*.html page because this script always loads after
     render.js / articles-listing.js / article-engine.js have injected the
     header markup for the current page. */
  window.initMegaMenu = initMegaMenu;

  var MEGA_CATEGORIES = [
    { name: "Legal Services", slugs: ["personal-injury-lawyer","mesothelioma-claim","medical-malpractice-lawyer","bankruptcy-attorney","dui-defense-attorney","divorce-lawyer","timeshare-exit"] },
    { name: "Insurance & Finance", slugs: ["auto-insurance-quotes","life-insurance-quotes","debt-consolidation","mortgage-refinance","medicare-supplement-plans","tax-relief-services","identity-theft-protection","structured-settlement-buyout","student-loan-refinance","business-loans","medicare-advantage-plans","personal-loans","pet-insurance","credit-repair","ltc-insurance"] },
    { name: "Home Services", slugs: ["home-security-systems","solar-panel-quotes","roofing-storm-damage","hvac-repair-replacement","home-warranty","water-damage-mold","ev-home-charger"] },
    { name: "Health & Wellness", slugs: ["addiction-rehab-centers","weight-loss-programs","dental-implants","online-therapy","hearing-aids","lasik-vision-correction","hair-restoration","assisted-living"] },
    { name: "Education & Technology", slugs: ["best-vpn-software","online-college-degrees","ai-productivity-saas"] }
  ];

  function megaPathPrefix() {
    var path = window.location.pathname;
    var idx = path.indexOf("/niches/");
    if (idx === -1) return "";
    var rest = path.slice(idx + "/niches/".length); // e.g. "slug/index.html" or "slug/articles/foo.html"
    var depth = rest.split("/").length; // 2 for niche-level pages, 3 for article pages
    var up = "";
    for (var i = 0; i < depth; i++) up += "../";
    return up;
  }

  function initMegaMenu() {
    if (!window.NICHES) return;
    var headerInner = document.querySelector(".site-header .header-inner");
    if (!headerInner || headerInner.querySelector(".mega-menu-wrap")) return;
    var brand = headerInner.querySelector(".brand");
    if (!brand) return;

    var prefix = megaPathPrefix();

    function renderCategory(cat) {
      var links = cat.slugs.map(function (slug) {
        var n = window.NICHES[slug];
        if (!n) return "";
        return '<a href="' + prefix + 'niches/' + slug + '/index.html"><i class="fa-solid ' + n.icon + '"></i>' + n.vertical + '</a>';
      }).join("");
      return '<div class="mega-col"><h4>' + cat.name + '</h4>' + links + '</div>';
    }

    var wrap = document.createElement("div");
    wrap.className = "mega-menu-wrap";
    wrap.innerHTML =
      '<button type="button" class="mega-trigger" aria-expanded="false" aria-haspopup="true">' +
        '<span class="mega-trigger-full">All Verticals</span><span class="mega-trigger-short">Menu</span>' +
        '<i class="fa-solid fa-chevron-down chev"></i>' +
      '</button>' +
      '<div class="mega-panel" role="menu">' +
        '<button type="button" class="mega-close" aria-label="Close menu"><i class="fa-solid fa-xmark"></i></button>' +
        '<div class="mega-grid">' + MEGA_CATEGORIES.map(renderCategory).join("") + '</div>' +
        '<div class="mega-footer">' +
          '<span class="small-muted">40 high-CPM verticals · 400+ expert articles</span>' +
          '<a class="btn btn-dark" href="' + prefix + 'articles.html">Browse Resource Center <i class="fa-solid fa-arrow-right"></i></a>' +
        '</div>' +
      '</div>';

    brand.insertAdjacentElement("afterend", wrap);

    var trigger = wrap.querySelector(".mega-trigger");
    var panel = wrap.querySelector(".mega-panel");
    var closeBtn = wrap.querySelector(".mega-close");

    function openMenu() {
      panel.classList.add("open");
      trigger.setAttribute("aria-expanded", "true");
      document.body.classList.add("mega-open");
    }
    function closeMenu() {
      panel.classList.remove("open");
      trigger.setAttribute("aria-expanded", "false");
      document.body.classList.remove("mega-open");
    }
    trigger.addEventListener("click", function (e) {
      e.stopPropagation();
      if (panel.classList.contains("open")) closeMenu(); else openMenu();
    });
    closeBtn.addEventListener("click", closeMenu);
    document.addEventListener("click", function (e) {
      if (!wrap.contains(e.target)) closeMenu();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
    panel.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeMenu();
    });
  }

  /* ---------------- FAQ accordion ---------------- */
  function initFaqAccordions() {
    var items = document.querySelectorAll(".faq-item");
    items.forEach(function (item) {
      var q = item.querySelector(".faq-q");
      var a = item.querySelector(".faq-a");
      if (!q || !a) return;
      q.addEventListener("click", function () {
        var isOpen = item.classList.contains("open");
        // close siblings within same faq list
        var parent = item.parentElement;
        parent.querySelectorAll(".faq-item.open").forEach(function (openItem) {
          if (openItem !== item) {
            openItem.classList.remove("open");
            openItem.querySelector(".faq-a").style.maxHeight = null;
          }
        });
        if (isOpen) {
          item.classList.remove("open");
          a.style.maxHeight = null;
        } else {
          item.classList.add("open");
          a.style.maxHeight = a.scrollHeight + "px";
        }
      });
    });
  }

  /* ---------------- Smooth anchor scroll offset for sticky header ---------------- */
  function initSmoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
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
  }

  /* ---------------- Lead capture forms ---------------- */
  function initLeadForms() {
    var forms = document.querySelectorAll("[data-lead-form]");
    forms.forEach(function (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        submitLeadForm(form);
      });
    });
  }

  window.submitLeadFormShared = submitLeadForm;

  function submitLeadForm(form) {
    var btn = form.querySelector('button[type="submit"]');
    var successEl = form.parentElement.querySelector(".form-success") || form.querySelector(".form-success");
    var originalLabel = btn ? btn.innerHTML : "";
    if (btn) {
      btn.disabled = true;
      btn.innerHTML = "Sending…";
    }

    var payload = {
      name: (form.querySelector('[name="name"]') || {}).value || "",
      email: (form.querySelector('[name="email"]') || {}).value || "",
      phone: (form.querySelector('[name="phone"]') || {}).value || "",
      zip_code: (form.querySelector('[name="zip_code"]') || {}).value || "",
      niche: form.getAttribute("data-niche") || "unknown",
      page_type: form.getAttribute("data-page-type") || "landing",
      message: (form.querySelector('[name="message"]') || {}).value || "",
      consent: !!(form.querySelector('[name="consent"]') || {}).checked,
      status: "new"
    };

    fetch("tables/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    })
      .then(function (res) {
        if (!res.ok) throw new Error("Request failed");
        return res.json();
      })
      .then(function () {
        form.reset();
        if (successEl) successEl.classList.add("show");
        form.style.display = "none";
      })
      .catch(function (err) {
        console.error("Lead submit error:", err);
        alert("Something went wrong sending your request. Please try again or call us directly.");
      })
      .finally(function () {
        if (btn) {
          btn.disabled = false;
          btn.innerHTML = originalLabel;
        }
      });
  }

  /* ---------------- Footer year ---------------- */
  function stampYear() {
    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }
})();
