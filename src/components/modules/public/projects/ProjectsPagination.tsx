"use client";

import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ProjectsPagination Props
interface ProjectsPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

// ProjectsPagination Component
const ProjectsPagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: ProjectsPaginationProps) => {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages: (number | "ellipsis")[] = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("ellipsis");

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);

      if (currentPage < totalPages - 2) pages.push("ellipsis");
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <nav
      role="navigation"
      aria-label="Projects pagination"
      className="flex items-center justify-center gap-2 pt-14 md:pt-18"
    >
      {/* Previous */}
      <button
        type="button"
        onClick={(e) => {
          e.currentTarget.blur();
          onPageChange(currentPage - 1);
        }}
        disabled={currentPage === 1}
        aria-label="Go to previous page"
        className="flex items-center gap-2 px-4 py-2.5 border border-border/50 text-sm tracking-widest font-semibold transition-all duration-300 hover:border-liminal-secondary disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer bg-background"
      >
        <ChevronLeft className="size-3.5" />
        <span className="hidden sm:inline">Previous</span>
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-1">
        {getPageNumbers().map((page, idx) =>
          page === "ellipsis" ? (
            <span
              key={`ellipsis-${idx}`}
              className="w-10 h-10 flex items-center justify-center text-muted-foreground/40 text-sm"
            >
              ···
            </span>
          ) : (
            <button
              key={page}
              type="button"
              onClick={(e) => {
                e.currentTarget.blur();
                onPageChange(page);
              }}
              aria-label={`Go to page ${page}`}
              aria-current={currentPage === page ? "page" : undefined}
              className={cn(
                "w-10 h-10 flex items-center justify-center text-sm font-mono font-bold transition-all duration-300 cursor-pointer",
                currentPage === page
                  ? "bg-liminal-dark text-background shadow-md shadow-liminal-secondary/20"
                  : "border border-border/50 hover:border-liminal-secondary bg-background",
              )}
            >
              {page}
            </button>
          ),
        )}
      </div>

      {/* Next */}
      <button
        type="button"
        onClick={(e) => {
          e.currentTarget.blur();
          onPageChange(currentPage + 1);
        }}
        disabled={currentPage === totalPages}
        aria-label="Go to next page"
        className="flex items-center gap-2 px-4 py-2.5 border border-border/50 text-sm tracking-widest font-semibold transition-all duration-300 hover:border-liminal-secondary disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer bg-background"
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight className="size-3.5" />
      </button>
    </nav>
  );
};

export default ProjectsPagination;
