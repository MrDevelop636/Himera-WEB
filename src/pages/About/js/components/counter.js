export default function initCounters(selector = '.about__stat-value', duration = 1500) {
  const animateCounter = (counter) => {
    const target = +counter.getAttribute('data-target');
    const startTime = performance.now();

    counter.classList.add('active');

    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      counter.textContent = Math.floor(progress * target).toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        counter.textContent = target.toLocaleString();
        counter.classList.remove('active');
      }
    };

    requestAnimationFrame(update);
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.8 });

  document.querySelectorAll(selector).forEach(counter => {
    observer.observe(counter);
  });
}
