import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import API from "@/services/api";
import hero3 from "@/assets/hero-3.jpg";

interface GalleryItem {
  _id: string;
  title: string;
  category: string;
  imageUrl: string;
}

interface VideoItem {
  _id: string;
  title: string;
  youtubeId: string;
}

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const [images, setImages] = useState<GalleryItem[]>([]);
  const [videos, setVideos] = useState<VideoItem[]>([]);

  // 🔹 Load gallery images & videos
  useEffect(() => {
    const loadImages = async () => {
      try {
        const res = await API.get("/gallery");
        setImages(res.data);
      } catch (err) {
        console.error("Failed to load gallery", err);
      }
    };

    const loadVideos = async () => {
      try {
        const res = await API.get("/videos");
        setVideos(res.data);
      } catch (err) {
        console.error("Failed to load videos", err);
      }
    };

    loadImages();
    loadVideos();
  }, []);

  // Categories auto-generated from DB
  const categories = [
    "all",
    ...Array.from(new Set(images.map((img) => img.category)))
  ];

  const filteredImages =
    activeCategory === "all"
      ? images
      : images.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => setLightboxImage(index);
  const closeLightbox = () => setLightboxImage(null);

  const nextImage = () => {
    if (lightboxImage !== null) {
      setLightboxImage((lightboxImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (lightboxImage !== null) {
      setLightboxImage(
        (lightboxImage - 1 + filteredImages.length) %
          filteredImages.length
      );
    }
  };

  return (
    <Layout>
      {/* HERO */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${hero3})` }}
        >
          <div className="absolute inset-0 bg-background/80" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center px-6"
        >
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">
            Our Work
          </p>
          <h1 className="font-heading text-5xl md:text-7xl text-foreground mb-4">
            Gallery
          </h1>
          <div className="gold-divider w-24 mx-auto" />
        </motion.div>
      </section>

      {/* IMAGE GALLERY */}
      <section className="py-24 bg-jet">
        <div className="container mx-auto px-6">

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-sm uppercase tracking-widest transition-all duration-300 border ${
                  activeCategory === cat
                    ? "bg-gold text-primary-foreground border-gold"
                    : "text-gold border-gold/50 hover:border-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image._id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group cursor-pointer relative aspect-square overflow-hidden image-gold-frame"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image.imageUrl}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">

          {/* VIDEO SECTION HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">
              Videos By Us
            </p>

            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
              Our Cinematography
            </h2>

            <div className="gold-divider w-24 mx-auto mb-4" />

            <p className="text-muted-foreground max-w-2xl mx-auto">
              A cinematic collection of love stories, emotions, and unforgettable moments crafted by our lens.
            </p>
          </motion.div>

          {/* VIDEO GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={video._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setActiveVideo(video.youtubeId)}
              >
                <div className="relative aspect-video overflow-hidden luxury-card">
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-background/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 border-2 border-gold rounded-full flex items-center justify-center text-gold">
                      <Play size={24} className="ml-1" />
                    </div>
                  </div>
                </div>
                <h3 className="font-heading text-lg text-foreground mt-4">
                  {video.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE LIGHTBOX */}
      <AnimatePresence>
        {lightboxImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lightbox-overlay flex items-center justify-center"
            onClick={closeLightbox}
          >
            <img
              src={filteredImages[lightboxImage].imageUrl}
              className="max-w-[90vw] max-h-[85vh] object-contain border-2 border-gold"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* VIDEO MODAL */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lightbox-overlay flex items-center justify-center p-4"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div className="w-full max-w-5xl aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                className="w-full h-full border-2 border-gold"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;
