// components
import Typography from "@mui/material/Typography";

// hooks
import { useTranslation } from "react-i18next";

const Intro = () => {
  const { t } = useTranslation();
  return (
    <header id="intro" data-testid="intro">
      <Typography variant="h2">{t("name")}</Typography>
      <Typography component="p" variant="subtitle1">
        {t("intro")}
      </Typography>
    </header>
  );
};

export default Intro;
