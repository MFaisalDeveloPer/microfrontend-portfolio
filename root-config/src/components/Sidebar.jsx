import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  IconButton,
  Box,
  useMediaQuery,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PsychologyIcon from "@mui/icons-material/Psychology";
import WorkIcon from "@mui/icons-material/Work";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import MailIcon from "@mui/icons-material/Mail";

import { useDispatch, useSelector } from "react-redux";
import { setActiveView } from "../store/slices/NavigationSlice";

import { useState } from "react";
import { useTheme } from "@mui/material/styles";

const drawerWidth = 280;

const menuItems = [
  { id: "overview", text: "Overview", icon: <DashboardIcon /> },
  { id: "skills", text: "Skills Matrix", icon: <PsychologyIcon /> },
  { id: "experience", text: "Experience", icon: <WorkIcon /> },
  { id: "projects", text: "Projects", icon: <RocketLaunchIcon /> },
  { id: "architecture", text: "Architecture Lab", icon: <AccountTreeIcon /> },
  { id: "contact", text: "Contact", icon: <MailIcon /> },
];

function Sidebar() {
  const dispatch = useDispatch();

  const activeView = useSelector(
    (state) => state.navigation.activeView
  );

  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <>
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: "primary.main",
          }}
        >
          Developer OS
        </Typography>
      </Toolbar>

      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.id}
            onClick={() => {
              dispatch(setActiveView(item.id));
              if (isMobile) setMobileOpen(false);
            }}
            selected={activeView === item.id}
            sx={{
              borderRadius: "12px",
              mx: 1,
              my: 0.5,

              "&.Mui-selected": {
                background: "#1e293b",
                borderLeft: "4px solid #38bdf8",
              },

              "&:hover": {
                background: "#1e293b",
              },
            }}
          >
            <ListItemIcon
              sx={{
                color: "#38bdf8",
              }}
            >
              {item.icon}
            </ListItemIcon>

            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </>
  );

  return (
    <>
      {isMobile && (
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            position: "fixed",
            top: 12,
            left: 12,
            zIndex: 2000,
            bgcolor: "#0f172a",
            color: "#fff",
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? mobileOpen : true}
        onClose={handleDrawerToggle}
        sx={{
          width: drawerWidth,
          flexShrink: 0,

          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            bgcolor: "background.paper",
            color: "text.primary",
            borderRight: "1px solid #1e293b",
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}

export default Sidebar;