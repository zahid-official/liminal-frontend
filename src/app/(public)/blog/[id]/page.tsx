import PageHeader from "@/components/shared/PageHeader";

// BlogDetailsPage Component
const BlogDetailsPage = () => {
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
    </main>
  );
};

export default BlogDetailsPage;
