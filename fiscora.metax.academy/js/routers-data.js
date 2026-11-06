/* ==========================================================================
   FISCORA — Diagnostic router definitions  (growth trick #9)

   Pure data. Each router is a small decision tree that ends in a named
   recommendation plus the guides that justify it.

   Shape
     id      unique, used in the permalink (#r=<id>)
     start   id of the first node
     nodes   { q, help?, a: [ { label, to, note? } ] }
     results { title, verdict, body, steps[], reads[], caution }

   Rules that keep this honest:
     - Every result carries a `caution` naming who it is wrong for. A router
       that never says "this might not be you" is a sales funnel.
     - `reads` are slugs. The engine filters them through the published graph,
       so an unwritten guide silently drops out instead of 404ing.
     - `to` may point at a node OR a result id. Result ids start with "r-".
   ========================================================================== */

window.FiscoraRouters = [

  /* ====================================================== student loans */
  {
    id: 'student-loans',
    title: 'Which student-loan repayment plan fits me?',
    dek: 'Six federal plans, one private market, and a forgiveness rule that changes the answer completely. Four questions.',
    icon: 'fa-graduation-cap',
    cat: 'education',
    start: 'q1',
    nodes: {
      q1: {
        q: 'What kind of loans are you repaying?',
        help: 'This is the single biggest fork. Federal loans carry income-driven options and forgiveness programmes that private loans simply do not have.',
        a: [
          { label: 'Federal only', to: 'q2' },
          { label: 'Private only', to: 'r-private' },
          { label: 'A mix of both', to: 'q2', note: 'Answer for the federal portion — we will flag the private side in the result.' },
          { label: 'I am not sure', to: 'r-unsure' }
        ]
      },
      q2: {
        q: 'Do you work for a government body or a qualifying non-profit?',
        help: 'Full-time public-service employment is the one situation where deliberately paying as little as possible is the mathematically correct strategy.',
        a: [
          { label: 'Yes, and I intend to stay several more years', to: 'r-pslf' },
          { label: 'Yes, but I may leave soon', to: 'q3', note: 'Treated as private-sector, because the strategy only pays off if you stay.' },
          { label: 'No', to: 'q3' }
        ]
      },
      q3: {
        q: 'How does your loan balance compare with your annual income?',
        help: 'The ratio, not the absolute number, decides whether you can realistically clear the debt or should optimise for forgiveness.',
        a: [
          { label: 'Balance is smaller than one year of income', to: 'r-aggressive' },
          { label: 'Roughly one to two times my income', to: 'q4' },
          { label: 'More than twice my income', to: 'r-idr-forgive' }
        ]
      },
      q4: {
        q: 'After essential costs, can you comfortably pay more than the standard amount?',
        help: 'Essential means housing, food, transport, insurance, minimum payments on higher-rate debt, and a working emergency buffer.',
        a: [
          { label: 'Yes, with room to spare', to: 'r-aggressive' },
          { label: 'I can just about manage the standard payment', to: 'r-standard' },
          { label: 'No — the standard payment is a stretch', to: 'r-idr-safety' }
        ]
      }
    },
    results: {
      'r-pslf': {
        title: 'Income-driven repayment, aimed at Public Service Loan Forgiveness',
        verdict: 'Minimise payments deliberately',
        body: 'This is the one case where paying extra is actively harmful. If the remaining balance is forgiven after a fixed number of qualifying payments, every pound above the required amount reduces the sum forgiven — you are buying nothing. Enrol in the lowest-payment income-driven plan you qualify for, certify your employment every year without exception, and keep your own records rather than relying on the servicer to keep them for you.',
        steps: [
          'Enrol in the lowest qualifying income-driven plan, not the lowest total-interest one.',
          'File employment certification annually, and keep a personal copy of every approval.',
          'Never consolidate without first confirming it preserves your qualifying payment count.',
          'Redirect what you would have overpaid into retirement or an emergency fund instead.'
        ],
        reads: ['student-loan-repayment-plans.html', 'student-loan-strategies.html', 'emergency-fund-blueprint.html'],
        caution: 'This strategy is a bet on a programme staying broadly intact and on you staying in qualifying employment. If you leave public service partway through, you will have spent years making minimum payments on a balance that is now entirely yours — the worst outcome of any path here. Do not follow it if your commitment is uncertain.'
      },
      'r-aggressive': {
        title: 'Standard plan, overpaying the highest-rate loan first',
        verdict: 'Clear it early',
        body: 'Your balance is small enough relative to income that forgiveness strategies cost more than they save. The fastest route out is the standard plan with every spare pound directed at the individual loan carrying the highest interest rate — not spread evenly, and not at the largest balance. Confirm in writing that overpayments reduce principal rather than being applied to future scheduled payments, which is a common and expensive default.',
        steps: [
          'List every loan with its own rate — federal portfolios often contain several.',
          'Pay the minimum on all, then everything spare at the highest rate.',
          'Instruct the servicer in writing to apply overpayments to principal.',
          'Re-check after each loan clears: the target moves to the next-highest rate.'
        ],
        reads: ['student-loan-repayment-plans.html', 'debt-payoff-methods.html', 'tool-debt-payoff.html'],
        caution: 'Overpaying debt is irreversible in a way that saving is not. If you have no emergency fund, build a basic buffer first — otherwise the next unexpected bill goes on a credit card at several times the interest rate you just worked to avoid.'
      },
      'r-standard': {
        title: 'Standard plan, held steady',
        verdict: 'Stay the course',
        body: 'The standard plan clears the debt on a fixed schedule at the lowest total interest of any non-forgiveness route. Your ratio does not justify income-driven repayment, and stretching for overpayments you cannot sustain tends to end in a missed payment rather than an early payoff. Keep the schedule, and revisit if your income rises materially.',
        steps: [
          'Automate the payment so a busy month cannot become a missed one.',
          'Direct pay rises at the loan before absorbing them into monthly spending.',
          'Recheck this router after any income change of roughly ten per cent or more.'
        ],
        reads: ['student-loan-repayment-plans.html', 'debt-payoff-methods.html'],
        caution: 'If your income is volatile rather than simply tight — freelance or commission-based — an income-driven plan may be the safer structure even at higher total cost, because it flexes downward in a bad quarter instead of becoming a default.'
      },
      'r-idr-forgive': {
        title: 'Income-driven repayment, expecting a forgiven remainder',
        verdict: 'Optimise for the write-off',
        body: 'At more than twice your income, the balance is unlikely to be cleared by ordinary payments within the plan term. The realistic goal shifts from paying it off to paying the required amount for the required period and having the remainder discharged. That changes the correct behaviour: extra payments mostly reduce the eventual write-off rather than shortening the term.',
        steps: [
          'Compare the income-driven plans you qualify for on required payment, not headline rate.',
          'Recertify income every year — a missed recertification can reset payments to the standard amount.',
          'Set aside a reserve for a possible tax charge on the forgiven amount, where it applies.',
          'Keep documentation of every payment for the full term, independently of the servicer.'
        ],
        reads: ['student-loan-repayment-plans.html', 'student-loan-strategies.html', 'tool-debt-payoff.html'],
        caution: 'This is a decades-long commitment to a rule set that can change, and in some jurisdictions the forgiven balance is taxable in the year it is written off — a large bill arriving exactly when you expected relief. It also means carrying visible debt through the years when you may want a mortgage.'
      },
      'r-idr-safety': {
        title: 'Income-driven repayment, used as a safety net',
        verdict: 'Lower the payment, keep the option open',
        body: 'When the standard payment is a genuine stretch, an income-driven plan is doing its actual job: preventing a default that would be far more damaging than the extra interest. Total cost rises, and that is the correct trade. Treat it as a floor you can pay reliably rather than a permanent plan, and revisit as income recovers.',
        steps: [
          'Apply for the income-driven plan with the lowest required payment you qualify for.',
          'Recertify annually, on time, every year.',
          'Build a one-month expense buffer before adding any voluntary overpayment.',
          'Return to this router after any material pay rise.'
        ],
        reads: ['student-loan-repayment-plans.html', 'emergency-fund-blueprint.html', 'debt-payoff-methods.html'],
        caution: 'Lower payments mean the balance may grow while you are enrolled, since payments can fall below accruing interest. That is survivable but genuinely uncomfortable to watch, and it postpones rather than solves the problem.'
      },
      'r-private': {
        title: 'Refinancing is the only real lever',
        verdict: 'Rate-shop, then attack the balance',
        body: 'Private loans have no income-driven plans and no forgiveness programmes, so the only meaningful levers are the interest rate and the size of your payment. Shop refinancing quotes across several lenders within a short window, and treat any offer that extends the term as the cost it is — a lower monthly payment on a longer schedule usually means more total interest.',
        steps: [
          'Collect quotes from several lenders inside a two-week window to limit credit-file impact.',
          'Compare total cost over the full term, not the monthly payment.',
          'Improve your credit file first if you are near a scoring threshold — it moves the rate.',
          'Once refinanced, direct everything spare at the highest-rate balance.'
        ],
        reads: ['student-loan-strategies.html', 'credit-score-blueprint.html', 'debt-payoff-methods.html'],
        caution: 'If any part of your debt is federal, do not fold it into a private refinance to chase a lower rate. That conversion is one-way and permanently destroys access to income-driven repayment and forgiveness — protections that are worth far more than a small rate saving in any year your income falls.'
      },
      'r-unsure': {
        title: 'Establish what you actually hold first',
        verdict: 'Identify before you optimise',
        body: 'Every strategy here depends on the federal-or-private distinction, so this is worth thirty minutes before any decision. Your national student-loan data system or credit report will list each loan, its holder, its rate and its status. Until that list exists, any plan is guesswork.',
        steps: [
          'Pull your official loan record and your credit report.',
          'For each loan note: holder, federal or private, rate, balance, current plan.',
          'Then run this router again with the answer in front of you.'
        ],
        reads: ['student-loan-repayment-plans.html', 'credit-score-blueprint.html'],
        caution: 'Servicers change hands, and a loan you believe is federal may be serviced by a commercial company — the servicer name is not evidence of loan type. Check the loan record itself.'
      }
    }
  },

  /* ================================================= disability insurance */
  {
    id: 'disability-cover',
    title: 'Do I actually need disability cover?',
    dek: 'The most under-bought and most over-sold policy in personal finance, depending entirely on who you are. Three questions.',
    icon: 'fa-wheelchair-move',
    cat: 'insurance',
    start: 'q1',
    nodes: {
      q1: {
        q: 'If you could not work for two years, would your household still pay its bills?',
        help: 'Count savings, a partner\'s income, and any employer or state benefit you are confident you would actually receive.',
        a: [
          { label: 'No — we would be in serious trouble within months', to: 'q2' },
          { label: 'We would manage, uncomfortably', to: 'q2' },
          { label: 'Yes, comfortably', to: 'r-self-insure' }
        ]
      },
      q2: {
        q: 'What cover do you already have through an employer?',
        help: 'Group cover is common, cheap, and usually far less generous than people assume — it often replaces well under two-thirds of income and stops when you leave.',
        a: [
          { label: 'None that I know of', to: 'q3' },
          { label: 'Some group cover, and I have read the terms', to: 'r-top-up' },
          { label: 'Some group cover, but I have never read the terms', to: 'r-read-first' }
        ]
      },
      q3: {
        q: 'How replaceable is your specific ability to do your job?',
        help: 'A surgeon\'s hands and a manual trade are highly specific. Most desk work is not — which changes which definition of disability you need.',
        a: [
          { label: 'Highly specific — my income depends on a physical or licensed skill', to: 'r-own-occupation' },
          { label: 'Fairly general office or knowledge work', to: 'r-standard-cover' },
          { label: 'I am self-employed with no safety net at all', to: 'r-self-employed' }
        ]
      }
    },
    results: {
      'r-self-insure': {
        title: 'You are already self-insured — skip it',
        verdict: 'Probably do not buy',
        body: 'If two years without income is genuinely absorbable, you are carrying that risk yourself already, which is the cheapest way to carry it. Buying cover here converts a manageable risk into a certain monthly cost. The better use of the same money is usually to protect against the risks you cannot absorb.',
        steps: [
          'Confirm the two-year figure against real numbers rather than an impression.',
          'Check whether your assessment quietly depends on a partner\'s continued income.',
          'Revisit if you take on a mortgage, a dependent, or a large fixed commitment.'
        ],
        reads: ['disability-insurance-guide.html', 'emergency-fund-blueprint.html'],
        caution: 'Self-insuring assumes the savings stay available and untouched. A market fall, a redundancy, or a second household emergency can undo this position quickly — and disability tends to arrive alongside other costs, not instead of them.'
      },
      'r-top-up': {
        title: 'Top up the gap in your group cover',
        verdict: 'Buy the difference, not a whole policy',
        body: 'You already hold the cheap layer. The job now is to price the gap between what the group policy pays and what your household actually needs, and buy only that. A supplemental policy sized to the shortfall costs far less than duplicating cover you already have.',
        steps: [
          'Write down the group policy\'s replacement percentage, waiting period and maximum term.',
          'Subtract that from your household\'s genuine monthly requirement.',
          'Quote a supplemental policy for the gap only.',
          'Check portability — most group cover ends the day the job does.'
        ],
        reads: ['disability-insurance-guide.html', 'health-insurance-deductibles.html', 'emergency-fund-blueprint.html'],
        caution: 'Group benefits are frequently taxable where individually-purchased benefits are not, so a policy that looks like sixty per cent of income may deliver considerably less in practice. Check the tax treatment before sizing the gap.'
      },
      'r-read-first': {
        title: 'Read the policy you already own before buying anything',
        verdict: 'Gather facts first',
        body: 'Buying a second policy before reading the first is how people end up paying twice for overlapping cover, or discovering after a claim that the waiting period was six months. The document you need is the benefit schedule — replacement percentage, waiting period, benefit term, and the definition of disability.',
        steps: [
          'Request the full benefit schedule from HR, not the summary leaflet.',
          'Note four things: percentage, waiting period, maximum term, and definition used.',
          'Check whether cover survives leaving the employer.',
          'Then run this router again.'
        ],
        reads: ['disability-insurance-guide.html'],
        caution: 'The definition of disability matters more than the percentage. A policy paying seventy per cent but only if you cannot perform *any* occupation is weaker than one paying sixty per cent for your own occupation — and the headline number will not tell you which you hold.'
      },
      'r-own-occupation': {
        title: 'Own-occupation cover, bought individually',
        verdict: 'Buy, and pay for the definition',
        body: 'When income depends on a specific physical or licensed capability, the definition of disability is the entire product. Own-occupation cover pays if you cannot do *your* job, even if you could do another. It costs meaningfully more, and for your situation that premium is the point rather than an upsell.',
        steps: [
          'Quote own-occupation cover specifically, and confirm the wording in the contract.',
          'Buy individually where possible so cover is not tied to one employer.',
          'Choose the longest waiting period your savings can genuinely bridge — it cuts premium sharply.',
          'Check the policy is non-cancellable with fixed premiums.'
        ],
        reads: ['disability-insurance-guide.html', 'freelance-rate-guide.html', 'emergency-fund-blueprint.html'],
        caution: 'Own-occupation cover is also where the industry earns its commission, so expect to be sold riders you do not need. The core definition is worth paying for; most add-ons are not. And a longer waiting period only helps if the savings to bridge it actually exist.'
      },
      'r-standard-cover': {
        title: 'Standard individual cover, sized to your real shortfall',
        verdict: 'Buy modestly',
        body: 'General knowledge work has more alternative paths back to income, so the exotic definitions matter less. Buy straightforward cover sized to the genuine gap, with the longest waiting period your emergency fund can bridge — that single choice moves the premium more than any other.',
        steps: [
          'Calculate the actual monthly shortfall rather than insuring gross salary.',
          'Set the waiting period to match your emergency fund, not to the default.',
          'Compare at least three quotes on identical terms.',
          'Decline riders you cannot explain the purpose of.'
        ],
        reads: ['disability-insurance-guide.html', 'tool-insurance-needs.html', 'emergency-fund-blueprint.html'],
        caution: 'Insuring gross salary is the standard mistake — benefits are often paid tax-free, so replacing gross income means paying for more cover than you can ever claim. Size to net need.'
      },
      'r-self-employed': {
        title: 'Highest priority — you have no fallback at all',
        verdict: 'Buy, and treat it as a business cost',
        body: 'With no employer cover and no sick pay, disability is the risk most likely to end your finances outright, and it is the one most self-employed people postpone. Price it as a fixed cost of operating rather than a discretionary purchase, and build it into your rates.',
        steps: [
          'Quote individual cover now, before any change in health makes it harder to obtain.',
          'Size the benefit to household need, including business fixed costs where relevant.',
          'Add the premium to your cost base and reflect it in your rates.',
          'Pair it with a larger emergency fund than an employee would need.'
        ],
        reads: ['disability-insurance-guide.html', 'freelance-rate-guide.html', 'emergency-fund-blueprint.html'],
        caution: 'Self-employed applicants face harder underwriting and income verification, and cover is generally based on demonstrable profit rather than turnover — so a recent lean year can reduce what you can insure. If your accounts are about to improve, timing matters.'
      }
    }
  },

  /* ======================================================= credit defence */
  {
    id: 'credit-defence',
    title: 'Should I freeze my credit, or just monitor it?',
    dek: 'One is free and stops most account fraud outright. The other mostly tells you after the fact. Three questions.',
    icon: 'fa-shield-halved',
    cat: 'credit',
    start: 'q1',
    nodes: {
      q1: {
        q: 'Has your data been exposed, or are you acting pre-emptively?',
        help: 'Exposure includes a breach notice, a lost wallet, a card taken over, or mail that stopped arriving.',
        a: [
          { label: 'Someone has already opened credit in my name', to: 'r-active-fraud' },
          { label: 'My data was exposed but nothing has happened yet', to: 'q2' },
          { label: 'Nothing has happened — I am being cautious', to: 'q2' }
        ]
      },
      q2: {
        q: 'Do you expect to apply for credit in the next few months?',
        help: 'A freeze must be lifted before a lender can check your file. That is a minor inconvenience, but it catches people mid-application.',
        a: [
          { label: 'No applications planned', to: 'r-freeze' },
          { label: 'Yes — a mortgage, loan or card is coming up', to: 'q3' },
          { label: 'Not sure', to: 'r-freeze', note: 'A freeze is reversible in minutes, so uncertainty favours freezing.' }
        ]
      },
      q3: {
        q: 'How soon is that application?',
        a: [
          { label: 'Within about two weeks', to: 'r-monitor-then-freeze' },
          { label: 'A month or more away', to: 'r-freeze', note: 'There is comfortably time to freeze now and lift it when needed.' }
        ]
      }
    },
    results: {
      'r-freeze': {
        title: 'Freeze all of your credit files now',
        verdict: 'Freeze',
        body: 'A freeze prevents new accounts being opened in your name, because a lender who cannot pull your file will not approve the application. It is free, it does not affect your score, and it does not stop you using existing accounts. The one thing people get wrong is freezing at a single bureau — you must do it at every one that operates in your country, since a fraudster only needs the one you missed.',
        steps: [
          'Freeze at every credit bureau operating in your jurisdiction, not just the largest.',
          'Store each PIN or account credential somewhere you will still have it in a crisis.',
          'Lift temporarily when you genuinely need a credit check, then re-freeze.',
          'Freeze the files of any dependents whose identity you manage, if permitted.'
        ],
        reads: ['fraud-and-identity-protection.html', 'credit-score-blueprint.html'],
        caution: 'A freeze stops new-account fraud specifically. It does nothing about misuse of cards you already hold, tax or benefit fraud, or medical identity theft — so it is a strong lock on one door, not a complete defence. Keep watching statements.'
      },
      'r-monitor-then-freeze': {
        title: 'Monitor through the application, then freeze immediately after',
        verdict: 'Sequence it',
        body: 'With an application inside two weeks, a freeze risks a declined or delayed decision at the worst moment — lenders sometimes read a failed file pull as an adverse signal rather than a frozen file. Monitor closely through the decision, then freeze the day it completes.',
        steps: [
          'Set up alerts on every existing account for the next fortnight.',
          'Check your file directly once before the application, to catch anything already present.',
          'Complete the application.',
          'Freeze all bureaux the day it closes — put it in your calendar now.'
        ],
        reads: ['fraud-and-identity-protection.html', 'credit-score-blueprint.html', 'mortgage-refinance-guide.html'],
        caution: 'This is the weakest window in the whole router: you are deliberately leaving the door unlocked for two weeks. If your data was exposed in a known breach, prefer freezing now and telling the lender the file is frozen — most will simply ask you to lift it.'
      },
      'r-active-fraud': {
        title: 'Active fraud — freeze, report, and document',
        verdict: 'Act today',
        body: 'Once accounts have been opened, a freeze prevents further ones but does not remove what exists. This becomes an evidence exercise: a formal report creates the paper trail that forces creditors to investigate rather than simply pursue you for the balance.',
        steps: [
          'Freeze every credit file immediately.',
          'File a formal identity-theft report with the relevant national body and the police.',
          'Write to each affected creditor in writing, referencing the report number.',
          'Keep a dated log of every call, name and outcome — this is what wins disputes.',
          'Request a fraud alert on your files in addition to the freeze.'
        ],
        reads: ['fraud-and-identity-protection.html', 'credit-score-blueprint.html', 'bank-fees-audit.html'],
        caution: 'Resolution commonly takes months, not weeks, and the burden of proof falls on you far more than it should. Do not accept a phone assurance that an account has been removed — get it in writing, and re-check your file sixty days later to confirm it actually was.'
      }
    }
  },

  /* ========================================================= debt method */
  {
    id: 'debt-method',
    title: 'Which debt payoff method should I use?',
    dek: 'Avalanche is cheaper. Snowball is more likely to be finished. Which matters more depends on you. Three questions.',
    icon: 'fa-fire-flame-curved',
    cat: 'credit',
    start: 'q1',
    nodes: {
      q1: {
        q: 'Is any of your debt at a genuinely punitive rate?',
        help: 'Payday lending, some store cards, and overdraft charges sit far above ordinary credit-card rates.',
        a: [
          { label: 'Yes, something is well above normal card rates', to: 'r-triage' },
          { label: 'No — cards and loans at fairly ordinary rates', to: 'q2' },
          { label: 'I do not know what rates I am paying', to: 'r-inventory' }
        ]
      },
      q2: {
        q: 'Have you tried to pay down debt before and lost momentum?',
        help: 'This is the question that actually decides the answer, and the one most calculators ignore.',
        a: [
          { label: 'Yes, more than once', to: 'r-snowball' },
          { label: 'No, this is my first structured attempt', to: 'q3' },
          { label: 'I have never lost momentum once started', to: 'r-avalanche' }
        ]
      },
      q3: {
        q: 'How far apart are your interest rates?',
        help: 'When rates are close together, the cost difference between methods becomes small enough to ignore.',
        a: [
          { label: 'Very spread out — some far higher than others', to: 'r-avalanche' },
          { label: 'Fairly similar across balances', to: 'r-snowball', note: 'With similar rates, the cheaper method saves little, so motivation wins.' }
        ]
      }
    },
    results: {
      'r-avalanche': {
        title: 'Avalanche — highest interest rate first',
        verdict: 'Optimise cost',
        body: 'Pay minimums on everything, then direct every spare pound at the highest-rate balance regardless of its size. This is arithmetically the cheapest route and the fastest in total time. It works for you specifically because you have not historically needed early wins to keep going.',
        steps: [
          'List every debt with balance, minimum payment and rate.',
          'Order strictly by rate, highest first — ignore balance size entirely.',
          'Pay all minimums, then everything spare at the top of the list.',
          'When one clears, roll its full payment into the next without pausing.'
        ],
        reads: ['debt-payoff-methods.html', 'tool-debt-payoff.html', 'credit-score-blueprint.html'],
        caution: 'Avalanche fails in practice when the highest-rate debt is also the largest, because the first visible win can be a year away. If you find yourself losing interest around month four, switch to snowball — a slightly more expensive plan you finish beats a cheaper one you abandon.'
      },
      'r-snowball': {
        title: 'Snowball — smallest balance first',
        verdict: 'Optimise completion',
        body: 'Pay minimums on everything, then attack the smallest balance until it is gone. It costs a little more in interest and that is a deliberate purchase: you are buying a completed account early, which is what sustains the plan. Given a history of lost momentum, the marginally more expensive method is the one more likely to actually finish.',
        steps: [
          'List every debt by balance, smallest first.',
          'Pay all minimums, then everything spare at the smallest.',
          'Close or put away each account as it clears, so it cannot refill.',
          'Roll the freed payment into the next smallest — do not absorb it into spending.'
        ],
        reads: ['debt-payoff-methods.html', 'tool-debt-payoff.html', 'emergency-fund-blueprint.html'],
        caution: 'If one of your balances carries a rate far above the others, snowball can be materially more expensive rather than marginally so. Run both orders through the calculator: if the gap is large, pay that one debt off first and snowball the rest.'
      },
      'r-triage': {
        title: 'Triage the punitive debt first, then choose a method',
        verdict: 'Emergency first',
        body: 'At genuinely punitive rates, the ordinary comparison between methods stops mattering — that balance compounds faster than any plan can absorb. Clear or refinance it before organising anything else, whether by consolidation at a lower rate, a hardship arrangement, or directing everything available at it for a short period.',
        steps: [
          'Identify the punitive balance and stop any further use of it immediately.',
          'Ask the lender directly about a hardship or payment arrangement — this is more often available than people assume.',
          'Price a consolidation loan, comparing total cost rather than monthly payment.',
          'Once it is cleared, run this router again for the remaining debts.'
        ],
        reads: ['debt-payoff-methods.html', 'credit-score-blueprint.html', 'bank-fees-audit.html'],
        caution: 'Consolidation only helps if the old credit line is actually closed. The common failure is consolidating at a lower rate, then gradually refilling the original card — arriving at the same debt twice over. Consolidation is a tool, not a solution.'
      },
      'r-inventory': {
        title: 'Build the inventory before choosing anything',
        verdict: 'Measure first',
        body: 'Every method here depends on knowing the rates, and the exercise usually takes under an hour. It also tends to surface at least one balance costing far more than expected, which frequently changes the plan on its own.',
        steps: [
          'For each debt record: balance, minimum payment, interest rate, lender.',
          'Include overdrafts and any buy-now-pay-later arrangements — they are debt.',
          'Total the monthly minimums, so you know your true fixed floor.',
          'Then run this router again.'
        ],
        reads: ['debt-payoff-methods.html', 'tool-debt-payoff.html'],
        caution: 'Promotional zero-per-cent periods are the trap in any inventory. Record the date each one ends and the rate it reverts to, because a balance that looks free today can become the most expensive item on the list overnight.'
      }
    }
  },

  /* ========================================================= rent vs buy */
  {
    id: 'rent-or-buy',
    title: 'Should I rent or buy right now?',
    dek: 'Not a values question. Four questions about your timeline, your cash and your job.',
    icon: 'fa-house-chimney',
    cat: 'property',
    start: 'q1',
    nodes: {
      q1: {
        q: 'How long do you realistically expect to stay in this home?',
        help: 'Transaction costs on both ends usually take several years of ownership to recover. This is the dominant variable.',
        a: [
          { label: 'Under three years', to: 'r-rent-short' },
          { label: 'Three to five years', to: 'q2' },
          { label: 'More than five years', to: 'q2' }
        ]
      },
      q2: {
        q: 'Do you have a deposit plus separate funds for costs and repairs?',
        help: 'Buying costs materially more than the deposit: fees, taxes, moving, and the first unexpected repair.',
        a: [
          { label: 'Yes, deposit plus a genuine reserve on top', to: 'q3' },
          { label: 'Deposit only, nothing spare', to: 'r-not-yet' },
          { label: 'Not yet saved', to: 'r-not-yet' }
        ]
      },
      q3: {
        q: 'How secure and portable is your income?',
        help: 'Ownership converts a flexible commitment into a fixed one. Job risk matters more than most buyers allow for.',
        a: [
          { label: 'Stable, and I could find similar work locally', to: 'q4' },
          { label: 'Stable, but my field would require relocating', to: 'r-rent-mobility' },
          { label: 'Variable or uncertain', to: 'r-rent-mobility' }
        ]
      },
      q4: {
        q: 'In your area, how does a likely monthly payment compare with rent for a similar home?',
        help: 'Compare the full ownership cost — payment, taxes, insurance, maintenance — against rent, not just the loan payment.',
        a: [
          { label: 'Ownership is similar to or cheaper than renting', to: 'r-buy' },
          { label: 'Ownership is moderately more expensive', to: 'r-buy-marginal' },
          { label: 'Ownership is dramatically more expensive', to: 'r-rent-priced' }
        ]
      }
    },
    results: {
      'r-buy': {
        title: 'Buying is the stronger position for you',
        verdict: 'Buy',
        body: 'A long horizon, a real cash reserve, secure portable income and comparable monthly costs is the combination where ownership genuinely wins. You clear the transaction costs comfortably, you can absorb a repair without borrowing, and you are not paying a large premium for the privilege.',
        steps: [
          'Model the full monthly cost including taxes, insurance and a maintenance allowance.',
          'Get a decision in principle before viewing, so your budget is real.',
          'Keep the repair reserve genuinely separate from the deposit.',
          'Do not let an approval amount raise your target price — the lender is not sizing your life.'
        ],
        reads: ['rent-vs-buy-analysis.html', 'first-time-buyer-programs.html', 'closing-costs-breakdown.html', 'tool-mortgage.html'],
        caution: 'This assumes your stay estimate holds. Life events — a relationship change, a job offer elsewhere, a family need — break the horizon assumption far more often than people predict, and selling early is where ownership losses actually occur.'
      },
      'r-buy-marginal': {
        title: 'Buying is defensible, but the premium is real',
        verdict: 'Buy carefully',
        body: 'Your timeline and reserves support ownership, but you are paying a monthly premium over renting, so the case now depends on holding long enough for equity and rent inflation to close the gap. That is reasonable — provided you buy below your maximum rather than at it.',
        steps: [
          'Quantify the monthly premium over renting, in cash, and confirm you can carry it indefinitely.',
          'Target a price meaningfully below your approval ceiling.',
          'Stress-test the payment against a materially higher rate at renewal.',
          'Prefer a home you would still accept living in for eight years, not five.'
        ],
        reads: ['rent-vs-buy-analysis.html', 'tool-mortgage.html', 'closing-costs-breakdown.html'],
        caution: 'The premium is only recovered through appreciation and rising rents, neither of which is guaranteed on your timeline. If prices stall for several years, this is the scenario where renting would have won — go in knowing that is the risk you are accepting.'
      },
      'r-rent-short': {
        title: 'Rent — the horizon is too short',
        verdict: 'Rent',
        body: 'Under three years, buying and selling costs usually consume any equity gain, and you carry full exposure to a price dip you have no time to wait out. Renting here is not the cautious option, it is the cheaper one. Direct the difference into the deposit instead.',
        steps: [
          'Rent, and automate the saving you would have spent on ownership costs.',
          'Hold deposit funds somewhere accessible and not market-exposed.',
          'Revisit when your expected stay passes about five years.'
        ],
        reads: ['rent-vs-buy-analysis.html', 'high-yield-savings-guide.html', 'emergency-fund-blueprint.html'],
        caution: 'If prices in your area rise sharply while you rent, your deposit target rises with them — a real risk of waiting, and the strongest argument against this answer. It is a risk, not a certainty, and buying on a two-year horizon has losses of its own.'
      },
      'r-not-yet': {
        title: 'Not yet — the reserve is missing',
        verdict: 'Wait and build',
        body: 'Buying with the deposit and nothing else is the most common route into expensive debt shortly after moving in. Boilers, roofs and legal costs arrive without scheduling, and with no reserve they go onto credit at rates that overwhelm any ownership benefit. The gap is usually months, not years.',
        steps: [
          'Set a reserve target on top of the deposit, sized to your local costs and one significant repair.',
          'Include purchase costs in the target, not just the deposit percentage.',
          'Check first-time buyer schemes, which sometimes reduce the cash needed.',
          'Return to this router once both figures are funded.'
        ],
        reads: ['rent-vs-buy-analysis.html', 'first-time-buyer-programs.html', 'closing-costs-breakdown.html', 'emergency-fund-blueprint.html'],
        caution: 'Some assistance programmes genuinely allow a smaller reserve, and in a fast-rising market waiting has a real cost. If a scheme fits, the answer can change — but the repair reserve is the part not to compromise on.'
      },
      'r-rent-mobility': {
        title: 'Rent — you are buying flexibility you actually need',
        verdict: 'Rent for now',
        body: 'Ownership is a bet that you will not need to move quickly. With variable income or a field that requires relocating for the best opportunities, that bet works against you: the forced sale tends to arrive precisely when you can least afford the loss. Renting keeps the option to follow the opportunity.',
        steps: [
          'Rent, and keep a larger emergency fund than an owner would need.',
          'Save the ownership-cost difference toward a future deposit.',
          'Revisit once your income stabilises or your location settles.'
        ],
        reads: ['rent-vs-buy-analysis.html', 'career-change-runway.html', 'emergency-fund-blueprint.html'],
        caution: 'Plenty of people with variable income own homes successfully, usually with a much larger reserve and a deliberately conservative purchase price. If you have both, ownership can work — this answer is about the typical case, not an absolute rule.'
      },
      'r-rent-priced': {
        title: 'Rent — ownership is priced far above renting here',
        verdict: 'Rent',
        body: 'When full ownership costs dramatically exceed rent for a comparable home, buying only wins through strong sustained appreciation. That is a speculative position rather than a housing decision, and it is exactly the point in a cycle where the gap has historically been widest.',
        steps: [
          'Rent the home you want, and invest the monthly difference deliberately.',
          'Track the ratio annually rather than watching listings weekly.',
          'Keep the deposit liquid so you can act when the gap narrows.'
        ],
        reads: ['rent-vs-buy-analysis.html', 'high-yield-savings-guide.html', 'index-funds-vs-etfs.html'],
        caution: 'Cost ratios can stay stretched for a very long time, and "wait for the gap to close" has been wrong for a decade at a stretch in some cities. This answer only holds if you genuinely invest the difference — spent, it is the worst of both worlds.'
      }
    }
  },

  /* ================================================= where to invest next */
  {
    id: 'invest-next',
    title: 'Where should my next pound or dollar go?',
    dek: 'Debt, buffer, employer match or investments — the ordering is worth six figures over a career. Four questions.',
    icon: 'fa-layer-group',
    cat: 'investing',
    start: 'q1',
    nodes: {
      q1: {
        q: 'Do you have any high-interest debt outstanding?',
        help: 'High-interest means credit cards, overdrafts or anything above roughly eight per cent. Mortgages and subsidised student loans do not count here.',
        a: [
          { label: 'Yes, credit cards or similar', to: 'q2' },
          { label: 'Only low-rate debt, like a mortgage', to: 'q3' },
          { label: 'No debt at all', to: 'q3' }
        ]
      },
      q2: {
        q: 'Does your employer match retirement contributions?',
        help: 'This matters even while clearing expensive debt, because a match is an immediate return no interest rate can beat.',
        a: [
          { label: 'Yes, there is a match', to: 'r-match-then-debt' },
          { label: 'No match, or I am self-employed', to: 'r-debt-first' },
          { label: 'I do not know', to: 'r-find-match' }
        ]
      },
      q3: {
        q: 'How much accessible cash could you reach tomorrow?',
        help: 'Accessible means a savings account, not investments you would have to sell at whatever price the market offers that day.',
        a: [
          { label: 'Less than one month of expenses', to: 'r-buffer' },
          { label: 'One to three months', to: 'q4' },
          { label: 'More than three months', to: 'q4' }
        ]
      },
      q4: {
        q: 'Are you capturing the full employer match, if one exists?',
        a: [
          { label: 'Yes, in full', to: 'r-tax-advantaged' },
          { label: 'No, or only partly', to: 'r-match' },
          { label: 'There is no match available to me', to: 'r-tax-advantaged' }
        ]
      }
    },
    results: {
      'r-match-then-debt': {
        title: 'Capture the match, then attack the debt',
        verdict: 'Match first, narrowly',
        body: 'Contribute exactly enough to capture the full employer match and not a pound more, then direct everything else at the expensive debt. A match is typically an immediate return of fifty to one hundred per cent, which no credit-card rate exceeds. Above the match threshold the comparison flips and the debt wins decisively.',
        steps: [
          'Set your contribution to precisely the match threshold — no higher for now.',
          'Direct every remaining spare pound at the highest-rate debt.',
          'Stop using the card you are paying down.',
          'Once the expensive debt is clear, return to this router.'
        ],
        reads: ['retirement-401k-vs-ira.html', 'debt-payoff-methods.html', 'tool-debt-payoff.html'],
        caution: 'This assumes the match vests on a timescale you will actually reach. If your employer imposes a long vesting cliff and you may leave before it, the match is not yet real money and the debt should come first. Check the vesting schedule rather than assuming.'
      },
      'r-debt-first': {
        title: 'Clear the expensive debt before anything else',
        verdict: 'Debt first',
        body: 'With no match available, high-interest debt is the highest guaranteed return you can get. Paying off a card is a risk-free return equal to its interest rate — reliably better than the uncertain long-run return of a portfolio, and available immediately.',
        steps: [
          'Keep a small buffer, roughly one month of essentials, so a surprise does not go back on the card.',
          'Direct everything else at the highest-rate balance.',
          'Ask about a hardship rate or a consolidation loan if any rate is punitive.',
          'Return to this router once the expensive debt is gone.'
        ],
        reads: ['debt-payoff-methods.html', 'tool-debt-payoff.html', 'emergency-fund-blueprint.html'],
        caution: 'Clearing debt with literally nothing set aside tends to backfire: the next unexpected bill goes straight back onto the card, and you have made no progress while feeling like you did. Keep the small buffer even though the arithmetic says otherwise.'
      },
      'r-find-match': {
        title: 'Find out about the match before deciding anything',
        verdict: 'One question to your employer',
        body: 'This single fact changes the correct answer completely, and it takes one message to your HR or payroll contact. An unclaimed match is the most straightforwardly wasted money in personal finance — a guaranteed return that people leave untouched for years.',
        steps: [
          'Ask payroll or HR: is there a match, what is the threshold, and what is the vesting schedule?',
          'Ask for the plan document rather than a verbal summary.',
          'Then run this router again with the answer.'
        ],
        reads: ['retirement-401k-vs-ira.html', 'salary-negotiation-playbook.html'],
        caution: 'Match structures are frequently more complex than "we match three per cent" — tiered formulas, annual caps and per-pay-period rules all change the amount you must contribute to capture the full benefit. Get it in writing.'
      },
      'r-buffer': {
        title: 'Build a basic cash buffer first',
        verdict: 'Buffer first',
        body: 'With under a month of expenses accessible, any setback becomes borrowing at whatever rate is available in a hurry. A starter buffer is not an investment decision, it is what stops one bad month from undoing years of progress. It does not need to be the full emergency fund — one month changes your position materially.',
        steps: [
          'Target one month of essential expenses in an accessible savings account.',
          'Keep it genuinely separate from your current account.',
          'Automate a transfer on payday rather than saving what is left over.',
          'Then return to this router to decide the next step.'
        ],
        reads: ['emergency-fund-blueprint.html', 'high-yield-savings-guide.html'],
        caution: 'If you are simultaneously passing up an employer match to build this buffer, that is a real cost — the match is usually worth more than the interest you forgo. Where you can do both partially, do both.'
      },
      'r-match': {
        title: 'Capture the full employer match',
        verdict: 'Free money first',
        body: 'You have a buffer and no expensive debt, and you are leaving guaranteed money on the table. Raise your contribution to the full match threshold before considering any other investment. Nothing else available to you offers a comparable certain return.',
        steps: [
          'Raise your contribution rate to the full match threshold this week.',
          'Confirm the match is calculated as you expect on your next payslip.',
          'Check the vesting schedule so you know when it is genuinely yours.',
          'Then return here to decide where the next pound goes.'
        ],
        reads: ['retirement-401k-vs-ira.html', 'asset-allocation-by-age.html'],
        caution: 'Some plans match per pay period rather than annually, which means front-loading contributions early in the year can cause you to miss part of the match. If you intend to contribute unevenly, check which method your plan uses.'
      },
      'r-tax-advantaged': {
        title: 'Fill tax-advantaged space, in stacking order',
        verdict: 'Shelter, then invest',
        body: 'No expensive debt, a buffer in place, and the match captured — the remaining lever is tax treatment. Filling sheltered accounts before taxable ones is worth a substantial sum over a career for no additional risk, because it removes the annual drag of tax on returns rather than trying to earn more.',
        steps: [
          'Fill available tax-advantaged accounts before taxable investing.',
          'Inside them, choose broad low-cost funds over stock selection.',
          'Set an allocation appropriate to your horizon and write down why.',
          'Automate contributions, then leave it alone.'
        ],
        reads: ['retirement-401k-vs-ira.html', 'index-funds-vs-etfs.html', 'asset-allocation-by-age.html'],
        caution: 'Which account types exist, their contribution limits, and whether contributions or withdrawals are taxed vary entirely by jurisdiction — the stacking order here is a principle, not a list you can apply directly. Sheltered money is also generally less accessible, so do not shelter cash you will need before retirement.'
      }
    }
  }
];
