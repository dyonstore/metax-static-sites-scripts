/* ==========================================================================
   FISCORA — Content graph
   Single index of every page: powers nav, search, related posts,
   learning paths, category hubs, "up next" recirculation and JSON-LD.
   ========================================================================== */

const SITE = {
  name: 'Fiscora',
  tagline: 'Money · Risk · Growth Intelligence',
  domain: 'fiscora.metax.academy',
  origin: 'https://fiscora.metax.academy',
  /* Absolute URL helper — social scrapers and JSON-LD both require absolute. */
  abs(path) { return SITE.origin + '/' + String(path || '').replace(/^\/+/, ''); },
  logo: 'https://fiscora.metax.academy/img/fiscora-logo.png',
  ogDefault: 'https://fiscora.metax.academy/img/og/fiscora-default.jpg',
  publisherId: 'ca-pub-4463113802541266',
  locale: 'en_US',
  /* Fiscora is published by MetaX.Academy, the independent educational
     publisher curated by Maher. Kept factual: no founding-year claim, no
     audience-size claim, no staff count we cannot substantiate. */
  parent: { name: 'MetaX.Academy', url: 'https://metax.academy/' },
  description:
    'Independent, numbers-first research on investing, insurance, credit, tax, property and business growth — every conclusion backed by a model you can edit in the browser.'
};

const CATEGORIES = {
  investing: {
    key: 'investing',
    label: 'Investing & Wealth',
    short: 'Investing',
    url: 'investing.html',
    icon: 'fa-chart-line',
    art: 'art-1',
    blurb: 'Portfolio construction, index strategy, dividends and retirement mechanics — with the math shown.'
  },
  insurance: {
    key: 'insurance',
    label: 'Insurance & Risk',
    short: 'Insurance',
    url: 'insurance.html',
    icon: 'fa-shield-halved',
    art: 'art-2',
    blurb: 'How to buy exactly the coverage you need, price it correctly, and never overpay for a rider you will not use.'
  },
  credit: {
    key: 'credit',
    label: 'Credit & Debt',
    short: 'Credit',
    url: 'credit-and-debt.html',
    icon: 'fa-credit-card',
    art: 'art-5',
    blurb: 'Scores, mortgages, student loans and payoff sequencing — ranked by lifetime cost, not by vibes.'
  },
  business: {
    key: 'business',
    label: 'Business & SaaS',
    short: 'Business',
    url: 'business-growth.html',
    icon: 'fa-rocket',
    art: 'art-3',
    blurb: 'Pricing, unit economics, cloud spend and operating leverage for founders and finance leads.'
  },
  marketing: {
    key: 'marketing',
    label: 'Growth Marketing',
    short: 'Marketing',
    url: 'marketing.html',
    icon: 'fa-bullhorn',
    art: 'art-7',
    blurb: 'Acquisition economics: CPC, content compounding, lifecycle email and channel payback windows.'
  },
  tax: {
    key: 'tax',
    label: 'Tax & Legal',
    short: 'Tax & Legal',
    url: 'tax-and-legal.html',
    icon: 'fa-scale-balanced',
    art: 'art-4',
    blurb: 'Entity structure, deductions and compliance calendars explained without the jargon tax.'
  },
  property: {
    key: 'property',
    label: 'Real Estate & Property',
    short: 'Property',
    url: 'real-estate.html',
    icon: 'fa-building',
    art: 'art-8',
    blurb: 'Buying, borrowing against and letting property — closing costs, HELOCs, rental yield and the rent-versus-buy arithmetic.'
  },
  banking: {
    key: 'banking',
    label: 'Banking & Cash',
    short: 'Banking',
    url: 'banking-and-cash.html',
    icon: 'fa-piggy-bank',
    art: 'art-6',
    blurb: 'Where idle money belongs: high-yield accounts, CD ladders, Treasury bills and the fees quietly eroding your balance.'
  },
  career: {
    key: 'career',
    label: 'Career & Income',
    short: 'Career',
    url: 'career-and-income.html',
    icon: 'fa-briefcase',
    art: 'art-3',
    blurb: 'Compensation is negotiable and equity is complicated. Salary, RSUs, freelance rates and the runway a career change needs.'
  },
  retirement: {
    key: 'retirement',
    label: 'Retirement & Estate',
    short: 'Retirement',
    url: 'retirement-planning.html',
    icon: 'fa-umbrella-beach',
    art: 'art-5',
    blurb: 'The decumulation half of the problem — Social Security timing, Medicare, annuity math, trusts and the paperwork that decides who inherits what.'
  },
  education: {
    key: 'education',
    label: 'Education & Family',
    short: 'Family',
    url: 'education-and-family.html',
    icon: 'fa-graduation-cap',
    art: 'art-4',
    blurb: 'College funding, childcare arithmetic and the money conversations families postpone until they are expensive.'
  },
  /* ---------------------------------------------------------------------
     Expansion desks (added for the 30-day growth plan).

     Chosen for three properties at once: rising search demand, thin
     competent competition, and advertiser depth — the last being why the
     same visitor is worth several times more here than on a generic
     personal-finance page. Ordering below is roughly by that third property.
     --------------------------------------------------------------------- */
  ai: {
    key: 'ai',
    label: 'AI & Automation Economics',
    short: 'AI Costs',
    url: 'ai-and-automation-costs.html',
    icon: 'fa-microchip',
    art: 'art-3',
    blurb: 'What AI actually costs once you own it: token and GPU maths, per-seat pricing, agent ROI, and the build-versus-buy line.'
  },
  cyber: {
    key: 'cyber',
    label: 'Cyber & Digital Risk',
    short: 'Cyber Risk',
    url: 'cyber-and-digital-risk.html',
    icon: 'fa-user-shield',
    art: 'art-2',
    blurb: 'Breach cost arithmetic, cyber insurance that actually pays, fraud liability rules and the security spend that earns its budget.'
  },
  health: {
    key: 'health',
    label: 'Health & Medical Money',
    short: 'Health Money',
    url: 'health-and-medical-money.html',
    icon: 'fa-notes-medical',
    art: 'art-6',
    blurb: 'The HSA as an investment account, medical bill negotiation, cash pricing and coverage decisions priced properly.'
  },
  energy: {
    key: 'energy',
    label: 'Energy & Home Economics',
    short: 'Energy',
    url: 'energy-and-home-tech.html',
    icon: 'fa-bolt',
    art: 'art-7',
    blurb: 'Solar payback, batteries, heat pumps and EV total cost of ownership — modelled against your tariff, not a brochure.'
  },
  alternatives: {
    key: 'alternatives',
    label: 'Private Markets & Alternatives',
    short: 'Alternatives',
    url: 'private-markets-and-alternatives.html',
    icon: 'fa-vault',
    art: 'art-5',
    blurb: 'Private credit, interval funds, secondaries and real assets: fee stacks, lock-ups and what the illiquidity is really paying you.'
  },
  crypto: {
    key: 'crypto',
    label: 'Digital Assets & Tokenized Finance',
    short: 'Digital Assets',
    url: 'crypto-and-digital-assets.html',
    icon: 'fa-link',
    art: 'art-1',
    blurb: 'Stablecoin mechanics, tokenized treasuries, custody and crypto tax lots. Plumbing and risk, never price predictions.'
  },
  global: {
    key: 'global',
    label: 'Global & Expat Money',
    short: 'Global',
    url: 'global-and-expat-money.html',
    icon: 'fa-earth-americas',
    art: 'art-8',
    blurb: 'Cross-border tax, expat cover, currency spreads and multi-currency banking for people whose money crosses borders.'
  },
  freelance: {
    key: 'freelance',
    label: 'Freelance & Creator Finance',
    short: 'Freelance',
    url: 'freelance-and-creator-finance.html',
    icon: 'fa-pen-nib',
    art: 'art-4',
    blurb: 'Quarterly tax, solo retirement plans, irregular-income budgeting and the entity choice that fits a one-person business.'
  },
  tools: {
    key: 'tools',
    label: 'Calculators',
    short: 'Tools',
    url: 'tools.html',
    icon: 'fa-calculator',
    art: 'art-6',
    blurb: 'Interactive models you can run in the browser — no signup, nothing leaves your device.'
  }
};

/* ==========================================================================
   AUTHOR — one real person.

   Fiscora previously credited eight invented staff analysts. That is exactly
   the kind of misrepresentation that fails an AdSense site review and, more
   importantly, is dishonest to readers. Everything here is written and
   maintained by one person: Maher, who curates MetaX.Academy.

   Every legacy author key (ln, mr, ab, …) is aliased to the same record so
   existing `author:` fields in PAGES keep resolving without a mass rewrite,
   and no page can ever surface a fabricated byline again.
   ========================================================================== */
const MAHER = {
  id: 'maher',
  name: 'Maher',
  initials: 'M',
  role: 'Founder & Editor, Fiscora — Curator, MetaX.Academy',
  url: 'author-maher.html',
  bio: 'Maher curates MetaX.Academy, the independent educational publisher behind Fiscora. He researches, models and writes every guide here — building the calculator first and the prose second, so each conclusion rests on arithmetic a reader can edit and disagree with.',
  sameAs: ['https://metax.academy/', 'https://metax.academy/about.html']
};

const AUTHORS = {
  maher: MAHER,
  /* Legacy aliases → the single real author. */
  ln: MAHER, mr: MAHER, ab: MAHER, dk: MAHER,
  sh: MAHER, tw: MAHER, ep: MAHER, jc: MAHER
};

/* Every content page in the publication.
   type: article | hub | tool | page  */
