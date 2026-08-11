import { IProject } from "@/components/modules/public/projects/projectsData";
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
import { AlertTriangle, Trash2 } from "lucide-react";
import Image from "next/image";

interface ProjectDeleteDialogProps {
  projectToDelete: IProject | null;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
}

// ProjectDeleteDialog Component
const ProjectDeleteDialog = ({
  projectToDelete,
  onOpenChange,
  onConfirm,
}: ProjectDeleteDialogProps) => {
  return (
    <AlertDialog open={!!projectToDelete} onOpenChange={onOpenChange}>
      <AlertDialogContent className="max-w-md p-6">
        {/* Header */}
        <AlertDialogHeader>
          <div className="flex items-center gap-2.5">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive ring-8 ring-destructive/5">
              <AlertTriangle className="size-5.5" />
            </div>

            <div>
              <AlertDialogTitle className="text-lg font-semibold">
                Delete Project
              </AlertDialogTitle>
              <AlertDialogDescription className="text-xs text-muted-foreground">
                This action is permanent and cannot be undone.
              </AlertDialogDescription>
            </div>
          </div>
        </AlertDialogHeader>

        {projectToDelete && (
          <div className="flex items-center gap-2.5 rounded-lg border border-border/60 bg-muted/30 p-2">
            {projectToDelete.thumbnail && (
              <div className="relative h-14 w-14 aspect-square shrink-0 overflow-hidden rounded-md border border-border/50 bg-muted">
                <Image
                  src={projectToDelete.thumbnail}
                  alt={projectToDelete.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            )}

            <div className="flex-1">
              <h4 className="truncate text-sm font-medium text-foreground">
                {projectToDelete.title}
              </h4>
              <p className="truncate text-xs text-muted-foreground">
                {projectToDelete.location}
              </p>
            </div>
          </div>
        )}

        <AlertDialogDescription>
          Deleting{" "}
          <span className="font-semibold text-foreground">
            &quot;{projectToDelete?.title}&quot;
          </span>{" "}
          will permanently remove its details, gallery images, and associated
          data from our servers.
        </AlertDialogDescription>

        {/* Footer */}
        <AlertDialogFooter className="bg-transparent">
          <AlertDialogCancel className="cursor-pointer">
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            variant="destructive"
            onClick={onConfirm}
            className="cursor-pointer"
          >
            <Trash2 className="size-4.5" />
            Delete Project
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ProjectDeleteDialog;
