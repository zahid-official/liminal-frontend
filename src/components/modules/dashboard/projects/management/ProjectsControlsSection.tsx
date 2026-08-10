import { ArrowUpDown, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  projectCategories,
  projectSortOptions,
  ProjectSortValue,
} from "@/components/modules/public/projects/projectsData";

interface ProjectsControlsSectionProps {
  searchQuery: string;
  onSearchChange: (val: string) => void;
  categoryFilter: string;
  onCategoryChange: (val: string) => void;
  statusFilter: string;
  onStatusChange: (val: string) => void;
  sortOption: ProjectSortValue | "";
  onSortChange: (val: ProjectSortValue) => void;
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
}: ProjectsControlsSectionProps) => {
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
        {/* Category Filter */}
        <Select value={categoryFilter} onValueChange={onCategoryChange}>
          <SelectTrigger className="w-35 bg-background/50">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Categories</SelectItem>
            {projectCategories
              .filter((cat) => cat !== "All")
              .map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>

        {/* Status Filter */}
        <Select value={statusFilter} onValueChange={onStatusChange}>
          <SelectTrigger className="w-32.5 bg-background/50">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Status</SelectItem>
            <SelectItem value="Completed">Completed</SelectItem>
            <SelectItem value="In Progress">In Progress</SelectItem>
            <SelectItem value="Concept">Concept</SelectItem>
          </SelectContent>
        </Select>

        {/* Sort By */}
        <div className="w-full sm:w-auto sm:min-w-36 sm:max-w-44 shrink-0">
          <Select
            value={sortOption || undefined}
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
