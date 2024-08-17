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
      fontSize: "5rem",
      color: "#bada55"
    },
    h2: {
      fontSize: "20rem",
      color: "#bada55"
    },
    h3: {
      color: "#c0ffee"
    },
    h4: {
      color: "#c0c"
    },
    h5: {
      color: "#c0c"
    },
    h6: {
      color: "#c0c"
    },
    body1: {
      color: "#666"
    }
  })
});
