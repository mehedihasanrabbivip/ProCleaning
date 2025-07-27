// Mobile Menu Toggle
const toggleBtn = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

toggleBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('flex');
  mobileMenu.classList.toggle('animate-slideDown');
});

