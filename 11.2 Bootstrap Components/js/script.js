/**
 * Seur - Scripts Principales
 * @author Skapsis
 * @description Funcionalidad JavaScript para el sitio web de Seur
 */

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {

  // ===========================
  // Validación del formulario de búsqueda
  // ===========================
  const searchForm = document.querySelector('form[role="search"]');
  const searchInput = searchForm.querySelector('input[type="search"]');

  searchForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const postcode = searchInput.value.trim();

    if (postcode === '') {
      alert('Por favor, ingresa un código postal');
      searchInput.focus();
      return;
    }

    // Validación básica de código postal (5 dígitos)
    const postcodeRegex = /^\d{5}$/;
    if (!postcodeRegex.test(postcode)) {
      alert('Por favor, ingresa un código postal válido (5 dígitos)');
      searchInput.focus();
      return;
    }

    // Simulación de búsqueda
    console.log('Buscando servicios para el código postal:', postcode);
    alert(`Verificando disponibilidad en el código postal: ${postcode}`);
  });

  // ===========================
  // Smooth scroll para enlaces internos
  // ===========================
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        const target = document.querySelector(href);
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ===========================
  // Animación de entrada para las características
  // ===========================
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '0';
        entry.target.style.transform = 'translateY(20px)';

        setTimeout(() => {
          entry.target.style.transition = 'all 0.6s ease';
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, 100);

        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const features = document.querySelectorAll('.feature');
  features.forEach(feature => observer.observe(feature));

  // ===========================
  // Auto-play del carrusel
  // ===========================
  const carousel = document.querySelector('#carouselExampleIndicators');
  if (carousel && typeof bootstrap !== 'undefined') {
    const bsCarousel = new bootstrap.Carousel(carousel, {
      interval: 3000,
      wrap: true
    });
  }

  // ===========================
  // Botones de CTA
  // ===========================
  const ctaButtons = document.querySelectorAll('.btn-primary, .btn-outline-secondary');

  ctaButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      if (!this.closest('form')) {
        e.preventDefault();
        const buttonText = this.textContent.trim();
        console.log('CTA clicked:', buttonText);
        alert(`Funcionalidad "${buttonText}" en desarrollo. Pronto disponible!`);
      }
    });
  });

  // ===========================
  // Console log de bienvenida
  // ===========================
  console.log('%c🚚 Seur - Múdate con Alegría', 'color: #0d6efd; font-size: 20px; font-weight: bold;');
  console.log('%cDesarrollado por Skapsis', 'color: #6c757d; font-size: 12px;');
});
