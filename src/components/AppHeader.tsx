import { ReactElement } from "react";
import { isNull } from "lodash";
import { styled } from "@mui/material/styles";

// components
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

// constants
import { themeKeys } from "../constants";

// hooks
import { useTranslation } from "react-i18next";

// stores
import { useThemeStore } from "../stores/themeStore";

// styled components
const Header = styled("header")`
  display: grid;
  gap: 2rem;
  grid-auto-columns: 1fr;
  grid-auto-rows: min-content;
  font-size: 2rem;
`;
const NavList = styled("ul")`
  display: flex;
  gap: 1rem;
  list-style: none;
`;

const AppHeader = (): ReactElement | null => {
  const { t } = useTranslation();
  const currentTheme = useThemeStore(state => state.theme);
  const updateTheme = useThemeStore(state => state.updateTheme);

  return isNull(currentTheme) ? null : (
    <Header id="app-header">
      <Typography variant="h1">{t("main-title")}</Typography>
      {themeKeys.length >= 2 ? (
        <>
          <p>{t("current-theme", { theme: currentTheme })}</p>
          <input
            type="range"
            id="switcher"
            name="switcher"
            min="0"
            max={themeKeys.length - 1}
            onChange={e => {
              updateTheme(themeKeys[parseInt(e.target.value, 10)]);
            }}
            value={themeKeys.indexOf(currentTheme)}
          />
        </>
      ) : null}
      <nav id="main-nav">
        <NavList>
          <Typography variant="body1" component="li">
            <NavLink className="animateable" to="/">
              {t("home", { ns: "routes" })}
            </NavLink>
          </Typography>
          <Typography variant="body1" component="li">
            <NavLink className="animateable" to="/experience">
              {t("experience", { ns: "routes" })}
            </NavLink>
          </Typography>
          <Typography variant="body1" component="li">
            <NavLink className="animateable" to="/contact">
              {t("contact", { ns: "routes" })}
            </NavLink>
          </Typography>
        </NavList>
      </nav>
    </Header>
  );
};

export default AppHeader;
