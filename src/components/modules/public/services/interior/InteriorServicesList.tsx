import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Residential Interior",
    description:
      "Personalized sanctuaries that reflect your identity. From luxury penthouses to minimalist villas, we create homes that are both functional and breathtaking.",
    image: "/assets/residential-design.png",
    id: "residential",
  },
  {
    title: "Commercial Interior",
    description:
      "Strategic environments designed to enhance productivity and brand identity. We craft offices, retail spaces, and hospitality venues that leave a lasting impression.",
    image: "/assets/commercial-design.png",
    id: "commercial",
  },
  {
    title: "Architectural Consultancy",
    description:
      "Expert guidance from the ground up. We provide structural insights and spatial planning to ensure your architectural vision is perfectly executed.",
    image: "/assets/architectural-consultancy.png",
    id: "consultancy",
  },
];

const InteriorServicesList = () => {
  return (
    <section className="py-20 md:py-28 lg:py-32 relative overflow-hidden bg-zinc-50/80">
      <div className="custom-container">
        <SectionHeader
          badgeText="Our Expertise"
          title="Bespoke Design Solutions"
          description="We offer a comprehensive suite of interior design services tailored to meet the unique needs of our discerning clients."
          variant="centered"
          className="mb-20 lg:mb-32"
        />

        <div className="space-y-32 lg:space-y-48">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={cn(
                "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center",
                index % 2 !== 0 && "lg:flex-row-reverse",
              )}
            >
              <div
                className={cn(
                  "lg:col-span-7 relative group",
                  index % 2 !== 0 ? "lg:order-2" : "lg:order-1",
                )}
              >
                <div className="overflow-hidden rounded-sm shadow-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={1000}
                    height={600}
                    className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out scale-[1.01] group-hover:scale-105"
                  />
                </div>
                {/* Decorative Number */}
                <span
                  className={cn(
                    "absolute -top-12 lg:-top-20 text-[8rem] lg:text-[12rem] font-bold font-heading text-liminal-secondary/5 select-none -z-10",
                    index % 2 !== 0
                      ? "-left-8 lg:-left-16"
                      : "-right-8 lg:-right-16",
                  )}
                >
                  0{index + 1}
                </span>
              </div>

              <div
                className={cn(
                  "lg:col-span-5 space-y-8",
                  index % 2 !== 0 ? "lg:order-1 lg:text-right" : "lg:order-2",
                )}
              >
                <div
                  className={cn(
                    "flex flex-col gap-1",
                    index % 2 !== 0 ? "items-end" : "items-start",
                  )}
                >
                  <span className="text-[10px] font-mono tracking-[0.4em] text-liminal-secondary font-bold uppercase">
                    SERVICE_ID: {service.id.toUpperCase()}
                  </span>
                  <h3 className="text-4xl md:text-5xl font-bold font-heading tracking-tight">
                    {service.title}
                  </h3>
                </div>

                <p className="text-muted-foreground text-lg leading-relaxed font-light">
                  {service.description}
                </p>

                {/* Technical Specs */}
                <div
                  className={cn(
                    "grid grid-cols-2 gap-8 pt-4",
                    index % 2 !== 0 ? "text-right" : "text-left",
                  )}
                >
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono tracking-widest text-muted-foreground uppercase">
                      Phase
                    </span>
                    <p className="text-xs font-bold uppercase">
                      Concept to Completion
                    </p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono tracking-widest text-muted-foreground uppercase">
                      Expertise
                    </span>
                    <p className="text-xs font-bold uppercase">
                      Spatial Planning
                    </p>
                  </div>
                </div>

                <div
                  className={cn(
                    "pt-6",
                    index % 2 !== 0 ? "flex justify-end" : "flex justify-start",
                  )}
                >
                  <div className="inline-flex items-center gap-4 group cursor-pointer relative">
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] group-hover:text-liminal-secondary transition-colors duration-500">
                      Explore Projects
                    </span>
                    <div className="w-12 h-px bg-border group-hover:w-20 group-hover:bg-liminal-secondary transition-all duration-500" />

                    {/* Hover indicator dot */}
                    <div className="absolute -right-2 top-1/2 -translate-y-1/2 size-1 bg-liminal-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteriorServicesList;
