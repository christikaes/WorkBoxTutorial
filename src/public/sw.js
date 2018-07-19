
// Check when the SW is Installed
self.addEventListener('install', function (event) {
    console.log('[Service Worker] Install');
})

// Check when the SW is Activated
self.addEventListener('activate', function (event) {
    console.log('[Service Worker] Activate');
})
