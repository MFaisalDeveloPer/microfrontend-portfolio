import { Paper, Typography, Button, Stack } from "@mui/material";

function Contact() {
  return (
    <>
      <Typography
        variant="h2"
        sx={{
          mb: 4,
          fontWeight: 700,
        }}
      >
        Contact
      </Typography>

      <Paper
        sx={{
          p: 4,
          borderRadius: 4,
        }}
      >
        <Stack spacing={3}>
          <Button
            variant="contained"
            onClick={() =>
              window.open(
                "https://mail.google.com/mail/?view=cm&fs=1&to=mdfaisal8310@gmail.com",
                "_blank",
              )
            }
          >
            Email
          </Button>

          <Button
            variant="contained"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/m-a-faisal-63404425b",
                "_blank",
              )
            }
          >
            LinkedIn
          </Button>

          <Button
            variant="contained"
            onClick={() =>
              window.open("https://github.com/MFaisalDeveloPer", "_blank")
            }
          >
            GitHub
          </Button>

          <Button
            variant="contained"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/resume.pdf";
              link.download = "MD_Faisal_Resume.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            Download Resume
          </Button>
        </Stack>
      </Paper>
    </>
  );
}

export default Contact;
