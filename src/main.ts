import './index.css';

const WHATSAPP_NUMBER = '923074277717';

// Data model interface for runtime interactions
export interface ModelData {
  id: string;
  name: string;
  age: number;
  height: string;
  category: string;
  location: string;
  languages: string[];
  hourlyRate: string;
  overnightRate: string;
  services: string[];
  image: string;
  bio: string;
  verified: boolean;
  availableNow: boolean;
}

export const modelsList: ModelData[] = [
  {
    id: 'zoya-khan',
    name: 'Zoya Khan',
    age: 23,
    height: "5'7\"",
    category: 'VIP',
    location: 'DHA Phase 6 & Clifton',
    languages: ['English', 'Urdu'],
    hourlyRate: 'PKR 120,000',
    overnightRate: 'PKR 280,000',
    services: ['5-Star Hotel Outcall', 'Dinner Dates', 'Private Suite'],
    image: '/models/real-1.jpeg',
    bio: 'Articulate, charming, and impeccably styled for executive dinner dates and luxury hotel suites in Karachi.',
    verified: true,
    availableNow: true
  },
  {
    id: 'anastasia-volkova',
    name: 'Anastasia Volkova',
    age: 24,
    height: "5'9\"",
    category: 'Russian / International',
    location: 'Clifton Block 4 & Luxury Hotels',
    languages: ['English', 'Russian'],
    hourlyRate: 'PKR 140,000',
    overnightRate: 'PKR 350,000',
    services: ['5-Star Hotel Outcall', 'VIP Weekend', 'Social Companion'],
    image: '/models/real-2.jpeg',
    bio: 'Stunning European radiance and cosmopolitan poise for discerning executives and five-star hotel stays.',
    verified: true,
    availableNow: true
  },
  {
    id: 'alizeh-shah',
    name: 'Alizeh Shah',
    age: 22,
    height: "5'6\"",
    category: 'Independent',
    location: 'DHA Phase 5 & Bath Island',
    languages: ['English', 'Urdu'],
    hourlyRate: 'PKR 75,000',
    overnightRate: 'PKR 190,000',
    services: ['Private In-Call Suite', 'Dinner Dates', 'Discreet Outcall'],
    image: '/models/real-3.jpeg',
    bio: 'Warm, charming, and independent. Hosts in a pristine private sanctuary in DHA Phase 5 with complete privacy.',
    verified: true,
    availableNow: true
  },
  {
    id: 'sana-mirza',
    name: 'Sana Mirza',
    age: 23,
    height: "5'5\"",
    category: 'Call Girls',
    location: 'Gulshan & PECHS Central',
    languages: ['English', 'Urdu'],
    hourlyRate: 'PKR 45,000',
    overnightRate: 'PKR 140,000',
    services: ['Prompt Hotel Outcall', 'Short Notice', 'Discreet Visits'],
    image: '/models/real-4.jpeg',
    bio: 'Sweet, radiant, and cheerful. Available for fast short-notice hotel outcalls across central Karachi.',
    verified: true,
    availableNow: true
  },
  {
    id: 'natasha-romanov',
    name: 'Natasha Romanov',
    age: 25,
    height: "5'10\"",
    category: 'Russian / International',
    location: 'Marriott & Pearl Continental',
    languages: ['English', 'Russian', 'French'],
    hourlyRate: 'PKR 150,000',
    overnightRate: 'PKR 380,000',
    services: ['5-Star Suites', 'VIP Gala', 'Overnight Stays'],
    image: '/models/real-5.jpeg',
    bio: 'High-fashion international model specializing in premier Karachi luxury hotel visits and corporate galas.',
    verified: true,
    availableNow: true
  },
  {
    id: 'maha-sheikh',
    name: 'Maha Sheikh',
    age: 24,
    height: "5'7\"",
    category: 'VIP',
    location: 'Clifton & DHA Phase 8',
    languages: ['English', 'Urdu'],
    hourlyRate: 'PKR 130,000',
    overnightRate: 'PKR 300,000',
    services: ['Fine Dining', 'Overnight', 'Executive Events'],
    image: '/models/real-6.jpeg',
    bio: 'Intellectual elegance, impeccable etiquette, and high-fashion grace for distinguished gentlemen.',
    verified: true,
    availableNow: true
  },
  {
    id: 'ayesha-malik',
    name: 'Ayesha Malik',
    age: 21,
    height: "5'5\"",
    category: 'Independent',
    location: 'DHA Phase 6 & Sea View',
    languages: ['English', 'Urdu'],
    hourlyRate: 'PKR 65,000',
    overnightRate: 'PKR 170,000',
    services: ['Private In-Call', 'Dinner Dates', 'Flexible Hours'],
    image: '/models/real-7.jpeg',
    bio: 'Fresh, youthful, and naturally cheerful. Offers private hosting in DHA Phase 6 and prompt outcalls.',
    verified: true,
    availableNow: true
  },
  {
    id: 'elena-sorokina',
    name: 'Elena Sorokina',
    age: 23,
    height: "5'8\"",
    category: 'Russian / International',
    location: 'DHA Phase 6 & PC Hotel',
    languages: ['English', 'Russian'],
    hourlyRate: 'PKR 120,000',
    overnightRate: 'PKR 320,000',
    services: ['Luxury Outcall', 'Dinner Escort', 'Overnight'],
    image: '/models/real-8.jpeg',
    bio: 'Porcelain beauty with captivating charm for unhurried, discreet luxury evenings in Karachi.',
    verified: true,
    availableNow: true
  },
  {
    id: 'samira-khan',
    name: 'Samira Khan',
    age: 22,
    height: "5'6\"",
    category: 'VIP',
    location: 'Clifton Block 2 & DHA Phase 7',
    languages: ['English', 'Urdu'],
    hourlyRate: 'PKR 110,000',
    overnightRate: 'PKR 270,000',
    services: ['5-Star Outcall', 'Private Suite', 'Weekend Gateway'],
    image: '/models/real-9.jpeg',
    bio: 'Graceful, witty, and charming with striking eyes and unmatched elegance for memorable evenings.',
    verified: true,
    availableNow: true
  },
  {
    id: 'tanya-petrova',
    name: 'Tanya Petrova',
    age: 24,
    height: "5'9\"",
    category: 'Russian / International',
    location: 'Mövenpick & Marriott Karachi',
    languages: ['English', 'Russian'],
    hourlyRate: 'PKR 145,000',
    overnightRate: 'PKR 360,000',
    services: ['Luxury Hotel Suite', 'Dinner Escort', 'VIP Overnight'],
    image: '/models/real-10.jpeg',
    bio: 'Sensational blonde Russian companion with European sophistication and captivating conversational charm.',
    verified: true,
    availableNow: true
  }
];

