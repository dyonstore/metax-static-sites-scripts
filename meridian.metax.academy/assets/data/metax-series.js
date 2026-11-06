/* ===========================================================================
   MetaX.Academy — course series registry for the Meridian Decision Network.
   ---------------------------------------------------------------------------
   PROVENANCE AND STANDING
   This file is the MetaX layer of the network. It carries two things:

     1. window.METAX.notices  — the network's own honest defect register.
        Every notice here is a REAL, verified condition of this estate, not a
        decorative banner. Each is mapped to the harm in HX-000 that it
        instantiates, because a register that only names other people's harms
        is HX-15 conduct (ethics laundering) by the estate that publishes it.

     2. window.METAX.series   — ten course series, one per brand, each a
        table of contents only: 12 courses x subtitle + description.
        Branded MetaX.Academy. Author: Maher. These are TOCs awaiting
        full lesson build-out; they are labelled as such and not as shipped
        courses, per the TopTech house rule against "vapourware dressed as
        a course".

   HOUSE CONVENTIONS TAKEN FROM THE LIVE SITE (metax.academy, verified)
     - Unit of curriculum is a "series"; default cadence 12 courses x 6
       lessons; every series ships a 90-day capstone with a pre-registered
       hypothesis, a null, and a public post-mortem.
     - Lesson arc: What is / Why / How / Lab / Artifact / Scenario Assessment.
     - Six companion rails embedded in every series: compliance,
       accessibility, decay-awareness, falsifiability, kill criteria,
       unit economics.
     - Credential ladder: Portfolio -> Verified Outcomes -> Peer Review.
       "Master" is never conferred by completion.

   LICENSE POSTURE (stated, not assumed)
     The uploaded corpus is ML-2.3 / HX-000 v2026.09.4 + the Part H review.
     This estate is a licensee-side deployment. Under the review's own
     H.1-bis role split we are Author + Operator of this network. Under
     H.2-bis the Scale Gate places this deployment in the lowest tier
     (well under 10,000 distinct affected persons), so the seven absolutes
     apply in full and the remaining duties reduce to publishing a one-page
     Part H Statement. That statement is the `partHStatement` object below,
     and it names UNREMEDIED harms, per H.16.

   NOT LEGAL ADVICE. The corpus states, and this file repeats, that ML-2.3
   has not been reviewed by counsel or by a qualified scholar, and that the
   Hifz al-'Aql extension is a reasoned analogy (RAT-16), not a ruling.
   =========================================================================== */
