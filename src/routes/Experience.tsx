import React, { ReactElement } from "react";

// components
import ExperienceList from "../components/ExperienceList";
import SkillsFilter from "../components/SkillsFilter";
import Typography from "@mui/material/Typography";

const Experience = (): ReactElement => (
  <section id="experience">
    <header>
      <Typography variant="h2">Experience</Typography>
    </header>
    <SkillsFilter />
    <ExperienceList />
  </section>
);

export default Experience;
