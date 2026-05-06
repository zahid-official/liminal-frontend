import AboutPhilosophy from "@/components/modules/about-us/AboutPhilosophy";
import AboutStory from "@/components/modules/about-us/AboutStory";
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

      {/* About Story */}
      <AboutStory />

      {/* About Philosophy */}
      <AboutPhilosophy />
    </main>
  );
};

export default AboutUsPage;
