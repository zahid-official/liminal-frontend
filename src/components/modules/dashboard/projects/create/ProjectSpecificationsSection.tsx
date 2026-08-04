"use client";

import React from "react";
import { UseFormReturn } from "react-hook-form";
import { SlidersHorizontal } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { ProjectFormValues } from "./types";

interface ProjectSpecificationsSectionProps {
  form: UseFormReturn<ProjectFormValues>;
}

/**
 * ProjectSpecificationsSection Component
 *
 * Manages physical and quantitative specifications for the project,
 * including total floor area, location, duration, and completion year.
 */
export const ProjectSpecificationsSection: React.FC<
  ProjectSpecificationsSectionProps
> = ({ form }) => {
  return (
    <Card>
      <CardHeader className="gap-0 pb-1.5">
        <CardTitle className="flex items-center gap-2">
          <SlidersHorizontal className="w-4.5 h-4.5 text-liminal-secondary" />
          <span className="text-lg tracking-tight font-medium">
            Specifications
          </span>
        </CardTitle>

        <CardDescription>
          Physical and quantitative parameters for the project.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Location Input */}
        <Field invalid={!!form.formState.errors.location}>
          <FieldLabel required className="text-sm font-semibold tracking-wide">
            Location
          </FieldLabel>
          <Input
            placeholder="e.g. Baridhara, Dhaka"
            {...form.register("location")}
            className="focus-visible:ring-liminal-secondary/10 focus-visible:border-liminal-secondary"
          />
          <FieldError errors={[form.formState.errors.location]} />
        </Field>

        {/* Area / Size Input */}
        <Field invalid={!!form.formState.errors.area}>
          <FieldLabel required className="text-sm font-semibold tracking-wide">
            Area
          </FieldLabel>
          <Input
            placeholder="e.g. 4,200 sq ft"
            {...form.register("area")}
            className="focus-visible:ring-liminal-secondary/10 focus-visible:border-liminal-secondary"
          />
          <FieldError errors={[form.formState.errors.area]} />
        </Field>

        {/* Duration Input */}
        <Field invalid={!!form.formState.errors.duration}>
          <FieldLabel required className="text-sm font-semibold tracking-wide">
            Duration
          </FieldLabel>
          <Input
            placeholder="e.g. 14 Months"
            {...form.register("duration")}
            className="focus-visible:ring-liminal-secondary/10 focus-visible:border-liminal-secondary"
          />
          <FieldError errors={[form.formState.errors.duration]} />
        </Field>

        {/* Completion Year Input */}
        <Field invalid={!!form.formState.errors.completionYear}>
          <FieldLabel required className="text-sm font-semibold tracking-wide">
            Completion Year
          </FieldLabel>
          <Input
            placeholder="e.g. 2024"
            {...form.register("completionYear")}
            className="focus-visible:ring-liminal-secondary/10 focus-visible:border-liminal-secondary"
          />
          <FieldError errors={[form.formState.errors.completionYear]} />
        </Field>
      </CardContent>
    </Card>
  );
};
