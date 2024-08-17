import React, { ReactElement } from "react";
import data from "../data/experience.json";

// components
import ExperienceItemDisplay from "./ExperienceItemDisplay";

// stores
import { useSkillsStore } from "../stores/skillsStore";
import { intersection, isEmpty } from "lodash";

const Experience = (): ReactElement | null => {
  const currentSkills = useSkillsStore(state => state.skills);

  return (
    <section>
      <header>
        <h3>Professional Experience</h3>
      </header>
      {data.map(d =>
        isEmpty(currentSkills) ||
        !!intersection(d.skills, currentSkills).length ? (
          <ExperienceItemDisplay key={d.name} experienceItem={d} />
        ) : null
      )}
    </section>
  );
};

export default Experience;
