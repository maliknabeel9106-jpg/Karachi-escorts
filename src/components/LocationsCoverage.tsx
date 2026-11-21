import React from 'react';
import { karachiLocations } from '../data/content';
import { MapPin, Clock, Hotel } from 'lucide-react';

export const LocationsCoverage: React.FC = () => {
  return (
    <section id="locations" className="relative py-12 sm:py-16 border-t border-[var(--border-subtle)]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-cinzel text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[var(--text-primary)]">
            Service Areas
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-[var(--text-secondary)]">
            Prompt 15–25 minute arrivals across Karachi's premier sectors
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {karachiLocations.map((loc) => (
            <div
              key={loc.id}
              className="rounded-2xl border border-[var(--border-card)] bg-[var(--bg-card)] p-5 text-left transition hover:border-rose-500/40"
            >
              <div className="flex items-center justify-between">
                <span className="font-cinzel text-base font-bold text-[var(--text-primary)]">
                  {loc.name}
                </span>
                <span className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-500">
                  <Clock className="h-3 w-3" />
                  {loc.dispatchTime}
                </span>
              </div>

              <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                {loc.description}
              </p>

              <div className="mt-3 flex flex-wrap gap-1">
                {loc.hotspots.map((h, i) => (
                  <span
                    key={i}
                    className="rounded bg-[var(--bg-surface)] px-2 py-0.5 text-[10px] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
