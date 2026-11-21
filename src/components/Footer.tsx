import React from 'react';
import { siteConfig } from '../data/content';
import { Phone, Mail, MapPin, MessageSquare, ShieldAlert } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-card)] py-12 text-xs text-[var(--text-secondary)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Col 1 */}
          <div>
            <div className="font-cinzel text-lg font-bold text-[var(--text-primary)]">
              Karachi <span className="text-rose-600">Escorts</span>
            </div>
            <p className="mt-2 text-xs text-[var(--text-secondary)] max-w-sm leading-relaxed">
              Discreet VIP companion agency in Karachi. Verified in-call suites across DHA &amp; Clifton, and 5-star hotel outcalls 24/7.
            </p>
            <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] text-[var(--text-muted)]">
              <ShieldAlert className="h-3.5 w-3.5 text-rose-600" />
              <span>Strictly 18+ Adults Only • 100% Privacy</span>
            </div>
          </div>

          {/* Col 2 */}
          <div className="space-y-1.5">
            <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] mb-3">
              Navigation
            </h4>
            <div><a href="#models" className="hover:text-rose-600 transition">Companions Directory</a></div>
            <div><a href="#pricing" className="hover:text-rose-600 transition">Rates &amp; Packages</a></div>
            <div><a href="#locations" className="hover:text-rose-600 transition">DHA &amp; Clifton Coverage</a></div>
            <div><a href="#faq" className="hover:text-rose-600 transition">Frequently Asked Questions</a></div>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] mb-3">
              Direct Contact
            </h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-rose-600" />
                <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="font-medium hover:text-rose-600">
                  {siteConfig.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-rose-600" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-rose-600">
                  {siteConfig.email}
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-emerald-500 transition shadow"
                >
                  <MessageSquare className="h-3.5 w-3.5" />
                  <span>WhatsApp Booking</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[var(--border-subtle)] pt-6 text-center text-[11px] text-[var(--text-muted)]">
          <p>© 2026 Karachi Escorts • <a href="https://karachiescorts.org/" className="hover:underline">karachiescorts.org</a> • All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};
