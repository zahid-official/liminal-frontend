import React from "react";
import Image from "next/image";
import SectionHeader from "@/components/shared/SectionHeader";
import { cn } from "@/lib/utils";
import LiminalButton from "@/components/shared/LiminalButton";

const services = [
  {
    id: "residential",
    number: "01",
    title: "Residential Interior Design",
    description:
      "Crafting private sanctuaries that reflect your personality and elevate your lifestyle. From luxury apartments to grand villas, we create homes with soul.",
    image: "/assets/interior/residential-premium.png",
    features: ["Bespoke Furniture", "Lighting Design", "Material Selection"],
  },
  {
    id: "commercial",
    number: "02",
    title: "Commercial Interior Design",
    description:
      "Transforming workspaces and retail environments into high-performance, brand-aligned experiences that inspire both employees and clients.",
    image: "/assets/interior/commercial-premium.png",
    features: ["Workplace Strategy", "Brand Integration", "Space Optimization"],
  },
  {
    id: "consultancy",
    number: "03",
    title: "Architectural Consultancy",
    description:
      "Professional expert advice on spatial planning, structural integration, and technical feasibility for complex interior projects.",
    image: "/assets/interior/consultancy-premium.png",
    features: ["Spatial Planning", "Technical Audits", "Concept Development"],
  },
];

const InteriorServices = () => {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-zinc-50/80">
      <div className="custom-container">
        <SectionHeader
          variant="centered"
          badgeText="Core Offerings"
          title={
            <>
              Tailored <span className="italic font-light">Solutions</span> for
              Every Space
            </>
          }
          description="We offer a comprehensive suite of interior design services, each executed with the same level of architectural rigor and artistic passion."
        />

        <div className="mt-20 lg:mt-32 space-y-24 lg:space-y-40">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={cn(
                "grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center",
                index % 2 === 1 && "lg:flex-row-reverse"
              )}
            >
              {/* Image Side */}
              <div
                className={cn(
                  "lg:col-span-7 relative group",
                  index % 2 === 1 ? "lg:order-2" : "lg:order-1"
                )}
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-sm shadow-xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-700" />
                </div>
                
                {/* Number Overlay */}
                <div className={cn(
                  "absolute -bottom-10 -left-10 text-[12rem] font-bold font-heading text-liminal-secondary/10 select-none hidden lg:block",
                  index % 2 === 1 && "-left-auto -right-10"
                )}>
                  {service.number}
                </div>
              </div>

              {/* Content Side */}
              <div
                className={cn(
                  "lg:col-span-5 space-y-8",
                  index % 2 === 1 ? "lg:order-1 lg:pr-10" : "lg:order-2 lg:pl-10"
                )}
              >
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-bold font-heading leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground font-light text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <ul className="grid grid-cols-1 gap-4 py-6 border-y border-border/60">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-liminal-secondary" />
                      <span className="text-sm font-medium tracking-wide text-foreground/80 uppercase">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <LiminalButton variant="outline" className="w-fit">
                  Learn More
                </LiminalButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteriorServices;