const PAGES = [
  /* ---------------- Investing & Wealth ---------------- */
  {
    slug: 'index-funds-vs-etfs.html', type: 'article', cat: 'investing', author: 'ln',
    title: 'Index Funds vs ETFs: The Decision Framework Most Investors Get Backwards',
    dek: 'Same index, different wrapper — and the wrapper quietly decides your tax bill, your spread costs and your behaviour in a crash.',
    read: 14, updated: '2026-07-18', art: 'art-1', icon: 'fa-layer-group', pillar: true,
    tags: ['index funds', 'ETFs', 'expense ratio', 'tax efficiency', 'portfolio'],
    kw: 'index fund etf difference cost basis spread tax drag total market'
  },
  {
    slug: 'asset-allocation-by-age.html', type: 'article', cat: 'investing', author: 'ln',
    title: 'Asset Allocation by Age: Glide Paths That Survive Real Bear Markets',
    dek: 'The 100-minus-age rule was built for a world with 8% bond yields. Here is what replaces it, decade by decade.',
    read: 16, updated: '2026-07-11', art: 'art-5', icon: 'fa-scale-unbalanced', pillar: true,
    tags: ['asset allocation', 'glide path', 'bonds', 'rebalancing', 'sequence risk'],
    kw: 'asset allocation age 60 40 portfolio bonds equities rebalance sequence of returns'
  },
  {
    slug: 'dividend-income-playbook.html', type: 'article', cat: 'investing', author: 'ln',
    title: 'The Dividend Income Playbook: Engineering a $2,000 Monthly Paycheck',
    dek: 'Yield is the most seductive number in finance. Here is how to build durable income without buying the traps.',
    read: 15, updated: '2026-06-29', art: 'art-6', icon: 'fa-coins',
    tags: ['dividends', 'income investing', 'payout ratio', 'DRIP', 'yield traps'],
    kw: 'dividend income portfolio yield payout ratio aristocrats drip monthly cash flow'
  },
  {
    slug: 'retirement-401k-vs-ira.html', type: 'article', cat: 'investing', author: 'ln',
    title: '401(k) vs IRA vs HSA: The Tax-Advantaged Stacking Order',
    dek: 'Contribution order is worth six figures over a career. This is the sequence, with the edge cases that break it.',
    read: 13, updated: '2026-07-05', art: 'art-8', icon: 'fa-piggy-bank', pillar: true,
    tags: ['401k', 'Roth IRA', 'HSA', 'employer match', 'retirement'],
    kw: '401k ira hsa roth traditional match contribution limits backdoor retirement accounts order'
  },
  {
    slug: 'emergency-fund-blueprint.html', type: 'article', cat: 'investing', author: 'ln',
    title: 'The Emergency Fund Blueprint: How Much Is Actually Enough',
    dek: 'Three to six months is a slogan, not a plan. Size your buffer from your real job-loss risk and fixed-cost floor.',
    read: 11, updated: '2026-07-22', art: 'art-2', icon: 'fa-umbrella',
    tags: ['emergency fund', 'cash buffer', 'high-yield savings', 'budgeting'],
    kw: 'emergency fund how much months expenses high yield savings cash reserve'
  },

  /* ---------------- Insurance & Risk ---------------- */
  {
    slug: 'term-vs-whole-life-insurance.html', type: 'article', cat: 'insurance', author: 'mr',
    title: 'Term vs Whole Life Insurance: Running the Real 30-Year Math',
    dek: 'Permanent policies are sold on a story. We rebuilt the cash-value math line by line — including the three cases where it wins.',
    read: 15, updated: '2026-07-20', art: 'art-2', icon: 'fa-heart-pulse', pillar: true,
    tags: ['life insurance', 'term life', 'whole life', 'cash value', 'IRR'],
    kw: 'term vs whole life insurance cash value premium irr buy term invest difference'
  },
  {
    slug: 'health-insurance-deductibles.html', type: 'article', cat: 'insurance', author: 'mr',
    title: 'Deductibles, Coinsurance and Out-of-Pocket Maximums, Decoded',
    dek: 'The cheapest premium is often the most expensive plan. Model total annual cost instead — here is the worksheet.',
    read: 14, updated: '2026-07-09', art: 'art-6', icon: 'fa-notes-medical',
    tags: ['health insurance', 'HDHP', 'HSA', 'coinsurance', 'total cost'],
    kw: 'health insurance deductible coinsurance out of pocket maximum hdhp hsa plan comparison'
  },
  {
    slug: 'auto-insurance-premiums.html', type: 'article', cat: 'insurance', author: 'mr',
    title: '17 Legitimate Ways to Cut Your Auto Premium Without Losing Coverage',
    dek: 'Rate factors you can change, factors you cannot, and the annual 20-minute audit that saves the average driver $412.',
    read: 12, updated: '2026-06-26', art: 'art-7', icon: 'fa-car-side',
    tags: ['auto insurance', 'premiums', 'deductible', 'telematics', 'bundling'],
    kw: 'auto car insurance premium lower cheaper discounts telematics deductible shopping'
  },
  {
    slug: 'disability-insurance-guide.html', type: 'article', cat: 'insurance', author: 'mr',
    title: 'Disability Insurance: The Coverage High Earners Forget to Buy',
    dek: 'Your income is the asset funding every other asset. Own-occupation definitions are where policies live or die.',
    read: 13, updated: '2026-07-02', art: 'art-3', icon: 'fa-user-shield',
    tags: ['disability insurance', 'own occupation', 'elimination period', 'income protection'],
    kw: 'disability insurance long term own occupation elimination period rider income protection'
  },

  /* ---------------- Credit & Debt ---------------- */
  {
    slug: 'credit-score-blueprint.html', type: 'article', cat: 'credit', author: 'ab',
    title: 'The 90-Day Credit Score Blueprint: What Actually Moves the Needle',
    dek: 'Utilisation timing, statement dates and dispute leverage — ranked by measured point impact, not folklore.',
    read: 14, updated: '2026-07-24', art: 'art-5', icon: 'fa-gauge-high', pillar: true,
    tags: ['credit score', 'utilisation', 'FICO', 'disputes', 'credit mix'],
    kw: 'credit score improve fast fico utilization statement date dispute report 90 days'
  },
  {
    slug: 'mortgage-refinance-guide.html', type: 'article', cat: 'credit', author: 'ab',
    title: 'Should You Refinance? The Break-Even Decision Tree',
    dek: 'Rate delta is the headline. Closing costs, loan reset and how long you will actually stay decide the answer.',
    read: 15, updated: '2026-07-16', art: 'art-8', icon: 'fa-house-chimney-window', pillar: true,
    tags: ['mortgage', 'refinance', 'break-even', 'closing costs', 'APR'],
    kw: 'mortgage refinance break even closing costs rate cash out points apr worth it'
  },
  {
    slug: 'student-loan-strategies.html', type: 'article', cat: 'credit', author: 'ab',
    title: 'Student Loan Repayment Strategies Ranked by Lifetime Cost',
    dek: 'Refinance, income-driven, or aggressive payoff? The right answer depends on four variables — not on your loan balance.',
    read: 14, updated: '2026-06-30', art: 'art-1', icon: 'fa-graduation-cap',
    tags: ['student loans', 'refinancing', 'income-driven', 'forgiveness', 'interest'],
    kw: 'student loan repayment refinance income driven forgiveness lifetime interest strategy'
  },
  {
    slug: 'debt-payoff-methods.html', type: 'article', cat: 'credit', author: 'ab',
    title: 'Avalanche vs Snowball vs Hybrid: Which Payoff Method Actually Finishes',
    dek: 'Avalanche wins on a spreadsheet. Completion rate is the metric that pays your debt off — here is how to get both.',
    read: 12, updated: '2026-07-13', art: 'art-7', icon: 'fa-arrow-trend-down',
    tags: ['debt payoff', 'avalanche', 'snowball', 'interest', 'behaviour'],
    kw: 'debt avalanche snowball hybrid payoff method interest savings motivation'
  },

  /* ---------------- Business & SaaS ---------------- */
  {
    slug: 'saas-pricing-strategy.html', type: 'article', cat: 'business', author: 'dk',
    title: 'SaaS Pricing Strategy: From Cost-Plus Guessing to Value Metrics',
    dek: 'Pricing is the highest-leverage growth lever nobody staffs. A 5-step process to find your value metric and repackage.',
    read: 16, updated: '2026-07-21', art: 'art-3', icon: 'fa-tags', pillar: true,
    tags: ['SaaS', 'pricing', 'value metric', 'expansion revenue', 'packaging'],
    kw: 'saas pricing strategy value metric packaging tiers expansion revenue willingness to pay'
  },
  {
    slug: 'cloud-cost-optimization.html', type: 'article', cat: 'business', author: 'dk',
    title: 'Cloud Cost Optimisation: Cutting 40% Without Slowing the Roadmap',
    dek: 'Most cloud waste is architectural, not accidental. The seven-layer audit that finds it in a week.',
    read: 15, updated: '2026-07-07', art: 'art-6', icon: 'fa-server',
    tags: ['cloud', 'FinOps', 'unit economics', 'reserved instances', 'egress'],
    kw: 'cloud cost optimization finops aws savings plans rightsizing egress kubernetes waste'
  },

  /* ---------------- Growth Marketing ---------------- */
  {
    slug: 'seo-content-engine.html', type: 'article', cat: 'marketing', author: 'dk',
    title: 'Building a Content Engine That Compounds Instead of Decaying',
    dek: 'Publishing volume is not a strategy. Topical depth, refresh cadence and internal link equity are.',
    read: 16, updated: '2026-07-25', art: 'art-7', icon: 'fa-diagram-project', pillar: true,
    tags: ['SEO', 'content strategy', 'topical authority', 'internal links', 'refresh'],
    kw: 'seo content strategy engine topical authority clusters internal linking refresh decay'
  },
  {
    slug: 'google-ads-cpc-guide.html', type: 'article', cat: 'marketing', author: 'dk',
    title: 'Why Your CPC Keeps Rising — and the Quality Score Fix That Works',
    dek: 'Auction inflation is real, but 60% of CPC pain is self-inflicted. Diagnose it with five reports.',
    read: 14, updated: '2026-07-14', art: 'art-4', icon: 'fa-bullseye',
    tags: ['Google Ads', 'CPC', 'quality score', 'match types', 'ROAS'],
    kw: 'google ads cpc rising quality score bidding match types negative keywords roas'
  },
  {
    slug: 'email-automation-revenue.html', type: 'article', cat: 'marketing', author: 'dk',
    title: 'Email Automation: The 9 Lifecycle Flows That Print Revenue',
    dek: 'Broadcasts are rented attention. Flows are an owned annuity — build them in this order.',
    read: 13, updated: '2026-06-28', art: 'art-1', icon: 'fa-envelope-open-text',
    tags: ['email marketing', 'automation', 'lifecycle', 'segmentation', 'LTV'],
    kw: 'email automation flows welcome abandoned cart winback lifecycle revenue segmentation'
  },

  /* ---------------- Tax & Legal ---------------- */
  {
    slug: 'llc-vs-s-corp.html', type: 'article', cat: 'tax', author: 'ab',
    title: 'LLC vs S-Corp vs C-Corp: Entity Choice and the Tax Bill It Sets',
    dek: 'Liability protection is table stakes. Your election decides self-employment tax, payroll burden and exit options.',
    read: 14, updated: '2026-07-19', art: 'art-4', icon: 'fa-building-columns', pillar: true,
    tags: ['LLC', 'S-Corp', 'entity choice', 'self-employment tax', 'payroll'],
    kw: 'llc s corp c corp entity choice self employment tax election reasonable salary'
  },
  {
    slug: 'small-business-tax-deductions.html', type: 'article', cat: 'tax', author: 'ab',
    title: '34 Small-Business Deductions Owners Routinely Leave on the Table',
    dek: 'Every legitimate deduction is a discount on your effective tax rate. Documentation is what makes it survive an audit.',
    read: 15, updated: '2026-07-03', art: 'art-6', icon: 'fa-receipt',
    tags: ['deductions', 'small business', 'home office', 'depreciation', 'audit'],
    kw: 'small business tax deductions home office mileage depreciation section 179 audit proof'
  },

  /* ---------------- Investing: expansion ---------------- */
  {
    slug: 'tax-loss-harvesting-guide.html', type: 'article', cat: 'investing', author: 'ln',
    title: 'Tax-Loss Harvesting: Turning a Down Market Into a Deduction',
    dek: 'A loss you realise deliberately is worth real money. A loss you realise carelessly triggers a wash sale and buys you nothing.',
    read: 14, updated: '2026-07-22', art: 'art-5', icon: 'fa-scissors',
    tags: ['tax-loss harvesting', 'wash sale', 'capital gains', 'tax efficiency', 'rebalancing'],
    kw: 'tax loss harvesting wash sale rule capital gains offset carryforward substantially identical'
  },
  {
    slug: 'reit-investing-guide.html', type: 'article', cat: 'investing', author: 'ln',
    title: 'REITs: Property Income Without the Tenants',
    dek: 'Real estate exposure in a brokerage account — with a distribution structure and a tax treatment that surprises new holders.',
    read: 15, updated: '2026-07-16', art: 'art-8', icon: 'fa-city',
    tags: ['REITs', 'income investing', 'dividends', 'real estate', 'diversification'],
    kw: 'reit investing guide equity mortgage reit ffo payout tax treatment dividend income property'
  },
  {
    slug: 'bond-ladder-strategy.html', type: 'article', cat: 'investing', author: 'ln',
    title: 'Bond Ladders: Predictable Income Without Predicting Rates',
    dek: 'A ladder removes the need to forecast. Each rung matures, you reinvest at whatever rates exist, and duration risk stops mattering.',
    read: 13, updated: '2026-07-09', art: 'art-4', icon: 'fa-stairs',
    tags: ['bonds', 'bond ladder', 'duration', 'interest rates', 'fixed income'],
    kw: 'bond ladder strategy rungs duration risk reinvestment treasury corporate municipal income'
  },
  {
    slug: 'hsa-triple-tax-advantage.html', type: 'article', cat: 'investing', author: 'ln',
    title: 'The HSA Is the Best Retirement Account Almost Nobody Maximises',
    dek: 'Deductible in, tax-free growth, tax-free out for medical costs. No other account offers all three — and most holders treat it as a chequing account.',
    read: 14, updated: '2026-07-05', art: 'art-2', icon: 'fa-notes-medical', pillar: true,
    tags: ['HSA', 'tax advantage', 'retirement', 'healthcare', 'investing'],
    kw: 'hsa triple tax advantage health savings account invest receipts reimburse retirement medical'
  },

  /* ---------------- Insurance: expansion ---------------- */
  {
    slug: 'umbrella-insurance-guide.html', type: 'article', cat: 'insurance', author: 'mr',
    title: 'Umbrella Insurance: The Cheapest Million You Will Ever Buy',
    dek: 'Your auto and home liability limits stop well short of a serious judgment. Umbrella cover starts where they end, for pennies per thousand.',
    read: 12, updated: '2026-07-20', art: 'art-2', icon: 'fa-umbrella',
    tags: ['umbrella insurance', 'liability', 'asset protection', 'lawsuits'],
    kw: 'umbrella insurance policy liability limits excess coverage asset protection judgment lawsuit'
  },
  {
    slug: 'long-term-care-insurance.html', type: 'article', cat: 'insurance', author: 'mr',
    title: 'Long-Term Care: The Cost Retirement Plans Forget',
    dek: 'A multi-year care event is the largest uninsured risk most retirees carry. Insurance, hybrid policies and self-funding, compared honestly.',
    read: 16, updated: '2026-07-13', art: 'art-5', icon: 'fa-hand-holding-heart',
    tags: ['long-term care', 'insurance', 'retirement', 'elder care', 'hybrid policies'],
    kw: 'long term care insurance cost nursing home hybrid policy elimination period benefit period'
  },
  {
    slug: 'annuities-explained.html', type: 'article', cat: 'insurance', author: 'mr',
    title: 'Annuities, Decoded: Which Three Are Worth Considering',
    dek: 'Most annuities are opaque, expensive and sold rather than bought. Three types solve real problems — the rest solve a commission problem.',
    read: 17, updated: '2026-07-01', art: 'art-6', icon: 'fa-file-invoice-dollar',
    tags: ['annuities', 'longevity risk', 'retirement income', 'surrender charges'],
    kw: 'annuities explained immediate deferred income variable indexed surrender charge longevity risk'
  },

  /* ---------------- Credit & Debt: expansion ---------------- */
  {
    slug: 'debt-consolidation-loans.html', type: 'article', cat: 'credit', author: 'ab',
    title: 'Debt Consolidation: When It Helps and When It Just Feels Like Progress',
    dek: 'Moving debt is not repaying debt. Consolidation works only when the rate falls and the old accounts stay closed.',
    read: 13, updated: '2026-07-17', art: 'art-7', icon: 'fa-compress',
    tags: ['debt consolidation', 'personal loans', 'balance transfer', 'APR'],
    kw: 'debt consolidation loan balance transfer personal loan apr origination fee credit score impact'
  },
  {
    slug: 'credit-card-rewards-math.html', type: 'article', cat: 'credit', author: 'tw',
    title: 'Credit Card Rewards: The Arithmetic Behind the Annual Fee',
    dek: 'A 2% card with no fee beats a 3% card with a $550 fee until you spend a very specific amount. Here is that amount.',
    read: 13, updated: '2026-07-08', art: 'art-1', icon: 'fa-percent',
    tags: ['credit cards', 'rewards', 'annual fee', 'cashback', 'points valuation'],
    kw: 'credit card rewards math annual fee breakeven cashback points valuation transfer partners'
  },
  {
    slug: 'business-credit-building.html', type: 'article', cat: 'credit', author: 'ab',
    title: 'Building Business Credit Separately From Your Own',
    dek: 'A business credit file takes eighteen months to build and protects your personal score from your company\'s worst quarter.',
    read: 14, updated: '2026-06-30', art: 'art-3', icon: 'fa-building-shield',
    tags: ['business credit', 'trade lines', 'personal guarantee', 'financing'],
    kw: 'business credit building duns trade lines personal guarantee ein separate file vendor accounts'
  },

  /* ---------------- Real Estate & Property ---------------- */
  {
    slug: 'rent-vs-buy-analysis.html', type: 'article', cat: 'property', author: 'sh',
    title: 'Rent vs Buy: The Only Calculation That Actually Settles It',
    dek: 'Comparing rent to a mortgage payment is the wrong comparison. Compare unrecoverable costs — and the answer flips more often than you expect.',
    read: 17, updated: '2026-07-25', art: 'art-8', icon: 'fa-scale-balanced', pillar: true,
    tags: ['rent vs buy', 'unrecoverable costs', 'housing', 'opportunity cost'],
    kw: 'rent vs buy calculator unrecoverable cost breakeven 5 percent rule opportunity cost transaction'
  },
  {
    slug: 'closing-costs-breakdown.html', type: 'article', cat: 'property', author: 'sh',
    title: 'Closing Costs: Every Line Item, and Which Ones Are Negotiable',
    dek: 'Two to five percent of the purchase price, spread across twenty line items. Roughly a third of them can be reduced or removed.',
    read: 14, updated: '2026-07-21', art: 'art-4', icon: 'fa-file-signature',
    tags: ['closing costs', 'home buying', 'title insurance', 'escrow', 'negotiation'],
    kw: 'closing costs breakdown origination fee title insurance escrow prepaid negotiable seller credit'
  },
  {
    slug: 'heloc-vs-cash-out-refinance.html', type: 'article', cat: 'property', author: 'sh',
    title: 'HELOC vs Cash-Out Refinance vs Home Equity Loan',
    dek: 'Three ways to borrow against the same equity, with completely different rate structures, risks and reasons to exist.',
    read: 15, updated: '2026-07-14', art: 'art-5', icon: 'fa-house-lock',
    tags: ['HELOC', 'cash-out refinance', 'home equity', 'variable rate'],
    kw: 'heloc vs cash out refinance home equity loan draw period variable rate closing costs risk'
  },
  {
    slug: 'rental-property-cash-flow.html', type: 'article', cat: 'property', author: 'sh',
    title: 'Rental Property Cash Flow: The Numbers Landlords Get Wrong',
    dek: 'Rent minus mortgage is not cash flow. Vacancy, capex reserves and management are the difference between a yield and a hobby.',
    read: 16, updated: '2026-07-11', art: 'art-3', icon: 'fa-key', pillar: true,
    tags: ['rental property', 'cash flow', 'cap rate', 'vacancy', 'capex'],
    kw: 'rental property cash flow cap rate vacancy capex reserve one percent rule dscr net operating income'
  },
  {
    slug: 'first-time-buyer-programs.html', type: 'article', cat: 'property', author: 'sh',
    title: 'First-Time Buyer Programmes: Real Help vs Expensive Help',
    dek: 'Low down payment options exist, and several are genuinely good. Others simply move the cost somewhere less visible.',
    read: 14, updated: '2026-07-04', art: 'art-1', icon: 'fa-door-open',
    tags: ['first-time buyer', 'down payment', 'FHA', 'mortgage insurance', 'grants'],
    kw: 'first time home buyer programs down payment assistance fha low down payment mortgage insurance'
  },
  {
    slug: 'property-tax-appeal.html', type: 'article', cat: 'property', author: 'sh',
    title: 'How to Appeal a Property Tax Assessment and Win',
    dek: 'Assessments are estimates, and estimates contain errors. A successful appeal reduces every future year, not just this one.',
    read: 12, updated: '2026-06-27', art: 'art-6', icon: 'fa-gavel',
    tags: ['property tax', 'assessment appeal', 'comparables', 'homeowner costs'],
    kw: 'property tax appeal assessment comparables evidence hearing reduce assessed value homeowner'
  },

  /* ---------------- Banking & Cash ---------------- */
  {
    slug: 'high-yield-savings-guide.html', type: 'article', cat: 'banking', author: 'tw',
    title: 'High-Yield Savings: Where Idle Cash Should Actually Sit',
    dek: 'The gap between a legacy savings account and a competitive one is several percentage points of pure, risk-free income.',
    read: 12, updated: '2026-07-24', art: 'art-6', icon: 'fa-piggy-bank', pillar: true,
    tags: ['high-yield savings', 'APY', 'deposit insurance', 'liquidity'],
    kw: 'high yield savings account apy teaser rate deposit insurance fdic liquidity emergency fund cash'
  },
  {
    slug: 'cd-ladder-strategy.html', type: 'article', cat: 'banking', author: 'tw',
    title: 'CD Ladders: Locking Rates Without Locking Up Your Money',
    dek: 'A ladder gives you long-term rates with short-term access. It is the simplest fix for cash you need soon but not immediately.',
    read: 12, updated: '2026-07-18', art: 'art-4', icon: 'fa-layer-group',
    tags: ['CDs', 'ladder', 'interest rates', 'early withdrawal penalty'],
    kw: 'cd ladder strategy certificate of deposit rungs early withdrawal penalty rate lock reinvest'
  },
  {
    slug: 'treasury-bills-guide.html', type: 'article', cat: 'banking', author: 'tw',
    title: 'Treasury Bills for Ordinary Savers',
    dek: 'Government-backed, often better yielding than a savings account, and in many places exempt from state tax. The friction is smaller than the reputation.',
    read: 14, updated: '2026-07-12', art: 'art-5', icon: 'fa-landmark',
    tags: ['Treasury bills', 'yield', 'state tax', 'cash management'],
    kw: 'treasury bills guide t bill yield auction discount state tax exempt money market comparison'
  },
  {
    slug: 'bank-fees-audit.html', type: 'article', cat: 'banking', author: 'tw',
    title: 'The 30-Minute Bank Fee Audit',
    dek: 'Maintenance charges, overdraft cascades, wire markups and foreign transaction spreads. Most are refundable, avoidable, or both.',
    read: 11, updated: '2026-07-02', art: 'art-7', icon: 'fa-magnifying-glass-dollar',
    tags: ['bank fees', 'overdraft', 'foreign transaction', 'negotiation'],
    kw: 'bank fees audit overdraft maintenance fee wire transfer foreign transaction refund waive'
  },
  {
    slug: 'business-banking-setup.html', type: 'article', cat: 'banking', author: 'tw',
    title: 'Business Banking: The Account Structure That Prevents Cash Chaos',
    dek: 'One account is a liability. Four accounts with defined jobs turn cash management into a routine rather than a monthly panic.',
    read: 13, updated: '2026-06-25', art: 'art-3', icon: 'fa-vault',
    tags: ['business banking', 'cash management', 'profit first', 'tax reserve'],
    kw: 'business banking setup separate accounts tax reserve operating payroll profit first commingling'
  },

  /* ---------------- Career & Income ---------------- */
  {
    slug: 'salary-negotiation-playbook.html', type: 'article', cat: 'career', author: 'tw',
    title: 'Salary Negotiation: The Playbook That Survives a Hiring Freeze',
    dek: 'A single successful negotiation compounds across every future raise, bonus and pension contribution. The upside is measured in decades.',
    read: 16, updated: '2026-07-23', art: 'art-3', icon: 'fa-handshake', pillar: true,
    tags: ['salary negotiation', 'compensation', 'offers', 'total comp'],
    kw: 'salary negotiation playbook counter offer anchoring total compensation band leverage script'
  },
  {
    slug: 'rsu-vs-options-compensation.html', type: 'article', cat: 'career', author: 'tw',
    title: 'RSUs vs Stock Options: What Your Equity Is Actually Worth',
    dek: 'RSUs are compensation with a share price attached. Options are a leveraged bet with a tax trap in the middle.',
    read: 17, updated: '2026-07-19', art: 'art-1', icon: 'fa-chart-simple',
    tags: ['RSUs', 'stock options', 'vesting', 'AMT', 'equity compensation'],
    kw: 'rsu vs stock options iso nso vesting cliff strike price amt 83b concentration risk equity'
  },
  {
    slug: 'freelance-rate-guide.html', type: 'article', cat: 'career', author: 'dk',
    title: 'Setting a Freelance Rate That Does Not Quietly Bankrupt You',
    dek: 'Your old salary divided by 2,080 is not your rate. Utilisation, unpaid time, tax and benefits mean the real multiple is closer to 2×.',
    read: 15, updated: '2026-07-10', art: 'art-7', icon: 'fa-stopwatch',
    tags: ['freelance', 'hourly rate', 'utilisation', 'self-employment'],
    kw: 'freelance rate calculator hourly day rate utilisation billable hours overhead tax benefits markup'
  },
  {
    slug: 'career-change-runway.html', type: 'article', cat: 'career', author: 'tw',
    title: 'How Much Runway a Career Change Actually Needs',
    dek: 'Most transitions fail on cash timing, not ambition. Model the gap before you resign, including the six months nobody budgets for.',
    read: 14, updated: '2026-07-06', art: 'art-5', icon: 'fa-road',
    tags: ['career change', 'runway', 'emergency fund', 'income gap'],
    kw: 'career change runway savings needed income gap retraining cost job search duration transition'
  },
  {
    slug: 'severance-package-negotiation.html', type: 'article', cat: 'career', author: 'tw',
    title: 'Severance: What Is Negotiable and What the Clock Does to You',
    dek: 'Severance offers are opening positions with deadlines attached. Six items are commonly negotiable and most people accept none of them.',
    read: 14, updated: '2026-06-24', art: 'art-2', icon: 'fa-file-shield',
    tags: ['severance', 'layoff', 'negotiation', 'COBRA', 'non-compete'],
    kw: 'severance package negotiation layoff release agreement continuation health cover equity vesting'
  },

  /* ---------------- Business: expansion ---------------- */
  {
    slug: 'cac-ltv-unit-economics.html', type: 'article', cat: 'business', author: 'dk',
    title: 'CAC, LTV and the Payback Window That Decides Whether You Can Grow',
    dek: 'An LTV:CAC ratio without a payback period is a story. The payback period is what determines whether growth is fundable.',
    read: 16, updated: '2026-07-15', art: 'art-3', icon: 'fa-arrows-left-right-to-line',
    tags: ['CAC', 'LTV', 'payback period', 'unit economics', 'churn'],
    kw: 'cac ltv ratio payback period unit economics contribution margin churn cohort gross margin saas'
  },
  {
    slug: 'cash-flow-forecasting.html', type: 'article', cat: 'business', author: 'ab',
    title: '13-Week Cash Flow Forecasting for Businesses That Cannot Afford Surprises',
    dek: 'Profitable businesses fail on timing. A rolling thirteen-week view is the smallest tool that reliably prevents it.',
    read: 15, updated: '2026-07-07', art: 'art-6', icon: 'fa-calendar-week',
    tags: ['cash flow', 'forecasting', 'working capital', 'runway'],
    kw: 'cash flow forecasting 13 week rolling model receivables payables runway working capital timing'
  },

  /* ---------------- Marketing: expansion ---------------- */
  {
    slug: 'affiliate-marketing-economics.html', type: 'article', cat: 'marketing', author: 'dk',
    title: 'Affiliate and Partner Economics: Paying for Performance Without Paying Twice',
    dek: 'Attribution decides profitability. Pay a commission on a sale you would have made anyway and the channel is a discount programme.',
    read: 14, updated: '2026-07-02', art: 'art-7', icon: 'fa-handshake-angle',
    tags: ['affiliate marketing', 'attribution', 'incrementality', 'commission'],
    kw: 'affiliate marketing economics commission attribution incrementality last click coupon partner'
  },
  {
    slug: 'conversion-rate-optimization.html', type: 'article', cat: 'marketing', author: 'dk',
    title: 'Conversion Rate Optimisation: Where the Real Gains Actually Hide',
    dek: 'Button colour tests are theatre. Form friction, page speed and price clarity are where measurable percentage points live.',
    read: 15, updated: '2026-06-26', art: 'art-4', icon: 'fa-filter-circle-dollar',
    tags: ['CRO', 'A/B testing', 'funnel', 'form friction', 'page speed'],
    kw: 'conversion rate optimization cro ab test sample size funnel friction page speed checkout forms'
  },

  /* ---------------- Tax: expansion ---------------- */
  {
    slug: 'quarterly-estimated-taxes.html', type: 'article', cat: 'tax', author: 'ab',
    title: 'Quarterly Estimated Taxes Without the Penalty',
    dek: 'Two safe-harbour rules make underpayment penalties almost entirely avoidable. Most self-employed people know neither.',
    read: 13, updated: '2026-07-22', art: 'art-4', icon: 'fa-calendar-check',
    tags: ['estimated taxes', 'safe harbour', 'self-employment', 'penalties'],
    kw: 'quarterly estimated taxes safe harbor 110 percent prior year underpayment penalty due dates'
  },
  {
    slug: 'tax-efficient-withdrawal-order.html', type: 'article', cat: 'tax', author: 'ln',
    title: 'Retirement Withdrawal Order: The Sequence That Adds Years to a Portfolio',
    dek: 'Which account you draw from first can extend a portfolio by several years without changing a single investment.',
    read: 16, updated: '2026-07-13', art: 'art-5', icon: 'fa-arrow-down-up-across-line', pillar: true,
    tags: ['withdrawal order', 'Roth conversion', 'tax brackets', 'retirement'],
    kw: 'tax efficient withdrawal order taxable traditional roth bracket filling conversion rmd sequence'
  },
  {
    slug: 'sales-tax-nexus-guide.html', type: 'article', cat: 'tax', author: 'ab',
    title: 'Sales Tax Nexus: The Compliance Trap for Online Sellers',
    dek: 'You can create a filing obligation in a state you have never visited. Thresholds are low and back-liability compounds quietly.',
    read: 14, updated: '2026-06-29', art: 'art-8', icon: 'fa-globe',
    tags: ['sales tax', 'nexus', 'ecommerce', 'compliance', 'marketplace facilitator'],
    kw: 'sales tax nexus economic threshold online seller marketplace facilitator registration voluntary'
  },

  /* ---------------- Retirement & Estate ---------------- */
  {
    slug: 'social-security-timing.html', type: 'article', cat: 'retirement', author: 'ep',
    title: 'Social Security Timing: The Eight-Year Decision Worth Six Figures',
    dek: 'Claiming at 62 versus 70 changes your cheque by 77%. The break-even math is simple; the survivor math is what people miss.',
    read: 16, updated: '2026-08-04', art: 'art-5', icon: 'fa-calendar-check', pillar: true,
    tags: ['social security', 'claiming age', 'break-even', 'survivor benefit', 'retirement'],
    kw: 'social security claiming age 62 67 70 break even survivor benefit spousal delayed credits'
  },
  {
    slug: 'medicare-enrollment-guide.html', type: 'article', cat: 'retirement', author: 'ep',
    title: 'Medicare Enrollment: The Penalties That Never Expire',
    dek: 'Miss your initial window and Part B costs 10% more per year — permanently. Parts A through D, plus the IRMAA surcharge nobody budgets for.',
    read: 15, updated: '2026-08-04', art: 'art-2', icon: 'fa-notes-medical',
    tags: ['medicare', 'IRMAA', 'Part B', 'Medigap', 'enrollment'],
    kw: 'medicare part a b c d enrollment penalty irmaa medigap advantage supplement open enrollment'
  },
  {
    slug: 'estate-planning-essentials.html', type: 'article', cat: 'retirement', author: 'ep',
    title: 'Estate Planning Essentials: Five Documents and One Spreadsheet',
    dek: 'Most estate failures are administrative, not legal. Beneficiary forms override your will — and almost nobody checks them.',
    read: 17, updated: '2026-08-03', art: 'art-8', icon: 'fa-file-signature', pillar: true,
    tags: ['estate planning', 'will', 'trust', 'beneficiary', 'probate'],
    kw: 'estate planning will living trust power of attorney healthcare directive beneficiary designation probate'
  },
  {
    slug: 'roth-conversion-ladder.html', type: 'article', cat: 'retirement', author: 'ln',
    title: 'The Roth Conversion Ladder: Filling Brackets Before RMDs Fill Them For You',
    dek: 'The gap years between retiring and claiming Social Security are the cheapest tax window you will ever get. Here is how to use them.',
    read: 16, updated: '2026-08-03', art: 'art-1', icon: 'fa-stairs',
    tags: ['Roth conversion', 'RMD', 'tax brackets', 'IRMAA', 'early retirement'],
    kw: 'roth conversion ladder rmd bracket filling gap years early retirement five year rule irmaa'
  },
  {
    slug: 'sequence-of-returns-risk.html', type: 'article', cat: 'retirement', author: 'ln',
    title: 'Sequence of Returns Risk: Why Average Returns Lie',
    dek: 'Two retirees with identical average returns can end up bankrupt and wealthy. Order of returns, not average, decides which.',
    read: 15, updated: '2026-08-02', art: 'art-7', icon: 'fa-wave-square',
    tags: ['sequence risk', 'withdrawal rate', 'bond tent', 'guardrails', 'drawdown'],
    kw: 'sequence of returns risk retirement drawdown bond tent guardrails cash buffer safe withdrawal'
  },
  {
    slug: 'pension-lump-sum-decision.html', type: 'article', cat: 'retirement', author: 'ep',
    title: 'Pension Lump Sum vs Monthly Annuity: Running the Discount Rate',
    dek: 'The offer is a bet on interest rates, your longevity and your discipline. Two of those you can actually estimate.',
    read: 14, updated: '2026-08-02', art: 'art-6', icon: 'fa-scale-balanced',
    tags: ['pension', 'lump sum', 'annuity', 'discount rate', 'PBGC'],
    kw: 'pension lump sum vs annuity discount rate longevity pbgc guarantee joint survivor election'
  },
  {
    slug: 'inherited-ira-rules.html', type: 'article', cat: 'retirement', author: 'ep',
    title: 'Inherited IRA Rules: The Ten-Year Clock and How to Beat It',
    dek: 'The stretch IRA is gone. Getting the distribution schedule wrong triggers a 25% penalty on money you already own.',
    read: 13, updated: '2026-08-01', art: 'art-3', icon: 'fa-hourglass-end',
    tags: ['inherited IRA', 'ten-year rule', 'RMD', 'beneficiary', 'SECURE Act'],
    kw: 'inherited ira ten year rule secure act rmd eligible designated beneficiary spouse penalty'
  },

  /* ---------------- Education & Family ---------------- */
  {
    slug: '529-plan-strategy.html', type: 'article', cat: 'education', author: 'jc',
    title: '529 Plans: Tax-Free Growth With Three Expensive Traps',
    dek: 'State deductions, financial-aid treatment and the new Roth rollover — plus what happens when your child skips college.',
    read: 15, updated: '2026-08-04', art: 'art-4', icon: 'fa-piggy-bank', pillar: true,
    tags: ['529 plan', 'college savings', 'financial aid', 'Roth rollover', 'state deduction'],
    kw: '529 plan college savings tax free state deduction financial aid impact roth rollover superfunding'
  },
  {
    slug: 'fafsa-and-aid-optimization.html', type: 'article', cat: 'education', author: 'jc',
    title: 'FAFSA Optimisation: How Asset Placement Changes Your Aid Package',
    dek: 'The formula weights parent assets at 5.64% and student assets at 20%. Where money sits in the base year matters enormously.',
    read: 14, updated: '2026-08-03', art: 'art-1', icon: 'fa-file-invoice',
    tags: ['FAFSA', 'financial aid', 'SAI', 'base year', 'CSS Profile'],
    kw: 'fafsa student aid index sai base year asset placement css profile expected family contribution'
  },
  {
    slug: 'student-loan-repayment-plans.html', type: 'article', cat: 'education', author: 'jc',
    title: 'Income-Driven Repayment: Choosing Between Five Plans Without Guessing',
    dek: 'Forgiveness is taxable on some plans and not others. The wrong enrollment costs more than the wrong interest rate.',
    read: 16, updated: '2026-08-02', art: 'art-7', icon: 'fa-graduation-cap',
    tags: ['student loans', 'IDR', 'PSLF', 'forgiveness', 'repayment'],
    kw: 'income driven repayment idr save paye ibr pslf forgiveness taxable recertification'
  },
  {
    slug: 'cost-of-raising-a-child.html', type: 'article', cat: 'education', author: 'jc',
    title: 'The Real Cost of Raising a Child: A Line-Item Budget',
    dek: 'The headline number is useless. Childcare, housing and healthcare dominate, and they front-load into the first six years.',
    read: 14, updated: '2026-08-01', art: 'art-6', icon: 'fa-baby',
    tags: ['childcare', 'family budget', 'dependent care', 'child tax credit', 'planning'],
    kw: 'cost of raising a child childcare budget dependent care fsa child tax credit family expenses'
  },
  {
    slug: 'custodial-accounts-vs-529.html', type: 'article', cat: 'education', author: 'jc',
    title: 'UTMA vs 529 vs Roth: Where Money for a Child Should Actually Sit',
    dek: 'Control, taxation and aid treatment differ sharply. An UTMA becomes your child\u2019s property at 18 — irrevocably.',
    read: 13, updated: '2026-07-31', art: 'art-8', icon: 'fa-child',
    tags: ['UTMA', 'UGMA', 'custodial account', 'kiddie tax', '529'],
    kw: 'utma ugma custodial account vs 529 roth ira for kids kiddie tax control age of majority'
  },

  /* ---------------- Additional investing & banking depth ---------------- */
  {
    slug: 'dollar-cost-averaging-vs-lump-sum.html', type: 'article', cat: 'investing', author: 'ln',
    title: 'Lump Sum vs Dollar-Cost Averaging: What the Data Actually Says',
    dek: 'Investing all at once wins about two-thirds of the time. Averaging in wins the argument with your own nervous system.',
    read: 13, updated: '2026-08-04', art: 'art-1', icon: 'fa-arrow-trend-up',
    tags: ['dollar-cost averaging', 'lump sum', 'behaviour', 'regret', 'timing'],
    kw: 'lump sum vs dollar cost averaging dca windfall investing timing regret minimisation'
  },
  {
    slug: 'international-diversification.html', type: 'article', cat: 'investing', author: 'ln',
    title: 'International Diversification: Home Bias Is a Position, Not a Default',
    dek: 'Holding only domestic equities is an active bet on one country. Currency, valuation and correlation all argue against it.',
    read: 15, updated: '2026-08-02', art: 'art-5', icon: 'fa-globe',
    tags: ['international', 'home bias', 'currency', 'emerging markets', 'correlation'],
    kw: 'international diversification home bias ex-us developed emerging markets currency hedging correlation'
  },
  {
    slug: 'inflation-protected-securities.html', type: 'article', cat: 'investing', author: 'tw',
    title: 'TIPS and I Bonds: Buying Inflation Protection Without Overpaying',
    dek: 'Real yields, breakeven rates and the tax quirk that makes TIPS a poor fit for taxable accounts.',
    read: 14, updated: '2026-08-01', art: 'art-6', icon: 'fa-shield-halved',
    tags: ['TIPS', 'I bonds', 'real yield', 'breakeven inflation', 'phantom income'],
    kw: 'tips i bonds inflation protected securities real yield breakeven phantom income treasury direct'
  },
  {
    slug: 'money-market-funds-explained.html', type: 'article', cat: 'banking', author: 'tw',
    title: 'Money Market Funds: Where Cash Goes When Savings Rates Lag',
    dek: 'Government, prime and municipal funds behave differently under stress. Yield, gates and the sweep default matter.',
    read: 13, updated: '2026-08-03', art: 'art-6', icon: 'fa-sack-dollar',
    tags: ['money market', 'sweep', 'SEC yield', 'liquidity', 'cash management'],
    kw: 'money market fund government prime municipal sec yield sweep account gates liquidity fees'
  },
  {
    slug: 'fdic-insurance-limits.html', type: 'article', cat: 'banking', author: 'tw',
    title: 'FDIC Coverage: How to Insure More Than $250,000 at One Bank',
    dek: 'Ownership categories multiply your coverage legally. Most depositors leave hundreds of thousands uninsured by accident.',
    read: 12, updated: '2026-08-01', art: 'art-2', icon: 'fa-building-columns',
    tags: ['FDIC', 'NCUA', 'deposit insurance', 'ownership category', 'IntraFi'],
    kw: 'fdic insurance limit 250000 ownership categories joint revocable trust ncua intrafi cdars sweep'
  },
  {
    slug: 'fraud-and-identity-protection.html', type: 'article', cat: 'banking', author: 'ab',
    title: 'Account Takeover and Identity Fraud: The Defensive Setup',
    dek: 'Credit freezes are free and permanent. SIM-swap protection and payment liability rules are where most people are exposed.',
    read: 14, updated: '2026-07-30', art: 'art-7', icon: 'fa-user-shield',
    tags: ['identity theft', 'credit freeze', 'SIM swap', 'Reg E', 'fraud liability'],
    kw: 'identity theft credit freeze sim swap zelle fraud liability reg e unauthorised transaction dispute'
  },
  {
    slug: 'small-business-payroll-setup.html', type: 'article', cat: 'business', author: 'ab',
    title: 'Payroll for the First Employee: Registrations, Taxes and Real Costs',
    dek: 'An employee costs 1.25 to 1.4 times their salary. Here is the full stack of registrations before their first payday.',
    read: 15, updated: '2026-08-02', art: 'art-3', icon: 'fa-users-gear',
    tags: ['payroll', 'employer taxes', 'workers comp', 'W-2', 'compliance'],
    kw: 'payroll first employee ein state withholding unemployment insurance workers compensation w2 1099 burden rate'
  },
  {
    slug: 'freelance-contract-essentials.html', type: 'article', cat: 'career', author: 'tw',
    title: 'Freelance Contracts: The Seven Clauses That Decide Whether You Get Paid',
    dek: 'Scope, kill fees, IP assignment and late-payment interest. The clauses clients quietly delete are the ones protecting you.',
    read: 14, updated: '2026-07-31', art: 'art-4', icon: 'fa-file-contract',
    tags: ['contracts', 'freelance', 'scope creep', 'IP assignment', 'kill fee'],
    kw: 'freelance contract clauses scope of work kill fee intellectual property assignment late payment interest indemnity'
  },

  /* ---------------- Tools ---------------- */
  {
    slug: 'tool-compound-interest.html', type: 'tool', cat: 'tools', author: 'ln',
    title: 'Compound Growth & Contribution Calculator',
    dek: 'Model contributions, fees and inflation side by side — and see exactly what expense ratios cost you over 30 years.',
    read: 6, updated: '2026-07-26', art: 'art-1', icon: 'fa-chart-area',
    tags: ['calculator', 'compounding', 'fees', 'inflation'],
    kw: 'compound interest calculator investment growth fees inflation contributions'
  },
  {
    slug: 'tool-mortgage.html', type: 'tool', cat: 'tools', author: 'ab',
    title: 'Mortgage Payment & Amortisation Calculator',
    dek: 'Full payment breakdown with taxes, insurance and PMI — plus the extra-payment scenario that shortens the term.',
    read: 6, updated: '2026-07-26', art: 'art-8', icon: 'fa-house-chimney',
    tags: ['calculator', 'mortgage', 'amortisation', 'PMI'],
    kw: 'mortgage calculator payment amortization schedule pmi extra payment interest saved'
  },
  {
    slug: 'tool-debt-payoff.html', type: 'tool', cat: 'tools', author: 'ab',
    title: 'Debt Payoff Comparison Engine',
    dek: 'Enter up to six balances and watch avalanche, snowball and hybrid strategies race in real time.',
    read: 6, updated: '2026-07-26', art: 'art-7', icon: 'fa-list-check',
    tags: ['calculator', 'debt', 'avalanche', 'snowball'],
    kw: 'debt payoff calculator avalanche snowball comparison interest months free'
  },
  {
    slug: 'tool-retirement.html', type: 'tool', cat: 'tools', author: 'ln',
    title: 'Retirement Readiness & Withdrawal Simulator',
    dek: 'Accumulation plus drawdown in one model, with a stress test at 4%, 3.5% and 3% withdrawal rates.',
    read: 7, updated: '2026-07-26', art: 'art-5', icon: 'fa-hourglass-half',
    tags: ['calculator', 'retirement', 'withdrawal rate', 'FIRE'],
    kw: 'retirement calculator withdrawal rate 4 percent rule nest egg readiness simulator'
  },
  {
    slug: 'tool-insurance-needs.html', type: 'tool', cat: 'tools', author: 'mr',
    title: 'Life Insurance Needs Analyser (DIME+)',
    dek: 'Debt, income replacement, mortgage and education — sized properly instead of a lazy 10× salary rule.',
    read: 6, updated: '2026-07-26', art: 'art-2', icon: 'fa-shield-heart',
    tags: ['calculator', 'life insurance', 'DIME', 'coverage'],
    kw: 'life insurance needs calculator dime method coverage amount income replacement'
  },

  /* ---------------- Hubs & site pages ---------------- */
  { slug: 'investing.html', type: 'hub', cat: 'investing', title: 'Investing & Wealth', dek: CATEGORIES.investing.blurb, read: 4, icon: 'fa-chart-line', art: 'art-1', updated: '2026-07-26', kw: 'investing hub portfolio' },
  { slug: 'insurance.html', type: 'hub', cat: 'insurance', title: 'Insurance & Risk', dek: CATEGORIES.insurance.blurb, read: 4, icon: 'fa-shield-halved', art: 'art-2', updated: '2026-07-26', kw: 'insurance hub coverage risk' },
  { slug: 'credit-and-debt.html', type: 'hub', cat: 'credit', title: 'Credit & Debt', dek: CATEGORIES.credit.blurb, read: 4, icon: 'fa-credit-card', art: 'art-5', updated: '2026-07-26', kw: 'credit debt hub score loans' },
  { slug: 'business-growth.html', type: 'hub', cat: 'business', title: 'Business & SaaS', dek: CATEGORIES.business.blurb, read: 4, icon: 'fa-rocket', art: 'art-3', updated: '2026-07-26', kw: 'business saas hub pricing operations' },
  { slug: 'marketing.html', type: 'hub', cat: 'marketing', title: 'Growth Marketing', dek: CATEGORIES.marketing.blurb, read: 4, icon: 'fa-bullhorn', art: 'art-7', updated: '2026-07-26', kw: 'marketing hub growth acquisition' },
  { slug: 'tax-and-legal.html', type: 'hub', cat: 'tax', title: 'Tax & Legal', dek: CATEGORIES.tax.blurb, read: 4, icon: 'fa-scale-balanced', art: 'art-4', updated: '2026-07-26', kw: 'tax legal hub entity deductions' },
  { slug: 'real-estate.html', type: 'hub', cat: 'property', title: 'Real Estate & Property', dek: CATEGORIES.property.blurb, read: 4, icon: 'fa-building', art: 'art-8', updated: '2026-08-02', kw: 'real estate property hub mortgage rental closing costs' },
  { slug: 'banking-and-cash.html', type: 'hub', cat: 'banking', title: 'Banking & Cash', dek: CATEGORIES.banking.blurb, read: 4, icon: 'fa-piggy-bank', art: 'art-6', updated: '2026-08-02', kw: 'banking cash hub savings cd treasury fees' },
  { slug: 'career-and-income.html', type: 'hub', cat: 'career', title: 'Career & Income', dek: CATEGORIES.career.blurb, read: 4, icon: 'fa-briefcase', art: 'art-3', updated: '2026-08-02', kw: 'career income hub salary negotiation rsu freelance' },
  { slug: 'retirement-planning.html', type: 'hub', cat: 'retirement', title: 'Retirement & Estate', dek: CATEGORIES.retirement.blurb, read: 4, icon: 'fa-umbrella-beach', art: 'art-5', updated: '2026-08-04', kw: 'retirement estate hub social security medicare roth conversion' },
  { slug: 'education-and-family.html', type: 'hub', cat: 'education', title: 'Education & Family', dek: CATEGORIES.education.blurb, read: 4, icon: 'fa-graduation-cap', art: 'art-4', updated: '2026-08-04', kw: 'education family hub 529 fafsa childcare student loans' },

  /* Expansion desks (A-2). Each stays out of the nav until its first article
     ships — the publish guard drops any desk with zero published articles so
     a reader can never land on an empty hub. */
  { slug: 'ai-and-automation-costs.html', type: 'hub', cat: 'ai', title: 'AI & Automation Economics', dek: CATEGORIES.ai.blurb, read: 4, icon: 'fa-microchip', art: 'art-3', updated: '2026-08-22', kw: 'ai automation cost hub token gpu pricing agent roi build vs buy' },
  { slug: 'cyber-and-digital-risk.html', type: 'hub', cat: 'cyber', title: 'Cyber & Digital Risk', dek: CATEGORIES.cyber.blurb, read: 4, icon: 'fa-user-shield', art: 'art-2', updated: '2026-08-22', kw: 'cyber risk hub breach cost insurance fraud liability security spend' },
  { slug: 'health-and-medical-money.html', type: 'hub', cat: 'health', title: 'Health & Medical Money', dek: CATEGORIES.health.blurb, read: 4, icon: 'fa-notes-medical', art: 'art-6', updated: '2026-08-22', kw: 'health medical money hub hsa medical bill negotiation cash pricing coverage' },
  { slug: 'energy-and-home-tech.html', type: 'hub', cat: 'energy', title: 'Energy & Home Economics', dek: CATEGORIES.energy.blurb, read: 4, icon: 'fa-bolt', art: 'art-7', updated: '2026-08-22', kw: 'energy home hub solar payback battery heat pump ev total cost ownership' },
  { slug: 'private-markets-and-alternatives.html', type: 'hub', cat: 'alternatives', title: 'Private Markets & Alternatives', dek: CATEGORIES.alternatives.blurb, read: 4, icon: 'fa-vault', art: 'art-5', updated: '2026-08-22', kw: 'private markets alternatives hub private credit interval fund secondaries fees lockup' },
  { slug: 'crypto-and-digital-assets.html', type: 'hub', cat: 'crypto', title: 'Digital Assets & Tokenized Finance', dek: CATEGORIES.crypto.blurb, read: 4, icon: 'fa-link', art: 'art-1', updated: '2026-08-22', kw: 'digital assets hub stablecoin tokenized treasuries custody crypto tax lots' },
  { slug: 'global-and-expat-money.html', type: 'hub', cat: 'global', title: 'Global & Expat Money', dek: CATEGORIES.global.blurb, read: 4, icon: 'fa-earth-americas', art: 'art-8', updated: '2026-08-22', kw: 'global expat money hub cross border tax fx spread multi currency banking' },
  { slug: 'freelance-and-creator-finance.html', type: 'hub', cat: 'freelance', title: 'Freelance & Creator Finance', dek: CATEGORIES.freelance.blurb, read: 4, icon: 'fa-pen-nib', art: 'art-4', updated: '2026-08-22', kw: 'freelance creator finance hub quarterly tax solo 401k irregular income entity' },

  { slug: 'library.html', type: 'page', cat: 'tools', title: 'The Full Library', dek: 'Every guide, filterable by topic, depth and reading time.', read: 3, icon: 'fa-book-open', art: 'art-8', updated: '2026-07-26', kw: 'library all articles archive index' },
  { slug: 'tools.html', type: 'page', cat: 'tools', title: 'Calculators & Models', dek: 'Five interactive financial models that run entirely in your browser.', read: 3, icon: 'fa-calculator', art: 'art-6', updated: '2026-07-26', kw: 'tools calculators models' },
  { slug: 'learning-paths.html', type: 'page', cat: 'tools', title: 'Guided Learning Paths', dek: 'Sequenced reading tracks with saved progress — start at step one and finish informed.', read: 4, icon: 'fa-route', art: 'art-3', updated: '2026-07-26', kw: 'learning paths courses guided tracks' },
  { slug: 'myth-audit.html', type: 'page', cat: 'tools', title: 'The Myth Audit', dek: 'Standard financial advice, and exactly where each piece stops being true — collected from every guide on the site.', read: 6, icon: 'fa-scale-unbalanced', art: 'art-7', updated: '2026-08-28', kw: 'myth audit misconceptions financial advice debunked limits errors borders critical review' },
  /* ---------------- MetaX.Academy mastery track ----------------
     One per desk. Each is the target of the "More Details" bridge on that
     desk's guides: the structural issues a finance guide cannot fix. */
  {
    slug: 'metax-investing-objective.html', type: 'article', cat: 'investing', author: 'maher',
    title: 'Stating What Your Portfolio Is For',
    dek: 'Most portfolios optimise a metric nobody chose. The counterproductivity test, applied to a household.',
    read: 12, updated: '2026-09-06', art: 'art-1', icon: 'fa-bullseye', metax: true,
    tags: ['objectives', 'metric colonisation', 'deskilling', 'MetaX'],
    kw: 'portfolio purpose objective counterproductivity test metric colonisation deskilling automation'
  },
  {
    slug: 'metax-riba-parity.html', type: 'article', cat: 'banking', author: 'maher',
    title: 'Asset-Backed Alternatives',
    dek: 'Murābaḥa, ijāra and diminishing partnership — financing without a stipulated increase, how they price, and where they fail.',
    read: 14, updated: '2026-09-14', art: 'art-4', icon: 'fa-code-compare', metax: true, pillar: true,
    tags: ['asset-backed', 'murabaha', 'ijara', 'musharakah', 'MetaX'],
    kw: 'riba free asset backed murabaha ijara musharakah diminishing partnership islamic finance alternative mortgage deposit'
  },
  {
    slug: 'metax-insurance-contestability.html', type: 'article', cat: 'insurance', author: 'maher',
    title: 'Contestability: How to Argue With a Decision Made About You',
    dek: 'Buying the right policy is the easy half. The claim is an automated determination with no reasons — here is how to force one.',
    read: 11, updated: '2026-09-06', art: 'art-2', icon: 'fa-gavel', metax: true,
    tags: ['contestability', 'claims', 'due process', 'MetaX'],
    kw: 'insurance claim denial appeal contestability specific reasons human review inference underwriting gharar'
  },
  {
    slug: 'metax-credit-scoring-apparatus.html', type: 'article', cat: 'credit', author: 'maher',
    title: 'The Scoring Apparatus',
    dek: 'Improving your score treats the symptom. This is the mechanism, why it resists challenge, and what standing you actually have.',
    read: 12, updated: '2026-09-06', art: 'art-5', icon: 'fa-diagram-project', metax: true,
    tags: ['credit scoring', 'due process', 'exclusion', 'MetaX'],
    kw: 'credit score apparatus algorithmic governance adverse action thin file dispute bureau riba'
  },
  {
    slug: 'metax-business-exitable.html', type: 'article', cat: 'business', author: 'maher',
    title: 'Building a Business Your Customers Could Leave',
    dek: 'Lock-in is retention you did not earn. Exit, metric honesty and a named owner for every decision.',
    read: 12, updated: '2026-09-06', art: 'art-3', icon: 'fa-door-open', metax: true,
    tags: ['exit', 'lock-in', 'metric honesty', 'MetaX'],
    kw: 'saas lock-in switching costs data export interoperability metric colonisation responsibility diffusion'
  },
  {
    slug: 'metax-marketing-disclosable.html', type: 'article', cat: 'marketing', author: 'maher',
    title: 'Marketing That Survives Its Own Disclosure',
    dek: 'Would this tactic still work if you published exactly what it optimises? Most of the category fails that test.',
    read: 11, updated: '2026-09-06', art: 'art-6', icon: 'fa-eye', metax: true,
    tags: ['disclosure', 'consent', 'synthetic content', 'MetaX'],
    kw: 'marketing ethics disclosure test consent laundering corpus poisoning synthetic content compliance theatre'
  },
  {
    slug: 'metax-tax-channel-parity.html', type: 'article', cat: 'tax', author: 'maher',
    title: 'Channel Parity: When the Only Route Is Digital',
    dek: 'Where a portal is the only way to claim an entitlement, abstention becomes exclusion. What parity requires.',
    read: 11, updated: '2026-09-06', art: 'art-7', icon: 'fa-road-barrier', metax: true,
    tags: ['channel parity', 'digital exclusion', 'jurisdiction', 'MetaX'],
    kw: 'channel parity digital only exclusion digital identity entitlement algorithmic assessment jurisdiction'
  },
  {
    slug: 'metax-property-reversibility.html', type: 'article', cat: 'property', author: 'maher',
    title: 'Reversibility',
    dek: 'Before an irreversible commitment: what is foreclosed, for whom, and why not the reversible alternative.',
    read: 12, updated: '2026-09-06', art: 'art-4', icon: 'fa-rotate-left', metax: true,
    tags: ['reversibility', 'sunset condition', 'successor', 'MetaX'],
    kw: 'reversibility irreversible foreclosure sunset condition property purchase valuation tenant screening'
  },
  {
    slug: 'metax-banking-custody.html', type: 'article', cat: 'banking', author: 'maher',
    title: 'The Worst Future Holder',
    dek: 'Who owns your transaction history in ten years — and what would they do with it?',
    read: 12, updated: '2026-09-06', art: 'art-1', icon: 'fa-vault', metax: true,
    tags: ['custody', 'surveillance', 'exit', 'MetaX'],
    kw: 'bank data custody worst future holder acquisition insolvency surveillance transaction history cash exit'
  },
  {
    slug: 'metax-career-standing.html', type: 'article', cat: 'career', author: 'maher',
    title: 'Standing at Work',
    dek: 'Negotiation assumes you reached the room. Screening, ratings and deactivation happen before you get there.',
    read: 11, updated: '2026-09-06', art: 'art-6', icon: 'fa-scale-balanced', metax: true,
    tags: ['hiring algorithms', 'platform work', 'deactivation', 'MetaX'],
    kw: 'hiring algorithm screening rejection platform deactivation appeal rating labour fragmentation zulm'
  },
  {
    slug: 'metax-retirement-custody.html', type: 'article', cat: 'retirement', author: 'maher',
    title: 'Custody as Amanah',
    dek: 'The one category whose subject cannot be consulted. What you bind, for whom, and how it could be undone.',
    read: 13, updated: '2026-09-06', art: 'art-2', icon: 'fa-hands-holding-circle', metax: true,
    tags: ['custody plan', 'successor', 'incapacity', 'MetaX'],
    kw: 'estate custody plan amanah successor pre-emption incapacity digital assets synthetic adviser'
  },
  { slug: 'decide.html', type: 'page', cat: 'tools', title: 'Decision Guides', dek: 'Answer three or four questions and get a recommendation, the order to act in, and the guides that justify it.', read: 4, icon: 'fa-diagram-project', art: 'art-3', updated: '2026-09-02', kw: 'decision guide router which repayment plan freeze credit rent or buy debt method disability cover quiz' },
  { slug: 'glossary.html', type: 'page', cat: 'tools', title: 'Finance Glossary', dek: '90+ terms defined in plain language, with the context that makes them useful.', read: 9, icon: 'fa-spell-check', art: 'art-2', updated: '2026-07-26', kw: 'glossary definitions terms dictionary finance' },
  { slug: 'reading-list.html', type: 'page', cat: 'tools', title: 'Your Reading List', dek: 'Everything you saved, plus your progress through each learning path.', read: 2, icon: 'fa-bookmark', art: 'art-5', updated: '2026-07-26', kw: 'reading list saved bookmarks progress' },
  { slug: 'about.html', type: 'page', cat: 'tools', title: 'About Fiscora', dek: 'Who writes here, how we test our numbers, and how we stay independent.', read: 5, icon: 'fa-users', art: 'art-1', updated: '2026-07-26', kw: 'about team mission independence' },
  { slug: 'editorial-policy.html', type: 'page', cat: 'tools', title: 'Editorial & Review Policy', dek: 'Our sourcing standards, correction process and review cadence.', read: 6, icon: 'fa-clipboard-check', art: 'art-4', updated: '2026-07-26', kw: 'editorial policy standards corrections fact check' },
  { slug: 'part-h-statement.html', type: 'page', cat: 'tools', title: 'Part H Statement', dek: 'Our compliance record under ML-2.3: all twenty-five structural harms dispositioned, including the three we have not fixed.', read: 11, icon: 'fa-file-shield', art: 'art-7', updated: '2026-09-14', kw: 'part h statement compliance ml-2.3 maher license structural harms unremedied tier scale gate' },
  { slug: 'advertise.html', type: 'page', cat: 'tools', title: 'Advertise & Media Kit', dek: 'Audience profile, placement inventory and viewability benchmarks for partners.', read: 5, icon: 'fa-rectangle-ad', art: 'art-7', updated: '2026-07-26', kw: 'advertise media kit sponsorship audience cpm' },
  { slug: 'contact.html', type: 'page', cat: 'tools', title: 'Contact the Newsroom', dek: 'Pitches, corrections, partnership requests and reader questions.', read: 2, icon: 'fa-paper-plane', art: 'art-6', updated: '2026-07-26', kw: 'contact email newsroom support' },
  { slug: 'privacy.html', type: 'page', cat: 'tools', title: 'Privacy & Cookies', dek: 'What we collect, what advertising partners collect, and how to opt out.', read: 7, icon: 'fa-lock', art: 'art-8', updated: '2026-07-26', kw: 'privacy policy cookies gdpr ccpa advertising' },
  { slug: 'terms.html', type: 'page', cat: 'tools', title: 'Terms & Disclaimer', dek: 'Terms of use plus our financial-information disclaimer.', read: 6, icon: 'fa-file-contract', art: 'art-5', updated: '2026-07-26', kw: 'terms of use disclaimer liability' }
];

