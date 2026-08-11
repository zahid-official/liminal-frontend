"use client";

import {
  blogArticles as initialArticles,
  BlogSortValue,
  IBlogArticle,
  parseBlogReadTime,
} from "@/components/modules/public/blog/blogData";
import LiminalButton from "@/components/shared/LiminalButton";
import {
  DeleteConfirmDialog,
  ManagementHeader,
} from "@/components/shared/management";
import Pagination from "@/components/shared/Pagination";
import { FileTextIcon, PlusCircle } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import BlogControlsSection from "./BlogControlsSection";
import BlogTableSection from "./BlogTableSection";

// Constants
const ITEMS_PER_PAGE = 8;

// BlogManagement Component
const BlogManagement = () => {
  const [articlesList, setArticlesList] =
    useState<IBlogArticle[]>(initialArticles);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [sortOption, setSortOption] = useState<BlogSortValue | "">("");
  const [currentPage, setCurrentPage] = useState(1);

  const [articleToDelete, setArticleToDelete] = useState<IBlogArticle | null>(
    null,
  );

  // Derived State: Filtered & Sorted Articles
  const filteredAndSortedArticles = useMemo(() => {
    let localResult = [...articlesList];

    // Category filter
    if (categoryFilter && categoryFilter !== "All") {
      localResult = localResult.filter(
        (article) => article.category === categoryFilter,
      );
    }

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      localResult = localResult.filter(
        (article) =>
          article.title.toLowerCase().includes(query) ||
          article.description.toLowerCase().includes(query) ||
          article.category.toLowerCase().includes(query) ||
          article.author.name.toLowerCase().includes(query) ||
          article.author.role.toLowerCase().includes(query) ||
          (article.tags && article.tags.toLowerCase().includes(query)),
      );
    }

    // Sort
    switch (sortOption) {
      case "oldest":
        localResult.reverse();
        break;
      case "az":
        localResult.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "za":
        localResult.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "read-time-asc":
        localResult.sort(
          (a, b) =>
            parseBlogReadTime(a.readTime) - parseBlogReadTime(b.readTime),
        );
        break;
      case "read-time-desc":
        localResult.sort(
          (a, b) =>
            parseBlogReadTime(b.readTime) - parseBlogReadTime(a.readTime),
        );
        break;
      case "newest":
      default:
        // Default chronological / order
        break;
    }

    return localResult;
  }, [categoryFilter, searchQuery, sortOption, articlesList]);

  // Derived State: Pagination
  const totalItems = filteredAndSortedArticles.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE));
  const paginatedArticles = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredAndSortedArticles.slice(
      startIndex,
      startIndex + ITEMS_PER_PAGE,
    );
  }, [filteredAndSortedArticles, currentPage]);

  const handleCategoryChange = (val: string) => {
    setCategoryFilter(val);
    setCurrentPage(1);
  };

  const handleSortChange = (val: BlogSortValue) => {
    setSortOption(val);
    setCurrentPage(1);
  };

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    setCurrentPage(1);
  };

  const handleToggleFeatured = (article: IBlogArticle) => {
    setArticlesList((prev) =>
      prev.map((a) =>
        a.id === article.id ? { ...a, isFeatured: !a.isFeatured } : a,
      ),
    );
    toast.success(
      article.isFeatured
        ? `Removed "${article.title}" from featured articles`
        : `Marked "${article.title}" as featured article`,
    );
  };

  const handleDeleteConfirm = () => {
    if (!articleToDelete) return;
    setArticlesList((prev) => prev.filter((a) => a.id !== articleToDelete.id));
    toast.success("Article deleted successfully", {
      description: `"${articleToDelete.title}" has been removed from the journal.`,
    });
    setArticleToDelete(null);
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setCategoryFilter("");
    setSortOption("");
    setCurrentPage(1);
  };

  return (
    <div className="space-y-8">
      {/* Shared Management Header */}
      <ManagementHeader
        title="Blog Management"
        description="Manage editorial articles, publish new insights or update existing journal entries."
        icon={FileTextIcon}
        totalCount={articlesList.length}
        action={
          <Link href="/dashboard/blog/create">
            <LiminalButton
              icon={PlusCircle}
              animateIcon={false}
              iconPosition="left"
              className="rounded-lg"
            >
              Create Article
            </LiminalButton>
          </Link>
        }
      />

      {/* Blog Controls / Toolbar */}
      <BlogControlsSection
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        categoryFilter={categoryFilter}
        onCategoryChange={handleCategoryChange}
        sortOption={sortOption}
        onSortChange={handleSortChange}
        onClearFilters={handleClearFilters}
      />

      {/* Blog Table */}
      <BlogTableSection
        paginatedArticles={paginatedArticles}
        onDeleteClick={setArticleToDelete}
        onToggleFeatured={handleToggleFeatured}
        onClearFilters={handleClearFilters}
      />

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        className="pt-5 md:pt-5"
        roundedClassName="rounded-sm"
        activePageClassName="bg-liminal-secondary"
      />

      {/* Shared Delete Confirmation Dialog */}
      <DeleteConfirmDialog
        isOpen={Boolean(articleToDelete)}
        onOpenChange={(open) => {
          if (!open) setArticleToDelete(null);
        }}
        title="Delete Blog Article"
        itemName={articleToDelete?.title}
        itemSubtitle={
          articleToDelete
            ? `${articleToDelete.category} • By ${articleToDelete.author?.name}`
            : undefined
        }
        itemImage={articleToDelete?.thumbnail?.url}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
};

export default BlogManagement;
