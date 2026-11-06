/* ==========================================================================
   FISCORA — Arabic static-prose overrides
   Hub and landing pages carry hardcoded English prose in their HTML (h1,
   lede, eyebrows, editorial panels, newsletter blocks). Rather than editing
   52 HTML files, each page declares its translations here as
   selector → Arabic text pairs, applied after the shell renders.

   `text` replaces textContent. `html` replaces innerHTML (use only for
   trusted, hand-written strings — never for reader input).
   ========================================================================== */

(function () {
  const AR = window.FiscoraAR || (window.FiscoraAR = {});

  AR.static = {

    /* ------------------------------------------------------------- global
       Applied on EVERY page before the per-page map, so shared blocks such
       as the newsletter panel only need translating once. */
    '*': [
      ['.subscribe input[type="email"]', { attr: 'placeholder', value: 'بريدك@مثال.com' }],
      ['.subscribe button', { html: '<i class="fa-solid fa-envelope"></i> اشترك مجانًا' }],
      ['.form-note', { text: 'بلا محتوى مدفوع. يمكنك إلغاء الاشتراك بنقرة واحدة.' }],
      ['.eyebrow:has(+ h2)', null]
    ],

    'index.html': [
      ['.hero .eyebrow', { text: 'أبحاث مالية مستقلة' }],
      ['.hero h1', { text: 'قرارات مالية، محسوبة بالأرقام لا بالشعارات.' }],
      ['.hero .lede', { text: 'كل دليل على هذا الموقع يعرض حساباته كاملة: الافتراضات، والصيغ، والحالات التي ينكسر فيها الاستنتاج. لا وصفات جاهزة، ولا محتوى مدفوع.' }],
      ['.stat:nth-child(1) span', { text: 'دليلًا معمّقًا' }],
      ['.stat:nth-child(2) span', { text: 'نموذجًا تفاعليًا' }],
      ['.stat:nth-child(3) span', { text: 'رابط تسويق بالعمولة' }]
    ],

    'investing.html': [
      ['#hub-intro .eyebrow', { html: '<i class="fa-solid fa-chart-line"></i> مكتب الأبحاث' }],
      ['#hub-intro h1', { text: 'الاستثمار وبناء الثروة' }],
      ['#hub-intro .lede', { text: 'كل ما يحدد نتيجتك تقريبًا يُقرَّر قبل أن تختار صندوقًا واحدًا: الوعاء الذي تحتفظ به فيه، والتوزيع الذي تستطيع فعلًا تحمّله وقت الهبوط، والرسوم التي تدفعها سنويًا بصرف النظر عن الأداء. يتناول هذا المكتب تلك القرارات بترتيب أهميتها.' }],
      ['.stat-strip div:nth-child(1) span', { text: 'أدلة معمّقة' }],
      ['.stat-strip div:nth-child(2) span', { text: 'نماذج تفاعلية' }],
      ['.stat-strip div:nth-child(3) b', { text: '~70 دقيقة' }],
      ['.stat-strip div:nth-child(3) span', { text: 'زمن قراءة المكتب كاملًا' }],
      ['#hub-grid', null],
      ['.section--tight .eyebrow', null]
    ]
  };

  /* Per-hub blocks that repeat with only the desk name changing. */
  const HUBS = {
    'insurance.html': ['التأمين والمخاطر', 'fa-shield-halved',
      'التأمين شراء احتمالات، لا شراء طمأنينة. الهدف هو تغطية الخسائر التي تعجز عن استيعابها، وأن تدفع لتحمّل ما تستطيع استيعابه بنفسك. هذا المكتب يفصل الاثنين.'],
    'credit-and-debt.html': ['الائتمان والديون', 'fa-credit-card',
      'الدين أداة بسعر معلن. المسألة ليست أخلاقية بل حسابية: أي رصيد يكلفك أكثر، وبأي ترتيب تُسدّده، وما الذي يحرّك درجتك الائتمانية فعلًا.'],
    'business-growth.html': ['الأعمال والبرمجيات كخدمة', 'fa-rocket',
      'الشركات لا تفشل لأنها تفتقر إلى الأفكار، بل لأن اقتصاديات الوحدة لا تعمل. هذا المكتب يتناول التسعير والهوامش والكلفة التي تحدد البقاء.'],
    'marketing.html': ['تسويق النمو', 'fa-bullhorn',
      'كل قناة تسويقية تبدو مربحة حتى تُحسب كلفتها الحقيقية. هنا نقيس بالعائد على الإنفاق لا بالانطباعات.'],
    'tax-and-legal.html': ['الضرائب والشأن القانوني', 'fa-scale-balanced',
      'الشأن الضريبي مسألة توقيت وتوثيق قبل أن يكون مسألة ثغرات. هذا المكتب يتناول اختيار الكيان والخصومات والالتزامات التي تتحول إلى غرامات.'],
    'retirement-planning.html': ['التقاعد والتخطيط للإرث', 'fa-umbrella-beach',
      'النصف الأصعب من المسألة ليس التجميع بل السحب: توقيت الضمان الاجتماعي، وأقساط الرعاية الصحية، وترتيب السحب من الحسابات، والأوراق التي تحدد من يرث ماذا.']
  };

  Object.keys(HUBS).forEach(slug => {
    const h = HUBS[slug];
    AR.static[slug] = [
      ['#hub-intro .eyebrow', { html: '<i class="fa-solid ' + h[1] + '"></i> مكتب الأبحاث' }],
      ['#hub-intro h1', { text: h[0] }],
      ['#hub-intro .lede', { text: h[2] }],
      ['.stat-strip div:nth-child(1) span', { text: 'أدلة معمّقة' }],
      ['.stat-strip div:nth-child(2) span', { text: 'نماذج تفاعلية' }],
      ['.stat-strip div:nth-child(3) span', { text: 'زمن قراءة المكتب كاملًا' }]
    ];
  });

  /* Shared section headings that appear across hub pages. */
  AR.headings = [
    ['The rest of the desk', 'بقية المكتب'],
    ['Every investing guide', 'كل أدلة الاستثمار'],
    ['Full library', 'المكتبة الكاملة'],
    ['How to use this desk', 'كيف تستخدم هذا المكتب'],
    ['Four decisions, in this order', 'أربعة قرارات، بهذا الترتيب'],
    ['Run the numbers', 'احسب الأرقام'],
    ['Models for this desk', 'نماذج هذا المكتب'],
    ['Sequenced reading', 'قراءة متسلسلة'],
    ['Paths that include this desk', 'المسارات التي تضم هذا المكتب'],
    ['The Friday Brief', 'موجز الجمعة'],
    ['One model a week, no hype.', 'نموذج واحد كل أسبوع، بلا مبالغات.'],
    ['Latest research', 'أحدث الأبحاث'],
    ['Start here', 'ابدأ من هنا'],
    ['Research desk', 'مكتب الأبحاث'],
    ['Keep going', 'واصل'],
    ['Related research', 'أبحاث ذات صلة'],
    ['Subscribe free', 'اشترك مجانًا'],
    ['Deep guides', 'أدلة معمّقة'],
    ['Interactive models', 'نماذج تفاعلية'],
    ['In-depth guides', 'أدلة معمّقة'],
    ['Weekly readers', 'قراء أسبوعيًا'],
    ['Full desk reading time', 'زمن قراءة المكتب كاملًا'],
    ['min read', 'دقيقة قراءة'],
    ['Advertisement', 'إعلان']
  ];
})();