/* Sequenced reading tracks — the core mechanism for multi-page sessions */
const PATHS = [
  {
    id: 'foundations',
    title: 'Financial Foundations',
    icon: 'fa-seedling',
    blurb: 'Five steps from cash buffer to first invested dollar. The order matters more than the products.',
    level: 'Beginner',
    steps: ['emergency-fund-blueprint.html', 'debt-payoff-methods.html', 'credit-score-blueprint.html', 'retirement-401k-vs-ira.html', 'index-funds-vs-etfs.html']
  },
  {
    id: 'protection',
    title: 'Downside Protection',
    icon: 'fa-shield-halved',
    blurb: 'Insure the catastrophic, self-insure the annoying. Four guides that price your risk properly.',
    level: 'Intermediate',
    steps: ['term-vs-whole-life-insurance.html', 'disability-insurance-guide.html', 'health-insurance-deductibles.html', 'auto-insurance-premiums.html']
  },
  {
    id: 'portfolio',
    title: 'Portfolio Builder',
    icon: 'fa-chart-pie',
    blurb: 'Choose the wrapper, set the glide path, then decide whether income investing fits your plan.',
    level: 'Intermediate',
    steps: ['index-funds-vs-etfs.html', 'asset-allocation-by-age.html', 'dividend-income-playbook.html', 'tool-retirement.html']
  },
  {
    id: 'homeowner',
    title: 'Smart Homeowner',
    icon: 'fa-house-chimney-window',
    blurb: 'Qualify at the best rate, then know precisely when a refinance pays for itself.',
    level: 'Intermediate',
    steps: ['credit-score-blueprint.html', 'mortgage-refinance-guide.html', 'tool-mortgage.html']
  },
  {
    id: 'operator',
    title: 'Operator Growth Track',
    icon: 'fa-rocket',
    blurb: 'Entity, pricing, cloud spend and acquisition — the four levers behind durable margin.',
    level: 'Advanced',
    steps: ['llc-vs-s-corp.html', 'saas-pricing-strategy.html', 'cloud-cost-optimization.html', 'seo-content-engine.html', 'google-ads-cpc-guide.html']
  },
  {
    id: 'firstbuyer',
    title: 'First Property Purchase',
    icon: 'fa-key',
    blurb: 'From the rent-versus-buy arithmetic to the closing table — the five decisions that set your next decade of housing cost.',
    level: 'Beginner',
    steps: ['rent-vs-buy-analysis.html', 'first-time-buyer-programs.html', 'closing-costs-breakdown.html', 'credit-score-blueprint.html', 'tool-mortgage.html']
  },
  {
    id: 'landlord',
    title: 'Rental Property Operator',
    icon: 'fa-building-user',
    blurb: 'Underwrite the deal, finance it without wrecking your balance sheet, and defend the tax bill afterwards.',
    level: 'Advanced',
    steps: ['rental-property-cash-flow.html', 'heloc-vs-cash-out-refinance.html', 'property-tax-appeal.html', 'umbrella-insurance-guide.html', 'reit-investing-guide.html']
  },
  {
    id: 'cashdesk',
    title: 'Cash Management Desk',
    icon: 'fa-vault',
    blurb: 'Stop leaving yield on the table. Where short-term money belongs, laddered properly, with the fees stripped out.',
    level: 'Beginner',
    steps: ['high-yield-savings-guide.html', 'bank-fees-audit.html', 'cd-ladder-strategy.html', 'treasury-bills-guide.html', 'bond-ladder-strategy.html']
  },
  {
    id: 'compensation',
    title: 'Compensation & Career Capital',
    icon: 'fa-briefcase',
    blurb: 'Negotiate the offer, decode the equity, and price your own time correctly whether employed or independent.',
    level: 'Intermediate',
    steps: ['salary-negotiation-playbook.html', 'rsu-vs-options-compensation.html', 'freelance-rate-guide.html', 'career-change-runway.html', 'severance-package-negotiation.html']
  },
  {
    id: 'taxopt',
    title: 'Tax Optimisation Track',
    icon: 'fa-scale-balanced',
    blurb: 'Harvest losses, sequence withdrawals, shelter medical costs and stay current with quarterly obligations.',
    level: 'Advanced',
    steps: ['tax-loss-harvesting-guide.html', 'hsa-triple-tax-advantage.html', 'tax-efficient-withdrawal-order.html', 'quarterly-estimated-taxes.html', 'small-business-tax-deductions.html']
  },
  {
    id: 'decumulation',
    title: 'The Decumulation Plan',
    icon: 'fa-umbrella-beach',
    blurb: 'Turning a portfolio into a paycheque: claiming age, sequence risk, conversions and the healthcare bill in between.',
    level: 'Advanced',
    steps: ['sequence-of-returns-risk.html', 'social-security-timing.html', 'roth-conversion-ladder.html', 'medicare-enrollment-guide.html', 'tax-efficient-withdrawal-order.html']
  },
  {
    id: 'legacy',
    title: 'Estate & Legacy',
    icon: 'fa-file-signature',
    blurb: 'Five documents, one asset inventory and the beneficiary forms that quietly outrank your will.',
    level: 'Intermediate',
    steps: ['estate-planning-essentials.html', 'inherited-ira-rules.html', 'pension-lump-sum-decision.html', 'umbrella-insurance-guide.html', 'long-term-care-insurance.html']
  },
  {
    id: 'collegefund',
    title: 'Funding an Education',
    icon: 'fa-graduation-cap',
    blurb: 'Save in the right wrapper, file the aid forms correctly, and repay what is left without overpaying.',
    level: 'Beginner',
    steps: ['529-plan-strategy.html', 'custodial-accounts-vs-529.html', 'fafsa-and-aid-optimization.html', 'student-loan-repayment-plans.html', 'cost-of-raising-a-child.html']
  }
];

