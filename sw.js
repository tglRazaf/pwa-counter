self.addEventListener('install', e =>{
    e.waitUntil(
        caches.open("static").then(cache =>{
            return cache.addAll(['./', './images/android.png', './images/IMG_3235.png']);
        })
    )
});
self.addEventListener('fetch', e =>{
    console.log(`intersepting fetch request for : ${e.request.url}`)
})