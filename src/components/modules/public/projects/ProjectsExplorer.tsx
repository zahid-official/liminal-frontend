"use client";

import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import { projects as allProjects, type IProject } from "./projectsData";
import ProjectsGrid from "./ProjectsGrid";
import ProjectsPagination from "./ProjectsPagination";
import ProjectsFilter from "./ProjectsFilter";

import SectionHeader from "@/components/shared/SectionHeader";

const ITEMS_PER_PAGE = 6;

// ProjectsExplorer Component
const ProjectsExplorer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [filteredProjects, setFilteredProjects] =
    useState<IProject[]>(allProjects);
  const gridRef = useRef<HTMLDivElement>(null);

  // Filter Projects
  const handleFilterChange = (projects: IProject[]) => {
    setFilteredProjects(projects);
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
        <ProjectsFilter
          onFilterChange={handleFilterChange}
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
        <ProjectsPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
};

export default ProjectsExplorer;
