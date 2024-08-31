import { styled } from "@mui/material/styles";

// components
import Button from "@mui/material/Button";

// constants
import { skills } from "../constants";

// hooks
import { useTranslation } from "react-i18next";

// stores
import { useSkillsStore } from "../stores/skillsStore";

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

  const onClickSkill = (skill: string) => {
    const updatedSkills = currentSkills.includes(skill)
      ? currentSkills.filter(s => s !== skill)
      : [...currentSkills, skill];
    updateSkills(updatedSkills);
  };

  return (
    <Container>
      {skills.map(s => (
        <li key={s}>
          <StyledButton
            onClick={() => onClickSkill(s)}
            variant={currentSkills.includes(s) ? "contained" : "outlined"}
          >
            {t(s, { ns: "skills" })}
          </StyledButton>
        </li>
      ))}
    </Container>
  );
};

export default SkillsFilter;
