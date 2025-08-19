window.addEventListener('load', () => {
    const startTime = Date.now();
    const page = window.location.pathname;

    // Wysłanie informacji o zakończeniu sesji
    window.addEventListener('beforeunload', () => {
        const duration = Math.floor((Date.now() - startTime) / 1000);
        navigator.sendBeacon('/analytics/track.php', new URLSearchParams({
            page,
            duration
        }));
    });
});
