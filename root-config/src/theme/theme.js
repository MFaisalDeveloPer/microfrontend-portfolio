import { createTheme } from "@mui/material/styles";
export const darkTheme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#3b82f6",
    },

    background: {
      default: "#0f172a",
      paper: "#1e293b",
    },

    text: {
      primary: "#ffffff",
      secondary: "#cbd5e1",
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#2563eb",
    },

    background: {
      default: "#ffffff",
      paper: "#f8fafc",
    },

    text: {
      primary: "#111827",
      secondary: "#475569",
    },
  },
});