/* main.js - site-wide JavaScript */

// Toggle mobile navigation
const navToggleBtn = document.getElementById('nav-toggle');
const mobileMenu   = document.getElementById('mobile-menu');

if (navToggleBtn && mobileMenu) {
  navToggleBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
} 