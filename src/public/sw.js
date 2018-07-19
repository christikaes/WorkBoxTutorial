importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
    workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug);
} else {
    console.log(`Boo! Workbox didn't load 😬`);
}

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

workbox.routing.registerRoute(
    // Cache HTML files
    new RegExp('.*\.html'),
    workbox.strategies.networkFirst()
);


workbox.routing.registerRoute(
    // Cache static files
    /.*\.(?:|jpg|mp3)/,
    // Use the cache if it's available
    workbox.strategies.cacheFirst({
        // Use a custom cache name
        cacheName: 'static-cache',
        plugins: [
            new workbox.expiration.Plugin({
                // Cache only 40 static items
                maxEntries: 40,
                // Cache for a maximum of a week
                maxAgeSeconds: 7 * 24 * 60 * 60,
            })
        ],
    })
);
