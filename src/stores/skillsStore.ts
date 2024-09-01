import { create } from "zustand";
import data from "../data/experience.json";

// types
import { getYearsOfExperience } from "../utils/skills";

type State = {
  skills: Array<string>;
  yearsOfExperience: number;
};

type Action = {
  updateSkills: (updatedSkills: State["skills"]) => void;
};

export const useSkillsStore = create<State & Action>(set => {
  return {
    skills: [],
    yearsOfExperience: getYearsOfExperience(data),
    updateSkills: updatedSkills => {
      set(() => ({ skills: updatedSkills }));
    }
  };
});
