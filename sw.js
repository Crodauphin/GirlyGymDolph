const CACHE = 'gymdolph-v096d-emily';
const URLS = [
  './', './index.html', './style.css', './app.js', './data.js', './profile.js',
  './manifest.json', './sw.js',
  './assets/logo-main.png', './assets/logo-secondary.png',
  './assets/icon-192.png', './assets/icon-512.png',
  './assets/splash-anim.json',
  'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js',
  './fonts/SofiaSansCondensed-Regular.ttf', './fonts/SofiaSansCondensed-SemiBold.ttf',
  './fonts/SofiaSansCondensed-Bold.ttf', './fonts/SofiaSansCondensed-ExtraBold.ttf',
  './fonts/Exo2-Regular.ttf', './fonts/Exo2-Italic.ttf', './fonts/Exo2-SemiBold.ttf',
];
self.addEventListener('install', e => e.waitUntil(
  caches.open(CACHE).then(c => c.addAll(URLS.map(u => new Request(u, {cache:'reload'}))))
    .catch(err => console.warn('SW cache partial failure:', err))
));
self.addEventListener('activate', e => e.waitUntil(
  caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
));
self.addEventListener('fetch', e => e.respondWith(
  caches.match(e.request).then(r => r || fetch(e.request))
));
