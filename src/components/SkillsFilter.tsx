import styled from "styled-components";

// constants
import { skills } from "../constants";

// stores
import { useSkillsStore } from "../stores/skillsStore";

// styled components
const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
const Button = styled.button<{ $active: boolean }>`
  background: ${props => (props.$active ? "red" : "#bada55")};
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
            $active={currentSkills.includes(s)}
            onClick={() => onClickSkill(s)}
          >
            {s}
          </Button>
        </li>
      ))}
    </Container>
  );
};

export default SkillsFilter;
