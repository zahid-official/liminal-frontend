"use client";

import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedButton from "@/components/shared/AnimatedButton";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

// Services Data
const services = [
  {
    id: "interior-design",
    number: "01",
    title: "Interior Design",
    description:
      "From private residences to commercial environments, we create immersive interiors that balance aesthetic refinement with functional intelligence.",
    scope: "Residential & Commercial",
    image: "/assets/home/discipline-interior.png",
    href: "/services/interior",
  },
  {
    id: "architectural-consultancy",
    number: "02",
    title: "Architectural Consultancy",
    description:
      "Strategic spatial planning that grounds ambitious visions in structural truth — the analytical bridge between concept and buildable reality.",
    scope: "Spatial Strategy",
    image: "/assets/home/discipline-architecture.png",
    href: "/services/interior",
  },
  {
    id: "bespoke-furnishings",
    number: "03",
    title: "Bespoke Furnishings",
    description:
      "Custom furniture and fixture design conceived as integral parts of the architectural composition, crafted with artisanal precision.",
    scope: "Custom Design",
    image: "/assets/home/discipline-curation.png",
    href: "/services/furniture",
  },
];

// HomeServices Component
const HomeServices = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="services-overview"
      aria-labelledby="services-heading"
      className="py-24 md:py-32 lg:py-40 relative overflow-hidden"
    >
      <div className="custom-container">
        {/* Section Header */}
        <SectionHeader
          variant="split"
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

        {/* Horizontal Service Bands */}
        <div className="border-t border-foreground/10">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group border-b border-foreground/10 transition-colors duration-500 hover:border-liminal-secondary/30"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 py-10 md:py-12 lg:py-14 items-center">
                {/* Number + Title */}
                <div className="lg:col-span-5 flex items-center gap-5 md:gap-6">
                  <span className="text-sm font-mono tracking-[0.3em] text-muted-foreground/40 group-hover:text-liminal-secondary transition-colors duration-500 shrink-0 tabular-nums">
                    {service.number}
                  </span>
                  <div className="w-8 h-px bg-border/60 group-hover:bg-liminal-secondary/40 group-hover:w-12 transition-all duration-500 shrink-0 hidden sm:block" />
                  <h3 className="text-2xl md:text-3xl font-bold font-heading tracking-tight group-hover:text-liminal-secondary transition-colors duration-500">
                    {service.title}
                  </h3>
                </div>

                {/* Description + Scope */}
                <div className="lg:col-span-5 flex flex-col gap-3">
                  <p className="text-muted-foreground font-light text-[15px] leading-relaxed group-hover:text-foreground/70 transition-colors duration-500">
                    {service.description}
                  </p>
                  <span className="text-[10px] font-mono tracking-[0.3em] text-muted-foreground/40 uppercase">
                    {service.scope}
                  </span>
                </div>

                {/* CTA Arrow */}
                <div className="lg:col-span-2 flex lg:justify-end">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2.5 text-sm font-semibold text-muted-foreground group-hover:text-liminal-secondary transition-all duration-500"
                  >
                    <span className="hidden sm:inline">Explore</span>
                    <div className="w-10 h-10 rounded-full border border-border/60 group-hover:border-liminal-secondary/40 group-hover:bg-liminal-secondary/5 flex items-center justify-center transition-all duration-500">
                      <ArrowUpRight className="size-4 group-hover:rotate-45 transition-transform duration-400 transform-gpu" />
                    </div>
                  </Link>
                </div>
              </div>

              {/* Hover-Reveal Image Panel */}
              <div
                className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                  activeIndex === index
                    ? "max-h-72 md:max-h-80 opacity-100 pb-10 md:pb-12"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="relative w-full md:w-3/4 lg:w-2/3 mx-auto aspect-video rounded-sm overflow-hidden shadow-lg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    quality={85}
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover transform-gpu backface-hidden"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-foreground/10 to-transparent" />
                </div>
              </div>
            </div>
          ))}
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
