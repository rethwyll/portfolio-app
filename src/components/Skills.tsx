// components
import Typography from "@mui/material/Typography";

// hooks
import { useTranslation } from "react-i18next";

// stores
import { useSkillsStore } from "../stores/skillsStore";

const Skills = () => {
  const { t } = useTranslation();
  const yearsOfExperience = useSkillsStore(state => state.yearsOfExperience);

  return (
    <section>
      <header>
        <Typography variant="h3">{t("title", { ns: "skills" })}</Typography>
        <p>{t("intro", { ns: "skills", years: yearsOfExperience })}</p>
        <p>Extensive experience in front-end UI/UX development.</p>
        <p>
          Unique ability to bridge communication gap between creative and
          technical.
        </p>
        <p>
          Strong written and oral communication skills; proven ability to Led
          project meetings, client (external or internal) interactions and
          in-house technical seminars and produce project-related technical
          documentation.
        </p>
      </header>
      <dl>
        <Typography variant="h4" component="dt">
          Development
        </Typography>
        <dd>
          HTML5; CSS2 and CSS3; CSS-in-JS; Javascript; Typescript; React; Vite;
          SPA; RESTful service calls; Highcharts; Launch Darkly; Agile; Jira;
          W3C standards-based and semantic development; HTML/CSS validation;
          Macintosh, Windows, *nix environments
        </dd>
        <Typography variant="h4" component="dt">
          UX
        </Typography>
        <dd>
          UI; site navigation; graphical &ldquo;look and feel&rdquo;; component
          libraries; analytics tools; i18n; l10n
        </dd>
        <Typography variant="h4" component="dt">
          Project
        </Typography>
        <dd>
          project estimation; client relations; copyediting; project management;
          documentation/technical writing; client training/instruction
        </dd>
      </dl>
    </section>
  );
};

export default Skills;
