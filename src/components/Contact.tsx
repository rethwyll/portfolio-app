import { ReactElement } from "react";

// components
import Link from "@mui/material/Link";

// hooks
import { useTranslation } from "react-i18next";

const Contact = (): ReactElement => {
  const { t } = useTranslation();
  return (
    <div id="contact">
      <address>
        <div>{t("street", { ns: "base" })}</div>
        <div>
          {t("city", { ns: "base" })}, {t("state", { ns: "base" })}{" "}
          {t("zip", { ns: "base" })}
        </div>
        <div>{t("country", { ns: "base" })}</div>
      </address>
      <Link color="warning.main" href={`mailto:${t("email", { ns: "base" })}`}>
        {t("email", { ns: "base" })}
      </Link>
    </div>
  );
};

export default Contact;
