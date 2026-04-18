import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// PageHeader Props
export interface PageHeaderProps {
  title: string;
  items: {
    label: string;
    href?: string;
  }[];
  bgImage?: string;
  className?: string;
}

// PageHeader Component
const PageHeader = ({
  title,
  items,
  bgImage = "/assets/bg-banner.jpg",
  className,
}: PageHeaderProps) => {
  return (
    <section
      className={cn(
        "relative pt-32 pb-20 md:pt-48 md:pb-32 flex items-center justify-center bg-no-repeat bg-cover bg-center",
        className
      )}
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-4xl mx-auto gap-6 mt-8 md:mt-0">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
          {title}
        </h1>

        {/* Breadcrumbs */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-6 py-2.5">
          <Breadcrumb>
            <BreadcrumbList className="text-white/80 sm:text-[15px] gap-2">
              {items.map((item, index) => {
                const isLast = index === items.length - 1;
                return (
                  <React.Fragment key={index}>
                    <BreadcrumbItem>
                      {isLast ? (
                        <BreadcrumbPage className="text-background font-medium">
                          {item.label}
                        </BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink asChild>
                          <Link
                            href={item.href || "#"}
                            className="hover:text-white transition-colors"
                          >
                            {item.label}
                          </Link>
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                    {!isLast && (
                      <BreadcrumbSeparator className="text-white/50" />
                    )}
                  </React.Fragment>
                );
              })}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
