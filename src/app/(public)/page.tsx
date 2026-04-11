import AboutSection from "@/components/modules/public/home/AboutSection";
import BannerSection from "@/components/modules/public/home/BannerSection";
import BlogSection from "@/components/modules/public/home/BlogSection";
import ExperienceSection from "@/components/modules/public/home/ExperienceSection";
import FaqSection from "@/components/modules/public/home/FaqSection";
import FeaturedSection from "@/components/modules/public/home/FeaturedSection";
import NewsletterSection from "@/components/modules/public/home/NewsletterSection";
import ProjectSection from "@/components/modules/public/home/ProjectSection";
import QuoteSection from "@/components/modules/public/home/QuoteSection";
import ServiceSection from "@/components/modules/public/home/ServiceSection";
import TestimonialSection from "@/components/modules/public/TestimonialSection";

// HomePage Component
const HomePage = () => {
  return (
    <div>
      <BannerSection />
      <AboutSection />
      <ExperienceSection />
      <FeaturedSection />
      <ServiceSection />
      <ProjectSection />
      <TestimonialSection />
      <QuoteSection />
      <FaqSection />
      <BlogSection />
      <NewsletterSection />
    </div>
  );
};

export default HomePage;
