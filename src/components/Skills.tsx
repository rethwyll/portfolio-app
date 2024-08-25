// components
import Typography from "@mui/material/Typography";

// hooks
import { useTranslation } from "react-i18next";

// data
import skillsData from "../data/skills.json";

// stores
import { useSkillsStore } from "../stores/skillsStore";

const Skills = () => {
  const { t } = useTranslation();
  const yearsOfExperience = useSkillsStore(state => state.yearsOfExperience);
  const formatter = new Intl.ListFormat("en", {
    style: "long",
    type: "conjunction"
  });
  return (
    <section id="skills">
      <header>
        <Typography variant="h3">{t("title", { ns: "skills" })}</Typography>
        <p>{t("intro", { ns: "skills", years: yearsOfExperience })}</p>
        <p>{t("unique", { ns: "skills" })}</p>
      </header>
      <dl>
        {skillsData.map(s => (
          <div key={s.id}>
            <Typography variant="h4" component="dt">
              {t(s.id, { ns: "skills" })}
            </Typography>
            <dd
              dangerouslySetInnerHTML={{
                __html: formatter.format(s.skills.sort())
              }}
            />
          </div>
        ))}
      </dl>
    </section>
  );
};

export default Skills;
