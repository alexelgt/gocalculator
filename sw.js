var cacheName = 'test-cache'
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(
        [
          '/logo.png',
          '/index.html'
        ]
      );
    })
  );
});
