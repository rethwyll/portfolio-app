import { styled } from "@mui/material/styles";
import { PropsWithChildren, Suspense } from "react";
import i18next from "i18next";
import { I18nextProvider, I18nextProviderProps } from "react-i18next";
import backend, { HttpBackendOptions } from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import { CircularProgress } from "@mui/material";

const Container = styled("div")`
  align-items: center;
  display: grid;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

i18next
  .use(backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init<HttpBackendOptions>({
    ns: [
      "base",
      "contact",
      "education",
      "experience",
      "keywords",
      "objective",
      "routes",
      "skills"
    ],
    backend: {
      loadPath: () =>
        `${import.meta.env.PROD ? "./" : ""}/locales/{{lng}}/{{ns}}.json`
    },
    fallbackLng: "en", // use en if detected lng is not available
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    },
    react: {
      useSuspense: import.meta.env.PROD
    }
    // saveMissing: true // send not translated keys to endpoint
  });

type Props = { i18n?: I18nextProviderProps["i18n"] } & PropsWithChildren;
const TranslationProvider = ({ children, i18n = i18next }: Props) => {
  return (
    <I18nextProvider i18n={i18n}>
      <Suspense
        fallback={
          <Container>
            <CircularProgress />
          </Container>
        }
      >
        {children}
      </Suspense>
    </I18nextProvider>
  );
};

export default TranslationProvider;
