const CACHE = "inaturalife-v4";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./data.js",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./assets/noise.png",
  "./assets/noise_dark.png",

  "./assets/img/hero_chas.webp",
  "./assets/img/hero_suplementos.webp",
  "./assets/img/hero_protocolos.webp",
  "./assets/img/hero_tabelas.webp",
  "./assets/img/hero_receitas.webp",
  "./assets/img/hero_seguranca.webp",
  "./assets/img/cat_digestivo.webp",
  "./assets/img/cat_circulacao.webp",
  "./assets/img/cat_calmantes.webp",
  "./assets/img/cat_imunidade.webp",
  "./assets/img/cat_femininos.webp",
  "./assets/img/cat_especiais.webp",
  "./assets/img/inner_general.webp",
  "./assets/img/sup_sementes.webp",
  "./assets/img/sup_farinhas.webp",
  "./assets/img/sup_essenciais.webp",
  "./assets/img/sup_fibras.webp",
  "./assets/img/sup_verdes.webp",
  "./assets/img/sup_imunidade.webp",
  "./assets/img/sup_sono.webp",
  "./assets/img/sup_fitness.webp",
  "./assets/img/sup_magnesio.webp",

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
