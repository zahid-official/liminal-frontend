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
  params: Promise<{ slug: string }>;
}

// Dynamic Metadata
export async function generateMetadata({
  params,
}: BlogDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

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
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const { prev, next } = getAdjacentArticles(article.slug);

  return (
    <main>
      {/* Page Header */}
      <PageHeader
        title="Journal Insight"
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
      <BlogRelatedArticles currentSlug={article.slug} />
    </main>
  );
};

export default BlogDetailsPage;
