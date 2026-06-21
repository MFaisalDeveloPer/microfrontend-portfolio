import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Box,
  Button,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import LogoutIcon from "@mui/icons-material/Logout";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import { useTheme } from "@mui/material/styles";

import { toggleTheme } from "../store/slices/themeSlices";

function Topbar({ user }) {
  const dispatch = useDispatch();
  const theme = useTheme();

  const darkMode = useSelector(
    (state) => state.theme.darkMode
  );

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

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
            color: "text.primary",
            fontWeight: 600,
          }}
        >
          Frontend Engineering Command Center
        </Typography>

        <IconButton
          onClick={() => dispatch(toggleTheme())}
          sx={{
            color: "text.primary",
          }}
        >
          {darkMode ? (
            <LightModeIcon />
          ) : (
            <DarkModeIcon />
          )}
        </IconButton>

        <IconButton
          sx={{
            color: "text.primary",
          }}
          onClick={() =>
            window.open(
              "https://github.com/MFaisalDeveloPer",
              "_blank"
            )
          }
        >
          <GitHubIcon />
        </IconButton>

        <IconButton
          sx={{
            color: "text.primary",
          }}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/m-a-faisal-63404425b",
              "_blank"
            )
          }
        >
          <LinkedInIcon />
        </IconButton>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            ml: 3,
          }}
        >
          <Avatar
            src={user?.picture}
            alt={user?.name}
            sx={{
              width: 42,
              height: 42,
            }}
          />

          <Typography
            variant="body1"
            sx={{
              color: "text.primary",
              fontWeight: 600,
            }}
          >
            {user?.name}
          </Typography>

          <Button
            startIcon={<LogoutIcon />}
            onClick={handleLogout}
            sx={{
              color: "primary.main",
              fontWeight: 600,
              textTransform: "uppercase",
            }}
          >
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Topbar;