import React from 'react';
import { MessageSquare, ArrowDown, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/content';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenLightbox?: (img: string, title: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenLightbox }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Focused Copy */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-rose-500">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available 24/7 • DHA &amp; Clifton</span>
            </div>

            <h1 className="mt-4 font-cinzel text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[var(--text-primary)] leading-[1.1]">
              Karachi Escort <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500">
                VIP Companions
              </span>
            </h1>

            <p className="mt-4 text-sm sm:text-base text-[var(--text-secondary)] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Verified in-person portraits from our genuine roster. Discreet private suites across DHA &amp; Clifton, and 20-minute outcalls to 5-star hotels with zero advance deposit.
            </p>

            {/* Quick Action CTAs */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[44px] items-center gap-2 rounded-xl bg-emerald-600 px-6 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-lg hover:bg-emerald-500 transition"
              >
                <MessageSquare className="h-4 w-4" />
                <span>WhatsApp Booking</span>
              </a>

              <a
                href="#models"
                className="flex min-h-[44px] items-center gap-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] px-6 py-2.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[var(--text-primary)] hover:border-rose-500 transition"
              >
                <span>View Real Models</span>
                <ArrowDown className="h-3.5 w-3.5 text-rose-500" />
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-medium text-[var(--text-secondary)] border-t border-[var(--border-subtle)] pt-5">
              <span className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-emerald-500" />
                100% Real Zip Photos
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-emerald-500" />
                Cash On Arrival
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-emerald-500" />
                20-Min Hotel Dispatch
              </span>
            </div>
          </div>

          {/* Right Column: Featured Real Companion Portrait */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-[var(--border-card)] bg-[var(--bg-card)] p-2 shadow-2xl">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-black group">
                <img
                  src="/models/real-1.jpeg"
                  alt="Zoya Khan - Verified VIP Karachi Escort Companion"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                  fetchPriority="high"
                  width="400"
                  height="533"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20 pointer-events-none" />
                
                <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-rose-600 px-2.5 py-0.5 text-[10px] font-bold uppercase text-white shadow">
                  <Sparkles className="h-3 w-3" />
                  <span>Featured Real Model</span>
                </div>

                <div className="absolute top-3 right-3 rounded-full bg-emerald-500/90 backdrop-blur-md px-2 py-0.5 text-[10px] font-bold text-white shadow">
                  Verified In Person
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <div>
                    <h3 className="font-cinzel text-base font-bold">Zoya Khan</h3>
                    <p className="text-xs text-rose-300">DHA &amp; Clifton • Available Tonight</p>
                  </div>
                  <button
                    onClick={onOpenBooking}
                    className="rounded-lg bg-rose-600 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-rose-500 transition cursor-pointer shadow"
                  >
                    Reserve
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
