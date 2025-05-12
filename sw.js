self.addEventListener('install', event => {
  console.log('Service Worker instalado.');
});

self.addEventListener('fetch', event => {
  // Podes gerir cache aqui se quiseres
});
