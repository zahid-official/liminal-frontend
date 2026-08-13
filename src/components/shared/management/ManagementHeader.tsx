import { LucideIcon } from "lucide-react";
import React from "react";
import { Badge } from "@/components/ui/badge";

interface ManagementHeaderProps {
  title: string;
  description: string;
  icon: LucideIcon;
  action?: React.ReactNode;
  badge?: React.ReactNode;
  totalCount?: number;
  children?: React.ReactNode;
}

// ManagementHeader Component
const ManagementHeader = ({
  title,
  description,
  icon: Icon,
  action,
  badge,
  totalCount,
  children,
}: ManagementHeaderProps) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      {/* Title & Icon */}
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center size-12 rounded-lg bg-liminal-secondary/8 shrink-0">
          <Icon className="size-6 text-liminal-secondary" />
        </div>

        <div>
          <div className="flex items-center gap-2.5">
            <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
            {badge ? (
              badge
            ) : typeof totalCount === "number" ? (
              <Badge
                variant="secondary"
                className="font-normal text-xs px-2.5 py-0.5 rounded-full"
              >
                {totalCount} Total
              </Badge>
            ) : null}
          </div>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </div>

      {/* Action / Extra Controls */}
      <div className="flex items-center gap-3">
        {children}
        {action && <div>{action}</div>}
      </div>
    </div>
  );
};

export default ManagementHeader;
