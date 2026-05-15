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
      {/* Hero — Full-screen cinematic introduction */}
      <HomeHero />

      {/* Studio — Who we are, with metrics */}
      <HomeStudio />

      {/* Projects — Proof of work, early in the narrative */}
      <HomeProjects />

      {/* Philosophy — Dark immersive anchor section */}
      <HomePhilosophy />

      {/* Services — Our disciplines & expertise */}
      <HomeServices />

      {/* Manifesto — Design philosophy with imagery */}
      <HomeManifesto />

      {/* Testimonials — Social proof & trust */}
      <HomeTestimonials />

      {/* Journal — Thought leadership & insights */}
      <HomeJournal />

      {/* FAQ — Address concerns before conversion */}
      <HomeFAQ />

      {/* Newsletter — Capture interest */}
      <HomeNewsletter />

      {/* CTA — Cinematic finale with background imagery */}
      <HomeCTA />
    </main>
  );
};

export default HomePage;
