import CreateProjectForm from "@/components/modules/dashboard/projects/create/CreateProjectForm";
import { FileTextIcon } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Project | Liminal Admin",
  description: "Create a new interior design project",
};

// CreateProjectPage Component
const CreateProjectPage = () => {
  return (
    <main className="custom-container py-16 space-y-8">
      {/* Page Header */}
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center size-12 rounded-lg bg-liminal-secondary/8 shrink-0">
          <FileTextIcon className="size-6 text-liminal-secondary" />
        </div>

        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            Create New Project
          </h1>
          <p className="text-muted-foreground text-sm">
            Fill in the details below to add a new interior design project to
            your portfolio.
          </p>
        </div>
      </div>

      {/* Create Project Form */}
      <CreateProjectForm />
    </main>
  );
};

export default CreateProjectPage;
