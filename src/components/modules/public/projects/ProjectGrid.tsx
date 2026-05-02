"use client";

import SectionHeader from "@/components/shared/SectionHeader";
import { cn } from "@/lib/utils";
import { useMemo, useState } from "react";
import ProjectsFilter from "./ProjectsFilter";
import ProjectCard, { Project } from "./ProjectCard";

// Projects Data
const projectsData: Project[] = [
  {
    id: "01",
    title: "The Minimalist Sanctuary",
    category: "Residential",
    location: "Gulshan, Dhaka",
    year: "2023",
    status: "Completed",
    image: "/assets/projects/villa.png",
    client: "Private Client",
    featured: true,
  },
  {
    id: "02",
    title: "Urban Loft Concept",
    category: "Commercial",
    location: "Banani, Dhaka",
    year: "2024",
    status: "Completed",
    image: "/assets/projects/retail.png",
    client: "Moderne Retail Group",
  },
  {
    id: "03",
    title: "The Apex Residence",
    category: "Residential",
    location: "Baridhara",
    year: "2023",
    status: "Completed",
    image: "/assets/projects/premium-villa.png",
    client: "Rahman Family",
  },
  {
    id: "04",
    title: "Corporate Zen HQ",
    category: "Commercial",
    location: "Motijheel, Dhaka",
    year: "2024",
    status: "In Progress",
    image: "/assets/projects/office-zen.png",
    client: "Zenith Global",
  },
  {
    id: "05",
    title: "Luminous Glass House",
    category: "Residential",
    location: "Uttara, Dhaka",
    year: "2023",
    status: "Completed",
    image: "/assets/projects/glass-house.png",
    client: "S. Al-Mamun",
  },
  {
    id: "06",
    title: "Institutional Pavilion",
    category: "Institutional",
    location: "Purbachal, Dhaka",
    year: "2025",
    status: "Concept",
    image: "/assets/projects/pavilion.png",
    client: "Cultural Foundation",
  },
  {
    id: "07",
    title: "Modern Minimal Interior",
    category: "Interior",
    location: "Dhanmondi, Dhaka",
    year: "2023",
    status: "Completed",
    image: "/assets/projects/interior-minimal.png",
    client: "T. Karim",
  },
  {
    id: "08",
    title: "Luxury Penthouse",
    category: "Residential",
    location: "Gulshan 2, Dhaka",
    year: "2024",
    status: "In Progress",
    image: "/assets/projects/penthouse.png",
    client: "Elite Living",
  },
];

// Categories
const categories = [
  "All",
  "Residential",
  "Commercial",
  "Institutional",
  "Interior",
];

// ProjectsGrid Component
const ProjectGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projectsData;
    return projectsData.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="py-20 md:py-32 bg-background text-zinc-900 overflow-hidden">
      <div className="custom-container">
        {/* Section Header */}
        <SectionHeader
          badgeText="Portfolio"
          title={
            <>
              Selected <br />
              <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                Works
              </span>
            </>
          }
          description="A curated selection of our most ambitious projects, spanning residential masterpieces, commercial hubs, and experimental spatial concepts."
          variant="inline"
          className="mb-12"
        />

        {/* Filter */}
        <ProjectsFilter
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                "animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both",
                `delay-[${index * 100}ms]`,
              )}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="py-32 text-center border border-zinc-200 bg-zinc-50/50">
            <p className="text-zinc-400 font-mono text-sm uppercase tracking-widest">
              No projects found in this category
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectGrid;
