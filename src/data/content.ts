import { ServiceCategory, FaqItem, KarachiLocation, PricingTier } from '../types';

export const siteConfig = {
  name: 'Karachi Escorts',
  tagline: 'VIP Escort Services in Karachi • 24/7 Discreet Booking',
  phone: '+92 307 4277717',
  phoneDisplay: '0307 4277717',
  email: 'info@karachiescorts.org',
  domain: 'karachiescorts.org',
  canonicalUrl: 'https://karachiescorts.org/',
  address: 'Suite 12, Main Shahrah-e-Faisal, Karachi, Pakistan',
  whatsappUrl:
    'https://wa.me/923074277717?text=Hi%20Karachi%20Escorts%2C%20I%20want%20to%20book%20a%20VIP%20Companion',
  hours: '24/7 Everyday'
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'vip-escorts',
    title: 'VIP & Elite',
    subtitle: 'High-Society Companions',
    description: 'Polished models for executive dinners, galas, and luxury hotel visits.',
    linkText: 'View VIP Models',
    badge: 'Signature',
    image: '/models/real-1.jpeg'
  },
  {
    id: 'independent-escorts',
    title: 'Independent',
    subtitle: 'Direct Private Hosting',
    description: 'Direct bookings with independent companions in private DHA suites.',
    linkText: 'View Independent',
    badge: 'Direct',
    image: '/models/real-3.jpeg'
  },
  {
    id: 'russian-escorts',
    title: 'International',
    subtitle: 'European Glamour',
    description: 'Statuesque Slavic and European beauties for upscale hotel outcalls.',
    linkText: 'View International',
    badge: 'Exotic',
    image: '/models/real-2.jpeg'
  },
  {
    id: 'call-girls',
    title: 'Call Girls',
    subtitle: '15-Min Rapid Dispatch',
    description: 'Fast, discreet dispatch across DHA, Clifton, and central Karachi.',
    linkText: 'View Call Girls',
    badge: 'Fast',
    image: '/models/real-4.jpeg'
  }
];

export const pricingTiers: PricingTier[] = [
  {
    type: '1 Hour Short Date',
    rates: 'PKR 45,000 – 75,000',
    duration: '1 Hour',
    includes: 'Private in-call suite or 5-star hotel outcall with zero advance'
  },
  {
    type: '2 Hours Dinner & Romance',
    rates: 'PKR 85,000 – 140,000',
    duration: '2 Hours',
    includes: 'Dinner accompaniment + relaxed intimate companionship',
    popular: true
  },
  {
    type: 'Overnight VIP Stay',
    rates: 'PKR 180,000 – 350,000',
    duration: '10 PM – 10 AM',
    includes: 'Full night exclusive companionship with complimentary breakfast'
  }
];

export const faqs: FaqItem[] = [
  {
    question: 'Are the photos 100% authentic?',
    answer:
      'Yes, 100%. Every single photo in our portfolio was taken in person. The companion who arrives at your suite or door matches the portrait exactly.',
    category: 'Verification'
  },
  {
    question: 'Is any advance deposit required?',
    answer:
      'No upfront deposit. We respect client privacy and protect against online advance payment scams. You inspect and pay in cash upon arrival.',
    category: 'Payment'
  },
  {
    question: 'How fast can a companion arrive at my hotel?',
    answer:
      'Outcalls to Karachi Marriott, Pearl Continental (PC), Mövenpick, Ramada, and Avari Towers arrive within 20 to 30 minutes of WhatsApp confirmation.',
    category: 'Outcall'
  },
  {
    question: 'Where are the discreet in-call suites located?',
    answer:
      'Private, secure in-call residences are located in gated sectors of DHA Phase 5, Phase 6, Phase 8, and Clifton with private parking and elevator access.',
    category: 'In-Call'
  }
];

export const karachiLocations: KarachiLocation[] = [
  {
    id: 'dha',
    name: 'DHA Karachi',
    type: 'Phases 1–8',
    dispatchTime: '15–20 Mins',
    description: 'Executive in-call suites and outcalls in Phase 5, 6, and 8.',
    hotspots: ['Phase 5 & 6', 'Phase 8 Vistas', 'Defence Clubs'],
    popularFor: 'Private Suites'
  },
  {
    id: 'clifton',
    name: 'Clifton',
    type: 'Blocks 1–9',
    dispatchTime: '15–20 Mins',
    description: 'Coastal residences, penthouses, and rapid hotel links.',
    hotspots: ['Sea View', 'Boat Basin', 'Bath Island'],
    popularFor: 'VIP Outcalls'
  },
  {
    id: 'five-star-hotels',
    name: '5-Star Hotels',
    type: 'Hotel Outcall',
    dispatchTime: '20 Mins',
    description: 'Marriott, Pearl Continental, Mövenpick, Ramada, Avari Towers.',
    hotspots: ['Marriott', 'PC Hotel', 'Mövenpick'],
    popularFor: 'Hotel Suites'
  }
];