import FeaturedProject from "@/components/modules/public/projects/FeaturedProject";
import ProjectsExplorer from "@/components/modules/public/projects/ProjectsExplorer";
import PageHeader from "@/components/shared/PageHeader";
import type { Metadata } from "next";

// Metadata for the Projects Page
export const metadata: Metadata = {
  title: "Our Projects | Liminal Interior Design Portfolio",
  description:
    "Explore Liminal's portfolio of stunning interior design projects — from residential sanctuaries to commercial masterpieces. Each project showcases our commitment to spatial excellence and material innovation.",
};

// ProjectsPage Component
const ProjectsPage = () => {
  return (
    <main>
      {/* Page Header */}
      <PageHeader
        title="Our Projects"
        items={[{ label: "Home", href: "/" }, { label: "Projects" }]}
        bgImage="/assets/projects/apex-residence.png"
      />

      {/* Featured Project */}
      <FeaturedProject />

      <ProjectsExplorer />
    </main>
  );
};

export default ProjectsPage;
