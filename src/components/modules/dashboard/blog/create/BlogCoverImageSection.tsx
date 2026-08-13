"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { ImageIcon, UploadCloud } from "lucide-react";
import Image from "next/image";
import React from "react";
import { UseFormReturn } from "react-hook-form";

import { BlogFormValues } from "./types";

interface BlogCoverImageSectionProps {
  form: UseFormReturn<BlogFormValues>;
}

// BlogCoverImageSection Component
const BlogCoverImageSection: React.FC<BlogCoverImageSectionProps> = ({
  form,
}) => {
  return (
    <Card>
      {/* Card Header */}
      <CardHeader className="gap-0 pb-1.5">
        <CardTitle className="flex items-center gap-2">
          <ImageIcon className="w-4.5 h-4.5 text-liminal-secondary" />
          <span className="text-lg tracking-tight font-medium">
            Blog Cover Image
          </span>
        </CardTitle>

        <CardDescription>
          Featured image and display options for the article.
        </CardDescription>
      </CardHeader>

      {/* Card Body */}
      <CardContent className="space-y-6">
        {/* Cover Image Dropzone */}
        <Field invalid={!!form.formState.errors.thumbnail}>
          <FieldLabel required className="text-sm font-semibold tracking-wide">
            Cover Image
          </FieldLabel>

          <div className="space-y-4">
            {form.watch("thumbnail") ? (
              /* Preview State */
              <div className="relative group rounded-xl border overflow-hidden bg-muted/30 aspect-video flex items-center justify-center">
                <Image
                  src={form.watch("thumbnail")}
                  alt="Cover image preview"
                  fill
                  className="object-cover rounded-lg"
                  unoptimized
                />
                <label className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer text-background font-medium gap-1">
                  <UploadCloud className="w-5 h-5" />
                  Change
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const url = URL.createObjectURL(file);
                        form.setValue("thumbnail", url, {
                          shouldValidate: true,
                        });
                      }
                    }}
                  />
                </label>
              </div>
            ) : (
              /* Upload State */
              <label className="flex flex-col items-center justify-center w-full aspect-video border-2 border-dashed rounded-xl cursor-pointer bg-card hover:bg-accent/40 border-border/70 hover:border-liminal-secondary/50 transition-all group">
                <div className="flex flex-col items-center justify-center text-center p-4">
                  <div className="p-3 rounded-full bg-muted/60 text-muted-foreground group-hover:text-liminal-secondary group-hover:bg-liminal-secondary/10 transition-colors">
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
                      form.setValue("thumbnail", url, {
                        shouldValidate: true,
                      });
                    }
                  }}
                />
              </label>
            )}

            {/* Caption Textarea */}
            <Field>
              <Textarea
                placeholder="Cover image caption (Optional)..."
                {...form.register("thumbnailCaption")}
                className="min-h-24 text-xs bg-transparent focus-visible:ring-liminal-secondary/10 focus-visible:border-liminal-secondary resize-y"
              />
            </Field>
          </div>

          <FieldError errors={[form.formState.errors.thumbnail]} />
        </Field>
      </CardContent>
    </Card>
  );
};

export default BlogCoverImageSection;
