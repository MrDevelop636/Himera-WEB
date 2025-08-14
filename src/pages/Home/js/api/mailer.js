class Mailer {
    constructor(config) {
        this.config = config; // {endpoint: "send_mail.php", emailSelector: "#email", ...}
        this.init();
    }

    init() {
        const btn = document.querySelector(this.config.buttonSelector);
        if (btn) {
            btn.addEventListener('click', () => this.sendEmail());
        } else {
            console.error('Nie znaleziono przycisku.');
        }
    }

    async sendEmail() {
        const email = document.querySelector(this.config.emailSelector).value;
        const subject = document.querySelector(this.config.subjectSelector).value;
        const message = document.querySelector(this.config.messageSelector).value;

        const data = { email, subject, message };

        try {
            const response = await fetch(this.config.endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            if (result.success) {
                alert(this.config.successMessage || 'E-mail wysłany pomyślnie!');
            } else {
                alert(this.config.errorMessagePrefix + (result.error || 'Nieznany błąd'));
            }
        } catch (error) {
            alert(this.config.errorMessagePrefix + error.message);
        }
    }
}

// Eksport klasy (jeśli używasz modułów)
export default Mailer;
