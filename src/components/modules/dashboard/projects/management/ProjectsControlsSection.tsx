import {
  projectCategoryOptions,
  projectSortOptions,
  ProjectSortValue,
  projectStatusOptions,
} from "@/components/modules/public/projects/projectsData";
import LiminalButton from "@/components/shared/LiminalButton";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowUpDown, Activity, Search, Sliders, X } from "lucide-react";

// Interface for ProjectsControlsSection component props
interface ProjectsControlsSectionProps {
  searchQuery: string;
  onSearchChange: (val: string) => void;
  categoryFilter: string;
  onCategoryChange: (val: string) => void;
  statusFilter: string;
  onStatusChange: (val: string) => void;
  sortOption: ProjectSortValue | "";
  onSortChange: (val: ProjectSortValue) => void;
  onClearFilters?: () => void;
}

// ProjectsControlsSection Component
const ProjectsControlsSection = ({
  searchQuery,
  onSearchChange,
  categoryFilter,
  onCategoryChange,
  statusFilter,
  onStatusChange,
  sortOption,
  onSortChange,
  onClearFilters,
}: ProjectsControlsSectionProps) => {
  // Check if there are any active filters
  const hasActiveFilters = Boolean(
    searchQuery || categoryFilter || statusFilter || sortOption,
  );

  // Handle clear filters
  const handleClear = () => {
    if (onClearFilters) {
      onClearFilters();
    } else {
      onSearchChange("");
      onCategoryChange("");
      onStatusChange("");
      onSortChange("" as ProjectSortValue);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-card p-4 rounded-xl border border-border/50">
      {/* Search Bar */}
      <div className="relative w-full sm:w-72 md:w-96">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        <Input
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-9 focus-visible:ring-liminal-secondary/10 focus-visible:border-liminal-secondary"
        />
      </div>

      {/* Filter & Sort Dropdowns */}
      <div className="flex items-center gap-3 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
        {/* Clear Filters Button */}
        {hasActiveFilters && (
          <LiminalButton
            variant="outline"
            icon={X}
            iconPosition="left"
            animateIcon={false}
            onClick={handleClear}
            className="min-h-10 px-4 text-sm rounded-lg shrink-0"
          >
            Clear
          </LiminalButton>
        )}

        {/* Category Filter */}
        <div className="w-full sm:w-auto sm:min-w-44 sm:max-w-48 shrink-0">
          <Select value={categoryFilter} onValueChange={onCategoryChange}>
            {/* Select Trigger */}
            <SelectTrigger className="w-full relative pl-9">
              <Sliders className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground/50 pointer-events-none" />
              <SelectValue placeholder="Filter by Category" />
            </SelectTrigger>

            {/* Select Content */}
            <SelectContent
              position="popper"
              className="w-(--radix-select-trigger-width)"
            >
              {projectCategoryOptions.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Status Filter */}
        <div className="w-full sm:w-auto sm:min-w-40 sm:max-w-44 shrink-0">
          <Select value={statusFilter} onValueChange={onStatusChange}>
            {/* Select Trigger */}
            <SelectTrigger className="w-full relative pl-9">
              <Activity className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground/50 pointer-events-none" />
              <SelectValue placeholder="Filter by Status" />
            </SelectTrigger>

            {/* Select Content */}
            <SelectContent
              position="popper"
              className="w-(--radix-select-trigger-width)"
            >
              {projectStatusOptions.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Sort By */}
        <div className="w-full sm:w-auto sm:min-w-36 sm:max-w-44 shrink-0">
          <Select
            value={sortOption}
            onValueChange={(val) => onSortChange(val as ProjectSortValue)}
          >
            {/* Select Trigger */}
            <SelectTrigger className="w-full relative pl-9">
              <ArrowUpDown className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground/50 pointer-events-none" />
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>

            {/* Select Content */}
            <SelectContent
              position="popper"
              className="w-(--radix-select-trigger-width)"
            >
              {projectSortOptions.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default ProjectsControlsSection;
