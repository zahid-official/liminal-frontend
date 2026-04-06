"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionHeader from "@/components/shared/SectionHeader";

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
  const [activeService, setActiveService] = useState(servicesData[0]);

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-20 md:py-28 lg:py-32 overflow-hidden bg-zinc-50/50 dark:bg-background"
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

        {/* Service Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image Box */}
          <div className="relative w-full aspect-4/3 lg:aspect-[1.1/1] max-w-2xl mx-auto lg:mx-0 order-2 lg:order-1">
            <div className="w-full h-full rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden relative border border-border/50 shadow-md bg-muted">
              <Image
                key={activeService.image}
                src={activeService.image}
                alt={activeService.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-in-out hover:scale-105 animate-in fade-in zoom-in-95"
                priority
              />
            </div>

            {/* Floating Description Box */}
            <div
              key={activeService.id}
              className="absolute left-4 bottom-4 md:left-6 md:bottom-8 right-4 md:right-auto md:w-[85%] max-w-105 bg-[#5C5C5C]/95 dark:bg-zinc-900/95 backdrop-blur-md rounded-[1.25rem] p-5 md:p-7 shadow-2xl border border-white/10 z-10 animate-in fade-in slide-in-from-bottom-4 duration-500"
            >
              <p className="text-white/95 text-[15px] sm:text-base leading-relaxed">
                {activeService.description}
              </p>
            </div>
          </div>

          {/* Right: Interactive List */}
          <div className="flex flex-col order-1 lg:order-2">
            {servicesData.map((service, index) => {
              const isActive = activeService.id === service.id;

              return (
                <div
                  key={service.id}
                  onClick={() => setActiveService(service)}
                  onMouseEnter={() => setActiveService(service)}
                  className={cn(
                    "group flex items-center justify-between py-4.5 lg:py-6 cursor-pointer border-b border-border/70 transition-all duration-300",
                    index === 0 && "border-t",
                  )}
                >
                  <div className="flex items-center gap-4 sm:gap-6 lg:gap-8">
                    <span
                      className={cn(
                        "text-xs sm:text-sm font-bold tracking-wider transition-colors duration-300",
                        isActive
                          ? "text-liminal-secondary"
                          : "text-muted-foreground group-hover:text-foreground",
                      )}
                    >
                      {service.id}
                    </span>
                    <h3
                      className={cn(
                        "text-[1.35rem] sm:text-2xl lg:text-[28px] font-heading font-bold transition-colors duration-300",
                        isActive
                          ? "text-liminal-secondary"
                          : "text-foreground group-hover:text-liminal-secondary/80",
                      )}
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* Icon Button */}
                  <div
                    className={cn(
                      "shrink-0 flex items-center justify-center size-10 sm:size-12 rounded-full transition-all duration-500 ml-4",
                      isActive
                        ? "bg-liminal-secondary text-white shadow-md rotate-0 scale-100"
                        : "bg-transparent text-foreground group-hover:bg-muted group-hover:scale-110",
                    )}
                  >
                    {isActive ? (
                      <ArrowRight className="size-5 transition-transform duration-300 animate-in fade-in" />
                    ) : (
                      <ArrowUpRight className="size-[1.15rem] text-muted-foreground group-hover:text-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
