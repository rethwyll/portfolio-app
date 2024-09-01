import { z } from "zod";
import { sExperienceItem } from "../schema/experience.s";

export type ExperienceItem = z.infer<typeof sExperienceItem>;
