import styled from "styled-components";

// styled components
const Container = styled.div`
  background: ${props => props.theme.colors.secondary};
`;
Container.defaultProps = {
  theme: {
    borderRadius: "4px",
    colors: {
      main: "purple",
      secondary: "yellow"
    }
  }
};

const Home = () => <Container>Home</Container>;

export default Home;
