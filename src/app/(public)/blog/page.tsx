import BlogEditorialIntro from "@/components/modules/public/blog/BlogEditorialIntro";
import BlogExplorer from "@/components/modules/public/blog/BlogExplorer";
import BlogNewsletter from "@/components/modules/public/blog/BlogNewsletter";
import BlogPhilosophy from "@/components/modules/public/blog/BlogPhilosophy";
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

      {/* Editorial Intro */}
      <BlogEditorialIntro />

      {/* Design Journal Explorer */}
      <BlogExplorer />

      {/* Design Philosophy */}
      <BlogPhilosophy />

      {/* Journal Newsletter */}
      <BlogNewsletter />
    </main>
  );
};

export default BlogPage;
