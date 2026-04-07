import AboutSection from "@/components/modules/public/home/AboutSection";
import BannerSection from "@/components/modules/public/home/BannerSection";
import ServiceSection from "@/components/modules/public/home/ServiceSection";

// HomePage Component
const HomePage = () => {
  return (
    <div>
      <BannerSection />
      <AboutSection />
      <ServiceSection />
    </div>
  );
};

export default HomePage;
