import HomeCTA from "@/components/modules/public/home/HomeCTA";
import HomeFAQ from "@/components/modules/public/home/HomeFAQ";
import HomeHero from "@/components/modules/public/home/HomeHero";
import HomeJournal from "@/components/modules/public/home/HomeJournal";
import HomeManifesto from "@/components/modules/public/home/HomeManifesto";
import HomeNewsletter from "@/components/modules/public/home/HomeNewsletter";
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

      {/* 2. Studio — Who we are (white) — Split layout */}
      <HomeStudio />

      {/* 3. Services — What we do (zinc) — 3-column cards */}
      <HomeServices />

      {/* 4. Projects — Our work (white) — Hero banner + 2 cards */}
      <HomeProjects />

      {/* 5. Philosophy — What we believe (dark) — Immersive pillars */}
      <HomePhilosophy />

      {/* 6. Testimonials — Client trust (zinc) — Single centered quote */}
      <HomeTestimonials />

      {/* 7. Journal — Our insights (white) — 2-column articles */}
      <HomeJournal />

      {/* 8. Manifesto — Our statement (zinc) — Pure typography */}
      <HomeManifesto />

      {/* 9. FAQ — Questions answered (white) — Split accordion */}
      <HomeFAQ />

      {/* 10. Newsletter — Stay connected (zinc) — Centered compact */}
      <HomeNewsletter />

      {/* 11. CTA — Let's begin (dark) — Cinematic finale */}
      <HomeCTA />
    </main>
  );
};

export default HomePage;
