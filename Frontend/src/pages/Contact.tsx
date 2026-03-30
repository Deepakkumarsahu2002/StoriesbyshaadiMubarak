import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { EnquiryModal } from '@/components/EnquiryModal';
import hero2 from '@/assets/hero-2.jpg';

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${hero2})` }}>
          <div className="absolute inset-0 bg-background/80" />
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative text-center px-6">
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Get in Touch</p>
          <h1 className="font-heading text-5xl md:text-7xl text-foreground mb-4">Contact Us</h1>
          <div className="gold-divider w-24 mx-auto" />
        </motion.div>
      </section>

      {/* Contact Info */}
      <section className="py-24 bg-jet">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Phone, label: 'Phone', value: '+91 7504595625', href: 'tel:+917504595625' },
              { icon: Mail, label: 'Email', value: 'sidhant750@gmail.com', href: 'mailto:sidhant750@gmail.com' },
              { icon: MapPin, label: 'Studio', value: 'Gandhi Nagar 5th Lane, Brahmapur, Odisha 760001'},
            ].map((item, i) => (
              <motion.a key={item.label} href={item.href} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="luxury-card p-8 text-center group">
                <item.icon className="w-10 h-10 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-gold text-sm uppercase tracking-widest mb-2">{item.label}</p>
                <p className="text-foreground">{item.value}</p>
              </motion.a>
            ))}
          </div>

          <div className="text-center">
            <h2 className="font-heading text-3xl text-foreground mb-6">Ready to Book?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" onClick={() => setIsModalOpen(true)}><Send className="mr-2" size={18} />Send Enquiry</Button>
              <Button variant="hero-outline" asChild>
                <a href="https://wa.me/917504595625?text=Hello, I would like to enquire about your photography services." target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2" size={18} />WhatsApp Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] bg-muted flex items-center justify-center">
  <iframe
    src="https://www.google.com/maps?q=19.3067363,84.7894499&z=15&output=embed"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    loading="lazy"
  ></iframe>
</section>

      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Layout>
  );
};

export default Contact;
