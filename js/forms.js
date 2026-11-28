import { buildWhatsAppUrl } from './data.js';

/**
 * Contact & Reservation Form Validation Controller
 * Handles validation on contact.html without intrusive alerts.
 */

function setFieldError(inputEl, errorEl, message) {
  if (inputEl) {
    inputEl.setAttribute('aria-invalid', message ? 'true' : 'false');
  }
  if (errorEl) {
    errorEl.textContent = message || '';
  }
}

function initContactForm() {
  const form = document.getElementById('contact-booking-form');
  if (!form) return;

  const companionEl = document.getElementById('contact-companion');
  const settingEl = document.getElementById('contact-setting');
  const durationEl = document.getElementById('contact-duration');
  const locationEl = document.getElementById('contact-location');
  const phoneEl = document.getElementById('contact-phone');
  const notesEl = document.getElementById('contact-notes');

  const locationErr = document.getElementById('contact-location-error');
  const phoneErr = document.getElementById('contact-phone-error');
  const feedbackEl = document.getElementById('contact-form-feedback');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    try {
      const companion = companionEl?.value || 'Any Available VIP Companion';
      const setting = settingEl?.value || '5-Star Hotel Outcall';
      const duration = durationEl?.value || '2 Hours Dinner & Romance';
      const location = locationEl?.value.trim() || '';
      const phone = phoneEl?.value.trim() || '';
      const notes = notesEl?.value.trim() || '';

      let hasError = false;

      if (location.length < 3) {
        setFieldError(
          locationEl,
          locationErr,
          'Please specify a Karachi neighborhood or hotel (e.g., DHA Phase 6, Marriott).'
        );
        hasError = true;
      } else {
        setFieldError(locationEl, locationErr, '');
      }

      const cleanedPhone = phone.replace(/[\s\-()+]/g, '');
      if (!phone || cleanedPhone.length < 7 || !/^\d+$/.test(cleanedPhone)) {
        setFieldError(
          phoneEl,
          phoneErr,
          'Please enter a valid WhatsApp or callback number (digits only, minimum 7 digits).'
        );
        hasError = true;
      } else {
        setFieldError(phoneEl, phoneErr, '');
      }

      if (hasError) {
        if (feedbackEl) {
          feedbackEl.textContent = 'Please correct the highlighted fields above before submitting.';
          feedbackEl.classList.remove('is-hidden');
          feedbackEl.classList.add('form-feedback--error');
        }
        return;
      }

      const lines = [
        'Hello Karachi Escorts Concierge,',
        '',
        'Discreet Reservation Request:',
        `• Preferred Companion: ${companion}`,
        `• Arrangement: ${setting}`,
        `• Duration: ${duration}`,
        `• Area / Hotel: ${location}`,
        `• Client Contact: ${phone}`,
      ];
      if (notes) lines.push(`• Special Notes: ${notes}`);
      lines.push('', 'Zero advance required — settlement strictly cash on arrival.');

      const whatsappHref = buildWhatsAppUrl(lines.join('\n'));

      if (feedbackEl) {
        feedbackEl.replaceChildren();

        const title = document.createElement('strong');
        title.textContent = 'Inquiry Ready for Instant Dispatch';

        const desc = document.createElement('p');
        desc.style.marginTop = '0.35rem';
        desc.textContent = `Your request for ${companion} in ${location} (${duration}) is formatted. Send it directly on encrypted WhatsApp to receive live arrival confirmation within 15–20 minutes.`;

        const cta = document.createElement('a');
        cta.href = whatsappHref;
        cta.target = '_blank';
        cta.rel = 'noopener noreferrer';
        cta.className = 'btn btn--whatsapp btn--sm';
        cta.style.marginTop = '0.75rem';
        cta.textContent = 'Send Inquiry via WhatsApp (+92 307 4277717)';

        feedbackEl.append(title, desc, cta);
        feedbackEl.classList.remove('is-hidden', 'form-feedback--error');
      }
    } catch {
      if (feedbackEl) {
        feedbackEl.textContent =
          'Could not process the form automatically. Please reach us directly at +92 307 4277717 or info@karachiescorts.org.';
        feedbackEl.classList.remove('is-hidden');
        feedbackEl.classList.add('form-feedback--error');
      }
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initContactForm);
} else {
  initContactForm();
}
