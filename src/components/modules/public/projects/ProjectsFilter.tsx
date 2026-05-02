"use client";

import { cn } from "@/lib/utils";

// ProjectsFilter Props
interface ProjectsFilterProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

// ProjectsFilter Component
const ProjectsFilter = ({
  categories,
  activeCategory,
  setActiveCategory,
}: ProjectsFilterProps) => {
  return (
    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-16">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={cn(
            "relative px-6 py-2 text-[10px] font-bold uppercase tracking-[0.4em] transition-all duration-500",
            activeCategory === category
              ? "text-foreground"
              : "text-zinc-400 hover:text-zinc-600",
          )}
        >
          {category}
          {activeCategory === category && (
            <div className="absolute inset-0 border border-liminal-secondary/30 rounded-sm -z-10 animate-in fade-in zoom-in duration-500" />
          )}
          {activeCategory === category && (
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-liminal-secondary rounded-full translate-y-2" />
          )}
        </button>
      ))}
    </div>
  );
};

export default ProjectsFilter;
