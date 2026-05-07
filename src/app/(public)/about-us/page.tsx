import AboutCTA from "@/components/modules/public/about-us/AboutCTA";
import AboutIntro from "@/components/modules/public/about-us/AboutIntro";
import AboutPhilosophy from "@/components/modules/public/about-us/AboutPhilosophy";
import AboutPillars from "@/components/modules/public/about-us/AboutPillars";
import AboutProcess from "@/components/modules/public/about-us/AboutProcess";
import AboutStory from "@/components/modules/public/about-us/AboutStory";
import AboutTeam from "@/components/modules/public/about-us/AboutTeam";
import AboutVisionMission from "@/components/modules/public/about-us/AboutVisionMission";
import PageHeader from "@/components/shared/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Liminal",
  description:
    "Discover the philosophy, story, and people behind Liminal. We are a premium interior design studio dedicated to creating evocative, functional, and timeless spaces.",
};

// AboutUsPage Component
const AboutUsPage = () => {
  return (
    <main>
      {/* Hero Section */}
      <PageHeader
        title="About Liminal"
        items={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        bgImage="/assets/about-us/bg-about.png"
      />

      {/* Studio Introduction */}
      <AboutIntro />

      {/* Our Story */}
      <AboutStory />

      {/* Design Philosophy */}
      <AboutPhilosophy />

      {/* Vision & Mission */}
      <AboutVisionMission />

      {/* Core Design Pillars */}
      <AboutPillars />

      {/* Our Approach */}
      <AboutProcess />

      {/* Team */}
      <AboutTeam />

      {/* Call to Action */}
      <AboutCTA />
    </main>
  );
};

export default AboutUsPage;
