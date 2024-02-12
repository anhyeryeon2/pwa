import { servicesVersion } from "typescript";

export const serviceWorkerSelf = window.self as unknown as ServiceWorkerGlobalScope;

serviceWorkerSelf.addEventListener('install',event =>{
    console.log('service Worker installing.');
})

serviceWorkerSelf.addEventListener('activate', event => {
    console.log('service Worker activating.')
})

serviceWorkerSelf.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    )
})