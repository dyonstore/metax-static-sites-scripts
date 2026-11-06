/* LedgerLift — SMB finance & banking. Content model. */
window.SITE_DATA = {
  slug: "ledgerlift",
  brand: "LedgerLift",
  mark: "LL",
  color: "#0f5c8c",
  tagline: "Business money, without the sales pitch",
  description: "Independent guides to business bank accounts, credit, lending, payments and payroll for small companies — scored against a published methodology.",
  topicLong: "business banking, credit, lending, payments and payroll for small companies",
  ymylLabel: "Financial",
  reviewObject: "banks, lenders, payment processors and payroll platforms",
  updated: "22 July 2026",
  defaultAuthor: "Priya Raman",
  defaultReviewer: "Alan Boyce, CPA",
  contactEmail: "ledgerlift@metax.academy",
  disclaimer: "LedgerLift publishes general financial information, not financial, tax or investment advice. Rates, fees and terms change constantly and vary by applicant. Verify current terms with the provider and consult a licensed accountant or adviser before acting.",
  disclosureText: "Some links to banks, lenders and software providers are affiliate or referral links. They never affect scoring, ordering or whether a provider appears.",
  legalLine: "LedgerLift is not a bank, lender or broker and does not arrange credit.",
  footerAbout: "Independent comparison and explainers for the money decisions small companies make: where to bank, how to borrow, how to get paid and how to run payroll.",
  aboutDek: "Financial comparison for people who run the business and the books.",
  aboutWhat: "Fee-schedule-level explainers of business accounts and payment processing; lending guides written from actual credit criteria; comparisons scored against a public rubric; and tools that turn a rate sheet into a monthly number.",
  aboutDiff: [
    "We read the fee schedule and the deposit agreement, not the landing page.",
    "Every comparison shows the rubric, the weights and the date the pricing was checked.",
    "APR is quoted as APR — we convert factor rates and 'simple interest' marketing into comparable numbers.",
    "A CPA reviews anything touching tax treatment or accounting before it publishes."
  ],
  cannotDo: "We cannot tell you which account or loan to take, review your books, or advise on your tax position. Those require a licensed professional who knows your numbers.",
  sourceStandards: [
    "Published fee schedules, deposit agreements and rate sheets, with the date checked.",
    "Federal Reserve, FDIC, SBA and CFPB data and guidance for market-level figures.",
    "Provider terms of service for holds, reserves, chargebacks and account closure.",
    "IRS publications for anything touching payroll tax or deductibility."
  ],
  methodLimits: "Approval odds and pricing are applicant-specific, so we score published criteria and disclosed pricing rather than predicting what any individual business will be offered.",
  rubric: [
    { name: "True cost", weight: "30%", what: "All-in cost including monthly fees, transaction fees, wire and ACH pricing, and the cost of failing to meet a balance minimum." },
    { name: "Pricing transparency", weight: "20%", what: "Whether the full fee schedule is public and whether marketing rates match the contract." },
    { name: "Access to funds", weight: "20%", what: "Settlement speed, hold and reserve policy, and how the provider behaves during a dispute." },
    { name: "Integration and workflow", weight: "15%", what: "Accounting sync, payroll integration, multi-user permissions and export quality." },
    { name: "Support and escalation", weight: "10%", what: "Response times, human escalation path, and behaviour on account freezes." },
    { name: "Eligibility clarity", weight: "5%", what: "Whether criteria are published before you apply." }
  ],
  evidence: [
    "Opening or quoting accounts where possible and keeping the documents.",
    "Modelling identical transaction volumes across providers rather than comparing headline rates.",
    "Reading the deposit agreement for offset rights, closure terms and reserve triggers.",
    "Interviews with bookkeepers and controllers who administer these accounts daily."
  ],
  disqualifiers: [
    "Fee schedules available only after signup.",
    "Factor rates marketed as if they were interest rates.",
    "Undisclosed reserve or hold policies on payment processing.",
    "Account closure without a stated reason or funds-release timeline."
  ],
  team: [
    { name: "Priya Raman", role: "Editor-in-chief", bio: "Former commercial banking analyst who spent six years underwriting small-business credit lines. Writes banking and lending coverage.", focus: "Banking, credit, lending" },
    { name: "Tom Egerton", role: "Payments editor", bio: "Ex-payments operations manager at a mid-market processor. Covers interchange, chargebacks and merchant pricing.", focus: "Card processing, merchant services" },
    { name: "Grace Odum", role: "Payroll & bookkeeping writer", bio: "Bookkeeper turned writer; tests payroll and accounting platforms against real month-end workflows.", focus: "Payroll, bookkeeping, close process" }
  ],
  reviewers: [
    { name: "Alan Boyce, CPA", credential: "Certified Public Accountant, 20 years with owner-managed businesses", bio: "Reviews anything touching tax treatment, payroll compliance or accounting method." },
    { name: "Dara Nkemelu", credential: "Former commercial credit officer, community bank", bio: "Reviews lending and underwriting content for accuracy against real credit criteria." }
  ],
  newsletter: {
    name: "The Cash Position",
    pitch: "Monthly: one rate benchmark that actually moved, one fee to stop paying, and a working-capital idea you can use this quarter.",
    cadence: "monthly",
    cta: "Get the monthly brief",
    magnet: "The 12-month small business cash flow model (spreadsheet template)"
  },
  nav: [
    { label: "Start here", page: "business-bank-account-guide" },
    { label: "Lending", page: "small-business-financing-guide" },
    { label: "Cash flow", page: "cash-flow-management" },
    { label: "Payroll", page: "payroll-software-guide" },
    { label: "Compare", page: "best-business-bank-accounts" },
    { label: "Calculator", page: "loan-payment-calculator" }
  ],
  toolLinks: [
    { page: "loan-payment-calculator", label: "Loan & APR calculator", desc: "Convert factor rates and daily-payment offers into a real APR and a monthly cost you can compare." },
    { page: "cash-flow-checklist", label: "Cash flow control checklist", desc: "The 30 controls that keep a small company solvent — tick as you go, progress saves." }
  ],
  popular: ["business-loan-rates", "merchant-services-cost", "business-line-of-credit-rates", "best-business-bank-accounts"],
  featured: ["business-bank-account-guide", "small-business-financing-guide", "cash-flow-management"],
  partners: [
    { slug: "clausecraft", why: "the entity and paperwork the bank will ask for" },
    { slug: "shieldwise", why: "cover your lender will require as a condition" },
    { slug: "stacksift", why: "the accounting and finance stack around the account" }
  ],
  clusters: [
    { kicker: "Cluster 1", name: "Banking and accounts", desc: "Where the money sits, what it costs to keep it there.", pages: ["business-bank-account-guide", "business-credit-card-basics", "best-business-bank-accounts"] },
    { kicker: "Cluster 2", name: "Borrowing", desc: "Lines, term loans, SBA and the expensive alternatives.", pages: ["small-business-financing-guide", "sba-loan-guide", "business-loan-rates", "business-line-of-credit-rates", "invoice-factoring"] },
    { kicker: "Cluster 3", name: "Getting paid", desc: "Card acceptance, processing cost and the fees nobody quotes.", pages: ["merchant-account-fees", "merchant-services-cost"] },
    { kicker: "Cluster 4", name: "Books and payroll", desc: "Keeping records a lender or the IRS would accept.", pages: ["bookkeeping-basics", "payroll-software-guide", "business-credit-score", "best-payroll-software"] }
  ],

  pages: {
    index: {
      title: "LedgerLift — business banking, credit and payments compared",
      hero: {
        h1: "Bank, borrow and get paid without leaking money to fees",
        lead: "Independent, CPA-reviewed guides to business accounts, lending, card processing and payroll — with the fee schedules read and the APRs converted.",
        primary: { page: "business-bank-account-guide", label: "Start with the banking guide" },
        secondary: { page: "loan-payment-calculator", label: "Convert an offer to APR" },
        trust: ["CPA-reviewed", "Fee schedules cited with dates", "Factor rates converted to APR", "Rubric published"],
        stats: [
          { v: "4", l: "Clusters: banking, borrowing, payments, books" },
          { v: "APR", l: "Every financing offer normalised to one number" },
          { v: "2 tools", l: "Loan/APR calculator and cash flow checklist" },
          { v: "0", l: "Placements sold in any comparison" }
        ]
      },
      why: "<p>Small business finance is sold, not explained. A factor rate of 1.28 sounds cheaper than 18% APR; it usually is not. A 'free' business account with a $5,000 balance minimum is not free if your balance swings.</p>" +
        "<p>LedgerLift exists to make those comparisons in the same units. We read the fee schedule, model your actual transaction pattern, convert every financing offer to APR, and publish the rubric we scored against.</p>" +
        "<p>We are not a bank, lender or broker. We do not arrange credit, and we say plainly when the honest answer is that the cheapest option is not available to a business your size.</p>"
    },

    "business-bank-account-guide": {
      title: "Business bank accounts: how to choose and what they really cost",
      h1: "Choosing a business bank account",
      section: "Pillar guide",
      eyebrow: "Pillar guide",
      dek: "Separating business and personal money properly, what the fee schedule really says, and when a fintech account is the wrong tool.",
      disclosure: true,
      answer: "Open a dedicated business account as soon as the entity exists. Choose on <strong>total cost at your actual transaction volume</strong>, <strong>how quickly you can get money out under stress</strong>, and <strong>whether deposits are FDIC-insured directly or swept through a partner bank</strong> — not on the signup bonus.",
      body:
        "<h2>Why a separate account is not optional</h2>" +
        "<p>Commingling funds is the single most common way small owners weaken the liability protection they paid to create. It also makes bookkeeping expensive and an audit unpleasant. Open the account before the first customer payment arrives.</p>" +
        "<!--FIG:Where a small company's money actually sits: operating, tax reserve, and buffer-->" +
        "<h2>The five numbers on a fee schedule that matter</h2>" +
        "<ol><li><strong>Monthly maintenance fee</strong> and the exact balance or activity that waives it.</li>" +
        "<li><strong>Transaction allowance</strong> — free items per month, then per-item pricing.</li>" +
        "<li><strong>Cash deposit allowance</strong>, priced per $1,000 above the limit. Ruinous for cash-heavy businesses.</li>" +
        "<li><strong>Wire pricing</strong>, inbound and outbound, domestic and international.</li>" +
        "<li><strong>ACH origination</strong> cost and limits, which decide what payroll and supplier payments cost.</li></ol>" +
        "<!--AD-->" +
        "<h2>Bank versus fintech account</h2>" +
        "<p>Fintech accounts often win on fees, interface and integrations. Chartered banks win on cash handling, lending relationships, and behaviour during a dispute or fraud event. If your business deposits cash, needs a credit facility within two years, or cannot survive a 10-day funds freeze, weight the charter heavily.</p>" +
        "<p>Check whether deposits are held at a chartered bank directly or swept to partner banks by a program manager. Both can be sound; the failure modes differ, and only one gives you a direct relationship when something goes wrong.</p>" +
        "<h2>The structure that prevents most cash problems</h2>" +
        "<ul><li><strong>Operating account</strong> — everything in, everything out.</li>" +
        "<li><strong>Tax reserve</strong> — sweep a fixed percentage of every deposit on the day it lands.</li>" +
        "<li><strong>Buffer</strong> — target one payroll cycle plus one month of fixed costs.</li></ul>" +
        "<p>Three accounts at one institution beats one account and good intentions. The <a href='cash-flow-checklist.html'>cash flow checklist</a> covers the rest of the controls.</p>",
      faq: [
        { q: "Do I need an EIN to open a business account?", a: "<p>Almost always for an entity; sole proprietors can sometimes use an SSN. Get the EIN anyway — it is free and takes minutes.</p>" },
        { q: "Is a fintech account FDIC-insured?", a: "<p>Usually indirectly, through partner banks. Insurance covers bank failure, not the program manager's operational problems. Read who holds the deposit.</p>" },
        { q: "How many accounts should a small company have?", a: "<p>Three is the practical sweet spot: operating, tax reserve, buffer. More becomes admin for its own sake.</p>" }
      ],
      sources: [
        { name: "FDIC — deposit insurance coverage", url: "https://www.fdic.gov/resources/deposit-insurance/" },
        { name: "CFPB — business banking guidance", url: "https://www.consumerfinance.gov/" }
      ],
      related: ["best-business-bank-accounts", "business-credit-card-basics", "cash-flow-management"],
      crossRefs: [{ slug: "clausecraft", page: "llc-formation-guide", label: "Forming the entity the bank will ask about", why: "You need formation documents and an EIN before most accounts will open." }]
    },

    "small-business-financing-guide": {
      title: "Small business financing: every option, ranked by real cost",
      h1: "How to finance a small business",
      section: "Pillar guide",
      eyebrow: "Pillar guide",
      dek: "Lines of credit, term loans, SBA, equipment finance, factoring and merchant cash advances — converted into comparable APR.",
      disclosure: true,
      answer: "In rough order of cost: <strong>SBA and bank term loans</strong> (often 8–14% APR), <strong>bank lines of credit</strong>, <strong>equipment finance</strong>, <strong>online term loans</strong> (15–45%), <strong>invoice factoring</strong>, then <strong>merchant cash advances</strong> (frequently 60–150%+ APR once converted). Always convert to APR before comparing.",
      table: {
        caption: "Indicative all-in cost by financing type, US small business, July 2026.",
        headers: ["Type", "Typical APR", "Speed", "Best for", "Main trap"],
        rows: [
          { best: true, cells: ["<strong>SBA 7(a)</strong>", "9% – 13%", "3–8 weeks", "Growth, acquisition, refinance", "Paperwork and personal guarantee"] },
          { cells: ["<strong>Bank line of credit</strong>", "9% – 16%", "2–6 weeks", "Working capital swings", "Annual clean-down requirement"] },
          { cells: ["<strong>Equipment finance</strong>", "8% – 20%", "Days", "Titled or serialised assets", "Cross-collateralisation"] },
          { cells: ["<strong>Online term loan</strong>", "15% – 45%", "1–5 days", "Fast, defined need", "Prepayment gives no interest saving"] },
          { cells: ["<strong>Invoice factoring</strong>", "20% – 60%", "Days", "Slow-paying B2B customers", "Recourse and notification to clients"] },
          { cells: ["<strong>Merchant cash advance</strong>", "60% – 150%+", "Hours", "Almost nothing", "Daily debits, stacked advances"] }
        ],
        note: "Indicative ranges from published rate sheets and lender disclosures, July 2026. Individual pricing depends on credit, time in business and revenue."
      },
      body:
        "<h2>Convert everything to APR first</h2>" +
        "<p>A factor rate of 1.30 on $50,000 repaid over nine months is roughly 78% APR, not 30%. A 'simple interest' loan with daily debits costs far more than the same headline rate paid monthly. Run every offer through the <a href='loan-payment-calculator.html'>calculator</a> before you compare anything else.</p>" +
        "<!--AD-->" +
        "<h2>What lenders actually underwrite</h2>" +
        "<ol><li><strong>Time in business</strong> — two years is the cliff for bank pricing.</li>" +
        "<li><strong>Debt service coverage</strong> — can cash flow cover payments 1.25× over?</li>" +
        "<li><strong>Personal credit</strong> of owners with 20%+ equity. See <a href='business-credit-score.html'>business credit scores</a>.</li>" +
        "<li><strong>Deposit behaviour</strong> — average balances, negative days, NSF counts.</li>" +
        "<li><strong>Collateral and guarantees</strong>, which almost always includes a personal guarantee.</li></ol>" +
        "<!--FIG:Cost of capital by product type, converted to APR-->" +
        "<h2>Signs you are being sold, not lent to</h2>" +
        "<ul><li>The offer quotes a factor rate or 'total payback' instead of an APR.</li>" +
        "<li>Repayment is daily or weekly and tied to your bank account.</li>" +
        "<li>Early repayment does not reduce the amount owed.</li>" +
        "<li>The broker will not name the funder until you sign.</li></ul>" +
        "<h2>Cheaper before you borrow</h2>" +
        "<p>Tightening receivables by 12 days often frees more cash than a line of credit, at zero cost. Work the <a href='cash-flow-management.html'>cash flow guide</a> first; borrow for growth, not to patch a collections problem.</p>",
      edge: {
        intro: "This topic is served by lead-generation sites paid per submitted application and by lenders describing their own product, which produces a genre with a consistent shape: an enthusiastic tour of financing options, each with a headline rate, and no mechanism for comparing them. The two questions that decide whether borrowing helps or destroys the business \u2014 whether the cost is even comparable, and whether debt is the right instrument at all \u2014 are the two nobody paid to publish will ask.",
        gaps: [
          {
            claim: "\"Here are your small business financing options\" \u2014 each quoted in whatever unit its industry prefers.",
            problem: "Factor rates, &lsquo;total payback&rsquo;, cost of capital, simple interest on original principal, and APR are placed in the same list as if they were commensurable, and they are not even close. A factor rate of 1.30 on a nine-month term is roughly seventy-eight percent annualised, not thirty; a &lsquo;simple interest&rsquo; quote on the original balance costs materially more than the same headline number amortised. The non-comparability is not incidental \u2014 the products with the worst pricing are precisely the ones quoted in the units that obscure it, because a genuine APR would end the sale. A reader diligently comparing the numbers in front of them can therefore choose the most expensive option available while believing they optimised.",
            ours: "We convert every offer to APR before it enters the comparison, and we treat the choice of quoting unit as diagnostic \u2014 a product quoted in factor rates is telling you something about itself."
          },
          {
            claim: "\"Applying is free and takes minutes\" \u2014 with speed presented as the main axis of comparison.",
            problem: "Speed is real and the cost of obtaining it is understated in two specific ways. A single application to an aggregator is commonly resold to a panel of funders, producing repeat credit pulls and weeks of calls; more consequentially, most non-bank lenders file a UCC-1 financing statement, frequently a blanket lien over all business assets. Once recorded, a cheaper bank or SBA lender will decline or demand that the incumbent subordinate \u2014 which it has no obligation to do. So taking a fast, expensive advance today can disqualify the business from the cheap credit it would have qualified for two quarters later, and the block persists until termination is filed, which lenders are often slow to do. The fast option's true price includes the option it removes.",
            ours: "We price the UCC-1 as a cost of the first facility: check existing filings before applying, ask what will be filed over what collateral, and get written confirmation of termination at payoff."
          },
          {
            claim: "\"Pay off early to save interest\" \u2014 and the corollary that prepayment is always good.",
            problem: "The advice is correct for amortising term debt and inverted at both ends of this market. A factor-rate advance fixes the total repayment at origination: 1.30 times the advance is owed whether repaid in three months or twelve, so accelerating repayment raises the effective annualised cost rather than lowering it, and any early-payoff discount is discretionary rather than contractual. At the opposite end, SBA loans with maturities of fifteen years or more carry a declining prepayment penalty in the early years. The generic advice is therefore right only in the middle of the range and actively harmful at the cheapest and most expensive ends \u2014 which are the two places borrowers most need guidance.",
            ours: "We separate fixed-total-repayment products from interest-accrual products, because the correct action on early repayment is opposite in each, and we flag prepayment penalties on long-maturity loans."
          },
          {
            claim: "Match the financing type to your need, and borrow what you need.",
            problem: "This assumes borrowing is the answer, which is where a guide written by lenders necessarily stops. Frequently the cheapest capital available is already inside the business: tightening receivables by a dozen days, taking supplier terms, or invoicing on delivery rather than monthly commonly frees more cash than a line of credit, at no cost and with no lien. The distinction that matters is diagnostic \u2014 a <em>timing</em> gap that reverses within ninety days is what short-term facilities are for; a business that is structurally unprofitable or has a collections problem will convert a loan into a larger version of the same problem plus debt service, and the daily-debit products accelerate that outcome. Debt service coverage against the worst recent month, not the average one, is the test, and the payment <em>schedule</em> matters as much as the rate: a daily debit and a monthly amortisation at identical APR make entirely different demands on lumpy receipts.",
            ours: "We put the costed do-nothing option first, distinguish a timing gap from a profitability problem, and test the payment schedule against the worst recent month rather than the average."
          }
        ],
        only: [
          "Every option converted to APR, with the quoting unit itself treated as a signal about the product.",
          "The UCC-1 blanket lien priced as a cost of the fast option \u2014 including the cheap credit it disqualifies you from.",
          "Fixed-total-repayment versus interest-accrual products, where early repayment behaves in opposite directions.",
          "The internal-capital alternative costed first: receivables, supplier terms, invoicing cadence.",
          "A timing gap distinguished from a profitability problem, tested against your worst month rather than your average."
        ]
      },
      faq: [
        { q: "Will applying hurt my credit?", a: "<p>Most business lenders soft-pull to pre-qualify and hard-pull at final underwriting. Ask which is happening before you submit.</p>" },
        { q: "Can I get a loan with under two years trading?", a: "<p>Yes, but pricing jumps sharply. Equipment finance and SBA microloans are usually the cheapest realistic routes.</p>" },
        { q: "Is a personal guarantee negotiable?", a: "<p>Rarely removable under about $500k, but the scope — limited, capped, or burn-off after covenants are met — is often negotiable.</p>" }
      ],
      sources: [
        { name: "US Small Business Administration — loan programs", url: "https://www.sba.gov/funding-programs/loans" },
        { name: "Federal Reserve — Small Business Credit Survey", url: "https://www.fedsmallbusiness.org/" }
      ],
      related: ["business-loan-rates", "sba-loan-guide", "business-line-of-credit-rates"]
    },

    "cash-flow-management": {
      title: "Cash flow management for small businesses",
      h1: "Managing cash flow so the business survives growth",
      section: "Pillar guide",
      eyebrow: "Pillar guide",
      dek: "The 13-week forecast, collections discipline, tax reserves and the buffer that decides whether a good year kills you.",
      disclosure: true,
      answer: "Run a <strong>rolling 13-week cash forecast</strong>, sweep a fixed tax percentage on every deposit, invoice the day work completes, and hold a buffer of one payroll plus one month of fixed costs. Profitable businesses fail on timing, not margin.",
      body:
        "<h2>The 13-week forecast</h2>" +
        "<p>Thirteen weeks is long enough to see a problem and short enough to be accurate. List opening balance, expected receipts by customer, and committed outflows by week. Update every Monday. The value is not the spreadsheet — it is seeing week nine go negative in week two.</p>" +
        "<!--FIG:A rolling 13-week cash forecast, week nine turning negative-->" +
        "<h2>Collections is a process, not a chase</h2>" +
        "<ul><li>Invoice on completion, not month-end.</li>" +
        "<li>Payment terms and late fees stated in the contract, not the invoice.</li>" +
        "<li>Automated reminders at −3, +1, +7, +14 days.</li>" +
        "<li>A named human call at day 21, every time.</li>" +
        "<li>Stop-work clause you are actually willing to use.</li></ul>" +
        "<!--AD-->" +
        "<h2>Reserve before you spend</h2>" +
        "<p>Sweep 25–30% of every deposit to a tax reserve on the day it arrives, adjusted with your accountant. Businesses rarely fail because tax was too high; they fail because it was spent before it was owed.</p>" +
        "<h2>Growth is a cash consumer</h2>" +
        "<p>Every new customer funds itself only after they pay. Doubling revenue with 45-day terms and 15-day supplier terms will drain you faster than a downturn. Model the working capital requirement before you sign the bigger contract, and read <a href='invoice-factoring.html'>factoring</a> only if the gap is structural rather than seasonal.</p>",
      faq: [
        { q: "How much buffer is enough?", a: "<p>One payroll cycle plus one month of fixed costs is the working minimum; three months is comfortable.</p>" },
        { q: "Weekly or monthly forecasting?", a: "<p>Weekly. Monthly hides the payroll and rent timing that actually breaks companies.</p>" },
        { q: "Should I take early-payment discounts?", a: "<p>2/10 net 30 is roughly 36% annualised. Take it whenever you have the cash.</p>" }
      ],
      related: ["cash-flow-checklist", "business-bank-account-guide", "invoice-factoring"],
      cta: { title: "Get the cash flow model", text: "The Cash Position sends a 12-month forecast template plus one benchmark that moved each month.", btn: "Subscribe", href: "index" }
    },

    "payroll-software-guide": {
      title: "Payroll software for small business: how to choose",
      h1: "Choosing payroll software",
      section: "Pillar guide",
      eyebrow: "Pillar guide",
      dek: "Tax filing guarantees, multi-state registration, contractor payments and the integration that decides your month-end.",
      disclosure: true,
      answer: "Choose on <strong>whether the provider files and pays your payroll taxes with a penalty guarantee</strong>, <strong>which states it can register you in</strong>, and <strong>how cleanly it posts to your accounting ledger</strong>. Per-employee price differences are trivial next to one missed filing.",
      body:
        "<h2>What payroll software must do</h2>" +
        "<ol><li>Calculate and withhold federal, state and local taxes correctly.</li>" +
        "<li>File and remit on time, with a written penalty guarantee.</li>" +
        "<li>Produce W-2s and 1099s without manual reconciliation.</li>" +
        "<li>Handle multi-state employees and register you where needed.</li>" +
        "<li>Post journal entries to your ledger by class or department.</li></ol>" +
        "<!--AD-->" +
        "<h2>The multi-state trap</h2>" +
        "<p>One remote hire in a new state creates withholding registration, unemployment insurance registration and often a workers' compensation requirement. Some platforms register for you; others hand you a to-do list. Ask before hiring, not after — and check the classification rules first.</p>" +
        "<!--FIG:Payroll obligations triggered by a single out-of-state hire-->" +
        "<h2>Contractors are not free</h2>" +
        "<p>Paying contractors through payroll software costs less than employees but still needs 1099 tracking and correct classification. Misclassification is the expensive error, not the platform fee.</p>" +
        "<h2>Switching costs</h2>" +
        "<p>Move at a quarter boundary — ideally 1 January. Mid-year migrations require year-to-date imports that go wrong quietly and surface in January.</p>",
      edge: {
        intro: "Payroll comparisons are affiliate-heavy and converge on per-employee-per-month pricing plus a feature grid, because that sorts a table. The structural fact the format cannot express is that payroll is the one function where the software's marketing and the legal reality diverge sharply: the employer remains liable for payroll tax regardless of who pressed the button, and the money involved is held in trust rather than owned. That single point reframes what a &lsquo;guarantee&rsquo; is worth and what a switch actually risks.",
        gaps: [
          {
            claim: "&lsquo;Choose a provider that files and pays your payroll taxes with a penalty guarantee.&rsquo;",
            problem: "The guarantee is a commercial promise about who absorbs a penalty, not a transfer of legal responsibility, and the distinction becomes concrete in the worst case. Withheld income and employment taxes are trust fund taxes \u2014 money withheld from employees and held for the government \u2014 and liability for unpaid trust fund amounts can be asserted personally against the individuals responsible for collecting and paying them, which in a small company means an owner or officer. Using a third party does not remove that exposure, and a provider's guarantee is only as good as the provider: if funds are debited and not remitted, the employer still owes the tax. Two practical safeguards go unmentioned in every comparison. The IRS offers an employer account view where you can confirm deposits were actually made, so remittance is verifiable rather than assumed. And the guarantee itself has conditions \u2014 accurate and timely data, sufficient funds, notices forwarded promptly \u2014 which is where claims are usually declined.",
            ours: "We describe the liability as remaining with the employer, including personal trust fund exposure, and recommend independently verifying that deposits reached the tax authority rather than trusting the dashboard."
          },
          {
            claim: "&lsquo;One remote hire in a new state creates withholding and unemployment registration \u2014 some platforms register for you.&rsquo;",
            problem: "True and it understates the problem in two directions the tables never show. Local obligations are the missing layer: a number of jurisdictions impose city, county, school district or transit taxes with their own registrations and deposit schedules, and platform coverage of local taxes is far patchier than state coverage \u2014 so &lsquo;supports all fifty states&rsquo; can coexist with a local tax you must file manually. Reciprocity and nexus add the second complication: an employee living in one state and working in another triggers a set of rules about which state's withholding applies, and an employee's presence can create business tax obligations for the company beyond payroll entirely. There is also a sequencing trap. Registration is frequently required before the first payroll rather than after, and a state-issued account number is often needed to file at all \u2014 so a hire made and paid before registration completes produces late filings from day one, which no penalty guarantee covers because the delay was yours.",
            ours: "We treat local taxes as a separate coverage question from state support, flag reciprocity and business-nexus effects, and sequence registration before the first payroll because the account number is a prerequisite for filing."
          },
          {
            claim: "&lsquo;Contractors cost less than employees, and misclassification is the expensive error.&rsquo;",
            problem: "Right conclusion, wrong shape of risk, because it is presented as one test with one consequence. Classification is judged under different standards by different authorities \u2014 the IRS applies a common-law control analysis, wage and hour law uses its own test, state unemployment agencies apply theirs, and some states use a materially stricter standard \u2014 so a worker can be correctly a contractor for one purpose and an employee for another, and a determination by one agency is routinely shared with others. The exposure is therefore stacked rather than singular: back taxes and interest, unpaid overtime and minimum wage, unemployment contributions, workers' compensation, and benefit-plan consequences. The under-covered mechanic is who initiates it \u2014 audits commonly begin with a worker filing for unemployment or a work injury, not with a tax examination, which means the trigger is a person you stopped paying and the timing is not yours. Paying a contractor through payroll software also does not evidence classification either way.",
            ours: "We map classification across the separate standards that can each reach a different answer, and identify the real triggers \u2014 an unemployment claim or an injury \u2014 rather than presenting it as a tax-audit risk."
          },
          {
            claim: "&lsquo;Switch at a quarter boundary, ideally 1 January \u2014 mid-year migrations need year-to-date imports that go wrong.&rsquo;",
            problem: "Sound advice that stops before the part that actually fails. Year-to-date imports are not one number: wage bases for taxes with annual ceilings must transfer correctly or the new provider restarts the accumulator and over-withholds, and pre-tax deduction and contribution year-to-date figures must carry across or annual limits are miscalculated. The filing responsibility split is the sharper issue \u2014 for a mid-year move, who files the quarter's returns and who produces the year-end statements has to be agreed in writing, because a new provider will typically only file for periods it processed, and an outgoing provider's obligation ends when the service does. Two further items nobody lists: your third-party authorisations must be updated at both federal and state level or the outgoing provider retains filing authority, and you should confirm the final deposits were made before closing the account, since a departing provider's last remittance is the one most often missed. Access to historical records after termination is also worth agreeing, because you will need them for a later audit.",
            ours: "We treat a switch as a data migration with named owners for each quarter's filings, verify wage-base and pre-tax year-to-date accumulators, update third-party authorisations, and confirm the outgoing provider's final deposits landed."
          }
        ],
        only: [
          "Payroll tax as trust fund money with personal exposure that a provider's guarantee does not transfer — plus independently verifying deposits reached the tax authority.",
          "Local taxes as a separate coverage question from 'all fifty states', with registration sequenced before the first payroll.",
          "Classification tested by several authorities to potentially different answers — and the real trigger being an unemployment claim or injury.",
          "The year-to-date items that break a mid-year switch: wage-base ceilings and pre-tax contribution accumulators.",
          "Written ownership of each quarter's filings, updated third-party authorisations, verified final deposits, and post-termination record access."
        ]
      },
      faq: [
        { q: "Is a payroll tax penalty guarantee real?", a: "<p>Usually yes, if the error was the provider's and your data was correct and on time. Read what voids it — and note that it covers the penalty, not the underlying liability, which remains yours.</p>" },
        { q: "Can I run payroll myself?", a: "<p>For one or two employees in one state, yes. Beyond that the filing calendar costs more time than the software.</p>" },
        { q: "Do I need payroll for an S-corp owner?", a: "<p>Yes — reasonable compensation must run through payroll. Confirm the amount with your CPA.</p>" },
        { q: "The provider debited us. How do I know the tax was actually paid?", a: "<p>Check your employer account with the tax authority directly rather than the provider's dashboard. Deposits are visible there, and if funds were taken but not remitted you still owe the tax.</p>" }
      ],
      sources: [
        { name: "IRS — Publication 15 (Employer's Tax Guide)", url: "https://www.irs.gov/publications/p15", note: "Withholding, deposit schedules and employer obligations" },
        { name: "IRS — trust fund recovery penalty", url: "https://www.irs.gov/businesses/small-businesses-self-employed/trust-fund-recovery-penalty", note: "Personal liability for unpaid withheld taxes, including where a third party files" },
        { name: "IRS — outsourcing payroll and third-party payer arrangements", url: "https://www.irs.gov/businesses/small-businesses-self-employed/outsourcing-payroll-duties", note: "Employer remains liable; guidance on verifying deposits were made" },
        { name: "U.S. Department of Labor — employee or independent contractor classification", url: "https://www.dol.gov/agencies/whd/flsa/misclassification", note: "Wage and hour test, separate from the IRS common-law analysis" }
      ],
      related: ["best-payroll-software", "bookkeeping-basics"],
      crossRefs: [{ slug: "clausecraft", page: "contractor-vs-employee", label: "Contractor or employee: the classification tests", why: "Payroll software will not save you from a misclassification finding." }]
    },

    "business-credit-card-basics": {
      title: "Business credit cards: rewards, liability and the float",
      h1: "Business credit cards, used properly",
      section: "Banking",
      eyebrow: "Explainer",
      dek: "Personal guarantees, joint liability, which spend actually earns, and using the float without financing on it.",
      disclosure: true,
      answer: "A business card is a <strong>cash flow tool with a 30–55 day float</strong>, not a financing product — revolving on one at 22%+ APR is more expensive than almost any term loan. Nearly all small-business cards carry a personal guarantee.",
      body:
        "<h2>Liability: read this before applying</h2>" +
        "<p>Most small-business cards are jointly and severally liable, meaning the owner is personally on the hook. Corporate liability cards generally require substantial revenue. The card being in the company's name does not protect your personal credit.</p>" +
        "<!--AD-->" +
        "<h2>Where rewards actually pay</h2>" +
        "<ul><li>Concentrated categories: advertising, software, fuel, shipping.</li>" +
        "<li>Statement credits you would have spent anyway.</li>" +
        "<li>Employee cards with per-card limits and category locks.</li></ul>" +
        "<p>Chasing a signup bonus with spend you did not plan is a discount on a purchase you did not need.</p>" +
        "<h2>The float, used deliberately</h2>" +
        "<p>Timing a large purchase just after the statement date buys up to 55 days of free working capital. That is a legitimate, free line of credit — provided the balance clears in full every cycle.</p>",
      edge: {
        intro: "Business card coverage is almost entirely affiliate-funded, and affiliate economics reward rewards-rate comparison because that is the number that sorts a table. So the genre optimises the least important variable. The two things that actually differ between business and consumer cards — the legal protections that do not carry over, and how the account interacts with your personal credit file — are the two things the comparison tables cannot express, so they are left out.",
        gaps: [
          {
            claim: "Business cards are presented as consumer cards with better category multipliers and a higher limit.",
            problem: "They are a different legal product, because most of the consumer credit card protections are statutory and attach to consumer-purpose accounts rather than to business-purpose ones. Practically, that means several defaults you have spent years relying on may simply not apply: advance notice before a rate increase, restrictions on applying a rate rise to an existing balance, the ordering rule that sends over-minimum payments to the highest-APR balance first, penalty-fee reasonableness limits, and constraints on how fast a limit can be cut. Issuers commonly extend some of these voluntarily as a matter of policy, which is the source of the confusion — but voluntary policy can be withdrawn at the issuer's discretion and a statutory right cannot. The consequence appears at the worst moment: a business carrying a balance can find the rate on that existing balance repriced, or the limit reduced mid-cycle, in circumstances where the consumer card in the same wallet could not be touched.",
            ours: "We state which protections are statutory for consumer accounts and therefore not guaranteed on a business account, and treat 'the issuer currently chooses to apply it' as a policy that can change rather than a right you hold."
          },
          {
            claim: "&lsquo;Business cards keep business debt off your personal credit report.&rsquo;",
            problem: "This is the most consequential error in the category and it is close to universal. The accurate version is asymmetric: most major issuers do not report a business card in good standing to the consumer bureaus, so it does not build your personal file and does not add to your personal utilisation — but nearly all of them reserve the right to report delinquency and default there, and the personal guarantee you signed at application is what makes that enforceable against you individually. So the account is invisible while it helps you and visible precisely when it hurts you. Two further mechanics follow. Because the balance is absent from your consumer file, it does not raise your reported utilisation, which is a genuine advantage for a founder about to apply for a mortgage. And because the application itself is usually underwritten against your personal credit, it typically produces a hard inquiry on your consumer file even though the resulting account never appears there.",
            ours: "We describe the reporting behaviour as asymmetric and name both halves: no benefit while performing, full personal exposure on default via the guarantee, plus the hard inquiry at application."
          },
          {
            claim: "The float is described as roughly 30 to 55 days of free working capital, timed from the statement date.",
            problem: "The upper figure is a maximum that only exists on a card with a true grace period and a fully cleared prior balance, and both conditions fail more often than the advice admits. Carry a balance into the next cycle and the grace period is typically lost, so new purchases begin accruing interest from the transaction date rather than after the due date — the float does not shrink, it disappears, and it usually stays gone until the balance is cleared for a full cycle. Cash advances and many cash-like transactions never have a grace period at all and often carry a separate higher APR plus a percentage fee from day one. Meanwhile charge cards, which are frequently listed in the same comparison tables, invert the risk: no interest, because no revolving, but a balance due in full with penalties that can include account suspension mid-month. A business planning a large purchase around the statement date needs to know which of these three products it is holding.",
            ours: "We tie the float to the grace-period condition explicitly, explain that carrying a balance removes it retroactively for new purchases, and separate revolving cards, charge cards and cash-advance treatment rather than tabling them together."
          },
          {
            claim: "Rewards are compared as headline earn rates, with signup bonuses as the tiebreaker.",
            problem: "The comparison omits the tax treatment and the accounting consequence, which for a business are not incidental. Rewards earned on deductible business spending generally reduce the deductible cost of what you bought rather than arriving as clean tax-free value, so the effective benefit of a 2% return is not 2% — it interacts with your deduction, and the treatment differs depending on whether you take the reward as a statement credit, as points, or as cash paid out. Bookkeeping compounds it: a statement credit applied against a mixed-category bill has to be allocated, and businesses routinely either ignore this or misstate expenses. Then there is the structural cost the tables cannot show, which is concentration. Employee cards, category locks and per-card limits are what actually prevent loss on a business account, and their availability at no extra cost varies far more between issuers than the earn rate does — as does whether the issuer will restore a limit after a bad quarter, which matters more to a growing business than any multiplier.",
            ours: "We flag the deduction interaction and the allocation problem for statement credits, and rank spend controls, per-card limits and limit-restoration behaviour above the earn rate for any business with employees."
          }
        ],
        only: [
          "Which consumer card protections are statutory and therefore absent on a business account — rate-increase notice, payment allocation, penalty-fee limits.",
          "The asymmetric credit reporting: invisible while performing, personally enforceable on default through the guarantee, plus a hard inquiry at application.",
          "How carrying a balance removes the grace period and kills the float retroactively for new purchases — and why cash advances never had one.",
          "Revolving cards, charge cards and cash-like transactions separated rather than compared in one table.",
          "The tax and bookkeeping treatment of rewards on deductible spend, and why spend controls outrank earn rates once you have employees."
        ]
      },
      faq: [
        { q: "Does business card activity build business credit?", a: "<p>Only if the issuer reports to commercial bureaus. Many report to consumer bureaus only on default — so the account can hurt your personal file without ever having helped it.</p>" },
        { q: "Can I put personal spend on it?", a: "<p>Don't. It undermines the separation you created the entity for and makes bookkeeping worse.</p>" },
        { q: "Are the rewards taxable?", a: "<p>Rewards earned on business spending generally reduce the deductible cost of the purchase rather than arriving as free value, and the treatment varies by how you take them. Ask your accountant before booking them as income.</p>" }
      ],
      sources: [
        { name: "Consumer Financial Protection Bureau — Regulation Z scope and business-purpose credit", url: "https://www.consumerfinance.gov/rules-policy/regulations/1026/", note: "Which credit card protections attach to consumer-purpose accounts" },
        { name: "Federal Reserve — Credit CARD Act protections", url: "https://www.federalreserve.gov/consumerscommunities/credit-card-act.htm", note: "Rate-increase notice, payment allocation and penalty-fee rules for consumer accounts" }
      ],
      related: ["business-credit-score", "business-bank-account-guide"]
    },

    "invoice-factoring": {
      title: "Invoice factoring: how it works and what it really costs",
      h1: "Invoice factoring, honestly priced",
      section: "Borrowing",
      eyebrow: "Explainer",
      dek: "Recourse versus non-recourse, the reserve, notification, and the APR hiding behind a 2.5% fee.",
      disclosure: true,
      answer: "Factoring advances 80–90% of an invoice for a fee of roughly 1.5–3.5% per 30 days. On 30-day paper that is <strong>roughly 20–50% APR</strong>. It is defensible for structural B2B payment delays and expensive for a temporary gap.",
      body:
        "<h2>The mechanics</h2>" +
        "<p>You sell the receivable. The factor advances most of it, holds a reserve, collects from your customer, then releases the reserve minus fees. With <strong>notification</strong> factoring your customer is told to pay the factor — which changes the relationship, so decide whether that matters.</p>" +
        "<!--AD-->" +
        "<h2>Recourse versus non-recourse</h2>" +
        "<p>Recourse means you buy back unpaid invoices — cheaper, and most of the market. Non-recourse covers credit risk only, not disputes, and disputes are the usual reason invoices go unpaid.</p>" +
        "<h2>The real cost</h2>" +
        "<p>Add the discount fee, application and wire fees, minimum monthly volume commitments, and the cost of the reserve being held. Then annualise. Compare against a <a href='business-line-of-credit-rates.html'>line of credit</a> before committing to a 12-month contract.</p>",
      faq: [
        { q: "Will my customers know?", a: "<p>With notification factoring, yes. Non-notification exists but costs more and requires stronger credit.</p>" },
        { q: "Is factoring a loan?", a: "<p>Legally it is a sale of receivables, which is why it is available to businesses that cannot get credit.</p>" }
      ],
      related: ["small-business-financing-guide", "cash-flow-management"]
    },

    "merchant-account-fees": {
      title: "Merchant account fees explained: interchange, markup and the rest",
      h1: "What card processing actually costs",
      section: "Payments",
      eyebrow: "Explainer",
      dek: "Interchange-plus versus flat rate versus tiered, the fees buried in the statement, and how to read your effective rate.",
      disclosure: true,
      answer: "Compute your <strong>effective rate</strong>: total fees ÷ total card volume. Under 2.6% is competitive for card-present retail; 2.9–3.3% is normal for card-not-present. Anything above 3.5% usually means tiered pricing or padded fees.",
      body:
        "<h2>The three layers</h2>" +
        "<ol><li><strong>Interchange</strong> — set by the card networks, paid to the issuing bank. Nobody discounts this.</li>" +
        "<li><strong>Assessments</strong> — the networks' own cut, also fixed.</li>" +
        "<li><strong>Processor markup</strong> — the only negotiable part.</li></ol>" +
        "<!--FIG:Anatomy of a card transaction fee: interchange, assessments, markup-->" +
        "<!--AD-->" +
        "<h2>Pricing models, ranked</h2>" +
        "<ul><li><strong>Interchange-plus</strong> — transparent; best above roughly $25k monthly volume.</li>" +
        "<li><strong>Flat rate</strong> — simple and honest; fine below $25k.</li>" +
        "<li><strong>Tiered</strong> — 'qualified/mid/non-qualified' buckets. Avoid; the buckets are the processor's to define.</li></ul>" +
        "<h2>The fees people miss</h2>" +
        "<p>PCI compliance fees, monthly minimums, batch fees, statement fees, gateway fees, chargeback fees, and annual 'network cost recovery' increases. Ask for a fee schedule and a sample statement before signing, and check the <a href='merchant-services-cost.html'>cost benchmarks</a>.</p>",
      faq: [
        { q: "Can I surcharge cards?", a: "<p>In many US states yes, with disclosure and network rules followed; some states restrict it. Debit surcharging is prohibited.</p>" },
        { q: "Why was my money held?", a: "<p>Reserves trigger on volume spikes, chargebacks or industry risk. Ask for the reserve policy in writing before onboarding.</p>" }
      ],
      related: ["merchant-services-cost", "cash-flow-management"]
    },

    "bookkeeping-basics": {
      title: "Bookkeeping basics: the monthly close for small companies",
      h1: "Bookkeeping that survives a lender or an audit",
      section: "Books",
      eyebrow: "Explainer",
      dek: "Chart of accounts, reconciliation discipline, accrual versus cash, and the close checklist that takes two hours.",
      answer: "Reconcile every bank and card account monthly, keep a chart of accounts small enough to read, and close within 15 days of month-end. Books that are 90 days stale are the reason most lending applications stall.",
      body:
        "<h2>The two-hour monthly close</h2>" +
        "<ol><li>Reconcile every bank, card and payment processor account.</li>" +
        "<li>Clear uncategorised transactions to zero.</li>" +
        "<li>Match payroll journals to the payroll report.</li>" +
        "<li>Review AR and AP ageing; chase anything over 30 days.</li>" +
        "<li>Read the P&amp;L against last month and ask about anything over 10% out.</li></ol>" +
        "<!--AD-->" +
        "<h2>Cash or accrual</h2>" +
        "<p>Cash basis is simpler and often permitted for tax below the IRS gross-receipts threshold. Accrual shows what the business actually earned. Many owners run accrual for management and convert at tax time — confirm the method with your CPA before you switch.</p>" +
        "<h2>Keep the chart of accounts small</h2>" +
        "<p>Forty accounts you review beats two hundred you ignore. Use classes or departments for detail instead of proliferating accounts.</p>",
      edge: {
        intro: "Bookkeeping content is produced overwhelmingly by accounting software vendors, and the software has quietly changed what the advice should be. When categorising transactions was the work, teaching the close checklist made sense. Now that bank feeds categorise automatically, the remaining work is almost entirely verification — and the genre still describes the old job, which is why books that look complete in the software fail at exactly the moment they are needed.",
        gaps: [
          {
            claim: "&lsquo;Reconcile every account monthly&rsquo; \u2014 with clearing uncategorised transactions to zero as the measure of a finished close.",
            problem: "Categorising everything and reconciling are different operations, and modern software makes the first look like the second. A bank feed proposes a category for every line and a confident bookkeeper accepts them, producing a ledger with nothing uncategorised that has never been checked against an external document. True reconciliation compares your ledger to the statement issued by the institution and explains every difference \u2014 which is what catches the things a feed cannot: a duplicated transaction from a re-connected feed, a payment recorded twice because it arrived through both the processor and the bank, a cleared cheque never entered, timing differences at a month boundary. Payment processors are the sharpest case, because a single deposit nets gross sales against fees and refunds; booking the net figure understates both revenue and expenses, and the resulting revenue figure is wrong in a way no reconciliation inside the software will flag. This matters most in exactly the situation the page is about: an underwriter compares your books to your statements.",
            ours: "We separate categorisation from reconciliation explicitly, require the institution's own statement as the comparison document, and treat processor deposits as gross-with-fees rather than as a single net line."
          },
          {
            claim: "&lsquo;Cash basis is simpler and often permitted for tax; accrual shows what you actually earned.&rsquo;",
            problem: "Accurate and it omits the two consequences that decide the choice. First, the method is an accounting method for tax purposes, and changing it generally requires filing for consent rather than simply toggling a setting \u2014 so &lsquo;run accrual for management and convert at tax time&rsquo; is normal and fine as reporting practice, but switching the method your return is filed on is a formal step, not a preference. Second, cash basis is not merely simpler; it is systematically misleading for the specific decisions a small company makes. A business collecting deposits in advance looks profitable on cash basis while carrying an unearned obligation, and one paying annual insurance or software in a single instalment shows a loss in a month that was fine. The genuinely useful middle ground the genre skips is a short accrual overlay: track deferred revenue and prepaid expenses only, on cash-basis books, which gives most of the insight for a fraction of the effort.",
            ours: "We flag that changing tax accounting method requires consent rather than a software setting, and offer the deferred-revenue and prepaid overlay as the practical middle path."
          },
          {
            claim: "&lsquo;Close within 15 days \u2014 stale books are why lending applications stall.&rsquo;",
            problem: "Right about the symptom, wrong about the cause, and it therefore prescribes speed where the fix is structure. Applications stall because the books do not agree with the documents the lender independently obtains: the bank statements, and the filed tax return. The reconciling item is almost always owner activity \u2014 personal expenses run through the business, owner draws recorded as expenses, cash injections booked as revenue, related-party transfers with no documentation. A fast close on books with mixed personal spending is quicker to reject, not more fundable. There is a second structural item nobody mentions: books that agree with the return still fail if the equity section is nonsense, because an equity account that has absorbed years of unexplained plugs is the clearest possible signal of unreliability. Underwriters also look for consistency across periods rather than a single tidy month, so a sudden change in how something is categorised reads as a red flag even when the new treatment is the correct one.",
            ours: "We target agreement with the bank statements and the filed return rather than speed, isolate owner activity into equity accounts, and keep categorisation consistent across periods because inconsistency reads as unreliability."
          },
          {
            claim: "&lsquo;Keep the chart of accounts small \u2014 forty accounts you read beats two hundred you ignore.&rsquo;",
            problem: "Good advice with an important exception the genre never states, which is that some detail is not optional. Deductibility and reporting obligations attach to specific categories rather than to your management preferences: expenses subject to statutory limits, payments requiring information returns to contractors, sales tax collected which is a liability rather than revenue, and payroll tax withheld which is held in trust and must never be commingled in a general account. Collapsing those into a tidy summary account creates work at year end and risk at audit. The reframing that resolves it is that a chart of accounts serves two masters \u2014 tax compliance needs granularity in defined places, management reporting needs brevity everywhere else \u2014 and the correct structure is minimal accounts plus dimensions for everything else. It is also worth stating that the retention periods differ by record type, and that permanence applies to a narrower set than owners assume.",
            ours: "We keep the chart minimal except where a category carries a statutory limit, an information-return duty, or trust money \u2014 sales tax and payroll withholding stay separate on principle, not for tidiness."
          }
        ],
        only: [
          "Categorisation distinguished from reconciliation, with the institution's statement as the comparison document — the difference a bank feed hides.",
          "Processor deposits booked gross with fees, not net, and why the net shortcut misstates revenue itself.",
          "Changing tax accounting method needs consent, not a setting — plus a deferred-revenue and prepaid overlay as the practical middle path.",
          "Why applications stall on owner activity and a nonsensical equity section rather than on the age of the books.",
          "Where a minimal chart of accounts must not be minimal: statutory limits, information returns, sales tax and payroll withholding held in trust."
        ]
      },
      faq: [
        { q: "When should I hire a bookkeeper?", a: "<p>When the close takes you more than half a day, or you have stopped doing it.</p>" },
        { q: "How long must records be kept?", a: "<p>Generally three years from filing, longer in some situations, and employment tax records have their own minimum. Formation documents and asset basis records should be kept for as long as you hold the entity or the asset.</p>" },
        { q: "The software says everything is categorised. Are my books reconciled?", a: "<p>Not necessarily — those are different things. Reconciliation means comparing your ledger to the statement the bank or processor issued and explaining every difference. A bank feed can categorise a duplicated transaction perfectly.</p>" },
        { q: "Can I switch from cash to accrual whenever I like?", a: "<p>For internal reporting, yes. Changing the accounting method your tax return is filed on is a formal change that generally requires IRS consent — ask your CPA before switching rather than after.</p>" }
      ],
      sources: [
        { name: "IRS — recordkeeping for businesses", url: "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping", note: "Retention periods by record type" },
        { name: "IRS Publication 538 — accounting periods and methods", url: "https://www.irs.gov/publications/p538", note: "Cash versus accrual eligibility and the consent requirement for changing method" },
        { name: "IRS — employment taxes and trust fund responsibility", url: "https://www.irs.gov/businesses/small-businesses-self-employed/employment-taxes", note: "Why withheld payroll tax must not be commingled" }
      ],
      related: ["payroll-software-guide", "cash-flow-management"]
    },

    "business-credit-score": {
      title: "Business credit scores: how they work and how to build one",
      h1: "Building business credit that lenders actually use",
      section: "Books",
      eyebrow: "Explainer",
      dek: "Commercial bureaus, what reports and what doesn't, and why your personal score still decides most small-business pricing.",
      answer: "Commercial bureaus score payment behaviour on reported trade lines. Below roughly $1m revenue, <strong>the owner's personal credit still drives pricing</strong>. Build both: pay reporting vendors early and keep personal utilisation under 30%.",
      body:
        "<h2>Who scores what</h2>" +
        "<p>Commercial bureaus build files from trade references, public records and collections. Scores emphasise <em>paying early</em>, not merely on time — a distinction that surprises most owners.</p>" +
        "<!--AD-->" +
        "<h2>Building a file that exists</h2>" +
        "<ol><li>Get an EIN and a consistent legal name and address everywhere.</li>" +
        "<li>Open two or three vendor accounts that report.</li>" +
        "<li>Pay before the due date, not on it.</li>" +
        "<li>Add a business card that reports commercially.</li>" +
        "<li>Check your files annually and dispute errors in writing.</li></ol>" +
        "<h2>What lenders look at anyway</h2>" +
        "<p>Bank statements. Twelve months of deposits, average balances, negative days and NSF counts tell an underwriter more than any score. Clean those up before applying for <a href='business-loan-rates.html'>anything priced on risk</a>.</p>",
      faq: [
        { q: "Can I get business credit with no personal guarantee?", a: "<p>Rarely under a few million in revenue, outside some vendor and fleet accounts.</p>" },
        { q: "Do business cards affect my personal score?", a: "<p>Usually only if you default — but the personal guarantee means the debt is yours regardless.</p>" }
      ],
      related: ["business-credit-card-basics", "small-business-financing-guide"]
    },

    "sba-loan-guide": {
      title: "SBA loans: 7(a), 504 and microloans explained",
      h1: "SBA loans, from eligibility to closing",
      section: "Borrowing",
      eyebrow: "Explainer",
      dek: "What the guarantee actually does, which programme fits, the documents required, and realistic timelines.",
      disclosure: true,
      answer: "The SBA does not lend — it guarantees part of a bank's loan, which lets the bank approve borrowers it would otherwise decline. <strong>7(a)</strong> covers general purposes to $5m; <strong>504</strong> funds real estate and heavy equipment; <strong>microloans</strong> go to $50k.",
      body:
        "<h2>Which programme</h2>" +
        "<ul><li><strong>7(a)</strong> — working capital, acquisition, refinance, partner buyout. The workhorse.</li>" +
        "<li><strong>504</strong> — owner-occupied real estate and long-life equipment, fixed rate, long term.</li>" +
        "<li><strong>Microloan</strong> — under $50k via nonprofit intermediaries; realistic for young businesses.</li></ul>" +
        "<!--AD-->" +
        "<h2>The document pack</h2>" +
        "<p>Three years of business and personal tax returns, interim financials, debt schedule, personal financial statement, ownership documents, and a use-of-funds statement. Assemble it before applying; incomplete files are the main cause of eight-week timelines.</p>" +
        "<h2>Realistic expectations</h2>" +
        "<p>Expect 3–8 weeks, a personal guarantee from every 20%+ owner, a lien on business assets, and a guarantee fee financed into the loan. In exchange you get the longest terms and lowest rates available to a small company — compare against current <a href='business-loan-rates.html'>market rates</a>.</p>",
      faq: [
        { q: "Can a startup get SBA funding?", a: "<p>Microloans and some 7(a) lenders do fund startups with strong management experience and equity injection, typically 10–20%.</p>" },
        { q: "Is there a prepayment penalty?", a: "<p>On loans over 15 years, yes, in the first three years. Most shorter 7(a) loans have none.</p>" }
      ],
      sources: [{ name: "SBA — 7(a) loan program", url: "https://www.sba.gov/funding-programs/loans/7a-loans" }],
      related: ["small-business-financing-guide", "business-loan-rates"]
    },

    "business-loan-rates": {
      title: "Business loan rates 2026: current pricing by lender type",
      h1: "Business loan rates in 2026",
      section: "Cost & rates",
      eyebrow: "High-intent rate guide",
      dek: "Current APR ranges by lender type and credit profile, what moves your rate, and the offers that are not what they appear.",
      disclosure: true,
      answer: "In mid-2026, well-qualified small businesses see roughly <strong>9–14% APR</strong> from banks and SBA lenders, <strong>15–45%</strong> online, and <strong>60%+</strong> from advance products once converted. Time in business and debt service coverage move your rate more than shopping does.",
      table: {
        caption: "Indicative APR by lender type and profile, July 2026.",
        headers: ["Lender type", "Strong profile", "Average profile", "Thin file", "Typical term"],
        rows: [
          { best: true, cells: ["SBA 7(a) via bank", "9% – 11%", "11% – 13%", "Often declined", "7–10 years"] },
          { cells: ["Community bank term loan", "9% – 12%", "12% – 16%", "Declined", "3–7 years"] },
          { cells: ["Credit union", "8.5% – 12%", "12% – 15%", "Case by case", "3–7 years"] },
          { cells: ["Online term lender", "15% – 24%", "24% – 38%", "38% – 45%", "6–24 months"] },
          { cells: ["Revenue-based advance", "60% – 90%", "90% – 120%", "120%+", "3–12 months"] }
        ],
        note: "Benchmark ranges compiled from published rate sheets and lender disclosures, July 2026. Not offers; individual pricing varies."
      },
      body:
        "<h2>The five factors that set your rate</h2>" +
        "<ol><li><strong>Time in business.</strong> Two years is the pricing cliff.</li>" +
        "<li><strong>Debt service coverage ratio.</strong> Below 1.25× and pricing deteriorates fast.</li>" +
        "<li><strong>Owner personal credit.</strong> Still decisive below roughly $1m revenue.</li>" +
        "<li><strong>Deposit behaviour.</strong> Negative days and NSFs are read as operational risk.</li>" +
        "<li><strong>Collateral.</strong> Secured pricing beats unsecured by several points.</li></ol>" +
        "<!--AD-->" +
        "<h2>Offers that are not rates</h2>" +
        "<p>Factor rates, 'total payback', daily debits and 'cost of capital' are all ways of avoiding APR. Convert them with the <a href='loan-payment-calculator.html'>calculator</a>. A 1.25 factor over six months is roughly 90% APR.</p>" +
        "<!--FIG:Same $50,000 borrowed, five products, APR compared-->" +
        "<h2>Getting a better number honestly</h2>" +
        "<ul><li>Apply after two clean quarters of deposits, not during a dip.</li>" +
        "<li>Offer collateral you can live without.</li>" +
        "<li>Ask for a shorter term at a lower rate if cash flow supports it.</li>" +
        "<li>Get two bank quotes before any online offer, so you know the floor.</li></ul>",
      edge: {
        intro: "Nearly every page ranking for this query is a lead-generation site paid per submitted application, and that changes what they publish in a specific way: the rate table is an advertisement for applying, and the four things that determine what borrowing actually costs you — none of which is the rate — are missing.",
        gaps: [
          {
            claim: "\"Business loans from 6.5% APR. Compare top lenders and get pre-qualified in minutes.\"",
            problem: "Three separate distortions are stacked in that sentence. The advertised figure is the floor available to the strongest applicant on the least attractive term, not a price anyone reading a rate-comparison page is likely to receive. Many online lenders quote an <em>interest rate</em> rather than APR, which excludes the origination fee — a 10% rate with a 5% origination fee on a twelve-month term is not a 10% loan. And several quote &lsquo;simple interest&rsquo; on the original principal rather than the declining balance, which roughly doubles the effective cost on an amortising loan. Three lenders can advertise the same number and charge materially different amounts.",
            ours: "We publish ranges by <em>profile</em> — strong, average, thin file — and state which fees are inside the figure. When a quote is not an APR on a declining balance, we say so rather than tabulating it beside one."
          },
          {
            claim: "\"Applying costs nothing and checking your options won't hurt you.\"",
            problem: "The submission itself has a price that no comparison site discloses, because the site is paid for the submission. A single application to an aggregator is commonly resold to a panel of funders, which produces repeated pulls of the same file and weeks of calls — but the material cost is a lien. Most non-bank business lenders file a UCC-1 financing statement, frequently a blanket lien over all business assets. Once it is on record, a cheaper bank or SBA lender will decline or require the incumbent to subordinate, which they have no obligation to do. Accepting a small, fast, expensive advance can therefore disqualify you from the cheap credit you would have got two quarters later, and the block persists until the lien is terminated — which lenders are often slow to file.",
            ours: "We treat the UCC-1 as a cost of the first loan: we say to check for existing filings before applying, to ask what will be filed and over what collateral, and to get written confirmation of termination on payoff."
          },
          {
            claim: "\"Pay it off early to save on interest.\"",
            problem: "This is true of an amortising term loan and false of the products most heavily advertised to small businesses. A factor-rate advance sets a fixed total repayment at the outset — 1.25 times the advance is owed whether it is repaid in twelve months or three — so early repayment raises the effective annualised cost instead of lowering it. Any discount for early payoff is discretionary and negotiated, not contractual. Meanwhile some genuinely cheap loans run the other way: SBA loans with maturities of fifteen years or more carry a declining prepayment penalty in the early years. So the advice is inverted for both ends of the market and correct only in the middle.",
            ours: "We separate <em>fixed-total-repayment</em> products from <em>interest-accrual</em> products, because the correct behaviour on early repayment is opposite in each, and we flag prepayment penalties on long-maturity loans."
          },
          {
            claim: "APR is the single number to compare, so convert everything and pick the lowest.",
            problem: "We publish an APR converter and still consider this incomplete, because APR annualises cost and says nothing about whether you survive the payment schedule. A 40% APR loan amortised monthly over three years and a 40% APR facility taking a fixed debit every business day place entirely different demands on a business with lumpy receipts; the second fails on a slow fortnight regardless of the rate being identical. What is also priced out of the comparison is the personal guarantee — near-universal below roughly a million in revenue — and, in a minority of contracts, a confession of judgment or similar clause that converts a business dispute into a direct claim on personal assets. Those terms do not appear in any rate table.",
            ours: "We pair APR with two tests the comparison sites omit: the debt service coverage of the actual payment <em>schedule</em> against your worst recent month, and what has been personally guaranteed."
          }
        ],
        only: [
          "Which fees are inside the advertised number — and why interest-rate, simple-interest and APR quotes are not comparable.",
          "The UCC-1 blanket lien as a cost of the first loan: how a fast advance disqualifies you from cheaper bank credit.",
          "Fixed-total-repayment versus interest-accrual products, where correct early-repayment behaviour is opposite.",
          "Prepayment penalties on long-maturity SBA loans, which the 'always pay early' advice ignores.",
          "The payment-schedule survival test and the personal guarantee, neither of which appears in a rate comparison."
        ]
      },
      leadForm: {
        title: "Compare financing options",
        sub: "Tell us the amount, purpose and time in business; we route you to lenders whose published criteria you actually meet.",
        offer: "business-loan-comparison",
        numberLabel: "Amount needed (USD)",
        consent: "I consent to being contacted about business financing. LedgerLift may be paid a referral fee. No credit check occurs from this form.",
        cta: "See my realistic options",
        steps: ["We check your profile against published lender criteria.", "You are told who will contact you before anything is shared.", "You get APR-normalised comparisons, not factor rates.", "We send the lender document checklist either way."],
        privacy: "Stored: name, email, company, amount, notes. Never sold. No hard credit pull."
      },
      faq: [
        { q: "Do rates fall if I shop around?", a: "<p>Within a lender tier, marginally. Between tiers, enormously — moving from an advance to a bank loan halves cost or better.</p>" },
        { q: "How many applications is too many?", a: "<p>Two or three within a fortnight is normal. Broker-shotgunned applications damage you with funders who see the same file repeatedly.</p>" }
      ],
      sources: [
        { name: "Federal Reserve — Small Business Credit Survey", url: "https://www.fedsmallbusiness.org/", note: "Approval rates and financing costs by firm profile" },
        { name: "SBA — 7(a) loan programme", url: "https://www.sba.gov/funding-programs/loans/7a-loans", note: "Maximum rates, maturities and prepayment terms" },
        { name: "FTC — business guidance", url: "https://www.ftc.gov/business-guidance", note: "Enforcement and guidance on small-business financing practices" }
      ],
      related: ["small-business-financing-guide", "business-line-of-credit-rates", "sba-loan-guide"]
    },

    "business-line-of-credit-rates": {
      title: "Business line of credit rates and how to qualify",
      h1: "Business lines of credit: rates, terms and traps",
      section: "Cost & rates",
      eyebrow: "High-intent rate guide",
      dek: "Bank versus online pricing, draw fees, clean-down requirements and what a line should actually be used for.",
      disclosure: true,
      answer: "Bank lines commonly price at <strong>prime plus 2–7%</strong>; online lines run <strong>20–60% APR</strong> with draw fees. A line is for timing gaps that reverse within 90 days — using one for permanent working capital is a slow, expensive mistake.",
      table: {
        caption: "Indicative line-of-credit pricing, July 2026.",
        headers: ["Source", "Rate structure", "Typical limit", "Fees", "Qualification"],
        rows: [
          { best: true, cells: ["Bank / credit union", "Prime + 2% – 7%", "$25k – $500k", "Annual fee, unused-line fee", "2+ years, profitable"] },
          { cells: ["SBA CAPLines", "Prime + 2.75% – 4.75%", "Up to $5m", "Guarantee fee", "Full SBA underwriting"] },
          { cells: ["Online revolving line", "20% – 60% APR", "$5k – $250k", "1–3% per draw", "6+ months, revenue minimum"] }
        ],
        note: "Ranges from published rate sheets, July 2026. Prime assumed at 7.5% for illustration."
      },
      body:
        "<h2>Read these four terms first</h2>" +
        "<ol><li><strong>Draw fee</strong> — 2% per draw on a 30-day need is 24% annualised on its own.</li>" +
        "<li><strong>Clean-down</strong> — many bank lines require 30 consecutive days at zero each year.</li>" +
        "<li><strong>Unused line fee</strong> — you pay for capacity you do not use.</li>" +
        "<li><strong>Demand feature</strong> — some lines can be called; know before you rely on it.</li></ol>" +
        "<!--AD-->" +
        "<h2>What a line is for</h2>" +
        "<p>Payroll timing, inventory ahead of a season, bridging a receivable you can name. Not: covering losses, funding a hire you cannot yet afford, or repaying another line. If the balance never reaches zero, it is a term loan priced as a revolver.</p>" +
        "<h2>Improving your odds</h2>" +
        "<p>Apply before you need it, with clean statements and current books. Lines are approved on stability; requesting one during a cash crisis is the worst possible timing. See <a href='business-loan-rates.html'>loan rates</a> for the term-debt alternative.</p>",
      edge: {
        intro: "The dominant framing on this topic is that a line of credit is flexible money you only pay for when you use it — a safety net that sits there costing nothing. Every part of that is conditional, and the conditions are in the credit agreement rather than the rate sheet. The pattern is the same one we document on <a href='../ratebeacon/heloc-rates.html'>HELOCs</a>: a facility marketed as standby capacity, sold on a rate, governed by clauses that remove it.",
        gaps: [
          {
            claim: "\"Get a line of credit as a safety net, so the money is there if you ever need it.\"",
            problem: "Committed capacity and available capacity are different things. Bank lines are typically annual facilities, re-underwritten at renewal on current financials; many contain a demand feature, a borrowing-base test, or a material adverse change clause allowing the lender to reduce or suspend availability between renewals. The trigger for all of these is deteriorating performance — which is precisely the circumstance in which you planned to draw. The facility is therefore most reliable when you least need it and least reliable when you do, and that is not a lender behaving badly but the contract operating as written.",
            ours: "We treat an undrawn line as capacity that may be withdrawn, name the three clauses that do it, and say to keep a cash reserve alongside rather than instead of the line."
          },
          {
            claim: "Pricing is quoted as &lsquo;prime plus 2%&rsquo;, as though that describes the rate you will pay.",
            problem: "It describes today's rate on a variable facility, and the variability is usually asymmetric. Agreements commonly contain a floor — a minimum rate irrespective of where prime goes — so a rate-cutting cycle passes you by while a rate-rising cycle is passed through in full. Comparison pages quote the spread and omit the floor, which is the term that decides whether a cut ever reaches you. A borrower choosing between prime+3% with a 9% floor and prime+4% with no floor is making a real decision that the tables render invisible.",
            ours: "We tell readers to ask for the floor and the reset frequency in writing, and we show that a wider spread with no floor can be cheaper than a tight spread with one."
          },
          {
            claim: "\"You only pay interest on what you draw — so there's no cost to having it.\"",
            problem: "There are four charges that are not interest: an annual or facility fee, an unused-line fee on the undrawn balance at banks, a per-draw fee of one to three percent on many online lines, and in some agreements a minimum-draw or clean-down requirement. The draw fee is the one that misleads most, because it is quoted as a flat percentage and behaves like a rate: two percent to draw for thirty days is roughly twenty-four percent annualised on its own, <em>before</em> any stated APR. A borrower drawing repeatedly for short gaps — the exact use case a line is sold for — can pay several times the advertised rate while every individual charge looks small.",
            ours: "We annualise the draw fee against the length of the gap you are actually bridging, which converts the small flat percentage into the number that belongs beside the APR."
          },
          {
            claim: "Qualification is about revenue and credit score; hit the minimums and you are approved.",
            problem: "Those are the screening criteria, not the terms. What survives into the agreement is a set of ongoing obligations: financial covenants tested quarterly, reporting deadlines, a personal guarantee, and typically a blanket UCC-1 lien over business assets. Two consequences go unmentioned. A covenant breach is a default even when every payment has been made on time, and it can accelerate the balance. And the blanket lien encumbers the collateral you would need for later equipment or term financing, so the cheap standby line quietly prices your next borrowing. Approval is where the comparison pages stop and where the cost actually begins.",
            ours: "We list the covenants, guarantee and lien as part of the price of the facility, and note that a technical breach with a perfect payment record is still a default."
          }
        ],
        only: [
          "Committed versus available capacity — the demand, borrowing-base and material-adverse-change clauses that remove a line when you need it.",
          "Rate floors: why a variable line often captures rate rises but not rate cuts, and how to compare spread against floor.",
          "The draw fee annualised over the real length of the gap, placed beside the APR where it belongs.",
          "Covenants and reporting as default triggers independent of payment history.",
          "The blanket UCC-1 lien as a cost imposed on your <em>next</em> financing, not this one."
        ]
      },
      leadForm: {
        title: "Check line of credit options",
        sub: "We match your profile against lenders' published criteria and tell you the realistic tier before you apply anywhere.",
        offer: "line-of-credit-comparison",
        numberLabel: "Line size wanted (USD)",
        consent: "I consent to being contacted about a business line of credit. LedgerLift may be paid a referral fee.",
        cta: "See realistic line options",
        steps: ["We check time in business and revenue against criteria.", "You are told who will contact you.", "Draw fees and clean-down terms are compared, not just rates.", "You get the pre-application checklist regardless."],
        privacy: "Stored: name, email, company, amount, notes. Never sold."
      },
      faq: [
        { q: "Does an unused line cost anything?", a: "<p>Often 0.25–0.5% annually on the undrawn amount at banks. Usually nothing online — but draw fees are higher.</p>" },
        { q: "Line or credit card?", a: "<p>Card for everyday spend cleared monthly; line for larger amounts held for weeks. Card APR is worse if you revolve.</p>" }
      ],
      sources: [
        { name: "Federal Reserve — Small Business Credit Survey", url: "https://www.fedsmallbusiness.org/", note: "Application, approval and product-mix data for small firms" },
        { name: "SBA — 7(a) loan programme, including CAPLines", url: "https://www.sba.gov/funding-programs/loans/7a-loans", note: "Revolving facility structures and maximum rates" }
      ],
      related: ["small-business-financing-guide", "cash-flow-management", "business-loan-rates"]
    },

    "merchant-services-cost": {
      title: "Merchant services cost 2026: what card processing should cost you",
      h1: "What card processing should cost in 2026",
      section: "Cost & rates",
      eyebrow: "High-intent pricing guide",
      dek: "Effective-rate benchmarks by business type and volume, plus the markup you should be able to negotiate.",
      disclosure: true,
      answer: "Benchmark your <strong>effective rate</strong> (total fees ÷ card volume). Card-present retail should land <strong>2.2–2.6%</strong>; e-commerce <strong>2.7–3.1%</strong>. Above $50k monthly volume, interchange-plus at 0.15–0.35% markup is achievable.",
      table: {
        caption: "Target effective rates by business type, July 2026.",
        headers: ["Business type", "Monthly card volume", "Good effective rate", "Best pricing model"],
        rows: [
          { cells: ["Retail / card present", "Under $25k", "2.5% – 2.8%", "Flat rate"] },
          { best: true, cells: ["Retail / card present", "$25k – $250k", "2.2% – 2.5%", "Interchange-plus"] },
          { cells: ["E-commerce", "Under $25k", "2.9% – 3.2%", "Flat rate"] },
          { cells: ["E-commerce", "$25k – $250k", "2.6% – 2.9%", "Interchange-plus"] },
          { cells: ["B2B with corporate cards", "Any", "2.4% – 2.9%", "Interchange-plus with L2/L3 data"] }
        ],
        note: "Effective rate includes all monthly and per-transaction fees. Compiled from processor statements reviewed July 2026."
      },
      body:
        "<h2>Work out your real number</h2>" +
        "<p>Take three months of statements. Add every fee — per-transaction, monthly, PCI, gateway, batch, chargeback, minimums. Divide by card volume processed. That percentage is the only figure worth comparing between quotes.</p>" +
        "<!--AD-->" +
        "<h2>Where the savings actually are</h2>" +
        "<ul><li>Moving off tiered pricing: often 0.4–0.8% immediately.</li>" +
        "<li>Passing Level 2/3 data on B2B card payments: material on corporate cards.</li>" +
        "<li>Removing PCI 'non-compliance' fees by completing the questionnaire.</li>" +
        "<li>Cancelling a gateway you no longer route through.</li></ul>" +
        "<!--FIG:Effective rate before and after moving from tiered to interchange-plus-->" +
        "<h2>Negotiating without switching</h2>" +
        "<p>Get one competing interchange-plus quote in writing, then ask your processor to match the markup. Retention teams frequently do. If they will not disclose the markup at all, that is the answer. Background: <a href='merchant-account-fees.html'>how the fees are built</a>.</p>",
      edge: {
        intro: "This query is answered almost entirely by processors and their resellers, so the pages fall into two camps: one tells you flat-rate pricing is robbery and to move to interchange-plus, the other tells you interchange-plus is opaque and to stay flat. Both are selling. The arithmetic that decides it is simple, volume-dependent, and printed nowhere — and the largest costs in this category are not in the pricing model at all.",
        gaps: [
          {
            claim: "\"Flat-rate processing is costing you thousands. Switch to interchange-plus and save.\"",
            problem: "Interchange-plus wins on the percentage and can lose on the total, because it arrives with fixed monthly charges that flat-rate pricing bundles away: monthly account and statement fees, gateway fees, PCI fees, batch fees and a monthly minimum. Those are close to constant, so they fall as a share of volume as volume rises — which means the comparison has a breakeven, not a winner. Divide the interchange-plus monthly fixed charges by the percentage saving on the markup, and you get the volume above which switching pays. Below it, the low percentage costs more every month. Businesses under roughly twenty-five thousand a month in card volume are frequently sold a &lsquo;saving&rsquo; that raises their effective rate, and the statement proves it within one cycle.",
            ours: "We give the breakeven as arithmetic on your own numbers, so the answer is a calculation rather than a claim, and we say plainly that flat rate is correct at low volume."
          },
          {
            claim: "\"Eliminate processing fees entirely with a cash-discount or surcharging programme — 0% cost processing.\"",
            problem: "The fee does not disappear; it is moved onto the customer, and the move is constrained in ways the pitch omits. Card network rules cap a surcharge at the merchant's actual cost of acceptance for that card type and require disclosure at entry and at the point of sale; debit transactions may not be surcharged at all even when the customer runs the card as credit; and several states restrict or prohibit the practice, with the position changing through litigation and legislation. The uncosted item is behavioural: a visible surcharge at checkout depresses conversion and average order value, and in card-not-present retail a small drop in completed baskets exceeds the two to three percent saved. Non-compliance also carries network fines and the loss of the account, which is a larger exposure than the fees being avoided.",
            ours: "We treat this as a transfer rather than a saving, name the debit carve-out and the disclosure and cap rules, and price the conversion loss that determines whether the transfer is worth making."
          },
          {
            claim: "\"Lifetime rate lock — your rate will never increase.\"",
            problem: "What can be locked is the processor's markup. Interchange itself is set by the card networks and revised on a published schedule, typically twice a year, and it is passed straight through; assessments move too. So a locked account's effective rate rises regardless of the guarantee, and a reseller can accurately claim never to have raised your rate while your statement climbs. The same asymmetry runs the other way: when interchange categories are cut, a tiered account absorbs the reduction rather than passing it on, because tiers are the processor's own buckets and not network categories. This is why moving off tiered pricing so often produces an immediate improvement that has nothing to do with negotiation.",
            ours: "We distinguish the three components — interchange, assessments, markup — say which one a lock actually covers, and note the semi-annual reset dates so a statement rise can be attributed correctly."
          },
          {
            claim: "Comparison pages rank processors on rate, with contract terms as a footnote.",
            problem: "The most expensive commitments in this category are not priced per transaction. A separate non-cancellable equipment lease, signed with a leasing company rather than the processor and usually personally guaranteed, can total several times the terminal's purchase price and survives switching processors entirely. Multi-year agreements with automatic renewal and an early termination or liquidated-damages fee convert a rate saving into a penalty. A rolling reserve withholds a percentage of your settlements for months. And placement on the card networks' terminated-merchant file after a compliance termination can make you unbankable for years — a consequence with no rate equivalent. None of these appear in a rate table, and all of them outweigh a twenty-basis-point markup difference.",
            ours: "We audit the four contract mechanisms — equipment lease, auto-renewal and termination fee, reserve, and termination-file exposure — before comparing any percentage, and we say to buy terminals outright rather than lease."
          }
        ],
        only: [
          "The flat-rate versus interchange-plus breakeven as arithmetic on your own volume, including why flat rate is correct below it.",
          "Surcharging priced honestly: debit carve-out, cost cap and disclosure rules, plus the conversion loss nobody quotes.",
          "What a 'lifetime rate lock' can and cannot lock, and the semi-annual interchange resets that move your rate anyway.",
          "Why tiered pricing absorbs interchange decreases while passing increases through.",
          "The four contract mechanisms — equipment lease, auto-renewal, rolling reserve, terminated-merchant file — that dwarf markup differences."
        ]
      },
      leadForm: {
        title: "Get a processing cost review",
        sub: "Send your volume mix and we will show what your effective rate should be, and which model fits.",
        offer: "merchant-services-review",
        numberLabel: "Monthly card volume (USD)",
        consent: "I consent to being contacted about payment processing. LedgerLift may be paid a referral fee.",
        cta: "Review my processing cost",
        steps: ["We benchmark your effective rate against your business type.", "You are told who will contact you.", "You get the interchange-plus target markup for your volume.", "The statement-audit worksheet is sent regardless."],
        privacy: "Stored: name, email, company, volume, notes. Never sold."
      },
      faq: [
        { q: "Is a flat rate ever right?", a: "<p>Yes — under about $25k monthly, simplicity usually beats the small interchange-plus saving.</p>" },
        { q: "What about early termination fees?", a: "<p>Common on hardware leases and older contracts. Ask for the fee in writing before you sign anything.</p>" }
      ],
      sources: [
        { name: "Federal Reserve — Regulation II, debit interchange", url: "https://www.federalreserve.gov/paymentsystems/regii-about.htm", note: "Debit interchange standards and the debit surcharging position" },
        { name: "FTC — business guidance on payments and billing", url: "https://www.ftc.gov/business-guidance", note: "Disclosure obligations for fees charged to customers" },
        { name: "PCI Security Standards Council", url: "https://www.pcisecuritystandards.org/", note: "Self-assessment questionnaires behind PCI compliance fees" }
      ],
      related: ["merchant-account-fees", "cash-flow-management"]
    },

    "best-business-bank-accounts": {
      title: "Best business bank accounts 2026, scored against a published rubric",
      h1: "Business bank accounts compared",
      section: "Comparisons",
      eyebrow: "Comparison · scored rubric",
      dek: "Account types scored on true cost, transparency, access to funds, integrations and support — with the scoring shown.",
      disclosure: true,
      answer: "Match the <strong>account type</strong> to your money flow first: cash-heavy businesses need a branch network; digital B2B businesses are usually better served by a fintech account with strong integrations; anyone expecting to borrow within two years should bank where they intend to borrow.",
      table: {
        caption: "Account archetypes scored against the LedgerLift rubric, July 2026.",
        headers: ["Account type", "True cost", "Access to funds", "Integrations", "Best for"],
        rows: [
          { best: true, cells: ["<strong>Community bank business checking</strong>", "Low–moderate", "Strong", "Basic", "Anyone borrowing within 2 years"] },
          { cells: ["<strong>National bank business checking</strong>", "Moderate–high", "Strong", "Moderate", "Cash deposits, branch needs"] },
          { cells: ["<strong>Fintech business account</strong>", "Low", "Variable", "Excellent", "Digital B2B, remote teams"] },
          { cells: ["<strong>Credit union business account</strong>", "Low", "Strong", "Basic", "Local businesses, relationship pricing"] }
        ],
        note: "Archetypes rather than brands: pricing varies by region and balance tier. Score the specific institution against the rubric using its current fee schedule."
      },
      body:
        "<h2>How we scored</h2>" +
        "<p>Each archetype is scored on the six weighted criteria in our <a href='review-methodology.html'>methodology</a>, modelled on an identical business: $600k revenue, 180 monthly transactions, $4k cash deposits, two wires, biweekly payroll.</p>" +
        "<!--AD-->" +
        "<h2>Run your own numbers</h2>" +
        "<ol><li>Count last month's transactions, cash deposits and wires.</li>" +
        "<li>Price them against each fee schedule — not the marketing page.</li>" +
        "<li>Add the cost of missing the balance minimum in your worst month.</li>" +
        "<li>Ask what happens to funds during a fraud review, and get it in writing.</li></ol>" +
        "<h2>The tiebreaker</h2>" +
        "<p>If you will need credit within two years, bank with the institution you want to borrow from. Deposit history at the same bank is the cheapest underwriting advantage available to a small company.</p>",
      methodology: "<p>Scored against the rubric in our <a href='review-methodology.html'>review methodology</a>, using published fee schedules and deposit agreements collected in July 2026. Affiliate relationships do not affect scoring or ordering.</p>",
      faq: [
        { q: "Why no brand ranking?", a: "<p>Because business account pricing is regional and balance-tiered; a national ranking would mislead more often than it helped. We give you the model and the rubric instead.</p>" },
        { q: "Can I hold accounts at two institutions?", a: "<p>Yes, and many should: a bank for lending and cash, a fintech account for integrations.</p>" }
      ],
      related: ["business-bank-account-guide", "business-credit-card-basics"]
    },

    "best-payroll-software": {
      title: "Best payroll software for small business 2026",
      h1: "Payroll platforms compared",
      section: "Comparisons",
      eyebrow: "Comparison · scored rubric",
      dek: "Scored on tax filing guarantees, multi-state capability, contractor handling, ledger integration and support.",
      disclosure: true,
      answer: "Choose on <strong>tax filing guarantee, state registration support and ledger integration</strong>. Per-employee pricing differences of a few dollars are noise next to one late filing penalty or a month-end that will not reconcile.",
      table: {
        caption: "Payroll platform archetypes scored against the LedgerLift rubric, July 2026.",
        headers: ["Platform type", "Tax filing", "Multi-state", "Ledger sync", "Best for"],
        rows: [
          { best: true, cells: ["<strong>Full-service SMB payroll</strong>", "Filed + guarantee", "Registers for you", "Strong", "1–50 employees, multiple states"] },
          { cells: ["<strong>Accounting-suite payroll</strong>", "Filed + guarantee", "Partial", "Native", "Businesses already on that ledger"] },
          { cells: ["<strong>PEO</strong>", "Filed under PEO", "Handled", "Report-based", "Benefits access, HR-heavy needs"] },
          { cells: ["<strong>Contractor-only platform</strong>", "1099 only", "N/A", "Moderate", "No W-2 employees"] }
        ]
      },
      body:
        "<h2>What to test in a trial</h2>" +
        "<ol><li>Run a parallel payroll and reconcile it to the cent.</li>" +
        "<li>Add an out-of-state employee and see whether registration is handled or handed back.</li>" +
        "<li>Export the journal entry and import it to your ledger.</li>" +
        "<li>Process an off-cycle payment and a correction.</li>" +
        "<li>Ask support a real tax question and time the answer.</li></ol>" +
        "<!--AD-->" +
        "<h2>PEO or platform</h2>" +
        "<p>A PEO buys benefits leverage and HR support at a percentage of payroll — often worth it under 30 employees wanting real health cover. You give up some control and exiting takes planning. Read the <a href='payroll-software-guide.html'>payroll guide</a> before deciding.</p>",
      methodology: "<p>Scored against our <a href='review-methodology.html'>methodology</a> using published pricing, service agreements and hands-on parallel payroll runs, June–July 2026.</p>",
      faq: [
        { q: "When should I switch?", a: "<p>At a quarter boundary, ideally 1 January, to avoid year-to-date import errors.</p>" },
        { q: "Does payroll software handle benefits?", a: "<p>Some administer deductions and carrier feeds; procuring the plan is a separate exercise.</p>" }
      ],
      related: ["payroll-software-guide", "bookkeeping-basics"],
      crossRefs: [{ slug: "benefitwell", page: "index", label: "Health benefits for small teams", why: "Payroll deductions are the easy half of offering benefits." }]
    },

    "loan-payment-calculator": {
      title: "Business loan & APR calculator: convert any offer to a real rate",
      h1: "Loan payment and APR calculator",
      section: "Tools",
      eyebrow: "Free tool",
      dek: "Turn factor rates, daily debits and 'total payback' offers into a monthly payment and a comparable APR.",
      disclosure: true,
      toc: false,
      answer: "Enter the amount, the cost as quoted, and the term. The calculator returns the monthly payment, total cost of capital and an approximate APR so two offers quoted in different units can finally be compared.",
      body:
        "<div id='calculator'></div>" +
        "<h2>Why APR is the only fair comparison</h2>" +
        "<p>APR normalises for term and payment frequency. A 1.22 factor rate repaid over six months costs roughly the same per dollar as a 1.44 factor over twelve — but the APRs are wildly different, and APR is what tells you which is dearer.</p>" +
        "<h2>What this model ignores</h2>" +
        "<ul><li>Origination fees deducted from proceeds (add them to cost of capital).</li>" +
        "<li>Prepayment penalties and, for advances, the absence of prepayment savings.</li>" +
        "<li>Covenant costs and required deposit balances.</li></ul>" +
        "<h2>Using the output</h2>" +
        "<p>Take the APR to your bank and ask them to beat it. Then check the cheaper structures in the <a href='business-loan-rates.html'>rate guide</a> before signing anything with daily debits.</p>",
      calculator: {
        title: "Offer-to-APR converter",
        sub: "Works with interest rates, factor rates and total-payback quotes.",
        disclaimer: "Approximation for comparison only, not a loan disclosure. Confirm the official APR in the lender's disclosure documents.",
        fields: [
          { id: "amount", label: "Amount funded (USD)", type: "number", value: 50000, min: 1000, max: 5000000, step: 1000 },
          { id: "mode", label: "How is the cost quoted?", type: "select", value: "rate", options: [{ value: "rate", label: "Interest rate (% per year)" }, { value: "factor", label: "Factor rate (e.g. 1.28)" }, { value: "total", label: "Total payback amount" }] },
          { id: "rate", label: "Interest rate (%) — if quoted that way", type: "number", value: 12, min: 0, max: 200, step: 0.25 },
          { id: "factor", label: "Factor rate — if quoted that way", type: "number", value: 1.28, min: 1, max: 3, step: 0.01 },
          { id: "total", label: "Total payback (USD) — if quoted that way", type: "number", value: 64000, min: 0, max: 10000000, step: 500 },
          { id: "months", label: "Term (months)", type: "number", value: 12, min: 1, max: 300, step: 1 },
          { id: "fees", label: "Origination / closing fees (USD)", type: "number", value: 1000, min: 0, max: 500000, step: 100 }
        ],
        compute: function (v) {
          var m = window.MDN_UTIL.money;
          var n = Math.max(1, v.months);
          var payment, totalPaid;
          if (v.mode === "rate") {
            var i = (v.rate / 100) / 12;
            payment = i > 0 ? (v.amount * i) / (1 - Math.pow(1 + i, -n)) : v.amount / n;
            totalPaid = payment * n;
          } else if (v.mode === "factor") {
            totalPaid = v.amount * v.factor;
            payment = totalPaid / n;
          } else {
            totalPaid = v.total;
            payment = totalPaid / n;
          }
          var netProceeds = v.amount - v.fees;
          var cost = totalPaid - netProceeds;
          /* Solve APR by bisection on the monthly payment stream. */
          var lo = 0, hi = 5, apr = 0;
          for (var k = 0; k < 80; k++) {
            var mid = (lo + hi) / 2;
            var r = mid / 12;
            var pv = r > 0 ? payment * (1 - Math.pow(1 + r, -n)) / r : payment * n;
            if (pv > netProceeds) { lo = mid; } else { hi = mid; }
            apr = mid;
          }
          var pct = (apr * 100);
          return [
            { label: "Approximate APR", value: pct.toFixed(1) + "%", hint: pct > 50 ? "Very expensive — treat as a last resort and compare a bank line." : pct > 25 ? "Costly. Worth getting two bank quotes before signing." : "Within normal small-business territory." },
            { label: "Monthly payment", value: m(payment), hint: "Daily-debit products divide this by ~21 business days." },
            { label: "Total repaid", value: m(totalPaid), hint: "Everything you hand back over the full term." },
            { label: "Total cost of capital", value: m(cost), hint: "Includes " + m(v.fees) + " of fees deducted up front." },
            { label: "Net cash received", value: m(netProceeds), hint: "What actually lands in the account." }
          ];
        }
      },
      faq: [
        { q: "Why does my APR differ from the lender's?", a: "<p>Lender disclosures use exact payment dates and day-count conventions. This is a comparison approximation, usually within a point or two.</p>" },
        { q: "How do I model daily payments?", a: "<p>Enter the term in months; the monthly figure divided by roughly 21 business days approximates the daily debit.</p>" }
      ],
      related: ["business-loan-rates", "small-business-financing-guide", "business-line-of-credit-rates"]
    },

    "cash-flow-checklist": {
      title: "Cash flow control checklist for small businesses",
      h1: "The cash flow control checklist",
      section: "Tools",
      eyebrow: "Free tool",
      dek: "Thirty controls across banking, receivables, payables, payroll and reserves. Tick as you go — progress saves in your browser.",
      toc: false,
      answer: "Work down the list and tick what is genuinely in place. Anything unticked is either a deliberate decision or an unmanaged risk — and writing down which is which is the whole exercise.",
      body:
        "<div id='checklist'></div>" +
        "<h2>How to use it</h2>" +
        "<p>Run it quarterly and after any change in customer mix, headcount or terms. Print the completed list for your accountant or board — it is a far better agenda than 'how are we doing on cash'.</p>" +
        "<h2>Then model it</h2>" +
        "<p>Pair the checklist with the 13-week forecast in the <a href='cash-flow-management.html'>cash flow guide</a>, and price any gap with the <a href='loan-payment-calculator.html'>APR calculator</a> before you borrow.</p>",
      checklist: {
        groups: [
          { title: "Banking structure", note: "Where money sits and how fast you can reach it.", items: ["Dedicated business operating account, no personal spend", "Separate tax reserve account funded on every deposit", "Buffer account holding one payroll plus one month of fixed costs", "Two authorised signatories or approvers on outbound payments", "Balance and low-balance alerts configured"] },
          { title: "Receivables", items: ["Written payment terms in every contract", "Invoice issued the day work completes", "Automated reminders at −3, +1, +7 and +14 days", "Named human call at day 21", "AR ageing reviewed weekly", "Stop-work clause you are willing to enforce"] },
          { title: "Payables", items: ["Supplier terms negotiated to at least net 30", "Payment run on a fixed weekly day, not ad hoc", "Early-payment discounts taken when cash allows", "No supplier over 20% of spend without a backup", "Recurring subscriptions reviewed quarterly"] },
          { title: "Payroll and tax", items: ["Payroll funded two business days ahead", "Payroll taxes filed by the provider with a guarantee", "Estimated taxes diarised quarterly", "Sales tax collected and remitted on schedule", "Contractor classifications reviewed annually"] },
          { title: "Forecasting", items: ["Rolling 13-week cash forecast updated weekly", "Scenario for losing your largest customer", "Working capital modelled before signing large contracts", "Seasonality mapped from last two years", "Break-even revenue known and monitored"] },
          { title: "Financing readiness", items: ["Books closed within 15 days of month-end", "Twelve months of statements with no negative days", "Debt schedule maintained and current", "Personal and business credit checked annually", "Banking relationship established before credit is needed"] }
        ]
      },
      faq: [
        { q: "Is my progress private?", a: "<p>Yes — ticks are stored only in your browser's local storage and never sent to us.</p>" },
        { q: "How often should I run it?", a: "<p>Quarterly, and immediately after any material change in customers, headcount or payment terms.</p>" }
      ],
      related: ["cash-flow-management", "bookkeeping-basics", "business-bank-account-guide"],
      cta: { title: "Get the forecast template", text: "The Cash Position includes a 12-month cash flow model you can fill in directly.", btn: "Subscribe", href: "index" }
    }
  }
};

window.SITE_DATA.aboutRelated = ["business-bank-account-guide", "best-business-bank-accounts"];
Object.assign(window.SITE_DATA.pages, window.MDN_TRUST(window.SITE_DATA));
window.MDN_SITES = window.MDN_SITES || {};
window.MDN_SITES[window.SITE_DATA.slug] = window.SITE_DATA;
