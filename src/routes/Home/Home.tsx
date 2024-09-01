// components
import Education from "../../components/Education/Education";
import ExperienceList from "../../components/ExperienceList/ExperienceList";
import Intro from "../../components/Intro/Intro";
import Keywords from "../../components/Keywords/Keywords";
import Objective from "../../components/Objective/Objective";
import Skills from "../../components/Skills/Skills";

const Home = () => (
  <section id="home" data-testid="home">
    <Intro />
    <div>
      <ExperienceList num={3} />
    </div>
    <aside>
      <Objective />
      <Skills />
      <Education />
      <Keywords />
    </aside>
  </section>
);

export default Home;
