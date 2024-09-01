// components
import Typography from "@mui/material/Typography";

// hooks
import { useTranslation } from "react-i18next";

const Intro = () => {
  const { t } = useTranslation();
  return (
    <header id="intro">
      <Typography variant="h2" color="secondary">
        {t("name")}
      </Typography>
      <Typography variant="body2">{t("intro")}</Typography>
    </header>
  );
};

export default Intro;
