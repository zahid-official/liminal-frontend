import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

interface ManagementTableSkeletonProps {
  rowCount?: number;
  columnCount?: number;
  showThumbnail?: boolean;
  className?: string;
}

// ManagementTableSkeleton Component
const ManagementTableSkeleton = ({
  rowCount = 6,
  columnCount = 5,
  showThumbnail = true,
  className,
}: ManagementTableSkeletonProps) => {
  const rows = Array.from({ length: rowCount });
  const extraColumns = Array.from({
    length: Math.max(1, columnCount - (showThumbnail ? 2 : 1)),
  });

  return (
    <div
      className={cn(
        "rounded-xl border border-border/50 bg-card overflow-hidden",
        className,
      )}
    >
      <Table>
        {/* Table Header Skeleton */}
        <TableHeader className="bg-muted/80">
          <TableRow>
            <TableHead className="w-72 pl-4">
              <Skeleton className="h-4 w-32" />
            </TableHead>
            {extraColumns.map((_, i) => (
              <TableHead key={i}>
                <Skeleton className="h-4 w-24" />
              </TableHead>
            ))}
            <TableHead className="w-20 text-right pr-4">
              <Skeleton className="h-4 w-12 ml-auto" />
            </TableHead>
          </TableRow>
        </TableHeader>

        {/* Table Body Skeleton Rows */}
        <TableBody>
          {rows.map((_, rowIndex) => (
            <TableRow key={rowIndex}>
              {/* First column with optional thumbnail + title/subtitle */}
              <TableCell className="pl-4">
                <div className="flex items-center gap-3">
                  {showThumbnail && (
                    <Skeleton className="size-12 rounded-md shrink-0" />
                  )}
                  <div className="space-y-2 flex-1 min-w-0">
                    <Skeleton className="h-4 w-36 max-w-full" />
                    <Skeleton className="h-3 w-24 max-w-full" />
                  </div>
                </div>
              </TableCell>

              {/* Extra middle columns */}
              {extraColumns.map((_, colIndex) => (
                <TableCell key={colIndex}>
                  <Skeleton
                    className={cn(
                      "h-4",
                      colIndex % 2 === 0 ? "w-28" : "w-20",
                    )}
                  />
                </TableCell>
              ))}

              {/* Actions Column */}
              <TableCell className="text-right pr-4">
                <Skeleton className="size-8 rounded-md ml-auto" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ManagementTableSkeleton;
