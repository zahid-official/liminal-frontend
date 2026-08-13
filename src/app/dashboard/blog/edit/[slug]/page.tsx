import { getArticleBySlug } from "@/components/modules/public/blog/blogData";
import EditBlogForm from "@/components/modules/dashboard/blog/edit/EditBlogForm";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Edit Article | Liminal Admin",
  description: "Edit an existing blog article in the Liminal journal",
};

interface EditBlogPageProps {
  params: Promise<{ slug: string }>;
}

// EditBlogPage Component
const EditBlogPage = async ({ params }: EditBlogPageProps) => {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="custom-container py-16">
      <EditBlogForm initialData={article} />
    </main>
  );
};

export default EditBlogPage;
