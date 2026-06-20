import { motion } from "framer-motion";

function App() {
  const projects = [
    {
      title: "Verizon Telecommunications Platform",
      description:
        "Enterprise-scale telecommunications platform built using React, TypeScript, Micro Frontends and Microservices Architecture. Developed reusable UI modules, integrated APIs and participated in system design and CI/CD delivery.",
      tech: [
        "React",
        "TypeScript",
        "Micro Frontends",
        "Redux Toolkit",
        "Azure DevOps",
        "CI/CD",
      ],
    },

    {
      title: "MyEdio E-Learning Platform",
      description:
        "Modern e-learning platform developed at LearningMate using React frontend and .NET Core Microservices backend. Built analytics modules, reusable components and integrated enterprise APIs.",
      tech: ["React", "Redux", ".NET Core", "SQL Server", "Redis", "REST APIs"],
    },

    {
      title: "Internet Banking System",
      description:
        "Secure banking application focused on account management, transactions and customer operations. Implemented responsive UI, role-based features and API integrations.",
      tech: ["React", "Redux", "JavaScript", "REST APIs", "Material UI"],
    },

    {
      title: "Health Manager",
      description:
        "Healthcare management platform supporting patient workflows, reporting and operational dashboards. Developed scalable frontend modules and reusable components.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Dashboard"],
    },
  ];

  return (
    <section
      style={{
        background: "#041128",
        minHeight: "100vh",
        padding: "80px 20px",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "auto",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#00d4ff",
            fontSize: "clamp(2.5rem,5vw,4.5rem)",
            marginBottom: "60px",
          }}
        >
          Featured Projects
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(400px,1fr))",
            gap: "30px",
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                scale: 1.03,
              }}
              style={{
                background: "linear-gradient(145deg,#0c1d3d,#102852)",
                border: "1px solid rgba(0,212,255,0.3)",
                borderRadius: "20px",
                padding: "30px",
              }}
            >
              <h2
                style={{
                  color: "#00d4ff",
                  marginBottom: "15px",
                }}
              >
                {project.title}
              </h2>

              <p
                style={{
                  marginBottom: "20px",
                  lineHeight: "1.6",
                }}
              >
                {project.description}
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  marginBottom: "25px",
                }}
              >
                {project.tech.map((item) => (
                  <span
                    key={item}
                    style={{
                      background: "#16325f",
                      padding: "8px 14px",
                      borderRadius: "999px",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "15px",
                }}
              >
                <div
                  style={{
                    color: "#00d4ff",
                    fontWeight: "bold",
                  }}
                >
                  Enterprise Project
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default App;
