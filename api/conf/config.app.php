<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// config.app.php

require __DIR__ . '/vendor/autoload.php';

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

// Jeśli chcesz sprawdzić działanie:
if ($config['app']['name']) {
    echo "<pre>";
    print_r($config);
    echo "</pre>";
}
