/* ==========================================================================
   FISCORA — HTML → Markdown extractor
   Fetches every page in the content graph, walks its rendered article body
   and emits a Markdown file with frontmatter. Interactive widgets, callouts
   and stat strips are emitted as raw HTML blocks, because FiscoraMD passes
   raw HTML straight through — the calculators survive the round trip.
   ========================================================================== */

(function () {
  'use strict';

  /* Elements that must survive verbatim rather than becoming prose. */
  const KEEP_RAW = '.widget,.stat-strip,.pros-cons,.faq,.chart-wrap,canvas,form,iframe,[data-calc],[data-ad],[data-quiz]';

  const CLEAN = s => String(s || '')
    .replace(/\u00a0/g, ' ')
    .replace(/[ \t]+/g, ' ')
    .trim();

  const esc = s => String(s).replace(/([*_`[\]])/g, '\\$1');

  /* --------------------------------------------------------------- inline */
  function inline(node) {
    let out = '';
    node.childNodes.forEach(n => {
      if (n.nodeType === 3) { out += CLEAN(n.nodeValue) ? n.nodeValue.replace(/\s+/g, ' ') : ''; return; }
      if (n.nodeType !== 1) return;

      const tag = n.tagName.toLowerCase();
      const inner = inline(n);

      if (tag === 'strong' || tag === 'b') out += '**' + inner.trim() + '**';
      else if (tag === 'em' || tag === 'i') out += '*' + inner.trim() + '*';
      else if (tag === 'code') out += '`' + n.textContent + '`';
      else if (tag === 'br') out += '  \n';
      else if (tag === 'a') {
        const href = n.getAttribute('href') || '';
        out += href ? '[' + inner.trim() + '](' + href + ')' : inner;
      } else if (tag === 'img') {
        out += '![' + (n.getAttribute('alt') || '') + '](' + (n.getAttribute('src') || '') + ')';
      } else out += inner;
    });
    return out;
  }

  /* ---------------------------------------------------------------- table */
  function tableMD(tbl) {
    const rows = Array.prototype.slice.call(tbl.querySelectorAll('tr'));
    if (!rows.length) return '';
    const cells = tr => Array.prototype.slice.call(tr.children)
      .map(td => inline(td).replace(/\|/g, '\\|').trim());

    const head = cells(rows[0]);
    let md = '| ' + head.join(' | ') + ' |\n';
    md += '| ' + head.map(() => '---').join(' | ') + ' |\n';
    rows.slice(1).forEach(tr => {
      const c = cells(tr);
      while (c.length < head.length) c.push('');
      md += '| ' + c.join(' | ') + ' |\n';
    });
    return md;
  }

  /* ---------------------------------------------------------------- lists */
  function listMD(el, ordered, depth) {
    let md = '';
    Array.prototype.slice.call(el.children).forEach((li, i) => {
      if (li.tagName !== 'LI') return;
      const sub = li.querySelector(':scope > ul, :scope > ol');
      const clone = li.cloneNode(true);
      Array.prototype.slice.call(clone.querySelectorAll(':scope > ul, :scope > ol')).forEach(s => s.remove());
      const pad = '  '.repeat(depth);
      md += pad + (ordered ? (i + 1) + '. ' : '- ') + inline(clone).trim() + '\n';
      if (sub) md += listMD(sub, sub.tagName === 'OL', depth + 1);
    });
    return md;
  }

  /* ---------------------------------------------------------------- block */
  function blockMD(el) {
    const tag = el.tagName.toLowerCase();

    if (el.matches(KEEP_RAW) || el.querySelector(KEEP_RAW)) {
      return el.outerHTML.replace(/\s+\n/g, '\n').trim() + '\n';
    }

    if (/^h[1-6]$/.test(tag)) {
      const lvl = Number(tag[1]);
      return '#'.repeat(lvl) + ' ' + inline(el).trim() + '\n';
    }
    if (tag === 'p') { const t = inline(el).trim(); return t ? t + '\n' : ''; }
    if (tag === 'ul') return listMD(el, false, 0);
    if (tag === 'ol') return listMD(el, true, 0);
    if (tag === 'blockquote') {
      return inline(el).trim().split('\n').map(l => '> ' + l).join('\n') + '\n';
    }
    if (tag === 'hr') return '---\n';
    if (tag === 'pre') return '```\n' + el.textContent.trim() + '\n```\n';
    if (tag === 'table' || el.classList.contains('table-wrap')) {
      const t = el.tagName === 'TABLE' ? el : el.querySelector('table');
      return t ? tableMD(t) : '';
    }
    if (tag === 'aside' || tag === 'div' || tag === 'section' || tag === 'figure' || tag === 'details') {
      /* Structural wrappers we style with CSS classes stay as raw HTML so
         the visual design is identical after the round trip. */
      if (el.className) return el.outerHTML.replace(/\s+\n/g, '\n').trim() + '\n';
      return Array.prototype.slice.call(el.children).map(blockMD).filter(Boolean).join('\n');
    }
    const txt = inline(el).trim();
    return txt ? txt + '\n' : '';
  }

  /* ----------------------------------------------------------- frontmatter */
  function frontmatter(doc, slug) {
    const q = sel => { const e = doc.querySelector(sel); return e ? CLEAN(e.textContent) : ''; };
    const meta = name => {
      const e = doc.querySelector('meta[name="' + name + '"],meta[property="' + name + '"]');
      return e ? CLEAN(e.getAttribute('content')) : '';
    };
    const page = (window.BY_SLUG || {})[slug] || {};

    const lines = [
      'slug: "' + slug + '"',
      'lang: "en"',
      'title: "' + (q('.article-head h1') || q('h1') || page.title || '').replace(/"/g, "'") + '"',
      'lede: "' + (q('.article-head .lede') || meta('description')).replace(/"/g, "'") + '"',
      'description: "' + meta('description').replace(/"/g, "'") + '"'
    ];
    if (page.cat) lines.push('category: "' + page.cat + '"');
    if (page.author) lines.push('author: "' + page.author + '"');
    if (page.date) lines.push('date: "' + page.date + '"');
    if (page.read) lines.push('read: ' + page.read);
    if (page.tags) lines.push('tags: "' + page.tags.join(', ') + '"');

    return '---\n' + lines.join('\n') + '\n---\n\n';
  }

  /* ------------------------------------------------------------- convert */
  function convertDoc(doc, slug) {
    const body = doc.getElementById('article-body') ||
                 doc.querySelector('.article-body') ||
                 doc.querySelector('main') ||
                 doc.body;
    if (!body) return null;

    const blocks = Array.prototype.slice.call(body.children)
      .filter(el => !el.matches('[data-ad],script,style,[data-recirc]'))
      .map(blockMD)
      .filter(Boolean);

    return frontmatter(doc, slug) + blocks.join('\n') + '\n';
  }

  function fetchDoc(slug) {
    return fetch(slug, { cache: 'no-cache' })
      .then(r => { if (!r.ok) throw new Error('http-' + r.status); return r.text(); })
      .then(html => new DOMParser().parseFromString(html, 'text/html'));
  }

  function convert(slug) {
    return fetchDoc(slug).then(doc => convertDoc(doc, slug));
  }

  function convertAll(slugs, onProgress) {
    const out = {};
    let i = 0;
    const next = () => {
      if (i >= slugs.length) return Promise.resolve(out);
      const s = slugs[i++];
      return convert(s)
        .then(md => { out[s] = md; })
        .catch(e => { out[s] = null; })
        .then(() => { if (onProgress) onProgress(i, slugs.length, s); return next(); });
    };
    return next();
  }

  window.FiscoraMDExport = { convert, convertAll, convertDoc, blockMD };
})();