function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// App State
let activeIndex = 0;

// Preload companion images into browser cache for instant switching
function preloadImages(): void {
  modelsList.forEach((m) => {
    const img = new Image();
    img.src = m.image;
  });
}

// Update spotlight companion card
function renderSpotlight(index: number): void {
  activeIndex = ((index % modelsList.length) + modelsList.length) % modelsList.length;
  const model = modelsList[activeIndex];
  const spotlightContainer = document.getElementById('spotlight-featured-card');
  if (!spotlightContainer || !model) return;

  const imgEl = document.getElementById('spotlight-img') as HTMLImageElement | null;
  const nameEl = document.getElementById('spotlight-name');
  const ageEl = document.getElementById('spotlight-age');
  const heightEl = document.getElementById('spotlight-height');
  const catEl = document.getElementById('spotlight-category');
  const locEl = document.getElementById('spotlight-location');
  const rateEl = document.getElementById('spotlight-rate');
  const overEl = document.getElementById('spotlight-overnight');
  const bioEl = document.getElementById('spotlight-bio');
  const servicesEl = document.getElementById('spotlight-services');
  const bookBtn = document.getElementById('spotlight-book-btn') as HTMLAnchorElement | null;
  const zoomBtn = document.getElementById('spotlight-zoom-btn');
  const reserveBtns = spotlightContainer.querySelectorAll<HTMLElement>('[data-open-booking]');
  const countEl = document.getElementById('spotlight-counter');
  const thumbnails = document.querySelectorAll<HTMLElement>('.spotlight-thumb');

  if (imgEl) {
    imgEl.src = model.image;
    imgEl.alt = `${model.name} - Verified VIP Karachi Escort in ${model.location}`;
  }
  if (nameEl) nameEl.textContent = model.name;
  if (ageEl) ageEl.textContent = `${model.age} yrs`;
  if (heightEl) heightEl.textContent = model.height;
  if (catEl) catEl.textContent = model.category;
  if (locEl) locEl.textContent = model.location;
  if (rateEl) rateEl.textContent = model.hourlyRate;
  if (overEl) overEl.textContent = model.overnightRate;
  if (bioEl) bioEl.textContent = `"${model.bio}"`;
  if (countEl) countEl.textContent = `${activeIndex + 1} of ${modelsList.length}`;

  if (servicesEl) {
    servicesEl.replaceChildren(
      ...model.services.map((service) => {
        const badge = document.createElement('span');
        badge.className =
          'px-2.5 py-1 text-xs rounded-md bg-rose-500/10 text-rose-500 font-medium border border-rose-500/20';
        badge.textContent = service;
        return badge;
      })
    );
  }

  if (bookBtn) {
    bookBtn.href = buildWhatsAppUrl(
      `Hi Karachi Escorts, I want to book ${model.name} (${model.category}) for a private appointment in Karachi.`
    );
  }

  if (zoomBtn) {
    zoomBtn.setAttribute('data-zoom-src', model.image);
    zoomBtn.setAttribute('data-zoom-title', `${model.name} • ${model.category}`);
  }

  reserveBtns.forEach((btn) => {
    btn.setAttribute('data-model', model.name);
  });

  thumbnails.forEach((thumb, idx) => {
    const attrIdx = thumb.getAttribute('data-index');
    const thumbIdx = attrIdx !== null ? parseInt(attrIdx, 10) : idx;
    if (thumbIdx === activeIndex) {
      thumb.classList.add('ring-2', 'ring-rose-500', 'scale-105');
      thumb.classList.remove('opacity-60');
    } else {
      thumb.classList.remove('ring-2', 'ring-rose-500', 'scale-105');
      thumb.classList.add('opacity-60');
    }
  });
}

