import styled from "styled-components";
import Intro from "../components/Intro";
import Objective from "../components/Objective";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Keywords from "../components/Keywords";
import Experience from "../components/Experience";
import SkillsFilter from "../components/SkillsFilter";

// styled components
const Container = styled.div``;

const Home = () => (
  <Container>
    <SkillsFilter />
    <Intro />
    <Objective />
    <Skills />
    <Education />
    <Keywords />
    <Experience />
  </Container>
);

export default Home;
