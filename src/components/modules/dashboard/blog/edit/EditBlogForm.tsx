"use client";

import { IBlogArticle } from "@/components/modules/public/blog/blogData";
import { zodResolver } from "@hookform/resolvers/zod";
import { FileTextIcon, Save } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldErrors, useFieldArray, useForm } from "react-hook-form";
import slugify from "slugify";
import { toast } from "sonner";
import BlogAuthorSection from "../create/BlogAuthorSection";
import BlogContentSection from "../create/BlogContentSection";
import BlogCoverImageSection from "../create/BlogCoverImageSection";
import BlogEssentialsSection from "../create/BlogEssentialsSection";
import BlogHeaderSection from "../create/BlogHeaderSection";
import BlogPublishingSection from "../create/BlogPublishingSection";
import BlogQuoteSection from "../create/BlogQuoteSection";
import { BlogFormValues, blogSchema } from "../create/types";

// Interface for EditBlogForm Props
interface EditBlogFormProps {
  initialData: IBlogArticle;
}

// EditBlogForm Component
const EditBlogForm = ({ initialData }: EditBlogFormProps) => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form initialization with Zod validation resolver and initial data
  const form = useForm<BlogFormValues>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: initialData.title || "",
      slug: initialData.slug || "",
      category: initialData.category || "",
      description: initialData.description || "",
      content: initialData.content || [],
      thumbnail: initialData.thumbnail?.url || "",
      thumbnailCaption: initialData.thumbnail?.caption || "",
      isFeatured: initialData.isFeatured || false,
      quote: {
        text: initialData.quote?.text || "",
        attribution: initialData.quote?.attribution || "",
      },
      author: {
        name: initialData.author?.name || "",
        email: initialData.author?.email || "",
        role: initialData.author?.role || "",
      },
      readTime: initialData.readTime || "",
      createdAt: initialData.createdAt || "",
      tags: initialData.tags || "",
    },
  });

  // Dynamic field array control for handling content blocks
  const {
    fields: contentFields,
    append: appendContentBlock,
    remove: removeContentBlock,
  } = useFieldArray({
    control: form.control,
    name: "content",
  });

  // Form validation failure handler
  const onInvalid = (errors: FieldErrors<BlogFormValues>) => {
    console.error("Validation errors on submission:", errors);
    toast.error("Validation Failed", {
      description:
        "Please check all required fields and correct the errors before saving.",
    });
  };

  // Form submission handler
  const onSubmit = async (data: BlogFormValues) => {
    setIsSubmitting(true);
    console.log(data);

    try {
      // Auto-generate slug from title if missing or auto-update payload
      const generatedSlug =
        data.slug ||
        slugify(data.title, { lower: true, strict: true, trim: true });

      const payload = {
        ...data,
        slug: generatedSlug,
      };

      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Updated Blog Article Data:", payload);

      toast.success("Article updated successfully!", {
        description: "The blog article changes have been saved.",
      });

      // Brief delay to allow the user to see the success toast before redirecting
      setTimeout(() => {
        router.push("/dashboard/blog");
      }, 1500);
    } catch (error) {
      console.error(error);
      toast.error("Failed to update article", {
        description: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit, onInvalid)}
      className="space-y-8"
    >
      {/* Form Header */}
      <BlogHeaderSection
        title="Edit Article"
        description="Update article contents, metadata, and editorial highlights."
        icon={FileTextIcon}
        isSubmitting={isSubmitting}
        submitButtonText="Save Changes"
        submitButtonLoadingText="Saving..."
        submitButtonIcon={Save}
        onReset={() => form.reset()}
      />

      {/* Main Form Content */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Main Column: Essentials, Content Blocks and Editorial Quote */}
        <div className="xl:col-span-2 space-y-8">
          <BlogEssentialsSection form={form} />
          <BlogContentSection
            form={form}
            contentFields={contentFields}
            appendContentBlock={appendContentBlock}
            removeContentBlock={removeContentBlock}
          />
          <BlogQuoteSection form={form} />
        </div>

        {/* Sidebar Column: Cover Image, Author and Publishing */}
        <div className="space-y-8 xl:sticky xl:bottom-8 self-end h-fit">
          <BlogCoverImageSection form={form} />
          <BlogAuthorSection form={form} />
          <BlogPublishingSection form={form} />
        </div>
      </div>
    </form>
  );
};

export default EditBlogForm;
