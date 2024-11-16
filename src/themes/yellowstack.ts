import { createTheme } from "@mui/material/styles";
import base from "./base";
// https://mui.com/material-ui/customization/color/#2014-material-design-color-palettes
import { grey, lightGreen, amber, red } from "@mui/material/colors";

const bg = "#F3D549";
const primaryBase = grey[900];
const secondaryBase = red["A700"];
// const tertiaryBase = red["A700"];
const tertiaryBase = grey[900];
const errorBase = red["A700"];
const warningBase = amber[700];
const infoBase = primaryBase;
const successBase = lightGreen[500];

// A custom theme for this app
export default createTheme({
  ...base,
  palette: {
    background: {
      default: bg
    },
    primary: {
      main: primaryBase
    },
    secondary: {
      main: secondaryBase,
      contrastText: "white"
    },
    error: {
      main: errorBase
    },
    warning: {
      main: warningBase
    },
    info: {
      main: infoBase
    },
    success: {
      main: successBase
    },
    tonalOffset: 0.3
  },
  typography: () => ({
    fontFamily: "'Roboto Slab', serif",
    h1: {
      color: primaryBase,
      fontFamily: "'Six Caps', cursive",
      fontSize: "3.375em", // 54px
      fontWeight: 400,
      lineHeight: 1,
      margin: "0 0 .33333em" // 18px
    },
    h2: {
      color: primaryBase,
      fontFamily: "'Six Caps', cursive",
      fontSize: "20em", // 320px
      fontWeight: 400,
      lineHeight: 0.75,
      margin: "0 0 0.075em",
      textTransform: "lowercase"
    },
    h3: {
      color: secondaryBase,
      fontFamily: "'Six Caps', cursive",
      fontSize: "4em", // 64px
      fontWeight: 400,
      lineHeight: 1.5, // 96px
      margin: "0",
      textTransform: "lowercase"
    },
    h4: {
      color: tertiaryBase,
      fontFamily: "'Space Mono', monospace",
      fontSize: "2em", // 32px
      fontWeight: 600,
      lineHeight: 1.5, // 48px
      margin: "0", // 24px
      textTransform: "uppercase"
    },
    h5: {
      color: tertiaryBase,
      fontFamily: "'Space Mono', monospace",
      fontSize: "1.5em", // 24px
      fontWeight: 400,
      lineHeight: 2, // 48px
      margin: "0",
      textTransform: "uppercase"
    },
    h6: {
      color: primaryBase,
      fontFamily: "'Space Mono', monospace",
      fontSize: "1.5em", // 24px
      fontWeight: 400,
      lineHeight: 2, // 48px
      margin: "0",
      textTransform: "uppercase"
    },
    body1: {
      color: primaryBase,
      fontSize: "1.6rem", // 16px
      fontWeight: 400,
      lineHeight: 1.5, // 24px
      margin: "0"
    },
    body2: {
      color: primaryBase,
      fontFamily: "'Space Mono', monospace",
      fontSize: "1.5em", // 24px
      fontWeight: 600,
      lineHeight: 2, // 48px
      margin: "0"
    }
  }),
  components: {
    MuiAvatar: {
      defaultProps: {
        variant: "rounded"
      },
      styleOverrides: {
        root: ({ theme }) => ({
          boxShadow: `.2em .2em 0 ${theme.palette.primary.main}`,
          fontSize: "1em",
          lineHeight: "1.5em",
          "&:hover": {
            boxShadow: `0 0 0 ${theme.palette.primary.main}`
          }
        }),
        rounded: ({ theme }) => ({
          backgroundColor: theme.palette.secondary.main,
          borderRadius: 0,
          color: theme.palette.secondary.contrastText,
          cursor: "pointer",
          height: "1.5em",
          padding: "0",
          width: "1.5em",
          "&:hover": {
            backgroundColor: theme.palette.secondary.dark
          }
        })
      }
    },
    MuiButton: {
      defaultProps: {
        variant: "contained"
      },
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: theme.typography.body1.fontSize,
          lineHeight: theme.typography.body1.lineHeight
        }),
        contained: ({ theme }) => ({
          color: theme.palette.getContrastText(theme.palette.secondary.main),
          backgroundColor: theme.palette.secondary.main,
          borderRadius: 0,
          boxShadow: `.2em .2em 0 ${theme.palette.primary.main}`,
          "&:hover": {
            backgroundColor: theme.palette.secondary.dark,
            boxShadow: `0 0 0 ${theme.palette.primary.main}`
          }
        }),
        outlined: ({ theme }) => ({
          color: theme.palette.error.main,
          borderColor: theme.palette.error.main,
          borderRadius: 0,
          "&:hover": {
            color: theme.palette.error.dark,
            borderColor: theme.palette.error.dark
          }
        })
      }
    },
    MuiLink: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.error.main,
          textDecorationColor: theme.palette.error.main,
          "&:hover": {
            textDecorationColor: theme.palette.error.main
          }
        })
      }
    },
    MuiTooltip: {
      defaultProps: {
        arrow: true,
        placement: "top"
      },
      styleOverrides: {
        arrow: ({ theme }) => ({
          color: theme.palette.secondary.main
        }),
        tooltip: ({ theme }) => ({
          color: theme.palette.secondary.contrastText,
          backgroundColor: theme.palette.secondary.main,
          borderRadius: 0,
          fontSize: "1em"
        })
      }
    }
  }
});
