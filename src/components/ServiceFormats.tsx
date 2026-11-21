import React from 'react';
import { Hotel, Home, ShieldCheck, Banknote } from 'lucide-react';

export const ServiceFormats: React.FC = () => {
  const formats = [
    {
      icon: Hotel,
      title: '5-Star Hotel Outcalls',
      desc: 'Rapid 20-min dispatch to Marriott, Pearl Continental (PC), Mövenpick, Ramada & Avari Suites.'
    },
    {
      icon: Home,
      title: 'Private In-Call Suites',
      desc: 'Discreet, sanitised apartments in gated sectors of DHA Phase 5, 6, 8 and Clifton with private elevator.'
    },
    {
      icon: ShieldCheck,
      title: '100% Real Zip Photos',
      desc: 'Every portrait is authentic and verified in-person. The companion who arrives matches the profile.'
    },
    {
      icon: Banknote,
      title: 'Zero Advance Deposit',
      desc: 'Never send money upfront. Total protection against fraud; pay in cash directly upon companion arrival.'
    }
  ];

  return (
    <section className="relative py-8 sm:py-10 border-t border-[var(--border-subtle)] bg-[var(--bg-surface)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {formats.map((fmt, idx) => {
            const Icon = fmt.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-2xl border border-[var(--border-card)] bg-[var(--bg-card)] p-4 transition hover:border-rose-500/40"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-cinzel text-sm font-bold text-[var(--text-primary)]">
                    {fmt.title}
                  </h3>
                  <p className="mt-1 text-xs text-[var(--text-secondary)] leading-relaxed">
                    {fmt.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
