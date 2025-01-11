import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const base = createTheme({
  typography: {
    htmlFontSize: 10,
    h1: {
      fontSize: "3.375em", // 67.5px (2rem header)
      lineHeight: 1.674,
      margin: "0"
    }
  }
});

export default base;
