import { motion } from 'framer-motion';
import { ArrowRight, Award, Camera, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import photographerImg from '@/assets/photographer.jpg';

const stats = [
  { icon: Camera, value: '500+', label: 'Weddings Captured' },
  { icon: Award, value: '15+', label: 'Years Experience' },
  { icon: Heart, value: '1000+', label: 'Happy Couples' },
];

export const AboutPreview = () => {
  return (
    <section className="py-24 bg-jet">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <img
                src={photographerImg}
                alt="Professional Photographer"
                className="w-full max-w-md mx-auto lg:mx-0 rounded-sm"
              />
              {/* Decorative Frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border border-gold/30 rounded-sm -z-10" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-gold/50 rounded-sm" />
            </div>
            
            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 lg:right-12 bg-card border border-gold/50 px-6 py-4 rounded-sm shadow-lg"
            >
              <p className="text-gold font-heading text-3xl">15+</p>
              <p className="text-muted-foreground text-sm">Years of Excellence</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">About Us</p>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              Crafting Visual Poetry Since 2009
            </h2>
            <div className="gold-divider w-24 mb-8" />
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We are storytellers at heart, dedicated to capturing the essence of your most 
              precious moments. With an eye for detail and a passion for perfection, we 
              transform fleeting moments into timeless treasures.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our approach combines artistic vision with technical excellence, ensuring every 
              photograph reflects the unique beauty and emotion of your special day. From 
              intimate ceremonies to grand celebrations, we bring the same commitment to 
              creating stunning visual narratives.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-6 h-6 text-gold mx-auto mb-2" />
                  <p className="text-gold font-heading text-2xl">{stat.value}</p>
                  <p className="text-muted-foreground text-xs">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <Button variant="gold-outline" asChild>
              <Link to="/about" className="gap-2">
                Learn More About Us
                <ArrowRight size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
