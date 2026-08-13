import { FolderSearch, LucideIcon, X } from "lucide-react";
import React from "react";
import LiminalButton from "@/components/shared/LiminalButton";
import { cn } from "@/lib/utils";

interface ManagementEmptyStateProps {
  icon?: LucideIcon;
  title?: string;
  description?: string;
  onClearFilters?: () => void;
  action?: React.ReactNode;
  className?: string;
}

// ManagementEmptyState Component
const ManagementEmptyState = ({
  icon: Icon = FolderSearch,
  title = "No Items Found",
  description = "No items match your current filters. Try adjusting your search criteria.",
  onClearFilters,
  action,
  className,
}: ManagementEmptyStateProps) => {
  return (
    <div
      className={cn(
        "rounded-xl border border-border/50 bg-card overflow-hidden",
        className,
      )}
    >
      <div className="flex flex-col items-center justify-center py-24 text-center px-4">
        {/* Empty State Icon */}
        <div className="w-20 h-20 rounded-full bg-zinc-100 flex items-center justify-center mb-5">
          <Icon className="size-8 text-muted-foreground/40" />
        </div>

        {/* Empty State Text */}
        <h3 className="text-xl font-bold font-heading tracking-tight mb-2">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mt-1 max-w-sm mb-6">
          {description}
        </p>

        {/* Clear Filters Button or Custom Action */}
        {action ? (
          action
        ) : onClearFilters ? (
          <LiminalButton
            icon={X}
            iconPosition="left"
            animateIcon={false}
            onClick={onClearFilters}
            className="rounded-lg min-h-10 px-4"
          >
            Clear filters
          </LiminalButton>
        ) : null}
      </div>
    </div>
  );
};

export default ManagementEmptyState;
