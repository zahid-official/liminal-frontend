import {
  blogCategories,
  blogSortOptions,
  BlogSortValue,
} from "@/components/modules/public/blog/blogData";
import { ManagementToolbar } from "@/components/shared/management";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowUpDown, Sliders } from "lucide-react";

// Interface for BlogControlsSection component props
interface BlogControlsSectionProps {
  searchQuery: string;
  onSearchChange: (val: string) => void;
  categoryFilter: string;
  onCategoryChange: (val: string) => void;
  sortOption: BlogSortValue | "";
  onSortChange: (val: BlogSortValue) => void;
  onClearFilters?: () => void;
}

// BlogControlsSection Component
const BlogControlsSection = ({
  searchQuery,
  onSearchChange,
  categoryFilter,
  onCategoryChange,
  sortOption,
  onSortChange,
  onClearFilters,
}: BlogControlsSectionProps) => {
  const hasActiveFilters = Boolean(
    searchQuery || categoryFilter || sortOption,
  );

  return (
    <ManagementToolbar
      searchValue={searchQuery}
      onSearchChange={onSearchChange}
      searchPlaceholder="Search articles, authors, excerpt..."
      hasActiveFilters={hasActiveFilters}
      onClearFilters={onClearFilters}
    >
      {/* Category Filter */}
      <div className="w-full sm:w-auto shrink-0">
        <Select value={categoryFilter} onValueChange={onCategoryChange}>
          <SelectTrigger className="w-full sm:w-auto relative pl-9">
            <Sliders className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground/50 pointer-events-none" />
            <SelectValue placeholder="Filter by Category" />
          </SelectTrigger>

          <SelectContent position="popper" align="start">
            {blogCategories.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat === "All" ? "All Categories" : cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Sort By */}
      <div className="w-full sm:w-auto shrink-0">
        <Select
          value={sortOption}
          onValueChange={(val) => onSortChange(val as BlogSortValue)}
        >
          <SelectTrigger className="w-full sm:w-auto relative pl-9">
            <ArrowUpDown className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground/50 pointer-events-none" />
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>

          <SelectContent position="popper" align="end">
            {blogSortOptions.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </ManagementToolbar>
  );
};

export default BlogControlsSection;
