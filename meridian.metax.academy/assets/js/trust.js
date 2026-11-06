/* Shared trust-page builder.
   Every brand in the network publishes the same five governance pages so the
   standard is auditable and identical: About, Editorial policy, Review
   methodology, Disclosures, Contact. Copy is generated from each site's own
   parameters (team, disclaimer, source standards) — no fake credentials,
   no invented awards, no testimonials. */
window.MDN_TRUST = function (D) {
  var B = D.brand;
  /* Portrait tile: img/team/<slug>-N.jpg and img/reviewer/<slug>-N.jpg.
     Falls back to an initials monogram when the file is absent (see
     img/IMAGE-PROMPTS.md §5–6).

     NOTE: this markup is built inline rather than through window.MDN_PH.
     MDN_TRUST() is invoked at the tail of each data file, which every shell
     loads BEFORE render.js — so MDN_PH does not exist yet at this point.
     Keep this function self-contained. The root prefix is resolved from
     data-root because trust pages live two levels deep under sites/<slug>/. */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function portrait(person, dir, i) {
    var root = (document.body && document.body.getAttribute("data-root")) || "./";
    var initials = String(person.name || "").replace(/[^A-Za-z ]/g, "").split(/\s+/)
      .slice(0, 2).map(function (w) { return w.charAt(0).toUpperCase(); }).join("");
    var file = root + "img/" + dir + "/" + D.slug + "-" + (i + 1) + ".jpg";
    return '<div class="ph r11 portrait" data-img="1">' +
      '<img class="ph-img" src="' + file + '" alt="' + esc(person.name) + '" loading="lazy" decoding="async"' +
      " onerror=\"this.parentNode.removeAttribute('data-img');this.remove();\">" +
      '<span class="ph-grid" aria-hidden="true"></span>' +
      '<span class="ph-inner"><span class="ph-glyph" aria-hidden="true">' + esc(initials) + "</span></span></div>";
  }
  var team = (D.team || []).map(function (p, i) {
    return '<article class="card person">' + portrait(p, "team", i) +
      '<span class="kicker">' + p.role + "</span><h3>" + p.name + "</h3><p>" + p.bio + "</p>" +
      (p.focus ? '<p style="font-size:.85rem"><strong>Covers:</strong> ' + p.focus + "</p>" : "") + "</article>";
  }).join("");
  var reviewers = (D.reviewers || []).map(function (p, i) {
    return '<article class="card person">' + portrait(p, "reviewer", i) +
      '<span class="kicker">Expert reviewer</span><h3>' + p.name + "</h3><p><strong>" + p.credential + "</strong></p><p>" + p.bio + "</p></article>";
  }).join("");
  var sourceList = (D.sourceStandards || []).map(function (s) { return "<li>" + s + "</li>"; }).join("");

  return {
    "about": {
      title: "About " + B,
      h1: "About " + B,
      section: "About",
      dek: D.aboutDek,
      eyebrow: "Who we are",
      toc: true,
      answer: "<strong>" + B + "</strong> is an independent publication covering " + D.topicLong +
        ". We are funded by display advertising, affiliate partnerships and lead generation, and we publish our " +
        "<a href='review-methodology.html'>review methodology</a> and <a href='disclosures.html'>advertiser disclosure</a> so you can judge our incentives.",
      body:
        "<h2>What we publish</h2><p>" + D.aboutWhat + "</p>" +
        "<h2>How we are different</h2><ul>" + (D.aboutDiff || []).map(function (d) { return "<li>" + d + "</li>"; }).join("") + "</ul>" +
        "<h2>Editorial team</h2><p>Bylines on this site belong to real, named people with the experience described below. " +
        "We do not publish anonymous or ghost-written content, and we do not present AI drafts as human reporting. Drafting tools may be " +
        "used for outlining and research organisation; every published sentence is edited and verified by the named author.</p>" +
        '<div class="grid c2">' + team + "</div>" +
        "<h2>Expert reviewers</h2><p>Because " + D.ymylLabel + " content can affect money, health or legal exposure, " +
        "our explainers and comparison pages are reviewed by practitioners before publication and re-checked when we update them.</p>" +
        '<div class="grid c2">' + reviewers + "</div>" +
        "<h2>Corrections</h2><p>If something here is wrong, we want to fix it fast. Email " + D.contactEmail +
        " with the URL and the issue. Material corrections are logged at the foot of the page with the date and what changed.</p>" +
        "<h2>Ownership and funding</h2><p>" + B + " is published by Meridian Decision Media, which also operates the other brands listed on the " +
        "<a href='../../index.html'>network hub</a>. No advertiser, affiliate partner or lead-generation partner has any ownership stake, " +
        "editorial veto, or advance access to our rankings.</p>",
      faq: [
        { q: "Do partners pay for a better ranking?", a: "<p>No. Placement in a comparison table is set by our scoring rubric. Partners can pay for display advertising or a clearly labelled sponsorship unit, never for position.</p>" },
        { q: "Is this financial, legal or medical advice?", a: "<p>No. " + D.disclaimer + "</p>" },
        { q: "Can I republish your content?", a: "<p>Short quotes with a link are welcome. Full syndication requires written permission and a canonical tag pointing back to the original URL.</p>" }
      ],
      related: D.aboutRelated || [],
      cta: { title: "Suggest a topic", text: "We plan our editorial calendar from reader questions. Tell us what decision you are stuck on.", btn: "Contact the editors", href: "contact" }
    },

    "editorial-policy": {
      title: "Editorial policy and standards",
      h1: "Editorial policy",
      section: "About",
      dek: "How " + B + " researches, writes, reviews, updates and corrects everything we publish.",
      eyebrow: "Standards",
      answer: "Every page follows the same chain: brief → research with primary sources → draft by a named author → expert review → editor fact-check → publication with a visible update date. Pages that go stale are re-verified or unpublished.",
      body:
        "<h2>1. Independence</h2><p>Commercial relationships never determine conclusions. Our commercial team cannot see rankings before publication and cannot request changes to them. " +
        "If a partner disputes a fact, they use the same correction route as any reader.</p>" +
        "<h2>2. Sourcing standards</h2><p>We prefer primary sources over secondary reporting. In practice that means:</p><ul>" + sourceList +
        "<li>Vendor claims are labelled as vendor claims, and pricing is dated because it changes.</li>" +
        "<li>Statistics are attributed to the original publisher, not to an aggregator blog.</li></ul>" +
        "<h2>3. Expert review</h2><p>" + D.ymylLabel + " pages are reviewed by a qualified practitioner listed on the <a href='about.html'>about page</a>. " +
        "The reviewer checks accuracy, completeness and whether the guidance could cause harm if followed literally. Reviewers do not write the pages they review.</p>" +
        "<h2>4. Fact-checking</h2><p>Before publication an editor verifies every number, date, statutory reference and product claim against the cited source. " +
        "Any claim we cannot source is cut, not softened.</p>" +
        "<h2>5. Updates and freshness</h2><p>Comparison and pricing pages are reviewed on a rolling 90-day cycle; regulation-sensitive pages are reviewed whenever the underlying rule changes. " +
        "The <em>Updated</em> date at the top of a page only changes when the content changes — never as a cosmetic refresh.</p>" +
        "<h2>6. Corrections</h2><p>Errors of fact are corrected as soon as they are confirmed, and the page carries a dated correction note. " +
        "Typos and formatting fixes are made silently. We do not quietly delete pages to hide mistakes; if a page is retired, it is redirected to the closest useful replacement.</p>" +
        "<h2>7. Use of AI tools</h2><p>We use assistive tools for outlining, summarising research and copy editing. We do not publish machine-generated articles at scale, " +
        "we do not fabricate quotes or credentials, and a named human is accountable for every page.</p>" +
        "<h2>8. What we refuse to publish</h2><ul><li>Reviews of products nobody on the team has evaluated against the published rubric.</li>" +
        "<li>Guarantees of outcomes, returns, approval odds or savings.</li>" +
        "<li>Content designed only to capture a keyword, with no reader value.</li>" +
        "<li>Undisclosed sponsored content.</li></ul>" +
        "<h2>9. Reader privacy</h2><p>Tools on this site run in your browser. Where you choose to save a result or subscribe, we store only what the form shows, and we explain it in the " +
        "<a href='../../privacy.html'>privacy notice</a>.</p>",
      faq: [
        { q: "Who has final say over a ranking?", a: "<p>The editor-in-chief, after expert review. Commercial staff are not in that loop.</p>" },
        { q: "How often are pages updated?", a: "<p>Pricing and comparison pages at least quarterly; regulation-linked pages whenever the rule changes; evergreen explainers annually.</p>" },
        { q: "How do I report an error?", a: "<p>Email " + D.contactEmail + " with the URL and the correction. We aim to respond within three business days.</p>" }
      ],
      related: ["review-methodology", "disclosures"],
      cta: { title: "See the scoring rubric", text: "Our review methodology sets out the exact criteria and weights behind every comparison table.", btn: "Read the methodology", href: "review-methodology" }
    },

    "review-methodology": {
      title: "Review methodology",
      h1: "How we score and compare " + D.reviewObject,
      section: "About",
      dek: "The rubric, weights, data sources and disqualifiers behind every " + B + " comparison table.",
      eyebrow: "Methodology",
      answer: "We score each option out of 100 across " + (D.rubric || []).length + " weighted criteria, using published documentation, hands-on or practitioner checks, and dated pricing. Scores are recalculated every quarter and whenever a provider makes a material change.",
      body:
        "<h2>Scoring criteria and weights</h2>" +
        "<table><thead><tr><th>Criterion</th><th>Weight</th><th>What we look at</th></tr></thead><tbody>" +
        (D.rubric || []).map(function (r) { return "<tr><td><strong>" + r.name + "</strong></td><td>" + r.weight + "</td><td>" + r.what + "</td></tr>"; }).join("") +
        "</tbody></table>" +
        "<h2>How we gather evidence</h2><ul>" + (D.evidence || []).map(function (e) { return "<li>" + e + "</li>"; }).join("") + "</ul>" +
        "<h2>Automatic disqualifiers</h2><p>An option is excluded from a &ldquo;best&rdquo; list, regardless of score, if any of the following apply:</p><ul>" +
        (D.disqualifiers || []).map(function (e) { return "<li>" + e + "</li>"; }).join("") + "</ul>" +
        "<h2>Why there is no single winner</h2><p>We publish best-for segments rather than one universal champion, because the right choice depends on size, risk profile, jurisdiction and budget. " +
        "A table that crowns one option for everybody is usually optimised for commissions, not for readers.</p>" +
        "<h2>Conflicts of interest</h2><p>Where we have an affiliate or lead-generation relationship with a listed provider, the page carries an advertiser disclosure. " +
        "Compensation does not change scores or order. Some of the highest scorers in our tables pay us nothing.</p>" +
        "<h2>Re-review triggers</h2><ul><li>Published price or coverage change.</li><li>Regulatory action or a material outage/breach.</li>" +
        "<li>A pattern of reader-reported problems we can verify.</li><li>Quarterly scheduled refresh.</li></ul>" +
        "<h2>Limitations we will state plainly</h2><p>" + D.methodLimits + "</p>",
      faq: [
        { q: "Do you test everything yourselves?", a: "<p>Where hands-on testing is possible we do it and say so. Where it is not — a multi-year insurance claim, for example — we rely on documented terms, regulator data and practitioner interviews, and we label the evidence type.</p>" },
        { q: "Can a provider see its score before publication?", a: "<p>We send factual accuracy checks only. Providers do not get to negotiate scores or preview rankings.</p>" },
        { q: "Why did a ranking change?", a: "<p>Either the provider changed something material, or our rubric was updated. Both are noted in the page's update log.</p>" }
      ],
      related: ["editorial-policy", "disclosures"]
    },

    "disclosures": {
      title: "Advertiser and affiliate disclosure",
      h1: "How " + B + " makes money",
      section: "About",
      dek: "Plain-language disclosure of advertising, affiliate and lead-generation relationships, and the guardrails around them.",
      eyebrow: "Disclosure",
      answer: "This site is free to read because of display advertising, affiliate commissions, lead-generation fees and newsletter sponsorships. Those relationships pay for the research; they do not decide what we conclude.",
      body:
        "<h2>Our revenue sources</h2><table><thead><tr><th>Source</th><th>How it works</th><th>Editorial guardrail</th></tr></thead><tbody>" +
        "<tr><td>Display advertising</td><td>Programmatic ad slots served through an ad network in reserved page positions.</td><td>Advertisers cannot target or block individual articles by conclusion. Ad slots are size-reserved to avoid layout shift.</td></tr>" +
        "<tr><td>Affiliate links</td><td>If you click through and buy, we may earn a commission at no extra cost to you.</td><td>Rankings are set before any commercial check. Non-paying options are included and can win.</td></tr>" +
        "<tr><td>Lead generation</td><td>You may choose to request a quote or introduction; a partner pays us a fixed fee for a qualified request.</td><td>Nothing is shared until you explicitly consent on the form. We never sell browsing data.</td></tr>" +
        "<tr><td>Newsletter sponsorship</td><td>A sponsor can buy a labelled slot in " + D.newsletter.name + ".</td><td>Sponsored units are labelled &ldquo;Sponsored&rdquo; and sit outside the editorial section.</td></tr>" +
        "</tbody></table>" +
        "<h2>What we will never do</h2><ul><li>Sell a position in a ranking or a &ldquo;best&rdquo; badge.</li>" +
        "<li>Publish a review without disclosing a commercial relationship.</li>" +
        "<li>Hide a better non-paying option because it earns us nothing.</li>" +
        "<li>Pass your details to a partner without your explicit, unbundled consent.</li>" +
        "<li>Buy or sell links that pass ranking signals.</li></ul>" +
        "<h2>Network cross-links</h2><p>We sometimes link to sister publications in the " +
        "<a href='../../index.html'>Meridian Decision Network</a> when they cover an adjacent decision better than we do. Those links are editorial, chosen per article, " +
        "and carry no payment in either direction.</p>" +
        "<h2>Your choices</h2><p>You can use every calculator, checklist and comparison on this site without clicking a single commercial link, " +
        "and without giving us an email address. Consent preferences for advertising cookies can be changed at any time via the privacy controls described in our " +
        "<a href='../../privacy.html'>privacy notice</a>.</p>" +
        "<h2>Disclaimer</h2><p>" + D.disclaimer + "</p>",
      faq: [
        { q: "Does clicking an affiliate link cost me more?", a: "<p>No. The price is the same; the provider pays the commission out of its own acquisition budget.</p>" },
        { q: "Are all links affiliate links?", a: "<p>No. Most outbound links are citations to regulators, official data and provider documentation, and earn nothing.</p>" },
        { q: "How do I opt out of lead sharing?", a: "<p>Do not tick the consent box on a quote form, or email " + D.contactEmail + " and we will delete the record.</p>" }
      ],
      related: ["editorial-policy", "review-methodology"]
    },

    "contact": {
      title: "Contact " + B,
      h1: "Contact the " + B + " team",
      section: "About",
      dek: "Corrections, expert contributions, press enquiries, partnership questions and reader mail.",
      eyebrow: "Contact",
      answer: "Email <strong>" + D.contactEmail + "</strong>. We read everything. Corrections and reader questions are answered first; commercial enquiries take longer.",
      body:
        "<h2>Who to write to</h2><table><thead><tr><th>Topic</th><th>Where it goes</th><th>Typical reply time</th></tr></thead><tbody>" +
        "<tr><td>Correction or factual dispute</td><td>Editor-in-chief</td><td>3 business days</td></tr>" +
        "<tr><td>Reader question about a guide</td><td>Section editor</td><td>5 business days</td></tr>" +
        "<tr><td>Expert contribution or review offer</td><td>Standards editor</td><td>10 business days</td></tr>" +
        "<tr><td>Press, data requests and citation</td><td>Editor-in-chief</td><td>3 business days</td></tr>" +
        "<tr><td>Advertising and sponsorship</td><td>Commercial team (kept separate from editorial)</td><td>10 business days</td></tr>" +
        "</tbody></table>" +
        "<h2>Before you write about a ranking</h2><p>Please read the <a href='review-methodology.html'>review methodology</a> first. " +
        "If you believe a score is wrong, tell us which criterion and which evidence — that gets a much faster answer than a general complaint.</p>" +
        "<h2>Postal and legal</h2><p>Meridian Decision Media, editorial correspondence, c/o " + B + ". " +
        "Formal legal notices should be sent to the address published in our <a href='../../terms.html'>terms</a>.</p>" +
        "<h2>What we cannot do</h2><p>" + D.cannotDo + "</p>",
      leadForm: {
        title: "Send the editors a message",
        sub: "Corrections, questions and topic suggestions. Stored securely; never sold.",
        offer: "editorial-contact",
        numberLabel: "How urgent (1 = low, 5 = high)",
        consent: "I agree that " + B + " may email me a reply about this message.",
        cta: "Send message",
        steps: ["Your message is logged with a reference number.", "It is routed to the right editor by topic.", "You get a human reply — corrections first.", "If it results in a page change, we log it publicly on that page."],
        privacy: "We store your name, email and message only. No marketing emails unless you separately subscribe."
      },
      faq: [
        { q: "Do you accept guest posts?", a: "<p>Not as SEO placements. We do commission named experts with verifiable credentials and pay for the work.</p>" },
        { q: "Can I use your data or charts?", a: "<p>Yes, with attribution and a link to the source page. Email us if you want the underlying figures.</p>" },
        { q: "Will you review my product?", a: "<p>Possibly, if it fits our coverage and our rubric. Inclusion is never guaranteed and cannot be bought.</p>" }
      ],
      related: ["about", "editorial-policy"]
    }
  };
};
