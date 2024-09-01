import { z } from "zod";
import { sEducationItem } from "../schema/education.s";

export type EducationItem = z.infer<typeof sEducationItem>;
