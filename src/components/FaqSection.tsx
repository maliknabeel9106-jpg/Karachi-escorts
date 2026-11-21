import React, { useState } from 'react';
import { faqs, siteConfig } from '../data/content';
import { ChevronDown, MessageSquare } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-12 sm:py-16 border-t border-[var(--border-subtle)] bg-[var(--bg-surface)]">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-cinzel text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[var(--text-primary)]">
            Frequently Asked Questions
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-[var(--text-secondary)]">
            Key details regarding reservations, discretion, and locations
          </p>
        </div>

        <div className="mt-8 space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-xl border border-[var(--border-card)] bg-[var(--bg-card)] transition"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between p-4 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-cinzel text-xs sm:text-sm font-bold text-[var(--text-primary)] pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-rose-500 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] p-4 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-6 text-center">
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 hover:underline"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            <span>Have a specific question? Ask us privately on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
