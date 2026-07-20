"use client";

import FilterBar from "@/components/shared/FilterBar";
import Pagination from "@/components/shared/Pagination";
import SectionHeader from "@/components/shared/SectionHeader";
import { cn } from "@/lib/utils";
import { useMemo, useRef, useState } from "react";
import {
  projects as allProjects,
  filterProjects,
  projectCategories,
  projectSortOptions,
  type ProjectCategory,
  type ProjectSortValue,
} from "./projectsData";
import ProjectsGrid from "./ProjectsGrid";

const ITEMS_PER_PAGE = 6;

// ProjectsCollection Component
const ProjectsCollection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [sortBy, setSortBy] = useState<ProjectSortValue | "">("");
  const gridRef = useRef<HTMLDivElement>(null);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: allProjects.length };
    allProjects.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered and sorted projects
  const filteredProjects = useMemo(() => {
    return filterProjects({
      search: searchQuery,
      category: activeCategory,
      sort: sortBy || undefined,
    });
  }, [searchQuery, activeCategory, sortBy]);

  const handleCategoryChange = (category: ProjectCategory) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleSortChange = (sort: ProjectSortValue) => {
    setSortBy(sort);
    setCurrentPage(1);
  };

  // Pagination
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const handlePageChange = (page: number) => {
    if (page === currentPage) return;
    setIsTransitioning(true);

    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

    setTimeout(() => {
      setCurrentPage(page);
      setIsTransitioning(false);
    }, 250);
  };

  return (
    <section
      id="portfolio-explorer"
      aria-labelledby="explorer-heading"
      className="py-20 md:py-28 lg:py-32 bg-zinc-50 relative overflow-hidden"
    >
      <div className="custom-container">
        {/* Section Header */}
        <SectionHeader
          variant="manifesto"
          badgeText="The Compendium"
          title={
            <>
              Spatial{" "}
              <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                Monographs
              </span>
            </>
          }
          description="A master index of our built works and material concepts. Explore the complete collection of residential sanctuaries, commercial spaces and bespoke designs through our interactive archive."
          headingId="explorer-heading"
          className="mb-5"
        />

        {/* Filter Projects */}
        <FilterBar
          categories={projectCategories}
          categoryCounts={categoryCounts}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          searchPlaceholder="Search projects..."
          sortBy={sortBy || undefined}
          onSortChange={handleSortChange}
          sortOptions={projectSortOptions}
          sortPlaceholder="Sort Projects"
          filterLabel="Filter Projects"
          containerRef={gridRef}
        />

        {/* Projects Grid */}
        <div
          className={cn(
            "transition-opacity duration-300 mt-10",
            isTransitioning ? "opacity-0" : "opacity-100",
          )}
        >
          <ProjectsGrid projects={paginatedProjects} />
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          ariaLabel="Projects pagination"
        />
      </div>
    </section>
  );
};

export default ProjectsCollection;
