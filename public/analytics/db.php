<?php
$db = new PDO('sqlite:' . __DIR__ . '/storage/analytics.db');

// Tworzenie tabel jeśli nie istnieją
$db->exec("CREATE TABLE IF NOT EXISTS visits (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ip TEXT,
    user_agent TEXT,
    referrer TEXT,
    page TEXT,
    entry_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    session_duration INTEGER DEFAULT 0
)");

$db->exec("CREATE TABLE IF NOT EXISTS clicks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    page TEXT,
    x INTEGER,
    y INTEGER,
    click_time DATETIME DEFAULT CURRENT_TIMESTAMP
)");
?>
