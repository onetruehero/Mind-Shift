var CACHE = 'shift-v1';
var ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192-transparent-flat.png',
  './icon-512-transparent-flat.png',
  './favicon-16x16.png',
  './favicon-32x32.png',
  './favicon-48x48.png',
  './favicon-64x64.png',
  './favicon.ico',
  './splash-512x1024.png',
  './splash-1024x512.png',
  './splash-1024x1024.png'
];

self.addEventListener('install', function(e){
  e.waitUntil(
    caches.open(CACHE).then(function(c){ return c.addAll(ASSETS); })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(e){
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(e){
  e.respondWith(
    caches.match(e.request).then(function(hit){
      return hit || fetch(e.request).then(function(resp){
        var copy = resp.clone();
        caches.open(CACHE).then(function(c){ c.put(e.request, copy); });
        return resp;
      });
    })
  );
});
