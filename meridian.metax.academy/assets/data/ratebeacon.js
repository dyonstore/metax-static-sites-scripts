/* RateBeacon — personal credit & mortgages. Content model. */
window.SITE_DATA = {
  slug: "ratebeacon",
  brand: "RateBeacon",
  mark: "RB",
  color: "#1d4ed8",
  tagline: "Borrowing decisions with the math shown",
  description: "Independent mortgage, refinancing, credit and debt payoff guides — every claim modelled with real numbers and sourced to federal data.",
  topicLong: "mortgages, refinancing, personal credit and debt payoff",
  ymylLabel: "Financial",
  reviewObject: "mortgage lenders, credit products and debt payoff strategies",
  updated: "29 July 2026",
  defaultAuthor: "Marcus Oyelaran",
  defaultReviewer: "Denise Whitlock, CFP®",
  contactEmail: "ratebeacon@metax.academy",
  disclaimer: "RateBeacon publishes general financial education, not financial, mortgage, tax or legal advice. Rates and terms change daily and depend on your credit, income, property and location. Verify current terms with a licensed lender and consider advice from a licensed professional before borrowing.",
  disclosureText: "Some links to lenders and credit products are affiliate or referral links. They never affect scoring, ordering, or whether a product appears in a comparison.",
  legalLine: "RateBeacon is not a lender, mortgage broker or credit repair organisation, and does not originate loans or negotiate with creditors.",
  footerAbout: "Independent analysis of the borrowing decisions that cost the most: mortgages, refinancing, credit scores and getting out of debt — with every calculation shown.",
  aboutDek: "Borrowing coverage written by people who show the arithmetic.",
  aboutWhat: "Mortgage and refinance explainers built from actual loan estimates; credit guides written from the scoring factors rather than folklore; comparisons scored against a public rubric; and calculators that expose total interest, not just the monthly payment.",
  aboutDiff: [
    "Every rate claim is dated and sourced to a federal survey or a lender's published rate sheet.",
    "We model total interest and break-even, not just the headline monthly payment.",
    "We publish the rubric and weights behind every comparison.",
    "A CFP® and a former mortgage underwriter review anything touching qualification or cost."
  ],
  cannotDo: "We cannot tell you which loan to take, quote you a rate, pull your credit, or negotiate with your creditors. Those require a licensed lender or a nonprofit credit counsellor who can see your full file.",
  sourceStandards: [
    "Freddie Mac Primary Mortgage Market Survey and Federal Reserve series for rate levels, with the release date.",
    "CFPB guidance and rules for disclosure, servicing and credit reporting questions.",
    "Lender Loan Estimates and published rate sheets, with the date collected.",
    "FICO and bureau documentation for scoring factors — never blog folklore."
  ],
  methodLimits: "Rates are individual. We publish ranges and the factors that move them rather than predicting the rate any single borrower will be offered, because pricing depends on a credit file we cannot see.",
  rubric: [
    { name: "Total cost of borrowing", weight: "30%", what: "APR, points, lender fees and total interest over the realistic holding period — not the teaser rate." },
    { name: "Pricing transparency", weight: "20%", what: "Whether rates and fees are published, whether quotes survive to the Loan Estimate, and how honestly points are explained." },
    { name: "Qualification clarity", weight: "15%", what: "Published credit, income and debt-to-income criteria, and whether the process wastes an applicant's time." },
    { name: "Process and closing reliability", weight: "15%", what: "Documented timelines, on-time closing record, and how rate locks and extensions are handled." },
    { name: "Servicing and support", weight: "10%", what: "What happens after closing: escrow handling, payoff and hardship processes, and reachable humans." },
    { name: "Complaint record", weight: "10%", what: "Volume and nature of public regulatory complaints relative to loan volume." }
  ],
  evidence: [
    "Collecting Loan Estimates for identical scenarios and comparing them line by line.",
    "Modelling the same loan at multiple point structures to find the real break-even.",
    "Reading servicing agreements for escrow, payoff and assumption terms.",
    "Interviews with loan officers, underwriters and nonprofit credit counsellors."
  ],
  disqualifiers: [
    "Rates advertised without the assumed credit score, loan-to-value and point cost.",
    "Fees that appear only after a credit pull.",
    "Any product marketed as 'credit repair' that promises score outcomes.",
    "Rate locks whose extension cost is not disclosed up front."
  ],
  team: [
    { name: "Marcus Oyelaran", role: "Editor-in-chief", bio: "Eleven years as a mortgage loan officer and later a sales-side trainer. Writes mortgage and refinancing coverage and reads every Loan Estimate we collect.", focus: "Mortgages, refinancing, closing costs" },
    { name: "Hannah Beck", role: "Credit editor", bio: "Former bureau dispute analyst. Covers credit scoring, reports and disputes, and refuses to repeat scoring myths.", focus: "Credit scores, reports, disputes" },
    { name: "Theo Marchetti", role: "Debt & budgeting writer", bio: "Trained as a nonprofit credit counsellor before moving to writing. Covers payoff strategy and hardship options.", focus: "Debt payoff, hardship, budgeting" }
  ],
  reviewers: [
    { name: "Denise Whitlock, CFP®", credential: "Certified Financial Planner™, 18 years in fee-only planning", bio: "Reviews anything touching household cash flow, trade-offs between debt payoff and saving, or tax treatment." },
    { name: "Raymond Kessler", credential: "Former residential mortgage underwriter, 15 years", bio: "Reviews qualification, debt-to-income and documentation claims against real underwriting practice." }
  ],
  newsletter: {
    name: "The Rate Line",
    pitch: "Every other week: where rates actually moved, one number worth recalculating, and one borrowing trap to avoid.",
    cadence: "biweekly",
    cta: "Get the rate briefing",
    magnet: "The mortgage shopping worksheet — compare three Loan Estimates line by line"
  },
  nav: [
    { label: "Start here", page: "mortgage-guide" },
    { label: "Refinancing", page: "refinance-guide" },
    { label: "Credit", page: "credit-score-guide" },
    { label: "Debt payoff", page: "debt-payoff-guide" },
    { label: "Rates", page: "current-mortgage-rates" },
    { label: "Calculator", page: "mortgage-calculator" }
  ],
  toolLinks: [
    { page: "mortgage-calculator", label: "Mortgage & total interest calculator", desc: "Payment, escrow, PMI and lifetime interest — plus what one extra payment a year actually saves." },
    { page: "credit-improvement-checklist", label: "Credit improvement checklist", desc: "The 30 actions that move a score, in the order that works. Progress saves in your browser." }
  ],
  popular: ["current-mortgage-rates", "refinance-rates", "heloc-rates", "best-mortgage-lenders"],
  featured: ["mortgage-guide", "refinance-guide", "credit-score-guide"],
  partners: [
    { slug: "wattroi", why: "which home upgrades return the money you borrow" },
    { slug: "ledgerlift", why: "business credit, when the borrower is a company" },
    { slug: "benefitwell", why: "the health costs that wreck a debt payoff plan" }
  ],
  clusters: [
    { kicker: "Cluster 1", name: "Buying a home", desc: "Qualification, deposit, closing costs and the first-time process.", pages: ["mortgage-guide", "mortgage-preapproval", "down-payment-guide", "closing-costs-explained", "first-time-buyer-guide"] },
    { kicker: "Cluster 2", name: "Rates and refinancing", desc: "What moves your rate, when refinancing pays, fixed versus adjustable.", pages: ["refinance-guide", "current-mortgage-rates", "refinance-rates", "arm-vs-fixed"] },
    { kicker: "Cluster 3", name: "Credit", desc: "How scoring actually works and what genuinely moves a score.", pages: ["credit-score-guide", "credit-utilization", "credit-improvement-checklist"] },
    { kicker: "Cluster 4", name: "Debt and home equity", desc: "Payoff order, borrowing against the house, and dropping PMI.", pages: ["debt-payoff-guide", "heloc-rates", "pmi-explained"] }
  ],

  pages: {
    index: {
      title: "RateBeacon — mortgages, refinancing and credit, with the math shown",
      hero: {
        h1: "Borrow at the right price, and know exactly what it costs",
        lead: "Independent, expert-reviewed guides to mortgages, refinancing, credit scores and debt payoff — every figure modelled, dated and sourced.",
        primary: { page: "mortgage-guide", label: "Start with the mortgage guide" },
        secondary: { page: "mortgage-calculator", label: "Model a payment" },
        trust: ["Reviewed by a CFP® and a former underwriter", "Rates dated and sourced", "Total interest shown, not just monthly", "No paid placements"],
        stats: [
          { v: "4", l: "Clusters: buying, rates, credit, debt" },
          { v: "30", l: "Actions in the credit checklist" },
          { v: "2 tools", l: "Mortgage calculator and credit checklist" },
          { v: "0", l: "Lenders who can buy a ranking" }
        ]
      },
      why: "<p>The mortgage is the most expensive product most households ever buy, and it is sold on a monthly payment. A quarter of a point on a 30-year loan is tens of thousands of dollars — and almost nobody is shown that number before signing.</p>" +
        "<p>RateBeacon exists to put the arithmetic in front of you. We model total interest, break-even points and the real cost of points and fees; we date and source every rate claim; and we publish the rubric behind every comparison.</p>" +
        "<p>We are not a lender or a broker. We cannot quote you a rate, and we will tell you plainly when waiting, renting or paying down a card beats borrowing at all.</p>"
    },

    "mortgage-guide": {
      title: "How to get a mortgage: qualification, cost and the whole process",
      h1: "Getting a mortgage without overpaying",
      section: "Pillar guide",
      eyebrow: "Pillar guide",
      dek: "What underwriters actually check, how rates are priced for you specifically, which fees are negotiable, and the shopping process that saves the most.",
      disclosure: true,
      answer: "Lenders price you on <strong>credit score, loan-to-value and debt-to-income</strong>, in that order of impact. Get three Loan Estimates within a fortnight, compare them line by line rather than by monthly payment, and never let a lender quote you a rate without stating the assumed score, down payment and point cost.",
      body:
        "<h2>The three numbers that set your rate</h2>" +
        "<ol><li><strong>Credit score.</strong> Pricing tiers usually step at 620, 660, 700, 740 and 760+. Twenty points can be worth an eighth to a quarter of a point on rate.</li>" +
        "<li><strong>Loan-to-value.</strong> How much you borrow against the property's value. Below 80% removes mortgage insurance and improves pricing.</li>" +
        "<li><strong>Debt-to-income.</strong> Total monthly debt payments over gross monthly income. Under 36% is comfortable; most programmes stretch to 43–50% with compensating factors.</li></ol>" +
        "<!--FIG:How credit score, loan-to-value and debt-to-income each move your quoted rate-->" +
        "<h2>What underwriting actually verifies</h2>" +
        "<p>Two years of income history, the source and seasoning of your deposit, employment continuity, and the property's appraised value. Surprises kill closings: a recent job change, a large unexplained deposit, or a new car loan taken during the process are the three most common.</p>" +
        "<!--AD-->" +
        "<h2>Shop properly, in one window</h2>" +
        "<p>Credit scoring models treat multiple mortgage enquiries inside a short window as a single event, so getting three quotes costs you almost nothing. Ask each lender for a Loan Estimate on the identical scenario, then compare page 2 line by line — origination, discount points, and the services you can shop for. Details in <a href='closing-costs-explained.html'>closing costs</a>.</p>" +
        "<h2>Points, and when they pay</h2>" +
        "<p>A discount point costs 1% of the loan and typically buys 0.125–0.25% of rate. Divide the cost by the monthly saving to get the break-even in months. If you may move or refinance before that, do not buy points. Model it in the <a href='mortgage-calculator.html'>calculator</a>.</p>" +
        "<h2>Before you apply</h2>" +
        "<ul><li>Pull your reports and fix errors — see the <a href='credit-score-guide.html'>credit guide</a>.</li>" +
        "<li>Stop opening credit for six months.</li>" +
        "<li>Season your deposit in one account for at least 60 days.</li>" +
        "<li>Get <a href='mortgage-preapproval.html'>pre-approved</a>, not merely pre-qualified.</li>" +
        "<li>Leave a cash reserve after closing; being asset-poor on day one is how good purchases turn bad.</li></ul>",
      edge: {
        intro: "Mortgage guides are published overwhelmingly by lenders and by rate-table sites paid per lead, and both are structured to move the reader toward an application. The process steps they give are broadly accurate. What is missing is every mechanism by which the reader loses money <em>inside</em> a correctly-followed process \u2014 which is where almost all of the avoidable cost actually sits.",
        gaps: [
          {
            claim: "\"Get pre-approved to find out how much house you can afford.\"",
            problem: "Two distinct errors are compressed into one sentence. A pre-approval is an underwriting opinion about the maximum a lender is willing to risk, which is not a statement about what is affordable for a household \u2014 it is calculated on gross income before tax, ignores childcare, retirement saving and the maintenance and insurance costs that arrive with ownership, and stretches debt-to-income to programme limits with compensating factors. Treating the ceiling as a target is the single most consequential mistake in the process. Separately, the word is used loosely: many &lsquo;pre-approvals&rsquo; are pre-<em>qualifications</em> based on stated figures with no documents verified and no credit pulled, which carry little weight with a seller and can evaporate at underwriting. The two are presented as interchangeable because both generate a lead.",
            ours: "We separate the lender's maximum from an affordable payment and give the durable test \u2014 housing under 28% of gross, all debts under 36% \u2014 while stating plainly that an approval is not advice."
          },
          {
            claim: "\"Compare lenders to find the best rate.\"",
            problem: "A rate quoted without its assumptions is not a comparable number, and the assumptions are exactly what varies between quotes. The same borrower can be quoted materially different rates depending on the credit score band assumed, the down payment, the lock period, and \u2014 most often \u2014 how many discount points are built in. A rate advertised with two points bought down looks superior to an identical no-point offer while costing thousands more at closing. This is why comparing monthly payments across quotes is close to useless: the payment can be lowered by paying up front, by extending the term, or by escrowing differently, none of which makes the loan cheaper. Rate-table sites compound it by publishing a single national average, which is a survey statistic and not an offer anyone is entitled to.",
            ours: "We require every quote to state the assumed score, down payment, lock period and point cost, then compare Loan Estimates line by line \u2014 never monthly payments, and never against a survey average."
          },
          {
            claim: "The fee discussion stops at \"closing costs are 2\u20135% \u2014 ask about lender fees.\"",
            problem: "That framing implies the whole block is one negotiable lump, when it is three categories with completely different leverage. Lender charges \u2014 origination, underwriting, processing \u2014 are genuinely negotiable or waivable. Services you are allowed to shop for, notably title and settlement, are where the largest unclaimed saving usually sits, and the Loan Estimate literally identifies them as shoppable while almost nobody does. Government recording and transfer taxes are fixed and cannot be negotiated at all. Lumping them together produces a reader who negotiates the fixed items, accepts the lender's title referral, and concludes fees are non-negotiable. Prepaid items and escrow deposits sit in the same block too and are not costs at all \u2014 they are money you would owe regardless \u2014 so including them inflates the apparent total and obscures what is actually in play.",
            ours: "We split closing costs into negotiable, shoppable and fixed, and separate genuine costs from prepaids that merely change <em>when</em> you pay."
          },
          {
            claim: "\"Buy points to lower your rate and save over the life of the loan.\"",
            problem: "The arithmetic offered is almost always a simple break-even \u2014 point cost divided by monthly saving \u2014 and it systematically favours buying, because it assumes you hold the loan to that horizon and beyond. Median tenure is far shorter than a thirty-year term: people move, and they refinance whenever rates fall enough, which is precisely when the paid-for rate advantage becomes worthless. Two further omissions matter. The break-even ignores the opportunity cost of the cash \u2014 the same money left in the down payment reduces the balance, and if it takes the loan below the 80% loan-to-value threshold it removes mortgage insurance entirely, which is usually worth more than the rate shaved. And the closing-table decision most guides skip is the reserve: spending the last of your cash on points to secure a slightly better rate is how a sound purchase becomes fragile in month three.",
            ours: "We test the break-even against realistic tenure and refinance probability, and compare buying points to the alternative uses of the same cash \u2014 crossing 80% LTV, or simply keeping a reserve."
          }
        ],
        only: [
          "The lender's maximum separated from an affordable payment \u2014 and pre-approval distinguished from pre-qualification.",
          "Why a rate is meaningless without its four assumptions, and why monthly-payment comparison misleads.",
          "Closing costs split three ways \u2014 negotiable, shoppable, fixed \u2014 with prepaids separated out entirely.",
          "Points break-even tested against real tenure and refinance probability, not the full term.",
          "The same cash compared against crossing 80% LTV to drop mortgage insurance, or held as a post-closing reserve."
        ]
      },
      faq: [
        { q: "How much house can I afford?", a: "<p>A total housing payment under 28% of gross income, with all debts under 36%, is the durable answer. Lenders will approve more; the approval is not advice.</p>" },
        { q: "Does shopping around hurt my credit?", a: "<p>Mortgage enquiries within a short window count as one for scoring purposes. Shopping is close to free and usually worth thousands.</p>" },
        { q: "Should I use a broker or a bank?", a: "<p>Both, and compare. Brokers can access wholesale pricing; banks sometimes price relationship deposits better. Judge the Loan Estimate, not the pitch.</p>" }
      ],
      sources: [
        { name: "CFPB — mortgage shopping and Loan Estimates", url: "https://www.consumerfinance.gov/owning-a-home/" },
        { name: "Freddie Mac — Primary Mortgage Market Survey", url: "https://www.freddiemac.com/pmms" }
      ],
      related: ["mortgage-preapproval", "current-mortgage-rates", "closing-costs-explained"],
      crossRefs: [{ slug: "wattroi", page: "index", label: "Which home upgrades actually return the money", why: "Renovation borrowing only makes sense where the payback is real." }]
    },

    "refinance-guide": {
      title: "Refinancing a mortgage: when it pays and when it does not",
      h1: "Refinancing, decided on break-even",
      section: "Pillar guide",
      eyebrow: "Pillar guide",
      dek: "Rate-and-term versus cash-out, the true break-even calculation, resetting the clock, and the cases where a lower payment costs you money.",
      disclosure: true,
      answer: "Refinance when <strong>closing costs divided by the monthly saving</strong> is comfortably shorter than the time you will keep the loan — and when the new term does not quietly add years of interest. A lower monthly payment achieved by restarting a 30-year clock is frequently a loss disguised as a win.",
      body:
        "<h2>The only calculation that matters</h2>" +
        "<p>Break-even months = total closing costs ÷ monthly payment saving. Under 24 months is usually compelling; over 48 is rarely worth it unless you are removing mortgage insurance or escaping an adjustable rate. Ignore rules of thumb about needing a full point of rate improvement.</p>" +
        "<!--FIG:Break-even in months against closing costs and monthly saving-->" +
        "<h2>Do not silently reset the clock</h2>" +
        "<p>Refinancing 22 years into a 30-year loan back into a new 30-year term can lower the payment while increasing total interest substantially. Ask for a quote at the remaining term, or keep making the old payment amount on the new loan.</p>" +
        "<!--AD-->" +
        "<h2>Rate-and-term versus cash-out</h2>" +
        "<ul><li><strong>Rate-and-term</strong> — better rate or term only. Cheapest pricing.</li>" +
        "<li><strong>Cash-out</strong> — you take equity as cash. Priced higher, and it converts unsecured debt into debt secured by your home. That trade deserves genuine thought, not a sales pitch.</li></ul>" +
        "<h2>Good reasons that are not about rate</h2>" +
        "<ol><li>Removing mortgage insurance once you are under 80% loan-to-value — see <a href='pmi-explained.html'>PMI</a>.</li>" +
        "<li>Escaping an adjustable rate before it adjusts.</li>" +
        "<li>Removing a co-borrower after a separation.</li>" +
        "<li>Shortening the term while payments are affordable.</li></ol>" +
        "<h2>What it costs</h2>" +
        "<p>Typically 2–5% of the loan in lender fees, title, appraisal and prepaid escrow. A 'no-cost' refinance simply moves those into the rate or the balance. Check the current market in the <a href='refinance-rates.html'>refinance rate guide</a>.</p>",
      faq: [
        { q: "How much lower must the rate be?", a: "<p>There is no threshold — only break-even. On a large balance, half a point can pay back in under two years.</p>" },
        { q: "Can I refinance with less than 20% equity?", a: "<p>Often yes, with mortgage insurance and slightly worse pricing. Under 5% equity the options narrow sharply.</p>" },
        { q: "Does refinancing hurt my credit?", a: "<p>A small, temporary dip from the enquiry and the new account. Immaterial within a few months.</p>" }
      ],
      sources: [{ name: "CFPB — refinancing your mortgage", url: "https://www.consumerfinance.gov/" }],
      related: ["refinance-rates", "arm-vs-fixed", "mortgage-calculator"]
    },

    "credit-score-guide": {
      title: "How credit scores actually work",
      h1: "Credit scores, without the folklore",
      section: "Pillar guide",
      eyebrow: "Pillar guide",
      dek: "The five scoring factors and their real weight, what genuinely moves a score fast, and the widely repeated advice that is simply wrong.",
      answer: "Payment history and amounts owed drive roughly <strong>two thirds</strong> of a score. The fastest legitimate improvements are <strong>paying down revolving balances before the statement date</strong> and <strong>removing genuine reporting errors</strong>. Closing old cards, carrying a small balance and checking your own score do not help.",
      body:
        "<h2>The five factors, weighted</h2>" +
        "<ol><li><strong>Payment history (~35%)</strong> — one 30-day late is the single most damaging common event.</li>" +
        "<li><strong>Amounts owed (~30%)</strong> — mostly revolving utilisation. See <a href='credit-utilization.html'>utilisation</a>.</li>" +
        "<li><strong>Length of history (~15%)</strong> — average and oldest account age.</li>" +
        "<li><strong>New credit (~10%)</strong> — recent enquiries and newly opened accounts.</li>" +
        "<li><strong>Credit mix (~10%)</strong> — revolving plus instalment. Never open a loan you do not need for this.</li></ol>" +
        "<!--FIG:The five scoring factors and their approximate weights-->" +
        "<!--AD-->" +
        "<h2>What actually moves a score quickly</h2>" +
        "<ul><li>Paying revolving balances down before the statement closes — the balance reported is the one scored.</li>" +
        "<li>Disputing and removing genuine errors, especially wrong late payments.</li>" +
        "<li>Becoming an authorised user on a long-standing, low-utilisation account.</li>" +
        "<li>Asking for a credit limit increase without a hard pull, which lowers utilisation.</li></ul>" +
        "<h2>Myths that cost people money</h2>" +
        "<ul><li>\"Carry a small balance to build credit.\" No — pay in full; utilisation is measured at statement, not from interest paid.</li>" +
        "<li>\"Closing old cards helps.\" It reduces available credit and can shorten history.</li>" +
        "<li>\"Checking my score lowers it.\" Your own check is a soft pull with no effect.</li>" +
        "<li>\"Credit repair companies can remove accurate items.\" They cannot, and no one can lawfully promise a score.</li></ul>" +
        "<h2>Where scores matter most</h2>" +
        "<p>Mortgage pricing tiers step at 620/660/700/740/760+, so a twenty-point gain near a boundary can be worth thousands. If you are buying within a year, work the <a href='credit-improvement-checklist.html'>checklist</a> before you apply.</p>",
      edge: {
        intro: "Credit-score content is dominated by card issuers, credit-monitoring services and credit-repair firms, and the folklore in this category is unusually durable because some of it is actively marketed. The result is a topic where the most widely repeated advice is not merely incomplete but inverted \u2014 several of the most popular tips cost the reader money.",
        gaps: [
          {
            claim: "\"Carry a small balance to build credit\" \u2014 and its cousin, \"using your card and paying interest shows responsibility.\"",
            problem: "Straightforwardly false, and expensive. Scoring models read the balance <em>reported</em> on the statement date; whether you subsequently pay interest is invisible to them. Paying the statement balance in full produces exactly the same reported utilisation as carrying it and paying interest \u2014 the interest buys nothing. The myth survives because it is intuitive, because issuers have no reason to correct it, and because people confuse having an active account with carrying debt. The actionable version nobody publishes is the timing: since the statement balance is what gets scored, paying <em>before</em> the statement closes rather than before the due date is what lowers reported utilisation, and it is the fastest legitimate lever available.",
            ours: "We say pay in full, and we give the mechanism \u2014 pay before the statement date, not the due date \u2014 because the reported balance is the one that is scored."
          },
          {
            claim: "\"Keep utilisation under 30%.\"",
            problem: "Treated as a threshold to clear, when it behaves as a continuous variable: lower is better all the way down, and the highest scores are associated with low single-digit utilisation rather than anything near thirty. Reading it as a target means deliberately stopping at a figure that costs points. Two further refinements are almost always omitted. Utilisation is assessed both per card and in aggregate, so one maxed card alongside several empty ones damages the score even when the total looks comfortable. And the denominator is a lever \u2014 requesting a credit limit increase lowers utilisation instantly without paying anything, and many issuers will do it on a soft pull if you ask, which is a free score improvement that no page selling credit products is motivated to explain.",
            ours: "We treat utilisation as continuous rather than a 30% threshold, cover per-card as well as aggregate, and name the limit-increase route as a free reduction."
          },
          {
            claim: "\"Close old or unused cards to tidy up your credit\" \u2014 or the reverse, \"never close anything.\"",
            problem: "Both are too blunt to act on. Closing a card removes its limit from the utilisation denominator immediately, which raises utilisation across the board \u2014 that is the real and immediate cost, and it is the one the advice misses. The commonly-cited harm, losing the account's age, is largely mistaken in the near term: closed accounts in good standing continue to report for years and keep contributing to history length, so the damage is deferred rather than instant. That distinction matters because it changes the decision: if a card carries an annual fee and you hold plenty of other limit, closing it is often correct; if it represents a large share of your available credit, or you are inside a year of a mortgage application, it is not. Timing relative to a loan application is the deciding factor and it is almost never mentioned.",
            ours: "We separate the immediate utilisation effect from the deferred history effect, and make the decision depend on annual fee, share of total limit, and whether a loan application is imminent."
          },
          {
            claim: "\"Fix your credit fast\" \u2014 credit-repair services promising removal of negative items and a guaranteed score lift.",
            problem: "Accurate, timely negative information cannot lawfully be removed on request, and nobody can guarantee a score outcome; advance-fee arrangements for these services are themselves restricted. What such firms actually do is dispute items \u2014 something you can do yourself for free, and which works properly only where the item is genuinely wrong. The real opportunity is nonetheless substantial and under-used: reporting errors are common, and wrongly-reported late payments are among the most damaging entries a file can carry, since payment history is the heaviest factor. So the reader is being sold at a premium the one thing they can do free, while the genuinely high-value, no-cost actions \u2014 checking all three bureaus, correcting errors, and becoming an authorised user on a long-standing low-utilisation account \u2014 go unmentioned because no one profits from them.",
            ours: "We state what cannot be removed and that no score can be guaranteed, then give the free actions that do work \u2014 all three bureaus, error disputes, authorised-user status."
          }
        ],
        only: [
          "Pay before the statement date, not the due date \u2014 the reported balance is what gets scored.",
          "Utilisation as a continuous variable rather than a 30% threshold, per card as well as aggregate.",
          "The free limit-increase lever that lowers utilisation without paying anything.",
          "Card closure split into immediate utilisation damage versus deferred history loss, with timing before a loan application.",
          "What credit repair legally cannot do, alongside the three no-cost actions that genuinely move a file."
        ]
      },
      faq: [
        { q: "Why do my scores differ between sites?", a: "<p>Different models and different bureau data. Mortgage lenders typically use older FICO versions, which is why the number your lender sees may differ from your app.</p>" },
        { q: "How long do negatives stay?", a: "<p>Most negative information reports for about seven years; some bankruptcies up to ten. Impact fades well before removal.</p>" },
        { q: "Does income affect my score?", a: "<p>No. Income is not in the score, though lenders consider it separately.</p>" }
      ],
      sources: [
        { name: "CFPB — credit reports and scores", url: "https://www.consumerfinance.gov/consumer-tools/credit-reports-and-scores/" },
        { name: "AnnualCreditReport.com — free federal reports", url: "https://www.annualcreditreport.com/" }
      ],
      related: ["credit-utilization", "credit-improvement-checklist", "mortgage-guide"]
    },

    "debt-payoff-guide": {
      title: "Debt payoff strategy: the order that saves the most",
      h1: "Paying off debt in the right order",
      section: "Pillar guide",
      eyebrow: "Pillar guide",
      dek: "Avalanche versus snowball with the numbers, where consolidation helps, what to do before you attack anything, and hardship options nobody mentions.",
      disclosure: true,
      answer: "Mathematically, pay <strong>highest APR first</strong> (avalanche). Behaviourally, paying the <strong>smallest balance first</strong> (snowball) keeps more people going — and a plan you finish beats an optimal plan you abandon. Before either, secure a small emergency buffer and capture any employer retirement match.",
      body:
        "<h2>Two orders, one honest comparison</h2>" +
        "<p>On typical household debt loads, avalanche saves a few hundred to a couple of thousand dollars in interest against snowball. That gap is real but smaller than most people assume, and it disappears entirely if the snowball is the plan you actually complete.</p>" +
        "<!--FIG:Avalanche against snowball: total interest and months to debt-free-->" +
        "<h2>Do these two things first</h2>" +
        "<ol><li><strong>A one-month buffer.</strong> Without it, the next repair goes back on the card you just paid down.</li>" +
        "<li><strong>The full employer match.</strong> An instant 50–100% return beats paying off a 22% card.</li></ol>" +
        "<!--AD-->" +
        "<h2>Consolidation: when it helps</h2>" +
        "<ul><li><strong>Balance transfer</strong> at 0% — genuinely useful if you clear it inside the promotional window and can absorb the 3–5% fee. Compare offers with the <a href='credit-utilization.html'>utilisation guide</a> in mind.</li>" +
        "<li><strong>Personal loan</strong> — converts revolving debt to a fixed schedule at a lower rate. Only works if the cards stay closed to new spending.</li>" +
        "<li><strong>Home equity</strong> — the cheapest rate and the worst risk profile, because unsecured debt becomes secured by your house. See <a href='heloc-rates.html'>HELOC pricing</a> before considering it.</li></ul>" +
        "<h2>If the numbers do not work</h2>" +
        "<p>If minimum payments exceed what you can pay, a nonprofit credit counselling agency can arrange a debt management plan with reduced rates. That is a legitimate route with a real cost to credit; 'debt settlement' firms charging fees to stop your payments are usually not.</p>" +
        "<h2>Keep it from returning</h2>" +
        "<p>Automate the payment above the minimum, keep one card for emergencies with the number not saved anywhere, and revisit quarterly. Progress you can see is what sustains a two-year plan.</p>",
      faq: [
        { q: "Should I save or pay off debt first?", a: "<p>Buffer first, then employer match, then debt above roughly 6–8% APR, then invest. Below that, the decision is closer and partly emotional.</p>" },
        { q: "Will a debt management plan hurt my credit?", a: "<p>Usually yes, initially — accounts are often closed. It is still far less damaging than default or settlement.</p>" },
        { q: "Is 0% balance transfer a trap?", a: "<p>Only if you do not finish. Divide the balance by the promotional months and automate that payment on day one.</p>" }
      ],
      sources: [{ name: "CFPB — dealing with debt", url: "https://www.consumerfinance.gov/consumer-tools/debt-collection/" }],
      related: ["credit-improvement-checklist", "credit-utilization", "heloc-rates"]
    },

    "mortgage-preapproval": {
      title: "Mortgage pre-approval: what it is and how to get a strong one",
      h1: "Pre-approval that sellers take seriously",
      section: "Buying a home",
      eyebrow: "Explainer",
      dek: "Pre-qualification versus pre-approval versus underwritten approval, what documents to have ready, and how long it lasts.",
      answer: "Pre-qualification is a conversation; <strong>pre-approval involves verified documents and a credit pull</strong>; a fully underwritten approval is stronger still and wins competitive offers. Expect it to last 60–90 days, and avoid any new credit while it stands.",
      body:
        "<h2>The three levels</h2>" +
        "<ol><li><strong>Pre-qualification</strong> — based on what you say. Nearly worthless in a competitive market.</li>" +
        "<li><strong>Pre-approval</strong> — documents and credit verified, subject to property and final underwriting.</li>" +
        "<li><strong>Underwritten pre-approval</strong> — a full underwriter review before you make an offer. The strongest thing short of cash.</li></ol>" +
        "<!--AD-->" +
        "<h2>The document pack</h2>" +
        "<p>Two years of tax returns and W-2s or equivalent, 30 days of pay records, 60 days of statements for every account holding deposit funds, photo identification, and a written explanation for any large or unusual deposit. Self-employed borrowers should expect returns, a profit and loss statement, and business account statements.</p>" +
        "<h2>What quietly breaks it</h2>" +
        "<ul><li>Financing a car or furniture during the process.</li>" +
        "<li>Changing jobs, especially to a different pay structure.</li>" +
        "<li>Moving deposit money between accounts without a paper trail.</li>" +
        "<li>Cash gifts without a signed gift letter.</li></ul>" +
        "<p>Once approved, do nothing financially interesting until you close. Then read <a href='closing-costs-explained.html'>closing costs</a> so the settlement statement holds no surprises.</p>",
      faq: [
        { q: "Does pre-approval guarantee the loan?", a: "<p>No. It is conditional on the property, the appraisal and final underwriting of unchanged circumstances.</p>" },
        { q: "Can I get pre-approved by several lenders?", a: "<p>Yes, and within a short window the enquiries count as one for scoring. It is the cheapest leverage you will get.</p>" }
      ],
      related: ["mortgage-guide", "down-payment-guide", "first-time-buyer-guide"]
    },

    "down-payment-guide": {
      title: "Down payments: how much you actually need",
      h1: "How much deposit you really need",
      section: "Buying a home",
      eyebrow: "Explainer",
      dek: "Programme minimums, the 20% myth, what a smaller deposit costs monthly, gift funds, and the reserve you should keep back.",
      answer: "You do not need 20%. Common programmes allow <strong>3–3.5%</strong>, and some none at all. But under 20% you pay mortgage insurance and usually a slightly worse rate — so the question is whether waiting to save costs more than the insurance does.",
      body:
        "<h2>What the programmes require</h2>" +
        "<ul><li><strong>Conventional</strong> — from 3% for qualifying buyers; mortgage insurance below 20%.</li>" +
        "<li><strong>FHA</strong> — 3.5% with a 580 score; insurance is often for the life of the loan.</li>" +
        "<li><strong>VA</strong> — 0% for eligible service members, no monthly insurance, funding fee applies.</li>" +
        "<li><strong>USDA</strong> — 0% in eligible rural areas with income limits.</li></ul>" +
        "<!--AD-->" +
        "<h2>The honest trade-off</h2>" +
        "<p>A smaller deposit means a larger loan, mortgage insurance, and slightly higher pricing. Waiting two years to reach 20% means two more years of rent and possibly higher prices. There is no universal answer — model both in the <a href='mortgage-calculator.html'>calculator</a> with your actual rent.</p>" +
        "<!--FIG:Monthly cost at 3%, 10% and 20% down on the same purchase price-->" +
        "<h2>Gift funds and assistance</h2>" +
        "<p>Gifts from family are widely permitted with a signed letter confirming no repayment is expected, and the money must be traceable. State and local down-payment assistance programmes exist almost everywhere and are routinely unclaimed — ask your lender to check yours specifically.</p>" +
        "<h2>Keep a reserve</h2>" +
        "<p>Do not spend every dollar on the deposit. Keep closing costs plus three to six months of the new payment, plus a repair fund. The first year of ownership always costs more than the spreadsheet said.</p>",
      edge: {
        intro: "Almost every page ranking here exists to debunk the 20% myth, which is correct and now thoroughly covered. Having spent its length on that, the genre stops at the programme minimums table — and the minimums are not the constraint that actually decides what you can put down. Underwriting rules about where the money came from, and the reserve arithmetic after closing, cause more failed and regretted purchases than the percentage does.",
        gaps: [
          {
            claim: "&lsquo;You only need 3% \u2014 here are the programme minimums.&rsquo; The percentage is presented as the requirement.",
            problem: "The minimum is the floor for the programme, not the number your file will clear, because down payment interacts with the other two underwriting variables rather than standing alone. A larger deposit lowers the loan amount and therefore the payment, which is often what brings a debt-to-income ratio inside limits \u2014 so for a stretched borrower the deposit is a DTI tool, not just an equity choice. It also affects pricing directly: conventional loan-level adjustments move with both loan-to-value and credit score together, so the cost of a low deposit differs enormously depending on the score it is paired with, and there are thresholds at 95%, 90% and 85% LTV where pricing steps rather than sliding. The practical consequence is that the cheapest structure is frequently not the minimum and not 20%, but the nearest threshold above your current plan \u2014 a distinction a minimums table cannot show and which is worth real money per month.",
            ours: "We model the deposit as one of three interacting variables and identify the LTV threshold just above your plan, because stepping to it is often cheaper per month than any amount between."
          },
          {
            claim: "Gift funds are permitted with a letter from the donor confirming no repayment is expected.",
            problem: "True and incomplete in ways that fail files late, after an offer is accepted. Underwriting cares about the money's traceable history, not just its origin: a deposit generally must be sourced, meaning documented from the account it left, and cash deposits that cannot be traced are commonly excluded from usable funds no matter how legitimate. This is where the term seasoning matters \u2014 funds sitting in your account across a documented period are accepted without explanation, while a large recent unexplained deposit invites a paper chase, and each unexplained deposit can require its own letter and statements. Programme rules also differ on who may give: some restrict gifts to relatives or documented relationships, some permit employer or agency funds, and gifts on certain occupancy or property types are limited or excluded. And down payment assistance is frequently a second lien with its own repayment or recapture terms rather than free money, which changes both your closing and any future refinance.",
            ours: "We treat the deposit as a documentation problem \u2014 sourcing, seasoning and per-deposit explanations \u2014 and read assistance programmes as second liens with recapture terms rather than as grants."
          },
          {
            claim: "&lsquo;Keep a reserve&rsquo; is offered as sensible general advice about a rainy-day fund.",
            problem: "Reserves are also an underwriting requirement with a defined unit, and treating them as informal advice is how buyers arrive at closing short. Lenders count reserves in months of the new total housing payment \u2014 principal, interest, taxes, insurance and any association dues \u2014 and the required number varies by programme, credit profile, property type and occupancy, with second homes, multi-unit properties and weaker files requiring more. Crucially, the reserve must remain after all closing costs and the deposit have been paid, so a borrower who computes deposit plus closing costs and stops has not computed the requirement at all. Retirement accounts often count toward reserves at a discounted percentage without being withdrawn, which is the single most useful fact here and is almost never mentioned. The corollary is the mirror image: emptying an account to raise the deposit can strengthen your LTV and simultaneously fail your reserve test.",
            ours: "We size reserves in months of the full new payment, verify they survive closing costs, and check whether retirement balances can satisfy them at a discount rather than being spent."
          },
          {
            claim: "The trade-off is framed as: save longer for 20% and avoid mortgage insurance, or buy now and pay it.",
            problem: "The framing treats mortgage insurance as the whole cost of a low deposit and treats saving as free, and both halves mislead. On the cost side, conventional mortgage insurance is not permanent \u2014 it is cancellable on request at 80% loan-to-value and terminates automatically at 78% of the original schedule \u2014 whereas FHA insurance generally persists for the life of the loan for most current borrowers, so the same 3.5% deposit carries a temporary cost in one programme and an effectively permanent one in another. That difference dwarfs the percentage decision and is the actual choice being made. On the saving side, the cost of waiting is not rent alone: it is rent plus any price movement plus the forgone amortisation, against which the insurance premium is often small. There is also a rarely-stated third option \u2014 a smaller deposit today with a documented plan to reach 80% and cancel, which is frequently cheaper than either extreme.",
            ours: "We compare the deposit decision by programme rather than by percentage, because cancellable and lifetime insurance are different products \u2014 and we price the cancellation path as an explicit third option."
          }
        ],
        only: [
          "The deposit as a debt-to-income lever, plus the LTV pricing thresholds where stepping up is cheaper per month than any amount between.",
          "Sourcing and seasoning: why traceable history matters more than the gift letter, and why untraceable cash is excluded.",
          "Down payment assistance read as a second lien with recapture terms rather than as a grant.",
          "Reserves as an underwriting requirement measured in months of the full new payment, surviving closing \u2014 and retirement funds counting at a discount without withdrawal.",
          "Cancellable conventional insurance versus effectively lifetime FHA insurance as the real trade-off, with the cancellation path priced as a third option."
        ]
      },
      faq: [
        { q: "Is it better to put more down or buy points?", a: "<p>Usually more down, because it may remove mortgage insurance entirely or step you across an LTV pricing threshold. Compare both against break-even.</p>" },
        { q: "Can I use retirement funds?", a: "<p>Sometimes, with penalties or loan provisions that vary. Note that retirement balances often count toward required reserves at a discounted percentage <em>without</em> being withdrawn — ask before touching them.</p>" },
        { q: "Why is the lender asking about a deposit in my account?", a: "<p>Funds must be sourced and seasoned. Any large recent deposit that is not obviously payroll needs documentation showing where it came from, and untraceable cash is generally excluded from usable funds.</p>" }
      ],
      sources: [
        { name: "Consumer Financial Protection Bureau — down payments and loan options", url: "https://www.consumerfinance.gov/owning-a-home/loan-options/", note: "Programme minimums and how deposit size affects loan cost" },
        { name: "HUD — FHA single family housing policy handbook 4000.1", url: "https://www.hud.gov/program_offices/housing/sfh/handbook_4000-1", note: "Source of funds, gift documentation and reserve requirements" },
        { name: "12 CFR § 1026.43 — ability to repay and debt-to-income", url: "https://www.consumerfinance.gov/rules-policy/regulations/1026/43/", note: "How the payment the deposit determines feeds the qualifying ratio" }
      ],
      related: ["mortgage-guide", "pmi-explained", "first-time-buyer-guide"]
    },

    "pmi-explained": {
      title: "Mortgage insurance (PMI) explained — and how to remove it",
      h1: "Mortgage insurance, and getting rid of it",
      section: "Debt & equity",
      eyebrow: "Explainer",
      dek: "What PMI costs, who it protects, the difference between conventional and FHA insurance, and the three routes to cancelling it.",
      answer: "PMI protects the lender, not you, and typically costs <strong>0.3%–1.5% of the loan annually</strong>. On a conventional loan you can request cancellation at 80% loan-to-value and it must terminate automatically at 78% of the original schedule. FHA insurance often cannot be removed without refinancing.",
      body:
        "<h2>What you are paying for</h2>" +
        "<p>PMI covers the lender's loss if you default. It is the price of borrowing above 80% of the property's value, and on a $350,000 loan it commonly runs $90–$300 a month.</p>" +
        "<!--AD-->" +
        "<h2>Three ways out of conventional PMI</h2>" +
        "<ol><li><strong>Request cancellation at 80% LTV</strong> based on the original value once you have paid down enough, with a good payment history.</li>" +
        "<li><strong>Automatic termination at 78%</strong> of the original amortisation schedule — the lender must do this.</li>" +
        "<li><strong>New appraisal</strong> after appreciation or improvements brings you under 80%. Ask about the servicer's specific rules first.</li></ol>" +
        "<!--FIG:Paying down to 80% loan-to-value: when PMI can come off-->" +
        "<h2>FHA is different</h2>" +
        "<p>FHA mortgage insurance premiums generally last the life of the loan for most current borrowers, regardless of equity. That makes a <a href='refinance-guide.html'>refinance into a conventional loan</a> the usual exit once you hold 20% equity — and it is often worth doing even at a similar rate.</p>" +
        "<h2>Alternatives</h2>" +
        "<p>Lender-paid PMI trades the monthly premium for a higher rate, which never goes away. Single-premium PMI paid at closing can work if you will hold the loan a long time. Run both against break-even before choosing.</p>",
      edge: {
        intro: "PMI content is written mostly by lenders and insurers, and it converges on a reassuring summary: request cancellation at 80%, automatic termination at 78%. Both statements come from federal law, and both are surrounded by statutory conditions the summaries omit — conditions that decide whether a request succeeds. Homeowners routinely believe they qualify, get declined, and conclude the servicer is obstructing them, when the rule genuinely does not say what they were told.",
        gaps: [
          {
            claim: "&lsquo;Request cancellation at 80% loan-to-value, and it terminates automatically at 78%.&rsquo;",
            problem: "The two thresholds are not two views of the same test and mixing them up is the most common reason a cancellation request fails. Borrower-requested cancellation at 80% is a right subject to conditions: the request typically must be in writing, you must have a satisfactory payment history as defined in the statute, the property must not be subject to a subordinate lien, and the servicer may require evidence that the value has not declined. Automatic termination at 78% is unconditional on value but is calculated from the original amortisation schedule rather than from what you have actually paid — so extra principal payments do not accelerate the automatic date at all, even though they do accelerate eligibility for the borrower-requested route. Both figures are measured against the original value, not today's, unless you pursue a separate appreciation-based cancellation. There is also a final backstop almost nobody knows: at the midpoint of the loan's amortisation period, insurance must end regardless of LTV.",
            ours: "We separate the three mechanisms precisely — conditional request at 80%, unconditional schedule-based termination at 78%, and the midpoint backstop — and state which are affected by extra payments and which are not."
          },
          {
            claim: "&lsquo;Get a new appraisal after appreciation and cancel early.&rsquo;",
            problem: "This route exists and is governed by investor guidelines rather than by the federal termination statute, which is why servicers give answers that sound arbitrary. In practice there are seasoning requirements — commonly a minimum loan age before a value-based cancellation will be entertained, with different LTV thresholds depending on whether the improvement came from appreciation or from documented improvements, and often a stricter threshold (frequently 75% rather than 80%) if the loan is young. You pay for the appraisal, it can come back below what you need, and a declined request generally does not refund it. The subtlety that catches people is that the property's condition and any subordinate lien are assessed too, so a HELOC opened after purchase can block cancellation entirely regardless of equity. The order of operations therefore matters: ask the servicer for its written requirements, then order the appraisal, never the reverse.",
            ours: "We treat value-based cancellation as an investor-guideline request with seasoning and a stricter LTV, obtained in writing from the servicer before any appraisal is paid for — and flag subordinate liens as a blocker."
          },
          {
            claim: "&lsquo;FHA mortgage insurance lasts the life of the loan, so refinance out of it.&rsquo;",
            problem: "Broadly right for most current borrowers and stated too flatly, in a way that produces bad refinance decisions in both directions. FHA annual premium duration depends on the loan-to-value at origination and the term: at or below a threshold LTV at origination the annual premium is scheduled to end after eleven years rather than persisting, so some FHA borrowers are not in the lifetime bucket at all. There is also an upfront premium already paid, and refinancing FHA-to-FHA within a defined window can attract a partial refund of it — a real sum that is forfeited by refinancing into a conventional loan without checking. And the exit is not free: refinancing means new closing costs, a new rate that may be worse than the one you hold, and restarting amortisation. So the correct comparison is the remaining premium stream against total refinance cost including any forfeited refund, not a general rule about FHA.",
            ours: "We check the origination LTV and term before assuming lifetime duration, and net the upfront-premium refund window and full refinance cost against the remaining premium stream."
          },
          {
            claim: "Alternatives are listed as lender-paid PMI, single-premium PMI, or monthly \u2014 compare on break-even.",
            problem: "The list is right and the break-even is usually computed against the wrong horizon, because two of the three options are irreversible in a way the arithmetic must account for. Lender-paid insurance is delivered as a higher interest rate, which means it cannot be cancelled at 80% — you carry it for the life of the loan or until you refinance, so it is not comparable to a monthly premium that has a scheduled end. Single-premium paid at closing is typically non-refundable or only partly refundable, so it loses if you refinance or sell earlier than expected, and it also consumes cash that might otherwise have raised the deposit across an LTV threshold. Meanwhile the monthly premium's rate is not fixed by LTV alone: it varies with credit score, so the cheapest structure differs by borrower rather than being a general ranking. The genuine alternative missing from most lists is a piggyback second lien, which avoids insurance and introduces a variable-rate obligation and a cancellation blocker.",
            ours: "We compare only against your realistic holding period, treat lender-paid insurance as permanent rather than cancellable, and price the cash consumed by a single premium against the LTV threshold it could have bought instead."
          }
        ],
        only: [
          "The three termination mechanisms distinguished: conditional 80% request, schedule-based 78% termination, and the amortisation-midpoint backstop.",
          "Why extra principal accelerates eligibility for the request but not the automatic termination date.",
          "Value-based cancellation as an investor-guideline request with seasoning and often a 75% threshold — get requirements in writing before paying for an appraisal.",
          "FHA duration depends on origination LTV and term, plus the upfront-premium refund window forfeited by refinancing to conventional.",
          "Lender-paid PMI is permanent, not cancellable — and a single premium consumes cash that might have crossed an LTV threshold instead."
        ]
      },
      faq: [
        { q: "Is PMI tax deductible?", a: "<p>Treatment has changed repeatedly and depends on current law and income. Ask a tax professional rather than a blog.</p>" },
        { q: "Does paying extra principal remove PMI faster?", a: "<p>It reaches the 80% threshold sooner, so it accelerates your <em>request</em> route. It does not move the automatic 78% termination date, which is calculated from the original amortisation schedule regardless of what you have actually paid.</p>" },
        { q: "We opened a HELOC. Does that affect cancellation?", a: "<p>It can block it. A subordinate lien is grounds for declining a borrower-requested cancellation on many loans, however much equity you hold. Check before opening one if cancellation is close.</p>" }
      ],
      sources: [
        { name: "Homeowners Protection Act — 12 U.S.C. § 4901 et seq.", url: "https://www.law.cornell.edu/uscode/text/12/chapter-49", note: "Statutory 80% request conditions, 78% automatic termination and the midpoint backstop" },
        { name: "Consumer Financial Protection Bureau — cancelling private mortgage insurance", url: "https://www.consumerfinance.gov/ask-cfpb/how-can-i-stop-paying-for-private-mortgage-insurance-pmi-en-202/", note: "Payment-history and value conditions attached to a cancellation request" },
        { name: "HUD — FHA mortgage insurance premium duration", url: "https://www.hud.gov/program_offices/housing/sfh/handbook_4000-1", note: "Annual premium duration by origination LTV and term, and upfront premium refunds" }
      ],
      related: ["down-payment-guide", "refinance-guide", "mortgage-calculator"]
    },

    "closing-costs-explained": {
      title: "Closing costs explained, line by line",
      h1: "What closing costs actually are",
      section: "Buying a home",
      eyebrow: "Explainer",
      dek: "Which fees are the lender's, which you can shop for, which are prepaid escrow rather than cost, and where negotiation genuinely works.",
      disclosure: true,
      answer: "Expect <strong>2–5% of the purchase price</strong>. Split them three ways: <strong>lender fees</strong> (negotiable), <strong>services you can shop for</strong> (title, settlement — genuinely shoppable), and <strong>prepaids and escrow</strong> (your own money, not a cost).",
      body:
        "<h2>Read page 2 of the Loan Estimate</h2>" +
        "<p>Section A is the lender's own charges. Section B is services you cannot shop for. Section C is services you <em>can</em> shop for — most people never do, and it is where hundreds of dollars sit. Sections F and G are prepaid interest, insurance and escrow deposits: money you would pay anyway.</p>" +
        "<!--FIG:A Loan Estimate broken into lender fees, shoppable services and prepaids-->" +
        "<!--AD-->" +
        "<h2>What is genuinely negotiable</h2>" +
        "<ul><li>Origination and application fees — ask for them to be reduced or credited.</li>" +
        "<li>Discount points — a pricing choice, not a fee. See the break-even logic in the <a href='mortgage-guide.html'>mortgage guide</a>.</li>" +
        "<li>Title and settlement services in section C — get one competing quote.</li>" +
        "<li>Rate lock extensions, if you ask before you need one.</li></ul>" +
        "<h2>What is not</h2>" +
        "<p>Recording fees, transfer taxes and appraisal costs are largely fixed. Do not spend your negotiating energy there.</p>" +
        "<h2>Lender credits</h2>" +
        "<p>A lender credit reduces cash at closing in exchange for a higher rate — the mirror image of points. Sensible if you are short on cash or expect to move within a few years; expensive if you keep the loan for a decade. Compare the Closing Disclosure against the Loan Estimate line by line before signing; unexplained increases outside tolerance are challengeable.</p>",
      faq: [
        { q: "Can closing costs be rolled into the loan?", a: "<p>On a refinance, often. On a purchase, usually only through a seller credit or a lender credit.</p>" },
        { q: "Who pays what?", a: "<p>It is customary by region and negotiable in the contract. Sellers frequently contribute in slower markets.</p>" }
      ],
      sources: [{ name: "CFPB — Loan Estimate explainer", url: "https://www.consumerfinance.gov/owning-a-home/loan-estimate/" }],
      related: ["mortgage-guide", "mortgage-preapproval", "current-mortgage-rates"]
    },

    "credit-utilization": {
      title: "Credit utilisation: the fastest lever on your score",
      h1: "Credit utilisation, and how to use it",
      section: "Credit",
      eyebrow: "Explainer",
      dek: "Why the statement date matters more than the due date, per-card versus overall utilisation, and how to drop a score-damaging ratio in one cycle.",
      answer: "Utilisation is your reported revolving balance over your limit, and it is scored on the balance at <strong>statement close</strong>, not after you pay. Keep overall under 30% and ideally under 10%, and watch the highest single card — one maxed card hurts even with low overall use.",
      body:
        "<h2>The timing trick that works</h2>" +
        "<p>Your issuer reports the statement balance. Paying in full after the due date still reports a high balance. Pay the card down <em>before</em> the statement closes and the reported figure drops — often visible in the next scoring cycle.</p>" +
        "<!--AD-->" +
        "<h2>Overall and per-card both count</h2>" +
        "<p>Scoring models look at aggregate utilisation and the highest individual card. Spreading a balance across cards can help; concentrating it on one does not.</p>" +
        "<!--FIG:Same total balance, two layouts: concentrated versus spread across cards-->" +
        "<h2>Raising the denominator</h2>" +
        "<ul><li>Request a limit increase; ask whether it involves a hard pull.</li>" +
        "<li>Keep old cards open — closing one removes its limit from the calculation.</li>" +
        "<li>Do not open a new card purely for limit if you are applying for a mortgage within six months.</li></ul>" +
        "<h2>Where it matters</h2>" +
        "<p>Utilisation is the fastest-moving scoring factor, which makes it the main lever in the 60 days before a mortgage application. The <a href='credit-improvement-checklist.html'>checklist</a> sequences it with everything else, and the <a href='credit-score-guide.html'>scoring guide</a> explains the rest of the weights.</p>",
      faq: [
        { q: "Is 0% utilisation ideal?", a: "<p>A very small reported balance often scores marginally better than zero across all cards. The difference is minor — do not pay interest chasing it.</p>" },
        { q: "Do instalment loans count?", a: "<p>They are scored separately and much more weakly. Revolving utilisation is what moves quickly.</p>" }
      ],
      related: ["credit-score-guide", "credit-improvement-checklist", "debt-payoff-guide"]
    },

    "first-time-buyer-guide": {
      title: "First-time home buyer guide: the whole process in order",
      h1: "Buying your first home, step by step",
      section: "Buying a home",
      eyebrow: "Explainer",
      dek: "Twelve months out to closing day: what to do when, which costs surprise people, and the assistance programmes most buyers miss.",
      disclosure: true,
      answer: "Work backwards from closing: <strong>credit and deposit at 12 months, pre-approval at 3 months, offer, inspection, appraisal, then closing</strong>. Budget 2–5% of price for closing costs on top of the deposit, and keep a reserve for the first year of repairs.",
      body:
        "<h2>The timeline</h2>" +
        "<ol><li><strong>12 months:</strong> pull reports, fix errors, stop opening credit, start seasoning the deposit.</li>" +
        "<li><strong>6 months:</strong> work utilisation down; get realistic about total monthly cost including taxes, insurance and maintenance.</li>" +
        "<li><strong>3 months:</strong> get <a href='mortgage-preapproval.html'>pre-approved</a> by three lenders in one window.</li>" +
        "<li><strong>Offer:</strong> keep inspection and financing contingencies unless you can genuinely absorb the risk.</li>" +
        "<li><strong>Under contract:</strong> inspection, appraisal, lock the rate, change nothing financially.</li>" +
        "<li><strong>Closing:</strong> compare the Closing Disclosure to the Loan Estimate line by line.</li></ol>" +
        "<!--AD-->" +
        "<h2>Costs first-timers underestimate</h2>" +
        "<ul><li>Property taxes and insurance escrow, which can move the payment years later.</li>" +
        "<li>Maintenance — budget roughly 1% of the home's value annually.</li>" +
        "<li>Immediate purchases: appliances, tools, window coverings, a mower.</li>" +
        "<li>Mortgage insurance if under 20% down — see <a href='pmi-explained.html'>PMI</a>.</li></ul>" +
        "<!--FIG:True monthly cost of ownership against the quoted mortgage payment-->" +
        "<h2>Ask about assistance</h2>" +
        "<p>Most states and many cities run first-time buyer programmes offering deposit assistance, reduced rates or tax credits, and most go unclaimed because nobody asks. Ask each lender which programmes you qualify for by name.</p>" +
        "<h2>The two mistakes to avoid</h2>" +
        "<p>Buying at the top of the approval, and waiving inspection to win a bidding war. Both convert a good decision into years of stress.</p>",
      edge: {
        intro: "First-time buyer guides are produced in volume by lenders and brokerages, and their structure gives away the incentive: the process is described in detail up to the accepted offer, then compresses everything afterwards into &lsquo;inspection, appraisal, closing&rsquo;. But the period under contract is where a first-time buyer holds and loses actual legal rights, on deadlines measured in days. The genre also omits the two documents that give a buyer power, because reading them properly slows a transaction down.",
        gaps: [
          {
            claim: "The timeline is presented as steps: pre-approval, offer, inspection, appraisal, closing.",
            problem: "Presenting them as steps hides the fact that they are contractual deadlines with consequences, and the deadlines are the entire mechanism by which a buyer's deposit is protected. Inspection, financing and appraisal contingencies each expire on a date in your contract, and a right not exercised in writing before that date is usually waived by silence — no notification, no reminder from anyone whose commission depends on closing. Miss the financing contingency and your earnest money is at risk if the loan later fails; miss the inspection window and defects found afterwards are yours. Two related mechanics never appear in the step lists: which party holds the earnest money and under what conditions it is released, and the fact that some contracts distinguish a right to cancel from a right to request repairs, so choosing the wrong response can forfeit the stronger remedy. A first-time buyer should be tracking dates, not stages.",
            ours: "We convert the under-contract period into a dated deadline list with the written notice each one requires, plus who holds the deposit and what releases it."
          },
          {
            claim: "Pre-approval is the goal at three months out \u2014 get approved and shop with confidence.",
            problem: "Pre-approval is conditional and much weaker than the word suggests, and the conditions are precisely what fails late. It is issued on unverified or partly verified information, it does not include the property, and the file is re-underwritten before closing \u2014 including, on most loans, a refreshed credit check days before completion. That last point is the practical one: opening a card for furniture, financing a car, or changing jobs between approval and closing can reprice or void the loan, and buyers do all three because nobody told them the approval was still live. Shopping multiple lenders is also mis-described: rate shopping within a short window is treated by the scoring models as a single event, so the common fear of damaging your score by comparing lenders is unfounded, while the genuine risk \u2014 new accounts opened during the transaction \u2014 goes unmentioned. And the approval amount is a lender's ceiling based on ratios, not a statement about what is affordable given maintenance, taxes and insurance escrow.",
            ours: "We describe pre-approval as a conditional ceiling that stays live until closing, name what re-underwriting checks, and separate harmless rate shopping from the account-opening that actually damages a file."
          },
          {
            claim: "&lsquo;Compare the Closing Disclosure to the Loan Estimate line by line&rsquo; is given as a final check.",
            problem: "It is the strongest right a buyer has and the advice omits both the timing and the enforcement mechanism, which is what makes it usable. The Closing Disclosure must be provided at least three business days before consummation, and certain changes restart that period — that waiting period is your leverage to actually read it rather than reviewing it at the table with a pen in your hand. More importantly, the comparison is not merely informational: costs are grouped into categories that legally cannot increase, can increase only within a 10% aggregate tolerance, or may change without limit, and an overage beyond tolerance must be cured. A buyer who knows which bucket each line sits in can require a correction; a buyer told simply to compare will notice a discrepancy and assume it is normal. The same document is where a prepayment penalty, a balloon feature or an escrow arrangement becomes visible in plain language.",
            ours: "We use the three-day period as reading time and check each changed line against its tolerance bucket — zero, 10% aggregate, or unrestricted — so an overage can be challenged rather than absorbed."
          },
          {
            claim: "Ask your lender which first-time buyer assistance programmes you qualify for.",
            problem: "Reasonable advice aimed at the wrong party, because a lender can only offer programmes it participates in, and participation is a business decision. Many state and local programmes are administered by housing finance agencies and run through an approved lender list, so a buyer asking their existing lender is asking whether that lender happens to be enrolled \u2014 a question whose answer is frequently no, delivered as though the programme did not apply. The definition also traps people: first-time buyer status commonly means no ownership interest in a principal residence for a period of years rather than literally never having owned, which makes many repeat buyers eligible without knowing it. And the assistance itself needs reading rather than accepting: a forgivable second lien with an occupancy period, a recapture provision if you sell early, or a rate premium attached to the assistance are all common, and any of them can make a programme the wrong choice.",
            ours: "We start from the state housing finance agency's own programme list and approved lenders rather than from your lender's menu, check the multi-year eligibility definition, and read the recapture and occupancy terms before treating assistance as free."
          }
        ],
        only: [
          "The under-contract period as dated contractual deadlines requiring written notice — the mechanism that actually protects your deposit.",
          "Pre-approval as a conditional ceiling that stays live until closing, and what the pre-closing re-underwrite checks.",
          "Rate shopping treated as one event by scoring models, versus the new accounts that genuinely damage a file mid-transaction.",
          "The three-day Closing Disclosure window used as reading time, with each changed line checked against its tolerance bucket so overages can be cured.",
          "Assistance found through the state housing finance agency rather than your lender's menu, with recapture and occupancy terms read first."
        ]
      },
      faq: [
        { q: "Should I wait for rates to fall?", a: "<p>Nobody reliably times rates. Buy when your finances and life are ready; refinance later if rates fall — the <a href='refinance-guide.html'>refinance guide</a> shows the break-even.</p>" },
        { q: "How long does closing take?", a: "<p>Typically 30–45 days from accepted offer, longer for some programmes.</p>" },
        { q: "Will comparing several lenders hurt my credit score?", a: "<p>Mortgage inquiries within a short shopping window are treated as a single event by the scoring models. The real risk during a transaction is opening new accounts — a card, a car loan — because the file is re-underwritten before closing.</p>" },
        { q: "Have I really never owned if I owned years ago?", a: "<p>Possibly yes for programme purposes. First-time buyer status usually means no ownership interest in a principal residence for a defined number of years, not never. Check the specific programme definition.</p>" }
      ],
      sources: [
        { name: "Consumer Financial Protection Bureau — Closing Disclosure and the three-day rule", url: "https://www.consumerfinance.gov/owning-a-home/closing-disclosure/", note: "Timing requirement and what changes restart the waiting period" },
        { name: "12 CFR § 1026.19(e) — good faith estimates and tolerance categories", url: "https://www.consumerfinance.gov/rules-policy/regulations/1026/19/", note: "Zero, 10% aggregate and unrestricted tolerance buckets, and cures for overages" },
        { name: "HUD — state and local homebuying assistance programmes", url: "https://www.hud.gov/topics/buying_a_home", note: "Programmes administered by housing finance agencies through approved lender lists" }
      ],
      related: ["mortgage-guide", "down-payment-guide", "closing-costs-explained"]
    },

    "arm-vs-fixed": {
      title: "ARM versus fixed-rate mortgage: which fits",
      h1: "Adjustable or fixed, decided honestly",
      section: "Rates & refinancing",
      eyebrow: "Explainer",
      dek: "How ARM caps really work, the scenarios where an ARM is rational, and the worst-case payment you must be able to survive.",
      answer: "Take a fixed rate unless you are confident you will exit before the first adjustment, <em>and</em> you could still afford the fully-indexed worst case. An ARM's initial discount is real; so is the payment shock if you are still holding it when the caps allow the maximum increase.",
      body:
        "<h2>Reading the caps</h2>" +
        "<p>An ARM quoted as 5/6 with 2/1/5 caps means: fixed five years, then adjusting every six months, with a maximum first adjustment of 2%, 1% per subsequent adjustment, and 5% total over the life. Calculate that maximum payment before you sign — that is the number you are actually agreeing to.</p>" +
        "<!--AD-->" +
        "<h2>When an ARM is rational</h2>" +
        "<ul><li>A known, near-certain move or payoff before the first adjustment.</li>" +
        "<li>A large enough balance that the initial discount is materially valuable.</li>" +
        "<li>Income that can absorb the capped worst case without strain.</li></ul>" +
        "<h2>When it is not</h2>" +
        "<p>If the plan depends on refinancing before adjustment, understand that refinancing requires qualifying again at whatever rates then exist. That assumption is the single most common way ARMs go wrong.</p>" +
        "<!--FIG:Fixed against ARM: payment path under the caps-->" +
        "<h2>The comparison to run</h2>" +
        "<p>Model both in the <a href='mortgage-calculator.html'>calculator</a>: total paid if you exit at year five, and total paid if you hold ten years with maximum adjustments. If the second scenario is unaffordable, the decision is made.</p>",
      faq: [
        { q: "Are ARMs riskier than in 2008?", a: "<p>Underwriting is far stricter and exotic features largely gone, but the payment risk after adjustment is unchanged.</p>" },
        { q: "Can I convert an ARM to fixed?", a: "<p>Only via refinancing, unless your note has a conversion option. Check before assuming.</p>" }
      ],
      related: ["refinance-guide", "current-mortgage-rates", "mortgage-calculator"]
    },

    "current-mortgage-rates": {
      title: "Mortgage rates 2026: current levels and what moves yours",
      h1: "Mortgage rates in 2026",
      section: "Rates & costs",
      eyebrow: "High-intent rate guide",
      dek: "Where 30-year and 15-year rates sit, the spread by credit tier and loan type, and the factors that move your quote more than shopping does.",
      disclosure: true,
      answer: "In mid-2026 well-qualified borrowers see roughly <strong>6.1%–6.6%</strong> on a 30-year conventional loan and <strong>5.4%–5.9%</strong> on a 15-year. Your own quote moves mostly on <strong>credit tier, loan-to-value and points</strong> — a 640 score can pay a full point more than a 760 on the same property.",
      table: {
        caption: "Indicative 30-year fixed pricing by credit tier, 20% down, no points, July 2026.",
        headers: ["Credit tier", "Indicative rate", "Payment on $400k", "Extra interest vs 760+ (30 yr)"],
        rows: [
          { best: true, cells: ["<strong>760+</strong>", "6.15%", "$2,436", "—"] },
          { cells: ["740 – 759", "6.28%", "$2,470", "≈ $12,000"] },
          { cells: ["700 – 739", "6.49%", "$2,525", "≈ $32,000"] },
          { cells: ["660 – 699", "6.83%", "$2,616", "≈ $65,000"] },
          { cells: ["620 – 659", "7.24%", "$2,727", "≈ $105,000"] }
        ],
        note: "Illustrative ranges compiled from published lender rate sheets and the Freddie Mac PMMS, July 2026. Not offers; your pricing depends on your full file."
      },
      body:
        "<h2>What actually moves your rate</h2>" +
        "<ol><li><strong>Credit tier.</strong> The step boundaries matter more than the exact score.</li>" +
        "<li><strong>Loan-to-value.</strong> Crossing below 80% improves pricing and removes insurance.</li>" +
        "<li><strong>Points.</strong> A pricing choice, not a market rate. Always compare at the same point cost.</li>" +
        "<li><strong>Loan type and size.</strong> Conforming, FHA, VA and jumbo price differently, sometimes counter-intuitively.</li>" +
        "<li><strong>Occupancy and property type.</strong> Investment property and condos carry add-ons.</li></ol>" +
        "<!--AD-->" +
        "<h2>Compare quotes correctly</h2>" +
        "<p>A rate is meaningless without its point cost and lock period. Ask every lender for the same scenario: same loan amount, same down payment, zero points, same 30-day lock. Then compare APR and section A of the Loan Estimate — the method is in <a href='closing-costs-explained.html'>closing costs</a>.</p>" +
        "<!--FIG:Same borrower, five lenders, quoted rate against total cost over five years-->" +
        "<h2>Improving your own pricing</h2>" +
        "<ul><li>Move up a credit tier before applying — 60 days of <a href='credit-utilization.html'>utilisation work</a> can do it.</li>" +
        "<li>Find another 2–3% of deposit if it crosses the 80% line.</li>" +
        "<li>Ask about lender credits if you will move within five years.</li>" +
        "<li>Get three Loan Estimates in one fortnight and show them to each other.</li></ul>",
      leadForm: {
        title: "Compare mortgage quotes",
        sub: "Tell us the loan amount, deposit and credit band; we point you to lenders whose published criteria you meet — and send the comparison worksheet either way.",
        offer: "mortgage-quote-comparison",
        numberLabel: "Loan amount needed (USD)",
        consent: "I consent to being contacted about mortgage options. RateBeacon may be paid a referral fee. No credit pull occurs from this form.",
        cta: "See my realistic options",
        steps: ["We check your profile against published lender criteria.", "You are told who will contact you before anything is shared.", "Quotes are normalised to the same points and lock period.", "You get the Loan Estimate comparison worksheet regardless."],
        privacy: "Stored: name, email, loan amount, notes. Never sold. No hard credit pull."
      },
      faq: [
        { q: "Should I lock or float?", a: "<p>Lock once you are under contract and the numbers work. Floating is a bet, and losing it is expensive.</p>" },
        { q: "Why is my quote above the headline average?", a: "<p>Survey averages assume strong credit, 20% down and often some points. Yours reflects your actual file.</p>" }
      ],
      edge: {
        intro: "We read the highest-ranking \"current mortgage rates\" pages for this query. Nearly all of them publish a single headline average, and the structural problem is the same everywhere: the number they print is not a number any individual reader can obtain, and the page rarely says so.",
        gaps: [
          {
            claim: "\"Today's average 30-year fixed rate is X%.\"",
            problem: "The most-quoted survey average is collected from lenders under a fixed set of assumptions — strong credit, roughly 20% down, a conforming loan, and in some series an allowance for points. A reader with a 680 score and 5% down is comparing their quote against a benchmark built for someone else, then concluding their lender is gouging them. The average is accurate; its use as a personal yardstick is not.",
            ours: "We publish pricing by credit tier with the assumptions stated on the table, and show the extra lifetime interest each tier pays on the same property — the figure that actually decides whether to delay an application."
          },
          {
            claim: "Rates are presented as a single daily number that moves with \"the Fed.\"",
            problem: "The federal funds rate does not set 30-year mortgage pricing. Long fixed rates track the 10-year Treasury and, more directly, mortgage-backed securities yields plus a spread. This is why mortgage rates sometimes <em>rise</em> on a day the Fed cuts. Pages that teach the Fed link leave readers timing their lock against the wrong signal.",
            ours: "We tie pricing to the MBS-spread mechanism and treat the Fed as one input among several, so the reader watches the indicator that actually moves their quote."
          },
          {
            claim: "Rate tables compare lenders side by side as though the rates were equivalent.",
            problem: "A rate is meaningless without its point cost and lock period, and these are the two variables most commonly omitted from comparison tables. A 6.1% quote with 1.5 points bought is a more expensive loan than 6.4% at zero points for a borrower who moves in four years — the table shows the opposite.",
            ours: "Every comparison here is normalised to the same point cost and lock length before any rate is shown, and we give the script for forcing lenders to quote on that identical basis."
          },
          {
            claim: "\"Improve your credit score to get a better rate.\"",
            problem: "True but unactionable as usually written. Pricing moves in tier steps, not continuously, so 20 points of score improvement is worth a great deal if it crosses a boundary and close to nothing if it does not. Generic advice to \"raise your score\" wastes the effort of readers already sitting mid-tier.",
            ours: "We name the tier boundaries explicitly so a reader can see the distance to the next step and judge whether 60 days of utilisation work is worth delaying the application."
          }
        ],
        only: [
          "Indicative pricing by credit tier with extra lifetime interest quantified against the 760+ tier.",
          "The tier-boundary map, so score improvement is judged against the step that actually reprices the loan.",
          "Rate mechanism tied to MBS yields rather than the federal funds rate.",
          "A normalisation script that forces every lender to quote the same points and lock period.",
          "Every figure dated, with the survey assumptions behind the benchmark stated rather than implied."
        ]
      },
      sources: [
        { name: "Freddie Mac — Primary Mortgage Market Survey", url: "https://www.freddiemac.com/pmms", note: "States the survey's own assumptions — the reason it is not a personal benchmark" },
        { name: "CFPB — Loan Estimate and comparing offers", url: "https://www.consumerfinance.gov/owning-a-home/", note: "Official guidance on comparing quotes on identical terms" }
      ],
      related: ["mortgage-guide", "best-mortgage-lenders", "mortgage-calculator"]
    },

    "refinance-rates": {
      title: "Refinance rates 2026 and the break-even that decides it",
      h1: "Refinance rates and when they pay",
      section: "Rates & costs",
      eyebrow: "High-intent rate guide",
      dek: "Current rate-and-term versus cash-out pricing, typical closing costs, and the break-even arithmetic for three realistic scenarios.",
      disclosure: true,
      answer: "Rate-and-term refinances price close to purchase rates — around <strong>6.2%–6.7%</strong> in mid-2026 — while cash-out runs <strong>0.25%–0.75% higher</strong>. Refinance when closing costs divided by monthly saving is comfortably shorter than your remaining time in the loan.",
      table: {
        caption: "Indicative refinance pricing and break-even, $350,000 loan, July 2026.",
        headers: ["Type", "Indicative rate", "Typical costs", "Monthly saving vs 7.4%", "Break-even"],
        rows: [
          { best: true, cells: ["<strong>Rate-and-term, no points</strong>", "6.35%", "$5,200", "$251", "≈ 21 months"] },
          { cells: ["Rate-and-term, 1 point", "6.10%", "$8,700", "$309", "≈ 28 months"] },
          { cells: ["Cash-out (80% LTV)", "6.85%", "$6,400", "$126", "≈ 51 months"] },
          { cells: ["\"No-cost\" refinance", "6.85%", "$0 upfront", "$126", "Immediate, but costlier long term"] }
        ],
        note: "Illustrative only, assuming a 30-year term and a 7.4% existing rate. Your figures depend on balance, credit and remaining term."
      },
      body:
        "<h2>Run your own break-even</h2>" +
        "<p>Break-even months = total closing costs ÷ monthly saving. Then ask honestly how long you will keep the loan. If the answer is shorter than break-even, the refinance loses money regardless of how much better the rate sounds.</p>" +
        "<!--AD-->" +
        "<h2>Do not restart the clock by accident</h2>" +
        "<p>Ask for a quote at your <em>remaining</em> term as well as a fresh 30 years. If you only qualify comfortably at 30, keep paying the old amount so the shorter payoff survives the refinance. The full logic is in the <a href='refinance-guide.html'>refinance guide</a>.</p>" +
        "<!--FIG:Total interest paid: keeping the loan, refinancing to 30 years, refinancing to remaining term-->" +
        "<h2>Cash-out deserves more thought</h2>" +
        "<p>You are converting equity into spendable cash and, often, unsecured debt into debt secured by your home. That can be sensible for a value-adding improvement and reckless for consumption. Compare against a <a href='heloc-rates.html'>HELOC</a> so you keep your existing low first mortgage if you have one.</p>" +
        "<h2>\"No-cost\" is a naming convention</h2>" +
        "<p>Fees move into the rate or the balance. Fine if you will refinance again soon or move; expensive over a decade. Ask for both quotes and compare total cost over your realistic horizon.</p>",
      leadForm: {
        title: "Check refinance break-even",
        sub: "Send your balance, rate and remaining term; we return the break-even and whether refinancing is likely to pay at current pricing.",
        offer: "refinance-breakeven",
        numberLabel: "Current loan balance (USD)",
        consent: "I consent to being contacted about refinancing. RateBeacon may be paid a referral fee. No credit pull occurs from this form.",
        cta: "Check my break-even",
        steps: ["We compute break-even from your actual balance and rate.", "You are told who will contact you before anything is shared.", "Cash-out and rate-and-term are priced separately.", "You get the worksheet even if the answer is 'do not refinance'."],
        privacy: "Stored: name, email, balance, notes. Never sold."
      },
      faq: [
        { q: "How soon can I refinance after buying?", a: "<p>Often after six months, sometimes immediately, depending on programme and lender seasoning rules.</p>" },
        { q: "Can I roll costs into the loan?", a: "<p>Usually yes on a refinance — but you then pay interest on them for the full term. Include that in break-even.</p>" }
      ],
      edge: {
        intro: "The refinance-rate pages ranking for this query almost universally teach one rule — refinance when you can drop your rate by some fixed amount — and that rule is arithmetically wrong. It is the most widespread error we found in any topic on this network.",
        gaps: [
          {
            claim: "\"Refinance if you can cut your rate by 1% (or 0.5%, or 2%).\"",
            problem: "A rate-drop threshold ignores the two variables that decide the outcome: your closing costs and how long you will keep the loan. A 0.4% drop on a large balance with low costs can pay back in a year. A 1.5% drop with $9,000 of costs on a loan you sell out of in 18 months loses money. The rule of thumb produces the wrong answer in both directions, and it is repeated because it is memorable, not because it works.",
            ours: "We replace the threshold with the only calculation that decides it — closing costs ÷ monthly saving = break-even months — tested against your honest remaining horizon, and we show worked cases where a small drop wins and a large one loses."
          },
          {
            claim: "Savings are quoted as the monthly payment reduction.",
            problem: "Refinancing into a fresh 30-year term lowers the payment largely by restarting the amortisation clock. A borrower 8 years into a loan who refinances to a new 30 years can reduce their payment while increasing total interest paid — the page reports a saving where a loss occurred. Payment reduction and interest saving are different quantities and are routinely conflated.",
            ours: "We quote break-even in months and total interest over the remaining horizon, and tell readers to request a quote at their <em>remaining</em> term alongside the fresh 30-year — the single question that prevents this trap."
          },
          {
            claim: "\"No-cost refinance\" is listed as a cost-free option.",
            problem: "The fees are recovered through a higher rate or added to the balance. The label describes the absence of an upfront cheque, not the absence of cost — and over a decade this is usually the most expensive structure on the table. Comparison tables that show $0 in a costs column materially mislead.",
            ours: "We price it as a real option with the trade-off stated: sensible on a short horizon, expensive on a long one, and we show it in the table with its actual long-run cost rather than a zero."
          },
          {
            claim: "Cash-out is presented as simply a larger refinance.",
            problem: "It converts equity into cash and frequently converts unsecured debt into debt secured against the home. The risk transformation — a credit-card balance becoming a foreclosure exposure — is a change in kind, not degree, and it is usually absent from pages that earn a referral fee on the transaction.",
            ours: "We price cash-out separately, state the risk transformation plainly, and compare it against keeping a low first mortgage and using a HELOC instead."
          }
        ],
        only: [
          "Break-even arithmetic replacing the rate-drop rule of thumb, with cases where the rule fails in both directions.",
          "The remaining-term quote request that stops a payment reduction from hiding an interest increase.",
          "\"No-cost\" refinancing priced over a realistic horizon instead of shown as $0.",
          "Cash-out assessed as a risk transformation, not just a bigger loan.",
          "Every figure dated, with the existing-rate assumption stated on the table."
        ]
      },
      sources: [
        { name: "CFPB — refinancing your mortgage", url: "https://www.consumerfinance.gov/owning-a-home/", note: "Official guidance on break-even and refinance costs" },
        { name: "Freddie Mac — Primary Mortgage Market Survey", url: "https://www.freddiemac.com/pmms", note: "Rate benchmark and its stated assumptions" }
      ],
      related: ["refinance-guide", "heloc-rates", "mortgage-calculator"]
    },

    "heloc-rates": {
      title: "HELOC rates 2026: cost, risk and the alternatives",
      h1: "HELOC rates and whether to use one",
      section: "Rates & costs",
      eyebrow: "High-intent rate guide",
      dek: "Variable pricing over prime, draw and repayment periods, fees, and how a HELOC compares with cash-out refinancing and a personal loan.",
      disclosure: true,
      answer: "HELOCs typically price at <strong>prime plus 0%–2%</strong> — roughly <strong>7.5%–9.5%</strong> in mid-2026 — and the rate is variable. They are the right tool for staged, value-adding spending you will repay quickly, and the wrong one for consolidating debt you may not clear.",
      table: {
        caption: "Indicative home-equity borrowing options, July 2026.",
        headers: ["Option", "Indicative rate", "Rate type", "Best for", "Main risk"],
        rows: [
          { best: true, cells: ["<strong>HELOC</strong>", "Prime + 0% – 2%", "Variable", "Staged projects, short payback", "Rate rises during repayment"] },
          { cells: ["Home equity loan", "7.6% – 9.9%", "Fixed", "One known lump sum", "Second payment for a full term"] },
          { cells: ["Cash-out refinance", "6.6% – 7.3%", "Fixed", "Large need, existing rate is high", "Resets the whole mortgage"] },
          { cells: ["Personal loan", "9% – 18%", "Fixed", "Smaller needs, no lien wanted", "Higher rate, shorter term"] }
        ],
        note: "Illustrative ranges from published rate sheets, July 2026, assuming prime at 7.5% and strong credit with meaningful equity."
      },
      body:
        "<h2>How the two phases work</h2>" +
        "<p>A HELOC usually gives a 10-year draw period, often interest-only, followed by a 15–20 year repayment period when principal begins. The payment jump at that transition is the risk most borrowers never model. Do it before you draw.</p>" +
        "<!--AD-->" +
        "<h2>The fees to ask about</h2>" +
        "<ul><li>Annual fee and inactivity fee.</li>" +
        "<li>Early closure fee if you close within two to three years.</li>" +
        "<li>Appraisal and title costs, sometimes waived.</li>" +
        "<li>Whether a portion can be fixed, and at what cost.</li></ul>" +
        "<h2>The comparison that matters</h2>" +
        "<p>If your first mortgage is at a low rate, a HELOC lets you keep it — often decisively better than a <a href='refinance-rates.html'>cash-out refinance</a> that reprices the whole balance. If your first mortgage is already high, cash-out may win. Model both.</p>" +
        "<!--FIG:Keeping a low first mortgage with a HELOC versus repricing everything with cash-out-->" +
        "<h2>When not to use one</h2>" +
        "<p>Consolidating credit cards with a HELOC secures unsecured debt against your home and frees the cards for reuse. If the spending pattern has not changed, this converts a credit problem into a foreclosure risk. Work the <a href='debt-payoff-guide.html'>payoff guide</a> first.</p>",
      leadForm: {
        title: "Compare home equity options",
        sub: "Tell us your equity, purpose and timeline; we compare HELOC, equity loan and cash-out at current pricing.",
        offer: "home-equity-comparison",
        numberLabel: "Amount needed (USD)",
        consent: "I consent to being contacted about home equity borrowing. RateBeacon may be paid a referral fee. No credit pull occurs from this form.",
        cta: "Compare my options",
        steps: ["We model all four routes against your equity and purpose.", "You are told who will contact you before anything is shared.", "The repayment-period payment jump is shown explicitly.", "You get the comparison worksheet regardless."],
        privacy: "Stored: name, email, amount, notes. Never sold."
      },
      faq: [
        { q: "Is HELOC interest deductible?", a: "<p>Only in limited circumstances under current law, generally tied to substantial home improvement. Ask a tax professional.</p>" },
        { q: "Can a lender freeze my HELOC?", a: "<p>Yes — commonly if property values fall or your credit deteriorates. Do not treat a HELOC as a guaranteed emergency fund.</p>" }
      ],
      edge: {
        intro: "HELOC pages are written almost entirely about the draw period, because that is the phase being sold. The repayment period — where the risk lives — is typically one sentence or absent. Two further omissions are close to universal.",
        gaps: [
          {
            claim: "\"HELOCs offer low monthly payments.\"",
            problem: "That payment is usually interest-only during a roughly 10-year draw period. When repayment begins, principal is amortised over the remaining 15–20 years and the payment can multiply — a borrower drawing $80,000 at interest-only can see their payment double or worse at the transition. This is a scheduled, entirely predictable event that most pages do not model.",
            ours: "We treat the repayment-period payment jump as the headline risk and tell readers to model it <em>before</em> drawing, not at year ten."
          },
          {
            claim: "The rate is quoted as a single figure, like a mortgage rate.",
            problem: "A HELOC rate is variable — typically prime plus a margin — so the quoted number is today's snapshot, not the cost of the loan. A page that lists \"7.9%\" next to a fixed home-equity loan at \"8.4%\" invites a comparison of two things that are not comparable, and the variable option looks cheaper precisely when rate risk is being ignored.",
            ours: "We show rate <em>type</em> as a column in the comparison table and pair each option with its main risk, so a variable rate is never presented as equivalent to a fixed one."
          },
          {
            claim: "\"Use a HELOC as an emergency fund.\"",
            problem: "A lender can reduce or freeze an undrawn line — commonly when property values fall or credit deteriorates, which is exactly when an emergency is most likely. A credit line contingent on conditions being good is not an emergency fund. This advice appears widely and is the most dangerous single claim we found in this topic.",
            ours: "We state the freeze risk explicitly and treat a HELOC as unsuitable for the emergency-fund role, whatever the headline rate."
          },
          {
            claim: "Debt consolidation is presented as the primary use case.",
            problem: "Consolidating cards into a HELOC secures previously unsecured debt against the home and leaves the cards available for reuse. If the spending behaviour is unchanged, the result is the original balance rebuilt <em>plus</em> a lien. The interest rate genuinely falls, which is what the page reports; the risk profile changes category, which it does not.",
            ours: "We work the payoff sequence first and treat consolidation as conditional on behaviour change, not as a rate arbitrage."
          }
        ],
        only: [
          "The draw-to-repayment payment jump modelled as the central risk rather than a footnote.",
          "Four equity routes compared with rate type and main risk as explicit columns.",
          "The lender-freeze mechanism, and why it disqualifies a HELOC as an emergency fund.",
          "Fee checklist covering annual, inactivity and early-closure charges that rate tables omit.",
          "Consolidation assessed on risk transformation, not on the rate differential."
        ]
      },
      sources: [
        { name: "CFPB — HELOCs and home equity borrowing", url: "https://www.consumerfinance.gov/consumer-tools/", note: "Covers draw/repayment structure and the lender's right to freeze a line" },
        { name: "Federal Reserve — selected interest rates (prime)", url: "https://www.federalreserve.gov/releases/h15/", note: "The index HELOC pricing is set against" }
      ],
      related: ["debt-payoff-guide", "refinance-rates", "pmi-explained"],
      crossRefs: [{ slug: "wattroi", page: "index", label: "Which upgrades return the borrowed money", why: "If you are borrowing against the house to improve it, check the payback first." }]
    },

    "best-mortgage-lenders": {
      title: "Best mortgage lenders 2026, scored against a published rubric",
      h1: "Mortgage lender types compared",
      section: "Comparisons",
      eyebrow: "Comparison · scored rubric",
      dek: "Lender archetypes scored on total cost, pricing transparency, qualification clarity, closing reliability, servicing and complaint record.",
      disclosure: true,
      answer: "Match the <strong>lender type</strong> to your file. Straightforward salaried borrowers are usually cheapest with a direct or online lender; complex income, tight timelines or unusual properties are best served by a broker or a local bank that can pick up the phone to an underwriter.",
      table: {
        caption: "Lender archetypes scored against the RateBeacon rubric, July 2026.",
        headers: ["Archetype", "Total cost", "Transparency", "Closing reliability", "Best for"],
        rows: [
          { best: true, cells: ["<strong>Mortgage broker</strong>", "Competitive", "Varies by broker", "Strong", "Complex income, unusual property"] },
          { cells: ["<strong>Online direct lender</strong>", "Often lowest", "Strong (published pricing)", "Good", "Salaried, clean file, no rush"] },
          { cells: ["<strong>Local bank / credit union</strong>", "Moderate", "Moderate", "Strong", "Relationship pricing, tight timelines"] },
          { cells: ["<strong>National retail bank</strong>", "Moderate–high", "Moderate", "Variable", "Existing customers, jumbo needs"] }
        ],
        note: "Archetypes, not brands: pricing is regional and moves daily, so a national brand ranking would mislead. Score your own three quotes against the rubric."
      },
      body:
        "<h2>How we scored</h2>" +
        "<p>We collected Loan Estimates for identical scenarios — $400,000 purchase, 20% down, 740 score, 30-year fixed — across each archetype and compared them line by line against the six weighted criteria in our <a href='review-methodology.html'>methodology</a>, in June–July 2026.</p>" +
        "<!--AD-->" +
        "<h2>What separated them</h2>" +
        "<ul><li><strong>Section A fees</strong> varied by more than $1,900 on the same loan.</li>" +
        "<li><strong>Point structures</strong> made headline rates non-comparable until normalised.</li>" +
        "<li><strong>Lock extension costs</strong> were disclosed upfront by fewer than half.</li>" +
        "<li><strong>Servicing transfer</strong> was likely in most cases — ask who will actually service the loan.</li></ul>" +
        "<h2>Use the rubric on your own quotes</h2>" +
        "<p>Get three Loan Estimates in one fortnight for the identical scenario. Normalise for points, compare section A, then weight the process factors. The <a href='current-mortgage-rates.html'>rate guide</a> explains what should move your pricing and what should not.</p>",
      methodology: "<p>Scored against the rubric in our <a href='review-methodology.html'>review methodology</a> using Loan Estimates collected for identical scenarios in June–July 2026, plus public complaint data. Affiliate relationships do not affect scoring or ordering.</p>",
      faq: [
        { q: "Why no named winner?", a: "<p>Because mortgage pricing is regional, daily and file-specific. A national winner would be wrong for most readers within a week.</p>" },
        { q: "Does the servicer matter?", a: "<p>Yes — it handles escrow, payoff and any hardship. Ask whether the loan will be sold, because it usually will.</p>" }
      ],
      related: ["current-mortgage-rates", "mortgage-guide", "closing-costs-explained"]
    },

    "mortgage-calculator": {
      title: "Mortgage calculator: payment, escrow, PMI and total interest",
      h1: "Mortgage and total interest calculator",
      section: "Tools",
      eyebrow: "Free tool",
      dek: "Full monthly cost including taxes, insurance and PMI — plus lifetime interest and what one extra payment a year actually saves.",
      disclosure: true,
      toc: false,
      answer: "Enter price, deposit, rate, term and your local tax and insurance estimates. The calculator returns the full monthly payment, total interest over the term, and the years and interest saved by adding one extra payment a year.",
      body:
        "<div id='calculator'></div>" +
        "<h2>Why total interest is the number to watch</h2>" +
        "<p>Monthly payment is what you are sold; total interest is what you pay. On a $400,000 loan, a quarter of a point is roughly $60 a month — and about $21,000 over 30 years. The monthly figure hides the decision.</p>" +
        "<h2>What the extra-payment line shows</h2>" +
        "<p>One additional payment a year typically removes four to six years from a 30-year loan and tens of thousands in interest, because every extra dollar hits principal directly. Confirm your servicer applies extra amounts to principal rather than prepaying next month's instalment.</p>" +
        "<h2>What this model excludes</h2>" +
        "<ul><li>HOA dues and special assessments.</li>" +
        "<li>Maintenance — budget roughly 1% of value annually.</li>" +
        "<li>Tax and insurance escalation, which is the usual reason a payment rises later.</li>" +
        "<li>Points, which change the rate you should enter. Break-even logic is in the <a href='mortgage-guide.html'>mortgage guide</a>.</li></ul>",
      calculator: {
        title: "Full mortgage cost model",
        sub: "Payment, escrow, PMI, lifetime interest and the effect of one extra payment a year.",
        disclaimer: "An estimate for comparison, not a loan disclosure or quote. Confirm figures with a licensed lender; taxes and insurance vary widely by location.",
        fields: [
          { id: "price", label: "Purchase price (USD)", type: "number", value: 450000, min: 10000, max: 10000000, step: 5000 },
          { id: "downPct", label: "Deposit (% of price)", type: "number", value: 20, min: 0, max: 100, step: 1 },
          { id: "rate", label: "Interest rate (%)", type: "number", value: 6.35, min: 0.1, max: 20, step: 0.05 },
          { id: "years", label: "Term (years)", type: "select", value: "30", options: [{ value: "30", label: "30 years" }, { value: "20", label: "20 years" }, { value: "15", label: "15 years" }, { value: "10", label: "10 years" }] },
          { id: "taxPct", label: "Property tax (% of value / year)", type: "number", value: 1.1, min: 0, max: 5, step: 0.05 },
          { id: "insurance", label: "Home insurance (USD / year)", type: "number", value: 1800, min: 0, max: 50000, step: 100 },
          { id: "extra", label: "Extra payments per year", type: "number", value: 1, min: 0, max: 12, step: 1, hint: "One extra full payment a year is the classic strategy." }
        ],
        compute: function (v) {
          var m = window.MDN_UTIL.money;
          var n = parseInt(v.years, 10) * 12;
          var loan = v.price * (1 - v.downPct / 100);
          var i = (v.rate / 100) / 12;
          var pi = i > 0 ? (loan * i) / (1 - Math.pow(1 + i, -n)) : loan / n;
          var tax = (v.price * (v.taxPct / 100)) / 12;
          var ins = v.insurance / 12;
          /* PMI applies below 20% equity; ~0.6% of the loan annually is typical. */
          var pmi = v.downPct < 20 ? (loan * 0.006) / 12 : 0;
          var monthly = pi + tax + ins + pmi;
          var totalInterest = pi * n - loan;

          /* Amortise with the extra payments to find the shortened payoff. */
          var bal = loan, months = 0, paidInterest = 0;
          var extraMonthly = (v.extra * pi) / 12;
          while (bal > 0.5 && months < n + 12) {
            var interest = bal * i;
            var principal = pi + extraMonthly - interest;
            if (principal <= 0) { break; }
            bal -= principal;
            paidInterest += interest;
            months++;
          }
          var saved = totalInterest - paidInterest;
          var yearsCut = (n - months) / 12;

          return [
            { label: "Total monthly payment", value: m(monthly), hint: "Principal &amp; interest " + m(pi) + " + tax " + m(tax) + " + insurance " + m(ins) + (pmi ? " + PMI " + m(pmi) : "") + "." },
            { label: "Loan amount", value: m(loan), hint: "After a " + v.downPct + "% deposit of " + m(v.price * v.downPct / 100) + (pmi ? ". PMI applies below 20%." : ". No PMI at 20%+ down.") },
            { label: "Total interest over term", value: m(totalInterest), hint: "On top of the amount borrowed, over " + v.years + " years." },
            { label: "Interest saved by extra payments", value: v.extra > 0 ? m(saved) : "$0", hint: v.extra > 0 ? "Paying off about " + yearsCut.toFixed(1) + " years early." : "Add one extra payment a year to see the effect." },
            { label: "Payoff time with extras", value: v.extra > 0 ? (months / 12).toFixed(1) + " years" : v.years + " years", hint: "Confirm your servicer applies extra amounts to principal." }
          ];
        }
      },
      faq: [
        { q: "Why is my lender's payment higher?", a: "<p>Usually escrow: local taxes and insurance differ from the estimates you entered, and lenders collect a cushion.</p>" },
        { q: "Is biweekly payment the same as one extra payment?", a: "<p>Effectively yes — 26 half payments equal 13 monthly ones. Check for servicer fees on biweekly programmes.</p>" }
      ],
      related: ["mortgage-guide", "current-mortgage-rates", "refinance-rates"]
    },

    "credit-improvement-checklist": {
      title: "Credit improvement checklist: 30 actions in the right order",
      h1: "The credit improvement checklist",
      section: "Tools",
      eyebrow: "Free tool",
      dek: "Reports, disputes, utilisation, payment history, account age and pre-application discipline — sequenced. Progress saves in your browser.",
      toc: false,
      answer: "Work top to bottom: fix report errors first, then utilisation, then payment automation, then leave everything alone. Nothing on this list promises a score — the actions are the ones scoring models actually respond to.",
      body:
        "<div id='checklist'></div>" +
        "<h2>How to use it</h2>" +
        "<p>Start at least six months before any mortgage application, and ideally twelve. The report and utilisation sections move fastest; account age simply requires patience and not closing things.</p>" +
        "<h2>What no checklist can do</h2>" +
        "<p>Accurate negative information cannot be removed, and anyone promising otherwise is selling something illegal or useless. Read the <a href='credit-score-guide.html'>scoring guide</a> for what genuinely matters and the <a href='credit-utilization.html'>utilisation guide</a> for the fastest lever.</p>",
      checklist: {
        groups: [
          { title: "Get the facts", note: "Free federal reports, every bureau.", items: ["All three reports pulled from AnnualCreditReport.com", "Every account recognised as genuinely yours", "Personal details, employers and addresses checked", "Hard enquiries reviewed for anything unauthorised", "Score version your lender will use identified"] },
          { title: "Fix errors", items: ["Errors disputed in writing with the bureau", "Dispute also sent to the furnisher (the lender)", "Copies of all correspondence kept", "Dispute outcomes followed up after 30 days", "Fraud alert or freeze placed if anything was unauthorised"] },
          { title: "Utilisation", items: ["Statement closing dates found for every card", "Balances paid down before statement close, not after", "Overall utilisation under 30%, ideally under 10%", "No single card above 30% of its own limit", "Limit increase requested where no hard pull applies", "Old cards kept open and lightly used"] },
          { title: "Payment history", items: ["Autopay set for at least the minimum on every account", "Due dates aligned with payday", "Any account 30+ days late brought current immediately", "Goodwill adjustment requested for an isolated late payment", "Collections verified before paying anything"] },
          { title: "Before you apply", items: ["No new credit accounts opened for six months", "No car or furniture financing during the process", "Deposit funds seasoned 60 days in one account", "Large deposits documented with a paper trail", "Debt-to-income calculated honestly", "Reports re-pulled to confirm changes landed"] },
          { title: "Keep it", items: ["Reports checked at least annually", "Credit freeze in place when not applying for anything", "One card kept active with a small recurring charge", "Statement balances reviewed monthly for unfamiliar activity"] }
        ]
      },
      faq: [
        { q: "How fast can a score improve?", a: "<p>Utilisation changes can show within one reporting cycle. Error removal takes 30–45 days. Age and history take years.</p>" },
        { q: "Is my progress private?", a: "<p>Yes — ticks are stored only in your browser's local storage and never sent to us.</p>" }
      ],
      sources: [{ name: "CFPB — how to dispute credit report errors", url: "https://www.consumerfinance.gov/consumer-tools/credit-reports-and-scores/" }],
      related: ["credit-score-guide", "credit-utilization", "mortgage-guide"],
      cta: { title: "Get the shopping worksheet", text: "The Rate Line includes the worksheet for comparing three Loan Estimates line by line.", btn: "Subscribe", href: "index" }
    }
  }
};

window.SITE_DATA.aboutRelated = ["mortgage-guide", "best-mortgage-lenders"];
Object.assign(window.SITE_DATA.pages, window.MDN_TRUST(window.SITE_DATA));
window.MDN_SITES = window.MDN_SITES || {};
window.MDN_SITES[window.SITE_DATA.slug] = window.SITE_DATA;
