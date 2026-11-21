import React, { useState } from 'react';
import { Menu, X, Phone, MessageSquare, Sun, Moon } from 'lucide-react';
import { siteConfig } from '../data/content';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--border-subtle)] bg-[var(--bg-header)] backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-600 text-white font-cinzel font-black text-sm shadow">
            K
          </div>
          <div>
            <div className="font-cinzel text-lg sm:text-xl font-bold tracking-wider text-[var(--text-primary)]">
              Karachi <span className="text-rose-600">Escorts</span>
            </div>
          </div>
        </a>

        {/* Minimal Desktop Nav */}
        <nav className="hidden items-center gap-7 md:flex text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
          <a href="#models" className="hover:text-rose-600 transition-colors">Companions</a>
          <a href="#pricing" className="hover:text-rose-600 transition-colors">Rates</a>
          <a href="#locations" className="hover:text-rose-600 transition-colors">Areas</a>
          <a href="#faq" className="hover:text-rose-600 transition-colors">FAQ</a>
        </nav>

        {/* Action CTAs */}
        <div className="hidden items-center gap-3 sm:flex">
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-rose-600 transition cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-zinc-700" />}
          </button>

          <a
            href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] px-3.5 py-2 text-xs font-semibold text-[var(--text-primary)] hover:border-rose-500 transition"
          >
            <Phone className="h-3 w-3 text-rose-600" />
            <span>{siteConfig.phoneDisplay}</span>
          </a>

          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-500 shadow transition"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)]"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-3.5 w-3.5 text-amber-400" /> : <Moon className="h-3.5 w-3.5 text-zinc-700" />}
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-[var(--border-subtle)] bg-[var(--bg-card)] px-5 py-5 md:hidden">
          <div className="flex flex-col space-y-3 text-sm font-semibold text-[var(--text-primary)]">
            <a href="#models" onClick={() => setMobileMenuOpen(false)}>Companions</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Rates &amp; Packages</a>
            <a href="#locations" onClick={() => setMobileMenuOpen(false)}>Locations (DHA &amp; Clifton)</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
            
            <div className="pt-3 border-t border-[var(--border-subtle)] flex flex-col gap-2">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-2.5 text-xs font-bold text-white shadow"
              >
                <MessageSquare className="h-4 w-4" />
                <span>WhatsApp: {siteConfig.phoneDisplay}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full rounded-xl bg-rose-600 py-2.5 text-center text-xs font-bold uppercase text-white shadow"
              >
                Online Reservation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
