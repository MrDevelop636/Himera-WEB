// Form animations
function initFormAnimations() {
  const formGroups = document.querySelectorAll(".form-group");

  formGroups.forEach((group) => {
    const input = group.querySelector("input, textarea, select");
    const label = group.querySelector("label");

    input.addEventListener("focus", () => {
      label.classList.add("active");
    });

    input.addEventListener("blur", () => {
      if (!input.value) {
        label.classList.remove("active");
      }
    });

    // Check if there's already a value (for browser autofill)
    if (input.value) {
      label.classList.add("active");
    }
  });
}

export default initFormAnimations;
