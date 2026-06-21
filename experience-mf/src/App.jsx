import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
function App() {
  const theme = useTheme();
  const experiences = [
    {
      role: "Senior Software Engineer",
      company: "Ontime Global Solutions",
      period: "Aug 2025 - Present",
      client: "Verizon Communications",
      skills: [
        "React",
        "Redux Toolkit",
        "Material UI",
        "Node.js",
        "Microservices",
        "Azure DevOps",
      ],
    },

    {
      role: "Senior Software Engineer",
      company: "LearningMate",
      period: "Feb 2023 - May 2025",
      client: "Education Domain",
      skills: [
        "React",
        "Micro Frontends",
        ".NET Core",
        "SQL Server",
        "Redux Toolkit",
      ],
    },

    {
      role: "Software Engineer",
      company: "DreamCare Developers",
      period: "Jan 2019 - Dec 2022",
      client: "Banking & Healthcare",
      skills: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "JavaScript",
      ],
    },
  ];

  return (
    <section
      style={{
        background: theme.palette.background.default,
        color: theme.palette.text.primary,
        minHeight: "100vh",
        padding: "60px 30px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            color: theme.palette.primary.main,
            marginBottom: "60px",
            fontSize: "3rem",
            textAlign: "center",
          }}
        >
          Professional Experience
        </motion.h1>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}
            style={{
              position: "relative",
              marginBottom: "40px",
              paddingLeft: "40px",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "0",
                top: "10px",
                width: "18px",
                height: "18px",
                borderRadius: "50%",
                background: theme.palette.primary.main,
              }}
            />

            <div
              style={{
                background:
                  theme.palette.background.paper,
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: "20px",
                padding: "25px",
              }}
            >
              <h2
                style={{
                  color: theme.palette.primary.main,
                  marginBottom: "10px",
                }}
              >
                {exp.role}
              </h2>

              <h3
                style={{
                  marginBottom: "10px",
                }}
              >
                {exp.company}
              </h3>

              <p>
                <strong>Duration:</strong>{" "}
                {exp.period}
              </p>

              <p>
                <strong>Client/Domain:</strong>{" "}
                {exp.client}
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  marginTop: "20px",
                }}
              >
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      background: theme.palette.primary.main,
                      padding: "8px 14px",
                      borderRadius: "999px",
                      fontSize: "14px",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default App;