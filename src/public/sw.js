importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
    workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug);
} else {
    console.log(`Boo! Workbox didn't load 😬`);
}

// Cache our images
workbox.routing.registerRoute(
    new RegExp('.*\.r2d2.jpg'),
    workbox.strategies.networkFirst()
);