const CACHE='fundedos-v1-6-career-mode';
const FILES=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./privacy.html','./terms.html'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
