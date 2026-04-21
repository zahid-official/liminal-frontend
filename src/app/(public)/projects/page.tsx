import PageHeader from "@/components/shared/PageHeader";
import ProjectList from "@/components/modules/public/projects/ProjectList";
import ProjectCTA from "@/components/modules/public/projects/ProjectCTA";

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
      <ProjectCTA />
    </main>
  );
};

export default ProjectsPage;
