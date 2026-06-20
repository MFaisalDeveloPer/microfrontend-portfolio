import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import { toggleTheme } from "../store/slices/themeSlices";

function Topbar() {
  const dispatch = useDispatch();

  const darkMode = useSelector(
    (state) => state.theme.darkMode
  );

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: "background.paper",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
          }}
        >
          Frontend Engineering Command Center
        </Typography>

        <IconButton
          color="inherit"
          onClick={() => dispatch(toggleTheme())}
        >
          {darkMode ? (
            <LightModeIcon />
          ) : (
            <DarkModeIcon />
          )}
        </IconButton>

        <IconButton color="inherit">
          <GitHubIcon />
        </IconButton>

        <IconButton color="inherit">
          <LinkedInIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Topbar;