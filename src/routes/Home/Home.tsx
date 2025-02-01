// components
import ExperienceList from "../../components/ExperienceList/ExperienceList";
import Intro from "../../components/Intro/Intro";
import SkillsSummary from "../../components/SkillsSummary/SkillsSummary";

// data
import data from "../../data/experience.json";

// hooks
import { useThemeStore } from "../../stores/themeStore";

const Home = () => {
  const { theme: currentTheme } = useThemeStore();

  return (
    <section id="home" data-testid="home">
      <Intro />
      <div>
        <ExperienceList num={currentTheme === "print" ? data.length : 3} />
      </div>
      <aside>
        <SkillsSummary />
      </aside>
    </section>
  );
};

export default Home;
