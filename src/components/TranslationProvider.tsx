import { PropsWithChildren, Suspense } from "react";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import backend, { HttpBackendOptions } from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18next
  .use(backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init<HttpBackendOptions>({
    ns: ["base", "routes", "education", "objective", "skills"],
    fallbackLng: "en", // use en if detected lng is not available
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
    // saveMissing: true // send not translated keys to endpoint
  });

const TranslationProvider = ({ children }: PropsWithChildren) => {
  return (
    <I18nextProvider i18n={i18next}>
      <Suspense fallback="loading">{children}</Suspense>
    </I18nextProvider>
  );
};

export default TranslationProvider;
