import FeaturedProject from "@/components/modules/public/projects/FeaturedProject";
import ProjectApproach from "@/components/modules/public/projects/ProjectApproach";
import ProjectsCTA from "@/components/modules/public/projects/ProjectsCTA";
import ProjectsCollection from "@/components/modules/public/projects/ProjectsCollection";
import PageHeader from "@/components/shared/PageHeader";
import type { Metadata } from "next";

// Metadata for the Projects Page
export const metadata: Metadata = {
  title: "Our Projects | Liminal Interior Design Portfolio",
  description:
    "Explore Liminal's portfolio of stunning interior design projects, ranging from residential sanctuaries to commercial masterpieces. Each project showcases our commitment to spatial excellence and material innovation.",
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

      {/* Projects Collection */}
      <ProjectsCollection />

      {/* Approach */}
      <ProjectApproach />

      {/* CTA Section */}
      <ProjectsCTA />
    </main>
  );
};

export default ProjectsPage;
