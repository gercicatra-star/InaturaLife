const CACHE_NAME = "inaturalife-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./config.js",
  "./manifest.json",
  "./service-worker.js",
  "./assets/icon-192.png",
  "./assets/icon-512.png",
  "./assets/img/capa-chas.webp",
  "./assets/img/capa-protocolos.webp",
  "./assets/img/capa-suplementos.webp",
  "./assets/img/capa-sobre.webp",
  "./assets/img/banner-premium.webp",
  "./data/chas_free.json",
  "./data/chas_premium.json",
  "./data/suplementos_free.json",
  "./data/suplementos_premium.json",
  "./data/protocolos_free.json",
  "./data/protocolos_premium.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((k) => (k !== CACHE_NAME ? caches.delete(k) : null)))
    )
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((res) => {
        try {
          const url = new URL(event.request.url);
          if (event.request.method === "GET" && url.origin === location.origin) {
            const copy = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          }
        } catch (e) {}
        return res;
      }).catch(() => cached);
    })
  );
});
