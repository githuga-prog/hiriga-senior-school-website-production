// Minimal JS for slider arrows and possibly future interactions

document.addEventListener('DOMContentLoaded', function () {
  // Hamburger Menu Toggle
  const hamburger = document.getElementById('hamburger-menu');
  const navContent = document.getElementById('nav-content');
  
  if (hamburger && navContent) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navContent.classList.toggle('active');
    });
    
    // Close menu when clicking on nav links
    const navLinks = navContent.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navContent.classList.remove('active');
      });
    });
    
    // Close menu when clicking outside
    navContent.addEventListener('click', function(e) {
      if (e.target === navContent) {
        hamburger.classList.remove('active');
        navContent.classList.remove('active');
      }
    });
  }

  // Profile Videos Carousel
  const slides = document.querySelectorAll('.profile-video');
  const leftBtn = document.querySelectorAll('.profile-arrow')[0];
  const rightBtn = document.querySelectorAll('.profile-arrow')[1];
  let current = 0;

  function showSlide(idx) {
    slides.forEach((el, i) => {
      el.style.display = (i === idx) ? 'block' : 'none';
    });
  }
  if (slides.length > 0) {
    showSlide(current);
    leftBtn.addEventListener('click', () => {
      current = (current === 0) ? slides.length - 1 : current - 1;
      showSlide(current);
    });
    rightBtn.addEventListener('click', () => {
      current = (current + 1) % slides.length;
      showSlide(current);
    });
  }

  // Hero and join section buttons could have smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

