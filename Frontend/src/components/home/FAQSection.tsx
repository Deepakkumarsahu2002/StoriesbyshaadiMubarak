import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'How far in advance should we book?',
    answer:
      'We recommend booking at least 6–8 months in advance, especially during peak wedding season (November to February). Popular dates fill up quickly, so the sooner you reach out, the better we can plan your coverage together.',
  },
  {
    question: 'What areas do you cover?',
    answer:
      'We are based in Odisha and travel Pan-India for weddings. We have covered weddings across Bhubaneswar, Kolkata, Hyderabad, Mumbai, Delhi, and many destination weddings. Travel charges may apply for outstation bookings.',
  },
  {
    question: 'When will we receive our photos and videos?',
    answer:
      'Edited photos are typically delivered within 4–6 weeks after the wedding. Cinematic highlight films and full videos take 8–10 weeks. We deliver everything through a private, password-protected online gallery link.',
  },
  {
    question: 'Do you offer customised packages?',
    answer:
      'Absolutely. Every wedding is unique, and so are our packages. Reach out to us with your requirements — number of events, guest count, and duration — and we will craft a tailored package that fits your vision and budget.',
  },
  {
    question: 'Are your prices flexible or negotiable?',
    answer:
      'We understand that every couple has a different budget, and we always try our best to work within it. While our packages are priced to reflect the quality and effort we put in, we are open to honest conversations about what fits your budget — reach out and let us see what we can do for you.',
  },
  {
    question: 'Can we build a custom package based on our specific needs?',
    answer:
      'Absolutely. If our standard packages do not perfectly match your requirements, we can build one from scratch. Just tell us the events you want covered, the number of days, whether you need photos, video, or both, and any add-ons like drone coverage or albums — and we will put together a package just for you.',
  },
  {
    question: 'Is a deposit required to confirm the booking?',
    answer:
      'Yes, a booking advance is required to secure your date on our calendar. The remaining balance is settled closer to the wedding date. All payment terms are discussed transparently before signing the agreement — no hidden charges.',
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

const FAQItem = ({ question, answer, isOpen, onClick, index }: FAQItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="border-b border-gold/20"
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-heading text-lg text-foreground group-hover:text-gold transition-colors duration-300">
          {question}
        </span>
        <span className="flex-shrink-0 w-8 h-8 border border-gold/50 rounded-full flex items-center justify-center text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-primary-foreground">
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-muted-foreground leading-relaxed pb-5 pr-12">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">FAQs</p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
            Have Questions?
          </h2>
          <div className="gold-divider w-24 mx-auto" />
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              index={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
