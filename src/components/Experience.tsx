import React, { ReactElement } from "react";
import styled from "@emotion/styled";
import data from "../data/experience.json";

// components
import Typography from "@mui/material/Typography";
import ExperienceItemDisplay from "./ExperienceItemDisplay";

// stores
import { useSkillsStore } from "../stores/skillsStore";
import { intersection, isEmpty } from "lodash";

// styled components
const ExperienceItems = styled.ul`
  list-style: none;
`;
const Item = styled(ExperienceItemDisplay)`
  & + & {
    margin-top: 2rem;
  }
`;

const Experience = (): ReactElement | null => {
  const currentSkills = useSkillsStore(state => state.skills);

  return (
    <section>
      <header>
        <Typography variant="h3">Professional Experience</Typography>
      </header>
      <ExperienceItems>
        {data.map(d =>
          isEmpty(currentSkills) ||
          !!intersection(d.skills, currentSkills).length ? (
            <Item key={d.name} experienceItem={d} />
          ) : null
        )}
      </ExperienceItems>
    </section>
  );
};

export default Experience;
