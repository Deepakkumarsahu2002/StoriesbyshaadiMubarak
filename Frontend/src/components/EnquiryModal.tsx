import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Calendar, User, Phone, MessageSquare, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { occasionOptions } from '@/data/mockData';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedPackage?: string | null;
}

export const EnquiryModal = ({ isOpen, onClose, preSelectedPackage }: EnquiryModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    occasion: preSelectedPackage || '',
    date: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Generate WhatsApp message
    const whatsappMessage = encodeURIComponent(
      `Hello! I would like to enquire about your photography services.\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Occasion:* ${formData.occasion}\n` +
      `*Date:* ${formData.date}\n` +
      `*Message:* ${formData.message}`
    );

    // Open WhatsApp
    window.open(`https://wa.me/919876543210?text=${whatsappMessage}`, '_blank');

    setIsSubmitting(false);
    onClose();
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      occasion: '',
      date: '',
      message: '',
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 lightbox-overlay flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-card border border-gold/30 w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-sm"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative p-6 border-b border-border">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 border border-gold/50 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-300"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
              <Sparkles className="w-8 h-8 text-gold mb-3" />
              <h2 className="font-heading text-2xl text-foreground">
                Enquire Now
              </h2>
              <p className="text-muted-foreground text-sm mt-1">
                Fill in your details and we'll connect with you on WhatsApp
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              {/* Name */}
              <div>
                <label className="block text-gold text-sm uppercase tracking-widest mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gold/50" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-background border border-border rounded-sm pl-11 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gold text-sm uppercase tracking-widest mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gold/50" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-background border border-border rounded-sm pl-11 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              {/* Occasion */}
              <div>
                <label className="block text-gold text-sm uppercase tracking-widest mb-2">
                  Occasion *
                </label>
                <select
                  required
                  value={formData.occasion}
                  onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                  className="w-full bg-background border border-border rounded-sm px-4 py-3 text-foreground focus:border-gold focus:outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Select occasion</option>
                  {occasionOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="block text-gold text-sm uppercase tracking-widest mb-2">
                  Date of Event *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gold/50" />
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-background border border-border rounded-sm pl-11 pr-4 py-3 text-foreground focus:border-gold focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-gold text-sm uppercase tracking-widest mb-2">
                  Special Requests
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gold/50" />
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={3}
                    className="w-full bg-background border border-border rounded-sm pl-11 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your vision..."
                  />
                </div>
              </div>

              <Button
                type="submit"
                variant="gold"
                className="w-full gap-2"
                disabled={isSubmitting}
              >
                <Send size={18} />
                {isSubmitting ? 'Redirecting...' : 'Send via WhatsApp'}
              </Button>

              <p className="text-muted-foreground text-xs text-center">
                By submitting, you'll be redirected to WhatsApp to complete your enquiry.
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
