/**
 * Lightweight, best-effort visitor-country detector.
 *
 * There is no server on a static site, so this can only use client-side
 * signals:
 *   1. A free, no-API-key, CORS-enabled public IP-geolocation lookup
 *      (https://ipwho.is/) — works for most visitors, but can fail if the
 *      visitor's browser/network blocks third-party requests.
 *   2. A fallback that guesses a country from the browser's IANA timezone
 *      (Intl.DateTimeFormat) when the network lookup is unavailable.
 *   3. If both fail, callers should treat the visitor as "XX" (unknown /
 *      global default) — see ContentStore.getCountryCpmRow().
 *
 * Privacy note: only a 2-letter country code (never precise location, IP,
 * or any personal data) is cached in localStorage for 24h to avoid refetching
 * on every page view.
 */
const Geo = {
  STORAGE_KEY: 'ttinsights_visitor_geo',
  CACHE_MS: 24 * 60 * 60 * 1000,
  country: null,
  countryName: null,
  source: null, // 'ip' | 'timezone' | 'default'
  ready: false,

  async init() {
    if (this.ready) return this;

    try {
      const cached = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || 'null');
      if (cached && cached.country && (Date.now() - cached.ts) < this.CACHE_MS) {
        this.country = cached.country;
        this.countryName = cached.countryName || null;
        this.source = cached.source || 'ip';
        this.ready = true;
        return this;
      }
    } catch (e) { /* localStorage unavailable — proceed to a fresh lookup */ }

    let country = null;
    let countryName = null;
    let source = null;

    try {
      const res = await fetch('https://ipwho.is/', { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        if (data && data.success !== false && data.country_code) {
          country = data.country_code;
          countryName = data.country || null;
          source = 'ip';
        }
      }
    } catch (e) {
      // Network/CORS failure — fall through to the timezone guess below.
    }

    if (!country) {
      country = this._guessFromTimezone();
      source = country ? 'timezone' : 'default';
    }

    this.country = country || 'XX';
    this.countryName = countryName;
    this.source = source;
    this.ready = true;

    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify({
        country: this.country, countryName, source, ts: Date.now()
      }));
    } catch (e) { /* ignore */ }

    return this;
  },

  /** Rough, offline country guess from the browser's IANA timezone. */
  _guessFromTimezone() {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
      const map = {
        'America/New_York': 'US', 'America/Chicago': 'US', 'America/Denver': 'US',
        'America/Los_Angeles': 'US', 'America/Anchorage': 'US', 'America/Phoenix': 'US',
        'America/Toronto': 'CA', 'America/Vancouver': 'CA', 'America/Edmonton': 'CA', 'America/Winnipeg': 'CA',
        'Europe/London': 'GB',
        'Australia/Sydney': 'AU', 'Australia/Melbourne': 'AU', 'Australia/Brisbane': 'AU', 'Australia/Perth': 'AU',
        'Europe/Berlin': 'DE', 'Europe/Munich': 'DE'
      };
      return map[tz] || null;
    } catch (e) {
      return null;
    }
  }
};
