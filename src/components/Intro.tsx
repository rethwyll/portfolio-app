// components
import Typography from "@mui/material/Typography";

// hooks
import { useTranslation } from "react-i18next";

const Intro = () => {
  const { t } = useTranslation();
  return (
    <header>
      <Typography variant="h2" color="secondary">
        {t("name")}
      </Typography>
      <Typography variant="body1">{t("intro")}</Typography>
    </header>
  );
};

export default Intro;
