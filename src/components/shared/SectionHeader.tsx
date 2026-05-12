import { cn } from "@/lib/utils";
import * as React from "react";
import SectionBadge from "./SectionBadge";

type SectionHeaderVariant =
  | "editorial"
  | "centered"
  | "inline"
  | "split"
  | "manifesto"
  | "simple";

interface SectionHeaderProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "title"
> {
  badgeText?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  variant?: SectionHeaderVariant;
  headingId?: string;
  badgeClassName?: string;
  badgeDotClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

/**
 * Reusable SectionHeader Component
 *
 * Variants:
 * - editorial: Split layout 30/70 with background grid lines (Default)
 * - centered: Centered badge, title, and description
 * - inline: Left-aligned with a horizontal line prefix to the badge
 * - split: Grid layout with Title (Left) and Description (Right)
 * - simple: Left-aligned with a SectionBadge (Pill style)
 */
const SectionHeader = ({
  badgeText,
  title,
  description,
  variant = "editorial",
  headingId,
  badgeClassName,
  badgeDotClassName,
  titleClassName,
  descriptionClassName,
  className,
  ...props
}: SectionHeaderProps) => {
  // Editorial Variant (30/70 Split with lines)
  if (variant === "editorial") {
    return (
      <div
        className={cn(
          "flex flex-col lg:flex-row mb-16 lg:mb-24 lg:pt-12 relative text-center lg:text-left",
          className,
        )}
        {...props}
      >
        {/* Horizontal Line passing above everything */}
        <div className="hidden lg:block absolute top-0 left-0 right-0 h-px bg-border -z-10" />
        {/* Vertical Line dividing the columns */}
        <div className="hidden lg:block absolute -top-8 -bottom-16 left-[30%] w-px bg-border -z-10" />

        {/* Left: Badge */}
        <div className="w-full lg:w-[30%] shrink-0 relative mb-6 lg:mb-0 lg:pr-8 flex justify-center lg:block">
          {badgeText && (
            <SectionBadge
              text={badgeText}
              className={cn("lg:bg-background", badgeClassName)}
              dotClassName={badgeDotClassName}
            />
          )}
        </div>

        {/* Right: Title & Description */}
        <div className="lg:pl-16 relative z-10 w-full xl:w-2/3">
          <h2
            id={headingId}
            className={cn(
              "text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight font-heading",
              titleClassName,
            )}
          >
            {title}
          </h2>
          {description && (
            <p
              className={cn(
                "max-w-2xl mx-auto lg:mx-0 text-muted-foreground text-[16px] sm:text-lg leading-relaxed mt-7 font-light",
                descriptionClassName,
              )}
            >
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
          className,
        )}
        {...props}
      >
        {badgeText && (
          <SectionBadge
            text={badgeText}
            className={badgeClassName}
            dotClassName={badgeDotClassName}
          />
        )}
        <h2
          id={headingId}
          className={cn(
            "text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight font-heading",
            titleClassName,
          )}
        >
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              "max-w-2xl text-muted-foreground text-[16px] sm:text-lg leading-relaxed font-light",
              descriptionClassName,
            )}
          >
            {description}
          </p>
        )}
      </div>
    );
  }

  // Manifesto Variant (Centered with lines)
  if (variant === "manifesto") {
    return (
      <div
        className={cn(
          "flex flex-col items-center text-center max-w-4xl mx-auto space-y-7",
          className,
        )}
        {...props}
      >
        {badgeText && (
          <div className="flex items-center justify-center gap-4">
            <div
              className={cn(
                "w-12 h-px bg-liminal-secondary/40",
                badgeDotClassName,
              )}
            />
            <span
              className={cn(
                "text-[10px] font-bold uppercase tracking-[0.45em] text-liminal-secondary",
                badgeClassName,
              )}
            >
              {badgeText}
            </span>
            <div
              className={cn(
                "w-12 h-px bg-liminal-secondary/40",
                badgeDotClassName,
              )}
            />
          </div>
        )}

        <h2
          id={headingId}
          className={cn(
            "text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight font-heading",
            titleClassName,
          )}
        >
          {title}
        </h2>

        {description && (
          <p
            className={cn(
              "text-muted-foreground text-[16px] sm:text-lg leading-relaxed max-w-2xl font-light",
              descriptionClassName,
            )}
          >
            {description}
          </p>
        )}
      </div>
    );
  }

  // Simple Variant (Left-aligned with Pill Badge)
  if (variant === "simple") {
    return (
      <div
        className={cn(
          "flex flex-col items-center lg:items-start text-center lg:text-left space-y-6",
          className,
        )}
        {...props}
      >
        {badgeText && (
          <SectionBadge
            text={badgeText}
            className={badgeClassName}
            dotClassName={badgeDotClassName}
          />
        )}
        <h2
          id={headingId}
          className={cn(
            "text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight font-heading",
            titleClassName,
          )}
        >
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              "max-w-2xl text-muted-foreground text-[16px] sm:text-lg leading-relaxed font-light",
              descriptionClassName,
            )}
          >
            {description}
          </p>
        )}
      </div>
    );
  }

  // Split Variant (Title Left, Description Right)
  if (variant === "split") {
    return (
      <div
        className={cn(
          "grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 mb-12 items-end",
          className,
        )}
        {...props}
      >
        <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
          {badgeText && (
            <div className="flex items-center justify-center lg:justify-start gap-5">
              <div
                className={cn(
                  "w-14 h-px bg-liminal-secondary shrink-0",
                  badgeDotClassName,
                )}
              />
              <span
                className={cn(
                  "text-[10px] font-bold uppercase tracking-[0.45em] text-liminal-secondary",
                  badgeClassName,
                )}
              >
                {badgeText}
              </span>
            </div>
          )}
          <h2
            id={headingId}
            className={cn(
              "text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight font-heading",
              titleClassName,
            )}
          >
            {title}
          </h2>
        </div>
        <div className="lg:col-span-5 text-center lg:text-left">
          {description && (
            <p
              className={cn(
                "text-muted-foreground text-[16px] sm:text-lg leading-relaxed font-light",
                descriptionClassName,
              )}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    );
  }

  // Inline Variant (Like About Us)
  return (
    <div
      className={cn(
        "flex flex-col items-center lg:items-start text-center lg:text-left space-y-7",
        className,
      )}
      {...props}
    >
      {/* Editorial Line Badge */}
      {badgeText && (
        <div className="flex items-center gap-5">
          <div
            className={cn(
              "w-14 h-px bg-liminal-secondary shrink-0",
              badgeDotClassName,
            )}
          />
          <span
            className={cn(
              "text-[10px] font-bold uppercase tracking-[0.45em] text-liminal-secondary",
              badgeClassName,
            )}
          >
            {badgeText}
          </span>
        </div>
      )}

      <h2
        id={headingId}
        className={cn(
          "text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight font-heading",
          titleClassName,
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "text-muted-foreground text-[16px] sm:text-lg leading-relaxed max-w-2xl font-light",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
