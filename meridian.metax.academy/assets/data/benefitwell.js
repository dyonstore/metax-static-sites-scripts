/* BenefitWell — health benefits, HSAs and enrollment. Content model. */
window.SITE_DATA = {
  slug: "benefitwell",
  brand: "BenefitWell",
  mark: "BW",
  color: "#0b6b5b",
  tagline: "Health coverage choices, costed properly",
  description: "Independent guides to health plans, HSAs, open enrollment and small-group benefits — with the total annual cost modelled, not just the premium.",
  topicLong: "health insurance, HSAs and FSAs, open enrollment and small-group benefits",
  ymylLabel: "Health & financial",
  reviewObject: "health plan types, HSA providers and benefits administration options",
  updated: "3 August 2026",
  defaultAuthor: "Priya Raghunathan",
  defaultReviewer: "Nadia Feldman, RHU",
  contactEmail: "benefitwell@metax.academy",
  disclaimer: "BenefitWell publishes general benefits education, not insurance, tax, legal or medical advice. Plan designs, contribution limits and eligibility rules change annually and vary by state and employer. Confirm details in your plan documents and with a licensed broker or tax professional before deciding.",
  disclosureText: "Some links to insurers, HSA custodians and benefits platforms are affiliate or referral links. They never affect scoring, ordering, or whether a product appears in a comparison.",
  legalLine: "BenefitWell is not an insurance agency, a broker, a bank or a tax adviser, and does not sell coverage or administer accounts.",
  footerAbout: "Independent analysis of the health coverage decisions that quietly cost the most: plan selection, HSA strategy, open enrollment and small-group benefits — with the full-year arithmetic shown.",
  aboutDek: "Benefits coverage that adds up the whole year, not just the premium.",
  aboutWhat: "Plan-type explainers written from actual summaries of benefits; HSA and FSA guides with the tax math worked through; open enrollment planning that starts from your expected usage; and small-group benefits coverage for owners choosing on behalf of other people.",
  aboutDiff: [
    "We compare plans on total annual cost — premium plus expected out-of-pocket — never premium alone.",
    "Every contribution limit, deadline and rule is dated and sourced to the IRS, CMS or the Department of Labor.",
    "We publish the rubric and weights behind every comparison.",
    "A Registered Health Underwriter and a CPA review anything touching eligibility or tax treatment."
  ],
  cannotDo: "We cannot tell you which plan to buy, confirm whether a specific doctor or drug is covered, quote you a premium, or advise on your tax return. Those need your actual plan documents, a licensed broker, or your own tax professional.",
  sourceStandards: [
    "IRS publications and annual revenue procedures for HSA, FSA and HDHP limits, cited with the tax year.",
    "CMS and HealthCare.gov for marketplace rules, enrollment windows and subsidy mechanics.",
    "Department of Labor guidance for COBRA, ERISA and employer notice duties.",
    "Insurer Summary of Benefits and Coverage documents for plan design claims, with the plan year noted."
  ],
  methodLimits: "Health plan value is individual. We model realistic usage scenarios — low, moderate and high — rather than declaring one plan best, because the right answer depends on your expected care, your prescriptions and your provider network.",
  rubric: [
    { name: "Total annual cost", weight: "30%", what: "Premium plus deductible exposure plus expected coinsurance to the out-of-pocket maximum, across realistic usage levels." },
    { name: "Coverage clarity", weight: "20%", what: "Whether the plan documents make networks, tiers, prior authorisation and drug formularies findable and honest." },
    { name: "Network adequacy", weight: "15%", what: "Breadth of in-network providers, referral rules, and what happens out of network." },
    { name: "Account mechanics", weight: "15%", what: "For HSA and FSA providers: fees, investment options, transfer friction and reimbursement speed." },
    { name: "Administration and support", weight: "10%", what: "Enrollment experience, claim handling, appeals process, and whether a human can be reached." },
    { name: "Complaint and appeals record", weight: "10%", what: "Public complaint volume and denial or appeal outcomes relative to enrolment size." }
  ],
  evidence: [
    "Reading Summary of Benefits and Coverage documents side by side for identical plan years.",
    "Modelling the same household at low, moderate and high usage to find where plans cross over.",
    "Checking HSA custodian fee schedules and investment menus against published disclosures.",
    "Interviews with benefits brokers, HR administrators and enrollment counsellors."
  ],
  disqualifiers: [
    "Products marketed as health insurance that are not insurance and carry no coverage guarantee.",
    "Plans whose formulary or provider directory is not publicly accessible before enrolment.",
    "HSA custodians whose full fee schedule appears only after account opening.",
    "Any claim that a plan is 'best' without stating the assumed usage level."
  ],
  team: [
    { name: "Priya Raghunathan", role: "Editor-in-chief", bio: "Nine years as a group benefits broker before moving to writing. Covers plan selection and open enrollment, and reads every Summary of Benefits we cite.", focus: "Plan selection, open enrollment, networks" },
    { name: "Samuel Okonjo", role: "Tax & accounts writer", bio: "Former benefits administrator turned writer. Covers HSAs, FSAs and the tax mechanics people most often get wrong.", focus: "HSA, FSA, tax treatment" },
    { name: "Elena Brasov", role: "Employer benefits writer", bio: "Spent six years in HR operations at companies between 8 and 90 employees. Covers small-group benefits and compliance duties.", focus: "Small-group plans, COBRA, compliance" }
  ],
  reviewers: [
    { name: "Nadia Feldman, RHU", credential: "Registered Health Underwriter, 16 years in group and individual coverage", bio: "Reviews anything touching plan design, eligibility, networks or enrolment rules." },
    { name: "Curtis Ahn, CPA", credential: "Certified Public Accountant, 12 years in individual and small-business tax", bio: "Reviews every claim about HSA, FSA and premium tax treatment against current IRS guidance." }
  ],
  newsletter: {
    name: "The Benefits Brief",
    pitch: "Monthly, and weekly through open enrollment: what changed in limits and deadlines, one number worth recalculating, and one costly default to avoid.",
    cadence: "monthly",
    cta: "Get the benefits brief",
    magnet: "The open enrollment worksheet — compare any three plans on total annual cost"
  },
  nav: [
    { label: "Start here", page: "health-insurance-guide" },
    { label: "HSAs", page: "hsa-guide" },
    { label: "Open enrollment", page: "open-enrollment-guide" },
    { label: "For employers", page: "small-group-benefits-guide" },
    { label: "Costs", page: "health-insurance-cost" },
    { label: "Calculator", page: "hsa-tax-calculator" }
  ],
  toolLinks: [
    { page: "hsa-tax-calculator", label: "HSA tax savings calculator", desc: "What an HSA contribution actually saves in income tax and payroll tax, and what it becomes if invested." },
    { page: "open-enrollment-checklist", label: "Open enrollment checklist", desc: "The 30 checks to make before you accept next year's plan. Progress saves in your browser." }
  ],
  popular: ["health-insurance-cost", "small-business-health-insurance-cost", "hsa-guide", "best-hsa-providers"],
  featured: ["health-insurance-guide", "hsa-guide", "open-enrollment-guide"],
  partners: [
    { slug: "ledgerlift", why: "paying for benefits out of a small company's cash flow" },
    { slug: "ratebeacon", why: "what medical debt does to a credit file" },
    { slug: "shieldwise", why: "the business policies that sit alongside employee benefits" }
  ],
  clusters: [
    { kicker: "Cluster 1", name: "Choosing a plan", desc: "Plan types, deductibles, networks and the total-cost comparison.", pages: ["health-insurance-guide", "hdhp-explained", "deductible-guide", "open-enrollment-guide"] },
    { kicker: "Cluster 2", name: "HSAs and FSAs", desc: "Eligibility, limits, the tax math and long-term investing.", pages: ["hsa-guide", "fsa-vs-hsa", "hsa-investing", "dependent-care-fsa"] },
    { kicker: "Cluster 3", name: "Costs and coverage gaps", desc: "What coverage really costs, and what to do between jobs.", pages: ["health-insurance-cost", "cobra-vs-marketplace", "prescription-savings"] },
    { kicker: "Cluster 4", name: "For employers", desc: "Offering coverage to a small team without overpaying.", pages: ["small-group-benefits-guide", "small-business-health-insurance-cost", "best-hsa-providers"] }
  ],

  pages: {
    index: {
      title: "BenefitWell — health plans, HSAs and open enrollment, costed properly",
      hero: {
        h1: "Pick health coverage on the whole year's cost, not the premium",
        lead: "Independent, expert-reviewed guides to health plans, HSAs, open enrollment and small-group benefits — every figure modelled, dated and sourced to the IRS and CMS.",
        primary: { page: "health-insurance-guide", label: "Start with the plan guide" },
        secondary: { page: "hsa-tax-calculator", label: "Model an HSA" },
        trust: ["Reviewed by an RHU and a CPA", "Limits dated and sourced to the IRS", "Total annual cost, not just premium", "No paid placements"],
        stats: [
          { v: "4", l: "Clusters: plans, accounts, costs, employers" },
          { v: "30", l: "Checks in the enrollment checklist" },
          { v: "2 tools", l: "HSA calculator and enrollment checklist" },
          { v: "0", l: "Insurers who can buy a ranking" }
        ]
      },
      why: "<p>Health coverage is chosen once a year, in a hurry, from a grid of numbers that hides the one figure that matters. Most people compare premiums, pick the middle option, and never learn that a different plan would have cost them a thousand dollars less for exactly the same care.</p>" +
        "<p>BenefitWell exists to do that arithmetic out loud. We add premium to expected out-of-pocket spending across realistic usage levels, we show where plans cross over, and we date and source every limit and deadline to the IRS, CMS or the Department of Labor.</p>" +
        "<p>We are not a broker or an insurer. We cannot quote you a premium or confirm your doctor is in network — and we will say plainly when the cheapest-looking plan is the expensive one.</p>"
    },

    "health-insurance-guide": {
      title: "How to choose a health insurance plan",
      h1: "Choosing a health plan on total cost",
      section: "Pillar guide",
      eyebrow: "Pillar guide",
      dek: "What HMO, PPO, EPO and HDHP actually mean, how deductibles interact with out-of-pocket maximums, and the comparison that beats guessing.",
      answer: "Compare plans on <strong>premium plus expected out-of-pocket cost</strong>, modelled at the care you realistically expect. A high-deductible plan usually wins in a low-usage year and can still win in a high-usage year once the out-of-pocket maximum caps your exposure — check both before assuming the low-deductible plan is safer.",
      body:
        "<h2>The four plan types, plainly</h2>" +
        "<ul><li><strong>HMO</strong> — narrow network, referrals usually required, cheapest premiums, little or no out-of-network coverage.</li>" +
        "<li><strong>PPO</strong> — broad network, no referral needed, highest premiums, some out-of-network coverage.</li>" +
        "<li><strong>EPO</strong> — broad-ish network, no referrals, but out-of-network is generally not covered at all.</li>" +
        "<li><strong>HDHP</strong> — a deductible structure rather than a network type, and the only kind that makes you <a href='hsa-guide.html'>HSA-eligible</a>.</li></ul>" +
        "<!--FIG:The same household's total annual cost under four plan designs-->" +
        "<h2>The three numbers that decide it</h2>" +
        "<ol><li><strong>Premium</strong> — what you pay whether or not you use care. The only certain cost.</li>" +
        "<li><strong>Deductible</strong> — what you pay before most coverage begins. See <a href='deductible-guide.html'>how deductibles work</a>.</li>" +
        "<li><strong>Out-of-pocket maximum</strong> — your worst case for in-network covered care. This is the number that makes a scary deductible survivable.</li></ol>" +
        "<!--AD-->" +
        "<h2>The comparison to actually run</h2>" +
        "<p>For each plan, compute annual premium, then add your expected spending up to the deductible, then coinsurance above it, capping at the out-of-pocket maximum. Do it three times: a quiet year, a normal year, and a year with something serious. A plan that wins two of three scenarios is usually the right pick.</p>" +
        "<h2>Check these before you enrol</h2>" +
        "<ul><li>Every doctor and hospital you use, by name, in that specific plan's directory — not the insurer's general one.</li>" +
        "<li>Every prescription you take, against that plan's formulary and tier.</li>" +
        "<li>Whether your specialists need referrals.</li>" +
        "<li>Whether the plan is HSA-qualified if you want the account.</li></ul>" +
        "<p>Then work the <a href='open-enrollment-checklist.html'>enrollment checklist</a> so nothing gets missed in the last week.</p>",
      faq: [
        { q: "Is a lower deductible always safer?", a: "<p>No. You pay for it in premium every month whether you use care or not. The out-of-pocket maximum, not the deductible, defines your worst case.</p>" },
        { q: "Can I change plans mid-year?", a: "<p>Only with a qualifying life event such as marriage, birth, or loss of other coverage. Otherwise you wait for open enrollment.</p>" },
        { q: "Does the cheapest premium ever win?", a: "<p>Frequently, for healthy households — especially paired with an HSA. It loses badly if the network excludes your doctors.</p>" }
      ],
      sources: [
        { name: "HealthCare.gov — plan types and how costs work", url: "https://www.healthcare.gov/choose-a-plan/plan-types/" },
        { name: "CMS — Summary of Benefits and Coverage", url: "https://www.cms.gov/" }
      ],
      related: ["hdhp-explained", "deductible-guide", "open-enrollment-guide"]
    },

    "hsa-guide": {
      title: "Health Savings Accounts: the complete guide",
      h1: "The HSA, used properly",
      section: "Pillar guide",
      eyebrow: "Pillar guide",
      dek: "Eligibility, the triple tax advantage, contribution limits, what counts as qualified, and why an HSA is the most efficient retirement account most people ignore.",
      answer: "An HSA is the only account that is <strong>deductible going in, untaxed while growing, and tax-free coming out</strong> for qualified medical expenses. You need an HSA-qualified high-deductible plan to contribute. If you can pay current medical costs from cash flow, invest the balance instead and treat it as a retirement account.",
      body:
        "<h2>The triple advantage, and why it is unique</h2>" +
        "<p>A traditional 401(k) is taxed on the way out. A Roth is taxed on the way in. An HSA is taxed on neither, provided the withdrawal pays a qualified medical expense — and if contributions come through payroll, they usually escape payroll tax as well. No other account does all of that.</p>" +
        "<!--FIG:HSA against 401(k) and Roth: where tax is applied at each stage-->" +
        "<h2>Who can contribute</h2>" +
        "<ul><li>You must be covered by an HSA-qualified <a href='hdhp-explained.html'>high-deductible health plan</a>.</li>" +
        "<li>You must not have other disqualifying coverage, including a general-purpose <a href='fsa-vs-hsa.html'>health FSA</a>.</li>" +
        "<li>You must not be enrolled in Medicare — enrolment ends HSA contributions.</li>" +
        "<li>You must not be claimed as a dependent on someone else's return.</li></ul>" +
        "<!--AD-->" +
        "<h2>The strategy most people miss</h2>" +
        "<p>There is no deadline to reimburse yourself. Pay this year's medical costs from ordinary cash if you can, keep the receipts, and let the HSA balance stay invested for decades. You can reimburse those old expenses tax-free at any point in the future — see <a href='hsa-investing.html'>investing an HSA</a>.</p>" +
        "<h2>What counts as qualified</h2>" +
        "<p>Deductibles, coinsurance, prescriptions, dental, vision, and a long list of specifics the IRS publishes annually. Premiums generally do not qualify, with narrow exceptions including COBRA and Medicare premiums. Non-qualified withdrawals before 65 are taxed and penalised; after 65 they are simply taxed like an IRA distribution.</p>" +
        "<h2>Getting it wrong</h2>" +
        "<ul><li>Contributing while ineligible — an excess contribution with a penalty attached.</li>" +
        "<li>Leaving the whole balance in cash for twenty years.</li>" +
        "<li>Missing the last-month and catch-up rules if you are over 55.</li>" +
        "<li>Failing to name a beneficiary; a spouse inherits favourably, others do not.</li></ul>",
      edge: {
        intro: "HSA content is written mostly by custodians, benefits administrators and insurers, and it converges on describing the tax treatment then telling you to use the account for medical bills. That advice is safe, correct and leaves the largest part of the account's value on the table \u2014 while omitting the eligibility traps that create penalties and the inheritance rule that can destroy the balance outright.",
        gaps: [
          {
            claim: "\"Use your HSA to pay for medical expenses tax-free.\"",
            problem: "Accurate and yet the least valuable way to use the account, because it converts a decades-long compounding vehicle into a cheque book. The mechanism almost nobody explains is that there is <em>no deadline</em> to reimburse yourself for a qualified expense: pay this year's costs from ordinary cash flow if you can, keep the receipts, leave the balance invested, and claim those old expenses tax-free at any point in the future. That single behaviour is worth more over a working life than every custodian fee difference in the market combined. The reason it goes unpublished is structural rather than sinister \u2014 administrators are paid to process claims, and a spend-it-now framing produces the activity they exist to service.",
            ours: "We treat the HSA as a retirement account with a medical wrapper: spend from cash flow where possible, preserve receipts, and reimburse decades later."
          },
          {
            claim: "Eligibility is summarised as \"you need a high-deductible health plan.\"",
            problem: "Necessary but far from sufficient, and each omitted condition creates an excess contribution with a penalty attached. Other disqualifying coverage counts \u2014 most commonly a general-purpose health FSA, including a spouse's, which silently disqualifies you even though you never enrolled in it. Being claimed as a dependent on someone else's return disqualifies you. And the Medicare interaction is the expensive one: enrolment ends contribution eligibility, and because Part A enrolment can be backdated for someone who signs up after 65, contributions made in good faith during the retroactive window become excess. There is a mirror-image trap on the way in \u2014 the last-month rule lets someone eligible on the first day of December contribute the full annual amount, but only if they remain eligible through a testing period, and failing it retroactively converts the contribution into income plus penalty.",
            ours: "We enumerate all four disqualifiers including a spouse's general-purpose FSA, and cover the Medicare backdating and last-month testing period as the two rules that create penalties from honest mistakes."
          },
          {
            claim: "\"HSA funds cover your medical costs, including premiums once you retire.\"",
            problem: "Premiums are generally <em>not</em> qualified expenses, which is the opposite of what most readers assume, and the exceptions are narrow and worth knowing precisely: COBRA continuation coverage, coverage while receiving unemployment compensation, long-term care insurance up to age-based limits, and Medicare premiums other than Medigap. Getting this wrong produces a non-qualified withdrawal \u2014 taxed and, before 65, penalised. The related point that changes retirement planning is what happens <em>at</em> 65: non-qualified withdrawals stop being penalised and are simply taxed like a traditional IRA distribution, which means the account has no downside relative to a 401(k) even if your medical costs never materialise. That asymmetry is the strongest argument for funding an HSA and it is almost never stated.",
            ours: "We list the four premium exceptions explicitly and explain the post-65 treatment that makes the account strictly better than a traditional retirement account rather than a gamble on future medical costs."
          },
          {
            claim: "\"Name a beneficiary\" \u2014 given as generic account housekeeping.",
            problem: "This is the highest-stakes single line in HSA administration and it is treated as a formality. A surviving spouse named as beneficiary inherits the account <em>as their own HSA</em>, fully intact and still tax-advantaged. Any other beneficiary \u2014 a child, a sibling, or the estate by default where no beneficiary is named \u2014 receives the entire fair market value as taxable income in the year of death, in a single lump, with no option to spread it. A substantial balance built precisely for its tax efficiency can therefore be substantially taxed away by an omitted form, and the outcome differs by a wide margin between two people who did the same thing for thirty years. Custodian pages list the field; almost none explain that the choice of name changes the tax outcome this dramatically.",
            ours: "We state the spouse-versus-non-spouse divergence in plain terms, because it is the difference between an inherited HSA and a fully taxable lump sum \u2014 and it is decided by one field."
          }
        ],
        only: [
          "The no-deadline reimbursement strategy: pay from cash flow, keep receipts, claim decades later.",
          "All four disqualifiers \u2014 including a spouse's general-purpose FSA \u2014 plus Medicare backdating and the last-month testing period.",
          "The four narrow premium exceptions, and why premiums otherwise fail the qualified-expense test.",
          "Post-65 treatment as an IRA-equivalent, which removes the downside of over-funding.",
          "Spouse versus non-spouse beneficiary \u2014 an intact HSA against a fully taxable lump sum."
        ]
      },
      faq: [
        { q: "What happens to my HSA if I change jobs?", a: "<p>It is yours permanently. You can keep it or transfer it to a custodian with better fees and funds.</p>" },
        { q: "Can I still spend it if I lose HDHP coverage?", a: "<p>Yes. You cannot contribute any more, but the existing balance stays usable for qualified expenses forever.</p>" },
        { q: "Do I need receipts?", a: "<p>Keep every one. Reimbursements can happen years later, and substantiation is your responsibility, not the custodian's.</p>" }
      ],
      sources: [
        { name: "IRS Publication 969 — HSAs and other tax-favored health plans", url: "https://www.irs.gov/publications/p969" },
        { name: "IRS Publication 502 — medical and dental expenses", url: "https://www.irs.gov/publications/p502" }
      ],
      related: ["hdhp-explained", "hsa-investing", "hsa-tax-calculator"]
    },

    "open-enrollment-guide": {
      title: "Open enrollment: how to plan it properly",
      h1: "Open enrollment without the panic",
      section: "Pillar guide",
      eyebrow: "Pillar guide",
      dek: "The timeline, what actually changes each year, how to compare the new grid against your real usage, and the defaults that quietly cost money.",
      disclosure: true,
      answer: "Start two weeks early with <strong>last year's actual spending</strong> in hand, then compare every plan on total annual cost at that usage level. The costly mistake is passive re-enrolment: plan designs, networks and formularies change annually, and last year's best plan is frequently this year's worst.",
      body:
        "<h2>The timeline that works</h2>" +
        "<ol><li><strong>Two weeks out:</strong> pull last year's explanation-of-benefits statements and total what you actually spent.</li>" +
        "<li><strong>Ten days out:</strong> read the new Summary of Benefits for each option and note what changed.</li>" +
        "<li><strong>One week out:</strong> check every doctor and prescription against the new directories and formularies.</li>" +
        "<li><strong>Three days out:</strong> model total annual cost per plan at low, expected and high usage.</li>" +
        "<li><strong>Enrol,</strong> then confirm elections in writing and check the first payslip of the new year.</li></ol>" +
        "<!--AD-->" +
        "<h2>What changes without an announcement</h2>" +
        "<ul><li>Deductibles and out-of-pocket maximums drift upward almost every year.</li>" +
        "<li>Drug tiers get reshuffled, moving a maintenance prescription to a costlier tier.</li>" +
        "<li>Networks lose hospitals and practices mid-contract.</li>" +
        "<li>FSA elections do not roll over automatically at many employers — see <a href='fsa-vs-hsa.html'>FSA versus HSA</a>.</li></ul>" +
        "<!--FIG:Where the same plan quietly changed between two plan years-->" +
        "<h2>Do not forget the rest of the packet</h2>" +
        "<p>Open enrollment is also when you set life and disability cover, dependent care elections and, at many employers, the HSA contribution that will run all year. Disability insurance in particular is the most commonly under-elected benefit in the packet relative to the risk it covers.</p>" +
        "<h2>If you are choosing for a team</h2>" +
        "<p>Employers face the same arithmetic with more variables and a legal notice calendar. That is covered in the <a href='small-group-benefits-guide.html'>small-group guide</a>.</p>",
      faq: [
        { q: "What if I miss open enrollment?", a: "<p>You generally keep last year's election or go uncovered until the next window, unless you have a qualifying life event.</p>" },
        { q: "How long is a special enrollment period?", a: "<p>Commonly 30 to 60 days from the qualifying event, depending on the plan and event. Act immediately; the deadline is strict.</p>" },
        { q: "Should I re-enrol in the same plan?", a: "<p>Only after checking what changed. Passive re-enrolment is the single most expensive habit in benefits.</p>" }
      ],
      sources: [{ name: "HealthCare.gov — open enrollment and special enrollment periods", url: "https://www.healthcare.gov/" }],
      related: ["open-enrollment-checklist", "health-insurance-guide", "health-insurance-cost"]
    },

    "small-group-benefits-guide": {
      title: "Small group health benefits: offering coverage to a small team",
      h1: "Offering benefits to a small team",
      section: "Pillar guide",
      eyebrow: "Pillar guide",
      dek: "Group plans versus reimbursement arrangements, what participation rules require, contribution strategy, and the compliance calendar you inherit.",
      disclosure: true,
      answer: "Below roughly 20 employees the real choice is between a <strong>small-group plan</strong> and a <strong>reimbursement arrangement</strong> that gives each employee a defined allowance for individual coverage. Groups buy simplicity and predictable networks; reimbursement arrangements buy cost control and portability.",
      body:
        "<h2>The two routes</h2>" +
        "<ul><li><strong>Small-group plan</strong> — you select plans, meet participation and contribution minimums, and administer one renewal. Employees get a familiar structure and no shopping.</li>" +
        "<li><strong>Individual coverage reimbursement arrangement</strong> — you set a monthly allowance, employees buy their own individual plans and get reimbursed tax-free. Costs are predictable; employees must shop.</li></ul>" +
        "<!--FIG:Group plan against a defined reimbursement allowance for a nine-person team-->" +
        "<h2>Participation and contribution rules</h2>" +
        "<p>Insurers typically require a minimum share of eligible employees to enrol and a minimum employer contribution toward the employee-only premium. Miss either and the group is declined at renewal — which is how businesses end up uninsured in January.</p>" +
        "<!--AD-->" +
        "<h2>Contribution strategy</h2>" +
        "<p>Contributing a fixed dollar amount rather than a percentage makes budgeting stable and lets employees choose richer coverage at their own cost. Pairing a high-deductible plan with an employer <a href='hsa-guide.html'>HSA contribution</a> is often the best value per dollar spent, because the money is portable and visible to the employee.</p>" +
        "<h2>The compliance calendar you inherit</h2>" +
        "<ul><li>Summary of Benefits and Coverage distributed to every eligible employee.</li>" +
        "<li><a href='cobra-vs-marketplace.html'>COBRA</a> or state continuation notices on the required timeline.</li>" +
        "<li>Section 125 plan documents if premiums are paid pre-tax.</li>" +
        "<li>Non-discrimination testing where it applies.</li></ul>" +
        "<p>Payroll deductions and benefits administration have to actually connect to each other — the practical setup is covered by our sister brand on business finance operations.</p>",
      methodology: "<p>Cost ranges reflect published small-group rate filings and broker-reported renewals for teams of 5–50, collected in the first half of 2026. Actual pricing depends on state, industry, group age mix and plan design.</p>",
      faq: [
        { q: "Am I required to offer health coverage?", a: "<p>Small employers below the applicable full-time-equivalent threshold generally are not. Above it, the employer mandate applies — confirm your count with a broker or counsel.</p>" },
        { q: "Can I contribute different amounts to different people?", a: "<p>Only within permitted class rules. Arbitrary differences create discrimination problems. Get this reviewed before you set it.</p>" },
        { q: "Is a reimbursement arrangement cheaper?", a: "<p>Usually more predictable rather than automatically cheaper, because you cap your exposure at the allowance.</p>" }
      ],
      sources: [{ name: "Department of Labor — health plans and benefits compliance", url: "https://www.dol.gov/general/topic/health-plans" }],
      related: ["small-business-health-insurance-cost", "cobra-vs-marketplace", "best-hsa-providers"],
      crossRefs: [{ slug: "ledgerlift", page: "index", label: "Running payroll and benefits deductions cleanly", why: "Benefits only work when payroll actually withholds and remits them correctly." }]
    },

    "hdhp-explained": {
      title: "High-deductible health plans explained",
      h1: "High-deductible plans, honestly assessed",
      section: "Choosing a plan",
      eyebrow: "Explainer",
      dek: "What makes a plan HSA-qualified, when the deductible is worth the lower premium, and the cash-flow risk you must be able to absorb.",
      answer: "An HDHP trades a higher deductible for a materially lower premium and makes you <strong>HSA-eligible</strong>. It wins whenever premium savings plus the HSA tax benefit exceed the extra out-of-pocket exposure — which, for most healthy households, is most years. It fails if you cannot cover the deductible in cash.",
      body:
        "<h2>What makes it qualified</h2>" +
        "<p>The IRS sets annual minimum deductibles and maximum out-of-pocket limits that a plan must meet to be HSA-qualified. Your plan documents will state whether the plan qualifies — do not infer it from the deductible being large, because plenty of high-deductible plans are not qualified.</p>" +
        "<!--AD-->" +
        "<h2>The arithmetic that decides it</h2>" +
        "<p>Take the annual premium difference against the low-deductible plan. Add the tax saving on your intended <a href='hsa-guide.html'>HSA contribution</a>. Compare that total against the extra deductible exposure. Run it at expected usage and at worst case — model both in the <a href='hsa-tax-calculator.html'>calculator</a>.</p>" +
        "<!--FIG:Premium saving plus HSA tax benefit against extra deductible exposure-->" +
        "<h2>Preventive care is still covered</h2>" +
        "<p>Qualified plans cover preventive services before the deductible: annual visits, screenings, immunisations, and often chronic-condition medications under expanded preventive rules. The deductible does not stand between you and a check-up.</p>" +
        "<h2>When an HDHP is the wrong answer</h2>" +
        "<ul><li>You cannot cover the full deductible from savings today.</li>" +
        "<li>You have a known high-cost year ahead — surgery, a birth, ongoing specialist care.</li>" +
        "<li>A costly maintenance prescription sits on a poor tier.</li>" +
        "<li>You would not actually fund the HSA, which removes most of the advantage.</li></ul>",
      faq: [
        { q: "Do I have to open an HSA?", a: "<p>No, but skipping it forfeits the main reason to accept the deductible.</p>" },
        { q: "Does the deductible reset annually?", a: "<p>Yes, on the plan year. Timing elective care around that reset is legitimate and worth doing.</p>" }
      ],
      sources: [{ name: "IRS Publication 969 — HDHP requirements", url: "https://www.irs.gov/publications/p969" }],
      related: ["hsa-guide", "deductible-guide", "health-insurance-guide"]
    },

    "deductible-guide": {
      title: "Deductibles, coinsurance and out-of-pocket maximums",
      h1: "How the cost-sharing actually works",
      section: "Choosing a plan",
      eyebrow: "Explainer",
      dek: "The order in which you pay, what counts toward each limit, how family deductibles differ, and why the out-of-pocket maximum is the number that matters.",
      answer: "You pay the <strong>deductible</strong> first, then <strong>coinsurance</strong> as a share of costs, until you reach the <strong>out-of-pocket maximum</strong> — after which in-network covered care costs you nothing more that year. Copays and the deductible count toward that maximum; premiums never do.",
      body:
        "<h2>The sequence</h2>" +
        "<ol><li><strong>Preventive care</strong> — typically covered before anything, at no cost to you.</li>" +
        "<li><strong>Deductible</strong> — you pay the negotiated rate until it is met.</li>" +
        "<li><strong>Coinsurance</strong> — you pay a percentage, the plan pays the rest.</li>" +
        "<li><strong>Out-of-pocket maximum reached</strong> — the plan pays 100% of in-network covered care.</li></ol>" +
        "<!--FIG:One year of spending moving through deductible, coinsurance and the out-of-pocket cap-->" +
        "<!--AD-->" +
        "<h2>What does not count</h2>" +
        "<ul><li>Premiums, always.</li>" +
        "<li>Out-of-network charges on many plans, or they count to a separate, higher limit.</li>" +
        "<li>Non-covered services entirely.</li>" +
        "<li>Balance billing above the allowed amount, where it is still permitted.</li></ul>" +
        "<h2>Family deductibles are two structures</h2>" +
        "<p>Some plans use an aggregate family deductible that any combination of members can satisfy; others require each member to meet an individual amount within a family cap. On a high-usage year for one family member, that difference can be thousands of dollars. Check which structure applies before comparing plans in the <a href='health-insurance-guide.html'>plan guide</a>.</p>" +
        "<h2>Use it to your advantage</h2>" +
        "<p>If you have already met the deductible, finish deferred care before the plan year resets. If you have met the out-of-pocket maximum, in-network care is effectively free until the reset — the single most valuable piece of benefits timing available to anyone.</p>",
      edge: {
        intro: "Cost-sharing explainers are written by insurers, brokers and health systems, and they all teach the same clean sequence: deductible, then coinsurance, then the out-of-pocket maximum protects you. The sequence is correct and it is not what a real bill follows, because it assumes one deductible, one accumulator and one plan year. In practice a household is usually running several accumulators at once, on calendars that do not align, and the out-of-pocket maximum is subject to a defined exception that plans are permitted to use. Every unexpected bill we see traces to one of those.",
        gaps: [
          {
            claim: "&lsquo;You pay the deductible, then coinsurance, until the out-of-pocket maximum \u2014 then covered in-network care is free.&rsquo;",
            problem: "The word covered is doing enormous work and the explainers do not unpack it. Only essential health benefits are required to accumulate toward the annual limitation on cost sharing, so a plan may lawfully exclude non-essential benefits from your out-of-pocket maximum \u2014 and adult dental, vision, and certain other categories commonly sit outside it, which is why people reach their maximum and keep receiving bills. Prescriptions are the bigger trap because plans are permitted to maintain a separate pharmacy accumulator: a household can be told it has met the maximum while the drug tier it depends on continues charging, and specialty-tier coinsurance can be a percentage of a very large number. Balance billing sits in the same gap: charges above the allowed amount are not cost sharing and so do not accumulate at all, although federal protections now bar the practice for emergency care and for out-of-network clinicians at in-network facilities.",
            ours: "We name what the annual limitation covers and what it may exclude, check for a separate pharmacy accumulator by plan, and separate balance billing from cost sharing including where it is now prohibited."
          },
          {
            claim: "Family deductibles come in two structures \u2014 aggregate, or individual amounts within a family cap.",
            problem: "Correct, and the more consequential rule is the one nobody states: whatever the family structure, no single individual in a family plan may be required to pay more than the individual annual limitation on cost sharing. That embedded individual maximum applies even inside a family-only cap, which means a household with one seriously ill member is protected at the individual figure and not at the family figure \u2014 the difference is frequently thousands of dollars, and it is the single most valuable thing a family can know when one person's care dominates the year. Two further asymmetries get omitted. Family high-deductible plans have their own aggregate rule that interacts with health savings account eligibility, so a plan can be family-aggregate for the deductible while HSA rules treat it differently. And embedded structures create a real strategy: concentrating one member's elective care in a single year rather than spreading it across two can be materially cheaper.",
            ours: "We state the embedded individual maximum that applies inside any family plan, and use it to time concentrated care for one member rather than spreading it across plan years."
          },
          {
            claim: "&lsquo;Everything resets at the start of the plan year \u2014 so finish deferred care before the reset.&rsquo;",
            problem: "Good advice built on an assumption that is often false: the plan year and the calendar year are frequently different, and deductibles, out-of-pocket maximums, pharmacy accumulators and flexible spending accounts can each run on their own clock. A plan renewing mid-year while the FSA runs to December means the optimal timing for a procedure is not the one everyone assumes. Changing employers mid-year is the sharper version \u2014 accumulators generally do not transfer, so a person who had nearly met a maximum can restart at zero, and continuation coverage sometimes preserves the accumulator while a new employer's plan does not. There is also a timing mechanic no explainer mentions: accumulators credit when the claim is processed, not when care is received, so care delivered in the final days of a plan year may land in the next one. If you are relying on the reset, the date of service is not the date that counts.",
            ours: "We check the plan year against the calendar year and against the FSA year separately, flag accumulator loss on a job change, and time end-of-year care by claim processing rather than by date of service."
          },
          {
            claim: "Preventive care is covered before the deductible, at no cost to you.",
            problem: "True as a rule with an exception that generates a great many surprise bills, and the mechanism is billing codes rather than medicine. Preventive services are cost-share-free when delivered in network and billed as preventive; if the visit's purpose is coded as diagnostic \u2014 because you mentioned a symptom, or because a screening found something and became an investigation in the same session \u2014 the same procedure becomes subject to the deductible. The classic case is a screening colonoscopy during which a polyp is removed, though pathology and anaesthesia billed by separate entities can land differently from the procedure itself. Two further points: an in-network facility does not guarantee an in-network clinician for every component of the visit, and grandfathered plans are not subject to the preventive requirement at all. The actionable version of this advice is therefore about how the encounter is coded, which is a question you can ask before it happens.",
            ours: "We explain the preventive-to-diagnostic coding switch and the separately-billed components, so the question is asked before the appointment rather than disputed after the bill."
          }
        ],
        only: [
          "What the annual limitation on cost sharing must include versus what plans may exclude — plus separate pharmacy accumulators that keep charging after 'the maximum'.",
          "The embedded individual maximum inside a family plan, and using it to concentrate one member's care in a single year.",
          "Plan year, calendar year and FSA year as three separate clocks — with accumulators lost on a job change.",
          "Accumulators credit on claim processing, not date of service, so end-of-year timing can miss.",
          "The preventive-to-diagnostic coding switch, separately billed anaesthesia and pathology, and plans not subject to the preventive rule."
        ]
      },
      faq: [
        { q: "Do copays count toward the deductible?", a: "<p>Often not, though they usually count toward the out-of-pocket maximum. Plan documents govern.</p>" },
        { q: "Why did I get a bill after meeting my maximum?", a: "<p>Usually one of four things: an out-of-network provider, a non-covered service, a benefit category the plan is not required to accumulate, or a separate pharmacy accumulator that has its own limit.</p>" },
        { q: "One family member is seriously ill. Are we exposed to the whole family maximum?", a: "<p>No. No single individual on a family plan can be required to pay more than the individual annual limitation on cost sharing, even where the plan uses a family cap. Ask the plan to confirm the embedded individual figure in writing.</p>" },
        { q: "My screening became a diagnostic procedure. Can they charge me?", a: "<p>Generally yes, if the encounter is coded diagnostically — the preventive protection follows the billing code rather than your intention. Ask how a finding during screening will be coded before the appointment.</p>" }
      ],
      sources: [
        { name: "45 CFR § 156.130 — annual limitation on cost sharing", url: "https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-B/part-156/subpart-B/section-156.130", note: "What must accumulate, and the embedded individual maximum within family coverage" },
        { name: "HealthCare.gov — out-of-pocket maximum and preventive services", url: "https://www.healthcare.gov/glossary/out-of-pocket-maximum-limit/", note: "Scope of the limit and what sits outside it" },
        { name: "CMS — No Surprises Act protections against balance billing", url: "https://www.cms.gov/nosurprises", note: "Where balance billing is prohibited for emergency and in-facility out-of-network care" }
      ],
      related: ["health-insurance-guide", "hdhp-explained", "prescription-savings"]
    },

    "fsa-vs-hsa": {
      title: "FSA versus HSA: which account, and can you have both?",
      h1: "FSA or HSA, decided",
      section: "HSAs & FSAs",
      eyebrow: "Explainer",
      dek: "Ownership, rollover, eligibility, the use-it-or-lose-it rule, and the limited-purpose FSA that legitimately pairs with an HSA.",
      answer: "An <strong>HSA is yours forever, rolls over and can be invested</strong>, but requires a qualified high-deductible plan. An <strong>FSA is your employer's plan, largely use-it-or-lose-it</strong>, and works with any plan design. A general-purpose health FSA blocks HSA eligibility; a limited-purpose FSA for dental and vision does not.",
      body:
        "<h2>The differences that matter</h2>" +
        "<ul><li><strong>Ownership</strong> — HSA is yours and portable; an FSA generally ends with the job.</li>" +
        "<li><strong>Rollover</strong> — HSA balances carry forever; FSA funds are forfeited beyond a small permitted carryover or grace period.</li>" +
        "<li><strong>Investing</strong> — HSAs invest; FSAs do not.</li>" +
        "<li><strong>Access</strong> — an FSA gives you the full annual election on day one; an HSA only holds what you have contributed.</li></ul>" +
        "<!--AD-->" +
        "<h2>Having both, legitimately</h2>" +
        "<p>A general-purpose health FSA is disqualifying coverage that makes you HSA-ineligible — including, at some employers, a spouse's FSA. A <strong>limited-purpose FSA</strong> restricted to dental and vision is compatible, and pairing one with an HSA lets you cover predictable dental work pre-tax while leaving the HSA invested.</p>" +
        "<!--FIG:HSA and limited-purpose FSA running side by side across one plan year-->" +
        "<h2>Electing an FSA without losing money</h2>" +
        "<p>Elect only what you can confidently name in advance: known prescriptions, planned dental work, contact lenses, expected copays. Confirm your employer's carryover and grace-period rules, because they differ and they are the difference between a small carryover and a forfeiture.</p>" +
        "<h2>Dependent care is separate</h2>" +
        "<p>The dependent care FSA is a different account with its own limit and no relationship to HSA eligibility — see <a href='dependent-care-fsa.html'>dependent care FSAs</a>.</p>",
      faq: [
        { q: "Can I switch from FSA to HSA mid-year?", a: "<p>Rarely without a qualifying event, and FSA coverage through a grace period can delay HSA eligibility. Time it at open enrollment.</p>" },
        { q: "What happens to unused FSA money?", a: "<p>It reverts to the employer beyond any permitted carryover or grace period.</p>" }
      ],
      sources: [{ name: "IRS Publication 969 — FSAs and HSAs", url: "https://www.irs.gov/publications/p969" }],
      related: ["hsa-guide", "dependent-care-fsa", "open-enrollment-guide"]
    },

    "hsa-investing": {
      title: "Investing an HSA for the long term",
      h1: "Investing an HSA, not just parking it",
      section: "HSAs & FSAs",
      eyebrow: "Explainer",
      dek: "Cash thresholds, fund menus and fees, the receipt-shoebox strategy, and how an HSA behaves after 65.",
      answer: "Keep a cash buffer roughly equal to your deductible, then invest the rest. Because qualified withdrawals are never taxed and there is <strong>no deadline to reimburse yourself</strong>, an HSA invested for decades is the most tax-efficient account available to most households.",
      body:
        "<h2>How much to leave in cash</h2>" +
        "<p>Roughly one deductible, so an unexpected year does not force selling investments. Above that, cash is a slow leak: a decade of uninvested balance costs far more than any custodian fee.</p>" +
        "<!--FIG:Invested against cash-held HSA balances over twenty years-->" +
        "<h2>Fees and fund menus</h2>" +
        "<ul><li>Monthly maintenance fees, and whether a balance threshold waives them.</li>" +
        "<li>Investment access fees layered on top of fund expenses.</li>" +
        "<li>Whether the menu includes broad low-cost index funds.</li>" +
        "<li>Transfer-out fees, since you may leave. Compare in <a href='best-hsa-providers.html'>HSA provider types</a>.</li></ul>" +
        "<!--AD-->" +
        "<h2>The receipt strategy</h2>" +
        "<p>Pay current medical costs from ordinary savings, keep every receipt, and let the HSA compound. Years later you can reimburse those documented expenses tax-free — effectively a tax-free withdrawal at a time of your choosing. Keep records digitally and permanently; substantiation is your job.</p>" +
        "<h2>After 65</h2>" +
        "<p>Qualified medical withdrawals remain tax-free. Non-medical withdrawals become taxable income without the penalty, so the account behaves like a traditional IRA at worst and a Roth at best. Medicare premiums are qualified; enrolling in Medicare stops further contributions.</p>",
      faq: [
        { q: "Is an HSA better than a 401(k)?", a: "<p>Capture the full employer match first. After that, the HSA is usually the most efficient next dollar because of the untaxed withdrawal.</p>" },
        { q: "Can I move my HSA?", a: "<p>Yes, by trustee-to-trustee transfer, as often as you like. Check the outbound fee.</p>" }
      ],
      sources: [{ name: "IRS Publication 969 — distributions and after age 65", url: "https://www.irs.gov/publications/p969" }],
      related: ["hsa-guide", "best-hsa-providers", "hsa-tax-calculator"]
    },

    "dependent-care-fsa": {
      title: "Dependent care FSA: how it works and who benefits",
      h1: "The dependent care FSA",
      section: "HSAs & FSAs",
      eyebrow: "Explainer",
      dek: "Eligible expenses, the annual limit, how it interacts with the child care tax credit, and the forfeiture trap when care arrangements change.",
      answer: "A dependent care FSA lets you pay childcare or eligible adult care costs with pre-tax salary, saving income and payroll tax. It is <strong>use-it-or-lose-it with no carryover</strong>, and it interacts with the child and dependent care tax credit — so elect only what you are certain to spend.",
      body:
        "<h2>What qualifies</h2>" +
        "<ul><li>Day care, preschool, before and after-school care, and day camps.</li>" +
        "<li>In-home care while you work, including a nanny paid properly.</li>" +
        "<li>Adult day care for a qualifying dependent.</li>" +
        "<li>Not overnight camps, school tuition for kindergarten and above, or care while you are not working.</li></ul>" +
        "<!--AD-->" +
        "<h2>The credit interaction</h2>" +
        "<p>You cannot claim the same expenses for both the FSA and the child and dependent care credit. For most middle and higher earners the FSA wins on payroll tax alone, but at lower incomes the credit can be worth more. This is a genuine per-household calculation — take it to a tax professional rather than a rule of thumb.</p>" +
        "<!--FIG:Pre-tax FSA saving against the dependent care credit across income levels-->" +
        "<h2>The forfeiture trap</h2>" +
        "<p>Care arrangements change: a grandparent steps in, a child starts school, a job goes remote. Dependent care FSA elections can generally only change with a qualifying event, and unspent money is forfeited. Elect the amount you would still spend in a disrupted year, not your optimistic maximum.</p>" +
        "<h2>Getting reimbursed</h2>" +
        "<p>Most plans reimburse only care already provided, and require the provider's tax identification number. Set the claim routine up in January rather than discovering the paperwork in December.</p>",
      faq: [
        { q: "Can both spouses have one?", a: "<p>The household limit applies jointly, so two full elections create an excess. Coordinate before enrolling.</p>" },
        { q: "Does it affect HSA eligibility?", a: "<p>No. Dependent care FSAs are not health coverage and do not disqualify you.</p>" }
      ],
      related: ["fsa-vs-hsa", "open-enrollment-guide", "hsa-guide"]
    },

    "cobra-vs-marketplace": {
      title: "COBRA versus marketplace coverage after leaving a job",
      h1: "Coverage between jobs, costed",
      section: "Costs & gaps",
      eyebrow: "Explainer",
      dek: "What COBRA really costs once the employer subsidy stops, the special enrollment period you get instead, and the deductible-reset factor everyone forgets.",
      disclosure: true,
      answer: "COBRA keeps your exact plan, network and <strong>accumulated deductible</strong>, but you now pay the full premium plus an administrative fee — often three to five times your old payslip deduction. A marketplace plan with a subsidy is usually far cheaper, and losing job coverage opens a special enrollment period. Compare both before the election deadline.",
      body:
        "<h2>Why COBRA feels like a price rise</h2>" +
        "<p>Your employer was paying most of the premium. COBRA is the same plan at its true cost plus up to a 2% administrative charge. Nothing about the coverage got worse; the subsidy simply stopped.</p>" +
        "<!--FIG:Payslip deduction, full COBRA premium and a subsidised marketplace plan side by side-->" +
        "<h2>When COBRA is genuinely the right choice</h2>" +
        "<ul><li>You have already met most of your deductible or out-of-pocket maximum this year.</li>" +
        "<li>You are mid-treatment with in-network specialists you cannot interrupt.</li>" +
        "<li>The gap is short and a new employer's plan starts within weeks.</li>" +
        "<li>No marketplace plan includes the providers you need.</li></ul>" +
        "<!--AD-->" +
        "<h2>The marketplace alternative</h2>" +
        "<p>Loss of employer coverage triggers a special enrollment period — commonly 60 days — and subsidies depend on your <em>expected</em> income for the year, which is often much lower after a job ends. Many people who assume they earn too much to qualify do qualify once income is annualised correctly.</p>" +
        "<h2>The deductible reset nobody mentions</h2>" +
        "<p>Switching plans mid-year restarts your deductible and out-of-pocket accumulation at zero. If you have already spent heavily, that reset can outweigh a large premium saving. Add it explicitly to the comparison; the method is in the <a href='health-insurance-guide.html'>plan guide</a>.</p>" +
        "<h2>Watch the clock</h2>" +
        "<p>COBRA election windows and marketplace special enrollment periods both expire, and retroactive COBRA election can be strategic if you are healthy and the deadline has not passed. Understand your specific dates the week the job ends.</p>",
      faq: [
        { q: "Can I drop COBRA later for a marketplace plan?", a: "<p>Voluntarily dropping COBRA does not itself create a special enrollment period. Exhausting it does. Sequence matters.</p>" },
        { q: "How long does COBRA last?", a: "<p>Commonly 18 months, longer in certain circumstances. Your notice states your period.</p>" }
      ],
      sources: [{ name: "Department of Labor — COBRA continuation coverage", url: "https://www.dol.gov/general/topic/health-plans/cobra" }],
      related: ["health-insurance-cost", "health-insurance-guide", "small-group-benefits-guide"]
    },

    "prescription-savings": {
      title: "Cutting prescription costs legitimately",
      h1: "Paying less for prescriptions",
      section: "Costs & gaps",
      eyebrow: "Explainer",
      dek: "Formulary tiers, therapeutic alternatives, cash-price comparison, 90-day fills, and when paying outside insurance is cheaper.",
      answer: "Check your plan's <strong>formulary tier</strong> first, ask your prescriber about a therapeutic alternative on a lower tier, then compare the plan price against the cash or discount-card price — for many generics the cash price is lower than the copay.",
      body:
        "<h2>Understand the tiers</h2>" +
        "<p>Formularies sort drugs into tiers, from preferred generics to non-preferred brands and specialty. The same medication can sit on different tiers across two plans at the same employer, which is why formulary checks belong in every <a href='open-enrollment-guide.html'>open enrollment</a>.</p>" +
        "<!--AD-->" +
        "<h2>The five things that actually reduce the bill</h2>" +
        "<ol><li><strong>Ask for a therapeutic alternative</strong> on a lower tier — often clinically equivalent.</li>" +
        "<li><strong>Compare the cash price</strong> at several pharmacies; for common generics it frequently beats the copay.</li>" +
        "<li><strong>Move to 90-day fills</strong> where the plan discounts them.</li>" +
        "<li><strong>Request a formulary exception</strong> with your prescriber's clinical support when no alternative works.</li>" +
        "<li><strong>Check manufacturer assistance</strong> for specialty drugs, reading the coupon rules carefully.</li></ol>" +
        "<!--FIG:One maintenance drug priced four ways across a plan year-->" +
        "<h2>When paying outside insurance is smarter</h2>" +
        "<p>If the cash price is lower than your copay, pay cash — but note that spending usually will not count toward your deductible unless you submit it, and some plans will not accept it at all. On a high-deductible plan working toward the deductible, that trade-off deserves a moment's arithmetic.</p>" +
        "<h2>HSA and FSA both cover prescriptions</h2>" +
        "<p>Prescription costs are qualified expenses for both accounts, so the effective price falls by your marginal tax rate — see the <a href='hsa-tax-calculator.html'>calculator</a> for what that is worth.</p>",
      faq: [
        { q: "Are discount cards worth using?", a: "<p>Sometimes materially, mostly on generics. Compare each fill rather than assuming.</p>" },
        { q: "Can my plan move a drug mid-year?", a: "<p>Yes, formularies change during the plan year. Notice requirements vary by plan and state.</p>" }
      ],
      related: ["deductible-guide", "health-insurance-guide", "hsa-guide"]
    },

    "health-insurance-cost": {
      title: "Health insurance costs 2026: what coverage actually costs",
      h1: "What health insurance costs in 2026",
      section: "Costs",
      eyebrow: "High-intent cost guide",
      dek: "Premiums by plan type and household, employer versus marketplace pricing, subsidy thresholds, and the total-cost figure that beats premium comparison.",
      disclosure: true,
      answer: "In 2026 a single adult typically pays <strong>$120–$210 a month</strong> for employer coverage and <strong>$430–$620 before subsidies</strong> on the marketplace. But total annual cost — premium plus expected out-of-pocket — is the number that decides which plan is cheapest, and it frequently reverses the premium ranking.",
      table: {
        caption: "Indicative 2026 monthly premiums and modelled total annual cost, single adult, moderate usage.",
        headers: ["Coverage route", "Monthly premium", "Deductible", "Total annual cost (moderate use)", "Best for"],
        rows: [
          { best: true, cells: ["<strong>Employer HDHP + HSA</strong>", "$118", "$3,200", "≈ $3,950 after tax benefit", "Healthy, can fund the HSA"] },
          { cells: ["Employer PPO", "$206", "$1,000", "≈ $4,520", "Frequent specialist care"] },
          { cells: ["Marketplace silver, subsidised", "$180", "$4,400", "≈ $5,100", "No employer coverage"] },
          { cells: ["Marketplace silver, unsubsidised", "$528", "$4,400", "≈ $9,240", "Income above subsidy range"] },
          { cells: ["Marketplace bronze, unsubsidised", "$412", "$7,300", "≈ $9,650", "Catastrophic protection only"] }
        ],
        note: "Illustrative figures compiled from 2026 employer contribution surveys and published marketplace rate filings, assuming moderate usage of about $2,600 in billed in-network care. Your premium depends on age, location, household and plan year."
      },
      body:
        "<h2>Why premium comparison misleads</h2>" +
        "<p>Premium is certain; out-of-pocket cost is probable. Ranking plans on premium alone ignores the deductible you will likely spend and the tax benefit an <a href='hsa-guide.html'>HSA</a> attaches to one of the options. Once both are included, the cheapest premium is often not the cheapest plan — and sometimes it still is, by more than people expect.</p>" +
        "<!--AD-->" +
        "<h2>What moves your own number</h2>" +
        "<ol><li><strong>Age and location</strong> — the dominant factors in individual market pricing.</li>" +
        "<li><strong>Household size</strong> — family tiers rarely scale proportionally.</li>" +
        "<li><strong>Expected income</strong> — subsidies are calculated on projected annual income, and estimating it badly causes a reconciliation surprise at tax time.</li>" +
        "<li><strong>Plan metal level</strong> — bronze through platinum shifts cost between premium and out-of-pocket.</li>" +
        "<li><strong>Employer contribution</strong> — usually the single largest variable, and entirely outside your control.</li></ol>" +
        "<!--FIG:Where a low-premium and a low-deductible plan cross over as usage rises-->" +
        "<h2>Reducing it legitimately</h2>" +
        "<ul><li>Model total cost, not premium, using last year's actual spending.</li>" +
        "<li>Fund an HSA if you take a qualified plan — see <a href='hdhp-explained.html'>HDHPs</a>.</li>" +
        "<li>Estimate marketplace income carefully and update it when it changes.</li>" +
        "<li>Check whether a spouse's plan is cheaper for dependants than your own.</li>" +
        "<li>Time elective care around the deductible reset.</li></ul>",
      edge: {
        intro: "Coverage of this query splits between insurance brokers, who quote premiums because premiums are what they sell, and news summaries of employer surveys, which report national averages. Both produce a number that is accurate as a statistic and unusable as a personal figure — and both stop at the premium, which is the smaller half of what health coverage costs a household that uses it.",
        gaps: [
          {
            claim: "\"The average premium is $X — here is what health insurance costs.\"",
            problem: "An average across the whole market is not a benchmark for any individual, because individual-market premiums are rated on age and geography and legitimately vary by a factor of three between a 24-year-old and a 63-year-old in the same plan. Quoting the mean makes the young overpay attention to it and the older reader conclude the market is broken. The deeper problem is what a premium excludes: the deductible, coinsurance and out-of-pocket maximum you will spend if you actually use care. Premium is a <em>certain</em> cost and out-of-pocket is a <em>probable</em> one, and adding an expected value for the second frequently reverses the ranking a premium comparison produces — which is precisely why a premium-based comparison is the wrong instrument, not merely an incomplete one.",
            ours: "We model total annual cost — premium plus expected out-of-pocket at a stated usage level — and show the case where the cheaper premium is the more expensive plan."
          },
          {
            claim: "Bronze plans are the cheap option; buy up to silver or gold if you can afford it.",
            problem: "This treats the metal levels as a simple price ladder and misses the single largest subsidy mechanism available to lower-income households. Cost-sharing reductions — which cut the deductible and out-of-pocket maximum, sometimes dramatically — are attached <em>only</em> to silver plans, and only below an income threshold. An eligible household choosing bronze to save on premium forfeits a benefit worth far more than the premium difference, and no amount of comparing deductibles across metal levels reveals this, because the enhanced silver deductible is not the published silver deductible. It is the most consequential eligibility rule in the individual market and it is almost never stated in a cost comparison.",
            ours: "We flag the silver-only cost-sharing reduction as an eligibility check to perform <em>before</em> comparing metal levels, because for eligible households it dominates every other consideration."
          },
          {
            claim: "Estimate your income for the subsidy and pick a plan — the subsidy handles affordability.",
            problem: "Two mechanisms turn an innocent estimate into a bill, and neither appears in the cost tables. The premium tax credit is advanced monthly on your <em>projected</em> annual income and reconciled on the tax return, so income that rises during the year — a bonus, a good quarter for a self-employed household, a capital gain — produces repayment of credit already spent, at a moment when the money is gone. And eligibility is determined on a household income measure that includes items people do not think of as income, while being reduced by deductions such as pre-tax retirement contributions — which means the estimate is a figure you have some legitimate control over, and almost nobody is told that. The advice to &lsquo;estimate carefully&rsquo; is given without either the repayment mechanism or the levers.",
            ours: "We name the reconciliation exposure explicitly, say to update the marketplace mid-year when income moves, and identify the deductions that legitimately affect the income figure the subsidy is calculated on."
          },
          {
            claim: "Comparison tables rank plans on premium, deductible and out-of-pocket maximum.",
            problem: "Those three numbers are comparable across plans; the terms that actually determine your bill are not in them. Whether your doctors and hospital are in network — and networks narrow between plan years without the premium moving — decides whether care is covered at all, and out-of-network spending typically does not count toward the out-of-pocket maximum, so the cap you compared does not cap it. Whether your prescriptions are on the formulary, and on which tier, can swing annual cost by thousands with no change to any headline figure. And a family deductible may be embedded per member or aggregate, which changes the arithmetic entirely for a household with one high-cost member. These are plan-document questions, so they are omitted from every table — including, honestly, the summary table above, which is why we say to check them against the actual plan.",
            ours: "We put network, formulary tier and family-deductible structure ahead of the three comparable numbers, and state that out-of-network spend usually sits outside the out-of-pocket maximum you compared."
          }
        ],
        only: [
          "Total annual cost modelled at a stated usage level — including the case where the cheaper premium is the dearer plan.",
          "The silver-only cost-sharing reduction as a check to run before comparing metal levels at all.",
          "Subsidy reconciliation exposure, plus the deductions that legitimately move the income figure it is calculated on.",
          "Why the out-of-pocket maximum you compared does not cap out-of-network spending.",
          "Formulary tier and embedded-versus-aggregate family deductibles, which no comparison table carries."
        ]
      },
      leadForm: {
        title: "Get a plan cost comparison",
        sub: "Tell us your household, state and expected usage; we point you to licensed brokers and marketplace resources, and send the total-cost worksheet either way.",
        offer: "health-plan-cost-comparison",
        numberLabel: "Household members needing coverage",
        consent: "I consent to being contacted about health coverage options. BenefitWell may be paid a referral fee. We are not an insurance agency and cannot bind coverage.",
        cta: "Compare my real cost",
        steps: ["We match your household against routes you are actually eligible for.", "You are told who will contact you before anything is shared.", "Plans are compared on total annual cost, not premium.", "You get the total-cost worksheet regardless."],
        privacy: "Stored: name, email, household size, notes. Never sold. No health information requested."
      },
      faq: [
        { q: "Why is family coverage so much more?", a: "<p>Employer contributions are usually far more generous for the employee tier than for dependants. Price dependants on both spouses' plans separately.</p>" },
        { q: "What if my income changes mid-year?", a: "<p>Update the marketplace immediately. Subsidies reconcile on your tax return, and an unreported rise becomes a bill.</p>" }
      ],
      sources: [
        { name: "HealthCare.gov — how subsidies and income estimates work", url: "https://www.healthcare.gov/lower-costs/", note: "Cost-sharing reductions and the silver-plan eligibility rule" },
        { name: "IRS — premium tax credit", url: "https://www.irs.gov/affordable-care-act/individuals-and-families/the-premium-tax-credit", note: "Advance credit, income measure and reconciliation on the return" },
        { name: "HealthCare.gov — comparing plans and networks", url: "https://www.healthcare.gov/choose-a-plan/comparing-plans/", note: "Network, formulary and out-of-pocket maximum mechanics" }
      ],
      related: ["health-insurance-guide", "cobra-vs-marketplace", "hsa-tax-calculator"]
    },

    "small-business-health-insurance-cost": {
      title: "Small business health insurance costs 2026",
      h1: "What covering a small team costs",
      section: "Costs",
      eyebrow: "High-intent cost guide",
      dek: "Per-employee costs by team size and plan design, employer contribution norms, reimbursement allowances, and where the real savings sit.",
      disclosure: true,
      answer: "Expect <strong>$480–$780 per employee per month</strong> for a small-group plan in 2026, of which employers typically cover 70–80% of the employee-only premium. A defined reimbursement allowance caps your exposure instead, which is why cost-controlled small teams increasingly choose it.",
      table: {
        caption: "Indicative 2026 employer cost per employee per month, small-group and reimbursement routes.",
        headers: ["Approach", "Employer cost / employee / month", "Predictability", "Admin burden", "Best for"],
        rows: [
          { best: true, cells: ["<strong>Small-group HDHP + HSA seed</strong>", "$430 – $560", "Good", "Low", "Teams of 5–30 wanting value per dollar"] },
          { cells: ["Small-group PPO", "$620 – $780", "Moderate", "Low", "Teams expecting rich coverage"] },
          { cells: ["Reimbursement allowance", "You set it: $300 – $650", "High", "Moderate", "Distributed teams, tight budgets"] },
          { cells: ["No coverage, higher salary", "$0 direct", "High", "None", "Very small teams below the mandate"] }
        ],
        note: "Illustrative ranges from published small-group rate filings and broker-reported 2026 renewals for teams of 5–50. Pricing varies materially by state, industry and group age mix."
      },
      body:
        "<h2>What actually drives your quote</h2>" +
        "<ol><li><strong>Group age mix</strong> — the largest single factor in small-group rating.</li>" +
        "<li><strong>State and rating area</strong> — identical teams differ by 40% or more across states.</li>" +
        "<li><strong>Plan design</strong> — deductible and network breadth move premium more than anything you can negotiate.</li>" +
        "<li><strong>Participation rate</strong> — falling below the insurer's minimum risks non-renewal.</li>" +
        "<li><strong>Contribution strategy</strong> — a fixed dollar contribution stabilises your budget against renewal increases.</li></ol>" +
        "<!--AD-->" +
        "<h2>Where the savings genuinely are</h2>" +
        "<ul><li>Pairing a high-deductible plan with an employer <a href='hsa-guide.html'>HSA contribution</a>: cheaper premium, and the contribution is visible and portable to the employee.</li>" +
        "<li>Contributing a fixed amount rather than a percentage, so a 12% renewal does not automatically become your cost.</li>" +
        "<li>Quoting more than one carrier every single year, not only when the renewal looks bad.</li>" +
        "<li>Checking whether a reimbursement allowance beats a group plan for a distributed team.</li></ul>" +
        "<!--FIG:Three-year employer cost under a group plan against a fixed reimbursement allowance-->" +
        "<h2>The costs beyond premium</h2>" +
        "<p>Budget for benefits administration, payroll integration, required notices and, if you use one, a broker or adviser fee. These are modest against premium but they are real, and they are the part that gets forgotten in the first year. The structural choices are in the <a href='small-group-benefits-guide.html'>small-group guide</a>.</p>",
      edge: {
        intro: "This topic is written almost entirely by brokers and benefits-administration vendors, and both are paid on the group plan — brokers typically by commission calculated as a share of premium. That produces a consistent bias, not usually by misstatement but by omission: the alternative that caps the employer's exposure gets a paragraph, and the mechanism that makes a small-group renewal rise gets none.",
        gaps: [
          {
            claim: "\"Small business health insurance costs $X per employee — here are the average rates.\"",
            problem: "A national average per employee is close to meaningless for a specific small group, because small-group premiums are built from each member's age and the rating area, and family tiers are priced separately. Two five-person companies in different states with different age mixes can differ by more than half for identical plan designs. There is also a category error inside most of these figures: the quoted &lsquo;cost per employee&rsquo; usually reflects the employee-only tier, while the employer's actual bill depends on how many staff enrol dependants and what share of the dependant tier you cover — a decision, not a rate. So the published number and your invoice are computed from different inputs.",
            ours: "We say what drives the quote — age mix, rating area, plan design, participation — and separate the employee-only rate from the dependant-tier decision that actually sets the total."
          },
          {
            claim: "Employers should contribute a percentage of premium, typically 70–80%.",
            problem: "A percentage contribution silently transfers the entire renewal increase to the employer. If premiums rise at renewal and you cover eighty percent, your cost rises by eighty percent of the increase automatically, with no decision made and nothing to approve. A fixed dollar contribution caps your exposure and makes each year's increase an explicit choice — which is worse for the employee in a rising year and is at least a decision rather than an outcome. The percentage convention persists partly because it is administratively simpler and partly because broker commission is calculated on premium, so nobody advising you loses when the premium rises. Neither structure is universally right; presenting the percentage as the default without naming what it does is the failure.",
            ours: "We present fixed-dollar versus percentage contribution as the budget decision it is, and note that broker compensation is usually premium-linked so the incentive runs one way."
          },
          {
            claim: "The reimbursement-allowance route is listed as an alternative, then dropped.",
            problem: "For a small or distributed team it is frequently the better structure and it is under-covered because there is little commission in it. Under a qualifying arrangement an employer reimburses individual-market premiums up to a defined allowance: the exposure is capped at a number you set, it scales without a group renewal, and it works across states where a single group network does not. Two conditions are almost always omitted — an employee must hold qualifying individual coverage to be reimbursed, and offering the allowance interacts with that employee's premium tax credit, so for a subsidy-eligible low-income employee a poorly sized allowance can leave them worse off than no offer at all. That interaction is the whole substance of the decision and it appears in almost no comparison.",
            ours: "We model the allowance beside the group plan and state the subsidy interaction plainly, because a badly sized allowance can harm the employees it was meant to help."
          },
          {
            claim: "Shop the renewal when it looks bad, and switch carriers to save.",
            problem: "Reactive shopping is the expensive pattern, for a structural reason: quoting only in a bad year means you have no benchmark in a normal one, and you are negotiating from a position the carrier already knows. There are also three costs of switching that the &lsquo;just shop it&rsquo; advice omits — network disruption, which is the change employees experience as a benefit cut regardless of premium; deductible resets mid-plan-year for anyone already partway through; and participation minimums, where enrolment falling below the carrier's threshold puts the group at risk of non-renewal rather than merely a higher rate. The last is the one that catches employers who raise the employee contribution to save money and inadvertently drive enrolment below the floor.",
            ours: "We recommend quoting every year to hold a benchmark, and price the three switching costs — network disruption, mid-year deductible reset, participation minimum — that a premium comparison hides."
          }
        ],
        only: [
          "Employee-only rate separated from the dependant-tier decision that actually determines the employer bill.",
          "Fixed-dollar versus percentage contribution as an exposure decision — plus the premium-linked broker incentive behind the convention.",
          "The reimbursement allowance modelled properly, including the premium-tax-credit interaction that can leave staff worse off.",
          "Why quoting only in a bad renewal year removes your benchmark and your leverage.",
          "Three switching costs no premium comparison shows: network disruption, mid-year deductible reset, participation minimums."
        ]
      },
      leadForm: {
        title: "Get small-group quotes compared",
        sub: "Tell us team size, state and budget; we connect you with licensed small-group brokers and send the employer cost model either way.",
        offer: "small-group-quote-comparison",
        numberLabel: "Employees needing coverage",
        consent: "I consent to being contacted about small-group coverage. BenefitWell may be paid a referral fee. We are not an insurance agency and cannot bind coverage.",
        cta: "Compare team coverage costs",
        steps: ["We match your team profile to brokers licensed in your state.", "You are told who will contact you before anything is shared.", "Group and reimbursement routes are modelled side by side.", "You get the employer cost model regardless."],
        privacy: "Stored: name, email, company, employee count, notes. Never sold."
      },
      faq: [
        { q: "Can I offer coverage to some employees only?", a: "<p>Only along permitted class lines. Ad hoc selection creates discrimination exposure — get it reviewed.</p>" },
        { q: "Are there tax credits for small employers?", a: "<p>Narrow credits exist for very small, lower-wage groups meeting specific conditions. Confirm eligibility with your accountant.</p>" }
      ],
      sources: [
        { name: "IRS — small business health care tax credit", url: "https://www.irs.gov/affordable-care-act/employers", note: "Employer credit conditions and applicable large employer definitions" },
        { name: "HealthCare.gov — small business coverage (SHOP)", url: "https://www.healthcare.gov/small-businesses/", note: "Small-group rules, participation and contribution requirements" },
        { name: "IRS — health reimbursement arrangements guidance", url: "https://www.irs.gov/affordable-care-act/employer-health-care-arrangements", note: "Reimbursement arrangements and interaction with the premium tax credit" }
      ],
      related: ["small-group-benefits-guide", "best-hsa-providers", "health-insurance-cost"]
    },

    "hsa-provider-fees": {
      title: "HSA fees 2026: what custodians actually charge",
      h1: "HSA fees, and what they cost you",
      section: "Costs",
      eyebrow: "High-intent cost guide",
      dek: "Maintenance fees, investment access charges, fund expenses and transfer costs — modelled over twenty years so the small numbers stop looking small.",
      disclosure: true,
      answer: "Typical HSA custodians charge <strong>$0–$5 a month</strong> in maintenance fees plus <strong>0%–0.30% a year</strong> for investment access, on top of fund expenses. On a balance you intend to hold for decades, a $3 monthly fee plus a 0.25% wrap is worth thousands — and it is avoidable by transferring.",
      table: {
        caption: "Indicative HSA custodian fee structures and modelled 20-year cost on a growing balance, 2026.",
        headers: ["Custodian type", "Monthly fee", "Investment access", "Fund menu", "Modelled 20-year fee drag"],
        rows: [
          { best: true, cells: ["<strong>Low-cost independent custodian</strong>", "$0", "None", "Broad index funds", "≈ $1,100 (fund expenses only)"] },
          { cells: ["Employer-selected administrator", "$2.50 – $4.00", "0.00% – 0.10%", "Limited menu", "≈ $3,900"] },
          { cells: ["Bank or credit union HSA", "$0 – $3.00", "Often unavailable", "Cash only", "Opportunity cost, not fees"] },
          { cells: ["Brokerage-linked HSA", "$0 – $2.50", "0.00% – 0.30%", "Full brokerage", "≈ $2,400"] }
        ],
        note: "Illustrative structures from published 2026 fee schedules. Drag modelled on contributions rising to a $60,000 balance over 20 years at 6% growth; fund expenses assumed at 0.05%."
      },
      body:
        "<h2>The four charges to find before opening</h2>" +
        "<ol><li><strong>Monthly maintenance fee</strong>, and the balance threshold that waives it.</li>" +
        "<li><strong>Investment access fee</strong> — a percentage of invested assets, layered on top of fund expenses.</li>" +
        "<li><strong>Fund expense ratios</strong> in the actual available menu, not the custodian's best-case example.</li>" +
        "<li><strong>Transfer-out fee</strong>, because you will probably leave eventually.</li></ol>" +
        "<!--AD-->" +
        "<h2>Why small fees matter here specifically</h2>" +
        "<p>An HSA is the account you are most likely to hold untouched for thirty years, which makes it the account where percentage drag compounds hardest. The same 0.25% that is a rounding error on a two-year balance is a meaningful share of a retirement-scale one — see <a href='hsa-investing.html'>investing an HSA</a>.</p>" +
        "<!--FIG:Twenty years of balance growth at two fee levels-->" +
        "<h2>You are not stuck with your employer's choice</h2>" +
        "<p>Payroll contributions must flow through the employer's custodian to capture the payroll tax saving — but you can transfer the accumulated balance to a cheaper custodian periodically, as often as you like, by trustee-to-trustee transfer. Doing this annually keeps the payroll tax benefit and the low fees.</p>" +
        "<h2>What good looks like</h2>" +
        "<p>No maintenance fee at your balance, no separate investment access charge, broad index funds under 0.10%, and a transfer-out fee of zero. That combination exists, and the comparison is in <a href='best-hsa-providers.html'>HSA provider types</a>.</p>",
      edge: {
        intro: "Pages on this topic are mostly published by custodians or by affiliates paid per account opened, and they compare the one charge that is easiest to zero out — the monthly maintenance fee — while omitting the charges that actually determine what you keep. On an account many people hold for thirty years, that ordering is backwards.",
        gaps: [
          {
            claim: "\"No monthly fee — the best HSA is the one with no maintenance charge.\"",
            problem: "Maintenance fees are the smallest and most waivable layer, and advertising their absence conceals three others. An investment access charge is levied as a percentage of invested assets, sitting on top of the fund expense ratios you also pay; the fund menu may contain nothing cheap, so the published wrap understates the total; and some custodians require a minimum cash balance held outside the investments, which is an uninvested drag rather than a fee and appears on no schedule. A zero-maintenance account with a percentage wrap and a mandatory cash floor loses more over twenty years than a three-dollar-a-month account with broad index funds — and the fee comparison that ranked them said the opposite.",
            ours: "We enumerate four charges including the mandatory cash minimum as an implicit cost, and model the twenty-year drag rather than comparing monthly fees."
          },
          {
            claim: "\"Fees are only a few dollars a month — don't sweat the small stuff.\"",
            problem: "This is defensible advice on a chequing account and wrong on an HSA specifically, because of the holding period. The HSA is the account most likely to be left untouched for decades, which makes percentage drag compound against the largest balance you will ever hold in it, and the effect is back-loaded: the wrap costs almost nothing in year one and the most in the final years, which is exactly when the advice to ignore it has stopped being reviewed. Flat dollar fees behave in the opposite direction — painful on a small balance, trivial on a large one — so the two fee types are not interchangeable and which is worse depends on your balance and horizon. Nobody publishes that crossover.",
            ours: "We show the crossover between flat and percentage charges across balance and horizon, so the reader can see which structure is cheaper for their actual situation rather than in general."
          },
          {
            claim: "\"You're stuck with the HSA your employer chose.\"",
            problem: "Widely repeated and false in a way that matters, because it is half true. Payroll contributions must route through the employer's custodian to capture the payroll tax saving — that part is correct, and it is the reason the myth is credible. But the accumulated <em>balance</em> can be moved by trustee-to-trustee transfer to any custodian, which is not a distribution, is not taxable and is not subject to the once-per-year limit that applies to a rollover where you take receipt of the money yourself. So the optimal arrangement is one almost nobody describes: keep the employer custodian for incoming payroll, sweep the balance out periodically to a low-cost custodian, and capture both the payroll tax saving and the low fees. The distinction between a transfer and a rollover is the whole mechanism, and conflating them is what makes people believe they are trapped.",
            ours: "We spell out the sweep strategy and distinguish trustee-to-trustee transfer from a rollover, because the once-per-year limit applies only to the latter."
          },
          {
            claim: "Pick the lowest-fee custodian and you have optimised your HSA.",
            problem: "Fee minimisation is worth a fraction of what two other decisions are worth, and neither is a fee. First, whether the balance is invested at all: a large share of HSA money sits in cash earning nominal interest, so the opportunity cost of not investing dwarfs any custodian's charges — which means a bank HSA's real cost is usually invisible, appearing as forgone growth rather than on a schedule. Second, whether you pay current medical expenses from the account or from cash while keeping the receipts: qualified expenses have no deadline for reimbursement, so paying out of pocket and preserving the receipt lets the balance compound untouched and be drawn tax-free later. That single behaviour is worth more than every fee difference in the category combined, and it is absent from fee comparisons because it sells nothing.",
            ours: "We rank invest-or-hold-cash and the receipt-preservation strategy above custodian choice, and treat a cash-only HSA's cost as opportunity cost rather than fees."
          }
        ],
        only: [
          "Four charges including the mandatory cash minimum, modelled as twenty-year drag rather than compared monthly.",
          "The crossover between flat-dollar and percentage fee structures by balance and horizon.",
          "The sweep strategy, with trustee-to-trustee transfer distinguished from a rollover and its once-per-year limit.",
          "A cash-only HSA priced as opportunity cost — the charge that never appears on a fee schedule.",
          "Receipt preservation ranked above custodian choice, because no deadline applies to reimbursing a qualified expense."
        ]
      },
      leadForm: {
        title: "Get an HSA fee review",
        sub: "Send your current custodian and approximate balance; we return the modelled fee drag and whether transferring is worth the paperwork.",
        offer: "hsa-fee-review",
        numberLabel: "Approximate HSA balance (USD)",
        consent: "I consent to being contacted about HSA options. BenefitWell may be paid a referral fee. We are not a bank, custodian or tax adviser.",
        cta: "Review my HSA fees",
        steps: ["We model your fee drag over your actual remaining horizon.", "You are told who will contact you before anything is shared.", "Transfer mechanics and any exit fee are spelled out.", "You get the fee comparison worksheet regardless."],
        privacy: "Stored: name, email, balance range, notes. Never sold. No account credentials requested."
      },
      faq: [
        { q: "Does transferring trigger tax?", a: "<p>A trustee-to-trustee transfer is not a distribution and is not taxable. Avoid taking a cheque yourself where a rollover limit applies.</p>" },
        { q: "Should I keep the employer custodian at all?", a: "<p>Usually yes for incoming payroll contributions, then sweep the balance out. That captures both the payroll tax saving and lower fees.</p>" }
      ],
      sources: [
        { name: "IRS Publication 969 — HSA trustees and transfers", url: "https://www.irs.gov/publications/p969", note: "Transfers versus rollovers, and reimbursement of qualified expenses" },
        { name: "IRS — HSA contribution limits and qualified expenses", url: "https://www.irs.gov/publications/p969#en_US_2023_publink1000204025", note: "Qualified expense treatment and reimbursement timing" }
      ],
      related: ["best-hsa-providers", "hsa-investing", "hsa-tax-calculator"]
    },

    "best-hsa-providers": {
      title: "Best HSA providers 2026, scored against a published rubric",
      h1: "HSA provider types compared",
      section: "Comparisons",
      eyebrow: "Comparison · scored rubric",
      dek: "Custodian archetypes scored on fees, investment access, transfer friction, reimbursement mechanics and support quality.",
      disclosure: true,
      answer: "For a balance you intend to <strong>invest and hold</strong>, a low-cost independent custodian or a brokerage-linked HSA wins on fees and fund menu. For a balance you <strong>spend each year</strong>, your employer's administrator is usually fine and the payroll tax saving matters more than the fee.",
      table: {
        caption: "HSA custodian archetypes scored against the BenefitWell rubric, July 2026.",
        headers: ["Archetype", "Fees", "Investment access", "Transfer friction", "Best for"],
        rows: [
          { best: true, cells: ["<strong>Low-cost independent custodian</strong>", "Excellent", "Broad index funds", "Low", "Long-term investors"] },
          { cells: ["<strong>Brokerage-linked HSA</strong>", "Good", "Full brokerage", "Low", "Investors wanting one login"] },
          { cells: ["<strong>Employer administrator</strong>", "Moderate", "Limited menu", "Moderate", "Payroll contributions, annual spenders"] },
          { cells: ["<strong>Bank or credit union HSA</strong>", "Varies", "Often none", "Low", "Pure spending accounts"] }
        ],
        note: "Archetypes, not brands: HSA fee schedules and fund menus change often, and employer-linked options differ per employer. Score your own options against the rubric."
      },
      body:
        "<h2>How we scored</h2>" +
        "<p>We read published fee schedules and investment menus for each archetype, modelled twenty-year fee drag on an identical contribution pattern, and tested reimbursement and transfer processes against the six weighted criteria in our <a href='review-methodology.html'>methodology</a>, in June and July 2026.</p>" +
        "<!--AD-->" +
        "<h2>What separated them</h2>" +
        "<ul><li><strong>Investment access charges</strong> varied from nothing to 0.30% a year on identical funds.</li>" +
        "<li><strong>Cash thresholds</strong> before investing was permitted ranged from $0 to $2,000 — idle money by mandate.</li>" +
        "<li><strong>Transfer-out fees</strong> were disclosed upfront by fewer than half.</li>" +
        "<li><strong>Reimbursement speed</strong> and receipt storage quality differed enormously, which matters for the receipt strategy.</li></ul>" +
        "<h2>The two-account approach</h2>" +
        "<p>Most people should run both: payroll contributions into the employer custodian for the payroll tax saving, swept periodically into a low-cost custodian where the balance is invested. Detail in <a href='hsa-provider-fees.html'>HSA fees</a> and <a href='hsa-investing.html'>investing an HSA</a>.</p>",
      methodology: "<p>Scored against the rubric in our <a href='review-methodology.html'>review methodology</a> using published fee schedules and fund menus collected in June–July 2026, plus hands-on reimbursement and transfer testing. Affiliate relationships do not affect scoring or ordering.</p>",
      faq: [
        { q: "Why no named winner?", a: "<p>Because HSA fee schedules change frequently and your employer's option is fixed for payroll purposes. The archetype and the rubric survive longer than a brand ranking.</p>" },
        { q: "Can I have more than one HSA?", a: "<p>Yes. The annual contribution limit applies across all of them combined, not per account.</p>" }
      ],
      related: ["hsa-provider-fees", "hsa-investing", "hsa-guide"]
    },

    "hsa-tax-calculator": {
      title: "HSA tax savings calculator",
      h1: "HSA tax savings calculator",
      section: "Tools",
      eyebrow: "Free tool",
      dek: "What a contribution saves in income and payroll tax, what the balance becomes if invested, and how far ahead of a taxable account it ends up.",
      disclosure: true,
      toc: false,
      answer: "Enter your contribution, tax rates and horizon. The calculator returns this year's combined tax saving, the effective cost of contributing, the projected balance if invested, and how much more you keep than in an equivalent taxable account.",
      body:
        "<div id='calculator'></div>" +
        "<h2>Why the payroll tax line matters</h2>" +
        "<p>Contributions made through payroll deduction generally avoid Social Security and Medicare tax as well as income tax. That extra saving is unavailable if you contribute directly and claim the deduction on your return — which is why routing contributions through payroll is usually worth the small inconvenience.</p>" +
        "<h2>Why the invested balance is the real number</h2>" +
        "<p>The tax saving is immediate and pleasant. The larger benefit is decades of untaxed growth followed by untaxed qualified withdrawals — no other account offers both ends. Keep roughly one deductible in cash and invest the rest, as set out in <a href='hsa-investing.html'>investing an HSA</a>.</p>" +
        "<h2>What this model excludes</h2>" +
        "<ul><li>State tax treatment, which differs and in a few states does not follow federal rules.</li>" +
        "<li>Custodian fees — model those separately in <a href='hsa-provider-fees.html'>HSA fees</a>.</li>" +
        "<li>Employer contributions, which count toward the annual limit.</li>" +
        "<li>Any withdrawals along the way, which reduce the compounding balance.</li></ul>",
      calculator: {
        title: "HSA tax and growth model",
        sub: "This year's tax saving, the effective cost of contributing, and the invested balance at your horizon.",
        disclaimer: "An estimate for comparison, not tax advice. Contribution limits and state treatment change; confirm your own position with a tax professional.",
        fields: [
          { id: "contribution", label: "Annual contribution (USD)", type: "number", value: 4300, min: 0, max: 20000, step: 100 },
          { id: "marginal", label: "Federal marginal tax rate (%)", type: "number", value: 24, min: 0, max: 50, step: 1 },
          { id: "state", label: "State income tax rate (%)", type: "number", value: 5, min: 0, max: 15, step: 0.5, hint: "Enter 0 if your state has no income tax or does not follow federal HSA treatment." },
          { id: "payroll", label: "Contributed via payroll deduction?", type: "select", value: "yes", options: [{ value: "yes", label: "Yes — saves payroll tax too" }, { value: "no", label: "No — direct contribution" }] },
          { id: "years", label: "Years until you spend it", type: "number", value: 25, min: 1, max: 45, step: 1 },
          { id: "growth", label: "Assumed annual growth (%)", type: "number", value: 6, min: 0, max: 12, step: 0.5 }
        ],
        compute: function (v) {
          var m = window.MDN_UTIL.money;
          var incomeRate = (v.marginal + v.state) / 100;
          /* Payroll contributions also escape Social Security and Medicare tax. */
          var ficaRate = v.payroll === "yes" ? 0.0765 : 0;
          var annualSaving = v.contribution * (incomeRate + ficaRate);
          var effectiveCost = v.contribution - annualSaving;

          /* Invested HSA: contributions grow untaxed and come out untaxed. */
          var g = v.growth / 100;
          var hsaBal = 0;
          for (var y = 0; y < v.years; y++) {
            hsaBal = (hsaBal + v.contribution) * (1 + g);
          }

          /* Taxable comparison: after-tax contribution, growth taxed annually. */
          var taxableBal = 0;
          var netGrowth = g * (1 - incomeRate);
          for (var y2 = 0; y2 < v.years; y2++) {
            taxableBal = (taxableBal + effectiveCost) * (1 + netGrowth);
          }
          var advantage = hsaBal - taxableBal;

          return [
            { label: "Tax saved this year", value: m(annualSaving), hint: "Income tax at " + (incomeRate * 100).toFixed(1) + "%" + (ficaRate ? " plus payroll tax at 7.65%" : " (no payroll tax saving on direct contributions)") + "." },
            { label: "Effective cost of contributing", value: m(effectiveCost), hint: "You move " + m(v.contribution) + " into the account for this much of your take-home pay." },
            { label: "Balance after " + v.years + " years", value: m(hsaBal), hint: "Contributions of " + m(v.contribution * v.years) + " growing untaxed at " + v.growth + "%." },
            { label: "Equivalent taxable account", value: m(taxableBal), hint: "Same after-tax cost, but growth taxed each year at your marginal rate." },
            { label: "HSA advantage", value: m(advantage), hint: "Extra money you keep, assuming withdrawals pay qualified medical expenses." }
          ];
        }
      },
      faq: [
        { q: "What if I do not spend it on medical care?", a: "<p>Before 65, non-qualified withdrawals are taxed and penalised. After 65 they are taxed as ordinary income, like a traditional IRA.</p>" },
        { q: "Do employer contributions count?", a: "<p>Yes, toward the same annual limit. Subtract them before setting your own contribution.</p>" }
      ],
      sources: [{ name: "IRS Publication 969 — contribution limits and tax treatment", url: "https://www.irs.gov/publications/p969" }],
      related: ["hsa-guide", "hsa-investing", "hdhp-explained"]
    },

    "open-enrollment-checklist": {
      title: "Open enrollment checklist: 30 checks before you accept a plan",
      h1: "The open enrollment checklist",
      section: "Tools",
      eyebrow: "Free tool",
      dek: "Usage history, plan documents, networks, formularies, accounts and the non-health elections everyone forgets. Progress saves in your browser.",
      toc: false,
      answer: "Work top to bottom before the deadline: gather last year's actual spending, read what changed, verify your doctors and prescriptions, model total annual cost, then set the accounts and the non-health elections. Nothing here requires a broker — only an hour.",
      body:
        "<div id='checklist'></div>" +
        "<h2>How to use it</h2>" +
        "<p>Start two weeks before your deadline. The usage-history and total-cost sections do the real work; the verification sections stop the expensive surprises. Full context is in the <a href='open-enrollment-guide.html'>open enrollment guide</a>.</p>" +
        "<h2>What no checklist can decide</h2>" +
        "<p>Whether a specific plan covers a specific treatment is answered by your plan documents and the insurer, not by us. Use this to arrive at that conversation with the right questions and your own arithmetic already done.</p>",
      checklist: {
        groups: [
          { title: "Gather your actual usage", note: "Last year's real numbers beat any estimate.", items: ["Last year's explanation-of-benefits statements collected", "Total actually spent out of pocket calculated", "Every recurring prescription listed with dosage", "Every doctor and facility used listed by name", "Known upcoming care for next year noted"] },
          { title: "Read what changed", items: ["New Summary of Benefits read for every option", "Deductible and out-of-pocket maximum changes noted", "Coinsurance and copay changes noted", "Whether each plan is still HSA-qualified confirmed", "Family deductible structure identified (aggregate or per-member)"] },
          { title: "Verify coverage", items: ["Each doctor checked in that specific plan's directory", "Preferred hospital confirmed in network", "Each prescription checked against the new formulary and tier", "Prior authorisation requirements noted for ongoing care", "Out-of-network coverage rules understood", "Telehealth and mental health coverage checked"] },
          { title: "Model total annual cost", items: ["Annual premium calculated for each option", "Expected out-of-pocket added at last year's usage level", "A low-usage scenario modelled", "A high-usage scenario modelled to the out-of-pocket maximum", "HSA tax benefit included where the plan qualifies", "Dependants priced on a spouse's plan as well as your own"] },
          { title: "Set the accounts", items: ["HSA contribution set, employer contribution subtracted from the limit", "FSA elected only for expenses you can name", "Limited-purpose FSA considered if pairing with an HSA", "Dependent care FSA coordinated across the household", "Receipt storage set up for the year"] },
          { title: "Do not forget these", items: ["Life insurance election reviewed", "Disability cover reviewed — the most under-elected benefit", "Beneficiaries updated on every account", "Elections confirmed in writing after enrolling", "First payslip of the new plan year checked against elections"] }
        ]
      },
      faq: [
        { q: "How long does this take?", a: "<p>About an hour if you have last year's statements to hand. The verification steps are the slow part and the valuable part.</p>" },
        { q: "Is my progress private?", a: "<p>Yes — ticks are stored only in your browser's local storage and never sent to us. No health information is collected.</p>" }
      ],
      sources: [{ name: "HealthCare.gov — comparing plans", url: "https://www.healthcare.gov/choose-a-plan/comparing-plans/" }],
      related: ["open-enrollment-guide", "health-insurance-guide", "hsa-tax-calculator"],
      cta: { title: "Get the enrollment worksheet", text: "The Benefits Brief includes the worksheet for comparing any three plans on total annual cost.", btn: "Subscribe", href: "index" }
    }
  }
};

window.SITE_DATA.aboutRelated = ["health-insurance-guide", "best-hsa-providers"];
Object.assign(window.SITE_DATA.pages, window.MDN_TRUST(window.SITE_DATA));
window.MDN_SITES = window.MDN_SITES || {};
window.MDN_SITES[window.SITE_DATA.slug] = window.SITE_DATA;
