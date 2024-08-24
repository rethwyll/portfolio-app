import { styled } from "@mui/material/styles";

// components
import Button from "@mui/material/Button";

// constants
import { skills } from "../constants";

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

const SkillsFilter = () => {
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
          <Button
            onClick={() => onClickSkill(s)}
            variant={currentSkills.includes(s) ? "contained" : "outlined"}
          >
            {s}
          </Button>
        </li>
      ))}
    </Container>
  );
};

export default SkillsFilter;
