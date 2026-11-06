/**
 * Social share widget — renders share buttons (Facebook, X/Twitter,
 * LinkedIn, WhatsApp, Pinterest, Email, Copy Link) for the current page or
 * a specific post. No SDK required — uses simple share intent URLs.
 */
function renderShareButtons(containerId, { url, title, image } = {}) {
  const el = document.getElementById(containerId);
  if (!el) return;

  const shareUrl = url || window.location.href;
  const shareTitle = title || document.title;
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(shareTitle);
  // Pinterest (and any other consumer that follows the media= link) needs a
  // fully-qualified, absolute image URL — a relative path like "img/foo.jpg"
  // resolves against the sharing service's own domain, not ours, and the
  // preview breaks. Reuse the same resolver SEO.setBasic() uses for
  // og:image/twitter:image so every surface points at real, real data.
  const absoluteImage = (typeof SEO !== 'undefined' && SEO._absoluteImage)
    ? SEO._absoluteImage(image)
    : (image || '');
  const encodedImage = encodeURIComponent(absoluteImage);

  const links = [
    { name: 'Facebook', icon: 'fa-brands fa-facebook-f', href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, cls: 'share-fb' },
    { name: 'X', icon: 'fa-brands fa-x-twitter', href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`, cls: 'share-x' },
    { name: 'LinkedIn', icon: 'fa-brands fa-linkedin-in', href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`, cls: 'share-li' },
    { name: 'WhatsApp', icon: 'fa-brands fa-whatsapp', href: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`, cls: 'share-wa' },
    { name: 'Pinterest', icon: 'fa-brands fa-pinterest-p', href: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedTitle}&media=${encodedImage}`, cls: 'share-pin' },
    { name: 'Email', icon: 'fa-regular fa-envelope', href: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`, cls: 'share-email' }
  ];

  el.innerHTML = `
    <span class="share-label">Share:</span>
    <div class="share-buttons">
      ${links.map(l => `
        <a href="${l.href}" target="_blank" rel="noopener noreferrer" class="share-btn ${l.cls}" aria-label="Share on ${l.name}" title="Share on ${l.name}">
          <i class="${l.icon}"></i>
        </a>
      `).join('')}
      <button class="share-btn share-copy" id="${containerId}-copy" aria-label="Copy link" title="Copy link">
        <i class="fa-solid fa-link"></i>
      </button>
    </div>
  `;

  const copyBtn = document.getElementById(`${containerId}-copy`);
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(shareUrl);
        const icon = copyBtn.querySelector('i');
        icon.className = 'fa-solid fa-check';
        copyBtn.classList.add('copied');
        setTimeout(() => { icon.className = 'fa-solid fa-link'; copyBtn.classList.remove('copied'); }, 1800);
      } catch (e) {
        console.warn('Clipboard copy failed', e);
      }
    });
  }
}
