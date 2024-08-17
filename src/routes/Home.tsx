import styled from "@emotion/styled";

// components
import Education from "../components/Education";
import Experience from "../components/Experience";
import Intro from "../components/Intro";
import Keywords from "../components/Keywords";
import Objective from "../components/Objective";
import Skills from "../components/Skills";
import SkillsFilter from "../components/SkillsFilter";

// styled components
const Container = styled.div``;

const Home = () => (
  <Container>
    <Intro />
    <Objective />
    <Skills />
    <Education />
    <Keywords />
    <SkillsFilter />
    <Experience />
  </Container>
);

export default Home;
