<?php
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
    $mail->Host = 'smtp.twojadomena.pl';
    $mail->SMTPAuth = true;
    $mail->Username = 'twoj@email.pl';
    $mail->Password = 'twoje_haslo';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // Dane wiadomości
    $mail->setFrom('twoj@email.pl', 'Nazwa Nadawcy');
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
