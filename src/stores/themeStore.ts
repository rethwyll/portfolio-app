import { isNull } from "lodash";
import { create } from "zustand";

type State = {
  theme: string | null;
};

type Action = {
  updateTheme: (updatedTheme: State["theme"]) => void;
};

export const useThemeStore = create<State & Action>(set => ({
  theme: null,
  updateTheme: updatedTheme => {
    set(() => ({ theme: updatedTheme }));
    if (!isNull(updatedTheme)) {
      document.documentElement.dataset["theme"] = updatedTheme;
    }
  }
}));
