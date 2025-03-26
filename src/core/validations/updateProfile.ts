import { z } from "zod";

export const UpdateProfileSchema = z.object({
  firstname: z.string().max(50, "The Maximum Length is 50").optional(),
  lastname: z.string().max(50, "The Maximum Length is 50").optional(),
  bio: z
    .string()
    .min(30, "The Minimum Length is 30")
    .max(150, "The Maximum Length is 150")
    .optional(),
  address: z
    .string()
    .min(15, "The Minimum Length is 15")
    .max(100, "The Maximum Length is 100")
    .optional(),
  city: z.string().max(30, "The Maximum Length is 30").optional(),
  state: z.string().max(30, "The Maximum Length is 30").optional(),
  country: z.string().max(30, "The Maximum Length is 30").optional(),
  zipCode: z.string().max(20, "The Maximum Length is 20").optional(),
});

export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;
