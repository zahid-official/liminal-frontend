import AboutApproach from "@/components/modules/public/about-us/AboutApproach";
import AboutIdentity from "@/components/modules/public/about-us/AboutIdentity";
import AboutImpact from "@/components/modules/public/about-us/AboutImpact";
import AboutStory from "@/components/modules/public/about-us/AboutStory";
import AboutTeam from "@/components/modules/public/about-us/AboutTeam";
import AboutVision from "@/components/modules/public/about-us/AboutVision";
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

      {/* Our Origin Story */}
      <AboutStory />

      {/* Who We Are — Editorial Manifesto */}
      <AboutIdentity />

      {/* Our Vision*/}
      <AboutVision />

      {/* Our Design Principles */}
      <AboutApproach />

      {/* The Team */}
      <AboutTeam />

      {/* Impact in Numbers */}
      <AboutImpact />

      {/* Call to Action */}
      {/* <AboutCTA /> */}
    </main>
  );
};

export default AboutUsPage;
