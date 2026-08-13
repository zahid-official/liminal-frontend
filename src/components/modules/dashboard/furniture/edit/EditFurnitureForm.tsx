"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArmchairIcon, Save } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldErrors, useFieldArray, useForm } from "react-hook-form";
import slugify from "slugify";
import { toast } from "sonner";
import { IFurniture } from "@/components/modules/public/services/furniture/furnitureData";
import FurnitureBasicInfoSection from "../create/FurnitureBasicInfoSection";
import FurnitureGallerySection from "../create/FurnitureGallerySection";
import FurnitureHeaderSection from "../create/FurnitureHeaderSection";
import FurnitureNarrativeSection from "../create/FurnitureNarrativeSection";
import FurniturePricingSection from "../create/FurniturePricingSection";
import FurnitureSpecificationsSection from "../create/FurnitureSpecificationsSection";
import FurnitureThumbnailSection from "../create/FurnitureThumbnailSection";
import { FurnitureFormValues, furnitureSchema } from "../create/types";

// Interface for EditFurnitureForm Props
interface EditFurnitureFormProps {
  initialData: IFurniture;
}

// EditFurnitureForm Component
const EditFurnitureForm = ({ initialData }: EditFurnitureFormProps) => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form initialization with Zod validation resolver and initial data
  const form = useForm<FurnitureFormValues>({
    resolver: zodResolver(furnitureSchema),
    defaultValues: {
      title: initialData.title || "",
      slug: initialData.slug || "",
      productCode: initialData.productCode || "",
      category: initialData.category || "",
      status: initialData.status || "",
      price: initialData.price || "",
      stock: initialData.stock ?? 0,
      thumbnail: initialData.thumbnail || "",
      thumbnailCaption: "",
      tagline: initialData.tagline || "",
      description: initialData.description || "",
      details: {
        overview: initialData.details?.overview || "",
        designStory: initialData.details?.designStory || "",
        craftsmanship: initialData.details?.craftsmanship || "",
      },
      specifications: {
        materials: initialData.specifications?.materials || "",
        weight: initialData.specifications?.weight || "",
        dimensions: {
          width:
            initialData.specifications?.dimensions?.width !== undefined
              ? String(initialData.specifications.dimensions.width)
              : "",
          depth:
            initialData.specifications?.dimensions?.depth !== undefined
              ? String(initialData.specifications.dimensions.depth)
              : "",
          height:
            initialData.specifications?.dimensions?.height !== undefined
              ? String(initialData.specifications.dimensions.height)
              : "",
          unit: initialData.specifications?.dimensions?.unit || "mm",
        },
        leadTime: initialData.specifications?.leadTime || "",
        warranty: initialData.specifications?.warranty || "",
      },
      galleryImages:
        initialData.galleryImages?.map((image) => ({
          url: image.url,
          caption: image.caption || "",
        })) || [],
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
        "Please check all required fields and correct the errors before saving.",
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
        id: initialData.id,
        slug: generatedSlug,
        specifications: {
          ...data.specifications,
          dimensions,
        },
      };

      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Updated Furniture Data:", payload);

      toast.success("Furniture updated successfully!", {
        description:
          "The furniture piece has been updated in the collection.",
      });

      // Brief delay to allow the user to see the success toast before redirecting
      setTimeout(() => {
        router.push("/dashboard/furniture");
      }, 1500);
    } catch (error) {
      console.error(error);
      toast.error("Failed to update furniture", {
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
      <FurnitureHeaderSection
        title="Edit Furniture"
        description="Update the specifications and details of this bespoke furniture piece."
        icon={ArmchairIcon}
        isSubmitting={isSubmitting}
        submitButtonText="Save Changes"
        submitButtonLoadingText="Saving..."
        submitButtonIcon={Save}
        submitButtonAnimateIcon={false}
        onReset={() => form.reset()}
      />

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
        <div className="space-y-8 xl:sticky xl:bottom-8 self-end h-fit">
          <FurnitureThumbnailSection form={form} />
          <FurniturePricingSection form={form} />
          <FurnitureSpecificationsSection form={form} />
        </div>
      </div>
    </form>
  );
};

export default EditFurnitureForm;
