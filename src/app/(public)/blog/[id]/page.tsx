import { blogArticles } from "@/components/modules/public/blog/blogData";
import BlogDetailsView from "@/components/modules/public/blog/blogDetails/BlogDetailsView";
import PageHeader from "@/components/shared/PageHeader";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

// 1. Generate Static Params for build pre-rendering
export async function generateStaticParams() {
  return blogArticles.map((article) => ({
    id: article.id,
  }));
}

// 2. Generate Dynamic Metadata for Search Engine Optimization
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const article = blogArticles.find((art) => art.id === id);

  if (!article) {
    return {
      title: "Article Not Found | Liminal Journal",
      description:
        "The requested architectural design journal entry could not be found.",
    };
  }

  return {
    title: `${article.title} — Journal`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.image }],
    },
  };
}

// 3. Blog Details Page Server Component
const BlogDetailsPage = async ({ params }: PageProps) => {
  const { id } = await params;

  // Find current article index
  const currentIndex = blogArticles.findIndex((art) => art.id === id);

  if (currentIndex === -1) {
    notFound();
  }

  const article = blogArticles[currentIndex];

  // Calculate Next and Previous Articles with circular wrapping
  const prevArticle =
    blogArticles[
      currentIndex === 0 ? blogArticles.length - 1 : currentIndex - 1
    ];
  const nextArticle =
    blogArticles[
      currentIndex === blogArticles.length - 1 ? 0 : currentIndex + 1
    ];

  // Calculate Related Articles (same category, up to 2 items, excluding current article)
  let relatedArticles = blogArticles.filter(
    (art) => art.category === article.category && art.id !== article.id,
  );

  // If we don't have enough related articles in the same category, fill with others
  if (relatedArticles.length < 2) {
    const extraArticles = blogArticles.filter(
      (art) =>
        art.id !== article.id && !relatedArticles.some((r) => r.id === art.id),
    );
    relatedArticles = [...relatedArticles, ...extraArticles].slice(0, 2);
  }

  return (
    <main>
      <PageHeader
        title="Journal Details"
        items={[
          { label: "Home", href: "/" },
          { label: "Journal", href: "/blog" },
          { label: "Blog Details" },
        ]}
        bgImage="/assets/blog/travertine.png"
      />
      <BlogDetailsView
        article={article}
        relatedArticles={relatedArticles}
        prevArticle={prevArticle}
        nextArticle={nextArticle}
      />
    </main>
  );
};

export default BlogDetailsPage;
