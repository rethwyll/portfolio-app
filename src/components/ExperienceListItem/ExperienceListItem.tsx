import { DateTime } from "luxon";
import parse from "html-react-parser";

// components
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

// hooks
import { useTranslation } from "react-i18next";

// types
import { ExperienceItem } from "../../types/experience";
import { Avatar, Tooltip } from "@mui/material";

type Props = {
  experienceItem: ExperienceItem;
};

const ExperienceListItem = ({ experienceItem }: Props) => {
  const { t } = useTranslation();
  const sortedTranslatedSkills = experienceItem.skills
    .map(s => t(s, { ns: "skills" }))
    .sort();
  return (
    <li
      className="experience-list-item"
      data-testid={`experience-list-item-${experienceItem.id}`}
    >
      <header>
        <Typography variant="h3" className="experience-name">
          {experienceItem.url ? (
            <Link
              className="animateable"
              href={experienceItem.url}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="url"
            >
              {experienceItem.name}
            </Link>
          ) : (
            experienceItem.name
          )}
        </Typography>
        <Typography className="experience-location" variant="body2">
          {experienceItem.location}
        </Typography>
        <Typography variant="body2">
          {experienceItem.title},{" "}
          <time dateTime={experienceItem.start}>
            {DateTime.fromISO(experienceItem.start).toLocaleString({
              month: "long",
              year: "numeric"
            })}
          </time>
          -
          {experienceItem.end ? (
            <time dateTime={experienceItem.end} data-testid="end">
              {DateTime.fromISO(experienceItem.end).toLocaleString({
                month: "long",
                year: "numeric"
              })}
            </time>
          ) : (
            <time dateTime={DateTime.now().toISODate()} data-testid="present">
              {t("present", { ns: "experience" })}
            </time>
          )}
        </Typography>
      </header>
      <Typography variant="body1" component="p" className="experience-summary">
        {parse(experienceItem.summary)}
      </Typography>
      <Typography variant="h4" className="experience-key-contributions">
        Key Contributions
      </Typography>
      <ul className="experience-contributions">
        {experienceItem.contributions.map(c => (
          <Typography variant="body1" component="li" key={c}>
            {parse(c)}
          </Typography>
        ))}
      </ul>
      <ul className="experience-skills-list">
        {sortedTranslatedSkills.map(s => (
          <Tooltip key={s} title={s}>
            <Avatar variant="rounded">{s[0]}</Avatar>
          </Tooltip>
        ))}
      </ul>
    </li>
  );
};

export default ExperienceListItem;
