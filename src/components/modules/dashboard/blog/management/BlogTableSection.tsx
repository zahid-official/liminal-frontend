import { IBlogArticle } from "@/components/modules/public/blog/blogData";
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
import {
  Clock,
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

// Interface for BlogTableSection
interface BlogTableSectionProps {
  paginatedArticles: IBlogArticle[];
  onDeleteClick: (article: IBlogArticle) => void;
  onToggleFeatured: (article: IBlogArticle) => void;
  onClearFilters?: () => void;
}

// Helper to get category badge styling
const getCategoryBadgeClass = (category: string) => {
  switch (category) {
    case "Design":
      return "bg-[#D76417]/10 text-[#D76417] dark:text-[#D76417] border-[#D76417]/20";
    case "Material":
      return "bg-[#68A039]/10 text-[#68A039] dark:text-[#68A039] border-[#68A039]/20";
    case "Philosophy":
      return "bg-[#6A33CC]/10 text-[#6A33CC] dark:text-[#6A33CC] border-[#6A33CC]/20";
    case "Architecture":
      return "bg-[#3975C7]/10 text-[#3975C7] dark:text-[#3975C7] border-[#3975C7]/20";
    case "Process":
      return "bg-[#B45309]/10 text-[#B45309] dark:text-[#B45309] border-[#B45309]/20";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
};

// BlogTableSection Component
const BlogTableSection = ({
  paginatedArticles,
  onDeleteClick,
  onToggleFeatured,
  onClearFilters,
}: BlogTableSectionProps) => {
  // Handle empty state
  if (paginatedArticles.length === 0) {
    return (
      <ManagementEmptyState
        title="No Articles Found"
        description="No blog articles match your current filters. Try adjusting your search query or clear active filters."
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
              Article & Overview
            </TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Read Time</TableHead>
            <TableHead>Published Date</TableHead>
            <TableHead>Featured</TableHead>
            <TableHead className="text-right pr-4">Actions</TableHead>
          </TableRow>
        </TableHeader>

        {/* Table Body */}
        <TableBody>
          {paginatedArticles.map((item) => (
            <TableRow
              key={item.id}
              className="group hover:bg-muted/60 transition-colors"
            >
              {/* Thumbnail & Title */}
              <TableCell className="text-left pl-4 max-w-80">
                <div className="flex items-center gap-3">
                  {/* Thumbnail */}
                  <div className="relative size-12 rounded-md overflow-hidden bg-muted shrink-0">
                    {item.thumbnail?.url ? (
                      <Image
                        src={item.thumbnail.url}
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

                  {/* Title & Description Excerpt */}
                  <div className="min-w-0">
                    <div className="font-medium text-foreground line-clamp-1 truncate">
                      {item.title}
                    </div>
                    <div className="text-xs text-muted-foreground line-clamp-1 truncate">
                      {item.description}
                    </div>
                  </div>
                </div>
              </TableCell>

              {/* Author */}
              <TableCell>
                <div className="font-medium text-foreground line-clamp-1">
                  {item.author?.name}
                </div>
                <div className="text-xs text-muted-foreground line-clamp-1">
                  {item.author?.role}
                </div>
              </TableCell>

              {/* Category */}
              <TableCell>
                <Badge
                  variant="outline"
                  className={getCategoryBadgeClass(item.category)}
                >
                  {item.category}
                </Badge>
              </TableCell>

              {/* Read Time & Blocks */}
              <TableCell>
                <div className="flex justify-center items-center gap-1 text-muted-foreground text-xs">
                  <Clock className="size-3.5 text-muted-foreground" />
                  <span>{item.readTime}</span>
                </div>
              </TableCell>

              {/* Published Date */}
              <TableCell className="text-xs text-muted-foreground">
                {item.createdAt}
              </TableCell>

              {/* Featured Toggle */}
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

              {/* Actions Menu */}
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
                        href={`/blog/${item.slug}`}
                        target="_blank"
                        className="cursor-pointer"
                      >
                        <ExternalLink className="size-4 mr-2" />
                        View on site
                      </Link>
                    </DropdownMenuItem>

                    {/* Edit article */}
                    <DropdownMenuItem asChild>
                      <Link
                        href={`/dashboard/blog/edit/${item.slug}`}
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

                    {/* Delete article */}
                    <DropdownMenuItem
                      variant="destructive"
                      className="cursor-pointer"
                      onClick={() => onDeleteClick(item)}
                    >
                      <Trash2 className="size-4 mr-2" />
                      Delete article
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

export default BlogTableSection;
