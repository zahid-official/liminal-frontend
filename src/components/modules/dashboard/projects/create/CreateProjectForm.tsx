"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldErrors, useFieldArray, useForm } from "react-hook-form";
import slugify from "slugify";
import { toast } from "sonner";
import { FileTextIcon, Send } from "lucide-react";
import ProjectHeaderSection from "./ProjectHeaderSection";
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
      galleryImages: [],
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
      <ProjectHeaderSection
        title="Create New Project"
        description="Fill in the details below to add a new interior design project to your portfolio."
        icon={FileTextIcon}
        isSubmitting={isSubmitting}
        submitButtonText="Publish Project"
        submitButtonLoadingText="Publishing..."
        submitButtonIcon={Send}
        submitButtonAnimateIcon={true}
        onReset={() => form.reset()}
      />

      {/* Main Form Content */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Main Column: Basic Info, Narratives and Gallery */}
        <div className="xl:col-span-2 space-y-8">
          <ProjectBasicInfoSection form={form} />
          <ProjectNarrativesSection form={form} />
          <ProjectGallerySection
            form={form}
            galleryFields={galleryFields}
            appendGalleryImage={appendGalleryImage}
            removeGalleryImage={removeGalleryImage}
          />
        </div>

        {/* Sidebar Column: Thumbnail Settings and Gallery */}
        <div className="space-y-8 xl:sticky xl:bottom-8 self-end h-fit">
          <ProjectThumbnailSection form={form} />
          <ProjectSpecificationsSection form={form} />
        </div>
      </div>
    </form>
  );
};

export default CreateProjectForm;
