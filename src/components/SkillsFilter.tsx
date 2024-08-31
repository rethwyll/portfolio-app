import { styled } from "@mui/material/styles";

// components
import Button from "@mui/material/Button";

// constants
import { skills } from "../constants";

// hooks
import { useTranslation } from "react-i18next";

// stores
import { useSkillsStore } from "../stores/skillsStore";
import { sortBy } from "lodash";

// styled components
const Container = styled("ul")`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;
const StyledButton = styled(Button)`
  text-transform: none;
`;

const SkillsFilter = () => {
  const { t } = useTranslation();
  const currentSkills = useSkillsStore(state => state.skills);
  const updateSkills = useSkillsStore(state => state.updateSkills);
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
    <Container id="skills-filter">
      {sortedTranslatedSkills.map(([s, translated]) => (
        <li key={s}>
          <StyledButton
            onClick={() => onClickSkill(s)}
            variant={currentSkills.includes(s) ? "contained" : "outlined"}
          >
            {translated}
          </StyledButton>
        </li>
      ))}
    </Container>
  );
};

export default SkillsFilter;