/* ==========================================================================
   PUBLISH GUARD
   PAGES is the editorial plan and deliberately runs ahead of production, so
   commissioned pieces can be slotted into categories and learning paths
   before they are written. Anything not listed here has no HTML file yet and
   is stripped from the graph at load, so no hub, path, search result or
   JSON-LD entry can ever emit a dead link.

   To publish: write the file, add its slug below. Nothing else to change.
   ========================================================================== */
const PUBLISHED = [
  /* core */
  'index.html', 'library.html', 'tools.html', 'learning-paths.html',
  'glossary.html', 'reading-list.html', 'myth-audit.html', 'decide.html',
  /* MetaX mastery track — one per desk */
  'metax-investing-objective.html', 'metax-insurance-contestability.html',
  'metax-credit-scoring-apparatus.html', 'metax-business-exitable.html',
  'metax-marketing-disclosable.html', 'metax-tax-channel-parity.html',
  'metax-property-reversibility.html', 'metax-banking-custody.html',
  'metax-career-standing.html', 'metax-retirement-custody.html',
  'metax-riba-parity.html',
  /* governance */
  'part-h-statement.html',
  /* hubs */
  'investing.html', 'insurance.html', 'credit-and-debt.html',
  'business-growth.html', 'marketing.html', 'tax-and-legal.html',
  'real-estate.html', 'banking-and-cash.html', 'career-and-income.html',
  'retirement-planning.html', 'education-and-family.html',
  /* calculators */
  'tool-compound-interest.html', 'tool-mortgage.html', 'tool-retirement.html',
  'tool-debt-payoff.html', 'tool-insurance-needs.html',
  /* investing */
  'index-funds-vs-etfs.html', 'asset-allocation-by-age.html',
  'dividend-income-playbook.html', 'retirement-401k-vs-ira.html',
  'emergency-fund-blueprint.html',
  /* insurance */
  'term-vs-whole-life-insurance.html', 'health-insurance-deductibles.html',
  'auto-insurance-premiums.html', 'disability-insurance-guide.html',
  /* credit */
  'credit-score-blueprint.html', 'debt-payoff-methods.html',
  'mortgage-refinance-guide.html', 'student-loan-strategies.html',
  /* business */
  'llc-vs-s-corp.html', 'saas-pricing-strategy.html',
  'cloud-cost-optimization.html',
  /* marketing */
  'google-ads-cpc-guide.html', 'seo-content-engine.html',
  'email-automation-revenue.html',
  /* tax */
  'small-business-tax-deductions.html',
  /* real estate & property */
  'rent-vs-buy-analysis.html', 'closing-costs-breakdown.html',
  'heloc-vs-cash-out-refinance.html', 'rental-property-cash-flow.html',
  'first-time-buyer-programs.html', 'property-tax-appeal.html',
  /* banking & cash */
  'high-yield-savings-guide.html', 'cd-ladder-strategy.html',
  'treasury-bills-guide.html', 'bank-fees-audit.html',
  'business-banking-setup.html',
  /* retirement & estate */
  'social-security-timing.html', 'medicare-enrollment-guide.html',
  'estate-planning-essentials.html', 'roth-conversion-ladder.html',
  /* career & income (B-1 — revives a desk the guard had stripped) */
  'salary-negotiation-playbook.html', 'rsu-vs-options-compensation.html',
  'freelance-rate-guide.html', 'career-change-runway.html',
  'severance-package-negotiation.html',
  /* education & family (B-1 — revives a desk the guard had stripped) */
  '529-plan-strategy.html', 'fafsa-and-aid-optimization.html',
  'student-loan-repayment-plans.html', 'cost-of-raising-a-child.html',
  'custodial-accounts-vs-529.html',
  /* banking (B-1 — closes the dead prose link in bank-fees-audit.html) */
  'fraud-and-identity-protection.html',
  /* Expansion desk hubs (A-2) are written and styled but deliberately NOT
     allowlisted yet. The guard deletes any desk with zero published articles,
     so allowlisting them now would publish eight hubs with empty article
     grids — the exact thin-content pattern the guard exists to prevent.
     Each becomes live, in nav and in the mega-menu, the moment its first
     article ships in B-2: add its slug here, nothing else.

     'ai-and-automation-costs.html', 'cyber-and-digital-risk.html',
     'health-and-medical-money.html', 'energy-and-home-tech.html',
     'private-markets-and-alternatives.html', 'crypto-and-digital-assets.html',
     'global-and-expat-money.html', 'freelance-and-creator-finance.html', */
  /* static */
  'about.html', 'editorial-policy.html', 'privacy.html', 'terms.html',
  'advertise.html', 'contact.html', 'author-maher.html'
];

