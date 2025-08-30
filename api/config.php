<?php
require __DIR__ . '/vendor/autoload.php';
use Dotenv\Dotenv;

header('Content-Type: application/json; charset=utf-8');

// CORS – dopuszczamy tylko Twój frontend
$allowedOrigins = ['http://localhost:5173', 'https://cms.himera.sumrive.eu'];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowedOrigins)) {
    header("Access-Control-Allow-Origin: $origin");
    header("Vary: Origin"); // poprawne cache dla wielu domen
} else {
    http_response_code(403);
    echo json_encode(['error' => 'Origin not allowed']);
    exit;
}

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

echo json_encode([
    'strapiUrl'   => $_ENV['STRAPI_URL'] ?? '',
    'strapiToken' => $_ENV['STRAPI_TOKEN'] ?? ''
], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
