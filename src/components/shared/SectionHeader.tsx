import { cn } from "@/lib/utils";
import * as React from "react";
import SectionBadge from "./SectionBadge";

type SectionHeaderVariant = "editorial" | "centered" | "inline";

interface SectionHeaderProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "title"
> {
  badgeText: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  variant?: SectionHeaderVariant;
  headingId?: string;
  badgeClassName?: string;
}

/**
 * Reusable SectionHeader Component
 * 
 * Variants:
 * - editorial: Split layout 30/70 with background grid lines (Default)
 * - centered: Centered badge, title, and description
 * - inline: Left-aligned with a horizontal line prefix to the badge
 */
const SectionHeader = ({
  badgeText,
  title,
  description,
  variant = "editorial",
  headingId,
  badgeClassName,
  className,
  ...props
}: SectionHeaderProps) => {
  // Editorial Variant (30/70 Split with lines)
  if (variant === "editorial") {
    return (
      <div
        className={cn(
          "flex flex-col lg:flex-row mb-16 lg:mb-24 lg:pt-12 relative text-center lg:text-left",
          className
        )}
        {...props}
      >
        {/* Horizontal Line passing above everything */}
        <div className="hidden lg:block absolute top-0 left-0 right-0 h-px bg-border -z-10" />
        {/* Vertical Line dividing the columns */}
        <div className="hidden lg:block absolute -top-8 -bottom-16 left-[30%] w-px bg-border -z-10" />

        {/* Left: Badge */}
        <div className="w-full lg:w-[30%] shrink-0 relative mb-6 lg:mb-0 lg:pr-8 flex justify-center lg:block">
          <SectionBadge 
            text={badgeText} 
            className={cn("lg:bg-background", badgeClassName)} 
          />
        </div>

        {/* Right: Title & Description */}
        <div className="lg:pl-16 relative z-10 w-full xl:w-2/3">
          <h2
            id={headingId}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight font-heading"
          >
            {title}
          </h2>
          {description && (
            <p className="max-w-2xl mx-auto lg:mx-0 text-muted-foreground text-[16px] sm:text-lg leading-relaxed mt-7 font-light">
              {description}
            </p>
          )}
        </div>
      </div>
    );
  }

  // Centered Variant
  if (variant === "centered") {
    return (
      <div
        className={cn(
          "flex flex-col items-center text-center max-w-4xl mx-auto space-y-7",
          className
        )}
        {...props}
      >
        <SectionBadge text={badgeText} className={badgeClassName} />
        <h2
          id={headingId}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight font-heading"
        >
          {title}
        </h2>
        {description && (
          <p className="max-w-2xl text-muted-foreground text-[16px] sm:text-lg leading-relaxed font-light">
            {description}
          </p>
        )}
      </div>
    );
  }

  // Inline Variant (Like About Us)
  return (
    <div
      className={cn(
        "flex flex-col items-center lg:items-start text-center lg:text-left space-y-7",
        className
      )}
      {...props}
    >
      {/* Editorial Line Badge */}
      <div className="flex items-center gap-5">
        <div className={cn("w-14 h-px bg-liminal-secondary", badgeClassName?.includes("white") && "bg-white", badgeClassName)} />
        <span className={cn("text-[11px] font-bold uppercase tracking-[0.45em] text-liminal-secondary", badgeClassName)}>
          {badgeText}
        </span>
      </div>

      <h2
        id={headingId}
        className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight font-heading"
      >
        {title}
      </h2>

      {description && (
        <p className="text-muted-foreground text-[16px] sm:text-lg leading-relaxed max-w-xl font-light">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
