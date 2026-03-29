// Mock data for the wedding photography portfolio

export interface GalleryImage {
  id: string;
  src: string;
  category: 'wedding' | 'pre-wedding' | 'engagement' | 'candid' | 'traditional' | 'reception';
  title: string;
  alt: string;
}

export interface Video {
  id: string;
  title: string;
  youtubeId: string;
  thumbnail: string;
}

export interface Package {
  id: string;
  name: string;
  description: string;
  includes: string[];
  startingPrice: string;
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  occasion: string;
  quote: string;
  rating: number;
}

export const categories = [
  { id: 'wedding', label: 'Wedding' },
  { id: 'pre-wedding', label: 'Pre-Wedding' },
  { id: 'engagement', label: 'Engagement' },
  { id: 'candid', label: 'Candid' },
  { id: 'traditional', label: 'Traditional' },
  { id: 'reception', label: 'Reception' },
] as const;

export const galleryImages: GalleryImage[] = [
  { id: '1', src: '/gallery/wedding-1.jpg', category: 'wedding', title: 'Sacred Vows', alt: 'Wedding ceremony moment' },
  { id: '2', src: '/gallery/prewedding-1.jpg', category: 'pre-wedding', title: 'Mountain Romance', alt: 'Pre-wedding shoot in mountains' },
  { id: '3', src: '/gallery/engagement-1.jpg', category: 'engagement', title: 'The Promise', alt: 'Engagement ring moment' },
  { id: '4', src: '/gallery/candid-1.jpg', category: 'candid', title: 'Pure Joy', alt: 'Candid bride laughing' },
  { id: '5', src: '/gallery/traditional-1.jpg', category: 'traditional', title: 'Sacred Traditions', alt: 'Traditional wedding ceremony' },
  { id: '6', src: '/gallery/reception-1.jpg', category: 'reception', title: 'Grand Celebration', alt: 'Wedding reception' },
];

export const videos: Video[] = [
  {
    id: '1',
    title: 'Sarah & Michael - A Love Story',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
  },
  {
    id: '2',
    title: 'The Royal Wedding Film',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
  },
  {
    id: '3',
    title: 'Priya & Rahul - Eternal Bond',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
  },
];

export const packages: Package[] = [
  {
    id: '1',
    name: 'Pre-Wedding Photography',
    description: 'Capture your love story before the big day with stunning pre-wedding shoots at exotic locations.',
    includes: [
      '4-6 hours of photography',
      '100+ edited photos',
      'Multiple outfit changes',
      'Location consultation',
      'Online gallery access',
    ],
    startingPrice: '₹35,000',
  },
  {
    id: '2',
    name: 'Wedding Photography',
    description: 'Comprehensive wedding day coverage capturing every precious moment of your celebration.',
    includes: [
      'Full day coverage (12+ hours)',
      '500+ edited photos',
      'Premium photo album',
      'Drone photography',
      'Same-day photo preview',
      'Online gallery forever',
    ],
    startingPrice: '₹1,50,000',
    popular: true,
  },
  {
    id: '3',
    name: 'Birthday & Events',
    description: 'Make every milestone memorable with professional event photography.',
    includes: [
      '3-4 hours coverage',
      '150+ edited photos',
      'Event highlight video',
      'Print-ready files',
      'Quick delivery',
    ],
    startingPrice: '₹25,000',
  },
  {
    id: '4',
    name: 'Engagement & Couple Shoots',
    description: 'Intimate and romantic couple sessions that tell your unique love story.',
    includes: [
      '2-3 hours session',
      '75+ edited photos',
      'Styled shoot guidance',
      'Multiple locations',
      'Personalized mood board',
    ],
    startingPrice: '₹20,000',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Priya & Arjun Sharma',
    occasion: 'Wedding Photography',
    quote: 'Absolutely magical! They captured every emotion, every tear of joy, every laugh. Our wedding album is our most treasured possession.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Sarah & Michael Chen',
    occasion: 'Pre-Wedding Shoot',
    quote: 'The pre-wedding shoot in Udaipur was beyond our dreams. The team made us feel like movie stars!',
    rating: 5,
  },
  {
    id: '3',
    name: 'Ananya Krishnan',
    occasion: 'Birthday Event',
    quote: 'Professional, creative, and incredibly talented. They made my daughter\'s first birthday truly unforgettable.',
    rating: 5,
  },
];

export const occasionOptions = [
  'Pre-Wedding',
  'Wedding',
  'Birthday',
  'Engagement',
  'Anniversary',
  'Maternity',
  'Others',
];
