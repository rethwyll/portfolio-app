import React from "react";
import { ExperienceItem } from "../types/experience";

type Props = {
  experienceItem: ExperienceItem;
};

const ExperienceItemDisplay = ({ experienceItem }: Props) => {
  return (
    <li>
      <header>
        <h4>
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
        </h4>
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
          <h5>Key Contributions:</h5>
          <ul>
            {experienceItem.contributions.map(c => (
              <li key={c} dangerouslySetInnerHTML={{ __html: c }} />
            ))}
          </ul>
        </>
      ) : null}
      <ul>
        {experienceItem.skills.map(s => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </li>
  );
};

export default ExperienceItemDisplay;
