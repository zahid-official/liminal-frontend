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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FurnitureFormValues } from "./types";

interface FurnitureSpecificationsSectionProps {
  form: UseFormReturn<FurnitureFormValues>;
}

// FurnitureSpecificationsSection Component
const FurnitureSpecificationsSection: React.FC<
  FurnitureSpecificationsSectionProps
> = ({ form }) => {
  return (
    <Card>
      {/* Card Header */}
      <CardHeader className="gap-0 pb-1.5">
        <CardTitle className="flex items-center gap-2">
          <SlidersHorizontal className="w-4.5 h-4.5 text-liminal-secondary" />
          <span className="text-lg tracking-tight font-medium">
            Technical Specifications
          </span>
        </CardTitle>

        <CardDescription>
          Physical properties, dimensions, and service terms.
        </CardDescription>
      </CardHeader>

      {/* Card Body */}
      <CardContent className="space-y-6">
        {/* Materials */}
        <Field invalid={!!form.formState.errors.specifications?.materials}>
          <FieldLabel
            required
            className="text-sm font-semibold tracking-wide"
          >
            Materials
          </FieldLabel>
          <Input
            placeholder="e.g. Bouclé & Smoked Oak"
            {...form.register("specifications.materials")}
            className="focus-visible:ring-liminal-secondary/10 focus-visible:border-liminal-secondary"
          />
          <FieldError
            errors={[form.formState.errors.specifications?.materials]}
          />
        </Field>

        {/* Weight */}
        <Field invalid={!!form.formState.errors.specifications?.weight}>
          <FieldLabel
            required
            className="text-sm font-semibold tracking-wide"
          >
            Weight
          </FieldLabel>
          <Input
            placeholder="e.g. 128 kg"
            {...form.register("specifications.weight")}
            className="focus-visible:ring-liminal-secondary/10 focus-visible:border-liminal-secondary"
          />
          <FieldError
            errors={[form.formState.errors.specifications?.weight]}
          />
        </Field>

        {/* Dimensions */}
        <div className="space-y-3">
          <FieldLabel className="text-sm font-semibold tracking-wide">
            Dimensions
          </FieldLabel>

          {/* Dimension Unit */}
          <Field
            invalid={
              !!form.formState.errors.specifications?.dimensions?.unit
            }
          >
            <Select
              onValueChange={(val: "cm" | "mm" | "in") =>
                form.setValue("specifications.dimensions.unit", val, {
                  shouldValidate: true,
                })
              }
              defaultValue={form.getValues("specifications.dimensions.unit")}
            >
              <SelectTrigger className="focus:ring-liminal-secondary/10 focus:border-liminal-secondary">
                <SelectValue placeholder="Select Unit" />
              </SelectTrigger>
              <SelectContent>
                {(["mm", "cm", "in"] as const).map((unit) => (
                  <SelectItem key={unit} value={unit}>
                    {unit}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FieldError
              errors={[
                form.formState.errors.specifications?.dimensions?.unit,
              ]}
            />
          </Field>

          {/* Width / Depth / Height */}
          <div className="grid grid-cols-3 gap-3">
            <Field>
              <Input
                type="number"
                min={0}
                placeholder="Width"
                {...form.register("specifications.dimensions.width")}
                className="focus-visible:ring-liminal-secondary/10 focus-visible:border-liminal-secondary"
              />
            </Field>

            <Field>
              <Input
                type="number"
                min={0}
                placeholder="Depth"
                {...form.register("specifications.dimensions.depth")}
                className="focus-visible:ring-liminal-secondary/10 focus-visible:border-liminal-secondary"
              />
            </Field>

            <Field>
              <Input
                type="number"
                min={0}
                placeholder="Height"
                {...form.register("specifications.dimensions.height")}
                className="focus-visible:ring-liminal-secondary/10 focus-visible:border-liminal-secondary"
              />
            </Field>
          </div>
        </div>

        {/* Lead Time */}
        <Field invalid={!!form.formState.errors.specifications?.leadTime}>
          <FieldLabel
            required
            className="text-sm font-semibold tracking-wide"
          >
            Lead Time
          </FieldLabel>
          <Input
            placeholder="e.g. 8-12 weeks"
            {...form.register("specifications.leadTime")}
            className="focus-visible:ring-liminal-secondary/10 focus-visible:border-liminal-secondary"
          />
          <FieldError
            errors={[form.formState.errors.specifications?.leadTime]}
          />
        </Field>

        {/* Warranty */}
        <Field invalid={!!form.formState.errors.specifications?.warranty}>
          <FieldLabel
            required
            className="text-sm font-semibold tracking-wide"
          >
            Warranty
          </FieldLabel>
          <Input
            placeholder="e.g. 10-year structural, 5-year upholstery"
            {...form.register("specifications.warranty")}
            className="focus-visible:ring-liminal-secondary/10 focus-visible:border-liminal-secondary"
          />
          <FieldError
            errors={[form.formState.errors.specifications?.warranty]}
          />
        </Field>
      </CardContent>
    </Card>
  );
};

export default FurnitureSpecificationsSection;
