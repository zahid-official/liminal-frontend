import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  dotClassName?: string;
}

// SectionBadge Component
const SectionBadge = ({
  text,
  className,
  dotClassName,
  ...props
}: SectionBadgeProps) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border/60 text-foreground text-[10px] sm:text-xs font-bold tracking-widest uppercase",
        className,
      )}
      {...props}
    >
      <span
        className={cn("w-1.5 h-1.5 rounded-full bg-liminal-secondary", dotClassName)}
      ></span>
      <span>{text}</span>
    </div>
  );
};

export default SectionBadge;
