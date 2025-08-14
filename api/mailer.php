<?php
// Ścieżki do plików PHPMailer (pobrane ręcznie)
require '../lib/PHPMailer-6.10.0/src/PHPMailer.php';
require '../lib/PHPMailer-6.10.0/src/SMTP.php';
require '../lib/PHPMailer-6.10.0/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header('Content-Type: application/json');

try {
    // Pobranie danych JSON z żądania
    $data = json_decode(file_get_contents('php://input'), true);

    $email = trim($data['email'] ?? '');
    $subject = trim($data['subject'] ?? '');
    $message = trim($data['message'] ?? '');

    // Walidacja danych
    if (empty($email) || empty($subject) || empty($message)) {
        throw new Exception('Wszystkie pola są wymagane.');
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        throw new Exception('Niepoprawny adres e-mail.');
    }

    // Konfiguracja PHPMailer
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = 'smtp.example.com';        // Twój serwer SMTP
    $mail->SMTPAuth = true;
    $mail->Username = 'your_email@example.com'; // login SMTP
    $mail->Password = 'your_password';         // hasło SMTP
    $mail->SMTPSecure = 'tls';                 // lub 'ssl'
    $mail->Port = 587;                         // 465 dla ssl

    $mail->setFrom('your_email@example.com', 'Twoja Nazwa');
    $mail->addAddress($email);

    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body    = nl2br(htmlspecialchars($message));

    $mail->send();

    echo json_encode(['success' => true]);

} catch (Exception $e) {
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
