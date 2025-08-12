// src/js/api/email.js
export default async function sendEmail(email, subject, message) {
  try {
    const response = await fetch('/api/email.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        subject: subject,
        message: message
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: data.error || 'Wystąpił błąd serwera'
      };
    }

    return {
      success: true,
      message: data.success || 'Wiadomość wysłana pomyślnie'
    };
  } catch (error) {
    console.error('Network error:', error);
    throw error;
  }
}