import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector } from "react-redux";

import { darkTheme, lightTheme } from "./theme";

function ThemeWrapper({ children }) {
  const darkMode = useSelector(
    (state) => state.theme.darkMode
  );

  return (
    <ThemeProvider
      theme={darkMode ? darkTheme : lightTheme}
    >
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default ThemeWrapper;