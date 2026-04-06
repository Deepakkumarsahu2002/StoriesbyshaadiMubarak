import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import API from "@/services/api";

interface VideoItem {
  _id: string;
  title: string;
  youtubeId: string;
}

const VideoSection = () => {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  useEffect(() => {
    const loadVideos = async () => {
      try {
        const res = await API.get("/videos");
        setVideos(res.data.slice(0, 3)); // featured only
      } catch (err) {
        console.error("Failed to load videos", err);
      }
    };

    loadVideos();
  }, []);

  return (
    <section className="py-24 bg-jet">
      <div className="container mx-auto px-6">

        <div className="text-center mb-12">
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">
            Our Own Cinematic Films
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
            Featured Videos
          </h2>
          <div className="gold-divider w-24 mx-auto" />
        </div>

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

        {/* VIDEO MODAL */}
        {activeVideo && (
          <div
            className="fixed inset-0 z-50 lightbox-overlay flex items-center justify-center p-4"
            onClick={() => setActiveVideo(null)}
          >
            <div className="w-full max-w-5xl aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                className="w-full h-full border-2 border-gold"
                allowFullScreen
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default VideoSection;
