import CreateProjectForm from "@/components/modules/dashboard/projects/create/CreateProjectForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Project | Liminal Admin",
  description: "Create a new interior design project",
};

// CreateProjectPage Component
const CreateProjectPage = () => {
  return (
    <main className="custom-container py-16">
      {/* Create Project Form */}
      <CreateProjectForm />
    </main>
  );
};

export default CreateProjectPage;
