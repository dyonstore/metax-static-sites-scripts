/* QA harness: pre-seed Arabic into IndexedDB + localStorage, then boot the
   real shell so the full Arabic render path is exercised exactly as a reader
   with an Arabic browser would experience it. */
(function () {
  const SCRIPTS = ['js/site-data.js', 'js/glossary-data.js', 'js/ads.js',
                   'js/tools.js', 'js/pages.js', 'js/site.js'];

  try { localStorage.setItem('fiscora_idb_prefs_lang', JSON.stringify('ar')); } catch (e) {}

  function chain(list) {
    return list.reduce((p, src) => p.then(() => new Promise(res => {
      const s = document.createElement('script');
      s.src = src; s.onload = res; s.onerror = res;
      document.head.appendChild(s);
    })), Promise.resolve());
  }

  function seed() {
    return new Promise(resolve => {
      if (typeof indexedDB === 'undefined') return resolve();
      const req = indexedDB.open('fiscora', 1);
      req.onupgradeneeded = () => {
        const db = req.result;
        ['prefs', 'referrals', 'reading'].forEach(s => {
          if (!db.objectStoreNames.contains(s)) db.createObjectStore(s);
        });
      };
      req.onsuccess = () => {
        const db = req.result;
        const tx = db.transaction('prefs', 'readwrite');
        tx.objectStore('prefs').put('ar', 'lang');
        tx.oncomplete = () => resolve();
        tx.onerror = () => resolve();
      };
      req.onerror = () => resolve();
    });
  }

  seed().then(() => chain(SCRIPTS));
})();