(function applyPublishGuard() {
  const live = Object.create(null);
  PUBLISHED.forEach(s => { live[s] = true; });

  /* Strip unwritten pages in place (PAGES is const, so splice rather than reassign). */
  for (let i = PAGES.length - 1; i >= 0; i--) {
    if (!live[PAGES[i].slug]) PAGES.splice(i, 1);
  }

  /* Learning paths must not point at unwritten steps, and a path reduced to
     fewer than two steps is no longer a path. */
  for (let i = PATHS.length - 1; i >= 0; i--) {
    PATHS[i].steps = (PATHS[i].steps || []).filter(s => live[s]);
    if (PATHS[i].steps.length < 2) PATHS.splice(i, 1);
  }

  /* A desk with no published articles would render an empty hub — thin
     content that hurts both readers and ad-network site review. Drop it from
     CATEGORIES so nav, mega-menu, footer and mobile nav all stop linking it.
     Re-appears automatically as soon as one of its articles is published. */
  Object.keys(CATEGORIES).forEach(key => {
    if (key === 'tools') return;
    const has = PAGES.some(p => p.cat === key && p.type === 'article');
    if (!has) delete CATEGORIES[key];
  });
})();

/* ==========================================================================
   IMAGE INDEX
   Every hero / card image is referenced by a stable two-digit index, so an
   image can be generated once and dropped into /img without touching markup.

   File contract:  img/hero-NN.jpg   at 1200 × 630 (1.91:1)
   The same file serves three jobs: category hero background, post-card art,
   and og:image / twitter:image for social sharing.

   Until a file exists the gradient `art-N` class shows through unchanged, so
   a missing image degrades to today's design rather than to a broken box.

     01–12  category hero (original desks)
     20–54  article hero
     55–59  calculator hero
     60–65  core & static pages
     66     author portrait (Maher)
     67–74  category hero (expansion desks)
     75–85  article hero (career & education revival)
   ========================================================================== */
