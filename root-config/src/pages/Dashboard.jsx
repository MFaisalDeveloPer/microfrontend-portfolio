import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import MetricCard from "../components/MetricCard";

function Dashboard() {
  return (
    <>
      <Typography
        variant="h2"
        sx={{
          mb: 4,
          fontWeight: 700,
        }}
      >
        Developer Overview
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <MetricCard
            title="Years Experience"
            value="7+"
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <MetricCard
            title="Enterprise Projects"
            value="20+"
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <MetricCard
            title="Technologies"
            value="15+"
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <MetricCard
            title="Microfrontends"
            value="Expert"
          />
        </Grid>
      </Grid>

      <Paper
        sx={{
          mt: 5,
          p: 4,
          borderRadius: 4,
          bgcolor: "background.paper",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            mb: 2,
            fontWeight: 600,
          }}
        >
          Current Focus
        </Typography>

        <ul>
          <li>React 19</li>
          <li>Microfrontend Architecture</li>
          <li>Azure DevOps</li>
          <li>System Design</li>
          <li>AI Engineering</li>
        </ul>
      </Paper>
    </>
  );
}

export default Dashboard;