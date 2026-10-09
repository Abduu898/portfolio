document.addEventListener("DOMContentLoaded", function () {
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

  const wikiSearchForm = document.getElementById("wikiSearchForm");
  if (wikiSearchForm) {
    wikiSearchForm.addEventListener("submit", (event) => {
      const searchInput = document.getElementById("wikiSearchInput");
      const query = searchInput.value.trim();

      if (!query) {
        event.preventDefault();
        searchInput.focus();
        return;
      }

      searchInput.value = query;
    });
  }

  const donateLink = document.getElementById("donateLink");
  if (donateLink) {
    donateLink.addEventListener("click", (event) => {
      event.preventDefault();
      window.alert(
        "Hey, it's Abderrahim! Thanks for wanting to donate! No money was taken; this button is just a thank-you. Your support still means a lot. Stay curious and keep building cool things!",
      );
    });
  }

  // ==================== Contact form validation ====================
  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("formFeedback");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const emailField = document.getElementById("email");
      const email = emailField.value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message || !emailField.validity.valid) {
        feedback.textContent = "Please complete all fields with a valid email.";
        feedback.style.color = "red";
        form.reportValidity();
        return;
      }

      const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
      const body = encodeURIComponent(
        `${message}\n\nName: ${name}\nEmail: ${email}`,
      );

      feedback.textContent = "Opening your email app to send this message.";
      feedback.style.color = "green";
      window.location.href = `mailto:bahraoui.abdrrahim@gmail.com?subject=${subject}&body=${body}`;
    });
  }

  // ==================== Navbar Scroll Title Effect ====================
  // ==================== Navbar Scroll Title Effect (Smooth Fade) ====================
  const navLogo = document.getElementById("nav-logo");
  const navTitle = document.getElementById("nav-title");

  if (navLogo && navTitle) {
    // Initialisation au chargement
    navLogo.classList.add("nav-visible");
    navTitle.classList.add("nav-hidden");

    window.addEventListener("scroll", function () {
      if (window.scrollY > 120) {
        // Scroll vers le bas : masque le logo, affiche le nom
        navLogo.classList.remove("nav-visible");
        navLogo.classList.add("nav-hidden");

        navTitle.classList.remove("nav-hidden");
        navTitle.classList.add("nav-visible");
      } else {
        // En haut de page : affiche le logo, masque le nom
        navLogo.classList.remove("nav-hidden");
        navLogo.classList.add("nav-visible");

        navTitle.classList.remove("nav-visible");
        navTitle.classList.add("nav-hidden");
      }
    });
  }
});
document.getElementById("monoFontToggle")?.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.toggle("mono-mode");
});
