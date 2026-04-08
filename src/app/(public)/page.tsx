import AboutSection from "@/components/modules/public/home/AboutSection";
import BannerSection from "@/components/modules/public/home/BannerSection";
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
      <NewsletterSection />
    </div>
  );
};

export default HomePage;
