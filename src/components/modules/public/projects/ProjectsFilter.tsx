"use client";

import { cn } from "@/lib/utils";

// ProjectsFilter Props
interface ProjectsFilterProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  categoryCounts: Record<string, number>;
  totalCount: number;
  currentYear: string | number;
}

// ProjectsFilter Component
const ProjectsFilter = ({
  categories,
  activeCategory,
  setActiveCategory,
  categoryCounts,
  totalCount,
  currentYear,
}: ProjectsFilterProps) => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10">
      {/* Left: Classification Controller */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.3em] text-liminal-secondary">
            Classification
          </span>
          <div className="h-px w-8 bg-liminal-secondary" />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            const count = categoryCounts[category] || 0;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "group relative flex items-center gap-3 px-5 py-2.5 transition-all duration-300 border cursor-pointer",
                  isActive
                    ? "bg-liminal-dark border-liminal-dark text-background shadow-lg shadow-liminal-dark/10"
                    : " border-border/50 hover:border-liminal-secondary",
                )}
              >
                {/* Category Label */}
                <span className="text-[11px] uppercase tracking-[0.2em] font-semibold font-heading">
                  {category}
                </span>

                {/* Count Pill */}
                <span
                  className={cn(
                    "flex items-center justify-center min-w-[5.5 h-4.5 px-1.5 text-[10px] font-mono border transition-colors duration-300",
                    isActive
                      ? "bg-background/10 border-background/20 text-background"
                      : "bg-zinc-50 border-border/50 text-foreground/60 group-hover:text-foreground",
                  )}
                >
                  {count.toString().padStart(2, "0")}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Right: Archive Metadata */}
      <div className="hidden lg:flex flex-col items-end text-right space-y-2">
        <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.3em] text-foreground/50">
          Portfolio Archive
        </span>

        <div className="flex items-center gap-4">
          {/* Total Count */}
          <div className="text-right">
            <p className="text-3xl font-light tracking-tighter text-foreground leading-none">
              {totalCount.toString().padStart(2, "0")}
            </p>
            <p className="text-[10px] font-mono uppercase tracking-widest text-foreground/50 mt-1">
              Selected Works
            </p>
          </div>

          {/* Current Year */}
          <div className="w-px h-10 bg-foreground/50" />
          <div className="text-right">
            <p className="text-3xl font-light tracking-tighter text-foreground leading-none">
              {currentYear}
            </p>
            <p className="text-[9px] font-mono uppercase tracking-widest text-foreground/50 mt-1">
              Current Cycle
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsFilter;
