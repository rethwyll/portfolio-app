import styled from "styled-components";

// components
import { NavLink, Outlet } from "react-router-dom";

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

const App = () => (
  <>
    <Header>
      <input type="range" id="switcher" name="switcher" min="0" max="11" />
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

export default App;
