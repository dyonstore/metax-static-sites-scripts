/**
 * Global site configuration.
 */
const SITE_CONFIG = {
  siteName: "TopTier Insights",
  siteDescription: "Unbiased, in-depth guides on insurance, finance, legal, cybersecurity, real estate and technology — the web's highest-value topics.",
  postsPerPage: 9,

  // Real Google AdSense Publisher ID for this property (matches ads.txt at the
  // project root: "google.com, pub-4463113802541266, DIRECT, f08c47fec0942fa0").
  adClientId: "ca-pub-4463113802541266",

  // Whether this property has PASSED Google AdSense site verification/review.
  // Keep this false while verification is pending: js/ads.js hides every ad
  // slot rendered in the page <body> (top leaderboard, sidebar, in-content —
  // both the real <ins class="adsbygoogle"> unit AND the "Responsive Ad
  // Space" placeholder box) whenever this is false, so nothing that looks
  // like an ad banner appears anywhere on the site while Google is reviewing
  // it. This does NOT touch the AdSense loader/verification <script> tag in
  // each page's <head> — that one has to stay so Google's crawler can find
  // and verify it. The moment AdSense approves the site, flip this single
  // flag to `true` and every ad slot on every page starts rendering again
  // automatically — no other code changes needed.
  adsVerified: false,

  // TODO: Once you create dedicated ad units for this site in your AdSense
  // dashboard (Ads > By ad unit > Display ads), paste their real slot IDs here.
  // Until then these remain clearly-flagged placeholders — js/ads.js detects
  // any all-repeated-digit slot (like these) and safely shows a placeholder
  // box instead of issuing a broken ad request, so the site never sends
  // invalid ad-unit calls to Google while still passing AdSense site review
  // (which only requires the ads.txt file + the verification script, not
  // live ad units).
  adSlots: {
    leaderboard: "1111111111",
    rectangle: "2222222222",
    inContent: "3333333333",
    sidebar: "4444444444"
  },

  // Fallback cover images used when a Markdown post has no "image" field.
  defaultImages: {
    "insurance": "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=60",
    "legal-attorneys": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=60",
    "finance-loans": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=60",
    "cybersecurity-vpn": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=60",
    "crypto-investing": "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=60",
    "real-estate": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=60",
    "marketing-business": "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=60",
    "health-wellness": "https://images.unsplash.com/photo-1580281657702-257584239a55?auto=format&fit=crop&w=1200&q=60",
    "technology-saas": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=60",
    "education": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=60",
    "tax-relief-debt": "https://sspark.genspark.ai/cfimages?u1=fpCVDnv%2BDjRinVd%2BaBVlpkRl6sba12md7KYZMFA%2B1oROR09pAUVKQE728jAn1lnqlxAd%2BEEIAyJ7JQaW7XMNLrUSQNM%2FWZOAmDPo%2BXNw1CdfsHoJWMFkP6UkSqjIrGiS2IWv&u2=NeBlHYckPAcqGvle&width=2560",
    "senior-care-medicare": "https://sspark.genspark.ai/cfimages?u1=qLnE%2BnGKj2QVe%2BmFzpxKV6qp48DNOjgf%2BaDWQhyjMogWLj2Ypg%2F0BjcfhPgInZBY8ciEFhOoCBhSgm8aL7JQ7OGWS8grSdWLSQ1cUTb2VHP6n%2BStz%2BI4u3Q63ItY81IthBUgqKC5nwZadXPUnurX6QQe&u2=w86Y8Q2m47qVnWkZ&width=2560",
    "home-improvement-solar": "https://sspark.genspark.ai/cfimages?u1=yXJ2BQE5qwg%2FM50gQ6%2Fu8pvC1FmRMt5HT02iJX8SrkcExkRb2c5ojMqzkkFDCa6QFqFEMqb0oQVFyEgRSn9%2Bpo3I3v%2FkE8SaoVibzY%2Fc0oX58Ji00ixP2rxl9b6i&u2=iLIU%2Fj2DeXLx2kvY&width=2560",
    "elder-fraud-scam-protection": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=60",
    "credit-repair": "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&w=1200&q=60",
    "home-warranty": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=60",
    "aca-health-marketplace": "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=1200&q=60",
    "ai-business-tools": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=60",
    "ev-vehicle-insurance-financing": "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=60",
    "default": "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=60"
  }
};
