import { Typography } from "@mui/material";

// components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// hooks
import { useTranslation } from "react-i18next";

// icons
import { faSkull } from "@fortawesome/free-solid-svg-icons";

const Error = () => {
  const { t } = useTranslation();
  return (
    <section id="error">
      <Typography variant="h2">
        <FontAwesomeIcon icon={faSkull} />
      </Typography>
      <Typography variant="h2">{t("error", { ns: "base" })}</Typography>
    </section>
  );
};

export default Error;
