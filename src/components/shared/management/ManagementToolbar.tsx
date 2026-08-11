import { Search, X } from "lucide-react";
import React from "react";
import LiminalButton from "@/components/shared/LiminalButton";
import { Input } from "@/components/ui/input";

interface ManagementToolbarProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  searchPlaceholder?: string;
  hasActiveFilters?: boolean;
  onClearFilters?: () => void;
  children?: React.ReactNode;
  actions?: React.ReactNode;
}

// ManagementToolbar Component
const ManagementToolbar = ({
  searchValue,
  onSearchChange,
  searchPlaceholder = "Search...",
  hasActiveFilters = false,
  onClearFilters,
  children,
  actions,
}: ManagementToolbarProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-card p-4 rounded-xl border border-border/50">
      {/* Search Bar */}
      <div className="relative w-full sm:w-72 md:w-96">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        <Input
          placeholder={searchPlaceholder}
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-9 focus-visible:ring-liminal-secondary/10 focus-visible:border-liminal-secondary"
        />
      </div>

      {/* Filter Selects & Action Slots */}
      <div className="flex items-center gap-3 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
        {/* Clear Filters Button */}
        {hasActiveFilters && onClearFilters && (
          <LiminalButton
            variant="outline"
            icon={X}
            iconPosition="left"
            animateIcon={false}
            onClick={onClearFilters}
            className="min-h-10 px-4 text-sm rounded-lg shrink-0"
          >
            Clear
          </LiminalButton>
        )}

        {/* Filter Dropdowns / Slots */}
        {children}

        {/* Custom Actions (e.g. Export, View switch) */}
        {actions}
      </div>
    </div>
  );
};

export default ManagementToolbar;
