import { ReactElement } from "react";

// components
import Education from "../../components/Education/Education";
import SkillsList from "../../components/SkillsList/SkillsList";
import Typography from "@mui/material/Typography";

// hooks
import { useTranslation } from "react-i18next";

const Skills = (): ReactElement => {
  const { t } = useTranslation();
  return (
    <section id="skills" data-testid="skills">
      <header>
        <Typography variant="h2">{t("skills", { ns: "routes" })}</Typography>
      </header>
      <SkillsList />
      <Education />
    </section>
  );
};

export default Skills;
