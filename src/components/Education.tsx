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
          <p>
            {t("title.minor", { ns: "education" })}: {d.minor}
          </p>
          <p>{d["degree-honor"]}</p>
          <p>
            <time dateTime={d["graduation-date"]}>
              {DateTime.fromISO(d["graduation-date"]).year}
            </time>
          </p>
          <p>
            <Link
              href={d["college-url"]}
              target="_blank"
              rel="noopener noreferrer"
            >
              {d.college}
            </Link>
          </p>
          <p>{d["college-location"]}</p>
        </div>
      ))}
    </section>
  );
};

export default Education;
