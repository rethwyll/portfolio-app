import { ReactElement, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { isNull, sample } from "lodash";

// components
import { Outlet } from "react-router-dom";
import AppFooter from "../components/AppFooter";
import AppHeader from "../components/AppHeader";
import CssBaseline from "@mui/material/CssBaseline";
import TranslationProvider from "../components/TranslationProvider";

// constants
import { themeKeys } from "../constants";

// stores
import { useThemeStore } from "../stores/themeStore";

// themes
import allThemes from "../themes/allThemes";

// types
import { GlobalStyles } from "@mui/material";

const App = (): ReactElement | null => {
  const { theme: currentTheme, updateTheme } = useThemeStore();

  // initialize theme
  useEffect(() => {
    updateTheme(sample(themeKeys) ?? themeKeys[0]);
  }, [updateTheme]);

  if (isNull(currentTheme)) {
    return null;
  }

  const fullTheme = allThemes[currentTheme];
  return (
    <TranslationProvider>
      <ThemeProvider theme={fullTheme}>
        <GlobalStyles
          styles={{
            body: {
              backgroundColor: fullTheme.palette.background.default
            }
          }}
        />
        <CssBaseline />
        <AppHeader />
        <main id="main">
          <Outlet />
        </main>
        <AppFooter />
      </ThemeProvider>
    </TranslationProvider>
  );
};

export default App;
