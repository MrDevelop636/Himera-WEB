const CACHE_NAME = "my-site-cache-v1";
const OFFLINE_URL = "offline.html";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([OFFLINE_URL]);
    })
  );
});

// Funkcja do generowania fallback HTML w razie braku cache
function fallbackResponse() {
  const html = `
<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8">
  <title>Brak połączenia</title>
  <style>
    body { 
      display:flex; 
      align-items:center; 
      justify-content:center; 
      height:100vh; 
      font-family:sans-serif; 
      text-align:center; 
    }
  </style>
</head>
<body>
  <div>
    <h1>Jesteś offline</h1>
    <p>Sprawdź swoje połączenie internetowe i spróbuj ponownie!</p>
  </div>
</body>
</html>
  `;
  return new Response(html, {
    headers: { "Content-Type": "text/html" }
  });
}

self.addEventListener("fetch", (event) => {
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .catch(() =>
          caches.open(CACHE_NAME).then((cache) =>
            cache.match(OFFLINE_URL).then((response) => {
              return response || fallbackResponse();
            })
          )
        )
    );
  }
});
