import ProjectsManagement from "@/components/modules/dashboard/projects/management/ProjectsManagement";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "",
  description: "",
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
