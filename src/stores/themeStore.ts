import { sample } from "lodash";
import { create } from "zustand";
import { themeKeys } from "../constants";

type State = {
  theme: string;
};

type Action = {
  updateTheme: (updatedTheme: State["theme"]) => void;
};

export const useThemeStore = create<State & Action>(set => ({
  theme: sample(themeKeys) ?? themeKeys[0],
  updateTheme: theme => {
    set(() => ({ theme }));
    document.documentElement.dataset["theme"] = theme;
  }
}));
