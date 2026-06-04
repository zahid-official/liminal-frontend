"use client";

import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { blogArticles, blogCategories, type BlogCategory } from "./blogData";
import BlogGrid from "./BlogGrid";
import BlogPagination from "./BlogPagination";
// import BlogPagination from "./BlogPagination";

const BASE_ITEMS_PER_PAGE = 6;

// BlogExplorer Component
const BlogExplorer = () => {
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
          article.excerpt.toLowerCase().includes(query) ||
          article.tags.some((tag) => tag.toLowerCase().includes(query)),
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
        {/* Filter Heading */}
        <div className="flex items-center gap-3 pb-5">
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.3em] text-liminal-secondary">
            Filter by Category
          </span>
          <div className="h-px w-8 bg-liminal-secondary" />
        </div>

        {/* Filter & Search Bar */}
        <div
          ref={gridRef}
          className="space-y-8 flex flex-col lg:flex-row items-start justify-between gap-8 scroll-mt-48"
        >
          {/* Left: Category Filter */}
          <div className="flex flex-wrap gap-2.5">
            {blogCategories.map((category) => {
              const isActive = activeCategory === category;
              const count = categoryCounts[category] || 0;

              return (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={cn(
                    "group relative flex items-center gap-3 px-5 py-2.5 transition-all duration-300 border cursor-pointer",
                    isActive
                      ? "bg-liminal-dark border-liminal-dark text-background shadow-lg shadow-liminal-dark/10"
                      : "border-border/50 hover:border-liminal-secondary bg-background",
                  )}
                >
                  <span className="text-[11px] uppercase tracking-[0.2em] font-semibold font-heading">
                    {category}
                  </span>
                  <span
                    className={cn(
                      "flex items-center justify-center min-w-5 h-4.5 px-1.5 text-[10px] font-mono border transition-colors duration-300",
                      isActive
                        ? "bg-background/10 border-background/20 text-background"
                        : "bg-zinc-50 border-border/50 text-foreground/60 group-hover:text-foreground",
                    )}
                  >
                    {count.toString().padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Search Bar */}
          <div className="relative w-full lg:w-80 ">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground/50" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full h-12 pl-11 pr-5 bg-background border border-border/60 rounded-sm text-sm font-medium placeholder:text-muted-foreground/40 focus:outline-none focus:border-liminal-secondary/50 focus:ring-2 focus:ring-liminal-secondary/10 transition-all duration-300"
            />
          </div>
        </div>

        {/* Blog Grid */}
        <div className={cn("transition-opacity duration-300", isTransitioning ? "opacity-0" : "opacity-100")}>
          <BlogGrid articles={paginatedArticles} showQuoteCard={showQuoteCard} />
        </div>

        {/* Pagination */}
        <BlogPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
};

export default BlogExplorer;
