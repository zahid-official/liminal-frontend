import ProcessSection from "@/components/modules/public/about-us/ProcessSection";
import StorySection from "@/components/modules/public/about-us/StorySection";
import TeamSection from "@/components/modules/public/about-us/TeamSection";
import VisionSection from "@/components/modules/public/about-us/VisionSection";
import PageHeader from "@/components/shared/PageHeader";

// AboutUsPage Component
const AboutUsPage = () => {
  return (
    <main>
      <PageHeader
        title="About Us"
        items={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        bgImage="/assets/bg-about.avif"
      />
      <StorySection />
      <VisionSection />
      <ProcessSection />
      <TeamSection />
    </main>
  );
};

export default AboutUsPage;
