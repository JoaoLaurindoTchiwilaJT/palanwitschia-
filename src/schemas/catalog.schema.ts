import { z } from "zod";

export const courseSchema = z.object({
  title: z.string().min(1),
  hours: z.number().positive(),
  areaIndex: z.number().int().nonnegative(),
  categoryIndex: z.number().int().nonnegative(),
});

export const courseCatalogSchema = z.array(courseSchema);

export const courseFilterSchema = z.object({
  query: z.string().max(200).default(""),
  area: z.number().int().min(-1).default(-1),
  category: z.number().int().min(-1).default(-1),
  limit: z.number().int().positive().default(24),
});

export type Course = z.infer<typeof courseSchema>;
export type CourseFilter = z.infer<typeof courseFilterSchema>;
