/* NomadLedger — business travel and expat finance. Content model. */
window.SITE_DATA = {
  slug: "nomadledger",
  brand: "NomadLedger",
  mark: "NL",
  color: "#0d5f6b",
  tagline: "Money and paperwork for people who work abroad.",
  description: "Independent guides to expat tax, cross-border banking, business travel expenses and nomad visas — with the official filing rules cited and the assumptions shown.",
  topicLong: "expatriate tax, cross-border banking, business travel expenses and international relocation finance",
  ymylLabel: "Financial & tax",
  reviewObject: "cross-border banking providers, transfer services, travel insurers and expat tax services",
  updated: "12 August 2026",
  defaultAuthor: "Sanne de Vries",
  defaultReviewer: "Elena Farkas, EA",
  contactEmail: "nomadledger@metax.academy",
  disclaimer: "NomadLedger publishes general financial and tax education, not tax, legal, immigration or investment advice. Cross-border rules depend on your citizenship, residence, treaty position and the specific facts of your situation, and they change. Confirm your own position with a qualified cross-border adviser before filing or moving money.",
  disclosureText: "Some links to banks, transfer services, insurers and tax preparers are affiliate or referral links. They never affect scoring, ordering, or whether a provider appears in a comparison.",
  legalLine: "NomadLedger is not a bank, a money transmitter, an insurer, a tax preparer, an immigration adviser or a licensed financial adviser, and does not hold client funds or file returns on anyone's behalf.",
  footerAbout: "Independent coverage of the money and paperwork that follow you across borders: expat tax filing, multi-currency banking, business travel expenses and residence rules — sourced from official guidance, not forum folklore.",
  aboutDek: "Cross-border money coverage that cites the actual filing rules.",
  aboutWhat: "Expat filing obligations explained from official guidance; honest cost accounting for transfers and multi-currency accounts; business travel expense rules for people who actually submit the claims; and residence tests that decide everything else.",
  aboutDiff: [
    "Every tax statement is traced to official guidance, with the form or publication named.",
    "Transfer and account costs include the exchange-rate margin, not just the advertised fee.",
    "We publish the rubric and weights behind every provider comparison.",
    "An enrolled agent specialising in cross-border returns reviews anything touching tax."
  ],
  cannotDo: "We cannot prepare your return, tell you your residence status, advise on a visa application, or move your money. Those are regulated activities, and cross-border facts are too individual for a website to rule on.",
  sourceStandards: [
    "IRS publications, form instructions and international taxpayer guidance, cited by publication number.",
    "FinCEN reporting requirements for foreign financial accounts, cited by form.",
    "Official government immigration pages for any visa route, cited directly rather than via aggregators.",
    "Published provider fee schedules and mid-market exchange-rate references, captured with the date."
  ],
  methodLimits: "Cross-border tax depends on treaty position, state ties and facts we cannot see. Our guides describe how the rules work and which questions decide your case; they never conclude what your filing position is.",
  rubric: [
    { name: "True total cost", weight: "30%", what: "Fees plus exchange-rate margin against the mid-market rate, measured on real transfer amounts rather than advertised headline pricing." },
    { name: "Cross-border usability", weight: "20%", what: "Whether the account or service actually works from abroad — address requirements, verification, app access, and behaviour when you change country." },
    { name: "Fee transparency", weight: "15%", what: "Whether the full schedule, including the rate margin and inactivity or conversion fees, is published before signup." },
    { name: "Protection and licensing", weight: "15%", what: "Deposit protection or safeguarding status, regulator, and what happens to your money if the provider fails." },
    { name: "Support quality", weight: "10%", what: "Reachability across time zones, and whether frozen-account and verification problems get resolved by a human." },
    { name: "Reporting friendliness", weight: "10%", what: "Whether statements, annual summaries and account identifiers make foreign-account reporting straightforward." }
  ],
  evidence: [
    "Running identical test transfers and comparing the amount received against the mid-market rate.",
    "Reading published fee schedules and terms for conversion margins, inactivity and dormancy charges.",
    "Testing signup and verification from a non-resident address where the provider permits it.",
    "Reading official guidance for every filing threshold, rather than repeating community summaries."
  ],
  disqualifiers: [
    "Advertising 'no fees' while taking an undisclosed exchange-rate margin.",
    "Claiming a service removes a filing obligation that statute imposes.",
    "Marketing residence or visa outcomes as guaranteed.",
    "Holding customer funds without stating the safeguarding or deposit-protection position plainly."
  ],
  team: [
    { name: "Sanne de Vries", role: "Editor-in-chief", bio: "Eleven years reporting on cross-border payments and mobility, six of them filing from three countries. Covers residence rules and banking access.", focus: "Residence, banking access, payments" },
    { name: "Diego Alarcón", role: "Payments & banking writer", bio: "Former treasury operations analyst. Costs transfers against the mid-market rate and refuses to quote a fee without the margin attached.", focus: "Transfers, multi-currency accounts, FX" },
    { name: "Meera Kapadia", role: "Travel & expenses writer", bio: "Built and audited corporate travel policies for a mid-sized consultancy. Covers per diems, substantiation and what actually survives review.", focus: "Business travel, expense policy, per diems" }
  ],
  reviewers: [
    { name: "Elena Farkas, EA", credential: "Enrolled Agent, 16 years in expatriate and cross-border returns", bio: "Reviews every tax statement against current guidance and removes anything that reads as a conclusion about an individual filing position." },
    { name: "Hugo Bertrand", credential: "Global mobility consultant, 20 years in international assignments", bio: "Reviews relocation, assignment-package and residence content against how employers and authorities actually treat it." }
  ],
  newsletter: {
    name: "The Border Ledger",
    pitch: "Monthly: one cross-border filing rule explained properly, what changed in transfer pricing, and which provider quietly altered its terms for non-residents.",
    cadence: "monthly",
    cta: "Get the border ledger",
    magnet: "The expat filing calendar — deadlines, thresholds and forms on one page"
  },
  nav: [
    { label: "Start here", page: "expat-tax-guide" },
    { label: "Banking", page: "international-banking-guide" },
    { label: "Business travel", page: "business-travel-expense-guide" },
    { label: "Visas", page: "digital-nomad-visa-guide" },
    { label: "Costs", page: "expat-tax-preparation-cost" },
    { label: "Calculator", page: "relocation-calculator" }
  ],
  toolLinks: [
    { page: "relocation-calculator", label: "Relocation net-income calculator", desc: "Compare take-home at home and abroad after tax, cost of living and housing, with a break-even on the move cost." },
    { page: "expat-move-checklist", label: "Cross-border move checklist", desc: "The 30 checks before, during and after a move abroad. Progress saves in your browser." }
  ],
  popular: ["expat-tax-preparation-cost", "international-money-transfer-cost", "travel-insurance-cost", "best-multi-currency-accounts"],
  featured: ["expat-tax-guide", "international-banking-guide", "business-travel-expense-guide"],
  partners: [
    { slug: "credentialroi", why: "taking a credential to a market that recognises it" },
    { slug: "ledgerlift", why: "the books behind a business that bills across borders" },
    { slug: "clausecraft", why: "contracting with clients in another country" }
  ],
  clusters: [
    { kicker: "Cluster 1", name: "Tax abroad", desc: "Filing obligations, exclusions, credits and the residence tests that decide them.", pages: ["expat-tax-guide", "tax-residency-rules", "foreign-earned-income-exclusion", "foreign-tax-credit", "state-tax-when-abroad"] },
    { kicker: "Cluster 2", name: "Banking & money", desc: "Accounts that work from abroad, transfer costs and reporting.", pages: ["international-banking-guide", "multi-currency-accounts", "international-transfer-fees", "foreign-account-reporting", "best-multi-currency-accounts"] },
    { kicker: "Cluster 3", name: "Business travel", desc: "Expense rules, per diems, cards and what survives an audit.", pages: ["business-travel-expense-guide", "per-diem-vs-actual", "travel-expense-deductions", "corporate-card-programs"] },
    { kicker: "Cluster 4", name: "Moving & cover", desc: "Nomad visas, medical cover and the arithmetic of an offer abroad.", pages: ["digital-nomad-visa-guide", "travel-medical-insurance", "relocation-calculator", "expat-move-checklist"] }
  ],

  pages: {
    index: {
      title: "NomadLedger — expat tax, cross-border banking and business travel money",
      hero: {
        h1: "The money and paperwork that follow you across borders",
        lead: "Independent, enrolled-agent-reviewed guides to expat filing, multi-currency banking, transfer costs and business travel expenses — sourced from official guidance rather than forum folklore.",
        primary: { page: "expat-tax-guide", label: "Start with the expat tax guide" },
        secondary: { page: "relocation-calculator", label: "Model a move" },
        trust: ["Reviewed by an enrolled agent and a global mobility consultant", "Every filing rule traced to official guidance", "Transfer costs include the rate margin", "No paid placements"],
        stats: [
          { v: "4", l: "Clusters: tax, banking, travel, moving" },
          { v: "30", l: "Checks in the cross-border move checklist" },
          { v: "2 tools", l: "Relocation calculator and move checklist" },
          { v: "0", l: "Providers who can buy a ranking" }
        ]
      },
      why: "<p>Working across borders quietly doubles your paperwork. You may owe a return in the country you left and the country you live in, hold accounts that trigger reporting thresholds you have never heard of, and lose two percent of every transfer to an exchange-rate margin advertised as 'no fees'.</p>" +
        "<p>NomadLedger covers that specifically. We explain filing obligations from official guidance with the form named, cost transfers against the mid-market rate, and describe the residence tests that decide which rules apply to you at all.</p>" +
        "<p>We do not file returns, sell insurance or move money. That is why we can say plainly that a service advertising zero fees is usually the expensive option, and that no provider can remove a reporting obligation statute has already created.</p>"
    },

    "expat-tax-guide": {
      title: "Expat tax: what you file when you work abroad",
      h1: "Expat tax, explained from the rules",
      section: "Pillar guide",
      eyebrow: "Pillar guide",
      dek: "Why citizenship-based filing catches people out, the two mechanisms that prevent double taxation, the reporting forms nobody warns you about, and the deadlines that actually apply.",
      answer: "US citizens and permanent residents file a US return on <strong>worldwide income regardless of where they live</strong>. Double taxation is relieved through the <strong>foreign earned income exclusion</strong> or the <strong>foreign tax credit</strong> — not both on the same income — and separate <strong>information reporting</strong> on foreign accounts applies even when no tax is due.",
      body:
        "<h2>The rule that surprises everyone</h2>" +
        "<p>Most countries tax residents. The United States taxes citizens and permanent residents wherever they live, so moving abroad does not end your filing obligation — it complicates it. You may file two returns, in two currencies, on two tax years, with a treaty deciding which country gets which slice.</p>" +
        "<p>Other nationalities usually face the mirror problem: you stop being tax resident at home only when you genuinely break residence, and the test for that is factual rather than a matter of intention. See <a href='tax-residency-rules.html'>residency rules</a>.</p>" +
        "<!--FIG:Filing obligations by status: citizen abroad, non-resident, and dual resident-->" +
        "<h2>Two ways to avoid being taxed twice</h2>" +
        "<ul><li><strong>Foreign earned income exclusion</strong> — excludes a capped amount of earned income if you meet a physical presence or bona fide residence test. Details in <a href='foreign-earned-income-exclusion.html'>the exclusion guide</a>.</li>" +
        "<li><strong>Foreign tax credit</strong> — credits foreign income tax you actually paid against your domestic liability, and works better in high-tax countries and for unearned income. See <a href='foreign-tax-credit.html'>the credit guide</a>.</li></ul>" +
        "<p>Choosing between them is the single largest decision in an expat return, it is fact-specific, and revoking an exclusion election has consequences for later years. This is the point at which a cross-border preparer earns their fee.</p>" +
        "<!--AD-->" +
        "<h2>Information reporting is separate from tax</h2>" +
        "<p>Foreign account reporting is an <em>information</em> obligation with its own thresholds and penalties, and it applies whether or not you owe a cent. People who correctly conclude they owe no tax frequently miss it entirely — which is the expensive mistake in this whole area. The thresholds and forms are in <a href='foreign-account-reporting.html'>foreign account reporting</a>.</p>" +
        "<h2>Deadlines run differently abroad</h2>" +
        "<ul><li>Taxpayers living abroad generally get an automatic extension to file, though interest on unpaid tax is not extended.</li>" +
        "<li>Foreign account reports run on their own deadline, separate from the return.</li>" +
        "<li>Your host country's tax year may not match, so one year's income lands across two foreign filings.</li>" +
        "<li>Estimated payments still apply if withholding does not cover your liability.</li></ul>" +
        "<h2>What to keep, from day one</h2>" +
        "<p>A day-count log with entry and exit dates, foreign tax assessments and payment receipts, year-end statements for every foreign account with its highest balance, and your housing costs if you may claim a housing exclusion. Reconstructing a day count three years later is miserable and inaccurate. The <a href='expat-move-checklist.html'>move checklist</a> sets out the record-keeping from the start.</p>" +
        "<h2>When to pay for help</h2>" +
        "<p>Self-preparation is defensible for a simple wage-only year with one foreign account. Get professional help if you have self-employment income, a foreign pension, foreign company ownership, rental property, treaty questions, or missed years to correct. Costs are in <a href='expat-tax-preparation-cost.html'>preparation pricing</a>.</p>",
      edge: {
        intro: "Expat tax content splits between relocation blogs summarising the headline reliefs and preparer firms advertising their services, and both produce the same shape: the exclusion is explained, double taxation is declared solved, and the reader concludes that owing nothing means nothing further is required. That conclusion is where the expensive mistakes in this entire area live \u2014 the penalties here attach to <em>reporting</em>, not to tax.",
        gaps: [
          {
            claim: "\"The foreign earned income exclusion means expats under the threshold owe no US tax\" \u2014 presented as the answer to the whole problem.",
            problem: "Three separate omissions. The exclusion must be <em>elected</em> on a filed return; it is not automatic, so someone who owes nothing because of it and therefore does not file has not validly claimed it. It applies only to earned income \u2014 wages and self-employment profit \u2014 and does nothing for dividends, interest, capital gains, rental income or most pension income, which is exactly the income profile of an established expat. And for the self-employed it does not touch self-employment tax at all, so a freelancer abroad can correctly exclude their entire income from income tax and still owe a substantial bill they never saw coming, unless a totalisation agreement applies. Choosing between the exclusion and the foreign tax credit is also treated as a preference when it is fact-specific and partly irreversible \u2014 revoking an exclusion election has consequences for subsequent years.",
            ours: "We treat the exclusion as an election on a required return, limited to earned income, and explicitly not a relief from self-employment tax \u2014 then frame exclusion-versus-credit as a multi-year decision rather than a one-off choice."
          },
          {
            claim: "Foreign account reporting is mentioned as a footnote, or as \"you may also need to report foreign accounts.\"",
            problem: "This is an information obligation entirely separate from tax, with its own thresholds, its own forms, its own deadline and penalties that are not proportionate to any tax owed \u2014 they apply where nothing whatever is due. The failure pattern is specific and extremely common: someone reasons correctly that the exclusion eliminates their liability, concludes there is nothing to file, and misses reporting that was never about tax in the first place. Two details compound it. The threshold is measured against the <em>highest</em> balance at any point in the year, not the year-end balance, so an account that briefly held a property deposit or a transferred bonus can cross it while looking modest on 31 December. And the aggregate is taken across all accounts, so several small accounts trigger it jointly \u2014 and accounts you merely have signature authority over, such as a foreign employer's or company account, can count even though the money is not yours.",
            ours: "We separate information reporting from tax entirely, and state the two rules that catch people: highest balance during the year, and aggregation across all accounts including signature authority."
          },
          {
            claim: "\"Move abroad and you stop being tax resident at home.\"",
            problem: "For US citizens and permanent residents this is simply false \u2014 filing follows citizenship and status regardless of residence, which is the rule that surprises people most and is frequently understated on relocation sites because it makes the move sound harder. For other nationalities the mirror error applies: ceasing residence is a factual test, not a declaration, and continuing ties \u2014 available housing, family, economic centre, day counts \u2014 can keep you resident somewhere you have physically left. The nomad-specific trap goes further and is almost never addressed: spending long enough in a country makes you tax resident <em>there</em> under its domestic rules, so a year spent moving between three countries can create obligations in each, and a treaty tie-breaker only helps where a treaty exists and is properly invoked. Meanwhile the physical presence and bona fide residence tests governing the exclusion depend on day counts that cannot be reconstructed accurately years later.",
            ours: "We treat residence as a factual test in every direction, cover the risk of becoming resident in a host country, and require a contemporaneous day-count log with entry and exit dates from day one."
          },
          {
            claim: "\"File your return by the extended deadline\" \u2014 deadlines described as simply later for expats.",
            problem: "The automatic extension abroad extends the time to <em>file</em>, not the time to pay: interest accrues on unpaid tax from the original date, so someone relying on the later deadline while owing money is accumulating charges. Foreign account reporting runs on its own deadline, unconnected to the return, which is precisely why people who diary one miss the other. Estimated payments still apply where withholding does not cover the liability \u2014 the norm for the self-employed abroad. And the host country's tax year may not align with the calendar year, so a single year's income lands across two foreign filings and the foreign tax available to credit is not the amount assessed in either one, which is the most common source of error in a credit calculation. There is a constructive omission too: where prior years were missed, structured correction procedures exist, and someone who quietly starts filing correctly from this year forward without using them keeps the earlier exposure open.",
            ours: "We separate the filing extension from the payment deadline, run account reporting as a parallel deadline, handle mismatched foreign tax years in the credit calculation, and name the correction route for missed years."
          }
        ],
        only: [
          "The exclusion as an election on a required return \u2014 earned income only, and no relief from self-employment tax.",
          "Information reporting separated from tax, with highest-balance and aggregation rules including signature authority.",
          "Host-country residence risk for multi-country years, plus the day-count log that cannot be reconstructed later.",
          "Filing extension distinguished from payment deadline, and mismatched foreign tax years inside the credit calculation.",
          "The structured correction route for missed years, which quietly filing forward does not resolve."
        ]
      },
      faq: [
        { q: "Do I still file if I owe nothing?", a: "<p>Generally yes, if your income exceeds the filing threshold. The exclusion and credit are claimed <em>on</em> a return — they do not remove the obligation to file one, and the exclusion must be elected.</p>" },
        { q: "Can I use both the exclusion and the credit?", a: "<p>Not on the same income. You can apply the exclusion to earned income and a credit to other income, but stacking both on one dollar is not permitted.</p>" },
        { q: "Does renouncing citizenship end this?", a: "<p>It ends future filing but triggers its own expatriation regime and potential exit tax. It is a major legal step, not a tax planning tactic.</p>" }
      ],
      sources: [
        { name: "IRS — U.S. citizens and resident aliens abroad", url: "https://www.irs.gov/individuals/international-taxpayers/us-citizens-and-resident-aliens-abroad" },
        { name: "IRS — Publication 54, tax guide for U.S. citizens abroad", url: "https://www.irs.gov/forms-pubs/about-publication-54" }
      ],
      related: ["tax-residency-rules", "foreign-earned-income-exclusion", "expat-tax-preparation-cost"],
      crossRefs: [{ slug: "ledgerlift", page: "bookkeeping-basics", label: "Keeping books that survive two tax authorities", why: "Cross-border returns are only as good as the records behind them." }]
    },

    "international-banking-guide": {
      title: "International banking: accounts that work from abroad",
      h1: "Banking across borders",
      section: "Pillar guide",
      eyebrow: "Pillar guide",
      dek: "Why home accounts get closed, what multi-currency providers actually do, the difference between a bank and a safeguarded e-money account, and how to avoid being locked out.",
      answer: "The practical problem is not finding an account — it is <strong>keeping the ones you have</strong>. Address verification, non-resident policies and automated risk systems close accounts for people who move. Hold a home bank account, one multi-currency account and one local account, and never let a single provider hold everything.",
      body:
        "<h2>Why accounts get closed after you move</h2>" +
        "<ul><li>You can no longer supply a domestic residential address the bank will accept.</li>" +
        "<li>Non-resident policies restrict which products you may hold.</li>" +
        "<li>Logins from a new country trigger automated risk review.</li>" +
        "<li>Reporting obligations make some banks decline non-resident customers outright.</li></ul>" +
        "<p>None of this is personal, and appealing it rarely works quickly. The defence is redundancy, arranged before you go.</p>" +
        "<!--FIG:Account stack for someone living abroad: home bank, multi-currency account, local bank-->" +
        "<h2>Bank or e-money institution?</h2>" +
        "<p>Many popular multi-currency providers are not banks. They safeguard client funds in segregated accounts rather than offering deposit insurance, which is a genuinely different protection model — usually adequate for transactional balances, and not where your savings should sit. Ask which entity holds the money, in which country, under which regulator, and whether deposit protection applies. Detail in <a href='multi-currency-accounts.html'>multi-currency accounts</a>.</p>" +
        "<!--AD-->" +
        "<h2>The three-account stack</h2>" +
        "<ol><li><strong>Home bank account</strong>, kept alive with a usable address and periodic activity — for domestic tax refunds, pensions and legacy direct debits.</li>" +
        "<li><strong>Multi-currency account</strong> for spending and cheap conversion, holding a working balance only.</li>" +
        "<li><strong>Local bank account</strong> in your country of residence, because rent, utilities and salaries frequently require a local IBAN.</li></ol>" +
        "<h2>Practical measures that prevent lockout</h2>" +
        "<ul><li>Keep a working phone number for your home country — many verification systems still require SMS.</li>" +
        "<li>Store recovery codes offline, not only in an app on the phone you might lose abroad.</li>" +
        "<li>Update your address honestly; a false domestic address is a terms breach and a closure reason.</li>" +
        "<li>Keep two cards from different networks in different physical places.</li>" +
        "<li>Move money before you need it, not on the day rent is due.</li></ul>" +
        "<h2>Every account you open has a reporting consequence</h2>" +
        "<p>Foreign account reporting thresholds are aggregate and low. Opening a third account to save a few euros on conversion can push you over a threshold and add a filing obligation. Check <a href='foreign-account-reporting.html'>reporting thresholds</a> before you optimise fees, and cost transfers properly in <a href='international-transfer-fees.html'>transfer fees</a>.</p>",
      faq: [
        { q: "Can I keep my home bank account after moving?", a: "<p>Often yes if you inform them and can supply an acceptable correspondence address, though some products may be withdrawn. Concealing the move is the reliable way to lose the account.</p>" },
        { q: "Are multi-currency accounts safe?", a: "<p>Reputable, licensed providers are appropriate for transactional balances. They are typically safeguarded rather than deposit-insured, so keep savings in an insured bank.</p>" },
        { q: "Do I need a local account?", a: "<p>Usually, once you are paying local rent or receiving a local salary. Many domestic systems still reject foreign IBANs in practice.</p>" }
      ],
      sources: [
        { name: "FDIC — deposit insurance", url: "https://www.fdic.gov/resources/deposit-insurance/" },
        { name: "FinCEN — report of foreign bank and financial accounts", url: "https://www.fincen.gov/report-foreign-bank-and-financial-accounts" }
      ],
      related: ["multi-currency-accounts", "international-transfer-fees", "best-multi-currency-accounts"]
    },

    "business-travel-expense-guide": {
      title: "Business travel expenses: what is claimable and provable",
      h1: "Business travel expenses, done properly",
      section: "Pillar guide",
      eyebrow: "Pillar guide",
      dek: "The away-from-home test, the deduction rules for travel, meals and lodging, substantiation that survives review, and how mixed business and personal trips are split.",
      answer: "Travel costs are deductible when the trip is <strong>ordinary, necessary and away from your tax home overnight</strong> for business. Transport and lodging are generally fully deductible on a business trip; <strong>meals are limited</strong>; and mixed-purpose trips must be apportioned. Substantiation — amount, date, place, purpose — is what actually decides claims under review.",
      body:
        "<h2>Start with your tax home</h2>" +
        "<p>Deductible travel means travel away from your <em>tax home</em>, which is your main place of business rather than your family residence. Remote workers with no fixed business location, and people who moved abroad, frequently misidentify it — and if the trip is not away from your tax home, nothing else in this guide applies.</p>" +
        "<!--FIG:Deductibility by trip type: business, mixed, and incidental business on a personal trip-->" +
        "<h2>What is generally claimable</h2>" +
        "<ul><li><strong>Transport</strong> to and from the destination, and local travel there.</li>" +
        "<li><strong>Lodging</strong> for business nights.</li>" +
        "<li><strong>Meals</strong>, subject to the statutory percentage limitation.</li>" +
        "<li><strong>Incidentals</strong> — baggage, business calls, laundry on longer trips, visa fees for a business trip.</li>" +
        "<li><strong>Communication</strong> costs attributable to the work.</li></ul>" +
        "<!--AD-->" +
        "<h2>Mixed trips are apportioned, not waved through</h2>" +
        "<p>Adding a weekend to a conference does not disqualify the trip, but personal days are not deductible and the split must be defensible. For foreign travel the rules are tighter than for domestic, and primary purpose matters. Detail and worked examples are in <a href='travel-expense-deductions.html'>travel deductions</a>.</p>" +
        "<h2>Per diem or actual cost</h2>" +
        "<p>Per diem rates reduce paperwork dramatically and are accepted where properly applied; actual-cost claims can be larger in expensive cities but demand complete receipts. Most small teams should default to per diem for meals and actual for lodging. The comparison is in <a href='per-diem-vs-actual.html'>per diem versus actual</a>.</p>" +
        "<h2>Substantiation that survives review</h2>" +
        "<ol><li><strong>Amount</strong> — receipt or per diem rate applied.</li>" +
        "<li><strong>Date</strong> — travel dates and the date of each expense.</li>" +
        "<li><strong>Place</strong> — city, not just country.</li>" +
        "<li><strong>Business purpose</strong> — one honest sentence naming who and why.</li>" +
        "<li><strong>Business relationship</strong> for anyone entertained or hosted.</li></ol>" +
        "<p>The purpose line is the field people leave blank and the one reviewers ask about first. Capture it at the time; nobody reconstructs it accurately eleven months later. A card programme that prompts for it at the point of spend does most of the work — see <a href='corporate-card-programs.html'>corporate cards</a>.</p>",
      faq: [
        { q: "Are commuting costs claimable?", a: "<p>No. Travel between home and your regular workplace is commuting, however far it is.</p>" },
        { q: "Can I claim a conference in an attractive location?", a: "<p>Yes, if the business purpose is genuine and documented. The location is not disqualifying; a thin purpose and personal-heavy itinerary are.</p>" },
        { q: "What about bringing a spouse?", a: "<p>Their costs are generally not deductible unless they have a genuine business purpose on the trip. Claim only the incremental business share.</p>" }
      ],
      sources: [
        { name: "IRS — Publication 463, travel, gift and car expenses", url: "https://www.irs.gov/forms-pubs/about-publication-463" },
        { name: "GSA — per diem rates", url: "https://www.gsa.gov/travel/plan-book/per-diem-rates" }
      ],
      related: ["per-diem-vs-actual", "travel-expense-deductions", "corporate-card-programs"],
      crossRefs: [{ slug: "ledgerlift", page: "bookkeeping-basics", label: "Where travel expenses sit in the chart of accounts", why: "Clean coding is what makes a travel claim reviewable at all." }]
    },

    "digital-nomad-visa-guide": {
      title: "Digital nomad visas: what they do and do not solve",
      h1: "Nomad visas, assessed honestly",
      section: "Moving & cover",
      eyebrow: "Pillar guide",
      dek: "Common requirements, the income thresholds, what these permits do for tax residence, and the questions to answer before you apply.",
      answer: "A nomad visa gives you a <strong>legal right to stay and work remotely</strong> for a foreign employer or clients. It does not automatically settle your tax position — many holders become <strong>tax resident</strong> once they pass a day-count or ties test — and it rarely leads to permanent residence.",
      body:
        "<h2>What these permits typically require</h2>" +
        "<ul><li>Proof of remote income above a stated monthly threshold, often several times local median wages.</li>" +
        "<li>Employment or client contracts outside the host country.</li>" +
        "<li>Private medical cover valid in the host country for the permit period.</li>" +
        "<li>Clean criminal record certificate, sometimes apostilled.</li>" +
        "<li>Accommodation evidence and proof of funds.</li></ul>" +
        "<p>Thresholds and document lists change frequently and only the government page for the specific route is authoritative. Aggregator sites go stale within months.</p>" +
        "<!--FIG:Typical nomad visa requirements: income threshold, cover, duration and renewal-->" +
        "<h2>The tax question the marketing skips</h2>" +
        "<p>Immigration status and tax residence are separate systems. Some routes come with a favourable tax regime for a fixed period; many come with none, and you simply become tax resident under the ordinary domestic test — commonly a day count around half the year, plus ties tests. Read <a href='tax-residency-rules.html'>residency rules</a> before choosing where to spend the months.</p>" +
        "<!--AD-->" +
        "<h2>Where people get caught</h2>" +
        "<ol><li><strong>Working for local clients</strong>, which most nomad permits prohibit.</li>" +
        "<li><strong>Creating a taxable presence for their employer</strong> — a real risk that makes some employers refuse.</li>" +
        "<li><strong>Assuming social security is covered</strong>; contributions follow their own rules and totalisation agreements.</li>" +
        "<li><strong>Buying travel insurance</strong> when the permit requires resident-grade medical cover — see <a href='travel-medical-insurance.html'>medical cover abroad</a>.</li>" +
        "<li><strong>Treating the permit as a path to settlement</strong>, which most routes explicitly are not.</li></ol>" +
        "<h2>Tell your employer before you go</h2>" +
        "<p>An employee working abroad without approval can create payroll registration, permanent establishment and data-protection exposure for the company. Employers who discover it after the fact frequently order an immediate return. Ask first; many now have a formal short-term remote work policy with a country list.</p>" +
        "<h2>Cost the whole move, not the visa fee</h2>" +
        "<p>Application and legal fees, document translation and apostille, mandatory insurance, flights, deposits, shipping and a currency buffer add up to far more than the permit itself. Model the net position with the <a href='relocation-calculator.html'>relocation calculator</a> and work the <a href='expat-move-checklist.html'>move checklist</a>.</p>",
      faq: [
        { q: "Do nomad visas reduce tax?", a: "<p>Only where the route includes a specific tax regime. Otherwise you fall under ordinary residence rules and may owe local tax on worldwide income.</p>" },
        { q: "Can I work for local companies?", a: "<p>Usually not. Most routes permit only foreign-sourced remote work, and local clients can breach the permit.</p>" },
        { q: "Is a nomad visa a route to residency?", a: "<p>Rarely. Most are time-limited and do not count towards permanent residence, though a few countries allow conversion.</p>" }
      ],
      sources: [{ name: "U.S. Department of State — country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages.html" }],
      related: ["tax-residency-rules", "travel-medical-insurance", "relocation-calculator"]
    },

    "tax-residency-rules": {
      title: "Tax residency rules: the tests that decide everything",
      h1: "How tax residence is decided",
      section: "Tax abroad",
      eyebrow: "Explainer",
      dek: "Day counts, ties tests, the difference between leaving and breaking residence, dual residence, and how treaty tie-breakers resolve it.",
      answer: "Most countries treat you as resident if you spend around <strong>183 days</strong> there or have your <strong>centre of vital interests</strong> there. Residence is decided by facts, not intention — and because two countries can both claim you, treaty <strong>tie-breaker rules</strong> exist to settle which one wins.",
      body:
        "<h2>The two tests that appear almost everywhere</h2>" +
        "<ol><li><strong>Day count</strong> — commonly 183 days in a tax year, sometimes averaged across years. Mechanical and easy to fail by accident.</li>" +
        "<li><strong>Ties or centre of interests</strong> — home, family, economic interests, habitual abode. Judgemental, and it is how countries catch people who count days carefully.</li></ol>" +
        "<p>Leaving is not the same as breaking residence. Keeping an available home, a family in place and your main economic interests behind you can preserve residence in a country you have physically left.</p>" +
        "<!--FIG:Day count and ties tests combining into a residence determination-->" +
        "<h2>Count days properly</h2>" +
        "<ul><li>Arrival and departure days often count as full days present.</li>" +
        "<li>Transit may be excluded, but only under specific conditions.</li>" +
        "<li>Tax years differ; a calendar-year count can be wrong for a country on an April year.</li>" +
        "<li>Keep boarding passes and stamps — a spreadsheet alone is not evidence.</li></ul>" +
        "<!--AD-->" +
        "<h2>Dual residence and the tie-breaker</h2>" +
        "<p>If two countries both claim you, an applicable treaty applies a tie-breaker sequence — typically permanent home, then centre of vital interests, then habitual abode, then nationality. This is genuinely technical, it is claimed on a return, and it is the clearest case for professional help. Nothing here decides your position.</p>" +
        "<h2>Citizenship-based filing sits on top</h2>" +
        "<p>US citizens keep filing regardless of residence, so residence determines which <em>foreign</em> country taxes you, not whether you file at home. That is why the <a href='foreign-earned-income-exclusion.html'>exclusion</a> and the <a href='foreign-tax-credit.html'>credit</a> exist at all, and why residence and filing get confused.</p>" +
        "<h2>What to document from day one</h2>" +
        "<p>A dated entry and exit log, lease or purchase documents in both countries, registration and deregistration certificates, and where your family and main bank relationships sit. Residence disputes are decided on documents years later — see the record-keeping section of the <a href='expat-move-checklist.html'>move checklist</a>.</p>",
      faq: [
        { q: "If I stay under 183 days everywhere, am I resident nowhere?", a: "<p>Rarely. Ties tests and domicile rules usually keep you resident somewhere, and 'resident nowhere' claims attract scrutiny.</p>" },
        { q: "Does deregistering settle it?", a: "<p>It helps as evidence but does not decide the matter. Authorities look at the underlying facts, not the paperwork alone.</p>" }
      ],
      sources: [{ name: "IRS — determining an individual's tax residency status", url: "https://www.irs.gov/individuals/international-taxpayers/determining-an-individuals-tax-residency-status" }],
      related: ["expat-tax-guide", "digital-nomad-visa-guide", "state-tax-when-abroad"]
    },

    "foreign-earned-income-exclusion": {
      title: "Foreign earned income exclusion: how it actually works",
      h1: "The foreign earned income exclusion",
      section: "Tax abroad",
      eyebrow: "Explainer",
      dek: "The two qualifying tests, what counts as earned income, the housing exclusion, and why the exclusion is sometimes the wrong choice.",
      answer: "The exclusion removes a capped amount of <strong>foreign earned income</strong> from your domestic taxable income if you meet the <strong>physical presence</strong> test (roughly 330 full days abroad in twelve months) or the <strong>bona fide residence</strong> test. It must be elected on a filed return, and it does not cover investment, pension or rental income.",
      body:
        "<h2>Two ways to qualify</h2>" +
        "<ul><li><strong>Physical presence</strong> — a set number of full days in foreign countries during any twelve consecutive months. Mechanical, and travel days home eat into it faster than people expect.</li>" +
        "<li><strong>Bona fide residence</strong> — establishing genuine residence in a foreign country for an uninterrupted tax year. More flexible on travel, but a facts-and-circumstances judgement.</li></ul>" +
        "<!--FIG:Physical presence day counting across a twelve-month window-->" +
        "<h2>Earned income only</h2>" +
        "<p>Wages, salary and self-employment profit for services performed abroad qualify. Dividends, interest, capital gains, pension and rental income do not — those need the <a href='foreign-tax-credit.html'>foreign tax credit</a> instead. Income for work performed in your home country never qualifies, however you are paid.</p>" +
        "<!--AD-->" +
        "<h2>The housing exclusion</h2>" +
        "<p>Qualifying taxpayers may also exclude reasonable housing costs above a base amount, subject to a limit that varies by location. In expensive cities this is worth a meaningful sum, and it requires records of rent, utilities and insurance — which people only realise in April.</p>" +
        "<h2>Self-employment is the common trap</h2>" +
        "<p>The exclusion applies to income tax, not self-employment tax. A self-employed expat can exclude all their earned income and still owe self-employment tax, unless a totalisation agreement assigns them to the foreign system. Discovering this after a year of no estimated payments is a bad conversation.</p>" +
        "<h2>When the credit beats the exclusion</h2>" +
        "<ol><li>You live in a high-tax country, where credits may exceed your liability and carry forward.</li>" +
        "<li>You want refundable credits that the exclusion can reduce or eliminate.</li>" +
        "<li>Your income far exceeds the exclusion cap, so the credit does more work.</li>" +
        "<li>You may return home mid-year and fail the day count.</li></ol>" +
        "<p>Revoking an exclusion election can bar you from re-electing for several years without permission, so the choice is not freely reversible. Get it modelled once, properly — see <a href='expat-tax-preparation-cost.html'>what preparation costs</a>.</p>",
      faq: [
        { q: "Does the exclusion mean I need not file?", a: "<p>No. It is elected on a return; without a filed return there is no exclusion.</p>" },
        { q: "Do days in international waters count?", a: "<p>Generally not as days in a foreign country, which catches out cruise and offshore workers.</p>" },
        { q: "Can both spouses claim it?", a: "<p>Each qualifying spouse may claim against their own earned income if they each meet a test. It is per person, not per return.</p>" }
      ],
      sources: [
        { name: "IRS — foreign earned income exclusion", url: "https://www.irs.gov/individuals/international-taxpayers/foreign-earned-income-exclusion" },
        { name: "IRS — Publication 54", url: "https://www.irs.gov/forms-pubs/about-publication-54" }
      ],
      related: ["foreign-tax-credit", "expat-tax-guide", "tax-residency-rules"]
    },

    "foreign-tax-credit": {
      title: "Foreign tax credit: crediting tax you already paid",
      h1: "The foreign tax credit",
      section: "Tax abroad",
      eyebrow: "Explainer",
      dek: "Which taxes qualify, how the limitation works, carryback and carryforward, income baskets, and when the credit outperforms the exclusion.",
      answer: "The credit offsets your domestic liability by <strong>foreign income tax you actually paid or accrued</strong>, limited to the domestic tax on that foreign income. Unused credits generally <strong>carry back one year and forward ten</strong>, which is why the credit usually wins in high-tax countries.",
      body:
        "<h2>Only income taxes qualify</h2>" +
        "<p>Foreign income tax qualifies. Value added tax, social security contributions, wealth taxes and property taxes generally do not, though a totalisation agreement may address social contributions separately. Read your foreign assessment line by line rather than crediting the total remitted.</p>" +
        "<!--FIG:Foreign tax paid against the credit limitation, with carryforward-->" +
        "<h2>The limitation is the whole mechanic</h2>" +
        "<p>You cannot credit more than the domestic tax attributable to your foreign income. In a country taxing more heavily than your home country you will have excess credits — not a refund, but a carryforward. In a lower-tax country the credit is fully used and you may still owe a top-up at home.</p>" +
        "<!--AD-->" +
        "<h2>Baskets keep income separate</h2>" +
        "<p>Foreign income is separated into categories — broadly general and passive, among others — and credits in one basket cannot offset tax in another. Mixing salary and investment income in a single calculation is one of the most common self-preparation errors in this area.</p>" +
        "<h2>Paid or accrued</h2>" +
        "<p>You may claim on a cash or accrual basis, and the election is consequential across years, particularly when foreign and domestic tax years differ. Switching methods is not casual. Keep the foreign assessment and proof of payment for every year — the credit is disallowed without them.</p>" +
        "<h2>Credit or exclusion?</h2>" +
        "<ul><li><strong>High-tax country</strong> → credit usually wins, and builds carryforward.</li>" +
        "<li><strong>Low or zero-tax country</strong> → <a href='foreign-earned-income-exclusion.html'>exclusion</a> usually wins, as there is little to credit.</li>" +
        "<li><strong>Investment or pension income</strong> → credit, since the exclusion does not reach it.</li>" +
        "<li><strong>Income above the exclusion cap</strong> → often a combination, computed carefully.</li></ul>" +
        "<p>This is a modelling exercise, not a rule of thumb, and it should be run on your actual numbers before you elect anything.</p>",
      faq: [
        { q: "Can I credit foreign social security contributions?", a: "<p>Usually not as an income tax. Totalisation agreements, where they exist, address which system you contribute to instead.</p>" },
        { q: "What happens to unused credits?", a: "<p>They generally carry back one year and forward ten, within the same income category. Track them; they are easy to lose.</p>" },
        { q: "Is a deduction ever better than the credit?", a: "<p>Rarely, but it exists as an alternative. It is worth modelling in unusual years rather than assumed away.</p>" }
      ],
      sources: [{ name: "IRS — foreign tax credit", url: "https://www.irs.gov/individuals/international-taxpayers/foreign-tax-credit" }],
      related: ["foreign-earned-income-exclusion", "expat-tax-guide", "expat-tax-preparation-cost"]
    },

    "state-tax-when-abroad": {
      title: "State tax when you live abroad",
      h1: "The state that will not let go",
      section: "Tax abroad",
      eyebrow: "Explainer",
      dek: "Why leaving the country does not end state residence, which ties matter, the states that are hardest to leave, and the paper trail to build.",
      answer: "States apply their <strong>own</strong> residence rules and are not bound by federal treatment or the foreign earned income exclusion. Several states treat you as resident while you retain a home, licence, registration or voter record — so you can owe state tax on income your federal return excludes.",
      body:
        "<h2>State residence is a separate question</h2>" +
        "<p>Expats reasonably assume that leaving the country settles state tax. It does not. Each state tests domicile on its own terms, and some conform to federal exclusions while others do not — meaning income excluded federally can be fully taxable at state level.</p>" +
        "<!--FIG:Ties that keep state residence alive after moving abroad-->" +
        "<h2>The ties that keep you resident</h2>" +
        "<ul><li>A home available to you, owned or leased.</li>" +
        "<li>A driver's licence and vehicle registration.</li>" +
        "<li>Voter registration and where you actually vote.</li>" +
        "<li>Professional licences and state association memberships.</li>" +
        "<li>Bank branches, safe deposit boxes and a mailing address treated as home.</li>" +
        "<li>Immediate family remaining in the state.</li></ul>" +
        "<!--AD-->" +
        "<h2>Build the paper trail before you go</h2>" +
        "<ol><li>File a final part-year resident return where required, and say so on it.</li>" +
        "<li>Surrender or convert licences and registrations where practical.</li>" +
        "<li>Update every institution to your foreign address, not a relative's house.</li>" +
        "<li>Keep the lease or deed showing a permanent home abroad.</li>" +
        "<li>Keep a day log — some states audit on presence as well as domicile.</li></ol>" +
        "<h2>Some states are simply harder</h2>" +
        "<p>A handful of states are known for aggressive residency enforcement and for continuing to treat people as domiciled while any meaningful tie remains; others have no income tax at all, which removes the question. If you are moving abroad from an aggressive state, get advice before you go rather than after the assessment. Federal residence is a different test again — see <a href='tax-residency-rules.html'>residency rules</a>.</p>",
      faq: [
        { q: "Do all states follow the federal exclusion?", a: "<p>No. Some conform, some do not, and the difference can be several thousand dollars a year on the same income.</p>" },
        { q: "Is using my parents' address a problem?", a: "<p>It can be strong evidence of retained domicile. Use it for convenience if you must, but do not treat it as your permanent home on official records.</p>" }
      ],
      sources: [{ name: "IRS — taxpayers living abroad", url: "https://www.irs.gov/individuals/international-taxpayers/us-citizens-and-resident-aliens-abroad" }],
      related: ["tax-residency-rules", "expat-tax-guide", "expat-move-checklist"]
    },

    "foreign-account-reporting": {
      title: "Foreign account reporting: thresholds and forms",
      h1: "Reporting foreign accounts",
      section: "Banking & money",
      eyebrow: "Explainer",
      dek: "The two main reporting regimes, aggregate thresholds, what counts as an account, highest-balance reporting, and how to fix missed years.",
      answer: "Two separate regimes apply: a <strong>FinCEN report</strong> of foreign financial accounts when the aggregate exceeds a low threshold at any point in the year, and a <strong>tax-return disclosure</strong> of specified foreign financial assets at higher thresholds. Both are information reporting — they apply even when no tax is owed, and penalties are severe.",
      body:
        "<h2>Aggregate, not per account</h2>" +
        "<p>The FinCEN threshold is tested on the <em>combined</em> maximum balance of all foreign accounts, so five small accounts can trigger it while none individually would. It is also a highest-balance test, meaning a single day above the line during the year counts — a salary landing before rent leaves is the classic accidental trigger.</p>" +
        "<!--FIG:Aggregate highest balance across accounts crossing the reporting threshold-->" +
        "<h2>What counts as an account</h2>" +
        "<ul><li>Bank and building society accounts abroad.</li>" +
        "<li>Brokerage and securities accounts.</li>" +
        "<li>Certain foreign pension and insurance products with cash value.</li>" +
        "<li>Accounts you do not own but can sign on, including an employer's.</li>" +
        "<li>Balances held with some e-money and payment providers, depending on structure.</li></ul>" +
        "<p>Signature authority over a company account abroad catches out finance staff and directors constantly. If you can move the money, you may have to report it.</p>" +
        "<!--AD-->" +
        "<h2>The second regime</h2>" +
        "<p>A separate disclosure of specified foreign financial assets is filed with the return at higher thresholds that vary by filing status and whether you live abroad. It overlaps with the FinCEN report but is not identical, and filing one does not satisfy the other. Many expats must file both.</p>" +
        "<h2>Keep the records the forms need</h2>" +
        "<ol><li>Every account's institution name, address and account identifier.</li>" +
        "<li>The maximum balance during the year, in original currency.</li>" +
        "<li>The year-end conversion rate you used, and its source.</li>" +
        "<li>Whether the account is joint, and with whom.</li>" +
        "<li>Any account where you hold only signature authority.</li></ol>" +
        "<p>Providers that publish an annual summary make this trivial; providers that do not turn it into an afternoon of statement archaeology. Reporting friendliness is a scored criterion in <a href='best-multi-currency-accounts.html'>our account comparison</a> for exactly that reason.</p>" +
        "<h2>If you have missed years</h2>" +
        "<p>Do not simply start filing this year and hope. Formal procedures exist for taxpayers whose failure to file was non-wilful, and using the correct route materially affects penalty exposure. This is the clearest case on the whole site for engaging a cross-border professional before you touch anything — see <a href='expat-tax-preparation-cost.html'>preparation and remediation costs</a>.</p>",
      faq: [
        { q: "Does reporting mean I owe tax?", a: "<p>No. These are information returns. You can have a substantial reporting obligation and zero tax due.</p>" },
        { q: "Do joint accounts count twice?", a: "<p>Each person with an interest or signature authority generally reports the full maximum balance. It is not split.</p>" },
        { q: "Are payment app balances reportable?", a: "<p>Sometimes, depending on how the provider holds funds and where. Ask which entity and country holds the balance.</p>" }
      ],
      sources: [
        { name: "FinCEN — report of foreign bank and financial accounts (FBAR)", url: "https://www.fincen.gov/report-foreign-bank-and-financial-accounts" },
        { name: "IRS — foreign account tax compliance reporting", url: "https://www.irs.gov/businesses/corporations/foreign-account-tax-compliance-act-fatca" }
      ],
      related: ["international-banking-guide", "multi-currency-accounts", "expat-tax-guide"]
    },

    "multi-currency-accounts": {
      title: "Multi-currency accounts: what they do and what they cost",
      h1: "Multi-currency accounts, examined",
      section: "Banking & money",
      eyebrow: "Explainer",
      dek: "Local receiving details, conversion pricing, safeguarding versus deposit insurance, and the failure modes that leave people locked out.",
      answer: "A multi-currency account holds balances in several currencies and usually provides <strong>local receiving details</strong> in major markets, so clients pay you domestically. The value is cheap conversion and clean receiving; the risks are <strong>safeguarding rather than deposit insurance</strong> and abrupt verification freezes.",
      body:
        "<h2>What you are actually buying</h2>" +
        "<ul><li>Balances held in several currencies without forced conversion.</li>" +
        "<li>Local account details so clients pay a domestic transfer, not an international one.</li>" +
        "<li>Conversion near the mid-market rate for a stated percentage.</li>" +
        "<li>A card that spends from the matching currency balance.</li>" +
        "<li>Sub-accounts, useful for setting tax money aside.</li></ul>" +
        "<!--FIG:Receiving a client payment: international wire against local receiving details-->" +
        "<h2>Read the conversion pricing, not the fee</h2>" +
        "<p>Compare the amount that <em>arrives</em> against the mid-market rate at that moment. A provider charging a visible 0.4% conversion fee at the real rate is far cheaper than one charging nothing while quoting a rate 2% off. Weekend and out-of-hours surcharges are common and rarely prominent. Method in <a href='international-transfer-fees.html'>transfer fees</a>.</p>" +
        "<!--AD-->" +
        "<h2>Safeguarding is not deposit insurance</h2>" +
        "<p>Most of these providers are e-money or payment institutions that safeguard client funds in segregated accounts at partner banks. In a failure you are typically a beneficiary of safeguarded funds, not an insured depositor, and access can take time. Treat them as transactional accounts and keep savings in an insured bank — the reasoning is in the <a href='international-banking-guide.html'>banking guide</a>.</p>" +
        "<h2>The freeze problem</h2>" +
        "<p>Automated compliance systems freeze accounts for unusual patterns, and a first large client payment into a new account looks exactly like an unusual pattern. Keep invoices ready, expect to explain the source of funds, never route your only rent money through a single new provider, and keep a second account funded.</p>" +
        "<h2>Every account is a reporting line</h2>" +
        "<p>Each currency balance may need reporting, and the aggregate threshold is low. Providers offering a clean annual statement with account identifiers save real time each spring — see <a href='foreign-account-reporting.html'>reporting thresholds</a>, and the scored comparison in <a href='best-multi-currency-accounts.html'>best multi-currency accounts</a>.</p>",
      faq: [
        { q: "Are these accounts real bank accounts?", a: "<p>Often not. Many are e-money institutions with safeguarded funds rather than licensed banks with deposit insurance. Check the entity and regulator.</p>" },
        { q: "Can I be paid my salary into one?", a: "<p>Frequently yes where local receiving details exist, though some employers and payroll systems require an account in your name at a licensed bank.</p>" },
        { q: "Do they charge for inactivity?", a: "<p>Some do, particularly on small dormant balances. Check the schedule before parking a currency you rarely use.</p>" }
      ],
      sources: [{ name: "FDIC — deposit insurance", url: "https://www.fdic.gov/resources/deposit-insurance/" }],
      related: ["international-transfer-fees", "best-multi-currency-accounts", "foreign-account-reporting"]
    },

    "international-transfer-fees": {
      title: "International transfer fees: finding the real cost",
      h1: "What a transfer actually costs",
      section: "Banking & money",
      eyebrow: "Explainer",
      dek: "The exchange-rate margin, correspondent bank deductions, sending charge structures, and a five-minute method for comparing providers honestly.",
      answer: "The advertised fee is usually the small part. Most of the cost sits in the <strong>exchange-rate margin</strong> — the gap between the rate you get and the mid-market rate — plus <strong>intermediary bank deductions</strong> that reduce the amount arriving. Compare the amount received, never the fee.",
      body:
        "<h2>Three places money disappears</h2>" +
        "<ol><li><strong>Sending fee</strong> — visible, and typically the smallest component.</li>" +
        "<li><strong>Exchange-rate margin</strong> — invisible, and commonly 0.5% to 3% with traditional banks.</li>" +
        "<li><strong>Intermediary and receiving deductions</strong> — each correspondent bank in the chain can take a cut, which is why the recipient reports less than you sent.</li></ol>" +
        "<!--FIG:Amount sent, margin taken, intermediary deductions and amount received-->" +
        "<h2>The five-minute comparison method</h2>" +
        "<ol><li>Look up the mid-market rate for the pair right now.</li>" +
        "<li>Get each provider's full quote for the same amount at the same moment.</li>" +
        "<li>Compare the <em>amount received</em>, not the fee.</li>" +
        "<li>Ask who pays intermediary charges, and whether a guaranteed-full-amount option exists.</li>" +
        "<li>Repeat at a weekend if you ever send then — surcharges appear out of hours.</li></ol>" +
        "<!--AD-->" +
        "<h2>Size changes the answer</h2>" +
        "<p>On small transfers a flat fee dominates and percentage margin barely matters. On large transfers the margin is everything — a 1.5% margin on a property deposit is thousands. Providers that look cheapest at $500 are frequently not cheapest at $50,000, and dedicated FX brokers become worth using at that size.</p>" +
        "<h2>Recurring transfers deserve real work</h2>" +
        "<p>If you move money monthly, a percentage point compounds into a serious annual sum. Model it once: annual volume multiplied by the margin difference is the number that justifies switching. Costs by band are set out in <a href='international-money-transfer-cost.html'>transfer costs</a>.</p>" +
        "<h2>Speed and traceability cost something</h2>" +
        "<p>Same-day settlement, guaranteed full amount and full tracking all carry a premium. That premium is often worth paying for a deposit or a tax payment with a deadline, and rarely worth paying for a routine top-up. Choose deliberately rather than defaulting to the fastest option.</p>",
      faq: [
        { q: "Why did less arrive than the quote said?", a: "<p>Usually intermediary bank deductions along the correspondent chain, or a receiving fee at the destination bank. Ask about both before sending.</p>" },
        { q: "Are 'zero fee' transfers really free?", a: "<p>Almost never. The cost is in the exchange rate. Compare the amount received against the mid-market rate to see it.</p>" },
        { q: "Is my bank ever cheapest?", a: "<p>Occasionally for same-currency transfers within a network, or for very large amounts under a negotiated rate. For ordinary conversions, rarely.</p>" }
      ],
      related: ["international-money-transfer-cost", "multi-currency-accounts", "best-multi-currency-accounts"]
    },

    "per-diem-vs-actual": {
      title: "Per diem or actual expenses: which to use",
      h1: "Per diem against actual cost",
      section: "Business travel",
      eyebrow: "Explainer",
      dek: "How per diem rates work, the substantiation each method needs, where actual cost wins, and the hybrid most small teams should run.",
      answer: "Per diem pays a fixed daily rate and removes receipt collection for meals and incidentals; actual-cost reimbursement pays what was spent and requires complete records. Most small teams should run a <strong>hybrid</strong>: per diem for meals and incidentals, actual cost for lodging and transport.",
      body:
        "<h2>What per diem does for you</h2>" +
        "<ul><li>Eliminates meal receipt collection and the arguments that follow it.</li>" +
        "<li>Makes trip costs predictable before travel is approved.</li>" +
        "<li>Reduces review time to checking dates and locations.</li>" +
        "<li>Treated as a reimbursement rather than pay when properly applied.</li></ul>" +
        "<p>Published rates vary by city and are updated periodically. Applying last year's rate to a high-cost city is a common and avoidable error.</p>" +
        "<!--FIG:Per diem rate against typical actual meal spend in three cities-->" +
        "<h2>Where actual cost wins</h2>" +
        "<p>In genuinely expensive cities, or where client entertaining is part of the trip, actual cost can exceed the per diem materially. If your team routinely spends above the rate on legitimate business meals, actual-cost reimbursement with real receipts is the honest answer — as long as the substantiation is complete, per the <a href='business-travel-expense-guide.html'>travel expense guide</a>.</p>" +
        "<!--AD-->" +
        "<h2>Both methods still need the purpose line</h2>" +
        "<p>Per diem removes the receipt requirement for the amount. It does not remove the need to show time, place and business purpose. A per diem claim with no itinerary and no stated purpose is as weak under review as a shoebox of receipts.</p>" +
        "<h2>Writing the policy</h2>" +
        "<ol><li>State which method applies to which category, in one page.</li>" +
        "<li>Name the rate source and the version in use.</li>" +
        "<li>Set a lodging cap by city tier rather than a single global number.</li>" +
        "<li>Require the purpose line at submission, not at month end.</li>" +
        "<li>Say what happens to unspent per diem — usually nothing, which is the point.</li></ol>" +
        "<h2>Foreign travel needs its own rates</h2>" +
        "<p>Overseas per diem rates differ from domestic and are published separately, and currency conversion needs a stated method — the rate on the transaction date, from a named source, applied consistently. Card programmes that capture the converted amount automatically remove most of this work: see <a href='corporate-card-programs.html'>corporate cards</a>.</p>",
      faq: [
        { q: "Is per diem taxable to the employee?", a: "<p>Properly applied and within published rates under an accountable plan, it is generally a reimbursement rather than wages. Amounts above the rate can be treated differently.</p>" },
        { q: "Can employees keep unspent per diem?", a: "<p>Under a per diem method, generally yes — that is the trade for the reduced paperwork.</p>" },
        { q: "Can we use per diem for lodging too?", a: "<p>It is permitted in some circumstances, but actual-cost lodging with a city cap is usually more accurate and easier to defend.</p>" }
      ],
      sources: [
        { name: "GSA — per diem rates", url: "https://www.gsa.gov/travel/plan-book/per-diem-rates" },
        { name: "IRS — Publication 463", url: "https://www.irs.gov/forms-pubs/about-publication-463" }
      ],
      related: ["business-travel-expense-guide", "travel-expense-deductions", "corporate-card-programs"]
    },

    "travel-expense-deductions": {
      title: "Travel expense deductions: mixed trips and foreign travel",
      h1: "Splitting business and personal travel",
      section: "Business travel",
      eyebrow: "Explainer",
      dek: "Primary purpose, day-by-day apportionment, the stricter foreign travel rules, conference travel, and the records that make a split defensible.",
      answer: "On a mixed trip, <strong>transport is deductible if the primary purpose is business</strong>, while on-the-ground costs are apportioned to business days. <strong>Foreign travel rules are stricter</strong>: where a trip is substantially personal, even transport may need apportioning. Documented day-by-day purpose is what makes the split hold.",
      body:
        "<h2>Primary purpose decides the airfare</h2>" +
        "<p>If the main reason for the trip is business, the cost of getting there is generally deductible in full even with personal days added. If the main reason is personal, the transport is not deductible merely because you took a meeting. Primary purpose is judged on the facts — days spent, what was scheduled first, and what you can show.</p>" +
        "<!--FIG:A seven-day trip apportioned across business and personal days-->" +
        "<h2>Apportion the days honestly</h2>" +
        "<ul><li>Business days include travel days and days with substantial business activity.</li>" +
        "<li>Weekend days sandwiched between business days can count in defined circumstances.</li>" +
        "<li>Purely personal days are not deductible, and lodging on them is not either.</li>" +
        "<li>A day with a single short call is not a business day, however convenient that would be.</li></ul>" +
        "<!--AD-->" +
        "<h2>Foreign travel is tested harder</h2>" +
        "<p>Special rules apply to travel outside the country, with exceptions based on trip length, the share of personal time, and whether you had substantial control over arranging the trip. A week-long overseas trip with two days of meetings is exactly the fact pattern these rules exist for. Do not assume domestic treatment carries over.</p>" +
        "<h2>Conferences and continuing education</h2>" +
        "<p>Attendance genuinely related to your trade or business is deductible; travel primarily for a holiday with a nominal seminar attached is not. Keep the agenda, your registration, and evidence of the sessions you attended — the agenda alone does not prove attendance.</p>" +
        "<h2>The records that make it stick</h2>" +
        "<ol><li>An itinerary showing each day's business activity by name and time.</li>" +
        "<li>Calendar invitations and correspondence arranging the meetings.</li>" +
        "<li>Receipts allocated to specific days.</li>" +
        "<li>A short written note of the trip's primary purpose, written before you travel.</li>" +
        "<li>Your apportionment arithmetic, retained with the claim.</li></ol>" +
        "<p>Contemporaneous records win these arguments; reconstructions rarely do. The full substantiation standard is in the <a href='business-travel-expense-guide.html'>travel expense guide</a>, and the reimbursement mechanics in <a href='per-diem-vs-actual.html'>per diem versus actual</a>.</p>",
      faq: [
        { q: "Can I extend a business trip for a holiday?", a: "<p>Yes. Keep transport deductible if the primary purpose remains business, and simply do not claim the personal days.</p>" },
        { q: "What about a client dinner on a personal trip?", a: "<p>The meal may be claimable subject to the meal limitation, but the trip's travel costs remain personal.</p>" },
        { q: "Do I need receipts for small amounts?", a: "<p>Rules allow some latitude on small incidentals, but the time, place and purpose record is still required. Per diem is the cleaner answer.</p>" }
      ],
      sources: [{ name: "IRS — Publication 463, travel, gift and car expenses", url: "https://www.irs.gov/forms-pubs/about-publication-463" }],
      related: ["business-travel-expense-guide", "per-diem-vs-actual", "corporate-card-programs"]
    },

    "corporate-card-programs": {
      title: "Corporate card programs for small travelling teams",
      h1: "Cards for teams that travel",
      section: "Business travel",
      eyebrow: "Explainer",
      dek: "Charge, credit and prepaid structures, foreign transaction costs, liability models, and the controls that make expense review nearly automatic.",
      answer: "The point of a corporate card is not rewards — it is <strong>capturing the expense record at the moment of spend</strong>. Choose on foreign transaction cost, receipt-capture quality and control granularity. For teams travelling internationally, a card charging no foreign transaction fee at a fair conversion rate beats a points programme.",
      body:
        "<h2>Three structures</h2>" +
        "<ul><li><strong>Charge cards</strong> — settled in full monthly, often with higher limits and no revolving debt.</li>" +
        "<li><strong>Credit cards</strong> — revolving, with interest if unpaid, and usually richer rewards.</li>" +
        "<li><strong>Prepaid or debit programmes</strong> — funded from your balance, with hard per-card limits and no credit exposure.</li></ul>" +
        "<p>For small teams, per-card limits and instant issuance matter more than the credit line. A virtual card per vendor or per trip is the single most effective control available.</p>" +
        "<!--FIG:Expense flow: card spend, prompted receipt capture, coded claim-->" +
        "<h2>Foreign transaction cost is the real number</h2>" +
        "<p>A foreign transaction fee of a few percent on every overseas purchase dwarfs any rewards rate. Check both the fee and the conversion rate used, and beware terminals offering to bill in your home currency — that dynamic conversion is consistently expensive. Always choose the local currency. Method in <a href='international-transfer-fees.html'>transfer fees</a>.</p>" +
        "<!--AD-->" +
        "<h2>Liability and personal guarantees</h2>" +
        "<p>Some small-business programmes require a personal guarantee, meaning the debt follows you if the company cannot pay. Others are corporate-liability only, usually with underwriting on business financials. Know which you signed — it is buried in the application and it matters more than the welcome bonus.</p>" +
        "<h2>Controls worth insisting on</h2>" +
        "<ol><li>Per-card and per-merchant-category limits.</li>" +
        "<li>Instant virtual cards for one trip or one vendor.</li>" +
        "<li>Receipt capture prompted at the transaction, with the purpose field required.</li>" +
        "<li>Automatic coding to expense categories that match your books.</li>" +
        "<li>Freeze and reissue from the app, because cards get lost abroad.</li></ol>" +
        "<h2>Why this is really a substantiation tool</h2>" +
        "<p>Every requirement in the <a href='business-travel-expense-guide.html'>substantiation standard</a> — amount, date, place, purpose — can be captured automatically at the point of sale, except purpose. A card programme that demands the purpose line before the expense clears converts your weakest record into your strongest.</p>",
      faq: [
        { q: "Do we need a corporate card at all?", a: "<p>Not necessarily, but reimbursing personal cards means chasing receipts and lending employees money. Even a small prepaid programme removes both problems.</p>" },
        { q: "Are rewards taxable?", a: "<p>Treatment varies by programme and how rewards are used. Business rebates are generally accounted for as a reduction in expense; confirm your position with your accountant.</p>" },
        { q: "Should employees have their own cards?", a: "<p>Yes, with per-card limits. Shared cards destroy the audit trail, which is the main thing you are buying.</p>" }
      ],
      related: ["business-travel-expense-guide", "per-diem-vs-actual", "international-transfer-fees"],
      crossRefs: [{ slug: "ledgerlift", page: "business-bank-account-guide", label: "The business account the card should settle from", why: "Card controls only help if the underlying banking is separated properly." }]
    },

    "travel-medical-insurance": {
      title: "Travel medical insurance and cover abroad",
      h1: "Medical cover when you live abroad",
      section: "Moving & cover",
      eyebrow: "Explainer",
      dek: "Travel insurance against international health insurance, what nomad visas require, exclusions that matter, and evacuation cover.",
      answer: "Travel insurance covers <strong>short trips and emergencies</strong>, with treatment aimed at getting you home. International health insurance covers <strong>ongoing care where you live</strong>, including routine and chronic treatment. Most nomad visas require the second, and buying the first is the most common application rejection in this category.",
      body:
        "<h2>Two different products</h2>" +
        "<ul><li><strong>Travel insurance</strong> — trip-length, emergency-focused, cheap, usually excludes routine and pre-existing conditions.</li>" +
        "<li><strong>International health insurance</strong> — annual, covers routine and chronic care in your country of residence, considerably more expensive.</li>" +
        "<li><strong>Local national or private cover</strong> — sometimes mandatory once resident, and frequently the cheapest route.</li></ul>" +
        "<p>People who have moved abroad but hold only travel insurance are usually uninsured for the care they will actually need.</p>" +
        "<!--FIG:Travel insurance against international health insurance across trip length and care type-->" +
        "<h2>What visa rules typically demand</h2>" +
        "<ol><li>Validity in the host country for the whole permit period.</li>" +
        "<li>A minimum coverage amount, stated in the rules.</li>" +
        "<li>Repatriation and sometimes evacuation cover.</li>" +
        "<li>A certificate in the required language, occasionally translated.</li>" +
        "<li>No exclusion for the activities you disclosed.</li></ol>" +
        "<p>Check the official government page for the specific route — see the <a href='digital-nomad-visa-guide.html'>nomad visa guide</a> — because a policy meeting one country's rules may fail another's.</p>" +
        "<!--AD-->" +
        "<h2>Exclusions that actually bite</h2>" +
        "<ul><li>Pre-existing conditions, unless declared and specifically accepted.</li>" +
        "<li>Adventure sports, motorbikes and scuba beyond stated depths.</li>" +
        "<li>Care in your home country, often excluded entirely on expat policies.</li>" +
        "<li>Pregnancy and maternity, commonly subject to long waiting periods.</li>" +
        "<li>Mental health, frequently capped far below physical care.</li>" +
        "<li>Anything after you exceed a stated number of days in one country.</li></ul>" +
        "<h2>Evacuation cover is not optional everywhere</h2>" +
        "<p>Where good tertiary care is far away, medical evacuation is the cover that matters most, and it is expensive to buy after the fact. Check the limit in real terms, not as a reassuring phrase.</p>" +
        "<h2>Cost drivers</h2>" +
        "<p>Age, whether the United States is included in your area of cover (which raises premiums sharply), deductible, and whether outpatient care is included. Excluding the US from cover is the single largest saving for people who will not be there. Price bands are in <a href='travel-insurance-cost.html'>travel insurance costs</a>.</p>",
      faq: [
        { q: "Does my card's travel cover count?", a: "<p>Rarely for visa purposes, and usually only for short trips with tight conditions. Read the certificate before relying on it.</p>" },
        { q: "Can I use local public healthcare?", a: "<p>Often yes once legally resident and contributing, which can be much cheaper than private cover. Confirm eligibility before cancelling anything.</p>" },
        { q: "Is US cover worth including?", a: "<p>Only if you will genuinely receive treatment there. It is the single largest premium driver on international policies.</p>" }
      ],
      related: ["travel-insurance-cost", "digital-nomad-visa-guide", "expat-move-checklist"]
    },

    "expat-tax-preparation-cost": {
      title: "Expat tax preparation cost 2026: what preparers charge",
      h1: "What expat tax preparation costs",
      section: "Costs",
      eyebrow: "High-intent cost guide",
      dek: "Fee bands by return complexity, what drives the price, add-on forms that are billed separately, and the cost of correcting missed years.",
      disclosure: true,
      answer: "A straightforward expat return with an exclusion claim runs roughly <strong>$450–$900</strong>. Add self-employment, foreign company ownership, rentals or treaty positions and <strong>$1,200–$3,000</strong> is normal. Remediation of missed years is quoted separately and commonly reaches <strong>$3,000–$8,000</strong> across the required years.",
      table: {
        caption: "Indicative 2026 expat tax preparation fees by return complexity.",
        headers: ["Situation", "Typical fee", "What is included", "Common add-ons", "Worth self-preparing?"],
        rows: [
          { best: true, cells: ["<strong>Employed abroad, one account</strong>", "$450 – $900", "Return plus exclusion or credit", "Foreign account report", "Sometimes, with care"] },
          { cells: ["Self-employed abroad", "$1,000 – $2,000", "Return, schedules, self-employment tax", "Estimated payment planning", "No"] },
          { cells: ["Foreign company owner", "$1,800 – $4,000+", "Return plus information returns", "Each extra entity billed", "No"] },
          { cells: ["Rentals or investments abroad", "$1,200 – $2,500", "Return, credit computation, asset disclosure", "Passive fund reporting", "No"] },
          { cells: ["Missed years, non-wilful", "$3,000 – $8,000", "Multiple years plus reports", "Penalty correspondence", "No"] }
        ],
        note: "Illustrative 2026 fee bands from published pricing by cross-border preparers. Fees vary by firm, country pair and how organised your records are. We do not prepare returns and receive no share of any fee."
      },
      body:
        "<h2>What actually drives the fee</h2>" +
        "<ul><li><strong>Number of information returns</strong>, each of which is separately billed and time-consuming.</li>" +
        "<li><strong>Self-employment</strong>, which brings totalisation and estimated payment questions.</li>" +
        "<li><strong>Foreign entity ownership</strong>, easily the largest single driver.</li>" +
        "<li><strong>Treaty positions</strong>, which require analysis rather than data entry.</li>" +
        "<li><strong>Record quality</strong> — disorganised clients pay for the preparer's reconstruction time.</li>" +
        "<li><strong>Foreign pensions and passive funds</strong>, whose reporting is notoriously heavy.</li></ul>" +
        "<!--AD-->" +
        "<h2>Where self-preparation is defensible</h2>" +
        "<p>A single employment abroad, one or two accounts, a clean exclusion claim under the physical presence test, and no self-employment — that is manageable with good software and a careful read of the <a href='foreign-earned-income-exclusion.html'>exclusion rules</a>. Everything beyond it tends to cost more in mistakes than in fees.</p>" +
        "<!--FIG:Preparation fee against return complexity, five scenarios-->" +
        "<h2>Get the quote structured properly</h2>" +
        "<ol><li>A fixed fee for the base return, in writing.</li>" +
        "<li>A per-form price list for information returns.</li>" +
        "<li>The hourly rate for anything outside scope, and what triggers it.</li>" +
        "<li>Whether the exclusion-versus-credit comparison is included or extra.</li>" +
        "<li>Who handles correspondence if a notice arrives, and at what cost.</li></ol>" +
        "<h2>Missed years are a different purchase</h2>" +
        "<p>If you have unfiled years, price the remediation route rather than a single return. Formal procedures exist for non-wilful failures, and using the correct one affects penalty exposure far more than the fee difference between firms. Detail in <a href='foreign-account-reporting.html'>foreign account reporting</a>.</p>" +
        "<h2>Cheap can be expensive here</h2>" +
        "<p>A preparer unfamiliar with cross-border returns may omit an election, mishandle a credit basket or miss an information return. The correction costs multiples of the original saving. Ask directly how many expat returns the firm files each year, and for the country pair you need.</p>",
      leadForm: {
        title: "Get matched with a cross-border preparer",
        sub: "Tell us your country pair and situation; we return a fee range for your complexity and the questions to ask before engaging anyone.",
        offer: "expat-tax-preparer-match",
        numberLabel: "Number of unfiled years (0 if current)",
        consent: "I consent to being contacted about tax preparation services. NomadLedger may be paid a referral fee. We are not a tax preparer and this is not tax advice.",
        cta: "Get a fee range",
        steps: ["We describe fee bands for your actual complexity, not a headline price.", "You are told who will contact you before anything is shared.", "Unfiled years are flagged for remediation routes, not ordinary filing.", "You get the preparer question list regardless."],
        privacy: "Stored: name, email, country pair, complexity notes. Never sold."
      },
      faq: [
        { q: "Is software enough for an expat return?", a: "<p>For simple employment-only situations with a clean exclusion claim, often yes. Consumer software handles information returns and treaty positions poorly.</p>" },
        { q: "Should the fee include the foreign return too?", a: "<p>Usually not — that is normally a separate local preparer. Ask whether the two will coordinate, because uncoordinated returns cause credit mismatches.</p>" },
        { q: "Do I pay more for filing late?", a: "<p>Generally yes, and remediation is priced per year. Filing before a notice arrives is materially cheaper than after.</p>" }
      ],
      edge: {
        intro: "Expat tax preparation pricing pages are mostly published by the preparers themselves, so they quote a headline fee for a simple return and treat everything else as \"from\". Two of the four largest cost drivers are structurally absent from that framing.",
        gaps: [
          {
            claim: "\"Expat tax preparation costs $X.\"",
            problem: "The headline is the base return. Information returns are billed <em>per form</em>, and a single foreign company, foreign trust, passive investment fund or non-US pension can add several forms — each separately priced and time-consuming. A quote of \"$500\" and a final invoice of \"$2,600\" can both be honest, because the base fee never covered the forms the situation actually required.",
            ours: "We band fees by situation rather than quoting one number, list the add-ons each band typically attracts, and tell readers to demand a per-form price list in writing before engaging."
          },
          {
            claim: "Unfiled years are treated as a larger version of ordinary filing.",
            problem: "They are a different purchase. Formal procedures exist for non-wilful failures, and which route is used affects penalty exposure by far more than the fee difference between firms. A reader who shops for the cheapest preparer to \"catch up\" is optimising the small variable while ignoring the large one — and a preparer who simply files the back years without selecting a procedure can worsen the position.",
            ours: "We price remediation as its own row and state plainly that route selection matters more than fee, pointing at the official procedures rather than describing them second-hand."
          },
          {
            claim: "Cheaper preparers are presented as a saving for simple cases.",
            problem: "The failure mode here is asymmetric. A preparer unfamiliar with cross-border work may omit an election, mishandle a foreign tax credit basket, or miss an information return — and the correction, including penalty correspondence, costs multiples of the original saving. This is not a quality-versus-price trade-off in the usual sense; it is a small certain saving against a large uncertain cost.",
            ours: "We give the qualifying question — how many expat returns the firm files annually, for your specific country pair — and mark honestly which situations are defensibly self-prepared and which are not."
          },
          {
            claim: "The engagement is assumed to cover your whole filing position.",
            problem: "The foreign country's return is normally a separate local preparer, and uncoordinated returns cause credit mismatches: a credit claimed on one side that the other side's timing or characterisation does not support. Neither preparer is responsible for the interaction, so nobody checks it unless the client insists.",
            ours: "We flag coordination between the two preparers as an explicit question, and include who handles notice correspondence — and at what rate — in the quote checklist."
          }
        ],
        only: [
          "Fees banded by five real situations, each with its typical add-ons, rather than a single headline figure.",
          "Missed years priced as a distinct remediation purchase where route selection dominates fee.",
          "A quote-structuring checklist: fixed base fee, per-form list, out-of-scope hourly rate, notice handling.",
          "An explicit self-preparation verdict per situation instead of a blanket recommendation.",
          "The two-preparer coordination question that prevents foreign-tax-credit mismatches."
        ]
      },
      sources: [
        { name: "IRS — Publication 54", url: "https://www.irs.gov/forms-pubs/about-publication-54", note: "Official guide for US citizens and residents abroad" },
        { name: "IRS — options for taxpayers with undisclosed foreign assets", url: "https://www.irs.gov/individuals/international-taxpayers", note: "The formal remediation procedures referenced above" }
      ],
      related: ["expat-tax-guide", "foreign-tax-credit", "foreign-account-reporting"]
    },

    "international-money-transfer-cost": {
      title: "International money transfer cost 2026 by amount",
      h1: "What it costs to move money abroad",
      section: "Costs",
      eyebrow: "High-intent cost guide",
      dek: "True cost by transfer size, bank against specialist against broker, the margin bands to expect, and where the switching decision actually pays.",
      disclosure: true,
      answer: "True cost is <strong>fee plus exchange-rate margin</strong>. Traditional banks commonly take <strong>1.5%–3%</strong> in margin plus a wire fee; specialist providers run <strong>0.3%–1%</strong>; brokers negotiate below that on large amounts. On a $50,000 transfer that spread is over a thousand dollars.",
      table: {
        caption: "Indicative 2026 total cost of an international transfer by provider type and amount.",
        headers: ["Provider type", "Typical fee", "Typical rate margin", "Cost on $5,000", "Cost on $50,000"],
        rows: [
          { best: true, cells: ["<strong>Specialist transfer provider</strong>", "$0 – $10", "0.3% – 1.0%", "≈ $20 – $60", "≈ $150 – $500"] },
          { cells: ["Multi-currency account", "$0 – $8", "0.3% – 1.2%", "≈ $20 – $70", "≈ $150 – $600"] },
          { cells: ["Traditional bank wire", "$25 – $50", "1.5% – 3.0%", "≈ $100 – $200", "≈ $775 – $1,550"] },
          { cells: ["FX broker (large amounts)", "$0", "0.1% – 0.5%", "Often unavailable", "≈ $50 – $250"] },
          { cells: ["Cash transfer agent", "$5 – $30", "2.0% – 5.0%", "≈ $105 – $280", "Rarely permitted"] }
        ],
        note: "Illustrative 2026 bands from published schedules and observed quotes against mid-market rates. Intermediary bank deductions on wires are additional and unpredictable. Always compare the amount received."
      },
      body:
        "<h2>Why the bands are so wide</h2>" +
        "<p>Margin is discretionary pricing. The same bank quotes different margins by channel, amount and customer segment, and almost never labels the margin as a cost. Two customers sending the same amount on the same day can receive materially different rates.</p>" +
        "<!--AD-->" +
        "<h2>Size decides the winner</h2>" +
        "<ul><li><strong>Under $1,000</strong> — flat fees dominate; a zero-fee specialist usually wins.</li>" +
        "<li><strong>$1,000 – $20,000</strong> — margin dominates; specialists and multi-currency accounts win clearly.</li>" +
        "<li><strong>Over $20,000</strong> — negotiate. Brokers quote below retail specialist pricing at this size.</li>" +
        "<li><strong>Recurring transfers</strong> — annual volume times margin difference is the number that matters.</li></ul>" +
        "<!--FIG:Total transfer cost by provider type at $1,000, $5,000 and $50,000-->" +
        "<h2>The extras that appear on wires</h2>" +
        "<ol><li>Intermediary bank deductions, taken en route.</li>" +
        "<li>Receiving fees at the destination bank.</li>" +
        "<li>Weekend and out-of-hours surcharges.</li>" +
        "<li>Dynamic currency conversion at terminals, if you accept home-currency billing.</li>" +
        "<li>Cut-off times that quietly delay settlement by a day.</li></ol>" +
        "<h2>Property purchases and tax payments</h2>" +
        "<p>These are the transfers where margin costs the most and timing risk is real. Ask about forward contracts to fix a rate for a future completion, and about guaranteed-full-amount delivery so a deposit does not arrive short. Both are standard broker offerings and rarely advertised to retail customers.</p>" +
        "<h2>Do the arithmetic once</h2>" +
        "<p>Take your annual transfer volume, multiply by the margin difference between your current provider and a cheaper one, and compare that to an hour of setup. For most people moving money monthly, switching pays for itself in the first transfer. Method in <a href='international-transfer-fees.html'>transfer fees</a>, and account choice in <a href='best-multi-currency-accounts.html'>the comparison</a>.</p>",
      leadForm: {
        title: "Get a transfer cost review",
        sub: "Tell us your currency pair and typical amount; we return the margin band to expect and which provider type fits your size.",
        offer: "transfer-cost-review",
        numberLabel: "Typical transfer amount (USD)",
        consent: "I consent to being contacted about transfer services. NomadLedger may be paid a referral fee. We are not a money transmitter and do not handle funds.",
        cta: "Review my costs",
        steps: ["We quote margin bands for your pair and size, not headline fees.", "You are told who will contact you before anything is shared.", "Large transfers are compared against broker pricing, not retail.", "You get the comparison method regardless."],
        privacy: "Stored: name, email, currency pair, amount band. Never sold."
      },
      faq: [
        { q: "Is a forward contract worth it?", a: "<p>For a dated large payment such as a property completion, often yes — it removes rate risk. It is unnecessary for routine small transfers.</p>" },
        { q: "Why does my bank quote a worse rate for a smaller amount?", a: "<p>Margin is tiered by size and segment. Smaller retail transfers usually receive the widest margin.</p>" },
        { q: "Can I avoid intermediary deductions?", a: "<p>Sometimes, by paying for a guaranteed-full-amount option or using a provider with local payout rails rather than a correspondent chain.</p>" }
      ],
      edge: {
        intro: "This is the clearest example of an omitted cost in the whole network. Transfer comparison pages overwhelmingly rank providers by advertised fee, and the fee is usually the smaller half of what you pay. The larger half is not labelled as a cost anywhere in the transaction.",
        gaps: [
          {
            claim: "\"Send money with zero fees.\"",
            problem: "Total cost is fee <em>plus</em> exchange-rate margin — the gap between the rate you receive and the mid-market rate. A zero-fee provider taking 2.5% margin on $50,000 charges $1,250 while advertising nothing. Because the margin is embedded in the rate rather than itemised, it never appears on a receipt as a charge, and a customer comparing fee columns cannot see it at all. This is the single most expensive misconception in cross-border money.",
            ours: "We publish fee and margin as separate columns and give total cost at two transfer sizes, so the invisible component is the one the reader compares on."
          },
          {
            claim: "Providers are ranked into a single best-to-worst order.",
            problem: "The winner changes with amount, because flat fees and percentage margins dominate at different scales. Under about $1,000 a flat fee dominates and a zero-fee specialist wins; in the middle band margin dominates; above roughly $20,000 a broker will usually quote below retail specialist pricing — an option most comparison pages do not mention because it pays no affiliate commission. A universal ranking is wrong at two of the three sizes.",
            ours: "We give the decision by size band, and name FX brokers as the right answer on large amounts even though they sit outside the affiliate ecosystem."
          },
          {
            claim: "The quoted rate is treated as what the recipient gets.",
            problem: "Wires routed through correspondent banks can be reduced by intermediary deductions taken en route, and the destination bank may levy a receiving fee. Neither is disclosed by the sending provider, and both are unpredictable. For a payment that must arrive in full — a deposit, a tax payment, a completion — an under-arrival is a real failure, not a rounding error.",
            ours: "We tell readers to compare the <em>amount received</em> rather than the rate quoted, and name guaranteed-full-amount delivery and local payout rails as the ways to avoid deductions."
          },
          {
            claim: "Margin is presented as a published price.",
            problem: "It is discretionary. The same bank quotes different margins by channel, amount and customer segment, so two customers sending the same amount on the same day can receive materially different rates — and the retail customer receives the widest. Pages that publish a single margin figure per provider imply a fixed price list that does not exist.",
            ours: "We state margin as a negotiable band, and give the annual-volume × margin-difference calculation that shows whether switching is worth an hour of setup."
          }
        ],
        only: [
          "Fee and rate margin as separate columns, with total cost shown at both $5,000 and $50,000.",
          "The winning provider type resolved by transfer size rather than a single ranking.",
          "FX brokers included for large amounts despite paying no affiliate commission.",
          "Intermediary deductions and receiving fees named, with the compare-amount-received rule.",
          "Forward contracts and guaranteed-full-amount delivery explained for dated payments like property completions."
        ]
      },
      sources: [
        { name: "CFPB — sending money internationally (remittance rules)", url: "https://www.consumerfinance.gov/consumer-tools/sending-money/", note: "Disclosure requirements, including the total cost a provider must state" },
        { name: "World Bank — Remittance Prices Worldwide", url: "https://remittanceprices.worldbank.org/", note: "Methodology treating fee plus margin as total cost" }
      ],
      related: ["international-transfer-fees", "best-multi-currency-accounts", "multi-currency-accounts"]
    },

    "travel-insurance-cost": {
      title: "Travel and expat medical insurance cost 2026",
      h1: "What cover abroad costs",
      section: "Costs",
      eyebrow: "High-intent cost guide",
      dek: "Premium bands for trip cover, nomad policies and full international health insurance, what drives the price, and where to cut cost safely.",
      disclosure: true,
      answer: "Short-trip travel insurance runs roughly <strong>$40–$120</strong> per trip. Nomad-oriented annual policies run <strong>$500–$1,500</strong>. Full international health insurance for a healthy adult runs <strong>$1,800–$5,000</strong> a year, and <strong>including the United States in the area of cover can double it</strong>.",
      table: {
        caption: "Indicative 2026 annual cost of medical cover abroad, healthy adult, excluding the US unless noted.",
        headers: ["Product", "Typical cost", "Covers routine care?", "Meets nomad visa rules?", "Best for"],
        rows: [
          { best: true, cells: ["<strong>Nomad annual policy</strong>", "$500 – $1,500/yr", "Limited", "Often, check the rules", "Long stays, moving between countries"] },
          { cells: ["Single-trip travel insurance", "$40 – $120/trip", "No", "Rarely", "Business trips under a month"] },
          { cells: ["Multi-trip annual travel", "$150 – $400/yr", "No", "Rarely", "Frequent short business travel"] },
          { cells: ["International health insurance", "$1,800 – $5,000/yr", "Yes", "Usually", "Living abroad with dependants"] },
          { cells: ["International health incl. US", "$4,000 – $10,000/yr", "Yes", "Usually", "Regular time in the United States"] }
        ],
        note: "Illustrative 2026 bands for a healthy adult in their thirties. Age is the dominant driver, and premiums rise steeply after fifty. Pre-existing conditions, dependants and outpatient cover all move the price materially."
      },
      body:
        "<h2>What moves the premium most</h2>" +
        "<ol><li><strong>Age</strong> — the largest factor by a wide margin.</li>" +
        "<li><strong>Area of cover</strong> — including the United States is the single biggest optional cost.</li>" +
        "<li><strong>Outpatient cover</strong> — inpatient-only policies are far cheaper and far less useful day to day.</li>" +
        "<li><strong>Deductible</strong> — raising it meaningfully reduces premium.</li>" +
        "<li><strong>Pre-existing conditions</strong> — loaded, excluded or subject to waiting periods.</li>" +
        "<li><strong>Maternity and dental</strong> — usually optional modules with waiting periods.</li></ol>" +
        "<!--AD-->" +
        "<h2>Where you can cut safely</h2>" +
        "<ul><li>Exclude the US from cover if you genuinely will not be treated there.</li>" +
        "<li>Take a higher deductible and self-insure routine costs.</li>" +
        "<li>Use local private care, which in many countries costs less than the excess.</li>" +
        "<li>Drop dental and optical modules and pay for them directly.</li>" +
        "<li>Join the local public system where you are eligible, keeping a lean international policy alongside.</li></ul>" +
        "<!--FIG:Annual premium by age band, with and without US cover-->" +
        "<h2>Where cutting is a mistake</h2>" +
        "<p>Do not remove evacuation cover where good tertiary care is distant, and do not buy a trip policy for a permanent move — it will not cover the routine and chronic care you actually use, and it will not satisfy a visa requirement. The product distinction is set out in <a href='travel-medical-insurance.html'>cover abroad</a>.</p>" +
        "<h2>Declare everything</h2>" +
        "<p>Non-disclosure is the most common reason a large claim is refused, and it is entirely self-inflicted. Declare every condition, accept the loading or exclusion, and get the acceptance in writing. A cheaper policy that does not pay is not cheaper.</p>" +
        "<h2>Check the renewal terms</h2>" +
        "<p>Ask whether the policy is guaranteed renewable regardless of claims, and whether conditions arising during cover remain covered at renewal. A policy that can be repriced or restricted after a serious claim is a materially different product from one that cannot, and the difference does not show in the first-year premium.</p>",
      leadForm: {
        title: "Get a cover comparison for living abroad",
        sub: "Tell us your age band, destination and whether you need US cover; we return the premium band to expect and the policy terms to insist on.",
        offer: "expat-cover-comparison",
        numberLabel: "Age",
        consent: "I consent to being contacted about insurance options. NomadLedger may be paid a referral fee. We are not an insurer or broker and cannot bind cover.",
        cta: "Compare my cover",
        steps: ["We quote realistic bands for your age and destination.", "You are told who will contact you before anything is shared.", "Visa cover requirements are checked against the official route.", "You get the policy-terms checklist regardless."],
        privacy: "Stored: name, email, age band, destination. Never sold."
      },
      faq: [
        { q: "Why is US cover so expensive?", a: "<p>Because US medical costs are the highest in the world, and insurers price the exposure accordingly. Excluding it is the largest single saving available.</p>" },
        { q: "Will my premium rise if I claim?", a: "<p>On many policies yes, or terms may be restricted at renewal. Ask specifically whether renewal is guaranteed and conditions remain covered.</p>" },
        { q: "Do I need cover if the local system is free?", a: "<p>Often still yes — for the waiting period before eligibility, for private options, and for evacuation and repatriation, which public systems do not provide.</p>" }
      ],
      edge: {
        intro: "The dominant failure in this topic is a category error. Travel insurance and international health insurance are different products solving different problems, and most comparison pages price them against each other as though a cheaper travel policy were a substitute for health cover.",
        gaps: [
          {
            claim: "Travel insurance is presented as cover for living abroad.",
            problem: "A travel policy covers emergencies during a trip from home. It does not cover routine or chronic care, it generally requires a home base you are returning to, and it will not satisfy a residence or nomad-visa cover requirement. Someone who moves abroad on a $90 trip policy is uninsured for the care they will actually use, and often non-compliant with their visa — while believing they have solved the problem at a tenth of the price.",
            ours: "We put both product types on one table with columns for routine care and visa compliance, so the distinction is visible before price is compared."
          },
          {
            claim: "\"Cheapest expat health insurance\" rankings compare premiums directly.",
            problem: "Area of cover is the largest optional variable, and including the United States can roughly double the premium. A ranking that does not hold area of cover constant is comparing different products — and the cheapest entry is usually cheapest because it excludes the most expensive territory, not because it is better value.",
            ours: "We quote every band excluding the US by default and show the US-inclusive figure as its own row, so the comparison is like-for-like and the largest available saving is explicit."
          },
          {
            claim: "Renewal is assumed to work like an annual repurchase.",
            problem: "Whether the policy is <em>guaranteed renewable</em>, and whether conditions arising during cover remain covered at renewal, are the terms that decide what happens after a serious claim. A policy that can be repriced or restricted afterwards is a materially different product from one that cannot — and the difference does not appear in the first-year premium, which is the only figure comparison tables show. This matters most to the people who most need cover.",
            ours: "We make guaranteed renewability and continuation of conditions explicit purchase criteria rather than fine print."
          },
          {
            claim: "Saving money is framed as buying a cheaper policy.",
            problem: "The most common reason a large claim is refused is non-disclosure of a pre-existing condition — an entirely self-inflicted failure that turns the cheapest policy into the most expensive outcome. Meanwhile several genuine savings go unmentioned: excluding the US, raising the deductible and self-insuring routine care, joining the local public system where eligible while keeping a lean international policy alongside.",
            ours: "We separate where cutting is safe from where cutting is a mistake, and state that a cheaper policy which does not pay is not cheaper."
          }
        ],
        only: [
          "Travel and international health products on one table with routine-care and visa-compliance columns.",
          "Premium bands quoted excluding the US, with the US-inclusive figure shown separately.",
          "Guaranteed renewability and continuation of conditions treated as purchase criteria.",
          "A where-cutting-is-safe list separated from a where-cutting-is-a-mistake list.",
          "Evacuation and repatriation flagged as cover public systems do not provide, even where local care is free."
        ]
      },
      sources: [
        { name: "US State Department — insurance coverage abroad", url: "https://travel.state.gov/content/travel/en/international-travel/before-you-go/your-health-abroad.html", note: "Confirms domestic plans and trip policies frequently exclude care abroad and evacuation" },
        { name: "CMS — coverage while outside the United States", url: "https://www.medicare.gov/coverage/travel", note: "Official position on domestic public cover abroad" }
      ],
      related: ["travel-medical-insurance", "digital-nomad-visa-guide", "relocation-calculator"]
    },

    "best-multi-currency-accounts": {
      title: "Best multi-currency accounts for working abroad, 2026",
      h1: "Cross-border accounts ranked",
      section: "Comparisons",
      eyebrow: "Comparison · scored rubric",
      dek: "Account types scored on true total cost, cross-border usability, fee transparency, protection, support and reporting friendliness.",
      disclosure: true,
      answer: "For most people working abroad the winning stack is a <strong>specialist multi-currency account for spending and conversion</strong>, a <strong>local bank account</strong> for domestic rent and salary rails, and a retained <strong>home bank account</strong> for legacy obligations. No single provider wins on all six criteria.",
      table: {
        caption: "Account types scored against the NomadLedger rubric, August 2026.",
        headers: ["Account type", "True total cost", "Cross-border usability", "Protection model", "Verdict"],
        rows: [
          { best: true, cells: ["<strong>Specialist multi-currency account</strong>", "Low: 0.3% – 1.2%", "Strong; local details in major markets", "Safeguarded, not insured", "Best for spending and conversion"] },
          { cells: ["<strong>Local bank in country of residence</strong>", "Low domestically, poor on FX", "Essential for rent and salary", "Local deposit protection", "Necessary, not optional"] },
          { cells: ["<strong>Home bank account, retained</strong>", "High on FX", "Weak; address and non-resident rules", "Home deposit insurance", "Keep for legacy obligations only"] },
          { cells: ["<strong>Global bank premium account</strong>", "Moderate; fees plus margin", "Good across its own network", "Deposit insurance", "Worth it only at higher balances"] },
          { cells: ["<strong>Neobank, single currency</strong>", "Low domestically, weak abroad", "Poor once you move", "Varies", "Not a cross-border solution"] },
          { cells: ["<strong>FX broker account</strong>", "Lowest on large amounts", "Transfers only, not day-to-day", "Client money rules vary", "For property and large transfers"] }
        ],
        note: "Scored by account type rather than by brand, because provider terms for non-residents change frequently and vary by nationality and country of residence. Verify the current terms for your own passport and residence before opening anything."
      },
      body:
        "<h2>How we scored</h2>" +
        "<p>Each type was assessed against the six weighted criteria in our <a href='review-methodology.html'>methodology</a>: true total cost measured against mid-market rates on real amounts, cross-border usability tested from a non-resident position, fee transparency read from published schedules, protection and licensing, support reachability across time zones, and how easily statements support <a href='foreign-account-reporting.html'>foreign account reporting</a>.</p>" +
        "<!--AD-->" +
        "<h2>Why no single account wins</h2>" +
        "<p>The cheapest conversion usually comes from a provider that is not a bank and offers no deposit insurance. The strongest protection usually comes from a bank with expensive FX. The account that can pay your rent is usually local and useless internationally. Holding three accounts is not inefficiency — it is the structure the constraints force.</p>" +
        "<!--FIG:Six account types scored across cost, usability, protection and reporting-->" +
        "<h2>Where the ranking flips</h2>" +
        "<ul><li>Large one-off transfers, where a broker beats every retail provider — see <a href='international-money-transfer-cost.html'>transfer costs</a>.</li>" +
        "<li>High balances, where a global premium account's service and network justify its pricing.</li>" +
        "<li>Countries where non-residents cannot open a local account, making the multi-currency provider load-bearing.</li>" +
        "<li>Salaries paid only into a licensed local bank, which no e-money account can substitute for.</li></ul>" +
        "<h2>What to verify before opening</h2>" +
        "<ol><li>Which legal entity holds your money, in which country, under which regulator.</li>" +
        "<li>Whether deposit protection or safeguarding applies, and to what limit.</li>" +
        "<li>The conversion margin in writing, including out-of-hours.</li>" +
        "<li>Whether your nationality and residence are supported, not just your destination.</li>" +
        "<li>Whether an annual statement with account identifiers is available for reporting.</li></ol>" +
        "<p>Then run the numbers for your own volumes with the method in <a href='international-transfer-fees.html'>transfer fees</a>, and use the <a href='expat-move-checklist.html'>move checklist</a> to open accounts in the right order.</p>",
      methodology: "<p>Scored against the rubric in our <a href='review-methodology.html'>review methodology</a> using published fee schedules, quoted rates compared to mid-market references captured in July and August 2026, and account-opening tests where terms permitted. Affiliate relationships do not affect scoring or ordering.</p>",
      faq: [
        { q: "Should I close my home bank account?", a: "<p>Usually not. Keep one for tax refunds, pensions and legacy direct debits, and inform them of your move rather than concealing it.</p>" },
        { q: "Is holding three accounts really necessary?", a: "<p>For most people abroad, yes. Each covers a failure mode of the others, and redundancy is the main defence against being locked out.</p>" },
        { q: "Does more accounts mean more reporting?", a: "<p>Yes, and the aggregate threshold is low. Weigh the fee saving against the extra reporting before adding a fourth.</p>" }
      ],
      related: ["multi-currency-accounts", "international-money-transfer-cost", "international-banking-guide"]
    },

    "relocation-calculator": {
      title: "Relocation net-income calculator",
      h1: "Relocation net-income calculator",
      section: "Tools",
      eyebrow: "Free tool",
      dek: "Compare take-home at home and abroad after tax, cost of living and housing support — with a break-even on the one-off cost of moving.",
      disclosure: true,
      toc: false,
      answer: "Enter both salaries, the effective tax rate in each country, the cost-of-living difference and any housing allowance. The calculator returns net income in each case, the purchasing-power-adjusted comparison, and how long the move takes to repay its one-off cost.",
      body:
        "<div id='calculator'></div>" +
        "<h2>Use effective rates, not headline brackets</h2>" +
        "<p>The number that matters is total tax and mandatory social contributions as a percentage of gross — which is often far higher than the income tax rate alone in countries with heavy social insurance. Take the effective rate from a payslip or a local calculator, and remember that citizenship-based filing may add a home-country liability on top; see the <a href='expat-tax-guide.html'>expat tax guide</a>.</p>" +
        "<h2>Cost of living is the field people guess</h2>" +
        "<p>Enter the percentage change in what your actual basket costs — rent, groceries, transport, childcare — not a general index. A nominal pay rise into a city thirty percent more expensive is a pay cut, and this is the field that most often reverses the answer.</p>" +
        "<h2>Count every one-off cost</h2>" +
        "<ul><li>Flights, shipping and temporary accommodation.</li>" +
        "<li>Rental deposits, often several months.</li>" +
        "<li>Visa, legal, translation and apostille fees.</li>" +
        "<li>Mandatory insurance for the permit period — see <a href='travel-insurance-cost.html'>cover costs</a>.</li>" +
        "<li>Cross-border tax preparation for the transition years.</li>" +
        "<li>Currency conversion on everything you move.</li></ul>" +
        "<h2>What this model cannot price</h2>" +
        "<p>Career trajectory, pension continuity and social security accrual, the value of the experience itself, and the risk that you return early. Those are real and frequently decisive — the calculator is one input to the decision, not the decision.</p>",
      calculator: {
        title: "Relocation net-income model",
        sub: "Net income at home and abroad, adjusted for cost of living, with a break-even on the move cost.",
        disclaimer: "An estimate for comparison, not tax, financial or immigration advice. Effective tax rates, social contributions and treaty positions vary by individual circumstance — confirm yours with a cross-border adviser.",
        fields: [
          { id: "homeSalary", label: "Current gross salary (USD)", type: "number", value: 84000, min: 0, max: 2000000, step: 1000 },
          { id: "homeTax", label: "Current effective tax and contributions (%)", type: "number", value: 26, min: 0, max: 70, step: 1, hint: "Total tax plus mandatory contributions as a share of gross, from a payslip." },
          { id: "awaySalary", label: "Offered gross salary abroad (USD equivalent)", type: "number", value: 92000, min: 0, max: 2000000, step: 1000 },
          { id: "awayTax", label: "Effective tax and contributions abroad (%)", type: "number", value: 34, min: 0, max: 70, step: 1, hint: "Include social insurance, which is heavy in many countries." },
          { id: "colChange", label: "Cost of living change (%)", type: "number", value: 12, min: -60, max: 200, step: 1, hint: "Positive if the new city is more expensive for your actual basket." },
          { id: "housing", label: "Annual housing allowance or support (USD)", type: "number", value: 0, min: 0, max: 200000, step: 500 },
          { id: "moveCost", label: "One-off cost of moving (USD)", type: "number", value: 9500, min: 0, max: 200000, step: 500, hint: "Flights, shipping, deposits, visa, legal and insurance." }
        ],
        compute: function (v) {
          var m = window.MDN_UTIL.money;
          var homeNet = v.homeSalary * (1 - v.homeTax / 100);
          var awayNet = v.awaySalary * (1 - v.awayTax / 100) + v.housing;

          /* Cost-of-living adjustment expresses money abroad in home purchasing power. */
          var colFactor = 1 + v.colChange / 100;
          var awayAdjusted = colFactor > 0 ? awayNet / colFactor : 0;
          var annualDiff = awayAdjusted - homeNet;
          var monthlyDiff = annualDiff / 12;
          var breakEvenMonths = monthlyDiff > 0 ? v.moveCost / monthlyDiff : 0;

          return [
            { label: "Net income at home", value: m(homeNet), hint: "Gross " + m(v.homeSalary) + " less " + v.homeTax + "% tax and contributions." },
            { label: "Net income abroad", value: m(awayNet), hint: "Gross " + m(v.awaySalary) + " less " + v.awayTax + "%" + (v.housing > 0 ? ", plus " + m(v.housing) + " housing support" : "") + "." },
            { label: "Abroad in home purchasing power", value: m(awayAdjusted), hint: v.colChange === 0 ? "No cost-of-living difference entered." : (v.colChange > 0 ? "Adjusted down for a city " + v.colChange + "% more expensive." : "Adjusted up for a city " + Math.abs(v.colChange) + "% cheaper.") },
            { label: "Annual difference", value: (annualDiff >= 0 ? "+" : "−") + m(Math.abs(annualDiff)), hint: annualDiff >= 0 ? "Better off by " + m(Math.abs(monthlyDiff)) + " a month in real terms." : "Worse off by " + m(Math.abs(monthlyDiff)) + " a month in real terms." },
            { label: "Break-even on move cost", value: monthlyDiff > 0 ? (breakEvenMonths < 1 ? "Under 1 month" : Math.ceil(breakEvenMonths) + " months") : "Never on money alone", hint: monthlyDiff > 0 ? "Repaying " + m(v.moveCost) + " at " + m(monthlyDiff) + " a month." : "The move costs you money in real terms — it needs a non-financial reason." }
          ];
        }
      },
      faq: [
        { q: "Should I include home-country tax as well?", a: "<p>If you remain liable at home — as US citizens generally do — model your combined effective rate after any exclusion or credit rather than the foreign rate alone.</p>" },
        { q: "What cost-of-living figure should I use?", a: "<p>Price your own basket: rent for the flat you would actually take, your groceries, transport and childcare. General indices hide exactly the categories that dominate your spending.</p>" },
        { q: "Does this handle housing provided in kind?", a: "<p>Enter its market value as an allowance, and note that employer-provided housing is taxable in many countries — which raises your effective rate.</p>" }
      ],
      sources: [{ name: "IRS — foreign earned income exclusion", url: "https://www.irs.gov/individuals/international-taxpayers/foreign-earned-income-exclusion" }],
      related: ["expat-move-checklist", "expat-tax-guide", "digital-nomad-visa-guide"]
    },

    "expat-move-checklist": {
      title: "Cross-border move checklist: 30 checks before, during and after",
      h1: "The cross-border move checklist",
      section: "Tools",
      eyebrow: "Free tool",
      dek: "Residence and tax, banking and money, cover and documents, then the first ninety days abroad. Progress saves in your browser.",
      toc: false,
      answer: "Work it in order: settle the residence and tax position first, arrange banking redundancy before you lose your address, then cover and documents, then the first ninety days. Almost every expensive cross-border mistake is something that had to be done <em>before</em> the flight.",
      body:
        "<div id='checklist'></div>" +
        "<h2>How to use it</h2>" +
        "<p>Do the residence and banking sections at least a month before departure — both involve institutions that move slowly and both get much harder once you no longer have a domestic address. The reasoning behind each item is in the <a href='expat-tax-guide.html'>expat tax guide</a> and the <a href='international-banking-guide.html'>banking guide</a>.</p>" +
        "<h2>What this cannot tell you</h2>" +
        "<p>Your residence status, your filing position, or whether a visa application will succeed. Those depend on facts and discretion no checklist can see. What it does is make sure the questions get asked while there is still time to act on the answers.</p>",
      checklist: {
        groups: [
          { title: "Residence and tax", note: "Do this first — it determines everything else.", items: ["Departure and arrival dates recorded with evidence", "Host country residence test read from the official source", "Home country residence or domicile position documented", "State or regional residence ties itemised", "Exclusion or credit approach modelled for the first year", "Cross-border preparer engaged if the return is not simple"] },
          { title: "Banking and money", items: ["Home bank informed and an acceptable correspondence address set", "A second home-country account kept as backup", "Multi-currency account opened and verified before departure", "Home-country phone number retained for verification codes", "Recovery codes and card details stored offline", "Transfer costs compared for your actual amounts and pair", "Foreign account reporting thresholds checked against your accounts"] },
          { title: "Cover and documents", items: ["Medical cover bought that matches residence, not travel", "Visa cover requirements checked on the official page", "Evacuation and repatriation limits confirmed in figures", "Pre-existing conditions declared and acceptance held in writing", "Passport validity and blank pages sufficient for the permit", "Certificates apostilled or translated where required", "Digital copies of every document stored where you can reach them"] },
          { title: "The first ninety days", items: ["Local registration completed within the legal deadline", "Local bank account opened with proof of address", "Tax identification number obtained locally", "Day log started for the residence count", "Employer informed and remote-work approval documented", "Local emergency numbers and nearest hospital identified", "Housing lease and utilities in your own name where possible", "First foreign tax deadline diarised alongside the home one", "Highest balance of every account tracked from month one", "Return-trip plan and cost noted in case the move ends early"] }
        ]
      },
      faq: [
        { q: "How far ahead should I start?", a: "<p>Two to three months for the residence, banking and document sections. Account opening and apostilled documents are the items that reliably take longer than expected.</p>" },
        { q: "Is my progress private?", a: "<p>Yes — ticks are stored only in your browser's local storage and never sent to us.</p>" }
      ],
      related: ["relocation-calculator", "expat-tax-guide", "international-banking-guide"],
      cta: { title: "Get the filing calendar", text: "The Border Ledger includes the one-page expat filing calendar: deadlines, thresholds and the forms each one needs.", btn: "Subscribe", href: "index" }
    }
  }
};

window.SITE_DATA.aboutRelated = ["expat-tax-guide", "best-multi-currency-accounts"];
Object.assign(window.SITE_DATA.pages, window.MDN_TRUST(window.SITE_DATA));
window.MDN_SITES = window.MDN_SITES || {};
window.MDN_SITES[window.SITE_DATA.slug] = window.SITE_DATA;
