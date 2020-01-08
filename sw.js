contentOfCaches = ['/*.html', '/static/css/*.css', '/examples/*.png'];
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
        );
      })
    );
  });