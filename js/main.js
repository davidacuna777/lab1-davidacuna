(function () {
  'use strict';

  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const navbar = document.querySelector('.navbar');
        const navbarHeight = navbar ? navbar.offsetHeight : 0;
        const targetPosition = targetSection.offsetTop - navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }

      const navMenu = document.querySelector('.navbar__links');
      if (navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
      }
    });
  });

  const menuToggle = document.querySelector('.navbar__toggle');
  const navMenu = document.querySelector('.navbar__links');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function () {
      navMenu.classList.toggle('active');
    });
  }
})();
