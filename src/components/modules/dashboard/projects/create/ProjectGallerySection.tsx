"use client";

import { ImageIcon, ImagePlus, Plus, Trash2, UploadCloud } from "lucide-react";
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
import { Field, FieldError } from "@/components/ui/field";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
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

      {/* Gallery Images */}
      <CardContent className="space-y-6">
        {galleryFields.length === 0 ? (
          /* Empty State */
          <label className="flex flex-col items-center justify-center w-full py-12 border-2 border-dashed rounded-xl cursor-pointer bg-card hover:bg-accent/40 border-border/80 hover:border-liminal-secondary/50 transition-all text-center px-4 group">
            <div className="p-3 rounded-full bg-muted/60 text-muted-foreground group-hover:text-liminal-secondary group-hover:bg-liminal-secondary/10 transition-colors mb-3">
              <ImageIcon className="w-8 h-8" />
            </div>
            <p className="text-sm font-medium text-foreground mb-1">
              No gallery images uploaded yet
            </p>
            <p className="text-xs text-muted-foreground mb-4">
              Click here to browse files or drop images directly into the
              gallery
            </p>
            <span className="px-4 py-2 bg-liminal-dark text-white rounded-lg text-xs font-medium shadow-sm flex items-center gap-2">
              <Plus className="w-4 h-4" /> Add Gallery Images
            </span>
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
                    caption: file.name.replace(/\.[^/.]+$/, ""),
                  });
                });
              }}
            />
          </label>
        ) : (
          /* Render Gallery Images */
          galleryFields.map((field, index) => {
            const currentUrl =
              form.watch(`galleryImages.${index}.url`) || field.url;

            return (
              <div
                key={field.id}
                className="relative group p-4 rounded-xl border bg-card shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Delete button */}
                <div className="absolute top-4 right-2 z-10">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => removeGalleryImage(index)}
                    className="size-8 text-muted-foreground/80 hover:text-destructive hover:bg-destructive/10 border border-border/30 hover:border-destructive/10 transition-colors rounded-md"
                  >
                    <Trash2 className="size-4.5" />
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch pr-8">
                  {/* Image Preview / File Picker */}
                  <div className="md:col-span-4 lg:col-span-3">
                    {currentUrl ? (
                      <div className="relative group/img rounded-lg overflow-hidden border aspect-video bg-muted/30 h-full min-h-24">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={currentUrl}
                          alt={`Gallery item ${index + 1}`}
                          className="w-full h-full object-cover"
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
                                );
                              }
                            }}
                          />
                        </label>
                      </div>
                    ) : (
                      <label className="flex flex-col items-center justify-center aspect-video h-full min-h-24 border-2 border-dashed rounded-lg cursor-pointer bg-muted/20 hover:bg-accent/40 border-border/70 text-center p-2 group/btn">
                        <UploadCloud className="w-5 h-5 text-muted-foreground group-hover/btn:text-liminal-secondary transition-colors mb-1" />
                        <span className="text-[11px] font-medium text-muted-foreground group-hover/btn:text-foreground">
                          Upload File
                        </span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              const url = URL.createObjectURL(file);
                              form.setValue(`galleryImages.${index}.url`, url);
                            }
                          }}
                        />
                      </label>
                    )}
                  </div>

                  {/* Caption Input */}
                  <div className="md:col-span-8 lg:col-span-9 flex flex-col">
                    <Field className="flex-1 flex flex-col">
                      <Textarea
                        placeholder="Caption (Optional)..."
                        {...form.register(
                          `galleryImages.${index}.caption` as const,
                        )}
                        className="flex-1 min-h-24 text-xs bg-transparent focus-visible:ring-liminal-secondary/10 focus-visible:border-liminal-secondary resize-y"
                      />
                    </Field>
                  </div>
                </div>
              </div>
            );
          })
        )}

        {/* Add New Image Button */}
        <LiminalButton
          type="button"
          variant="outline"
          icon={Plus}
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

export default ProjectGallerySection;
