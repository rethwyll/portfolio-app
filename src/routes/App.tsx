import styled from "styled-components";

// components
import { NavLink, Outlet } from "react-router-dom";
import { useThemeStore } from "../stores/themeStore";
import { themes } from "../constants";

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
  const { theme, updateTheme } = useThemeStore();
  return (
    <>
      <Header>
        Current theme: {theme}
        <input
          type="range"
          id="switcher"
          name="switcher"
          min="0"
          max={themes.length}
          onChange={e => updateTheme(e.target.value)}
          value={parseInt(theme, 10)}
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
