import { motion } from "framer-motion";

function App() {
  const skills = [
    {
      category: "Frontend",
      items: [
        "React",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "Redux Toolkit",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
      ],
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Microservices",
      ],
    },
    {
      category: "Cloud & DevOps",
      items: [
        "Azure",
        "Azure DevOps",
        "GitHub Actions",
        "CI/CD",
        "Docker",
      ],
    },
    {
      category: "Architecture",
      items: [
        "Micro Frontends",
        "Module Federation",
        "System Design",
        "Design Patterns",
      ],
    },
  ];

  return (
    <section
      style={{
        background: "#041128",
        minHeight: "100vh",
        padding: "100px 20px",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "auto",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: "center",
            fontSize: "clamp(2.5rem,5vw,4.5rem)",
            color: "#00d4ff",
            marginBottom: "70px",
          }}
        >
          Technical Skills
        </motion.h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: "30px",
          }}
        >
          {skills.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                scale: 1.03,
                y: -10,
              }}
              style={{
                background:
                  "linear-gradient(145deg,#0c1d3d,#102852)",
                border: "1px solid rgba(0,212,255,0.3)",
                borderRadius: "20px",
                padding: "30px",
                boxShadow:
                  "0 0 25px rgba(0,212,255,0.08)",
              }}
            >
              <h2
                style={{
                  color: "#00d4ff",
                  marginBottom: "25px",
                  fontSize: "1.8rem",
                }}
              >
                {group.category}
              </h2>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "12px",
                }}
              >
                {group.items.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{
                      scale: 1.1,
                    }}
                    style={{
                      background: "#16325f",
                      padding: "10px 16px",
                      borderRadius: "999px",
                      fontSize: "14px",
                      cursor: "pointer",
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default App;