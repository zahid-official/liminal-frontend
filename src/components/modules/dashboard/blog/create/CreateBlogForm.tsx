"use client";

import LiminalButton from "@/components/shared/LiminalButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { PenTool, RotateCcw, Send } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldErrors, useFieldArray, useForm } from "react-hook-form";
import slugify from "slugify";
import { toast } from "sonner";
import { BlogFormValues, blogSchema } from "./types";

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
      status: "",
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
        router.push("/dashboard");
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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Page Title */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center size-12 rounded-lg bg-liminal-secondary/8 shrink-0">
            <PenTool className="size-6 text-liminal-secondary" />
          </div>

          <div>
            <h1 className="text-3xl font-semibold tracking-tight">
              Create New Article
            </h1>
            <p className="text-muted-foreground text-sm">
              Compose and publish premium editorial content for the Liminal
              journal.
            </p>
          </div>
        </div>

        {/* Page Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Reset Button */}
          <LiminalButton
            type="button"
            variant="outline"
            icon={RotateCcw}
            iconPosition="left"
            animateIcon={false}
            onClick={() => form.reset()}
            disabled={isSubmitting}
            className="rounded-lg w-24"
          >
            Reset
          </LiminalButton>

          {/* Publish Button */}
          <LiminalButton
            type="submit"
            icon={Send}
            isLoading={isSubmitting}
            className="rounded-lg"
          >
            {isSubmitting ? "Publishing..." : "Publish Article"}
          </LiminalButton>
        </div>
      </div>

      {/* Main Form Content */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Main Column: Essentials, Content Blocks and Editorial Quote */}
        <div className="xl:col-span-2 space-y-8"></div>

        {/* Sidebar Column: Cover Image, Author and Publishing */}
        <div className="space-y-8 xl:sticky xl:bottom-8 self-end h-fit"></div>
      </div>
    </form>
  );
};

export default CreateBlogForm;
