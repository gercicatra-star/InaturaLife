const CACHE = "inaturalife-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./data.js",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(()=>self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(k => k===CACHE ? null : caches.delete(k)))).then(()=>self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  event.respondWith(
    caches.match(req).then(res => res || fetch(req).then(netRes => {
      // cache runtime assets lightly
      if(req.method === "GET" && netRes && netRes.status === 200){
        const copy = netRes.clone();
        caches.open(CACHE).then(cache => cache.put(req, copy)).catch(()=>{});
      }
      return netRes;
    }).catch(()=>caches.match("./index.html")))
  );
});
