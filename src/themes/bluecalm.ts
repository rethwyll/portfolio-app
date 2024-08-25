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
const tertiaryBase = purple[600];
const errorBase = red[500];
const warningBase = amber[500];
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
    // tonalOffset: {
    //   light: 0.1,
    //   dark: 0.7
    // }
  },
  typography: () => ({
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontFamily: "Josefin Sans, sans-serif",
      fontWeight: 800,
      color: primaryBaseDarker,
      fontSize: "3em"
    },
    h2: {
      fontFamily: "Josefin Sans, sans-serif",
      fontWeight: 800,
      color: secondaryBase,
      fontSize: "12em",
      lineHeight: "1em"
    },
    h3: {
      fontFamily: "Josefin Sans, sans-serif",
      fontWeight: 800,
      color: secondaryBase,
      fontSize: "3em"
    },
    h4: {
      fontFamily: "Josefin Sans, sans-serif",
      fontWeight: 800,
      color: tertiaryBase,
      fontSize: "2.4em"
    },
    h5: {
      fontFamily: "Josefin Sans, sans-serif",
      fontWeight: 800,
      color: tertiaryBase,
      fontSize: "2.2em"
    },
    h6: {
      fontFamily: "Josefin Sans, sans-serif",
      fontWeight: 800,
      color: primaryBase,
      fontSize: "2.2em"
    },
    body1: {
      color: primaryBase,
      fontSize: "2.2em",
      fontWeight: 400
    }
  }),
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained"
      },
      styleOverrides: {
        root: {
          fontSize: "1em",
          lineHeight: "1em"
        },
        contained: ({ theme }) => ({
          color: theme.palette.getContrastText(theme.palette.secondary.main),
          backgroundColor: theme.palette.secondary.main,
          "&:hover": {
            backgroundColor: theme.palette.secondary.dark
          }
        }),
        outlined: ({ theme }) => ({
          color: theme.palette.warning.main,
          borderColor: theme.palette.warning.main,
          "&:hover": {
            color: theme.palette.warning.dark,
            borderColor: theme.palette.warning.dark
          }
        })
      }
    },
    MuiLink: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.warning.main
        })
      }
    }
  }
});
