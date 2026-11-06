/* ==========================================================================
   FISCORA — The "More Details" bridge to MetaX.Academy

   Every Fiscora article can name the top issues it CANNOT fix — because they
   are structural rather than arithmetic — and route the reader to the MetaX
   article that teaches mastery of them.

   Why the issues are named as UNFIXED, not solved
   -----------------------------------------------
   ML-2.3 §H.16.2 requires each harm to be dispositioned as not-applicable /
   remedied / partially remedied / unremedied, and §H.16.3 treats an
   all-remedied claim as evidence of HX-15 (compliance theatre). A bridge
   section promising that MetaX "solves" these would reproduce exactly that
   harm at article level. So the contract is: name what remains broken, say
   why this article cannot fix it, and link to the mastery track.

   Data shape
   ----------
     '<fiscora-slug>': {
        to:     '<metax-slug>',        target article
        lede:   string,                one line framing the handoff
        issues: [ { hx, title, body } ]  2-4 named structural issues
     }

   `hx` is the HX-nn id from the Register (HX-000), rendered as a tag so a
   reader can carry the identifier upstream to license.metax.academy/hx-000/.

   Coverage is deliberately per-CATEGORY rather than per-article: one MetaX
   article per Fiscora desk, mapped from that desk's pillar guides. An
   article with no entry renders nothing — never a broken promise.
   ========================================================================== */

