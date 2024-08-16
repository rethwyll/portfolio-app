import styled from "styled-components";

// styled components
const Container = styled.div`
  font-family: ${props => props.theme.fontStack};
  font-size: 50rem;
`;

const Home = () => <Container>Home</Container>;

export default Home;
