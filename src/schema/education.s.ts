import { z } from "zod";

export const sEducationItem = z.object({
  college: z.string(),
  "college-location": z.string(),
  "college-url": z.string().nullable(),
  degree: z.string(),
  "degree-honor": z.string().nullable(),
  "graduation-date": z.string(),
  id: z.string(),
  major: z.string(),
  minor: z.string().nullable()
});
