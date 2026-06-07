import {
  getAdjacentArticles,
  getArticleBySlug,
} from "@/components/modules/public/blog/blogData";
import BlogArticleDetails from "@/components/modules/public/blog/blogDetails/BlogArticleDetails";
import BlogRelatedArticles from "@/components/modules/public/blog/blogDetails/BlogRelatedArticles";
import PageHeader from "@/components/shared/PageHeader";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// Props
interface BlogDetailsPageProps {
  params: Promise<{ id: string }>;
}

// Dynamic Metadata
export async function generateMetadata({
  params,
}: BlogDetailsPageProps): Promise<Metadata> {
  const { id } = await params;
  const article = getArticleBySlug(id);

  if (!article) {
    return { title: "Article Not Found" };
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

// BlogDetailsPage Component
const BlogDetailsPage = async ({ params }: BlogDetailsPageProps) => {
  const { id } = await params;
  const article = getArticleBySlug(id);

  if (!article) {
    notFound();
  }

  const { prev, next } = getAdjacentArticles(article.id);

  return (
    <main>
      {/* Page Header */}
      <PageHeader
        title={article.title}
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: article.category },
        ]}
        bgImage={article.image}
      />

      {/* Article Details Wrapper */}
      <BlogArticleDetails article={article} prev={prev} next={next} />

      {/* Related Articles */}
      <BlogRelatedArticles currentId={article.id} />
    </main>
  );
};

export default BlogDetailsPage;
