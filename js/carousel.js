/**
 * Full-Width Hero Cross-Fade Carousel Controller
 * Supports automatic transitions, pause on hover/focus, prev/next buttons, dots, and reduced-motion preference.
 */

function initHeroCarousel() {
  const root = document.getElementById('hero-carousel');
  if (!root) return;

  const slides = Array.from(root.querySelectorAll('.hero-slide'));
  const dots = Array.from(root.querySelectorAll('.carousel-dot'));
  const prevBtn = document.getElementById('hero-prev-btn');
  const nextBtn = document.getElementById('hero-next-btn');
  const captionName = document.getElementById('hero-caption-name');
  const captionMeta = document.getElementById('hero-caption-meta');

  if (!slides.length) return;

  let currentIndex = 0;
  let timerId = null;
  const intervalMs = 5500;
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function showSlide(nextIndex) {
    currentIndex = ((nextIndex % slides.length) + slides.length) % slides.length;

    slides.forEach((slide, idx) => {
      const active = idx === currentIndex;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', String(!active));
    });

    dots.forEach((dot, idx) => {
      const active = idx === currentIndex;
      dot.classList.toggle('is-active', active);
      dot.setAttribute('aria-selected', String(active));
    });

    const activeSlide = slides[currentIndex];
    if (captionName) {
      captionName.textContent = activeSlide.getAttribute('data-caption-name') || '';
    }
    if (captionMeta) {
      captionMeta.textContent = activeSlide.getAttribute('data-caption-meta') || '';
    }
  }

  function startAutoplay() {
    if (prefersReducedMotion || slides.length < 2) return;
    stopAutoplay();
    timerId = window.setInterval(() => {
      showSlide(currentIndex + 1);
    }, intervalMs);
  }

  function stopAutoplay() {
    if (timerId !== null) {
      window.clearInterval(timerId);
      timerId = null;
    }
  }

  prevBtn?.addEventListener('click', () => {
    showSlide(currentIndex - 1);
    startAutoplay();
  });

  nextBtn?.addEventListener('click', () => {
    showSlide(currentIndex + 1);
    startAutoplay();
  });

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      showSlide(idx);
      startAutoplay();
    });
  });

  root.addEventListener('mouseenter', stopAutoplay);
  root.addEventListener('mouseleave', startAutoplay);
  root.addEventListener('focusin', stopAutoplay);
  root.addEventListener('focusout', startAutoplay);

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopAutoplay();
    } else {
      startAutoplay();
    }
  });

  showSlide(0);
  startAutoplay();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHeroCarousel);
} else {
  initHeroCarousel();
}
