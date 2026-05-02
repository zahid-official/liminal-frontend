import ProjectGrid from "@/components/modules/public/projects/ProjectGrid";
import ProjectsCTA from "@/components/modules/public/projects/ProjectsCTA";
import PageHeader from "@/components/shared/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects | Liminal",
  description:
    "Explore our portfolio of premium interior design and architectural projects. From residential villas to commercial spaces, we bring creative visions to life.",
};

// ProjectsPage Component
const ProjectsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const resolvedSearchParams = await searchParams;
  const activeCategory =
    typeof resolvedSearchParams.category === "string"
      ? resolvedSearchParams.category
      : "All";

  return (
    <main>
      <PageHeader
        title="Our Projects"
        items={[{ label: "Home", href: "/" }, { label: "Projects" }]}
        bgImage="/assets/projects/bg-project-premium.png"
      />

      {/* Project Grid */}
      <ProjectGrid activeCategory={activeCategory} />

      {/* Project CTA */}
      <ProjectsCTA />
    </main>
  );
};

export default ProjectsPage;
