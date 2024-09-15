import { z } from "zod";

export const sExperienceItem = z.object({
  name: z.string(),
  id: z.string(),
  location: z.string(),
  mapsLink: z.string().nullable(),
  url: z.string().nullable(),
  title: z.string(),
  start: z.string(),
  end: z.string().nullable(),
  summary: z.string(),
  contributions: z.array(z.string()),
  skills: z.array(z.string())
});