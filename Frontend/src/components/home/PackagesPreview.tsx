import { motion } from 'framer-motion';
import { ArrowRight, Check, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { packages } from '@/data/mockData';

export const PackagesPreview = () => {
  // Show only first 3 packages
  const displayPackages = packages.slice(0, 3);

  return (
    <section className="py-24 bg-jet">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Our Packages</p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
            Investment in Memories
          </h2>
          <div className="gold-divider w-24 mx-auto" />
        </motion.div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative luxury-card p-8 flex flex-col"
            >
              {/* Package Content */}
              <div className="text-center mb-6">
                <h3 className="font-heading text-2xl text-foreground mb-2">
                  {pkg.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {pkg.description}
                </p>
                <p className="text-gold font-heading text-3xl">
                  {pkg.startingPrice}
                  <span className="text-muted-foreground text-sm font-body ml-1">onwards</span>
                </p>
              </div>

              <div className="gold-divider w-full mb-6" />

              {/* Includes */}
              <ul className="space-y-3 mb-8 flex-1">
                {pkg.includes.slice(0, 4).map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={16} className="text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </li>
                ))}
                {pkg.includes.length > 4 && (
                  <li className="text-muted-foreground text-sm text-center">
                    +{pkg.includes.length - 4} more
                  </li>
                )}
              </ul>

              <Button
                variant="gold-outline"
                className="w-full"
                asChild
              >
                <Link to="/contact">Enquire Now</Link>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button variant="gold-outline" asChild>
            <Link to="/packages" className="gap-2">
              View All Packages
              <ArrowRight size={18} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
