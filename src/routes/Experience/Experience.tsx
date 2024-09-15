import { ReactElement } from "react";

// components
import ExperienceList from "../../components/ExperienceList/ExperienceList";
import SkillsFilter from "../../components/SkillsFilter/SkillsFilter";
import Typography from "@mui/material/Typography";

// hooks
import { useTranslation } from "react-i18next";

const Experience = (): ReactElement => {
  const { t } = useTranslation();
  return (
    <section id="experience" data-testid="experience">
      <header>
        <Typography variant="h2">
          {t("experience", { ns: "routes" })}
        </Typography>
      </header>
      <SkillsFilter />
      <ExperienceList />
    </section>
  );
};

export default Experience;
