import {
  ExternalLink,
  ImageIcon,
  MoreHorizontal,
  PencilLine,
  Trash2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  formatDimensions,
  IFurniture,
} from "@/components/modules/public/services/furniture/furnitureData";
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

interface FurnitureTableSectionProps {
  paginatedFurniture: IFurniture[];
  onDeleteClick: (furniture: IFurniture) => void;
  onClearFilters?: () => void;
}

// Helper to get status badge styling
const getStatusBadgeClass = (status: IFurniture["status"]) => {
  switch (status) {
    case "In Stock":
      return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20";
    case "Out of Stock":
      return "bg-destructive/10 text-destructive border-destructive/20";
    case "Pre-Order":
      return "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20";
    case "Made to Order":
      return "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20";
    case "Limited Edition":
      return "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
};

// FurnitureTableSection Component
const FurnitureTableSection = ({
  paginatedFurniture,
  onDeleteClick,
  onClearFilters,
}: FurnitureTableSectionProps) => {
  // Handle empty state
  if (paginatedFurniture.length === 0) {
    return (
      <ManagementEmptyState
        title="No Furniture Found"
        description="No furniture items match your current filters. Try adjusting your search criteria or clear active filters."
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
            <TableHead className="w-72 text-left pl-4">
              Furniture Piece & Tagline
            </TableHead>
            <TableHead>Category & Product Code</TableHead>
            <TableHead>Materials & Dimensions</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Availability</TableHead>
            <TableHead>Lead Time</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>

        {/* Table Body */}
        <TableBody>
          {paginatedFurniture.map((item) => (
            <TableRow
              key={item.id}
              className="group hover:bg-muted/60 transition-colors"
            >
              {/* Thumbnail & Title */}
              <TableCell className="text-left">
                <div className="flex items-center gap-3">
                  {/*Thumbnail */}
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

                  {/* Title and Tagline */}
                  <div>
                    <div className="font-medium text-foreground line-clamp-1">
                      {item.title}
                    </div>
                    <div className="text-xs text-muted-foreground line-clamp-1 truncate">
                      {item.tagline}
                    </div>
                  </div>
                </div>
              </TableCell>

              {/* Category & Product Code */}
              <TableCell>
                <div className="font-medium text-foreground line-clamp-1">
                  {item.category}
                </div>
                <div className="text-xs text-muted-foreground line-clamp-1 mt-0.5">
                  {item.productCode}
                </div>
              </TableCell>

              {/* Materials & Dimensions */}
              <TableCell>
                <div className="font-medium text-xs text-foreground line-clamp-1">
                  {item.specifications.materials}
                </div>
                <div className="text-xs text-muted-foreground line-clamp-1 mt-0.5">
                  {formatDimensions(item.specifications.dimensions)}
                </div>
              </TableCell>

              {/* Price */}
              <TableCell className="font-semibold">{item.price}</TableCell>

              {/* Availability Status */}
              <TableCell>
                <Badge
                  variant="outline"
                  className={getStatusBadgeClass(item.status)}
                >
                  {item.status}
                </Badge>
              </TableCell>

              {/* Lead Time */}
              <TableCell>
                <span className="text-xs text-muted-foreground">
                  {item.specifications.leadTime}
                </span>
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
                        href={`/services/furniture/${item.slug}`}
                        target="_blank"
                        className="cursor-pointer"
                      >
                        <ExternalLink className="size-4 mr-2" />
                        View on site
                      </Link>
                    </DropdownMenuItem>

                    {/* Edit furniture */}
                    <DropdownMenuItem asChild>
                      <Link
                        href={`/dashboard/furniture/edit/${item.slug}`}
                        className="cursor-pointer"
                      >
                        <PencilLine className="size-4 mr-2" />
                        Edit details
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />

                    {/* Delete item */}
                    <DropdownMenuItem
                      variant="destructive"
                      className="cursor-pointer"
                      onClick={() => onDeleteClick(item)}
                    >
                      <Trash2 className="size-4 mr-2" />
                      Delete piece
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

export default FurnitureTableSection;