const CAT_IMG = {
  investing: 1, insurance: 2, credit: 3, business: 4, marketing: 5, tax: 6,
  property: 7, banking: 8, career: 9, retirement: 10, education: 11, tools: 12,
  /* Expansion desks. Numbered from 67 rather than filling 13–19, because the
     article band already starts at 20 and eight desks will not fit below it.
     Keeping the documented bands intact matters more than contiguity. */
  ai: 67, cyber: 68, health: 69, energy: 70,
  alternatives: 71, crypto: 72, global: 73, freelance: 74
};

const IMG_INDEX = {
  /* investing */
  'index-funds-vs-etfs.html': 20, 'asset-allocation-by-age.html': 21,
  'dividend-income-playbook.html': 22, 'retirement-401k-vs-ira.html': 23,
  'emergency-fund-blueprint.html': 24,
  /* insurance */
  'term-vs-whole-life-insurance.html': 25, 'health-insurance-deductibles.html': 26,
  'auto-insurance-premiums.html': 27, 'disability-insurance-guide.html': 28,
  /* credit */
  'credit-score-blueprint.html': 29, 'debt-payoff-methods.html': 30,
  'mortgage-refinance-guide.html': 31, 'student-loan-strategies.html': 32,
  /* business */
  'llc-vs-s-corp.html': 33, 'saas-pricing-strategy.html': 34,
  'cloud-cost-optimization.html': 35,
  /* marketing */
  'google-ads-cpc-guide.html': 36, 'seo-content-engine.html': 37,
  'email-automation-revenue.html': 38,
  /* tax */
  'small-business-tax-deductions.html': 39,
  /* property */
  'rent-vs-buy-analysis.html': 40, 'closing-costs-breakdown.html': 41,
  'heloc-vs-cash-out-refinance.html': 42, 'rental-property-cash-flow.html': 43,
  'first-time-buyer-programs.html': 44, 'property-tax-appeal.html': 45,
  /* banking */
  'high-yield-savings-guide.html': 46, 'cd-ladder-strategy.html': 47,
  'treasury-bills-guide.html': 48, 'bank-fees-audit.html': 49,
  'business-banking-setup.html': 50,
  /* retirement */
  'social-security-timing.html': 51, 'medicare-enrollment-guide.html': 52,
  'estate-planning-essentials.html': 53, 'roth-conversion-ladder.html': 54,
  /* calculators */
  'tool-compound-interest.html': 55, 'tool-mortgage.html': 56,
  'tool-retirement.html': 57, 'tool-debt-payoff.html': 58,
  'tool-insurance-needs.html': 59,
  /* career & education revival (B-1) */
  'salary-negotiation-playbook.html': 75, 'rsu-vs-options-compensation.html': 76,
  'freelance-rate-guide.html': 77, 'career-change-runway.html': 78,
  'severance-package-negotiation.html': 79,
  '529-plan-strategy.html': 80, 'fafsa-and-aid-optimization.html': 81,
  'student-loan-repayment-plans.html': 82, 'cost-of-raising-a-child.html': 83,
  'custodial-accounts-vs-529.html': 84,
  'fraud-and-identity-protection.html': 85,
  /* core & static */
  'index.html': 60, 'library.html': 61, 'tools.html': 62,
  'learning-paths.html': 63, 'glossary.html': 64, 'about.html': 65,
  'myth-audit.html': 67, 'decide.html': 68,
  /* MetaX mastery track */
  'metax-investing-objective.html': 86, 'metax-insurance-contestability.html': 87,
  'metax-credit-scoring-apparatus.html': 88, 'metax-business-exitable.html': 89,
  'metax-marketing-disclosable.html': 90, 'metax-tax-channel-parity.html': 91,
  'metax-property-reversibility.html': 92, 'metax-banking-custody.html': 93,
  'metax-career-standing.html': 94, 'metax-retirement-custody.html': 95,
  'metax-riba-parity.html': 96, 'part-h-statement.html': 97
};

