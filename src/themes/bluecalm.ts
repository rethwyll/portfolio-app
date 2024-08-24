import { createTheme } from "@mui/material/styles";
import base from "./base";
// https://mui.com/material-ui/customization/color/#2014-material-design-color-palettes
import { amber, blue, lightGreen, pink, red } from "@mui/material/colors";

const bg = "#11111f";
const primaryBase = blue[100];
const secondaryBase = pink[600];
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
      color: secondaryBase,
      fontSize: "5em"
    },
    h2: {
      fontWeight: 800,
      color: secondaryBase,
      fontSize: "10em"
    },
    h3: {
      fontWeight: 800,
      color: secondaryBase,
      fontSize: "3em"
    },
    h4: {
      fontWeight: 800,
      color: secondaryBase,
      fontSize: "2.4em"
    },
    h5: {
      fontWeight: 800,
      color: secondaryBase,
      fontSize: "2.2em"
    },
    h6: {
      fontWeight: 800,
      color: secondaryBase,
      fontSize: "1.8em"
    },
    body1: {
      color: primaryBase,
      fontSize: "1.8em",
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