(function () {
  "use strict";

  var METAX = {

    /* ---------------------------------------------------------------------
       Brand + provenance shown wherever a MetaX block renders.
       --------------------------------------------------------------------- */
    brand: {
      name: "MetaX.Academy",
      url: "https://metax.academy/",
      author: "Maher",
      curatorLine: "Curated by Maher · MetaX Universe v2026.08",
      license: "ML-2.3 · Work of Foundational Character",
      licenseUrl: "https://license.metax.academy/ml-2-3/",
      registerUrl: "https://license.metax.academy/hx-000/",
      pillars: [
        { name: "TopTech", what: "the operator curriculum for the machine-mediated internet" },
        { name: "Academies Community", what: "founding and governing new academies" },
        { name: "MacroLifeTach (Meta-X)", what: "living computational substrate research" }
      ],
      cadence: "12 courses × 6 lessons · What is · Why · How · Lab · Artifact · Scenario Assessment",
      capstone: "90-day capstone with a pre-registered hypothesis, a stated null, and a public post-mortem",
      rails: ["Compliance", "Accessibility", "Decay-awareness", "Falsifiability", "Kill criteria", "Unit economics"],
      ladder: ["Portfolio", "Verified Outcomes", "Peer Review"],
      status: "Table of contents published. Lessons not yet built — labelled as planned, never as shipped."
    },

    /* ---------------------------------------------------------------------
       PART H STATEMENT (H.16) — names unremedied harms, not only fixed ones.
       Tier 1 of the Scale Gate: under 10,000 affected persons.
       --------------------------------------------------------------------- */
    partHStatement: {
      roles: "Author and Operator (ML-2.3 §H.1-bis). This network has no Commissioner and no Integrator.",
      tier: "Scale Gate tier 1 — under 10,000 distinct affected persons in any twelve-month period (§H.2-bis).",
      applicable: [
        {
          harm: "HX-04",
          name: "The human as product",
          state: "Partly remedied",
          note: "Ad units are served network-wide, and contextual advertising is behavioural by default at the network level. Review mode currently renders no units at all, which is a temporary state rather than a design. No first-party profiling and no third-party analytics beyond the ad library itself."
        },
        {
          harm: "HX-09",
          name: "Metric colonisation",
          state: "Applicable, disclosed",
          note: "This network optimises for search visibility and revenue per thousand readers. Neither measures whether a reader made a better decision. We publish the omission rather than treating the metric as the outcome."
        },
        {
          harm: "HX-13",
          name: "Exclusion by default",
          state: "Unremedied",
          note: "All 245 pages require JavaScript for the interactive layer. A static pre-render exists on the 10 brand homepages only; 227 article shells are not yet pre-rendered."
        },
        {
          harm: "HX-15",
          name: "Ethics laundering",
          state: "Guarded against, not solved",
          note: "This statement names unremedied harms and links to the live defect list. If it ever contains only remediated items, it has become the harm it describes."
        },
        {
          harm: "HX-16",
          name: "Register closure",
          state: "Applicable",
          note: "Unnamed-harm review: the register does not reach the risk that a decision guide's corrective blocks become a house style applied where the research found nothing. We hold the block back on such pages rather than filling the slot."
        },
        {
          harm: "HX-25",
          name: "Linguistic flattening",
          state: "Unremedied",
          note: "The entire network is English-only. MetaX's language-authority rule makes Arabic authoritative for Meta-X and BCIA; nothing here is bilingual, and no per-language capability is claimed because none has been evaluated."
        }
      ],
      caveat: "ML-2.3 has not been reviewed by counsel in any jurisdiction, nor by a qualified scholar. The Ḥifẓ al-ʿAql extension is open question RAT-16, published as contested."
    },

    /* ---------------------------------------------------------------------
       NOTICES — the estate's real, verified conditions.
       kind: info | warn | error | fixed
       scope: "all" or a brand slug
       --------------------------------------------------------------------- */
    notices: [
      {
        id: "N-001",
        kind: "error",
        scope: "all",
        title: "The canonical host declared in our sitemap is not responding",
        body: "Every one of the 245 <code>&lt;loc&gt;</code> entries in <code>sitemap.xml</code>, and the <code>Sitemap:</code> line in <code>robots.txt</code>, declare <code>meridian.metax.academy</code> as canonical. That host currently returns <strong>HTTP 522</strong>, while the live pages self-canonicalise to the domain actually serving them. Search engines are being given two answers, one of them from a host that is down. The apex <code>metax.academy</code> is unaffected and resolves normally.",
        harm: "HX-11",
        harmName: "Fragility and the integral accident",
        status: "Open. Verified by fetch. Held pending a decision on which host is canonical, because rewriting 245 entries twice would churn the sitemap.",
        series: "credentialroi"
      },
      {
        id: "N-002",
        kind: "warn",
        scope: "all",
        title: "216 image files are referenced but not yet present",
        body: "Figure and card placeholders across the network resolve to files that have not been uploaded. They render as blank boxes with their captions intact, and the alt text carries the caption so every page remains readable without the image. This is a counted gap, not an estimate, and not a rendering fault.",
        harm: "HX-13",
        harmName: "Exclusion by default",
        status: "Open. Tracked as a user-side task.",
        series: "wattroi"
      },
      {
        id: "N-003",
        kind: "warn",
        scope: "all",
        title: "227 of 237 article pages are not yet crawlable without JavaScript",
        body: "The network is built as thin HTML shells whose content is assembled at runtime from a data model. A static pre-render layer exists and is proven on all 10 brand homepages, which carry real HTML and 177 crawlable internal links. The remaining 227 article shells are deliberately not pre-rendered yet: pre-rendering writes a content snapshot into each file, so it must run after the differentiation content is finished or every file is rewritten twice.",
        harm: "HX-13",
        harmName: "Exclusion by default",
        status: "Sequenced, not forgotten. Generator built and validated: 237 pages, 155,048 crawlable words.",
        series: "stacksift"
      },
      {
        id: "N-004",
        kind: "info",
        scope: "all",
        title: "Ad units are loaded but render nothing while under review",
        body: "The ad library and ownership meta tag are present, and review mode is on, so no ad element, no push call, no \"Advertisement\" label and no placeholder box is emitted anywhere in the network. This is deliberate — empty ad units on a site under review are a rejection cause. It also means the monetisation layer is currently unmeasured, which we state rather than imply.",
        harm: "HX-04",
        harmName: "The human as product",
        status: "Intentional and temporary. Reverts on approval.",
        series: "shieldwise"
      },
      {
        id: "N-005",
        kind: "info",
        scope: "all",
        title: "Our metrics do not measure whether you decided well",
        body: "This network is optimised for search visibility, session quality and revenue per thousand readers. None of those measure the thing these pages exist for, which is whether a reader made a better decision and could afford its consequences. We publish the gap instead of treating the metric as the outcome, and every page states who pays for the recommendation it carries.",
        harm: "HX-09",
        harmName: "Metric colonisation",
        status: "Structural. Disclosed rather than fixed, because the fix is not available to a publisher.",
        series: "ledgerlift"
      },
      {
        id: "N-006",
        kind: "fixed",
        scope: "all",
        title: "Internal build harnesses were publicly reachable",
        body: "The developer audit tools under <code>/tools/</code> are served by the same host as the content, and one was confirmed returning HTTP 200 to an anonymous request. They already carried <code>noindex,nofollow</code>; a <code>Disallow: /tools/</code> rule now also keeps them out of crawl budget and out of Search Console reports.",
        harm: "HX-12",
        harmName: "Digital amnesia and its inverse",
        status: "Fixed and verified.",
        series: "hardenhq"
      },
      {
        id: "N-007",
        kind: "info",
        scope: "all",
        title: "What this network is not qualified to tell you",
        body: "Every brand here publishes decision guides on money, law, insurance, health cover and tax. None of it is advice from a licensed professional in your jurisdiction, and no page knows your circumstances. Where a claim rests on a statute or regulation we cite the primary source so you can check us rather than trust us, and where the evidence is contested we say so.",
        harm: "HX-03",
        harmName: "Epistemic collapse",
        status: "Standing disclosure on every page.",
        series: "clausecraft"
      },
      {
        id: "N-008",
        kind: "info",
        scope: "all",
        title: "This page was drafted with machine assistance",
        body: "Research, drafting and verification on this network were performed with an AI assistant working under a named human curator who is answerable for every published claim. Primary sources were checked directly. Machine drafting is disclosed here rather than in a footer nobody reads.",
        harm: "HX-14",
        harmName: "Moral deskilling and delegated judgement",
        status: "Standing disclosure. The curator, not the tool, is the author.",
        series: "benefitwell"
      },
      {
        id: "N-009",
        kind: "warn",
        scope: "all",
        title: "The register this estate relies on is itself incomplete",
        body: "HX-000 v2026.09.4 — the register of harms that ML-2.3 Part H incorporates by reference — details eleven harms in full. HX-12, HX-13 and HX-14 exist only as rows in its summary table, and the document ends immediately after HX-11. We verified this directly in the copy we hold. It matters because <strong>ML-2.2 §H.3(a)(v) makes part of HX-14 an absolute prohibition</strong>, so a licensee is presently bound by an absolute whose content is not published. Filed upstream as DEF-2026-050, severity blocking.",
        harm: "HX-16",
        harmName: "Register closure and the named-harm ceiling",
        status: "Open, upstream. Not ours to fix; ours to state rather than rely on silently.",
        series: "nomadledger"
      },
      {
        id: "N-010",
        kind: "info",
        scope: "all",
        title: "No behavioural profiling of minors, at any scale",
        body: "The developmental-default duty applies at any scale — the Scale Gate does not reduce it. This network runs no first-party profiling, no third-party analytics, no engagement-duration optimisation, no streaks and no notification loops. There is nothing here that could be tuned against a child, which makes the position structural rather than a promise.",
        harm: "HX-24",
        harmName: "Developmental capture",
        status: "Structural compliance with the absolute at §H.3(a)(vi).",
        series: "ratebeacon"
      }
    ],

    /* ---------------------------------------------------------------------
       COURSE SERIES — ten series, one per brand.
       TOC ONLY: 12 courses each, subtitle + description.
       Author: Maher. Brand: MetaX.Academy.
       --------------------------------------------------------------------- */
    series: {

      /* ---------------- SHIELDWISE — business insurance ---------------- */
      shieldwise: {
        code: "MX-DS-01",
        title: "Underwriting Literacy for the Insured",
        subtitle: "Reading the policy that will decide whether your claim is paid",
        pillar: "TopTech · Decision Series",
        harms: ["HX-04", "HX-09", "HX-17", "HX-18"],
        promise: "The insured party is the only participant in an insurance transaction who has never read an underwriting manual. This series closes that asymmetry: by the end you can predict, from the wording, which of your claims would be declined and why.",
        capstone: "Take your own live policy schedule. Produce a written declination forecast — three scenarios you believe would be refused, each traced to a clause — plus a broker-remuneration statement. Pre-register the forecast before you ask the broker anything.",
        courses: [
          { n: 1, title: "The Transaction You Are Actually In", sub: "Who pays the broker, and what that buys", desc: "Commission, contingent commission and fee-based advice produce three different recommendation sets from identical facts. Reconstruct the incentive from the disclosure, and learn the one question that reveals it." },
          { n: 2, title: "Class Codes and the Price of a Sentence", sub: "How your business is described decides both premium and payment", desc: "The classification assigned at bind time sets the rate and, more consequentially, defines the operations covered. Misclassification is a leading reason a paid-up policy declines a legitimate claim." },
          { n: 3, title: "Limits That Are Not Limits", sub: "Sub-limits, aggregates, erosion and defence-within-limits", desc: "Three mechanisms shrink a headline limit before you reach it. Compute the limit that will actually be available on the day, and spot defence costs eating the indemnity." },
          { n: 4, title: "Occurrence, Claims-Made and the Retroactive Date", sub: "The trigger that decides whether time is on your side", desc: "Which trigger applies determines whether a policy bought today answers for work done last year. Retroactive dates, prior-acts cover, and the gap created by switching insurers." },
          { n: 5, title: "Exclusions as a Grammar", sub: "Carve-outs, write-backs and the exception to the exception", desc: "Exclusions are not a list but a nested structure with write-backs that restore cover. Parse the nesting, because the write-back is where the cover you were sold actually lives." },
          { n: 6, title: "Certificates, Additional Insureds and Waivers", sub: "Why the certificate your client demanded proves almost nothing", desc: "A certificate of insurance confers no rights; an additional-insured endorsement does. The distinction decides who defends whom and is routinely conflated in contract negotiation." },
          { n: 7, title: "Warranties, Conditions and the Truthful Wrong Answer", sub: "Four places a good-faith 'yes' voids your cover", desc: "Application answers can operate as warranties. Where a defensible but imprecise answer creates a rescission right, and how to answer so it survives a post-loss audit." },
          { n: 8, title: "The Claim as an Evidentiary Process", sub: "Notice, cooperation and the first forty-eight hours", desc: "Late notice is the cheapest declination available to an insurer. Build the notice discipline, the evidence pack and the privilege boundary before you need any of them." },
          { n: 9, title: "Reserving, Reservation of Rights and Bad Faith", sub: "What the insurer's letter is really telling you", desc: "A reservation-of-rights letter is a position, not a decision. Read the coverage analysis behind it, and learn where conduct crosses from hard bargaining into actionable territory." },
          { n: 10, title: "Captives, Retentions and Buying Less Insurance", sub: "When self-funding a layer beats transferring it", desc: "Deductibles, self-insured retentions and group captives priced against real loss history — including the arithmetic for when retaining more is cheaper, and the cashflow risk that creates." },
          { n: 11, title: "The Broker Conversation, Scripted", sub: "Eleven questions and the answers that should worry you", desc: "A reproducible interview surfacing remuneration, market access, classification reasoning and claims advocacy. What a good broker answers happily, and what evasion sounds like." },
          { n: 12, title: "Capstone — The Declination Forecast", sub: "Predict your own refusals before you file one", desc: "Assemble the artifact: a scenario-by-scenario forecast of which claims your current programme would decline, traced to wording, with remediation priced against premium. Peer-reviewed." }
        ]
      },

      /* ---------------- CLAUSECRAFT — founder legal ---------------- */
      clausecraft: {
        code: "MX-DS-02",
        title: "Founder Legal Self-Defence",
        subtitle: "The paperwork that decides whether you own what you built",
        pillar: "TopTech · Decision Series",
        harms: ["HX-16", "HX-17", "HX-18", "HX-20"],
        promise: "Most founder legal failure is not a bad contract; it is an absent one, or a template whose conditions were never met. This series builds the judgement to know which documents carry your risk and which are theatre — and where a template genuinely suffices.",
        capstone: "Produce a corporate hygiene file for your own entity: IP chain of title, signed assignments, a compliance calendar with statutory dates, and a written list of the three documents you are missing, priced by consequence.",
        courses: [
          { n: 1, title: "The Liability Shield Is Conduct, Not a Filing", sub: "What actually pierces the veil", desc: "Formation is the easy part. The shield is maintained by separation, documentation and observance — and lost by commingling, undocumented related-party dealings and missed filings." },
          { n: 2, title: "IP Chain of Title", sub: "The assignment that must exist before your first hire", desc: "Work-made-for-hire does not reach every contributor, and a contractor without an executed assignment may own what they built. Reconstructing a broken chain, and why acquirers look here first." },
          { n: 3, title: "Vesting Among Founders", sub: "Cliff, acceleration and the four-month departure", desc: "Vesting is not a venture ritual; it is the answer to a co-founder leaving early with a large holding. Structures, triggers, and the tax timing that catches people out." },
          { n: 4, title: "The NDA, Honestly Assessed", sub: "Why the signature is evidence and not protection", desc: "Trade-secret status is conditional on your own conduct across the whole life of the information, so an inconsistent NDA programme can weaken the claim it was meant to support." },
          { n: 5, title: "Contracts That Get You Paid", sub: "Scope, acceptance, payment triggers and the change order", desc: "Most payment disputes are scope disputes with a payment symptom. Draft acceptance criteria and change-order mechanics that make the invoice unarguable." },
          { n: 6, title: "Limitation, Indemnity and the Risk You Just Accepted", sub: "Reading the clauses that size your worst day", desc: "Caps, carve-outs from caps, mutual versus one-way indemnities, and consequential-loss exclusions — with a method for pricing a term you are asked to accept." },
          { n: 7, title: "Worker Classification Across Four Tests", sub: "Why one worker can be two things at once", desc: "Tax, wage-and-hour, unemployment and state-specific standards can each reach a different answer on identical facts. The real audit triggers are an unemployment claim and an injury." },
          { n: 8, title: "Terms of Service That Hold", sub: "Acceptance mechanics, auto-renewal law and unilateral change", desc: "Contract formation online, renewal disclosure duties, and drafting a change-of-terms clause that is enforceable rather than merely present." },
          { n: 9, title: "Trademark as an Operating Decision", sub: "Clearance, classes, use and the maintenance you will forget", desc: "Entity-name approval and domain availability confer no trademark rights. Clearance standards, specimen requirements, declarations of use, and audit exposure." },
          { n: 10, title: "Personal Data as a Liability Class", sub: "Minimisation as legal strategy, not compliance decoration", desc: "The cheapest privacy posture is not collecting it. Map what you hold, why, for how long, and what a subject request would cost you to answer today." },
          { n: 11, title: "Buying Legal Work Well", sub: "Where DIY is correct, and where it is negligence", desc: "A per-task split: what to do yourself, what to template, what needs a licensed attorney in your jurisdiction, and how to brief one so the hour is not wasted." },
          { n: 12, title: "Capstone — The Hygiene File", sub: "The document set an acquirer or lender will ask for", desc: "Assemble and peer-review the file: chain of title, assignments, compliance calendar, and a costed list of gaps. Pre-register which gap you believe is most expensive, then test it." }
        ]
      },

      /* ---------------- LEDGERLIFT — small business finance ---------------- */
      ledgerlift: {
        code: "MX-DS-03",
        title: "The Cost of Money",
        subtitle: "Pricing credit, payments and your own books in comparable units",
        pillar: "TopTech · Decision Series",
        harms: ["HX-04", "HX-09", "HX-17", "HX-18"],
        promise: "Small-business finance is quoted in units chosen to prevent comparison. This series teaches you to convert every offer into the same number, and to recognise the four contract mechanisms that cost more than the rate does.",
        capstone: "Convert three live financing or payment offers into a single comparable annualised cost, including every fee and the lien position. Publish the method and the arithmetic, and have a peer attempt to break it.",
        courses: [
          { n: 1, title: "Interest Rate, Simple Interest, Factor Rate, APR", sub: "Four numbers that are not the same number", desc: "The conversion arithmetic, done by hand, for each quoting convention in the market — including where a factor rate conceals an annualised cost several times its face value." },
          { n: 2, title: "The Payment Schedule Is the Product", sub: "Daily, weekly and fixed-total repayment against real cashflow", desc: "Two facilities with identical cost can differ in survivability. Model the schedule against your own receipts and find the week it breaks." },
          { n: 3, title: "The UCC-1 and What It Costs You Later", sub: "How a cheap facility disqualifies you from a cheaper one", desc: "A blanket lien on all assets is a term, not a formality. Read filings, negotiate scope, and sequence borrowing so the first lender does not price the second." },
          { n: 4, title: "Lines of Credit, Committed and Otherwise", sub: "Available capacity, rate floors and the draw fee", desc: "The difference between a committed facility and an available one appears exactly when you need it. Rate floors capture rises and not cuts; annualise the draw fee." },
          { n: 5, title: "Covenants as Default Triggers", sub: "The ratio you will breach in a good quarter", desc: "Financial and affirmative covenants, cure rights and cross-default — and how to negotiate headroom before signing rather than a waiver afterwards." },
          { n: 6, title: "Merchant Services Arithmetic", sub: "Flat-rate versus interchange-plus, with the breakeven computed", desc: "Compute your own crossover point from real average ticket and mix. Surcharging rules, the debit carve-out, and the conversion loss nobody quotes." },
          { n: 7, title: "The Four Contract Mechanisms", sub: "Term, early termination, equipment lease, reserve", desc: "Payment contracts cost more through structure than through rate. Each mechanism, what it is for, and the wording that makes it survivable." },
          { n: 8, title: "Invoice Finance and Factoring", sub: "Recourse, reserve, notification and the effective rate", desc: "Converting a discount fee into an annualised cost, and understanding what notification does to the customer relationship you rely on." },
          { n: 9, title: "Books an Underwriter Will Believe", sub: "Reconciliation as distinct from categorisation", desc: "A bank feed can categorise a duplicated transaction perfectly. Reconcile against the institution's own statement, book processor deposits gross, and isolate owner activity in equity." },
          { n: 10, title: "Business Credit, Honestly", sub: "Asymmetric reporting and the personal guarantee", desc: "What builds a commercial file, what reaches your consumer file, and why a business card is invisible while it helps you and visible when it hurts you." },
          { n: 11, title: "The Internal Capital Option", sub: "Doing nothing, priced properly", desc: "Collections discipline, deposit terms, supplier terms and pricing produce capital at no interest — the option every financing comparison omits because nobody earns a fee on it." },
          { n: 12, title: "Capstone — One Comparable Number", sub: "Three offers, one unit, published method", desc: "Produce the comparison artifact with full arithmetic, lien analysis and a schedule stress test. Peer review targets the method rather than the conclusion." }
        ]
      },

      /* ---------------- HARDENHQ — SMB security ---------------- */
      hardenhq: {
        code: "MX-DS-04",
        title: "Security for the Party That Cannot Hire a SOC",
        subtitle: "Controls that survive contact with a small business",
        pillar: "TopTech · Decision Series",
        harms: ["HX-05", "HX-11", "HX-15", "HX-18"],
        promise: "Most security guidance for small companies is enterprise guidance with the budget removed. This series ranks controls by loss prevented per hour spent, and is explicit about the three functions you cannot outsource at any price.",
        capstone: "Publish a dependency map naming single points of failure, exercise a non-digital fallback for one critical function, and test an incident runbook in a tabletop with someone who has not read it.",
        courses: [
          { n: 1, title: "The Procedural Controls That Cost Nothing", sub: "Ordered by loss prevented, not by vendor category", desc: "Payment callback verification, joiner-mover-leaver discipline and an asset inventory each prevent more measured loss than any product you could buy this quarter." },
          { n: 2, title: "Identity Is the Perimeter", sub: "Why joiner-mover-leaver is the real control", desc: "Most compromise originates in access that outlived its purpose. Build a leaver process that executes in hours and evidences itself." },
          { n: 3, title: "MFA That Is Actually Enforced", sub: "The bypass inventory beyond legacy protocols", desc: "App passwords, existing OAuth grants, sessions predating enforcement and rollout exclusions each authenticate without a second factor. Verify by attempting authentication, not by reading a console." },
          { n: 4, title: "Email: What Authentication Defends", sub: "DMARC's real scope, and the two attacks it never touches", desc: "SPF, DKIM and DMARC validate From-header alignment. Lookalike domains and compromised supplier mailboxes pass every check, so build the controls that address those instead." },
          { n: 5, title: "The Help Desk Is a Control", sub: "Hardening the one process designed to be bypassed on request", desc: "Pre-held verification channels, questions an attacker cannot read from a mailbox, and a deliberately slower privileged-reset path." },
          { n: 6, title: "Backups, Split Three Ways", sub: "Existence, isolation and restore duration are different questions", desc: "An untested backup is a belief. Immutability, offline copies, and measuring restore time for the systems that actually stop the business." },
          { n: 7, title: "Ransomware: The First Two Hours", sub: "Isolate, do not power off — and who to call first", desc: "Memory state decides scope determination. Insurer hotline before your IT provider, halt backup rotation, rebuild identity first, and treat ransom as a sanctions and counsel process." },
          { n: 8, title: "Logging You Can Afford to Keep", sub: "Retention checked by licence tier before an incident", desc: "The evidence window that answers 'what else was accessed' is a licensing decision made months earlier. Choose it deliberately rather than discovering it mid-incident." },
          { n: 9, title: "Buying Managed Security", sub: "The four service levels hiding behind the word 'response'", desc: "Notification, investigation, approved containment and unilateral containment are priced alike and differ enormously. Get the containment authority in writing." },
          { n: 10, title: "Cyber Insurance as a Control Audit", sub: "Which answers are declinations, prices and warranties", desc: "Application questions operate as warranties. Four places a truthful 'yes, we have MFA' becomes a false statement, and how to answer defensibly." },
          { n: 11, title: "Questionnaires and Attestation Without Theatre", sub: "An attestation over an elapsed period, not a certificate", desc: "What a SOC 2 report actually is, why the observation window cannot be compressed, and the bridge letter that stalls deals in month nine." },
          { n: 12, title: "Capstone — Dependency Map and Exercised Fallback", sub: "The artifact the dependency duty asks for", desc: "Publish the map with single points of failure, exercise one non-digital fallback under simulated failure, and record what broke. Peer-reviewed against the safe harbour." }
        ]
      },

      /* ---------------- STACKSIFT — SaaS buying ---------------- */
      stacksift: {
        code: "MX-DS-05",
        title: "Software Procurement for Small Teams",
        subtitle: "Requirements, meters, and the export you will need at renewal",
        pillar: "TopTech · Decision Series",
        harms: ["HX-07", "HX-17", "HX-18", "HX-20"],
        promise: "Feature parity at the small-team tier is close to total, so feature grids discriminate on things that will not affect you. This series moves the decision to data model, metering and exit — the three variables that decide what you pay in year three.",
        capstone: "Run a real procurement to the protocol: written requirements before any demo, identical-task trials, a verified sample export from the incumbent, and a renewal calendar built from your own contract's notice window.",
        courses: [
          { n: 1, title: "Requirements Before Demos", sub: "Who defines success, and why order decides it", desc: "A demo before written requirements hands the definition of success to the vendor. Produce a requirement set a salesperson cannot reshape." },
          { n: 2, title: "The Default Object Model", sub: "The selection variable a feature grid cannot express", desc: "Every tool has an opinion about objects. Sketch how you actually work, compare it against each product's defaults, and price required customisation as lock-in." },
          { n: 3, title: "Three Incompatible Meters", sub: "Seats, tokens and credits cannot be compared directly", desc: "Convert each to cost per completed unit of work. Hard spend caps, retry-loop exposure, and the second meter most buyers never see." },
          { n: 4, title: "Trials That Produce Evidence", sub: "The identical-task protocol", desc: "Run the same real task through every shortlisted tool, timed, by the person who will use it — and record it so the comparison survives a champion's enthusiasm." },
          { n: 5, title: "Per-Deal Update Cost", sub: "Adoption is set at configuration, not at training", desc: "Measure the seconds a tool imposes on the person with least incentive to pay them, and trace the compounding loop from slipped updating to worthless reports." },
          { n: 6, title: "What an Export Leaves Behind", sub: "Email history, attachments, timeline, relationships", desc: "An export button is not portability. Require a real sample export from the incumbent, and treat completeness as your renewal leverage." },
          { n: 7, title: "The Entry Tier's Real Price", sub: "Which specific limit will force your upgrade", desc: "Record caps, automation counts, reporting depth and API allowances bind after your data is in. Price the tier you will be on in eighteen months." },
          { n: 8, title: "Reading the Order Form and the MSA", sub: "Uplift, auto-renewal, notice method and liability", desc: "The short document everyone reads incorporates the long one nobody does. The four terms worth more than the discount." },
          { n: 9, title: "The Renewal Is a Calendar Problem", sub: "Notice windows, delivery method, and notice as leverage", desc: "Your leverage is set by your own contract's dates. Serving notice inside the window makes termination the default and renewal the negotiation." },
          { n: 10, title: "Automation Without a Fragile Machine", sub: "Idempotency, replay, and the meter you just attached", desc: "Duplicate webhook delivery is normal rather than exceptional. Non-transactional partial writes, retry consumption, and the credential the automation runs under." },
          { n: 11, title: "Spend Discovery and the Register", sub: "One sheet: tool, owner, cost, renewal date, notice period, purpose", desc: "The artefact every spend audit is built on, and why the offboarding case is stronger than the waste case." },
          { n: 12, title: "Capstone — A Documented Procurement", sub: "Requirements, trials, export test, renewal calendar", desc: "Ship the full procurement record including the option you rejected and why. Pre-register your expected winner before trials begin, then report whether you were wrong." }
        ]
      },

      /* ---------------- RATEBEACON — mortgages and credit ---------------- */
      ratebeacon: {
        code: "MX-DS-06",
        title: "Borrowing Against a Home, Understood",
        subtitle: "Pricing, thresholds, and the rights that expire on a date",
        pillar: "TopTech · Decision Series",
        harms: ["HX-06", "HX-09", "HX-13", "HX-18"],
        promise: "Mortgage content is written to generate a lead, so it stops at the rate. This series covers what happens after the offer: tolerance buckets, cancellation thresholds, and the deadlines that waive your rights by silence.",
        capstone: "Reconstruct a real or specimen closing: compare Loan Estimate to Closing Disclosure line by line, assign every changed line to its tolerance bucket, and identify any overage that must be cured.",
        courses: [
          { n: 1, title: "A Rate Is Meaningless Without Four Assumptions", sub: "Score, LTV, lock period, points and occupancy", desc: "Quoted rates assume a borrower profile you may not match. Reconstruct the assumptions behind any advertised number before comparing it with another." },
          { n: 2, title: "Pre-Approval Is a Ceiling, Not Affordability", sub: "And it stays live until closing", desc: "What conditional approval means, what re-underwriting checks days before completion, and why financing furniture can reprice the loan." },
          { n: 3, title: "The Deposit as Three Interacting Variables", sub: "LTV thresholds where pricing steps rather than slides", desc: "Down payment as both a debt-to-income lever and a pricing lever, and why the cheapest structure is often the nearest threshold rather than the minimum or twenty per cent." },
          { n: 4, title: "Sourcing and Seasoning", sub: "Why the gift letter is not the whole requirement", desc: "Funds must be traceable, not merely legitimate. Untraceable cash is excluded, and each unexplained deposit needs its own documentation." },
          { n: 5, title: "Reserves as an Underwriting Test", sub: "Months of the full new payment, surviving closing", desc: "Reserves are measured in months of principal, interest, taxes, insurance and dues, after closing costs — and retirement balances often count at a discount without withdrawal." },
          { n: 6, title: "Mortgage Insurance: Three Termination Mechanisms", sub: "Conditional request, scheduled termination, midpoint backstop", desc: "The 80% request and the 78% automatic termination are different tests with different conditions, and extra principal moves only one of them." },
          { n: 7, title: "Closing Costs in Three Buckets", sub: "Zero tolerance, ten per cent aggregate, unrestricted", desc: "Which costs cannot increase, which may move within an aggregate, and which are unconstrained — plus what a cure looks like when a bucket is exceeded." },
          { n: 8, title: "The Three-Day Window as Leverage", sub: "Reading the Closing Disclosure before you are at the table", desc: "The waiting period exists so you can read it. What changes restart the clock, and where a prepayment penalty or balloon feature becomes visible in plain language." },
          { n: 9, title: "Points, Break-Even and Real Tenure", sub: "Against how long you will actually hold the loan", desc: "Break-even arithmetic compared with realistic holding period, and the alternative use of the same cash to cross an LTV threshold." },
          { n: 10, title: "Utilisation Is Continuous", sub: "Statement dates, limit increases and closure effects", desc: "Why 'carry a small balance' is false, why utilisation is not a thirty-per-cent threshold, and what closing a card does immediately versus later." },
          { n: 11, title: "Refinance Arithmetic Without the Rule of Thumb", sub: "Total cost, reset amortisation and the honest break-even", desc: "Rate-drop rules of thumb fail because they ignore closing costs, remaining term and restarted amortisation. Compute it properly instead." },
          { n: 12, title: "Capstone — The Reconstructed Closing", sub: "Line by line, bucket by bucket", desc: "Produce the comparison artifact with every changed line assigned to its tolerance category and a written challenge for any overage. Peer-reviewed." }
        ]
      },

      /* ---------------- BENEFITWELL — health benefits ---------------- */
      benefitwell: {
        code: "MX-DS-07",
        title: "Cost-Sharing Literacy",
        subtitle: "What you will actually pay, and which limits are not limits",
        pillar: "TopTech · Decision Series",
        harms: ["HX-06", "HX-09", "HX-13", "HX-16"],
        promise: "Health plan explainers teach a clean sequence that real bills do not follow, because a household runs several accumulators on calendars that do not align. This series teaches the accumulator model and the exceptions that survive it.",
        capstone: "Model your own household's realistic worst year: which accumulators apply, which charges sit outside each, the embedded individual maximum, and the timing decisions available before the reset.",
        courses: [
          { n: 1, title: "The Accumulator Model", sub: "Not one deductible, several meters", desc: "Deductible, coinsurance, out-of-pocket maximum, pharmacy accumulator and family structures as separate meters — and why the clean sequence misleads." },
          { n: 2, title: "What the Annual Limit Must Cover", sub: "And what a plan may lawfully exclude", desc: "Only essential health benefits must accumulate. Adult dental, vision and non-covered services can sit outside the maximum entirely." },
          { n: 3, title: "The Embedded Individual Maximum", sub: "The family-plan rule worth thousands", desc: "No single person on a family plan can be required to pay more than the individual annual limitation, whatever the family cap appears to say." },
          { n: 4, title: "Three Clocks", sub: "Plan year, calendar year, FSA year", desc: "They frequently differ. Accumulators credit on claim processing rather than date of service, and they are lost on a job change." },
          { n: 5, title: "Preventive Until It Is Diagnostic", sub: "How a billing code removes your protection", desc: "The preventive exemption follows the code, not your intention. Screening that becomes investigation, plus separately billed anaesthesia and pathology." },
          { n: 6, title: "Network as the Dominant Variable", sub: "Out-of-network charges outside the maximum", desc: "An in-network facility does not guarantee an in-network clinician. Balance billing distinguished from cost sharing, and where it is now prohibited." },
          { n: 7, title: "Formulary Before Premium", sub: "Tiers, prior authorisation and specialty coinsurance", desc: "For anyone on a maintenance drug the formulary decides annual cost more than the premium does. Read it before you enrol, not after." },
          { n: 8, title: "Subsidy Mechanics and Reconciliation", sub: "Silver-only cost-sharing reduction, and exposure at filing", desc: "Why a metal-tier comparison misleads when a cost-sharing reduction attaches to one tier only, and how estimated income creates a reconciliation liability." },
          { n: 9, title: "High-Deductible Plans and the HSA", sub: "Eligibility disqualifiers people trip over", desc: "A spouse's general-purpose FSA, Medicare enrolment backdating, and the last-month testing period — four ways eligibility fails quietly." },
          { n: 10, title: "The HSA as a Long Instrument", sub: "No deadline to reimburse, and post-65 treatment", desc: "Receipt preservation as the strategy, custodian fee structures, the crossover between flat and percentage charges, and spouse versus non-spouse beneficiary treatment." },
          { n: 11, title: "Small-Group Cover as an Employer", sub: "Contribution structure and the reimbursement alternative", desc: "Employee-only rate versus dependant tiers, percentage versus fixed-dollar contribution, and how a reimbursement allowance interacts with premium tax credits." },
          { n: 12, title: "Capstone — The Worst-Year Model", sub: "Your household, every meter, timing included", desc: "Produce the model with each accumulator, the charges outside it, and a written timing plan. Pre-register your expected total, then compare against a real claims year." }
        ]
      },

      /* ---------------- WATTROI — home energy ---------------- */
      wattroi: {
        code: "MX-DS-08",
        title: "Home Energy Retrofit, Sequenced",
        subtitle: "Envelope before equipment, and the regional answer",
        pillar: "TopTech · Decision Series",
        harms: ["HX-09", "HX-10", "HX-20", "HX-25"],
        promise: "Retrofit content sells the equipment with the highest margin, in the order that suits the installer. This series teaches the physical sequence, the load calculation that must precede any quote, and how to compute the answer for your own climate and tariff.",
        capstone: "Produce a sequenced retrofit plan for a real building: measured envelope baseline, load calculation after envelope work, equipment selection with switchover point, and a commissioning checklist.",
        courses: [
          { n: 1, title: "Measure the Building First", sub: "Blower door, thermal survey and the baseline", desc: "Without a measured baseline every saving figure afterwards is a projection. What to measure, what it costs, and what the numbers actually mean." },
          { n: 2, title: "Envelope Before Equipment", sub: "Why sequence changes the equipment you need", desc: "Air sealing and insulation reduce the load, which reduces the plant. Doing equipment first locks in oversizing you then pay for twice." },
          { n: 3, title: "Load Calculation, Not Rule of Thumb", sub: "And why oversizing is the industry default", desc: "Room-by-room calculation after envelope work. Oversized equipment short-cycles, dehumidifies poorly, and costs more both to buy and to run." },
          { n: 4, title: "Rated Efficiency Is Not a Cost Conclusion", sub: "COP, SEER and HSPF against your climate and tariff", desc: "Rated performance is measured under conditions that are not yours. Convert a rating into an operating cost using local temperatures and real tariffs." },
          { n: 5, title: "Low-Temperature Capability Versus Capacity", sub: "The distinction that decides your backup", desc: "Operating at low temperature is not the same as delivering design capacity there. Backup type, switchover point, and the economics of each." },
          { n: 6, title: "Water Heating First", sub: "The retrofit with the shortest payback in most homes", desc: "Heat pump water heating usually pays back faster than whole-house conversion, and is routinely sequenced last because the margin is smaller." },
          { n: 7, title: "Solar Sized to Consumption", sub: "Tariff structure, export rates and self-consumption", desc: "Array sizing driven by your load profile and tariff rather than by roof area, and why export compensation structure changes the optimal size." },
          { n: 8, title: "Batteries: Backup or Arbitrage", sub: "Two different products sold as one", desc: "Sizing for outage resilience and sizing for tariff arbitrage produce different systems. Degradation, depth of discharge, and honest payback." },
          { n: 9, title: "Incentives as Conditions", sub: "Eligibility, stacking, timing and recapture", desc: "Incentives change the arithmetic and carry conditions — installer certification, equipment lists, occupancy periods and claw-backs." },
          { n: 10, title: "Embodied Cost and Longevity", sub: "Why replacement cycle dominates lifetime impact", desc: "For most equipment the majority of lifetime impact is embodied in manufacture, which makes longevity and repairability the primary environmental lever." },
          { n: 11, title: "Commissioning Decides Performance", sub: "The step that determines whether any of it works", desc: "Refrigerant charge, airflow, controls and balancing. Uncommissioned equipment underperforms its rating by margins that dwarf differences between models." },
          { n: 12, title: "Capstone — The Sequenced Plan", sub: "Measured, calculated, staged and commissioned", desc: "Publish the plan with baseline, load calculation, staging logic and commissioning checklist. Pre-register predicted savings, then measure them." }
        ]
      },

      /* ---------------- CREDENTIALROI — education ROI ---------------- */
      credentialroi: {
        code: "MX-DS-09",
        title: "Credential Return, Measured",
        subtitle: "Testing a provider's outcome claim before you pay for it",
        pillar: "TopTech · Decision Series",
        harms: ["HX-02", "HX-09", "HX-15", "HX-16"],
        promise: "Provider outcome data is inflated twice — by survey self-selection and by reporting selection effects as causation. This series teaches you to test the claim yourself, and to price the costs no brochure includes.",
        capstone: "Produce a full-cost, full-alternative assessment of one credential you are considering: tuition plus forgone earnings, retakes, renewals and financing, tested against your own count of local demand.",
        courses: [
          { n: 1, title: "How Outcome Claims Are Constructed", sub: "Response rates, denominators and the reported cohort", desc: "Find the denominator. Graduates who did not respond, were excluded, or were never counted decide the headline number more than the programme does." },
          { n: 2, title: "Selection Versus Effect", sub: "The people who enrol were already different", desc: "Motivated, credentialed, employed applicants would have done better anyway. What a claim would need to look like to count as causal evidence." },
          { n: 3, title: "Count the Demand Yourself", sub: "The afternoon job-posting audit", desc: "A reproducible method: count postings naming the credential in your market, note whether it is required or merely preferred, and record the salary bands actually advertised." },
          { n: 4, title: "The Full Cost", sub: "Forgone earnings, retakes, renewals, financing", desc: "Tuition is a minority of the cost for most working adults. Build the complete figure, including the exam you may fail and the renewal you will owe." },
          { n: 5, title: "Signal, Skill or Licence", sub: "Three products sold as one word", desc: "A licence is a legal prerequisite, a signal is a screening token, a skill is a capability. Only one of the three survives an employer changing how it screens." },
          { n: 6, title: "Cheaper Substitutes, Priced", sub: "Four alternatives that reach the same screen", desc: "Employer-funded training, vendor free tiers, portfolio evidence and internal mobility — with break-even bands where each beats paying tuition." },
          { n: 7, title: "Accreditation and Transferability", sub: "What the word means and what it does not promise", desc: "Institutional versus programmatic accreditation, credit transfer in practice, and why a well-marketed programme can still be a dead end." },
          { n: 8, title: "Income-Share and Deferred Payment", sub: "Reading the agreement as a financing product", desc: "Caps, floors, payment windows, and what happens if you leave the field. Convert it to an effective cost and compare it against a loan." },
          { n: 9, title: "Cognitive Offloading and Real Competence", sub: "Why a credential can certify a skill you no longer have", desc: "Competence transferred to a tool atrophies, and the atrophy is discovered at failure. Designing practice that retains capability rather than only certifying it." },
          { n: 10, title: "Employer-Side Reality", sub: "How screening actually happens", desc: "What a hiring manager does with a credential in the first thirty seconds, and where evidence of work outperforms a certificate." },
          { n: 11, title: "The Pre-Registered Decision", sub: "State the threshold before you look at the brochure", desc: "Write down the demand count, salary delta and payback period at which you would proceed — then gather evidence and hold yourself to it." },
          { n: 12, title: "Capstone — The Assessment", sub: "Full cost, own demand count, four alternatives", desc: "Publish the assessment with method and arithmetic. Peer review targets the demand count and the counterfactual, which are the parts most easily fooled." }
        ]
      },

      /* ---------------- NOMADLEDGER — expat and cross-border ---------------- */
      nomadledger: {
        code: "MX-DS-10",
        title: "Cross-Border Money and Reporting",
        subtitle: "Where information reporting and tax are separate duties",
        pillar: "TopTech · Decision Series",
        harms: ["HX-05", "HX-06", "HX-13", "HX-25"],
        promise: "The largest cross-border failures are not tax errors; they are missed information reports carrying penalties unrelated to tax owed. This series separates the two systems and teaches the day-count and residence evidence that decides both.",
        capstone: "Build a personal compliance map: residence position in every relevant jurisdiction with evidence, an information-reporting inventory by threshold, and a filing calendar distinguishing extension from payment deadlines.",
        courses: [
          { n: 1, title: "Two Separate Systems", sub: "Information reporting is not taxation", desc: "Reports can be due where no tax is owed, with penalties assessed on failure to report rather than on liability. Why this catches careful people." },
          { n: 2, title: "Thresholds, Aggregation and Signature Authority", sub: "Highest balance, not year-end balance", desc: "Aggregation across accounts, accounts you do not own but can sign on, and a highest-balance test that a single transfer can trip." },
          { n: 3, title: "Residence Is Factual, In Every Direction", sub: "Leaving is as evidenced as arriving", desc: "Residence tests, tie-breaker rules, and the fact that ceasing residence requires evidence too — plus host-country residence risk while you believe you are a visitor." },
          { n: 4, title: "The Day-Count Log", sub: "Contemporaneous evidence, kept before you need it", desc: "What a defensible log contains, why reconstruction after the fact fails, and how partial days and transit are treated." },
          { n: 5, title: "The Exclusion Is an Election", sub: "Earned income only, and no relief from self-employment tax", desc: "What the foreign earned income exclusion covers, what it does not, and why an election must be made rather than assumed." },
          { n: 6, title: "Credit Versus Exclusion", sub: "Choosing, and the mismatched foreign tax year", desc: "Foreign tax credit mechanics, carryover, and the timing problem when the foreign tax year does not align with your own." },
          { n: 7, title: "Treaties, Read Properly", sub: "Tie-breakers, saving clauses, and what a treaty cannot do", desc: "Treaty relief is specific and conditional, and a saving clause can remove the benefit you believed you had." },
          { n: 8, title: "Extension Is Not a Payment Deadline", sub: "The distinction that generates most penalty exposure", desc: "Filing extensions, automatic extensions for those abroad, and why interest runs from the original date regardless." },
          { n: 9, title: "Transfer Cost in Two Parts", sub: "The fee, and the rate margin nobody quotes", desc: "The advertised fee is usually the smaller cost. Compute the margin against the interbank rate and compare providers on total delivered amount." },
          { n: 10, title: "Banking Access and Exclusion", sub: "When compliance closes your account", desc: "De-risking, documentation demands, and the practical exclusion of mobile people from ordinary banking — with contingency planned before it happens." },
          { n: 11, title: "The Correction Route", sub: "Coming into compliance deliberately", desc: "Voluntary correction paths, what they require, and why professional representation is the right answer here rather than a blog post." },
          { n: 12, title: "Capstone — The Compliance Map", sub: "Residence, reporting inventory, filing calendar", desc: "Publish the map with evidence for each residence position and every reporting threshold tested. Peer review targets the evidence rather than the conclusion." }
        ]
      }
    }
  };

  window.METAX = METAX;
})();
