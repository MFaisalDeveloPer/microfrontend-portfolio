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
          Micro Frontend Architecture
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 4,
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
            mb: 2,
          }}
        >
          ↓
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 3,
            flexWrap: "wrap",
            mb: 4,
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
            mb: 2,
          }}
        >
          ↓
        </Typography>

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
      </Paper>
    </>
  );
}

export default ArchitectureLab;