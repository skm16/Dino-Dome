// Dino Dome offline cache. Bump VERSION whenever you change any file so players get the update.
const VERSION = 'dino-dome-v4';
const FILES = [
  './',
  'index.html',
  'manifest.webmanifest',
  'assets/fonts/fonts.css',
  'assets/fonts/lilita-one-latin.woff2',
  'assets/fonts/nunito-latin.woff2',
  'assets/audio/dino-battle-march.mp3',
  'assets/icons/icon-192.png',
  'assets/icons/icon-512.png',
  'assets/icons/icon-maskable-512.png',
  'assets/icons/apple-touch-icon.png',
  'assets/icons/favicon-32.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Page: network first so updates show up, cache when offline. Everything else: cache first.
self.addEventListener('fetch', e => {
  if(e.request.method !== 'GET') return;
  if(e.request.mode === 'navigate'){
    e.respondWith(
      fetch(e.request)
        .then(r => { const copy = r.clone(); caches.open(VERSION).then(c => c.put('index.html', copy)); return r; })
        .catch(() => caches.match('index.html'))
    );
    return;
  }
  e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request)));
});
