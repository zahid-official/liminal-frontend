import AboutSection from "@/components/modules/public/home/AboutSection";
import BannerSection from "@/components/modules/public/home/BannerSection";
import BlogSection from "@/components/modules/public/home/BlogSection";
import FaqSection from "@/components/modules/public/home/FaqSection";
import NewsletterSection from "@/components/modules/public/home/NewsletterSection";
import ProjectSection from "@/components/modules/public/home/ProjectSection";
import QuoteSection from "@/components/modules/public/home/QuoteSection";
import ServiceSection from "@/components/modules/public/home/ServiceSection";

// HomePage Component
const HomePage = () => {
  return (
    <div>
      <BannerSection />
      <AboutSection />
      <ServiceSection />
      <ProjectSection />
      <QuoteSection />
      <FaqSection />
      <BlogSection />
      <NewsletterSection />
    </div>
  );
};

export default HomePage;
