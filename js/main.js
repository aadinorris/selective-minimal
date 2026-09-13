/**
 * Selective Vacations — Main JS (Peacock & Gold system)
 * Ready for Block 1 (Navbar & Cinematic Hero).
 */

document.addEventListener("DOMContentLoaded", () => {
  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Placeholder: Mobile menu toggle (wired fully in Block 1)
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("hidden");
      menuBtn.setAttribute("aria-expanded", String(!isOpen));
    });
  }

  // Placeholder: Navbar scroll state (styled fully in Block 1)
  const navbar = document.getElementById("navbar");
  if (navbar) {
    const onScroll = () => {
      navbar.classList.toggle("is-scrolled", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }
});