function initApp(): void {
  preloadImages();
  initThemeToggle();
  initMobileMenu();
  initSpotlightViewer();
  initCategoryFilters();
  initLayoutToggle();
  initLightbox();
  initBookingModal();
  initFaqAccordion();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// 1. Theme Toggle
function initThemeToggle(): void {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-toggle-icon');

  function updateIcon(isDark: boolean): void {
    if (!themeIcon) return;
    if (isDark) {
      themeIcon.innerHTML = `<svg class="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>`;
    } else {
      themeIcon.innerHTML = `<svg class="w-4 h-4 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>`;
    }
  }

  const isCurrentDark = document.documentElement.classList.contains('dark');
  updateIcon(isCurrentDark);

  themeToggleBtn?.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    if (isDark) {
      document.documentElement.classList.remove('light');
      document.documentElement.setAttribute('data-theme', 'dark');
      document.documentElement.style.colorScheme = 'dark';
      localStorage.setItem('karachi_escorts_theme', 'dark');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.setAttribute('data-theme', 'light');
      document.documentElement.style.colorScheme = 'light';
      localStorage.setItem('karachi_escorts_theme', 'light');
    }
    updateIcon(isDark);
  });
}

// 2. Mobile Menu Toggle
function initMobileMenu(): void {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-nav-drawer');
  const closeBtn = document.getElementById('mobile-menu-close');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (!menuBtn || !mobileMenu) return;

  function toggleMenu(show: boolean): void {
    if (show) {
      mobileMenu?.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    } else {
      mobileMenu?.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }

  menuBtn.addEventListener('click', () => toggleMenu(true));
  closeBtn?.addEventListener('click', () => toggleMenu(false));
  mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) toggleMenu(false);
  });

  links.forEach((link) => {
    link.addEventListener('click', () => toggleMenu(false));
  });
}

