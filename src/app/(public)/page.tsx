import HomeCTA from "@/components/modules/public/home/HomeCTA";
import HomeFAQ from "@/components/modules/public/home/HomeFAQ";
import HomeHero from "@/components/modules/public/home/HomeHero";
import HomeJournal from "@/components/modules/public/home/HomeJournal";

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
      {/* 1.  Home Hero  */}
      <HomeHero />

      {/* 2. Studio Introduction */}
      <HomeStudio />

      {/* 3. Brand Manifesto */}
      <HomeManifesto />

      {/* 4. Featured Projects */}
      <HomeProjects />

      {/* 5. Design Philosophy */}
      <HomePhilosophy />

      {/* 6. Services Overview  */}
      <HomeServices />

      {/* 7. Testimonials */}
      <HomeTestimonials />

      {/* 8. FAQ */}
      <HomeFAQ />

      {/* 9. Journal */}
      <HomeJournal />

      {/* 10. Consultation CTA */}
      <HomeCTA />
    </main>
  );
};

export default HomePage;