/* img/hero-NN.jpg — zero-padded so filenames sort naturally. */
function imgPath(n) {
  return n ? 'img/hero-' + String(n).padStart(2, '0') + '.jpg' : '';
}
function imgUrl(n) {
  return n ? SITE.origin + '/' + imgPath(n) : SITE.ogDefault;
}

/* Stamp the index onto the graph so renderers never look it up themselves. */
Object.keys(CATEGORIES).forEach(k => {
  const c = CATEGORIES[k];
  c.img = CAT_IMG[k] || 0;
  c.imgSrc = imgPath(c.img);
});
PAGES.forEach(p => {
  p.img = IMG_INDEX[p.slug] || CAT_IMG[p.cat] || 0;
  p.imgSrc = imgPath(p.img);
  p.imgUrl = imgUrl(p.img);
});

/* --------- Derived helpers --------- */
const BY_SLUG = PAGES.reduce((m, p) => (m[p.slug] = p, m), {});

function pagesIn(cat, type) {
  return PAGES.filter(p => p.cat === cat && (!type || p.type === type));
}
function articles() { return PAGES.filter(p => p.type === 'article'); }
function tools() { return PAGES.filter(p => p.type === 'tool'); }

/** Related content: same category first, then shared tags, then pillars. */
function relatedTo(slug, n) {
  n = n || 3;
  const cur = BY_SLUG[slug];
  if (!cur) return articles().filter(p => p.pillar).slice(0, n);
  const scored = PAGES
    .filter(p => p.slug !== slug && (p.type === 'article' || p.type === 'tool'))
    .map(p => {
      let s = 0;
      if (p.cat === cur.cat) s += 5;
      const shared = (p.tags || []).filter(t => (cur.tags || []).includes(t)).length;
      s += shared * 3;
      if (p.pillar) s += 1;
      if (p.type === 'tool' && cur.type === 'article') s += 1;
      return { p, s };
    })
    .sort((a, b) => b.s - a.s);
  return scored.slice(0, n).map(x => x.p);
}

