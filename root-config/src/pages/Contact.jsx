import {
  Paper,
  Typography,
  Button,
  Stack,
  Avatar,
  Chip,
  Box,
} from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import DownloadIcon from "@mui/icons-material/Download";

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
        Contact & Profile
      </Typography>

      <Paper
        sx={{
          p: 4,
          borderRadius: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 3,
            mb: 4,
          }}
        >
          <Avatar
            src="https://github.com/MFaisalDeveloPer.png"
            alt="Md Faisal"
            sx={{
              width: 90,
              height: 90,
            }}
          />

          <Box>
            <Typography variant="h4">
              Md Faisal
            </Typography>

            <Typography
              color="text.secondary"
            >
              Senior Software Engineer
              <Typography color="text.secondary">
                Hyderabad, India
              </Typography>

              <Typography color="text.secondary">
                7+ Years Experience | MERN Stack | Microfrontends
              </Typography>
            </Typography>

            <Typography
              color="text.secondary"
            >
              React • Node.js • Microfrontends
            </Typography>

            <Chip
              label="Available for Opportunities"
              color="success"
              sx={{ mt: 1 }}
            />
          </Box>
        </Box>

        <Typography
          variant="h5"
          sx={{ mb: 2 }}
        >
          Professional Summary
        </Typography>

        <Typography
          color="text.secondary"
          sx={{
            mb: 4,
            lineHeight: 1.8,
          }}
        >
          Full Stack Developer with 7+ years of
          experience building enterprise
          applications using React.js, Node.js,
          Redux Toolkit, Micro Frontends,
          Microservices, SQL Server and AWS
          DevOps. Experienced in designing
          scalable frontend architectures and
          delivering business-critical solutions.
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
            mb: 4,
          }}
        >
          <Chip
            label="7+ Years Experience"
            color="primary"
          />

          <Chip
            label="5+ Enterprise Projects"
            color="primary"
          />

          <Chip
            label="React & Node.js"
            color="primary"
          />

          <Chip
            label="Microfrontends"
            color="primary"
          />
        </Box>
        <Stack spacing={2}>
          <Button
            startIcon={<EmailIcon />}
            variant="contained"
            onClick={() =>
              window.open(
                "https://mail.google.com/mail/?view=cm&fs=1&to=mdfaisal8310@gmail.com",
                "_blank"
              )
            }
          >
            Email Me
          </Button>

          <Button
            startIcon={<LinkedInIcon />}
            variant="contained"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/m-a-faisal-63404425b",
                "_blank"
              )
            }
          >
            LinkedIn Profile
          </Button>

          <Button
            startIcon={<GitHubIcon />}
            variant="contained"
            onClick={() =>
              window.open(
                "https://github.com/MFaisalDeveloPer",
                "_blank"
              )
            }
          >
            GitHub Profile
          </Button>

          <Button
            startIcon={<DownloadIcon />}
            variant="contained"
            onClick={() => {
              const link =
                document.createElement("a");
              link.href = "/resume.pdf";
              link.download =
                "MD_Faisal_Resume.pdf";
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