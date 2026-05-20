import HomeCTA from "@/components/modules/public/home/HomeCTA";
import HomeFAQ from "@/components/modules/public/home/HomeFAQ";
import HomeHero from "@/components/modules/public/home/HomeHero";
import HomeManifesto from "@/components/modules/public/home/HomeManifesto";
import HomePhilosophy from "@/components/modules/public/home/HomePhilosophy";
import HomeProjects from "@/components/modules/public/home/HomeProjects";
import HomeServices from "@/components/modules/public/home/HomeServices";
import HomeStudio from "@/components/modules/public/home/HomeStudio";
import HomeTestimonials from "@/components/modules/public/home/HomeTestimonials";
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
    <main>
      {/* 1. Hero — Cinematic first impression (dark) */}
      <HomeHero />

      {/* 2. Studio Introduction — Intimate brand reveal (background) */}
      <HomeStudio />

      {/* 3. Brand Manifesto — Philosophical depth (zinc) */}
      <HomeManifesto />

      {/* 4. Featured Projects — Portfolio authority (background) */}
      <HomeProjects />

      {/* 5. Design Philosophy — Technical credibility (dark) */}
      <HomePhilosophy />

      {/* 6. Services Overview — Clear offering structure (background) */}
      <HomeServices />

      {/* 7. Testimonials — Social proof & trust (zinc) */}
      <HomeTestimonials />

      {/* 8. Journal / Insights — Thought leadership (background) */}
      {/* <HomeJournal /> */}

      {/* 9. FAQ — Questions answered (zinc) */}
      <HomeFAQ />

      {/* 10. Consultation CTA — Conversion moment (dark) */}
      <HomeCTA />

      {/* 11. Newsletter — Soft final engagement (background) */}
      {/* <HomeNewsletter /> */}
    </main>
  );
};

export default HomePage;
