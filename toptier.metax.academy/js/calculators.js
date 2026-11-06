/**
 * Lightweight, client-side-only interactive calculators (CONTENT_TRICKS.md #7).
 * Purely static/vanilla JS — no backend, no API calls. Each calculator is
 * mounted into a `<div class="calc-widget" data-calc="...">` placeholder that
 * already exists as raw HTML inside the relevant article's Markdown body
 * (marked.js passes raw HTML blocks through untouched, so this placeholder
 * survives rendering — see js/markdown-parser.js). Calculators.mount() is
 * called once from post.js after the article body HTML is injected.
 *
 * Per the trick's own "where it breaks down" note: this is real per-article
 * engineering, not a copy-paste template, so it's deliberately scoped to a
 * handful of genuinely calculator-shaped articles rather than rolled out
 * site-wide. Every result panel repeats a one-line disclaimer so this never
 * reads as personalized financial advice.
 */
const Calculators = {
  mount(root) {
    if (!root) return;
    root.querySelectorAll('.calc-widget[data-calc]').forEach(el => this.render(el));
  },

  render(el) {
    const builders = {
      'refinance-breakeven': this._buildBreakeven,
      'term-comparison': this._buildTermComparison,
      'debt-strategy-compare': this._buildDebtStrategy,
      'refinance-savings': this._buildRefinanceSavings,
      'buy-term-invest': this._buildBuyTermInvest,
      'ev-tco': this._buildEvTco,
      'savings-compare': this._buildSavingsCompare,
      'heloc-borrowing-power': this._buildHelocBorrowingPower,
      'solar-credit': this._buildSolarCredit,
      'emergency-fund-timeline': this._buildEmergencyFundTimeline,
      'contingency-fee-net': this._buildContingencyFeeNet,
      'oic-rcp-estimator': this._buildOicRcpEstimator,
      'aca-subsidy-estimator': this._buildAcaSubsidyEstimator,
      'vpn-plan-cost-compare': this._buildVpnPlanCostCompare,
      'crypto-fee-impact': this._buildCryptoFeeImpact,
      'home-warranty-breakeven': this._buildHomeWarrantyBreakeven,
      'reit-income-estimator': this._buildReitIncomeEstimator,
      'solar-financing-compare': this._buildSolarFinancingCompare,
      'glp1-cost-estimator': this._buildGlp1CostEstimator,
      'crm-cost-estimator': this._buildCrmCostEstimator,
      'ai-sales-tool-cost-estimator': this._buildAiSalesToolCostEstimator
    };
    const fn = builders[el.getAttribute('data-calc')];
    if (fn) fn.call(this, el);
  },

  /** Standard fixed-rate amortized monthly payment. */
  _monthlyPayment(principal, annualRatePct, termYears) {
    const r = (annualRatePct / 100) / 12;
    const n = termYears * 12;
    if (n <= 0) return 0;
    if (r === 0) return principal / n;
    return principal * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
  },

  _fmtMoney(n) {
    if (!isFinite(n)) return '—';
    return '$' + Math.round(n).toLocaleString('en-US');
  },

  _wrap(el, title, icon, fieldsHTML, resultId) {
    el.classList.add('calc-widget-inner');
    el.innerHTML = `
      <h4><i class="fa-solid ${icon}"></i> ${title}</h4>
      <div class="calc-form">${fieldsHTML}</div>
      <div class="calc-result" id="${resultId}"></div>
      <p class="calc-disclaimer">Illustrative estimate only, based on the numbers you enter — not a loan offer, quote, or personalized financial advice. Get an actual quote from a lender before deciding.</p>
    `;
  },

  /* ---------------- 1. Mortgage refinance break-even ---------------- */
  _buildBreakeven(el) {
    this._wrap(el,
      'Refinance Break-Even Calculator', 'fa-calculator',
      `
        <div class="calc-field">
          <label for="calc-bre-costs">Total closing costs ($)</label>
          <input type="number" id="calc-bre-costs" min="0" step="100" value="6000">
        </div>
        <div class="calc-field">
          <label for="calc-bre-savings">Monthly payment savings ($)</label>
          <input type="number" id="calc-bre-savings" min="0" step="10" value="220">
        </div>
      `,
      'calc-bre-result'
    );
    const costsEl = el.querySelector('#calc-bre-costs');
    const savingsEl = el.querySelector('#calc-bre-savings');
    const resultEl = el.querySelector('#calc-bre-result');
    const update = () => {
      const costs = parseFloat(costsEl.value) || 0;
      const savings = parseFloat(savingsEl.value) || 0;
      if (savings <= 0) {
        resultEl.innerHTML = `<p>Enter a positive monthly savings amount to calculate your break-even point.</p>`;
        return;
      }
      const months = Math.ceil(costs / savings);
      const years = (months / 12).toFixed(1);
      resultEl.innerHTML = `
        <p><strong>Break-even point: ${months} months (~${years} years)</strong></p>
        <p>If you plan to stay in the home longer than this, refinancing likely pays off. If you might move or refinance again sooner, the closing costs may not be recovered.</p>
      `;
    };
    [costsEl, savingsEl].forEach(inp => inp.addEventListener('input', update));
    update();
  },

  /* ---------------- 2. 15-year vs. 30-year mortgage term comparison ---------------- */
  _buildTermComparison(el) {
    this._wrap(el,
      '15-Year vs. 30-Year Payment Comparison', 'fa-house',
      `
        <div class="calc-field">
          <label for="calc-tc-amount">Loan amount ($)</label>
          <input type="number" id="calc-tc-amount" min="0" step="1000" value="350000">
        </div>
        <div class="calc-field">
          <label for="calc-tc-rate15">15-year rate (%)</label>
          <input type="number" id="calc-tc-rate15" min="0" step="0.05" value="6.0">
        </div>
        <div class="calc-field">
          <label for="calc-tc-rate30">30-year rate (%)</label>
          <input type="number" id="calc-tc-rate30" min="0" step="0.05" value="6.75">
        </div>
      `,
      'calc-tc-result'
    );
    const amountEl = el.querySelector('#calc-tc-amount');
    const rate15El = el.querySelector('#calc-tc-rate15');
    const rate30El = el.querySelector('#calc-tc-rate30');
    const resultEl = el.querySelector('#calc-tc-result');
    const update = () => {
      const amount = parseFloat(amountEl.value) || 0;
      const rate15 = parseFloat(rate15El.value) || 0;
      const rate30 = parseFloat(rate30El.value) || 0;
      const pay15 = this._monthlyPayment(amount, rate15, 15);
      const pay30 = this._monthlyPayment(amount, rate30, 30);
      const totalInterest15 = (pay15 * 15 * 12) - amount;
      const totalInterest30 = (pay30 * 30 * 12) - amount;
      const interestSaved = totalInterest30 - totalInterest15;
      const paymentDiff = pay15 - pay30;
      resultEl.innerHTML = `
        <table class="calc-table">
          <tr><th></th><th>15-Year</th><th>30-Year</th></tr>
          <tr><td>Monthly payment</td><td>${this._fmtMoney(pay15)}</td><td>${this._fmtMoney(pay30)}</td></tr>
          <tr><td>Total interest paid</td><td>${this._fmtMoney(totalInterest15)}</td><td>${this._fmtMoney(totalInterest30)}</td></tr>
        </table>
        <p><strong>The 15-year payment is ${this._fmtMoney(Math.abs(paymentDiff))}/month ${paymentDiff >= 0 ? 'higher' : 'lower'}</strong>, but saves ${this._fmtMoney(Math.max(interestSaved, 0))} in total interest over the life of the loan.</p>
      `;
    };
    [amountEl, rate15El, rate30El].forEach(inp => inp.addEventListener('input', update));
    update();
  },

  /* ---------------- 3. Debt consolidation loan vs. balance transfer ---------------- */
  _buildDebtStrategy(el) {
    this._wrap(el,
      'Consolidation Loan vs. Balance Transfer Cost Estimator', 'fa-credit-card',
      `
        <div class="calc-field">
          <label for="calc-ds-balance">Total balance ($)</label>
          <input type="number" id="calc-ds-balance" min="0" step="500" value="12000">
        </div>
        <div class="calc-field">
          <label for="calc-ds-apr">Consolidation loan APR (%)</label>
          <input type="number" id="calc-ds-apr" min="0" step="0.5" value="11">
        </div>
        <div class="calc-field">
          <label for="calc-ds-term">Consolidation loan term (months)</label>
          <input type="number" id="calc-ds-term" min="1" step="1" value="36">
        </div>
        <div class="calc-field">
          <label for="calc-ds-promo">Balance transfer promo period (months)</label>
          <input type="number" id="calc-ds-promo" min="1" step="1" value="18">
        </div>
        <div class="calc-field">
          <label for="calc-ds-fee">Balance transfer fee (%)</label>
          <input type="number" id="calc-ds-fee" min="0" step="0.5" value="3">
        </div>
      `,
      'calc-ds-result'
    );
    const ids = ['balance', 'apr', 'term', 'promo', 'fee'];
    const inputs = {};
    ids.forEach(id => { inputs[id] = el.querySelector(`#calc-ds-${id}`); });
    const resultEl = el.querySelector('#calc-ds-result');
    const update = () => {
      const balance = parseFloat(inputs.balance.value) || 0;
      const apr = parseFloat(inputs.apr.value) || 0;
      const term = parseFloat(inputs.term.value) || 1;
      const promo = parseFloat(inputs.promo.value) || 1;
      const feePct = parseFloat(inputs.fee.value) || 0;

      const loanPayment = this._monthlyPayment(balance, apr, term / 12);
      const loanTotalCost = loanPayment * term;
      const loanInterest = loanTotalCost - balance;

      const fee = balance * (feePct / 100);
      const monthsToPayoffAtSamePayment = loanPayment > 0 ? Math.ceil(balance / loanPayment) : Infinity;
      const fitsInPromo = monthsToPayoffAtSamePayment <= promo;
      const transferTotalCost = balance + fee;

      let transferNote;
      if (fitsInPromo) {
        transferNote = `Paying the same ${this._fmtMoney(loanPayment)}/month, you'd pay off the transferred balance in about ${monthsToPayoffAtSamePayment} months — inside the ${promo}-month 0% window, so total cost is just the balance plus the ${this._fmtMoney(fee)} transfer fee.`;
      } else {
        transferNote = `At ${this._fmtMoney(loanPayment)}/month you'd need about ${monthsToPayoffAtSamePayment} months — longer than the ${promo}-month 0% window. Any balance left when the promo ends starts accruing interest at the card's standard rate, which this estimator doesn't model — real cost would likely exceed the figure shown.`;
      }

      resultEl.innerHTML = `
        <table class="calc-table">
          <tr><th></th><th>Consolidation Loan</th><th>Balance Transfer (est.)</th></tr>
          <tr><td>Monthly payment</td><td>${this._fmtMoney(loanPayment)}</td><td>${this._fmtMoney(loanPayment)} (assumed same)</td></tr>
          <tr><td>Fees</td><td>—</td><td>${this._fmtMoney(fee)}</td></tr>
          <tr><td>Total interest</td><td>${this._fmtMoney(Math.max(loanInterest, 0))}</td><td>${fitsInPromo ? '$0 (paid off within promo)' : 'Not modeled — see note below'}</td></tr>
          <tr><td><strong>Total cost</strong></td><td><strong>${this._fmtMoney(loanTotalCost)}</strong></td><td><strong>${fitsInPromo ? this._fmtMoney(transferTotalCost) : this._fmtMoney(transferTotalCost) + '+'}</strong></td></tr>
        </table>
        <p>${transferNote}</p>
      `;
    };
    Object.values(inputs).forEach(inp => inp.addEventListener('input', update));
    update();
  },

  /* ---------------- 4. Loan refinance savings (e.g., student loans) ---------------- */
  _buildRefinanceSavings(el) {
    this._wrap(el,
      'Refinance Savings Calculator', 'fa-graduation-cap',
      `
        <div class="calc-field">
          <label for="calc-rs-balance">Current loan balance ($)</label>
          <input type="number" id="calc-rs-balance" min="0" step="500" value="40000">
        </div>
        <div class="calc-field">
          <label for="calc-rs-oldrate">Current APR (%)</label>
          <input type="number" id="calc-rs-oldrate" min="0" step="0.1" value="8">
        </div>
        <div class="calc-field">
          <label for="calc-rs-newrate">New (refinanced) APR (%)</label>
          <input type="number" id="calc-rs-newrate" min="0" step="0.1" value="5.5">
        </div>
        <div class="calc-field">
          <label for="calc-rs-term">Repayment term (years)</label>
          <input type="number" id="calc-rs-term" min="1" step="1" value="10">
        </div>
      `,
      'calc-rs-result'
    );
    const balanceEl = el.querySelector('#calc-rs-balance');
    const oldRateEl = el.querySelector('#calc-rs-oldrate');
    const newRateEl = el.querySelector('#calc-rs-newrate');
    const termEl = el.querySelector('#calc-rs-term');
    const resultEl = el.querySelector('#calc-rs-result');
    const update = () => {
      const balance = parseFloat(balanceEl.value) || 0;
      const oldRate = parseFloat(oldRateEl.value) || 0;
      const newRate = parseFloat(newRateEl.value) || 0;
      const term = parseFloat(termEl.value) || 1;

      const oldPay = this._monthlyPayment(balance, oldRate, term);
      const newPay = this._monthlyPayment(balance, newRate, term);
      const oldInterest = (oldPay * term * 12) - balance;
      const newInterest = (newPay * term * 12) - balance;
      const savings = oldInterest - newInterest;

      resultEl.innerHTML = `
        <table class="calc-table">
          <tr><th></th><th>Current Loan</th><th>Refinanced</th></tr>
          <tr><td>Monthly payment</td><td>${this._fmtMoney(oldPay)}</td><td>${this._fmtMoney(newPay)}</td></tr>
          <tr><td>Total interest paid</td><td>${this._fmtMoney(Math.max(oldInterest, 0))}</td><td>${this._fmtMoney(Math.max(newInterest, 0))}</td></tr>
        </table>
        <p><strong>Estimated total interest savings: ${this._fmtMoney(Math.max(savings, 0))}</strong> over the ${term}-year term, assuming both loans keep the same term length.</p>
      `;
    };
    [balanceEl, oldRateEl, newRateEl, termEl].forEach(inp => inp.addEventListener('input', update));
    update();
  },

  /* ---------------- 5. "Buy term and invest the difference" projection ---------------- */
  _buildBuyTermInvest(el) {
    this._wrap(el,
      'Buy Term, Invest the Difference — Projection', 'fa-chart-line',
      `
        <div class="calc-field">
          <label for="calc-bt-term">Monthly term premium ($)</label>
          <input type="number" id="calc-bt-term" min="0" step="1" value="25">
        </div>
        <div class="calc-field">
          <label for="calc-bt-whole">Monthly whole life premium ($)</label>
          <input type="number" id="calc-bt-whole" min="0" step="1" value="400">
        </div>
        <div class="calc-field">
          <label for="calc-bt-return">Assumed annual return (%)</label>
          <input type="number" id="calc-bt-return" min="0" step="0.5" value="7">
        </div>
        <div class="calc-field">
          <label for="calc-bt-years">Years invested</label>
          <input type="number" id="calc-bt-years" min="1" step="1" value="20">
        </div>
      `,
      'calc-bt-result'
    );
    const termEl = el.querySelector('#calc-bt-term');
    const wholeEl = el.querySelector('#calc-bt-whole');
    const returnEl = el.querySelector('#calc-bt-return');
    const yearsEl = el.querySelector('#calc-bt-years');
    const resultEl = el.querySelector('#calc-bt-result');
    const update = () => {
      const term = parseFloat(termEl.value) || 0;
      const whole = parseFloat(wholeEl.value) || 0;
      const annualReturn = (parseFloat(returnEl.value) || 0) / 100;
      const years = parseFloat(yearsEl.value) || 1;
      const diff = Math.max(whole - term, 0);
      // Future value of a monthly contribution annuity, compounded monthly.
      const monthlyRate = annualReturn / 12;
      const n = years * 12;
      let futureValue;
      if (monthlyRate === 0) {
        futureValue = diff * n;
      } else {
        futureValue = diff * (Math.pow(1 + monthlyRate, n) - 1) / monthlyRate;
      }
      const totalContributed = diff * n;
      resultEl.innerHTML = `
        <p>Investing the ${this._fmtMoney(diff)}/month premium difference at ${(annualReturn * 100).toFixed(1)}% for ${years} years:</p>
        <table class="calc-table">
          <tr><td>Total contributed</td><td>${this._fmtMoney(totalContributed)}</td></tr>
          <tr><td><strong>Projected value</strong></td><td><strong>${this._fmtMoney(futureValue)}</strong></td></tr>
        </table>
        <p>This assumes a constant, uninterrupted ${(annualReturn * 100).toFixed(1)}% annual return with no down years — real market returns vary significantly year to year, and a downturn early on can leave this strategy behind a whole life policy's guaranteed cash value for a period of years.</p>
      `;
    };
    [termEl, wholeEl, returnEl, yearsEl].forEach(inp => inp.addEventListener('input', update));
    update();
  },

  /* ---------------- 6. EV vs. gas car 5-year total cost of ownership ---------------- */
  _buildEvTco(el) {
    this._wrap(el,
      'EV vs. Gas Car: 5-Year Cost Estimator', 'fa-car-side',
      `
        <div class="calc-field">
          <label for="calc-tco-evprice">EV price after incentives ($)</label>
          <input type="number" id="calc-tco-evprice" min="0" step="500" value="38000">
        </div>
        <div class="calc-field">
          <label for="calc-tco-gasprice">Comparable gas car price ($)</label>
          <input type="number" id="calc-tco-gasprice" min="0" step="500" value="32000">
        </div>
        <div class="calc-field">
          <label for="calc-tco-miles">Annual miles driven</label>
          <input type="number" id="calc-tco-miles" min="0" step="500" value="12000">
        </div>
        <div class="calc-field">
          <label for="calc-tco-kwh">Home electricity rate ($/kWh)</label>
          <input type="number" id="calc-tco-kwh" min="0" step="0.01" value="0.15">
        </div>
        <div class="calc-field">
          <label for="calc-tco-gas">Gas price ($/gallon)</label>
          <input type="number" id="calc-tco-gas" min="0" step="0.05" value="3.40">
        </div>
        <div class="calc-field">
          <label for="calc-tco-evmaint">EV annual maintenance ($)</label>
          <input type="number" id="calc-tco-evmaint" min="0" step="50" value="300">
        </div>
        <div class="calc-field">
          <label for="calc-tco-gasmaint">Gas car annual maintenance ($)</label>
          <input type="number" id="calc-tco-gasmaint" min="0" step="50" value="900">
        </div>
      `,
      'calc-tco-result'
    );
    const ids = ['evprice', 'gasprice', 'miles', 'kwh', 'gas', 'evmaint', 'gasmaint'];
    const inputs = {};
    ids.forEach(id => { inputs[id] = el.querySelector(`#calc-tco-${id}`); });
    const resultEl = el.querySelector('#calc-tco-result');
    // Reasonable static assumptions, kept simple and visible in the copy below
    // rather than hidden — 3.0 mi/kWh EV efficiency, 28 mpg comparable gas car.
    const EV_MI_PER_KWH = 3.0;
    const GAS_MPG = 28;
    const update = () => {
      const evPrice = parseFloat(inputs.evprice.value) || 0;
      const gasPrice = parseFloat(inputs.gasprice.value) || 0;
      const miles = parseFloat(inputs.miles.value) || 0;
      const kwhRate = parseFloat(inputs.kwh.value) || 0;
      const gasRate = parseFloat(inputs.gas.value) || 0;
      const evMaint = parseFloat(inputs.evmaint.value) || 0;
      const gasMaint = parseFloat(inputs.gasmaint.value) || 0;

      const evAnnualEnergy = (miles / EV_MI_PER_KWH) * kwhRate;
      const gasAnnualFuel = (miles / GAS_MPG) * gasRate;

      const evFiveYear = evPrice + (evAnnualEnergy + evMaint) * 5;
      const gasFiveYear = gasPrice + (gasAnnualFuel + gasMaint) * 5;
      const diff = gasFiveYear - evFiveYear;

      resultEl.innerHTML = `
        <table class="calc-table">
          <tr><th></th><th>EV</th><th>Gas Car</th></tr>
          <tr><td>Purchase price</td><td>${this._fmtMoney(evPrice)}</td><td>${this._fmtMoney(gasPrice)}</td></tr>
          <tr><td>Annual "fuel" cost</td><td>${this._fmtMoney(evAnnualEnergy)}</td><td>${this._fmtMoney(gasAnnualFuel)}</td></tr>
          <tr><td>Annual maintenance</td><td>${this._fmtMoney(evMaint)}</td><td>${this._fmtMoney(gasMaint)}</td></tr>
          <tr><td><strong>5-year total</strong></td><td><strong>${this._fmtMoney(evFiveYear)}</strong></td><td><strong>${this._fmtMoney(gasFiveYear)}</strong></td></tr>
        </table>
        <p><strong>${diff >= 0 ? `The EV comes out ${this._fmtMoney(diff)} cheaper` : `The gas car comes out ${this._fmtMoney(Math.abs(diff))} cheaper`}</strong> over 5 years at these inputs. This assumes ${EV_MI_PER_KWH} mi/kWh EV efficiency, ${GAS_MPG} mpg for the gas car, all home charging (no public fast-charging), and doesn't include insurance or depreciation differences — see the article above for those factors.</p>
      `;
    };
    Object.values(inputs).forEach(inp => inp.addEventListener('input', update));
    update();
  },

  /* ---------------- 7. High-yield savings vs. traditional bank interest gap ---------------- */
  _buildSavingsCompare(el) {
    this._wrap(el,
      'High-Yield vs. Traditional Savings — Interest Gap', 'fa-piggy-bank',
      `
        <div class="calc-field">
          <label for="calc-sc-balance">Savings balance ($)</label>
          <input type="number" id="calc-sc-balance" min="0" step="500" value="15000">
        </div>
        <div class="calc-field">
          <label for="calc-sc-lowapy">Traditional bank APY (%)</label>
          <input type="number" id="calc-sc-lowapy" min="0" step="0.01" value="0.05">
        </div>
        <div class="calc-field">
          <label for="calc-sc-highapy">High-yield APY (%)</label>
          <input type="number" id="calc-sc-highapy" min="0" step="0.05" value="4.25">
        </div>
        <div class="calc-field">
          <label for="calc-sc-years">Years held</label>
          <input type="number" id="calc-sc-years" min="1" step="1" value="1">
        </div>
      `,
      'calc-sc-result'
    );
    const balanceEl = el.querySelector('#calc-sc-balance');
    const lowEl = el.querySelector('#calc-sc-lowapy');
    const highEl = el.querySelector('#calc-sc-highapy');
    const yearsEl = el.querySelector('#calc-sc-years');
    const resultEl = el.querySelector('#calc-sc-result');
    const update = () => {
      const balance = parseFloat(balanceEl.value) || 0;
      const lowApy = (parseFloat(lowEl.value) || 0) / 100;
      const highApy = (parseFloat(highEl.value) || 0) / 100;
      const years = parseFloat(yearsEl.value) || 1;
      // Simple annual compounding approximation (APY already reflects compounding).
      const lowValue = balance * Math.pow(1 + lowApy, years) - balance;
      const highValue = balance * Math.pow(1 + highApy, years) - balance;
      resultEl.innerHTML = `
        <table class="calc-table">
          <tr><th></th><th>Traditional Bank</th><th>High-Yield</th></tr>
          <tr><td>Interest earned over ${years} yr(s)</td><td>${this._fmtMoney(lowValue)}</td><td>${this._fmtMoney(highValue)}</td></tr>
        </table>
        <p><strong>Difference: ${this._fmtMoney(Math.max(highValue - lowValue, 0))}</strong> in extra interest on the same balance, simply from choosing a higher-APY account. Both figures assume the rate stays constant, which real variable APYs don't guarantee.</p>
      `;
    };
    [balanceEl, lowEl, highEl, yearsEl].forEach(inp => inp.addEventListener('input', update));
    update();
  },

  /* ---------------- 8. Home equity / HELOC borrowing power ---------------- */
  _buildHelocBorrowingPower(el) {
    this._wrap(el,
      'Home Equity Borrowing Power Estimator', 'fa-house-chimney',
      `
        <div class="calc-field">
          <label for="calc-hb-value">Home value ($)</label>
          <input type="number" id="calc-hb-value" min="0" step="1000" value="400000">
        </div>
        <div class="calc-field">
          <label for="calc-hb-balance">Current mortgage balance ($)</label>
          <input type="number" id="calc-hb-balance" min="0" step="1000" value="200000">
        </div>
        <div class="calc-field">
          <label for="calc-hb-cltv">Lender's max combined LTV (%)</label>
          <input type="number" id="calc-hb-cltv" min="0" max="100" step="1" value="85">
        </div>
      `,
      'calc-hb-result'
    );
    const valueEl = el.querySelector('#calc-hb-value');
    const balanceEl = el.querySelector('#calc-hb-balance');
    const cltvEl = el.querySelector('#calc-hb-cltv');
    const resultEl = el.querySelector('#calc-hb-result');
    const update = () => {
      const value = parseFloat(valueEl.value) || 0;
      const balance = parseFloat(balanceEl.value) || 0;
      const cltv = (parseFloat(cltvEl.value) || 0) / 100;
      const maxTotalDebt = value * cltv;
      const available = Math.max(maxTotalDebt - balance, 0);
      resultEl.innerHTML = `
        <p><strong>Estimated available borrowing power: ${this._fmtMoney(available)}</strong></p>
        <p>Based on a ${(cltv * 100).toFixed(0)}% combined loan-to-value limit on a ${this._fmtMoney(value)} home with a ${this._fmtMoney(balance)} existing mortgage balance. Actual lender limits vary by credit profile, property type, and market — this is a starting estimate, not a pre-approval.</p>
      `;
    };
    [valueEl, balanceEl, cltvEl].forEach(inp => inp.addEventListener('input', update));
    update();
  },

  /* ---------------- 9. Federal solar tax credit amount ---------------- */
  _buildSolarCredit(el) {
    this._wrap(el,
      'Solar Tax Credit Amount Estimator', 'fa-solar-panel',
      `
        <div class="calc-field">
          <label for="calc-sol-cost">Total qualifying system cost ($)</label>
          <input type="number" id="calc-sol-cost" min="0" step="500" value="24000">
        </div>
        <div class="calc-field">
          <label for="calc-sol-pct">Credit percentage (%)</label>
          <input type="number" id="calc-sol-pct" min="0" max="100" step="1" value="30">
        </div>
        <div class="calc-field">
          <label for="calc-sol-liability">Your federal tax liability this year ($)</label>
          <input type="number" id="calc-sol-liability" min="0" step="500" value="9000">
        </div>
      `,
      'calc-sol-result'
    );
    const costEl = el.querySelector('#calc-sol-cost');
    const pctEl = el.querySelector('#calc-sol-pct');
    const liabilityEl = el.querySelector('#calc-sol-liability');
    const resultEl = el.querySelector('#calc-sol-result');
    const update = () => {
      const cost = parseFloat(costEl.value) || 0;
      const pct = (parseFloat(pctEl.value) || 0) / 100;
      const liability = parseFloat(liabilityEl.value) || 0;
      const credit = cost * pct;
      const usedThisYear = Math.min(credit, liability);
      const carryforward = Math.max(credit - liability, 0);
      resultEl.innerHTML = `
        <table class="calc-table">
          <tr><td>Total credit amount</td><td>${this._fmtMoney(credit)}</td></tr>
          <tr><td>Applied against this year's tax liability</td><td>${this._fmtMoney(usedThisYear)}</td></tr>
          <tr><td>Carried forward to future years</td><td>${this._fmtMoney(carryforward)}</td></tr>
        </table>
        <p>The credit percentage and qualifying-expense rules are set by federal statute and can change — confirm the current-year percentage and your specific eligibility with a tax professional before relying on this estimate. This is not tax advice.</p>
      `;
    };
    [costEl, pctEl, liabilityEl].forEach(inp => inp.addEventListener('input', update));
    update();
  },

  /* ---------------- 10. Emergency fund savings timeline ---------------- */
  _buildEmergencyFundTimeline(el) {
    this._wrap(el,
      'Emergency Fund Savings Timeline', 'fa-shield-halved',
      `
        <div class="calc-field">
          <label for="calc-ef-monthly">Essential monthly expenses ($)</label>
          <input type="number" id="calc-ef-monthly" min="0" step="100" value="3000">
        </div>
        <div class="calc-field">
          <label for="calc-ef-months">Target months of coverage</label>
          <input type="number" id="calc-ef-months" min="1" step="1" value="6">
        </div>
        <div class="calc-field">
          <label for="calc-ef-current">Current savings ($)</label>
          <input type="number" id="calc-ef-current" min="0" step="100" value="500">
        </div>
        <div class="calc-field">
          <label for="calc-ef-contribution">Monthly contribution you can make ($)</label>
          <input type="number" id="calc-ef-contribution" min="1" step="25" value="300">
        </div>
      `,
      'calc-ef-result'
    );
    const monthlyEl = el.querySelector('#calc-ef-monthly');
    const monthsEl = el.querySelector('#calc-ef-months');
    const currentEl = el.querySelector('#calc-ef-current');
    const contribEl = el.querySelector('#calc-ef-contribution');
    const resultEl = el.querySelector('#calc-ef-result');
    const update = () => {
      const monthlyExpenses = parseFloat(monthlyEl.value) || 0;
      const targetMonths = parseFloat(monthsEl.value) || 1;
      const current = parseFloat(currentEl.value) || 0;
      const contribution = parseFloat(contribEl.value) || 1;
      const target = monthlyExpenses * targetMonths;
      const remaining = Math.max(target - current, 0);
      const monthsToGoal = contribution > 0 ? Math.ceil(remaining / contribution) : Infinity;
      const years = (monthsToGoal / 12).toFixed(1);
      resultEl.innerHTML = `
        <table class="calc-table">
          <tr><td>Target fund size</td><td>${this._fmtMoney(target)}</td></tr>
          <tr><td>Still needed</td><td>${this._fmtMoney(remaining)}</td></tr>
          <tr><td><strong>Time to reach goal</strong></td><td><strong>${isFinite(monthsToGoal) ? `${monthsToGoal} months (~${years} yrs)` : '—'}</strong></td></tr>
        </table>
        <p>This assumes a steady, uninterrupted monthly contribution with no withdrawals — a realistic budget audit, windfalls, or a temporarily lower target (e.g., a $1,000 starter fund first) can change this timeline, as the article above discusses.</p>
      `;
    };
    [monthlyEl, monthsEl, currentEl, contribEl].forEach(inp => inp.addEventListener('input', update));
    update();
  },

  /* ---------------- 11. Personal injury contingency fee — net settlement estimator ---------------- */
  _buildContingencyFeeNet(el) {
    this._wrap(el,
      'Contingency Fee — Net Settlement Estimator', 'fa-scale-balanced',
      `
        <div class="calc-field">
          <label for="calc-cf-gross">Gross settlement amount ($)</label>
          <input type="number" id="calc-cf-gross" min="0" step="1000" value="100000">
        </div>
        <div class="calc-field">
          <label for="calc-cf-pct">Contingency fee (%)</label>
          <input type="number" id="calc-cf-pct" min="0" max="100" step="1" value="33">
        </div>
        <div class="calc-field">
          <label for="calc-cf-costs">Case costs deducted (medical liens, filing fees, expert witnesses) ($)</label>
          <input type="number" id="calc-cf-costs" min="0" step="500" value="4000">
        </div>
      `,
      'calc-cf-result'
    );
    const grossEl = el.querySelector('#calc-cf-gross');
    const pctEl = el.querySelector('#calc-cf-pct');
    const costsEl = el.querySelector('#calc-cf-costs');
    const resultEl = el.querySelector('#calc-cf-result');
    const update = () => {
      const gross = parseFloat(grossEl.value) || 0;
      const pct = (parseFloat(pctEl.value) || 0) / 100;
      const costs = parseFloat(costsEl.value) || 0;
      const attorneyFee = gross * pct;
      const netBeforeCosts = gross - attorneyFee;
      const netToClient = Math.max(netBeforeCosts - costs, 0);
      resultEl.innerHTML = `
        <table class="calc-table">
          <tr><td>Gross settlement</td><td>${this._fmtMoney(gross)}</td></tr>
          <tr><td>Attorney's contingency fee (${(pct * 100).toFixed(0)}%)</td><td>${this._fmtMoney(attorneyFee)}</td></tr>
          <tr><td>Case costs deducted</td><td>${this._fmtMoney(costs)}</td></tr>
          <tr><td><strong>Estimated net to you</strong></td><td><strong>${this._fmtMoney(netToClient)}</strong></td></tr>
        </table>
        <p>Whether case costs come out before or after the fee percentage is calculated varies by firm and by state, and can meaningfully change your net amount — always ask your specific attorney which method their fee agreement uses, and get it in writing before signing.</p>
      `;
    };
    [grossEl, pctEl, costsEl].forEach(inp => inp.addEventListener('input', update));
    update();
  },

  /* ---------------- 12. IRS Offer in Compromise — Reasonable Collection Potential estimator ---------------- */
  _buildOicRcpEstimator(el) {
    this._wrap(el,
      'Offer in Compromise — Reasonable Collection Potential Estimator', 'fa-file-invoice-dollar',
      `
        <div class="calc-field">
          <label for="calc-oic-assets">Net quick-sale value of assets ($)</label>
          <input type="number" id="calc-oic-assets" min="0" step="500" value="8000">
        </div>
        <div class="calc-field">
          <label for="calc-oic-income">Gross monthly income ($)</label>
          <input type="number" id="calc-oic-income" min="0" step="100" value="4200">
        </div>
        <div class="calc-field">
          <label for="calc-oic-expenses">IRS-allowed monthly living expenses ($)</label>
          <input type="number" id="calc-oic-expenses" min="0" step="100" value="3600">
        </div>
        <div class="calc-field">
          <label for="calc-oic-months">Payment multiplier (months)</label>
          <select id="calc-oic-months">
            <option value="12">12 (lump-sum offer)</option>
            <option value="24">24 (periodic-payment offer)</option>
          </select>
        </div>
      `,
      'calc-oic-result'
    );
    const assetsEl = el.querySelector('#calc-oic-assets');
    const incomeEl = el.querySelector('#calc-oic-income');
    const expensesEl = el.querySelector('#calc-oic-expenses');
    const monthsEl = el.querySelector('#calc-oic-months');
    const resultEl = el.querySelector('#calc-oic-result');
    const update = () => {
      const assets = parseFloat(assetsEl.value) || 0;
      const income = parseFloat(incomeEl.value) || 0;
      const expenses = parseFloat(expensesEl.value) || 0;
      const months = parseFloat(monthsEl.value) || 12;
      const monthlyAvailable = Math.max(income - expenses, 0);
      const futureIncomeComponent = monthlyAvailable * months;
      const rcp = assets + futureIncomeComponent;
      resultEl.innerHTML = `
        <table class="calc-table">
          <tr><td>Net quick-sale asset value</td><td>${this._fmtMoney(assets)}</td></tr>
          <tr><td>Monthly income available after allowed expenses</td><td>${this._fmtMoney(monthlyAvailable)}</td></tr>
          <tr><td>Future income component (× ${months} months)</td><td>${this._fmtMoney(futureIncomeComponent)}</td></tr>
          <tr><td><strong>Estimated Reasonable Collection Potential (RCP)</strong></td><td><strong>${this._fmtMoney(rcp)}</strong></td></tr>
        </table>
        <p>An offer below this estimated RCP is typically rejected unless you have a well-documented Effective Tax Administration argument. This uses a simplified version of the IRS's actual formula — the real Form 433-A (OIC) worksheet applies its own specific asset-valuation and allowable-expense-standard rules by location and family size that this estimator doesn't replicate. Not a substitute for a CPA or enrolled agent running your actual numbers.</p>
      `;
    };
    [assetsEl, incomeEl, expensesEl, monthsEl].forEach(inp => inp.addEventListener('input', update));
    update();
  },

  /* ---------------- 13. ACA marketplace premium tax credit estimator ---------------- */
  _buildAcaSubsidyEstimator(el) {
    this._wrap(el,
      'ACA Premium Tax Credit — Rough Estimator', 'fa-heart-pulse',
      `
        <div class="calc-field">
          <label for="calc-aca-income">Estimated annual household income ($)</label>
          <input type="number" id="calc-aca-income" min="0" step="500" value="42000">
        </div>
        <div class="calc-field">
          <label for="calc-aca-fpl">Federal Poverty Level for your household size ($)</label>
          <input type="number" id="calc-aca-fpl" min="1" step="500" value="20440">
        </div>
        <div class="calc-field">
          <label for="calc-aca-benchmark">Second-lowest-cost Silver plan — monthly premium ($)</label>
          <input type="number" id="calc-aca-benchmark" min="0" step="10" value="650">
        </div>
      `,
      'calc-aca-result'
    );
    const incomeEl = el.querySelector('#calc-aca-income');
    const fplEl = el.querySelector('#calc-aca-fpl');
    const benchmarkEl = el.querySelector('#calc-aca-benchmark');
    const resultEl = el.querySelector('#calc-aca-result');
    // Simplified applicable-percentage table approximating the sliding scale
    // described in the article above — real HHS/IRS tables are updated
    // annually and are more granular than these five bands.
    const _applicablePct = (fplPct) => {
      if (fplPct < 150) return 0;
      if (fplPct < 200) return 0.02;
      if (fplPct < 250) return 0.04;
      if (fplPct < 300) return 0.06;
      if (fplPct < 400) return 0.085;
      return 0.085;
    };
    const update = () => {
      const income = parseFloat(incomeEl.value) || 0;
      const fpl = parseFloat(fplEl.value) || 1;
      const benchmarkMonthly = parseFloat(benchmarkEl.value) || 0;
      const fplPct = (income / fpl) * 100;
      const applicablePct = _applicablePct(fplPct);
      const expectedAnnualContribution = income * applicablePct;
      const benchmarkAnnual = benchmarkMonthly * 12;
      const annualCredit = Math.max(benchmarkAnnual - expectedAnnualContribution, 0);
      const monthlyCredit = annualCredit / 12;
      resultEl.innerHTML = `
        <table class="calc-table">
          <tr><td>Income as % of Federal Poverty Level</td><td>${fplPct.toFixed(0)}%</td></tr>
          <tr><td>Applicable contribution percentage (est.)</td><td>${(applicablePct * 100).toFixed(1)}%</td></tr>
          <tr><td>Expected annual contribution</td><td>${this._fmtMoney(expectedAnnualContribution)}</td></tr>
          <tr><td><strong>Estimated monthly premium tax credit</strong></td><td><strong>${this._fmtMoney(monthlyCredit)}</strong></td></tr>
        </table>
        <p>This uses a simplified five-band version of the sliding-scale applicable-percentage table described above — the real IRS/HHS tables are more granular and are updated annually, and your actual credit is calculated against your specific county's actual benchmark Silver plan, not the number you enter here. Use Healthcare.gov's official calculator with your real numbers before enrolling; this is an illustrative estimate only.</p>
      `;
    };
      [incomeEl, fplEl, benchmarkEl].forEach(inp => inp.addEventListener('input', update));
    update();
  },

  /* ---------------- 14. VPN annual plan cost comparison ---------------- */
  _buildVpnPlanCostCompare(el) {
    this._wrap(el,
      'VPN Plan Cost Comparison — Monthly vs. Annual', 'fa-shield-halved',
      `
        <div class="calc-field">
          <label for="calc-vpn-monthly">Monthly (pay-as-you-go) price ($)</label>
          <input type="number" id="calc-vpn-monthly" min="0" step="0.5" value="12.95">
        </div>
        <div class="calc-field">
          <label for="calc-vpn-annual">Annual plan — total price for the year ($)</label>
          <input type="number" id="calc-vpn-annual" min="0" step="1" value="59.88">
        </div>
        <div class="calc-field">
          <label for="calc-vpn-years">Years you expect to stay subscribed</label>
          <input type="number" id="calc-vpn-years" min="1" step="1" value="2">
        </div>
      `,
      'calc-vpn-result'
    );
    const monthlyEl = el.querySelector('#calc-vpn-monthly');
    const annualEl = el.querySelector('#calc-vpn-annual');
    const yearsEl = el.querySelector('#calc-vpn-years');
    const resultEl = el.querySelector('#calc-vpn-result');
    const update = () => {
      const monthly = parseFloat(monthlyEl.value) || 0;
      const annual = parseFloat(annualEl.value) || 0;
      const years = parseFloat(yearsEl.value) || 1;
      const monthlyTotalCost = monthly * 12 * years;
      const annualTotalCost = annual * years;
      const savings = monthlyTotalCost - annualTotalCost;
      resultEl.innerHTML = `
        <table class="calc-table">
          <tr><th></th><th>Pay Monthly</th><th>Annual Plan</th></tr>
          <tr><td>Cost over ${years} yr(s)</td><td>${this._fmtMoney(monthlyTotalCost)}</td><td>${this._fmtMoney(annualTotalCost)}</td></tr>
        </table>
        <p><strong>${savings >= 0 ? `The annual plan saves ${this._fmtMoney(savings)}` : `Paying monthly is actually ${this._fmtMoney(Math.abs(savings))} cheaper`}</strong> over ${years} year(s) at these prices. Introductory annual pricing often renews at a higher rate after year one — check the renewal price, not just the first-year promotional price, before committing.</p>
      `;
    };
    [monthlyEl, annualEl, yearsEl].forEach(inp => inp.addEventListener('input', update));
    update();
  },

  /* ---------------- 15. Crypto exchange trading fee impact ---------------- */
  _buildCryptoFeeImpact(el) {
    this._wrap(el,
      'Crypto Exchange Fee Impact Estimator', 'fa-coins',
      `
        <div class="calc-field">
          <label for="calc-cf2-amount">Trade amount per transaction ($)</label>
          <input type="number" id="calc-cf2-amount" min="0" step="100" value="1000">
        </div>
        <div class="calc-field">
          <label for="calc-cf2-pct">Exchange fee (%, taker rate)</label>
          <input type="number" id="calc-cf2-pct" min="0" step="0.01" value="0.60">
        </div>
        <div class="calc-field">
          <label for="calc-cf2-trades">Number of trades per year</label>
          <input type="number" id="calc-cf2-trades" min="1" step="1" value="24">
        </div>
      `,
      'calc-cf2-result'
    );
    const amountEl = el.querySelector('#calc-cf2-amount');
    const pctEl = el.querySelector('#calc-cf2-pct');
    const tradesEl = el.querySelector('#calc-cf2-trades');
    const resultEl = el.querySelector('#calc-cf2-result');
    const update = () => {
      const amount = parseFloat(amountEl.value) || 0;
      const pct = (parseFloat(pctEl.value) || 0) / 100;
      const trades = parseFloat(tradesEl.value) || 1;
      const feePerTrade = amount * pct;
      const annualFees = feePerTrade * trades;
      resultEl.innerHTML = `
        <table class="calc-table">
          <tr><td>Fee per trade</td><td>${this._fmtMoney(feePerTrade)}</td></tr>
          <tr><td>Trades per year</td><td>${trades}</td></tr>
          <tr><td><strong>Estimated annual fees paid</strong></td><td><strong>${this._fmtMoney(annualFees)}</strong></td></tr>
        </table>
        <p>This only counts the exchange's stated trading fee — it doesn't include the wider bid-ask spread, which on lower-liquidity pairs can cost more than the posted fee itself, or any separate withdrawal/network fees. Compare an exchange's full cost (fee + typical spread), not just its advertised percentage, before assuming it's the cheapest option for your trading pattern.</p>
      `;
    };
    [amountEl, pctEl, tradesEl].forEach(inp => inp.addEventListener('input', update));
    update();
  },

  /* ---------------- 16. Home warranty break-even estimator ---------------- */
  _buildHomeWarrantyBreakeven(el) {
    this._wrap(el,
      'Home Warranty Break-Even Estimator', 'fa-house-chimney-crack',
      `
        <div class="calc-field">
          <label for="calc-hw-annual">Annual plan cost ($)</label>
          <input type="number" id="calc-hw-annual" min="0" step="10" value="600">
        </div>
        <div class="calc-field">
          <label for="calc-hw-servicefee">Service call fee per claim ($)</label>
          <input type="number" id="calc-hw-servicefee" min="0" step="5" value="100">
        </div>
        <div class="calc-field">
          <label for="calc-hw-repaircost">Typical out-of-pocket repair cost without a warranty ($)</label>
          <input type="number" id="calc-hw-repaircost" min="0" step="50" value="450">
        </div>
        <div class="calc-field">
          <label for="calc-hw-claims">Expected covered claims per year</label>
          <input type="number" id="calc-hw-claims" min="0" step="1" value="1">
        </div>
      `,
      'calc-hw-result'
    );
    const annualEl = el.querySelector('#calc-hw-annual');
    const feeEl = el.querySelector('#calc-hw-servicefee');
    const repairEl = el.querySelector('#calc-hw-repaircost');
    const claimsEl = el.querySelector('#calc-hw-claims');
    const resultEl = el.querySelector('#calc-hw-result');
    const update = () => {
      const annual = parseFloat(annualEl.value) || 0;
      const fee = parseFloat(feeEl.value) || 0;
      const repair = parseFloat(repairEl.value) || 0;
      const claims = parseFloat(claimsEl.value) || 0;
      const totalWarrantyCost = annual + (fee * claims);
      const totalWithoutWarranty = repair * claims;
      const diff = totalWithoutWarranty - totalWarrantyCost;
      resultEl.innerHTML = `
        <table class="calc-table">
          <tr><th></th><th>With Warranty</th><th>Without Warranty</th></tr>
          <tr><td>Estimated annual cost</td><td>${this._fmtMoney(totalWarrantyCost)}</td><td>${this._fmtMoney(totalWithoutWarranty)}</td></tr>
        </table>
        <p><strong>${diff >= 0 ? `The warranty comes out ${this._fmtMoney(diff)} ahead` : `Paying out of pocket comes out ${this._fmtMoney(Math.abs(diff))} ahead`}</strong> at these assumed claim counts and repair costs. This can't predict how many claims you'll actually file in a given year, or whether a specific claim gets approved — coverage caps and the "lack of maintenance" exclusion (see Red Flags above) can also leave you paying part of a covered repair yourself even with an approved claim.</p>
      `;
    };
    [annualEl, feeEl, repairEl, claimsEl].forEach(inp => inp.addEventListener('input', update));
    update();
  },

  /* ---------------- 17. REIT dividend income estimator (Real Estate) ---------------- */
  _buildReitIncomeEstimator(el) {
    this._wrap(el,
      'REIT Dividend Income Estimator', 'fa-building',
      `
        <div class="calc-field">
          <label for="calc-reit-invested">Amount invested ($)</label>
          <input type="number" id="calc-reit-invested" min="0" step="500" value="10000">
        </div>
        <div class="calc-field">
          <label for="calc-reit-yield">Current dividend yield (%)</label>
          <input type="number" id="calc-reit-yield" min="0" step="0.1" value="4.5">
        </div>
        <div class="calc-field">
          <label for="calc-reit-taxrate">Your ordinary income tax rate (%)</label>
          <input type="number" id="calc-reit-taxrate" min="0" max="100" step="1" value="22">
        </div>
      `,
      'calc-reit-result'
    );
    const investedEl = el.querySelector('#calc-reit-invested');
    const yieldEl = el.querySelector('#calc-reit-yield');
    const taxEl = el.querySelector('#calc-reit-taxrate');
    const resultEl = el.querySelector('#calc-reit-result');
    const update = () => {
      const invested = parseFloat(investedEl.value) || 0;
      const yieldPct = (parseFloat(yieldEl.value) || 0) / 100;
      const taxRate = (parseFloat(taxEl.value) || 0) / 100;
      const annualDividend = invested * yieldPct;
      const estTax = annualDividend * taxRate;
      const afterTax = annualDividend - estTax;
      resultEl.innerHTML = `
        <table class="calc-table">
          <tr><td>Estimated annual dividend income</td><td>${this._fmtMoney(annualDividend)}</td></tr>
          <tr><td>Estimated tax owed (ordinary income rate)</td><td>${this._fmtMoney(estTax)}</td></tr>
          <tr><td><strong>Estimated after-tax income</strong></td><td><strong>${this._fmtMoney(afterTax)}</strong></td></tr>
        </table>
        <p>Most REIT dividends are taxed as ordinary income, not the lower qualified-dividend rate — this estimator assumes your full ordinary rate applies, though a portion may qualify for the 20% pass-through deduction under current law (not modeled here). Dividend yields also fluctuate with share price and aren't guaranteed to stay constant — this is a snapshot estimate, not a forecast.</p>
      `;
    };
    [investedEl, yieldEl, taxEl].forEach(inp => inp.addEventListener('input', update));
    update();
  },

  /* ---------------- 18. Solar financing 20-year cost comparison ---------------- */
  _buildSolarFinancingCompare(el) {
    this._wrap(el,
      'Solar Loan vs. Lease/PPA — 20-Year Cost Estimator', 'fa-solar-panel',
      `
        <div class="calc-field">
          <label for="calc-sf-loanpay">Solar loan — monthly payment ($)</label>
          <input type="number" id="calc-sf-loanpay" min="0" step="10" value="180">
        </div>
        <div class="calc-field">
          <label for="calc-sf-loanterm">Solar loan term (years)</label>
          <input type="number" id="calc-sf-loanterm" min="1" step="1" value="15">
        </div>
        <div class="calc-field">
          <label for="calc-sf-ppapay">Lease/PPA — starting monthly payment ($)</label>
          <input type="number" id="calc-sf-ppapay" min="0" step="10" value="150">
        </div>
        <div class="calc-field">
          <label for="calc-sf-escalator">Lease/PPA annual price escalator (%)</label>
          <input type="number" id="calc-sf-escalator" min="0" step="0.5" value="2.9">
        </div>
        <div class="calc-field">
          <label for="calc-sf-taxcredit">Federal tax credit you'd claim with the loan ($)</label>
          <input type="number" id="calc-sf-taxcredit" min="0" step="500" value="7200">
        </div>
      `,
      'calc-sf-result'
    );
    const ids = ['loanpay', 'loanterm', 'ppapay', 'escalator', 'taxcredit'];
    const inputs = {};
    ids.forEach(id => { inputs[id] = el.querySelector(`#calc-sf-${id}`); });
    const resultEl = el.querySelector('#calc-sf-result');
    const update = () => {
      const loanPay = parseFloat(inputs.loanpay.value) || 0;
      const loanTerm = parseFloat(inputs.loanterm.value) || 1;
      const ppaPay = parseFloat(inputs.ppapay.value) || 0;
      const escalator = (parseFloat(inputs.escalator.value) || 0) / 100;
      const taxCredit = parseFloat(inputs.taxcredit.value) || 0;

      const loanTotal = (loanPay * 12 * loanTerm) - taxCredit;
      // PPA/lease: 20 years of monthly payments compounding annually by the escalator.
      let ppaTotal = 0;
      let currentMonthly = ppaPay;
      for (let yr = 0; yr < 20; yr++) {
        ppaTotal += currentMonthly * 12;
        currentMonthly *= (1 + escalator);
      }
      const diff = ppaTotal - loanTotal;

      resultEl.innerHTML = `
        <table class="calc-table">
          <tr><th></th><th>Solar Loan (incl. tax credit)</th><th>Lease/PPA over 20 yrs</th></tr>
          <tr><td>Total cost</td><td>${this._fmtMoney(Math.max(loanTotal, 0))}</td><td>${this._fmtMoney(ppaTotal)}</td></tr>
        </table>
        <p><strong>${diff >= 0 ? `The loan comes out ${this._fmtMoney(diff)} cheaper` : `The lease/PPA comes out ${this._fmtMoney(Math.abs(diff))} cheaper`}</strong> over a 20-year horizon at these inputs. The loan figure assumes you actually owe federal tax equal to or greater than the credit amount (the credit is nonrefundable but can carry forward); the loan also builds home equity and ends with the payment at $0 after year ${loanTerm}, while a PPA payment continues at an escalating rate for the full 20-25 year contract.</p>
      `;
    };
    Object.values(inputs).forEach(inp => inp.addEventListener('input', update));
    update();
  },

  /* ---------------- 19. GLP-1 weight-loss medication out-of-pocket cost estimator ---------------- */
  _buildGlp1CostEstimator(el) {
    this._wrap(el,
      'GLP-1 Medication — Estimated Annual Out-of-Pocket Cost', 'fa-pills',
      `
        <div class="calc-field">
          <label for="calc-glp-listprice">Monthly list price without coverage ($)</label>
          <input type="number" id="calc-glp-listprice" min="0" step="10" value="1050">
        </div>
        <div class="calc-field">
          <label for="calc-glp-covered">Is it covered by your plan for this use?</label>
          <select id="calc-glp-covered">
            <option value="full">Yes — covered, standard copay</option>
            <option value="partial">Covered with coinsurance (% of cost)</option>
            <option value="none">Not covered — full list price</option>
          </select>
        </div>
        <div class="calc-field">
          <label for="calc-glp-copay">Monthly copay/coinsurance amount ($, or leave list price above if "not covered")</label>
          <input type="number" id="calc-glp-copay" min="0" step="5" value="50">
        </div>
        <div class="calc-field">
          <label for="calc-glp-savingscard">Manufacturer savings card — max monthly reduction ($)</label>
          <input type="number" id="calc-glp-savingscard" min="0" step="10" value="0">
        </div>
      `,
      'calc-glp-result'
    );
    const listEl = el.querySelector('#calc-glp-listprice');
    const coveredEl = el.querySelector('#calc-glp-covered');
    const copayEl = el.querySelector('#calc-glp-copay');
    const cardEl = el.querySelector('#calc-glp-savingscard');
    const resultEl = el.querySelector('#calc-glp-result');
    const update = () => {
      const list = parseFloat(listEl.value) || 0;
      const covered = coveredEl.value;
      const copay = parseFloat(copayEl.value) || 0;
      const card = parseFloat(cardEl.value) || 0;
      const baseMonthly = covered === 'none' ? list : copay;
      const netMonthly = Math.max(baseMonthly - card, 0);
      const annual = netMonthly * 12;
      resultEl.innerHTML = `
        <table class="calc-table">
          <tr><td>Base monthly cost (before savings card)</td><td>${this._fmtMoney(baseMonthly)}</td></tr>
          <tr><td>Manufacturer savings card applied</td><td>-${this._fmtMoney(Math.min(card, baseMonthly))}</td></tr>
          <tr><td><strong>Estimated net monthly cost</strong></td><td><strong>${this._fmtMoney(netMonthly)}</strong></td></tr>
          <tr><td><strong>Estimated annual out-of-pocket cost</strong></td><td><strong>${this._fmtMoney(annual)}</strong></td></tr>
        </table>
        <p>Coverage status, copay amount and savings-card eligibility all change based on your specific plan's formulary decision and can be revised at renewal — this is a snapshot at today's terms, not a guarantee for the full year. If your plan doesn't currently cover this medication for weight management, an appeal (see the guide above) may change this outcome without you paying the "not covered" price indefinitely.</p>
      `;
    };
    [listEl, coveredEl, copayEl, cardEl].forEach(inp => inp.addEventListener('input', update));
    update();
  },

  /* ---------------- 20. CRM total annual cost estimator (Marketing & Business) ---------------- */
  _buildCrmCostEstimator(el) {
    this._wrap(el,
      'CRM Total Annual Cost Estimator', 'fa-users-gear',
      `
        <div class="calc-field">
          <label for="calc-crm-seats">Number of users (seats)</label>
          <input type="number" id="calc-crm-seats" min="1" step="1" value="5">
        </div>
        <div class="calc-field">
          <label for="calc-crm-perseat">Price per seat per month ($)</label>
          <input type="number" id="calc-crm-perseat" min="0" step="1" value="20">
        </div>
        <div class="calc-field">
          <label for="calc-crm-addons">Add-on features (automation, reporting) — monthly total ($)</label>
          <input type="number" id="calc-crm-addons" min="0" step="10" value="50">
        </div>
        <div class="calc-field">
          <label for="calc-crm-onboarding">One-time onboarding/setup fee ($)</label>
          <input type="number" id="calc-crm-onboarding" min="0" step="50" value="500">
        </div>
      `,
      'calc-crm-result'
    );
    const seatsEl = el.querySelector('#calc-crm-seats');
    const perSeatEl = el.querySelector('#calc-crm-perseat');
    const addonsEl = el.querySelector('#calc-crm-addons');
    const onboardingEl = el.querySelector('#calc-crm-onboarding');
    const resultEl = el.querySelector('#calc-crm-result');
    const update = () => {
      const seats = parseFloat(seatsEl.value) || 0;
      const perSeat = parseFloat(perSeatEl.value) || 0;
      const addons = parseFloat(addonsEl.value) || 0;
      const onboarding = parseFloat(onboardingEl.value) || 0;
      const monthlyRecurring = (seats * perSeat) + addons;
      const firstYearTotal = (monthlyRecurring * 12) + onboarding;
      const secondYearTotal = monthlyRecurring * 12;
      resultEl.innerHTML = `
        <table class="calc-table">
          <tr><td>Monthly recurring cost (seats + add-ons)</td><td>${this._fmtMoney(monthlyRecurring)}</td></tr>
          <tr><td><strong>Estimated first-year total (incl. onboarding)</strong></td><td><strong>${this._fmtMoney(firstYearTotal)}</strong></td></tr>
          <tr><td>Estimated second-year total (recurring only)</td><td>${this._fmtMoney(secondYearTotal)}</td></tr>
        </table>
        <p>Per-seat pricing means this total scales directly with headcount — adding 3 more users at renewal changes the monthly cost by 3 × the per-seat price, which is easy to underestimate when a team is growing. Confirm whether add-on features are truly included at your seat count or gated behind a higher tier before budgeting against this estimate.</p>
      `;
    };
    [seatsEl, perSeatEl, addonsEl, onboardingEl].forEach(inp => inp.addEventListener('input', update));
    update();
  },

  /* ---------------- 21. AI sales tool ROI / cost-per-seat estimator (AI Tools for Small Business) ---------------- */
  _buildAiSalesToolCostEstimator(el) {
    this._wrap(el,
      'AI Sales Tool — Cost vs. Time Saved Estimator', 'fa-robot',
      `
        <div class="calc-field">
          <label for="calc-ai-price">Tool price per month ($)</label>
          <input type="number" id="calc-ai-price" min="0" step="10" value="49">
        </div>
        <div class="calc-field">
          <label for="calc-ai-seats">Number of seats needed</label>
          <input type="number" id="calc-ai-seats" min="1" step="1" value="3">
        </div>
        <div class="calc-field">
          <label for="calc-ai-hourssaved">Estimated hours saved per rep per week</label>
          <input type="number" id="calc-ai-hourssaved" min="0" step="0.5" value="4">
        </div>
        <div class="calc-field">
          <label for="calc-ai-hourlyvalue">Value of a rep's hour (loaded cost, $)</label>
          <input type="number" id="calc-ai-hourlyvalue" min="0" step="5" value="35">
        </div>
      `,
      'calc-ai-result'
    );
    const priceEl = el.querySelector('#calc-ai-price');
    const seatsEl = el.querySelector('#calc-ai-seats');
    const hoursEl = el.querySelector('#calc-ai-hourssaved');
    const valueEl = el.querySelector('#calc-ai-hourlyvalue');
    const resultEl = el.querySelector('#calc-ai-result');
    const update = () => {
      const price = parseFloat(priceEl.value) || 0;
      const seats = parseFloat(seatsEl.value) || 0;
      const hours = parseFloat(hoursEl.value) || 0;
      const value = parseFloat(valueEl.value) || 0;
      const monthlyCost = price * seats;
      const monthlyValueSaved = hours * 4.33 * value * seats;
      const netMonthly = monthlyValueSaved - monthlyCost;
      resultEl.innerHTML = `
        <table class="calc-table">
          <tr><td>Monthly tool cost (${seats} seat(s))</td><td>${this._fmtMoney(monthlyCost)}</td></tr>
          <tr><td>Estimated monthly value of time saved</td><td>${this._fmtMoney(monthlyValueSaved)}</td></tr>
          <tr><td><strong>Estimated net monthly value</strong></td><td><strong>${this._fmtMoney(netMonthly)}</strong></td></tr>
        </table>
        <p><strong>${netMonthly >= 0 ? 'This tool would pay for itself' : 'At these assumptions, the tool costs more than the estimated time savings'}</strong> at your entered hours-saved figure — but "hours saved per rep" is the single most unreliable number in this whole estimate: it's rarely measured against a real before/after baseline (see the article's 30-60 day baseline-measurement recommendation above) and is often closer to a vendor-marketing estimate than a verified figure for your specific team.</p>
      `;
    };
    [priceEl, seatsEl, hoursEl, valueEl].forEach(inp => inp.addEventListener('input', update));
    update();
  }
};
