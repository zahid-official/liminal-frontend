import { RefObject } from "react";
import { cn } from "@/lib/utils";
import { Search, ArrowUpDown, SlidersHorizontal, LucideIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FilterBarProps<CategoryType extends string, SortType extends string> {
  categories: readonly CategoryType[] | CategoryType[];
  categoryCounts?: Record<CategoryType, number>;
  activeCategory: CategoryType;
  onCategoryChange: (category: CategoryType) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  searchPlaceholder?: string;
  sortBy?: SortType;
  onSortChange?: (sort: SortType) => void;
  sortOptions?: readonly { readonly value: SortType; readonly label: string }[] | { value: SortType; label: string }[];
  sortPlaceholder?: string;
  filterLabel?: string;
  showIcon?: boolean;
  icon?: LucideIcon;
  containerRef?: RefObject<HTMLDivElement | null>;
  className?: string;
}

const FilterBar = <CategoryType extends string, SortType extends string>({
  categories,
  categoryCounts,
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  searchPlaceholder = "Search...",
  sortBy,
  onSortChange,
  sortOptions = [],
  sortPlaceholder = "Sort Options",
  filterLabel = "Filter",
  showIcon = true,
  icon: IconComponent = SlidersHorizontal,
  containerRef,
  className,
}: FilterBarProps<CategoryType, SortType>) => {
  return (
    <>
      {/* Filter Heading */}
      <div className="flex items-center gap-2.5 pb-5">
        {showIcon && <IconComponent className="size-3.5 text-liminal-secondary" />}
        <span className="text-[11px] font-mono font-bold uppercase tracking-[0.3em] text-liminal-secondary">
          {filterLabel}
        </span>
        <div className="h-px w-8 bg-liminal-secondary" />
      </div>

      <div
        ref={containerRef}
        className={cn(
          "space-y-6 lg:space-y-0 flex flex-col lg:flex-row items-stretch lg:items-start justify-between gap-5 scroll-mt-48 mb-8",
          className,
        )}
      >
        {/* Left: Category Filter */}
        <div className="flex flex-wrap gap-2.5">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            const count = categoryCounts ? categoryCounts[category] : undefined;

            return (
              <button
                key={category}
                type="button"
                onClick={() => onCategoryChange(category)}
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
                {count !== undefined && (
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
                )}
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
              placeholder={searchPlaceholder}
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full h-10.5 pl-10 pr-4 bg-background border border-border/60 text-sm font-medium placeholder:text-muted-foreground/40 focus:outline-none focus:border-liminal-secondary/50 focus:ring-2 focus:ring-liminal-secondary/10 transition-all duration-300 rounded-none"
            />
          </div>

          {/* Sort Dropdown */}
          {onSortChange && sortOptions.length > 0 && (
            <div className="w-full sm:w-auto shrink-0">
              <Select
                value={sortBy || undefined}
                onValueChange={(val) => onSortChange(val as SortType)}
              >
                <SelectTrigger className="w-full sm:w-auto h-10.5! border border-border/60 bg-background! text-sm font-medium focus:border-liminal-secondary/50 focus:ring-2 focus:ring-liminal-secondary/10 transition-all rounded-none pl-8 shadow-none relative flex items-center justify-start gap-2">
                  <ArrowUpDown className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground/50 pointer-events-none" />
                  <SelectValue placeholder={sortPlaceholder} />
                </SelectTrigger>

                {/* Select Content */}
                <SelectContent
                  position="popper"
                  align="end"
                  className="border border-border/60 bg-background/98 backdrop-blur-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] rounded-none"
                >
                  {sortOptions.map((opt) => (
                    <SelectItem
                      key={opt.value}
                      value={opt.value}
                      className="text-sm whitespace-nowrap cursor-pointer rounded-none hover:bg-zinc-50 focus:bg-zinc-50 focus:text-liminal-secondary py-2.5 px-4 transition-all"
                    >
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FilterBar;
