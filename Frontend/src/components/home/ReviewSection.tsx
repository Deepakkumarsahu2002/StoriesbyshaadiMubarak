import { motion } from "framer-motion";
import { Star } from "lucide-react";
import qrImage from "@/assets/qr.png"; // ✅ alias import

export const ReviewSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10 text-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">
            Google Reviews
          </p>

          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
            Loved Our Work?
          </h2>

          <div className="gold-divider w-24 mx-auto mb-6" />

          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-gold text-gold" />
            ))}
          </div>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Your feedback helps us grow. If you enjoyed our work,
            please take a moment to share your experience on Google.
          </p>
        </motion.div>

        {/* QR Code */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-10"
        >
          <div className="bg-white p-4 rounded-2xl shadow-2xl hover:scale-105 transition duration-300">
            <img
              src={qrImage}
              alt="Google Review QR"
              className="w-48 h-48 md:w-56 md:h-56 object-contain"
            />
          </div>
        </motion.div>

        {/* Button */}
        <motion.a
          href="https://app.reviewus.in/rate-us?businessId=5589" // 🔁 replace
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-gold text-primary-foreground px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-gold/30 transition"
        >
          Write a Review
        </motion.a>

      </div>
    </section>
  );
};