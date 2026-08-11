"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldErrors, useFieldArray, useForm } from "react-hook-form";
import slugify from "slugify";
import { toast } from "sonner";
import LiminalButton from "@/components/shared/LiminalButton";
import { FileTextIcon, RotateCcw, Save } from "lucide-react";
import ProjectBasicInfoSection from "../create/ProjectBasicInfoSection";
import ProjectGallerySection from "../create/ProjectGallerySection";
import ProjectNarrativesSection from "../create/ProjectNarrativesSection";
import ProjectThumbnailSection from "../create/ProjectThumbnailSection";
import ProjectSpecificationsSection from "../create/ProjectSpecificationsSection";
import { ProjectFormValues, projectSchema } from "../create/types";
import { IProject } from "@/components/modules/public/projects/projectsData";

interface EditProjectFormProps {
  initialData: IProject;
}

const EditProjectForm = ({ initialData }: EditProjectFormProps) => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form initialization with Zod validation resolver
  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: initialData.title || "",
      slug: initialData.slug || "",
      category: initialData.category || "",
      projectType: initialData.projectType || "",
      interiorStyle: initialData.interiorStyle || "",
      isFeatured: initialData.isFeatured || false,
      status: initialData.status as unknown as "Concept" | "Completed" | "In Progress",
      area: initialData.area || "",
      location: initialData.location || "",
      duration: initialData.duration || "",
      completionYear: initialData.completionYear || "",
      thumbnail: initialData.thumbnail || "",
      thumbnailCaption: initialData.thumbnailCaption || "",
      description: initialData.description || "",
      narratives: {
        projectContext: initialData.narratives?.projectContext || "",
        clientVision: initialData.narratives?.clientVision || "",
        designObjectives: initialData.narratives?.designObjectives || "",
        spatialChallenges: initialData.narratives?.spatialChallenges || "",
        overallConcept: initialData.narratives?.overallConcept || "",
        theRealization: initialData.narratives?.theRealization || "",
      },
      galleryImages: initialData.galleryImages || [],
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
        "Please check all required fields and correct the errors before updating.",
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
      console.log("Updated Project Data:", payload);

      toast.success("Project updated successfully!", {
        description: "The project has been updated in the portfolio.",
      });

      // Brief delay to allow the user to see the success toast before redirecting
      setTimeout(() => {
        router.push("/dashboard/projects");
      }, 1500);
    } catch (error) {
      console.error(error);
      toast.error("Failed to update project", {
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
              Edit Project
            </h1>
            <p className="text-muted-foreground text-sm">
              Update the details of this interior design project in your
              portfolio.
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
            icon={Save}
            animateIcon={false}
            isLoading={isSubmitting}
            className="rounded-lg"
          >
            {isSubmitting ? "Saving..." : "Save Changes"}
          </LiminalButton>
        </div>
      </div>

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

export default EditProjectForm;
