<?php
require './lib/phpdotenv-5.6.2/autoload.php';

use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

echo $_ENV['APP_URL'] ?? 'Brak APP_URL';
