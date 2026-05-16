import AnimatedButton from "@/components/shared/AnimatedButton";
import SectionHeader from "@/components/shared/SectionHeader";
import { Armchair, Compass, Layers } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Services Data
const services = [
  {
    id: "interior-design",
    title: "Interior Design",
    icon: Layers,
    description:
      "From private residences to commercial environments, we create immersive interiors that balance aesthetic refinement with functional intelligence. Every element is curated to serve both beauty and purpose.",
    image: "/assets/home/discipline-interior.png",
    scope: "Residential & Commercial",
    approach: "End-to-End Design",
    href: "/services/interior",
  },
  {
    id: "architectural-consultancy",
    title: "Architectural Consultancy",
    icon: Compass,
    description:
      "Strategic spatial planning that grounds ambitious visions in structural truth. We provide the analytical framework and design intelligence to transform complex briefs into buildable reality.",
    image: "/assets/home/discipline-architecture.png",
    scope: "Spatial Strategy",
    approach: "Analysis to Execution",
    href: "/services/interior",
  },
  {
    id: "bespoke-furnishings",
    title: "Bespoke Furnishings",
    icon: Armchair,
    description:
      "Custom furniture and fixture design that completes the spatial narrative. Each piece is conceived as an integral part of the architectural composition, crafted with artisanal precision.",
    image: "/assets/home/discipline-curation.png",
    scope: "Custom Design",
    approach: "Craft-Led Process",
    href: "/services/furniture",
  },
];

// HomeServices Component
const HomeServices = () => {
  return (
    <section
      id="services-overview"
      aria-labelledby="services-heading"
      className="py-20 md:py-28 lg:py-32 relative overflow-hidden"
    >
      <div className="custom-container">
        {/* Section Header */}
        <SectionHeader
          variant="centered"
          badgeText="Our Expertise"
          headingId="services-heading"
          title={
            <>
              Disciplines of{" "}
              <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                Design
              </span>
            </>
          }
          description="Comprehensive design services rooted in architectural thinking — from spatial strategy and interior curation to bespoke furniture that completes the narrative."
          className="mb-16 lg:mb-20"
        />

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-background rounded-sm border border-border/40 overflow-hidden hover:border-liminal-secondary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] flex flex-col"
              >
                {/* Top Accent Line */}
                <div className="h-0.5 bg-liminal-secondary/20 group-hover:bg-liminal-secondary transition-colors duration-700" />

                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105 will-change-transform transform-gpu backface-hidden"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-foreground/10 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-7 md:p-8 flex flex-col flex-1">
                  {/* Icon + Title */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center group-hover:border-liminal-secondary/40 group-hover:bg-liminal-secondary/5 transition-all duration-500">
                      <Icon className="size-4.5 text-muted-foreground group-hover:text-liminal-secondary transition-colors duration-500" />
                    </div>
                    <h3 className="text-xl font-bold font-heading tracking-tight group-hover:text-liminal-secondary transition-colors duration-500">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground font-light text-[15px] leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>

                  {/* Tech Specs */}
                  <div className="flex items-center gap-6 pt-5 border-t border-border/40 mb-6">
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono tracking-widest text-muted-foreground uppercase">
                        Scope
                      </span>
                      <p className="text-[11px] font-bold uppercase tracking-tight">
                        {service.scope}
                      </p>
                    </div>
                    <div className="w-px h-7 bg-border/40" />
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono tracking-widest text-muted-foreground uppercase">
                        Approach
                      </span>
                      <p className="text-[11px] font-bold uppercase tracking-tight">
                        {service.approach}
                      </p>
                    </div>
                  </div>

                  {/* CTA Link */}
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-liminal-secondary hover:gap-3 transition-all duration-500 group/link"
                  >
                    <span>Explore Service</span>
                    <span className="transition-transform duration-300 group-hover/link:translate-x-0.5">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center pt-16 md:pt-20">
          <Link href="/services/interior">
            <AnimatedButton>View All Services</AnimatedButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
