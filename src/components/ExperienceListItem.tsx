import { DateTime } from "luxon";

// components
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

// types
import { ExperienceItem } from "../types/experience";

// styled components

type Props = {
  className?: string;
  experienceItem: ExperienceItem;
};

const ExperienceListItem = ({ className, experienceItem }: Props) => {
  return (
    <li className={className}>
      <header>
        <Typography variant="h3">
          {experienceItem.url ? (
            <Link
              color="warning.main"
              href={experienceItem.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {experienceItem.name}
            </Link>
          ) : (
            experienceItem.name
          )}
          / {experienceItem.location}
        </Typography>
        <p>
          {experienceItem.title},{" "}
          <time dateTime={experienceItem.start}>
            {DateTime.fromISO(experienceItem.start).toLocaleString({
              month: "long",
              year: "numeric"
            })}
          </time>
          -
          {experienceItem.end ? (
            <time dateTime={experienceItem.end}>
              {" "}
              {DateTime.fromISO(experienceItem.end).toLocaleString({
                month: "long",
                year: "numeric"
              })}
            </time>
          ) : (
            "present"
          )}
        </p>
      </header>
      <p dangerouslySetInnerHTML={{ __html: experienceItem.summary }} />
      {experienceItem.contributions.length ? (
        <>
          <Typography variant="h4">Key Contributions</Typography>
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

export default ExperienceListItem;
