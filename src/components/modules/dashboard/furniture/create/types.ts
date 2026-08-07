import * as z from "zod";

// Zod Schema definition for Furniture Creation Form Validation
export const furnitureSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string(),
  productCode: z.string().min(1, "Product code is required"),
  category: z.string().min(1, "Category is required"),
  status: z.string().min(1, "Status is required"),
  price: z.string().min(1, "Price is required"),
  stock: z.number().min(0, "Stock must be 0 or greater"),
  thumbnail: z.string().min(1, "Thumbnail is required"),
  tagline: z.string().min(1, "Tagline is required"),
  description: z
    .string()
    .min(10, "Description should be at least 10 characters"),
  details: z.object({
    overview: z
      .string()
      .min(10, "Overview should be at least 10 characters"),
    designStory: z.string().optional(),
    craftsmanship: z.string().optional(),
  }),
  specifications: z.object({
    materials: z.string().min(1, "Materials is required"),
    weight: z.string().min(1, "Weight is required"),
    dimensions: z.object({
      width: z.string().optional(),
      depth: z.string().optional(),
      height: z.string().optional(),
      unit: z.enum(["cm", "mm", "in"]),
    }),
    leadTime: z.string().min(1, "Lead time is required"),
    warranty: z.string().min(1, "Warranty is required"),
  }),
  galleryImages: z
    .array(
      z.object({
        url: z.string().min(1, "Image is required"),
        caption: z.string().optional(),
      }),
    )
    .min(1, "At least one gallery image is required"),
});

export type FurnitureFormValues = z.infer<typeof furnitureSchema>;
