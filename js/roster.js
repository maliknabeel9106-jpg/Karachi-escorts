import { COMPANIONS, buildWhatsAppUrl } from './data.js';

/**
 * Interactive Companions Roster Controller
 * Powers category filters, Spotlight Lookbook switcher, Grid view toggle, and image preloading.
 */

function initRoster() {
  const rosterSection = document.getElementById('roster-root');
  if (!rosterSection) return;

  const spotlightSection = document.getElementById('spotlight-view-section');
  const gridSection = document.getElementById('grid-view-section');
  const toggleSpotlightBtn = document.getElementById('btn-view-spotlight');
  const toggleGridBtn = document.getElementById('btn-view-grid');
  const filterBtns = Array.from(rosterSection.querySelectorAll('.filter-btn'));
  const gridCards = Array.from(rosterSection.querySelectorAll('.companion-card'));
  const thumbBtns = Array.from(rosterSection.querySelectorAll('.thumb-btn'));

  const spotlightImg = document.getElementById('spotlight-img');
  const spotlightCounter = document.getElementById('spotlight-counter');
  const spotlightCat = document.getElementById('spotlight-category');
  const spotlightName = document.getElementById('spotlight-name');
  const spotlightLoc = document.getElementById('spotlight-location');
  const spotlightAge = document.getElementById('spotlight-age');
  const spotlightHeight = document.getElementById('spotlight-height');
  const spotlightRate = document.getElementById('spotlight-rate');
  const spotlightOvernight = document.getElementById('spotlight-overnight');
  const spotlightBio = document.getElementById('spotlight-bio');
  const spotlightServices = document.getElementById('spotlight-services');
  const spotlightBookBtn = document.getElementById('spotlight-book-btn');
  const spotlightReserveBtn = document.getElementById('spotlight-reserve-btn');
  const spotlightZoomBtn = document.getElementById('spotlight-zoom-btn');
  const prevBtn = document.getElementById('spotlight-prev');
  const nextBtn = document.getElementById('spotlight-next');

  let activeIndex = 0;

  // Preload companion images smoothly when idle
  COMPANIONS.forEach((companion) => {
    const img = new Image();
    img.src = companion.image;
  });

  function renderSpotlight(index) {
    if (!COMPANIONS.length) return;
    activeIndex = ((index % COMPANIONS.length) + COMPANIONS.length) % COMPANIONS.length;
    const model = COMPANIONS[activeIndex];

    if (spotlightImg) {
      spotlightImg.src = model.image;
      spotlightImg.alt = model.alt;
      spotlightImg.setAttribute('data-zoom-src', model.image);
      spotlightImg.setAttribute('data-zoom-title', `${model.name} • ${model.category}`);
    }
    if (spotlightCounter) spotlightCounter.textContent = `${activeIndex + 1} of ${COMPANIONS.length}`;
    if (spotlightCat) spotlightCat.textContent = model.category;
    if (spotlightName) spotlightName.textContent = model.name;
    if (spotlightLoc) spotlightLoc.textContent = model.location;
    if (spotlightAge) spotlightAge.textContent = `${model.age} yrs`;
    if (spotlightHeight) spotlightHeight.textContent = model.height;
    if (spotlightRate) spotlightRate.textContent = model.hourlyRate;
    if (spotlightOvernight) spotlightOvernight.textContent = model.overnightRate;
    if (spotlightBio) spotlightBio.textContent = `"${model.bio}"`;
    if (spotlightServices) {
      spotlightServices.textContent = model.services.join(' · ');
    }
    if (spotlightBookBtn) {
      spotlightBookBtn.href = buildWhatsAppUrl(
        `Hi Karachi Escorts, I want to book ${model.name} (${model.category}) in Karachi.`
      );
    }
    if (spotlightReserveBtn) {
      spotlightReserveBtn.setAttribute('data-model', model.name);
    }
    if (spotlightZoomBtn) {
      spotlightZoomBtn.setAttribute('data-zoom-src', model.image);
      spotlightZoomBtn.setAttribute('data-zoom-title', `${model.name} • ${model.category}`);
    }

    thumbBtns.forEach((btn, idx) => {
      btn.classList.toggle('is-active', idx === activeIndex);
      btn.setAttribute('aria-pressed', String(idx === activeIndex));
    });
  }

  function setViewMode(mode) {
    const isSpotlight = mode === 'spotlight';
    spotlightSection?.classList.toggle('is-hidden', !isSpotlight);
    gridSection?.classList.toggle('is-hidden', isSpotlight);
    toggleSpotlightBtn?.classList.toggle('is-active', isSpotlight);
    toggleGridBtn?.classList.toggle('is-active', !isSpotlight);
    toggleSpotlightBtn?.setAttribute('aria-pressed', String(isSpotlight));
    toggleGridBtn?.setAttribute('aria-pressed', String(!isSpotlight));
  }

  toggleSpotlightBtn?.addEventListener('click', () => setViewMode('spotlight'));
  toggleGridBtn?.addEventListener('click', () => setViewMode('grid'));

  prevBtn?.addEventListener('click', () => renderSpotlight(activeIndex - 1));
  nextBtn?.addEventListener('click', () => renderSpotlight(activeIndex + 1));

  thumbBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => renderSpotlight(idx));
  });

  gridCards.forEach((card, idx) => {
    const titleEl = card.querySelector('.companion-card__name');
    const imgEl = card.querySelector('.companion-card__img');
    [titleEl, imgEl].forEach((trigger) => {
      trigger?.addEventListener('click', () => {
        renderSpotlight(idx);
        setViewMode('spotlight');
        rosterSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  });

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetFilter = (btn.getAttribute('data-filter') || 'all').toLowerCase();

      filterBtns.forEach((b) => {
        const active = b === btn;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-pressed', String(active));
      });

      let firstMatchIdx = -1;

      gridCards.forEach((card, idx) => {
        const cat = (card.getAttribute('data-category') || '').toLowerCase();
        const matches = targetFilter === 'all' || cat === targetFilter;
        card.classList.toggle('is-hidden', !matches);
        if (matches && firstMatchIdx === -1) {
          firstMatchIdx = idx;
        }
      });

      thumbBtns.forEach((thumb) => {
        const cat = (thumb.getAttribute('data-category') || '').toLowerCase();
        const matches = targetFilter === 'all' || cat === targetFilter;
        thumb.classList.toggle('is-dimmed', !matches);
      });

      if (firstMatchIdx !== -1) {
        renderSpotlight(firstMatchIdx);
      }
    });
  });

  renderSpotlight(0);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initRoster);
} else {
  initRoster();
}
