import * as z from "zod";

// Zod Schema definition for Blog Article Creation Form Validation
export const blogSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string(),
  category: z.string().min(1, "Category is required"),
  description: z
    .string()
    .min(10, "Excerpt should be at least 10 characters"),
  content: z
    .array(
      z.object({
        heading: z.string().min(1, "Heading is required"),
        paragraph: z
          .string()
          .min(10, "Paragraph should be at least 10 characters"),
      }),
    )
    .min(1, "At least one content block is required"),
  thumbnail: z.string().min(1, "Cover image is required"),
  thumbnailCaption: z.string().optional(),
  isFeatured: z.boolean().optional(),
  quote: z.object({
    text: z.string().optional(),
    attribution: z.string().optional(),
  }),
  author: z.object({
    name: z.string().min(1, "Author name is required"),
    email: z.string().email("Valid email is required"),
    role: z.string().min(1, "Author role is required"),
  }),
  readTime: z.string().min(1, "Read time is required"),
  createdAt: z.string().optional(),
  status: z.string().min(1, "Status is required"),
  tags: z.string().optional(),
});

export type BlogFormValues = z.infer<typeof blogSchema>;
