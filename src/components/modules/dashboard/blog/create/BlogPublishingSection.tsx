"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Settings2 } from "lucide-react";
import React from "react";
import { UseFormReturn } from "react-hook-form";

import { BlogFormValues } from "./types";

interface BlogPublishingSectionProps {
  form: UseFormReturn<BlogFormValues>;
}

// BlogPublishingSection Component
const BlogPublishingSection: React.FC<BlogPublishingSectionProps> = ({
  form,
}) => {
  return (
    <Card>
      {/* Card Header */}
      <CardHeader className="gap-0 pb-1.5">
        <CardTitle className="flex items-center gap-2">
          <Settings2 className="w-4.5 h-4.5 text-liminal-secondary" />
          <span className="text-lg tracking-tight font-medium">
            Publishing Settings
          </span>
        </CardTitle>

        <CardDescription>
          Publication timing and metadata settings.
        </CardDescription>
      </CardHeader>

      {/* Card Body */}
      <CardContent className="space-y-6">
        {/* Read Time */}
        <Field invalid={!!form.formState.errors.readTime}>
          <FieldLabel required className="text-sm font-semibold tracking-wide">
            Read Time
          </FieldLabel>
          <Input
            placeholder="e.g. 6 min"
            {...form.register("readTime")}
            className="focus-visible:ring-liminal-secondary/10 focus-visible:border-liminal-secondary"
          />
          <FieldError errors={[form.formState.errors.readTime]} />
        </Field>

        {/* Publish Date */}
        <Field>
          <FieldLabel className="text-sm font-semibold tracking-wide">
            Publish Date
          </FieldLabel>
          <Input
            placeholder="e.g. Aug 2026"
            {...form.register("createdAt")}
            className="focus-visible:ring-liminal-secondary/10 focus-visible:border-liminal-secondary"
          />
        </Field>

        {/* Tags */}
        <Field>
          <FieldLabel className="text-sm font-semibold tracking-wide">
            Tags
          </FieldLabel>
          <Input
            placeholder="e.g. light, design, architecture"
            {...form.register("tags")}
            className="focus-visible:ring-liminal-secondary/10 focus-visible:border-liminal-secondary"
          />
          <p className="text-xs text-muted-foreground">
            Separate multiple tags with commas
          </p>
        </Field>
      </CardContent>
    </Card>
  );
};

export default BlogPublishingSection;
