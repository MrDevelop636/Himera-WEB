const CACHE_NAME = "error-cache-v1";
const ERROR_PAGES = {
  403: "/templates/403.html",
  404: "/templates/404.html",
  500: "/templates/500.html"
};

// Pre-cache wszystkich stron błędów
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      cache.addAll(Object.values(ERROR_PAGES))
    )
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then(async (response) => {
          if (Object.keys(ERROR_PAGES).includes(response.status.toString())) {
            const cache = await caches.open(CACHE_NAME);
            return cache.match(ERROR_PAGES[response.status]);
          }
          return response;
        })
        .catch(() => new Response(
          "<h1>Błąd</h1><p>Nie udało się pobrać strony.</p>",
          { headers: { "Content-Type": "text/html" } }
        ))
    );
  }
});
