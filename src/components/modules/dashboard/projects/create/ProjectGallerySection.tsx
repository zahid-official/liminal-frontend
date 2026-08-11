"use client";

import LiminalButton from "@/components/shared/LiminalButton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldError } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import {
  ImageIcon,
  ImagePlus,
  PlusCircle,
  PlusCircleIcon,
  UploadCloud,
  X,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { UseFieldArrayReturn, UseFormReturn } from "react-hook-form";
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

// ProjectGallerySection Component
const ProjectGallerySection: React.FC<ProjectGallerySectionProps> = ({
  form,
  galleryFields,
  appendGalleryImage,
  removeGalleryImage,
}) => {
  const galleryImagesError = form.formState.errors.galleryImages as
    | { root?: { message?: string }; message?: string }
    | undefined;

  const rootError =
    galleryImagesError?.root ||
    (galleryImagesError?.message
      ? { message: galleryImagesError.message }
      : undefined);

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
          Add multiple images to showcase the completed project.
        </CardDescription>
      </CardHeader>

      {/* Gallery Images */}
      <CardContent className="space-y-6">
        {galleryFields.length === 0 ? (
          /* Empty State */
          <label className="flex flex-col items-center justify-center w-full py-12 border-2 border-dashed rounded-xl cursor-pointer bg-card hover:bg-accent/40 border-border/80 hover:border-liminal-secondary/50 transition-all text-center px-4 group">
            <div className="p-3 rounded-full bg-muted/60 text-muted-foreground group-hover:text-liminal-secondary group-hover:bg-liminal-secondary/10 transition-colors mb-3">
              <ImageIcon className="w-8 h-8" />
            </div>

            <p className="text-sm font-medium text-foreground mb-1">
              Click to upload gallery images
            </p>
            <p className="text-xs text-muted-foreground mb-4">
              PNG, JPG, WEBP or SVG (Max 5MB per file)
            </p>

            <LiminalButton
              icon={PlusCircle}
              iconPosition="left"
              animateIcon={false}
              className="rounded-lg min-h-10 px-4"
              textClassName="text-sm"
            >
              Add Gallery Images
            </LiminalButton>

            <input
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={(e) => {
                const files = Array.from(e.target.files || []);
                files.forEach((file) => {
                  const url = URL.createObjectURL(file);
                  appendGalleryImage({
                    url,
                    caption: "",
                  });
                });
              }}
            />
          </label>
        ) : (
          <>
            {/* Render Gallery Images */}
            <div className="grid gap-4 md:grid-cols-2">
              {galleryFields.map((field, index) => {
                const currentUrl =
                  form.watch(`galleryImages.${index}.url`) || field.url;
                const fieldError =
                  form.formState.errors.galleryImages?.[index]?.url;

                return (
                  <div
                    key={field.id}
                    className="relative group p-4 rounded-xl border bg-card shadow-sm hover:shadow-md transition-shadow space-y-3"
                  >
                    {/* Delete button */}
                    <div className="absolute -top-2.5 -right-2.5 z-10">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => removeGalleryImage(index)}
                        className="size-7 text-muted-foreground/80 hover:text-background hover:bg-destructive border border-border/50 hover:border-destructive/10 transition-colors rounded-full"
                        title="Remove gallery image"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="space-y-4">
                      {/* Image Preview / File Picker */}
                      <div>
                        {currentUrl ? (
                          <div className="relative group/img rounded-lg overflow-hidden border aspect-video bg-muted/30 h-full min-h-24">
                            <Image
                              src={currentUrl}
                              alt={`Gallery item ${index + 1}`}
                              fill
                              className="object-cover"
                              unoptimized
                            />
                            <label className="absolute inset-0 bg-foreground/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center cursor-pointer text-background text-xs font-medium gap-1">
                              <UploadCloud className="w-3.5 h-3.5" />
                              Change
                              <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (file) {
                                    const url = URL.createObjectURL(file);
                                    form.setValue(
                                      `galleryImages.${index}.url`,
                                      url,
                                      { shouldValidate: true },
                                    );
                                  }
                                }}
                              />
                            </label>
                          </div>
                        ) : (
                          <label className="flex flex-col items-center justify-center aspect-video h-full min-h-24 border-2 border-dashed rounded-lg cursor-pointer bg-card hover:bg-accent/40 border-border/70 hover:border-liminal-secondary/50 transition-all group/btn">
                            <div className="flex flex-col items-center justify-center text-center p-4">
                              <div className="p-3 rounded-full bg-muted/60 text-muted-foreground group-hover/btn:text-liminal-secondary group-hover/btn:bg-liminal-secondary/10 transition-colors">
                                <UploadCloud className="size-6" />
                              </div>

                              <p className="mt-1.5 mb-0.5 text-sm font-medium text-liminal-secondary">
                                Click to upload
                              </p>
                              <p className="text-xs text-muted-foreground">
                                PNG, JPG, WEBP or SVG (Max 5MB)
                              </p>
                            </div>

                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                  const url = URL.createObjectURL(file);
                                  form.setValue(
                                    `galleryImages.${index}.url`,
                                    url,
                                    { shouldValidate: true },
                                  );
                                }
                              }}
                            />
                          </label>
                        )}
                      </div>

                      {/* Caption Input */}
                      <div className="flex flex-col">
                        <Field className="flex-1 flex flex-col">
                          <Textarea
                            placeholder="Caption (Optional)..."
                            {...form.register(
                              `galleryImages.${index}.caption` as const,
                            )}
                            className="flex-1 min-h-10 text-xs bg-transparent focus-visible:ring-liminal-secondary/10 focus-visible:border-liminal-secondary resize-y"
                          />
                        </Field>
                      </div>
                    </div>

                    <FieldError errors={[fieldError]} />
                  </div>
                );
              })}
            </div>

            {/* Add New Image Button */}
            <LiminalButton
              type="button"
              variant="outline"
              icon={PlusCircleIcon}
              iconPosition="left"
              animateIcon={false}
              className="rounded-lg w-full border-dashed"
              onClick={() => appendGalleryImage({ url: "", caption: "" })}
            >
              Add Gallery Image
            </LiminalButton>
          </>
        )}

        <FieldError errors={[rootError]} />
      </CardContent>
    </Card>
  );
};

export default ProjectGallerySection;
