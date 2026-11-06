/* Meridian Decision Network — inline SVG icon set.
   No icon-font CDN: these are ~20 hand-picked 24px stroke glyphs inlined at
   render time, so there is no extra request, no FOUT and no layout shift.
   All icons are decorative (aria-hidden); heading text always carries meaning. */
(function () {
  "use strict";

  var P = {
    /* generic / structure */
    doc: '<path d="M14 3v5h5M8 13h8M8 17h5M6 3h9l5 5v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/>',
    list: '<path d="M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01"/>',
    steps: '<path d="M4 20h4v-6H4zM10 20h4V9h-4zM16 20h4V4h-4z"/>',
    check: '<path d="m4 13 4.5 4.5L20 6"/>',
    warn: '<path d="M12 9v4M12 17h.01M10.3 3.9 2.4 17.5A1.9 1.9 0 0 0 4 20.4h16a1.9 1.9 0 0 0 1.6-2.9L13.7 3.9a1.9 1.9 0 0 0-3.4 0Z"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
    question: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.6 2.2c-.7.4-1.1 1-1.1 1.8v.3M12 17h.01"/>',
    /* money */
    money: '<path d="M12 2v20M17 6H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
    coins: '<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
    chart: '<path d="M3 3v18h18M7 15l3-4 3 3 5-7"/>',
    trend: '<path d="M3 17l6-6 4 4 8-8M15 7h6v6"/>',
    bank: '<path d="M3 10h18M5 10v9M19 10v9M9 10v9M15 10v9M2 21h20M12 3 2.5 8h19Z"/>',
    card: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/>',
    receipt: '<path d="M5 3h14v18l-3.5-2-3.5 2-3.5-2L5 21ZM9 8h6M9 12h6"/>',
    /* protection */
    shield: '<path d="M12 3 4 6v6c0 5 3.4 8.3 8 9.5 4.6-1.2 8-4.5 8-9.5V6Z"/>',
    shieldCheck: '<path d="M12 3 4 6v6c0 5 3.4 8.3 8 9.5 4.6-1.2 8-4.5 8-9.5V6Z"/><path d="m9 12 2 2 4-4"/>',
    lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
    key: '<circle cx="8" cy="15" r="4"/><path d="m11 12 8-8 3 3-2 2-2-2M15.5 7.5 18 10"/>',
    fingerprint: '<path d="M12 4c-4.4 0-8 3.6-8 8M12 4c4.4 0 8 3.6 8 8M8 12a4 4 0 0 1 8 0v4M12 12v8M16 16v2"/>',
    server: '<rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/>',
    cloud: '<path d="M17.5 19a4.5 4.5 0 0 0 .3-9A6 6 0 0 0 6.2 11 3.5 3.5 0 0 0 6.5 19Z"/>',
    mail: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    bug: '<path d="M8 6a4 4 0 0 1 8 0M9 6h6v6a3 3 0 0 1-6 0ZM12 15v6M9 18l-4 2M15 18l4 2M9 12H4M15 12h5"/>',
    /* legal / process */
    scale: '<path d="M12 3v18M7 21h10M4 8h16M4 8l-2.5 6h5ZM20 8l-2.5 6h5ZM12 3l8 5M12 3 4 8"/>',
    stamp: '<path d="M5 21h14M7 17h10v3H7zM9 4a3 3 0 0 1 6 0c0 2-1.5 3-1.5 5h-3C10.5 7 9 6 9 4ZM7 12h10v5H7z"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4M8 14h3M8 17h6"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M17 5.2a3.5 3.5 0 0 1 0 6.6M18 20a6.4 6.4 0 0 0-1.6-4.3"/>',
    tool: '<path d="M14.5 6a4 4 0 1 1 4.7 4.7l-8.4 8.4-4.2 1.2 1.2-4.2Z"/><path d="M13 8l3 3"/>',
    search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/>',
    home: '<path d="M4 11 12 4l8 7v9a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1Z"/>',
    bolt: '<path d="M13 2 4 14h6l-1 8 9-12h-6Z"/>',
    award: '<circle cx="12" cy="9" r="6"/><path d="m8.5 14.5-1.5 7 5-2.5 5 2.5-1.5-7"/>',
    plane: '<path d="M2 13l20-7-7 20-3-8Z"/><path d="m12 18 3-9"/>',
    heart: '<path d="M12 20S3.5 14.5 3.5 9.2A4.7 4.7 0 0 1 12 6.3a4.7 4.7 0 0 1 8.5 2.9C20.5 14.5 12 20 12 20Z"/>',
    leaf: '<path d="M20 4C10 4 4 9 4 16c0 2 .7 3.4.7 3.4M4.7 19.4C6 13 11 9 20 4c0 10-5 15.4-11 15.4a5 5 0 0 1-4.3 0Z"/>',
    book: '<path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v18H6.5A2.5 2.5 0 0 0 4 22ZM4 4.5V19"/>',
    target: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r=".6" fill="currentColor" stroke="none"/>'
  };

  /* Keyword → icon, checked in order. First match wins, so put the specific
     phrases before the generic single words. */
  var RULES = [
    [/ransom|breach|attack|threat|incident|phish/i, "bug"],
    [/mfa|multi-factor|authentic|passkey|password|identity|credential/i, "key"],
    [/backup|restore|resilien|recover|disaster/i, "server"],
    [/email|mail|dmarc|spf|dkim|inbox/i, "mail"],
    [/cyber|security|secure|protect|harden|control set|baseline|endpoint/i, "shieldCheck"],
    [/insur|cover|liability|policy|claim|underwrit/i, "shield"],
    [/lock|encrypt|privacy|confidential|data protection/i, "lock"],
    [/cost|price|pricing|premium|fee|rate|spend|budget|apr|cheap|expensive|dollar/i, "money"],
    [/loan|lend|borrow|credit|financ|capital|factoring|advance|mortgage/i, "coins"],
    [/bank|account|deposit|treasury/i, "bank"],
    [/card|payment|merchant|processing|interchange|checkout/i, "card"],
    [/invoice|receipt|billing|statement/i, "receipt"],
    [/tax|payroll|withhold|bookkeep|ledger|accounting|close/i, "receipt"],
    [/cash flow|forecast|revenue|growth|roi|return|benchmark|score|market|trend/i, "trend"],
    [/chart|data|statistic|report|metric|analys/i, "chart"],
    [/legal|law|attorney|lawyer|court|clause|contract|nda|terms|agreement|trademark|llc|entity|formation|corp/i, "scale"],
    [/complian|regulat|audit|soc 2|soc2|certif|licen|questionnaire|standard|framework/i, "stamp"],
    [/calendar|deadline|due|annual|renewal|schedule|month/i, "calendar"],
    [/time|hour|day|week|fast|speed|timeline|when/i, "clock"],
    [/team|staff|employee|people|hire|hiring|contractor|worker|founder|owner/i, "users"],
    [/calculator|tool|estimat|model|convert/i, "tool"],
    [/checklist|check|verify|tick|step by step/i, "check"],
    [/compar|best|versus|vs\b|rank|scored|rubric|choose|choosing|which/i, "award"],
    [/risk|warn|trap|mistake|avoid|fail|wrong|danger|gap/i, "warn"],
    [/travel|expat|nomad|flight|trip|abroad|visa/i, "plane"],
    [/health|benefit|hsa|medical|insurance plan|wellness/i, "heart"],
    [/energy|solar|heat|watt|efficien|electric|panel/i, "leaf"],
    [/home|property|real estate|house|roof|mortgage rate/i, "home"],
    [/cert|course|exam|degree|training|learn|career|skill|credential/i, "book"],
    [/saas|software|tool stack|platform|app|ai\b|vendor|subscription/i, "cloud"],
    [/guide|explainer|basics|introduction|how to|overview|start/i, "book"],
    [/search|find|filter|look/i, "search"],
    [/faq|question|answer|why|what/i, "question"],
    [/plan|strategy|goal|priorit|next step|order/i, "target"],
    [/quick|instant|now|urgent|immediate/i, "bolt"],
    [/policy|editorial|about|contact|disclosure|methodolog/i, "doc"],
    [/list|every|all |options/i, "list"],
    [/process|sequence|phase|stage/i, "steps"]
  ];

  function pick(text, fallback) {
    var s = String(text || "");
    for (var i = 0; i < RULES.length; i++) {
      if (RULES[i][0].test(s)) { return RULES[i][1]; }
    }
    return fallback || "doc";
  }

  function svg(name) {
    var d = P[name] || P.doc;
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + d + "</svg>";
  }

  window.MDN_ICONS = {
    /* raw glyph by explicit name */
    raw: svg,
    /* small inline icon, auto-chosen from text */
    inline: function (text, fallback) {
      return '<span class="ico" aria-hidden="true">' + svg(pick(text, fallback)) + "</span>";
    },
    /* tinted chip icon, auto-chosen from text */
    chip: function (text, fallback) {
      return '<span class="h-ico" aria-hidden="true">' + svg(pick(text, fallback)) + "</span>";
    },
    pick: pick,
    has: function (name) { return !!P[name]; }
  };
})();
