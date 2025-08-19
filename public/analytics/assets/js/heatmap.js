document.addEventListener('click', (e) => {
    const page = window.location.pathname;
    const x = e.pageX;
    const y = e.pageY;

    navigator.sendBeacon('/analytics/heatmap.php', new URLSearchParams({
        page, x, y
    }));
});
