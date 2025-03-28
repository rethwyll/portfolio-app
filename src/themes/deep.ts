import { createTheme } from "@mui/material/styles";
import base from "./base";
// https://mui.com/material-ui/customization/color/#2014-material-design-color-palettes
import {
  lightGreen,
  amber,
  red,
  blue,
  deepOrange,
  yellow
  // brown
} from "@mui/material/colors";

const bgDark = "#11111f";
const bg = "#11113f";
const bgLight = blue[200];
const glow = yellow[50];
// const bottom = brown[400];
const primaryBase = blue[50];
const secondaryBase = deepOrange[300];
const tertiaryBase = deepOrange[300];
const errorBase = red["A700"];
const warningBase = amber[700];
const infoBase = primaryBase;
const successBase = lightGreen[500];

// A custom theme for this app
export default createTheme({
  ...base,
  palette: {
    background: {
      default: `linear-gradient(to bottom, ${bgLight}, ${glow} 300px, ${bgLight} 300px, ${bg} 1600px, ${bgDark} 2400px, transparent)`
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
      ...base.typography.h1,
      color: primaryBase,
      fontWeight: 400
    },
    h2: {
      color: primaryBase,
      fontSize: "4em", // 64px
      fontWeight: 400,
      lineHeight: 1.5 // 96px
    },
    h3: {
      color: secondaryBase,
      fontSize: "4em", // 64px
      fontWeight: 400,
      lineHeight: 1.5, // 96px
      margin: "0",
      textTransform: "lowercase"
    },
    h4: {
      color: tertiaryBase,
      fontSize: "2em", // 32px
      fontWeight: 600,
      lineHeight: 1.5, // 48px
      margin: "0", // 24px
      textTransform: "uppercase"
    },
    h5: {
      color: tertiaryBase,
      fontSize: "1.5em", // 24px
      fontWeight: 400,
      lineHeight: 2, // 48px
      margin: "0",
      textTransform: "uppercase"
    },
    h6: {
      fontSize: "1.5em", // 24px
      fontWeight: 400,
      lineHeight: 2, // 48px
      margin: "0",
      textTransform: "uppercase",
      "@media screen": {
        color: tertiaryBase
      }
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
      fontSize: "1.5em", // 24px
      fontWeight: 600,
      lineHeight: 2, // 48px
      margin: "0"
    },
    subtitle1: {
      color: primaryBase,
      fontSize: "1.5em", // 24px
      fontWeight: 800,
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
          "@media screen": {
            boxShadow: `.2em .2em 0 ${theme.palette.primary.main}`,
            "&:hover": {
              boxShadow: `0 0 0 ${theme.palette.primary.main}`
            }
          },
          fontSize: "1em",
          lineHeight: "1.5em"
        }),
        rounded: ({ theme }) => ({
          "@media screen": {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
            "&:hover": {
              backgroundColor: theme.palette.secondary.dark
            }
          },
          "@media print": {
            backgroundColor: primaryBase,
            color: theme.palette.getContrastText(primaryBase),
            padding: "0 1em",
            width: "auto"
          },
          borderRadius: 0,
          cursor: "pointer",
          height: "1.5em",
          padding: "0",
          width: "1.5em"
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
          borderRadius: 0,
          "@media screen": {
            color: theme.palette.getContrastText(theme.palette.secondary.main),
            backgroundColor: theme.palette.secondary.main,
            boxShadow: `.2em .2em 0 ${theme.palette.primary.main}`,
            "&:hover": {
              backgroundColor: theme.palette.secondary.dark,
              boxShadow: `0 0 0 ${theme.palette.primary.main}`
            }
          },
          "@media print": {
            color: theme.palette.getContrastText(primaryBase),
            backgroundColor: primaryBase
          }
        }),
        outlined: ({ theme }) => ({
          borderRadius: 0,
          "@media screen": {
            color: theme.palette.error.main,
            borderColor: theme.palette.error.main,
            "&:hover": {
              color: theme.palette.error.dark,
              borderColor: theme.palette.error.dark
            }
          },
          "@media print": {
            color: theme.palette.getContrastText(primaryBase),
            backgroundColor: primaryBase
          }
        })
      }
    },
    MuiLink: {
      styleOverrides: {
        root: ({ theme }) => ({
          "@media screen": {
            color: theme.palette.error.main,
            textDecorationColor: theme.palette.error.main,
            "&:hover": {
              textDecorationColor: theme.palette.error.main
            }
          },
          "@media print": {
            color: primaryBase,
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
          color: theme.palette.secondary.contrastText,
          backgroundColor: theme.palette.secondary.main,
          borderRadius: 0,
          fontSize: "1em"
        })
      }
    }
  }
});
