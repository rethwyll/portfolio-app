// data
import data from "../data/education.json";

// components
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

// hooks
import { useTranslation } from "react-i18next";

// types
import { DateTime } from "luxon";

const Education = () => {
  const { t } = useTranslation();
  return (
    <section id="education">
      <header>
        <Typography variant="h3">{t("title", { ns: "education" })}</Typography>
      </header>
      {data.map(d => (
        <div key={d.college}>
          <Typography variant="h4">
            {d.degree}, {d.major}
          </Typography>
          {d.minor ? (
            <Typography variant="body1" component="p">
              {t("title.minor", { ns: "education" })}: {d.minor}
            </Typography>
          ) : null}
          {d["degree-honor"] ? (
            <Typography variant="body1" component="i">
              {d["degree-honor"]}
            </Typography>
          ) : null}
          <Typography variant="body1" component="p">
            <time dateTime={d["graduation-date"]}>
              {DateTime.fromISO(d["graduation-date"]).year}
            </time>
          </Typography>
          <Typography variant="body1" component="p">
            <Link
              className="animateable"
              href={d["college-url"]}
              target="_blank"
              rel="noopener noreferrer"
            >
              {d.college}
            </Link>
          </Typography>
          <Typography variant="body1" component="p">
            {d["college-location"]}
          </Typography>
        </div>
      ))}
    </section>
  );
};

export default Education;
