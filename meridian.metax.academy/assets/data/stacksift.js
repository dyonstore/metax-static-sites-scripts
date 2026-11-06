/* StackSift — B2B SaaS & AI tools. Content model. */
window.SITE_DATA = {
  slug: "stacksift",
  brand: "StackSift",
  mark: "SS",
  color: "#6b2f8a",
  tagline: "Software reviews for teams without a procurement department",
  description: "Hands-on reviews and buying guides for CRM, automation, support and AI tooling — tested against a published protocol, with contract and pricing traps named.",
  topicLong: "business software selection, SaaS contracts, spend control and AI tooling for small teams",
  ymylLabel: "Business operations",
  reviewObject: "SaaS platforms, automation tools and AI products",
  updated: "26 July 2026",
  defaultAuthor: "Dana Ferreira",
  defaultReviewer: "Owen Baptiste, CISA",
  contactEmail: "stacksift@metax.academy",
  disclaimer: "StackSift publishes general information about business software, not legal, security or procurement advice. Pricing, limits and features change frequently and vary by contract. Verify current terms with the vendor and involve a lawyer for any agreement you cannot walk away from.",
  disclosureText: "Some links to software vendors are affiliate or referral links, and some vendors advertise with us. Neither buys a place in a comparison, a score, or a position in a ranking.",
  legalLine: "StackSift is not a reseller, implementation partner or agent for any vendor reviewed.",
  footerAbout: "Independent, hands-on software reviews and buying guides for small teams: what a tool actually does, what it actually costs over three years, and what the contract says when you want to leave.",
  aboutDek: "Software reviews written by people who have had to migrate off the wrong tool.",
  aboutWhat: "Trial-based reviews run against a fixed test protocol; three-year total-cost models instead of per-seat headlines; contract and renewal guidance; vendor security review templates; and practical AI tooling coverage that separates the useful from the demo.",
  aboutDiff: [
    "We build a real workspace in every product we review — no vendor-guided demos.",
    "Every comparison publishes the rubric, the weights and the test date.",
    "We model three-year cost including implementation, integration and the tier you will be pushed onto.",
    "We read the order form and the master agreement, and we name auto-renewal and uplift clauses."
  ],
  cannotDo: "We cannot run your selection process, review your contract, or tell you which tool suits a workflow we have not seen. A short engagement with an independent consultant or your lawyer is cheaper than the wrong three-year commitment.",
  sourceStandards: [
    "Hands-on trials in a workspace we build ourselves, with the dates recorded.",
    "Published pricing pages, order forms, master service agreements and DPAs.",
    "Vendor status pages and incident history for reliability claims.",
    "Named interviews with operators who run the tool daily, not vendor-supplied references."
  ],
  methodLimits: "We test small-team configurations. Enterprise deployments with dedicated admins behave differently, and we say so rather than pretending our results generalise.",
  rubric: [
    { name: "Three-year total cost", weight: "25%", what: "Seats, tier jumps, add-ons, implementation, integration work and the annual uplift written into the contract." },
    { name: "Core job performance", weight: "25%", what: "How well the product does the single thing you are buying it for, measured on identical tasks." },
    { name: "Data portability and exit", weight: "15%", what: "Whether you can get your data out in a usable form, and what the contract says about termination." },
    { name: "Integration quality", weight: "15%", what: "Native integrations that survive real use, API limits, and whether automation needs a paid middleware layer." },
    { name: "Administration burden", weight: "10%", what: "Setup time, permission model, and how much ongoing admin a team without an IT person must absorb." },
    { name: "Security and compliance posture", weight: "10%", what: "Published certifications, SSO availability and tier, subprocessor transparency and breach history." }
  ],
  evidence: [
    "Building the same test workspace in each product: 25 records, two integrations, one automation, one report.",
    "Timing identical tasks rather than reporting impressions.",
    "Requesting an order form and reading the renewal and uplift terms.",
    "Exporting all data at the end of the trial and checking what is actually usable."
  ],
  disqualifiers: [
    "Pricing available only after a sales call, with no published list price.",
    "SSO sold only on an enterprise tier as a security tax.",
    "Contracts with automatic renewal and a notice window under 30 days.",
    "Export functions that omit attachments, history or custom fields."
  ],
  team: [
    { name: "Dana Ferreira", role: "Editor-in-chief", bio: "Spent nine years in revenue and business operations, including two CRM migrations she describes as avoidable. Writes selection and contract coverage.", focus: "CRM, procurement, contracts" },
    { name: "Kwame Osei", role: "Automation editor", bio: "Former solutions engineer; builds and breaks the automations we test. Covers workflow tooling and integration limits.", focus: "Automation, integrations, APIs" },
    { name: "Lena Fischbach", role: "AI tools writer", bio: "Applied-NLP background. Tests AI features against the boring tasks small teams actually need done.", focus: "AI tooling, support software" }
  ],
  reviewers: [
    { name: "Owen Baptiste, CISA", credential: "Certified Information Systems Auditor, 14 years in vendor risk", bio: "Reviews anything touching vendor security review, data handling or compliance claims." },
    { name: "Marisol Trent", credential: "Commercial contracts lawyer, technology procurement", bio: "Reviews contract, renewal and termination guidance for accuracy. Does not provide advice to readers." }
  ],
  newsletter: {
    name: "The Stack Review",
    pitch: "Monthly: one tool that earned its price, one that quietly raised it, and one automation worth stealing.",
    cadence: "monthly",
    cta: "Get the monthly review",
    magnet: "The software selection scorecard and three-year cost model (spreadsheet)"
  },
  nav: [
    { label: "Start here", page: "saas-buying-guide" },
    { label: "CRM", page: "crm-selection-guide" },
    { label: "Automation", page: "workflow-automation-guide" },
    { label: "AI tools", page: "ai-tools-for-small-business" },
    { label: "Compare", page: "best-crm-small-business" },
    { label: "Calculator", page: "saas-spend-calculator" }
  ],
  toolLinks: [
    { page: "saas-spend-calculator", label: "SaaS spend & three-year cost calculator", desc: "Model seats, tier jumps, implementation and annual uplift into the number the contract will actually cost." },
    { page: "software-selection-checklist", label: "Software selection checklist", desc: "The 32 checks to complete before you sign — requirements, trial, security, contract. Progress saves." }
  ],
  popular: ["crm-software-cost", "saas-contract-negotiation", "saas-management-platform-cost", "best-crm-small-business"],
  featured: ["saas-buying-guide", "crm-selection-guide", "workflow-automation-guide"],
  partners: [
    { slug: "hardenhq", why: "the security questions to put to a vendor before you sign" },
    { slug: "ledgerlift", why: "the finance stack that sits under the tooling" },
    { slug: "clausecraft", why: "the contract terms behind an order form" }
  ],
  clusters: [
    { kicker: "Cluster 1", name: "Buying software", desc: "Requirements, trials, pricing and the contract at the end of it.", pages: ["saas-buying-guide", "saas-contract-negotiation", "saas-renewal-playbook", "software-selection-checklist"] },
    { kicker: "Cluster 2", name: "CRM and customer tooling", desc: "Choosing, implementing and living with a CRM or help desk.", pages: ["crm-selection-guide", "saas-implementation-plan", "help-desk-software-guide", "best-crm-small-business"] },
    { kicker: "Cluster 3", name: "Automation and integration", desc: "Connecting tools without building a fragile machine.", pages: ["workflow-automation-guide", "best-automation-tools"] },
    { kicker: "Cluster 4", name: "AI, spend and risk", desc: "Using AI tools sensibly and keeping the subscription bill honest.", pages: ["ai-tools-for-small-business", "ai-policy-for-small-teams", "saas-spend-audit", "vendor-security-review"] }
  ],

  pages: {
    index: {
      title: "StackSift — hands-on B2B software and AI tool reviews for small teams",
      hero: {
        h1: "Buy the right software once, and read the contract before you sign it",
        lead: "Independent, trial-based reviews of CRM, automation, support and AI tooling — with three-year costs modelled and renewal traps named.",
        primary: { page: "saas-buying-guide", label: "Start with the buying guide" },
        secondary: { page: "saas-spend-calculator", label: "Model three-year cost" },
        trust: ["Every tool trialled in a workspace we build", "Rubric and test dates published", "Three-year cost, not per-seat headlines", "No paid placements"],
        stats: [
          { v: "3yr", l: "Cost horizon in every comparison" },
          { v: "32", l: "Checks in the selection checklist" },
          { v: "2 tools", l: "Spend calculator and selection checklist" },
          { v: "0", l: "Vendor-written or sponsored reviews" }
        ]
      },
      why: "<p>Software is sold on a monthly per-seat price and paid for over three years. The gap between those two numbers — tier jumps, add-ons, implementation, the integration you did not know was paid, the 7% annual uplift buried in clause 4 — is where small teams lose money.</p>" +
        "<p>StackSift closes that gap. We build a real workspace in every product, time identical tasks, request the order form, and publish the rubric we scored against along with the date we tested.</p>" +
        "<p>We are not a reseller and we do not take placement money. When the honest answer is that a spreadsheet is still fine, we write that instead.</p>"
    },

    "saas-buying-guide": {
      title: "How to buy business software without regretting it",
      h1: "Buying business software properly",
      section: "Pillar guide",
      eyebrow: "Pillar guide",
      dek: "Requirements before demos, trials that prove something, three-year cost models, and the contract terms that decide how much leverage you keep.",
      disclosure: true,
      answer: "Write requirements before you take a single demo, trial no more than three products against identical tasks, model <strong>three-year total cost</strong> rather than monthly per-seat price, and negotiate the renewal terms while you still have the leverage of not having signed.",
      body:
        "<h2>Requirements first, demos second</h2>" +
        "<p>A demo is a guided tour of what a product does well. If you arrive without written requirements, you will adopt the vendor's definition of the problem. Write down the five workflows the tool must handle, the integrations you cannot live without, and the two or three things you are deliberately not solving this year.</p>" +
        "<!--FIG:Requirements, shortlist, trial, contract: where small teams lose money-->" +
        "<h2>The three-product rule</h2>" +
        "<p>Shortlist three. Fewer and you have no reference price; more and the evaluation collapses under its own weight. Give each the same test: load 25 real records, build the one automation you need, connect the one integration that matters, and produce the report a manager will ask for.</p>" +
        "<!--AD-->" +
        "<h2>Cost is a three-year number</h2>" +
        "<p>Add seats at the tier you will actually need, the add-on that unlocks the feature you saw in the demo, implementation or data migration, any paid middleware, and the contractual annual uplift. Run it through the <a href='saas-spend-calculator.html'>three-year cost calculator</a> before you compare anything.</p>" +
        "<h2>Ask these five questions before the trial ends</h2>" +
        "<ol><li>What is the list price of the tier that includes everything I just used?</li>" +
        "<li>Is SSO on this tier, or is it an upgrade?</li>" +
        "<li>What exactly does the data export contain — attachments, history, custom fields?</li>" +
        "<li>What is the renewal notice period and the maximum annual increase?</li>" +
        "<li>Which subprocessors handle our data, and where?</li></ol>" +
        "<h2>Then negotiate</h2>" +
        "<p>Everything is negotiable before signature and almost nothing after. Multi-year discounts, capped uplift, a longer notice window and a migration-assistance commitment are all routinely granted to buyers who ask. The <a href='saas-contract-negotiation.html'>contract guide</a> covers the specific clauses.</p>",
      edge: {
        intro: "Most advice on buying software is published either by vendors, who describe a process that ends in a purchase, or by affiliate sites paid on conversion. Both produce a buyer's guide that is really a seller's funnel: define needs, watch demos, run a trial, choose. The steps are not wrong, they are just arranged so that the leverage-bearing decisions happen after the leverage is gone.",
        gaps: [
          {
            claim: "\"Book demos with your shortlist to see which fits best.\"",
            problem: "A demo is a rehearsed path through the product's strengths, run by someone who knows exactly which questions to answer expansively. Arriving without written requirements means adopting the vendor's framing of your problem — you will leave wanting the feature you were shown rather than the one you needed, and the feature you were shown frequently lives one tier above the price you were quoted. The structural issue is that a demo cannot reveal what the product is bad at, because nothing in its format requires that to surface. Guides that place demos before requirements are not making a small sequencing error; they are handing the definition of success to the party being evaluated.",
            ours: "We require written requirements before any demo — the five workflows, the non-negotiable integrations, and an explicit list of what you are deliberately <em>not</em> solving this year — and we treat that last list as the one that prevents scope-driven overbuying."
          },
          {
            claim: "\"Take advantage of the free trial to test the product.\"",
            problem: "Unstructured trials reliably produce a decision based on interface polish, because that is what is observable in a fortnight of casual use. They also tend to run on the top tier, so the buyer evaluates capability they will not be paying for. A trial only produces evidence if every candidate faces an identical test: the same twenty-five real records loaded, the same one automation built, the same integration connected, the same report a manager will actually ask for. Two things surface only under that discipline and never in a tour — whether your data model survives import, and what the product is like on the messy edge cases that constitute most real work. Anything short of that is comparing marketing surfaces.",
            ours: "We specify the identical-task test across a maximum of three products, run on the tier you would actually buy rather than the trial's default."
          },
          {
            claim: "Compare products on features and per-seat price.",
            problem: "Both are the wrong unit. Feature checklists reward the product with the longest list, which correlates with complexity and cost rather than fit, and every serious contender will tick every row — the differences live in how well each does the two things you actually need daily. Per-seat price then understates the commitment in four ways that only appear later: the tier jump for the one capability seen in the demo, implementation and data migration, paid middleware where a native connector does not exist — a recurring cost created by the purchase — and contractual annual uplift, typically several percent where the agreement is silent. A three-year total is a different ranking from a monthly per-seat comparison, frequently a reordering rather than a rescaling.",
            ours: "We compare on a three-year total including tier jump, migration, middleware and uplift, and we test the two daily workflows rather than scoring feature lists."
          },
          {
            claim: "Negotiate the price, then sign and get on with implementation.",
            problem: "Price is the concession vendors give most readily, and optimising it alone is how buyers end up locked into an expensive relationship at a good first-year rate. A steep initial discount produces a large step-up at renewal on a base you can no longer leave cheaply, which makes the discount a loan against year two. The terms that determine your position for the entire life of the contract are rarely requested because they cost nothing at signature and everything later: a cap on renewal uplift, the auto-renewal notice window (frequently long enough to miss), what a data export actually contains — attachments, history, custom fields, or just a flat table — whether SSO sits behind an upgrade, and who the subprocessors are. Export completeness is the one that decides whether you have leverage at every future renewal, so it is a pre-signature question, not an exit question.",
            ours: "We rank uplift cap, notice window, export completeness and SSO tier above the discount, and treat export as renewal leverage rather than an offboarding detail."
          }
        ],
        only: [
          "Requirements before demos, including an explicit list of what you are not solving this year.",
          "An identical-task trial protocol run on the tier you would actually buy, capped at three products.",
          "Three-year totals with tier jump, migration, recurring middleware and contractual uplift included.",
          "Export completeness framed as leverage at every renewal, not as an exit checkbox.",
          "The five questions to ask before the trial ends — tier price, SSO, export contents, notice period, subprocessors."
        ]
      },
      faq: [
        { q: "How long should an evaluation take?", a: "<p>Two to four weeks for a team tool under $10k a year. Longer evaluations rarely produce better decisions; they just add meetings.</p>" },
        { q: "Should I involve the whole team?", a: "<p>Involve the two or three people who will use it daily. Consensus buying produces tools nobody owns.</p>" },
        { q: "Is the cheapest tier ever enough?", a: "<p>Sometimes, but assume you will land one tier above where the salesperson positions you. Model that price.</p>" }
      ],
      sources: [
        { name: "NIST — Cyber Supply Chain Risk Management", url: "https://csrc.nist.gov/projects/cyber-supply-chain-risk-management", note: "Vendor assessment and subprocessor due diligence" },
        { name: "FTC — negative option and automatic renewal guidance", url: "https://www.ftc.gov/business-guidance", note: "Auto-renewal notice and disclosure expectations" }
      ],
      related: ["saas-contract-negotiation", "software-selection-checklist", "saas-spend-calculator"],
      crossRefs: [{ slug: "hardenhq", page: "security-questionnaires", label: "The security questions to ask a vendor", why: "Vendor review is part of buying, not a separate compliance chore." }]
    },

    "crm-selection-guide": {
      title: "CRM selection guide for small teams",
      h1: "Choosing a CRM you will still use in year two",
      section: "Pillar guide",
      eyebrow: "Pillar guide",
      dek: "Pipeline reality versus CRM fantasy, the data model that decides everything, migration cost, and why most CRM projects fail on adoption.",
      disclosure: true,
      answer: "Choose the CRM whose <strong>default data model matches how you actually sell</strong>, that your team can update in under a minute per deal, and whose export contains everything. Feature lists are nearly irrelevant; adoption decides whether the tool has any value at all.",
      body:
        "<h2>Match the data model, not the feature list</h2>" +
        "<p>Every CRM has an opinion about objects: contacts, companies, deals, pipelines, products. If your business sells recurring services to committees, a tool built around single-contact transactional deals will fight you every day. Sketch your own model on one page and compare it to each product's defaults.</p>" +
        "<h2>The one-minute test</h2>" +
        "<p>Time how long it takes a salesperson to log a call, move a deal and set a next action. Over a minute and the CRM will quietly stop being updated within a quarter — at which point every report it produces is fiction.</p>" +
        "<!--AD-->" +
        "<h2>Migration is the real cost</h2>" +
        "<p>Exporting from a spreadsheet is easy. Exporting years of email history, notes, attachments and custom fields from another CRM is not. Ask for a sample export from your current system before you commit, and price the cleanup honestly — see the <a href='saas-implementation-plan.html'>implementation plan</a>.</p>" +
        "<!--FIG:A one-page CRM data model: contacts, companies, deals, next actions-->" +
        "<h2>What actually drives adoption</h2>" +
        "<ul><li>Fewer required fields than you think you need.</li>" +
        "<li>Email and calendar sync that works without thinking about it.</li>" +
        "<li>A mobile experience good enough to use in a car park.</li>" +
        "<li>One report the team sees weekly, so the data has a visible purpose.</li>" +
        "<li>A named owner who cleans it monthly.</li></ul>" +
        "<h2>When you do not need a CRM yet</h2>" +
        "<p>Under roughly 30 open opportunities with one person selling, a well-kept spreadsheet plus calendar reminders genuinely outperforms an unadopted CRM. Buy when coordination between people breaks, not when a blog tells you to.</p>",
      edge: {
        intro: "CRM selection content is written either by vendors or by affiliates paid per referred trial, and both need the decision to hinge on comparable features, because a feature grid can be won. The result is a genre organised around capability when the failure mode is organisational: the large majority of CRM disappointment we see is not a tool that lacked a feature, it is a tool nobody updated. Two structural facts about how CRMs are sold and left are absent from essentially all of this coverage.",
        gaps: [
          {
            claim: "Selection is framed as matching requirements to a feature comparison, with a shortlist drawn from a grid.",
            problem: "Feature parity at the small-team tier is now close to total, so the grid discriminates on things that will not affect you while hiding the one variable that will: whether the product's default object model matches your sales motion. A CRM built around a single contact and a one-off transaction will fight a business selling renewable services to a buying committee at every step — not because a feature is missing, but because every screen, report and automation assumes the wrong shape. Reshaping it is possible through custom objects and fields, and that is precisely where the cost lands: custom structure is usually gated to a higher tier, it makes future migration harder, and it multiplies the number of fields a salesperson must fill. The grid cannot express this because the answer differs per business, which is exactly why the affiliate genre avoids it.",
            ours: "We start from a one-page model of how you actually sell and compare it against each product's defaults, treating required customisation as a cost and a lock-in risk rather than as a capability."
          },
          {
            claim: "Adoption is listed as a success factor, with training and executive buy-in as the remedy.",
            problem: "Training is the weakest available lever and it is the one everybody recommends. What determines whether a CRM is still accurate in year two is the per-deal cost in seconds imposed on the person with the least incentive to pay it, and that cost is set by configuration decisions made during implementation — required fields, mandatory stages, forced logging. The mechanism nobody spells out is compounding: once updating slips, the reports built on the data become wrong, and once managers know the reports are wrong they stop using them, which removes the last reason anyone had to update. This is why a CRM rarely fails loudly; it degrades into an expensive contact list within two quarters. It also means the correct time to protect adoption is at configuration, not after a decline you can only detect by measuring it.",
            ours: "We time the actual per-deal update cost during the trial, cap required fields deliberately, and name the compounding failure loop so it is caught by a monthly data-quality check rather than discovered when a forecast turns out to be fiction."
          },
          {
            claim: "&lsquo;Check that the data exports&rsquo; is the standard portability advice, satisfied by the presence of a CSV export button.",
            problem: "An export button is close to meaningless as a test, because the relational and unstructured parts of a CRM are what carry the value and they are what exports badly. A CSV of contacts and deals typically arrives without the email threads, call notes, attachments, activity timeline, custom field definitions, pipeline history and the record-to-record relationships that made the data useful; and record identifiers are reassigned by the destination system, so links between objects have to be rebuilt. Two practical consequences follow that no selection guide states. The realistic migration cost is dominated by data cleanup and by re-establishing relationships, not by configuration. And the completeness of that export is your only real negotiating leverage at renewal — a vendor whose export you cannot use knows you are not leaving, whatever your quote says.",
            ours: "We require a real sample export from the incumbent before committing, checked specifically for email history, attachments, activity timeline and relationships — and treat export completeness as renewal leverage rather than an IT detail."
          },
          {
            claim: "Free and entry tiers are recommended as a low-risk way for a small team to start.",
            problem: "They are low-risk to try and high-risk to build on, for a reason the recommendations omit: the entry tier is priced as an acquisition cost, and the constraints that force the upgrade are usually the ones you cannot see during evaluation. Record and contact caps, email-send limits, automation counts, pipeline and custom-field limits, reporting depth and API call allowances tend to bind after the data is already in and the team is already trained — which is the point of maximum switching cost and the moment the tier jump is quoted. There is a second, quieter meter: because contacts accumulate rather than being actively chosen, a contact-priced CRM bills against a number that grows on its own unless someone prunes it. So the entry tier's real cost is the price of the tier you will be on in eighteen months, at the record volume you will have then.",
            ours: "We price the tier you will actually need at projected record and contact volume, identify which specific limit will force the jump, and check whether contacts can be archived without deletion before the meter runs."
          }
        ],
        only: [
          "The default object model as the real selection variable, with required customisation priced as cost and lock-in rather than capability.",
          "Per-deal update time measured in seconds during the trial — the lever that actually decides adoption, set at configuration not at training.",
          "The compounding failure loop: slipped updating makes reports wrong, wrong reports remove the reason to update.",
          "What a CRM export structurally leaves behind — email history, attachments, activity timeline, relationships — and why that is renewal leverage.",
          "Which specific entry-tier limit will force your upgrade, and the contact meter that grows without anyone choosing to spend."
        ]
      },
      faq: [
        { q: "Free CRM tiers: worth it?", a: "<p>As a trial, yes. As a destination, check the export and the price of the tier you will need at 500 records — that is where the economics change.</p>" },
        { q: "How long does a CRM migration take?", a: "<p>Two to six weeks for a small team, most of it data cleanup and rebuilding relationships between records rather than configuration.</p>" },
        { q: "Should marketing and sales share one tool?", a: "<p>Ideally yes, if the shared version is affordable. Two systems with a fragile sync is the worst of the options.</p>" },
        { q: "How do we know adoption is slipping?", a: "<p>Measure it: percentage of open deals with a next action set, and median days since last activity update. Both move before anyone complains, and both are visible in any CRM's own reporting.</p>" }
      ],
      sources: [
        { name: "Salesforce — data model and custom object documentation", url: "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm", note: "Standard object structure a CRM imposes, and what customisation involves" },
        { name: "HubSpot — export limits and what CRM exports include", url: "https://knowledge.hubspot.com/import-and-export/export-your-records", note: "Documented scope of a CRM export, including what is excluded" }
      ],
      related: ["best-crm-small-business", "crm-software-cost", "saas-implementation-plan"]
    },

    "workflow-automation-guide": {
      title: "Workflow automation for small teams: what to automate first",
      h1: "Automating work without building a fragile machine",
      section: "Pillar guide",
      eyebrow: "Pillar guide",
      dek: "Choosing what to automate, native versus middleware, error handling, and how to keep automations maintainable by someone who did not build them.",
      answer: "Automate <strong>high-frequency, low-judgement, well-documented</strong> tasks — and only after the manual process is stable. Every automation needs an owner, a failure notification and a one-paragraph written description, or it becomes an invisible dependency.",
      body:
        "<h2>Pick candidates properly</h2>" +
        "<p>Score each candidate task on frequency, time taken, error rate and how much judgement it needs. The winners are boring: creating records from forms, routing requests, chasing missing information, moving files, generating recurring reports. Anything requiring judgement should stay manual, possibly with an AI draft step.</p>" +
        "<!--FIG:Automation candidates plotted by frequency against judgement required-->" +
        "<h2>Native, middleware or code</h2>" +
        "<ul><li><strong>Native automation</strong> inside a tool you already pay for — always try this first.</li>" +
        "<li><strong>Middleware</strong> connects tools without code; excellent, but task-based pricing escalates quickly with volume.</li>" +
        "<li><strong>Code</strong> is cheapest at scale and most expensive to maintain if nobody on the team writes it.</li></ul>" +
        "<!--AD-->" +
        "<h2>Rules that keep automations alive</h2>" +
        "<ol><li>One owner per automation, named in a register.</li>" +
        "<li>Failures notify a human channel, not a mailbox nobody reads.</li>" +
        "<li>Every automation has a plain-language description of what it does and why.</li>" +
        "<li>Test data flows through a sandbox record before it touches production.</li>" +
        "<li>Quarterly review: what broke, what is no longer needed, what is now native.</li></ol>" +
        "<h2>Where automation goes wrong</h2>" +
        "<p>Automating a broken process just makes the mess faster. Silent failures are worse than no automation, because the team assumes work happened. And automations built by one enthusiastic person with no documentation become a resignation risk. Compare tooling in the <a href='best-automation-tools.html'>automation comparison</a>.</p>",
      edge: {
        intro: "Automation content is published overwhelmingly by the middleware vendors themselves and by their affiliates, and it shares one shape: a list of things you could connect, with the build presented as the whole of the work. The operating reality is the opposite. Building an automation is the cheap part; the expensive parts are the pricing meter you have just attached to your own volume, the failures you will not see, and the fact that an automation is production infrastructure that nobody has agreed to maintain.",
        gaps: [
          {
            claim: "Middleware is priced per task or per operation, presented as a small predictable per-unit cost.",
            problem: "The unit is not the unit a reader assumes, and the difference is what produces the bill people describe as inexplicable. Depending on the platform, an operation may be counted for every step in a workflow rather than every workflow run, for polling checks that find nothing to do, for each item when a batch is split into individual records, and for retries after a failure. A workflow with six steps firing on two hundred records is not two hundred tasks. The compounding case is worse: an automation that errors and retries on a schedule can consume its allowance without ever completing successfully, and platforms that queue rather than drop overage will keep counting. Meanwhile these products meter on a monthly allowance, so cost scales precisely with business success, which inverts the usual software assumption that growth dilutes fixed cost.",
            ours: "We count steps rather than workflows against your real record volume, include polling and retry consumption in the estimate, and check the overage behaviour — throttle, queue or bill — before anything is switched on."
          },
          {
            claim: "Error handling is covered as &lsquo;set up notifications&rsquo; so you know when something breaks.",
            problem: "Notification addresses the loud failure and misses the class that actually causes damage. An automation that stops is discoverable; an automation that succeeds against the wrong data, or that partially completes, is not. The specific mechanism is that most integrations are not transactional across systems — step three can write a record while step five fails, leaving two systems disagreeing with no rollback, and the platform reports a failure while the partial write persists silently. Add duplicate delivery, which webhook-based integrations produce as a normal condition rather than an anomaly, and you get double-created records, double invoices or double emails from an automation the dashboard shows as healthy. This is why idempotency matters more than alerting: a well-built automation can run the same event twice without changing the outcome. Almost no small-team guidance mentions the word.",
            ours: "We design for replay rather than for alerting — idempotent writes keyed on an external identifier, plus an explicit decision about what to do with a partial completion before the automation goes live."
          },
          {
            claim: "&lsquo;Native first, middleware next, code at scale&rsquo; is offered as the platform decision.",
            problem: "The sequence is sound but stated in the wrong currency, because it compares build effort while the differences that matter later are ownership and visibility. Native automation is the most robust and the most invisible: it is buried inside another product's settings, it typically does not appear in any inventory, and it survives staff departures precisely because nobody remembers it exists — which is why the most common source of unexplained behaviour in a small company's stack is a rule someone created two years ago in a tool they no longer use. Middleware at least centralises the logic where it can be listed. And there is a permissions dimension none of the three sections mention: an automation runs under someone's credentials, so it holds standing privileged access across systems, and when that person leaves or their access is reduced the automation breaks in a way that looks like a platform fault. Automations are also a data-transfer path, which matters if any of the records are personal data.",
            ours: "We weigh discoverability and credential ownership alongside build cost, require service accounts rather than personal credentials, and register native automations because they are the ones that outlive the people who built them."
          },
          {
            claim: "Automate the repetitive tasks — with time saved per run as the justification.",
            problem: "Time saved per run is a real benefit measured against an unreal baseline, and it ignores two costs that decide whether the automation was worth building. First, an automation removes the human who was noticing exceptions. Anyone who has done a task manually catches the malformed submission, the duplicate customer, the number that is obviously wrong; once automated, those flow through and are found downstream at much higher cost, so the honest calculation is time saved minus the cost of exceptions no longer caught. Second, automation transfers the work from doing to maintaining, and maintenance is triggered externally — an API version deprecates, a field is renamed, a form changes, a tool is replaced — which means the ongoing cost is not proportional to how useful the automation is. This is how a company ends up maintaining a machine that saves less than it consumes, with the enthusiast who built it gone.",
            ours: "We net exception-catching loss against time saved, and test candidates for stability of the systems they touch — because an automation across a tool you are likely to replace is a maintenance liability whatever it saves this quarter."
          }
        ],
        only: [
          "What a metered 'task' actually counts — every step, polling checks, per-item batches, retries — and why cost scales with your growth.",
          "Idempotency and replay over alerting: duplicate webhook delivery and non-transactional partial writes as the failures dashboards call healthy.",
          "Native automation as the least discoverable, plus the credential the automation runs under and what happens when that person leaves.",
          "Exception-catching loss netted against time saved — the human you removed was also the control.",
          "Maintenance triggered by other people's API and schema changes, so ongoing cost is unrelated to how useful the automation is."
        ]
      },
      faq: [
        { q: "How much should automation cost?", a: "<p>If a middleware bill exceeds the labour it saves, either the automation is too chatty or the work belongs inside one tool. Check whether you are billed per step rather than per run — that is usually the discrepancy.</p>" },
        { q: "What should never be automated?", a: "<p>Anything with legal, financial or safety judgement, and anything the customer expects a human to have read.</p>" },
        { q: "Why did our automation create duplicate records?", a: "<p>Almost always duplicate webhook delivery, which is normal rather than exceptional. The fix is an idempotency key on the write so the same event processed twice produces one record.</p>" }
      ],
      sources: [
        { name: "Zapier — how tasks are counted and billed", url: "https://help.zapier.com/hc/en-us/articles/8496196837261-Tasks-in-Zapier", note: "Definition of a billable task, including multi-step and per-item counting" },
        { name: "Stripe — webhook delivery and idempotency guidance", url: "https://docs.stripe.com/webhooks", note: "At-least-once delivery and why event handlers must be idempotent" }
      ],
      related: ["best-automation-tools", "saas-buying-guide", "ai-tools-for-small-business"]
    },

    "ai-tools-for-small-business": {
      title: "AI tools for small business: what actually earns its subscription",
      h1: "AI tools that pay for themselves, and the ones that do not",
      section: "Pillar guide",
      eyebrow: "Pillar guide",
      dek: "Where AI genuinely saves small teams time, how to evaluate it without being dazzled, the data questions to ask, and the tasks to keep human.",
      disclosure: true,
      answer: "AI earns its price on <strong>drafting, summarising, classifying and searching your own material</strong>. It does not reliably replace judgement, and it should never be the last check on anything with legal, financial or safety consequences. Evaluate it on your own documents, not the vendor's demo.",
      body:
        "<h2>The four jobs AI is genuinely good at</h2>" +
        "<ol><li><strong>Drafting</strong> — first versions of replies, descriptions and summaries a human then edits.</li>" +
        "<li><strong>Summarising</strong> — calls, threads and long documents into something scannable.</li>" +
        "<li><strong>Classifying and routing</strong> — tagging incoming requests, prioritising a queue.</li>" +
        "<li><strong>Retrieval</strong> — answering questions from your own documents with citations you can open.</li></ol>" +
        "<!--AD-->" +
        "<h2>Evaluate on your material</h2>" +
        "<p>Take twenty real examples of the task, with known good answers. Run them through the tool. Count how many were usable unedited, usable with light editing, and wrong. A tool that is 70% usable on drafting is valuable; a tool that is 95% right on facts is still dangerous if you cannot tell which 5% is wrong.</p>" +
        "<!--FIG:Twenty real tasks scored: usable, needs editing, wrong-->" +
        "<h2>The data questions</h2>" +
        "<ul><li>Is our input used to train the vendor's models? Get the answer in the contract, not the FAQ.</li>" +
        "<li>Which subprocessors and model providers see the data, and in which region?</li>" +
        "<li>What is the retention period, and can we shorten it?</li>" +
        "<li>Is there an audit log of what was sent?</li></ul>" +
        "<p>Those belong in your <a href='vendor-security-review.html'>vendor review</a>, and the resulting rules belong in an <a href='ai-policy-for-small-teams.html'>AI use policy</a>.</p>" +
        "<h2>Cost discipline</h2>" +
        "<p>AI features are the current favourite reason for tier increases and usage-based add-ons. Model the annual cost at your realistic volume, not the introductory allowance, and check the <a href='ai-tools-pricing-comparison.html'>pricing comparison</a> before you standardise on anything.</p>",
      faq: [
        { q: "Will AI features replace tools we already pay for?", a: "<p>Occasionally — summarisation and drafting add-ons have absorbed some standalone products. Avoid three-year commitments in categories that are actively consolidating.</p>" },
        { q: "Do we need a policy for a five-person team?", a: "<p>Yes, and one page is enough: what may be pasted in, what must not, who reviews output before it leaves the company.</p>" }
      ],
      sources: [
        { name: "NIST — AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework" }
      ],
      related: ["ai-policy-for-small-teams", "ai-tools-pricing-comparison", "workflow-automation-guide"]
    },

    "saas-contract-negotiation": {
      title: "SaaS contract negotiation: the clauses that actually matter",
      h1: "Negotiating a SaaS contract before you lose your leverage",
      section: "Buying software",
      eyebrow: "Explainer",
      dek: "Auto-renewal, uplift caps, notice windows, data export, price protection on added seats, and what small buyers can realistically win.",
      disclosure: true,
      answer: "Six terms are worth fighting for: <strong>a capped annual uplift, a 60-day notice window, price protection on additional seats, a documented export right, a termination-assistance period, and no unilateral change to the service description</strong>. All are routinely granted to buyers who ask before signing.",
      body:
        "<h2>Where your leverage lives</h2>" +
        "<p>You have leverage exactly once: after they want the deal and before you sign it. After signature, you are negotiating against a contract that already says what happens. Quarter-end and year-end sales pressure is real; use it, and be willing to wait two weeks.</p>" +
        "<h2>The six clauses</h2>" +
        "<ol><li><strong>Uplift cap.</strong> Silence on renewal pricing means whatever they decide. Ask for CPI or a fixed cap of 3–5%.</li>" +
        "<li><strong>Notice window.</strong> A 30-day window on an annual auto-renewal is a trap. Ask for 60 days and diarise it the day you sign.</li>" +
        "<li><strong>Seat price protection.</strong> Fix the per-seat price for added seats for the term, or growth is repriced at list.</li>" +
        "<li><strong>Export and format.</strong> Specify that export includes attachments, history and custom fields, in a documented format.</li>" +
        "<li><strong>Termination assistance.</strong> 30–60 days of read-only access after termination to complete a migration.</li>" +
        "<li><strong>Service description changes.</strong> Remove the vendor's right to reduce functionality unilaterally mid-term.</li></ol>" +
        "<!--AD-->" +
        "<h2>What you will not win</h2>" +
        "<p>Uncapped liability, custom indemnities, bespoke SLAs with meaningful penalties, and roadmap commitments are essentially unavailable to small buyers. Spending your credibility on them costs you the six terms above, which you can actually get.</p>" +
        "<!--FIG:Order form versus master agreement: which document controls what-->" +
        "<h2>Order form versus master agreement</h2>" +
        "<p>The order form is short and usually the only thing anyone reads; the master agreement it incorporates by reference is where auto-renewal, uplift and liability live. Read both, or have your lawyer read both. Then set a renewal reminder — the <a href='saas-renewal-playbook.html'>renewal playbook</a> explains what to do when it fires.</p>" +
        "<h2>Trade concessions, do not just ask</h2>" +
        "<p>Multi-year commitment, annual prepayment, a case study, or a reference call are all things vendors want. Offer one deliberately in exchange for a capped uplift and a longer notice window, and you will usually get both.</p>",
      faq: [
        { q: "Do we need a lawyer for a $6,000 contract?", a: "<p>An hour of review on a three-year commitment is proportionate. Under a one-year, cancellable subscription, careful reading is usually enough.</p>" },
        { q: "Can we get out of an auto-renewal we missed?", a: "<p>Sometimes, by agreeing a shorter renewal or a downgrade. Ask immediately and in writing; the answer hardens over time.</p>" },
        { q: "Is a multi-year discount worth it?", a: "<p>Only in mature categories where you are confident about the tool in year three. Not in anything AI-adjacent right now.</p>" }
      ],
      related: ["saas-renewal-playbook", "saas-buying-guide", "saas-spend-calculator"],
      crossRefs: [{ slug: "clausecraft", page: "client-contract-essentials", label: "Contract terms on the other side of the table", why: "The same clauses matter when you are the one issuing the agreement." }]
    },

    "saas-renewal-playbook": {
      title: "SaaS renewal playbook: what to do 90 days out",
      h1: "The 90-day renewal playbook",
      section: "Buying software",
      eyebrow: "Explainer",
      dek: "A calendar-driven process for every renewal: usage evidence, benchmark pricing, the conversation, and the decision to leave.",
      disclosure: true,
      answer: "Start 90 days out. Pull actual usage, identify unused seats and tiers, get one competing quote, then open the conversation with evidence rather than a request. Renewals negotiated from usage data routinely land <strong>10–30% below the quoted increase</strong>.",
      body:
        "<h2>The calendar</h2>" +
        "<ol><li><strong>Day 90:</strong> pull seat-level usage and identify dormant accounts.</li>" +
        "<li><strong>Day 75:</strong> list features you actually used from the tier you pay for.</li>" +
        "<li><strong>Day 60:</strong> get one competing quote in writing. Serve notice if your window requires it.</li>" +
        "<li><strong>Day 45:</strong> open the renewal conversation with the usage numbers.</li>" +
        "<li><strong>Day 20:</strong> decide. Renew on agreed terms or start migration.</li></ol>" +
        "<!--AD-->" +
        "<h2>What evidence changes the price</h2>" +
        "<p>\"We are paying for 24 seats and 14 people logged in this quarter\" moves a renewal. \"This feels expensive\" does not. Bring seat counts, feature usage and the competing quote to the first call.</p>" +
        "<h2>Deciding to leave</h2>" +
        "<p>Migration has a real cost: export, cleanup, reconfiguration, retraining, and a productivity dip. Estimate it honestly with the <a href='saas-spend-calculator.html'>cost model</a>. If the three-year saving does not clear the migration cost by a comfortable margin, negotiate harder instead of moving.</p>" +
        "<h2>The register that makes this possible</h2>" +
        "<p>Keep one sheet: tool, owner, annual cost, renewal date, notice period, business purpose. That single artefact is what a <a href='saas-spend-audit.html'>spend audit</a> is built on, and it turns renewals from surprises into scheduled work.</p>",
      edge: {
        intro: "Renewal advice online divides into vendor-adjacent content, which frames renewal as a relationship conversation, and procurement-tool marketing, which frames it as a benchmarking exercise. Both describe the buyer's side of a process whose timing is controlled entirely by the seller's contract. The decisive facts are that your leverage is a function of the calendar rather than of your arguments, and that the person you negotiate with is compensated on a metric you can read off your own account.",
        gaps: [
          {
            claim: "&lsquo;Start 90 days out&rsquo; is given as the universal renewal timeline.",
            problem: "Ninety days is a sensible default that is wrong in both directions, and the correct number is written in your own contract. Auto-renewal notice windows commonly run 30, 60 or 90 days before the term end, and the mechanism is unforgiving: miss the window and the agreement renews for a full further term at the stated uplift, at which point you have no negotiation, only a request. Two subtleties get omitted. The notice provision usually specifies a delivery method — a portal, a named contact, sometimes registered post — and an email to your account manager may not satisfy it, which is exactly the dispute a vendor wins. And serving notice is not the same as leaving: notice preserves the option to leave, so the disciplined move is to serve it inside the window and negotiate afterwards from a position where the default outcome is termination rather than renewal. That single reversal of the default is worth more than every benchmarking argument combined.",
            ours: "We read the notice window, the delivery method and the auto-renewal term out of your own contract first, and treat serving notice as a leverage step rather than a decision to leave."
          },
          {
            claim: "Bring usage data \u2014 unused seats and unused tier features \u2014 and the price comes down.",
            problem: "Usage evidence works, but it is being aimed at the wrong lever and it can backfire. Vendors resist headline discount hard because the per-unit price sets the floor for every future renewal and is often visible internally as a benchmark; they concede far more readily on things that do not touch it \u2014 term length, payment timing, ramped seat commitments, added modules at no cost, service credits, capped uplift, price protection on future tiers. So a buyer who wins 8% off the rate and accepts an uncapped uplift has usually lost, because the uplift compounds across every subsequent year. The backfire is specific: presenting fourteen active users out of twenty-four invites a reduction to fifteen seats at a higher per-seat rate, since your volume tier just fell. Seat reductions and per-unit price have to be negotiated as one package or the saving evaporates.",
            ours: "We negotiate uplift caps, term structure and price protection ahead of headline discount, and always package a seat reduction with the per-unit rate so the volume tier cannot be used against you."
          },
          {
            claim: "Get a competing quote to establish a benchmark price.",
            problem: "The competing quote is genuinely the strongest artefact in the process, and the advice omits both how it is discounted and what makes it credible. A vendor knows that a quote from a product you have not evaluated is not a threat, because they can price in your switching cost \u2014 your data, your integrations, your trained staff. What moves a renewal is evidence of a real alternative in motion: a completed trial, a sample export from your incumbent, an implementation estimate, ideally a named internal owner for the migration. Equally, the timing is a lever nobody mentions: enterprise software discounting is materially sensitive to the seller's quarter and fiscal year end, and a renewal date that falls inside a vendor's strong closing period is worth deliberately aligning to \u2014 a short bridging extension to move your renewal into their year end is a concession vendors grant easily and one that repays every year afterwards.",
            ours: "We make the alternative demonstrably in motion rather than merely quoted, and align renewal dates to the vendor's fiscal calendar so the timing works for you in every future cycle."
          },
          {
            claim: "If the three-year saving does not clear migration cost, negotiate harder rather than moving.",
            problem: "Correct arithmetic, incomplete inputs, and it hides the reason renewals get worse over time. Staying has costs that do not appear as migration line items: an uncapped uplift compounding annually, a per-unit price that is now anchored, and the fact that a vendor who has watched you decline to leave twice prices the third renewal accordingly. Leaving has costs the calculation usually understates too \u2014 not the export, but the parallel-running period, the reconfiguration of every automation and report built on the old system, and a productivity trough that is real and temporary. The structural point missing from all of it is that leverage is manufactured before the renewal, not during it: whether your data can actually be exported in usable form, whether integrations are portable, whether one vendor holds functions that could be split. A company that never checked its export has already decided the outcome of every future renewal.",
            ours: "We include compounding uplift and anchoring in the cost of staying, count parallel running and rebuilt integrations in the cost of leaving, and treat verified export portability as the thing that gives the negotiation any force at all."
          }
        ],
        only: [
          "Your own contract's notice window and delivery method as the real timeline \u2014 and serving notice as a leverage step, not a decision to leave.",
          "Why vendors defend per-unit price but concede uplift caps, term structure and price protection \u2014 and why 8% off with uncapped uplift is a loss.",
          "How presenting unused seats can raise your per-seat rate by dropping your volume tier.",
          "Aligning renewal dates to the vendor's fiscal year end, and what makes a competing quote credible rather than ignorable.",
          "The cost of staying: compounding uplift, an anchored price, and a vendor who has watched you decline to leave twice."
        ]
      },
      faq: [
        { q: "Should we always get a competing quote?", a: "<p>For anything over a few thousand a year, yes. It costs an hour and it is the only reference price you will have — but run at least a short trial, because a quote for a product you have not evaluated is easy for your incumbent to discount.</p>" },
        { q: "Is downgrading a tier realistic?", a: "<p>Often, if you can show which tier-specific features went unused. Vendors prefer a downgrade to a cancellation — but negotiate the per-unit rate at the same time, or a smaller commitment can arrive at a higher unit price.</p>" },
        { q: "We missed the notice window. What now?", a: "<p>You are renewed for the term, so the negotiation becomes a request. Use it: agree the next renewal's uplift cap and notice mechanics now, in writing, while the vendor wants the relationship comfortable.</p>" }
      ],
      sources: [
        { name: "Federal Trade Commission — negative option and automatic renewal rules", url: "https://www.ftc.gov/legal-library/browse/rules/rule-concerning-recurring-subscriptions-other-negative-option-programs", note: "Disclosure and cancellation requirements around automatic renewal" },
        { name: "GSA — commercial software acquisition and price reasonableness guidance", url: "https://www.gsa.gov/buy-through-us/products-services/it-products-services-and-solutions", note: "Public-sector practice on establishing a reference price before renewal" }
      ],
      related: ["saas-contract-negotiation", "saas-spend-audit", "saas-management-platform-cost"]
    },

    "saas-spend-audit": {
      title: "How to run a SaaS spend audit",
      h1: "Finding the software you forgot you were paying for",
      section: "Spend & risk",
      eyebrow: "Explainer",
      dek: "Card statements to inventory, dormant seats, duplicate tooling, shadow IT and the controls that stop it returning.",
      answer: "Pull twelve months of card and bank statements, build a one-line-per-tool register, then attack four things: <strong>dormant seats, duplicate tools, tiers you outgrew downwards, and subscriptions with no owner</strong>. First audits commonly recover 15–25% of software spend.",
      body:
        "<h2>Build the inventory from money, not memory</h2>" +
        "<p>Every recurring charge on twelve months of company cards and bank statements becomes a row: tool, owner, annual cost, renewal date, notice period, purpose. Include personal cards being expensed — that is where shadow IT hides.</p>" +
        "<!--FIG:Twelve months of card charges resolved into a software register-->" +
        "<h2>The four recoveries</h2>" +
        "<ul><li><strong>Dormant seats</strong> — people who left, or never used it. Usually the largest single line.</li>" +
        "<li><strong>Duplicates</strong> — two tools doing one job because two teams bought independently.</li>" +
        "<li><strong>Tier drift</strong> — an upgrade bought for one project that nobody downgraded.</li>" +
        "<li><strong>Orphans</strong> — nobody can say what it is for. Cancel and see who complains.</li></ul>" +
        "<!--AD-->" +
        "<h2>Controls that stop the drift</h2>" +
        "<ol><li>One card, or a virtual card per vendor, so charges are attributable.</li>" +
        "<li>Named owner required before any subscription starts.</li>" +
        "<li>Renewal dates in a shared calendar with the notice period noted.</li>" +
        "<li>Offboarding checklist that removes access from every tool in the register.</li>" +
        "<li>Quarterly review of the register at a real meeting.</li></ol>" +
        "<p>Above roughly 40 tools this becomes a job rather than a task, which is when a <a href='saas-management-platform-cost.html'>management platform</a> starts to pay for itself.</p>",
      faq: [
        { q: "How long does a first audit take?", a: "<p>A day for a team under 25 people, most of it reconciling statements to tools.</p>" },
        { q: "What about tools bought on personal cards?", a: "<p>Bring them into the register and onto company payment. Access tied to a personal account is a real continuity risk.</p>" }
      ],
      related: ["saas-management-platform-cost", "saas-renewal-playbook", "saas-spend-calculator"],
      crossRefs: [{ slug: "ledgerlift", page: "bookkeeping-basics", label: "Keeping the books the audit reads from", why: "A clean chart of accounts makes software spend visible in the first place." }]
    },

    "vendor-security-review": {
      title: "Vendor security review for small teams",
      h1: "Reviewing a vendor's security without a security team",
      section: "Spend & risk",
      eyebrow: "Explainer",
      dek: "A proportionate review: data classification, the eight questions, what a SOC 2 report does and does not tell you, and when to walk away.",
      answer: "Scale the review to the data. For anything holding customer or employee personal data, ask for the <strong>current SOC 2 or ISO 27001 report, the subprocessor list, the DPA, breach notification terms, SSO availability, and the deletion process</strong> — and read the report's scope rather than the badge.",
      body:
        "<h2>Classify before you review</h2>" +
        "<p>Three tiers is enough: tools holding no sensitive data, tools holding internal data, and tools holding customer or employee personal data. Only the third tier justifies a full review. Applying enterprise process to a design tool wastes the effort you need for the CRM.</p>" +
        "<h2>The eight questions</h2>" +
        "<ol><li>Current SOC 2 Type II or ISO 27001 certificate — and the scope section.</li>" +
        "<li>Subprocessor list with locations.</li>" +
        "<li>Data processing agreement, signed.</li>" +
        "<li>Breach notification commitment, in hours.</li>" +
        "<li>SSO and MFA availability, and on which tier.</li>" +
        "<li>Encryption at rest and in transit.</li>" +
        "<li>Retention and deletion process on termination.</li>" +
        "<li>Public incident history and status page.</li></ol>" +
        "<!--AD-->" +
        "<h2>What a SOC 2 report actually says</h2>" +
        "<p>It says an auditor tested the controls the vendor chose to include, during a stated period. Read the scope, the period, and the exceptions. A Type II report covering three months and excluding the product you are buying is not the assurance the sales deck implies.</p>" +
        "<!--FIG:What to read in a SOC 2 report: scope, period, exceptions-->" +
        "<h2>Walk-away signals</h2>" +
        "<ul><li>No DPA, or refusal to sign one.</li>" +
        "<li>SSO restricted to an enterprise tier at a punitive price.</li>" +
        "<li>No named subprocessors for a product that clearly uses them.</li>" +
        "<li>A breach in the record with no published post-mortem.</li></ul>",
      faq: [
        { q: "Can we rely on a trust page?", a: "<p>As a starting point. Ask for the underlying report under NDA before you put customer data in the product.</p>" },
        { q: "What if the vendor is tiny?", a: "<p>Judge the practices rather than the paperwork: MFA, least privilege, backups, a named security owner. Then limit what data goes in.</p>" }
      ],
      related: ["saas-buying-guide", "ai-policy-for-small-teams"],
      crossRefs: [{ slug: "hardenhq", page: "security-questionnaires", label: "Answering and sending security questionnaires", why: "The same document set is what your own customers will ask you for." }]
    },

    "saas-implementation-plan": {
      title: "SaaS implementation plan for a small team",
      h1: "Implementing new software without losing a quarter",
      section: "CRM & tooling",
      eyebrow: "Explainer",
      dek: "Data migration, configuration discipline, a pilot group, training that sticks, and the decommission step everyone skips.",
      answer: "Run it in five stages: <strong>clean data before migrating, configure the minimum, pilot with three people, train on real tasks, then decommission the old tool with a date</strong>. Most failed implementations are not failures of software — they are missing decommission dates and unowned data.",
      body:
        "<h2>Clean before you migrate</h2>" +
        "<p>Migrating dirty data buys you a more expensive version of the same mess. Deduplicate, fix owners, delete records nobody has touched in two years, and standardise the three fields you will actually report on. Do it in the export file, not in the new system.</p>" +
        "<h2>Configure the minimum</h2>" +
        "<p>Resist recreating every quirk of the old tool. Ship with the fewest required fields, one pipeline, one report. Add complexity only when someone asks twice.</p>" +
        "<!--AD-->" +
        "<h2>Pilot, then roll out</h2>" +
        "<ol><li>Three users, two weeks, real work — not a sandbox.</li>" +
        "<li>Fix the top five friction points they name.</li>" +
        "<li>Roll out with a single one-page guide.</li>" +
        "<li>Train on the three tasks people do daily, not on a feature tour.</li>" +
        "<li>Set a decommission date for the old tool and hold it.</li></ol>" +
        "<!--FIG:Five-stage implementation: clean, configure, pilot, train, decommission-->" +
        "<h2>Why the decommission date matters</h2>" +
        "<p>Two systems running in parallel indefinitely is the most expensive possible outcome: double cost, split data, and no reliable reporting. Pick the date at kickoff, export an archive, and turn the old tool off. If it slips twice, the implementation has failed and it is worth saying so out loud.</p>",
      faq: [
        { q: "Should we pay the vendor for implementation?", a: "<p>For data migration on a complex source system, often yes. For configuration a capable admin can do, usually not.</p>" },
        { q: "How long should parallel running last?", a: "<p>Two to four weeks, read-only on the old system. Longer means nobody has committed.</p>" }
      ],
      related: ["crm-selection-guide", "software-selection-checklist"]
    },

    "help-desk-software-guide": {
      title: "Help desk software guide for small teams",
      h1: "Choosing a help desk before the shared inbox breaks",
      section: "CRM & tooling",
      eyebrow: "Explainer",
      dek: "When a shared mailbox stops working, the four features that matter, self-service that reduces volume, and AI triage done sensibly.",
      disclosure: true,
      answer: "Move off a shared inbox when you cannot answer \"who is handling this?\" or \"how long did that take?\". Then buy on <strong>assignment clarity, response-time reporting, a usable knowledge base, and integration with the tool holding customer records</strong>.",
      body:
        "<h2>The signals you have outgrown a shared mailbox</h2>" +
        "<ul><li>Two people reply to the same request.</li>" +
        "<li>Nobody can say how long the average reply takes.</li>" +
        "<li>Requests are lost when someone takes leave.</li>" +
        "<li>You cannot tell which questions repeat.</li></ul>" +
        "<h2>The four features that matter</h2>" +
        "<ol><li><strong>Assignment and status</strong> that make ownership unambiguous.</li>" +
        "<li><strong>Reporting</strong> on first response, resolution time and volume by topic.</li>" +
        "<li><strong>Knowledge base</strong> your team can update in the flow of answering.</li>" +
        "<li><strong>Customer context</strong> pulled from the CRM or billing system.</li></ol>" +
        "<!--AD-->" +
        "<h2>Reducing volume beats answering faster</h2>" +
        "<p>Tag every request by topic for a month, then fix the top three causes in the product, the onboarding or the documentation. That work removes tickets permanently; hiring removes them temporarily and more expensively.</p>" +
        "<h2>AI triage, used carefully</h2>" +
        "<p>Classification and drafting are genuinely useful here. Fully automated replies to customers are not, until you have measured accuracy on your own historical tickets — the method is in the <a href='ai-tools-for-small-business.html'>AI tools guide</a>.</p>",
      edge: {
        intro: "Help desk comparisons are written by vendors and by affiliates earning on referred trials, which produces two predictable distortions: pricing is quoted per agent as though agents were the only meter, and the metrics the software reports are presented as the metrics you should manage. Both are wrong in ways that cost money after the purchase. The pricing distortion is arithmetic; the metrics one is worse, because a help desk will faithfully optimise a team toward the wrong behaviour if you let its defaults define success.",
        gaps: [
          {
            claim: "Pricing is compared per agent per month, with the entry tier as the small-team answer.",
            problem: "Per agent is the advertised meter and rarely the whole bill, and the additional charges are structural rather than optional. Several categories sit outside the seat price depending on vendor: contacts or end users in the system, ticket or conversation volume, additional channels such as chat, voice minutes and telephony, and the automation, routing or SLA features that are typically the reason a team wanted software in the first place. The seat count itself is the trap: help desk work in a small company is intermittent — a developer who answers two escalations a month, an owner who covers holidays — and a per-agent licence forces you either to buy seats for occasional responders or to have people share logins, which destroys the assignment clarity you are paying for and corrupts every report. Light-agent or collaborator tiers exist for exactly this and are usually absent from comparison tables and from the entry plan.",
            ours: "We price against occasional responders explicitly, look for light-agent seats, and separate contact-volume, channel and automation charges from the per-agent figure before comparing anything."
          },
          {
            claim: "Buy on reporting: first response time, resolution time and volume by topic.",
            problem: "These are the right things to measure and the wrong things to target, and help desk software makes the difference invisible because it ships dashboards and often SLA alerts built on them. First response time is trivially gamed by a holding reply that resolves nothing, and teams do this reflexively once the number is watched. Resolution time rewards closing tickets, which rewards closing prematurely and produces the reopened-ticket pattern that looks like good performance in the aggregate. Both are also arithmetically distorted by business-hours calendars and by whether time waiting on the customer is excluded — two vendors reporting the same underlying work can differ substantially on identical data. The measures that resist gaming are unglamorous and rarely defaulted: first-contact resolution, reopen rate, contacts per customer per month, and the age of the oldest open ticket, which is the single number that catches the request everyone has quietly avoided.",
            ours: "We name reopen rate, first-contact resolution and oldest-open-ticket age as the targets, and check how each product counts business hours and customer-wait time before trusting any comparison."
          },
          {
            claim: "&lsquo;Move off the shared inbox&rsquo; is presented as a straightforward upgrade in tooling.",
            problem: "It is also a migration and a deliverability change, and neither is mentioned. Your support address has to be redirected into the new system, which in practice means DNS and mail-authentication work: the platform sends on your behalf, so SPF, DKIM and DMARC alignment have to be configured or your replies start landing in spam — a failure mode that looks like customers ignoring you. History is the second problem: years of prior conversation usually do not migrate, so you either run two systems during a transition or lose the context needed to answer follow-ups on anything ongoing. Third, the platform now owns your customer correspondence, so retention and export matter: on cancellation, what you can extract is often a limited ticket export without attachments, and some vendors delete after a short window. This is the same portability question as any other tool, but here the data is your customer relationship record.",
            ours: "We treat the switch as a mail-deliverability project with SPF, DKIM and DMARC as prerequisites, plan the history gap deliberately, and check ticket-and-attachment export before the correspondence lives somewhere else."
          },
          {
            claim: "Self-service and a knowledge base reduce ticket volume; AI deflection reduces it further.",
            problem: "Deflection is real and the way it is measured is close to meaningless. A deflection rate calculated as searches or bot sessions that did not become tickets counts every customer who gave up, decided you were unhelpful, or churned silently — all of which score as successes. The number that matters is contacts per customer over time against retention, not the ratio the vendor dashboard reports. There is also an ordering point the genre inverts: a knowledge base written before you have tagged a month of real tickets documents what you assume people ask. And AI deflection has an asymmetry nobody prices: a confidently wrong answer delivered without a human in the loop is more expensive than a slow correct one, because it is unrecoverable and can be repeated at scale. The honest sequence is classification and draft assistance first, measured against your own historical tickets, with customer-facing autonomy last and only where being wrong is cheap.",
            ours: "We reject vendor deflection rates in favour of contacts per customer against retention, write the knowledge base from a month of real tags, and stage AI by the cost of being wrong rather than by capability."
          }
        ],
        only: [
          "The meters outside the per-agent price — contacts, ticket volume, channels, automation — plus light-agent seats for occasional responders.",
          "Why first response and resolution time are gameable, and the four measures that resist it including oldest-open-ticket age.",
          "The switch as a mail-deliverability project: SPF, DKIM and DMARC alignment, or your replies go to spam.",
          "The history gap at migration, and what a help desk export actually contains when your customer correspondence lives there.",
          "Why vendor deflection rates count customers who gave up — and staging AI by the cost of being wrong rather than by capability."
        ]
      },
      faq: [
        { q: "Can a CRM double as a help desk?", a: "<p>Some do adequately at low volume. Above roughly 200 requests a month, the reporting gap becomes obvious.</p>" },
        { q: "Is live chat worth adding?", a: "<p>Only if you can staff it within the promised window. An unattended chat widget damages trust more than no chat.</p>" },
        { q: "Why did our reply rate to customers drop after switching?", a: "<p>Usually mail authentication. The platform sends on your behalf, so SPF, DKIM and DMARC have to be aligned for your domain or replies are filtered as spam. Check this before blaming the tool.</p>" }
      ],
      sources: [
        { name: "RFC 7489 — Domain-based Message Authentication, Reporting and Conformance (DMARC)", url: "https://www.rfc-editor.org/rfc/rfc7489", note: "Alignment requirements when a third-party platform sends mail for your domain" },
        { name: "Google — email sender guidelines", url: "https://support.google.com/a/answer/81126", note: "Authentication requirements that decide whether help desk replies reach the inbox" }
      ],
      related: ["crm-selection-guide", "ai-tools-for-small-business"]
    },

    "ai-policy-for-small-teams": {
      title: "A one-page AI use policy for small teams",
      h1: "Writing an AI use policy people will actually follow",
      section: "AI & spend",
      eyebrow: "Explainer",
      dek: "What may be pasted in, what must never be, who reviews output, disclosure rules, and how to keep the policy to one page.",
      answer: "One page, four sections: <strong>approved tools, data that must never be entered, human review requirements, and disclosure</strong>. A policy longer than a page is not read, and an unread policy provides no protection at all.",
      body:
        "<h2>Approved tools</h2>" +
        "<p>List the specific tools and accounts people may use for work, and state that personal accounts are not approved. Company accounts give you audit logs, retention control and contractual terms about training on your data.</p>" +
        "<h2>Never enter this</h2>" +
        "<ul><li>Customer or employee personal data, unless the tool is approved for it in writing.</li>" +
        "<li>Credentials, keys or access tokens.</li>" +
        "<li>Unpublished financial information.</li>" +
        "<li>Anything under a customer NDA.</li>" +
        "<li>Source code, unless the tool is explicitly approved for it.</li></ul>" +
        "<!--AD-->" +
        "<h2>Human review</h2>" +
        "<p>Name the categories where a human must review before anything leaves the company: customer communications, anything legal or financial, published content, and any factual claim. State that the human reviewer owns the output — this is the sentence that actually changes behaviour.</p>" +
        "<h2>Disclosure</h2>" +
        "<p>Decide and write down when AI involvement is disclosed to customers, and what your contracts already require. Some customer agreements now restrict processing their data with AI subprocessors; check before you standardise a tool.</p>" +
        "<!--FIG:One-page AI policy: approved tools, prohibited data, review, disclosure-->" +
        "<h2>Keep it alive</h2>" +
        "<p>Review quarterly, because the tools change monthly. Pair it with the <a href='vendor-security-review.html'>vendor review</a> for each approved tool, and keep a register of what was approved and when.</p>",
      faq: [
        { q: "Do we need this if only two people use AI?", a: "<p>Yes. The risk is per-incident, not per-headcount, and one page costs an hour.</p>" },
        { q: "Should we block AI tools instead?", a: "<p>Blocking pushes usage to personal accounts you cannot see. Approve a tool, give people accounts, and set boundaries.</p>" }
      ],
      sources: [
        { name: "NIST — AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework" }
      ],
      related: ["ai-tools-for-small-business", "vendor-security-review"]
    },

    "crm-software-cost": {
      title: "CRM software cost 2026: real three-year pricing for small teams",
      h1: "What a CRM actually costs in 2026",
      section: "Cost & pricing",
      eyebrow: "High-intent pricing guide",
      dek: "Per-seat list prices by tier, the add-ons that are not optional, implementation and migration cost, and a three-year total for a ten-person team.",
      disclosure: true,
      answer: "Budget <strong>$25–$90 per user per month</strong> for a small-team CRM that includes the features most teams need, plus <strong>$1,500–$8,000 one-off</strong> for migration and setup. For ten users, a realistic three-year total is <strong>$14,000–$40,000</strong> once tier jumps and uplift are included.",
      table: {
        caption: "Indicative CRM cost by tier archetype, ten users, July 2026.",
        headers: ["Tier archetype", "Per user / month", "What is usually missing", "3-year total, 10 users"],
        rows: [
          { cells: ["Free / starter", "$0 – $20", "Automation, reporting, SSO", "$0 – $7,600"] },
          { best: true, cells: ["<strong>Professional</strong>", "$40 – $60", "Advanced permissions, some integrations", "$16,000 – $24,000"] },
          { cells: ["Advanced / business", "$70 – $110", "Little; often over-specified for 10 users", "$28,000 – $44,000"] },
          { cells: ["Suite bundle (CRM + marketing)", "$80 – $150", "Depends heavily on contact volume", "$32,000 – $60,000"] }
        ],
        note: "List-price ranges compiled from published vendor pricing pages, July 2026, excluding implementation. Three-year totals assume a 5% annual uplift and no seat growth."
      },
      body:
        "<h2>The costs that are not on the pricing page</h2>" +
        "<ol><li><strong>Data migration</strong> from an existing CRM: $1,500–$8,000, or two weeks of internal time.</li>" +
        "<li><strong>Integration work</strong> where a native connector does not exist — often paid middleware, billed by task volume.</li>" +
        "<li><strong>The tier jump</strong> for the one feature in the demo that lives one level up.</li>" +
        "<li><strong>Contact-volume pricing</strong> in bundled marketing tiers, which scales independently of seats.</li>" +
        "<li><strong>Annual uplift</strong>, typically 3–8% where the contract is silent.</li></ol>" +
        "<!--AD-->" +
        "<h2>Where the money is usually wasted</h2>" +
        "<ul><li>Seats for people who read reports rather than update records — ask about read-only or lighter licences.</li>" +
        "<li>The advanced tier bought for one permission setting.</li>" +
        "<li>A marketing bundle at a contact volume you will not reach for two years.</li>" +
        "<li>Paying for implementation of a configuration you should keep minimal anyway.</li></ul>" +
        "<!--FIG:Three-year CRM cost for ten users: licences, migration, integration, uplift-->" +
        "<h2>Getting a lower number honestly</h2>" +
        "<p>Model your own scenario in the <a href='saas-spend-calculator.html'>three-year calculator</a>, then ask for an annual prepayment discount, seat-price protection and a capped uplift rather than a bigger headline discount. The <a href='saas-contract-negotiation.html'>negotiation guide</a> has the wording.</p>",
      edge: {
        intro: "This query is served overwhelmingly by affiliate comparison sites earning a commission per signup, and the format they have converged on — a table of the lowest published per-seat price per vendor — is close to the least useful way to present this decision. The per-seat headline is the smallest and most manipulable component of what a CRM costs, and three of the four largest costs are absent from every such table.",
        gaps: [
          {
            claim: "\"CRM pricing compared: from $12 per user per month.\"",
            problem: "Almost every entry-level figure carries conditions the table strips out. It is commonly the annual-prepay rate, so the monthly price is twenty to thirty percent higher; it frequently carries a minimum seat count, so a three-person team cannot buy it; and in the tiers most often quoted the features shown in the demo sit one level up. The structural trap is the tier jump: a single required capability — a permission setting, a specific integration, an approval workflow — moves the whole company up a tier, and the increment is not one feature's worth of money but often forty to eighty percent of the entire bill. Reporting the entry price therefore predicts the actual invoice poorly and predicts it <em>low</em> in a systematic direction.",
            ours: "We price tier <em>archetypes</em> with what each is typically missing, so the reader can locate the jump before signing, and we state that the quoted figure assumes annual prepayment."
          },
          {
            claim: "Cost is per user per month, so multiply by seats and by twelve.",
            problem: "Two things break that arithmetic and both are in the contract rather than on the pricing page. The first is annual uplift: where the agreement is silent, renewal increases of roughly three to eight percent are normal, and in suite products contract language permitting an increase at list price on renewal is common — so year three is materially above year one even with no seat growth. The second is that in bundled marketing tiers a second meter runs alongside seats, priced on contacts or records, and it scales with database growth rather than headcount. A ten-seat company can double its bill without hiring anyone. Multiplying seats by price by months therefore understates a three-year commitment in two independent ways.",
            ours: "We model a three-year total with uplift applied, and treat contact-volume pricing as a separate meter to forecast rather than a footnote."
          },
          {
            claim: "The comparison ends at the subscription; migration is mentioned as 'setup' if at all.",
            problem: "For an existing CRM the switching cost frequently exceeds a year of licence fees, and it is not mainly the migration invoice. Data cleansing and de-duplication, rebuilding automations and reports, re-integrating the surrounding stack where a native connector does not exist — which often means paid middleware billed by task volume, a recurring cost added by the change — and the productivity trough while a sales team works in an unfamiliar system. That last one is real money and appears in no comparison. The corollary is the reason to check it before you buy rather than after: the same friction is what a vendor relies on at renewal, so the export path and the data you can actually take with you determine your negotiating position for the whole life of the contract.",
            ours: "We cost migration as four separate lines including middleware and the productivity trough, and treat export capability as a pre-purchase check because it sets your leverage at every renewal."
          },
          {
            claim: "\"Negotiate hard for the biggest discount you can get.\"",
            problem: "Optimising the headline discount is optimising the wrong variable, and vendors concede it readily because it is the cheapest thing they can give. A steep first-year discount off list creates a large step-up at renewal, on a base you can no longer leave; the discount is a loan against year two. The terms that actually control three-year cost are rarely asked for: a cap on renewal uplift, seat-price protection so added seats come in at today's rate rather than list, the ability to reduce seat count at renewal — many agreements permit increases only — and a defined exit with data export. A smaller discount with a capped uplift and downward seat flexibility beats a larger one without them, and it is the reverse of what the negotiation advice on these pages recommends.",
            ours: "We rank the four contract terms above the discount percentage, and show why a first-year discount without an uplift cap is a deferred increase rather than a saving."
          }
        ],
        only: [
          "Tier archetypes with what each is missing — so the tier jump is visible before you sign, not after the demo.",
          "Three-year totals with annual uplift applied, plus contact-volume pricing treated as a second meter independent of seats.",
          "Migration costed in four lines including recurring middleware and the sales-team productivity trough.",
          "Export capability framed as renewal leverage rather than an exit checkbox.",
          "The four contract terms — uplift cap, seat-price protection, downward flexibility, exit — ranked above the discount percentage."
        ]
      },
      leadForm: {
        title: "Get a CRM shortlist and cost model",
        sub: "Tell us your team size, sales motion and must-have integrations; we send a three-product shortlist with three-year costs modelled.",
        offer: "crm-shortlist",
        numberLabel: "Users needing a seat",
        consent: "I consent to being contacted about CRM selection. StackSift may be paid a referral fee by a vendor I choose. Placement is never sold.",
        cta: "Send my shortlist",
        steps: ["We match your sales motion against product data models.", "You are told which vendors, if any, will contact you.", "You receive three-year costs, not per-seat headlines.", "The selection scorecard is sent either way."],
        privacy: "Stored: name, email, company, user count, notes. Never sold."
      },
      faq: [
        { q: "Is a free CRM tier viable long term?", a: "<p>For a solo seller, sometimes. Check the export and the price at 500 contacts before you build a process on it.</p>" },
        { q: "Do annual contracts save money?", a: "<p>Typically 10–20% against monthly, in exchange for losing the ability to leave. Fine in a mature category.</p>" },
        { q: "Should we buy the marketing bundle?", a: "<p>Only if you will use it this year. Contact-based pricing grows faster than most teams expect.</p>" }
      ],
      sources: [
        { name: "Vendor published pricing pages", url: "", note: "List prices for each tier archetype, reviewed July 2026; ranges rather than named vendors because pricing changes" },
        { name: "FTC — negative option and automatic renewal guidance", url: "https://www.ftc.gov/business-guidance", note: "Disclosure expectations for auto-renewing subscriptions" }
      ],
      related: ["crm-selection-guide", "best-crm-small-business", "saas-spend-calculator"]
    },

    "saas-management-platform-cost": {
      title: "SaaS management platform cost and whether you need one",
      h1: "SaaS management platforms: cost and break-even",
      section: "Cost & pricing",
      eyebrow: "High-intent pricing guide",
      dek: "What these tools cost per employee, what they actually discover, and the tool count at which they pay for themselves.",
      disclosure: true,
      answer: "Expect <strong>$3–$12 per employee per month</strong>, often with a floor around $5,000–$15,000 a year. Below roughly 40 applications a spreadsheet register and a calendar beat the platform; above that, discovery and renewal alerts usually recover the fee.",
      table: {
        caption: "Indicative SaaS management tooling cost, July 2026.",
        headers: ["Approach", "Annual cost, 50 employees", "Discovers shadow IT", "Best when"],
        rows: [
          { best: true, cells: ["<strong>Spreadsheet register + calendar</strong>", "$0", "Only what hits statements", "Under ~40 applications"] },
          { cells: ["Expense-tool subscription reporting", "Included", "Card charges only", "You already run expense software"] },
          { cells: ["Entry SaaS management platform", "$3,000 – $7,000", "Via SSO and finance feeds", "40–100 applications"] },
          { cells: ["Full platform with licence optimisation", "$8,000 – $20,000", "Yes, plus usage telemetry", "100+ applications, dedicated owner"] }
        ],
        note: "Ranges from published pricing and quotes reviewed July 2026. Most vendors price per employee, not per application."
      },
      body:
        "<h2>What these platforms actually do</h2>" +
        "<ol><li>Discover applications from SSO logs, finance feeds and browser agents.</li>" +
        "<li>Track seats against usage to find dormant licences.</li>" +
        "<li>Alert on renewals and notice windows.</li>" +
        "<li>Automate offboarding across connected applications.</li>" +
        "<li>Store contracts and owners in one place.</li></ol>" +
        "<!--AD-->" +
        "<h2>The break-even arithmetic</h2>" +
        "<p>If your software spend is $200,000 and a platform reliably surfaces 8% of waste, it returns $16,000 against a $6,000 fee. At $60,000 of spend the same 8% is $4,800 — and a two-hour quarterly <a href='saas-spend-audit.html'>manual audit</a> captures most of it for nothing.</p>" +
        "<!--FIG:Break-even: platform fee against recoverable waste by software spend-->" +
        "<h2>The offboarding argument</h2>" +
        "<p>The security case is often stronger than the savings case. Removing a departing employee from 60 applications by hand is where access is left behind, and leftover access is a real breach path. If your offboarding is manual and your application count is high, weight that heavily.</p>" +
        "<h2>Before you buy one</h2>" +
        "<p>Run the manual audit once. It gives you the application count, the waste estimate and the register the platform would import — which is exactly the evidence you need to decide, and to negotiate.</p>",
      edge: {
        intro: "Every substantial page on this topic is published by a vendor in the category, which produces a predictable shape: a large industry waste statistic, a promise to recover it, and no arithmetic connecting the two to a company of any particular size. The honest answer has a threshold below which the tool loses money, and no vendor will publish it.",
        gaps: [
          {
            claim: "\"Companies waste 30% of their SaaS spend. Our platform finds it.\"",
            problem: "The statistic is usually drawn from surveys weighted toward large enterprises with hundreds of applications and devolved purchasing, and it is applied unchanged to a fifty-person company — where the waste rate is genuinely lower because the estate is small enough to know. Two further slippages follow. Waste <em>identified</em> is not spend <em>recovered</em>: a dormant seat inside an annual contract cannot be cancelled until renewal, and mid-term reductions are typically not permitted, so a share of the finding is unrealisable for up to twelve months. And the percentage is applied to total software spend when much of that sits in one or two committed platform contracts where there is nothing to reclaim. The recoverable figure is a fraction of a fraction of the headline.",
            ours: "We work the break-even on the reader's own spend and state plainly that below roughly forty applications a quarterly manual audit captures most of the same waste for nothing."
          },
          {
            claim: "\"Discover all your shadow IT automatically.\"",
            problem: "Discovery coverage depends entirely on the mechanism, and each mechanism has a blind spot that vendor pages do not enumerate. Single sign-on logs see only applications behind SSO — frequently around half, and systematically excluding the unsanctioned tools that are the actual target. Finance and card feeds see anything paid on a company card, and therefore miss free tiers, personal-card expense claims and anything invoiced to a department. Browser agents see the most and require deployment to every device plus an employee-monitoring conversation with real privacy and works-council implications. So &lsquo;complete visibility&rsquo; means the union of three partial sources, and the most consequential category — a free-tier tool holding customer data, signed up with a work email and no payment trail — is invisible to the two mechanisms most platforms actually use.",
            ours: "We list what each discovery mechanism can and cannot see, and name the free-tier-with-customer-data case as the item that survives every automated method."
          },
          {
            claim: "The platform is a cost-savings tool, justified by ROI on licence spend.",
            problem: "That framing puts the weaker case forward and buries the stronger one. The savings argument fails below a spend threshold; the access-hygiene argument does not. Manually removing a departing employee from sixty applications is where access is left behind, and orphaned accounts in tools outside SSO are a well-documented breach path — an ex-employee's live session in a customer-data tool is a loss with no licence-fee equivalent. There is also a compliance dimension the ROI framing omits entirely: the register these platforms build is the processor inventory a data-protection regime expects you to maintain and a security questionnaire asks for, which is work you owe regardless of whether any licence is reclaimed.",
            ours: "We evaluate the platform on offboarding completeness and register maintenance alongside savings, because for many companies those justify it where the licence arithmetic does not."
          },
          {
            claim: "Adopt the platform and spend control is handled.",
            problem: "The tool produces a list; the list changes nothing without a named owner and a decision cadence. Deployments fail in a specific and repeatable way — discovery runs, several hundred findings appear, nobody has authority to cancel anything belonging to another team, and the platform becomes a dashboard nobody opens while its own subscription renews. Two costs also go unmentioned: the platform requires privileged read access into identity, finance and often every connected application, making it a high-value target and a new vendor-risk assessment of its own; and it needs integration and maintenance effort as your stack changes. The precondition is organisational rather than technical, which is why the cheapest first move is to run the manual audit — it produces the application count and waste estimate that decide the purchase, and proves whether anyone will act on a list.",
            ours: "We require a named owner and a renewal cadence before purchase, treat the platform's own privileged access as a risk to assess, and recommend the manual audit first as the evidence for the decision."
          }
        ],
        only: [
          "Break-even arithmetic on your own spend, including why identified waste is not recoverable waste inside annual contracts.",
          "Discovery mechanisms compared by blind spot — SSO, finance feeds, browser agents — and the free-tier case all three miss.",
          "The offboarding and processor-register cases stated as the stronger justification where savings arithmetic fails.",
          "The organisational precondition — named owner and decision cadence — that decides whether any finding is acted on.",
          "The platform's own privileged access into identity and finance treated as a vendor risk, not just a feature."
        ]
      },
      leadForm: {
        title: "Get a spend-control recommendation",
        sub: "Send your headcount, rough software spend and application count; we tell you whether a platform breaks even or a register is enough.",
        offer: "saas-spend-control",
        numberLabel: "Applications in use (estimate)",
        consent: "I consent to being contacted about SaaS spend management. StackSift may be paid a referral fee. Placement is never sold.",
        cta: "Check my break-even",
        steps: ["We model waste recovery against platform fees at your scale.", "You are told who will contact you before anything is shared.", "You get the honest answer, including 'not yet'.", "The manual audit template is sent regardless."],
        privacy: "Stored: name, email, company, application count, notes. Never sold."
      },
      faq: [
        { q: "Can our SSO provider do this?", a: "<p>Partly — it sees applications behind SSO, which is often half of them. Combine SSO data with card statements.</p>" },
        { q: "Do these platforms negotiate for us?", a: "<p>Some offer a benchmarking or negotiation service, usually priced as a share of savings. Read how the fee is calculated.</p>" }
      ],
      sources: [
        { name: "NIST — Cybersecurity Framework, asset and identity management", url: "https://www.nist.gov/cyberframework", note: "Basis for the application register and offboarding argument" },
        { name: "Vendor published pricing and quotes", url: "", note: "Per-employee pricing bands and annual floors, reviewed July 2026" }
      ],
      related: ["saas-spend-audit", "saas-renewal-playbook", "saas-spend-calculator"]
    },

    "ai-tools-pricing-comparison": {
      title: "AI tools pricing 2026: what business AI actually costs",
      h1: "AI tool pricing, compared properly",
      section: "Cost & pricing",
      eyebrow: "High-intent pricing guide",
      dek: "Per-seat assistants, usage-based APIs, AI add-ons inside tools you already pay for, and how to avoid paying three times for the same capability.",
      disclosure: true,
      answer: "Business AI arrives three ways: <strong>per-seat assistants ($20–$60/user/month)</strong>, <strong>usage-based API access</strong>, and <strong>AI add-ons inside existing tools ($10–$40/user/month)</strong>. Most teams end up paying for overlapping capability in all three, and the first saving is consolidation.",
      table: {
        caption: "Indicative business AI pricing models, July 2026.",
        headers: ["Model", "Typical price", "Cost predictability", "Best for", "Main trap"],
        rows: [
          { best: true, cells: ["<strong>Per-seat assistant</strong>", "$20 – $60 / user / mo", "High", "Drafting, summarising, general use", "Paying for occasional users"] },
          { cells: ["AI add-on in an existing tool", "$10 – $40 / user / mo", "High", "Tasks inside that tool", "Duplicates the assistant you have"] },
          { cells: ["Usage-based API", "Per million tokens", "Low without limits", "Embedded product features", "No spend cap set"] },
          { cells: ["Bundled into a higher tier", "Tier jump", "High", "Teams already near that tier", "Buying a tier for one feature"] }
        ],
        note: "Published list pricing reviewed July 2026. This category reprices frequently; treat as a snapshot."
      },
      body:
        "<h2>Stop paying three times</h2>" +
        "<p>A general assistant subscription, an AI add-on in the CRM, and an AI writing feature in the marketing tool frequently do the same drafting job. Inventory AI capability by task rather than by vendor, pick one home for each task, and cancel the rest. The method is the same as any <a href='saas-spend-audit.html'>spend audit</a>.</p>" +
        "<!--AD-->" +
        "<h2>Usage-based pricing needs a cap</h2>" +
        "<p>If you build anything on an API, set a hard spend limit and an alert before you ship. Usage-based AI billing is the fastest-moving line on a small company's card statement, and a loop that retries on failure can produce a four-figure surprise overnight.</p>" +
        "<!--FIG:Same drafting task priced three ways: assistant, add-on, API-->" +
        "<h2>What to refuse to pay for</h2>" +
        "<ul><li>A tier jump justified by one AI feature you can get standalone for less.</li>" +
        "<li>Multi-year commitments in a category repricing every quarter.</li>" +
        "<li>Per-seat AI for people who use it twice a month — buy fewer seats and share a workflow.</li>" +
        "<li>Features whose accuracy you have not tested on your own material.</li></ul>" +
        "<h2>Prove value before you standardise</h2>" +
        "<p>Run the twenty-task evaluation from the <a href='ai-tools-for-small-business.html'>AI tools guide</a>, then commit annually only where the result was clearly usable. Anything ambiguous stays monthly.</p>",
      edge: {
        intro: "Coverage of this topic is dominated by affiliate round-ups that list a per-seat price beside each product and rank them. In a category where the pricing model itself differs between products, and where the same capability is often sold to you three times over, a price-per-seat league table answers a question that does not correspond to any real purchasing decision.",
        gaps: [
          {
            claim: "\"Best AI tools compared — pricing from $20/month.\"",
            problem: "Three different meters are being tabulated as though they were one. A per-seat assistant is priced on people; an API is priced on tokens, with input, output and reasoning tokens frequently billed at different rates; an in-product add-on is often priced on <em>credits</em> or actions, a synthetic unit with no stable relationship to work done. Ranking these by dollar figure produces a meaningless ordering, because the only comparable quantity is cost per unit of work completed, which requires knowing your own volume. It also hides where usage-based billing actually goes wrong: without a hard cap, a retry loop or an agentic workflow that calls itself can generate a four-figure charge overnight — a failure mode with no equivalent in per-seat software and no mention in a pricing table.",
            ours: "We compare on cost predictability and cost per task rather than headline price, and treat setting a hard spend cap before shipping anything on an API as mandatory rather than advisory."
          },
          {
            claim: "The comparison is vendor by vendor, so you evaluate products against each other.",
            problem: "That framing is what causes the most common overspend in this category, which is not choosing the wrong tool but buying the same capability three times. A general assistant subscription, an AI add-on in the CRM, an AI writing feature in the marketing suite and a bundled tier upgrade all frequently perform the same drafting and summarising work, each individually defensible, collectively duplicative. No vendor-by-vendor comparison surfaces it because the duplication exists only in the aggregate. The related trap is the tier jump justified by one AI feature: the increment carries the entire tier's cost forever, usually for capability available standalone for less.",
            ours: "We inventory AI capability by <em>task</em> rather than by vendor, assign one owner per task and cancel the overlap — and we price the standalone equivalent before any tier upgrade."
          },
          {
            claim: "\"Save 10 hours a week\" — productivity claims presented as the return.",
            problem: "These figures come from vendor-commissioned studies of self-reported time on tasks selected by the vendor, and they omit the cost that determines whether the saving is real: verification. Output that must be checked against a source before use converts a writing task into an editing-plus-fact-checking task, which is faster for some work and slower for work where an error is expensive or hard to spot. Two costs are systematically excluded — the review time, and the occasional confidently wrong output that reaches a customer. There is also a measurement problem nobody discloses: model behaviour changes under the same subscription, so a workflow validated in one quarter can degrade or improve without notice, which means a one-off evaluation does not stay valid.",
            ours: "We require a twenty-task evaluation on your own material with verification time counted, and treat re-evaluation as recurring because the product changes underneath a fixed price."
          },
          {
            claim: "Annual commitments are recommended for the discount, as with other software.",
            problem: "This is imported from mature SaaS categories and is wrong here for a specific reason: prices in this category have fallen repeatedly and capability has been absorbed into cheaper tiers, so a multi-year commitment locks you into a price and a model that the market is likely to undercut. The discount is real and the option value you surrender is usually larger. The terms that matter more than price go unexamined in every round-up: whether your inputs and outputs train the vendor's models and how that is defaulted, where data is processed and retained, whether an enterprise or zero-retention tier is required for confidential or regulated material, and what indemnity if any covers output. Those determine whether the tool is usable on your actual work — a question that precedes what it costs.",
            ours: "We recommend monthly terms in a repricing category, and put training-data defaults, retention, processing location and output indemnity ahead of price in the evaluation."
          }
        ],
        only: [
          "Three incompatible meters — seats, tokens, credits — separated, and compared on cost per task rather than headline price.",
          "The hard spend cap as a shipping precondition, with the retry-loop failure mode that makes it necessary.",
          "Capability inventoried by task, exposing the pay-three-times overlap no vendor comparison can show.",
          "Verification time counted inside the productivity claim, plus re-evaluation because model behaviour changes under a fixed price.",
          "Training-data defaults, retention, processing location and output indemnity ranked above price."
        ]
      },
      leadForm: {
        title: "Get an AI tooling cost review",
        sub: "Send your current AI subscriptions and the tasks you want covered; we map overlap and show the consolidated cost.",
        offer: "ai-tooling-review",
        numberLabel: "People who would use it",
        consent: "I consent to being contacted about AI tooling. StackSift may be paid a referral fee. Placement is never sold.",
        cta: "Review my AI spend",
        steps: ["We map your AI spend by task rather than by vendor.", "You are told who will contact you.", "You get a consolidation plan with prices.", "The evaluation template is sent either way."],
        privacy: "Stored: name, email, company, user count, notes. Never sold."
      },
      faq: [
        { q: "Are AI features worth a tier upgrade?", a: "<p>Rarely. Price the standalone equivalent first; tier jumps carry the rest of the tier with them forever.</p>" },
        { q: "How do we forecast API cost?", a: "<p>Measure tokens on 100 real requests, multiply by expected volume, then double it. Set the cap at that number.</p>" }
      ],
      sources: [
        { name: "Vendor published pricing pages", url: "", note: "Per-seat, per-token and credit pricing reviewed July 2026; this category reprices frequently" },
        { name: "NIST — AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework", note: "Verification, data governance and evaluation practice" }
      ],
      related: ["ai-tools-for-small-business", "saas-spend-calculator", "ai-policy-for-small-teams"]
    },

    "best-crm-small-business": {
      title: "Best CRM for small business 2026, scored against a published rubric",
      h1: "Small-business CRMs compared",
      section: "Comparisons",
      eyebrow: "Comparison · scored rubric",
      dek: "CRM archetypes scored on three-year cost, core performance, data portability, integrations, admin burden and security posture.",
      disclosure: true,
      answer: "Pick by <strong>sales motion</strong>: high-volume transactional selling, relationship selling with long cycles, or product-led with self-serve signups. Each is served best by a different CRM archetype, and choosing across archetypes is where teams end up fighting their tool.",
      table: {
        caption: "CRM archetypes scored against the StackSift rubric, July 2026.",
        headers: ["Archetype", "3-year cost", "Data portability", "Integrations", "Best for"],
        rows: [
          { best: true, cells: ["<strong>Focused sales CRM</strong>", "Low–moderate", "Strong", "Good", "1–15 sellers, relationship selling"] },
          { cells: ["<strong>Suite CRM (sales + marketing)</strong>", "High", "Moderate", "Excellent", "Marketing-led growth, one system of record"] },
          { cells: ["<strong>Workspace / database CRM</strong>", "Low", "Excellent", "Via automation", "Unusual processes, technical owner"] },
          { cells: ["<strong>Vertical CRM</strong>", "Moderate", "Variable", "Industry-specific", "Regulated or industry-specific workflows"] }
        ],
        note: "Archetypes rather than brands: individual products move between these categories as they add features. Score the specific product against the rubric with its current pricing page."
      },
      body:
        "<h2>How we scored</h2>" +
        "<p>Each archetype was tested with the same workspace: 25 companies, 40 contacts, one pipeline, one email integration, one automation and one weekly report. Scoring uses the six weighted criteria in our <a href='review-methodology.html'>methodology</a>, tested in June–July 2026.</p>" +
        "<!--AD-->" +
        "<h2>Choosing by sales motion</h2>" +
        "<ul><li><strong>Relationship selling, long cycles:</strong> a focused sales CRM with excellent activity logging.</li>" +
        "<li><strong>Marketing-led:</strong> a suite, if you will genuinely use the marketing half.</li>" +
        "<li><strong>Unusual process:</strong> a workspace database, if one person owns and maintains it.</li>" +
        "<li><strong>Regulated industry:</strong> a vertical CRM, accepting weaker general integrations.</li></ul>" +
        "<h2>Run the one-minute test yourself</h2>" +
        "<p>Before signing, time a real seller logging a real call and moving a real deal. That single measurement predicts adoption better than any feature matrix, including ours. Then price it properly in the <a href='crm-software-cost.html'>cost guide</a>.</p>",
      methodology: "<p>Scored against the rubric in our <a href='review-methodology.html'>review methodology</a> using hands-on trials and published pricing collected June–July 2026. Affiliate relationships do not affect scoring or ordering, and no vendor reviewed this page before publication.</p>",
      faq: [
        { q: "Why archetypes rather than named winners?", a: "<p>Because the right answer depends on sales motion, and a single ranking would be wrong for most readers. We give the rubric and the test so you can score your shortlist.</p>" },
        { q: "How often is this retested?", a: "<p>Twice a year, and after any major repricing. The test date is on the page.</p>" }
      ],
      related: ["crm-selection-guide", "crm-software-cost", "saas-implementation-plan"]
    },

    "best-automation-tools": {
      title: "Best workflow automation tools 2026, scored against a published rubric",
      h1: "Automation tools compared",
      section: "Comparisons",
      eyebrow: "Comparison · scored rubric",
      dek: "Native automation, no-code middleware, workflow builders and light code — scored on cost at volume, reliability and maintainability.",
      disclosure: true,
      answer: "Start with <strong>native automation</strong> in tools you already pay for. Add <strong>middleware</strong> when you must cross tool boundaries, and watch task-based pricing at volume. Choose <strong>light code</strong> only if someone on the team will still maintain it next year.",
      table: {
        caption: "Automation approaches scored against the StackSift rubric, July 2026.",
        headers: ["Approach", "Cost at volume", "Reliability", "Maintainability", "Best for"],
        rows: [
          { best: true, cells: ["<strong>Native in-app automation</strong>", "Included", "High", "High", "Anything inside one tool"] },
          { cells: ["<strong>No-code middleware</strong>", "Rises with tasks", "Good", "Good", "Crossing 2–4 tools"] },
          { cells: ["<strong>Visual workflow platform</strong>", "Moderate", "Good", "Moderate", "Branching, multi-step processes"] },
          { cells: ["<strong>Scripts / serverless</strong>", "Low", "Depends on you", "Low without an owner", "High volume, technical team"] }
        ],
        note: "Task-based pricing means the cheapest approach changes with volume. Model your monthly task count before comparing."
      },
      body:
        "<h2>How we scored</h2>" +
        "<p>Each approach implemented the same three automations: form to CRM record, request routing with a notification, and a weekly report assembled from two sources. Scored on the six weighted criteria in our <a href='review-methodology.html'>methodology</a>, with error handling tested by deliberately breaking each flow.</p>" +
        "<!--AD-->" +
        "<h2>The volume cliff</h2>" +
        "<p>Task-priced middleware is excellent at hundreds of tasks a month and expensive at hundreds of thousands. Count triggers realistically — a per-row automation on a busy sheet generates far more tasks than people estimate — and recheck at renewal.</p>" +
        "<h2>What we tested by breaking things</h2>" +
        "<ul><li>Does a failure notify a human, or fail silently?</li>" +
        "<li>Can you replay a failed run after fixing the cause?</li>" +
        "<li>Is there a log showing what actually happened?</li>" +
        "<li>Can a second person understand the flow without the builder present?</li></ul>" +
        "<p>The maintainability rules are in the <a href='workflow-automation-guide.html'>automation guide</a>.</p>",
      methodology: "<p>Scored against our <a href='review-methodology.html'>methodology</a> using identical implementations built and deliberately broken in June–July 2026. Pricing from published pages on the test date.</p>",
      faq: [
        { q: "Is one middleware tool enough?", a: "<p>Usually. Two overlapping platforms doubles cost and halves the chance anyone understands the whole picture.</p>" },
        { q: "Should we automate before hiring?", a: "<p>Automate the documented, repetitive parts first. Automating an undocumented process just hides it.</p>" }
      ],
      related: ["workflow-automation-guide", "saas-spend-calculator"]
    },

    "saas-spend-calculator": {
      title: "SaaS three-year cost calculator: model the real price of software",
      h1: "SaaS spend and three-year cost calculator",
      section: "Tools",
      eyebrow: "Free tool",
      dek: "Turn a per-seat price into the three-year number the contract will actually cost — including tier jumps, implementation, middleware and annual uplift.",
      disclosure: true,
      toc: false,
      answer: "Enter seats, per-seat price, expected growth, one-off implementation and the contractual uplift. The calculator returns the three-year total, the effective monthly cost, and what a capped uplift would save you.",
      body:
        "<div id='calculator'></div>" +
        "<h2>Why three years</h2>" +
        "<p>Because that is roughly how long a team keeps a core tool, and because compounding uplift plus seat growth changes the ranking of a shortlist. Two products $10 apart per seat can be thousands apart over three years once uplift and tier jumps land.</p>" +
        "<h2>What this model deliberately includes</h2>" +
        "<ul><li>Seat growth, which most vendor quotes ignore.</li>" +
        "<li>Annual uplift, compounded — the single most under-modelled cost.</li>" +
        "<li>Implementation and migration as a one-off.</li>" +
        "<li>Middleware or add-on cost as a monthly line.</li></ul>" +
        "<h2>What it cannot know</h2>" +
        "<p>Your negotiated discount, the tier you will be pushed onto, and the productivity cost of a bad fit. Use it to compare a shortlist consistently, then negotiate the uplift cap with the <a href='saas-contract-negotiation.html'>contract guide</a>.</p>",
      calculator: {
        title: "Three-year software cost model",
        sub: "Seats, growth, uplift, implementation and add-ons in one number.",
        disclaimer: "An estimate for comparing options, not a quote. Confirm list prices and uplift terms in the vendor's order form and master agreement.",
        fields: [
          { id: "seats", label: "Seats at signature", type: "number", value: 10, min: 1, max: 5000, step: 1 },
          { id: "price", label: "Price per seat per month (USD)", type: "number", value: 45, min: 0, max: 5000, step: 1 },
          { id: "growth", label: "Seat growth per year (%)", type: "number", value: 15, min: 0, max: 200, step: 5, hint: "New hires who will need a licence." },
          { id: "uplift", label: "Annual price uplift (%)", type: "number", value: 6, min: 0, max: 50, step: 1, hint: "Assume 6–8% where the contract is silent." },
          { id: "setup", label: "Implementation / migration, one-off (USD)", type: "number", value: 3000, min: 0, max: 500000, step: 250 },
          { id: "addons", label: "Add-ons or middleware per month (USD)", type: "number", value: 120, min: 0, max: 100000, step: 10 },
          { id: "billing", label: "Billing term", type: "select", value: "annual", options: [{ value: "annual", label: "Annual prepay (assume 12% discount)" }, { value: "monthly", label: "Monthly (list price)" }] }
        ],
        compute: function (v) {
          var m = window.MDN_UTIL.money;
          var discount = v.billing === "annual" ? 0.88 : 1;
          var seats = v.seats;
          var price = v.price * discount;
          var priceCapped = price;
          var cappedRate = Math.min(v.uplift, 4);
          var licence = 0, uncapped = 0, capped = 0, seatsY3 = seats;
          for (var y = 0; y < 3; y++) {
            licence += seats * price * 12;
            uncapped += seats * price * 12;
            capped += seats * priceCapped * 12;
            seatsY3 = seats;
            seats = Math.round(seats * (1 + v.growth / 100));
            price = price * (1 + v.uplift / 100);
            priceCapped = priceCapped * (1 + cappedRate / 100);
          }
          var addons = v.addons * 36;
          var total = licence + addons + v.setup;
          var perMonth = total / 36;
          var perSeat = seatsY3 > 0 ? perMonth / seatsY3 : 0;
          var upliftSaving = uncapped - capped;
          return [
            { label: "Three-year total cost", value: m(total), hint: "Licences " + m(licence) + " + add-ons " + m(addons) + " + setup " + m(v.setup) + "." },
            { label: "Effective monthly cost", value: m(perMonth), hint: "The number to compare across a shortlist." },
            { label: "Effective cost per seat / month", value: m(perSeat), hint: "Against a quoted " + m(v.price) + " list price per seat." },
            { label: "Seats in year three", value: String(seatsY3), hint: "At " + v.growth + "% annual growth from " + v.seats + " seats." },
            { label: "Saving from a 4% uplift cap", value: m(upliftSaving), hint: upliftSaving > 0 ? "What negotiating the uplift clause is worth over three years." : "Your assumed uplift is already at or below the cap." }
          ];
        }
      },
      faq: [
        { q: "Is a 6% uplift assumption fair?", a: "<p>It is the middle of what we see where contracts are silent. If your order form caps it, enter the cap.</p>" },
        { q: "Why assume a 12% annual-prepay discount?", a: "<p>It is a common published range. Replace it with your actual quote by entering the discounted per-seat price and choosing monthly.</p>" }
      ],
      related: ["crm-software-cost", "saas-contract-negotiation", "saas-management-platform-cost"]
    },

    "software-selection-checklist": {
      title: "Software selection checklist: 32 checks before you sign",
      h1: "The software selection checklist",
      section: "Tools",
      eyebrow: "Free tool",
      dek: "Requirements, shortlist, trial, security, cost and contract — the checks to complete before signature. Tick as you go; progress saves in your browser.",
      toc: false,
      answer: "Work down the list and tick only what is genuinely done. Anything unticked at signature is a risk you have accepted deliberately — writing down which ones is the entire point of the exercise.",
      body:
        "<div id='checklist'></div>" +
        "<h2>How to use it</h2>" +
        "<p>Open it at kickoff, not the day before signature. The requirements and contract sections are the ones teams skip, and they are the two that cost money later.</p>" +
        "<h2>Then price it</h2>" +
        "<p>Pair the checklist with the <a href='saas-spend-calculator.html'>three-year cost calculator</a> and, for anything holding customer data, the <a href='vendor-security-review.html'>vendor security review</a>.</p>",
      checklist: {
        groups: [
          { title: "Requirements", note: "Written before any demo.", items: ["Five must-handle workflows written down", "Integrations that are genuinely non-negotiable listed", "Explicitly out of scope for this year written down", "Named decision owner agreed", "Budget ceiling agreed as a three-year number"] },
          { title: "Shortlist and trial", items: ["Exactly three products shortlisted", "Same test workspace built in each", "One real automation built in each", "The report a manager will ask for produced in each", "Daily task timed with a real user", "Trial data exported and inspected"] },
          { title: "Cost", items: ["List price of the tier you actually used confirmed", "Seat growth modelled for three years", "Implementation and migration quoted", "Middleware or add-on cost included", "Annual uplift assumption applied", "Read-only or lighter licence options asked about"] },
          { title: "Security and data", items: ["Data classification for this tool decided", "SOC 2 or ISO report requested and scope read", "Subprocessor list and regions obtained", "DPA signed where personal data is involved", "SSO availability and tier confirmed", "Deletion process on termination confirmed"] },
          { title: "Contract", items: ["Master agreement read, not just the order form", "Auto-renewal terms and notice window recorded", "Uplift cap requested in writing", "Seat price protection for the term requested", "Export scope specified in the agreement", "Termination assistance period agreed", "Renewal date and notice deadline in a shared calendar"] },
          { title: "Rollout readiness", items: ["Pilot group of three named", "Decommission date for the old tool set", "One-page internal guide drafted", "Owner responsible for data hygiene named"] }
        ]
      },
      faq: [
        { q: "Is my progress private?", a: "<p>Yes — ticks are stored only in your browser's local storage and never sent to us.</p>" },
        { q: "Is 32 checks overkill for a $40-a-month tool?", a: "<p>Yes. Use the requirements and cost sections only. The full list is for anything you would find painful to leave.</p>" }
      ],
      related: ["saas-buying-guide", "saas-contract-negotiation", "vendor-security-review"],
      cta: { title: "Get the scorecard as a spreadsheet", text: "The Stack Review includes the selection scorecard and the three-year cost model as editable templates.", btn: "Subscribe", href: "index" }
    }
  }
};

window.SITE_DATA.aboutRelated = ["saas-buying-guide", "best-crm-small-business"];
Object.assign(window.SITE_DATA.pages, window.MDN_TRUST(window.SITE_DATA));
window.MDN_SITES = window.MDN_SITES || {};
window.MDN_SITES[window.SITE_DATA.slug] = window.SITE_DATA;
