import {
  furnitureCategories,
  furnitureSortOptions,
  FurnitureSortType,
  furnitureAvailabilityStatus,
} from "@/components/modules/public/services/furniture/furnitureData";
import { ManagementToolbar } from "@/components/shared/management";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowUpDown, Activity, Sliders } from "lucide-react";

// Interface for FurnitureControlsSection component props
interface FurnitureControlsSectionProps {
  searchQuery: string;
  onSearchChange: (val: string) => void;
  categoryFilter: string;
  onCategoryChange: (val: string) => void;
  statusFilter: string;
  onStatusChange: (val: string) => void;
  sortOption: FurnitureSortType | "";
  onSortChange: (val: FurnitureSortType) => void;
  onClearFilters?: () => void;
}

// FurnitureControlsSection Component
const FurnitureControlsSection = ({
  searchQuery,
  onSearchChange,
  categoryFilter,
  onCategoryChange,
  statusFilter,
  onStatusChange,
  sortOption,
  onSortChange,
  onClearFilters,
}: FurnitureControlsSectionProps) => {
  const hasActiveFilters = Boolean(
    searchQuery || categoryFilter || statusFilter || sortOption,
  );

  return (
    <ManagementToolbar
      searchValue={searchQuery}
      onSearchChange={onSearchChange}
      searchPlaceholder="Search furniture, SKU, materials..."
      hasActiveFilters={hasActiveFilters}
      onClearFilters={onClearFilters}
    >
      {/* Category Filter */}
      <div className="w-full sm:w-auto sm:min-w-44 shrink-0">
        <Select value={categoryFilter} onValueChange={onCategoryChange}>
          <SelectTrigger className="w-full relative pl-9">
            <Sliders className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground/50 pointer-events-none" />
            <SelectValue placeholder="Filter by Category" />
          </SelectTrigger>

          <SelectContent
            position="popper"
            className="min-w-(--radix-select-trigger-width) w-max"
          >
            {furnitureCategories.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat === "All" ? "All Categories" : cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Availability / Status Filter */}
      <div className="w-full sm:w-auto sm:min-w-44 shrink-0">
        <Select value={statusFilter} onValueChange={onStatusChange}>
          <SelectTrigger className="w-full relative pl-9">
            <Activity className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground/50 pointer-events-none" />
            <SelectValue placeholder="Filter by Status" />
          </SelectTrigger>

          <SelectContent
            position="popper"
            className="min-w-(--radix-select-trigger-width) w-max"
          >
            <SelectItem value="All">All Statuses</SelectItem>
            {furnitureAvailabilityStatus.map((status) => (
              <SelectItem key={status} value={status}>
                {status}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Sort By */}
      <div className="w-full sm:w-auto sm:min-w-40 shrink-0">
        <Select
          value={sortOption}
          onValueChange={(val) => onSortChange(val as FurnitureSortType)}
        >
          <SelectTrigger className="w-full relative pl-9">
            <ArrowUpDown className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground/50 pointer-events-none" />
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>

          <SelectContent
            position="popper"
            className="min-w-(--radix-select-trigger-width) w-max"
          >
            {furnitureSortOptions.map((opt) => (
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

export default FurnitureControlsSection;
