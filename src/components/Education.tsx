// data
import data from "../data/education.json";

// components
import Typography from "@mui/material/Typography";
import { DateTime } from "luxon";

// hooks
import { useTranslation } from "react-i18next";

const Education = () => {
  const { t } = useTranslation();
  return (
    <section>
      <header>
        <Typography variant="h3">{t("title", { ns: "education" })}</Typography>
      </header>
      {data.map(d => (
        <>
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
            <a
              href={d["college-url"]}
              target="_blank"
              rel="noopener noreferrer"
            >
              {d.college}
            </a>
          </p>
          <p>{d["college-location"]}</p>
        </>
      ))}
    </section>
  );
};

export default Education;
