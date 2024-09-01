import { ReactElement, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { isNull } from "lodash";

// components
import { Outlet } from "react-router-dom";
import AppFooter from "../../components/AppFooter/AppFooter";
import AppHeader from "../../components/AppHeader/AppHeader";
import CssBaseline from "@mui/material/CssBaseline";
import TranslationProvider from "../../providers/TranslationProvider";

// stores
import { useThemeStore } from "../../stores/themeStore";

// themes
import allThemes from "../../themes/allThemes";

// types
import { GlobalStyles } from "@mui/material";

const App = (): ReactElement | null => {
  const { theme: currentTheme, initializeTheme } = useThemeStore();

  // initialize theme
  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

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
        <div id="app" data-testid="app">
          <AppHeader />
          <main id="main">
            <Outlet />
          </main>
          <AppFooter />
        </div>
      </ThemeProvider>
    </TranslationProvider>
  );
};

export default App;
