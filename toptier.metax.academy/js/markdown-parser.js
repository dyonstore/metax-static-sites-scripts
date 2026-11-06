/**
 * Minimal YAML-front-matter parser + Markdown renderer.
 * Front matter must look like:
 * ---
 * title: "My Title"
 * tags: [tag-one, tag-two]
 * featured: true
 * ---
 * Body content in standard Markdown follows.
 */
function parseFrontMatter(raw) {
  const fmRegex = /^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/;
  const match = raw.match(fmRegex);
  if (!match) {
    return { data: {}, content: raw };
  }
  const yamlBlock = match[1];
  const content = match[2];
  const data = {};

  yamlBlock.split('\n').forEach(line => {
    if (!line.trim() || line.trim().startsWith('#')) return;
    const idx = line.indexOf(':');
    if (idx === -1) return;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();

    if (value.startsWith('[') && value.endsWith(']')) {
      value = value
        .slice(1, -1)
        .split(',')
        .map(v => v.trim().replace(/^["']|["']$/g, ''))
        .filter(Boolean);
    } else if (value === 'true') {
      value = true;
    } else if (value === 'false') {
      value = false;
    } else {
      value = value.replace(/^["']|["']$/g, '');
    }
    data[key] = value;
  });

  return { data, content: content.trim() };
}

function renderMarkdown(mdContent) {
  if (typeof marked === 'undefined') {
    return `<p>${mdContent}</p>`;
  }
  marked.setOptions({ gfm: true, breaks: false, headerIds: false, mangle: false });
  return marked.parse(mdContent || '');
}
