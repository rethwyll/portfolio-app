import React from "react";
import styled from "styled-components";

// styled components
const Title = styled.h2`
  font-size: 10rem;
`;
const ElevatorPitch = styled.p`
  font-size: 5rem;
`;

const Intro = () => {
  return (
    <header>
      <Title>April Bingham</Title>
      <ElevatorPitch>
        Multi-faceted web developer with extensive production and project
        management experience in producing dynamic, user-focused experiences.
      </ElevatorPitch>
    </header>
  );
};

export default Intro;
