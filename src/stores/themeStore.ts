import { isNil, sample } from "lodash";
import { create } from "zustand";
import allThemes from "../themes/allThemes";

type State = {
  theme: string | null;
};

type Action = {
  initializeTheme: () => void;
  updateTheme: (updatedTheme: State["theme"]) => void;
};

export const useThemeStore = create<State & Action>(set => ({
  theme: sample(Object.keys(allThemes)) as string,
  initializeTheme: () => {
    const initialTheme = sample(Object.keys(allThemes));
    if (!isNil(initialTheme)) {
      set(() => ({ theme: initialTheme }));
      document.documentElement.dataset["theme"] = initialTheme;
    }
  },
  updateTheme: updatedTheme => {
    if (!isNil(updatedTheme)) {
      set(() => ({ theme: updatedTheme }));
      document.documentElement.dataset["theme"] = updatedTheme;
    }
  }
}));
