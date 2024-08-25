import { ReactElement } from "react";
import { styled } from "@mui/material/styles";
import { isEmpty, intersection } from "lodash";

// components
import { NavLink } from "react-router-dom";
import ExperienceListItem from "./ExperienceListItem";

// data
import data from "../data/experience.json";

// stores
import { useSkillsStore } from "../stores/skillsStore";

// styled components
const ExperienceItems = styled("ul")`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const Item = styled(ExperienceListItem)`
  & + & {
    margin-top: 2rem;
  }
`;

// types
type Props = {
  num?: number;
};

const ExperienceList = ({ num }: Props): ReactElement | null => {
  const currentSkills = useSkillsStore(state => (num ? [] : state.skills));
  return (
    <>
      <ExperienceItems>
        {data
          .slice(0, num)
          .map(d =>
            isEmpty(currentSkills) ||
            intersection(d.skills, currentSkills).length ===
              currentSkills.length ? (
              <Item key={d.name} experienceItem={d} />
            ) : null
          )}
      </ExperienceItems>
      {num ? <NavLink to="/experience">All experience</NavLink> : null}
    </>
  );
};

export default ExperienceList;
