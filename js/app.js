import { buildWhatsAppUrl } from './data.js';

/**
 * Shared UI Controller for all Karachi Escorts pages:
 * - Mobile navigation drawer
 * - Theme toggle persistence
 * - Fullscreen portrait lightbox
 * - Quick reservation modal with validation
 * - FAQ accordions
 */

function initThemeToggle() {
  const btn = document.getElementById('theme-toggle-btn');
  const label = document.getElementById('theme-toggle-label');
  if (!btn) return;

  function syncLabel() {
    const isLight = document.documentElement.classList.contains('light');
    if (label) {
      label.textContent = isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode';
    }
    btn.setAttribute('aria-pressed', String(!isLight));
  }

  syncLabel();

  btn.addEventListener('click', () => {
    try {
      const root = document.documentElement;
      const becomingLight = !root.classList.contains('light');
      root.classList.toggle('light', becomingLight);
      root.classList.toggle('dark', !becomingLight);
      root.setAttribute('data-theme', becomingLight ? 'light' : 'dark');
      root.style.colorScheme = becomingLight ? 'light' : 'dark';
      localStorage.setItem('karachi_escorts_theme', becomingLight ? 'light' : 'dark');
      syncLabel();
    } catch {
      // Ignore storage errors in restricted browsing modes
    }
  });
}

function initMobileDrawer() {
  const openBtn = document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-nav-drawer');
  const closeBtn = document.getElementById('mobile-menu-close');
  if (!openBtn || !drawer) return;

  function setDrawer(open) {
    drawer.classList.toggle('is-hidden', !open);
    openBtn.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) {
      closeBtn?.focus();
    } else {
      openBtn.focus();
    }
  }

  openBtn.addEventListener('click', () => setDrawer(true));
  closeBtn?.addEventListener('click', () => setDrawer(false));

  drawer.addEventListener('click', (event) => {
    if (event.target === drawer) {
      setDrawer(false);
    }
  });

  drawer.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      drawer.classList.add('is-hidden');
      document.body.style.overflow = '';
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !drawer.classList.contains('is-hidden')) {
      setDrawer(false);
    }
  });
}

function initLightbox() {
  const modal = document.getElementById('lightbox-modal');
  const img = document.getElementById('lightbox-image');
  const titleEl = document.getElementById('lightbox-title');
  const closeBtn = document.getElementById('lightbox-close');
  if (!modal || !img) return;

  let lastTrigger = null;

  function openLightbox(src, title, trigger) {
    if (!src) return;
    lastTrigger = trigger || null;
    img.src = src;
    img.alt = title || 'Verified Karachi Escorts Companion Portrait';
    if (titleEl) titleEl.textContent = title || 'Verified Companion Portrait';
    modal.classList.remove('is-hidden');
    document.body.style.overflow = 'hidden';
    closeBtn?.focus();
  }

  function closeLightbox() {
    modal.classList.add('is-hidden');
    document.body.style.overflow = '';
    if (lastTrigger && typeof lastTrigger.focus === 'function') {
      lastTrigger.focus();
    }
  }

  closeBtn?.addEventListener('click', closeLightbox);
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeLightbox();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.classList.contains('is-hidden')) {
      closeLightbox();
    }
  });

  document.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-zoom-src]');
    if (!trigger) return;
    event.preventDefault();
    const src = trigger.getAttribute('data-zoom-src') || '';
    const title = trigger.getAttribute('data-zoom-title') || 'Verified Karachi Companion';
    openLightbox(src, title, trigger);
  });
}

