"use client";

import { ArmchairIcon, PlusCircle } from "lucide-react";
import Link from "next/link";
import { useState, useMemo } from "react";
import { toast } from "sonner";
import {
  collection as initialFurniture,
  FurnitureSortType,
  IFurniture,
} from "@/components/modules/public/services/furniture/furnitureData";
import {
  DeleteConfirmDialog,
  ManagementHeader,
} from "@/components/shared/management";
import LiminalButton from "@/components/shared/LiminalButton";
import Pagination from "@/components/shared/Pagination";
import FurnitureControlsSection from "./FurnitureControlsSection";
import FurnitureTableSection from "./FurnitureTableSection";

// Constants
const ITEMS_PER_PAGE = 8;

// Helper to parse price string for sorting
const parsePrice = (priceStr: string) =>
  parseFloat(priceStr.replace(/[^0-9.-]+/g, "")) || 0;

// FurnitureManagement Component
const FurnitureManagement = () => {
  const [furnitureList, setFurnitureList] =
    useState<IFurniture[]>(initialFurniture);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [sortOption, setSortOption] = useState<FurnitureSortType | "">("");
  const [currentPage, setCurrentPage] = useState(1);

  const [furnitureToDelete, setFurnitureToDelete] = useState<IFurniture | null>(
    null,
  );

  // Derived State: Filtered & Sorted Furniture
  const filteredAndSortedFurniture = useMemo(() => {
    let localResult = [...furnitureList];

    // Category filter
    if (categoryFilter && categoryFilter !== "All") {
      localResult = localResult.filter(
        (item) => item.category === categoryFilter,
      );
    }

    // Status filter
    if (statusFilter && statusFilter !== "All") {
      localResult = localResult.filter((item) => item.status === statusFilter);
    }

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      localResult = localResult.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.productCode.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query) ||
          item.tagline.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.specifications.materials.toLowerCase().includes(query),
      );
    }

    // Sort
    switch (sortOption) {
      case "price-asc":
        localResult.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
        break;
      case "price-desc":
        localResult.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
        break;
      case "name-asc":
        localResult.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "name-desc":
        localResult.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "oldest":
        // Keep order as-is
        break;
      case "newest":
      default:
        // Newest items first
        break;
    }

    return localResult;
  }, [categoryFilter, searchQuery, sortOption, statusFilter, furnitureList]);

  // Derived State: Pagination
  const totalItems = filteredAndSortedFurniture.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE));
  const paginatedFurniture = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredAndSortedFurniture.slice(
      startIndex,
      startIndex + ITEMS_PER_PAGE,
    );
  }, [filteredAndSortedFurniture, currentPage]);

  const handleCategoryChange = (val: string) => {
    setCategoryFilter(val);
    setCurrentPage(1);
  };

  const handleStatusChange = (val: string) => {
    setStatusFilter(val);
    setCurrentPage(1);
  };

  const handleSortChange = (val: FurnitureSortType) => {
    setSortOption(val);
    setCurrentPage(1);
  };

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    setCurrentPage(1);
  };

  const handleDeleteConfirm = () => {
    if (!furnitureToDelete) return;
    setFurnitureList((prev) =>
      prev.filter((item) => item.id !== furnitureToDelete.id),
    );
    toast.success("Furniture deleted successfully", {
      description: `"${furnitureToDelete.title}" (${furnitureToDelete.productCode}) has been removed.`,
    });
    setFurnitureToDelete(null);
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setCategoryFilter("");
    setStatusFilter("");
    setSortOption("");
    setCurrentPage(1);
  };

  return (
    <div className="space-y-8">
      {/* Shared Management Header */}
      <ManagementHeader
        title="Furniture Management"
        description="Manage your collection, update existing furniture or publish new pieces."
        icon={ArmchairIcon}
        totalCount={furnitureList.length}
        action={
          <Link href="/dashboard/furniture/create">
            <LiminalButton
              icon={PlusCircle}
              animateIcon={false}
              iconPosition="left"
              className="rounded-lg"
            >
              Add Furniture
            </LiminalButton>
          </Link>
        }
      />

      {/* Furniture Controls / Toolbar */}
      <FurnitureControlsSection
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        categoryFilter={categoryFilter}
        onCategoryChange={handleCategoryChange}
        statusFilter={statusFilter}
        onStatusChange={handleStatusChange}
        sortOption={sortOption}
        onSortChange={handleSortChange}
        onClearFilters={handleClearFilters}
      />

      {/* Furniture Table */}
      <FurnitureTableSection
        paginatedFurniture={paginatedFurniture}
        onDeleteClick={setFurnitureToDelete}
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
        isOpen={Boolean(furnitureToDelete)}
        onOpenChange={(open) => {
          if (!open) setFurnitureToDelete(null);
        }}
        title="Delete Furniture Piece"
        itemName={furnitureToDelete?.title}
        itemSubtitle={
          furnitureToDelete
            ? `${furnitureToDelete.productCode} • ${furnitureToDelete.category}`
            : undefined
        }
        itemImage={furnitureToDelete?.thumbnail}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
};

export default FurnitureManagement;
