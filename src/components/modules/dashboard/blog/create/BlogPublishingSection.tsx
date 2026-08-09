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
import { Clock, Settings2 } from "lucide-react";
import React, { useEffect } from "react";
import { UseFormReturn } from "react-hook-form";

import { BlogFormValues } from "./types";

interface BlogPublishingSectionProps {
  form: UseFormReturn<BlogFormValues>;
}

// BlogPublishingSection Component
const BlogPublishingSection: React.FC<BlogPublishingSectionProps> = ({
  form,
}) => {
  const content = form.watch("content");
  const description = form.watch("description");
  const quoteText = form.watch("quote.text");

  // Automatically calculate estimated read time whenever content changes (Production-grade approach)
  useEffect(() => {
    let totalWords = 0;

    if (description) {
      totalWords += description.trim().split(/\s+/).filter(Boolean).length;
    }

    if (quoteText) {
      totalWords += quoteText.trim().split(/\s+/).filter(Boolean).length;
    }

    if (Array.isArray(content)) {
      content.forEach((block) => {
        if (block.heading) {
          totalWords += block.heading.trim().split(/\s+/).filter(Boolean).length;
        }
        if (block.paragraph) {
          totalWords += block.paragraph.trim().split(/\s+/).filter(Boolean).length;
        }
      });
    }

    // Production Standard: Empty when no text exists; min 1 min when content is typed
    if (totalWords === 0) {
      form.setValue("readTime", "", { shouldValidate: false });
    } else {
      const minutes = Math.max(1, Math.ceil(totalWords / 200));
      form.setValue("readTime", `${minutes} min`, { shouldValidate: true });
    }
  }, [content, description, quoteText, form]);

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
        {/* Read Time (Auto-generated) */}
        <Field invalid={!!form.formState.errors.readTime}>
          <FieldLabel className="text-sm font-semibold tracking-wide">
            Read Time
          </FieldLabel>
          <div className="relative flex items-center">
            <Clock className="absolute left-3 w-3.5 h-3.5 text-muted-foreground/60 pointer-events-none" />
            <Input
              placeholder="Auto-calculated from content"
              {...form.register("readTime")}
              readOnly
              className="pl-8 pr-16 bg-muted/40 text-muted-foreground focus-visible:ring-0 focus-visible:border-input cursor-default"
            />
            <span className="absolute right-2 px-1.5 py-0.5 text-[9px] font-semibold tracking-wider text-muted-foreground/80 bg-muted-foreground/10 border border-muted-foreground/15 rounded-md pointer-events-none uppercase">
              auto
            </span>
          </div>
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
