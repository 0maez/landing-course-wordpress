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
const menuButton = document.getElementById("mobile-menu-button");
const closeButton = document.getElementById("close-menu");
const mobileMenu = document.getElementById("mobile-menu");

menuButton.addEventListener("click", () => {
  mobileMenu.classList.remove("translate-x-full");
  mobileMenu.classList.add("translate-x-0");
});

closeButton.addEventListener("click", () => {
  mobileMenu.classList.remove("translate-x-0");
  mobileMenu.classList.add("translate-x-full");
});
