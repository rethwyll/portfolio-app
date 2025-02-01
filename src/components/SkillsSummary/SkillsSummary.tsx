// components
import Typography from "@mui/material/Typography";

// hooks
import { useTranslation } from "react-i18next";

// stores
import { useSkillsStore } from "../../stores/skillsStore";

const SkillsSummary = () => {
  const { t } = useTranslation();
  const yearsOfExperience = useSkillsStore(state => state.yearsOfExperience);
  return (
    <section id="skills-summary" data-testid="skills-summary">
      <header>
        <Typography variant="h3">
          {t("skills-summary", { ns: "skills" })}
        </Typography>
      </header>
      <Typography variant="body1" component="p">
        {t("intro", { ns: "skills", years: yearsOfExperience })}
      </Typography>
      <Typography variant="body1" component="p">
        {t("unique", { ns: "skills" })}
      </Typography>
    </section>
  );
};

export default SkillsSummary;
