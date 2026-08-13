"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { PenTool, Send } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldErrors, useFieldArray, useForm } from "react-hook-form";
import slugify from "slugify";
import { toast } from "sonner";
import { BlogFormValues, blogSchema } from "./types";
import BlogHeaderSection from "./BlogHeaderSection";
import BlogEssentialsSection from "./BlogEssentialsSection";
import BlogCoverImageSection from "./BlogCoverImageSection";
import BlogContentSection from "./BlogContentSection";
import BlogQuoteSection from "./BlogQuoteSection";
import BlogPublishingSection from "./BlogPublishingSection";
import BlogAuthorSection from "./BlogAuthorSection";

// CreateBlogForm Component
const CreateBlogForm = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form initialization with Zod validation resolver
  const form = useForm<BlogFormValues>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: "",
      slug: "",
      category: "",
      description: "",
      content: [],
      thumbnail: "",
      thumbnailCaption: "",
      isFeatured: false,
      quote: {
        text: "",
        attribution: "",
      },
      author: {
        name: "",
        email: "",
        role: "",
      },
      readTime: "",
      createdAt: "",
      tags: "",
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
        "Please check all required fields and correct the errors before publishing.",
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
      console.log("Submitted Blog Article Data:", payload);

      toast.success("Article published successfully!", {
        description: "The new blog article has been published to the journal.",
      });

      // Brief delay to allow the user to see the success toast before redirecting
      setTimeout(() => {
        router.push("/dashboard/blog");
      }, 1500);
    } catch (error) {
      console.error(error);
      toast.error("Failed to publish article", {
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
        title="Create New Article"
        description="Compose and publish premium editorial content for the Liminal journal."
        icon={PenTool}
        isSubmitting={isSubmitting}
        submitButtonText="Publish Article"
        submitButtonLoadingText="Publishing..."
        submitButtonIcon={Send}
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

export default CreateBlogForm;
