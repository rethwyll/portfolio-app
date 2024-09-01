// components
import Typography from "@mui/material/Typography";

// hooks
import { useTranslation } from "react-i18next";

// stores
import { useSkillsStore } from "../stores/skillsStore";

const Objective = () => {
  const { t } = useTranslation();
  const yearsOfExperience = useSkillsStore(state => state.yearsOfExperience);

  return (
    <section id="objective">
      <header>
        <Typography variant="h3">{t("title", { ns: "objective" })}</Typography>
        <Typography variant="body1" component="p">
          {t("goal", { ns: "objective", years: yearsOfExperience })}
        </Typography>
      </header>
    </section>
  );
};

export default Objective;
