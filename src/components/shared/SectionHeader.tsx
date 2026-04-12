import { cn } from "@/lib/utils";
import * as React from "react";
import SectionBadge from "./SectionBadge";

interface SectionHeaderProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "title"
> {
  badgeText: string;
  title: React.ReactNode;
  description?: string;
  headingId?: string;
}

// SectionHeader Component
const SectionHeader = ({
  badgeText,
  title,
  description,
  headingId,
  className,
  ...props
}: SectionHeaderProps) => {
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
      {/* Vertical Line diving the columns */}
      <div className="hidden lg:block absolute -top-8 -bottom-16 left-[30%] w-px bg-border -z-10" />

      {/* Left: Badge */}
      <div className="w-full lg:w-[30%] shrink-0 relative mb-6 lg:mb-0 lg:pr-8 flex justify-center lg:block">
        <SectionBadge text={badgeText} className="lg:bg-background" />
      </div>

      {/* Right: Title & Description */}
      <div className="lg:pl-16 relative z-10 w-full xl:w-2/3">
        <h2
          id={headingId}
          className="text-4xl sm:text-5xl leading-[1.1] tracking-tight"
        >
          {title}
        </h2>
        {description && (
          <p className="max-w-2xl mx-auto lg:mx-0 text-muted-foreground text-[15px] sm:text-base leading-relaxed mt-6">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default SectionHeader;
