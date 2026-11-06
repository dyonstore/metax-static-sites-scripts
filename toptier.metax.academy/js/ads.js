/**
 * Google AdSense helper.
 * Injects the AdSense loader script once, then provides a function to
 * generate responsive <ins class="adsbygoogle"> units and push them.
 *
 * Publisher ID: SITE_CONFIG.adClientId is now the real, live AdSense
 * publisher ID for this property (ca-pub-4463113802541266), matching the
 * ads.txt file at the project root. Ad UNIT slot IDs (SITE_CONFIG.adSlots)
 * are still placeholders — see the comment in js/config.js for why that's
 * safe (AdSense site verification only needs ads.txt + this loader script,
 * not live ad units) and what to do once real slots exist.
 */
function isPlaceholderSlot(slot) {
  // A slot made of one digit repeated ("1111111111", "2222222222", ...) is
  // one of this project's placeholder values, not a real AdSense ad-unit
  // slot ID. Detecting this avoids ever pushing an ad request for a fake
  // slot, which would show up as an invalid ad unit in AdSense.
  return !slot || /^(\d)\1*$/.test(String(slot));
}

function loadAdSenseScript() {
  if (document.getElementById('adsbygoogle-loader')) return;
  if (!SITE_CONFIG.adClientId || SITE_CONFIG.adClientId.includes('XXXX')) return; // not configured yet
  const script = document.createElement('script');
  script.id = 'adsbygoogle-loader';
  script.async = true;
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${SITE_CONFIG.adClientId}`;
  script.crossOrigin = 'anonymous';
  document.head.appendChild(script);
}

/**
 * Hides the ad slot's own wrapping "chrome" — not just the slot container
 * itself, but the layout scaffolding built around it in each page's HTML
 * (the full-width `.ad-slot-top` strip above the leaderboard, and the
 * `.sidebar-card` that wraps a "Sponsored" heading + `#ad-sidebar`) — so
 * that while ads are hidden the page shows no leftover empty strip, border
 * or "Sponsored" label where a banner would normally sit.
 */
function hideAdChrome(el) {
  const slotStrip = el.closest('.ad-slot-top');
  if (slotStrip) { slotStrip.style.display = 'none'; return; }
  const sidebarCard = el.closest('.sidebar-card');
  if (sidebarCard) { sidebarCard.style.display = 'none'; return; }
  const homeSection = el.closest('#home-incontent-ad-section');
  if (homeSection) { homeSection.style.display = 'none'; return; }
  el.style.display = 'none';
}

/**
 * Renders an ad slot into the given container element id.
 * type: 'leaderboard' | 'rectangle' | 'inContent' | 'sidebar'
 *
 * While SITE_CONFIG.adsVerified is false (AdSense review/verification still
 * pending) this renders NOTHING — no real ad unit and no "Responsive Ad
 * Space" placeholder box — and hides the slot's surrounding chrome, so the
 * body of every page is completely free of anything that looks like an ad
 * banner. Flip SITE_CONFIG.adsVerified to true once Google approves the
 * site and every one of these calls starts rendering ads again automatically.
 */
function renderAdUnit(containerId, type = 'rectangle', label = 'Advertisement') {
  const el = document.getElementById(containerId);
  if (!el) return;

  if (!SITE_CONFIG.adsVerified) {
    el.innerHTML = '';
    hideAdChrome(el);
    return;
  }

  const slot = SITE_CONFIG.adSlots[type] || SITE_CONFIG.adSlots.rectangle;
  const hasRealClientId = SITE_CONFIG.adClientId && !SITE_CONFIG.adClientId.includes('XXXX');
  const configured = hasRealClientId && !isPlaceholderSlot(slot);

  el.innerHTML = `
    <div class="ad-unit ad-unit--${type}">
      <span class="ad-unit__label">${label}</span>
      ${configured
        ? `<ins class="adsbygoogle"
              style="display:block"
              data-ad-client="${SITE_CONFIG.adClientId}"
              data-ad-slot="${slot}"
              data-ad-format="auto"
              data-full-width-responsive="true"></ins>`
        : `<div class="ad-placeholder ad-placeholder--${type}">
              <i class="fa-solid fa-rectangle-ad"></i>
              <span>Responsive Ad Space (${type})</span>
           </div>`
      }
    </div>
  `;

  if (configured && window.adsbygoogle) {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.warn('AdSense push failed', e);
    }
  }
}

document.addEventListener('DOMContentLoaded', loadAdSenseScript);
