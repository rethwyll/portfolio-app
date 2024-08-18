import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import backend, { HttpBackendOptions } from "i18next-http-backend";
import { PropsWithChildren } from "react";
import { initReactI18next } from "react-i18next";

i18next
  .use(backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init<HttpBackendOptions>({
    fallbackLng: "en" // use en if detected lng is not available
    // saveMissing: true // send not translated keys to endpoint
  });

const TranslationProvider = ({ children }: PropsWithChildren) => {
  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
};

export default TranslationProvider;
