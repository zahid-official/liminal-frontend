import {
  ExternalLink,
  ImageIcon,
  MoreHorizontal,
  PencilLine,
  Star,
  StarIcon,
  StarOff,
  Trash2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { IProject } from "@/components/modules/public/projects/projectsData";
import { ManagementEmptyState } from "@/components/shared/management";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

// Interface for ProjectsTableSection
interface ProjectsTableSectionProps {
  paginatedProjects: IProject[];
  onDeleteClick: (project: IProject) => void;
  onToggleFeatured: (project: IProject) => void;
  onClearFilters?: () => void;
}

// Helper to get status badge styling
const getStatusBadgeClass = (status: IProject["status"] | string) => {
  switch (status) {
    case "Completed":
      return "bg-[#68A039]/10 text-[#68A039] dark:text-[#68A039] border-[#68A039]/20";
    case "In Progress":
      return "bg-[#D76417]/10 text-[#D76417] dark:text-[#D76417] border-[#D76417]/20";
    case "Concept":
      return "bg-[#6A33CC]/10 text-[#6A33CC] dark:text-[#6A33CC] border-[#6A33CC]/20";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
};

// ProjectsTableSection Component
const ProjectsTableSection = ({
  paginatedProjects,
  onDeleteClick,
  onToggleFeatured,
  onClearFilters,
}: ProjectsTableSectionProps) => {
  // Handle empty state
  if (paginatedProjects.length === 0) {
    return (
      <ManagementEmptyState
        title="No Projects Found"
        description="No projects match your current filters. Try adjusting your search criteria."
        onClearFilters={onClearFilters}
      />
    );
  }

  return (
    <div className="rounded-xl border border-border/50 bg-card overflow-hidden">
      <Table>
        {/* Table Header */}
        <TableHeader className="bg-muted/80">
          <TableRow>
            <TableHead className="w-80 text-left pl-4">
              Project Title & Location
            </TableHead>
            <TableHead>Category & Project Type</TableHead>
            <TableHead>Interior Style</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Year</TableHead>
            <TableHead>Featured</TableHead>
            <TableHead className="text-right pr-4">Actions</TableHead>
          </TableRow>
        </TableHeader>

        {/* Table Body */}
        <TableBody>
          {paginatedProjects.map((item) => (
            <TableRow
              key={item.id}
              className="group hover:bg-muted/60 transition-colors"
            >
              {/* Thumbnail & Title */}
              <TableCell className="text-left pl-4 max-w-80">
                <div className="flex items-center gap-3">
                  {/* Thumbnail */}
                  <div className="relative size-12 rounded-md overflow-hidden bg-muted shrink-0">
                    {item.thumbnail ? (
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <ImageIcon className="size-5 text-muted-foreground/50" />
                      </div>
                    )}
                  </div>

                  {/* Title and Location */}
                  <div className="min-w-0">
                    <div className="font-medium text-foreground line-clamp-1 truncate">
                      {item.title}
                    </div>
                    <div className="text-xs text-muted-foreground line-clamp-1 truncate">
                      {item.location}
                    </div>
                  </div>
                </div>
              </TableCell>

              {/* Category & Project Type */}
              <TableCell>
                <div className="font-medium text-foreground line-clamp-1">
                  {item.category}
                </div>
                <div className="text-xs text-muted-foreground line-clamp-1">
                  {item.projectType}
                </div>
              </TableCell>

              {/* Interior Style */}
              <TableCell className="text-muted-foreground">
                {item.interiorStyle}
              </TableCell>

              {/* Status */}
              <TableCell>
                <Badge
                  variant="outline"
                  className={getStatusBadgeClass(item.status)}
                >
                  {item.status}
                </Badge>
              </TableCell>

              {/* Year */}
              <TableCell className="text-muted-foreground">
                {item.completionYear}
              </TableCell>

              {/* Featured */}
              <TableCell className="text-center">
                <button
                  type="button"
                  onClick={() => onToggleFeatured(item)}
                  title={
                    item.isFeatured
                      ? "Remove from featured"
                      : "Mark as featured"
                  }
                  className="cursor-pointer p-1 rounded-md hover:bg-muted transition-colors inline-flex items-center justify-center"
                >
                  <StarIcon
                    className={cn(
                      "size-4 transition-transform hover:scale-110",
                      item.isFeatured
                        ? "fill-liminal-secondary text-liminal-secondary"
                        : "text-muted-foreground/30 hover:text-muted-foreground/70",
                    )}
                  />
                </button>
              </TableCell>

              {/* Actions */}
              <TableCell className="text-right pr-4">
                <DropdownMenu>
                  {/* Trigger */}
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="size-8">
                      <MoreHorizontal className="size-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>

                  {/* Content */}
                  <DropdownMenuContent align="end" className="w-44">
                    {/* Menu Label */}
                    <DropdownMenuLabel className="text-xs font-semibold text-center">
                      Actions
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />

                    {/* View on site */}
                    <DropdownMenuItem asChild>
                      <Link
                        href={`/projects/${item.slug}`}
                        target="_blank"
                        className="cursor-pointer"
                      >
                        <ExternalLink className="size-4 mr-2" />
                        View on site
                      </Link>
                    </DropdownMenuItem>

                    {/* Edit project */}
                    <DropdownMenuItem asChild>
                      <Link
                        href={`/dashboard/projects/edit/${item.slug}`}
                        className="cursor-pointer"
                      >
                        <PencilLine className="size-4 mr-2" />
                        Edit details
                      </Link>
                    </DropdownMenuItem>

                    {/* Toggle Featured */}
                    <DropdownMenuItem
                      onClick={() => onToggleFeatured(item)}
                      className="gap-2 cursor-pointer"
                    >
                      {item.isFeatured ? (
                        <>
                          <StarOff className="size-4" />
                          Remove Featured
                        </>
                      ) : (
                        <>
                          <Star className="size-4" />
                          Mark Featured
                        </>
                      )}
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />

                    {/* Delete project */}
                    <DropdownMenuItem
                      variant="destructive"
                      className="cursor-pointer"
                      onClick={() => onDeleteClick(item)}
                    >
                      <Trash2 className="size-4 mr-2" />
                      Delete project
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProjectsTableSection;
