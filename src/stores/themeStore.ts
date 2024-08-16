import { sample } from "lodash";
import { create } from "zustand";
import { themes } from "../constants";

type State = {
  theme: string;
};

type Action = {
  updateTheme: (updatedTheme: State["theme"]) => void;
};

export const useThemeStore = create<State & Action>(set => ({
  theme: sample(themes) ?? themes[0],
  updateTheme: theme => set(() => ({ theme }))
}));
