import SectionHeader from "@/components/shared/SectionHeader";
import ServiceContent from "./ServiceContent";

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
    title: "Renovation and Remodeling",
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

/**
 * ServiceSection Component
 * Presents the core services with an interactive content switcher.
 * Designed with a premium editorial header and architectural decorative elements.
 */
const ServiceSection = () => {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-24 md:py-32 lg:py-40 overflow-hidden relative"
    >
      <div className="custom-container relative z-10">
        <SectionHeader
          variant="centered"
          badgeText="SERVICES REVEALED"
          headingId="services-heading"
          title={
            <>
              Explore Our <br />
              <span className="text-liminal-secondary italic font-serif font-light underline underline-offset-8 decoration-1">
                Comprehensive
              </span>{" "}
              Solutions
            </>
          }
          description="We specialize in bringing visions to life through tailored architectural solutions. Discover our range of innovative interior design and technical services crafted with surgical precision."
          className="mb-16 md:mb-24 lg:mb-32 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out fill-mode-both"
        />

        {/* Interactive Service Content */}
        <div className="relative">
          {/* Technical accent behind content */}
          <div className="absolute -top-16 -left-16 size-48 border border-border/20 rounded-full opacity-40 pointer-events-none hidden xl:block" />
          <ServiceContent services={servicesData} />
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
