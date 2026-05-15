import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// Services data
const services = [
  {
    number: "01",
    title: "Interior Design",
    description:
      "Bespoke residential and commercial interiors that balance material honesty with spatial poetry — from concept to completion.",
    image: "/assets/home/discipline-interior.png",
    href: "/services/interior",
    scope: "Residential · Commercial · Hospitality",
  },
  {
    number: "02",
    title: "Architecture",
    description:
      "Contextually intelligent architectural solutions that respond to place, light, and the lived experience of human inhabitation.",
    image: "/assets/home/discipline-architecture.png",
    href: "/services",
    scope: "Spatial Planning · Facades · Structural Design",
  },
  {
    number: "03",
    title: "Bespoke Furniture",
    description:
      "Handcrafted furniture designed as functional sculpture — each piece a narrative of material, proportion, and human touch.",
    image: "/assets/home/discipline-curation.png",
    href: "/services/furniture",
    scope: "Custom Furniture · Joinery · Material Sourcing",
  },
];

// HomeServices Component
const HomeServices = () => {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-20 md:py-28 lg:py-32 relative overflow-hidden"
    >
      <div className="custom-container">
        {/* Section Header */}
        <SectionHeader
          variant="editorial"
          headingId="services-heading"
          badgeText="Our Disciplines"
          title={
            <>
              Three Pillars of{" "}
              <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                Excellence
              </span>
            </>
          }
          description="Each discipline operates with the same rigor, the same reverence for material and craft, and the same commitment to spaces that endure."
        />

        {/* Service Rows */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <Link
              key={service.number}
              href={service.href}
              className="group block border-t border-border/40 last:border-b"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 py-10 lg:py-14 items-center">
                {/* Number + Title */}
                <div className="lg:col-span-4 flex items-center gap-6">
                  <span className="text-[11px] font-mono tracking-[0.3em] text-muted-foreground/40 group-hover:text-liminal-secondary transition-colors duration-500 shrink-0">
                    {service.number}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold font-heading tracking-tight group-hover:text-liminal-secondary transition-colors duration-500">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="lg:col-span-4">
                  <p className="text-muted-foreground font-light text-[15px] leading-relaxed">
                    {service.description}
                  </p>
                  <span className="block text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/40 mt-3">
                    {service.scope}
                  </span>
                </div>

                {/* Image + Arrow */}
                <div className="lg:col-span-4 flex items-center gap-6">
                  <div
                    className={`relative h-20 lg:h-24 flex-1 overflow-hidden rounded-sm ${index % 2 === 0 ? "order-1" : "order-1 lg:order-2"}`}
                  >
                    <Image
                      src={service.image}
                      alt={`Liminal ${service.title}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      quality={85}
                      className="object-cover transition-transform duration-700 group-hover:scale-110 will-change-transform transform-gpu"
                    />
                  </div>
                  <div
                    className={`shrink-0 w-12 h-12 rounded-full border border-border/40 flex items-center justify-center group-hover:bg-liminal-secondary group-hover:border-liminal-secondary transition-all duration-500 ${index % 2 === 0 ? "order-2" : "order-2 lg:order-1"}`}
                  >
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-white group-hover:rotate-45 transition-all duration-400 transform-gpu" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
