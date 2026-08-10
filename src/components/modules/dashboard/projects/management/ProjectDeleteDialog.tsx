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
import { IProject } from "@/components/modules/public/projects/projectsData";

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
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the project
            <span className="font-semibold text-foreground">
              {" "}
              &quot;{projectToDelete?.title}&quot;{" "}
            </span>
            and remove its data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={onConfirm}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            Delete Project
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ProjectDeleteDialog;