window.METAX_BRIDGE = {

  /* ---------------------------------------------------------- INVESTING */
  'index-funds-vs-etfs.html': {
    to: 'metax-investing-objective.html',
    lede: 'This guide can tell you which wrapper costs less. It cannot tell you whether the thing you are optimising is the thing you actually want — and that is where most portfolios go wrong.',
    issues: [
      { hx: 'HX-09', title: 'The measure replaces the goal', body: 'Once you can see tracking error, expense ratio and after-tax return, those numbers start to govern the decision. The objective they were supposed to serve — a house, a transition, a parent\'s care — drops out of view. Nothing in this article stops that happening, because the article is made of those numbers.' },
      { hx: 'HX-02', title: 'Competence you delegate, atrophies', body: 'Automated portfolio management works until the moment it needs a human judgement — a crash, a job loss, a rule change. The skill required at that moment has been quietly transferred to the system for years. The failure is discovered exactly when it is most expensive.' },
      { hx: 'HX-01', title: 'The interface is not neutral', body: 'Every brokerage app you will execute this in is optimised for engagement, not for your reflective interest. We can recommend an allocation; we cannot hand you an environment that leaves you alone once you have set it.' }
    ]
  },
  'asset-allocation-by-age.html': {
    to: 'metax-investing-objective.html',
    lede: 'A glide path is a rule about risk over time. It cannot state what the money is for — and an allocation without a stated purpose cannot be judged right or wrong.',
    issues: [
      { hx: 'HX-09', title: 'Age is a proxy, not a purpose', body: 'Using age as the input is a convenience that replaces the real variable: when you need the money and what happens if it is not there. Two people the same age with different obligations need different portfolios, and no age-based rule can see the difference.' },
      { hx: 'HX-02', title: 'Rebalancing discipline is a skill, not a setting', body: 'The hard part of any glide path is executing it in the year it hurts. Automating it removes the pain and the competence together.' }
    ]
  },
  'dividend-income-playbook.html': {
    to: 'metax-investing-objective.html',
    lede: 'We argue total return; our steelman concedes the behavioural case against us. Neither side of that argument can tell you what your portfolio is for.',
    issues: [
      { hx: 'HX-09', title: 'Yield is the most seductive metric in finance', body: 'A number that arrives monthly and can be counted feels like progress in a way that total return never does. That is precisely why it colonises the decision — the measurable displaces the important.' },
      { hx: 'HX-01', title: 'Income investing is engineered to be watched', body: 'Dividend tracking apps, payout calendars and streak counters exist because the category rewards attention. The reflective interest of a long-term holder is to look less often.' }
    ]
  },

  /* ---------------------------------------------------------- INSURANCE */
  'term-vs-whole-life-insurance.html': {
    to: 'metax-insurance-contestability.html',
    lede: 'This guide gets you to the right policy. It cannot help you at the moment that actually decides whether insurance worked: the claim.',
    issues: [
      { hx: 'HX-06', title: 'Claims decisions are increasingly automatic and unexplained', body: 'A determination about your money, made by a system, with no specific reasons given and no appeal to a human with authority to reverse it. Buying the correct policy does not protect you here — this is the point at which most people discover they do not know how to contest anything.' },
      { hx: 'HX-04', title: 'You are priced on inferences you never disclosed', body: 'Underwriting increasingly draws conclusions about your health from behavioural proxies — purchases, devices, location patterns. You usually cannot see these inferences, and you cannot refuse them without losing the product.' },
      { hx: 'Gharar', title: 'Concealed uncertainty is the product', body: 'Insurance sells you a transfer of uncertainty whose true terms are held in a document written to be unread. Our advice to read the benefit schedule is correct and insufficient: the asymmetry is structural.' }
    ]
  },
  'disability-insurance-guide.html': {
    to: 'metax-insurance-contestability.html',
    lede: 'Disability is the policy most likely to be claimed and most likely to be denied. Choosing it well is the easy half.',
    issues: [
      { hx: 'HX-06', title: 'Definition disputes are decided by the payer', body: 'Whether you can "perform your own occupation" is a judgement, and the party making it is the party who pays. Without specific reasons and a real appeal route, that is not a decision you can meaningfully challenge.' },
      { hx: 'Ẓulm', title: 'Dependency meeting unaccountable power', body: 'A claim is made at the exact moment you have least capacity to fight — ill, out of work, and out of income. The power asymmetry is not incidental to the transaction; it is when the transaction is tested.' }
    ]
  },
  'health-insurance-deductibles.html': {
    to: 'metax-insurance-contestability.html',
    lede: 'The arithmetic of a deductible is simple. The apparatus that decides what counts toward it is not.',
    issues: [
      { hx: 'HX-06', title: 'Coverage determinations without reasons', body: 'Prior authorisation and claim denial increasingly operate as automated determinations of material consequence. Knowing your deductible does not tell you how to overturn one.' },
      { hx: 'HX-13', title: 'Exclusion by default', body: 'Every layer of digital-only process — portal-only appeals, app-only claims — removes the entitlement from someone who cannot reach it.' }
    ]
  },

  /* ------------------------------------------------------------- CREDIT */
  'credit-score-blueprint.html': {
    to: 'metax-credit-scoring-apparatus.html',
    lede: 'We can tell you how to raise a score. We cannot make the scoring apparatus accountable to you — and "improve your score" advice mistakes the symptom for the mechanism.',
    issues: [
      { hx: 'HX-06', title: 'A consequential decision that became unappealable by becoming automatic', body: 'Your access to housing, credit and sometimes employment turns on a number produced by a private model you cannot inspect, using inputs you cannot fully see, with no specific reasons and no appeal to a human with reversal authority. This is the largest algorithmic governance system most people are subject to.' },
      { hx: 'HX-04', title: 'Inferences you cannot see or refuse', body: 'Scoring and its adjacent products draw inferences about your reliability, stability and risk. You are not shown the inference, you cannot correct it, and you cannot refuse it without losing access to the financial system.' },
      { hx: 'HX-13', title: 'Thin files are excluded by construction', body: 'Recent immigrants, young adults and people who have avoided debt are penalised for the absence of a record. The model reads no data as bad data.' }
    ]
  },
  'debt-payoff-methods.html': {
    to: 'metax-credit-scoring-apparatus.html',
    lede: 'Avalanche or snowball is a real question with a real answer. It sits inside a structure this article takes as given.',
    issues: [
      { hx: 'Riba', title: 'The instrument itself is the question we bracket', body: 'Every method here optimises a transaction whose central feature is a stipulated increase over principal, accruing to the lender as a condition of the deferral itself. Helping you pay less of it is a genuine benefit. It is not the same as examining whether the instrument should exist.' },
      { hx: 'HX-06', title: 'Hardship decisions are made about you, not with you', body: 'Whether you get a hardship rate, a payment plan or a default marker is largely an automated determination. Sequencing your payoff well does not give you standing in that decision.' }
    ]
  },
  'student-loan-strategies.html': {
    to: 'metax-credit-scoring-apparatus.html',
    lede: 'Our steelman already concedes we were insufficiently directional here. What neither position addresses is the apparatus itself.',
    issues: [
      { hx: 'HX-06', title: 'Servicer determinations with no route to a human', body: 'Qualifying-payment counts, plan eligibility and forgiveness determinations are made by systems whose errors are documented and whose appeal routes are theoretical. Borrowers routinely cannot get a reason, let alone a reversal.' },
      { hx: 'HX-12', title: 'The record is both lost and permanent', body: 'Payment histories vanish in servicer transfers while adverse markers persist for years. A civilisation that records everything preserves nothing it needs and forgets nothing it should.' }
    ]
  },
  'mortgage-refinance-guide.html': {
    to: 'metax-credit-scoring-apparatus.html',
    lede: 'Refinancing arithmetic is knowable. Whether you are offered the rate the arithmetic assumes is not.',
    issues: [
      { hx: 'HX-06', title: 'Automated underwriting decides, then explains nothing', body: 'Pricing and approval run through models whose reasons are not disclosed and whose adverse-action notices name categories, not causes.' },
      { hx: 'Riba', title: 'We optimise an instrument we do not examine', body: 'This guide reduces the cost of an interest-bearing loan. That is useful and it is bracketed — the question of the instrument is elsewhere.' }
    ]
  },

  /* ----------------------------------------------------------- BUSINESS */
  'saas-pricing-strategy.html': {
    to: 'metax-business-exitable.html',
    lede: 'Pricing power and lock-in are taught together in this category. One of them is a harm.',
    issues: [
      { hx: 'HX-07', title: 'Lock-in is presented as a virtue', body: 'Switching costs, data gravity and ecosystem depth are standard pricing advice. They are also the mechanism by which a commons becomes a landlordship and exit gets priced out of reach. This article treats retention as a goal without asking what it costs the customer.' },
      { hx: 'HX-09', title: 'The metric governs the product', body: 'Once ARR, NDR and churn are the scoreboard, the product bends toward what moves them. Customers experience that bend as degradation they cannot name.' },
      { hx: 'HX-17', title: 'Nobody decided the thing that happened', body: 'A modern SaaS stack is assembled from vendors, each of whom can truthfully say a given behaviour was not their decision. Responsibility drains into the seams.' }
    ]
  },
  'llc-vs-s-corp.html': {
    to: 'metax-business-exitable.html',
    lede: 'Entity choice is a tax and liability question. It is also the first decision about who is answerable for what.',
    issues: [
      { hx: 'HX-17', title: 'Structure can be arranged so that no one holds the duty', body: 'The same techniques that limit liability can be used to ensure that every party in a chain can say the decision was another\'s. That configuration is itself a harm, not merely a consequence of one.' },
      { hx: 'HX-08', title: 'Contractor structures make labour deniable', body: 'Classification decisions are presented as tax optimisation. They are also how human labour gets disassembled until it is deniable, and then denied.' }
    ]
  },
  'cloud-cost-optimization.html': {
    to: 'metax-business-exitable.html',
    lede: 'Cutting a cloud bill is real engineering. The dependency it optimises is rarely examined.',
    issues: [
      { hx: 'HX-07', title: 'Optimisation deepens the lock-in it saves money on', body: 'Every managed service you adopt to reduce cost raises the price of leaving. The saving is measured; the captivity is not.' },
      { hx: 'HX-10', title: 'The bill is not the resource', body: 'Cost per unit of compute is a financial abstraction over mines, water, power and a waste stream. Reducing spend and reducing material draw are different objectives that only sometimes coincide.' }
    ]
  },

  /* ---------------------------------------------------------- MARKETING */
  'seo-content-engine.html': {
    to: 'metax-marketing-disclosable.html',
    lede: 'This article describes how to win a channel. The practices that win it are, in several cases, the harms our own licence names.',
    issues: [
      { hx: 'HX-21', title: 'Volume publishing degrades the corpus it draws from', body: 'Synthetic content re-entering the commons unlabelled means the next system trains on the residue of the last. The degradation is irreversible and collectively produced, which is why no individual publisher feels responsible for it.' },
      { hx: 'HX-09', title: 'Ranking becomes the purpose', body: 'Once position is the measure, the content bends toward the measure. Readers get material optimised for a crawler and described as being for them.' },
      { hx: 'HX-15', title: 'The disclosure becomes the product', body: 'An AI-content notice at the bottom of a page generated at volume is an artefact of accountability substituting for accountability.' }
    ]
  },
  'email-automation-revenue.html': {
    to: 'metax-marketing-disclosable.html',
    lede: 'Automation makes a list profitable. It is also where consent gets manufactured rather than obtained.',
    issues: [
      { hx: 'HX-16', title: 'Consent as a ritual, then cited as authority', body: 'Bundled permissions, pre-ticked boxes, and signup taken at a moment of need produce a record of consent that is then used to justify everything that follows. Consent obtained when a person cannot practically refuse is not consent.' },
      { hx: 'HX-01', title: 'Engagement optimisation aimed at the inbox', body: 'Send-time optimisation, re-engagement sequences and urgency framing are attention extraction with a friendly name.' }
    ]
  },
  'google-ads-cpc-guide.html': {
    to: 'metax-marketing-disclosable.html',
    lede: 'Paid acquisition is measurable, which is exactly what makes it dangerous to the thing being measured.',
    issues: [
      { hx: 'HX-09', title: 'Attribution modelling governs the business', body: 'A model that assigns credit becomes the model that assigns budget, then strategy. Its blind spots become the organisation\'s blind spots.' },
      { hx: 'HX-04', title: 'The targeting apparatus treats people as inventory', body: 'Audience segments are inferences about persons who cannot see them, built to price and rank those persons. Buying the inventory is participating in that.' }
    ]
  },

  /* ---------------------------------------------------------------- TAX */
  'small-business-tax-deductions.html': {
    to: 'metax-tax-channel-parity.html',
    lede: 'Deductions are jurisdiction-specific arithmetic. The system you file them into is increasingly one you cannot argue with.',
    issues: [
      { hx: 'HX-06', title: 'Liability determined algorithmically', body: 'Automated assessment, risk scoring and flagging are now ordinary. A determination that carries material consequence, with no specific reasons and no appeal to a human with authority, is the defining harm of this category.' },
      { hx: 'HX-25', title: 'Digital-only filing turns abstention into exclusion', body: 'When the only route to discharging a legal duty is a portal, non-participation stops being a choice. Digital identity becomes a precondition of something you are entitled to by law.' },
      { hx: 'HX-19', title: 'One jurisdiction\'s assumptions exported as universal', body: 'Most tax content online — including much of ours — silently assumes one country\'s rules. Readers elsewhere are handed confident advice that is simply wrong for them.' }
    ]
  },

  /* ----------------------------------------------------------- PROPERTY */
  'rent-vs-buy-analysis.html': {
    to: 'metax-property-reversibility.html',
    lede: 'Our model compares costs; our steelman concedes it prices tenure security at zero. What neither addresses is that this is the most irreversible decision most households make.',
    issues: [
      { hx: 'HX-22', title: 'Irreversibility treated as an implementation detail', body: 'A purchase forecloses options for years, sometimes for people who do not yet exist — children who will grow up in one school district, a partner\'s career constrained by geography. The model has no row for foreclosed alternatives.' },
      { hx: 'HX-06', title: 'Valuation and screening are automated determinations', body: 'Automated valuation models set what you can borrow; tenant-screening algorithms decide whether renting remains available at all. Neither gives reasons.' },
      { hx: 'HX-10', title: 'A house is a material claim on the world', body: 'Construction, heating, and land use are the largest resource decisions a household makes. Our unrecoverable-cost framework counts money and nothing else.' }
    ]
  },
  'first-time-buyer-programs.html': {
    to: 'metax-property-reversibility.html',
    lede: 'Assistance programmes reduce the cash needed. They do not reduce how irreversible the commitment is.',
    issues: [
      { hx: 'HX-22', title: 'Programmes accelerate a decision they do not make reversible', body: 'Lower deposits mean earlier purchases with thinner reserves — a structurally less reversible position, reached faster.' },
      { hx: 'HX-13', title: 'Eligibility apparatus excludes by default', body: 'Documentation requirements, digital-only applications and credit thresholds remove the benefit from precisely the people it was designed for.' }
    ]
  },
  'property-tax-appeal.html': {
    to: 'metax-property-reversibility.html',
    lede: 'This is our one guide that is entirely about contesting a determination. It is worth knowing why that is unusual.',
    issues: [
      { hx: 'HX-06', title: 'Mass appraisal is determination at scale', body: 'Your assessment is produced by a model applied to thousands of properties. The appeal exists — which is more than most algorithmic determinations offer — but the burden of proof is yours.' },
      { hx: 'HX-13', title: 'The appeal is available to those who can reach it', body: 'Deadlines, forms and evidence requirements mean the remedy accrues to the informed and the resourced.' }
    ]
  },

  /* ------------------------------------------------------------ BANKING */
  'high-yield-savings-guide.html': {
    to: 'metax-banking-custody.html',
    lede: 'We can rank accounts by yield. We cannot tell you who will hold your transaction history in ten years — and that is the more consequential question.',
    issues: [
      { hx: 'HX-23', title: 'Custody outlives the institution\'s intent', body: 'Your account data will outlive this bank\'s current ownership, business model and competence. It may pass, through acquisition or insolvency, to a holder you never contemplated and whose intended use differs entirely from why it was collected.' },
      { hx: 'HX-05', title: 'Transaction data is the richest surveillance dataset about you', body: 'Where you go, what you treat, who you support, what you believe — all inferable from payments. Aggregation destroys practical obscurity, and anonymity is not a property a dataset can have.' },
      { hx: 'Riba', title: 'Interest on deposits is the bracketed question', body: 'A stipulated increase over principal, accruing to the depositor as a condition of the deferral. This guide optimises it; it does not examine it.' }
    ]
  },
  'bank-fees-audit.html': {
    to: 'metax-banking-custody.html',
    lede: 'Auditing fees recovers money. It also shows how much of your life the statement records.',
    issues: [
      { hx: 'HX-05', title: 'The audit is only possible because the record is total', body: 'The same completeness that lets you find an unwanted subscription is what makes the dataset valuable to everyone else who touches it.' },
      { hx: 'HX-23', title: 'You cannot audit the future holder', body: 'Fee transparency today says nothing about who inherits this data and under what terms.' }
    ]
  },
  'treasury-bills-guide.html': {
    to: 'metax-banking-custody.html',
    lede: 'Government paper is the safest conventional instrument. Safety of principal is not the only kind.',
    issues: [
      { hx: 'HX-25', title: 'Access runs through infrastructure with no alternative route', body: 'Purchase, custody and redemption are digital-only. When the digital route is the only route, abstention becomes exclusion.' },
      { hx: 'Riba', title: 'A stipulated increase over principal', body: 'Bracketed here, examined elsewhere.' }
    ]
  },

  /* ------------------------------------------------------------- CAREER */
  'salary-negotiation-playbook.html': {
    to: 'metax-career-standing.html',
    lede: 'Negotiation tactics assume you are in the room. Increasingly, the decision that matters was made before you got there.',
    issues: [
      { hx: 'HX-06', title: 'Hiring as unappealable automated determination', body: 'Resume screening, assessment scoring and video analysis produce determinations of material consequence about your livelihood, with no specific reasons and no appeal to a human with reversal authority. Most rejections you receive were not decided by a person.' },
      { hx: 'HX-09', title: 'Compensation bands are a metric that became a governor', body: 'Levelling frameworks and band structures were built to measure fairness and now determine it. Your negotiation happens inside a number set elsewhere.' }
    ]
  },
  'freelance-rate-guide.html': {
    to: 'metax-career-standing.html',
    lede: 'Setting a rate assumes you are a party to a negotiation. Platform work is designed so that you are not.',
    issues: [
      { hx: 'HX-08', title: 'Labour disassembled until it is deniable', body: 'Work broken into tasks, priced by algorithm, and mediated by a platform that describes itself as a marketplace rather than an employer. The disassembly is what makes the denial possible.' },
      { hx: 'HX-06', title: 'Deactivation without reasons or appeal', body: 'Loss of platform access is loss of livelihood, decided by a system, usually without specific reasons and without a human who can reverse it.' },
      { hx: 'HX-09', title: 'Ratings govern what they were meant to measure', body: 'A score built to inform clients becomes the mechanism that allocates work, then the mechanism that ends it.' }
    ]
  },
  'severance-package-negotiation.html': {
    to: 'metax-career-standing.html',
    lede: 'A severance negotiation is the one moment the power asymmetry of employment becomes explicit and documented.',
    issues: [
      { hx: 'Ẓulm', title: 'Consent extracted at the point of need', body: 'You are asked to sign a binding release of rights while unemployed, often on a deadline, frequently without independent advice. Consent obtained when a person cannot practically refuse is not consent.' },
      { hx: 'HX-12', title: 'The record of the dispute outlives the dispute', body: 'Resolved matters persist in files and references long past any legitimate purpose, while the evidence you would need to contest them does not.' }
    ]
  },

  /* --------------------------------------------------------- RETIREMENT */
  'social-security-timing.html': {
    to: 'metax-retirement-custody.html',
    lede: 'Claiming-age arithmetic is solvable. What happens to your affairs when you can no longer manage them is not arithmetic at all.',
    issues: [
      { hx: 'HX-24', title: 'A synthetic counterpart in a licensed professional\'s chair', body: 'Retirement guidance is being automated into a role previously held by a human adviser. Where that happens, the system must state its limits, name the human-staffed alternative, and escalate on request — and mostly it does none of these.' },
      { hx: 'HX-23', title: 'Custody passes beyond your competence and intent', body: 'Accounts, credentials and records will be held, eventually, by someone you did not choose, at a moment when you cannot object.' }
    ]
  },
  'estate-planning-essentials.html': {
    to: 'metax-retirement-custody.html',
    lede: 'Estate planning is the only category in this library whose subject is a person who cannot be consulted.',
    issues: [
      { hx: 'HX-22', title: 'Binding people who do not yet exist', body: 'Trust structures, long-lived identifiers and permanent records commit future people to arrangements they had no part in. The mechanism by which a later generation could undo them is rarely stated, and often absent.' },
      { hx: 'HX-12', title: 'A record that both vanishes and never expires', body: 'Digital assets are lost for want of access while adverse records persist indefinitely. Both limbs of the same harm, in the same estate.' },
      { hx: 'HX-23', title: 'Custody beyond the horizon', body: 'Every account you hold will outlive your management of it. Planning for the transfer is Amanah — an obligation that outlives the transaction.' }
    ]
  },
  'roth-conversion-ladder.html': {
    to: 'metax-retirement-custody.html',
    lede: 'A conversion ladder is a multi-decade commitment executed through institutions that will change hands during it.',
    issues: [
      { hx: 'HX-23', title: 'The plan outlives the custodian', body: 'A strategy measured in decades runs through providers whose ownership, terms and competence will not be constant across it.' },
      { hx: 'HX-22', title: 'Tax rules are foreclosed for successors', body: 'Long-horizon tax planning binds heirs to structures decided before their circumstances existed.' }
    ]
  }
};
