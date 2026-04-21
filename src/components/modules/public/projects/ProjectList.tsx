"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeader from "@/components/shared/SectionHeader";
import { cn } from "@/lib/utils";
import Link from "next/link";

// Project Data
const projects = [
  {
    id: 1,
    title: "Industrial Elegance Condo",
    category: "RESIDENTIAL",
    location: "Berlin, Germany",
    year: "2025",
    image: "/assets/project-1.jpg",
    slug: "industrial-elegance-condo",
  },
  {
    id: 2,
    title: "Minimalist Loft Design",
    category: "COMMERCIAL",
    location: "New York, USA",
    year: "2024",
    image: "/assets/project-1.jpg",
    slug: "minimalist-loft-design",
  },
  {
    id: 3,
    title: "Modern Villa Interior",
    category: "RESIDENTIAL",
    location: "Dubai, UAE",
    year: "2025",
    image: "/assets/project-1.jpg",
    slug: "modern-villa-interior",
  },
  {
    id: 4,
    title: "Boutique Hotel Lobby",
    category: "HOSPITALITY",
    location: "Paris, France",
    year: "2023",
    image: "/assets/project-1.jpg",
    slug: "boutique-hotel-lobby",
  },
  {
    id: 5,
    title: "Luxury Penthouse Suite",
    category: "RESIDENTIAL",
    location: "London, UK",
    year: "2024",
    image: "/assets/project-1.jpg",
    slug: "luxury-penthouse-suite",
  },
  {
    id: 6,
    title: "Corporate HQ Atrium",
    category: "COMMERCIAL",
    location: "Tokyo, Japan",
    year: "2025",
    image: "/assets/project-1.jpg",
    slug: "corporate-hq-atrium",
  },
];

const categories = ["ALL", "RESIDENTIAL", "COMMERCIAL", "HOSPITALITY"];

// ProjectList Component
const ProjectList = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredProjects =
    activeCategory === "ALL"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-muted/20 to-transparent pointer-events-none -z-10" />

      <div className="custom-container">
        {/* Section Header */}
        <SectionHeader
          variant="editorial"
          badgeText="PORTFOLIO"
          title={
            <>
              Curation Of{" "}
              <span className="text-liminal-secondary italic font-serif font-light underline underline-offset-8 decoration-1">
                Architectural
              </span>{" "}
              Narratives
            </>
          }
          description="Explore our curated selection of projects, where functionality meets aesthetic innovation. Each space is crafted with precision and attention to detail, reflecting our commitment to design excellence."
          className="animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out fill-mode-both"
        />

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 md:gap-8 mb-16 border-b border-border pb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "text-[11px] font-bold tracking-[0.3em] uppercase transition-all relative py-2 cursor-pointer",
                activeCategory === category
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {category}
              {activeCategory === category && (
                <div className="absolute bottom-0 left-0 right-0 h-px bg-liminal-secondary" />
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative aspect-4/5 overflow-hidden rounded-sm mb-6 bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Technical Overlay */}
                <div className="absolute top-6 right-6 flex flex-col items-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-white/40 text-4xl font-bold font-heading mb-2">
                    {String(project.id).padStart(2, "0")}
                  </div>
                  <span className="text-[9px] font-mono tracking-widest text-white bg-black/40 backdrop-blur-md px-2 py-0.5">
                    REF: PRJ_{String(project.id).padStart(3, "0")}
                  </span>
                </div>

                {/* Gradient Reveal */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Premium Action Button (Architectural Style) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 z-20 pointer-events-none group-hover:pointer-events-auto">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="relative group/btn w-24 h-24 flex items-center justify-center"
                  >
                    {/* Rotating Architectural Ring */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-dashed border-white/30 rounded-full animate-[spin_15s_linear_infinite] group-hover/btn:scale-110 group-hover/btn:border-white/60 transition-all duration-500" />

                    {/* Inner Glass Circle */}
                    <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex flex-col items-center justify-center transition-all duration-300 group-hover/btn:bg-white group-hover/btn:scale-95 translate-z-0">
                      <span className="text-xs font-bold tracking-[0.25em] text-white group-hover/btn:text-black transition-colors duration-300">
                        View
                      </span>
                      <span className="text-[10px] font-bold tracking-[0.25em] text-white group-hover/btn:text-black transition-colors duration-300">
                        Details
                      </span>
                    </div>

                    {/* Corner Bracket Decorations (Blueprint Style) */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/40 group-hover/btn:-top-2 group-hover/btn:-left-2 transition-all duration-500" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/40 group-hover/btn:-bottom-2 group-hover/btn:-right-2 transition-all duration-500" />
                  </Link>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-bold text-liminal-secondary tracking-[0.2em] uppercase mb-1 block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight group-hover:text-liminal-secondary transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-xl font-serif italic text-muted-foreground/40 font-light">
                    {project.year}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground border-t border-border/50 pt-4">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono uppercase tracking-widest opacity-50">
                      Location
                    </span>
                    <span className="font-medium tracking-wide text-foreground/80">
                      {project.location}
                    </span>
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

export default ProjectList;
