import { DateTime } from "luxon";
import { create } from "zustand";
import data from "../data/experience.json";
import { orderBy } from "lodash";

// types
import { ExperienceItem } from "../types/experience";

type State = {
  skills: Array<string>;
  yearsOfExperience: number;
};

type Action = {
  updateSkills: (updatedSkills: State["skills"]) => void;
};

export const useSkillsStore = create<State & Action>(set => {
  const firstExperience = orderBy(
    data as Array<ExperienceItem>,
    ["start"],
    ["asc"]
  );
  return {
    skills: [],
    yearsOfExperience: Math.floor(
      Math.abs(
        DateTime.fromISO(firstExperience[0].start).diffNow("years").years
      )
    ),
    updateSkills: updatedSkills => {
      set(() => ({ skills: updatedSkills }));
    }
  };
});
