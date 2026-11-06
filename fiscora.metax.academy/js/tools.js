/* ==========================================================================
   FISCORA — Interactive model engine
   Declarative widgets: any element with data-calc="name" is wired up.
     inputs   → [data-in="field"]        (number/range/select)
     outputs  → [data-out="field"] with optional data-fmt="money|pct|num|months|money2"
     bars     → [data-bar="field"]       (0-100 width)
     charts   → [data-chart="name"]      (Chart.js canvas, optional)
   Also provides the generic scored-quiz engine ([data-quiz]).
   Every model runs client-side; no input ever leaves the browser.
   ========================================================================== */

const FiscoraTools = (() => {
  /* ------------------------------- formatting ------------------------------ */
  const money = n => (n < 0 ? '-' : '') + '$' + Math.abs(Math.round(n)).toLocaleString('en-US');
  const money2 = n => '$' + Number(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const pct = n => (Math.round(n * 10) / 10).toFixed(1) + '%';
  const num = n => Number(Math.round(n * 100) / 100).toLocaleString('en-US');
  const months = m => {
    m = Math.max(0, Math.round(m));
    const y = Math.floor(m / 12), r = m % 12;
    return (y ? y + ' yr ' : '') + r + ' mo';
  };
  const FMT = { money, money2, pct, num, months };

  /* --------------------------------- helpers ------------------------------- */
  /* Coerce anything to a finite number. This is the single most important
     guard in the engine: empty inputs, blank selects and mid-typing states
     ('', '-', '.', '1e') all used to leak through as NaN. */
  const n0 = x => {
    const n = typeof x === 'number' ? x : parseFloat(String(x == null ? '' : x).replace(/,/g, ''));
    return Number.isFinite(n) ? n : 0;
  };
  /* Division that never yields NaN or Infinity. */
  const div = (a, b, fallback) => {
    a = n0(a); b = n0(b);
    return b === 0 ? (fallback === undefined ? 0 : fallback) : a / b;
  };
  /* Percentage of a whole, clamped to 0-100, safe when whole is 0. */
  const share = (part, whole) => {
    const r = div(part, whole, 0) * 100;
    return Math.max(0, Math.min(100, Number.isFinite(r) ? r : 0));
  };
  const clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, Number.isFinite(n) ? n : lo));
  /* Loop-bound guard: a user can type 999999 into a "years" box, and an
     unbounded projection loop would freeze the tab. Every iterative model
     clamps its horizon through this. */
  const horizon = (yrs, max) => clamp(Math.round(n0(yrs)), 0, max === undefined ? 100 : max);

  const pmt = (principal, annualRate, nMonths) => {
    principal = n0(principal); nMonths = Math.max(1, Math.round(n0(nMonths)));
    const r = n0(annualRate) / 100 / 12;
    if (r === 0) return principal / nMonths;
    const denom = 1 - Math.pow(1 + r, -nMonths);
    if (!Number.isFinite(denom) || denom === 0) return principal / nMonths;
    const p = principal * r / denom;
    return Number.isFinite(p) ? p : 0;
  };

  function futureValue(initial, monthly, years, annualRate, feePct) {
    initial = n0(initial); monthly = n0(monthly);
    const r = (n0(annualRate) - n0(feePct)) / 100 / 12;
    const n = clamp(Math.round(n0(years) * 12), 0, 1200);   /* max 100 years */
    let v = initial;
    for (let i = 0; i < n; i++) v = v * (1 + r) + monthly;
    return Number.isFinite(v) ? v : 0;
  }

  function amortise(principal, rate, termMonths, extra) {
    principal = Math.max(0, n0(principal));
    rate = n0(rate);
    termMonths = Math.max(1, Math.round(n0(termMonths)));
    const payment = pmt(principal, rate, termMonths) + Math.max(0, n0(extra));
    let bal = principal, interest = 0, m = 0;
    const series = [];
    if (principal <= 0 || payment <= 0) return { payment: 0, interest: 0, months: 0, series: [{ year: 0, balance: 0 }] };
    while (bal > 0.5 && m < 1200) {
      const i = bal * (rate / 100 / 12);
      let principalPart = payment - i;
      if (principalPart <= 0) break;          /* payment cannot cover interest */
      if (principalPart > bal) principalPart = bal;
      bal -= principalPart;
      interest += i;
      m++;
      if (m % 12 === 0 || bal <= 0) series.push({ year: Math.ceil(m / 12), balance: Math.max(0, bal) });
    }
    if (!series.length) series.push({ year: 0, balance: principal });
    return {
      payment: Number.isFinite(payment) ? payment : 0,
      interest: Number.isFinite(interest) ? interest : 0,
      months: m,
      series
    };
  }

  /* ------------------------------- the models ----------------------------- */
  const MODELS = {

    /* ===================== Real estate & property ===================== */

    /* Rent vs buy: full ownership cost against renting and investing the gap */
    rentbuy(v) {
      const price = n0(v.price), down = Math.min(n0(v.down), price);
      const loan = Math.max(0, price - down);
      const pay = pmt(loan, v.rate, Math.max(1, n0(v.years)) * 12);
      const tax = price * (n0(v.taxRate) / 100) / 12;
      const ins = price * 0.004 / 12;
      const maint = price * (n0(v.maintRate) / 100) / 12;
      const ownMonthly = pay + tax + ins + maint;
      const upfront = down + price * (n0(v.closingPct) / 100);
      const r = n0(v.rate) / 100 / 12, g = n0(v.appr) / 100 / 12, inv = n0(v.invest) / 100 / 12;
      const n = clamp(Math.round(n0(v.horizon) * 12), 1, 1200);
      let bal = loan, rentPaid = 0, ownCash = upfront, rent = n0(v.rent);
      let sideFund = upfront, value = price;
      for (let m = 0; m < n; m++) {
        const i = bal * r;
        bal = Math.max(0, bal - Math.max(0, pay - i));
        value *= (1 + g);
        ownCash += ownMonthly;
        rentPaid += rent;
        sideFund = sideFund * (1 + inv) + Math.max(0, ownMonthly - rent);
        if ((m + 1) % 12 === 0) rent *= (1 + n0(v.rentGrowth) / 100);
      }
      const netSale = value * (1 - n0(v.sellPct) / 100) - bal;
      const ownNet = ownCash - netSale;
      const rentNet = rentPaid - (sideFund - upfront);
      const gap = rentNet - ownNet;
      const worst = Math.max(Math.abs(ownNet), Math.abs(rentNet));
      return {
        ownMonthly, pay, tax, maint, ins, upfront, rentStart: n0(v.rent),
        ownCash, rentPaid, netSale, sideFund, equity: Math.max(0, value - bal),
        ownNet, rentNet, gap: Math.abs(gap),
        verdict: gap > price * 0.02 ? 'Buying wins clearly over this horizon'
          : gap < -price * 0.02 ? 'Renting and investing the difference wins'
            : 'Too close to call — the decision is lifestyle, not arithmetic',
        cheaper: gap > 0 ? 'Buying' : 'Renting',
        bars: { own: share(ownNet, worst), rent: share(rentNet, worst) }
      };
    },

    /* Closing cost estimator: lender, third-party and prepaid buckets */
    closing(v) {
      const price = n0(v.price), loan = Math.max(0, price - n0(v.down));
      const origination = loan * (n0(v.origPct) / 100);
      const points = loan * (n0(v.points) / 100);
      const thirdParty = n0(v.appraisal) + n0(v.titleFees) + n0(v.recording) + n0(v.inspection);
      const prepaidTax = price * (n0(v.taxRate) / 100) * (n0(v.taxMonths) / 12);
      const prepaidIns = price * 0.004 * (n0(v.insMonths) / 12);
      const prepaidInt = loan * (n0(v.rate) / 100 / 365) * n0(v.oddDays);
      const prepaid = prepaidTax + prepaidIns + prepaidInt;
      const total = origination + points + thirdParty + prepaid;
      const negotiable = origination + points + n0(v.titleFees) * 0.4;
      const pctOfPrice = share(total, price);
      return {
        loan, origination, points, thirdParty, prepaid,
        prepaidTax, prepaidIns, prepaidInt,
        total, pctOfPrice,
        cashNeeded: total + n0(v.down),
        negotiable, credit: n0(v.sellerCredit),
        outOfPocket: Math.max(0, total + n0(v.down) - n0(v.sellerCredit)),
        band: pctOfPrice > 5 ? 'High — challenge the itemised fees'
          : pctOfPrice > 3 ? 'Typical range' : 'Lean closing package',
        bars: { negotiable: share(negotiable, total) }
      };
    },

    /* HELOC vs cash-out refinance: blended cost of tapping equity */
    helocmath(v) {
      const value = n0(v.value);
      const equity = Math.max(0, value * (n0(v.maxLtv) / 100) - n0(v.balance));
      const draw = Math.max(0, Math.min(n0(v.need), equity));
      const helocIO = draw * (n0(v.helocRate) / 100) * Math.max(0, n0(v.drawYears));
      const helocAmort = amortise(draw, v.helocRate, Math.max(1, n0(v.repayYears)) * 12, 0);
      const helocTotal = helocIO + helocAmort.interest + n0(v.helocFees);
      const refiCosts = value * (n0(v.refiCostPct) / 100);
      const newLoan = n0(v.balance) + draw + refiCosts;
      const refi = amortise(newLoan, v.refiRate, Math.max(1, n0(v.term)) * 12, 0);
      const keep = amortise(v.balance, v.currentRate, Math.max(1, n0(v.remaining)) * 12, 0);
      const refiTotal = refi.interest - keep.interest + refiCosts;
      const worst = Math.max(Math.abs(helocTotal), Math.abs(refiTotal));
      return {
        equity, draw, unusedEquity: Math.max(0, equity - draw),
        helocPayIO: draw * (n0(v.helocRate) / 100) / 12,
        helocPayAmort: helocAmort.payment,
        helocTotal, helocInterestOnly: helocIO,
        refiPay: refi.payment, keepPay: keep.payment,
        refiDelta: refi.payment - keep.payment,
        refiTotal, refiCosts,
        gap: Math.abs(helocTotal - refiTotal),
        winner: helocTotal < refiTotal ? 'HELOC costs less in total interest here' : 'Cash-out refinance is cheaper overall',
        warn: n0(v.currentRate) + 1 < n0(v.refiRate)
          ? 'You would be repricing a cheap mortgage upward — the HELOC protects your existing rate.'
          : 'Your existing rate is not materially below market, so a refinance is defensible.',
        bars: { heloc: share(helocTotal, worst), refi: share(refiTotal, worst) }
      };
    },

    /* Rental underwriting: cap rate, cash-on-cash, DSCR */
    rental(v) {
      const gross = n0(v.rent) * 12;
      const vacancy = gross * (n0(v.vacancyPct) / 100);
      const effective = gross - vacancy;
      const opex = n0(v.taxes) + n0(v.insurance) + n0(v.hoa) * 12 + n0(v.repairs) * 12 +
        gross * (n0(v.mgmtPct) / 100) + gross * (n0(v.capexPct) / 100);
      const noi = effective - opex;
      const loan = Math.max(0, n0(v.price) - n0(v.down));
      const debt = pmt(loan, v.rate, Math.max(1, n0(v.term)) * 12) * 12;
      const cashFlow = noi - debt;
      const invested = n0(v.down) + n0(v.closing) + n0(v.rehab);
      const dscr = div(noi, debt, 0);
      const coc = div(cashFlow, invested) * 100;
      return {
        gross, vacancy, effective, opex, noi, debt,
        cashFlow, monthlyCF: cashFlow / 12,
        capRate: div(noi, v.price) * 100,
        coc, dscr, invested,
        opexRatio: share(opex, effective),
        onePct: div(v.rent, v.price) * 100,
        verdict: dscr < 1.15 ? 'Fails a lender DSCR test — thin or negative margin'
          : coc < 5 ? 'Marginal: you are betting on appreciation, not cash flow'
            : 'Underwrites as a cash-flowing deal',
        bars: { dscr: share(Math.min(dscr, 2), 2), opex: share(opex, effective) }
      };
    },

    /* Property tax appeal: expected value of contesting an assessment */
    proptax(v) {
      const ratio = n0(v.ratio);
      const impliedValue = div(n0(v.assessed), ratio / 100, 0);
      const market = n0(v.marketValue);
      const over = Math.max(0, impliedValue - market);
      const fairAssessed = market * (ratio / 100);
      const currentBill = n0(v.assessed) * (n0(v.millage) / 1000);
      const fairBill = fairAssessed * (n0(v.millage) / 1000);
      const annualSave = Math.max(0, currentBill - fairBill);
      const years = Math.max(1, n0(v.years));
      const expected = annualSave * (n0(v.winOdds) / 100) * years - n0(v.cost);
      const overPct = share(over, market);
      return {
        impliedValue, over, fairAssessed, currentBill, fairBill,
        annualSave, multiYear: annualSave * years,
        expected, cost: n0(v.cost), overPct,
        verdict: expected <= 0 ? 'Not worth the filing cost at these odds'
          : annualSave < 200 ? 'Marginal — file only if the process is free in your county'
            : 'Clear positive expected value — file the appeal',
        bars: { over: clamp(overPct * 5, 0, 100) }
      };
    },

    /* First-time buyer assistance: DPA plus rate subsidy value */
    firsttime(v) {
      const price = n0(v.price);
      const down = price * (n0(v.downPct) / 100);
      const dpa = Math.min(n0(v.dpaAmount), price * 0.05);
      const loan = Math.max(0, price - down);
      const marketPay = pmt(loan, v.marketRate, 360);
      const programPay = pmt(loan, v.programRate, 360);
      const monthlySave = marketPay - programPay;
      const forgiven = n0(v.forgiveYears) <= n0(v.stayYears) ? dpa : 0;
      return {
        down, dpa, ownDown: Math.max(0, down - dpa), loan,
        marketPay, programPay, monthlySave,
        tenYear: monthlySave * 120,
        stayPeriodSave: monthlySave * 12 * Math.max(0, n0(v.stayYears)),
        forgiven, recapture: forgiven === 0 ? dpa : 0,
        totalBenefit: monthlySave * 12 * Math.max(0, n0(v.stayYears)) + forgiven,
        verdict: n0(v.stayYears) < n0(v.forgiveYears)
          ? 'You would likely move before forgiveness — treat the assistance as a repayable second lien'
          : 'You clear the forgiveness window, so the assistance is effectively a grant',
        bars: { covered: share(dpa, down) }
      };
    },

    /* ===================== Banking & cash ===================== */

    /* High-yield savings: cost of leaving cash in a legacy account */
    hysa(v) {
      const bal = n0(v.balance), years = Math.max(0, n0(v.years));
      const lazy = bal * Math.pow(1 + n0(v.oldApy) / 100, years) - bal;
      const better = bal * Math.pow(1 + n0(v.newApy) / 100, years) - bal;
      const gap = better - lazy;
      const afterTax = gap * (1 - n0(v.taxRate) / 100);
      const spread = n0(v.newApy) - n0(v.oldApy);
      return {
        lazy, better, gap, afterTax,
        monthlyIncome: bal * (n0(v.newApy) / 100) / 12,
        annualIncome: bal * (n0(v.newApy) / 100),
        realReturn: n0(v.newApy) - n0(v.inflation),
        spread,
        hourlyRate: div(gap, v.switchHours),
        verdict: n0(v.newApy) - n0(v.inflation) < 0
          ? 'Even the best account loses purchasing power — cash is for safety, not growth'
          : 'This account beats inflation on a pre-tax basis',
        bars: { spread: clamp(spread * 15, 0, 100) }
      };
    },

    /* CD ladder: rungs, blended yield and liquidity cadence */
    cdladder(v) {
      const rungs = clamp(Math.round(n0(v.rungs)), 1, 120);
      const spacing = clamp(n0(v.spacing), 1, 120);
      const perRung = div(n0(v.total), rungs);
      let blended = 0, interest = 0;
      for (let i = 1; i <= rungs; i++) {
        const term = i * spacing;
        const rate = n0(v.baseRate) + (n0(v.slope) * (term - spacing) / 12);
        blended += rate / rungs;
        interest += perRung * (rate / 100) * (term / 12);
      }
      const savingsAlt = n0(v.total) * (n0(v.savingsApy) / 100) * (rungs * spacing / 24);
      return {
        perRung, blended, interest, rungs,
        liquidityEvery: spacing,
        vsSavings: interest - savingsAlt,
        maxTerm: rungs * spacing,
        avgMaturity: (rungs + 1) / 2 * spacing,
        penaltyRisk: perRung * (n0(v.baseRate) / 100) * 0.5,
        verdict: n0(v.slope) < 0
          ? 'The curve is inverted — short rungs pay more, so keep the ladder tight'
          : 'Upward curve rewards extending the longest rung',
        bars: { blended: clamp(blended * 12, 0, 100) }
      };
    },

    /* Treasury bills: discount, coupon-equivalent and tax-equivalent yield */
    tbill(v) {
      const face = n0(v.face), days = Math.max(1, n0(v.days));
      const price = face * (1 - (n0(v.discount) / 100) * (days / 360));
      const gain = face - price;
      const bey = div(gain, price) * (365 / days) * 100;
      const tey = div(bey, 1 - n0(v.stateRate) / 100, bey);
      const cdAfterTax = n0(v.cdRate) * (1 - (n0(v.fedRate) + n0(v.stateRate)) / 100);
      const tbAfterTax = bey * (1 - n0(v.fedRate) / 100);
      return {
        price, gain, bey, tey, cdAfterTax, tbAfterTax,
        edge: tbAfterTax - cdAfterTax,
        annualIncome: face * (bey / 100),
        stateSaved: face * (bey / 100) * (n0(v.stateRate) / 100),
        rollsPerYear: Math.round(365 / days),
        verdict: tbAfterTax > cdAfterTax
          ? 'Treasuries win after tax — the state exemption is doing the work'
          : 'The CD wins after tax at these rates',
        bars: { edge: clamp(Math.abs(tbAfterTax - cdAfterTax) * 40, 0, 100) }
      };
    },

    /* Bank fee audit: annualised leakage plus yield forgone */
    bankfees(v) {
      const annual = n0(v.maintenance) * 12 + n0(v.overdraft) * n0(v.odCount) +
        n0(v.atm) * n0(v.atmCount) + n0(v.wire) * n0(v.wireCount) +
        n0(v.fx) * n0(v.fxCount) + n0(v.other);
      const yieldLoss = Math.max(0, n0(v.balance) * ((n0(v.marketApy) - n0(v.yourApy)) / 100));
      const trueCost = annual + yieldLoss;
      return {
        annual, monthly: annual / 12,
        tenYear: annual * 10,
        invested: futureValue(0, annual / 12, 10, v.rate, 0),
        yieldLoss, trueCost,
        pctOfBalance: share(trueCost, v.balance),
        biggest: n0(v.overdraft) * n0(v.odCount) >= n0(v.maintenance) * 12
          ? 'Overdraft and NSF charges' : 'Monthly maintenance fees',
        verdict: trueCost > 400 ? 'Switching banks is worth an afternoon of your time'
          : trueCost > 120 ? 'Worth one phone call to request fee waivers'
            : 'Your banking is reasonably efficient',
        bars: { leak: clamp(share(trueCost, v.balance) * 20, 0, 100) }
      };
    },

    /* Business banking: reserve structure and idle-cash yield */
    bizbank(v) {
      const operating = n0(v.operating), burn = n0(v.monthlyBurn);
      const reserveTarget = burn * Math.max(0, n0(v.bufferMonths));
      const idle = Math.max(0, operating - reserveTarget);
      const sweepYield = idle * (n0(v.sweepApy) / 100);
      const currentYield = idle * (n0(v.currentApy) / 100);
      const fees = n0(v.monthlyFee) * 12 + n0(v.txnFee) * n0(v.txnCount) * 12;
      const waived = operating >= n0(v.waiverBalance) ? n0(v.monthlyFee) * 12 : 0;
      return {
        idle, sweepYield, currentYield,
        uplift: sweepYield - currentYield,
        fees, waived, netFees: fees - waived,
        reserveTarget,
        taxReserve: burn * 12 * (n0(v.taxRate) / 100) / 4,
        runwayMonths: div(operating, burn, 999),
        verdict: operating < burn * 3
          ? 'Thin reserve — build the buffer before chasing yield'
          : 'You have idle cash that should be earning in a sweep or T-bill ladder',
        bars: { idle: share(idle, operating) }
      };
    },

    /* ===================== Career & income ===================== */

    /* Salary negotiation: lifetime value of the counter-offer */
    salaryneg(v) {
      const offer = n0(v.offer), gain = n0(v.counter) - offer;
      const years = clamp(Math.round(n0(v.years)), 1, 60);
      let base = offer, counterBase = n0(v.counter), cum = 0;
      for (let y = 0; y < years; y++) {
        base *= (1 + n0(v.raise) / 100);
        counterBase *= (1 + n0(v.raise) / 100);
        cum += counterBase - base;
      }
      const lifetime = gain + cum;
      const matchGain = gain * (n0(v.matchPct) / 100) * years;
      const afterTax = gain * (1 - n0(v.taxRate) / 100);
      const gainPct = share(gain, offer);
      return {
        gain, gainPct, lifetime, matchGain,
        total: lifetime + matchGain,
        invested: futureValue(0, afterTax / 12, years, v.rate, 0),
        perMinute: div(lifetime, Math.max(1, n0(v.negMinutes))),
        afterTax, monthlyAfterTax: afterTax / 12,
        verdict: gain <= 0 ? 'Set a counter above the offer to see the compounding effect'
          : gainPct > 20 ? 'Aggressive ask — anchor it to market data and scope'
            : 'Well inside the normal negotiation band; almost always worth asking',
        bars: { ask: clamp(gainPct * 4, 0, 100) }
      };
    },

    /* RSUs vs options under a share-price path */
    rsu(v) {
      const future = n0(v.futurePrice);
      const rsuValue = n0(v.rsuUnits) * future;
      const rsuAfterTax = rsuValue * (1 - n0(v.ordinaryRate) / 100);
      const spread = Math.max(0, future - n0(v.strike));
      const optValue = n0(v.optUnits) * spread;
      const optRate = n0(v.longTerm) === 1 ? n0(v.capRate) : n0(v.ordinaryRate);
      const optAfterTax = optValue * (1 - optRate / 100);
      const worst = Math.max(rsuAfterTax, optAfterTax, 1);
      const concentration = share(rsuValue, v.netWorth);
      return {
        rsuValue, rsuAfterTax, optValue, optAfterTax, spread,
        exerciseCost: n0(v.optUnits) * n0(v.strike),
        breakeven: n0(v.strike),
        gap: Math.abs(rsuAfterTax - optAfterTax),
        downsideRsu: n0(v.rsuUnits) * n0(v.downPrice) * (1 - n0(v.ordinaryRate) / 100),
        downsideOpt: n0(v.optUnits) * Math.max(0, n0(v.downPrice) - n0(v.strike)),
        vestedNow: n0(v.rsuUnits) * (n0(v.vestedPct) / 100) * future,
        concentration,
        winner: rsuAfterTax >= optAfterTax
          ? 'RSUs deliver more after tax on this price path'
          : 'Options deliver more after tax on this price path',
        risk: concentration > 20
          ? 'Concentration above 20% of net worth — sell into the vest'
          : 'Concentration is within a defensible range',
        bars: { rsu: share(rsuAfterTax, worst), opt: share(optAfterTax, worst) }
      };
    },

    /* Freelance rate: the hourly number that replaces a salary */
    freelance(v) {
      const workWeeks = Math.max(1, 52 - n0(v.vacationWeeks) - n0(v.sickWeeks));
      const billableHours = workWeeks * n0(v.hoursPerWeek) * (n0(v.utilisation) / 100);
      const overhead = n0(v.software) + n0(v.insurance) + n0(v.equipment) + n0(v.marketing) + n0(v.accounting);
      const target = n0(v.targetIncome);
      const selfTax = target * (n0(v.selfTaxRate) / 100);
      const required = target + overhead + selfTax + n0(v.healthcare) + n0(v.retirement);
      const rate = div(required, billableHours);
      const naiveRate = div(target, 2080);
      return {
        workWeeks, billableHours, overhead, selfTax, required,
        rate, dayRate: rate * 8,
        weekRate: rate * n0(v.hoursPerWeek) * (n0(v.utilisation) / 100),
        salaryEquivalent: target + n0(v.healthcare) + n0(v.retirement),
        naiveRate,
        premium: (div(rate, naiveRate, 1) - 1) * 100,
        projectMin: rate * 20,
        verdict: n0(v.utilisation) < 50
          ? 'Utilisation below 50% means your rate must carry a lot of unbilled time'
          : 'Realistic utilisation — this rate is defensible to clients',
        bars: { util: clamp(n0(v.utilisation), 0, 100) }
      };
    },

    /* Career change runway */
    runway(v) {
      const monthlyNeed = n0(v.fixed) + n0(v.variable);
      const income = n0(v.partTime) + n0(v.partnerIncome) + n0(v.severanceMonthly);
      const burn = Math.max(0, monthlyNeed - income);
      const savings = n0(v.savings);
      const trainingTotal = n0(v.trainingCost);
      const afterTraining = Math.max(0, savings - trainingTotal);
      const monthsAfter = div(afterTraining, burn, 999);
      const searchMonths = Math.max(1, n0(v.searchMonths));
      const salaryDelta = n0(v.targetSalary) - n0(v.currentSalary);
      return {
        monthlyNeed, income, burn,
        months: div(savings, burn, 999),
        monthsAfter, trainingTotal, afterTraining,
        newIncome: n0(v.targetSalary) / 12 * (1 - n0(v.taxRate) / 100),
        payback: salaryDelta > 0 ? div(trainingTotal + burn * searchMonths, salaryDelta / 12, 999) : 999,
        cutNeeded: Math.max(0, burn - div(savings, searchMonths)),
        safeMonths: Math.floor(Math.min(monthsAfter, 999)),
        verdict: monthsAfter < searchMonths
          ? 'Runway is shorter than a realistic search — extend it before you resign'
          : monthsAfter < searchMonths * 1.5
            ? 'Tight but feasible with disciplined spending'
            : 'Comfortable runway for a full search cycle',
        bars: { covered: share(Math.min(monthsAfter, 999), searchMonths) }
      };
    },

    /* Severance: total package value and negotiation gap */
    severance(v) {
      const weekly = div(n0(v.salary), 52);
      const base = n0(v.weeksOffered) * weekly;
      const target = n0(v.weeksTarget) * weekly;
      const cobra = n0(v.cobraMonths) * n0(v.cobraCost);
      const bonusPro = n0(v.bonus) * (n0(v.monthsWorked) / 12);
      const ptoPay = n0(v.ptoDays) * div(n0(v.salary), 260);
      const extras = cobra + bonusPro + ptoPay + n0(v.outplacement) + n0(v.equityAccel);
      const total = base + extras;
      const targetTotal = target + extras;
      const afterTax = total * (1 - n0(v.taxRate) / 100);
      const weeksPerYear = div(n0(v.weeksOffered), n0(v.tenure));
      return {
        base, target, cobra, bonusPro, ptoPay, total, targetTotal,
        gap: targetTotal - total, afterTax,
        monthsCovered: div(afterTax, v.monthlyNeed),
        uiOffset: n0(v.uiWeekly) * Math.min(26, n0(v.weeksOffered)),
        weeksPerYear,
        verdict: weeksPerYear < 1.5
          ? 'Below the common one-to-two weeks per year of service — there is room to counter'
          : 'At or above typical market practice for your tenure',
        bars: { gap: share(total, targetTotal) }
      };
    },

    /* ===================== Investing additions ===================== */

    /* Tax-loss harvesting: deferral value of a realised loss */
    tlh(v) {
      const basis = n0(v.basis);
      const loss = Math.max(0, basis - n0(v.value));
      const offsetGains = Math.min(loss, n0(v.gains));
      const offsetIncome = Math.min(Math.max(0, loss - offsetGains), 3000);
      const carryforward = Math.max(0, loss - offsetGains - offsetIncome);
      const saved = offsetGains * (n0(v.capRate) / 100) + offsetIncome * (n0(v.ordinaryRate) / 100);
      const grown = futureValue(saved, 0, v.years, v.rate, 0);
      const futureTax = loss * (n0(v.capRate) / 100);
      return {
        loss, offsetGains, offsetIncome, carryforward,
        saved, grown, futureTax,
        netBenefit: grown - futureTax,
        carryYears: Math.ceil(div(carryforward, 3000)),
        washWindow: 61,
        effectivePct: share(saved, basis),
        verdict: saved < 200 ? 'Too small to justify the tracking complexity'
          : grown - futureTax > 0
            ? 'Positive after accounting for the lowered basis'
            : 'The deferral does not beat the future tax at this horizon',
        bars: { used: share(offsetGains + offsetIncome, loss) }
      };
    },

    /* REIT income: after-tax yield vs a bond alternative */
    reityield(v) {
      const invest = n0(v.invest);
      const income = invest * (n0(v.yield) / 100);
      const qbiDeduction = income * (n0(v.ordinaryPortion) / 100) * 0.20;
      const tax = Math.max(0, income - qbiDeduction) * (n0(v.taxRate) / 100);
      const afterTax = income - tax;
      const bondAfterTax = invest * (n0(v.bondYield) / 100) * (1 - n0(v.taxRate) / 100);
      const afterTaxYield = div(afterTax, invest) * 100;
      return {
        income, qbiDeduction, tax, afterTax, afterTaxYield,
        bondAfterTax, edge: afterTax - bondAfterTax,
        total: n0(v.yield) + n0(v.growth),
        monthlyIncome: afterTax / 12,
        shelteredGain: income * (n0(v.taxRate) / 100),
        verdict: afterTax > bondAfterTax
          ? 'REITs win after tax at these assumptions — but carry equity volatility'
          : 'The bond alternative wins after tax without the drawdown risk',
        placement: n0(v.taxRate) > 24
          ? 'Hold REITs in a tax-deferred account — the ordinary-income treatment is punitive at your bracket'
          : 'Taxable placement is tolerable at your bracket',
        bars: { after: share(afterTaxYield, n0(v.yield)) }
      };
    },

    /* Bond ladder: rolling reinvestment and rate-shock resilience */
    bondladder(v) {
      const rungs = clamp(Math.round(n0(v.rungs)), 1, 120);
      const total = n0(v.total);
      const perRung = div(total, rungs);
      let income = 0;
      for (let i = 1; i <= rungs; i++) income += perRung * ((n0(v.baseYield) + n0(v.slope) * (i - 1)) / 100);
      const avgYield = div(income, total) * 100;
      const duration = (rungs + 1) / 2;
      const shockLoss = total * (duration * (n0(v.shock) / 100));
      const rollUp = perRung * (n0(v.shock) / 100) * (rungs / 2);
      return {
        perRung, income, avgYield, duration,
        monthlyIncome: income / 12,
        shockLoss, rollUp,
        netShock: shockLoss - rollUp * 3,
        maturingPerYear: perRung,
        recoveryYears: div(shockLoss, income),
        realYield: avgYield - n0(v.inflation),
        verdict: avgYield - n0(v.inflation) < 0.5
          ? 'Real yield is thin — the ladder is capital preservation, not income'
          : 'The ladder clears inflation with a usable real spread',
        bars: { dur: share(duration, 15) }
      };
    },

    /* HSA: the triple tax advantage quantified */
    hsa(v) {
      const contribution = n0(v.annual);
      const fedSaved = contribution * (n0(v.marginalRate) / 100);
      const ficaSaved = n0(v.payroll) === 1 ? contribution * 7.65 / 100 : 0;
      const years = horizon(v.years, 80);
      const spendNow = Math.min(n0(v.spendNow), contribution);
      const invested = futureValue(v.balance, (contribution - spendNow) / 12, years, v.rate, v.feePct);
      const taxableEquivalent = futureValue(
        v.balance,
        ((contribution - spendNow) * (1 - (n0(v.marginalRate) + 7.65) / 100)) / 12,
        years, n0(v.rate) * 0.85, v.feePct
      );
      return {
        contribution, fedSaved, ficaSaved,
        yearOneSaved: fedSaved + ficaSaved,
        lifetimeSaved: (fedSaved + ficaSaved) * years,
        invested, taxableEquivalent,
        edge: invested - taxableEquivalent,
        receiptBank: spendNow * years,
        verdict: spendNow > contribution * 0.5
          ? 'You are spending most of the contribution — the investment advantage never compounds'
          : 'Paying medical costs from cash flow lets the account behave like a superior IRA',
        bars: { edge: clamp(share(invested - taxableEquivalent, invested) * 3, 0, 100) }
      };
    },

    /* ===================== Insurance additions ===================== */

    /* Umbrella liability sizing */
    umbrella(v) {
      const exposed = n0(v.netWorth) + n0(v.futureIncome) * n0(v.yearsToRetire) * 0.5;
      const underlying = Math.min(n0(v.autoLiability), n0(v.homeLiability));
      const gap = Math.max(0, exposed - underlying);
      const recommended = Math.ceil(div(gap, 1000000)) * 1000000;
      const premium = div(recommended, 1000000) * n0(v.perMillion);
      return {
        exposed, underlying, gap, recommended, premium,
        costPerMillion: n0(v.perMillion),
        premiumPct: share(premium, exposed),
        dailyCost: premium / 365,
        underlyingBump: n0(v.autoLiability) < 250000
          ? 'Raise auto liability to 250/500 first — umbrellas require it'
          : 'Underlying limits meet typical umbrella requirements',
        verdict: gap <= 0 ? 'Existing liability limits already cover your exposure'
          : recommended >= 3000000 ? 'High exposure — layer coverage and review annually'
            : 'A single-million policy closes most of the gap cheaply',
        bars: { covered: share(underlying, exposed) }
      };
    },

    /* Long-term care: self-fund vs insure */
    ltc(v) {
      const yearsUntil = clamp(n0(v.yearsUntil), 0, 80);
      const futureCost = n0(v.dailyCost) * 365 * Math.pow(1 + n0(v.inflation) / 100, yearsUntil);
      const totalNeed = futureCost * Math.max(0, n0(v.careYears));
      const premium = n0(v.premium);
      const premiumsPaid = premium * 12 * yearsUntil;
      const selfFund = futureValue(v.assets, premium, yearsUntil, v.rate, 0);
      const benefitPool = n0(v.dailyBenefit) * 365 * Math.max(0, n0(v.benefitYears)) *
        Math.pow(1 + n0(v.inflationRider) / 100, yearsUntil);
      return {
        futureCost, totalNeed, premiumsPaid, selfFund, benefitPool,
        coverage: share(benefitPool, totalNeed),
        shortfall: Math.max(0, totalNeed - benefitPool),
        selfFundGap: Math.max(0, totalNeed - selfFund),
        breakevenYears: div(benefitPool, premium * 12),
        annualPremiumPct: share(premium * 12, v.assets),
        verdict: selfFund > totalNeed * 1.5
          ? 'Your assets can absorb the risk — insuring is optional'
          : benefitPool > totalNeed * 0.7
            ? 'The policy covers most of a realistic claim'
            : 'Coverage is thin against projected costs',
        bars: { cov: share(benefitPool, totalNeed) }
      };
    },

    /* Annuity payout vs systematic withdrawal */
    annuities(v) {
      const premium = n0(v.premium);
      const annualPayout = premium * (n0(v.payoutRate) / 100);
      const span = clamp(Math.round(n0(v.lifeExpectancy)), 1, 100);
      let bal = premium, drawn = 0, ranOut = 0;
      for (let y = 0; y < span; y++) {
        bal *= (1 + n0(v.rate) / 100);
        const d = Math.min(bal, annualPayout);
        bal -= d; drawn += d;
        if (bal <= 0) { ranOut = y + 1; bal = 0; break; }
      }
      return {
        annualPayout, monthlyPayout: annualPayout / 12,
        totalPayout: annualPayout * span,
        selfDrawn: drawn, residual: bal,
        ranOut: ranOut ? 'Year ' + ranOut : 'Never during the horizon',
        breakevenAge: n0(v.startAge) + Math.round(div(premium, annualPayout)),
        feeDrag: premium * (n0(v.fees) / 100) * span,
        surrender: premium * (n0(v.surrenderPct) / 100),
        inflationLoss: annualPayout - div(annualPayout, Math.pow(1 + n0(v.inflation) / 100, span), annualPayout),
        verdict: ranOut
          ? 'The portfolio runs dry before the annuity would — longevity insurance has real value here'
          : 'A self-managed portfolio sustains the same income and leaves a residual estate',
        bars: { payout: clamp(n0(v.payoutRate) * 12, 0, 100) }
      };
    },

    /* ===================== Credit additions ===================== */

    /* Debt consolidation: does the new loan actually cost less? */
    consolidate(v) {
      const totalBalance = n0(v.balances);
      const cur = amortise(totalBalance, v.currentApr, Math.max(1, n0(v.currentTerm)) * 12, 0);
      const fee = totalBalance * (n0(v.originationPct) / 100);
      const newPrincipal = totalBalance + fee;
      const nw = amortise(newPrincipal, v.newApr, Math.max(1, n0(v.newTerm)) * 12, 0);
      return {
        totalBalance, fee, newPrincipal,
        currentPay: cur.payment, newPay: nw.payment,
        payDelta: cur.payment - nw.payment,
        currentInterest: cur.interest, newInterest: nw.interest,
        saved: cur.interest - nw.interest,
        currentMonths: cur.months, newMonths: nw.months,
        effectiveApr: n0(v.newApr) + div(n0(v.originationPct), Math.max(1, n0(v.newTerm))),
        verdict: nw.interest > cur.interest
          ? 'Lower payment but MORE total interest — you are stretching the term, not saving'
          : n0(v.newApr) >= n0(v.currentApr)
            ? 'No rate advantage: consolidation only simplifies here'
            : 'Genuine interest saving, provided you do not re-borrow on the cleared cards',
        warn: nw.interest < cur.interest && n0(v.newTerm) * 12 > cur.months
          ? 'Term extension is doing part of the work — compare total interest, not payment.'
          : 'Term is comparable, so the saving is rate-driven.',
        bars: { saved: share(cur.interest - nw.interest, cur.interest) }
      };
    },

    /* Rewards cards: net value after fee, credits and interest */
    rewards(v) {
      const spend = n0(v.spend), bonusSpend = n0(v.bonusSpend);
      const baseEarn = spend * (n0(v.baseRate) / 100);
      const bonusEarn = bonusSpend * (n0(v.bonusRate) / 100);
      const gross = baseEarn + bonusEarn + div(n0(v.signupBonus), Math.max(1, n0(v.years)));
      const interest = n0(v.carriedBalance) * (n0(v.apr) / 100);
      const net = gross + n0(v.credits) - n0(v.annualFee) - interest;
      return {
        baseEarn, bonusEarn, gross, credits: n0(v.credits), interest,
        net, annualFee: n0(v.annualFee),
        effectiveRate: div(net, spend + bonusSpend) * 100,
        breakevenSpend: div(n0(v.annualFee) - n0(v.credits), n0(v.baseRate) / 100),
        interestVsRewards: interest > gross
          ? 'Interest exceeds every reward you earn' : 'Rewards exceed interest paid',
        fiveYear: net * 5,
        verdict: n0(v.carriedBalance) > 0
          ? 'Carrying a balance destroys the entire rewards case — pay in full or switch to a low-APR card'
          : net > 0 ? 'The card earns its fee at your spending pattern'
            : 'The fee outruns the rewards — downgrade to a no-fee version',
        bars: { net: share(net, gross) }
      };
    },

    /* Business credit file strength and borrowing capacity */
    bizcredit(v) {
      const tl = n0(v.tradelines), mh = n0(v.monthsHistory);
      const ot = n0(v.onTimePct), ut = n0(v.utilisation);
      const score = clamp(
        (tl >= 5 ? 25 : tl * 5) +
        (mh >= 24 ? 25 : (mh / 24) * 25) +
        (ot >= 100 ? 25 : (ot / 100) * 25) +
        (ut <= 30 ? 25 : Math.max(0, 25 - (ut - 30) / 3)), 0, 100);
      const capacity = n0(v.revenue) * (score >= 75 ? 0.20 : score >= 50 ? 0.12 : 0.06);
      const rate = n0(v.baseRate) + (score >= 75 ? 0 : score >= 50 ? 3 : 8);
      return {
        score,
        band: score >= 75 ? 'Bankable' : score >= 50 ? 'Alternative lenders' : 'Personal guarantee required',
        capacity, rate,
        monthlyPayment: pmt(capacity, rate, 60),
        pgRisk: score < 50 ? 'High — expect a personal guarantee and possibly a lien' : 'Moderate',
        rateCost: capacity * ((rate - n0(v.baseRate)) / 100),
        monthsToBankable: score >= 75 ? 0 : Math.max(0, 24 - mh) + (tl < 5 ? 6 : 0),
        nextAction: tl < 5
          ? 'Open net-30 vendor accounts that report to commercial bureaus'
          : ut > 30 ? 'Bring revolving utilisation under 30% before applying'
            : 'Request a credit-limit review and apply to a relationship bank',
        bars: { score }
      };
    },

    /* ===================== Business & marketing additions ===================== */

    /* Unit economics: CAC, LTV, payback and the growth constraint */
    unitecon(v) {
      const cac = div(n0(v.salesSpend) + n0(v.marketingSpend), v.newCustomers);
      const grossMargin = n0(v.arpu) * (n0(v.marginPct) / 100);
      const lifetimeMonths = div(100, v.churnPct, 120);
      const ltv = grossMargin * lifetimeMonths;
      const payback = div(cac, grossMargin, 999);
      const ratio = div(ltv, cac);
      return {
        cac, grossMargin, lifetimeMonths, ltv, payback, ratio,
        annualChurnCost: n0(v.customers) * (n0(v.churnPct) / 100) * 12 * grossMargin,
        magicNumber: div(n0(v.arrGrowth) / 4, v.salesSpend),
        maxSpend: ltv / 3,
        band: ratio >= 3 && payback <= 12 ? 'Healthy — spend more'
          : ratio >= 3 ? 'Good LTV but slow payback: cash-constrained growth'
            : ratio >= 1.5 ? 'Marginal — fix retention before scaling spend'
              : 'Broken unit economics',
        verdict: payback > 18
          ? 'Payback beyond 18 months means growth consumes cash faster than it creates it'
          : 'Payback is inside the range venture and bank lenders will fund',
        bars: { ratio: share(Math.min(ratio, 5), 5), payback: share(Math.min(payback, 24), 24) }
      };
    },

    /* Monthly cash-flow forecast with a trough warning */
    cashflowfc(v) {
      const months = clamp(Math.round(n0(v.months)), 1, 600);
      let cash = n0(v.startCash);
      const rows = [{ year: 0, balance: cash }];
      let lowest = cash, lowestMonth = 0;
      for (let m = 1; m <= months; m++) {
        const rev = n0(v.revenue) * Math.pow(1 + n0(v.growth) / 100, m - 1);
        const collected = rev * (n0(v.collectionPct) / 100);
        const costs = n0(v.fixed) + rev * (n0(v.varPct) / 100) + (m % 3 === 0 ? n0(v.quarterly) : 0);
        cash += collected - costs;
        if (cash < lowest) { lowest = cash; lowestMonth = m; }
        rows.push({ year: m, balance: cash });
      }
      const burn = div(n0(v.startCash) - cash, months);
      return {
        endCash: cash, lowest, lowestMonth,
        burn: burn > 0 ? burn : 0,
        runway: burn > 0 ? div(n0(v.startCash), burn, 999) : 999,
        receivableDrag: n0(v.revenue) * (1 - n0(v.collectionPct) / 100) * months,
        breakevenRevenue: div(n0(v.fixed), 1 - n0(v.varPct) / 100),
        bufferNeeded: Math.max(0, -lowest) + n0(v.fixed),
        status: lowest < 0
          ? 'Forecast goes cash-negative in month ' + lowestMonth
          : 'Stays cash-positive across the horizon',
        verdict: lowest < n0(v.fixed)
          ? 'Trough is inside one month of fixed costs — arrange a facility now'
          : 'Comfortable trough relative to fixed costs',
        chart: { name: 'cash', series: rows },
        bars: { trough: share(lowest, v.startCash) }
      };
    },

    /* Affiliate economics: EPC, RPM and content payback */
    affiliate(v) {
      const sessions = n0(v.sessions);
      const clicks = sessions * (n0(v.ctr) / 100);
      const conversions = clicks * (n0(v.cvr) / 100);
      const revenue = conversions * n0(v.commission);
      const epc = div(revenue, clicks);
      const rpm = div(revenue, sessions) * 1000;
      const cost = n0(v.articles) * n0(v.costPerArticle);
      return {
        clicks, conversions, revenue, epc, rpm, cost,
        monthly: revenue,
        payback: div(cost, revenue, 999),
        annual: revenue * 12,
        perArticle: div(revenue, v.articles),
        adRpmCompare: rpm - n0(v.displayRpm),
        blendedRpm: rpm + n0(v.displayRpm),
        verdict: rpm < n0(v.displayRpm)
          ? 'Display advertising out-earns affiliate on this traffic — keep the ad units'
          : 'Affiliate placement beats display RPM; consider reducing ad density on these pages',
        bars: { rpm: share(rpm, rpm + n0(v.displayRpm)) }
      };
    },

    /* CRO: value of a lift plus the sample size it needs */
    cro(v) {
      const visitors = n0(v.visitors), cvr = n0(v.cvr);
      const baseConv = visitors * (cvr / 100);
      const newCvr = cvr * (1 + n0(v.lift) / 100);
      const newConv = visitors * (newCvr / 100);
      const extraRevenue = (newConv - baseConv) * n0(v.aov);
      const p = cvr / 100, relative = n0(v.lift) / 100;
      const sample = (p > 0 && relative > 0)
        ? Math.ceil(div(16 * p * (1 - p), Math.pow(p * relative, 2))) : 0;
      const weekly = div(visitors, 4.33);
      const weeks = div(sample * 2, weekly, 999);
      return {
        baseConv, newCvr, newConv, extraRevenue,
        annual: extraRevenue * 12,
        sample, weeks,
        perVisitor: div(extraRevenue, visitors),
        costOfTest: n0(v.testCost),
        roi: div(extraRevenue * 12 - n0(v.testCost), v.testCost) * 100,
        feasible: weeks <= 8
          ? 'Test is reachable inside two months'
          : 'Traffic is too thin for this effect size — test bigger changes',
        verdict: cvr < 1
          ? 'Sub-1% conversion means the problem is usually offer or traffic quality, not button colour'
          : 'Conversion is high enough that incremental testing pays',
        bars: { lift: clamp(n0(v.lift) * 2, 0, 100) }
      };
    },

    /* ===================== Tax additions ===================== */

    /* Quarterly estimated tax and the safe-harbour test */
    estimated(v) {
      const selfIncome = n0(v.selfIncome);
      const netSE = selfIncome * 0.9235;
      const seTax = netSE * 0.153;
      const agi = selfIncome + n0(v.w2Income) - seTax / 2;
      const taxable = Math.max(0, agi - n0(v.deduction));
      const incomeTax = taxable * (n0(v.effRate) / 100);
      const totalTax = incomeTax + seTax;
      const withheld = n0(v.withheld);
      const due = Math.max(0, totalTax - withheld);
      const safeHarbour = Math.min(totalTax * 0.9, n0(v.priorYearTax) * (agi > 150000 ? 1.10 : 1.00));
      const shortfall = Math.max(0, safeHarbour - withheld - n0(v.paidToDate));
      return {
        netSE, seTax, agi, taxable, incomeTax, totalTax,
        due, perQuarter: due / 4, safeHarbour, shortfall,
        penaltyEstimate: shortfall * 0.08 * 0.5,
        setAsidePct: share(totalTax, selfIncome),
        monthlyReserve: due / 12,
        verdict: shortfall <= 0
          ? 'You are inside safe harbour — no underpayment penalty'
          : 'Shortfall against safe harbour: increase the next payment or raise W-2 withholding',
        bars: { paid: share(withheld + n0(v.paidToDate), safeHarbour) }
      };
    },

    /* Withdrawal sequencing: bracket filling across account types */
    withdraworder(v) {
      const need = n0(v.spend);
      const ssTaxable = n0(v.socialSecurity) * 0.85;
      const other = n0(v.otherIncome);
      const bracketTop = n0(v.bracketTop);
      const roomToTop = Math.max(0, bracketTop - (ssTaxable + other));
      const traditional = n0(v.traditional);
      const naiveTrad = Math.min(need, traditional);
      const naiveTax = naiveTrad * (n0(v.higherRate) / 100);
      const fillTrad = Math.min(need, roomToTop, traditional);
      const fromRoth = Math.max(0, need - fillTrad - Math.min(n0(v.taxable), need));
      const optTax = fillTrad * (n0(v.lowerRate) / 100);
      const conversionRoom = Math.max(0, roomToTop - fillTrad);
      return {
        need, ssTaxable, roomToTop,
        naiveTax, optTax, saved: naiveTax - optTax,
        fillTrad, fromRoth, conversionRoom,
        lifetimeSaved: (naiveTax - optTax) * Math.max(1, n0(v.years)),
        rmdEstimate: div(traditional, 24.6),
        irmaaRisk: (ssTaxable + other + fillTrad) > n0(v.irmaaThreshold)
          ? 'Above the IRMAA threshold — Medicare premiums will step up'
          : 'Below the IRMAA threshold',
        effRate: share(optTax, need),
        verdict: conversionRoom > 5000
          ? 'You have unused low-bracket room — convert ' + money(conversionRoom) + ' to Roth this year'
          : 'Bracket is already full; further conversions cost more than they save',
        bars: { filled: share(ssTaxable + other + fillTrad, bracketTop) }
      };
    },

    /* Sales tax nexus exposure */
    nexus(v) {
      const revenue = n0(v.revenue);
      const states = Math.max(1, Math.round(n0(v.states)));
      const threshold = Math.max(1, n0(v.threshold));
      const perState = div(revenue, states);
      const triggered = perState >= threshold ? states : Math.floor(div(revenue, threshold));
      const untaxed = revenue * (n0(v.directPct) / 100);
      const yearsBack = Math.max(0, n0(v.yearsBack));
      const exposure = untaxed * (n0(v.avgRate) / 100) * yearsBack;
      const penalties = exposure * (n0(v.penaltyPct) / 100);
      const interest = exposure * 0.06 * yearsBack / 2;
      return {
        perState, triggered, untaxed,
        exposure, penalties, interest,
        total: exposure + penalties + interest,
        annualFiling: triggered * n0(v.filingCost),
        vdaSaving: penalties + interest * 0.5,
        registrationCost: triggered * 100,
        marketplaceCovered: revenue * (1 - n0(v.directPct) / 100),
        verdict: triggered === 0
          ? 'No economic nexus triggered at these volumes — monitor quarterly'
          : exposure > 25000
            ? 'Material back-liability — a voluntary disclosure agreement is usually cheaper than waiting'
            : 'Register prospectively and keep the exposure contained',
        bars: { risk: clamp(share(exposure, revenue) * 10, 0, 100) }
      };
    },

    /* Article widget: what fund fees really cost */
    feedrag(v) {
      const cheap = futureValue(v.balance, v.monthly, v.years, v.rate, v.feeLow);
      const dear = futureValue(v.balance, v.monthly, v.years, v.rate, v.feeHigh);
      const contributed = v.balance + v.monthly * v.years * 12;
      return {
        cheap, dear, gap: cheap - dear, contributed,
        gapPct: share(cheap - dear, cheap),
        bars: { gap: clamp(share(cheap - dear, cheap) * 4, 0, 100) }
      };
    },

    /* Article widget: refinance break-even */
    breakeven(v) {
      const n = v.years * 12;
      const oldPay = pmt(v.balance, v.oldRate, n);
      const newPay = pmt(v.balance, v.newRate, n);
      const save = oldPay - newPay;
      const be = save > 0 ? div(v.costs, save, 999) : 999;
      return {
        oldPay, newPay, save,
        breakeven: Number.isFinite(be) ? be : 999,
        verdict: save <= 0 ? 'No monthly saving — refinancing costs you' :
          be <= 24 ? 'Strong: you clear costs in under two years' :
            be <= 48 ? 'Workable if you stay put beyond the break-even' : 'Weak: costs take too long to recover',
        bars: { be: share(Math.min(be, 60), 60) }
      };
    },

    /* Article widget: credit utilisation targeting */
    utilisation(v) {
      const util = share(v.balance, v.limit);
      const targetBal = v.limit * (v.target / 100);
      const payDown = Math.max(0, v.balance - targetBal);
      return {
        util, targetBal, payDown,
        band: util <= 9 ? 'Optimal (single-digit)' : util <= 29 ? 'Good' : util <= 49 ? 'Fair — costing you points' : 'High — significant drag',
        bars: { util: Math.min(100, util) }
      };
    },

    /* Article widget: buy term and invest the difference */
    termgap(v) {
      const monthlyDiff = Math.max(0, v.wholePremium - v.termPremium);
      const invested = futureValue(0, monthlyDiff, v.years, v.rate, 0);
      const paidToWhole = v.wholePremium * 12 * v.years;
      return {
        monthlyDiff, invested, paidToWhole,
        edge: invested - n0(v.cashValue),
        bars: { edge: share(invested - n0(v.cashValue), invested) }
      };
    },

    /* Article widget: emergency fund sizing */
    buffer(v) {
      const base = v.volatility === 1 ? 3 : v.volatility === 2 ? 6 : 9;
      const extra = (v.dependents > 0 ? 1.5 : 0) + (v.singleIncome === 1 ? 1.5 : 0);
      const m = base + extra;
      return {
        monthsNeeded: m,
        target: (v.fixed + v.variable * 0.6) * m,
        thin: (v.fixed + v.variable * 0.6) * 1,
        bars: { fill: share(v.saved, (v.fixed + v.variable * 0.6) * m) },
        status: v.saved >= (v.fixed + v.variable * 0.6) * m ? 'Fully funded — redirect new cash to investing' : 'Keep filling before you invest new money'
      };
    },

    /* Article widget: paid acquisition economics */
    roas(v) {
      const spend = v.clicks * v.cpc;
      const conversions = v.clicks * (v.cvr / 100);
      const revenue = conversions * v.aov;
      const gross = revenue * (v.margin / 100);
      return {
        spend, conversions, revenue,
        cpa: div(spend, conversions),
        roas: div(revenue, spend),
        profit: gross - spend,
        breakevenCvr: div(v.cpc, n0(v.aov) * (n0(v.margin) / 100)) * 100,
        bars: { roas: clamp(div(revenue, spend) * 20, 0, 100) }
      };
    },

    /* Article widget: S-corp election savings */
    scorp(v) {
      const seTaxAll = v.profit * 0.9235 * 0.153;
      const payroll = Math.min(v.profit, v.salary);
      const distributions = Math.max(0, v.profit - payroll);
      const fica = payroll * 0.153;
      const extraCost = v.adminCost;
      return {
        seTaxAll, fica, distributions,
        saving: seTaxAll - fica - extraCost,
        verdict: (seTaxAll - fica - extraCost) > 2000 ? 'Election likely worth it — confirm a defensible salary' : 'Marginal: admin cost eats the benefit',
        bars: { save: share(seTaxAll - fica - extraCost, seTaxAll) }
      };
    },

    /* Tool page: compound growth */
    compound(v) {
      const gross = futureValue(v.initial, v.monthly, v.years, v.rate, 0);
      const net = futureValue(v.initial, v.monthly, v.years, v.rate, v.fee);
      const contributed = v.initial + v.monthly * v.years * 12;
      const real = div(net, Math.pow(1 + n0(v.inflation) / 100, Math.max(0, n0(v.years))), net);
      const series = [];
      const yrs = horizon(v.years, 100);
      for (let y = 0; y <= yrs; y++) {
        series.push({
          year: y,
          net: futureValue(v.initial, v.monthly, y, v.rate, v.fee),
          contributed: n0(v.initial) + n0(v.monthly) * y * 12
        });
      }
      return {
        net, gross, contributed, real,
        growth: net - contributed,
        feeCost: gross - net,
        multiple: div(net, contributed),
        chart: { name: 'growth', series },
        bars: { growth: share(net - contributed, net) }
      };
    },

    /* Tool page: mortgage */
    mortgage(v) {
      const loan = Math.max(0, v.price - v.down);
      const n = v.term * 12;
      const base = amortise(loan, v.rate, n, 0);
      const withExtra = amortise(loan, v.rate, n, v.extra);
      const ltv = share(loan, v.price);
      const pmi = ltv > 80 ? loan * (n0(v.pmiRate) / 100) / 12 : 0;
      const taxes = v.price * (v.taxRate / 100) / 12;
      const ins = v.insurance / 12;
      return {
        loan, ltv, pmi, taxes, ins,
        principalInterest: base.payment,
        totalMonthly: base.payment + pmi + taxes + ins,
        totalInterest: base.interest,
        interestSaved: base.interest - withExtra.interest,
        payoff: withExtra.months,
        monthsSaved: base.months - withExtra.months,
        chart: { name: 'balance', series: withExtra.series },
        bars: { ltv: clamp(ltv, 0, 100) }
      };
    },

    /* Tool page: retirement readiness */
    retire(v) {
      const yearsToGo = clamp(n0(v.retireAge) - n0(v.age), 0, 100);
      const nest = futureValue(v.saved, v.monthly, yearsToGo, v.rate, v.fee);
      const realNest = div(nest, Math.pow(1 + n0(v.inflation) / 100, yearsToGo), nest);
      const need = n0(v.spending) * 12;
      const series = [];
      for (let y = 0; y <= yearsToGo; y++) series.push({ year: v.age + y, net: futureValue(v.saved, v.monthly, y, v.rate, v.fee) });
      const safe = nest * 0.04 / 12;
      return {
        nest, realNest, yearsToGo,
        income4: nest * 0.04 / 12,
        income35: nest * 0.035 / 12,
        income3: nest * 0.03 / 12,
        gap: n0(v.spending) - safe,
        required: need / 0.04,
        coverage: share(safe, v.spending),
        chart: { name: 'nest', series },
        bars: { coverage: share(safe, v.spending) },
        status: safe >= v.spending ? 'On track at a 4% withdrawal rate' : 'Shortfall — extend timeline, save more, or trim target spending'
      };
    },

    /* Tool page: life insurance needs (DIME+) */
    dime(v) {
      const incomeNeed = v.income * v.years * (1 - v.raise / 100 * 0);
      const total = incomeNeed + v.debts + v.mortgage + v.education + v.final;
      const need = Math.max(0, total - v.existing - v.assets);
      return {
        incomeNeed, total, need,
        multiple: div(need, v.income),
        bars: { covered: share(n0(v.existing) + n0(v.assets), total) }
      };
    },

    /* Article widget: dividend income engineering */
    divincome(v) {
      const monthlyNow = v.portfolio * (v.yield / 100) / 12;
      let bal = n0(v.portfolio), income = monthlyNow;
      const dyrs = horizon(v.years, 100);
      for (let y = 0; y < dyrs; y++) {
        bal = bal * (1 + v.priceGrowth / 100) + v.monthly * 12 + bal * (v.yield / 100) * (v.reinvest === 1 ? 1 : 0);
        income = bal * ((v.yield / 100) * Math.pow(1 + v.divGrowth / 100, y + 1)) / 12;
      }
      return {
        monthlyNow, futureMonthly: income, futureBalance: bal,
        capitalNeeded: div(n0(v.target) * 12, n0(v.yield) / 100),
        coverage: share(income, v.target),
        bars: { coverage: share(income, v.target) },
        status: income >= v.target ? 'Target income reached inside the horizon' : 'Short of target — extend the horizon or raise contributions'
      };
    },

    /* Article widget: Roth vs traditional */
    rothcompare(v) {
      const grossFV = futureValue(0, v.monthly, v.years, v.rate, 0);
      const tradNet = grossFV * (1 - v.rateLater / 100);
      const rothContribCost = n0(v.monthly) * div(1, 1 - n0(v.rateNow) / 100, 1);
      const rothNet = grossFV;
      const sideCar = futureValue(0, v.monthly * (v.rateNow / 100), v.years, v.rate, 0) * (1 - 0.15);
      return {
        grossFV, tradNet, rothNet, sideCar,
        tradTotal: tradNet + sideCar,
        edge: rothNet - (tradNet + sideCar),
        rothContribCost,
        verdict: rothNet > tradNet + sideCar ? 'Roth wins — pay tax at today’s lower rate' : 'Traditional wins if you truly invest the tax saving',
        bars: { edge: share(Math.abs(rothNet - (tradNet + sideCar)) * 3, rothNet) }
      };
    },

    /* Article widget: health plan total-cost comparison */
    planpick(v) {
      const cost = (prem, ded, coins, oop) => {
        const premiums = prem * 12;
        const afterDed = Math.max(0, v.spend - ded);
        const share = Math.min(oop - Math.min(ded, oop), afterDed * (coins / 100));
        return premiums + Math.min(v.spend, ded) + share;
      };
      const a = cost(v.premA, v.dedA, v.coinsA, v.oopA);
      const b = cost(v.premB, v.dedB, v.coinsB, v.oopB);
      return {
        totalA: a, totalB: b,
        diff: Math.abs(a - b),
        winner: a < b ? 'Plan A is cheaper at this spend level' : 'Plan B is cheaper at this spend level',
        worstA: n0(v.premA) * 12 + n0(v.oopA), worstB: n0(v.premB) * 12 + n0(v.oopB),
        bars: { split: share(Math.min(a, b), Math.max(a, b)) }
      };
    },

    /* Article widget: disability coverage gap */
    disability(v) {
      const monthlyIncome = v.income / 12;
      const cap = n0(v.groupCap);
      const benefit = Math.min(monthlyIncome * (n0(v.benefitPct) / 100), cap > 0 ? cap : Infinity);
      const gap = Math.max(0, monthlyIncome * (n0(v.needPct) / 100) - benefit);
      return {
        monthlyIncome, benefit, gap,
        annualGap: gap * 12,
        premiumEstimate: (gap * 12) * 0.025 / 12,
        elimCost: v.elimination === 30 ? 'Highest premium' : v.elimination === 90 ? 'Balanced choice' : 'Cheapest premium — needs a deep cash buffer',
        bars: { covered: share(benefit, monthlyIncome * (n0(v.needPct) / 100)) }
      };
    },

    /* Article widget: extra payment on any loan */
    loanpay(v) {
      const base = amortise(v.balance, v.rate, v.years * 12, 0);
      const fast = amortise(v.balance, v.rate, v.years * 12, v.extra);
      return {
        payment: base.payment,
        totalInterest: base.interest,
        fastInterest: fast.interest,
        saved: base.interest - fast.interest,
        monthsSaved: base.months - fast.months,
        payoff: fast.months,
        bars: { saved: share(base.interest - fast.interest, base.interest) }
      };
    },

    /* Article widget: SaaS price change impact */
    saaspricing(v) {
      const arr = v.customers * v.arpa * 12;
      const newArpa = v.arpa * (1 + v.increase / 100);
      const lost = v.customers * (v.churnLift / 100);
      const newArr = (v.customers - lost) * newArpa * 12;
      return {
        arr, newArr, newArpa,
        delta: newArr - arr,
        lostCustomers: lost,
        nrr: div(newArr, arr) * 100,
        breakevenChurn: div(n0(v.increase), 100 + n0(v.increase)) * 100,
        bars: { delta: share((newArr - arr) * 5, arr) },
        verdict: newArr > arr ? 'Net positive — the increase survives the churn lift' : 'Net negative — churn overwhelms the increase'
      };
    },

    /* Article widget: cloud savings stack */
    cloudsave(v) {
      const idle = v.spend * (v.idlePct / 100);
      const rightsize = (v.spend - idle) * (v.oversizedPct / 100) * 0.35;
      const commit = (v.spend - idle - rightsize) * (v.commitCoverage / 100) * 0.32;
      const storage = v.spend * (v.storagePct / 100) * 0.4;
      const total = idle + rightsize + commit + storage;
      return {
        idle, rightsize, commit, storage, total,
        newSpend: n0(v.spend) - total,
        pctSaved: share(total, v.spend),
        annual: total * 12,
        bars: { saved: share(total, v.spend) }
      };
    },

    /* Article widget: content programme payback */
    contentroi(v) {
      const cost = v.articles * v.costPer;
      const visits = v.articles * v.visitsPer * v.months * 0.6;
      const leads = visits * (v.cvr / 100);
      const revenue = leads * v.value;
      return {
        cost, visits, leads, revenue,
        roi: div(revenue - cost, cost) * 100,
        payback: revenue > 0 ? div(cost, div(revenue, v.months), 99) : 99,
        costPerLead: div(cost, leads),
        bars: { roi: clamp(div(revenue - cost, cost) * 10, 0, 100) }
      };
    },

    /* Article widget: lifecycle email revenue */
    emailrev(v) {
      const active = v.subscribers * (v.engaged / 100);
      const perFlow = active * (v.triggerRate / 100) * (v.cvr / 100) * v.aov;
      const monthly = perFlow * v.flows;
      return {
        active, perFlow, monthly,
        annual: monthly * 12,
        perSubscriber: div(monthly * 12, v.subscribers),
        bars: { share: share(v.flows, 9) }
      };
    },

    /* Article widget: value of a deduction */
    deduct(v) {
      const seTax = v.selfEmployed === 1 ? v.deductions * 0.153 * 0.9235 : 0;
      const income = v.deductions * (v.marginal / 100);
      const state = v.deductions * (v.stateRate / 100);
      const total = seTax + income + state;
      return {
        seTax, income, state, total,
        effective: share(total, v.deductions),
        netCost: n0(v.deductions) - total,
        bars: { rate: share(total, v.deductions) }
      };
    },

    /* Tool page: debt payoff strategy race */
    debts(v, root) {
      const rows = Array.from(root.querySelectorAll('[data-debt-row]')).map(r => ({
        name: r.querySelector('[data-debt="name"]').value || 'Balance',
        bal: parseFloat(r.querySelector('[data-debt="bal"]').value) || 0,
        rate: parseFloat(r.querySelector('[data-debt="rate"]').value) || 0,
        min: parseFloat(r.querySelector('[data-debt="min"]').value) || 0
      })).filter(d => d.bal > 0);

      function run(order) {
        const list = rows.map(r => Object.assign({}, r)).sort(order);
        let m = 0, interest = 0;
        const budget = list.reduce((s, d) => s + d.min, 0) + v.extra;
        while (list.some(d => d.bal > 0.5) && m < 600) {
          let pool = budget;
          list.forEach(d => {
            if (d.bal <= 0) return;
            const i = d.bal * (d.rate / 100 / 12);
            d.bal += i; interest += i;
          });
          list.forEach(d => {
            if (d.bal <= 0) return;
            const pay = Math.min(d.bal, d.min);
            d.bal -= pay; pool -= pay;
          });
          for (const d of list) {
            if (pool <= 0) break;
            if (d.bal <= 0) continue;
            const pay = Math.min(d.bal, pool);
            d.bal -= pay; pool -= pay;
          }
          m++;
        }
        return { months: m, interest };
      }

      const avalanche = run((a, b) => b.rate - a.rate);
      const snowball = run((a, b) => a.bal - b.bal);
      const total = rows.reduce((s, d) => s + d.bal, 0);
      return {
        totalDebt: total,
        count: rows.length,
        avaMonths: avalanche.months, avaInterest: avalanche.interest,
        snowMonths: snowball.months, snowInterest: snowball.interest,
        delta: snowball.interest - avalanche.interest,
        minTotal: rows.reduce((s, d) => s + d.min, 0),
        bars: { split: share(v.extra, rows.reduce((s, d) => s + d.min, 0) + n0(v.extra)) },
        verdict: (snowball.interest - avalanche.interest) < 250
          ? 'Nearly identical cost — pick snowball for momentum'
          : 'Avalanche saves real money here'
      };
    }
  };

  /* --------------------------- output sanitiser ---------------------------- */
  /* Last line of defence. Extreme inputs (a 999999% growth rate, a 1e6-year
     horizon) overflow Math.pow to Infinity, and Infinity - Infinity is NaN.
     Every model return is deep-cleaned here so a non-finite number can never
     reach a formatter, a chart or the DOM. Applied centrally so new models
     inherit the guarantee automatically. */
  function finalise(res) {
    if (!res || typeof res !== 'object') return res;
    const clean = {};
    Object.keys(res).forEach(k => {
      const val = res[k];
      if (k === 'bars' && val && typeof val === 'object') {
        const b = {};
        Object.keys(val).forEach(bk => { b[bk] = clamp(n0(val[bk]), 0, 100); });
        clean[k] = b;
      } else if (k === 'chart' && val && Array.isArray(val.series)) {
        clean[k] = Object.assign({}, val, {
          series: val.series.map(pt => {
            const o = {};
            Object.keys(pt).forEach(pk => { o[pk] = n0(pt[pk]); });
            return o;
          })
        });
      } else if (typeof val === 'number') {
        clean[k] = Number.isFinite(val) ? val : 0;
      } else if (typeof val === 'string') {
        /* A verdict string built with money(Infinity) would read "$Infinity". */
        clean[k] = /NaN|Infinity/.test(val) ? val.replace(/-?\$?(NaN|Infinity)/g, 'n/a') : val;
      } else {
        clean[k] = val;
      }
    });
    return clean;
  }

  /* Wrap every model so callers always receive sanitised output. */
  Object.keys(MODELS).forEach(name => {
    const raw = MODELS[name];
    MODELS[name] = function (v, root) { return finalise(raw(v, root)); };
  });

  /* --------------------------- charts (optional) -------------------------- */
  const charts = {};
  function drawChart(root, spec) {
    if (!window.Chart || !spec || !spec.series || !spec.series.length) return;
    const canvas = root.querySelector('[data-chart="' + spec.name + '"]');
    if (!canvas) return;
    /* Strip non-finite points so Chart.js never renders a broken axis. */
    spec = Object.assign({}, spec, {
      series: spec.series.map(p => {
        const o = {};
        Object.keys(p).forEach(k => { o[k] = Number.isFinite(p[k]) ? p[k] : 0; });
        return o;
      })
    });
    const labels = spec.series.map(p => p.year);
    const ds = [];
    if ('net' in spec.series[0]) ds.push({ label: 'Projected value', data: spec.series.map(p => p.net), borderColor: '#5b7cfa', backgroundColor: 'rgba(91,124,250,.18)', fill: true, tension: .35, pointRadius: 0, borderWidth: 2.5 });
    if ('contributed' in spec.series[0]) ds.push({ label: 'Contributions', data: spec.series.map(p => p.contributed), borderColor: '#23d5c0', borderDash: [5, 5], fill: false, tension: .3, pointRadius: 0, borderWidth: 2 });
    if ('balance' in spec.series[0]) ds.push({ label: 'Loan balance', data: spec.series.map(p => p.balance), borderColor: '#8b5cf6', backgroundColor: 'rgba(139,92,246,.16)', fill: true, tension: .3, pointRadius: 0, borderWidth: 2.5 });
    const key = spec.name;
    if (charts[key]) { charts[key].data.labels = labels; charts[key].data.datasets = ds; charts[key].update('none'); return; }
    charts[key] = new window.Chart(canvas, {
      type: 'line',
      data: { labels, datasets: ds },
      options: {
        responsive: true, maintainAspectRatio: false,
        interaction: { intersect: false, mode: 'index' },
        plugins: {
          legend: { labels: { color: '#b3c0dc', boxWidth: 12, font: { size: 11 } } },
          tooltip: { callbacks: { label: c => c.dataset.label + ': ' + money(c.parsed.y) } }
        },
        scales: {
          x: { grid: { color: 'rgba(148,176,226,.08)' }, ticks: { color: '#8592b4', maxTicksLimit: 10 } },
          y: { grid: { color: 'rgba(148,176,226,.08)' }, ticks: { color: '#8592b4', callback: v => '$' + (v >= 1000 ? Math.round(v / 1000) + 'k' : v) } }
        }
      }
    });
  }

  /* ------------------------------- wiring --------------------------------- */
  function readInputs(root) {
    const v = {};
    root.querySelectorAll('[data-in]').forEach(el => {
      const raw = el.type === 'checkbox' ? (el.checked ? 1 : 0) : el.value;
      const n = parseFloat(String(raw).replace(/,/g, ''));
      const isNum = Number.isFinite(n);
      /* Numeric inputs ALWAYS resolve to a number. A blank or half-typed field
         falls back to its data-default, then min, then 0 — never NaN, and
         never a bare string that would poison downstream arithmetic. */
      if (el.tagName === 'SELECT' && !isNum) {
        v[el.dataset.in] = raw;                     /* genuine string enum */
      } else if (isNum) {
        v[el.dataset.in] = n;
      } else {
        v[el.dataset.in] = n0(el.dataset.default !== undefined ? el.dataset.default : el.min);
      }
      const out = root.querySelector('output[data-for="' + el.dataset.in + '"]');
      if (out) {
        const f = el.dataset.fmt || '';
        out.textContent = f && FMT[f]
          ? FMT[f](isNum ? n : 0) + (el.dataset.suffix || '')
          : (isNum ? n : (raw || 0)) + (el.dataset.suffix || '');
      }
    });
    return v;
  }

  function paint(root, res) {
    Object.keys(res).forEach(k => {
      root.querySelectorAll('[data-out="' + k + '"]').forEach(el => {
        const f = el.dataset.fmt;
        let val = res[k];
        /* Final safety net: no NaN, Infinity or -Infinity ever reaches the DOM. */
        if (typeof val === 'number' && !Number.isFinite(val)) val = 0;
        if (typeof val === 'number') {
          el.textContent = (f && FMT[f]) ? FMT[f](val) : num(val);
        } else {
          el.textContent = (val === undefined || val === null) ? '—' : String(val);
        }
      });
    });
    if (res.bars) {
      Object.keys(res.bars).forEach(k => {
        const bar = root.querySelector('[data-bar="' + k + '"]');
        if (bar) bar.style.width = clamp(n0(res.bars[k]), 0, 100) + '%';
      });
    }
    if (res.chart) drawChart(root, res.chart);
  }

  function wire(root) {
    const name = root.dataset.calc;
    const model = MODELS[name];
    if (!model) return;
    const run = () => {
      try { paint(root, model(readInputs(root), root)); } catch (e) { /* keep UI alive */ }
    };
    root.addEventListener('input', run);
    root.addEventListener('change', run);
    root.querySelectorAll('[data-calc-run]').forEach(b => b.addEventListener('click', run));
    run();
  }

  /* ------------------------------- quizzes -------------------------------- */
  function wireQuiz(root) {
    const out = root.querySelector('[data-quiz-out]');
    let bands = [];
    try { bands = JSON.parse(root.dataset.bands || '[]'); } catch (e) {}
    const score = () => {
      let total = 0, answered = 0;
      root.querySelectorAll('input[type=radio]').forEach(r => {
        if (r.checked) { total += parseFloat(r.dataset.score || 0); answered++; }
      });
      root.querySelectorAll('.opt').forEach(o => {
        const inp = o.querySelector('input');
        o.classList.toggle('is-picked', inp && inp.checked);
      });
      const qCount = new Set(Array.from(root.querySelectorAll('input[type=radio]')).map(r => r.name)).size;
      if (!out) return;
      if (answered < qCount) {
        out.innerHTML = '<div class="callout"><i class="fa-solid fa-circle-info"></i><p>Answer all ' + qCount + ' questions to see your profile — ' + answered + '/' + qCount + ' done.</p></div>';
        return;
      }
      const band = bands.find(b => total <= b.max) || bands[bands.length - 1] || { label: 'Result', text: 'Score: ' + total };
      out.innerHTML = '<div class="takeaways"><h4><i class="fa-solid fa-flag-checkered"></i> ' + band.label + ' · score ' + total + '</h4>' +
        '<p class="soft" style="font-size:.95rem">' + band.text + '</p>' +
        (band.link ? '<a class="btn btn--primary btn--sm mt-3" href="' + band.link + '">' + (band.cta || 'Read the next step') + ' <i class="fa-solid fa-arrow-right"></i></a>' : '') +
        '</div>';
    };
    root.addEventListener('change', score);
    root.querySelectorAll('[data-quiz-run]').forEach(b => b.addEventListener('click', score));
    score();
  }

  /* ------------------------- amortisation table ---------------------------- */
  function wireSchedule(root) {
    const build = () => {
      const v = readInputs(root.closest('[data-calc]') || root);
      const loan = Math.max(0, (v.price || 0) - (v.down || 0));
      const res = amortise(loan, v.rate || 0, (v.term || 30) * 12, v.extra || 0);
      const body = root.querySelector('tbody');
      if (!body) return;
      let bal = loan, rows = '', paid = 0, intYear = 0, prinYear = 0;
      const payment = res.payment;
      for (let m = 1; m <= res.months; m++) {
        const i = bal * ((v.rate || 0) / 100 / 12);
        let p = Math.min(bal, payment - i);
        bal -= p; intYear += i; prinYear += p; paid += payment;
        if (m % 12 === 0 || bal <= 0.5) {
          rows += '<tr><td>Year ' + Math.ceil(m / 12) + '</td><td>' + money(prinYear) + '</td><td>' + money(intYear) + '</td><td>' + money(Math.max(0, bal)) + '</td></tr>';
          intYear = 0; prinYear = 0;
        }
        if (bal <= 0.5) break;
      }
      body.innerHTML = rows;
    };
    const host = root.closest('[data-calc]');
    if (host) { host.addEventListener('input', build); host.addEventListener('change', build); }
    build();
  }

  /* ======================================================================
     SHAREABLE SCENARIOS  (growth trick #3)
     Encodes the inputs of one calculator into the URL hash so a scenario can
     be pasted into a chat, forum or email and reopened exactly as it was.

     Hash format:  #m=<modelName>&<input>=<value>&…

     Compatibility note: the site already uses plain hash anchors for TOC
     links (#critical-review) and the myth audit deep links. The hash is
     therefore only interpreted as calculator state when it contains an `m=`
     key, and anything else is left untouched for the browser to handle.

     Honest limit: because a hash is never sent to the server, a shared
     scenario CANNOT produce a custom og:image or link preview — that would
     need server-side rendering. The register previously implied otherwise.
     ====================================================================== */

  function parseHash() {
    const raw = String(location.hash || '').replace(/^#/, '');
    if (!raw || raw.indexOf('m=') === -1) return null;
    const out = {};
    raw.split('&').forEach(pair => {
      const i = pair.indexOf('=');
      if (i < 1) return;
      const k = decodeURIComponent(pair.slice(0, i));
      const v = decodeURIComponent(pair.slice(i + 1));
      out[k] = v;
    });
    return out.m ? out : null;
  }

  /* Write the state of one widget into the hash without adding history
     entries — replaceState keeps the back button meaning "previous page". */
  function scenarioHash(root) {
    const name = root.dataset.calc;
    const parts = ['m=' + encodeURIComponent(name)];
    root.querySelectorAll('[data-in]').forEach(el => {
      const key = el.dataset.in;
      if (!key) return;
      const val = el.type === 'checkbox' ? (el.checked ? 1 : 0) : el.value;
      parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(val));
    });
    return '#' + parts.join('&');
  }

  /* Apply a decoded scenario to the matching widget. Values are pushed
     through a real `input` event so the model recomputes and every output,
     bar and chart repaints through the normal path. */
  function applyScenario(state) {
    const name = state.m;
    const root = document.querySelector('[data-calc="' + name.replace(/"/g, '') + '"]');
    if (!root) return null;

    root.querySelectorAll('[data-in]').forEach(el => {
      const key = el.dataset.in;
      if (!(key in state)) return;
      const v = state[key];
      if (el.type === 'checkbox') {
        el.checked = (v === '1' || v === 'true');
      } else {
        el.value = v;
      }
    });
    root.dispatchEvent(new Event('input', { bubbles: true }));
    root.dispatchEvent(new Event('change', { bubbles: true }));
    return root;
  }

  function wireShare(root) {
    const head = root.querySelector('.widget__head');
    if (!head || head.querySelector('[data-calc-share]')) return;

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'calc-share';
    btn.setAttribute('data-calc-share', '');
    btn.title = 'Copy a link that reopens this calculator with your figures';
    btn.innerHTML = '<i class="fa-solid fa-link"></i> <span>Copy scenario link</span>';

    const reset = () => {
      btn.classList.remove('is-done');
      btn.innerHTML = '<i class="fa-solid fa-link"></i> <span>Copy scenario link</span>';
    };

    btn.addEventListener('click', () => {
      const hash = scenarioHash(root);
      /* Keep the visible URL in sync so a manual copy from the address bar,
         or a plain bookmark, captures the scenario too. */
      try { history.replaceState(null, '', location.pathname + location.search + hash); } catch (e) {}
      const url = location.origin === 'null'
        ? location.pathname + hash
        : location.origin + location.pathname + location.search + hash;

      const ok = () => {
        btn.classList.add('is-done');
        btn.innerHTML = '<i class="fa-solid fa-check"></i> <span>Link copied</span>';
        setTimeout(reset, 2400);
      };
      const fail = () => {
        btn.classList.add('is-done');
        btn.innerHTML = '<i class="fa-solid fa-link"></i> <span>Link is in the address bar</span>';
        setTimeout(reset, 3200);
      };

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(ok).catch(fail);
      } else {
        fail();
      }
    });

    head.appendChild(btn);
  }

  return {
    init() {
      document.querySelectorAll('[data-calc]').forEach(wire);
      document.querySelectorAll('[data-quiz]').forEach(wireQuiz);
      document.querySelectorAll('[data-schedule]').forEach(wireSchedule);

      /* Share controls on every declarative widget that has a head. */
      document.querySelectorAll('[data-calc]').forEach(wireShare);

      /* Restore a shared scenario, then bring it into view. */
      const state = parseHash();
      if (state) {
        const root = applyScenario(state);
        if (root) {
          const note = document.createElement('p');
          note.className = 'calc-restored';
          note.innerHTML = '<i class="fa-solid fa-circle-info"></i> Showing a shared scenario. ' +
            'Move any slider to make it your own.';
          const head = root.querySelector('.widget__head');
          if (head && head.parentNode) head.parentNode.insertBefore(note, head.nextSibling);
          setTimeout(() => {
            try { root.scrollIntoView({ behavior: 'smooth', block: 'center' }); } catch (e) {}
          }, 260);
        }
      }
    },
    fmt: FMT,
    models: MODELS,
    scenarioHash: scenarioHash
  };
})();

if (typeof window !== 'undefined') window.FiscoraTools = FiscoraTools;
