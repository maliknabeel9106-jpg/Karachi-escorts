import React, { useState } from 'react';
import { pricingTiers, siteConfig } from '../data/content';
import { ShieldCheck, MessageSquare, Clock } from 'lucide-react';

interface PricingCalculatorProps {
  onOpenBooking: (category?: string) => void;
}

export const PricingCalculator: React.FC<PricingCalculatorProps> = ({ onOpenBooking }) => {
  return (
    <section id="pricing" className="relative py-12 sm:py-16 border-t border-[var(--border-subtle)] bg-[var(--bg-surface)]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-cinzel text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[var(--text-primary)]">
            Rates &amp; Packages
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-[var(--text-secondary)]">
            Zero advance fee • Dispatched to DHA, Clifton &amp; 5-Star Hotels • Cash upon arrival
          </p>
        </div>

        {/* 3 Tier Cards */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {pricingTiers.map((tier, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl border p-5 sm:p-6 bg-[var(--bg-card)] flex flex-col justify-between transition-all ${
                tier.popular ? 'border-rose-500 shadow-md ring-1 ring-rose-500/20' : 'border-[var(--border-card)]'
              }`}
            >
              <div>
                {tier.popular && (
                  <span className="mb-2 inline-block rounded-full bg-rose-600 px-2 py-0.5 text-[9px] font-extrabold uppercase text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="font-cinzel text-base font-bold text-[var(--text-primary)]">
                  {tier.type}
                </h3>
                <div className="mt-2 text-xl font-black text-rose-600 dark:text-rose-400">
                  {tier.rates}
                </div>
                <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                  {tier.includes}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[var(--border-subtle)]">
                <a
                  href={`https://wa.me/923402042663?text=Hi%20Karachi%20Escorts%2C%20I%20want%20to%20book%20the%20${encodeURIComponent(tier.type)}%20package.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-emerald-600 py-2.5 text-xs font-bold text-white hover:bg-emerald-500 transition"
                >
                  <MessageSquare className="h-3.5 w-3.5" />
                  <span>Reserve via WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Minimalist Trust Bar */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--text-secondary)]">
          <span className="flex items-center gap-1 font-medium">
            <ShieldCheck className="h-4 w-4 text-emerald-500" />
            100% Confidential
          </span>
          <span>•</span>
          <span className="flex items-center gap-1 font-medium">
            <Clock className="h-4 w-4 text-emerald-500" />
            15–25 Mins Arrival
          </span>
          <span>•</span>
          <span className="font-medium text-emerald-600 dark:text-emerald-400">
            No Credit Card Needed
          </span>
        </div>
      </div>
    </section>
  );
};
