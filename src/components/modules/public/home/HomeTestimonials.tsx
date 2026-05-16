"use client";

import SectionHeader from "@/components/shared/SectionHeader";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import TestimonialRating from "./TestimonialRating";

// Testimonial Data
const testimonials = [
  {
    id: 1,
    name: "Shahin Alam",
    role: "Homeowner, Gulshan",
    quote:
      "Liminal transformed our apartment into something we couldn't have imagined. The attention to material selection and spatial flow made every room feel considered and intentional. It's not just beautiful — it feels like us.",
    initial: "S",
  },
  {
    id: 2,
    name: "Noah Mitchell",
    role: "CEO, Atlas Ventures",
    quote:
      "Our new office space has genuinely changed how our team works. The design balances openness with privacy, energy with calm. Clients always comment on the atmosphere the moment they walk in.",
    initial: "N",
  },
  {
    id: 3,
    name: "Morgan Dufresne",
    role: "Creative Director",
    quote:
      "Working with Liminal felt like a true collaboration. They understood our vision before we could fully articulate it, then elevated it with details we never would have considered. Exceptional craft.",
    initial: "M",
  },
  {
    id: 4,
    name: "Liam Reynolds",
    role: "Property Developer",
    quote:
      "The professional guidance on our commercial redesign was outstanding. Every design decision was backed by clear reasoning, and the results exceeded our expectations in both aesthetics and functionality.",
    initial: "L",
  },
  {
    id: 5,
    name: "Emma Thompson",
    role: "Homeowner, Banani",
    quote:
      "From concept to completion, the process was seamless. What impressed me most was how they considered how we actually live — the light at different times of day, our routines, how we gather. The result is a home that breathes.",
    initial: "E",
  },
];

// HomeTestimonials Component
const HomeTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const goToNext = () => {
    setActiveIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  const current = testimonials[activeIndex];

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-24 md:py-32 lg:py-40 overflow-hidden relative bg-zinc-50/80"
    >
      <div className="custom-container relative z-10">
        {/* Section Header */}
        <SectionHeader
          variant="manifesto"
          badgeText="Client Voices"
          headingId="testimonials-heading"
          title={
            <>
              Words That{" "}
              <span className="italic font-serif font-light text-liminal-secondary">
                Validate
              </span>
            </>
          }
          className="mb-16 lg:mb-24"
        />

        {/* Single Spotlight Testimonial */}
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Giant Quotation Mark */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[8rem] md:text-[10rem] text-liminal-secondary/[0.07] font-serif leading-none select-none pointer-events-none">
            &ldquo;
          </div>

          {/* Quote */}
          <div className="relative min-h-[180px] md:min-h-[200px] flex items-center justify-center">
            <blockquote className="px-4">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-[2rem] italic font-serif text-foreground/85 leading-[1.5] md:leading-[1.6] max-w-3xl mx-auto">
                &ldquo;{current.quote}&rdquo;
              </p>
            </blockquote>
          </div>

          {/* Author Info */}
          <div className="mt-10 md:mt-12 flex flex-col items-center gap-4">
            {/* Initial Avatar */}
            <div className="w-14 h-14 rounded-full bg-liminal-secondary flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-xl font-heading leading-none">
                {current.initial}
              </span>
            </div>

            <div className="space-y-1">
              <h4 className="text-lg font-bold font-heading tracking-tight">
                {current.name}
              </h4>
              <p className="text-sm text-muted-foreground font-light">
                {current.role}
              </p>
            </div>

            {/* Decorative Line */}
            <div className="flex items-center gap-3 mt-2">
              <div className="w-8 h-px bg-liminal-secondary/40" />
              <div className="w-1.5 h-1.5 rotate-45 border border-liminal-secondary/60" />
              <div className="w-8 h-px bg-liminal-secondary/40" />
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              onClick={goToPrev}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-full border border-foreground/10 flex items-center justify-center hover:border-liminal-secondary hover:bg-liminal-secondary hover:text-background transition-all duration-300 cursor-pointer"
            >
              <ChevronLeft className="size-4" />
            </button>

            <span className="text-sm font-mono tracking-[0.3em] text-muted-foreground/60 tabular-nums min-w-[60px] text-center">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(testimonials.length).padStart(2, "0")}
            </span>

            <button
              onClick={goToNext}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-full border border-foreground/10 flex items-center justify-center hover:border-liminal-secondary hover:bg-liminal-secondary hover:text-background transition-all duration-300 cursor-pointer"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>

        {/* Rating Stats Bar */}
        <div className="mt-16 md:mt-20 pt-10 border-t border-foreground/10 flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-12">
          <TestimonialRating />
          <div className="hidden sm:block w-px h-14 bg-foreground/15" />
          <p className="text-sm sm:text-base font-semibold text-foreground/80 max-w-xs text-center sm:text-left leading-relaxed">
            Trusted by homeowners, developers, and creative businesses across
            Bangladesh and beyond.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;
