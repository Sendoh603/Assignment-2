contentOfCaches = 'caches-v1';
self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open(contentOfCaches).then(function(cache) {
        return cache.addAll(
          [
            '/examples/About Us.png',
            '/examples/Contact Us.png',
            '/examples/Grayscale Sample 1.png',
            '/examples/Grayscale Sample 2.png',
            '/examples/Grayscale Sample 3.png',
            '/examples/Home.png',
            '/examples/Staff.png',
            '/static/css/normalize.css',
            '/static/css/project2_wei_About Us.css',
            '/static/css/project2_wei_Contact Us.css',
            '/static/css/project2_zifan_base.css',
            '/static/css/project2_zifan.css',
            '/about_us.html',
            '/staff.html',
            '/contact_us.html',
            '/home.html'
          ]
        ).catch((error) => {console.log('something went wrong %0' + error)});
      })
    );
  });

  self.addEventListener('activate', function(event) {
    event.waitUntil(
      caches.keys().then(function(contentOfCaches) {
        return Promise.all(
          contentOfCaches.filter(function(contentOfCaches) {
            // Return true if you want to remove this cache,
            // but remember that caches are shared across
            // the whole origin
          }).map(function(contentOfCaches) {
            return caches.delete(contentOfCaches);
          })
        );
      })
    );
  });

  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });