"use client";

import { furnitureCategories } from "@/components/modules/public/services/furniture/furnitureData";
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
import { LayoutDashboard, Link as LinkIcon } from "lucide-react";
import React, { useEffect } from "react";
import { UseFormReturn } from "react-hook-form";
import slugify from "slugify";

import { Textarea } from "@/components/ui/textarea";
import { FurnitureFormValues } from "./types";

// Interface for furniture basic info section props
interface FurnitureBasicInfoSectionProps {
  form: UseFormReturn<FurnitureFormValues>;
}

// FurnitureBasicInfoSection Component
const FurnitureBasicInfoSection: React.FC<FurnitureBasicInfoSectionProps> = ({
  form,
}) => {
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
          Core identity and classification for the furniture product.
        </CardDescription>
      </CardHeader>

      {/* Card Body */}
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Title */}
          <Field invalid={!!form.formState.errors.title}>
            <FieldLabel
              required
              className="text-sm font-semibold tracking-wide"
            >
              Product Title
            </FieldLabel>
            <Input
              placeholder="e.g. Horizon Sectional"
              {...form.register("title")}
              className="focus-visible:ring-liminal-secondary/10 focus-visible:border-liminal-secondary"
            />
            <FieldError errors={[form.formState.errors.title]} />
          </Field>

          {/* Slug (Auto-generated & Non-editable) */}
          <Field invalid={!!form.formState.errors.slug}>
            <FieldLabel className="text-sm font-semibold tracking-wide">
              URL Slug
            </FieldLabel>
            <div className="relative flex items-center">
              <LinkIcon className="absolute left-3 w-3.5 h-3.5 text-muted-foreground/60 pointer-events-none" />
              <Input
                placeholder="product-slug"
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

          {/* Category Selection */}
          <Field invalid={!!form.formState.errors.category}>
            <FieldLabel
              required
              className="text-sm font-semibold tracking-wide"
            >
              Category
            </FieldLabel>

            <Select
              onValueChange={(val) =>
                form.setValue("category", val, { shouldValidate: true })
              }
              defaultValue={form.getValues("category")}
            >
              <SelectTrigger className="w-full focus:ring-liminal-secondary/10 focus:border-liminal-secondary">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                {furnitureCategories
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

          {/* Product Code */}
          <Field invalid={!!form.formState.errors.productCode}>
            <FieldLabel
              required
              className="text-sm font-semibold tracking-wide"
            >
              Product Code (SKU)
            </FieldLabel>
            <Input
              placeholder="e.g. LFC-ST-001"
              {...form.register("productCode")}
              className="focus-visible:ring-liminal-secondary/10 focus-visible:border-liminal-secondary"
            />
            <FieldError errors={[form.formState.errors.productCode]} />
          </Field>
        </div>

        {/* Description */}
        <Field invalid={!!form.formState.errors.description}>
          <FieldLabel required className="text-sm font-semibold tracking-wide">
            Description
          </FieldLabel>
          <Textarea
            placeholder="Provide a compelling description of the furniture product..."
            {...form.register("description")}
            className="min-h-30 focus-visible:ring-liminal-secondary/10 focus-visible:border-liminal-secondary resize-y"
          />
          <FieldError errors={[form.formState.errors.description]} />
        </Field>
      </CardContent>
    </Card>
  );
};

export default FurnitureBasicInfoSection;
