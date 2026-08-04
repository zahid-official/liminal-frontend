"use client";

import React from "react";
import { UseFormReturn } from "react-hook-form";
import { FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";

import { ProjectFormValues } from "./types";

interface ProjectNarrativesSectionProps {
  form: UseFormReturn<ProjectFormValues>;
}

/** Configuration array for generating narrative textarea fields dynamically. */
const narrativeFields = [
  { name: "projectContext" as const, label: "Project Context", placeholder: "Describe the physical and cultural context of the site..." },
  { name: "clientVision" as const, label: "Client Vision", placeholder: "What was the client looking for?" },
  { name: "designObjectives" as const, label: "Design Objectives", placeholder: "What were the primary goals of the design?" },
  { name: "spatialChallenges" as const, label: "Spatial Challenges", placeholder: "What obstacles were faced during design or construction?" },
  { name: "overallConcept" as const, label: "Overall Concept", placeholder: "Summarize the core architectural or interior concept." },
  { name: "theRealization" as const, label: "The Realization", placeholder: "How does the final space feel and function?" },
];

/**
 * ProjectNarrativesSection Component
 * 
 * Handles the collection of narrative text blocks detailing the project journey,
 * client requirements, spatial challenges, and execution context.
 */
export const ProjectNarrativesSection: React.FC<ProjectNarrativesSectionProps> = ({ form }) => {
  return (
    <Card>
      <CardHeader className="gap-0 pb-1.5">
        <CardTitle className="flex items-center gap-2">
          <FileText className="w-4.5 h-4.5 text-liminal-secondary" />
          <span className="text-lg tracking-tight font-medium">
            Project Narratives
          </span>
        </CardTitle>

        <CardDescription>
          Detailed background and conceptual journey for the project case study.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {narrativeFields.map((field) => (
          <Field
            key={field.name}
            invalid={!!form.formState.errors.narratives?.[field.name]}
          >
            <FieldLabel required className="text-sm font-semibold tracking-wide">
              {field.label}
            </FieldLabel>
            <Textarea
              placeholder={field.placeholder}
              {...form.register(`narratives.${field.name}`)}
              className="min-h-25 focus-visible:ring-liminal-secondary/10 focus-visible:border-liminal-secondary"
            />
            <FieldError
              errors={[form.formState.errors.narratives?.[field.name]]}
            />
          </Field>
        ))}
      </CardContent>
    </Card>
  );
};
