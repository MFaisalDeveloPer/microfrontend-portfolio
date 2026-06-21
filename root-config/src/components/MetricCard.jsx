import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

function MetricCard({ title, value }) {
  const [count, setCount] = useState(0);

  const numericValue = parseInt(value);
  const isNumeric =
    !isNaN(numericValue);

  useEffect(() => {
    if (!isNumeric) return;

    let start = 0;

    const timer = setInterval(() => {
      start += 1;

      if (start >= numericValue) {
        start = numericValue;
        clearInterval(timer);
      }

      setCount(start);
    }, 80);

    return () => clearInterval(timer);
  }, [numericValue, isNumeric]);

  return (
    <Card
      sx={{
        bgcolor: "background.paper",
        borderRadius: 4,
        height: "100%",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
        },
      }}
    >
      <CardContent>
        <Typography
          variant="h3"
          color="primary"
          fontWeight={700}
        >
          {isNumeric
            ? `${count}${
                value.includes("+")
                  ? "+"
                  : ""
              }`
            : value}
        </Typography>

        <Typography variant="body1">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MetricCard;