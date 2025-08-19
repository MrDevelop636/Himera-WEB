<?php
include 'db.php';

$page = $_POST['page'] ?? 'unknown';
$x = $_POST['x'] ?? 0;
$y = $_POST['y'] ?? 0;

$stmt = $db->prepare("INSERT INTO clicks (page, x, y) VALUES (?, ?, ?)");
$stmt->execute([$page, $x, $y]);

echo json_encode(['status' => 'ok']);
?>
