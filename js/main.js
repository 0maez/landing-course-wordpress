  // Navbar scroll
  const navbar = document.getElementById("navbar");
  const navLinks = navbar.querySelectorAll("nav a:not(.neo-btn)");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("bg-white", "shadow-md");
      navbar.classList.remove("bg-transparent");

      navLinks.forEach(link => {
        link.classList.remove("text-white");
        link.classList.add("text-[#3d3d3d]");
      });

    } else {
      navbar.classList.remove("bg-white", "shadow-md");
      navbar.classList.add("bg-transparent");

      navLinks.forEach(link => {
        link.classList.add("text-white");
      });
    }
  });

  //Mobile Menu
const closeButton = document.getElementById("close-menu");
const mobileMenu = document.getElementById("mobile-menu");
const menuButton = document.getElementById("mobile-menu-button");

menuButton.addEventListener("click", () => {
  mobileMenu.classList.remove("translate-x-full");
  mobileMenu.classList.add("translate-x-0");

});

closeButton.addEventListener("click", () => {
  mobileMenu.classList.remove("translate-x-0");
  mobileMenu.classList.add("translate-x-full");
});

// reinicio scroll
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  // Acordion
const moduleHeaders = document.querySelectorAll(".module-header");

moduleHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    content.classList.toggle("active");
  });
});

// COUNTDOWN
const targetDate = new Date("2026-02-01T00:00:00").getTime();

const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    return;
  }

  const totalHours = Math.floor(distance / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  hoursEl.textContent = String(totalHours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

// validacion

const form = document.getElementById("contact-form");
const messageBox = document.getElementById("form-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.querySelector('input[type="text"]').value.trim();
  const email = form.querySelector('input[type="email"]').value.trim();
  const goal = form.querySelector("textarea").value.trim();

  // Reset message
  messageBox.className = "mt-6 text-center font-bold text-lg";

  // Validación firme
  if (!name || !email || !goal) {
    messageBox.textContent = "Please complete all fields.";
    messageBox.classList.add(
      "text-red-600",
      "bg-white",
      "rounded-xl",
      "p-4",
      "neo-shadow-pink"
    );
    messageBox.classList.remove("hidden");
    return;
  }

  if (!validateEmail(email)) {
    messageBox.textContent = "Please enter a valid email address.";
    messageBox.classList.add(
      "text-red-600",
      "bg-white",
      "rounded-xl",
      "p-4",
      "neo-shadow-pink"
    );
    messageBox.classList.remove("hidden");
    return;
  }

  // ÉXITO
  messageBox.textContent = "You're in! 🎉 I'll contact you very soon.";
  messageBox.classList.add(
    "text-[var(--dark)]",
    "bg-[var(--yellow)]",
    "rounded-xl",
    "p-5",
    "neo-shadow-pink"
  );
  messageBox.classList.remove("hidden");

  // Reset form
  form.reset();
});

// Email validator
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
