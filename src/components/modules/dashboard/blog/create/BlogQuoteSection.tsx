"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Quote } from "lucide-react";
import React from "react";
import { UseFormReturn } from "react-hook-form";

import { BlogFormValues } from "./types";

interface BlogQuoteSectionProps {
  form: UseFormReturn<BlogFormValues>;
}

// BlogQuoteSection Component
const BlogQuoteSection: React.FC<BlogQuoteSectionProps> = ({ form }) => {
  return (
    <Card>
      <CardHeader className="gap-0 pb-1.5">
        <CardTitle className="flex items-center gap-2">
          <Quote className="w-4.5 h-4.5 text-liminal-secondary" />
          <span className="text-lg tracking-tight font-medium">
            Editorial Highlight
          </span>
        </CardTitle>

        <CardDescription>
          An optional pull quote to emphasize a key insight or design philosophy
          from the article.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Attribution */}
        <Field>
          <FieldLabel className="text-sm font-semibold tracking-wide">
            Attribution
          </FieldLabel>
          <Input
            placeholder="e.g. Liminal Design Philosophy"
            {...form.register("quote.attribution")}
            className="focus-visible:ring-liminal-secondary/10 focus-visible:border-liminal-secondary"
          />
        </Field>
        
        {/* Quote Text */}
        <Field>
          <FieldLabel className="text-sm font-semibold tracking-wide">
            Quote Text
          </FieldLabel>
          <Textarea
            placeholder="e.g. Light is not what you see; it is what allows you to feel..."
            {...form.register("quote.text")}
            className="min-h-30 focus-visible:ring-liminal-secondary/10 focus-visible:border-liminal-secondary resize-y italic"
          />
        </Field>
      </CardContent>
    </Card>
  );
};

export default BlogQuoteSection;
