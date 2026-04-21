import BlogGrid from "@/components/modules/public/blog/BlogGrid";
import FeaturedPost from "@/components/modules/public/blog/FeaturedPost";
import NewsletterSection from "@/components/modules/public/blog/NewsletterSection";
import PageHeader from "@/components/shared/PageHeader";

// Blog Page Component
const BlogPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; page?: string }>;
}) => {
  const { category, page } = await searchParams;

  return (
    <main>
      <PageHeader
        title="Journal & Insights"
        items={[{ label: "Home", href: "/" }, { label: "Blog" }]}
        bgImage="/assets/bg-blog.jpeg"
      />

      {/* Editorial Featured Section */}
      <FeaturedPost />

      {/* Main Blog Content with Category Filters and Technical Grid */}
      <BlogGrid activeCategory={category} activePage={page} />

      {/* Premium Newsletter Section */}
      <NewsletterSection />
    </main>
  );
};

export default BlogPage;
