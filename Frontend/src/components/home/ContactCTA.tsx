import { motion } from 'framer-motion';
import { Calendar, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const ContactCTA = () => {
  return (
    <section className="py-24 bg-jet relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_hsl(45_80%_55%_/_0.2),_transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_hsl(45_80%_55%_/_0.2),_transparent_50%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">
              Ready to Create Memories?
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              Let's Capture Your <br className="hidden md:block" />
              <span className="text-gold-gradient">Special Moments</span>
            </h2>
            <div className="gold-divider w-24 mx-auto mb-8" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
              From intimate ceremonies to grand celebrations, we're here to tell your unique 
              love story. Book a consultation and let's discuss your vision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" asChild>
                <Link to="/contact" className="gap-2">
                  <Calendar size={20} />
                  Book Consultation
                </Link>
              </Button>
              <Button variant="hero-outline" asChild>
                <a
                  href="https://wa.me/917504595625?text=Hello, I would like to enquire about your photography services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
