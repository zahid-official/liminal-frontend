import * as React from "react";
import { cn } from "@/lib/utils";
import SectionBadge from "./SectionBadge";

interface CenteredSectionHeaderProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "title"
> {
  badgeText: string;
  title: React.ReactNode;
  description?: string;
  headingId?: string;
}

const CenteredSectionHeader = ({
  badgeText,
  title,
  description,
  headingId,
  className,
  ...props
}: CenteredSectionHeaderProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center text-center mb-12 max-w-4xl mx-auto",
        className
      )}
      {...props}
    >
      {/* Badge */}
      <div className="mb-6 flex justify-center">
        <SectionBadge text={badgeText} />
      </div>

      {/* Title */}
      <h2
        id={headingId}
        className="text-4xl sm:text-5xl leading-[1.05] tracking-tight"
      >
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p className="max-w-2xl mx-auto text-muted-foreground text-[15px] sm:text-base leading-relaxed mt-6">
          {description}
        </p>
      )}
    </div>
  );
};

export default CenteredSectionHeader;
