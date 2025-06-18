self.addEventListener('install', function (e) {
    e.waitUntil(
      caches.open('agua-kangen-store').then(function (cache) {
        return cache.addAll([
          'index.html',
          'style.css',
          'manifest.json',
          'assets/fondo.jpg',
          'assets/icon.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function (e) {
    e.respondWith(
      caches.match(e.request).then(function (response) {
        return response || fetch(e.request);
      })
    );
  });
  