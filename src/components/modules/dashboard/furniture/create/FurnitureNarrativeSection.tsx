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
import { FileText } from "lucide-react";
import React from "react";
import { UseFormReturn } from "react-hook-form";

import { FurnitureFormValues } from "./types";
import { Input } from "@/components/ui/input";

interface FurnitureNarrativeSectionProps {
  form: UseFormReturn<FurnitureFormValues>;
}

// FurnitureNarrativeSection Component
const FurnitureNarrativeSection: React.FC<FurnitureNarrativeSectionProps> = ({
  form,
}) => {
  return (
    <Card>
      <CardHeader className="gap-0 pb-1.5">
        <CardTitle className="flex items-center gap-2">
          <FileText className="w-4.5 h-4.5 text-liminal-secondary" />
          <span className="text-lg tracking-tight font-medium">
            Narrative Details
          </span>
        </CardTitle>

        <CardDescription>
          In-depth storytelling for the product details page.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Tagline */}
        <Field invalid={!!form.formState.errors.tagline}>
          <FieldLabel required className="text-sm font-semibold tracking-wide">
            Tagline
          </FieldLabel>
          <Input
            placeholder="e.g. Modular Seating Architecture"
            {...form.register("tagline")}
            className="focus-visible:ring-liminal-secondary/10 focus-visible:border-liminal-secondary"
          />
          <FieldError errors={[form.formState.errors.tagline]} />
        </Field>

        {/* Overview (Required) */}
        <Field invalid={!!form.formState.errors.details?.overview}>
          <FieldLabel required className="text-sm font-semibold tracking-wide">
            Overview
          </FieldLabel>
          <Textarea
            placeholder="Detailed overview of the design context and philosophy..."
            {...form.register("details.overview")}
            className="min-h-30 focus-visible:ring-liminal-secondary/10 focus-visible:border-liminal-secondary resize-y"
          />
          <FieldError errors={[form.formState.errors.details?.overview]} />
        </Field>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Design Story (Optional) */}
          <Field invalid={!!form.formState.errors.details?.designStory}>
            <FieldLabel className="text-sm font-semibold tracking-wide">
              Design Story
            </FieldLabel>
            <Textarea
              placeholder="The origin narrative and material sourcing story..."
              {...form.register("details.designStory")}
              className="min-h-28 focus-visible:ring-liminal-secondary/10 focus-visible:border-liminal-secondary resize-y"
            />
            <FieldError errors={[form.formState.errors.details?.designStory]} />
          </Field>

          {/* Craftsmanship (Optional) */}
          <Field invalid={!!form.formState.errors.details?.craftsmanship}>
            <FieldLabel className="text-sm font-semibold tracking-wide">
              Craftsmanship
            </FieldLabel>
            <Textarea
              placeholder="Manufacturing techniques and artisan details..."
              {...form.register("details.craftsmanship")}
              className="min-h-28 focus-visible:ring-liminal-secondary/10 focus-visible:border-liminal-secondary resize-y"
            />
            <FieldError
              errors={[form.formState.errors.details?.craftsmanship]}
            />
          </Field>
        </div>
      </CardContent>
    </Card>
  );
};

export default FurnitureNarrativeSection;
