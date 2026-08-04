"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import slugify from "slugify";
import { toast } from "sonner";
import { ProjectBasicInfoSection } from "./ProjectBasicInfoSection";
import { ProjectFormValues, projectSchema } from "./types";

// CreateProjectForm Component
const CreateProjectForm = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form initialization with Zod validation resolver
  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: "",
      slug: "",
      category: "",
      projectType: "",
      status: "" as unknown as "Concept",
      area: "",
      location: "",
      duration: "",
      completionYear: "",
      thumbnail: "",
      description: "",
      narratives: {
        projectContext: "",
        clientVision: "",
        designObjectives: "",
        spatialChallenges: "",
        overallConcept: "",
        theRealization: "",
      },
      galleryImages: [{ url: "", caption: "" }],
    },
  });

  // Dynamic field array control for handling gallery image items
  const {
    fields: galleryFields,
    append: appendGalleryImage,
    remove: removeGalleryImage,
  } = useFieldArray({
    control: form.control,
    name: "galleryImages",
  });

  // Form submission handler
  const onSubmit = async (data: ProjectFormValues) => {
    setIsSubmitting(true);

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
      console.log("Submitted Project Data:", payload);

      toast.success("Project created successfully!", {
        description: "The new project has been published to the portfolio.",
      });

      router.push("/dashboard/projects");
    } catch (error) {
      console.error(error);
      toast.error("Failed to create project");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Main Column: Basic Info, Narratives and Gallery */}
        <div className="xl:col-span-2 space-y-8">
          <ProjectBasicInfoSection form={form} />
        </div>

        {/* Sidebar Column: Publish Settings and Specifications */}
        <div className="space-y-8"></div>
      </div>
    </form>
  );
};

export default CreateProjectForm;
