import { ReactElement, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { isNull, sample } from "lodash";

// components
import { NavLink, Outlet } from "react-router-dom";

// constants
import { themeKeys } from "../constants";

// stores
import { useThemeStore } from "../stores/themeStore";

// themes
import allThemes from "../themes/allThemes";

// styled components
const Header = styled.header`
  display: grid;
  gap: 2rem;
  grid-auto-columns: 1fr;
  grid-auto-rows: min-content;
  font-size: 2rem;
  padding: 5rem;
`;
const Title = styled.h1`
  font-size: 3rem;
`;
const Nav = styled.nav`
  align-items: center;
  display: flex;
  justify-content: center;
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
    console.log("NE", sample(themeKeys) ?? themeKeys[0]);
    updateTheme(sample(themeKeys) ?? themeKeys[0]);
  }, [updateTheme]);

  return isNull(currentTheme) ? null : (
    <ThemeProvider theme={allThemes[currentTheme]}>
      <Header>
        <Title>into the aprilverse</Title>
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
              <NavLink to="/two">two</NavLink>
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
      <aside></aside>
      <footer></footer>
    </ThemeProvider>
  );
};

export default App;