/** Path membership for a given slug (used for "step X of Y" continuity). */
function pathFor(slug) {
  for (const path of PATHS) {
    const i = path.steps.indexOf(slug);
    if (i > -1) return { path, index: i };
  }
  return null;
}

/** The next logical page for a reader — path step, else best related. */
function nextFor(slug) {
  const inPath = pathFor(slug);
  if (inPath && inPath.index < inPath.path.steps.length - 1) {
    return { page: BY_SLUG[inPath.path.steps[inPath.index + 1]], reason: 'Next in ' + inPath.path.title, path: inPath.path };
  }
  const rel = relatedTo(slug, 1)[0];
  return rel ? { page: rel, reason: 'Recommended next' } : null;
}

/* ==========================================================================
   ROUTER INDEX  (growth trick #9)

   A deliberately tiny map of desk -> diagnostic router, so js/site.js can
   place an in-article entry point without every page having to load the full
   decision trees in js/routers-data.js. The trees are ~40KB and are needed
   only on decide.html; this index is a few hundred bytes and is needed
   everywhere. Keep the ids in sync with js/routers-data.js.
   ========================================================================== */
const ROUTER_INDEX = {
  education:  { id: 'student-loans',    title: 'Which student-loan repayment plan fits me?', icon: 'fa-graduation-cap' },
  insurance:  { id: 'disability-cover', title: 'Do I actually need disability cover?',        icon: 'fa-wheelchair-move' },
  credit:     { id: 'debt-method',      title: 'Which debt payoff method should I use?',      icon: 'fa-fire-flame-curved' },
  property:   { id: 'rent-or-buy',      title: 'Should I rent or buy right now?',             icon: 'fa-house-chimney' },
  investing:  { id: 'invest-next',      title: 'Where should my next pound or dollar go?',    icon: 'fa-layer-group' },
  retirement: { id: 'invest-next',      title: 'Where should my next pound or dollar go?',    icon: 'fa-layer-group' },
  banking:    { id: 'invest-next',      title: 'Where should my next pound or dollar go?',    icon: 'fa-layer-group' }
};

if (typeof window !== 'undefined') {
  window.SITE = SITE; window.CATEGORIES = CATEGORIES; window.AUTHORS = AUTHORS;
  window.PAGES = PAGES; window.PATHS = PATHS; window.BY_SLUG = BY_SLUG;
  window.ROUTER_INDEX = ROUTER_INDEX;
  window.FiscoraData = { pagesIn, articles, tools, relatedTo, pathFor, nextFor, imgPath, imgUrl };
}
