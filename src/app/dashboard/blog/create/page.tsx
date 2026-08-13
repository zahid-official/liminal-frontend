import CreateBlogForm from "@/components/modules/dashboard/blog/create/CreateBlogForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Article | Liminal Admin",
  description: "Create a new blog article for the Liminal journal",
};

// CreateBlogPage Component
const CreateBlogPage = () => {
  return (
    <main className="custom-container py-16">
      {/* Create Blog Form */}
      <CreateBlogForm />
    </main>
  );
};

export default CreateBlogPage;
