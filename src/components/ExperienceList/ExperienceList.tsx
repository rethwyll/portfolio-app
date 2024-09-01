import { ReactElement } from "react";
import { isEmpty, intersection, compact } from "lodash";

// components
import { NavLink } from "react-router-dom";
import ExperienceListItem from "../ExperienceListItem/ExperienceListItem";
import Typography from "@mui/material/Typography";

// data
import data from "../../data/experience.json";

// stores
import { useSkillsStore } from "../../stores/skillsStore";
import { useTranslation } from "react-i18next";

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
          <ExperienceListItem key={d.name} experienceItem={d} />
        ) : null
      )
  );
  return (
    <div id="experience-list" data-testid="experience-list">
      {listDisplay.length ? (
        <ul>{listDisplay}</ul>
      ) : (
        <Typography variant="body2" component="p" data-testid="no-matches">
          {t("no-matches", { ns: "experience" })}
        </Typography>
      )}
      {num ? (
        <Typography
          id="all-experience"
          variant="body2"
          component="div"
          data-testid="all-experiences"
        >
          <NavLink className="animateable" to="/experience">
            {t("all-experience", { ns: "experience" })}
          </NavLink>
        </Typography>
      ) : null}
    </div>
  );
};

export default ExperienceList;
