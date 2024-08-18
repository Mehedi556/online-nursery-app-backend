import { z } from "zod";

export const CategoryValidationSchema = z.object({
    title: z.string(),
    heading: z.string(),
    description: z.string(),
    imageUrl: z.string(),
});