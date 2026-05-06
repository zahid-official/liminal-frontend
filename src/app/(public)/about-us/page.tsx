import PageHeader from "@/components/shared/PageHeader";
import { Metadata } from "next";
import StudioOrigin from "@/components/modules/about-us/StudioOrigin";
import PhilosophyVision from "@/components/modules/about-us/PhilosophyVision";
import StudioMetrics from "@/components/modules/about-us/StudioMetrics";
import DesignApproach from "@/components/modules/about-us/DesignApproach";
import TeamLeadership from "@/components/modules/about-us/TeamLeadership";
import ClientTestimonials from "@/components/modules/about-us/ClientTestimonials";
import AboutCTA from "@/components/modules/about-us/AboutCTA";

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

      {/* Story Section */}
      <StudioOrigin />

      {/* Philosophy & Vision */}
      <PhilosophyVision />

      {/* Stats/Metrics Section */}
      <StudioMetrics />

      {/* Design Process/Approach */}
      <DesignApproach />

      {/* Team/Leadership */}
      <TeamLeadership />

      {/* Testimonials */}
      <ClientTestimonials />

      {/* Call to Action */}
      <AboutCTA />
    </main>
  );
};

export default AboutUsPage;

