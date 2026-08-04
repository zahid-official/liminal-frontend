"use client";

import React from "react";
import { UseFormReturn, Controller } from "react-hook-form";
import { Save, Globe } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import LiminalButton from "@/components/shared/LiminalButton";

import { ProjectFormValues } from "./types";

interface ProjectPublishSectionProps {
  form: UseFormReturn<ProjectFormValues>;
  isSubmitting: boolean;
}

// ProjectPublishSection Component
export const ProjectPublishSection: React.FC<ProjectPublishSectionProps> = ({
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

        {/* Thumbnail Image URL */}
        <Field invalid={!!form.formState.errors.thumbnail}>
          <FieldLabel required className="text-sm font-semibold tracking-wide">
            Thumbnail Image URL
          </FieldLabel>
          <Input
            placeholder="/assets/projects/..."
            {...form.register("thumbnail")}
            className="focus-visible:ring-liminal-secondary/10 focus-visible:border-liminal-secondary"
          />
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
