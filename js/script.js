// ==================== Dark mode toggle ====================
const toggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

// Apply saved theme on page load
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  if (themeIcon) {
    themeIcon.classList.remove("bi-moon-fill");
    themeIcon.classList.add("bi-sun-fill");
  }
}

// Toggle on click
if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");

    // Save preference
    localStorage.setItem("theme", isDark ? "dark" : "light");

    // Swap the icon
    if (themeIcon) {
      themeIcon.classList.toggle("bi-moon-fill", !isDark);
      themeIcon.classList.toggle("bi-sun-fill", isDark);
    }
  });
}

// ==================== Contact form validation ====================
const form = document.getElementById("contactForm");
const feedback = document.getElementById("formFeedback");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      feedback.textContent = "Please fill in all fields.";
      feedback.style.color = "red";
      return;
    }

    feedback.textContent =
      "Thanks, " + name + "! Your message has been received.";
    feedback.style.color = "green";
    form.reset();
  });
}
