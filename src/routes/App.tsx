import styled from "styled-components";
import "../reset.css";

// components
import { NavLink, Outlet } from "react-router-dom";

// styled components
const Container = styled.div``;

const App = () => (
  <Container>
    <header>
      <NavLink to="/">home</NavLink>
      <NavLink to="/one">one</NavLink>
      <NavLink to="/two">two</NavLink>
    </header>
    <main>
      <Outlet />
    </main>
  </Container>
);

export default App;
