async function sendEmail(email, subject, message) {
  try {
    const response = await fetch('/api/email.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, subject, message })
    });

    const result = await response.json();

    if (response.ok) {
      console.log('Sukces:', result.success);
      // Tutaj można wyświetlić potwierdzenie użytkownikowi
    } else {
      console.error('Błąd serwera:', result.error);
      // Obsługa błędów (np. pokazanie komunikatu użytkownikowi)
    }
  } catch (error) {
    console.error('Błąd sieci:', error);
    // Obsługa błędu sieciowego
  }
}

// Przykładowe wywołanie: