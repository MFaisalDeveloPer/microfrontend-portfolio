import {
  Paper,
  Typography,
  Box,
} from "@mui/material";

function ArchitectureLab() {
  const nodeStyle = {
    background: "#0f172a",
    border: "1px solid #00d4ff",
    borderRadius: "16px",
    padding: "20px",
    textAlign: "center",
    minWidth: "180px",
    color: "white",
    fontWeight: "600",
    boxShadow:
      "0 8px 20px rgba(0,0,0,0.25)",
  };

  return (
    <>
      <Typography
        variant="h2"
        sx={{
          mb: 4,
          fontWeight: 700,
        }}
      >
        Architecture Lab
      </Typography>

      <Paper
        sx={{
          p: 5,
          borderRadius: 4,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            mb: 5,
            color: "#38bdf8",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          Enterprise Microfrontend Architecture
        </Typography>

        {/* Root Config */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box sx={nodeStyle}>
            Root Config
          </Box>
        </Box>

        <Typography
          align="center"
          sx={{
            fontSize: "2rem",
            my: 2,
          }}
        >
          ↓
        </Typography>

        {/* Microfrontends */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 3,
            flexWrap: "wrap",
          }}
        >
          <Box sx={nodeStyle}>
            Navbar MF
          </Box>

          <Box sx={nodeStyle}>
            Skills MF
          </Box>

          <Box sx={nodeStyle}>
            Experience MF
          </Box>

          <Box sx={nodeStyle}>
            Projects MF
          </Box>
        </Box>

        <Typography
          align="center"
          sx={{
            fontSize: "2rem",
            my: 2,
          }}
        >
          ↓
        </Typography>

        {/* Projects */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 3,
            flexWrap: "wrap",
          }}
        >
          <Box sx={nodeStyle}>
            Verizon
          </Box>

          <Box sx={nodeStyle}>
            MyEdio
          </Box>

          <Box sx={nodeStyle}>
            Banking
          </Box>

          <Box sx={nodeStyle}>
            Health Manager
          </Box>
        </Box>

        <Typography
          align="center"
          sx={{
            fontSize: "2rem",
            my: 2,
          }}
        >
          ↓
        </Typography>

        {/* Shared Services */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 3,
            flexWrap: "wrap",
          }}
        >
          <Box sx={nodeStyle}>
            Redux Store
          </Box>

          <Box sx={nodeStyle}>
            Theme Engine
          </Box>

          <Box sx={nodeStyle}>
            Google OAuth
          </Box>

          <Box sx={nodeStyle}>
            Module Federation
          </Box>
        </Box>

        <Typography
          variant="h5"
          sx={{
            mt: 6,
            mb: 3,
            color: "#38bdf8",
            fontWeight: 700,
          }}
        >
          Architecture Highlights
        </Typography>

        <ul>
          <li>
            Independent Microfrontend Deployment
          </li>
          <li>
            Shared React Runtime
          </li>
          <li>
            Module Federation Integration
          </li>
          <li>
            Global Theme Management
          </li>
          <li>
            Google OAuth Authentication
          </li>
          <li>
            Enterprise Scale Project Showcase
          </li>
        </ul>
      </Paper>
    </>
  );
}

export default ArchitectureLab;