/**
 * Reader feedback capture — "Was this article helpful?" (CONTENT_TRICKS.md #10).
 * A simple thumbs up/down widget, optionally paired with a one-line comment
 * (mainly prompted on "Not helpful"), persisted via the RESTful Table API's
 * `feedback` table. Fully within static-site capabilities — no backend code,
 * just fetch() calls against the Table API.
 *
 * Per the trick's own "where it breaks down" note: this is anonymous,
 * unauthenticated, and trivially gameable, so counts are shown as a rough
 * directional signal only — never badged as validated proof of quality.
 */
const Feedback = {
  async render(containerId, slug) {
    const el = document.getElementById(containerId);
    if (!el || !slug) return;

    el.innerHTML = `
      <div class="feedback-widget" id="feedback-widget-${slug}">
        <h4><i class="fa-regular fa-thumbs-up"></i> Was this article helpful?</h4>
        <div class="feedback-buttons">
          <button type="button" class="feedback-btn" data-value="true"><i class="fa-regular fa-thumbs-up"></i> Yes, helpful</button>
          <button type="button" class="feedback-btn" data-value="false"><i class="fa-regular fa-thumbs-down"></i> Not helpful</button>
        </div>
        <div class="feedback-comment-box" id="feedback-comment-box-${slug}">
          <textarea placeholder="Optional — what was missing or confusing? (helps us improve this guide)" id="feedback-comment-${slug}"></textarea><br>
          <button type="button" id="feedback-submit-${slug}">Submit</button>
        </div>
        <p class="feedback-thanks" id="feedback-thanks-${slug}"><i class="fa-solid fa-circle-check"></i> Thanks for the feedback — it helps us decide what to revise next.</p>
        <p class="feedback-disclaimer">Anonymous, unmoderated reader input — used to guide future content updates, not a verified quality rating.</p>
      </div>
    `;

    // Guard against a reader voting more than once per article per browser
    // (localStorage-based; not a security control, just a UX nicety).
    const votedKey = `ttinsights_feedback_voted_${slug}`;
    let alreadyVoted = false;
    try { alreadyVoted = !!localStorage.getItem(votedKey); } catch (e) {}

    const buttons = el.querySelectorAll('.feedback-btn');
    const commentBox = document.getElementById(`feedback-comment-box-${slug}`);
    const commentInput = document.getElementById(`feedback-comment-${slug}`);
    const submitBtn = document.getElementById(`feedback-submit-${slug}`);
    const thanksEl = document.getElementById(`feedback-thanks-${slug}`);

    if (alreadyVoted) {
      buttons.forEach(b => (b.disabled = true));
      thanksEl.textContent = 'You already gave feedback on this article — thank you.';
      thanksEl.classList.add('visible');
      return;
    }

    let pendingHelpful = null;

    const submitFeedback = async (helpful, comment) => {
      try {
        await fetch('tables/feedback', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ post_slug: slug, helpful, comment: comment || '' })
        });
      } catch (e) {
        // Fail silently — a broken feedback POST should never disrupt reading.
      }
      try { localStorage.setItem(votedKey, '1'); } catch (e) {}
      buttons.forEach(b => (b.disabled = true));
      commentBox.classList.remove('visible');
      thanksEl.classList.add('visible');
    };

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const helpful = btn.getAttribute('data-value') === 'true';
        buttons.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        pendingHelpful = helpful;
        if (!helpful) {
          // Give "not helpful" voters a chance to say why before submitting.
          commentBox.classList.add('visible');
        } else {
          submitFeedback(true, '');
        }
      });
    });

    submitBtn.addEventListener('click', () => {
      submitFeedback(pendingHelpful === null ? false : pendingHelpful, commentInput.value.trim());
    });
  }
};
