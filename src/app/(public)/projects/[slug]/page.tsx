import ProjectIntro from "@/components/modules/public/projects/projectDetails/ProjectIntro";
import ProjectOverview from "@/components/modules/public/projects/projectDetails/ProjectOverview";
import { getProjectBySlug } from "@/components/modules/public/projects/projectsData";
import PageHeader from "@/components/shared/PageHeader";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// Props
interface ProjectDetailsPageProps {
  params: Promise<{ slug: string }>;
}

// Dynamic Metadata
export async function generateMetadata({
  params,
}: ProjectDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found | Liminal" };
  }

  return {
    title: `${project.title} | Liminal Projects`,
    description: project.shortIntro,
  };
}

// ProjectDetailsPage Component
const ProjectDetailsPage = async ({ params }: ProjectDetailsPageProps) => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    console.log("Project not found for slug:", slug);
    notFound();
  }
  return (
    <main>
      {/* Page Header */}
      <PageHeader
        title="Project Insights"
        items={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: project.title },
        ]}
        bgImage={project.heroImage}
      />

      {/* Project Intro */}
      <ProjectIntro project={project} />

      {/* Project Overview */}
      <ProjectOverview project={project} />
    </main>
  );
};

export default ProjectDetailsPage;
