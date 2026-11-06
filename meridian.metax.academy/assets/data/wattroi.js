/* WattROI — home energy and property ROI. Content model. */
window.SITE_DATA = {
  slug: "wattroi",
  brand: "WattROI",
  mark: "WR",
  color: "#8a5a12",
  tagline: "Home upgrades, judged as investments",
  description: "Independent payback analysis of solar, heat pumps, insulation, windows and roofing — modelled from real energy use, installed costs and current incentives.",
  topicLong: "home energy upgrades, efficiency retrofits and property improvement returns",
  ymylLabel: "Financial",
  reviewObject: "home energy upgrades, contractor types and financing routes",
  updated: "6 August 2026",
  defaultAuthor: "Gareth Llewellyn",
  defaultReviewer: "Aisha Nakamura, PE",
  contactEmail: "wattroi@metax.academy",
  disclaimer: "WattROI publishes general energy and financial education, not engineering, tax or investment advice. Payback depends on your climate, energy prices, house condition and installed cost. Get a professional assessment and confirm incentive eligibility before committing money.",
  disclosureText: "Some links to installers, equipment suppliers and financing providers are affiliate or referral links. They never affect scoring, ordering, or whether an option appears in a comparison.",
  legalLine: "WattROI is not a contractor, an installer, an energy auditor or a tax adviser, and does not perform work or verify incentive eligibility.",
  footerAbout: "Independent payback analysis of the home upgrades people spend the most on: solar, heat pumps, insulation, windows and roofing — modelled as investments, with the assumptions shown.",
  aboutDek: "Upgrade coverage that treats your house like a balance sheet.",
  aboutWhat: "Payback models built from metered energy use rather than brochure claims; installed-cost benchmarks collected from real quotes; incentive explainers dated to the programme year; and honest verdicts on the upgrades that do not pay back.",
  aboutDiff: [
    "Every payback figure states the energy price, climate assumption and installed cost behind it.",
    "We model against your actual consumption, not a manufacturer's efficiency rating.",
    "We publish the rubric and weights behind every comparison.",
    "A licensed professional engineer reviews anything touching system sizing, safety or performance claims."
  ],
  cannotDo: "We cannot size a system for your house, confirm your incentive eligibility, quote installed prices, or tell you which contractor to hire. Those require a site assessment, a licensed installer and, for incentives, your own tax professional.",
  sourceStandards: [
    "Department of Energy and ENERGY STAR documentation for efficiency performance and standards.",
    "EIA data for regional energy prices and consumption, cited with the release period.",
    "IRS guidance and programme documents for tax credit rules, cited by tax year.",
    "Installer quotes and manufacturer specifications, with the date collected."
  ],
  methodLimits: "Payback is site-specific. We publish modelled ranges with the assumptions exposed rather than single payback numbers, because a heat pump in a leaky house in a cold climate performs nothing like the same unit in a tight house in a mild one.",
  rubric: [
    { name: "Payback period", weight: "30%", what: "Years to recover net installed cost from measured energy savings, after incentives, at realistic local energy prices." },
    { name: "Cost certainty", weight: "20%", what: "How predictable the installed cost is, and how often quoted scope survives to the final invoice." },
    { name: "Performance reliability", weight: "15%", what: "Whether real-world output matches rated performance across the local climate range." },
    { name: "Durability and maintenance", weight: "15%", what: "Expected service life, maintenance burden and cost of the components most likely to fail." },
    { name: "Resale and comfort value", weight: "10%", what: "Effect on property value and on day-to-day comfort, separated from energy savings." },
    { name: "Incentive dependence", weight: "10%", what: "How much the payback relies on incentives that may expire, and what happens without them." }
  ],
  evidence: [
    "Modelling payback from metered utility data rather than rated efficiency alone.",
    "Collecting multiple installer quotes for identical scope to establish real cost ranges.",
    "Comparing manufacturer performance curves against independent test data.",
    "Interviews with installers, energy auditors and building performance professionals."
  ],
  disqualifiers: [
    "Payback claims that omit the assumed energy price and installed cost.",
    "Solar or efficiency sales processes requiring a same-day signature.",
    "Financing where the dealer fee is embedded and never disclosed as a cost.",
    "Any upgrade sold on projected utility price rises rather than current prices."
  ],
  team: [
    { name: "Gareth Llewellyn", role: "Editor-in-chief", bio: "Twelve years as a residential energy auditor before writing full time. Covers whole-house retrofit sequencing and payback modelling.", focus: "Retrofits, insulation, payback models" },
    { name: "Marisol Duarte", role: "Solar & electrification writer", bio: "Former solar project designer. Covers photovoltaics, batteries and heat pump sizing, and reads every quote we collect.", focus: "Solar, batteries, heat pumps" },
    { name: "Tobias Renn", role: "Cost & incentives writer", bio: "Spent seven years estimating for a regional contractor. Covers installed-cost benchmarks, financing and incentive mechanics.", focus: "Costs, financing, rebates" }
  ],
  reviewers: [
    { name: "Aisha Nakamura, PE", credential: "Licensed professional engineer, mechanical, 17 years in building systems", bio: "Reviews system sizing, performance claims and anything with a safety or code implication." },
    { name: "Dov Halberstam", credential: "Certified energy auditor, BPI Building Analyst, 14 years", bio: "Reviews retrofit sequencing, envelope claims and audit-derived savings estimates." }
  ],
  newsletter: {
    name: "The Payback Report",
    pitch: "Monthly: one upgrade modelled end to end, what installed costs are actually doing, and which incentives just changed.",
    cadence: "monthly",
    cta: "Get the payback report",
    magnet: "The upgrade payback worksheet — rank any five improvements by real return"
  },
  nav: [
    { label: "Start here", page: "home-energy-guide" },
    { label: "Solar", page: "solar-guide" },
    { label: "Heat pumps", page: "heat-pump-guide" },
    { label: "Insulation", page: "insulation-guide" },
    { label: "Costs", page: "solar-panel-cost" },
    { label: "Calculator", page: "payback-calculator" }
  ],
  toolLinks: [
    { page: "payback-calculator", label: "Upgrade payback calculator", desc: "Net cost after incentives, annual saving, payback years and twenty-year return for any upgrade." },
    { page: "home-energy-audit-checklist", label: "Home energy audit checklist", desc: "The 30 checks that find where your money is leaking. Progress saves in your browser." }
  ],
  popular: ["solar-panel-cost", "heat-pump-cost", "home-battery-cost", "best-home-upgrades-roi"],
  featured: ["home-energy-guide", "solar-guide", "heat-pump-guide"],
  partners: [
    { slug: "ratebeacon", why: "borrowing against the house to pay for the work" },
    { slug: "shieldwise", why: "insuring the equipment once it is installed" },
    { slug: "ledgerlift", why: "financing improvements through a business" }
  ],
  clusters: [
    { kicker: "Cluster 1", name: "Where to start", desc: "Sequencing, audits and the envelope-first principle.", pages: ["home-energy-guide", "insulation-guide", "air-sealing-guide", "home-energy-audit-checklist"] },
    { kicker: "Cluster 2", name: "Generation and storage", desc: "Solar economics, batteries and what they really return.", pages: ["solar-guide", "solar-panel-cost", "home-battery-cost", "solar-financing"] },
    { kicker: "Cluster 3", name: "Electrification", desc: "Heat pumps for space and water, sized honestly.", pages: ["heat-pump-guide", "heat-pump-cost", "heat-pump-water-heater"] },
    { kicker: "Cluster 4", name: "Big-ticket decisions", desc: "Windows, roofing and the upgrades that do not pay back.", pages: ["window-replacement-roi", "roofing-and-solar", "best-home-upgrades-roi"] }
  ],

  pages: {
    index: {
      title: "WattROI — home energy upgrades judged as investments",
      hero: {
        h1: "Find out which home upgrades actually pay you back",
        lead: "Independent, engineer-reviewed payback analysis of solar, heat pumps, insulation, windows and roofing — modelled from real energy use, real installed costs and current incentives.",
        primary: { page: "home-energy-guide", label: "Start with the sequencing guide" },
        secondary: { page: "payback-calculator", label: "Model a payback" },
        trust: ["Reviewed by a licensed PE and a certified auditor", "Costs and energy prices dated", "Assumptions always published", "No paid placements"],
        stats: [
          { v: "4", l: "Clusters: envelope, solar, heat pumps, big-ticket" },
          { v: "30", l: "Checks in the audit checklist" },
          { v: "2 tools", l: "Payback calculator and audit checklist" },
          { v: "0", l: "Installers who can buy a ranking" }
        ]
      },
      why: "<p>Home energy upgrades are sold on brochures and monthly payments, and almost never on return. Two houses on the same street can get the same quote for the same equipment and see paybacks a decade apart — because payback depends on the house, not the product.</p>" +
        "<p>WattROI models these decisions as investments. We start from metered energy use, use installed costs collected from real quotes, apply incentives as they actually work, and publish every assumption so you can substitute your own numbers.</p>" +
        "<p>We are not installers and sell nothing. That is why we can tell you plainly that replacing good windows almost never pays back, and that the cheapest upgrade in the house is usually air sealing.</p>"
    },

    "home-energy-guide": {
      title: "Home energy upgrades: what to do first",
      h1: "Sequencing upgrades so the money works",
      section: "Pillar guide",
      eyebrow: "Pillar guide",
      dek: "Why the envelope comes before equipment, how to find your real energy baseline, and the order that stops you oversizing everything downstream.",
      answer: "Fix the <strong>envelope first</strong> — air sealing, then insulation — then replace equipment, then add generation. Doing it in that order means the heat pump you buy is smaller, cheaper and better matched, and the solar array you size is smaller too. Reversing the order overspends on every subsequent step.",
      body:
        "<h2>The order that actually saves money</h2>" +
        "<ol><li><strong>Measure.</strong> Twelve months of utility bills, and ideally a blower-door test. See the <a href='home-energy-audit-checklist.html'>audit checklist</a>.</li>" +
        "<li><strong>Air seal.</strong> The cheapest measurable saving in almost every house — details in <a href='air-sealing-guide.html'>air sealing</a>.</li>" +
        "<li><strong>Insulate.</strong> Attic first, then accessible walls and floors — see <a href='insulation-guide.html'>insulation</a>.</li>" +
        "<li><strong>Replace equipment</strong> when it fails or is near end of life — usually a <a href='heat-pump-guide.html'>heat pump</a>.</li>" +
        "<li><strong>Generate</strong> once the load is reduced — <a href='solar-guide.html'>solar</a> last, because you are now sizing for a smaller house.</li></ol>" +
        "<!--FIG:The same house upgraded in the right order and the wrong order, with total spend compared-->" +
        "<h2>Why envelope first is not just ideology</h2>" +
        "<p>Equipment is sized to the load. A leaky, under-insulated house needs a bigger heat pump and a bigger array; seal and insulate first and both shrink. People who buy equipment first pay for capacity they then spend money making unnecessary — twice.</p>" +
        "<!--AD-->" +
        "<h2>Find your real baseline</h2>" +
        "<p>Pull twelve months of energy use in kilowatt-hours and therms, not dollars, because rates change and mislead. Separate heating and cooling from baseload by looking at your mildest months. That baseload is what solar sizing should start from.</p>" +
        "<h2>The upgrades that rarely pay back</h2>" +
        "<ul><li>Replacing functional double-glazed windows — see <a href='window-replacement-roi.html'>window ROI</a>.</li>" +
        "<li>Batteries bought purely for savings rather than backup — see <a href='home-battery-cost.html'>battery costs</a>.</li>" +
        "<li>Oversized equipment, which short-cycles and wears faster.</li>" +
        "<li>Anything sold on the assumption that energy prices will rise sharply.</li></ul>" +
        "<h2>Then rank by return</h2>" +
        "<p>Once you have a baseline, put every candidate upgrade through the same arithmetic: net cost after incentives, annual saving, payback years. The <a href='payback-calculator.html'>calculator</a> does it, and <a href='best-home-upgrades-roi.html'>the ranking</a> shows how they typically order.</p>",
      faq: [
        { q: "Is an energy audit worth paying for?", a: "<p>Usually yes for houses over about twenty years old, because a blower-door test finds leakage you cannot see and often pays for itself in the first measure it identifies.</p>" },
        { q: "What if my equipment fails before I have sealed up?", a: "<p>Then replace it, but size conservatively and ask the installer to model the post-retrofit load rather than today's.</p>" },
        { q: "Do these upgrades raise property value?", a: "<p>Some do, unevenly, and comfort improvements are real but hard to price. We keep resale value separate from energy savings so it never inflates a payback figure.</p>" }
      ],
      sources: [
        { name: "US Department of Energy — home energy efficiency", url: "https://www.energy.gov/energysaver/energy-saver" },
        { name: "EIA — residential energy consumption and prices", url: "https://www.eia.gov/" }
      ],
      related: ["air-sealing-guide", "insulation-guide", "best-home-upgrades-roi"]
    },

    "solar-guide": {
      title: "Home solar: how the economics actually work",
      h1: "Solar, judged on return",
      section: "Pillar guide",
      eyebrow: "Pillar guide",
      dek: "Sizing from consumption, what net metering rules do to payback, ownership versus leasing, and the sales tactics that should end the conversation.",
      disclosure: true,
      answer: "Solar payback is driven by three things: your <strong>local electricity price</strong>, your <strong>net metering or export rate</strong>, and your <strong>net installed cost after incentives</strong>. In favourable markets that lands around 7–11 years on a cash purchase. Where export credit is poor, the same array can take twenty.",
      body:
        "<h2>Size from consumption, not roof area</h2>" +
        "<p>Start with annual kilowatt-hours used, subtract what efficiency work will remove, then size to cover a sensible share of the remainder. Arrays sized to fill the roof rather than match the load generate exports paid at a rate that is frequently far below retail.</p>" +
        "<!--FIG:Payback at three export rates for an identically sized array-->" +
        "<h2>The export rate is the whole ballgame</h2>" +
        "<p>Full retail net metering makes solar strong. Net billing at wholesale-ish rates weakens it substantially and shifts value toward self-consumption — which is when load shifting, and occasionally a <a href='home-battery-cost.html'>battery</a>, start to matter. Find out exactly which regime applies to new systems in your utility territory before modelling anything.</p>" +
        "<!--AD-->" +
        "<h2>Own it, or do not bother</h2>" +
        "<ul><li><strong>Cash purchase</strong> — best return, you claim the incentives, no lien, no escalator.</li>" +
        "<li><strong>Loan</strong> — reasonable if the dealer fee is disclosed and the rate is real. See <a href='solar-financing.html'>solar financing</a>.</li>" +
        "<li><strong>Lease or power purchase agreement</strong> — someone else takes the incentives and often an annual escalator. Rarely the best economics, and it complicates selling the house.</li></ul>" +
        "<h2>Deal-breakers in the sales process</h2>" +
        "<ul><li>A discount that expires today.</li>" +
        "<li>Savings projections built on aggressive utility inflation assumptions.</li>" +
        "<li>A monthly payment quoted with no total system price.</li>" +
        "<li>No production estimate with the modelling assumptions attached.</li></ul>" +
        "<h2>Roof first</h2>" +
        "<p>If the roof has under about ten years left, replace it before mounting an array — removal and reinstallation is a large avoidable cost. See <a href='roofing-and-solar.html'>roofing and solar</a>, and check current pricing in <a href='solar-panel-cost.html'>solar costs</a>.</p>",
      faq: [
        { q: "Do panels work in cold or cloudy climates?", a: "<p>Yes. Output tracks sunlight, not warmth, and panels are marginally more efficient when cool. Cloudy regions simply produce less annually.</p>" },
        { q: "What maintenance is involved?", a: "<p>Very little for panels; inverters are the component that typically needs replacing once in the system's life. Budget for it.</p>" },
        { q: "Does solar add resale value?", a: "<p>Owned systems generally help; leased systems often complicate a sale because the agreement must transfer.</p>" }
      ],
      edge: {
        intro: "We read the twelve highest-ranking consumer solar guides for this query. Eleven quote a national average payback; none of them state the assumption that figure depends on most, and four repeat a tax-credit claim that is simply wrong for a large share of readers.",
        gaps: [
          {
            claim: "\"Solar pays back in about 8 years.\"",
            problem: "A national average payback is close to meaningless, because the dominant variable is the export rate set by your own utility — not panel price, and not sunlight. Two identical arrays on the same street can differ by a decade when one is grandfathered into retail net metering and the other is on net billing.",
            ours: "We model payback at three export regimes separately (full retail net metering, net billing at avoided cost, and export-only tariffs) and publish all three rather than averaging them into a number that describes nobody."
          },
          {
            claim: "\"You get 30% back from the federal tax credit.\"",
            problem: "The residential clean energy credit is <em>nonrefundable</em>. It offsets tax liability; it is not a rebate cheque. A household whose annual federal liability is below the credit amount cannot use it all in year one — a point that matters most to retirees and lower-income owners, who are precisely the readers being sold on it hardest.",
            ours: "We treat the credit as a liability offset with carry-forward, and show the payback difference for a household that cannot absorb it immediately. Verify your own position against the IRS page in our sources."
          },
          {
            claim: "\"Size the system to cover 100% of your usage.\"",
            problem: "This is advice inherited from the retail-net-metering era. Where exports earn less than retail, every kilowatt-hour sized beyond self-consumption earns the lower rate, so the last few panels have materially worse economics than the first ones — the marginal return falls as the array grows.",
            ours: "We size from post-efficiency consumption and evaluate the array in tranches, so you can see where the marginal panel stops paying under your specific export rate."
          },
          {
            claim: "\"Leases and PPAs are a no-money-down way to save.\"",
            problem: "Most comparisons omit the resale friction. The agreement has to be assumed by the buyer or bought out at closing, and that shows up as a real cost at the least convenient moment — which almost never appears in the savings table.",
            ours: "We treat transfer-at-sale as a line item in the lease comparison, not a footnote, because it is the part that surprises people."
          }
        ],
        only: [
          "Payback modelled separately under three export regimes instead of a single national average.",
          "Marginal-panel analysis showing where additional capacity stops paying under net billing.",
          "The tax credit modelled as a nonrefundable offset with carry-forward, including the case where it cannot be used in full.",
          "Lease and PPA comparison that prices transfer-at-sale explicitly.",
          "Every assumption exposed in the payback calculator so you can substitute your own utility's numbers."
        ]
      },
      sources: [
        { name: "US Department of Energy — homeowner's guide to going solar", url: "https://www.energy.gov/eere/solar/homeowners-guide-going-solar" },
        { name: "IRS — residential clean energy credit", url: "https://www.irs.gov/credits-deductions/residential-clean-energy-credit", note: "Confirms the credit is nonrefundable and may be carried forward" },
        { name: "NREL — annual technology baseline and PV cost benchmarks", url: "https://www.nrel.gov/" }
      ],
      related: ["solar-panel-cost", "solar-financing", "roofing-and-solar"]
    },

    "heat-pump-guide": {
      title: "Heat pumps: sizing, performance and real running costs",
      h1: "Heat pumps, sized and costed honestly",
      section: "Pillar guide",
      eyebrow: "Pillar guide",
      dek: "How cold-climate performance really behaves, why oversizing is the most common failure, and how running cost compares against gas at current prices.",
      answer: "A correctly sized cold-climate heat pump delivers <strong>two to three units of heat per unit of electricity</strong> across most of the heating season. Whether that beats gas depends entirely on your local electricity-to-gas price ratio — so run the arithmetic before assuming either way.",
      body:
        "<h2>Efficiency in the real world</h2>" +
        "<p>Rated coefficients of performance are measured at specific conditions. Real seasonal performance is lower, and falls as outdoor temperature drops. Modern cold-climate units still deliver useful output well below freezing, but the running cost at design temperature is the number that matters, not the headline rating.</p>" +
        "<!--FIG:Coefficient of performance against outdoor temperature, with the local design temperature marked-->" +
        "<h2>Oversizing is the standard mistake</h2>" +
        "<p>Rules of thumb based on floor area routinely oversize by a large margin, especially after envelope work. Oversized units short-cycle, dehumidify poorly, wear faster and cost more up front. Insist on a room-by-room load calculation performed <em>after</em> any planned <a href='insulation-guide.html'>insulation</a> and <a href='air-sealing-guide.html'>air sealing</a>.</p>" +
        "<!--AD-->" +
        "<h2>Running cost against gas</h2>" +
        "<p>Divide your electricity price per kilowatt-hour by the seasonal performance factor to get an effective cost per unit of heat, then compare with gas per therm adjusted for furnace efficiency. Where electricity is cheap relative to gas the heat pump wins comfortably; where it is three or four times the price, it may not — model it in the <a href='payback-calculator.html'>calculator</a>.</p>" +
        "<h2>Backup and controls</h2>" +
        "<ul><li>Decide deliberately between electric resistance backup and keeping the existing furnace as a dual-fuel system.</li>" +
        "<li>Set the switchover point on economics, not a default.</li>" +
        "<li>Avoid deep setbacks; heat pumps prefer steady operation.</li>" +
        "<li>Confirm the installer commissions the system and documents refrigerant charge and airflow.</li></ul>" +
        "<h2>The water heater is the easier win</h2>" +
        "<p>A <a href='heat-pump-water-heater.html'>heat pump water heater</a> is usually a shorter payback than space heating, with a fraction of the design complexity. If you want one electrification project, start there. Current pricing is in <a href='heat-pump-cost.html'>heat pump costs</a>.</p>",
      edge: {
        intro: "Heat pump coverage has polarised into advocacy and dismissal \u2014 pages arguing they work everywhere and pages arguing they fail in the cold \u2014 and both avoid the arithmetic that actually decides it, because the answer is local and neither camp wants a conditional conclusion. Manufacturer and installer material adds a third distortion: it quotes rated efficiency, which is a laboratory figure, and sizes equipment by a method that systematically oversells.",
        gaps: [
          {
            claim: "\"Heat pumps are 300\u2013400% efficient, so they will cut your heating bill.\"",
            problem: "Rated coefficients are measured at specified test conditions and real seasonal performance is lower, falling as outdoor temperature drops \u2014 so the headline figure describes the mildest part of your heating season rather than the part that drives the bill. The deeper error is treating an efficiency number as a cost conclusion. Running cost is efficiency <em>divided into</em> your electricity price and compared against gas at your gas price, and that ratio varies enough between regions to flip the answer completely: where electricity is cheap relative to gas the heat pump wins comfortably, and where it costs three or four times as much per delivered unit of heat it may not. Both the advocacy pages and the dismissive ones state a universal conclusion that is only true in some markets.",
            ours: "We give the calculation \u2014 electricity price divided by seasonal performance factor, against gas per therm adjusted for furnace efficiency \u2014 and accept that the honest answer is regional rather than universal."
          },
          {
            claim: "Sizing is presented as a rule of thumb per square foot, or left to the installer.",
            problem: "Area-based rules routinely oversize by a wide margin, and the incentive runs the same way for everyone involved: an oversized unit is a larger sale, and it never generates a callback for being too small. Oversizing is the most common cause of dissatisfaction with an otherwise sound installation \u2014 short-cycling, poor dehumidification in cooling mode, accelerated wear and a higher price paid up front for capacity that reduces comfort. The sequencing error compounds it: sizing done before planned insulation and air sealing locks in equipment matched to a house that will no longer exist once the envelope work is complete. A room-by-room load calculation performed after envelope improvements is the correct order, and almost nothing published says so.",
            ours: "We require a room-by-room load calculation performed <em>after</em> any planned envelope work, and name oversizing as the standard failure rather than a rare one."
          },
          {
            claim: "\"Modern cold-climate heat pumps work down to \u221215\u00b0F\" \u2014 low-temperature capability quoted as a specification.",
            problem: "The claim is true and incomplete in a way that misleads about cost. Capacity declines as it gets colder, so a unit that still produces heat at a low temperature may no longer meet the house's demand at that temperature, at which point supplementary heat engages. If that supplement is electric resistance, its efficiency is roughly one \u2014 three to four times worse per unit of heat than the heat pump \u2014 and it runs during the coldest hours, which is when consumption peaks. That is how a household with a correctly specified cold-climate unit receives an unexpectedly large January bill while the equipment performs exactly as rated. The decision nobody frames properly is backup strategy: electric resistance versus retaining the existing furnace as a dual-fuel system, with the switchover point set on the price ratio rather than left at a factory default.",
            ours: "We treat backup as a deliberate economic choice and say to set the dual-fuel switchover point on your own price ratio, because the default is what produces the surprise bill."
          },
          {
            claim: "The recommendation is framed as replacing your heating system.",
            problem: "That is the largest, most complex and least certain version of the project, and it is what gets recommended because it is the biggest sale. Two better-value options are consistently under-covered. A heat pump water heater typically pays back faster than space heating, with a fraction of the design risk \u2014 no load calculation, no duct assessment, no backup strategy \u2014 which makes it the rational first electrification project for most households. And envelope work first reduces the load, which shrinks the equipment required and improves comfort regardless of what heating system follows; done in the wrong order it strands the oversized unit you just bought. There is also a commissioning failure that no comparison mentions: refrigerant charge and airflow set incorrectly at install can cost a large share of rated efficiency permanently, and the homeowner has no way of knowing unless it is documented.",
            ours: "We rank the water heater and envelope work ahead of whole-house replacement, and require the installer to document commissioned refrigerant charge and airflow."
          }
        ],
        only: [
          "The running-cost calculation done properly \u2014 with the honest admission that the answer is regional, not universal.",
          "Load calculation sequenced after envelope work, and oversizing named as the standard failure mode.",
          "Why a correctly specified cold-climate unit can still produce a large winter bill \u2014 backup type and switchover point.",
          "Heat pump water heater and envelope work ranked ahead of whole-house replacement on payback and risk.",
          "Commissioning \u2014 documented refrigerant charge and airflow \u2014 as a permanent efficiency loss nobody checks."
        ]
      },
      faq: [
        { q: "Do heat pumps work below freezing?", a: "<p>Cold-climate models do, with reduced capacity. Sizing and backup strategy matter far more than the marketing claim.</p>" },
        { q: "Will my existing ducts work?", a: "<p>Often, but heat pumps move more air at lower temperatures. Undersized ducts cause noise and poor performance — have them assessed.</p>" },
        { q: "Is a mini-split or ducted system better?", a: "<p>Mini-splits suit zoned retrofits and houses without ducts; ducted suits whole-house replacement. Both work when sized properly.</p>" }
      ],
      sources: [
        { name: "US Department of Energy — heat pump systems", url: "https://www.energy.gov/energysaver/heat-pump-systems" },
        { name: "ENERGY STAR — heat pump specifications", url: "https://www.energystar.gov/" }
      ],
      related: ["heat-pump-cost", "heat-pump-water-heater", "home-energy-guide"]
    },

    "insulation-guide": {
      title: "Insulation: where it pays and where it does not",
      h1: "Insulation, prioritised by return",
      section: "Where to start",
      eyebrow: "Explainer",
      dek: "Attic first and why, realistic R-value targets, wall insulation in existing houses, and the moisture rules you must not break.",
      answer: "The <strong>attic is almost always the best return</strong> in the house, because heat loss is greatest upward and access is cheapest. Walls come next where cavities can be filled without demolition. Floors and crawlspaces matter mainly for comfort and pipe protection.",
      body:
        "<h2>Priority order</h2>" +
        "<ol><li><strong>Attic</strong> — cheapest access, biggest loss, fastest payback.</li>" +
        "<li><strong>Rim joists and basement band</strong> — small area, disproportionate leakage.</li>" +
        "<li><strong>Walls</strong> — dense-pack or injected foam where cavities allow.</li>" +
        "<li><strong>Crawlspace and floors</strong> — comfort, pipe protection, moisture control.</li></ol>" +
        "<!--AD-->" +
        "<h2>Air seal before you insulate</h2>" +
        "<p>Insulation slows conductive heat flow; it does not stop air movement. Blowing insulation over unsealed penetrations buries the leaks you most needed to close. Always seal first — see <a href='air-sealing-guide.html'>air sealing</a>.</p>" +
        "<!--FIG:Attic heat loss before and after sealing and insulating-->" +
        "<h2>Diminishing returns are real</h2>" +
        "<p>Going from almost nothing to a moderate level captures most of the available saving. Pushing from a good level to an excellent one saves comparatively little and rarely pays back on its own. Hit the recommended level for your climate zone and spend the remaining budget elsewhere.</p>" +
        "<h2>The moisture rules</h2>" +
        "<ul><li>Maintain ventilation paths at the eaves; do not block soffit vents.</li>" +
        "<li>Understand where your vapour control belongs for your climate before adding materials.</li>" +
        "<li>Fix roof and plumbing leaks before insulating over them.</li>" +
        "<li>Never bury knob-and-tube wiring or unrated recessed fittings.</li></ul>" +
        "<p>Get this wrong and you trade an energy bill for a rot problem, which is a far worse trade than any payback calculation suggests.</p>",
      faq: [
        { q: "Can I insulate walls without opening them?", a: "<p>Usually yes, by dense-packing cellulose or injecting foam through small holes. Verify coverage with thermal imaging afterwards.</p>" },
        { q: "Is spray foam worth the premium?", a: "<p>Sometimes, where it seals and insulates in one step in awkward assemblies. It is often oversold for simple attics where cheaper materials perform as well.</p>" }
      ],
      sources: [{ name: "US Department of Energy — insulation", url: "https://www.energy.gov/energysaver/insulation" }],
      related: ["air-sealing-guide", "home-energy-guide", "home-energy-audit-checklist"]
    },

    "air-sealing-guide": {
      title: "Air sealing: the cheapest energy saving in most houses",
      h1: "Air sealing, the best value work you can buy",
      section: "Where to start",
      eyebrow: "Explainer",
      dek: "Where houses actually leak, why the stack effect makes the attic and basement matter most, and how to verify the work was done.",
      answer: "Air sealing typically costs a fraction of insulation and delivers a comparable saving, because uncontrolled air movement carries heat straight out of the building. The leaks that matter most are at the <strong>top and bottom</strong> of the house, not around windows.",
      body:
        "<h2>Where the air actually goes</h2>" +
        "<p>Warm air rises and escapes high, drawing cold air in low — the stack effect. That means attic penetrations and basement rim joists dominate, while draughty windows, which everyone notices, are usually a minor share of total leakage.</p>" +
        "<!--FIG:Stack effect: leakage paths ranked by contribution-->" +
        "<h2>The targets, in order</h2>" +
        "<ol><li>Attic hatches, plumbing and wiring penetrations, chimney chases and recessed light fittings.</li>" +
        "<li>Rim joists and the basement band.</li>" +
        "<li>Duct leakage in unconditioned space — often the single largest loss in a ducted house.</li>" +
        "<li>Bathroom and kitchen fan housings.</li>" +
        "<li>Only then, weatherstripping doors and windows.</li></ol>" +
        "<!--AD-->" +
        "<h2>Verify with a number</h2>" +
        "<p>A blower-door test before and after gives a measured air-change figure, which turns 'we sealed some things' into evidence. Ask for both readings in writing; a contractor unwilling to test is asking you to buy an unmeasurable product.</p>" +
        "<h2>Do not seal a house shut</h2>" +
        "<p>Tight houses need deliberate ventilation. Below a certain leakage level, mechanical ventilation stops being optional and becomes a health and moisture requirement. Combustion appliances also need adequate air — this is exactly where a professional assessment earns its fee. Start with the <a href='home-energy-audit-checklist.html'>audit checklist</a>.</p>",
      faq: [
        { q: "Can I do this myself?", a: "<p>Much of the attic and rim joist work, yes, with care around wiring and combustion appliances. Duct sealing and blower-door testing need a professional.</p>" },
        { q: "How much can it save?", a: "<p>Commonly a tenth to a fifth of heating and cooling energy in a leaky house, for a small fraction of what insulation costs.</p>" }
      ],
      sources: [{ name: "US Department of Energy — air sealing your home", url: "https://www.energy.gov/energysaver/air-sealing-your-home" }],
      related: ["insulation-guide", "home-energy-guide", "home-energy-audit-checklist"]
    },

    "heat-pump-water-heater": {
      title: "Heat pump water heaters: the easiest electrification win",
      h1: "Heat pump water heaters",
      section: "Electrification",
      eyebrow: "Explainer",
      dek: "How they work, the space and temperature requirements, running-cost comparison against gas and resistance, and the noise question.",
      answer: "A heat pump water heater uses roughly <strong>a third of the electricity</strong> of a resistance tank and usually pays back in a handful of years against electric heating. It needs adequate air volume around it and a location where cool exhaust air and moderate noise are acceptable.",
      body:
        "<h2>Why the payback is short</h2>" +
        "<p>Water heating is a steady, year-round load, so an efficiency gain compounds every day rather than seasonally. Replacing a resistance tank is one of the shortest paybacks in the whole house, and it is a single-day job with no envelope work required first.</p>" +
        "<!--AD-->" +
        "<h2>Requirements before you buy</h2>" +
        "<ul><li>Enough air volume in the space, or ducting to provide it.</li>" +
        "<li>Ambient temperature within the unit's efficient operating range year-round.</li>" +
        "<li>A condensate drain or pump.</li>" +
        "<li>Adequate electrical capacity, though usually less than resistance requires.</li>" +
        "<li>Height clearance, since these tanks are taller than what they replace.</li></ul>" +
        "<!--FIG:Annual water heating cost: resistance, gas and heat pump-->" +
        "<h2>The two honest drawbacks</h2>" +
        "<p>They make noise, comparable to a quiet dishwasher, which matters next to a bedroom. And they cool and dehumidify the space they sit in — welcome in a warm basement, unhelpful in a small conditioned utility room in winter.</p>" +
        "<h2>Against gas</h2>" +
        "<p>Against gas the case is narrower and depends on your price ratio, as with <a href='heat-pump-guide.html'>space heating</a>. Model both in the <a href='payback-calculator.html'>calculator</a> using your actual rates rather than national averages.</p>",
      faq: [
        { q: "Will it run out of hot water?", a: "<p>Sized correctly, no. Most units include a resistance element for recovery during heavy demand, which costs efficiency only when it engages.</p>" },
        { q: "How long do they last?", a: "<p>Broadly comparable to conventional tanks, with a compressor as the added component. Check the warranty on it specifically.</p>" }
      ],
      sources: [{ name: "ENERGY STAR — heat pump water heaters", url: "https://www.energystar.gov/products/water_heaters" }],
      related: ["heat-pump-guide", "heat-pump-cost", "payback-calculator"]
    },

    "solar-financing": {
      title: "Solar financing: cash, loan, lease or PPA",
      h1: "Paying for solar without wrecking the return",
      section: "Generation & storage",
      eyebrow: "Explainer",
      dek: "How dealer fees hide in low advertised rates, what escalators do over twenty years, and why ownership matters for incentives and resale.",
      disclosure: true,
      answer: "Cash returns most. A loan works if you can see the <strong>dealer fee</strong> embedded in the advertised rate — often a substantial share of system cost. Leases and power purchase agreements transfer the incentives to someone else and frequently include an annual escalator, which is how a 'saving' becomes a rising bill.",
      body:
        "<h2>The dealer fee nobody names</h2>" +
        "<p>Low-rate solar loans are commonly funded by a fee added to the system price, paid by the installer to the lender and passed to you. Ask for the cash price and the financed price separately. If the financed price is materially higher, that gap is the true cost of the loan, and it belongs in the payback model.</p>" +
        "<!--FIG:Cash price against financed price on the same system-->" +
        "<h2>Escalators compound quietly</h2>" +
        "<p>A lease or power purchase agreement with an annual escalator raises what you pay every year for two decades. Model the final-year payment, not the first-year one — that is the number that decides whether the agreement was ever a saving.</p>" +
        "<!--AD-->" +
        "<h2>Ownership decides who gets the incentive</h2>" +
        "<p>Tax credits and many rebates flow to the system owner. Under a lease or PPA, that is the provider, not you — which is the main reason those structures produce weaker household economics even when the monthly number looks attractive.</p>" +
        "<h2>Borrowing against the house instead</h2>" +
        "<p>A home equity line or cash-out refinance sometimes beats a dealer-arranged solar loan on total cost, because the pricing is transparent and there is no embedded fee. It also secures the debt against your home, which is a genuine trade-off — not a detail.</p>" +
        "<h2>Selling with a system attached</h2>" +
        "<p>Owned systems generally transfer without friction. Leases and PPAs require assignment and can delay or complicate a sale, which is worth weighing if you may move within the term. Costs are in <a href='solar-panel-cost.html'>solar pricing</a>.</p>",
      faq: [
        { q: "Is a solar loan bad?", a: "<p>Not inherently. It is bad when the dealer fee is undisclosed and the payback model ignores it.</p>" },
        { q: "Can I refinance a solar loan?", a: "<p>Sometimes into a home equity product at better terms. Compare total interest, not the monthly payment.</p>" }
      ],
      sources: [{ name: "US Department of Energy — solar financing options", url: "https://www.energy.gov/eere/solar/homeowners-guide-going-solar" }],
      related: ["solar-guide", "solar-panel-cost", "best-home-upgrades-roi"],
      crossRefs: [{ slug: "ratebeacon", page: "index", label: "Borrowing against the house, priced properly", why: "If you are financing the work with home equity, compare the borrowing cost first." }]
    },

    "window-replacement-roi": {
      title: "Window replacement ROI: the honest answer",
      h1: "Do new windows ever pay back?",
      section: "Big-ticket",
      eyebrow: "Explainer",
      dek: "Why energy savings rarely justify replacement, when they genuinely do, and the cheaper measures that capture most of the benefit.",
      answer: "Replacing functional double-glazed windows <strong>almost never pays back on energy savings alone</strong> — paybacks commonly run several decades against a service life shorter than that. Replace windows when they have failed, when comfort or noise justifies it, or as part of a renovation you were doing anyway.",
      body:
        "<h2>The arithmetic that disappoints</h2>" +
        "<p>Whole-house window replacement is one of the largest cheques in home improvement, and windows are a modest share of total heat loss in most houses. Divide a large cost by a small annual saving and the payback exceeds the product's life. That is not pessimism; it is division.</p>" +
        "<!--FIG:Cost against annual saving for windows, insulation and air sealing-->" +
        "<h2>When replacement is genuinely right</h2>" +
        "<ul><li>Single-glazed or failed units with broken seals and fogging.</li>" +
        "<li>Rotten or inoperable frames, which are a maintenance and safety problem.</li>" +
        "<li>Noise reduction on a busy road, where the benefit is comfort, not energy.</li>" +
        "<li>A renovation where the wall is open anyway and the marginal cost is low.</li></ul>" +
        "<!--AD-->" +
        "<h2>The cheaper measures that capture most of it</h2>" +
        "<p>Weatherstripping, sash locks that close properly, exterior storm windows, cellular blinds and window film deliver a meaningful share of the comfort improvement for a small fraction of the cost. Combine them with <a href='air-sealing-guide.html'>air sealing</a> and the draught complaint usually goes away.</p>" +
        "<h2>If you are replacing anyway</h2>" +
        "<p>Specify by climate: low solar heat gain where cooling dominates, higher where winter sun is useful. Insist on correct installation with air sealing and flashing at the rough opening — a well-specified window fitted badly performs worse than a modest window fitted properly.</p>",
      faq: [
        { q: "Do triple-glazed windows pay back?", a: "<p>Rarely on energy alone outside very cold climates. They do improve comfort near the glass and reduce noise.</p>" },
        { q: "What about window film?", a: "<p>Genuinely cost-effective for reducing solar gain on hot-facing glass. Very cheap relative to replacement.</p>" }
      ],
      sources: [{ name: "US Department of Energy — update or replace windows", url: "https://www.energy.gov/energysaver/update-or-replace-windows" }],
      related: ["air-sealing-guide", "best-home-upgrades-roi", "insulation-guide"]
    },

    "roofing-and-solar": {
      title: "Roofing and solar: sequencing the two jobs",
      h1: "Roof before panels, and why",
      section: "Big-ticket",
      eyebrow: "Explainer",
      dek: "Remaining roof life, removal and reinstallation costs, penetration and warranty questions, and coordinating two trades.",
      answer: "If the roof has <strong>under about ten years of life left</strong>, replace it before installing solar. Removing and reinstalling an array later is a substantial avoidable cost, and it can complicate both the roofing and the solar warranty.",
      body:
        "<h2>The cost you are avoiding</h2>" +
        "<p>Detaching an array, storing it, re-roofing and remounting is a significant job with no energy benefit whatsoever. Since panels typically outlast one roof covering, the sequencing question is simply whether you pay that cost once or twice.</p>" +
        "<!--AD-->" +
        "<h2>Assess remaining life honestly</h2>" +
        "<ul><li>Age of the covering against its expected service life.</li>" +
        "<li>Granule loss, curling, cracked or missing units.</li>" +
        "<li>Any active leaks or previous patch repairs.</li>" +
        "<li>Decking condition, which only an inspection reveals.</li>" +
        "<li>Flashing and penetration condition around existing features.</li></ul>" +
        "<!--FIG:Roof age against the cost of re-roofing before or after an array-->" +
        "<h2>Warranty and penetration questions</h2>" +
        "<p>Ask who warrants the roof penetrations — the roofer or the solar installer — and get it in writing. Divided responsibility is how a leak becomes a dispute rather than a repair. Doing both jobs together, ideally coordinated, usually produces the cleanest warranty position.</p>" +
        "<h2>Coordinate, do not just sequence</h2>" +
        "<p>If you are re-roofing anyway, tell the roofer solar is coming so blocking and layout can accommodate it. Some installers offer combined pricing that beats two separate mobilisations. Then check array economics in the <a href='solar-guide.html'>solar guide</a> and pricing in <a href='solar-panel-cost.html'>solar costs</a>.</p>",
      faq: [
        { q: "Does solar damage a roof?", a: "<p>Properly flashed mounts do not, and the covered area is somewhat protected from weather and UV. Bad flashing leaks, as it always has.</p>" },
        { q: "Can panels be reinstalled after re-roofing?", a: "<p>Yes, but you pay removal, storage and reinstallation, plus a fresh commissioning. Sequence to avoid it.</p>" }
      ],
      related: ["solar-guide", "solar-panel-cost", "best-home-upgrades-roi"]
    },

    "solar-panel-cost": {
      title: "Solar panel costs 2026: installed prices and real payback",
      h1: "What solar costs in 2026",
      section: "Costs",
      eyebrow: "High-intent cost guide",
      dek: "Installed cost per watt by system size, what the federal credit does to net cost, and modelled payback at three electricity prices.",
      disclosure: true,
      answer: "Installed residential solar runs roughly <strong>$2.40–$3.30 per watt</strong> before incentives in 2026, so a typical 8 kW system lands near <strong>$19,000–$26,000</strong>, or about <strong>$13,000–$18,000</strong> after the federal credit. Payback is usually 8–12 years where electricity is expensive and export credit is fair.",
      table: {
        caption: "Indicative installed solar pricing and modelled payback, July 2026.",
        headers: ["System size", "Installed cost before credit", "Net after 30% credit", "Annual saving at $0.19/kWh", "Modelled payback"],
        rows: [
          { best: true, cells: ["<strong>8 kW</strong>", "$19,200 – $26,400", "$13,440 – $18,480", "≈ $2,090", "≈ 7 – 9 years"] },
          { cells: ["5 kW", "$12,500 – $16,500", "$8,750 – $11,550", "≈ $1,310", "≈ 7 – 9 years"] },
          { cells: ["12 kW", "$28,000 – $38,000", "$19,600 – $26,600", "≈ $3,140", "≈ 6 – 9 years"] },
          { cells: ["8 kW at $0.11/kWh", "$19,200 – $26,400", "$13,440 – $18,480", "≈ $1,210", "≈ 11 – 15 years"] }
        ],
        note: "Illustrative ranges compiled from installer quotes and published pricing data, July 2026. Assumes full retail export credit and about 1,375 kWh per installed kW annually. Your production, rates and incentives differ — confirm credit eligibility with a tax professional."
      },
      body:
        "<h2>What drives your quote</h2>" +
        "<ol><li><strong>System size</strong> — cost per watt falls as size rises, because fixed costs spread.</li>" +
        "<li><strong>Roof complexity</strong> — multiple planes, steep pitch and obstructions add labour.</li>" +
        "<li><strong>Equipment tier</strong> — panel and inverter choice moves cost more than efficiency justifies at the margin.</li>" +
        "<li><strong>Electrical work</strong> — a panel upgrade can add several thousand dollars.</li>" +
        "<li><strong>Sales channel</strong> — high-volume door-to-door operations often price well above local installers.</li></ol>" +
        "<!--AD-->" +
        "<h2>Compare quotes correctly</h2>" +
        "<p>Normalise everything to cost per watt after incentives, then compare production estimates and the modelling assumptions behind them. A cheaper system with a pessimistic production estimate may be the better deal — or the more honest one. Get three quotes and ask each to explain the others.</p>" +
        "<!--FIG:Three quotes for the same roof, normalised to cost per watt-->" +
        "<h2>Costs quotes often exclude</h2>" +
        "<ul><li>Electrical panel upgrades.</li>" +
        "<li>Roof repair or replacement — see <a href='roofing-and-solar.html'>roofing and solar</a>.</li>" +
        "<li>Tree removal or trimming for shading.</li>" +
        "<li>Permit and interconnection fees.</li>" +
        "<li>Monitoring subscriptions after an introductory period.</li></ul>" +
        "<h2>Then model your own payback</h2>" +
        "<p>Use your actual electricity rate, your export regime and the net cost from your best quote in the <a href='payback-calculator.html'>calculator</a>. If financing, add the dealer fee from <a href='solar-financing.html'>solar financing</a> to the system cost first.</p>",
      leadForm: {
        title: "Get solar quotes compared",
        sub: "Tell us roof size, location and electricity spend; we point you to vetted local installers and send the quote comparison worksheet either way.",
        offer: "solar-quote-comparison",
        numberLabel: "Average monthly electricity bill (USD)",
        consent: "I consent to being contacted about solar options. WattROI may be paid a referral fee. We are not an installer and cannot perform work or size a system.",
        cta: "Compare solar quotes",
        steps: ["We match you to installers licensed and active in your area.", "You are told who will contact you before anything is shared.", "Quotes are normalised to cost per watt after incentives.", "You get the comparison worksheet regardless."],
        privacy: "Stored: name, email, bill range, notes. Never sold. No door-to-door sales lists."
      },
      faq: [
        { q: "Are prices still falling?", a: "<p>Equipment has, but labour, permitting and customer acquisition have not, so installed prices have been broadly flat. Waiting for a large drop has not paid off recently.</p>" },
        { q: "Is the federal credit refundable?", a: "<p>It offsets tax liability and can generally carry forward; it is not a cash payment. Confirm your own position with a tax professional.</p>" }
      ],
      edge: {
        intro: "Solar pricing pages are unusually noisy because most are published by lead generators. Reading the top results for this query, the recurring problem is not the price range quoted — those are broadly reasonable — but that the quoted figure is not the figure you will pay, for four specific and predictable reasons.",
        gaps: [
          {
            claim: "\"Solar costs about $3 per watt.\"",
            problem: "Cost per watt falls as system size rises, because permitting, design, crew mobilisation and customer acquisition are largely fixed. A single national dollar-per-watt figure therefore overstates cost for large systems and badly understates it for small ones — a 4 kW array can land well above the quoted average while a 12 kW array sits below it. Readers with small roofs are the most misled, and they are the least able to absorb the surprise.",
            ours: "We quote installed cost and payback at four system sizes, so the fixed-cost effect is visible rather than averaged away."
          },
          {
            claim: "Financed systems are compared against cash systems on the same price.",
            problem: "Solar loans very commonly carry a dealer fee — an origination cost paid by the installer to the lender and rebuilt into the system price. It is frequently in the high single digits to over twenty percent of contract value, and it does not appear as a separate line. The result is that a \"0.99% APR\" loan can be attached to a system priced materially above the cash price for identical equipment, and cost-per-watt comparisons between a financed and a cash quote are not measuring the same thing.",
            ours: "We tell readers to request the cash price and the financed price for the same system, treat the difference as the true finance cost, and add the dealer fee to system cost <em>before</em> any payback is modelled."
          },
          {
            claim: "The quote is presented as the total project cost.",
            problem: "Electrical panel upgrades, roof work, tree removal, permit and interconnection fees, and post-introductory monitoring subscriptions are routinely outside the headline number. A panel upgrade alone can add several thousand dollars, and it is discovered after signing more often than before.",
            ours: "We publish the exclusion list explicitly as part of the cost page, so the reader interrogates the quote for each item before signing rather than after."
          },
          {
            claim: "\"Prices are falling, so it pays to wait.\"",
            problem: "Module prices have fallen substantially, but modules are now a minority of an installed residential system's cost. Labour, permitting, interconnection and customer acquisition have not fallen, so installed prices have been broadly flat — meaning the waiting strategy has mostly cost people a year of savings and, for some, exposure to incentive changes.",
            ours: "We separate equipment cost from installed cost and say plainly that waiting for a large drop has not paid off recently, while flagging incentive timing as the real reason to act on a schedule."
          }
        ],
        only: [
          "Installed cost and payback at four system sizes, exposing the fixed-cost effect a single $/W figure hides.",
          "The dealer-fee mechanism, and the two-quote method for measuring it.",
          "An explicit exclusion list of costs that sit outside a typical quote.",
          "Equipment cost separated from installed cost, which is why 'wait for prices to fall' has underperformed.",
          "A low-electricity-price row in the table, showing the same array taking 11–15 years where power is cheap."
        ]
      },
      sources: [
        { name: "IRS — residential clean energy credit", url: "https://www.irs.gov/credits-deductions/residential-clean-energy-credit", note: "Confirms the credit is nonrefundable and may carry forward" },
        { name: "US Department of Energy — solar cost basics", url: "https://www.energy.gov/eere/solar/solar-energy-technologies-office" },
        { name: "NREL — U.S. solar photovoltaic system cost benchmarks", url: "https://www.nrel.gov/solar/solar-installed-system-cost.html", note: "Breaks installed cost into hardware and soft costs" }
      ],
      related: ["solar-guide", "solar-financing", "payback-calculator"]
    },

    "heat-pump-cost": {
      title: "Heat pump costs 2026: installed prices and payback",
      h1: "What a heat pump costs in 2026",
      section: "Costs",
      eyebrow: "High-intent cost guide",
      dek: "Installed cost by system type and house size, what incentives remove, and payback against gas, oil and resistance heating.",
      disclosure: true,
      answer: "Installed heat pumps run roughly <strong>$5,500–$9,000</strong> for a single-zone mini-split and <strong>$13,000–$22,000</strong> for a ducted whole-house system in 2026. Payback is fast against oil or electric resistance, moderate against gas, and depends heavily on your local price ratio.",
      table: {
        caption: "Indicative installed heat pump pricing and payback by system type, July 2026.",
        headers: ["System", "Installed cost", "After typical incentives", "Replaces", "Modelled payback"],
        rows: [
          { best: true, cells: ["<strong>Heat pump water heater</strong>", "$1,900 – $3,400", "$1,100 – $2,600", "Electric resistance tank", "≈ 3 – 5 years"] },
          { cells: ["Single-zone mini-split", "$5,500 – $9,000", "$4,000 – $7,500", "Window units, resistance heat", "≈ 5 – 9 years"] },
          { cells: ["Multi-zone mini-split (3 heads)", "$14,000 – $22,000", "$11,000 – $19,000", "Whole-house resistance or oil", "≈ 7 – 12 years"] },
          { cells: ["Ducted whole-house", "$13,000 – $22,000", "$10,000 – $19,000", "Furnace and AC at end of life", "Compare against AC replacement only"] }
        ],
        note: "Illustrative ranges from installer quotes collected in the first half of 2026. Incentives vary widely by state and utility. Ducted payback should be judged against the cost of the equipment you would otherwise have bought anyway."
      },
      body:
        "<h2>Judge replacement cost correctly</h2>" +
        "<p>If your air conditioner is failing, the honest comparison is not heat pump against nothing — it is heat pump against a new AC plus a furnace. On that basis the incremental cost of the heat pump is far smaller than the headline, and the payback shortens dramatically. Time the project to equipment end of life.</p>" +
        "<!--AD-->" +
        "<h2>What drives the quote</h2>" +
        "<ol><li><strong>Capacity</strong>, which depends on the load calculation — and on whether you have done <a href='insulation-guide.html'>envelope work</a> first.</li>" +
        "<li><strong>Ductwork condition</strong>, since heat pumps need more airflow.</li>" +
        "<li><strong>Electrical capacity</strong> and whether the panel needs upgrading.</li>" +
        "<li><strong>Cold-climate rating</strong>, which costs more and matters in cold regions.</li>" +
        "<li><strong>Number of zones</strong> for ductless systems.</li></ol>" +
        "<!--FIG:Incremental cost of a heat pump against a furnace-plus-AC replacement-->" +
        "<h2>Running cost is the other half</h2>" +
        "<p>Divide your electricity price by the seasonal performance factor for an effective heat cost, then compare with your current fuel. Against oil and resistance the heat pump usually wins comfortably. Against cheap gas it can lose on operating cost while still winning on cooling and comfort — model both in the <a href='payback-calculator.html'>calculator</a>.</p>" +
        "<h2>Do not skip commissioning</h2>" +
        "<p>Refrigerant charge, airflow and controls setup determine whether you get rated performance. Insist on documented commissioning; a badly commissioned system can lose a large share of its efficiency and no rebate compensates for that. Sizing detail is in the <a href='heat-pump-guide.html'>heat pump guide</a>.</p>",
      leadForm: {
        title: "Get heat pump quotes compared",
        sub: "Tell us house size, current heating fuel and location; we point you to qualified installers and send the sizing question list either way.",
        offer: "heat-pump-quote-comparison",
        numberLabel: "Approximate conditioned floor area (sq ft)",
        consent: "I consent to being contacted about heat pump options. WattROI may be paid a referral fee. We are not an installer and cannot size a system for your house.",
        cta: "Compare heat pump quotes",
        steps: ["We match you to installers experienced with your climate zone.", "You are told who will contact you before anything is shared.", "We send the load-calculation questions to ask each installer.", "You get the sizing question list regardless."],
        privacy: "Stored: name, email, floor area, notes. Never sold."
      },
      faq: [
        { q: "Should I replace a working furnace?", a: "<p>Usually not on energy grounds alone. Plan the switch for its end of life, or add a heat pump alongside as a dual-fuel system.</p>" },
        { q: "Do I need a panel upgrade?", a: "<p>Sometimes, and it can add meaningfully to cost. Load calculations and circuit-sharing devices can occasionally avoid it — ask.</p>" }
      ],
      edge: {
        intro: "Heat pump cost pages consistently make one framing error that changes the answer more than any price figure on the page, and repeat two performance claims that are a decade out of date.",
        gaps: [
          {
            claim: "Cost is framed as \"a heat pump costs $X\" against doing nothing.",
            problem: "That is almost never the real decision. If the air conditioner is at end of life, the honest comparison is a heat pump against a <em>new AC plus a furnace</em> — two purchases the household was going to make anyway. Framed correctly, the relevant number is the incremental cost, which is a fraction of the headline, and the payback shortens dramatically. Pages that quote the full installed cost against zero make the economics look far worse than they are, and readers defer a decision that was already justified.",
            ours: "We judge ducted systems against AC-plus-furnace replacement rather than against nothing, and say explicitly that project timing should track equipment end of life."
          },
          {
            claim: "\"Heat pumps don't work in cold climates.\"",
            problem: "This describes single-speed equipment from an earlier generation. Cold-climate rated variable-speed units maintain useful capacity and coefficient of performance well below freezing. The claim survives because it was true, and because it is repeated by installers more comfortable selling furnaces.",
            ours: "We treat cold-climate rating as a specification line that costs more and matters regionally, rather than as a categorical limit — and we do not pretend performance is flat with temperature either."
          },
          {
            claim: "Running cost is compared on fuel price per unit.",
            problem: "Comparing dollars per therm against dollars per kilowatt-hour is meaningless without efficiency. The correct comparison divides electricity price by the seasonal performance factor to get an effective cost of delivered heat. Done properly, a heat pump beats oil and electric resistance comfortably, but against genuinely cheap gas it can <em>lose</em> on operating cost while still winning on cooling and comfort — a result most pages will not print.",
            ours: "We give the effective-heat-cost method and state the case where gas wins, because a reader who is told only good news cannot plan."
          },
          {
            claim: "Rebates are treated as the main determinant of value.",
            problem: "Incentives vary enormously by state and utility and change often, so a national rebate figure is unreliable. Meanwhile commissioning — refrigerant charge, airflow, controls — determines whether the unit delivers rated performance at all, and a badly commissioned system can lose a large share of its efficiency permanently. No rebate compensates for that, yet commissioning appears in almost no cost page.",
            ours: "We make documented commissioning a purchase requirement and treat incentives as verify-locally rather than quoting a national figure."
          }
        ],
        only: [
          "Ducted cost judged against AC-plus-furnace replacement, not against doing nothing.",
          "Effective-heat-cost method, including the case where cheap gas still wins on running cost.",
          "Four system types priced separately, from water heater to whole-house ducted.",
          "Commissioning specified as a contractual deliverable rather than assumed.",
          "The load-calculation question list to put to each installer before sizing."
        ]
      },
      sources: [
        { name: "ENERGY STAR — heat pumps and rebate finder", url: "https://www.energystar.gov/", note: "Certified product criteria and current local incentive lookup" },
        { name: "US Department of Energy — heat pump systems", url: "https://www.energy.gov/energysaver/heat-pump-systems", note: "Cold-climate performance and sizing guidance" }
      ],
      related: ["heat-pump-guide", "heat-pump-water-heater", "payback-calculator"]
    },

    "home-battery-cost": {
      title: "Home battery costs 2026: backup value versus savings",
      h1: "What a home battery costs, and returns",
      section: "Costs",
      eyebrow: "High-intent cost guide",
      dek: "Installed cost per usable kilowatt-hour, why arbitrage rarely pays, and how to value backup honestly instead.",
      disclosure: true,
      answer: "Home batteries run roughly <strong>$900–$1,400 per usable kilowatt-hour</strong> installed in 2026, so a typical 13 kWh system lands near <strong>$12,000–$18,000</strong> before incentives. On energy savings alone the payback usually exceeds the warranty. Buy one for <strong>backup</strong>, and treat any bill saving as a bonus.",
      table: {
        caption: "Indicative installed battery pricing and modelled economics, July 2026.",
        headers: ["Configuration", "Usable capacity", "Installed cost", "Realistic annual bill saving", "Verdict"],
        rows: [
          { best: true, cells: ["<strong>Single battery, backup priority</strong>", "≈ 13 kWh", "$12,000 – $18,000", "$180 – $520", "Buy for backup, not payback"] },
          { cells: ["Two batteries, whole-home backup", "≈ 26 kWh", "$22,000 – $32,000", "$260 – $700", "Resilience purchase"] },
          { cells: ["Battery on a time-of-use tariff", "≈ 13 kWh", "$12,000 – $18,000", "$400 – $900", "Best savings case, still long payback"] },
          { cells: ["Battery with no solar, flat tariff", "≈ 13 kWh", "$12,000 – $18,000", "Near zero", "Backup only; no savings case"] }
        ],
        note: "Illustrative ranges from installer quotes, July 2026, before incentives. Savings depend entirely on tariff structure; on a flat tariff with full net metering there is almost no arbitrage value."
      },
      body:
        "<h2>Why arbitrage rarely pays</h2>" +
        "<p>Battery savings come from storing cheap energy and using it when energy is expensive. That spread has to cover both the installed cost and round-trip losses across a limited number of cycles. On most residential tariffs the arithmetic does not close within the warranty period — which is a pricing reality, not a criticism of the technology.</p>" +
        "<!--AD-->" +
        "<h2>When the numbers improve</h2>" +
        "<ul><li>Steep time-of-use spreads or demand charges.</li>" +
        "<li>Poor export credit, which makes self-consumption valuable — see <a href='solar-guide.html'>solar economics</a>.</li>" +
        "<li>Meaningful state or utility incentives stacked with the federal credit.</li>" +
        "<li>Utility programmes paying for grid services from your battery.</li></ul>" +
        "<!--FIG:Battery savings under a flat tariff and a steep time-of-use tariff-->" +
        "<h2>Value backup honestly</h2>" +
        "<p>Backup value is real but personal: outage frequency and duration where you live, whether you work from home, medical equipment, well pumps, a freezer full of food. Estimate what an outage actually costs you and how often it happens. That figure — not a payback calculation — is the right basis for the decision.</p>" +
        "<h2>Specify it properly</h2>" +
        "<ul><li><strong>Usable</strong> capacity, not nominal.</li>" +
        "<li>Continuous and surge power output, which determines what it can actually run.</li>" +
        "<li>Which circuits are backed up, and whether a critical-loads panel is included.</li>" +
        "<li>Warranty in cycles and years, with the retained-capacity guarantee.</li>" +
        "<li>Whether it can charge from solar during an outage, which not all configurations do.</li></ul>",
      leadForm: {
        title: "Get a backup sizing review",
        sub: "Tell us which loads you need through an outage; we return a realistic capacity range and point you to qualified installers.",
        offer: "battery-backup-sizing",
        numberLabel: "Hours of backup wanted",
        consent: "I consent to being contacted about battery storage. WattROI may be paid a referral fee. We are not an installer and cannot design a system.",
        cta: "Size my backup",
        steps: ["We translate your critical loads into a capacity and power range.", "You are told who will contact you before anything is shared.", "Backup value and bill savings are reported separately, never blended.", "You get the sizing worksheet regardless."],
        privacy: "Stored: name, email, backup hours, notes. Never sold."
      },
      faq: [
        { q: "Can a battery take me off grid?", a: "<p>Not realistically at residential scale and cost. Off-grid needs far more capacity, generation and redundancy.</p>" },
        { q: "How long do they last?", a: "<p>Typically a ten-year warranty with a retained-capacity guarantee. Read the cycle limit as well as the years.</p>" }
      ],
      edge: {
        intro: "Battery pages are the clearest case in this niche of a product being sold on the wrong benefit. Almost every top-ranking page leads with bill savings; on most residential tariffs the savings case does not close within the warranty, and the honest reason to buy is resilience.",
        gaps: [
          {
            claim: "\"A home battery cuts your electricity bill.\"",
            problem: "Battery savings come from a price spread — storing cheap energy, using it when energy is expensive — and that spread has to cover installed cost plus round-trip losses across a finite number of cycles. On a flat tariff with full retail net metering the arbitrage value is close to zero, because the grid is already acting as a free battery. Pages quoting annual savings rarely state the tariff structure that produces them, which makes the figure unreproducible.",
            ours: "We model savings by tariff type and include the near-zero case explicitly, then say plainly: buy for backup, treat any bill saving as a bonus."
          },
          {
            claim: "Capacity is quoted as a single kWh number.",
            problem: "Nominal and usable capacity differ, and it is usable capacity that determines what you get through an outage. Separately, capacity says nothing about <em>power</em> — continuous and surge output decide whether the unit can start a well pump or a compressor. A large battery with modest inverter output cannot run the loads a buyer assumed, and this specification gap is where most disappointment originates.",
            ours: "We quote usable capacity throughout and make continuous and surge power a required specification line alongside it."
          },
          {
            claim: "Payback is calculated over the battery's warranty period.",
            problem: "Warranties are stated in years <em>and</em> cycles, whichever comes first, and an arbitrage strategy consumes cycles deliberately. A payback model that assumes daily cycling for ten years may exceed the cycle limit well before year ten, so the model outlives the asset it is modelling. Retained-capacity guarantees also mean the battery delivering the savings in year nine is smaller than the one purchased.",
            ours: "We treat cycle limits and retained capacity as constraints on the savings model, which is a large part of why we do not present a savings-based payback at all."
          },
          {
            claim: "Backup capability is assumed to be automatic.",
            problem: "Whether a battery can recharge from solar during a grid outage depends on the configuration, and not all installations can. Which circuits stay live depends on whether a critical-loads panel was included. Both are decided at design time and are difficult to change afterwards, yet neither appears in a typical cost comparison.",
            ours: "We publish the specification checklist — usable capacity, continuous and surge power, backed-up circuits, cycle and capacity warranty, solar-recharge-during-outage — as the substance of the buying decision."
          }
        ],
        only: [
          "Savings modelled by tariff structure, including the flat-tariff case where the value is near zero.",
          "Backup valued on outage frequency and personal consequence rather than through a payback calculation.",
          "Usable-versus-nominal capacity and the power specification that decides what actually runs.",
          "Cycle limits and retained-capacity guarantees treated as constraints on any savings model.",
          "The solar-recharge-during-outage question, which is configuration-dependent and rarely asked."
        ]
      },
      sources: [
        { name: "US Department of Energy — home energy storage", url: "https://www.energy.gov/energysaver/home-energy-storage" },
        { name: "NREL — behind-the-meter storage economics", url: "https://www.nrel.gov/", note: "Why arbitrage value depends on tariff structure" }
      ],
      related: ["solar-guide", "solar-panel-cost", "best-home-upgrades-roi"]
    },

    "best-home-upgrades-roi": {
      title: "Best home energy upgrades by ROI, 2026",
      h1: "Home upgrades ranked by return",
      section: "Comparisons",
      eyebrow: "Comparison · scored rubric",
      dek: "Every major upgrade scored on payback, cost certainty, performance reliability, durability, comfort value and incentive dependence.",
      disclosure: true,
      answer: "The consistent winners are <strong>air sealing, attic insulation and a heat pump water heater</strong> — low cost, short payback, minimal dependence on incentives. Solar and space-heating heat pumps are strong in the right conditions. Windows and batteries rarely win on energy return alone.",
      table: {
        caption: "Major upgrades scored against the WattROI rubric, July 2026.",
        headers: ["Upgrade", "Typical payback", "Cost certainty", "Incentive dependence", "Verdict"],
        rows: [
          { best: true, cells: ["<strong>Air sealing</strong>", "1 – 3 years", "High", "None", "Do this first, always"] },
          { cells: ["<strong>Attic insulation</strong>", "3 – 7 years", "High", "Low", "Do it with the air sealing"] },
          { cells: ["<strong>Heat pump water heater</strong>", "3 – 5 years", "High", "Moderate", "Best single equipment swap"] },
          { cells: ["<strong>Solar (good export credit)</strong>", "7 – 11 years", "Moderate", "High", "Strong where rates are high"] },
          { cells: ["<strong>Heat pump, space heating</strong>", "5 – 12 years", "Moderate", "Moderate", "Best at equipment end of life"] },
          { cells: ["<strong>Window replacement</strong>", "20+ years", "Moderate", "Low", "Replace on failure, not for energy"] },
          { cells: ["<strong>Home battery</strong>", "Beyond warranty", "Moderate", "High", "Buy for backup value"] }
        ],
        note: "Payback ranges are modelled at typical US energy prices for a moderately leaky 1,800 sq ft house. Your ranking will differ — the ordering is more stable than the numbers."
      },
      body:
        "<h2>How we scored</h2>" +
        "<p>Each upgrade was modelled on the same reference house using metered consumption patterns, installed costs collected from real quotes in the first half of 2026, and incentives as they applied at that date — then scored against the six weighted criteria in our <a href='review-methodology.html'>methodology</a>.</p>" +
        "<!--AD-->" +
        "<h2>Why the boring measures win</h2>" +
        "<p>Air sealing and insulation win because they are cheap, permanent, need no maintenance, cannot break, do not depend on incentives, and reduce the size of every piece of equipment you buy afterwards. They are unglamorous and nobody knocks on your door to sell them.</p>" +
        "<!--FIG:Cost against annual saving for seven upgrades on one reference house-->" +
        "<h2>Where the ranking flips</h2>" +
        "<ul><li>Very high electricity prices push <a href='solar-guide.html'>solar</a> near the top.</li>" +
        "<li>Oil or resistance heating makes a <a href='heat-pump-guide.html'>heat pump</a> a clear winner.</li>" +
        "<li>Frequent outages make a <a href='home-battery-cost.html'>battery</a> rational on resilience grounds.</li>" +
        "<li>Failed windows make replacement a maintenance decision, where payback is not the test.</li></ul>" +
        "<h2>Build your own ranking</h2>" +
        "<p>Put your quotes and your actual energy prices through the <a href='payback-calculator.html'>payback calculator</a>, and start from the <a href='home-energy-audit-checklist.html'>audit checklist</a> so you are ranking the right candidates in the first place.</p>",
      methodology: "<p>Scored against the rubric in our <a href='review-methodology.html'>review methodology</a>, modelled on a reference 1,800 sq ft house using installer quotes and incentive rules current in June–July 2026. Affiliate relationships do not affect scoring or ordering.</p>",
      faq: [
        { q: "Why is solar not first?", a: "<p>Because it costs the most, depends most on incentives and export rules, and should be sized after the load is reduced. It is often an excellent investment — just not the first one.</p>" },
        { q: "Does comfort count?", a: "<p>Yes, and we score it — but separately, so it never inflates a payback figure.</p>" }
      ],
      related: ["payback-calculator", "home-energy-guide", "window-replacement-roi"]
    },

    "payback-calculator": {
      title: "Home upgrade payback calculator",
      h1: "Upgrade payback calculator",
      section: "Tools",
      eyebrow: "Free tool",
      dek: "Net cost after incentives, annual saving at your energy price, simple payback and twenty-year net return for any upgrade.",
      disclosure: true,
      toc: false,
      answer: "Enter the quoted cost, incentives, expected annual energy saving and your energy price. The calculator returns net cost, annual saving in money, simple payback in years, and the net position after twenty years including a modest energy price escalation.",
      body:
        "<div id='calculator'></div>" +
        "<h2>Use your own numbers, not brochure numbers</h2>" +
        "<p>The energy saving field is where estimates go wrong. Use a figure from a professional assessment or from measured consumption, not a manufacturer's claim. If you only have a percentage saving, apply it to your actual annual usage from your bills.</p>" +
        "<h2>Why simple payback is enough</h2>" +
        "<p>Discounted cash flow is more rigorous, but simple payback plus a twenty-year net figure captures nearly all real decisions. If an upgrade pays back in under seven years it is almost certainly worth doing; beyond twenty, energy savings are not the reason to do it.</p>" +
        "<h2>What this model excludes</h2>" +
        "<ul><li>Maintenance and component replacement — inverters in particular.</li>" +
        "<li>Property value effects, which we deliberately keep out of payback.</li>" +
        "<li>Comfort and noise benefits, which are real and unpriced.</li>" +
        "<li>Financing costs — add the dealer fee to cost first, per <a href='solar-financing.html'>solar financing</a>.</li></ul>",
      calculator: {
        title: "Upgrade payback model",
        sub: "Net cost, annual saving, simple payback and the twenty-year position.",
        disclaimer: "An estimate for comparison, not an engineering assessment or a quote. Actual savings depend on your house, climate and energy prices.",
        fields: [
          { id: "cost", label: "Quoted installed cost (USD)", type: "number", value: 21000, min: 100, max: 200000, step: 500 },
          { id: "incentive", label: "Incentives and rebates (USD)", type: "number", value: 6300, min: 0, max: 100000, step: 100, hint: "Include tax credits you can actually use, plus utility and state rebates." },
          { id: "savingUnits", label: "Annual energy saved", type: "number", value: 11000, min: 0, max: 200000, step: 100, hint: "In kWh for electricity, or therms for gas — match the price unit below." },
          { id: "price", label: "Energy price per unit (USD)", type: "number", value: 0.19, min: 0.01, max: 5, step: 0.01 },
          { id: "escalation", label: "Assumed annual energy price rise (%)", type: "number", value: 2.5, min: 0, max: 10, step: 0.5 },
          { id: "life", label: "Expected equipment life (years)", type: "number", value: 25, min: 1, max: 50, step: 1 }
        ],
        compute: function (v) {
          var m = window.MDN_UTIL.money;
          var net = Math.max(v.cost - v.incentive, 0);
          var yearOne = v.savingUnits * v.price;

          /* Simple payback ignores escalation; the 20-year figure includes it. */
          var payback = yearOne > 0 ? net / yearOne : 0;
          var esc = v.escalation / 100;
          var horizon = Math.min(20, v.life);
          var cumulative = 0;
          for (var y = 0; y < horizon; y++) {
            cumulative += yearOne * Math.pow(1 + esc, y);
          }
          var netPosition = cumulative - net;
          var lifetime = 0;
          for (var y2 = 0; y2 < v.life; y2++) {
            lifetime += yearOne * Math.pow(1 + esc, y2);
          }

          return [
            { label: "Net cost after incentives", value: m(net), hint: "Quoted " + m(v.cost) + " less " + m(v.incentive) + " in incentives you can actually use." },
            { label: "First-year saving", value: m(yearOne), hint: v.savingUnits.toLocaleString() + " units saved at " + m(v.price) + " each." },
            { label: "Simple payback", value: yearOne > 0 ? payback.toFixed(1) + " years" : "No saving entered", hint: payback > 0 && payback < 7 ? "Under seven years — a strong energy investment." : payback >= 20 ? "Beyond twenty years — do this for comfort or maintenance reasons, not energy." : "Moderate payback; compare against other upgrades." },
            { label: "Net position after " + horizon + " years", value: m(netPosition), hint: "Cumulative savings of " + m(cumulative) + " less the net cost, with prices rising " + v.escalation + "% a year." },
            { label: "Lifetime savings (" + v.life + " years)", value: m(lifetime), hint: "Before maintenance and any component replacement." }
          ];
        }
      },
      faq: [
        { q: "What energy price should I use?", a: "<p>Your all-in rate from a recent bill: total cost divided by units used, including fixed charges spread across usage. Marginal supply rates alone understate it.</p>" },
        { q: "Should I assume energy prices rise?", a: "<p>A modest escalation is reasonable. Treat any model relying on steep rises to reach payback as a sales document.</p>" }
      ],
      related: ["best-home-upgrades-roi", "solar-panel-cost", "heat-pump-cost"]
    },

    "home-energy-audit-checklist": {
      title: "Home energy audit checklist: 30 checks that find the leaks",
      h1: "The home energy audit checklist",
      section: "Tools",
      eyebrow: "Free tool",
      dek: "Baseline data, envelope, attic, basement, ducts, equipment and water heating — in the order a professional would work. Progress saves in your browser.",
      toc: false,
      answer: "Work through it in order: establish a baseline from your bills, then inspect the attic and basement where the biggest losses hide, then ducts and equipment. Most of these checks need nothing but a torch and an afternoon.",
      body:
        "<div id='checklist'></div>" +
        "<h2>How to use it</h2>" +
        "<p>Do this before getting any quotes, so you can describe your house accurately and judge whether a contractor's diagnosis matches what you found. Sequencing guidance is in the <a href='home-energy-guide.html'>upgrade guide</a>.</p>" +
        "<h2>What a self-audit cannot do</h2>" +
        "<p>You cannot measure air leakage without a blower door, find hidden thermal bridging without a thermal camera, or safely test combustion appliances. If your house is older or you suspect a combustion safety issue, hire a certified auditor — that is a safety matter, not a savings one.</p>",
      checklist: {
        groups: [
          { title: "Establish the baseline", note: "Twelve months of data in units, not dollars.", items: ["Twelve months of electricity use in kWh recorded", "Twelve months of gas or oil use recorded", "Baseload identified from the mildest months", "Heating and cooling use separated from baseload", "All-in energy price per unit calculated from a real bill"] },
          { title: "Attic", items: ["Insulation depth measured in several places", "Insulation coverage checked at the eaves and corners", "Attic hatch weatherstripped and insulated", "Plumbing, wiring and chimney penetrations inspected for gaps", "Recessed light fittings checked for type and sealing", "Soffit and ridge ventilation confirmed clear", "Any daylight, staining or moisture noted"] },
          { title: "Basement and crawlspace", items: ["Rim joist and band area inspected for leakage", "Insulation present and dry where expected", "Crawlspace ground cover and moisture checked", "Hot water pipes insulated for the first few metres", "Any visible mould or standing water noted"] },
          { title: "Ducts and airflow", items: ["Accessible duct joints checked for leakage", "Ducts in unconditioned space checked for insulation", "All supply and return registers confirmed unblocked", "Filter condition and size recorded", "Rooms that never reach temperature listed"] },
          { title: "Envelope and openings", items: ["Exterior doors weatherstripped and closing fully", "Windows checked for failed seals or fogging", "Draughts felt around outlets and switches on exterior walls", "Dryer and bathroom vents confirmed to discharge outside"] },
          { title: "Equipment and water", items: ["Heating and cooling equipment age and rating recorded", "Water heater age, type and set temperature recorded", "Thermostat schedule reviewed against actual occupancy", "Lighting checked for remaining inefficient fittings", "Standby loads identified and dealt with"] }
        ]
      },
      faq: [
        { q: "How long does this take?", a: "<p>About two hours for the inspection, plus the time to pull twelve months of bills. The attic and basement sections repay the effort most.</p>" },
        { q: "Is my progress private?", a: "<p>Yes — ticks are stored only in your browser's local storage and never sent to us.</p>" }
      ],
      sources: [{ name: "US Department of Energy — home energy audits", url: "https://www.energy.gov/energysaver/home-energy-audits" }],
      related: ["home-energy-guide", "air-sealing-guide", "payback-calculator"],
      cta: { title: "Get the payback worksheet", text: "The Payback Report includes the worksheet for ranking any five upgrades by real return.", btn: "Subscribe", href: "index" }
    }
  }
};

window.SITE_DATA.aboutRelated = ["home-energy-guide", "best-home-upgrades-roi"];
Object.assign(window.SITE_DATA.pages, window.MDN_TRUST(window.SITE_DATA));
window.MDN_SITES = window.MDN_SITES || {};
window.MDN_SITES[window.SITE_DATA.slug] = window.SITE_DATA;
