import { createTheme } from "@mui/material/styles";
import base from "./base";
// https://mui.com/material-ui/customization/color/#2014-material-design-color-palettes
import {
  amber,
  blue,
  indigo,
  lightGreen,
  pink,
  purple,
  red
} from "@mui/material/colors";

const bg = "#11111f";
const primaryBase = blue[50];
const primaryBaseDarker = indigo[200];
const secondaryBase = pink[600];
const tertiaryBase = purple[400];
const errorBase = red[500];
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
    fontFamily: "'Inter Tight', Roboto, sans-serif",
    h1: {
      fontFamily: "'Inter Tight', Roboto, sans-serif",
      fontSize: "3.375em", // 54px
      fontWeight: 800,
      lineHeight: 1,
      margin: "0 0 .33333em", // 18px
      wordBreak: "break-word",
      "@media screen": {
        color: primaryBaseDarker,
        [base.breakpoints.up("md")]: {
          wordBreak: "initial"
        }
      }
    },
    h2: {
      fontFamily: "'Inter Tight', Roboto, sans-serif",
      fontSize: "8em", // 128px
      fontWeight: 800,
      lineHeight: 1.3125,
      margin: "0",
      wordBreak: "break-word",
      "@media screen": {
        color: secondaryBase,
        [base.breakpoints.up("md")]: {
          fontSize: "11em", // 176px
          lineHeight: 1.227,
          wordBreak: "initial"
        }
      }
    },
    h3: {
      fontFamily: "'Inter Tight', Roboto, sans-serif",
      fontSize: "3em", // 48px
      fontWeight: 800,
      lineHeight: 1.5,
      margin: "0",
      wordBreak: "break-word",
      "@media screen": {
        color: secondaryBase,
        [base.breakpoints.up("md")]: {
          fontSize: "4em", // 64px
          lineHeight: 1.125, // 72px
          wordBreak: "initial"
        }
      }
    },
    h4: {
      fontFamily: "'Inter Tight', Roboto, sans-serif",
      fontSize: "2.5em", // 40px
      fontWeight: 800,
      lineHeight: 1.2, // 48px
      margin: "0", // 24px
      wordBreak: "break-word",
      "@media screen": {
        color: tertiaryBase,
        [base.breakpoints.up("md")]: {
          fontSize: "3em", // 48px
          lineHeight: 1.5, // 72px
          wordBreak: "initial"
        }
      }
    },
    h5: {
      fontFamily: "'Inter Tight', Roboto, sans-serif",
      fontSize: "1.5em", // 24px
      fontWeight: 400,
      lineHeight: 2, // 48px
      margin: "0",
      wordBreak: "break-word",
      "@media screen": {
        color: tertiaryBase,
        [base.breakpoints.up("md")]: {
          wordBreak: "initial"
        }
      }
    },
    h6: {
      fontFamily: "'Inter Tight', Roboto, sans-serif",
      fontSize: "1.5em", // 24px
      fontWeight: 400,
      lineHeight: 2, // 48px
      margin: "0",
      wordBreak: "break-word",
      "@media screen": {
        color: primaryBase,
        [base.breakpoints.up("md")]: {
          wordBreak: "initial"
        }
      }
    },
    body1: {
      fontSize: "1.6rem", // 16px
      fontWeight: 400,
      lineHeight: 1.5, // 24px
      margin: "0",
      wordBreak: "break-word",
      "@media screen": {
        color: primaryBase,
        [base.breakpoints.up("md")]: {
          wordBreak: "initial"
        }
      }
    },
    body2: {
      fontSize: "1.5em", // 24px
      fontWeight: 400,
      lineHeight: 2, // 48px
      margin: "0",
      wordBreak: "break-word",
      "@media screen": {
        color: primaryBase,
        [base.breakpoints.up("md")]: {
          wordBreak: "initial"
        }
      }
    },
    subtitle1: {
      fontSize: "1.5em", // 24px
      fontWeight: 800,
      lineHeight: 2, // 48px
      margin: "0",
      wordBreak: "break-word",
      "@media screen": {
        color: primaryBase,
        [base.breakpoints.up("md")]: {
          wordBreak: "initial"
        }
      }
    }
  }),
  components: {
    MuiAvatar: {
      defaultProps: {
        variant: "rounded"
      },
      styleOverrides: {
        root: {
          fontSize: "1em",
          lineHeight: "1.5em"
        },
        rounded: ({ theme }) => ({
          "@media screen": {
            backgroundColor: theme.palette.secondary.main,
            borderRadius: "50% 50%",
            color: theme.palette.secondary.contrastText,
            height: "1.5em",
            width: "1.5em",
            "&:hover": {
              backgroundColor: theme.palette.secondary.light
            }
          },
          "@media print": {
            backgroundColor: theme.palette.background.default,
            color: theme.palette.getContrastText(
              theme.palette.background.default
            ),
            padding: "0 1em",
            width: "auto"
          },
          cursor: "pointer",
          padding: "0"
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
          "@media screen": {
            color: theme.palette.getContrastText(theme.palette.secondary.main),
            backgroundColor: theme.palette.secondary.main,
            "&:hover": {
              backgroundColor: theme.palette.secondary.dark
            }
          },
          "@media print": {
            color: theme.palette.getContrastText(
              theme.palette.background.default
            ),
            backgroundColor: theme.palette.background.default
          }
        }),
        outlined: ({ theme }) => ({
          "@media screen": {
            color: theme.palette.warning.main,
            borderColor: theme.palette.warning.main,
            "&:hover": {
              color: theme.palette.warning.dark,
              borderColor: theme.palette.warning.dark
            }
          },
          "@media print": {
            color: theme.palette.background.default,
            borderColor: theme.palette.background.default
          }
        })
      }
    },
    MuiLink: {
      styleOverrides: {
        root: ({ theme }) => ({
          "@media screen": {
            color: theme.palette.warning.main,
            textDecorationColor: theme.palette.warning.main,
            "&:hover": {
              textDecorationColor: theme.palette.warning.main
            }
          },
          "@media print": {
            color: theme.palette.background.default,
            textDecoration: "none"
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
          color: theme.palette.primary.main,
          backgroundColor: theme.palette.secondary.main,
          fontSize: "1em"
        })
      }
    }
  }
});
