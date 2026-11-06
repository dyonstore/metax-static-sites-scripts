/* ==========================================================================
   FISCORA — Markdown renderer
   Purpose-built for this publication rather than a generic library, because
   our articles embed interactive calculator widgets, callouts and data tables
   as raw HTML. A standard Markdown parser would escape those into visible
   source text; this one passes any block-level HTML through untouched.

   Supports: frontmatter, ATX headings, paragraphs, ordered/unordered lists,
   pipe tables, blockquotes, fenced code, hr, images, and inline
   emphasis/links/code. Raw HTML blocks are preserved verbatim.
   ========================================================================== */

const FiscoraMD = (() => {

  /* ---------------------------------------------------------------- utils */
  const escapeHTML = s => String(s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

  /* Block-level tags that signal "this is raw HTML, leave it alone". */
  const BLOCK_TAGS = /^<(\/?)(div|section|aside|article|figure|table|thead|tbody|tr|td|th|ul|ol|li|p|h[1-6]|blockquote|pre|hr|form|fieldset|iframe|canvas|details|summary|nav|header|footer|main|span|img|input|label|select|option|button|output|em|strong|b|i|a|br)\b/i;

  /* ------------------------------------------------------- frontmatter */
  /** Split `---\nkey: value\n---\nbody` into { meta, body }. */
  function parseFrontmatter(src) {
    const meta = {};
    const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(src);
    if (!m) return { meta, body: src };
    m[1].split(/\r?\n/).forEach(line => {
      const i = line.indexOf(':');
      if (i < 1) return;
      const key = line.slice(0, i).trim();
      let val = line.slice(i + 1).trim();
      /* Strip matching surrounding quotes. */
      if ((val.startsWith('"') && val.endsWith('"')) ||
          (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      if (val === 'true') val = true;
      else if (val === 'false') val = false;
      else if (val !== '' && !isNaN(Number(val)) && /^-?[\d.]+$/.test(val)) val = Number(val);
      meta[key] = val;
    });
    return { meta, body: src.slice(m[0].length) };
  }

  /* ------------------------------------------------------------- inline */
  /** Inline formatting. Runs on text that is NOT inside a raw HTML block. */
  function inline(text) {
    /* Protect inline code spans first so their contents are never parsed. */
    const codes = [];
    text = text.replace(/`([^`]+)`/g, (_, c) => {
      codes.push('<code>' + escapeHTML(c) + '</code>');
      return '\u0000C' + (codes.length - 1) + '\u0000';
    });

    /* Images before links — the syntax differs only by a leading '!'. */
    text = text.replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)/g,
      (_, alt, src, title) =>
        '<img src="' + escapeHTML(src) + '" alt="' + escapeHTML(alt) + '"' +
        (title ? ' title="' + escapeHTML(title) + '"' : '') + ' loading="lazy">');

    text = text.replace(/\[([^\]]+)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)/g,
      (_, label, href, title) => {
        const ext = /^https?:\/\//i.test(href);
        return '<a href="' + escapeHTML(href) + '"' +
          (title ? ' title="' + escapeHTML(title) + '"' : '') +
          (ext ? ' target="_blank" rel="noopener"' : '') + '>' + label + '</a>';
      });

    text = text
      .replace(/\*\*\*([^*]+)\*\*\*/g, '<strong><em>$1</em></strong>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/(^|[^*])\*([^*\n]+)\*/g, '$1<em>$2</em>')
      .replace(/~~([^~]+)~~/g, '<del>$1</del>');

    return text.replace(/\u0000C(\d+)\u0000/g, (_, i) => codes[Number(i)]);
  }

  /* -------------------------------------------------------------- tables */
  function isTableDivider(line) {
    return /^\s*\|?[\s:-]*-[-\s:|]*\|?\s*$/.test(line) && line.includes('-');
  }

  function splitRow(line) {
    let s = line.trim();
    if (s.startsWith('|')) s = s.slice(1);
    if (s.endsWith('|')) s = s.slice(0, -1);
    return s.split('|').map(c => c.trim());
  }

  function buildTable(lines, start) {
    const header = splitRow(lines[start]);
    const aligns = splitRow(lines[start + 1]).map(spec => {
      const l = spec.startsWith(':'), r = spec.endsWith(':');
      return r && l ? 'center' : r ? 'right' : l ? 'left' : '';
    });
    let i = start + 2;
    const rows = [];
    while (i < lines.length && lines[i].includes('|') && lines[i].trim() !== '') {
      rows.push(splitRow(lines[i]));
      i++;
    }
    const th = header.map((c, j) =>
      '<th' + (aligns[j] ? ' style="text-align:' + aligns[j] + '"' : '') + '>' + inline(c) + '</th>'
    ).join('');
    const body = rows.map(r =>
      '<tr>' + r.map((c, j) =>
        '<td' + (aligns[j] ? ' style="text-align:' + aligns[j] + '"' : '') + '>' + inline(c) + '</td>'
      ).join('') + '</tr>'
    ).join('');
    const html = '<div class="table-wrap"><table class="data"><thead><tr>' +
      th + '</tr></thead><tbody>' + body + '</tbody></table></div>';
    return { html, next: i };
  }

  /* --------------------------------------------------------------- lists */
  function buildList(lines, start, ordered) {
    const items = [];
    let i = start;
    const re = ordered ? /^\s*\d+[.)]\s+(.*)$/ : /^\s*[-*+]\s+(.*)$/;
    while (i < lines.length) {
      const m = re.exec(lines[i]);
      if (m) {
        items.push(m[1]);
        i++;
      } else if (/^\s{2,}\S/.test(lines[i]) && items.length) {
        /* Continuation line folded into the previous item. */
        items[items.length - 1] += ' ' + lines[i].trim();
        i++;
      } else {
        break;
      }
    }
    const tag = ordered ? 'ol' : 'ul';
    /* A leading "**Label**" becomes a <b> lead-in, matching our .steps style. */
    const html = '<' + tag + '>' + items.map(it => {
      const lead = /^\*\*([^*]+)\*\*\s*(.*)$/.exec(it);
      return lead
        ? '<li><b>' + inline(lead[1]) + '</b>' + inline(lead[2]) + '</li>'
        : '<li>' + inline(it) + '</li>';
    }).join('') + '</' + tag + '>';
    return { html, next: i };
  }

  /* ---------------------------------------------------------------- main */
  function render(src) {
    if (!src) return '';
    const { body } = parseFrontmatter(src);
    const lines = body.replace(/\r\n/g, '\n').split('\n');
    const out = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];

      /* Blank */
      if (!line.trim()) { i++; continue; }

      /* Fenced code */
      if (/^\s*```/.test(line)) {
        const lang = line.trim().replace(/^```/, '').trim();
        const buf = [];
        i++;
        while (i < lines.length && !/^\s*```/.test(lines[i])) { buf.push(lines[i]); i++; }
        i++;
        out.push('<pre><code' + (lang ? ' class="language-' + escapeHTML(lang) + '"' : '') +
          '>' + escapeHTML(buf.join('\n')) + '</code></pre>');
        continue;
      }

      /* Raw HTML block — copied through verbatim. This is what keeps the
         interactive calculators, callouts and widgets working. */
      if (BLOCK_TAGS.test(line.trim())) {
        const buf = [];
        while (i < lines.length) {
          buf.push(lines[i]);
          i++;
          /* A blank line ends the block only if tags are balanced so far. */
          if (i < lines.length && !lines[i].trim()) {
            const joined = buf.join('\n');
            const opens = (joined.match(/<([a-zA-Z][\w-]*)\b[^>]*>/g) || [])
              .filter(t => !/\/>$/.test(t)).length;
            const closes = (joined.match(/<\/[a-zA-Z][\w-]*>/g) || []).length;
            const voids = (joined.match(/<(img|br|hr|input|meta|link)\b[^>]*>/gi) || []).length;
            if (opens - voids <= closes) break;
          }
        }
        out.push(buf.join('\n'));
        continue;
      }

      /* Horizontal rule */
      if (/^\s*(\*\s*){3,}$/.test(line) || /^\s*(-\s*){3,}$/.test(line) || /^\s*(_\s*){3,}$/.test(line)) {
        out.push('<hr>'); i++; continue;
      }

      /* Heading */
      const h = /^(#{1,6})\s+(.*)$/.exec(line);
      if (h) {
        const level = h[1].length;
        const text = h[2].replace(/\s*#+\s*$/, '');
        const id = text.toLowerCase().replace(/<[^>]+>/g, '')
          .replace(/[^\w\u0600-\u06FF\s-]/g, '').trim().replace(/\s+/g, '-');
        out.push('<h' + level + ' id="' + id + '">' + inline(text) + '</h' + level + '>');
        i++; continue;
      }

      /* Table */
      if (line.includes('|') && i + 1 < lines.length && isTableDivider(lines[i + 1])) {
        const t = buildTable(lines, i);
        out.push(t.html); i = t.next; continue;
      }

      /* Blockquote */
      if (/^\s*>/.test(line)) {
        const buf = [];
        while (i < lines.length && /^\s*>/.test(lines[i])) {
          buf.push(lines[i].replace(/^\s*>\s?/, '')); i++;
        }
        out.push('<blockquote>' + render(buf.join('\n')) + '</blockquote>');
        continue;
      }

      /* Lists */
      if (/^\s*[-*+]\s+/.test(line)) {
        const l = buildList(lines, i, false); out.push(l.html); i = l.next; continue;
      }
      if (/^\s*\d+[.)]\s+/.test(line)) {
        const l = buildList(lines, i, true); out.push(l.html); i = l.next; continue;
      }

      /* Paragraph — consume until a blank line or a new block construct. */
      const buf = [];
      while (i < lines.length && lines[i].trim() &&
             !/^(#{1,6})\s/.test(lines[i]) &&
             !/^\s*[-*+]\s+/.test(lines[i]) &&
             !/^\s*\d+[.)]\s+/.test(lines[i]) &&
             !/^\s*>/.test(lines[i]) &&
             !/^\s*```/.test(lines[i]) &&
             !BLOCK_TAGS.test(lines[i].trim())) {
        buf.push(lines[i]); i++;
      }
      if (buf.length) out.push('<p>' + inline(buf.join(' ').trim()) + '</p>');
    }

    return out.join('\n');
  }

  /** Plain-text extraction, used for reading-time and meta descriptions. */
  function toText(src) {
    const { body } = parseFrontmatter(src);
    return body
      .replace(/<[^>]+>/g, ' ')
      .replace(/[#*_`>|-]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function readingTime(src) {
    const words = toText(src).split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 225));
  }

  return { render, parseFrontmatter, toText, readingTime, escapeHTML };
})();

if (typeof window !== 'undefined') window.FiscoraMD = FiscoraMD;
