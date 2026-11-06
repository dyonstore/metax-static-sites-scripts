/* ==========================================================================
   FISCORA — IndexedDB layer
   One database shared by the language engine and the referral system.
   Wrapped in promises with a localStorage fallback, because IndexedDB is
   unavailable in private-browsing modes on some older WebKit builds and a
   reader losing their language choice is a worse outcome than a slower store.
   ========================================================================== */

const FiscoraDB = (() => {
  'use strict';

  const NAME = 'fiscora';
  const VERSION = 1;
  const STORES = ['prefs', 'referrals', 'reading'];

  let dbPromise = null;
  let broken = false;

  /* ------------------------------------------------------------- fallback */
  const fallback = {
    key: (store, k) => 'fiscora_idb_' + store + '_' + k,
    get(store, k) {
      try {
        const raw = localStorage.getItem(this.key(store, k));
        return raw === null ? undefined : JSON.parse(raw);
      } catch (e) { return undefined; }
    },
    set(store, k, v) {
      try { localStorage.setItem(this.key(store, k), JSON.stringify(v)); } catch (e) {}
    },
    del(store, k) {
      try { localStorage.removeItem(this.key(store, k)); } catch (e) {}
    },
    all(store) {
      const out = [];
      const prefix = 'fiscora_idb_' + store + '_';
      try {
        for (let i = 0; i < localStorage.length; i++) {
          const k = localStorage.key(i);
          if (k && k.indexOf(prefix) === 0) {
            try { out.push(JSON.parse(localStorage.getItem(k))); } catch (e) {}
          }
        }
      } catch (e) {}
      return out;
    }
  };

  /* -------------------------------------------------------------- open db */
  function open() {
    if (broken) return Promise.reject(new Error('idb-unavailable'));
    if (dbPromise) return dbPromise;

    dbPromise = new Promise((resolve, reject) => {
      if (typeof indexedDB === 'undefined') { broken = true; reject(new Error('no-idb')); return; }

      let req;
      try { req = indexedDB.open(NAME, VERSION); }
      catch (e) { broken = true; reject(e); return; }

      req.onupgradeneeded = () => {
        const db = req.result;
        STORES.forEach(s => {
          if (!db.objectStoreNames.contains(s)) db.createObjectStore(s);
        });
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => { broken = true; reject(req.error); };
      req.onblocked = () => { broken = true; reject(new Error('blocked')); };
    });

    return dbPromise;
  }

  function tx(store, mode, fn) {
    return open().then(db => new Promise((resolve, reject) => {
      const t = db.transaction(store, mode);
      const req = fn(t.objectStore(store));
      t.onerror = () => reject(t.error);
      t.onabort = () => reject(t.error);
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    }));
  }

  /* ---------------------------------------------------------------- api */
  function get(store, key) {
    return tx(store, 'readonly', os => os.get(key))
      .catch(() => fallback.get(store, key));
  }

  function set(store, key, value) {
    /* Mirror into localStorage so a later IndexedDB failure still reads. */
    fallback.set(store, key, value);
    return tx(store, 'readwrite', os => os.put(value, key))
      .then(() => value)
      .catch(() => value);
  }

  function del(store, key) {
    fallback.del(store, key);
    return tx(store, 'readwrite', os => os.delete(key)).catch(() => undefined);
  }

  function all(store) {
    return tx(store, 'readonly', os => os.getAll())
      .catch(() => fallback.all(store));
  }

  function keys(store) {
    return tx(store, 'readonly', os => os.getAllKeys()).catch(() => []);
  }

  /* Synchronous best-effort read, for code paths that must not await
     (first paint of the language attribute, for example). */
  function peek(store, key) {
    return fallback.get(store, key);
  }

  return { get, set, del, all, keys, peek, open };
})();

window.FiscoraDB = FiscoraDB;
