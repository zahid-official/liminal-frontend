"use client";

import { ImagePlus, Trash2Icon } from "lucide-react";
import React from "react";
import { UseFieldArrayReturn, UseFormReturn } from "react-hook-form";

import LiminalButton from "@/components/shared/LiminalButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
import { ProjectFormValues } from "./types";

interface ProjectGallerySectionProps {
  form: UseFormReturn<ProjectFormValues>;
  galleryFields: UseFieldArrayReturn<
    ProjectFormValues,
    "galleryImages",
    "id"
  >["fields"];
  appendGalleryImage: UseFieldArrayReturn<
    ProjectFormValues,
    "galleryImages",
    "id"
  >["append"];
  removeGalleryImage: UseFieldArrayReturn<
    ProjectFormValues,
    "galleryImages",
    "id"
  >["remove"];
}

/**
 * ProjectGallerySection Component
 *
 * Manages dynamic gallery image input fields using useFieldArray.
 * Allows users to add, remove, edit image URLs and optional captions.
 */
export const ProjectGallerySection: React.FC<ProjectGallerySectionProps> = ({
  form,
  galleryFields,
  appendGalleryImage,
  removeGalleryImage,
}) => {
  return (
    <Card>
      <CardHeader className="gap-0 pb-1.5">
        <CardTitle className="flex items-center gap-2">
          <ImagePlus className="w-4.5 h-4.5 text-liminal-secondary" />
          <span className="text-lg tracking-tight font-medium">
            Gallery Images
          </span>
        </CardTitle>

        <CardDescription>
          Add high-quality images showcasing the completed project.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {galleryFields.map((field, index) => (
          <div
            key={field.id}
            className="p-4 rounded-xl border bg-muted/20 relative group"
          >
            {/* Delete button (visible on hover) */}
            <div className="absolute top-2 right-2 z-10">
              <Button
                type="button"
                variant="outline"
                onClick={() => removeGalleryImage(index)}
                className="h-8 w-8 p-0 text-muted-foreground/80 hover:text-destructive hover:bg-destructive/10 border border-border/30 hover:border-destructive/10 transition-colors rounded-md"
              >
                <Trash2Icon className="w-4 h-4" />
              </Button>
            </div>

            <div className="grid gap-4 pr-8">
              {/* Image URL Input */}
              <Field
                invalid={!!form.formState.errors.galleryImages?.[index]?.url}
              >
                <FieldLabel
                  required
                  className="text-sm font-semibold tracking-wide"
                >
                  Image URL
                </FieldLabel>
                <Input
                  placeholder="/assets/projects/..."
                  {...form.register(`galleryImages.${index}.url` as const)}
                  className="focus-visible:ring-liminal-secondary/10 focus-visible:border-liminal-secondary"
                />
                <FieldError
                  errors={[form.formState.errors.galleryImages?.[index]?.url]}
                />
              </Field>

              {/* Image Caption Input */}
              <Field>
                <FieldLabel className="text-sm font-semibold tracking-wide">
                  Caption (Optional)
                </FieldLabel>
                <Input
                  placeholder="e.g. Living Room - Travertine Feature Wall"
                  {...form.register(`galleryImages.${index}.caption` as const)}
                  className="focus-visible:ring-liminal-secondary/10 focus-visible:border-liminal-secondary"
                />
              </Field>
            </div>
          </div>
        ))}

        {/* Add New Image Button */}
        <LiminalButton
          type="button"
          variant="outline"
          icon={ImagePlus}
          iconPosition="left"
          animateIcon={false}
          className="w-full border-dashed border-border/60 hover:border-border text-muted-foreground hover:text-foreground  h-12 rounded-lg"
          onClick={() => appendGalleryImage({ url: "", caption: "" })}
        >
          Add Gallery Image
        </LiminalButton>
        <FieldError errors={[form.formState.errors.galleryImages?.root]} />
      </CardContent>
    </Card>
  );
};
