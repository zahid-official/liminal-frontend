import HomeHero from "@/components/modules/public/home/HomeHero";
import HomeManifesto from "@/components/modules/public/home/HomeManifesto";
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
      {/* Home Hero */}
      <HomeHero />

      {/* Home Manifesto */}
      <HomeManifesto />
    </main>
  );
};

export default HomePage;
