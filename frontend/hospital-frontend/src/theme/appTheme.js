import { createTheme } from "@mui/material/styles";

const appTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0d9488",
      light: "#2dd4bf",
      dark: "#0f766e",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#1e3a5f",
      light: "#334e68",
      dark: "#0f172a",
    },
    background: {
      default: "#ecfdf5",
      paper: "#ffffff",
    },
    text: {
      primary: "#0f172a",
      secondary: "#475569",
    },
    divider: "rgba(15, 23, 42, 0.08)",
  },
  typography: {
    fontFamily:
      '"Plus Jakarta Sans", "Segoe UI", "Roboto", "Helvetica Neue", sans-serif',
    h1: { fontWeight: 700, letterSpacing: "-0.02em" },
    h2: { fontWeight: 700, letterSpacing: "-0.02em" },
    h3: { fontWeight: 700, letterSpacing: "-0.01em" },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    button: { fontWeight: 600, letterSpacing: "0.02em" },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 10,
          paddingInline: 20,
        },
        sizeLarge: {
          padding: "12px 28px",
          fontSize: "1rem",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
});

export default appTheme;
