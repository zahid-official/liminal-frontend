import { AlertTriangle, Trash2 } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Spinner } from "@/components/ui/spinner";

interface DeleteConfirmDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
  title?: string;
  description?: string;
  itemName?: string;
  itemSubtitle?: string;
  itemImage?: string;
  itemPreview?: React.ReactNode;
  confirmText?: string;
  cancelText?: string;
  isLoading?: boolean;
}

// DeleteConfirmDialog Component
const DeleteConfirmDialog = ({
  isOpen,
  onOpenChange,
  onConfirm,
  title = "Delete Item",
  description,
  itemName,
  itemSubtitle,
  itemImage,
  itemPreview,
  confirmText,
  cancelText = "Cancel",
  isLoading = false,
}: DeleteConfirmDialogProps) => {
  const dynamicConfirmText = isLoading
    ? "Deleting..."
    : confirmText || title;

  return (
    <AlertDialog open={isOpen} onOpenChange={isLoading ? undefined : onOpenChange}>
      <AlertDialogContent className="max-w-md p-6">
        {/* Header */}
        <AlertDialogHeader>
          <div className="flex items-center gap-4.5">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive ring-8 ring-destructive/5">
              <AlertTriangle className="size-5.5" />
            </div>

            <div>
              <AlertDialogTitle className="text-lg font-semibold">
                {title}
              </AlertDialogTitle>
              <AlertDialogDescription className="text-xs text-muted-foreground">
                This action is permanent and cannot be undone.
              </AlertDialogDescription>
            </div>
          </div>
        </AlertDialogHeader>

        {/* Item Preview Card */}
        {itemPreview ? (
          itemPreview
        ) : itemName ? (
          <div className="flex items-center gap-2.5 rounded-lg border border-border/60 bg-muted/30 p-2">
            {itemImage && (
              <div className="relative h-14 w-14 aspect-square shrink-0 overflow-hidden rounded-md border border-border/50 bg-muted">
                <Image
                  src={itemImage}
                  alt={itemName}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            )}

            <div className="flex-1 min-w-0">
              <h4 className="truncate text-sm font-medium text-foreground">
                {itemName}
              </h4>
              {itemSubtitle && (
                <p className="truncate text-xs text-muted-foreground">
                  {itemSubtitle}
                </p>
              )}
            </div>
          </div>
        ) : null}

        {/* Description */}
        <AlertDialogDescription>
          {description ? (
            description
          ) : itemName ? (
            <>
              Deleting{" "}
              <span className="font-semibold text-foreground">
                &quot;{itemName}&quot;
              </span>{" "}
              will permanently remove its details and associated data from our
              servers.
            </>
          ) : (
            "Are you sure you want to delete this item? This action cannot be undone."
          )}
        </AlertDialogDescription>

        {/* Footer */}
        <AlertDialogFooter className="bg-transparent">
          <AlertDialogCancel
            disabled={isLoading}
            className="cursor-pointer disabled:opacity-50"
          >
            {cancelText}
          </AlertDialogCancel>

          <AlertDialogAction
            variant="destructive"
            disabled={isLoading}
            onClick={(e) => {
              e.preventDefault();
              onConfirm();
            }}
            className="cursor-pointer disabled:opacity-50"
          >
            {isLoading ? (
              <Spinner className="size-4" />
            ) : (
              <Trash2 className="size-4.5" />
            )}
            {dynamicConfirmText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteConfirmDialog;