function initBookingModal() {
  const modal = document.getElementById('booking-modal');
  const closeBtn = document.getElementById('booking-modal-close');
  const form = document.getElementById('booking-modal-form');
  const companionSelect = document.getElementById('booking-model-select');
  const locationSelect = document.getElementById('booking-location-select');
  const durationSelect = document.getElementById('booking-duration-select');
  const hotelInput = document.getElementById('booking-client-hotel');
  const nameInput = document.getElementById('booking-client-name');
  const hotelError = document.getElementById('booking-hotel-error');
  const feedbackBox = document.getElementById('booking-modal-feedback');
  if (!modal || !form) return;

  let lastTrigger = null;

  function openModal(preselectedModel, trigger) {
    lastTrigger = trigger || null;
    if (companionSelect && preselectedModel) {
      const optionExists = Array.from(companionSelect.options).some(
        (opt) => opt.value === preselectedModel
      );
      if (optionExists) companionSelect.value = preselectedModel;
    }
    if (feedbackBox) {
      feedbackBox.classList.add('is-hidden');
      feedbackBox.innerHTML = '';
    }
    if (hotelError) hotelError.textContent = '';
    hotelInput?.setAttribute('aria-invalid', 'false');
    modal.classList.remove('is-hidden');
    document.body.style.overflow = 'hidden';
    companionSelect?.focus();
  }

  function closeModal() {
    modal.classList.add('is-hidden');
    document.body.style.overflow = '';
    if (lastTrigger && typeof lastTrigger.focus === 'function') {
      lastTrigger.focus();
    }
  }

  document.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-open-booking]');
    if (!trigger) return;
    event.preventDefault();
    openModal(trigger.getAttribute('data-model') || '', trigger);
  });

  closeBtn?.addEventListener('click', closeModal);
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeModal();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.classList.contains('is-hidden')) {
      closeModal();
    }
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    try {
      const companion = companionSelect?.value || 'Zoya Khan';
      const location = locationSelect?.value || 'DHA Private In-Call Suite';
      const duration = durationSelect?.value || '2 Hours Dinner & Romance';
      const hotel = hotelInput?.value.trim() || '';
      const clientRef = nameInput?.value.trim() || '';

      if (hotel.length > 0 && hotel.length < 2) {
        if (hotelError) hotelError.textContent = 'Please enter a valid hotel or Karachi sector name.';
        hotelInput?.setAttribute('aria-invalid', 'true');
        hotelInput?.focus();
        return;
      }

      if (hotelError) hotelError.textContent = '';
      hotelInput?.setAttribute('aria-invalid', 'false');

      const lines = [
        'Hello Karachi Escorts Concierge,',
        '',
        'I would like to request a discreet appointment:',
        `• Companion: ${companion}`,
        `• Setting: ${location}`,
        `• Duration: ${duration}`,
      ];
      if (hotel) lines.push(`• Hotel / Sector: ${hotel}`);
      if (clientRef) lines.push(`• Reference: ${clientRef}`);
      lines.push('', 'Please confirm availability and arrival time.');

      const whatsappHref = buildWhatsAppUrl(lines.join('\n'));

      if (feedbackBox) {
        feedbackBox.replaceChildren();
        const summary = document.createElement('p');
        summary.textContent = `Reservation prepared for ${companion} (${duration}). Zero advance required — cash on arrival.`;
        const link = document.createElement('a');
        link.href = whatsappHref;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.className = 'btn btn--whatsapp btn--sm';
        link.style.marginTop = '0.75rem';
        link.textContent = 'Continue to WhatsApp Concierge';
        feedbackBox.append(summary, link);
        feedbackBox.classList.remove('is-hidden', 'form-feedback--error');
      }
    } catch {
      if (feedbackBox) {
        feedbackBox.textContent = 'Unable to prepare reservation. Please call or WhatsApp +92 307 4277717 directly.';
        feedbackBox.classList.remove('is-hidden');
        feedbackBox.classList.add('form-feedback--error');
      }
    }
  });
}

function initFaqAccordions() {
  const items = document.querySelectorAll('.faq-item');
  if (!items.length) return;

  items.forEach((item) => {
    const trigger = item.querySelector('.faq-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const willOpen = !item.classList.contains('is-open');
      items.forEach((other) => {
        other.classList.remove('is-open');
        other.querySelector('.faq-trigger')?.setAttribute('aria-expanded', 'false');
      });
      if (willOpen) {
        item.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

function bootstrapApp() {
  initThemeToggle();
  initMobileDrawer();
  initLightbox();
  initBookingModal();
  initFaqAccordions();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrapApp);
} else {
  bootstrapApp();
}
