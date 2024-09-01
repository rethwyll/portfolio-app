import parse from "html-react-parser";
import i18next from "i18next";

// components
import Typography from "@mui/material/Typography";

// hooks
import { useTranslation } from "react-i18next";

// data
import skillsData from "../../data/skills.json";

// stores
import { useSkillsStore } from "../../stores/skillsStore";

const Skills = () => {
  const { t } = useTranslation();
  const yearsOfExperience = useSkillsStore(state => state.yearsOfExperience);
  const formatter = new Intl.ListFormat("en", {
    style: "long",
    type: "conjunction"
  });
  return (
    <section id="skills" data-testid="skills">
      <header>
        <Typography variant="h3">{t("title", { ns: "skills" })}</Typography>
        <Typography variant="body1" component="p">
          {t("intro", { ns: "skills", years: yearsOfExperience })}
        </Typography>
        <Typography variant="body1" component="p">
          {t("unique", { ns: "skills" })}
        </Typography>
      </header>
      <dl>
        {skillsData.map(s => (
          <div key={s.id}>
            <Typography variant="h4" component="dt">
              {t(s.id, { ns: "skills" })}
            </Typography>
            <Typography variant="body1" component="dd">
              {parse(
                formatter.format(
                  s.skills.sort(
                    new Intl.Collator(i18next.language, { caseFirst: "upper" })
                      .compare
                  )
                )
              )}
            </Typography>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default Skills;
