import { useState, useMemo, useEffect, RefObject } from "react";
import { cn } from "@/lib/utils";
import { Search, ArrowUpDown, SlidersHorizontal } from "lucide-react";
import {
  projects as allProjects,
  projectCategories,
  filterProjects,
  projectSortOptions,
  type ProjectCategory,
  type ProjectSortValue,
  type IProject,
} from "./projectsData";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProjectsFilterProps {
  onFilterChange: (filteredProjects: IProject[]) => void;
  containerRef?: RefObject<HTMLDivElement | null>;
}

const ProjectsFilter = ({
  onFilterChange,
  containerRef,
}: ProjectsFilterProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [sortBy, setSortBy] = useState<ProjectSortValue | "">("");

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: allProjects.length };
    allProjects.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered and sorted projects
  const filteredProjects = useMemo(() => {
    return filterProjects({
      search: searchQuery,
      category: activeCategory,
      sort: sortBy || undefined,
    });
  }, [searchQuery, activeCategory, sortBy]);

  // Notify parent on change
  useEffect(() => {
    onFilterChange(filteredProjects);
  }, [filteredProjects, onFilterChange]);

  const handleCategoryChange = (category: ProjectCategory) => {
    setActiveCategory(category);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

  return (
    <>
      {/* Filter Heading */}
      <div className="flex items-center gap-2.5 pb-5">
        <SlidersHorizontal className="size-3.5 text-liminal-secondary" />
        <span className="text-[11px] font-mono font-bold uppercase tracking-[0.3em] text-liminal-secondary">
          Filter Projects
        </span>
        <div className="h-px w-8 bg-liminal-secondary" />
      </div>

      <div
        ref={containerRef}
        className="space-y-6 lg:space-y-0 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-5 scroll-mt-48 mb-8"
      >
        {/* Left: Category Filter */}
        <div className="flex flex-wrap gap-2.5">
          {projectCategories.map((category) => {
            const isActive = activeCategory === category;
            const count = categoryCounts[category] || 0;

            return (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={cn(
                  "group relative flex items-center gap-3 px-4 py-2.5 transition-all duration-300 border cursor-pointer",
                  isActive
                    ? "bg-liminal-dark border-liminal-dark text-background shadow-lg shadow-liminal-dark/10"
                    : "border-border/50 hover:border-liminal-secondary bg-background",
                )}
              >
                <span className="text-[11px] uppercase tracking-[0.2em] font-semibold font-heading">
                  {category}
                </span>
                <span
                  className={cn(
                    "flex items-center justify-center min-w-5 h-4.5 px-1.5 text-[10px] font-mono border transition-colors duration-300",
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

        {/* Right: Sort & Search controls */}
        <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full lg:w-auto">
          {/* Search Bar */}
          <div className="relative w-full sm:w-60">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground/50" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full h-10.5 pl-10 pr-4 bg-background border border-border/60 text-sm font-medium placeholder:text-muted-foreground/40 focus:outline-none focus:border-liminal-secondary/50 focus:ring-2 focus:ring-liminal-secondary/10 transition-all duration-300 rounded-none"
            />
          </div>

          {/* Sort Dropdown */}
          <div className="w-full sm:w-40 shrink-0">
            <Select
              value={sortBy || undefined}
              onValueChange={(val) => setSortBy(val as ProjectSortValue)}
            >
              <SelectTrigger className="w-full h-10.5! border border-border/60 bg-background! text-sm font-medium focus:border-liminal-secondary/50 focus:ring-2 focus:ring-liminal-secondary/10 transition-all rounded-none pl-10 pr-4 shadow-none relative flex items-center justify-start gap-2">
                <ArrowUpDown className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground/50 pointer-events-none" />
                <SelectValue placeholder="Sort Projects" />
              </SelectTrigger>
              <SelectContent
                position="popper"
                className="w-(--radix-select-trigger-width) border border-border/60 bg-background/98 backdrop-blur-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] rounded-none"
              >
                {projectSortOptions.map((opt) => (
                  <SelectItem
                    key={opt.value}
                    value={opt.value}
                    className="text-sm cursor-pointer rounded-none hover:bg-zinc-50 focus:bg-zinc-50 focus:text-liminal-secondary py-2.5 px-4 transition-all"
                  >
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsFilter;
