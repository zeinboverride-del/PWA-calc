const CACHE_NAME = 'cybercalc-v1';
// Menyimpan semua aset penting lu ke memori internal HP
const ASSETS = [
  'index.html',
  'manifest.json',
  'icon.png'
];

// Proses install Service Worker
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Proses aktivasi Service Worker
self.addEventListener('activate', (e) => {
  console.log('Service Worker: PWA Neon Lu Udah Aktif! 🔥');
});

// Mengambil file dari cache pas HP lagi ga ada internet (offline)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});