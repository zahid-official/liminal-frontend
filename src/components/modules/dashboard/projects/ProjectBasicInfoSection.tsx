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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { LayoutDashboard, Link as LinkIcon } from "lucide-react";
import React, { useEffect } from "react";
import { UseFormReturn } from "react-hook-form";
import {
  projectCategories,
  projectStyles,
} from "../../public/projects/projectsData";

import slugify from "slugify";

import { ProjectFormValues } from "./types";

// Interface for project basic info section props
interface ProjectBasicInfoSectionProps {
  form: UseFormReturn<ProjectFormValues>;
}

// ProjectBasicInfoSection Component
export const ProjectBasicInfoSection: React.FC<
  ProjectBasicInfoSectionProps
> = ({ form }) => {
  const titleValue = form.watch("title");

  useEffect(() => {
    const slug = titleValue
      ? slugify(titleValue, { lower: true, strict: true, trim: true })
      : "";
    form.setValue("slug", slug, { shouldValidate: true });
  }, [titleValue, form]);

  return (
    <Card>
      {/* Card Header */}
      <CardHeader className="gap-0 pb-1.5">
        <CardTitle className="flex items-center gap-2">
          <LayoutDashboard className="w-4.5 h-4.5 text-liminal-secondary" />
          <span className="text-lg tracking-tight font-medium">
            Basic Information
          </span>
        </CardTitle>

        <CardDescription>
          Essential details and core parameters for the project.
        </CardDescription>
      </CardHeader>

      {/* Card Body */}
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project Title */}
          <Field invalid={!!form.formState.errors.title}>
            <FieldLabel
              required
              className="text-sm font-semibold tracking-wide"
            >
              Project Title
            </FieldLabel>
            <Input
              placeholder="e.g. Apex Residence"
              {...form.register("title")}
              className="focus-visible:ring-liminal-secondary/10 focus-visible:border-liminal-secondary"
            />
            <FieldError errors={[form.formState.errors.title]} />
          </Field>

          {/* Project Slug (Auto-generated & Non-editable) */}
          <Field invalid={!!form.formState.errors.slug}>
            <FieldLabel className="text-sm font-semibold tracking-wide">
              Slug
            </FieldLabel>
            <div className="relative flex items-center">
              <LinkIcon className="absolute left-3 w-3.5 h-3.5 text-muted-foreground/60 pointer-events-none" />
              <Input
                placeholder="project-slug"
                {...form.register("slug")}
                readOnly
                className="pl-8 pr-16 bg-muted/40 text-muted-foreground focus-visible:ring-0 focus-visible:border-input overflow-x-auto whitespace-nowrap cursor-default"
              />
              <span className="absolute right-2 px-1.5 py-0.5 text-[9px] font-semibold tracking-wider text-muted-foreground/80 bg-muted-foreground/10 border border-muted-foreground/15 rounded-md pointer-events-none uppercase">
                auto
              </span>
            </div>
            <FieldError errors={[form.formState.errors.slug]} />
          </Field>

          {/* Project Type */}
          <Field invalid={!!form.formState.errors.projectType}>
            <FieldLabel
              required
              className="text-sm font-semibold tracking-wide"
            >
              Project Type
            </FieldLabel>

            <Input
              placeholder="e.g. Private Penthouse"
              {...form.register("projectType")}
              className="focus-visible:ring-liminal-secondary/10 focus-visible:border-liminal-secondary"
            />
            <FieldError errors={[form.formState.errors.projectType]} />
          </Field>

          {/* Interior Style Selection */}
          <Field invalid={!!form.formState.errors.interiorStyle}>
            <FieldLabel
              required
              className="text-sm font-semibold tracking-wide"
            >
              Interior Style
            </FieldLabel>

            <Select
              onValueChange={(val) => form.setValue("interiorStyle", val)}
              defaultValue={form.getValues("interiorStyle")}
            >
              <SelectTrigger className="focus:ring-liminal-secondary/10 focus:border-liminal-secondary">
                <SelectValue placeholder="Select Style" />
              </SelectTrigger>
              <SelectContent>
                {projectStyles
                  .filter((s) => s !== "All Styles")
                  .map((style) => (
                    <SelectItem key={style} value={style}>
                      {style}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
            <FieldError errors={[form.formState.errors.interiorStyle]} />
          </Field>

          {/* Category Selection */}
          <Field invalid={!!form.formState.errors.category}>
            <FieldLabel
              required
              className="text-sm font-semibold tracking-wide"
            >
              Category
            </FieldLabel>

            <Select
              onValueChange={(val) => form.setValue("category", val)}
              defaultValue={form.getValues("category")}
            >
              <SelectTrigger className="focus:ring-liminal-secondary/10 focus:border-liminal-secondary">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                {projectCategories
                  .filter((c) => c !== "All")
                  .map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
            <FieldError errors={[form.formState.errors.category]} />
          </Field>

          {/* Status Selection */}
          <Field invalid={!!form.formState.errors.status}>
            <FieldLabel
              required
              className="text-sm font-semibold tracking-wide"
            >
              Status
            </FieldLabel>

            <Select
              onValueChange={(val: "Completed" | "In Progress" | "Concept") =>
                form.setValue("status", val)
              }
              defaultValue={form.getValues("status")}
            >
              <SelectTrigger className="focus:ring-liminal-secondary/10 focus:border-liminal-secondary">
                <SelectValue placeholder="Select Status" />
              </SelectTrigger>
              <SelectContent>
                {["Completed", "In Progress", "Concept"].map((status) => (
                  <SelectItem key={status} value={status}>
                    {status}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FieldError errors={[form.formState.errors.status]} />
          </Field>
        </div>

        {/* Overall Description */}
        <Field invalid={!!form.formState.errors.description} className="pt-2">
          <FieldLabel required className="text-sm font-semibold tracking-wide">
            Overall Description
          </FieldLabel>
          <Textarea
            placeholder="Provide a compelling overview of the project..."
            {...form.register("description")}
            className="min-h-30 focus-visible:ring-liminal-secondary/10 focus-visible:border-liminal-secondary resize-y"
          />
          <FieldError errors={[form.formState.errors.description]} />
        </Field>
      </CardContent>
    </Card>
  );
};
