import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Residential Interior",
    description: "Personalized sanctuaries that reflect your identity. From luxury penthouses to minimalist villas, we create homes that are both functional and breathtaking.",
    image: "/assets/residential-design.png",
    id: "residential"
  },
  {
    title: "Commercial Interior",
    description: "Strategic environments designed to enhance productivity and brand identity. We craft offices, retail spaces, and hospitality venues that leave a lasting impression.",
    image: "/assets/commercial-design.png",
    id: "commercial"
  },
  {
    title: "Architectural Consultancy",
    description: "Expert guidance from the ground up. We provide structural insights and spatial planning to ensure your architectural vision is perfectly executed.",
    image: "/assets/architectural-consultancy.png",
    id: "consultancy"
  }
];

const InteriorServicesList = () => {
  return (
    <section className="py-20 md:py-28 lg:py-32">
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
                index % 2 !== 0 && "lg:flex-row-reverse"
              )}
            >
              <div className={cn(
                "lg:col-span-7 relative group",
                index % 2 !== 0 ? "lg:order-2" : "lg:order-1"
              )}>
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
                <span className={cn(
                  "absolute -top-12 lg:-top-20 text-[8rem] lg:text-[12rem] font-bold font-heading text-liminal-secondary/5 select-none -z-10",
                  index % 2 !== 0 ? "-left-8 lg:-left-16" : "-right-8 lg:-right-16"
                )}>
                  0{index + 1}
                </span>
              </div>

              <div className={cn(
                "lg:col-span-5 space-y-8",
                index % 2 !== 0 ? "lg:order-1 lg:text-right" : "lg:order-2"
              )}>
                <h3 className="text-3xl md:text-4xl font-bold font-heading">{service.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed font-light">
                  {service.description}
                </p>
                <div className={cn("pt-4", index % 2 !== 0 ? "flex justify-end" : "")}>
                  <div className="inline-flex items-center gap-3 group cursor-pointer">
                    <span className="text-xs font-bold uppercase tracking-[0.3em] group-hover:text-liminal-secondary transition-colors">Explore Projects</span>
                    <div className="w-8 h-px bg-border group-hover:w-12 group-hover:bg-liminal-secondary transition-all" />
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
