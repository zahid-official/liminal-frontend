"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldErrors, useFieldArray, useForm } from "react-hook-form";
import slugify from "slugify";
import { toast } from "sonner";
import LiminalButton from "@/components/shared/LiminalButton";
import { FileTextIcon, RotateCcw, Send } from "lucide-react";
import ProjectBasicInfoSection from "./ProjectBasicInfoSection";
import ProjectGallerySection from "./ProjectGallerySection";
import ProjectNarrativesSection from "./ProjectNarrativesSection";
import ProjectThumbnailSection from "./ProjectThumbnailSection";
import ProjectSpecificationsSection from "./ProjectSpecificationsSection";
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
      interiorStyle: "",
      isFeatured: false,
      status: "" as unknown as "Concept",
      area: "",
      location: "",
      duration: "",
      completionYear: "",
      thumbnail: "",
      thumbnailCaption: "",
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

  // Form validation failure handler
  const onInvalid = (errors: FieldErrors<ProjectFormValues>) => {
    console.error("Validation errors on submission:", errors);
    toast.error("Validation Failed", {
      description:
        "Please check all required fields and correct the errors before publishing.",
    });
  };

  // Form submission handler
  const onSubmit = async (data: ProjectFormValues) => {
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
      console.log("Submitted Project Data:", payload);

      toast.success("Project published successfully!", {
        description: "The new project has been published to the portfolio.",
      });

      // Brief delay to allow the user to see the success toast before redirecting
      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);
    } catch (error) {
      console.error(error);
      toast.error("Failed to publish project", {
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
            <FileTextIcon className="size-6 text-liminal-secondary" />
          </div>

          <div>
            <h1 className="text-3xl font-semibold tracking-tight">
              Create New Project
            </h1>
            <p className="text-muted-foreground text-sm">
              Fill in the details below to add a new interior design project to
              your portfolio.
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
            {isSubmitting ? "Publishing..." : "Publish Project"}
          </LiminalButton>
        </div>
      </div>

      {/* Main Form Content */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Main Column: Basic Info, Narratives and Gallery */}
        <div className="xl:col-span-2 space-y-8">
          <ProjectBasicInfoSection form={form} />
          <ProjectSpecificationsSection form={form} />
          <ProjectNarrativesSection form={form} />
        </div>

        {/* Sidebar Column: Thumbnail Settings and Gallery */}
        <div className="space-y-8">
          <ProjectThumbnailSection form={form} />
          <ProjectGallerySection
            form={form}
            galleryFields={galleryFields}
            appendGalleryImage={appendGalleryImage}
            removeGalleryImage={removeGalleryImage}
          />
        </div>
      </div>
    </form>
  );
};

export default CreateProjectForm;
