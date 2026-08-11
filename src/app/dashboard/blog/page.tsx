import BlogManagement from "@/components/modules/dashboard/blog/management/BlogManagement";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Management | Liminal Admin",
  description:
    "Manage editorial articles, publish new insights or update existing journal entries.",
};

// BlogManagementPage Component
const BlogManagementPage = () => {
  return (
    <main className="custom-container py-16">
      <BlogManagement />
    </main>
  );
};

export default BlogManagementPage;
