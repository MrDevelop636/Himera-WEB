<?php
header('Content-Type: application/json; charset=utf-8');
mb_internal_encoding("UTF-8");
ini_set('display_errors', 1);
error_reporting(E_ALL);

require_once '../lib/PHPMailer-6.10.0/src/Exception.php';
require_once '../lib/PHPMailer-6.10.0/src/PHPMailer.php';
require_once '../lib/PHPMailer-6.10.0/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

if (!$data || !isset($data['email']) || !isset($data['subject']) || !isset($data['message'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Niepoprawne dane wejściowe']);
    exit;
}

$mail = new PHPMailer(true);

try {
    // Konfiguracja SMTP (dopasuj do swojego serwera)
    $mail->isSMTP();
    $mail->Host = 'h58.seohost.pl';
    $mail->SMTPAuth = true;
    $mail->Username = 'admin@sumrive.eu';
    $mail->Password = '@#j@E^WNM*w*HJ@12';
$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
$mail->Port = 465;

    // Dane wiadomości
    $mail->setFrom('admin@sumrive.eu', 'Sumrive Admin');
    $mail->addAddress($data['email']);
    $mail->Subject = $data['subject'];
    $mail->Body = $data['message'];
    $mail->isHTML(false);

    $mail->send();

    echo json_encode(['success' => 'Email został wysłany']);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => "Mailer Error: {$mail->ErrorInfo}"]);
}
