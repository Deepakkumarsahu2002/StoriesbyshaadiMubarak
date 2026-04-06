import { Layout } from '@/components/layout/Layout';
import { HeroSlider } from '@/components/home/HeroSlider';
import FeaturedGallery from "@/components/home/FeaturedGallery";
import { AboutPreview } from '@/components/home/AboutPreview';
import { Testimonials } from '@/components/home/Testimonials';
import { PackagesPreview } from '@/components/home/PackagesPreview';
import VideoSection from "@/components/home/VideoSection";
import { ContactCTA } from '@/components/home/ContactCTA';
import { ReviewSection } from "@/components/home/ReviewSection";

const Index = () => {
  return (
    <Layout>
      <HeroSlider />
      <FeaturedGallery />
      <VideoSection />
      <AboutPreview />
      <Testimonials />
      <PackagesPreview />
      <ContactCTA />
      <ReviewSection />
    </Layout>
  );
};

export default Index;
