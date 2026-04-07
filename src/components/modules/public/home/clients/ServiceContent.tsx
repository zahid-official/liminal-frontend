"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface ServiceContentProps {
  services: ServiceItem[];
}

// ServiceContent Component
const ServiceContent = ({ services }: ServiceContentProps) => {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      {/* Left: Image Box */}
      <div className="relative w-full aspect-4/3 lg:aspect-[1.1/1] max-w-2xl mx-auto lg:mx-0 order-2 lg:order-1">
        <div className="w-full h-full rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden relative border border-border/50 shadow-md bg-muted group">
          {services.map((service, index) => (
            <Image
              key={service.id}
              src={service.image}
              alt={service.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={cn(
                "object-cover transition-all duration-800 ease-in-out",
                activeService.id === service.id
                  ? "opacity-100 scale-100 group-hover:scale-105 z-10"
                  : "opacity-0 scale-[1.04] z-0",
              )}
              priority={index === 0}
            />
          ))}
        </div>

        {/* Floating Description Box */}
        <div
          key={activeService.id}
          className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] md:w-[85%] max-w-105 lg:left-6 lg:translate-x-0 bg-black/60 dark:bg-black/60 backdrop-blur-md rounded-[1.25rem] p-5 md:p-7 shadow-2xl border border-white/10 z-10 animate-in fade-in slide-in-from-bottom-4 duration-700"
        >
          <p className="text-white/95 text-[15px] sm:text-base leading-relaxed">
            {activeService.description}
          </p>
        </div>
      </div>

      {/* Right: Interactive List */}
      <div className="flex flex-col order-1 lg:order-2">
        {services.map((service, index) => {
          const isActive = activeService.id === service.id;

          return (
            <div
              key={service.id}
              onClick={() => setActiveService(service)}
              onMouseEnter={() => setActiveService(service)}
              className={cn(
                "group flex items-center justify-between py-4.5 lg:py-6 cursor-pointer border-b transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                isActive
                  ? "border-liminal-secondary"
                  : "border-border/70 hover:border-liminal-secondary/50",
                index === 0 && "border-t",
              )}
            >
              <div className="flex items-center gap-4 sm:gap-6 lg:gap-8">
                <span
                  className={cn(
                    "text-xs sm:text-sm font-bold tracking-wider transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    isActive
                      ? "text-liminal-secondary"
                      : "text-muted-foreground group-hover:text-foreground",
                  )}
                >
                  {service.id}
                </span>
                <h3
                  className={cn(
                    "text-[1.35rem] sm:text-2xl lg:text-[28px] font-heading font-bold transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
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
                  "shrink-0 flex items-center justify-center size-10 sm:size-12 rounded-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ml-4",
                  isActive
                    ? "bg-liminal-secondary text-white shadow-md scale-100"
                    : "bg-transparent text-foreground group-hover:bg-muted group-hover:scale-105",
                )}
              >
                <ArrowUpRight
                  className={cn(
                    "transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] transform-gpu size-6",
                    isActive
                      ? "rotate-45 text-white"
                      : "text-muted-foreground group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
                  )}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceContent;
