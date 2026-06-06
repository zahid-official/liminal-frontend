import {
  getAdjacentArticles,
  getArticleBySlug,
} from "@/components/modules/public/blog/blogData";
import BlogArticleContent from "@/components/modules/public/blog/blogDetails/BlogArticleContent";
import BlogArticleHero from "@/components/modules/public/blog/blogDetails/BlogArticleHero";
import BlogArticleNavigation from "@/components/modules/public/blog/blogDetails/BlogArticleNavigation";
import BlogArticleSidebar from "@/components/modules/public/blog/blogDetails/BlogArticleSidebar";
import BlogDesignerInsights from "@/components/modules/public/blog/blogDetails/BlogDesignerInsights";
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
      {/* Page Header — Consistent with other pages */}
      <PageHeader
        title={article.title}
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: article.category },
        ]}
        bgImage={article.image}
      />

      {/* Hero Image — Full-width immersive presentation */}
      <BlogArticleHero article={article} />

      {/* Article Body — Content + Sidebar */}
      <section className="py-8 md:py-16 relative">
        <div className="custom-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Sidebar — Desktop only, sticky */}
            <BlogArticleSidebar content={article.content} />

            {/* Main Content */}
            <div className="lg:col-span-8 lg:col-start-4">
              <BlogArticleContent content={article.content} />
            </div>
          </div>
        </div>
      </section>

      {/* Previous / Next Article Navigation */}
      <BlogArticleNavigation prev={prev} next={next} />

      {/* Designer Insights — Studio commentary */}
      <BlogDesignerInsights />

      {/* Related Articles — From The Journal */}
      <BlogRelatedArticles currentId={article.id} />
    </main>
  );
};

export default BlogDetailsPage;
