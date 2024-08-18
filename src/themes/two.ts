import { createTheme } from "@mui/material/styles";
import base from "./base";
import { yellow } from "@mui/material/colors";

// A custom theme for this app
export default createTheme({
  ...base,
  palette: {
    background: {
      default: yellow[500]
    },
    primary: {
      main: "#bada55"
    },
    secondary: {
      main: "#c0ffee"
    },
    error: {
      main: "#cc0000"
    },
    warning: {
      main: "#ffcc00"
    },
    info: {
      main: "#00ccff"
    },
    success: {
      main: "#00cc00"
    }
  },
  typography: () => ({
    fontFamily: "Alfa Slab One, serif",
    h1: {
      color: "#bada55",
      fontSize: "5em"
    },
    h2: {
      color: "#bada55",
      fontSize: "10em"
    },
    h3: {
      color: "#c0ffee",
      fontSize: "6em"
    },
    h4: {
      color: "#c0c",
      fontSize: "4em"
    },
    h5: {
      color: "#c0c",
      fontSize: "2em"
    },
    h6: {
      color: "#c0c",
      fontSize: "1em"
    },
    body1: {
      color: "#333",
      fontSize: "3rem"
    }
  }),
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained"
      },
      styleOverrides: {
        root: {
          fontSize: "1em"
        }
      }
    }
  }
});
