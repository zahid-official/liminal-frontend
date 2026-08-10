import Link from "next/link";
import Image from "next/image";
import {
  FolderSearch,
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  ImageIcon,
  X,
  StarIcon,
} from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import LiminalButton from "@/components/shared/LiminalButton";
import { IProject } from "@/components/modules/public/projects/projectsData";
import { cn } from "@/lib/utils";

interface ProjectsTableSectionProps {
  paginatedProjects: IProject[];
  onDeleteClick: (project: IProject) => void;
  onClearFilters?: () => void;
}

// ProjectsTableSection Component
const ProjectsTableSection = ({
  paginatedProjects,
  onDeleteClick,
  onClearFilters,
}: ProjectsTableSectionProps) => {
  // Handle empty state
  if (paginatedProjects.length === 0) {
    return (
      <div className="rounded-xl border border-border/50 bg-card overflow-hidden">
        <div className="flex flex-col items-center justify-center py-24 text-center">
          {/* Empty State Icon */}
          <div className="w-20 h-20 rounded-full bg-zinc-100 flex items-center justify-center mb-5">
            <FolderSearch className="size-8 text-muted-foreground/40" />
          </div>

          {/* Empty State Text */}
          <h3 className="text-xl font-bold font-heading tracking-tight mb-2">
            No Projects Found
          </h3>
          <p className="text-sm text-muted-foreground mt-1 max-w-sm mb-6">
            No projects match your current filters. Try adjusting your search
            criteria.
          </p>
          {onClearFilters && (
            <LiminalButton
              icon={X}
              iconPosition="left"
              animateIcon={false}
              onClick={onClearFilters}
              className="rounded-lg"
            >
              Clear filters
            </LiminalButton>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-border/50 bg-card overflow-hidden">
      <Table>
        {/* Table Header */}
        <TableHeader className="bg-muted/80">
          <TableRow>
            <TableHead className="w-72">Project</TableHead>
            <TableHead>Category & Project Type</TableHead>
            <TableHead>Interior Style</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Year</TableHead>
            <TableHead>Featured</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        {/* Table Body */}
        <TableBody>
          {paginatedProjects.map((project) => (
            <TableRow
              key={project.id}
              className="group hover:bg-muted/60 transition-colors"
            >
              {/* Thumbnail & Title */}
              <TableCell>
                <div className="flex items-center gap-3">
                  {/*Thumbnail */}
                  <div className="relative size-12 rounded-md overflow-hidden bg-muted shrink-0">
                    {project.thumbnail ? (
                      <Image
                        src={project.thumbnail}
                        alt={project.title}
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
                  <div>
                    <div className="font-medium text-foreground line-clamp-1">
                      {project.title}
                    </div>
                    <div className="text-xs text-muted-foreground line-clamp-1">
                      {project.location}
                    </div>
                  </div>
                </div>
              </TableCell>

              {/* Category & Project Type */}
              <TableCell>
                <div className="font-medium text-foreground line-clamp-1">
                  {project.category}
                </div>
                <div className="text-xs text-muted-foreground line-clamp-1">
                  {project.projectType}
                </div>
              </TableCell>

              {/* Interior Style */}
              <TableCell className="text-muted-foreground">
                {project.interiorStyle}
              </TableCell>

              {/* Status */}
              <TableCell>
                <Badge
                  variant="outline"
                  className={`
                    ${
                      project.status === "Completed" &&
                      "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                    }
                    ${
                      project.status === "In Progress" &&
                      "bg-amber-500/10 text-amber-600 border-amber-500/20"
                    }
                    ${
                      project.status === "Concept" &&
                      "bg-blue-500/10 text-blue-600 border-blue-500/20"
                    }
                  `}
                >
                  {project.status}
                </Badge>
              </TableCell>

              {/* Year */}
              <TableCell className="text-muted-foreground">
                {project.completionYear}
              </TableCell>

              {/* Featured */}
              <TableCell className="text-muted-foreground">
                <StarIcon
                  className={cn(
                    "size-4",
                    project.isFeatured
                      ? "fill-liminal-secondary text-liminal-secondary"
                      : "text-muted-foreground/25",
                  )}
                />
              </TableCell>

              {/* Actions */}
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="size-8">
                      <MoreVertical className="size-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-40">
                    <DropdownMenuItem asChild>
                      <Link href={`/projects/${project.slug}`} target="_blank">
                        <Eye className="size-4 mr-2" />
                        View on site
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href={`/dashboard/projects/edit/${project.slug}`}>
                        <Edit className="size-4 mr-2" />
                        Edit details
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="text-destructive focus:text-destructive focus:bg-destructive/10 cursor-pointer"
                      onClick={() => onDeleteClick(project)}
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
