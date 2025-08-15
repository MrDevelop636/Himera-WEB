<?php
// config.app.php

if (php_sapi_name() !== 'cli' && realpath(__FILE__) === realpath($_SERVER['SCRIPT_FILENAME'])) {
    http_response_code(403);
}


require __DIR__ . '/../../vendor/autoload.php';

use Dotenv\Dotenv;

// Utworzenie instancji Dotenv i wskazanie ścieżki do pliku .env
$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load(); // Ładuje zmienne środowiskowe do $_ENV i $_SERVER

// Funkcja pomocnicza do pobierania zmiennych
function env($key, $default = null) {
    return $_ENV[$key] ?? $default;
}

// Przykład użycia zmiennych z .env
$config = [
    'app' => [
        'name' => env('APP_NAME'),
        'env'  => env('APP_ENV'),
        'debug' => filter_var(env('APP_DEBUG', false), FILTER_VALIDATE_BOOLEAN),
        'url'  => env('APP_URL'),
    ],
    'database' => [
        'connection' => env('DB_CONNECTION'),
        'host'       => env('DB_HOST'),
        'port'       => env('DB_PORT'),
        'database'   => env('DB_DATABASE'),
        'username'   => env('DB_USERNAME'),
        'password'   => env('DB_PASSWORD'),
    ]
];

