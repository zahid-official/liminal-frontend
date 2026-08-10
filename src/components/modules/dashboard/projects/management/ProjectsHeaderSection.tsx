import LiminalButton from "@/components/shared/LiminalButton";
import { FolderGit2Icon, PlusCircle } from "lucide-react";
import Link from "next/link";

// ProjectsHeaderSection Component
const ProjectsHeaderSection = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      {/* Title */}
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center size-12 rounded-lg bg-liminal-secondary/8 shrink-0">
          <FolderGit2Icon className="size-6 text-liminal-secondary" />
        </div>

        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            Projects Management
          </h1>
          <p className="text-muted-foreground text-sm">
            Manage your portfolio, update existing projects or publish new ones.
          </p>
        </div>
      </div>

      {/* Action Button */}
      <Link href="/dashboard/projects/create">
        <LiminalButton
          icon={PlusCircle}
          animateIcon={false}
          iconPosition="left"
          className="rounded-lg"
        >
          Create Project
        </LiminalButton>
      </Link>
    </div>
  );
};

export default ProjectsHeaderSection;
