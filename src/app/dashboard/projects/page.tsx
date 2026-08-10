import ProjectsManagement from "@/components/modules/dashboard/projects/management/ProjectsManagement";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects Management | Liminal Admin",
  description: "Manage and organize your interior design portfolio projects.",
};

// ProjectsManagementPage Component
const ProjectsManagementPage = () => {
  return (
    <main className="custom-container py-16">
      <ProjectsManagement />
    </main>
  );
};

export default ProjectsManagementPage;
