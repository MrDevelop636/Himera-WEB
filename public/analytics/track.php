<?php
include 'db.php';

$ip = $_SERVER['REMOTE_ADDR'];
$user_agent = $_SERVER['HTTP_USER_AGENT'];
$referrer = $_SERVER['HTTP_REFERER'] ?? '';
$page = $_POST['page'] ?? 'unknown';
$session_duration = $_POST['duration'] ?? 0;

// Zapis do bazy
$stmt = $db->prepare("INSERT INTO visits (ip, user_agent, referrer, page, session_duration) VALUES (?, ?, ?, ?, ?)");
$stmt->execute([$ip, $user_agent, $referrer, $page, $session_duration]);

echo json_encode(['status' => 'ok']);
?>
