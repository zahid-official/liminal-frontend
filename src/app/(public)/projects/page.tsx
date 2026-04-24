import ProjectList from "@/components/modules/public/projects/ProjectList";
import PageHeader from "@/components/shared/PageHeader";

// ProjectsPage Component
const ProjectsPage = () => {
  return (
    <main>
      <PageHeader
        title="Our Portfolio"
        items={[{ label: "Home", href: "/" }, { label: "Projects" }]}
        bgImage="/assets/bg-project.webp"
      />
      <ProjectList />
    </main>
  );
};

export default ProjectsPage;