// 3. Spotlight Lookbook Viewer
function initSpotlightViewer(): void {
  const prevBtn = document.getElementById('spotlight-prev');
  const nextBtn = document.getElementById('spotlight-next');
  const thumbnails = document.querySelectorAll<HTMLElement>('.spotlight-thumb');
  const spotlightImg = document.getElementById('spotlight-img');

  prevBtn?.addEventListener('click', () => renderSpotlight(activeIndex - 1));
  nextBtn?.addEventListener('click', () => renderSpotlight(activeIndex + 1));

  thumbnails.forEach((thumb, idx) => {
    if (!thumb.hasAttribute('data-index')) {
      thumb.setAttribute('data-index', String(idx));
    }
    if (!thumb.hasAttribute('data-category') && modelsList[idx]) {
      thumb.setAttribute('data-category', modelsList[idx].category);
    }

    thumb.addEventListener('click', () => {
      const targetIdx = parseInt(thumb.getAttribute('data-index') || '0', 10);
      renderSpotlight(targetIdx);
    });
  });

  spotlightImg?.addEventListener('click', () => {
    document.getElementById('spotlight-zoom-btn')?.click();
  });

  renderSpotlight(0);
}

// 4. Category Filter Buttons
function initCategoryFilters(): void {
  const filterButtons = document.querySelectorAll<HTMLElement>('.model-filter-btn');
  const cards = document.querySelectorAll<HTMLElement>('.model-card-item');
  const thumbnails = document.querySelectorAll<HTMLElement>('.spotlight-thumb');

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const category = (btn.getAttribute('data-filter') || 'all').toLowerCase();

      filterButtons.forEach((b) => {
        b.classList.remove('bg-rose-600', 'text-white', 'shadow-lg');
        b.classList.add('bg-[var(--bg-surface)]', 'text-[var(--text-secondary)]');
      });
      btn.classList.add('bg-rose-600', 'text-white', 'shadow-lg');
      btn.classList.remove('bg-[var(--bg-surface)]', 'text-[var(--text-secondary)]');

      cards.forEach((card) => {
        const cardCat = (card.getAttribute('data-category') || '').toLowerCase();
        const matches = category === 'all' || cardCat.includes(category);
        card.classList.toggle('hidden', !matches);
      });

      let firstMatchingIdx = -1;
      thumbnails.forEach((thumb, idx) => {
        const thumbCat = (
          thumb.getAttribute('data-category') ||
          modelsList[idx]?.category ||
          ''
        ).toLowerCase();
        const matches = category === 'all' || thumbCat.includes(category);

        thumb.classList.toggle('opacity-20', !matches);
        thumb.classList.toggle('grayscale', !matches);
        if (matches) {
          thumb.classList.remove('opacity-60');
          if (firstMatchingIdx === -1) firstMatchingIdx = idx;
        }
      });

      if (firstMatchingIdx !== -1) {
        renderSpotlight(firstMatchingIdx);
      }
    });
  });
}

// 5. Layout Toggle (Spotlight vs Grid)
function initLayoutToggle(): void {
  const spotlightSection = document.getElementById('spotlight-view-section');
  const gridSection = document.getElementById('grid-view-section');
  const toggleSpotlightBtn = document.getElementById('btn-view-spotlight');
  const toggleGridBtn = document.getElementById('btn-view-grid');
  const gridCards = document.querySelectorAll<HTMLElement>('.model-card-item');

  function setLayout(layout: 'spotlight' | 'grid'): void {
    if (layout === 'spotlight') {
      spotlightSection?.classList.remove('hidden');
      gridSection?.classList.add('hidden');
      toggleSpotlightBtn?.classList.add('bg-rose-600', 'text-white');
      toggleSpotlightBtn?.classList.remove('text-[var(--text-secondary)]');
      toggleGridBtn?.classList.remove('bg-rose-600', 'text-white');
      toggleGridBtn?.classList.add('text-[var(--text-secondary)]');
    } else {
      spotlightSection?.classList.add('hidden');
      gridSection?.classList.remove('hidden');
      toggleGridBtn?.classList.add('bg-rose-600', 'text-white');
      toggleGridBtn?.classList.remove('text-[var(--text-secondary)]');
      toggleSpotlightBtn?.classList.remove('bg-rose-600', 'text-white');
      toggleSpotlightBtn?.classList.add('text-[var(--text-secondary)]');
    }
  }

  toggleSpotlightBtn?.addEventListener('click', () => setLayout('spotlight'));
  toggleGridBtn?.addEventListener('click', () => setLayout('grid'));

  gridCards.forEach((card, idx) => {
    const cardImg = card.querySelector('img');
    const cardTitle = card.querySelector('h3');
    [cardImg, cardTitle].forEach((el) => {
      if (!el) return;
      (el as HTMLElement).style.cursor = 'pointer';
      el.addEventListener('click', (e) => {
        if ((e.target as HTMLElement).closest('[data-zoom-src]')) return;
        renderSpotlight(idx);
        setLayout('spotlight');
        document.getElementById('models')?.scrollIntoView({ behavior: 'smooth' });
      });
    });
  });
}

