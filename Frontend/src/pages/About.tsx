import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Award, Camera, Heart, Users, Trophy, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import photographerImg from '@/assets/photographer.jpg';
import hero2 from '@/assets/hero-2.jpg';

const achievements = [
  { icon: Camera, value: '800+', label: 'Weddings Shot' },
  { icon: Users, value: '700+', label: 'Happy Couples' },
  { icon: Calendar, value: '9+', label: 'Years Experience' },
  { icon: Trophy, value: '3+', label: 'Awards Won' },
];

const awards = [
  'Best Wedding Photographer 2023 - Wedding Sutra',
  'Excellence in Photography - WPPI 2022',
  'Masters Award - National Wedding Photography',
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${hero2})` }}
        >
          <div className="absolute inset-0 bg-background/80" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center px-6"
        >
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Our Story</p>
          <h1 className="font-heading text-5xl md:text-7xl text-foreground mb-4">
            About Us
          </h1>
          <div className="gold-divider w-24 mx-auto" />
        </motion.div>
      </section>

      {/* Who We Are — Collective Intro */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Who We Are</p>
              <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
                Stories By ShaadiMubarak
              </h2>
              <div className="gold-divider w-24 mx-auto mb-8" />
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Stories By Shaadi Mubarak is an elite collective team of 12 highly skilled visual
                artists, led by the young and visionary cinematographer and candid photographer,
                <span className="text-foreground font-medium"> Sidhant Kumar Bisoyi</span>. Renowned
                for his refined aesthetic and storytelling finesse, Sidhant has cultivated a team
                that redefines wedding documentation with elegance and sophistication.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Rooted in a profound passion for photography, our work transcends traditional
                coverage — transforming fleeting moments into timeless works of art. We specialize
                in crafting visually rich narratives that embody emotion, grace, and authenticity,
                ensuring every story we tell is both distinctive and unforgettable.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-jet">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src={photographerImg}
                alt="Sidhant Kumar Bisoyi — Lead Photographer"
                className="w-full max-w-lg mx-auto rounded-sm"
              />
              <div className="absolute -bottom-6 -right-6 border border-gold/30 w-full h-full rounded-sm -z-10" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Meet the Artist</p>
              <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
                Sidhant Kumar Bisoyi
              </h2>
              <div className="gold-divider w-24 mb-8" />

              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                A young and visionary cinematographer and candid photographer, Sidhant leads the
                Stories By Shaadi Mubarak collective with a sharp eye for beauty and an instinct
                for authentic storytelling. His refined aesthetic sensibility sets the creative
                standard for every project the studio undertakes.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                With an unwavering commitment to excellence, Sidhant and his team approach each
                celebration as a bespoke experience. From intimate glances to grand, opulent
                festivities, every detail is captured with precision, creativity, and a cinematic
                touch that elevates wedding photography into fine art.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                At Stories By Shaadi Mubarak, we don't just document weddings — we curate
                legacies, preserving your most cherished moments in their most exquisite form.
              </p>

              <Button variant="gold-outline" asChild>
                <Link to="/contact">Work With Us</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center luxury-card p-8"
              >
                <stat.icon className="w-10 h-10 text-gold mx-auto mb-4" />
                <p className="text-gold font-heading text-4xl mb-2">{stat.value}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-24 bg-jet">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Recognition</p>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
              Awards & Achievements
            </h2>
            <div className="gold-divider w-24 mx-auto" />
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {awards.map((award, index) => (
              <motion.div
                key={award}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 p-6 border-b border-border last:border-0"
              >
                <Award className="w-8 h-8 text-gold flex-shrink-0" />
                <p className="text-foreground">{award}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Our Philosophy</p>
              <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
                Capturing Emotions, Creating Art
              </h2>
              <div className="gold-divider w-24 mx-auto mb-8" />

              <p className="text-muted-foreground text-xl leading-relaxed italic font-heading">
                "Every wedding tells a unique love story. Our role is to be invisible observers,
                capturing genuine emotions and creating images that transport you back to those
                precious moments, years from now."
              </p>
              <p className="text-gold mt-4 font-heading">— The ShaadiMubarak Team</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-jet">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Heart className="w-12 h-12 text-gold mx-auto mb-6" />
            <h2 className="font-heading text-4xl text-foreground mb-6">
              Ready to Tell Your Story?
            </h2>
            <Button variant="hero" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;