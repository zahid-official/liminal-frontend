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
import { CircleDollarSign } from "lucide-react";
import React from "react";
import { UseFormReturn } from "react-hook-form";

import { FurnitureFormValues } from "./types";

// Interface for furniture pricing section props
interface FurniturePricingSectionProps {
  form: UseFormReturn<FurnitureFormValues>;
}

// FurniturePricingSection Component
const FurniturePricingSection: React.FC<FurniturePricingSectionProps> = ({
  form,
}) => {
  return (
    <Card>
      {/* Card Header */}
      <CardHeader className="gap-0 pb-1.5">
        <CardTitle className="flex items-center gap-2">
          <CircleDollarSign className="w-4.5 h-4.5 text-liminal-secondary" />
          <span className="text-lg tracking-tight font-medium">
            Pricing & Inventory
          </span>
        </CardTitle>

        <CardDescription>
          Commercial parameters and stock availability.
        </CardDescription>
      </CardHeader>

      {/* Card Body */}
      <CardContent className="space-y-6">
        {/* Price Input */}
        <Field invalid={!!form.formState.errors.price}>
          <FieldLabel
            required
            className="text-sm font-semibold tracking-wide"
          >
            Price
          </FieldLabel>
          <Input
            placeholder="e.g. $8,600"
            {...form.register("price")}
            className="focus-visible:ring-liminal-secondary/10 focus-visible:border-liminal-secondary"
          />
          <FieldError errors={[form.formState.errors.price]} />
        </Field>

        {/* Stock Input */}
        <Field invalid={!!form.formState.errors.stock}>
          <FieldLabel
            required
            className="text-sm font-semibold tracking-wide"
          >
            Stock Quantity
          </FieldLabel>
          <Input
            type="number"
            min={0}
            placeholder="0"
            {...form.register("stock", { valueAsNumber: true })}
            className="focus-visible:ring-liminal-secondary/10 focus-visible:border-liminal-secondary"
          />
          <FieldError errors={[form.formState.errors.stock]} />
        </Field>
      </CardContent>
    </Card>
  );
};

export default FurniturePricingSection;
