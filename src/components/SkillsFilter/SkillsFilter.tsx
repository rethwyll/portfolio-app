import { styled } from "@mui/material/styles";
import { sortBy } from "lodash";

// components
import Button from "@mui/material/Button";

// constants
import { skills } from "../../constants";

// hooks
import { useTranslation } from "react-i18next";

// stores
import { useSkillsStore } from "../../stores/skillsStore";

// styled components
const StyledButton = styled(Button)`
  text-transform: none;
`;

const SkillsFilter = () => {
  const { t } = useTranslation();
  const { skills: currentSkills, updateSkills } = useSkillsStore();
  const sortedTranslatedSkills = sortBy(
    skills.map(s => [s, t(s, { ns: "skills" })]),
    e => e[0]
  );

  const onClickSkill = (skill: string) => {
    const updatedSkills = currentSkills.includes(skill)
      ? currentSkills.filter(s => s !== skill)
      : [...currentSkills, skill];
    updateSkills(updatedSkills);
  };

  return (
    <ul id="skills-filter" data-testid="skills-filter">
      {sortedTranslatedSkills.map(([s, translated]) => {
        const variant = currentSkills.includes(s) ? "contained" : "outlined";
        return (
          <li key={s} data-testid={s}>
            <StyledButton
              onClick={() => onClickSkill(s)}
              variant={variant}
              data-testid={`${s}-${variant}`}
            >
              {translated}
            </StyledButton>
          </li>
        );
      })}
    </ul>
  );
};

export default SkillsFilter;
