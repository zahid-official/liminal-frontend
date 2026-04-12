import * as React from "react";
import { cn } from "@/lib/utils";
import SectionBadge from "./SectionBadge";

interface CenteredSectionHeaderProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "title"
> {
  badgeText: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  headingId?: string;
  badgeClassName?: string;
}

const CenteredSectionHeader = ({
  badgeText,
  title,
  description,
  headingId,
  badgeClassName,
  className,
  ...props
}: CenteredSectionHeaderProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center text-center mb-12 max-w-4xl mx-auto space-y-6.5",
        className,
      )}
      {...props}
    >
      {/* Badge */}
      <div className="flex justify-center">
        <SectionBadge text={badgeText} className={badgeClassName} />
      </div>

      {/* Title */}
      <h2
        id={headingId}
        className="text-4xl sm:text-5xl leading-[1.1] tracking-tight"
      >
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p className="max-w-2xl mx-auto text-muted-foreground text-[15px] sm:text-base leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default CenteredSectionHeader;
