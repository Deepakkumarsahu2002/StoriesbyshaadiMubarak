import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import hero1 from '@/assets/hero-1.jpg';
import hero2 from '@/assets/hero-2.jpg';
import hero3 from '@/assets/hero-3.jpg';

const slides = [
  {
    id: 1,
    image: hero1,
    title: 'Timeless Love Stories',
    subtitle: 'Captured Forever',
    description: 'Where every frame tells a story of eternal love',
  },
  {
    id: 2,
    image: hero2,
    title: 'Elegant Moments',
    subtitle: 'Crafted with Care',
    description: 'Luxury wedding photography for the discerning couple',
  },
  {
    id: 3,
    image: hero3,
    title: 'Your Perfect Day',
    subtitle: 'Our Perfect Vision',
    description: 'Creating memories that last a lifetime',
  },
];

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.1,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 50, damping: 20 },
        opacity: { duration: 0.8 },
        scale: { duration: 1.2 },
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: 'spring', stiffness: 50, damping: 20 },
        opacity: { duration: 0.5 },
      },
    }),
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      {/* Slides */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            <div className="absolute inset-0 hero-overlay" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-center text-center px-4 sm:px-6">
            <div className="max-w-4xl">
              
              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-gold uppercase tracking-[0.2em] text-xs md:text-base mb-3"
              >
                {slides[currentSlide].subtitle}
              </motion.p>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-foreground mb-5 leading-tight"
              >
                {slides[currentSlide].title}
              </motion.h1>

              {/* Line */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="w-20 md:w-24 h-[1px] bg-gold mx-auto mb-5"
              />

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="text-foreground/80 text-base md:text-xl mb-6 md:mb-10"
              >
                {slides[currentSlide].description}
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
              >
                <Button
                  variant="hero"
                  asChild
                  className="w-auto px-6 py-2 text-sm"
                >
                  <Link to="/gallery">View Portfolio</Link>
                </Button>

                <Button
                  variant="hero-outline"
                  asChild
                  className="w-auto px-6 py-2 text-sm"
                >
                  <Link to="/contact">Book a Session</Link>
                </Button>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Arrows (Hidden on Mobile) */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 border border-gold/50 rounded-full items-center justify-center text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-300 z-10"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 border border-gold/50 rounded-full items-center justify-center text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-300 z-10"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
            className={`h-[2px] transition-all duration-500 ${
              index === currentSlide
                ? 'w-10 md:w-12 bg-gold'
                : 'w-5 md:w-6 bg-foreground/30'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="hidden md:block absolute bottom-24 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-gold rounded-full"
          />
        </motion.div>
      </motion.div>

    </section>
  );
};