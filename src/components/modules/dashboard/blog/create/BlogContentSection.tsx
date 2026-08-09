"use client";

import LiminalButton from "@/components/shared/LiminalButton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  AlignLeft,
  GripVertical,
  Plus,
  PlusCircleIcon,
  X,
} from "lucide-react";
import React from "react";
import { UseFieldArrayReturn, UseFormReturn } from "react-hook-form";
import { BlogFormValues } from "./types";

interface BlogContentSectionProps {
  form: UseFormReturn<BlogFormValues>;
  contentFields: UseFieldArrayReturn<
    BlogFormValues,
    "content",
    "id"
  >["fields"];
  appendContentBlock: UseFieldArrayReturn<
    BlogFormValues,
    "content",
    "id"
  >["append"];
  removeContentBlock: UseFieldArrayReturn<
    BlogFormValues,
    "content",
    "id"
  >["remove"];
}

// BlogContentSection Component
const BlogContentSection: React.FC<BlogContentSectionProps> = ({
  form,
  contentFields,
  appendContentBlock,
  removeContentBlock,
}) => {
  const contentError = form.formState.errors.content as
    | { root?: { message?: string }; message?: string }
    | undefined;

  const rootError =
    contentError?.root ||
    (contentError?.message ? { message: contentError.message } : undefined);

  return (
    <Card>
      <CardHeader className="gap-0 pb-1.5">
        <CardTitle className="flex items-center gap-2">
          <AlignLeft className="w-4.5 h-4.5 text-liminal-secondary" />
          <span className="text-lg tracking-tight font-medium">
            Article Content
          </span>
        </CardTitle>

        <CardDescription>
          Build the article body with structured content blocks.
        </CardDescription>
      </CardHeader>

      {/* Content Blocks */}
      <CardContent className="space-y-6">
        {contentFields.length === 0 ? (
          /* Empty State */
          <button
            type="button"
            onClick={() => appendContentBlock({ heading: "", paragraph: "" })}
            className="flex flex-col items-center justify-center w-full py-12 border-2 border-dashed rounded-xl cursor-pointer bg-card hover:bg-accent/40 border-border/80 hover:border-liminal-secondary/50 transition-all text-center px-4 group"
          >
            <div className="p-3 rounded-full bg-muted/60 text-muted-foreground group-hover:text-liminal-secondary group-hover:bg-liminal-secondary/10 transition-colors mb-3">
              <AlignLeft className="w-8 h-8" />
            </div>

            <p className="text-sm font-medium text-foreground mb-1">
              No content blocks yet
            </p>
            <p className="text-xs text-muted-foreground mb-4">
              Add structured content blocks to build the article body
            </p>

            <span className="px-4 py-2 bg-liminal-secondary text-background rounded-lg text-sm font-medium shadow-sm flex items-center gap-2">
              <Plus className="w-4 h-4" /> Add First Content Block
            </span>
          </button>
        ) : (
          <>
            {/* Render Content Blocks */}
            <div className="space-y-4">
              {contentFields.map((field, index) => (
                <div
                  key={field.id}
                  className="relative group p-5 rounded-xl border bg-card shadow-sm hover:shadow-md transition-shadow space-y-4"
                >
                  {/* Block Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <GripVertical className="w-4 h-4 text-muted-foreground/40" />
                      <span className="text-xs font-semibold tracking-wider text-muted-foreground/70 uppercase">
                        Block {index + 1}
                      </span>
                    </div>

                    {/* Delete button */}
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => removeContentBlock(index)}
                      className="size-7 text-muted-foreground/80 hover:text-background hover:bg-destructive border border-border/50 hover:border-destructive/10 transition-colors rounded-full"
                      title="Remove content block"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Section Heading */}
                  <Field
                    invalid={!!form.formState.errors.content?.[index]?.heading}
                  >
                    <FieldLabel
                      required
                      className="text-sm font-semibold tracking-wide"
                    >
                      Section Heading
                    </FieldLabel>
                    <Input
                      placeholder="e.g. The Essence of Architectural Light"
                      {...form.register(`content.${index}.heading`)}
                      className="focus-visible:ring-liminal-secondary/10 focus-visible:border-liminal-secondary"
                    />
                    <FieldError
                      errors={[form.formState.errors.content?.[index]?.heading]}
                    />
                  </Field>

                  {/* Section Paragraph */}
                  <Field
                    invalid={
                      !!form.formState.errors.content?.[index]?.paragraph
                    }
                  >
                    <FieldLabel
                      required
                      className="text-sm font-semibold tracking-wide"
                    >
                      Paragraph
                    </FieldLabel>
                    <Textarea
                      placeholder="Write the content for this section..."
                      {...form.register(`content.${index}.paragraph`)}
                      className="min-h-32 focus-visible:ring-liminal-secondary/10 focus-visible:border-liminal-secondary resize-y"
                    />
                    <FieldError
                      errors={[
                        form.formState.errors.content?.[index]?.paragraph,
                      ]}
                    />
                  </Field>
                </div>
              ))}
            </div>

            {/* Add New Content Block Button */}
            <LiminalButton
              type="button"
              variant="outline"
              icon={PlusCircleIcon}
              iconPosition="left"
              animateIcon={false}
              className="rounded-lg w-full border-dashed"
              onClick={() => appendContentBlock({ heading: "", paragraph: "" })}
            >
              Add Content Block
            </LiminalButton>
          </>
        )}

        <FieldError errors={[rootError]} />
      </CardContent>
    </Card>
  );
};

export default BlogContentSection;
