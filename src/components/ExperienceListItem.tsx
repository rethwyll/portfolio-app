import { DateTime } from "luxon";
import parse from "html-react-parser";

// components
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

// hooks
import { useTranslation } from "react-i18next";

// types
import { ExperienceItem } from "../types/experience";

type Props = {
  className?: string;
  experienceItem: ExperienceItem;
};

const ExperienceListItem = ({ className, experienceItem }: Props) => {
  const { t } = useTranslation();
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
        <Typography variant="h4">Title and Duration</Typography>
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
            t("present", { ns: "experience" })
          )}
        </p>
      </header>
      <p>{parse(experienceItem.summary)}</p>
      {experienceItem.contributions.length ? (
        <>
          <Typography variant="h4">Key Contributions</Typography>
          <ul>
            {experienceItem.contributions.map(c => (
              <li key={c}>{parse(c)}</li>
            ))}
          </ul>
        </>
      ) : null}
      <ul>
        {experienceItem.skills.map(s => (
          <li key={s}>{t(s, { ns: "skills" })}</li>
        ))}
      </ul>
    </li>
  );
};

export default ExperienceListItem;
