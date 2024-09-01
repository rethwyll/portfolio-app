import { orderBy } from "lodash";
import { ExperienceItem } from "../types/experience";
import { DateTime } from "luxon";

export const getYearsOfExperience = (data: Array<ExperienceItem>): number => {
  const firstExperience = orderBy(data, ["start"], ["asc"]);
  return Math.floor(
    Math.abs(DateTime.fromISO(firstExperience[0].start).diffNow("years").years)
  );
};
