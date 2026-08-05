import * as z from "zod";

// Zod Schema definition for Project Creation Form Validation
export const projectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string(),
  category: z.string().min(1, "Category is required"),
  projectType: z.string().min(1, "Project Type is required"),
  interiorStyle: z.string().min(1, "Interior Style is required"),
  isFeatured: z.boolean().optional(),
  status: z.enum(["Completed", "In Progress", "Concept"]),
  area: z.string().min(1, "Area is required"),
  location: z.string().min(1, "Location is required"),
  duration: z.string().min(1, "Duration is required"),
  completionYear: z.string().min(4, "Completion Year is required"),
  thumbnail: z.string().min(1, "Thumbnail is required"),
  thumbnailCaption: z.string().optional(),
  description: z
    .string()
    .min(10, "Description should be at least 10 characters"),
  narratives: z.object({
    projectContext: z.string().min(1, "Project context is required"),
    clientVision: z.string().min(1, "Client vision is required"),
    designObjectives: z.string().min(1, "Design objectives is required"),
    spatialChallenges: z.string().min(1, "Spatial challenges is required"),
    overallConcept: z.string().min(1, "Overall concept is required"),
    theRealization: z.string().min(1, "Realization details are required"),
  }),
  galleryImages: z
    .array(
      z.object({
        url: z.string().min(1, "At least one gallery image is required"),
        caption: z.string().optional(),
      }),
    )
    .min(1, "At least one gallery image is required"),
});

export type ProjectFormValues = z.infer<typeof projectSchema>;
