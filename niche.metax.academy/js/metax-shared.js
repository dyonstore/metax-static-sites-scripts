/* =========================================================================
   METAX SHARED — lightweight helpers reused by the MetaX-branded root pages
   AND by bespoke niche pages (each niche has its own markup/CSS, but they
   all share these same small, generic behaviors instead of duplicating
   fetch/scroll/reveal logic in every page).
   ========================================================================= */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    stampYear();
    initSmoothAnchors();
    initReveal();
    initNavToggle();
    bindLeadForms();
  });

  function stampYear() {
    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }

  function initSmoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      if (link.dataset.mxAnchorBound) return;
      link.dataset.mxAnchorBound = "1";
      link.addEventListener("click", function (e) {
        var id = link.getAttribute("href");
        if (id.length < 2) return;
        var target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        var top = target.getBoundingClientRect().top + window.scrollY - 84;
        window.scrollTo({ top: top, behavior: "smooth" });
      });
    });
  }

  function initReveal() {
    // Wildcard selector: every niche uses its own "{prefix}-reveal" class
    // (pi-reveal, ms-reveal, ai-reveal, ...) — this one selector covers all
    // of them (plus the generic .reveal/.mx-reveal/.gz-reveal) without
    // needing a manual edit here per niche.
    var els = document.querySelectorAll('[class*="-reveal"], .reveal');
    if (!els.length) return;
    if ("IntersectionObserver" in window) {
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("mx-in", "in");
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      els.forEach(function (el) { obs.observe(el); });
    } else {
      els.forEach(function (el) { el.classList.add("mx-in", "in"); });
    }
  }

  function initNavToggle() {
    var toggle = document.querySelector("[data-nav-toggle]");
    var menu = document.querySelector("[data-nav-menu]");
    if (!toggle || !menu) return;
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* ---------------- Lead capture — works for root pages AND niche pages.
     Any <form data-mx-lead-form data-niche="slug"> is auto-bound. Reads
     whatever named inputs exist on the form (name/email/phone/interest_type/
     credential_type/credential_details/message/consent) and posts only
     those present, defaulting the rest sensibly. ---------------- */
  function bindLeadForms() {
    document.querySelectorAll("[data-mx-lead-form]").forEach(function (form) {
      if (form.dataset.bound) return;
      form.dataset.bound = "1";
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        submitLead(form);
      });
    });
  }

  /* Depth-aware tables/ path: counts directory levels below the project
     root purely from the URL, so it works from root pages (0 deep),
     single-level pages like root-category/index.html (1 deep), niche
     pages like niches/{slug}/index.html (2 deep), and niche article
     pages like niches/{slug}/articles/{x}.html (3 deep) — no hardcoded
     marker strings required. */
  function tablesPath() {
    var segments = window.location.pathname.split("/").filter(Boolean);
    var depth = Math.max(0, segments.length - 1); // drop the filename itself
    var up = "";
    for (var i = 0; i < depth; i++) up += "../";
    return up + "tables/leads";
  }

  function val(form, name) {
    var el = form.querySelector('[name="' + name + '"]');
    if (!el) return undefined;
    if (el.type === "checkbox") return el.checked;
    return el.value || "";
  }

  function submitLead(form) {
    var btn = form.querySelector('button[type="submit"]');
    // Wildcard selector: every niche uses its own "{prefix}-form-success"
    // class — this one selector covers all of them without a manual edit
    // to this shared file per niche.
    var successEl = form.parentElement.querySelector('[class*="-form-success"]');
    var originalLabel = btn ? btn.innerHTML : "";
    if (btn) { btn.disabled = true; btn.innerHTML = "Sending…"; }

    var payload = {
      name: val(form, "name") || "",
      email: val(form, "email") || "",
      phone: val(form, "phone") || "",
      niche: form.getAttribute("data-niche") || "general-inquiry",
      interest_type: val(form, "interest_type") || "general_inquiry",
      credential_type: val(form, "credential_type") || "not_applicable",
      credential_details: val(form, "credential_details") || "",
      message: val(form, "message") || "",
      consent: !!val(form, "consent"),
      status: "new"
    };

    var pathToTables = tablesPath();

    fetch(pathToTables, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    })
      .then(function (res) { if (!res.ok) throw new Error("Request failed"); return res.json(); })
      .then(function () {
        form.reset();
        if (successEl) successEl.classList.add("show");
        form.style.display = "none";
      })
      .catch(function (err) {
        console.error("Lead submit error:", err);
        alert("Something went wrong sending your request. Please try again.");
      })
      .finally(function () {
        if (btn) { btn.disabled = false; btn.innerHTML = originalLabel; }
      });
  }

  window.MXShared = { stampYear: stampYear, initSmoothAnchors: initSmoothAnchors, initReveal: initReveal, bindLeadForms: bindLeadForms };
})();
