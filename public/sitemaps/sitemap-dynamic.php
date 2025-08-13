<?php
header("Content-Type: application/xml; charset=utf-8");

// Adres URL Twojej strony
$base_url = "https://himera.ct8.pl";

// Lista stron do zamieszczenia w mapie
$pages = [
    "",
    "about",
    "contact"
];

// Funkcja do generowania aktualnej daty w formacie YYYY-MM-DD
function formatDate($date = null) {
    return date("Y-m-d", strtotime($date ?? "now"));
}

// Rozpoczynamy XML
echo '<?xml version="1.0" encoding="UTF-8"?>' . PHP_EOL;
echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . PHP_EOL;

foreach ($pages as $page) {
    $url = rtrim($base_url, '/') . '/' . ltrim($page, '/');
    echo "  <url>" . PHP_EOL;
    echo "    <loc>{$url}</loc>" . PHP_EOL;
    echo "    <lastmod>" . formatDate() . "</lastmod>" . PHP_EOL;
    echo "    <changefreq>weekly</changefreq>" . PHP_EOL;
    echo "    <priority>0.8</priority>" . PHP_EOL;
    echo "  </url>" . PHP_EOL;
}

echo '</urlset>';
?>
