import { ReactElement } from "react";
import { styled } from "@mui/material/styles";
import { isEmpty, intersection, compact } from "lodash";

// components
import { NavLink } from "react-router-dom";
import ExperienceListItem from "./ExperienceListItem";

// data
import data from "../data/experience.json";

// stores
import { useSkillsStore } from "../stores/skillsStore";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";

// styled components
const ExperienceItems = styled("ul")`
  list-style-type: none;
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
  const { t } = useTranslation();
  const currentSkills = useSkillsStore(state => (num ? [] : state.skills));
  const listDisplay = compact(
    data
      .slice(0, num)
      .map(d =>
        isEmpty(currentSkills) ||
        intersection(d.skills, currentSkills).length ===
          currentSkills.length ? (
          <Item key={d.name} experienceItem={d} />
        ) : null
      )
  );
  return (
    <div id="experience-list">
      {listDisplay.length ? (
        <ExperienceItems>{listDisplay}</ExperienceItems>
      ) : (
        <Typography variant="body1" component="p">
          {t("no-matches", { ns: "experience" })}
        </Typography>
      )}
      {num ? (
        <NavLink className="animateable" to="/experience">
          {t("all-experience", { ns: "experience" })}
        </NavLink>
      ) : null}
    </div>
  );
};

export default ExperienceList;
