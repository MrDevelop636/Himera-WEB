export default function initContactForm(formSelector = '.contact__form') {
  const form = document.querySelector(formSelector);
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const interest = form.querySelector('#interest').value.trim();
    const message = form.querySelector('#message').value.trim();

    const subject = `Formularz kontaktowy - ${interest || 'Zapytanie'}`;
    const bodyMessage = `Imię i nazwisko: ${name}\nEmail: ${email}\nTemat: ${interest}\n\nWiadomość:\n${message}`;

    try {
      const response = await fetch('/api/email.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: 'matix2025xx@gmail.com',
          subject,
          message: bodyMessage
        })
      });

      const result = await response.json();

      if (response.ok) {
        alert('Wiadomość została wysłana pomyślnie.');
        form.reset();
      } else {
        alert(`Błąd: ${result.error || 'Nie udało się wysłać wiadomości.'}`);
      }
    } catch (error) {
      alert('Wystąpił problem z połączeniem z serwerem.');
      console.error(error);
    }
  });
}
