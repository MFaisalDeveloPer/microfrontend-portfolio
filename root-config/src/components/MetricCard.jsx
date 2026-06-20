import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";

function MetricCard({ title, value }) {
  return (
    <Card
      sx={{
        bgcolor: "background.paper",
        borderRadius: 4,
        height: "100%",
      }}
    >
      <CardContent>
        <Typography
          variant="h3"
          color="primary"
          fontWeight={700}
        >
          {value}
        </Typography>

        <Typography variant="body1">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MetricCard;