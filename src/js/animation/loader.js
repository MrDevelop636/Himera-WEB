function simulateLoading() {
  const loadingBar = document.querySelector(".loading__progress-bar");
  const loadingScreen = document.querySelector(".loading");

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 80;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      setTimeout(() => {
        loadingScreen.classList.add("loading--hidden");
      }, 500);
    }
    loadingBar.style.width = `${progress}%`;
  }, 200);
}

export default simulateLoading;
