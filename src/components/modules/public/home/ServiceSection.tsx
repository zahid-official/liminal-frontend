import SectionHeader from "@/components/shared/SectionHeader";
import ServiceContent from "../clients/ServiceContent";

// Services Data
const servicesData = [
  {
    id: "01",
    title: "Residential Interior Design",
    description:
      "Tailored design services for private homes, including room makeovers and complete home transformations.",
    image: "/assets/about-1.webp",
  },
  {
    id: "02",
    title: "Outdoor & Landscape Design",
    description:
      "Transform your outdoor spaces into beautiful, functional extensions of your home with our landscape design.",
    image: "/assets/about-2.webp",
  },
  {
    id: "03",
    title: "Interior Design Consultation",
    description:
      "Professional guidance and strategic advising to solve your complex interior design and spatial challenges.",
    image: "/assets/about-1.webp",
  },
  {
    id: "04",
    title: "Commercial Interior Design",
    description:
      "Designing productive and inspiring commercial spaces that reflect your brand identity and optimize workflow.",
    image: "/assets/about-2.webp",
  },
  {
    id: "05",
    title: "Renovation And Remodeling",
    description:
      "Comprehensive home modification services to refresh, repair, or completely reinvent your existing spaces.",
    image: "/assets/about-1.webp",
  },
  {
    id: "06",
    title: "Interior 2D/3D Layouts",
    description:
      "Precise digital representations and modeling of spaces to help you visualize concepts before execution.",
    image: "/assets/about-2.webp",
  },
];

// ServiceSection Component
const ServiceSection = () => {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-20 md:py-28 lg:py-32 overflow-hidde dark:bg-background"
    >
      <div className="custom-container">
        {/* Section Header */}
        <SectionHeader
          badgeText="OUR SERVICES"
          headingId="services-heading"
          title={
            <>
              Explore Our{" "}
              <span className="text-liminal-secondary font-medium">
                Comprehensive Interior Design
              </span>{" "}
              Services
            </>
          }
          description="We specialize in transforming visions into reality. Explore our portfolio of innovative architectural and interior design projects crafted with precision."
        />

        {/* Interactive Service Content */}
        <ServiceContent services={servicesData} />
      </div>
    </section>
  );
};

export default ServiceSection;
