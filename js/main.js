/**
 * Selective Vacations — Main JS (Aman Light + Peacock system)
 */

document.addEventListener("DOMContentLoaded", () => {
  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu toggle
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("hidden");
      menuBtn.setAttribute("aria-expanded", String(!isOpen));
    });
  }

  // Navbar scroll state
  const navbar = document.getElementById("navbar");
  if (navbar) {
    const onScroll = () => {
      navbar.classList.toggle("is-scrolled", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Smooth scroll reveal — fade-up + scale-in via IntersectionObserver
  const revealEls = Array.from(document.querySelectorAll("[data-reveal]"));
  if ("IntersectionObserver" in window && revealEls.length) {
    revealEls.forEach((el) => {
      const delay = el.getAttribute("data-reveal-delay");
      if (delay) el.style.transitionDelay = `${delay}ms`;
    });
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach((el) => revealObserver.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  // Scroll-spy: active pill fill on the nav link of the section in view.
  // Only top-level <section> landmarks are observed — inner anchors
  // (e.g. #circuits) must never latch an active state on their own.
  const spyLinks = Array.from(
    document.querySelectorAll('header nav a[href^="#"]')
  );
  const spySections = spyLinks
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter((el) => el && el.tagName === "SECTION");
  if ("IntersectionObserver" in window && spyLinks.length && spySections.length) {
    const spyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = `#${entry.target.id}`;
            spyLinks.forEach((a) =>
              a.classList.toggle("nav-active", a.getAttribute("href") === id)
            );
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    spySections.forEach((s) => spyObserver.observe(s));
  }

  // Local cinematic carousel — buttery crossfade every ~3.5 seconds
  const slides = Array.from(document.querySelectorAll("[data-hero-slide]"));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (slides.length > 1 && !reduceMotion.matches) {
    let current = 0;
    setInterval(() => {
      const next = (current + 1) % slides.length;
      slides[current].classList.remove("opacity-100");
      slides[current].classList.add("opacity-0");
      slides[next].classList.remove("opacity-0");
      slides[next].classList.add("opacity-100");
      current = next;
    }, 3500);
  }
});
