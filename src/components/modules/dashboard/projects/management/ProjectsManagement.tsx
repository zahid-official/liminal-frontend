"use client";

import {
  projects as initialProjects,
  IProject,
  ProjectSortValue,
} from "@/components/modules/public/projects/projectsData";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import ProjectsControlsSection from "./ProjectsControlsSection";
import ProjectsHeaderSection from "./ProjectsHeaderSection";
import ProjectsTableSection from "./ProjectsTableSection";

// Constants
const ITEMS_PER_PAGE = 8;

// ProjectsManagement Component
const ProjectsManagement = () => {
  const [projectsList, setProjectsList] = useState<IProject[]>(initialProjects);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortOption, setSortOption] = useState<ProjectSortValue>("newest");
  const [currentPage, setCurrentPage] = useState(1);

  const [projectToDelete, setProjectToDelete] = useState<IProject | null>(null);

  // Derived State: Filtered & Sorted Projects
  const filteredAndSortedProjects = useMemo(() => {
    let localResult = [...projectsList];

    // Category filter
    if (categoryFilter && categoryFilter !== "All") {
      localResult = localResult.filter((p) => p.category === categoryFilter);
    }

    // Status filter
    if (statusFilter !== "All") {
      localResult = localResult.filter((p) => p.status === statusFilter);
    }

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      localResult = localResult.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.location.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query),
      );
    }

    // Sort
    switch (sortOption) {
      case "oldest":
        localResult.sort(
          (a, b) => parseInt(a.completionYear) - parseInt(b.completionYear),
        );
        break;
      case "az":
        localResult.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "za":
        localResult.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "newest":
      default:
        localResult.sort(
          (a, b) => parseInt(b.completionYear) - parseInt(a.completionYear),
        );
        break;
    }

    return localResult;
  }, [categoryFilter, searchQuery, sortOption, statusFilter, projectsList]);

  // Derived State: Pagination
  const totalItems = filteredAndSortedProjects.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE));
  const paginatedProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredAndSortedProjects.slice(
      startIndex,
      startIndex + ITEMS_PER_PAGE,
    );
  }, [filteredAndSortedProjects, currentPage]);

  const handleCategoryChange = (val: string) => {
    setCategoryFilter(val);
    setCurrentPage(1);
  };

  const handleStatusChange = (val: string) => {
    setStatusFilter(val);
    setCurrentPage(1);
  };

  const handleSortChange = (val: ProjectSortValue) => {
    setSortOption(val);
    setCurrentPage(1);
  };

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    setCurrentPage(1);
  };

  const handleDeleteConfirm = () => {
    if (!projectToDelete) return;
    setProjectsList((prev) => prev.filter((p) => p.id !== projectToDelete.id));
    toast.success("Project deleted successfully", {
      description: `The project "${projectToDelete.title}" has been removed.`,
    });
    setProjectToDelete(null);
  };

  return (
    <div className="space-y-8">
      <ProjectsHeaderSection />

      <ProjectsControlsSection
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        categoryFilter={categoryFilter}
        onCategoryChange={handleCategoryChange}
        statusFilter={statusFilter}
        onStatusChange={handleStatusChange}
        sortOption={sortOption}
        onSortChange={handleSortChange}
      />

      <ProjectsTableSection
        paginatedProjects={paginatedProjects}
        onDeleteClick={setProjectToDelete}
      />
    </div>
  );
};

export default ProjectsManagement;
