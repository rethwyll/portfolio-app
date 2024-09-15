import { ReactElement } from "react";

// hooks
import { useTranslation } from "react-i18next";

// types
import {
  State as ThemeStoreState,
  useThemeStore
} from "../../stores/themeStore";

export type Props = {
  themes: ThemeStoreState["allThemes"];
};
const ThemeSwitcher = ({ themes }: Props): ReactElement | null => {
  const { t } = useTranslation();
  const { theme: currentTheme, updateTheme } = useThemeStore();

  return themes.length >= 2 ? (
    <div id="theme-switcher" data-testid="theme-switcher">
      <p>{t("current-theme", { theme: currentTheme })}</p>
      <input
        type="range"
        id="switcher"
        name="switcher"
        min="0"
        max={themes.length - 1}
        onChange={e => {
          updateTheme(themes[parseInt(e.target.value, 10)]);
        }}
        value={themes.indexOf(currentTheme)}
        data-testid="theme-switcher-range"
      />
    </div>
  ) : null;
};

export default ThemeSwitcher;