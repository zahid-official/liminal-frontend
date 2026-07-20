"use client";

import { cn } from "@/lib/utils";
import { useMemo, useRef, useState } from "react";
import { blogArticles, blogCategories, type BlogCategory } from "./blogData";
import BlogGrid from "./BlogGrid";
import Pagination from "@/components/shared/Pagination";
import FilterBar from "@/components/shared/FilterBar";

const BASE_ITEMS_PER_PAGE = 6;

// BlogCollection Component
const BlogCollection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<BlogCategory>("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  // Filtered and sorted articles
  const filteredArticles = useMemo(() => {
    let results = [...blogArticles];

    // Category filter
    if (activeCategory !== "All") {
      results = results.filter(
        (article) => article.category === activeCategory,
      );
    }

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      results = results.filter(
        (article) =>
          article.title.toLowerCase().includes(query) ||
          article.excerpt.toLowerCase().includes(query),
      );
    }

    return results;
  }, [searchQuery, activeCategory]);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: blogArticles.length };
    blogArticles.forEach((a) => {
      counts[a.category] = (counts[a.category] || 0) + 1;
    });
    return counts;
  }, []);

  // When the quote card is shown it occupies one grid slot, so fetch one fewer article
  const showQuoteCard =
    activeCategory === "All" && !searchQuery.trim() && currentPage === 1;
  const itemsPerPage = showQuoteCard
    ? BASE_ITEMS_PER_PAGE - 1
    : BASE_ITEMS_PER_PAGE;

  // Pagination
  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  // Reset page when filters change
  const handleCategoryChange = (category: BlogCategory) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

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
      id="design-journal-explorer"
      aria-labelledby="explorer-heading"
      className="py-20 md:py-28 lg:py-32 bg-zinc-50 relative overflow-hidden"
    >
      <div className="custom-container">
        <FilterBar
          categories={blogCategories}
          categoryCounts={categoryCounts}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          searchPlaceholder="Search articles..."
          filterLabel="Filter Articles"
          containerRef={gridRef}
        />

        {/* Blog Grid */}
        <div
          className={cn(
            "transition-opacity duration-300",
            isTransitioning ? "opacity-0" : "opacity-100",
          )}
        >
          <BlogGrid
            articles={paginatedArticles}
            showQuoteCard={showQuoteCard}
          />
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          ariaLabel="Blog pagination"
        />
      </div>
    </section>
  );
};

export default BlogCollection;
