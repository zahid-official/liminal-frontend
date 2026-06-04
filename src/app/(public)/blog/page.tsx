import BlogExplorer from "@/components/modules/public/blog/BlogExplorer";
import PageHeader from "@/components/shared/PageHeader";
import type { Metadata } from "next";

// Metadata for the Blog / Journal Page
export const metadata: Metadata = {
  title: "Journal & Insights",
  description:
    "Explore the editorial voice, spatial philosophies, materiality studies, and design thinking behind Liminal's luxury environments.",
};

// BlogPage Component
const BlogPage = () => {
  return (
    <main>
      {/* Page Header */}
      <PageHeader
        title="The Journal"
        items={[{ label: "Home", href: "/" }, { label: "Blog" }]}
        bgImage="/assets/blog/staircase.png"
      />

      {/* Design Journal Explorer */}
      <BlogExplorer />
    </main>
  );
};

export default BlogPage;
