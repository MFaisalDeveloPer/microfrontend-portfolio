import {
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

const architecture = [
  {
    title: "Root Config",
    description:
      "Host application responsible for routing, shared state and module orchestration.",
  },
  {
    title: "Navbar MF",
    description:
      "Shared navigation microfrontend consumed across modules.",
  },
  {
    title: "Skills MF",
    description:
      "Technical skills dashboard built using React and Module Federation.",
  },
  {
    title: "Experience MF",
    description:
      "Professional experience timeline and career highlights.",
  },
  {
    title: "Projects MF",
    description:
      "Portfolio projects and enterprise application showcase.",
  },
  {
    title: "Shared UI",
    description:
      "Material UI theme engine, reusable components and design system.",
  },
  {
    title: "Redux Store",
    description:
      "Global state management shared across microfrontends.",
  },
  {
    title: "Module Federation",
    description:
      "Runtime integration of independently deployed React applications.",
  },
];

function ArchitectureLab() {
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
          p: 4,
          borderRadius: 4,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            mb: 4,
            color: "#38bdf8",
            fontWeight: 700,
          }}
        >
          Microfrontend Portfolio Architecture
        </Typography>

        <Grid container spacing={3}>
          {architecture.map((item) => (
            <Grid item xs={12} md={6} lg={3} key={item.title}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 3,
                  background: "#111827",
                  color: "#fff",
                  border: "1px solid #1e293b",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#38bdf8",
                      fontWeight: 700,
                      mb: 2,
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography variant="body2">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </>
  );
}

export default ArchitectureLab;