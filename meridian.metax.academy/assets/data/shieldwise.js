/* ShieldWise — small business insurance. Content model. */
window.SITE_DATA = {
  slug: "shieldwise",
  brand: "ShieldWise",
  mark: "SW",
  color: "#14584f",
  tagline: "Small business insurance, decoded",
  description: "Independent, underwriter-reviewed guides to small business insurance: liability, workers' compensation, professional liability and cyber cover, with cost benchmarks and a renewal system.",
  topicLong: "commercial insurance for small businesses, freelancers and contractors",
  ymylLabel: "Insurance and financial",
  reviewObject: "insurers and business policies",
  updated: "22 July 2026",
  defaultAuthor: "Dana Whitfield",
  defaultReviewer: "Marcus Ilori, CPCU",
  contactEmail: "shieldwise@metax.academy",
  disclaimer: "ShieldWise publishes general insurance education, not advice. Coverage, exclusions, pricing and eligibility vary by carrier, state and business. Read the policy wording and speak to a licensed agent or broker before you buy.",
  disclosureText: "We may earn a commission or referral fee if you request a quote through a partner on this page. It never changes our scoring or the order of our tables.",
  legalLine: "ShieldWise is not an insurer, agency or broker and does not sell insurance.",
  footerAbout: "Underwriter-reviewed guides for owners who buy their own commercial cover — coverage explainers, dated cost benchmarks and a renewal system that stops you overpaying.",
  aboutDek: "A publication for the owner who has to buy insurance without an in-house risk manager.",
  aboutWhat: "Coverage explainers written from policy wordings rather than marketing pages; cost benchmarks with the assumptions shown; comparison pages scored against a public rubric; and tools — a premium estimator and an industry-by-industry coverage checklist — that make a renewal take an hour instead of a week.",
  aboutDiff: [
    "We read the policy form. Most published guides summarise a carrier's landing page; we describe what the insuring agreement actually promises and which exclusions bite in practice.",
    "Every cost figure carries its assumptions: class code, revenue band, limits, deductible, state and year.",
    "We publish the rubric before the ranking, so you can disagree with the weights rather than guess at them.",
    "We do not sell insurance, so there is no book of business steering our recommendations."
  ],
  cannotDo: "We cannot quote you, bind coverage, interpret your specific policy, or tell you whether a claim will be paid. Those require a licensed agent, broker or adjuster who has read your documents.",
  sourceStandards: [
    "State departments of insurance and the NAIC for market conduct, complaint and solvency data.",
    "Carrier-filed policy forms and ISO standard forms, cited by form number where possible.",
    "AM Best or comparable financial strength ratings, with the rating date.",
    "OSHA, BLS and state workers' compensation bureaus for injury and claim-cost context."
  ],
  methodLimits: "We cannot observe claim outcomes at scale, so 'claims handling' is scored from regulator complaint ratios and documented service commitments rather than anecdotes. Premium figures are indicative benchmarks, not quotes.",
  rubric: [
    { name: "Coverage substance", weight: "30%", what: "Insuring agreement breadth, sub-limits, default endorsements, and how many common exposures are excluded by default." },
    { name: "Price for the cover", weight: "20%", what: "Benchmark premiums for identical risk profiles, normalised for limits and deductible." },
    { name: "Claims and service", weight: "20%", what: "Regulator complaint ratios, published claim service standards, adjuster access, 24/7 reporting." },
    { name: "Financial strength", weight: "15%", what: "Current AM Best or equivalent rating and rating trend." },
    { name: "Buying experience", weight: "10%", what: "Quote transparency, certificate issuance speed, mid-term change handling." },
    { name: "Small-business fit", weight: "5%", what: "Appetite for micro-businesses, minimum premium, industry class availability." }
  ],
  evidence: [
    "Reading the filed or specimen policy form, not the brochure.",
    "Running matched-profile quotes on identical risk scenarios where a public quoting path exists.",
    "Pulling complaint index data from state regulators and the NAIC.",
    "Interviewing independent brokers who place these lines for micro-businesses."
  ],
  disqualifiers: [
    "The carrier will not make a specimen policy form available for review.",
    "A current regulatory action for claim-handling practices.",
    "Marketing that implies coverage the form excludes.",
    "Quote flows that require a phone call before showing any price band."
  ],
  team: [
    { name: "Dana Whitfield", role: "Editor-in-chief", bio: "Fifteen years covering commercial lines for trade press, previously a small-commercial underwriting assistant. Writes the cost benchmarks and owns the rubric.", focus: "Liability, BOPs, cost modelling" },
    { name: "Priya Raman", role: "Senior writer", bio: "Former independent agency account manager for contractors and trades. Handles workers' compensation and commercial auto.", focus: "Workers' comp, auto, contractors" },
    { name: "Tom Baptiste", role: "Data editor", bio: "Builds the premium benchmark model and maintains the class-code mapping behind the calculator.", focus: "Benchmarks, tooling" }
  ],
  reviewers: [
    { name: "Marcus Ilori, CPCU", credential: "Chartered Property Casualty Underwriter, 18 years in small commercial underwriting", bio: "Reviews coverage explainers and comparison pages for accuracy against standard forms and current underwriting practice." },
    { name: "Elena Sorokina", credential: "Licensed independent broker (P&C), multi-state", bio: "Checks buying-process guidance and certificate/renewal workflows against what agencies actually do." }
  ],
  newsletter: {
    name: "The Renewal Brief",
    pitch: "Every second Tuesday: one coverage trap explained, one dated price benchmark, and the renewal tasks due this month.",
    cadence: "fortnightly",
    cta: "Get the Renewal Brief",
    magnet: "The 12-month insurance renewal calendar (spreadsheet + checklist)"
  },
  nav: [
    { label: "Start here", page: "business-insurance-guide" },
    { label: "Liability", page: "general-liability-insurance" },
    { label: "Workers' comp", page: "workers-compensation-insurance" },
    { label: "Cyber", page: "cyber-insurance-small-business" },
    { label: "Compare", page: "best-small-business-insurance" },
    { label: "Cost calculator", page: "insurance-cost-calculator" }
  ],
  toolLinks: [
    { page: "insurance-cost-calculator", label: "Business insurance cost calculator", desc: "Estimate a premium range for your industry, revenue, payroll and limits — with the assumptions shown." },
    { page: "coverage-checklist", label: "Coverage checklist by industry", desc: "Work through the exposures for your trade and save your progress between sessions." }
  ],
  popular: ["business-insurance-cost", "cyber-insurance-cost", "professional-liability-cost", "small-business-insurance-quotes", "best-small-business-insurance"],
  featured: ["business-insurance-guide", "workers-compensation-insurance", "cyber-insurance-small-business"],
  partners: [
    { slug: "hardenhq", why: "the security controls insurers now ask about" },
    { slug: "clausecraft", why: "contracts and the insurance clauses inside them" },
    { slug: "ledgerlift", why: "financing and cash-flow around premiums" }
  ],
  clusters: [
    { kicker: "Cluster 1", name: "Liability cover", desc: "General liability, product liability, professional liability and the overlaps between them.", pages: ["general-liability-insurance", "professional-liability-insurance", "bop-vs-general-liability", "ecommerce-product-liability"] },
    { kicker: "Cluster 2", name: "People and vehicles", desc: "Workers' compensation, employment practices and commercial auto exposure.", pages: ["workers-compensation-insurance", "commercial-auto-insurance", "insurance-for-contractors"] },
    { kicker: "Cluster 3", name: "Cyber and technology risk", desc: "Cyber liability, tech E&O and the controls underwriters require before they quote.", pages: ["cyber-insurance-small-business", "best-cyber-insurance"] },
    { kicker: "Cluster 4", name: "Buying, cost and admin", desc: "What it costs, how to compare, and the paperwork clients demand.", pages: ["business-insurance-cost", "cyber-insurance-cost", "professional-liability-cost", "small-business-insurance-quotes", "certificate-of-insurance"] }
  ],
  pages: {
    index: {
      title: "ShieldWise — small business insurance, decoded",
      hero: {
        h1: "Buy the right business cover without becoming an insurance expert",
        lead: "Underwriter-reviewed explainers, dated cost benchmarks and a renewal system for owners, freelancers and contractors who have to make coverage decisions alone.",
        primary: { page: "business-insurance-guide", label: "Start with the master guide" },
        secondary: { page: "insurance-cost-calculator", label: "Estimate your premium" },
        trust: ["Reviewed by a CPCU underwriter", "Policy forms read, not brochures", "Assumptions published with every price", "We do not sell insurance"],
        stats: [
          { v: "6", l: "Core coverage lines explained from the policy form up" },
          { v: "Quarterly", l: "Refresh cycle on every price benchmark" },
          { v: "2 tools", l: "Premium estimator and industry coverage checklist" },
          { v: "0", l: "Commission influence on our rankings" }
        ]
      },
      why: "<p>Most small business owners buy insurance twice: once in a hurry because a client demanded a certificate, and once again after a claim taught them what they actually bought. The second purchase is always better informed and usually cheaper.</p>" +
        "<p>ShieldWise exists to move that learning forward. We read the forms, publish the benchmark assumptions, and separate the questions that change your price (class code, payroll, claims history, limits) from the ones that just change the sales pitch.</p>" +
        "<p>We are not an agency. We cannot bind coverage and we earn nothing from a policy you buy — only, sometimes, from a quote request you choose to make. That is stated on every page it applies to.</p>"
    },

    "business-insurance-guide": {
      title: "Small business insurance: the complete 2026 guide",
      h1: "Small business insurance: what you actually need, in what order",
      section: "Pillar guide",
      eyebrow: "Pillar guide",
      dek: "The six coverages that matter, how to sequence them, what drives the price, and the traps that void cover when you claim.",
      updated: "22 July 2026",
      disclosure: true,
      answer: "Most small businesses need <strong>general liability</strong> first, <strong>workers' compensation</strong> the moment they hire, <strong>professional liability</strong> if they give advice or deliver work product, and <strong>cyber</strong> if they hold customer data or take payments. Property and commercial auto follow the assets you own. A business owner's policy (BOP) bundles the first two property/liability pieces at a discount.",
      body:
        "<h2>Start with what can actually bankrupt you</h2>" +
        "<p>Insurance buying goes wrong when it starts with price. Start instead with a blunt question: which single event would end the business? For a two-person design studio, it is a professional negligence claim from a client, not a fire. For a roofing contractor, it is an employee injury. For an online retailer, it is a product injury or a payment-data breach. Buy against the fatal exposure first; buy the rest with what is left.</p>" +
        "<h2>The six lines, ranked by how often they are actually needed</h2>" +
        "<table><thead><tr><th>Coverage</th><th>Pays for</th><th>Who needs it first</th></tr></thead><tbody>" +
        "<tr><td><a href='general-liability-insurance.html'>General liability</a></td><td>Third-party bodily injury, property damage, personal &amp; advertising injury</td><td>Anyone with premises, customers on site, or contracts requiring it</td></tr>" +
        "<tr><td><a href='workers-compensation-insurance.html'>Workers' compensation</a></td><td>Employee injury medical costs and lost wages; employer liability</td><td>Legally required in nearly every state once you have employees</td></tr>" +
        "<tr><td><a href='professional-liability-insurance.html'>Professional liability (E&amp;O)</a></td><td>Financial loss caused by your advice, design or work product</td><td>Consultants, agencies, accountants, IT, healthcare, design</td></tr>" +
        "<tr><td><a href='cyber-insurance-small-business.html'>Cyber liability</a></td><td>Breach response, notification, extortion, business interruption, liability</td><td>Anyone holding customer records or taking card payments</td></tr>" +
        "<tr><td>Commercial property</td><td>Your building, stock, equipment and improvements</td><td>Anyone with premises, inventory or expensive kit</td></tr>" +
        "<tr><td><a href='commercial-auto-insurance.html'>Commercial auto</a></td><td>Vehicles owned or used for the business</td><td>Trades, delivery, any titled business vehicle</td></tr>" +
        "</tbody></table>" +
        "<!--AD-->" +
        "<h2>The BOP question</h2>" +
        "<p>A business owner's policy packages general liability with commercial property, usually with business interruption included, at less than the two bought separately. It is the default for low-hazard businesses under roughly $5m revenue. It is not a complete programme: it does not include workers' comp, professional liability, auto, or (usually) meaningful cyber limits. See <a href='bop-vs-general-liability.html'>BOP vs general liability</a> for where the line falls.</p>" +
        "<h2>What actually drives your premium</h2>" +
        "<ul>" +
        "<li><strong>Class code.</strong> The single biggest lever. A misclassified business can pay double — or find a claim denied because the described operations do not match reality.</li>" +
        "<li><strong>Exposure base.</strong> Revenue for liability, payroll for workers' comp, replacement value for property, records held for cyber.</li>" +
        "<li><strong>Limits and deductible.</strong> Moving from $1m/$2m to $2m/$4m typically costs far less than doubling — layered limits are cheap relative to the first dollar of cover.</li>" +
        "<li><strong>Loss history.</strong> Three to five years, and open claims hurt more than closed ones.</li>" +
        "<li><strong>Controls.</strong> Increasingly formal: safety programmes for comp, MFA and backups for cyber, contract review for E&amp;O.</li>" +
        "</ul>" +
        "<p>Our <a href='business-insurance-cost.html'>cost guide</a> gives dated benchmark ranges by industry, and the <a href='insurance-cost-calculator.html'>calculator</a> lets you move those levers yourself.</p>" +
        "<h2>Five traps that cost owners real money</h2>" +
        "<ol>" +
        "<li><strong>Claims-made vs occurrence.</strong> Professional liability and cyber are usually claims-made: the policy must be live when the claim is <em>made</em>. Cancel it and old work is uncovered unless you buy tail cover.</li>" +
        "<li><strong>Under-described operations.</strong> If you told the carrier you do consulting and you also install hardware, the installation claim is the one they will contest.</li>" +
        "<li><strong>Certificate theatre.</strong> A <a href='certificate-of-insurance.html'>certificate of insurance</a> proves cover existed on a date. It is not a contract and it does not add an additional insured — the endorsement does.</li>" +
        "<li><strong>Sub-limits.</strong> A $1m cyber policy with a $25k social-engineering sub-limit is a $25k policy for the loss you are most likely to have.</li>" +
        "<li><strong>Annual auto-renewal drift.</strong> Premiums creep, and exposures change. Re-market every second year at minimum; use the <a href='coverage-checklist.html'>coverage checklist</a> as the prompt.</li>" +
        "</ol>" +
        "<h2>A sensible buying sequence</h2>" +
        "<ol><li>Write down your three worst plausible events and who would sue.</li>" +
        "<li>Check contract requirements — clients and landlords often set minimum limits and additional-insured wording.</li>" +
        "<li>Get your class code right before you shop.</li>" +
        "<li>Quote three routes: a direct digital carrier, an independent broker, and your industry association's programme.</li>" +
        "<li>Compare forms, not just prices: exclusions, sub-limits, defence-inside-or-outside-limits.</li>" +
        "<li>Diary the renewal 60 days out, not 7.</li></ol>",
      edge: {
        intro: "The high-ranking pages for this topic are published almost entirely by carriers and brokers, and they share a format: a list of coverage types, each described by what it pays for. That format is the problem. It answers \"what exists\" when the reader's question is \"what would end my business, and does anything I am about to buy actually respond to it\" — and the difference between those two questions is where uninsured losses live.",
        gaps: [
          {
            claim: "\"Here are the types of business insurance. Most businesses should consider general liability, property, workers' comp...\"",
            problem: "A catalogue ordered by coverage type invites the reader to buy the familiar items and stop, because nothing in the list indicates relative severity for <em>their</em> business. The result is systematic and predictable: a two-person consultancy buys general liability, which is genuinely required by its office lease, and does not buy professional liability, which covers the only realistic claim that could destroy it. A general liability policy will not respond to a negligent-advice claim at all \u2014 that is not a gap in the policy, it is the policy working as designed. The catalogue format conceals this because it never asks which single event is fatal.",
            ours: "We start from the fatal exposure rather than the coverage list: name the three worst plausible events and who would sue, then buy against those first. The coverage table is ranked by <em>who needs it first</em>, not alphabetically."
          },
          {
            claim: "Premium is presented as a function of revenue, industry and limits \u2014 so shopping and raising the deductible are the levers.",
            problem: "The dominant variable is the classification code assigned to your operations, and almost no consumer-facing page names it. It is not a rating detail; it determines both price and whether a claim is paid. Two consequences follow that shopping cannot fix. A business placed in the wrong class can pay materially more than an identical competitor and never know, because every quote it receives inherits the same wrong code. And where the described operations do not match what the business actually does \u2014 the consultancy that also installs hardware, the caterer that also serves alcohol \u2014 the claim arising from the undescribed activity is precisely the one the carrier will contest. Comparing prices across three quotes built on the same misdescription tests nothing.",
            ours: "We name the class code as the first thing to verify \u2014 before requesting any quote \u2014 and treat an accurate description of operations as coverage rather than paperwork."
          },
          {
            claim: "Compare policies on the limit: a $1m policy gives you $1m of protection.",
            problem: "The headline limit is frequently the least binding number in the document. Three mechanisms reduce it, and none appears in a comparison table. Sub-limits cap specific perils far below the aggregate \u2014 a $1m cyber policy carrying a $25,000 social-engineering sub-limit is, for the loss a small business is most likely to suffer, a $25,000 policy. Defence costs may sit <em>inside</em> the limit rather than outside it, so a lengthy defence consumes the money meant to pay the claim. And coinsurance on property cover reduces the payout proportionally if the insured value understates replacement cost, which is why an under-insured building does not simply pay out its stated value. A reader comparing two policies on limit and price is comparing the two numbers least likely to determine the outcome.",
            ours: "We compare <em>forms</em>: sub-limits, whether defence erodes the limit, exclusions and coinsurance \u2014 and we say plainly that a lower limit with defence outside it can beat a higher limit with defence inside."
          },
          {
            claim: "Get covered, keep the certificate on file, renew annually.",
            problem: "This treats insurance as a static purchase, and two timing mechanisms turn that assumption into an uninsured loss. Professional liability and cyber are usually written on a <em>claims-made</em> basis: the policy must be in force when the claim is <em>made</em>, not when the work was done. So cancelling, switching carriers carelessly or letting cover lapse retroactively strips protection from years of completed work unless tail cover is purchased \u2014 a founder who closes a consultancy and cancels the policy has quietly uninsured every project they ever delivered. Separately, a certificate of insurance is evidence that cover existed on a date; it confers nothing. Naming a client as an additional insured requires an endorsement, and the contract requiring it is satisfied by the endorsement, not by the certificate that many businesses file and forget.",
            ours: "We distinguish claims-made from occurrence cover and treat the retroactive date as a thing to protect across every switch, and we separate certificates from endorsements \u2014 the document that actually grants the right."
          }
        ],
        only: [
          "A buying sequence driven by the fatal exposure, not a catalogue of coverage types.",
          "Class code named as the variable that decides both price and whether a claim is paid \u2014 verified before shopping.",
          "Three mechanisms that shrink a headline limit: sub-limits, defence inside the limit, and property coinsurance.",
          "Claims-made cover and the retroactive date, including how cancelling uninsures completed work.",
          "Certificate of insurance versus additional-insured endorsement \u2014 which one actually grants the right your contract demands."
        ]
      },
      faq: [
        { q: "Is business insurance legally required?", a: "<p>Workers' compensation is mandated by state law once you have employees (rules and exemptions vary by state, and sole proprietors are often exempt). Commercial auto is required for titled business vehicles. Liability cover is usually required by contract — landlords, clients and licensing boards — rather than by statute.</p>" },
        { q: "Can I just use my homeowner's policy for a home business?", a: "<p>Generally no. Homeowner's policies exclude business pursuits beyond a small property sub-limit. A home business endorsement or a small BOP is the usual fix.</p>" },
        { q: "How much liability limit should I carry?", a: "<p>$1m per occurrence / $2m aggregate is the common contractual floor. Higher limits are usually bought efficiently through an umbrella policy rather than by raising the primary limit.</p>" },
        { q: "Does insurance cover fines and penalties?", a: "<p>Rarely. Civil fines and regulatory penalties are commonly excluded or only covered where insurable by law — a detail worth checking in cyber and employment policies specifically.</p>" }
      ],
      sources: [
        { name: "NAIC — state insurance regulators and consumer tools", url: "https://content.naic.org/", note: "complaint data and licensing checks" },
        { name: "U.S. Small Business Administration — business insurance basics", url: "https://www.sba.gov/business-guide/launch-your-business/get-business-insurance" },
        { name: "State workers' compensation requirement summaries (per-state DOI publications)" }
      ],
      cta: { title: "Do this before your renewal", text: "Work through the industry coverage checklist and note every exposure you cannot point to a policy for. That list is your broker briefing.", btn: "Open the coverage checklist", href: "coverage-checklist" },
      related: ["business-insurance-cost", "general-liability-insurance", "workers-compensation-insurance", "best-small-business-insurance"],
      crossRefs: [{ slug: "clausecraft", page: "client-contract-essentials", label: "The insurance clauses hiding in your client contracts", why: "Contract minimums and indemnity wording decide the limits you must buy." }]
    },

    "general-liability-insurance": {
      title: "General liability insurance: what it covers and what it does not",
      h1: "General liability insurance for small businesses",
      section: "Liability",
      eyebrow: "Coverage explainer",
      dek: "The workhorse policy: third-party injury and property damage, advertising injury, and the exclusions that surprise people.",
      answer: "General liability (CGL) pays when your business causes bodily injury or property damage to a third party, plus personal and advertising injury such as libel or copyright infringement in your ads. It does <strong>not</strong> cover your own property, your employees' injuries, professional mistakes, or damage to the work you performed.",
      disclosure: true,
      body:
        "<h2>The three coverage parts</h2>" +
        "<p>A standard CGL form is built from Coverage A (bodily injury and property damage), Coverage B (personal and advertising injury) and Coverage C (medical payments, a small no-fault goodwill limit). Most disputes happen in Coverage A, over whether an event was an 'occurrence' and whether an exclusion applies.</p>" +
        "<h2>Realistic claim examples</h2>" +
        "<ul><li>A customer trips on your trailing cable at a trade stand and breaks a wrist.</li>" +
        "<li>Your technician knocks over a client's server rack while installing a network switch.</li>" +
        "<li>A competitor sues over copy in your ad campaign that lifted their tagline.</li></ul>" +
        "<h2>What it does not cover — the exclusions that matter</h2>" +
        "<table><thead><tr><th>Excluded</th><th>Where the cover actually lives</th></tr></thead><tbody>" +
        "<tr><td>Injury to your own employees</td><td><a href='workers-compensation-insurance.html'>Workers' compensation</a></td></tr>" +
        "<tr><td>Bad advice, faulty design, missed deadline</td><td><a href='professional-liability-insurance.html'>Professional liability / E&amp;O</a></td></tr>" +
        "<tr><td>Damage to your own premises or stock</td><td>Commercial property / BOP</td></tr>" +
        "<tr><td>Data breach and privacy liability</td><td><a href='cyber-insurance-small-business.html'>Cyber liability</a></td></tr>" +
        "<tr><td>Vehicles you own or operate</td><td><a href='commercial-auto-insurance.html'>Commercial auto</a></td></tr>" +
        "<tr><td>Your defective workmanship itself (the 'your work' exclusion)</td><td>Rectification is your cost; resulting damage may be covered</td></tr>" +
        "</tbody></table>" +
        "<!--AD-->" +
        "<h2>Limits, aggregates and defence costs</h2>" +
        "<p>Two numbers appear on every certificate: per occurrence and aggregate. $1m/$2m means one claim can draw up to $1m, and all claims in the policy year up to $2m. Crucially, ask whether defence costs sit <em>inside</em> or <em>outside</em> the limit. On CGL they are usually outside — a genuine advantage over most claims-made policies, where legal fees erode what is left for settlement.</p>" +
        "<h2>Additional insured endorsements</h2>" +
        "<p>Clients and landlords routinely require additional-insured status. A certificate alone does not deliver it; the carrier must attach the endorsement, and the wording matters — ongoing operations only, or completed operations too. Contractors get caught here constantly.</p>" +
        "<h2>What it typically costs</h2>" +
        "<p>For a low-hazard service business under $500k revenue, a $1m/$2m CGL commonly benchmarks in the low hundreds of dollars per year; trades and anything involving heights, heat or heavy equipment cost multiples of that. See the <a href='business-insurance-cost.html'>cost benchmarks</a> for dated ranges and the assumptions behind them.</p>",
      faq: [
        { q: "Is general liability the same as a BOP?", a: "<p>No. A BOP bundles general liability with commercial property (and usually business interruption). See <a href='bop-vs-general-liability.html'>the comparison</a>.</p>" },
        { q: "Do sole traders with no premises need it?", a: "<p>Often yes — usually because a client contract demands it, and because visiting client sites creates third-party property damage exposure.</p>" },
        { q: "Does it cover damage to a client's property in my care?", a: "<p>Property in your care, custody or control is typically excluded and needs bailee or installation floater cover.</p>" }
      ],
      sources: [
        { name: "ISO CGL standard form structure (Coverage A/B/C) — carrier specimen forms" },
        { name: "State department of insurance consumer guides on commercial liability" }
      ],
      related: ["bop-vs-general-liability", "professional-liability-insurance", "certificate-of-insurance", "business-insurance-cost"],
      cta: { title: "Check your exclusions against your operations", text: "The coverage checklist walks your trade's exposures one by one so you can see which are unpriced.", btn: "Open the checklist", href: "coverage-checklist" }
    },

    "workers-compensation-insurance": {
      title: "Workers' compensation insurance: rules, cost and how to lower it",
      h1: "Workers' compensation insurance for small employers",
      section: "People & vehicles",
      eyebrow: "Coverage explainer",
      dek: "Who must carry it, how the premium formula works, what an experience modifier does to your bill, and the levers that actually reduce it.",
      answer: "Workers' compensation pays employee medical costs and partial lost wages for work-related injury, and shields the employer from most injury lawsuits. It is state-mandated for employers in almost every state, priced as <em>(payroll ÷ 100) × class rate × experience modifier</em>, and the two biggest controllable levers are correct class codes and a documented safety programme.",
      disclosure: true,
      body:
        "<h2>Who has to carry it</h2>" +
        "<p>Requirements are set state by state. The common pattern: mandatory from the first employee, with exemptions for sole proprietors, some partners and certain corporate officers who can elect out. Texas is the well-known outlier where private employers may go without — at the price of losing the exclusive-remedy protection. Misclassifying an employee as a contractor to avoid premium is a well-policed offence with penalties that dwarf the premium saved.</p>" +
        "<h2>How the premium is actually built</h2>" +
        "<p><strong>Manual premium = (annual payroll ÷ 100) × class code rate.</strong> Then multiply by your experience modification factor (EMR), apply schedule credits or debits, and add expense constants. An EMR of 1.00 is average for your class; 0.85 means 15% better than peers, 1.20 means 20% worse — applied to every dollar of premium, every year, for three years of loss history.</p>" +
        "<table><thead><tr><th>Lever</th><th>Effect</th><th>Effort</th></tr></thead><tbody>" +
        "<tr><td>Correct class codes for each role</td><td>Large — clerical and field rates can differ by 10×</td><td>Low: audit your job descriptions</td></tr>" +
        "<tr><td>Return-to-work programme</td><td>Large — shortens indemnity duration, protects EMR</td><td>Medium</td></tr>" +
        "<tr><td>Documented safety programme</td><td>Medium — schedule credits and fewer claims</td><td>Medium</td></tr>" +
        "<tr><td>Prompt claim reporting</td><td>Medium — late reporting inflates claim cost</td><td>Low</td></tr>" +
        "<tr><td>Deductible programme</td><td>Medium, with cash-flow risk</td><td>Low</td></tr>" +
        "</tbody></table>" +
        "<!--AD-->" +
        "<h2>The payroll audit nobody prepares for</h2>" +
        "<p>Workers' comp is an estimated-premium product. At year end the carrier audits actual payroll, uncovered subcontractors and misapplied class codes, then issues an additional premium bill. Two habits prevent nasty surprises: collect certificates of insurance from every subcontractor before they start, and reconcile payroll by class code quarterly rather than annually.</p>" +
        "<h2>Ghost policies and owner-only businesses</h2>" +
        "<p>If you have no employees but a client demands proof of comp, many states allow a minimum-premium 'ghost' policy covering no one but satisfying the contract. It is cheap, and far better than signing a contract you cannot comply with.</p>" +
        "<h2>Employer's liability — the second half of the policy</h2>" +
        "<p>Part One pays statutory benefits. Part Two, employer's liability, responds to injury suits that fall outside the statutory scheme — third-party-over actions, consequential family claims. Standard limits are often $100k/$500k/$100k; contractors are frequently required to carry $1m, and raising it is inexpensive.</p>",
      faq: [
        { q: "Do I need it for 1099 contractors?", a: "<p>Usually not for genuinely independent contractors — but if they lack their own coverage, many states will treat them as your employees at audit and charge you for their pay. Collect certificates.</p>" },
        { q: "What is a good EMR?", a: "<p>Below 1.00 is better than the class average. Many general contractors will not let a subcontractor on site above 1.00 regardless of price.</p>" },
        { q: "Does it cover remote workers at home?", a: "<p>Generally yes if the injury arises out of employment, which is exactly why the boundaries of the working day and workspace are worth documenting in your handbook.</p>" }
      ],
      sources: [
        { name: "U.S. Bureau of Labor Statistics — injury and illness incidence data", url: "https://www.bls.gov/iif/" },
        { name: "State workers' compensation boards / rating bureaus (NCCI and independent bureau states)" },
        { name: "OSHA recordkeeping and safety programme guidance", url: "https://www.osha.gov/safety-management" }
      ],
      related: ["best-workers-comp-providers", "insurance-for-contractors", "business-insurance-cost", "commercial-auto-insurance"],
      cta: { title: "Estimate your comp premium", text: "The calculator applies payroll, class hazard band and experience modifier so you can see which lever moves your bill most.", btn: "Run the numbers", href: "insurance-cost-calculator" }
    },

    "professional-liability-insurance": {
      title: "Professional liability (E&O) insurance: who needs it and what it costs",
      h1: "Professional liability insurance for consultants, agencies and firms",
      section: "Liability",
      eyebrow: "Coverage explainer",
      dek: "Errors and omissions cover explained: claims-made triggers, retroactive dates, tail cover, and what a client contract will demand.",
      answer: "Professional liability (errors &amp; omissions) pays defence costs and damages when a client alleges your advice, design or service caused them financial loss. It is almost always <strong>claims-made</strong>, so the policy must be active when the claim is made and the alleged error must post-date your retroactive date.",
      disclosure: true,
      body:
        "<h2>Who needs it</h2>" +
        "<p>Anyone who is paid for judgement or work product: consultants, marketing and design agencies, IT services, accountants, architects, engineers, recruiters, coaches, healthcare practitioners. If a client can plausibly say 'your work cost me money', general liability will not respond — that is exactly the gap E&amp;O fills.</p>" +
        "<h2>Claims-made mechanics, in plain English</h2>" +
        "<ul>" +
        "<li><strong>Retroactive date.</strong> Work done before this date is not covered. Keep it as early as you can when switching carriers — resetting it silently erases years of protection.</li>" +
        "<li><strong>Extended reporting period (tail).</strong> When you cancel, retire or sell, tail cover lets you report claims arising from past work. Budget 100–200% of annual premium for a multi-year tail.</li>" +
        "<li><strong>Defence inside the limit.</strong> On most E&amp;O forms, legal fees erode the limit. A $1m limit after $300k of defence is a $700k limit.</li>" +
        "<li><strong>Notice of circumstances.</strong> Report a situation that <em>might</em> become a claim during the policy period; it locks in cover even if the claim arrives after renewal.</li>" +
        "</ul>" +
        "<!--AD-->" +
        "<h2>What it typically excludes</h2>" +
        "<p>Deliberate wrongdoing, bodily injury and property damage (that is CGL), guarantees and warranties you gave beyond professional standards, cost overruns and fee disputes, and — importantly for tech firms — often the cyber/privacy exposure unless the form bundles tech E&amp;O with cyber.</p>" +
        "<h2>How much and what limits</h2>" +
        "<p>Client contracts commonly demand $1m/$1m; enterprise and public-sector work often $2m–$5m. Premium scales with fee income, the sector you serve, and contract hygiene. Firms that use written scopes, change orders and limitation-of-liability clauses genuinely price better — and defend better.</p>" +
        "<h2>The contract link</h2>" +
        "<p>Underwriters ask whether you use written contracts with defined deliverables and a liability cap. If your engagements run on email threads, you are paying for that in premium and exposure. Our sister publication ClauseCraft covers the drafting side.</p>",
      faq: [
        { q: "Is E&O the same as professional indemnity?", a: "<p>Yes — 'professional indemnity' is the UK/Australia term for the same cover.</p>" },
        { q: "Do I need it if my contract caps my liability?", a: "<p>A cap limits damages but not the cost of defending a claim, and caps are not always enforceable. Most clients require the insurance anyway.</p>" },
        { q: "What happens if I let it lapse?", a: "<p>Claims made after lapse are not covered, even for work performed while insured, unless you bought tail cover. This is the single most expensive mistake in claims-made lines.</p>" }
      ],
      sources: [
        { name: "Carrier specimen E&O forms (claims-made trigger, retroactive date, ERP provisions)" },
        { name: "State DOI consumer guidance on claims-made policies" }
      ],
      related: ["insurance-for-consultants", "general-liability-insurance", "cyber-insurance-small-business", "business-insurance-cost"],
      crossRefs: [{ slug: "clausecraft", page: "client-contract-essentials", label: "Limitation of liability clauses that underwriters like", why: "Better contracts reduce both premium and the chance of a claim sticking." }]
    },

    "cyber-insurance-small-business": {
      title: "Cyber insurance for small business: cover, controls and cost",
      h1: "Cyber insurance for small businesses",
      section: "Cyber",
      eyebrow: "Coverage explainer",
      dek: "First-party breach response versus third-party liability, the security controls underwriters now demand, and the sub-limits that quietly gut a policy.",
      answer: "Cyber insurance covers your own breach costs (forensics, notification, restoration, extortion, business interruption) and your liability to others. Since 2021 most carriers will not quote at all without <strong>MFA, tested backups, endpoint detection and email filtering</strong>, and the sub-limits — especially for social engineering — matter more than the headline limit.",
      disclosure: true,
      body:
        "<h2>The two halves of a cyber policy</h2>" +
        "<table><thead><tr><th>First-party (your costs)</th><th>Third-party (liability)</th></tr></thead><tbody>" +
        "<tr><td>Incident response and digital forensics</td><td>Privacy liability to affected individuals</td></tr>" +
        "<tr><td>Legal notification and credit monitoring</td><td>Regulatory defence and, where insurable, fines</td></tr>" +
        "<tr><td>Data restoration and system rebuild</td><td>PCI assessments and card-brand penalties</td></tr>" +
        "<tr><td>Cyber extortion / ransomware payments</td><td>Media liability from your digital content</td></tr>" +
        "<tr><td>Business interruption and dependent BI</td><td>Network security liability (you spread malware)</td></tr>" +
        "</tbody></table>" +
        "<h2>The controls questionnaire is now the product</h2>" +
        "<p>Underwriting has hardened. Expect to attest to multi-factor authentication on email, remote access and privileged accounts; offline or immutable backups tested by restore, not by 'the job ran'; endpoint detection and response; email filtering; a patch cadence; and security awareness training. Attesting inaccurately is not a paperwork slip — it is a rescission risk.</p>" +
        "<!--AD-->" +
        "<h2>Sub-limits: where policies quietly fail</h2>" +
        "<p>Read these four numbers before the premium: social engineering / funds transfer fraud (often $25k–$250k against a $1m policy), ransomware co-insurance (you may bear 20–50%), business interruption waiting period (8–12 hours is typical), and dependent business interruption for your SaaS vendors. The most common small-business cyber loss — an invoice diverted by a convincing email — sits under the smallest of those limits.</p>" +
        "<h2>What it costs</h2>" +
        "<p>Micro-businesses with clean controls frequently benchmark in the high hundreds to low thousands of dollars for $1m; firms holding health or payment data, or without MFA, pay materially more or get declined. Improving controls is usually a bigger lever on price than shopping carriers.</p>" +
        "<h2>Do the controls first</h2>" +
        "<p>Every control on the questionnaire also reduces the chance of the incident. That is the rare case where the insurer's interest and yours align exactly.</p>",
      faq: [
        { q: "Does general liability cover a data breach?", a: "<p>No. Modern CGL forms carry an explicit electronic-data and access-or-disclosure exclusion.</p>" },
        { q: "Will insurance pay a ransom?", a: "<p>Many policies will, subject to co-insurance, sanctions screening and carrier approval. Payment is never automatic and never the first option.</p>" },
        { q: "We use Microsoft 365 — are we covered by them?", a: "<p>No. Cloud providers cover their infrastructure, not your data, your configuration errors, or your notification costs.</p>" }
      ],
      sources: [
        { name: "CISA — Cyber Essentials for small organisations", url: "https://www.cisa.gov/cyber-essentials" },
        { name: "NIST Cybersecurity Framework 2.0", url: "https://www.nist.gov/cyberframework" },
        { name: "FBI IC3 annual report — business email compromise loss data", url: "https://www.ic3.gov/" }
      ],
      related: ["best-cyber-insurance", "professional-liability-insurance", "ecommerce-product-liability"],
      crossRefs: [{ slug: "hardenhq", page: "security-baseline-smb", label: "The security baseline insurers now require", why: "Implement the controls before the questionnaire, not after the declination." }],
      cta: { title: "Before you request a quote", text: "Run the control questions in our checklist so you answer the underwriting questionnaire accurately — inaccurate answers can void the policy.", btn: "Open the checklist", href: "coverage-checklist" }
    },

    "business-insurance-cost": {
      title: "How much does small business insurance cost in 2026?",
      h1: "Small business insurance costs: benchmarks by coverage and industry",
      section: "Cost & buying",
      eyebrow: "Cost benchmark",
      dek: "Indicative annual premium ranges by line and trade, the assumptions behind them, and the seven variables that move your number.",
      answer: "For a low-hazard service business under $500k revenue, a realistic 2026 annual programme is roughly <strong>$400–$900 for a BOP</strong>, <strong>$600–$2,500 for professional liability</strong>, and <strong>$700–$2,000 for $1m of cyber</strong>. Workers' compensation is payroll-driven and dominates the bill for trades. All figures are benchmarks, not quotes.",
      disclosure: true,
      body:
        "<h2>Read the assumptions before the numbers</h2>" +
        "<p>Every range below assumes: US-domiciled, $1m/$2m liability limits, $1,000 deductible, no losses in five years, accurate class codes, and 2026 market conditions. Change any of those and the range moves. Anyone quoting a single national 'average premium' without stating these is selling something.</p>" +
        "<h2>Benchmark ranges by line</h2>" +
        "<table><thead><tr><th>Coverage</th><th>Micro (&lt;$250k rev)</th><th>Small ($250k–$1m)</th><th>Main driver</th></tr></thead><tbody>" +
        "<tr><td>General liability</td><td>$350–$700</td><td>$600–$1,600</td><td>Class code, revenue</td></tr>" +
        "<tr><td>BOP (GL + property)</td><td>$450–$900</td><td>$800–$2,400</td><td>Property values</td></tr>" +
        "<tr><td>Professional liability</td><td>$600–$1,400</td><td>$1,200–$3,500</td><td>Sector, fee income</td></tr>" +
        "<tr><td>Cyber ($1m)</td><td>$700–$1,500</td><td>$1,200–$3,000</td><td>Records held, controls</td></tr>" +
        "<tr><td>Workers' comp</td><td colspan='2'>Payroll ÷ 100 × class rate × EMR</td><td>Class hazard, payroll</td></tr>" +
        "<tr><td>Commercial auto</td><td>$1,200–$2,200/vehicle</td><td>$1,500–$3,000/vehicle</td><td>Radius, driver records</td></tr>" +
        "</tbody></table>" +
        "<p style='font-size:.85rem;color:#47525f'>Indicative benchmark ranges compiled from published carrier pricing pages and broker interviews, July 2026. Treat as a sanity check on a quote, not a target.</p>" +
        "<!--AD-->" +
        "<h2>The seven variables that move your number</h2>" +
        "<ol><li>Class code and described operations.</li><li>Revenue and payroll.</li><li>Limits, deductible and defence-cost treatment.</li>" +
        "<li>Loss history across five years, including open reserves.</li><li>State and, for property, catastrophe zone.</li>" +
        "<li>Documented controls: safety programme, MFA, contracts.</li><li>Distribution channel — direct digital, independent agent, association programme.</li></ol>" +
        "<h2>Where owners overpay</h2>" +
        "<ul><li>Buying separate GL and property instead of a BOP.</li>" +
        "<li>Carrying a $500 deductible on property when $2,500 costs materially less and is affordable.</li>" +
        "<li>Never re-marketing: three consecutive auto-renewals is how a 6% annual creep compounds.</li>" +
        "<li>Paying monthly with financing charges that are effectively double-digit APR.</li>" +
        "<li>Insuring low-severity risks (small equipment) rather than catastrophic ones.</li></ul>" +
        "<h2>Where owners underpay and regret it</h2>" +
        "<p>Cheap cyber with a $25k social-engineering sub-limit. Minimum employer's liability limits when the general contractor's contract requires $1m. Skipping tail cover on E&amp;O when closing a consultancy. In each case the saving is a few hundred dollars and the exposure is six figures.</p>",
      faq: [
        { q: "Why is my quote so different from these ranges?", a: "<p>Most often class code, loss history, or limits that differ from the assumptions above. Ask the underwriter which rating factor drove it — a good agent will tell you.</p>" },
        { q: "Is monthly payment worth it?", a: "<p>Compare the total financed cost with the annual premium. Premium finance is commonly the most expensive money a small business borrows.</p>" },
        { q: "Do claims always raise premium?", a: "<p>Not always for liability, but frequency matters more than severity — three small claims usually hurt more than one moderate one.</p>" }
      ],
      edge: {
        intro: "Small business insurance cost pages are almost all published by agencies and quote-comparison sites, and they share one structural habit: they quote a single national average premium. That number is not merely imprecise — it is built by averaging across the variable that dominates pricing, which makes it unusable as a benchmark.",
        gaps: [
          {
            claim: "\"Small business insurance costs about $X a month on average.\"",
            problem: "General liability is rated primarily on <em>class code</em> — the underwriter's classification of what you actually do. A copywriter and a roofer are both small businesses, and their liability rates differ by an order of magnitude. An average across class codes describes no real business, and it anchors readers to a figure that will be wrong in a predictable direction: too low for trades, too high for desk-based services.",
            ours: "We publish benchmark ranges by coverage line and revenue band, with the rating assumptions stated on the table — class code, limits, deductible, loss history, year — so a reader can sanity-check a quote instead of comparing it to a national mean."
          },
          {
            claim: "Workers' compensation is quoted as a dollar range like the other lines.",
            problem: "It is not priced that way. Workers' comp premium is payroll ÷ 100 × class rate × experience modifier, so it scales with payroll and hazard rather than sitting in a band. For a trades business it usually dominates the entire insurance bill. Presenting it as \"$500–$3,000\" alongside general liability hides the formula that actually determines it, and hides the two levers — class code accuracy and the experience modifier — that a business can genuinely act on.",
            ours: "We give the formula rather than a fake range, and name the experience modifier and class-code audit as the levers that move it."
          },
          {
            claim: "Cheaper quotes are presented as better value.",
            problem: "Below-market cyber and liability pricing is usually achieved through structure, not efficiency: social-engineering cover capped at $25,000, ransomware co-insurance at 50%, a 12-hour business-interruption waiting period, or no dependent business interruption at all. The premium is genuinely lower and the cover is genuinely narrower, but comparison tables rank on premium alone — so the worst policy sorts to the top.",
            ours: "We tell readers to compare structure before premium, and we name the specific sub-limits that make a cheap quote cheap."
          },
          {
            claim: "\"Get quotes to save money\" is the primary cost-reduction advice.",
            problem: "Shopping helps at the margin, but documented controls and deductible structure move price more. Meanwhile the largest avoidable cost on most small policies is invisible: premium finance. Paying monthly commonly carries an effective double-digit APR, and three consecutive auto-renewals without re-marketing lets a several-percent annual creep compound. None of this appears on pages paid per quote request.",
            ours: "We list where owners overpay and where they underpay, including premium finance APR and the auto-renewal creep — and we say plainly that controls move price more than shopping does."
          }
        ],
        only: [
          "Benchmark ranges by coverage line and revenue band, with every rating assumption stated.",
          "Workers' comp given as its actual formula rather than a fabricated dollar range.",
          "The seven rating variables named individually, including experience modifier and distribution channel.",
          "A where-owners-overpay list covering premium finance APR and auto-renewal creep.",
          "A where-owners-underpay list, naming the sub-limits that turn a saving into a six-figure exposure."
        ]
      },
      sources: [
        { name: "Carrier published pricing pages, collected July 2026 (dated screenshots on file)" },
        { name: "NCCI class-code and rate publications (bureau states)", url: "https://www.ncci.com/", note: "Class codes and rates underlying workers' comp pricing" },
        { name: "Independent broker interviews, June–July 2026" },
        { name: "NAIC — consumer insurance information", url: "https://content.naic.org/consumer.htm", note: "State regulator guidance on policy comparison" }
      ],
      related: ["insurance-cost-calculator", "business-insurance-guide", "best-small-business-insurance", "bop-vs-general-liability"],
      cta: { title: "Model your own number", text: "The calculator applies these benchmark ranges to your industry, revenue, payroll and limits.", btn: "Open the calculator", href: "insurance-cost-calculator" }
    },

    "bop-vs-general-liability": {
      title: "BOP vs general liability: which one do you need?",
      h1: "BOP vs general liability insurance",
      section: "Liability",
      eyebrow: "Comparison",
      dek: "A business owner's policy bundles liability and property. Here is when the bundle wins, when it does not, and what it still leaves uncovered.",
      answer: "Buy a <strong>BOP</strong> if you own property, stock or equipment worth insuring — it bundles general liability with property and business interruption for less than the parts. Buy <strong>standalone general liability</strong> if you have no meaningful property and only need third-party liability, or if your operations are too hazardous for BOP eligibility.",
      body:
        "<h2>Side by side</h2>" +
        "<table><thead><tr><th>&nbsp;</th><th>General liability</th><th>BOP</th></tr></thead><tbody>" +
        "<tr><td>Third-party injury / property damage</td><td>Yes</td><td>Yes</td></tr>" +
        "<tr><td>Your building, stock, equipment</td><td>No</td><td>Yes</td></tr>" +
        "<tr><td>Business interruption</td><td>No</td><td>Usually included</td></tr>" +
        "<tr><td>Typical eligibility</td><td>Almost any class</td><td>Low-to-medium hazard, revenue and square-footage caps</td></tr>" +
        "<tr><td>Relative cost</td><td>Lower absolute, narrower</td><td>Higher absolute, better value per unit of cover</td></tr>" +
        "</tbody></table>" +
        "<h2>Who should take the BOP</h2>" +
        "<p>Retailers, restaurants (where eligible), clinics, salons, small offices with equipment, and anyone whose revenue stops if the premises close. Business interruption is the underrated component: it replaces income while you rebuild, and it is the part owners are gladdest to have.</p>" +
        "<!--AD-->" +
        "<h2>Who should stay with standalone GL</h2>" +
        "<p>Home-based consultants with a laptop, mobile trades whose tools are covered under an inland marine floater, and businesses whose hazard class falls outside BOP appetite. Adding a poorly-fitting property section to satisfy a bundle discount is not a saving.</p>" +
        "<h2>What neither covers</h2>" +
        "<p>Employee injury (<a href='workers-compensation-insurance.html'>workers' comp</a>), professional mistakes (<a href='professional-liability-insurance.html'>E&amp;O</a>), data breach (<a href='cyber-insurance-small-business.html'>cyber</a>), vehicles (<a href='commercial-auto-insurance.html'>commercial auto</a>), and employment practices claims. A BOP is a foundation, not a programme.</p>" +
        "<h2>Endorsements worth asking for</h2>" +
        "<ul><li>Equipment breakdown — cheap and often the actual cause of loss.</li>" +
        "<li>Utility interruption, if your income depends on power or connectivity.</li>" +
        "<li>Spoilage, for anything refrigerated.</li>" +
        "<li>Hired and non-owned auto, if staff run errands in their own cars.</li></ul>",
      faq: [
        { q: "Is a BOP always cheaper than buying separately?", a: "<p>Usually, for eligible classes — that is the point of the package. But compare the property limits, not just the premium.</p>" },
        { q: "Can I add cyber to a BOP?", a: "<p>Often yes, as an endorsement — but endorsement limits are small. For real exposure, buy a standalone cyber policy.</p>" },
        { q: "Do I lose the BOP if I grow?", a: "<p>You may exceed eligibility thresholds, at which point the next step is a commercial package policy.</p>" }
      ],
      related: ["general-liability-insurance", "business-insurance-cost", "business-insurance-guide"]
    },

    "certificate-of-insurance": {
      title: "Certificate of insurance (COI): what it proves and what it doesn't",
      h1: "Certificates of insurance, additional insureds and waivers explained",
      section: "Cost & buying",
      eyebrow: "Admin guide",
      dek: "How to read an ACORD certificate, why it grants no rights, and the three endorsements clients are really asking for.",
      answer: "A certificate of insurance is an <strong>informational snapshot</strong> that a policy existed on a date. It confers no coverage and no rights. If a client needs to be protected under your policy, they need an <strong>additional insured endorsement</strong>; if they want your insurer not to pursue them, they need a <strong>waiver of subrogation</strong>.",
      body:
        "<h2>Reading an ACORD 25 in sixty seconds</h2>" +
        "<ol><li><strong>Producer</strong> — the agency issuing it. <strong>Insured</strong> — must exactly match the contracting entity name.</li>" +
        "<li><strong>Insurer(s) affording coverage</strong> — check the AM Best rating separately.</li>" +
        "<li><strong>Coverage rows</strong> — GL, auto, umbrella, workers' comp, each with policy number, effective and expiry dates.</li>" +
        "<li><strong>Occurrence vs claims-made</strong> boxes on the GL row, plus the aggregate-applies-per-project box.</li>" +
        "<li><strong>Description of operations</strong> — where additional insured and waiver language is typed. Typed text is not an endorsement.</li>" +
        "<li><strong>Certificate holder</strong> — who is being informed.</li></ol>" +
        "<h2>The three things clients actually want</h2>" +
        "<table><thead><tr><th>Request</th><th>What it does</th><th>Cost impact</th></tr></thead><tbody>" +
        "<tr><td>Additional insured</td><td>Extends your liability cover to them for claims arising from your work</td><td>Small fee or free; blanket endorsements exist</td></tr>" +
        "<tr><td>Waiver of subrogation</td><td>Stops your insurer recovering from them after paying a claim</td><td>Often a percentage load on workers' comp</td></tr>" +
        "<tr><td>Primary &amp; non-contributory</td><td>Your policy pays first, before theirs</td><td>Endorsement, usually modest</td></tr>" +
        "</tbody></table>" +
        "<!--AD-->" +
        "<h2>Common failures</h2>" +
        "<ul><li>Entity name mismatch between the contract and the certificate — the fastest way to have a claim contested.</li>" +
        "<li>Assuming '30 days notice of cancellation' on the certificate binds the insurer. Modern forms disclaim it.</li>" +
        "<li>Requesting completed-operations additional insured status only after the project ends.</li>" +
        "<li>Collecting certificates from subcontractors once, then never re-collecting at renewal — this is what turns into a workers' comp audit bill.</li></ul>" +
        "<h2>Run it as a process</h2>" +
        "<p>Keep a subcontractor register with policy expiry dates and an automatic 30-day reminder. It takes an afternoon to build and it removes the two most expensive administrative failures in small contracting.</p>",
      faq: [
        { q: "How fast should my agent issue a COI?", a: "<p>Same day for a standard request is the reasonable expectation; blanket additional-insured endorsements make it instant.</p>" },
        { q: "Can I edit a certificate myself?", a: "<p>No. Altering a certificate is fraud. Ask the producer to reissue.</p>" },
        { q: "Does a COI prove the policy is still active?", a: "<p>Only on its issue date. Always check the expiry dates and re-collect at renewal.</p>" }
      ],
      related: ["general-liability-insurance", "insurance-for-contractors", "workers-compensation-insurance"]
    },

    "commercial-auto-insurance": {
      title: "Commercial auto insurance: when personal cover stops working",
      h1: "Commercial auto insurance for small businesses",
      section: "People & vehicles",
      eyebrow: "Coverage explainer",
      dek: "Titled vehicles, hired and non-owned exposure, delivery use, and the gap that catches every business whose staff drive their own cars.",
      answer: "You need commercial auto when a vehicle is titled to the business, used primarily for business, or carries tools, goods or passengers for hire. When employees drive <em>their own</em> cars for work, the exposure sits with you and is covered by <strong>hired and non-owned auto (HNOA)</strong> — an inexpensive endorsement most small businesses lack.",
      body:
        "<h2>When personal auto quietly stops responding</h2>" +
        "<p>Personal policies exclude business use beyond commuting. Deliveries, client transport, hauling equipment and any vehicle titled to the LLC fall outside. Insurers do investigate use after a serious loss, and a denial on a bodily-injury claim is an existential event for a small business.</p>" +
        "<h2>The coverage parts</h2>" +
        "<ul><li><strong>Liability</strong> — injury and damage you cause; the number contracts specify (often $1m combined single limit).</li>" +
        "<li><strong>Physical damage</strong> — collision and comprehensive on your own vehicles.</li>" +
        "<li><strong>Uninsured/underinsured motorist</strong> — frequently the most valuable part in states with low compulsory limits.</li>" +
        "<li><strong>Medical payments / PIP</strong> — depends on state.</li>" +
        "<li><strong>HNOA</strong> — vicarious liability when staff use their own or rented vehicles for work.</li></ul>" +
        "<!--AD-->" +
        "<h2>What drives the price</h2>" +
        "<p>Vehicle type and value, radius of operation, cargo, garaging state, and — above all — driver MVRs. A single at-fault accident or serious violation on a two-driver fleet visibly changes the premium. Pull motor vehicle records before hiring anyone who will drive, and re-pull annually.</p>" +
        "<h2>Practical controls that cut the bill</h2>" +
        "<ul><li>Written driver eligibility standard, applied at hiring.</li><li>Telematics, where the discount outweighs the fuss.</li>" +
        "<li>Dashcams — mainly a claims-defence tool, occasionally a discount.</li><li>Higher physical-damage deductibles on older vehicles.</li></ul>",
      faq: [
        { q: "Is my delivery driver covered on personal insurance?", a: "<p>Almost certainly not — most personal policies contain a delivery/livery exclusion.</p>" },
        { q: "Do I need HNOA if nobody drives for work?", a: "<p>If an employee ever collects supplies or drives to a client, yes. It is one of the cheapest gaps to close.</p>" },
        { q: "Does commercial auto cover tools in the van?", a: "<p>Not usually — tools and stock need inland marine or a contractor's equipment floater.</p>" }
      ],
      sources: [{ name: "State compulsory auto liability limit tables (per-state DOI)" }],
      related: ["insurance-for-contractors", "workers-compensation-insurance", "business-insurance-cost"]
    },

    "insurance-for-consultants": {
      title: "Insurance for consultants and freelancers: the minimum viable programme",
      h1: "Insurance for consultants, freelancers and solo agencies",
      section: "By industry",
      eyebrow: "Industry guide",
      dek: "What a one-person knowledge business genuinely needs, what clients will demand in writing, and what you can safely skip.",
      answer: "A solo consultant's minimum viable programme is <strong>professional liability</strong> (the exposure that can actually bankrupt you), <strong>general liability</strong> (because clients contractually demand it), and <strong>cyber</strong> if you hold client data. Property is usually a laptop floater; workers' comp is unnecessary until you hire.",
      disclosure: true,
      body:
        "<h2>The four-question triage</h2>" +
        "<ol><li>Could a client claim my work cost them money? → professional liability.</li>" +
        "<li>Do I visit client sites or host anyone? → general liability.</li>" +
        "<li>Do I hold client data, credentials or personal information? → cyber.</li>" +
        "<li>Do I have employees, or subcontractors states may reclassify? → workers' compensation.</li></ol>" +
        "<h2>What clients put in contracts</h2>" +
        "<p>Enterprise procurement templates typically require $1m/$2m general liability, $1m professional liability, $1m cyber, workers' comp at statutory limits with $1m employer's liability, additional insured status on the GL, and a waiver of subrogation. Read this <em>before</em> pricing the engagement — the insurance requirement can cost more than your margin on a small project.</p>" +
        "<!--AD-->" +
        "<h2>What you can skip early</h2>" +
        "<ul><li>Commercial property, if your equipment is worth less than the deductible plus premium.</li>" +
        "<li>Employment practices liability, until you have employees.</li>" +
        "<li>Directors and officers, unless you have outside investors or a board.</li></ul>" +
        "<h2>Structure beats cover</h2>" +
        "<p>Three habits reduce claims more than any endorsement: a written scope with acceptance criteria, a limitation-of-liability clause capped at fees paid, and change orders for scope creep. Underwriters ask about all three, and so will your defence lawyer.</p>" +
        "<h2>Cost expectation</h2>" +
        "<p>A solo management consultant billing under $200k commonly benchmarks around $600–$1,400 for E&amp;O plus $350–$700 for GL — see the <a href='business-insurance-cost.html'>cost benchmarks</a> for the full assumption set.</p>",
      faq: [
        { q: "Do I need insurance as a sole proprietor?", a: "<p>Legally, rarely. Contractually, almost always — and your personal assets are exposed without a liability shield.</p>" },
        { q: "Does an LLC remove the need for E&O?", a: "<p>No. An LLC can protect personal assets from business debts, but you remain personally exposed for your own professional negligence in many circumstances.</p>" },
        { q: "Can I buy cover for a single project?", a: "<p>Some markets offer project or short-term policies, but annual claims-made cover with a preserved retroactive date is usually the better structure.</p>" }
      ],
      related: ["professional-liability-insurance", "general-liability-insurance", "business-insurance-cost"],
      crossRefs: [{ slug: "ledgerlift", page: "business-bank-account-guide", label: "Separating business and personal money properly", why: "Entity separation only holds up if the finances are separated too." }]
    },

    "insurance-for-contractors": {
      title: "Insurance for contractors and trades: the certificate-driven checklist",
      h1: "Insurance for contractors and skilled trades",
      section: "By industry",
      eyebrow: "Industry guide",
      dek: "General contractor requirements, subcontractor certificates, tools cover, and the audit exposure that catches growing trades.",
      answer: "Trades typically need general liability with completed-operations cover, workers' compensation, commercial auto, a tools/equipment floater, and — on larger jobs — an umbrella plus additional insured, primary &amp; non-contributory and waiver of subrogation endorsements. The biggest hidden cost is the year-end audit for uninsured subcontractors.",
      body:
        "<h2>What the general contractor's contract will demand</h2>" +
        "<table><thead><tr><th>Requirement</th><th>Typical limit</th><th>Why</th></tr></thead><tbody>" +
        "<tr><td>Commercial general liability</td><td>$1m/$2m, products-completed ops $2m</td><td>Defects appearing after handover</td></tr>" +
        "<tr><td>Workers' compensation</td><td>Statutory + $1m employer's liability</td><td>Third-party-over actions</td></tr>" +
        "<tr><td>Commercial auto</td><td>$1m CSL</td><td>Site access and hauling</td></tr>" +
        "<tr><td>Umbrella</td><td>$1m–$5m</td><td>Scales with contract value</td></tr>" +
        "<tr><td>Endorsements</td><td>AI, P&amp;NC, waiver of subro</td><td>Risk transfer down the chain</td></tr>" +
        "</tbody></table>" +
        "<!--AD-->" +
        "<h2>The subcontractor audit trap</h2>" +
        "<p>If you cannot produce a valid certificate for a subcontractor at audit, the carrier will treat their pay as your payroll and charge premium accordingly — at your class rate. On a busy year this routinely produces five-figure audit bills. Fix it with a rule: no certificate, no site access, no payment.</p>" +
        "<h2>Tools and equipment</h2>" +
        "<p>Neither general liability nor commercial auto covers your tools. An inland marine contractor's equipment floater does, including theft from a locked vehicle — the single most common trades claim. Schedule anything over the per-item limit.</p>" +
        "<h2>Completed operations</h2>" +
        "<p>Defect claims arrive years after the job. Keep occurrence-based GL in force continuously and retain project records; a gap in cover between projects is a gap in defence for work already delivered.</p>" +
        "<h2>Reducing the workers' comp bill</h2>" +
        "<p>Split payroll correctly between field and clerical codes, run a return-to-work programme, and report injuries the same day. Those three consistently outperform shopping the market on price. See <a href='workers-compensation-insurance.html'>the workers' comp guide</a> for the formula.</p>",
      faq: [
        { q: "Do I need a licence bond as well?", a: "<p>Often yes — bonds guarantee performance or licensing obligations and are not insurance. Requirements are state and trade specific.</p>" },
        { q: "Is my truck covered for personal use?", a: "<p>A commercial auto policy can be endorsed for personal use of a business vehicle; do not assume it.</p>" },
        { q: "What limit does residential remodelling need?", a: "<p>$1m/$2m is the common floor; some states and larger builders require higher completed-operations aggregates.</p>" }
      ],
      related: ["commercial-auto-insurance", "certificate-of-insurance", "workers-compensation-insurance", "coverage-checklist"]
    },

    "ecommerce-product-liability": {
      title: "Product liability for ecommerce sellers: who is liable for what",
      h1: "Product liability insurance for ecommerce and DTC brands",
      section: "By industry",
      eyebrow: "Industry guide",
      dek: "Marketplace insurance requirements, vendor indemnity that does not hold, imported-goods exposure, and recall cover.",
      answer: "If you put your brand on a product, you are treated as the manufacturer for liability purposes — even if a third party made it. Marketplaces commonly require <strong>$1m per occurrence</strong> of commercial general liability including products-completed operations once you cross a sales threshold, and supplier indemnity is only as good as the supplier's jurisdiction and balance sheet.",
      disclosure: true,
      body:
        "<h2>Where liability actually lands</h2>" +
        "<p>Strict product liability attaches along the distribution chain: manufacturer, distributor and seller can all be named. Private-label and white-label sellers get the manufacturer's exposure with none of the manufacturer's testing infrastructure. An overseas supplier's indemnity clause is frequently unenforceable in practice.</p>" +
        "<h2>Marketplace requirements</h2>" +
        "<p>Major marketplaces require sellers above a monthly revenue threshold to carry commercial liability naming the marketplace as an additional insured, with prescribed limits and notice provisions. Budget for it before you hit the threshold; scrambling for cover mid-quarter risks a listing suspension.</p>" +
        "<!--AD-->" +
        "<h2>What to check in the policy</h2>" +
        "<ul><li>Products-completed operations included, not excluded.</li>" +
        "<li>Territory and jurisdiction — worldwide territory but US jurisdiction is the useful combination for DTC.</li>" +
        "<li>Failure-to-warn and labelling coverage.</li>" +
        "<li>Recall expense — usually excluded from GL and needing a separate product recall policy.</li>" +
        "<li>Ingestible/topical exclusions for supplements, cosmetics and food.</li></ul>" +
        "<h2>Risk controls that underwriters reward</h2>" +
        "<p>Supplier quality agreements, batch traceability, third-party testing certificates, documented complaint handling, and a written recall plan. These also decide whether a recall costs thousands or ends the brand.</p>" +
        "<h2>Do not forget the data side</h2>" +
        "<p>Ecommerce holds payment and customer data, which is a <a href='cyber-insurance-small-business.html'>cyber exposure</a>, and runs on ad copy, which is a personal-and-advertising-injury exposure under <a href='general-liability-insurance.html'>general liability</a>.</p>",
      faq: [
        { q: "Does dropshipping avoid product liability?", a: "<p>No. If you are the seller of record and your brand appears, you can be named.</p>" },
        { q: "Is recall covered by general liability?", a: "<p>Generally not. GL responds to injury or damage caused by the product, not the cost of withdrawing it.</p>" },
        { q: "Do I need cover for sales into the EU or UK?", a: "<p>Yes, and check the territory clause — consumer product regimes there also require a responsible person in-region.</p>" }
      ],
      sources: [{ name: "U.S. Consumer Product Safety Commission — business guidance", url: "https://www.cpsc.gov/Business--Manufacturing" }],
      related: ["general-liability-insurance", "cyber-insurance-small-business", "best-small-business-insurance"]
    },

    "best-small-business-insurance": {
      title: "Best small business insurance companies (2026 comparison)",
      h1: "Best small business insurance providers, by use case",
      section: "Comparisons",
      eyebrow: "Comparison · scored rubric",
      dek: "How the main routes to small commercial cover compare on form quality, price transparency, claims service and speed — scored against our published rubric.",
      updated: "18 July 2026",
      disclosure: true,
      schema: "Article",
      answer: "There is no universal best. Digital-first carriers win on speed and price transparency for low-hazard classes; traditional carriers via an independent agent win on form breadth, hazardous classes and claims advocacy; association and industry programmes often win on price for a narrow trade. Score the <em>form</em>, then the price.",
      table: {
        caption: "Routes to cover, scored against the ShieldWise rubric (see methodology). Scores describe channel characteristics, not individual carrier ratings.",
        headers: ["Route", "Best for", "Coverage substance", "Price transparency", "Claims advocacy", "Speed to bind"],
        rows: [
          { best: true, cells: ["<strong>Digital-first carrier</strong>", "Low-hazard service firms, sub-$1m revenue", "Good — standard forms, fewer endorsements", "Excellent — price online", "Fair — call centre model", "Minutes"] },
          { cells: ["<strong>Independent agent / broker</strong>", "Trades, complex or hazardous classes", "Excellent — market access, tailored endorsements", "Fair — quote required", "Excellent — advocate on your side", "Days"] },
          { cells: ["<strong>Association or franchise programme</strong>", "A single well-defined trade", "Good — purpose-built wordings", "Good", "Good", "Days"] },
          { cells: ["<strong>Payroll/PEO bundle</strong>", "Employers wanting comp with payroll", "Fair — comp-focused, thin elsewhere", "Good", "Fair", "Days"] },
          { cells: ["<strong>Marketplace aggregator</strong>", "Comparing several carriers quickly", "Varies by carrier presented", "Good", "Varies", "Hours"] }
        ],
        note: "Channel-level assessment updated July 2026. We deliberately do not publish a single ranked list of carriers whose forms we have not read in your state — see the <a href='review-methodology.html'>methodology</a>."
      },
      body:
        "<h2>How to choose between the routes</h2>" +
        "<p>Ask one question first: is my class of business easy or hard to place? A bookkeeper, designer or consultant is easy — digital carriers will quote instantly and cheaply, and the standard form is adequate. A roofer, a staffing agency, a supplement brand or anyone with prior losses is hard, and the value of an independent agent with market access exceeds any price difference.</p>" +
        "<h2>The five checks before you buy anywhere</h2>" +
        "<ol><li>Specimen policy form available before purchase.</li>" +
        "<li>Defence costs inside or outside the limit — stated in writing.</li>" +
        "<li>Sub-limits listed, especially cyber social engineering and property categories.</li>" +
        "<li>Carrier financial strength rating and its date.</li>" +
        "<li>Certificate and endorsement turnaround, and whether blanket AI is available.</li></ol>" +
        "<!--AD-->" +
        "<h2>Best for common situations</h2>" +
        "<ul>" +
        "<li><strong>Solo consultant needing a certificate today:</strong> digital carrier, $1m/$2m GL plus E&amp;O.</li>" +
        "<li><strong>Trades subcontracting to a general contractor:</strong> independent agent — you need specific endorsements, not a fast quote.</li>" +
        "<li><strong>Restaurant or retail with stock:</strong> BOP through an agent who can compare property forms.</li>" +
        "<li><strong>Tech/SaaS company:</strong> combined tech E&amp;O and cyber form from a specialist market.</li>" +
        "<li><strong>Employer with 5–50 staff:</strong> comp through a specialist, with a return-to-work programme in place before the quote.</li>" +
        "</ul>" +
        "<h2>What we will not do</h2>" +
        "<p>We will not publish a numbered ranking of named carriers implying we have tested claim outcomes we cannot observe. Where we score named carriers, it is on published, verifiable criteria — forms, ratings, complaint indices — and we say which criteria we could not test.</p>",
      leadForm: {
        title: "Compare quotes for your business",
        sub: "Tell us the shape of the risk. We route the request to a licensed broker in your state — nothing is shared until you confirm.",
        offer: "smb-insurance-quote",
        numberLabel: "Number of employees",
        consent: "I consent to a licensed broker contacting me about this request. I understand ShieldWise may be paid a referral fee.",
        cta: "Request a comparison",
        steps: ["We log the request and confirm your class of business.", "You get an email naming the broker before any handover.", "The broker quotes at least three markets.", "You receive our renewal calendar regardless of whether you buy."],
        privacy: "We store name, email, company, headcount and your notes. We do not sell data, and you can request deletion at any time."
      },
      faq: [
        { q: "Are digital carriers less reliable at claims?", a: "<p>Not inherently. Check state complaint indices and financial strength rather than brand impressions; the meaningful difference is having an advocate when a claim is disputed.</p>" },
        { q: "Should I bundle everything with one carrier?", a: "<p>Bundling simplifies renewals and can earn discounts, but never bundle a line whose form is materially worse just to consolidate.</p>" },
        { q: "How often should I re-market?", a: "<p>Every two years, or immediately after a material change in operations, revenue or loss history.</p>" }
      ],
      methodology: "<p>Routes were assessed against the six weighted criteria in our <a href='review-methodology.html'>review methodology</a>, using specimen forms, published pricing paths, NAIC complaint indices and interviews with independent brokers between May and July 2026. Channel scores describe the typical experience in that channel and are not a substitute for evaluating a specific carrier's form in your state.</p>",
      related: ["business-insurance-cost", "best-workers-comp-providers", "best-cyber-insurance", "business-insurance-guide"]
    },

    "best-workers-comp-providers": {
      title: "Best workers' compensation insurance options for small employers",
      h1: "Best workers' compensation routes for small employers",
      section: "Comparisons",
      eyebrow: "Comparison · scored rubric",
      dek: "State fund, private carrier, PEO or payroll-integrated cover — which structure fits your headcount, hazard class and appetite for admin.",
      disclosure: true,
      answer: "Under ~10 employees in a low-hazard class, payroll-integrated or digital comp is usually cheapest and simplest. In hazardous classes, or with a poor experience modifier, a specialist carrier via a broker who can present your safety programme will beat a self-serve quote. PEOs make sense when you want HR and benefits bundled, not when you only want comp.",
      table: {
        caption: "Workers' compensation delivery routes compared, July 2026.",
        headers: ["Route", "Best for", "Cost profile", "Admin burden", "Watch out for"],
        rows: [
          { best: true, cells: ["<strong>Payroll-integrated (pay-as-you-go)</strong>", "1–20 employees, clean class codes", "Competitive; no big audit swing", "Lowest — premium follows real payroll", "Class-code mapping errors carry into every pay run"] },
          { cells: ["<strong>Private carrier via broker</strong>", "Hazardous classes, EMR above 1.0", "Best when a safety programme can be argued", "Medium", "Requires an agent who actually markets it"] },
          { cells: ["<strong>State fund / assigned risk</strong>", "Businesses declined elsewhere", "Highest, by design", "Medium", "Treat as temporary; work to exit"] },
          { cells: ["<strong>PEO</strong>", "Employers wanting HR + benefits + comp", "Bundled; hard to unbundle for comparison", "Lowest overall HR burden", "Exit costs and co-employment implications"] },
          { cells: ["<strong>Large-deductible programme</strong>", "50+ employees with stable losses", "Lowest long-run if losses stay low", "Highest", "Cash-flow risk on each claim"] }
        ]
      },
      body:
        "<h2>Get the class codes right before you shop</h2>" +
        "<p>No route beats a correct classification. A clerical employee misclassified into a field code can cost several thousand dollars a year on a single salary. Pull your current declarations page, list every employee, and map roles to codes before requesting a single quote.</p>" +
        "<h2>Pay-as-you-go versus annual estimate</h2>" +
        "<p>Pay-as-you-go pulls premium from each payroll run, so the year-end audit rarely produces a shock. That cash-flow smoothing is worth real money to a small employer, and it is the main reason payroll-integrated comp has taken so much of the micro-employer market.</p>" +
        "<!--AD-->" +
        "<h2>What a broker adds in hazardous classes</h2>" +
        "<p>Underwriters price uncertainty. A broker who submits a narrative — safety programme, training records, return-to-work policy, loss-run explanations — converts uncertainty into schedule credits. That is the difference between the state fund and a standard market for a contractor with one bad year.</p>" +
        "<h2>Before you sign with a PEO</h2>" +
        "<ul><li>Ask for the comp component priced separately, in writing.</li><li>Check whether the PEO is certified (CPEO) and how it handles the exit.</li>" +
        "<li>Understand who owns the loss history when you leave — this affects your future EMR.</li></ul>",
      leadForm: {
        title: "Get workers' comp options for your payroll",
        sub: "Share headcount and class of work; a licensed broker responds with routes and indicative pricing.",
        offer: "workers-comp-quote",
        numberLabel: "Number of employees",
        consent: "I consent to a licensed broker contacting me about workers' compensation. ShieldWise may be paid a referral fee.",
        cta: "Request options",
        steps: ["We confirm state and class of work.", "You are told which broker will contact you.", "You receive at least two structural options, not just one price.", "We send the payroll-audit preparation checklist either way."],
        privacy: "Stored: name, email, company, headcount, notes. Never sold."
      },
      faq: [
        { q: "Can I buy workers' comp online?", a: "<p>In many states, yes, for standard classes. Hazardous classes and poor loss history still need a broker.</p>" },
        { q: "What is assigned risk?", a: "<p>The state's market of last resort for employers no voluntary carrier will write. It is expensive; treat it as a stepping stone.</p>" },
        { q: "Does a PEO improve my EMR?", a: "<p>It can mask it while you are inside the PEO, but the underlying loss history usually follows you out.</p>" }
      ],
      methodology: "<p>Routes scored using the criteria in our <a href='review-methodology.html'>methodology</a>, with pricing structure verified against published programme documentation and broker interviews, June–July 2026.</p>",
      related: ["workers-compensation-insurance", "insurance-for-contractors", "best-small-business-insurance"]
    },

    "best-cyber-insurance": {
      title: "Best cyber insurance for small business: what to compare",
      h1: "Choosing cyber insurance for a small business",
      section: "Comparisons",
      eyebrow: "Comparison · scored rubric",
      dek: "Standalone versus endorsement, the sub-limits that decide whether a policy is real, and the controls that unlock the good markets.",
      disclosure: true,
      answer: "Compare four things before price: the <strong>social engineering sub-limit</strong>, <strong>ransomware co-insurance</strong>, the <strong>business interruption waiting period</strong>, and whether <strong>incident response</strong> is a panel service with a 24/7 hotline. A $1m endorsement on a BOP with a $25k crime sub-limit is not equivalent to a $1m standalone policy.",
      table: {
        caption: "Cyber cover structures compared for businesses under 100 employees, July 2026.",
        headers: ["Structure", "Typical limit", "Sub-limit risk", "Incident response", "Best for"],
        rows: [
          { best: true, cells: ["<strong>Standalone cyber policy</strong>", "$1m–$5m", "Disclosed and negotiable", "Panel + 24/7 hotline", "Anyone holding customer or payment data"] },
          { cells: ["<strong>BOP cyber endorsement</strong>", "$50k–$250k", "High — thin sub-limits", "Often claims line only", "Very small, low-data businesses"] },
          { cells: ["<strong>Tech E&amp;O + cyber combined</strong>", "$1m–$5m", "Moderate", "Panel", "Software, MSP and IT services firms"] },
          { cells: ["<strong>Managed-service bundled cover</strong>", "$100k–$1m", "High — conditions on using the MSP's stack", "Provider-led", "Clients fully outsourced to one MSP"] }
        ]
      },
      body:
        "<h2>The controls gate</h2>" +
        "<p>Most markets will not quote without MFA on email and remote access, tested offline or immutable backups, endpoint detection and response, and email filtering. Implement these before you shop: they change the price band and, more importantly, they are the controls that stop the incident.</p>" +
        "<h2>Reading the quote like an underwriter</h2>" +
        "<ol><li>Find the sub-limit schedule — it is usually on page two of the quote, not the summary.</li>" +
        "<li>Check the waiting period for business interruption (8, 10 or 12 hours materially changes the value).</li>" +
        "<li>Confirm dependent business interruption is included if your revenue depends on a SaaS platform.</li>" +
        "<li>Ask whether you may use your own counsel and forensics or must use the panel.</li>" +
        "<li>Check the retroactive date and any prior-acts exclusion.</li></ol>" +
        "<!--AD-->" +
        "<h2>Warranty and rescission risk</h2>" +
        "<p>Application answers are warranties. If you attest to MFA everywhere and the breach enters through the one account without it, expect a coverage dispute. Have the person who actually administers the systems complete the questionnaire.</p>" +
        "<h2>When the endorsement is enough</h2>" +
        "<p>A two-person business with no customer database, no payment processing and no employee PII beyond payroll can reasonably carry an endorsement. Everyone else should price standalone — the gap between the two shows up precisely when it matters.</p>",
      leadForm: {
        title: "Get cyber cover options",
        sub: "Tell us your data footprint and current controls; a specialist broker will respond with realistic markets.",
        offer: "cyber-insurance-quote",
        numberLabel: "Employees",
        consent: "I consent to a licensed broker contacting me about cyber cover. ShieldWise may be paid a referral fee.",
        cta: "Request cyber options",
        steps: ["We check which controls you already have.", "You are told which broker will contact you.", "You get a sub-limit comparison, not just a premium.", "We send the underwriting-questionnaire prep sheet regardless."],
        privacy: "Stored: name, email, company, headcount, notes. Never sold."
      },
      faq: [
        { q: "Is cyber insurance worth it under 10 employees?", a: "<p>If you hold customer data or take payments, usually yes — notification costs alone can exceed a year's premium many times over.</p>" },
        { q: "Does it cover lost income from an outage at my SaaS vendor?", a: "<p>Only with dependent (contingent) business interruption cover, which is not always included.</p>" },
        { q: "Will a claim make me uninsurable?", a: "<p>Not usually, if you remediate. Carriers care more about what changed after the incident than about the incident itself.</p>" }
      ],
      methodology: "<p>Structures compared using specimen wordings and current underwriting questionnaires from multiple markets, July 2026, scored on the criteria in our <a href='review-methodology.html'>methodology</a>.</p>",
      related: ["cyber-insurance-small-business", "coverage-checklist", "best-small-business-insurance"],
      crossRefs: [{ slug: "hardenhq", page: "mfa-rollout-guide", label: "Rolling out MFA across a small team", why: "The single control most likely to change your cyber quote." }]
    },

    "insurance-cost-calculator": {
      title: "Business insurance cost calculator (2026 benchmark estimator)",
      h1: "Business insurance cost calculator",
      section: "Tools",
      eyebrow: "Free tool",
      dek: "Estimate an indicative annual premium range across liability, professional, cyber and workers' compensation — with every assumption visible.",
      disclosure: true,
      toc: false,
      answer: "Move the inputs to see how class hazard, revenue, payroll, limits and deductible change an indicative annual programme cost. This is a benchmark model built from our published cost research — not a quote, and not underwriting.",
      body:
        "<div id='calculator'></div>" +
        "<h2>How this model works</h2>" +
        "<p>The estimator applies a base rate per $1,000 of revenue for liability lines, a payroll-based rate for workers' compensation, and a records-based load for cyber. It then adjusts for limit selection, deductible, claims history and documented controls. The weights come from the benchmark ranges in our <a href='business-insurance-cost.html'>cost research</a>.</p>" +
        "<h2>What it deliberately ignores</h2>" +
        "<ul><li>State rating differences, which can be significant, especially for workers' compensation.</li>" +
        "<li>Individual carrier appetite and schedule credits.</li>" +
        "<li>Catastrophe exposure on property.</li>" +
        "<li>Contractual requirements that force higher limits than you would otherwise buy.</li></ul>" +
        "<h2>How to use the output</h2>" +
        "<p>Treat the range as a sanity check. If a quote lands far above the top of the range, ask the underwriter which rating factor drove it — usually class code, loss history or a hazardous operation you did not think to mention. If a quote lands far below, check the limits, sub-limits and whether defence costs sit inside the limit.</p>" +
        "<h2>Next step</h2>" +
        "<p>Save your scenario, then work through the <a href='coverage-checklist.html'>coverage checklist</a> so your broker briefing lists exposures rather than products.</p>",
      calculator: {
        title: "Indicative annual premium estimator",
        sub: "US small business, 2026 benchmark model. Estimates only — never a quote.",
        disclaimer: "Benchmarks derived from published carrier pricing and broker interviews (July 2026). Actual premiums depend on class code, state, loss history and underwriting.",
        fields: [
          { id: "hazard", label: "Industry hazard band", type: "select", value: "low", hint: "Low: office, consulting. Medium: retail, light service. High: trades, physical work.", options: [{ value: "low", label: "Low — professional / office" }, { value: "med", label: "Medium — retail, hospitality, light service" }, { value: "high", label: "High — trades, construction, physical work" }] },
          { id: "revenue", label: "Annual revenue (USD)", type: "number", value: 400000, min: 0, max: 20000000, step: 25000 },
          { id: "payroll", label: "Annual employee payroll (USD)", type: "number", value: 120000, min: 0, max: 10000000, step: 10000, hint: "Exclude owner draws where your state exempts them." },
          { id: "records", label: "Customer records held (thousands)", type: "number", value: 5, min: 0, max: 5000, step: 1, hint: "Drives the cyber component." },
          { id: "limit", label: "Liability limit", type: "select", value: "1m", options: [{ value: "500k", label: "$500k / $1m" }, { value: "1m", label: "$1m / $2m (most common)" }, { value: "2m", label: "$2m / $4m" }] },
          { id: "deduct", label: "Deductible", type: "select", value: "1000", options: [{ value: "500", label: "$500" }, { value: "1000", label: "$1,000" }, { value: "2500", label: "$2,500" }, { value: "5000", label: "$5,000" }] },
          { id: "claims", label: "Claims in the last 5 years", type: "number", value: 0, min: 0, max: 10, step: 1 },
          { id: "controls", label: "Documented controls in place", type: "select", value: "some", hint: "Safety programme, MFA, written contracts, tested backups.", options: [{ value: "none", label: "None documented" }, { value: "some", label: "Some documented" }, { value: "strong", label: "Strong and evidenced" }] }
        ],
        compute: function (v) {
          var m = window.MDN_UTIL.money;
          var hazardRate = { low: 1.4, med: 2.6, high: 5.2 }[v.hazard];
          var compRate = { low: 0.6, med: 2.1, high: 7.4 }[v.hazard];
          var limitF = { "500k": 0.85, "1m": 1, "2m": 1.28 }[v.limit];
          var dedF = { "500": 1.08, "1000": 1, "2500": 0.91, "5000": 0.84 }[v.deduct];
          var claimF = 1 + (v.claims * 0.14);
          var ctrlF = { none: 1.15, some: 1, strong: 0.88 }[v.controls];
          var gl = Math.max(350, (v.revenue / 1000) * hazardRate) * limitF * dedF * claimF * ctrlF;
          var pl = v.hazard === "low" ? Math.max(600, (v.revenue / 1000) * 2.1) * limitF * claimF * ctrlF : 0;
          var cyber = Math.max(v.records > 0 ? 650 : 0, v.records * 26) * ctrlF * limitF;
          var comp = (v.payroll / 100) * compRate * (1 + v.claims * 0.06);
          var total = gl + pl + cyber + comp;
          return [
            { label: "Indicative total annual programme", value: m(total * 0.85) + " – " + m(total * 1.25), hint: "Range reflects carrier and state variation. Mid-point: " + m(total) + "." },
            { label: "General liability / BOP", value: m(gl), hint: "Hazard band and revenue driven." },
            { label: "Professional liability (E&O)", value: pl ? m(pl) : "Not modelled for this hazard band", hint: pl ? "Claims-made; check the retroactive date." : "Add manually if you give advice or deliver work product." },
            { label: "Cyber ($1m equivalent)", value: cyber ? m(cyber) : "$0 — no records held", hint: "Strong controls are the biggest lever here." },
            { label: "Workers' compensation", value: comp ? m(comp) : "$0 — no payroll entered", hint: "Payroll ÷ 100 × class rate; excludes experience modifier detail." }
          ];
        }
      },
      faq: [
        { q: "Why is the range so wide?", a: "<p>Because state, carrier appetite and class code legitimately move small commercial pricing by 40% or more for identical risks.</p>" },
        { q: "Can I use this to negotiate?", a: "<p>Use it to ask better questions. 'Which rating factor puts me above benchmark?' works far better than 'that seems expensive'.</p>" },
        { q: "Do you store my inputs?", a: "<p>Only if you press save, and then only the scenario and the email you supplied.</p>" }
      ],
      related: ["business-insurance-cost", "coverage-checklist", "best-small-business-insurance"]
    },

    "coverage-checklist": {
      title: "Business insurance coverage checklist by industry",
      h1: "The coverage checklist: find your unpriced exposures",
      section: "Tools",
      eyebrow: "Free tool",
      dek: "Work through the exposures for your business, tick what you already have covered, and leave with a broker briefing instead of a shopping list.",
      toc: false,
      answer: "Tick each item you can point to a policy for. Anything left unticked is either an accepted risk or a gap — and writing that distinction down before you call a broker is the single highest-value hour in the whole buying process. Progress saves in your browser.",
      body:
        "<div id='checklist'></div>" +
        "<h2>How to use the result</h2>" +
        "<p>Print or save the completed list and send it with your renewal submission. Brokers respond dramatically better to an exposure list than to 'can you check if I'm paying too much'. It also gives you a documented record of the risks you consciously chose to retain — useful if a partner or lender ever asks.</p>" +
        "<h2>Re-run it when anything changes</h2>" +
        "<ul><li>You hire your first employee, or your first employee who drives.</li>" +
        "<li>You sign a contract with insurance requirements attached.</li>" +
        "<li>You start holding customer payment or health data.</li>" +
        "<li>You add a physical location, or start shipping product.</li>" +
        "<li>Revenue grows by more than a third.</li></ul>" +
        "<p>The <a href='insurance-cost-calculator.html'>cost calculator</a> then tells you roughly what closing those gaps should cost.</p>",
      checklist: {
        groups: [
          { title: "Third-party liability", note: "Claims from customers, the public and other businesses.", items: ["General liability in force with limits meeting every client contract", "Additional insured endorsements issued where contracts require them", "Products-completed operations included if you sell or install anything", "Personal and advertising injury cover reviewed against your marketing", "Umbrella limit sized to your largest contract requirement"] },
          { title: "People", items: ["Workers' compensation in place in every state where you have staff", "Employer's liability limit meets contractual requirements ($1m if a GC requires it)", "Certificates collected from every subcontractor, filed with expiry dates", "Return-to-work programme documented", "Employment practices liability considered if you have employees"] },
          { title: "Professional and technology", items: ["Professional liability in force with an early retroactive date", "Tail cover budgeted if you might close, sell or retire", "Written contracts with defined scope and a liability cap", "Tech E&O considered if you write software or manage systems"] },
          { title: "Cyber and data", items: ["Standalone cyber policy, or an endorsement whose sub-limits you have read", "Social engineering / funds transfer sub-limit checked", "MFA enabled on email, remote access and privileged accounts", "Backups tested by actual restore in the last 90 days", "Incident response contacts saved offline"] },
          { title: "Property, vehicles and equipment", items: ["Property or BOP limits reflect replacement cost, not book value", "Business interruption period of indemnity is realistic", "Tools and equipment covered by an inland marine floater", "Commercial auto for every titled vehicle", "Hired and non-owned auto if staff ever drive their own cars for work"] },
          { title: "Admin and renewal hygiene", items: ["Renewal diarised 60 days ahead", "Loss runs requested annually", "Class codes and described operations verified against what you actually do", "Payroll reconciled by class code quarterly", "Policy documents stored somewhere you could reach during an outage"] }
        ]
      },
      faq: [
        { q: "Is my progress private?", a: "<p>Yes. Ticks are stored in your browser's local storage only, and never sent to us.</p>" },
        { q: "Can I share the completed list?", a: "<p>Use print or save-as-PDF, then email it to your broker.</p>" },
        { q: "Does this replace advice?", a: "<p>No. It is a structured prompt so your conversation with a licensed broker starts several steps further along.</p>" }
      ],
      related: ["business-insurance-guide", "insurance-cost-calculator", "insurance-for-contractors"],
      cta: { title: "Keep the renewal on track", text: "The Renewal Brief sends the tasks due each month, plus one dated price benchmark.", btn: "Subscribe to the brief", href: "index" }
    },

    "cyber-insurance-cost": {
      title: "Cyber insurance cost for small business (2026 pricing guide)",
      h1: "How much cyber insurance costs in 2026",
      section: "Cost & buying",
      eyebrow: "High-intent pricing guide",
      dek: "Benchmark premiums by revenue band and data type, the control discounts that move the number most, and how to read a cyber quote properly.",
      disclosure: true,
      answer: "For a business under $1m revenue with clean controls, $1m of standalone cyber cover commonly benchmarks between <strong>$700 and $3,000 a year</strong>. Holding health or payment data, weak authentication, or a prior incident can multiply that or cause a declination. Controls move price more than shopping does.",
      table: {
        caption: "Indicative annual cyber premiums for $1m limit, US small business, July 2026.",
        headers: ["Revenue band", "Low-sensitivity data", "Payment or health data", "Main price driver"],
        rows: [
          { cells: ["Under $250k", "$650 – $1,200", "$1,100 – $2,400", "Records held"] },
          { best: true, cells: ["$250k – $1m", "$900 – $1,900", "$1,800 – $3,600", "MFA coverage and backups"] },
          { cells: ["$1m – $5m", "$1,800 – $4,500", "$3,500 – $9,000", "Dependent BI exposure"] },
          { cells: ["$5m – $25m", "$4,500 – $14,000", "$9,000 – $30,000", "Controls maturity, prior claims"] }
        ],
        note: "Benchmark ranges, not quotes. Assumes $1m limit, no losses in five years, MFA on email and remote access, and tested backups."
      },
      body:
        "<h2>The five factors that set your price</h2>" +
        "<ol><li><strong>Records held and their sensitivity.</strong> Notification cost per record is the anchor of the whole model.</li>" +
        "<li><strong>Authentication.</strong> MFA everywhere versus MFA somewhere is often a 20–40% swing, when cover is offered at all.</li>" +
        "<li><strong>Backups.</strong> Offline or immutable, tested by restore, materially reduces ransomware severity assumptions.</li>" +
        "<li><strong>Dependency concentration.</strong> If one SaaS outage stops your revenue, dependent business interruption drives the price.</li>" +
        "<li><strong>Claims history.</strong> One prior incident without evidenced remediation is worse than none with weak controls.</li></ol>" +
        "<!--AD-->" +
        "<h2>What the cheap quotes leave out</h2>" +
        "<p>A quote that undercuts the band above usually does it through sub-limits: social engineering capped at $25k, ransomware co-insurance at 50%, a 12-hour business interruption waiting period, or no dependent BI at all. Compare the <a href='best-cyber-insurance.html'>structure</a> before the premium.</p>" +
        "<h2>Getting the price down honestly</h2>" +
        "<ul><li>Enable MFA on email, VPN and privileged accounts, then say so accurately.</li>" +
        "<li>Run one documented restore test and keep the evidence.</li>" +
        "<li>Deploy endpoint detection rather than consumer antivirus.</li>" +
        "<li>Raise the retention if you can genuinely absorb it.</li>" +
        "<li>Buy cyber standalone rather than as a thin endorsement — better cover per dollar at almost every size.</li></ul>" +
        "<p>Estimate your whole programme, including cyber, with the <a href='insurance-cost-calculator.html'>cost calculator</a>.</p>",
      faq: [
        { q: "Is cyber insurance getting cheaper?", a: "<p>Pricing softened after the 2021–22 hard market for well-controlled risks, while poorly-controlled risks still struggle to get quoted at all. The spread between the two has widened.</p>" },
        { q: "Does a higher deductible help much?", a: "<p>Less than controls do. Underwriters price the probability of an incident far more than your first-dollar participation.</p>" },
        { q: "Can I insure a ransomware payment?", a: "<p>Often, subject to co-insurance, sanctions screening and carrier consent — but treat it as a last resort, not a plan.</p>" }
      ],
      edge: {
        intro: "Cyber insurance cost pages consistently frame the purchase as a shopping exercise. Underwriting works the other way round: for small risks, the control set determines both the price and whether cover is offered at all, so a page that optimises for comparison is optimising the wrong step.",
        gaps: [
          {
            claim: "\"Shop around to find cheaper cyber cover.\"",
            problem: "Controls move price far more than distribution does. Multi-factor authentication everywhere versus MFA on some systems is commonly a 20–40% swing — and increasingly the difference between a quote and a declination. A business that shops hard with weak controls is choosing between bad prices; one that fixes MFA and tests a restore changes the price band it is quoted in. Pages paid per quote request have no reason to tell you to fix the controls first.",
            ours: "We rank the five underwriting factors by pricing impact and give the honest reduction sequence — MFA, documented restore test, endpoint detection, retention — before any mention of shopping."
          },
          {
            claim: "Premium is compared across quotes as the headline number.",
            problem: "Cheap cyber quotes are cheap because of structure. The usual mechanisms are a social-engineering sub-limit around $25,000 against a $1m headline, ransomware co-insurance at 50%, a 12-hour business-interruption waiting period, and no dependent business interruption. Social engineering and vendor outages are the two most common ways small businesses actually lose money, so the sub-limits are removing precisely the cover that matters.",
            ours: "We tell readers to compare sub-limit structure before premium and name each mechanism, so a $700 quote and a $1,400 quote can be seen as different products rather than different prices."
          },
          {
            claim: "Cyber is recommended as an endorsement on an existing policy.",
            problem: "A cyber endorsement on a BOP is typically a thin grant — low limits, narrow triggers, minimal incident-response support — sold on convenience. At almost every size, standalone cyber delivers materially better cover per dollar, and it comes with the breach-response panel that determines how a real incident goes. The endorsement is easier to sell, which is why it is recommended.",
            ours: "We say plainly that standalone beats an endorsement at almost every size, rather than treating them as interchangeable price points."
          },
          {
            claim: "A prior claim is described as making cover more expensive.",
            problem: "The relationship is conditional, not linear. One prior incident <em>with</em> evidenced remediation frequently underwrites better than no incident with weak controls — the remediation is proof the controls now exist. Businesses that assume a past incident permanently disqualifies them often stop looking, or accept the first poor quote offered.",
            ours: "We state the conditional honestly, so a business with a prior incident knows that documented remediation is the asset it should be presenting."
          }
        ],
        only: [
          "The five underwriting factors ranked by actual pricing impact, controls first.",
          "Named sub-limit mechanisms that make a cheap quote cheap: social-engineering caps, co-insurance, BI waiting periods, absent dependent BI.",
          "Standalone versus endorsement assessed on cover per dollar rather than convenience.",
          "Premiums banded by revenue <em>and</em> data sensitivity, because notification cost per record anchors the model.",
          "Prior-claim treatment stated conditionally: remediation evidence can outperform a clean record with weak controls."
        ]
      },
      sources: [
        { name: "CISA — Cyber Essentials", url: "https://www.cisa.gov/cyber-essentials", note: "The baseline control set underwriters increasingly require" },
        { name: "FBI IC3 annual report — incident and loss data", url: "https://www.ic3.gov/", note: "Loss data showing business email compromise dominates small-business losses" }
      ],
      leadForm: {
        title: "Get cyber quotes for your control set",
        sub: "Tell us your data footprint and current controls; a specialist broker responds with realistic markets.",
        offer: "cyber-insurance-pricing",
        numberLabel: "Employees",
        consent: "I consent to a licensed broker contacting me about cyber cover. ShieldWise may be paid a referral fee.",
        cta: "Request pricing",
        steps: ["We record your control set and data types.", "You are told which broker will contact you.", "You get a sub-limit comparison, not just a premium.", "You receive the underwriting questionnaire prep sheet either way."],
        privacy: "Stored: name, email, company, headcount, notes. Never sold."
      },
      related: ["cyber-insurance-small-business", "best-cyber-insurance", "business-insurance-cost"],
      crossRefs: [{ slug: "hardenhq", page: "mfa-rollout-guide", label: "Roll out MFA before you request the quote", why: "The single control most likely to change your premium band." }]
    },

    "professional-liability-cost": {
      title: "Professional liability insurance cost by profession (2026)",
      h1: "Professional liability insurance cost, by profession",
      section: "Cost & buying",
      eyebrow: "High-intent pricing guide",
      dek: "Benchmark E&O premiums for consultants, agencies, IT, accountants and design firms — and the four underwriting answers that move your rate.",
      disclosure: true,
      answer: "Solo professionals commonly benchmark <strong>$600–$1,600 a year</strong> for $1m of errors and omissions cover; firms with several fee earners or higher-risk advice run into the thousands. Fee income, sector, contract quality and claims history drive almost all of the variance.",
      table: {
        caption: "Indicative annual E&O premiums, $1m/$1m limits, US, July 2026.",
        headers: ["Profession", "Solo", "Firm of 5", "Why it prices this way"],
        rows: [
          { cells: ["Management consultant", "$650 – $1,400", "$2,400 – $5,000", "Advice-only, moderate loss size"] },
          { cells: ["Marketing / design agency", "$600 – $1,300", "$2,200 – $4,600", "IP and campaign performance disputes"] },
          { best: true, cells: ["IT services / MSP", "$1,000 – $2,400", "$4,000 – $9,500", "Downtime and data exposure severity"] },
          { cells: ["Bookkeeper / accountant", "$800 – $1,800", "$3,000 – $7,000", "Financial loss directly quantifiable"] },
          { cells: ["Recruiter", "$700 – $1,600", "$2,600 – $5,500", "Placement and discrimination claims"] }
        ],
        note: "Ranges assume claims-made cover, an early retroactive date, written contracts with liability caps, and no claims in five years."
      },
      body:
        "<h2>The four answers that set your rate</h2>" +
        "<ol><li><strong>Annual fee income</strong> — the exposure base.</li>" +
        "<li><strong>Largest single engagement</strong> — severity proxy; one client at 60% of revenue is a red flag.</li>" +
        "<li><strong>Contract practice</strong> — written scopes, acceptance criteria and liability caps genuinely reduce rate.</li>" +
        "<li><strong>Claims and circumstances</strong> — including anything you have notified but not yet had claimed.</li></ol>" +
        "<!--AD-->" +
        "<h2>Where the money is wasted</h2>" +
        "<p>Buying a limit lower than your largest contract requires, then having to buy a project-specific top-up at short notice. And letting a policy lapse between clients — the retroactive date resets and years of past work become uninsured. See <a href='professional-liability-insurance.html'>claims-made mechanics</a>.</p>" +
        "<h2>Cheap ways to cut the premium</h2>" +
        "<ul><li>Adopt a reviewed contract template with a cap at fees paid.</li>" +
        "<li>Raise the deductible if your cash position allows.</li>" +
        "<li>Bundle E&amp;O with cyber where the combined form is genuinely broader.</li>" +
        "<li>Report circumstances early — late notice is a coverage fight, not a saving.</li></ul>",
      faq: [
        { q: "Why is IT services priced higher?", a: "<p>Because a single configuration error can stop a client's operations, making severity much larger than in advice-only professions.</p>" },
        { q: "Does raising my limit double the price?", a: "<p>No. Excess layers are proportionally cheaper; going from $1m to $2m typically costs far less than the first million.</p>" },
        { q: "Do I still need it after I stop trading?", a: "<p>Yes — buy tail cover, because claims can arrive years after the work.</p>" }
      ],
      edge: {
        intro: "Professional liability pages quote premiums by profession and stop there. The omission is significant: E&O is almost always written on a claims-made basis, and the mechanics of that basis create costs and gaps that no price table reveals.",
        gaps: [
          {
            claim: "Cover is presented as an annual purchase you can start and stop.",
            problem: "Claims-made policies respond to claims <em>made</em> during the policy period for work after a retroactive date. Let cover lapse between clients and the retroactive date resets on the new policy — so every year of past work becomes uninsured, permanently. A consultant who saves one quarter's premium during a quiet spell can silently strip cover from a decade of completed engagements. This is the most consequential mechanic in the product and it is absent from nearly every cost page.",
            ours: "We treat continuity and the retroactive date as the substance of the purchase, and flag lapse as the expensive mistake it is rather than a saving."
          },
          {
            claim: "Winding down a practice ends the need for cover.",
            problem: "Claims can arrive years after the work is delivered. Without tail cover — an extended reporting period — a professional who closes their practice and cancels the policy has no cover for claims that surface afterwards, on work they were paid for. The saving is a few hundred dollars against an uncapped personal exposure.",
            ours: "We name tail cover as a required line item when closing a practice, and price the decision against the exposure rather than the premium."
          },
          {
            claim: "\"Raising your limit is expensive.\"",
            problem: "Excess layers are proportionally cheaper than the first million, because the probability of a loss piercing the higher layer is much lower. Going from $1m to $2m typically costs far less than the first $1m. Readers assuming linear pricing under-buy, then discover a client contract requires a limit they do not carry and pay for a project-specific top-up at short notice — the most expensive way to buy limit.",
            ours: "We state the non-linear pricing explicitly and tell readers to size the limit to their largest contractual requirement, not to their comfort with the premium."
          },
          {
            claim: "Premium is treated as a function of profession and revenue only.",
            problem: "Contract practice is a genuine rating factor. Written scopes, acceptance criteria and a liability cap at fees paid reduce both the probability and the size of a claim, and underwriters price that. So does client concentration: one client at 60% of revenue is a severity red flag. Neither appears in a profession-by-profession price table, yet both are things a business can change this month.",
            ours: "We give the four questions that set the rate — fee income, largest engagement, contract practice, claims and circumstances — and treat contract templates as a premium-reduction lever."
          }
        ],
        only: [
          "Claims-made mechanics and the retroactive date treated as the core of the purchase, not a footnote.",
          "Lapse-between-clients identified as the mechanism that silently uninsures years of past work.",
          "Tail cover priced as a required line when winding down a practice.",
          "Non-linear excess-layer pricing, so limits are sized to contracts rather than to premium comfort.",
          "Contract practice and client concentration named as rating factors a business can act on."
        ]
      },
      sources: [
        { name: "NAIC — consumer insurance information", url: "https://content.naic.org/consumer.htm", note: "State regulator guidance, including claims-made versus occurrence forms" },
        { name: "Independent broker interviews, June–July 2026", note: "Sector rate relativities and contract-practice underwriting credit" }
      ],
      leadForm: {
        title: "Get E&O pricing for your practice",
        sub: "Share your profession, fee income and contract practice; a licensed broker responds with options.",
        offer: "professional-liability-pricing",
        numberLabel: "Fee earners",
        consent: "I consent to a licensed broker contacting me about professional liability cover. ShieldWise may be paid a referral fee.",
        cta: "Request pricing",
        steps: ["We record profession, revenue and limits required.", "You are told which broker will contact you.", "You get at least two markets compared on form, not just price.", "You receive our contract-clause checklist either way."],
        privacy: "Stored: name, email, company, fee earners, notes. Never sold."
      },
      related: ["professional-liability-insurance", "insurance-for-consultants", "business-insurance-cost"]
    },

    "small-business-insurance-quotes": {
      title: "How to get small business insurance quotes that are actually comparable",
      h1: "Getting business insurance quotes you can actually compare",
      section: "Cost & buying",
      eyebrow: "Buying guide",
      dek: "The submission pack that gets accurate pricing, the five specification points to fix before you shop, and how to compare quotes on form rather than price.",
      disclosure: true,
      answer: "Fix the specification first — class code, limits, deductible, defence-cost treatment and required endorsements — then request quotes on <em>identical</em> terms from three routes. Quotes that differ in specification are not comparable, and that is how most owners end up buying the cheapest inadequate policy.",
      body:
        "<h2>Build the submission pack once</h2>" +
        "<ul><li>Legal entity name, trading names and every location.</li>" +
        "<li>Accurate description of operations — what you actually do, including the 10% nobody remembers.</li>" +
        "<li>Revenue, payroll split by role, and subcontractor spend.</li>" +
        "<li>Five years of loss runs from prior carriers.</li>" +
        "<li>Contractual insurance requirements from your biggest clients.</li>" +
        "<li>Controls evidence: safety programme, MFA, backups, contract templates.</li></ul>" +
        "<p>This pack takes an afternoon and shortens every future renewal.</p>" +
        "<!--AD-->" +
        "<h2>Fix the specification before you shop</h2>" +
        "<table><thead><tr><th>Specify</th><th>Default to request</th></tr></thead><tbody>" +
        "<tr><td>Liability limits</td><td>$1m per occurrence / $2m aggregate unless a contract says otherwise</td></tr>" +
        "<tr><td>Deductible</td><td>Two options: $1,000 and $2,500, so you can price the trade-off</td></tr>" +
        "<tr><td>Defence costs</td><td>Outside the limit where available; note it where not</td></tr>" +
        "<tr><td>Endorsements</td><td>Blanket additional insured, primary &amp; non-contributory, waiver of subrogation if contracts require</td></tr>" +
        "<tr><td>Cyber sub-limits</td><td>Social engineering and BI waiting period stated explicitly</td></tr>" +
        "</tbody></table>" +
        "<h2>Quote three routes, not three brands</h2>" +
        "<p>A digital carrier, an independent broker and your trade association programme will produce genuinely different answers. Three digital carriers will produce three versions of the same answer. See the <a href='best-small-business-insurance.html'>route comparison</a>.</p>" +
        "<h2>Compare on the form</h2>" +
        "<p>Line up exclusions, sub-limits and endorsements side by side before looking at price. Then check financial strength and the certificate turnaround, because you will need certificates faster than you expect.</p>",
      faq: [
        { q: "How many quotes should I get?", a: "<p>Three, from different distribution routes. More than that produces diminishing returns and can create market confusion if brokers approach the same carrier.</p>" },
        { q: "Can two brokers approach the same insurer?", a: "<p>They should not — carriers usually honour the first submission (broker of record rules). Tell each broker which markets the others have.</p>" },
        { q: "When should I start?", a: "<p>Sixty days before renewal. Thirty is workable; seven means you renew on whatever you already have.</p>" }
      ],
      leadForm: {
        title: "Request a like-for-like comparison",
        sub: "We pass your specification to a licensed broker so quotes come back on identical terms.",
        offer: "comparable-quotes",
        numberLabel: "Number of employees",
        consent: "I consent to a licensed broker contacting me about this request. ShieldWise may be paid a referral fee.",
        cta: "Request comparable quotes",
        steps: ["We confirm the specification points above.", "You are told which broker will contact you.", "Quotes come back on identical limits and deductibles.", "You receive the submission-pack template either way."],
        privacy: "Stored: name, email, company, headcount, notes. Never sold."
      },
      related: ["best-small-business-insurance", "business-insurance-cost", "certificate-of-insurance", "coverage-checklist"]
    }
  }
};
window.SITE_DATA.aboutRelated = ["business-insurance-guide", "best-small-business-insurance"];
Object.assign(window.SITE_DATA.pages, window.MDN_TRUST(window.SITE_DATA));
window.MDN_SITES = window.MDN_SITES || {};
window.MDN_SITES[window.SITE_DATA.slug] = window.SITE_DATA;
