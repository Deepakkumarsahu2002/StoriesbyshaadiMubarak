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
    name: 'Pre-Wedding Package',
    description: 'Capture your love story before the big day with stunning pre-wedding shoots at exotic locations.',
    includes: [
      '6-8 Hours of Shooting',
      '100+ Edited Photos',
      '10 Sheets NTB Luxury Album',
      'Cinematic Song, Teaser and Reel',
      'Location Consultation',
    ],
    startingPrice: '₹30,000',
  },
  {
    id: '2',
    name: 'The Wedding Package',
    description: 'Comprehensive wedding day coverage capturing every precious moment of your celebration.',
    includes: [
      'All Ritual Coverage',
      '200+ Edited Photos ',
      'Premium Non-Tearable Album',
      'Cinematic Highlights and Teasers',
      'Reels of Each Event 30-40 sec.',
      'Full Cinematic Wedding Film',


    ],
    startingPrice: '₹80,000',
    popular: true,
  },
  {
    id: '3',
    name: 'Birthday & Events',
    description: 'Make every milestone memorable with professional event photography.',
    includes: [
      '5-6 Hours Coverage',
      '100+ Edited Photos',
      '15 Sheet NTB Album',
      'Event Highlight Video',
      'Full Event Cinematic Video',
    ],
    startingPrice: '₹40,000',
  },
  {
    id: '4',
    name: 'Engagement & Couple Shoots',
    description: 'Intimate and romantic couple sessions that tell your unique love story.',
    includes: [
      '6-8 Hours Session',
      '100+ Edited Photos',
      '10 Sheet NTB Luxury Album',
      'Video Highlight',
      'Cinematic Engagement Film',
    ],
    startingPrice: '₹30,000',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Aarav & Sneha',
    occasion: 'Wedding',
    quote: 'Every moment of our wedding was captured beautifully. Looking at the photos feels like reliving the day again!',
    rating: 5,
  },
  {
    id: '2',
    name: 'Kalyani & Milan',
    occasion: 'Pre-Wedding Shoot',
    quote: 'The pre-wedding shoot in Udaipur was beyond our dreams. The team made us feel like movie stars!',
    rating: 5,
  },
  {
    id: '3',
    name: 'Rohit & Ananya',
    occasion: 'Engagement',
    quote: 'Our engagement pictures turned out so elegant and natural. The attention to detail was amazing!',
    rating: 5,
  },
  {
    id: '4',
    name: 'Vihaan Sharma',
    occasion: 'Birthday Celebration',
    quote: 'The birthday shoot was vibrant and full of life. Every candid moment was captured perfectly!',
    rating: 4,
  },
  {
    id: '5',
    name: 'Neha & Karan',
    occasion: 'Wedding',
    quote: 'From haldi to reception, every function was documented so beautifully. Highly recommended!',
    rating: 5,
  },
  {
    id: '6',
    name: 'Ishita & Dev',
    occasion: 'Pre-Wedding Shoot',
    quote: 'Creative concepts and stunning locations made our pre-wedding shoot truly magical.',
    rating: 5,
  },
  {
    id: '7',
    name: 'Aditya & Pooja',
    occasion: 'Engagement',
    quote: 'The team captured our chemistry so naturally. The photos feel real and emotional.',
    rating: 5,
  },
  {
    id: '8',
    name: 'Krishna Patel',
    occasion: 'Birthday Party',
    quote: 'Loved the candid shots! The photographer didn’t miss a single important moment.',
    rating: 4,
  },
  {
    id: '9',
    name: 'Trisha',
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
