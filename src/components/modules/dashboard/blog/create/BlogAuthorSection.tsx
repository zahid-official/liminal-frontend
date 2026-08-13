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
import { UserRoundCheckIcon } from "lucide-react";
import React from "react";
import { UseFormReturn } from "react-hook-form";

import { BlogFormValues } from "./types";

interface BlogAuthorSectionProps {
  form: UseFormReturn<BlogFormValues>;
}

// BlogAuthorSection Component
const BlogAuthorSection: React.FC<BlogAuthorSectionProps> = ({ form }) => {
  return (
    <Card>
      {/* Card Header */}
      <CardHeader className="gap-0 pb-1.5">
        <CardTitle className="flex items-center gap-2">
          <UserRoundCheckIcon className="w-4.5 h-4.5 text-liminal-secondary" />
          <span className="text-lg tracking-tight font-medium">
            Author & Attribution
          </span>
        </CardTitle>

        <CardDescription>
          Author identity for the article byline.
        </CardDescription>
      </CardHeader>

      {/* Card Body */}
      <CardContent className="space-y-6">
        {/* Author Name */}
        <Field invalid={!!form.formState.errors.author?.name}>
          <FieldLabel required className="text-sm font-semibold tracking-wide">
            Author Name
          </FieldLabel>
          <Input
            placeholder="e.g. Liminal Studio"
            {...form.register("author.name")}
            className="focus-visible:ring-liminal-secondary/10 focus-visible:border-liminal-secondary"
          />
          <FieldError errors={[form.formState.errors.author?.name]} />
        </Field>

        {/* Author Email */}
        <Field invalid={!!form.formState.errors.author?.email}>
          <FieldLabel required className="text-sm font-semibold tracking-wide">
            Author Email
          </FieldLabel>
          <Input
            type="email"
            placeholder="e.g. contact@liminalbd.com"
            {...form.register("author.email")}
            className="focus-visible:ring-liminal-secondary/10 focus-visible:border-liminal-secondary"
          />
          <FieldError errors={[form.formState.errors.author?.email]} />
        </Field>

        {/* Author Role */}
        <Field invalid={!!form.formState.errors.author?.role}>
          <FieldLabel required className="text-sm font-semibold tracking-wide">
            Author Role
          </FieldLabel>
          <Input
            placeholder="e.g. Design Team"
            {...form.register("author.role")}
            className="focus-visible:ring-liminal-secondary/10 focus-visible:border-liminal-secondary"
          />
          <FieldError errors={[form.formState.errors.author?.role]} />
        </Field>
      </CardContent>
    </Card>
  );
};

export default BlogAuthorSection;
