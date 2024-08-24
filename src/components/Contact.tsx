import { ReactElement } from "react";

// hooks
import { useTranslation } from "react-i18next";

const Contact = (): ReactElement => {
  const { t } = useTranslation();
  return (
    <div>
      <address>
        <div>{t("street", { ns: "base" })}</div>
        <div>
          {t("city", { ns: "base" })}, {t("state", { ns: "base" })}{" "}
          {t("zip", { ns: "base" })}
        </div>
        <div>{t("country", { ns: "base" })}</div>
        <div>
          <a href={`mailto:${t("email", { ns: "base" })}`}>
            {t("email", { ns: "base" })}
          </a>
        </div>
      </address>
    </div>
  );
};

export default Contact;
