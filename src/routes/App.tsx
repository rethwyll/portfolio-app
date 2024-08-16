import styled, { ThemeProvider } from "styled-components";

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
  grid-auto-columns: 1fr;
  padding: 5rem;
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

const App = () => {
  const currentTheme = useThemeStore(state => state.theme);
  const updateTheme = useThemeStore(state => state.updateTheme);
  return (
    <>
      <Header>
        Current theme: {currentTheme}
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
              <NavLink to="/">home</NavLink>
            </li>
            <li>
              <NavLink to="/one">one</NavLink>
            </li>
            <li>
              <NavLink to="/two">two</NavLink>
            </li>
          </NavList>
        </Nav>
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;
