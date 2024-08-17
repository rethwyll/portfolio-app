import React from "react";
import styled from "@emotion/styled";

// components
import Typography from "@mui/material/Typography";

// types
import { ExperienceItem } from "../types/experience";

// styled components
const Skills = styled.ul`
  align-items: baseline;
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

type Props = {
  className?: string;
  experienceItem: ExperienceItem;
};

const ExperienceItemDisplay = ({ className, experienceItem }: Props) => {
  return (
    <li className={className}>
      <header>
        <Typography variant="h4">
          {experienceItem.url ? (
            <a
              href={experienceItem.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {experienceItem.name}
            </a>
          ) : (
            experienceItem.name
          )}
          , {experienceItem.location}
        </Typography>
        <p>
          {experienceItem.title},{" "}
          <time dateTime={experienceItem.start}>{experienceItem.start}</time>-
          {experienceItem.end ? (
            <time dateTime={experienceItem.end}>{experienceItem.end}</time>
          ) : (
            "present"
          )}
        </p>
      </header>
      <p dangerouslySetInnerHTML={{ __html: experienceItem.summary }} />
      {experienceItem.contributions.length ? (
        <>
          <Typography variant="h5">Key Contributions</Typography>
          <ul>
            {experienceItem.contributions.map(c => (
              <li key={c} dangerouslySetInnerHTML={{ __html: c }} />
            ))}
          </ul>
        </>
      ) : null}
      <Skills>
        {experienceItem.skills.map(s => (
          <li key={s}>{s}</li>
        ))}
      </Skills>
    </li>
  );
};

export default ExperienceItemDisplay;
