"use client";

import LiminalButton from "@/components/shared/LiminalButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Switch } from "@/components/ui/switch";
import { Globe, Save, UploadCloud, X } from "lucide-react";
import React from "react";
import { Controller, UseFormReturn } from "react-hook-form";

import { ProjectFormValues } from "./types";

interface ProjectPublishSectionProps {
  form: UseFormReturn<ProjectFormValues>;
  isSubmitting: boolean;
}

// ProjectPublishSection Component
const ProjectPublishSection: React.FC<ProjectPublishSectionProps> = ({
  form,
  isSubmitting,
}) => {
  return (
    <Card>
      <CardHeader className="gap-0 pb-1.5">
        <CardTitle className="flex items-center gap-1.5">
          <Globe className="w-4.5 h-4.5 text-liminal-secondary" />
          <span className="text-lg tracking-tight font-medium">Publishing</span>
        </CardTitle>

        <CardDescription>
          Manage project visibility and publish settings.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Featured Project Switch */}
        <div className="flex items-center justify-between p-4 rounded-xl border bg-muted/20">
          <div className="space-y-0.5">
            <div className="text-sm font-medium">Featured Project</div>
            <div className="text-xs text-muted-foreground">
              Display on the homepage
            </div>
          </div>
          <Controller
            name="isFeatured"
            control={form.control}
            render={({ field }) => (
              <Switch
                checked={field.value}
                onCheckedChange={field.onChange}
                className="data-[state=checked]:bg-liminal-secondary"
              />
            )}
          />
        </div>

        {/* Thumbnail Image Dropzone */}
        <Field invalid={!!form.formState.errors.thumbnail}>
          <FieldLabel required className="text-sm font-semibold tracking-wide">
            Thumbnail Image
          </FieldLabel>

          <div className="space-y-3 mt-1.5">
            {form.watch("thumbnail") ? (
              /* Preview State */
              <div className="relative group rounded-xl border overflow-hidden bg-muted/30 aspect-video flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={form.watch("thumbnail")}
                  alt="Thumbnail preview"
                  className="w-full h-full object-cover rounded-lg"
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
                        form.setValue("thumbnail", url);
                      }
                    }}
                  />
                </label>
                <button
                  type="button"
                  onClick={() => form.setValue("thumbnail", "")}
                  className="absolute top-3 right-3 z-10 p-1 bg-background/30 hover:bg-destructive text-background rounded-full opacity-0 group-hover:opacity-100 transition-all cursor-pointer shadow-sm"
                  title="Remove thumbnail"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              /* Upload State */
              <label className="flex flex-col items-center justify-center w-full aspect-video border-2 border-dashed rounded-xl cursor-pointer bg-card hover:bg-accent/40 border-border/80 hover:border-liminal-secondary/50 transition-all group">
                <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center px-4">
                  <div className="p-3 rounded-full bg-muted/60 text-muted-foreground group-hover:text-liminal-secondary group-hover:bg-liminal-secondary/10 transition-colors mb-3">
                    <UploadCloud className="w-6 h-6" />
                  </div>
                  <p className="mb-1 text-sm font-medium text-foreground">
                    <span className="text-liminal-secondary">
                      Click to upload
                    </span>{" "}
                    or drag and drop
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
                      form.setValue("thumbnail", url);
                    }
                  }}
                />
              </label>
            )}
          </div>

          <FieldError errors={[form.formState.errors.thumbnail]} />
        </Field>
      </CardContent>

      {/* Action Footer Button */}
      <CardFooter className="bg-transparent border-t-0 pt-0">
        <LiminalButton
          type="submit"
          className="w-full group shadow-none"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">Saving...</span>
          ) : (
            <span className="flex items-center gap-2">
              <Save className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Save Project
            </span>
          )}
        </LiminalButton>
      </CardFooter>
    </Card>
  );
};

export default ProjectPublishSection;
