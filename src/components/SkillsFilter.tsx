import styled from "@emotion/styled";

// components
import Button from "@mui/material/Button";

// constants
import { skills } from "../constants";

// stores
import { useSkillsStore } from "../stores/skillsStore";

// styled components
const Container = styled.ul`
  display: inline-grid;
  grid-template-columns: repeat(3, 1fr);
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
            color={currentSkills.includes(s) ? "success" : "primary"}
            variant="contained"
          >
            {s}
          </Button>
        </li>
      ))}
    </Container>
  );
};

export default SkillsFilter;
