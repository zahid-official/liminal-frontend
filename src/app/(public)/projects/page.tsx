import ProjectsCTA from "@/components/modules/public/projects/ProjectsCTA";
import PageHeader from "@/components/shared/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects | Liminal",
  description:
    "Explore our portfolio of premium interior design and architectural projects. From residential villas to commercial spaces, we bring creative visions to life.",
};

// ProjectsPage Component
const ProjectsPage = () => {
  return (
    <main>
      <PageHeader
        title="Our Projects"
        items={[{ label: "Home", href: "/" }, { label: "Projects" }]}
        bgImage="/assets/projects/bg-project-premium.png"
      />

      <ProjectsCTA />
    </main>
  );
};

export default ProjectsPage;
