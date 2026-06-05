import {
  blogArticles,
  getArticleBySlug,
} from "@/components/modules/public/blog/blogData";
import BlogDetailContent from "@/components/modules/public/blog/blogDetails/BlogDetailContent";
import BlogDetailNewsletter from "@/components/modules/public/blog/blogDetails/BlogDetailNewsletter";
import BlogDetailRelated from "@/components/modules/public/blog/blogDetails/BlogDetailRelated";
import PageHeader from "@/components/shared/PageHeader";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// Props
interface BlogDetailPageProps {
  params: Promise<{ id: string }>;
}

// Generate static params for all articles
export async function generateStaticParams() {
  return blogArticles.map((article) => ({
    id: article.id,
  }));
}

// Dynamic metadata
export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const article = getArticleBySlug(id);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

// BlogDetailsPage Component
const BlogDetailsPage = async ({ params }: BlogDetailPageProps) => {
  const { id } = await params;
  const article = getArticleBySlug(id);

  if (!article) {
    notFound();
  }

  return (
    <main>
      {/* 1. Hero — Immersive article hero with reading progress (dark) */}
      <PageHeader
        title="Journal Details"
        items={[
          { label: "Home", href: "/" },
          { label: "Journal", href: "/blog" },
          { label: "Blog Details" },
        ]}
        bgImage="/assets/blog/travertine.png"
      />

      {/* 2. Content — Rich editorial body with TOC sidebar (background) */}
      <BlogDetailContent article={article} />

      {/* 3. Related Articles — Prev/Next + grid (zinc) */}
      <BlogDetailRelated article={article} />


      {/* 5. Newsletter — Journal subscription (background) */}
      <BlogDetailNewsletter />
    </main>
  );
};

export default BlogDetailsPage;
