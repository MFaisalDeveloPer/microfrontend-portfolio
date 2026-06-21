import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

import MetricCard from "../components/MetricCard";

function Dashboard({ user }) {
  return (
    <>
      <Paper
        sx={{
          p: 4,
          mb: 4,
          borderRadius: 4,
          bgcolor: "background.paper",
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Avatar
            src={user?.picture}
            alt={user?.name}
            sx={{
              width: 80,
              height: 80,
            }}
          />

          <Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
              }}
            >
              Welcome Back 👋
            </Typography>

            <Typography variant="h6">
              {user?.name || "Guest"}
            </Typography>

            <Typography color="text.secondary">
              {user?.email || "Guest User"}
            </Typography>

            <Chip
              label="Available for Opportunities"
              color="success"
              sx={{
                mt: 1,
              }}
            />
          </Box>
        </Box>
      </Paper>

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
            value="5+"
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
          <li>AWS DevOps</li>
          <li>System Design</li>
          <li>AI Engineering</li>
          <li>Node.js</li>
          <li>Microservices</li>
        </ul>
      </Paper>

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
            mb: 4,
            fontWeight: 600,
          }}
        >
          Technical Expertise
        </Typography>

        {[
          {
            skill: "React.js",
            value: 95,
          },
          {
            skill: "Redux Toolkit",
            value: 90,
          },
          {
            skill: "Node.js",
            value: 85,
          },
          {
            skill: "Microfrontends",
            value: 90,
          },
          {
            skill: "AWS DevOps",
            value: 80,
          },
          {
            skill: "SQL Server",
            value: 85,
          },
        ].map((item) => (
          <Box
            key={item.skill}
            sx={{
              mb: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: 1,
              }}
            >
              <Typography>
                {item.skill}
              </Typography>

              <Typography>
                {item.value}%
              </Typography>
            </Box>

            <LinearProgress
              variant="determinate"
              value={item.value}
              sx={{
                height: 10,
                borderRadius: 5,
              }}
            />
          </Box>
        ))}
      </Paper>

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
            mb: 3,
            fontWeight: 600,
          }}
        >
          Achievements
        </Typography>

        <Grid container spacing={2}>
          {[
            "7+ Years Experience",
            "Verizon Enterprise Platform",
            "5+ Enterprise Projects",
            "Microfrontend Architecture",
            "Full Stack Development",
            "AWS DevOps & CI/CD",
          ].map((achievement) => (
            <Grid
              key={achievement}
              size={{ xs: 12, md: 6 }}
            >
              <Paper
                sx={{
                  p: 2,
                  borderRadius: 3,
                  textAlign: "center",
                }}
              >
                🏆 {achievement}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </>
  );
}

export default Dashboard;