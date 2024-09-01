import { DateTime } from "luxon";
import parse from "html-react-parser";
import classnames from "classnames";

// components
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

// hooks
import { useTranslation } from "react-i18next";

// types
import { ExperienceItem } from "../types/experience";
import { Avatar, Tooltip } from "@mui/material";

type Props = {
  className?: string;
  experienceItem: ExperienceItem;
};

const ExperienceListItem = ({ className, experienceItem }: Props) => {
  const { t } = useTranslation();
  const sortedTranslatedSkills = experienceItem.skills
    .map(s => t(s, { ns: "skills" }))
    .sort();
  return (
    <li className={classnames(className, "experience-list-item")}>
      <header>
        <Typography variant="h3" className="experience-name">
          {experienceItem.url ? (
            <Link
              className="animateable"
              href={experienceItem.url}
              target="_blank"
              rel="noopener noreferrer"
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
            <time dateTime={experienceItem.end}>
              {DateTime.fromISO(experienceItem.end).toLocaleString({
                month: "long",
                year: "numeric"
              })}
            </time>
          ) : (
            t("present", { ns: "experience" })
          )}
        </Typography>
      </header>
      <Typography variant="body1" component="p" className="experience-summary">
        {parse(experienceItem.summary)}
      </Typography>
      {experienceItem.contributions.length ? (
        <>
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
        </>
      ) : null}
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
