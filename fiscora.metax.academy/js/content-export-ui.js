/* ==========================================================================
   FISCORA — Export console UI (internal tool)
   Drives js/md-export.js and packages the result for download.
   ========================================================================== */

(function () {
  'use strict';

  const $ = id => document.getElementById(id);
  let results = {};

  function log(msg, cls) {
    const box = $('exp-log');
    if (!box) return;
    const line = document.createElement('div');
    if (cls) line.className = cls;
    line.textContent = msg;
    box.appendChild(line);
    box.scrollTop = box.scrollHeight;
  }

  function slugs() {
    const pages = (window.PAGES || []).filter(p => p.slug && /\.html$/i.test(p.slug));
    const extra = ['index.html', 'about.html', 'editorial-policy.html', 'privacy.html', 'terms.html', 'advertise.html', 'contact.html'];
    const seen = {};
    const list = [];
    pages.map(p => p.slug).concat(extra).forEach(s => {
      if (!seen[s]) { seen[s] = 1; list.push(s); }
    });
    return list;
  }

  function run() {
    const list = slugs();
    results = {};
    $('exp-log').innerHTML = '';
    $('stat-total').textContent = list.length;
    log('Extracting ' + list.length + ' pages…');

    let done = 0, fail = 0, bytes = 0;

    window.FiscoraMDExport.convertAll(list, (i, total, slug) => {
      const md = null;
      $('stat-done').textContent = i;
    }).then(out => {
      results = out;
      Object.keys(out).forEach(slug => {
        if (out[slug]) {
          done++; bytes += out[slug].length;
          log('✓ ' + slug + '  (' + Math.round(out[slug].length / 1024 * 10) / 10 + ' KB)', 'ok');
        } else {
          fail++;
          log('✗ ' + slug + '  — no article body found', 'bad');
        }
      });
      $('stat-done').textContent = done;
      $('stat-fail').textContent = fail;
      $('stat-bytes').textContent = Math.round(bytes / 1024);
      const first = Object.keys(out).find(k => out[k]);
      if (first) $('exp-out').value = out[first];
      log('Done. ' + done + ' converted, ' + fail + ' skipped.');
    });
  }

  function save(name, text, type) {
    const blob = new Blob([text], { type: type || 'text/markdown;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1500);
  }

  function downloadAll() {
    const keys = Object.keys(results).filter(k => results[k]);
    if (!keys.length) { log('Nothing to download — run the extraction first.', 'bad'); return; }
    /* Single concatenated bundle with explicit file separators: a static
       page cannot write a zip without pulling in a compression library. */
    const bundle = keys.map(k =>
      '<!-- FILE: content/' + k.replace(/\.html$/, '.md') + ' -->\n' + results[k]
    ).join('\n\n');
    save('fiscora-content-bundle.md', bundle);
    log('Bundled ' + keys.length + ' files.', 'ok');
  }

  function downloadManifest() {
    const man = Object.keys(results).filter(k => results[k]).map(k => ({
      slug: k,
      en: 'content/' + k.replace(/\.html$/, '.md'),
      ar: 'content/ar-' + k.replace(/\.html$/, '.md'),
      bytes: results[k].length
    }));
    save('manifest.json', JSON.stringify({ generated: Date.now(), files: man }, null, 2), 'application/json');
  }

  document.addEventListener('click', e => {
    if (e.target.closest('#exp-run')) run();
    if (e.target.closest('#exp-download')) downloadAll();
    if (e.target.closest('#exp-manifest')) downloadManifest();
  });
})();
