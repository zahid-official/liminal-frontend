"use client";

import { useState, useMemo, useRef } from "react";
import SectionHeader from "@/components/shared/SectionHeader";
import FurnitureGrid from "./FurnitureGrid";
import FilterBar from "@/components/shared/FilterBar";
import Pagination from "@/components/shared/Pagination";
import { cn } from "@/lib/utils";
import {
  collection as allFurniture,
  filterFurniture,
  furnitureCategories,
  furnitureSortOptions,
  type FurnitureCategory,
  type FurnitureSortType,
} from "./furnitureData";

const ITEMS_PER_PAGE = 6;

// FurnitureCollection Component
const FurnitureCollection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<FurnitureCategory>("All");
  const [sortBy, setSortBy] = useState<FurnitureSortType | "">("");
  const gridRef = useRef<HTMLDivElement>(null);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: allFurniture.length };
    allFurniture.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered and sorted furniture
  const filteredFurniture = useMemo(() => {
    return filterFurniture({
      search: searchQuery,
      category: activeCategory,
      sort: sortBy || undefined,
    });
  }, [searchQuery, activeCategory, sortBy]);

  const handleCategoryChange = (category: FurnitureCategory) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleSortChange = (sort: FurnitureSortType) => {
    setSortBy(sort);
    setCurrentPage(1);
  };

  // Pagination
  const totalPages = Math.ceil(filteredFurniture.length / ITEMS_PER_PAGE);
  const paginatedFurniture = filteredFurniture.slice(
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
      id="furniture-explorer"
      aria-labelledby="furniture-heading"
      className="py-20 md:py-28 lg:py-32 relative overflow-hidden bg-zinc-50/80"
    >
      <div className="custom-container">
        {/* Section Header */}
        <SectionHeader
          badgeText="The Curated Edit"
          title={
            <>
              Iconic Furniture <br className="max-lg:hidden" />
              <span className="italic font-serif font-light text-liminal-secondary">
                Selection
              </span>
            </>
          }
          description="A selection of our most iconic designs, balancing structural honesty with human comfort. Each piece is crafted to endure, both in material and aesthetic."
          variant="split"
          headingId="furniture-heading"
          className="mb-10"
        />

        {/* Filter Bar */}
        <FilterBar
          categories={furnitureCategories}
          categoryCounts={categoryCounts}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          searchPlaceholder="Search furniture..."
          sortBy={sortBy || undefined}
          onSortChange={handleSortChange}
          sortOptions={furnitureSortOptions}
          sortPlaceholder="Sort Furniture"
          filterLabel="Filter Furniture"
          containerRef={gridRef}
        />

        {/* Collection Grid */}
        <div 
          className={cn(
            "mt-10 transition-opacity duration-300",
            isTransitioning ? "opacity-0" : "opacity-100"
          )}
        >
          <FurnitureGrid furniture={paginatedFurniture} />
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            ariaLabel="Furniture pagination"
          />
        )}
      </div>
    </section>
  );
};

export default FurnitureCollection;
