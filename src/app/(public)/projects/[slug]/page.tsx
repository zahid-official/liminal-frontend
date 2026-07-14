import PageHeader from "@/components/shared/PageHeader";

// ProjectDetailsPage Component
const ProjectDetailsPage = () => {
  return (
    <main>
      {/* Page Header */}
      <PageHeader
        title="Project Details"
        items={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: "Project Details" },
        ]}
        bgImage="/assets/projects/bg-project-details-premium.png"
      />
    </main>
  );
};

export default ProjectDetailsPage;
