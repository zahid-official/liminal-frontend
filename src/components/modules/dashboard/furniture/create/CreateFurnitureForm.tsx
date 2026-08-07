"use client";

import LiminalButton from "@/components/shared/LiminalButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArmchairIcon, RotateCcw, Send } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldErrors, useFieldArray, useForm } from "react-hook-form";
import slugify from "slugify";
import { toast } from "sonner";
import FurnitureBasicInfoSection from "./FurnitureBasicInfoSection";
import FurnitureThumbnailSection from "./FurnitureThumbnailSection";
import { FurnitureFormValues, furnitureSchema } from "./types";
import FurnitureNarrativeSection from "./FurnitureNarrativeSection";
import FurnitureGallerySection from "./FurnitureGallerySection";
import FurnitureSpecificationsSection from "./FurnitureSpecificationsSection";

// CreateFurnitureForm Component
const CreateFurnitureForm = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form initialization with Zod validation resolver
  const form = useForm<FurnitureFormValues>({
    resolver: zodResolver(furnitureSchema),
    defaultValues: {
      title: "",
      slug: "",
      productCode: "",
      category: "",
      status: "",
      price: "",
      stock: 0,
      thumbnail: "",
      tagline: "",
      description: "",
      details: {
        overview: "",
        designStory: "",
        craftsmanship: "",
      },
      specifications: {
        materials: "",
        weight: "",
        dimensions: {
          width: "",
          depth: "",
          height: "",
          unit: "mm",
        },
        leadTime: "",
        warranty: "",
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
  const onInvalid = (errors: FieldErrors<FurnitureFormValues>) => {
    console.error("Validation errors on submission:", errors);
    toast.error("Validation Failed", {
      description:
        "Please check all required fields and correct the errors before publishing.",
    });
  };

  // Form submission handler
  const onSubmit = async (data: FurnitureFormValues) => {
    setIsSubmitting(true);
    console.log(data);

    try {
      // Auto-generate slug from title if missing
      const generatedSlug =
        data.slug ||
        slugify(data.title, { lower: true, strict: true, trim: true });

      // Transform dimension strings to numbers for the payload
      const dimensions = {
        unit: data.specifications.dimensions.unit,
        ...(data.specifications.dimensions.width && {
          width: Number(data.specifications.dimensions.width),
        }),
        ...(data.specifications.dimensions.depth && {
          depth: Number(data.specifications.dimensions.depth),
        }),
        ...(data.specifications.dimensions.height && {
          height: Number(data.specifications.dimensions.height),
        }),
      };

      const payload = {
        ...data,
        slug: generatedSlug,
        specifications: {
          ...data.specifications,
          dimensions,
        },
      };

      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Submitted Furniture Data:", payload);

      toast.success("Furniture published successfully!", {
        description:
          "The new furniture product has been added to the collection.",
      });

      // Brief delay to allow the user to see the success toast before redirecting
      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);
    } catch (error) {
      console.error(error);
      toast.error("Failed to publish furniture", {
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
            <ArmchairIcon className="size-6 text-liminal-secondary" />
          </div>

          <div>
            <h1 className="text-3xl font-semibold tracking-tight">
              Create New Furniture
            </h1>
            <p className="text-muted-foreground text-sm">
              Fill in the details below to add a new furniture product to the
              collection.
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
            {isSubmitting ? "Publishing..." : "Publish Furniture"}
          </LiminalButton>
        </div>
      </div>

      {/* Main Form Content */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Main Column: Basic Info, Marketing, Narratives and Gallery */}
        <div className="xl:col-span-2 space-y-8">
          <FurnitureBasicInfoSection form={form} />
          <FurnitureNarrativeSection form={form} />
          <FurnitureGallerySection
            form={form}
            galleryFields={galleryFields}
            appendGalleryImage={appendGalleryImage}
            removeGalleryImage={removeGalleryImage}
          />
        </div>

        {/* Sidebar Column: Thumbnail, Pricing and Specifications */}
        <div className="space-y-8">
          <FurnitureThumbnailSection form={form} />
          <FurnitureSpecificationsSection form={form} />
        </div>
      </div>
    </form>
  );
};

export default CreateFurnitureForm;
