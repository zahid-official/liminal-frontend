import AboutUsSection from "@/components/modules/public/about-us/AboutUsSection";
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
      <AboutUsSection />
    </main>
  );
};

export default AboutUsPage;
