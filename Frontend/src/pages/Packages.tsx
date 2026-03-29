import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Crown, MessageCircle } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { packages, occasionOptions } from '@/data/mockData';
import { EnquiryModal } from '@/components/EnquiryModal';
import hero1 from '@/assets/hero-1.jpg';

const Packages = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openEnquiry = (packageName?: string) => {
    setSelectedPackage(packageName || null);
    setIsModalOpen(true);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${hero1})` }}
        >
          <div className="absolute inset-0 bg-background/80" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center px-6"
        >
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Investment</p>
          <h1 className="font-heading text-5xl md:text-7xl text-foreground mb-4">
            Our Packages
          </h1>
          <div className="gold-divider w-24 mx-auto" />
        </motion.div>
      </section>

      {/* Packages Grid */}
      <section className="py-24 bg-jet">
        <div className="container mx-auto px-6">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              Each package is thoughtfully designed to capture the essence of your 
              special moments. We offer flexible solutions tailored to your needs and 
              vision. All packages can be customized upon request.
            </p>
          </motion.div>

          {/* Packages */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative luxury-card p-8"
              >

                {/* Package Content */}
                <div className="text-center mb-8">
                  <h3 className="font-heading text-3xl text-foreground mb-4">
                    {pkg.name}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {pkg.description}
                  </p>
                  <p className="text-gold font-heading text-4xl">
                    {pkg.startingPrice}
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">onwards</p>
                </div>

                <div className="gold-divider w-full mb-8" />

                {/* What's Included */}
                <div className="mb-8">
                  <h4 className="text-gold text-sm uppercase tracking-widest mb-4">
                    What's Included
                  </h4>
                  <ul className="space-y-3">
                    {pkg.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check size={18} className="text-gold mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  variant="gold-outline"
                  className="w-full"
                  onClick={() => openEnquiry(pkg.name)}
                >
                  Enquire Now
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Package CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-4xl text-foreground mb-6">
              Need a Custom Package?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We understand that every event is unique. Let's create a bespoke 
              package that perfectly fits your requirements and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" onClick={() => openEnquiry()}>
                Get Custom Quote
              </Button>
              <Button variant="hero-outline" asChild>
                <a
                  href="https://wa.me/919876543210?text=Hi, I'm interested in a custom photography package."
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
      </section>

      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preSelectedPackage={selectedPackage}
      />
    </Layout>
  );
};

export default Packages;
