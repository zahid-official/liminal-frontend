import BlogDetailContent from "@/components/modules/public/blog/blogDetails/BlogDetailContent";
import BlogDetailMeta from "@/components/modules/public/blog/blogDetails/BlogDetailMeta";
import BlogDetailNavigation from "@/components/modules/public/blog/blogDetails/BlogDetailNavigation";
import BlogDetailRelated from "@/components/modules/public/blog/blogDetails/BlogDetailRelated";
import BlogReadingProgress from "@/components/modules/public/blog/blogDetails/BlogReadingProgress";
import PageHeader from "@/components/shared/PageHeader";
import {
  blogArticles,
  getAdjacentArticles,
  getArticleBySlug,
  getRelatedArticles,
} from "@/components/modules/public/blog/blogData";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogArticles.map((post) => ({
    id: post.slug,
  }));
}

// Generate dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const post = getArticleBySlug(id);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

// BlogDetailsPage Component
const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const post = getArticleBySlug(id);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedArticles(post.id, 3);
  const { prev, next } = getAdjacentArticles(post.id);

  return (
    <main>
      {/* Reading Progress Bar */}
      <BlogReadingProgress />

      {/* 1. Editorial Hero — Immersive full-bleed hero */}
      <PageHeader
        title="Journal Details"
        items={[
          { label: "Home", href: "/" },
          { label: "Journal", href: "/blog" },
          { label: "Blog Details" },
        ]}
        bgImage="/assets/blog/travertine.png"
      />

      {/* 2. Author & Metadata Bar */}
      <BlogDetailMeta post={post} />

      {/* 3. Rich Content Body */}
      <BlogDetailContent content={post.content} />

      {/* 4. Previous/Next Navigation */}
      <BlogDetailNavigation prev={prev} next={next} />

      {/* 5. Related Articles */}
      <BlogDetailRelated posts={relatedPosts} />
    </main>
  );
};

export default BlogDetailsPage;
