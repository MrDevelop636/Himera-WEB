<?php
// connect.php

// Dołączamy konfigurację
require __DIR__ . '/../../api/conf/config.app.php';

// Przykład: połączenie z bazą danych
$dbHost = $config['database']['host'];
$dbUser = $config['database']['username'];
$dbPass = $config['database']['password'];
$dbName = $config['database']['database'];

// Tworzenie połączenia MySQL (mysqli)
$mysqli = new mysqli($dbHost, $dbUser, $dbPass, $dbName);

if ($mysqli->connect_error) {
    die("Błąd połączenia z bazą: " . $mysqli->connect_error);
}

echo "Połączono z bazą danych!";
