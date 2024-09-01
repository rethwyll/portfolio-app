import { isNil, sample } from "lodash";
import { create } from "zustand";
import allThemes from "../themes/allThemes";

export type State = {
  allThemes: Array<string>;
  theme: string;
};

type Action = {
  initializeTheme: () => void;
  updateTheme: (updatedTheme: State["theme"]) => void;
};

export const useThemeStore = create<State & Action>((set, get) => ({
  allThemes: Object.keys(allThemes),
  theme: sample(Object.keys(allThemes)) as string,
  initializeTheme: () => {
    document.documentElement.dataset["theme"] = get().theme;
  },
  updateTheme: updatedTheme => {
    if (!isNil(updatedTheme)) {
      set(() => ({ theme: updatedTheme }));
      document.documentElement.dataset["theme"] = updatedTheme;
    }
  }
}));
