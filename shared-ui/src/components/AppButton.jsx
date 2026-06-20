import Button from "@mui/material/Button";

function AppButton({ children, ...props }) {
  return (
    <Button
      variant="contained"
      sx={{
        borderRadius: "12px",
        px: 3,
        py: 1.2,
        textTransform: "none",
        fontWeight: 600,
      }}
      {...props}
    >
      {children}
    </Button>
  );
}

export default AppButton;