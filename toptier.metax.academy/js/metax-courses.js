/**
 * MetaX.Academy Course-TOC directory + detail page controller helpers.
 *
 * Course-TOCs are standalone Markdown files under metax-courses/*.md,
 * written to the format defined in metax-courses/COURSE_TOC_SCHEMA.md.
 * They are indexed by data/metax-courses-manifest.json. This file reuses
 * the exact same parseFrontMatter()/renderMarkdown() pipeline already used
 * for every TopTier post (js/markdown-parser.js) — no second parser.
 *
 * These are review artifacts, not published TopTier content: they render
 * inside this project purely so human experts and other AI agents can
 * browse and assess them before anything moves to metax.academy.
 */
const MetaXCourses = {
  _manifest: null,
  _cache: {},

  async loadManifest() {
    if (this._manifest) return this._manifest;
    const res = await fetch('data/metax-courses-manifest.json');
    this._manifest = res.ok ? await res.json() : [];
    return this._manifest;
  },

  async loadCourse(courseId) {
    if (this._cache[courseId]) return this._cache[courseId];
    const manifest = await this.loadManifest();
    const entry = manifest.find(c => c.course_id === courseId);
    if (!entry) return null;

    const res = await fetch(entry.file);
    if (!res.ok) return null;
    const raw = await res.text();
    const { data, content } = parseFrontMatter(raw);
    const html = renderMarkdown(content);

    const course = { ...entry, meta: data, html };
    this._cache[courseId] = course;
    return course;
  },

  /** Small status pill used on both the directory and detail page. */
  statusBadgeHTML(status) {
    const labels = {
      'draft': 'Draft',
      'in-review': 'In Review',
      'expert-approved': 'Expert-Approved',
      'published': 'Published'
    };
    const classes = {
      'draft': 'metax-badge metax-badge--draft',
      'in-review': 'metax-badge metax-badge--review',
      'expert-approved': 'metax-badge metax-badge--approved',
      'published': 'metax-badge metax-badge--published'
    };
    const key = status || 'draft';
    return `<span class="${classes[key] || classes.draft}">${labels[key] || 'Draft'}</span>`;
  },

  /** Card used in the metax-courses.html directory grid. */
  courseCardHTML(entry) {
    return `
      <a class="metax-course-card" href="metax-course.html?slug=${entry.course_id}">
        <div class="metax-course-card__top">
          ${this.statusBadgeHTML(entry.status)}
          <span class="metax-course-card__pillar">${entry.pillar || ''}</span>
        </div>
        <h3>${entry.title}</h3>
        <p class="metax-course-card__meta">Maps to: <strong>${entry.maps_to_toptier_category || '—'}</strong> · Review: ${entry.review_status || 'unspecified'}</p>
      </a>
    `;
  }
};
