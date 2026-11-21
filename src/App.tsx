import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServiceFormats } from './components/ServiceFormats';
import { OnPageModelsGallery } from './components/OnPageModelsGallery';
import { PricingCalculator } from './components/PricingCalculator';
import { LocationsCoverage } from './components/LocationsCoverage';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BookingModal } from './components/BookingModal';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('VIP & Elite Escorts');
  const [selectedModel, setSelectedModel] = useState('');

  const handleOpenBooking = (category?: string, model?: string) => {
    if (category) setSelectedCategory(category);
    if (model) setSelectedModel(model);
    setIsBookingOpen(true);
  };

  const handleSelectModelForBooking = (modelName: string, category: string) => {
    setSelectedModel(modelName);
    setSelectedCategory(category);
    setIsBookingOpen(true);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--bg-canvas)] text-[var(--text-primary)] antialiased selection:bg-rose-600 selection:text-white transition-colors duration-200 pb-16 sm:pb-0">
        {/* 1. Sleek Navigation */}
        <Navbar onOpenBooking={() => handleOpenBooking()} />

        <main>
          {/* 2. Revamped Editorial Hero */}
          <Hero onOpenBooking={() => handleOpenBooking()} />

          {/* 3. 4-Pillar Visual Guarantee Bar */}
          <ServiceFormats />

          {/* 4. Dual-Layout Real Companions Showcase (Spotlight & Grid) */}
          <OnPageModelsGallery
            onSelectModelForBooking={handleSelectModelForBooking}
          />

          {/* 5. Streamlined Rates & Packages */}
          <PricingCalculator onOpenBooking={(cat) => handleOpenBooking(cat)} />

          {/* 6. Compact Service Areas (DHA, Clifton, Hotels) */}
          <LocationsCoverage />

          {/* 7. Essential FAQ */}
          <FaqSection />
        </main>

        {/* 8. Minimalist Luxury Footer */}
        <Footer onOpenBooking={() => handleOpenBooking()} />

        {/* 9. Floating WhatsApp & Mobile Action Bar */}
        <FloatingWhatsApp />

        {/* 10. Booking Modal */}
        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          preselectedCategory={selectedCategory}
          preselectedModel={selectedModel}
        />
      </div>
    </ThemeProvider>
  );
}
