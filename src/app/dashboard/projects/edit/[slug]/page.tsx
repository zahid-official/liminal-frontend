import { getProjectBySlug } from "@/components/modules/public/projects/projectsData";
import EditProjectForm from "@/components/modules/dashboard/projects/edit/EditProjectForm";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Edit Project | Liminal Admin",
  description: "Edit an existing interior design project",
};

interface EditProjectPageProps {
  params: Promise<{ slug: string }>;
}

const EditProjectPage = async ({ params }: EditProjectPageProps) => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="custom-container py-16">
      <EditProjectForm initialData={project} />
    </main>
  );
};

export default EditProjectPage;
