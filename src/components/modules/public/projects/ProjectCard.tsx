"use client";

import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

// Project Interface
export interface Project {
  id: string | number;
  title: string;
  category: string;
  location: string;
  year: string;
  status: "Completed" | "In Progress" | "Concept";
  image: string;
  client: string;
  featured?: boolean;
}

// Project Card Props
interface ProjectCardProps {
  project: Project;
  className?: string;
}

// Project Card Component
const ProjectCard = ({ project, className }: ProjectCardProps) => {
  const metaInfo = [
    { label: "Location", value: project.location },
    { label: "Archive", value: project.year },
    { label: "Collaborator", value: project.client },
    { label: "Status", value: project.status },
  ];

  return (
    <div
      className={cn(
        "group relative border border-border/40 p-1.5 bg-background/50 backdrop-blur-sm hover:border-liminal-secondary transition-all duration-500 ease-in-out hover:shadow-2xl hover:shadow-liminal-secondary/5 overflow-hidden",
        className,
      )}
    >
      {/* Technical Numbering */}
      <div className="absolute top-4 right-5.5 text-4xl font-black text-background/30 group-hover:text-background/70 transition-all duration-1000 select-none pointer-events-none z-10 uppercase italic">
        {String(project.id).padStart(2, "0")}
      </div>

      {/* Project Image Container */}
      <div className="relative aspect-4/5 overflow-hidden bg-muted">
        <Image
          src={project.image}
          alt={project.title}
          fill
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110 transform-gpu will-change-transform backface-hidden"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-8">
          <div className="space-y-1 translate-y-8 group-hover:translate-y-0 transition-transform duration-700 delay-100">
            {/* Title and Category */}
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-background/80">
                {project.category}
              </span>
              <div className="flex items-center gap-4">
                <h3 className="font-heading text-xl font-bold text-white uppercase tracking-tight">
                  {project.title}
                </h3>
                <div className="h-px flex-1 bg-background/20 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 delay-100" />
              </div>
            </div>

            {/* Meta Info */}
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-background/10">
              {metaInfo.map((item, index) => (
                <div key={index} className="space-y-1">
                  <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest block">
                    {item.label}
                  </span>
                  <p className="text-xs font-bold text-white uppercase">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Base Info */}
      <div className="pt-5 pb-3 px-2.5 group-hover:bg-liminal-secondary/5 transition-colors duration-700">
        <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest block">
          {project.category} / {project.year}
        </span>

        <div className="flex justify-between items-center gap-4">
          <h4 className="text-sm font-bold uppercase tracking-tight text-foreground/90">
            {project.title}
          </h4>

          {/* View Details Action */}
          <div className="flex items-center gap-2 group/details cursor-pointer shrink-0">
            {/* Button Text */}
            <div className="relative">
              <span className="text-xs font-semibold uppercase text-liminal-secondary opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500 ease-out delay-100 block will-change-transform">
                View Details
              </span>
              {/* Border Bottom Animation */}
              <div className="absolute -bottom-0.5 right-0 h-px bg-liminal-secondary w-0 group-hover/details:w-full transition-[width] duration-500 ease-in-out" />
            </div>

            {/* Arrow Icon */}
            <div className="size-8 rounded-full border border-border flex items-center justify-center text-muted-foreground transition-all duration-300 ease-in-out group-hover:border-liminal-secondary group-hover:text-liminal-secondary group-hover:bg-liminal-secondary/5 group-hover/details:bg-liminal-secondary group-hover/details:text-background group-hover/details:border-liminal-secondary">
              <ArrowUpRight className="size-4 transition-transform duration-500 ease-in-out group-hover/details:rotate-45 will-change-transform" />
            </div>
          </div>
        </div>
      </div>

      {/* Animated Border Reveal on Hover */}
      <div className="absolute top-0 left-0 w-0 h-0.5 bg-liminal-secondary transition-all duration-500 ease-in-out group-hover:w-full" />
      <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-liminal-secondary transition-all duration-500 ease-in-out group-hover:w-full" />
    </div>
  );
};

export default ProjectCard;
