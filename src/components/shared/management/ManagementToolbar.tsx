"use client";

import { Search, X } from "lucide-react";
import React, { useRef } from "react";
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
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClearSearch = () => {
    onSearchChange("");
    inputRef.current?.focus();
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-card p-4 rounded-xl border border-border/50">
      {/* Search Bar */}
      <div className="relative w-full sm:w-72 md:w-96">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
        <Input
          ref={inputRef}
          placeholder={searchPlaceholder}
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-9 pr-9 focus-visible:ring-liminal-secondary/10 focus-visible:border-liminal-secondary"
        />

        {/* Inline Clear Button */}
        {searchValue && (
          <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center">
            <button
              type="button"
              onClick={handleClearSearch}
              title="Clear search"
              className="p-1 rounded-sm text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors cursor-pointer"
            >
              <X className="size-3.5" />
              <span className="sr-only">Clear search</span>
            </button>
          </div>
        )}
      </div>

      {/* Filter Selects & Action Slots */}
      <div className="flex items-center gap-3 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
        {/* Clear All Filters Button */}
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
