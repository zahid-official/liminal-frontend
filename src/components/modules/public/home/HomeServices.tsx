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
      "Bespoke residential and commercial interiors that balance material honesty with spatial poetry, seamlessly guiding each project from initial concept to final installation.",
    image: "/assets/home/discipline-interior.png",
    href: "/services/interior",
  },
  {
    number: "02",
    title: "Architecture",
    description:
      "Contextually intelligent architectural solutions that respond deeply to unique place, natural light and the poetic human experience of modern inhabitation.",
    image: "/assets/home/discipline-architecture.png",
    href: "/services",
  },
  {
    number: "03",
    title: "Bespoke Furniture",
    description:
      "Handcrafted furniture designed as functional sculpture, where each bespoke piece narrates a rich story of material, proportion and human touch.",
    image: "/assets/home/discipline-curation.png",
    href: "/services/furniture",
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
          variant="manifesto"
          headingId="services-heading"
          badgeText="Our Disciplines"
          title={
            <>
              Pillars of{" "}
              <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                Excellence
              </span>
            </>
          }
          description="A curated ecosystem of design disciplines bridging architectural rigor and material poetry to craft enduring spatial experiences of quiet luxury."
          className="mb-12"
        />

        {/* Service Rows */}
        <div>
          {services.map((service) => (
            <Link
              key={service.number}
              href={service.href}
              className="group block border-t border-border/50 last:border-b"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 py-8 lg:py-10 items-center">
                {/* Number */}
                <div className="lg:col-span-1 hidden lg:block">
                  <span className="text-[11px] font-mono tracking-[0.3em] text-muted-foreground/35 group-hover:text-liminal-secondary transition-colors duration-500">
                    {service.number}
                  </span>
                </div>

                {/* Title */}
                <div className="lg:col-span-3">
                  <div className="flex items-center gap-3 lg:block">
                    <span className="text-[11px] font-mono tracking-[0.3em] text-muted-foreground/35 lg:hidden group-hover:text-liminal-secondary transition-colors duration-500">
                      {service.number}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold font-heading tracking-tight group-hover:text-liminal-secondary transition-colors duration-500">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <div className="lg:col-span-4">
                  <p className="text-muted-foreground font-light text-[15px] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Image Thumbnail + Arrow */}
                <div className="lg:col-span-4 flex items-center gap-5 justify-between">
                  <div className="relative h-16 lg:h-30 flex-1 max-w-50 overflow-hidden rounded-sm">
                    <Image
                      src={service.image}
                      alt={`Liminal ${service.title}`}
                      fill
                      sizes="200px"
                      quality={75}
                      className="object-cover transition-transform duration-700 group-hover:scale-110 will-change-transform transform-gpu"
                    />
                  </div>
                  <div className="shrink-0 w-11 h-11 rounded-full border border-border/50 flex items-center justify-center group-hover:bg-liminal-secondary group-hover:border-liminal-secondary transition-all duration-500">
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground/60 group-hover:text-white group-hover:rotate-45 transition-all duration-400 transform-gpu" />
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
