// components
import Education from "../components/Education";
import ExperienceList from "../components/ExperienceList";
import Intro from "../components/Intro";
import Keywords from "../components/Keywords";
import Objective from "../components/Objective";
import Skills from "../components/Skills";

const Home = () => (
  <section id="home">
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
