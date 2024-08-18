import { ReactElement, useEffect } from "react";
import styled from "@emotion/styled";
import { ThemeProvider } from "@mui/material/styles";
import { isNull, sample } from "lodash";

// components
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { NavLink, Outlet } from "react-router-dom";

// constants
import { themeKeys } from "../constants";

// stores
import { useThemeStore } from "../stores/themeStore";

// themes
import allThemes from "../themes/allThemes";
import { GlobalStyles } from "@mui/material";

// styled components
const Header = styled.header`
  display: grid;
  gap: 2rem;
  grid-auto-columns: 1fr;
  grid-auto-rows: min-content;
  font-size: 2rem;
  padding: 5rem;
`;
const Nav = styled.nav`
  align-items: center;
  display: flex;
  justify-content: center;

  & .active {
    color: red;
  }
`;
const NavList = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
`;
const App = (): ReactElement | null => {
  const currentTheme = useThemeStore(state => state.theme);
  const updateTheme = useThemeStore(state => state.updateTheme);

  // initialize theme
  useEffect(() => {
    updateTheme(sample(themeKeys) ?? themeKeys[0]);
  }, [updateTheme]);

  return isNull(currentTheme) ? null : (
    <ThemeProvider theme={allThemes[currentTheme]}>
      <GlobalStyles
        styles={{
          body: {
            backgroundColor: allThemes[currentTheme].palette.background.default
          }
        }}
      />
      <CssBaseline />
      <Header>
        <Typography variant="h1" color="primary">
          into the aprilverse
        </Typography>
        <p>Current theme: {currentTheme}</p>
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
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/experience">Experience</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </NavList>
        </Nav>
      </Header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </ThemeProvider>
  );
};

export default App;
