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
  padding: 5rem;
`;
const Nav = styled("nav")`
  align-items: center;
  display: flex;
  justify-content: center;

  & .active {
    color: ${props => props.theme.palette.info.main};
  }
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
    <Header>
      <Typography variant="h1" color="primary">
        {t("main-title")}
      </Typography>
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
      <Nav>
        <NavList>
          {["home", "experience", "contact"].map(r => (
            <li key={r}>
              <NavLink to={`/${r === "home" ? "" : r}`}>
                {t(r, { ns: "routes" })}
              </NavLink>
            </li>
          ))}
        </NavList>
      </Nav>
    </Header>
  );
};

export default AppHeader;
