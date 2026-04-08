import AboutSection from "@/components/modules/public/home/AboutSection";
import BannerSection from "@/components/modules/public/home/BannerSection";
import BlogSection from "@/components/modules/public/home/BlogSection";
import FaqSection from "@/components/modules/public/home/FaqSection";
import NewsletterSection from "@/components/modules/public/home/NewsletterSection";
import ProjectSection from "@/components/modules/public/home/ProjectSection";
import ServiceSection from "@/components/modules/public/home/ServiceSection";

// HomePage Component
const HomePage = () => {
  return (
    <div>
      <BannerSection />
      <AboutSection />
      <ServiceSection />
      <ProjectSection />
      <FaqSection />
      <BlogSection />
      <NewsletterSection />
    </div>
  );
};

export default HomePage;
