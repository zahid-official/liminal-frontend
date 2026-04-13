import AboutSection from "@/components/modules/public/home/AboutSection";
import BannerSection from "@/components/modules/public/home/BannerSection";
import BlogSection from "@/components/modules/public/home/BlogSection";
import ExperienceSection from "@/components/modules/public/home/ExperienceSection";
import FaqSection from "@/components/modules/public/home/FaqSection";
import ProjectSection from "@/components/modules/public/home/ProjectSection";
import NewsletterSection from "@/components/modules/public/home/NewsletterSection";
import QuoteSection from "@/components/modules/public/home/QuoteSection";
import ServiceSection from "@/components/modules/public/home/ServiceSection";
import TestimonialSection from "@/components/modules/public/home/TestimonialSection";
import { Metadata } from "next";

// Metadata for the Home Page
export const metadata: Metadata = {
  title: "Liminal | Stunning Interior Design & Architecture",
  description:
    "Transform your space with Liminal. We specialize in art-focused, high-end interior design and architectural solutions for residential and commercial projects.",
};

// HomePage Component
const HomePage = () => {
  return (
    <div>
      <BannerSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <ServiceSection />
      <TestimonialSection />
      <QuoteSection />
      <FaqSection />
      <BlogSection />
      <NewsletterSection />
    </div>
  );
};

export default HomePage;
