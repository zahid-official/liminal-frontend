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
      <PageHeader
        title="The Journal"
        items={[{ label: "Home", href: "/" }, { label: "Journal" }]}
        bgImage="/assets/blog/staircase.png"
      />
    </main>
  );
};

export default BlogPage;
