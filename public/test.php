<?php
require_once 'https://himera.sumrive.eu/lib/ENVLoader/ENVLoad.php';

try {
    $env = new EnvLoader(__DIR__ . '/.env');
    $env->load();

    echo $env->get('DB_HOST', 'localhost'); // odczyt wartości
} catch (Exception $e) {
    echo "Błąd: " . $e->getMessage();
}

?>