import { create } from "zustand";

type State = {
  skills: Array<string>;
};

type Action = {
  updateSkills: (updatedSkills: State["skills"]) => void;
};

export const useSkillsStore = create<State & Action>(set => ({
  skills: [],
  updateSkills: updatedSkills => {
    set(() => ({ skills: updatedSkills }));
  }
}));
