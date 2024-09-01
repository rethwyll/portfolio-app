import { ReactElement } from "react";
import { styled } from "@mui/material/styles";

// components
import { NavLink } from "react-router-dom";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import Typography from "@mui/material/Typography";

// hooks
import { useTranslation } from "react-i18next";

// stores
import { useThemeStore } from "../../stores/themeStore";

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
  const { allThemes } = useThemeStore();

  return (
    <Header id="app-header" data-testid="app-header">
      <Typography variant="h1">{t("main-title")}</Typography>
      <ThemeSwitcher themes={allThemes} />
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
