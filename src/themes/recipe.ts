import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import base from "./base";

// A custom theme for this app
const recipe = createTheme({
  ...base,
  palette: {
    background: {
      default: red[500]
    },
    primary: {
      main: "#556cd6"
    },
    secondary: {
      main: "#19857b"
    },
    error: {
      main: red.A400
    }
  },
  typography: {
    fontFamily: "Pacifico, cursive"
  }
});

export default recipe;
