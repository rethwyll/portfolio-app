import React from "react";
import data from "../data/experience.json";
import ExperienceItemDisplay from "./ExperienceItemDisplay";

const Experience = () => {
  return (
    <section>
      <header>
        <h3>Professional Experience</h3>
      </header>
      {data.map(d => (
        <ExperienceItemDisplay key={d.name} experienceItem={d} />
      ))}
    </section>
  );
};

export default Experience;
