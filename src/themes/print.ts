import { createTheme } from "@mui/material/styles";
import base from "./base";

const bg = "#fff";
const primaryBase = "#000";

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
    tonalOffset: 0.3
  },
  typography: () => ({
    fontFamily: "'Noto Serif', serif",
    h1: {
      ...base.typography.h1,
      color: primaryBase,
      fontFamily: "'Noto Serif', serif"
    },
    h2: {
      color: primaryBase,
      fontSize: "3.375em", // 54px
      fontWeight: 800,
      lineHeight: 1.674,
      margin: "0"
    },
    h3: {
      color: primaryBase,
      fontSize: "2.5em", // 40px
      fontWeight: 800,
      lineHeight: 1.2, // 48px
      margin: "0" // 24px
    },
    h4: {
      color: primaryBase,
      fontSize: "1.5em", // 24px
      fontWeight: 400,
      lineHeight: 2, // 48px
      margin: "0"
    },
    h5: {
      color: primaryBase,
      fontSize: "1.5em", // 24px
      fontWeight: 400,
      lineHeight: 2, // 48px
      margin: "0"
    },
    h6: {
      color: primaryBase,
      fontSize: "1.5em", // 24px
      fontWeight: 400,
      lineHeight: 2, // 48px
      margin: "0"
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
      fontWeight: 400,
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
        root: {
          fontSize: "1em",
          lineHeight: "1.5em"
        },
        rounded: ({ theme }) => ({
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.background.default,
          cursor: "pointer",
          padding: "0 1em",
          width: "auto"
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
          color: theme.palette.background.default,
          backgroundColor: theme.palette.primary.main,
          "&:hover": {
            backgroundColor: theme.palette.primary.main
          }
        }),
        outlined: ({ theme }) => ({
          color: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
          "&:hover": {
            color: theme.palette.primary.main,
            borderColor: theme.palette.primary.main
          }
        })
      }
    },
    MuiLink: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          textDecoration: "none",
          "&:hover": {
            textDecorationColor: theme.palette.primary.main
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
          color: theme.palette.primary.main
        }),
        tooltip: ({ theme }) => ({
          color: theme.palette.background.default,
          backgroundColor: theme.palette.primary.main,
          fontSize: "1em"
        })
      }
    }
  }
});