// 6. Fullscreen Image Lightbox
function initLightbox(): void {
  const lightbox = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-image') as HTMLImageElement | null;
  const lightboxTitle = document.getElementById('lightbox-title');
  const closeBtn = document.getElementById('lightbox-close');

  function openLightbox(src: string, title: string): void {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    if (lightboxTitle) lightboxTitle.textContent = title;
    lightbox.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox(): void {
    if (!lightbox) return;
    lightbox.classList.add('hidden');
    document.body.style.overflow = '';
  }

  closeBtn?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox && !lightbox.classList.contains('hidden')) {
      closeLightbox();
    }
  });

  document.addEventListener('click', (e) => {
    const target = (e.target as HTMLElement).closest<HTMLElement>('[data-zoom-src]');
    if (!target) return;
    const src = target.getAttribute('data-zoom-src') || '';
    const title = target.getAttribute('data-zoom-title') || 'Verified Karachi Companion Photo';
    if (src) {
      e.preventDefault();
      openLightbox(src, title);
    }
  });
}

// 7. Fast Booking Modal
function initBookingModal(): void {
  const modal = document.getElementById('booking-modal');
  const closeBtn = document.getElementById('booking-modal-close');
  const openButtons = document.querySelectorAll<HTMLElement>('[data-open-booking]');
  const companionSelect = document.getElementById('booking-model-select') as HTMLSelectElement | null;
  const locationSelect = document.getElementById('booking-location-select') as HTMLSelectElement | null;
  const durationSelect = document.getElementById('booking-duration-select') as HTMLSelectElement | null;
  const clientNameInput = document.getElementById('booking-client-name') as HTMLInputElement | null;
  const clientHotelInput = document.getElementById('booking-client-hotel') as HTMLInputElement | null;
  const submitBtn = document.getElementById('booking-submit-btn');

  function openModal(preSelectedModel?: string): void {
    if (!modal) return;
    if (companionSelect && preSelectedModel) {
      companionSelect.value = preSelectedModel;
    }
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(): void {
    if (!modal) return;
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  openButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const model = btn.getAttribute('data-model') || '';
      openModal(model);
    });
  });

  closeBtn?.addEventListener('click', closeModal);
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  submitBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    const companion = companionSelect?.value || 'Any Available VIP Model';
    const location = locationSelect?.value || 'DHA / Clifton';
    const duration = durationSelect?.value || '2 Hours Dinner & Romance';
    const hotel = clientHotelInput?.value.trim()
      ? `\n• Location/Hotel: ${clientHotelInput.value.trim()}`
      : '';
    const name = clientNameInput?.value.trim()
      ? `\n• Client Reference: ${clientNameInput.value.trim()}`
      : '';

    const message =
      `Hello Karachi Escorts Concierge,\n\nI would like to request an exclusive private booking:${name}\n` +
      `• Companion Preferred: ${companion}\n• Service Area: ${location}\n• Duration: ${duration}${hotel}\n\n` +
      `Please confirm availability and dispatch window.`;

    window.location.href = buildWhatsAppUrl(message);
  });
}

// 8. FAQ Accordion
function initFaqAccordion(): void {
  const faqItems = document.querySelectorAll('.faq-accordion-item');

  faqItems.forEach((item) => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');
    const icon = item.querySelector('.faq-icon');

    trigger?.addEventListener('click', () => {
      const isCurrentlyHidden = content?.classList.contains('hidden');

      faqItems.forEach((other) => {
        other.querySelector('.faq-content')?.classList.add('hidden');
        other.querySelector('.faq-icon')?.classList.remove('rotate-180');
      });

      if (isCurrentlyHidden) {
        content?.classList.remove('hidden');
        icon?.classList.add('rotate-180');
      }
    });
  });
}