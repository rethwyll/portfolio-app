// data
import data from "../../data/education.json";

// components
import EducationListItem from "../EducationListItem/EducationListItem";
import Typography from "@mui/material/Typography";

// hooks
import { useTranslation } from "react-i18next";

// types

const Education = () => {
  const { t } = useTranslation();
  return (
    <section id="education" data-testid="education">
      <header>
        <Typography variant="h3">{t("title", { ns: "education" })}</Typography>
      </header>
      {data.map(d => (
        <EducationListItem educationItem={d} key={d.college} />
      ))}
    </section>
  );
};

export default Education;
