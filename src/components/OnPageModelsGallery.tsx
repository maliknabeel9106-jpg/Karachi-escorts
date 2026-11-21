import React, { useState } from 'react';
import { modelsData } from '../data/models';
import { ModelProfile } from '../types';
import {
  MapPin,
  MessageSquare,
  Calendar,
  Maximize2,
  CheckCircle2,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  SquareCheck,
  Eye
} from 'lucide-react';
import { ImageLightboxModal } from './ImageLightboxModal';

interface OnPageModelsGalleryProps {
  onSelectModelForBooking: (modelName: string, category: string) => void;
}

export const OnPageModelsGallery: React.FC<OnPageModelsGalleryProps> = ({
  onSelectModelForBooking
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [layoutMode, setLayoutMode] = useState<'spotlight' | 'grid'>('spotlight');
  const [selectedModelIndex, setSelectedModelIndex] = useState<number>(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeLightboxImg, setActiveLightboxImg] = useState('');
  const [activeLightboxTitle, setActiveLightboxTitle] = useState('');

  const categories = [
    { label: 'All (10)', value: 'All' },
    { label: 'VIP & Elite', value: 'VIP' },
    { label: 'Independent', value: 'Independent' },
    { label: 'Slavic / International', value: 'Russian / International' },
    { label: 'Call Girls', value: 'Call Girls' }
  ];

  const filteredModels = modelsData.filter((model) => {
    return activeCategory === 'All' || model.category === activeCategory;
  });

  // Keep index within bounds if filtered
  const safeIndex = selectedModelIndex >= filteredModels.length ? 0 : selectedModelIndex;
  const currentModel = filteredModels[safeIndex] || modelsData[0];

  const handleOpenLightbox = (imgUrl: string, title: string) => {
    setActiveLightboxImg(imgUrl);
    setActiveLightboxTitle(title);
    setLightboxOpen(true);
  };

  const handlePrevModel = () => {
    setSelectedModelIndex((prev) => (prev === 0 ? filteredModels.length - 1 : prev - 1));
  };

  const handleNextModel = () => {
    setSelectedModelIndex((prev) => (prev === filteredModels.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="models" className="relative py-10 sm:py-16 border-t border-[var(--border-subtle)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header with Layout Mode Switch */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b border-[var(--border-subtle)] pb-5">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/10 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-rose-500">
              <Sparkles className="h-3 w-3" />
              <span>100% Real Uploaded Zip Portraits</span>
            </div>
            <h2 className="mt-2 font-cinzel text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[var(--text-primary)]">
              Verified Karachi Companions
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-[var(--text-secondary)]">
              Real unedited portraits • In-person verified • In-call private suites &amp; 5-star hotel outcalls
            </p>
          </div>

          {/* Right Controls: Filter tabs & Layout switcher */}
          <div className="flex flex-wrap items-center gap-2">
            {/* View Mode Toggle */}
            <div className="flex items-center rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-0.5">
              <button
                onClick={() => setLayoutMode('spotlight')}
                className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold transition cursor-pointer ${
                  layoutMode === 'spotlight'
                    ? 'bg-rose-600 text-white shadow-sm'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
                title="Lookbook Spotlight View"
              >
                <Eye className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Spotlight</span>
              </button>
              <button
                onClick={() => setLayoutMode('grid')}
                className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold transition cursor-pointer ${
                  layoutMode === 'grid'
                    ? 'bg-rose-600 text-white shadow-sm'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
                title="Grid Roster View"
              >
                <LayoutGrid className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Grid</span>
              </button>
            </div>

            {/* Category Filter Chips */}
            <div className="flex flex-wrap gap-1">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => {
                    setActiveCategory(cat.value);
                    setSelectedModelIndex(0);
                  }}
                  className={`rounded-lg px-2.5 py-1 text-xs font-semibold uppercase tracking-wider transition cursor-pointer ${
                    activeCategory === cat.value
                      ? 'bg-rose-600 text-white shadow-sm'
                      : 'bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* =========================================================================
            LAYOUT A: SPOTLIGHT LOOKBOOK (Magazine Split Layout)
           ========================================================================= */}
        {layoutMode === 'spotlight' && currentModel && (
          <div className="mt-8">
            <div className="grid gap-8 lg:grid-cols-12 items-center rounded-3xl border border-[var(--border-card)] bg-[var(--bg-card)] p-4 sm:p-8 shadow-xl">
              {/* Left Column: Big Portrait Showcase */}
              <div className="lg:col-span-6 flex flex-col items-center">
                <div className="relative w-full max-w-md aspect-[3/4] overflow-hidden rounded-2xl bg-black shadow-2xl border border-[var(--border-subtle)] group">
                  <img
                    src={currentModel.image}
                    alt={`${currentModel.name} - Real Karachi Escort Model`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                    width="480"
                    height="640"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="rounded-full bg-rose-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow">
                      {currentModel.category}
                    </span>
                    <span className="flex items-center gap-1.5 rounded-full bg-black/70 backdrop-blur-md px-2.5 py-1 text-xs font-bold text-emerald-400 border border-emerald-500/30">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      100% Real Zip Photo
                    </span>
                  </div>

                  {/* Fullscreen Lightbox Trigger Button */}
                  <button
                    onClick={() => handleOpenLightbox(currentModel.image, `${currentModel.name} - ${currentModel.category}`)}
                    className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-black/70 backdrop-blur-md px-3 py-1.5 text-xs font-bold text-white hover:bg-rose-600 transition cursor-pointer shadow-lg"
                  >
                    <Maximize2 className="h-3.5 w-3.5" />
                    <span>View Uncropped</span>
                  </button>

                  {/* Model Name on Portrait for quick scan */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center gap-2">
                      <h3 className="font-cinzel text-xl sm:text-2xl font-bold">{currentModel.name}</h3>
                      <CheckCircle2 className="h-5 w-5 text-emerald-400 fill-emerald-400/20" />
                    </div>
                    <p className="text-xs text-rose-300 font-medium">{currentModel.location}</p>
                  </div>
                </div>

                {/* Next / Prev Controls */}
                <div className="mt-4 flex items-center gap-3">
                  <button
                    onClick={handlePrevModel}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:border-rose-500 transition cursor-pointer"
                    aria-label="Previous Model"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <span className="text-xs font-bold text-[var(--text-secondary)]">
                    {safeIndex + 1} of {filteredModels.length} Real Models
                  </span>
                  <button
                    onClick={handleNextModel}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:border-rose-500 transition cursor-pointer"
                    aria-label="Next Model"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Right Column: Model dossier & instant reservation */}
              <div className="lg:col-span-6 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-rose-500">
                        {currentModel.category} Escort
                      </span>
                      <h3 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
                        {currentModel.name}
                      </h3>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-[var(--text-secondary)]">Hourly Rate</div>
                      <div className="font-cinzel text-xl sm:text-2xl font-black text-rose-600 dark:text-rose-400">
                        {currentModel.hourlyRate}
                      </div>
                    </div>
                  </div>

                  {/* Compact Stats Grid */}
                  <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                    <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-2.5">
                      <div className="text-[10px] uppercase font-bold text-[var(--text-secondary)]">Age</div>
                      <div className="text-sm font-bold text-[var(--text-primary)]">{currentModel.age} Yrs</div>
                    </div>
                    <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-2.5">
                      <div className="text-[10px] uppercase font-bold text-[var(--text-secondary)]">Height</div>
                      <div className="text-sm font-bold text-[var(--text-primary)]">{currentModel.height}</div>
                    </div>
                    <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-2.5">
                      <div className="text-[10px] uppercase font-bold text-[var(--text-secondary)]">Overnight</div>
                      <div className="text-sm font-bold text-rose-600 dark:text-rose-400">{currentModel.overnightRate}</div>
                    </div>
                    <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-2.5">
                      <div className="text-[10px] uppercase font-bold text-[var(--text-secondary)]">Status</div>
                      <div className="text-sm font-bold text-emerald-500">Available Now</div>
                    </div>
                  </div>

                  {/* Location & Languages */}
                  <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-[var(--text-secondary)]">
                    <div className="flex items-center gap-1 font-medium">
                      <MapPin className="h-3.5 w-3.5 text-rose-500" />
                      <span>{currentModel.location}</span>
                    </div>
                    <span className="text-[var(--border-subtle)]">•</span>
                    <div>Languages: {currentModel.languages.join(', ')}</div>
                  </div>

                  {/* Bio */}
                  <p className="mt-4 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {currentModel.bio}
                  </p>

                  {/* Services Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {currentModel.services.map((srv, idx) => (
                      <span
                        key={idx}
                        className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-2.5 py-1 text-[11px] font-medium text-[var(--text-primary)]"
                      >
                        ✓ {srv}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Instant Actions & Booking */}
                <div className="mt-6 pt-5 border-t border-[var(--border-subtle)]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a
                      href={`https://wa.me/923402042663?text=${encodeURIComponent(
                        `Hi Karachi Escorts, I want to book ${currentModel.name} (${currentModel.category}) for an appointment.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow hover:bg-emerald-500 transition"
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span>Book on WhatsApp</span>
                    </a>

                    <button
                      onClick={() => onSelectModelForBooking(currentModel.name, currentModel.category)}
                      className="flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-rose-600 px-4 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow hover:bg-rose-500 transition cursor-pointer"
                    >
                      <Calendar className="h-4 w-4" />
                      <span>Online Reservation</span>
                    </button>
                  </div>
                </div>

                {/* Quick Model Carousel Strip below */}
                <div className="mt-6 pt-4 border-t border-[var(--border-subtle)]">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-2">
                    Select Any Companion to View:
                  </div>
                  <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                    {filteredModels.map((m, idx) => (
                      <button
                        key={m.id}
                        onClick={() => setSelectedModelIndex(idx)}
                        className={`group relative flex-shrink-0 w-16 h-20 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                          safeIndex === idx
                            ? 'border-rose-600 ring-2 ring-rose-500/30 scale-105'
                            : 'border-[var(--border-subtle)] opacity-70 hover:opacity-100'
                        }`}
                        title={m.name}
                      >
                        <img
                          src={m.image}
                          alt={m.name}
                          className="h-full w-full object-cover"
                          loading="lazy"
                          width="64"
                          height="80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        <span className="absolute bottom-0.5 inset-x-0 text-center text-[9px] font-bold text-white truncate px-0.5">
                          {m.name.split(' ')[0]}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            LAYOUT B: GRID ROSTER (Full Visual Directory)
           ========================================================================= */}
        {layoutMode === 'grid' && (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredModels.map((model) => {
              const whatsappText = encodeURIComponent(
                `Hi Karachi Escorts, I want to book ${model.name} (${model.category}) for an appointment.`
              );
              const whatsappUrl = `https://wa.me/923402042663?text=${whatsappText}`;

              return (
                <div
                  key={model.id}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--border-card)] bg-[var(--bg-card)] shadow-lg transition-all hover:border-rose-500/50"
                >
                  {/* Portrait with explicit aspect ratio */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-black">
                    <img
                      src={model.image}
                      alt={`${model.name} - Real Karachi Escort Companion`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                      width="350"
                      height="466"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20 pointer-events-none" />

                    {/* Category & Verified Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="rounded-full bg-rose-600 px-2.5 py-0.5 text-[10px] font-bold uppercase text-white shadow">
                        {model.category}
                      </span>
                      <span className="flex items-center gap-1 rounded-full bg-black/70 px-2 py-0.5 text-[10px] font-semibold text-emerald-400 backdrop-blur-md border border-emerald-500/30">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        Verified
                      </span>
                    </div>

                    {/* Fullscreen Uncropped Lightbox Trigger */}
                    <button
                      onClick={() => handleOpenLightbox(model.image, `${model.name} (${model.category})`)}
                      className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-md hover:bg-rose-600 transition cursor-pointer shadow"
                      title="View uncropped portrait"
                      aria-label={`View photo of ${model.name}`}
                    >
                      <Maximize2 className="h-3.5 w-3.5" />
                    </button>

                    {/* Bottom Image Info */}
                    <div className="absolute bottom-3 left-3 text-white">
                      <div className="flex items-center gap-1.5">
                        <h3 className="font-cinzel text-base font-bold">{model.name}</h3>
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 fill-emerald-400/20" />
                      </div>
                      <p className="text-[11px] text-zinc-300">
                        Age {model.age} • {model.height}
                      </p>
                    </div>
                  </div>

                  {/* Card Details */}
                  <div className="flex flex-1 flex-col justify-between p-4">
                    <div>
                      <div className="flex items-center justify-between text-xs text-[var(--text-secondary)]">
                        <span className="flex items-center gap-1 truncate max-w-[65%]">
                          <MapPin className="h-3.5 w-3.5 text-rose-500 flex-shrink-0" />
                          <span className="truncate">{model.location}</span>
                        </span>
                        <span className="font-bold text-rose-600 dark:text-rose-400 flex-shrink-0">
                          {model.hourlyRate}
                        </span>
                      </div>

                      <p className="mt-2 text-xs text-[var(--text-secondary)] line-clamp-2">
                        {model.bio}
                      </p>
                    </div>

                    {/* Booking Buttons */}
                    <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] grid grid-cols-2 gap-2">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 py-2 text-xs font-bold text-white hover:bg-emerald-500 transition"
                      >
                        <MessageSquare className="h-3.5 w-3.5" />
                        <span>WhatsApp</span>
                      </a>
                      <button
                        onClick={() => onSelectModelForBooking(model.name, model.category)}
                        className="flex items-center justify-center gap-1.5 rounded-xl bg-rose-600 py-2 text-xs font-bold text-white hover:bg-rose-500 transition cursor-pointer"
                      >
                        <Calendar className="h-3.5 w-3.5" />
                        <span>Book</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Lightbox Viewer */}
      {lightboxOpen && (
        <ImageLightboxModal
          isOpen={lightboxOpen}
          images={[activeLightboxImg]}
          currentIndex={0}
          title={activeLightboxTitle}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </section>
  );
};
