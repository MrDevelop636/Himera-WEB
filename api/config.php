<?php
require __DIR__ . '/vendor/autoload.php';
use Dotenv\Dotenv;

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://himera.sumrive.eu'); // lub określ domenę frontendu

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

$response = [
    'strapiUrl' => $_ENV['STRAPI_URL'] ?? '',
    'strapiToken' => $_ENV['STRAPI_TOKEN'] ?? '',
];

echo json_encode($response);
