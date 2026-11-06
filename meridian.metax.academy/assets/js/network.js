/* Meridian Decision Network — shared network registry.
   Cross-links between brands are CONTEXTUAL only (chosen per article in each
   site's data file). This registry exists so the hub page and the "about the
   network" disclosures stay accurate — it is not a sitewide link farm. */
/* --- Responsive Google AdSense configuration -------------------------------
   Single control point for the network's display advertising. Every ad
   container rendered by the site engine is size-reserved BEFORE the ad loads,
   so filling a slot does not move content (protects Core Web Vitals: CLS).

   reviewMode governs the pre-approval state of the whole network. While it is
   true, assets/js/ads.js loads adsbygoogle.js and the google-adsense-account
   meta tag (both needed for site-ownership verification) but creates no <ins>
   units, makes no adsbygoogle.push() calls, renders no "Advertisement" labels,
   and hides the reserved slots so pages show a clean editorial layout.

   Set reviewMode to false only after AdSense approval; all units then return
   automatically across every page. See ADSENSE-READINESS.md.                  */
window.ADS_CONFIG = {
  enabled: true,
  reviewMode: true,                    // pre-approval: loader only, no ad units
  client: "ca-pub-4463113802541266",   // AdSense publisher ID for this network
  slots: {
    leader: "1234567890",              // responsive leaderboard / top banner
    inline: "2345678901",              // responsive in-article unit
    mrec: "3456789012",                // responsive sidebar unit
    footer: "4567890123"               // responsive footer banner
  },
  // Draws a neutral "Advertisement" label behind a live unit. Ignored while
  // reviewMode is true, because empty boxes must never carry the label.
  showPlaceholderLabel: true
};

window.NETWORK = {
  name: "Meridian Decision Network",
  short: "Meridian",
  publisher: "Meridian Decision Media",
  founded: "2024",
  email: "editors@metax.academy",
  sites: [
    { slug: "shieldwise", brand: "ShieldWise", mark: "SW", color: "#14584f",
      topic: "Small business insurance",
      tagline: "Business insurance decisions, explained by risk people.",
      blurb: "Coverage explainers, cost benchmarks and renewal tooling for owners who buy their own policies." },
    { slug: "clausecraft", brand: "ClauseCraft", mark: "CC", color: "#3b3a7a",
      topic: "Founder legal & compliance",
      tagline: "Entity, contract and compliance basics for founders.",
      blurb: "Formation, contracts, trademarks and privacy compliance — with an attorney review workflow." },
    { slug: "ledgerlift", brand: "LedgerLift", mark: "LL", color: "#0f5c8c",
      topic: "SMB finance & banking",
      tagline: "Banking, credit and cash flow for small companies.",
      blurb: "Business accounts, cards, lending and payroll software compared with a documented methodology." },
    { slug: "hardenhq", brand: "HardenHQ", mark: "HQ", color: "#1f4d7a",
      topic: "SMB cybersecurity",
      tagline: "Practical security for companies without a security team.",
      blurb: "Non-technical hardening guides mapped to CISA and NIST-style baselines, plus vendor comparisons." },
    { slug: "stacksift", brand: "StackSift", mark: "SS", color: "#6b2f8a",
      topic: "B2B SaaS & AI tools",
      tagline: "Hands-on software reviews for small teams.",
      blurb: "CRM, automation, support and AI tooling reviewed against a repeatable test protocol." },
    { slug: "ratebeacon", brand: "RateBeacon", mark: "RB", color: "#1d4ed8",
      topic: "Credit & mortgages",
      tagline: "Borrowing decisions, with the math shown.",
      blurb: "Mortgages, refinancing, credit cards and debt payoff — calculators first, opinions second." },
    { slug: "benefitwell", brand: "BenefitWell", mark: "BW", color: "#0b6b5b",
      topic: "Health benefits & HSA",
      tagline: "Health coverage choices without the jargon.",
      blurb: "Plan types, HSA/FSA math, open enrollment planning and small-group benefits." },
    { slug: "wattroi", brand: "WattROI", mark: "WR", color: "#8a5a12",
      topic: "Home energy & property ROI",
      tagline: "What home upgrades actually pay back.",
      blurb: "Solar, heat pumps, insulation and roofing modelled as investments, plus a rebate tracker." },
    { slug: "credentialroi", brand: "CredentialROI", mark: "CR", color: "#7a1f3d",
      topic: "Certifications & career ROI",
      tagline: "Is that certificate worth the money?",
      blurb: "Certification, bootcamp and degree payback analysis using public salary and outcome data." },
    { slug: "nomadledger", brand: "NomadLedger", mark: "NL", color: "#0d5f6b",
      topic: "Business travel & expat finance",
      tagline: "Money and paperwork for people who work abroad.",
      blurb: "Travel insurance, expat coverage, international banking, visas and cross-border tax calendars." }
  ],
  get: function (slug) { return this.sites.filter(function (s) { return s.slug === slug; })[0]; }
};
