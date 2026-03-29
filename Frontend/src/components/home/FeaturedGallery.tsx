import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import API from "@/services/api";
import { Link } from "react-router-dom";

interface GalleryItem {
  _id: string;
  title: string;
  category: string;
  imageUrl: string;
}

const FeaturedGallery = () => {
  const [images, setImages] = useState<GalleryItem[]>([]);

  useEffect(() => {
    const loadFeatured = async () => {
      try {
        const res = await API.get("/gallery");
        setImages(res.data.slice(0, 6)); // only 6 featured images
      } catch (err) {
        console.error("Failed to load featured gallery", err);
      }
    };

    loadFeatured();
  }, []);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">

        <div className="text-center mb-12">
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">
            Featured Works
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
            Our Creations
          </h2>
          <div className="gold-divider w-24 mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={img._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="overflow-hidden luxury-card"
            >
              <img
                src={img.imageUrl}
                alt={img.title}
                className="w-full h-72 object-cover hover:scale-110 transition-transform duration-700"
              />
              <div className="p-4">
                <p className="text-gold text-xs uppercase tracking-widest">
                  {img.category}
                </p>
                <h3 className="font-heading text-lg text-foreground">
                  {img.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/gallery"
            className="inline-block border border-gold text-gold px-8 py-3 hover:bg-gold hover:text-black transition"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGallery;
