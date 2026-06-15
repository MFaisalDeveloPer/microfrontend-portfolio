function App() {
  const projects = [
    {
      title: "Verizon Micro Frontend Platform",
      desc: "Enterprise-scale Micro Frontend architecture using React, Module Federation and Azure DevOps.",
      stack: ["React", "Module Federation", "Azure DevOps", "CI/CD"],
    },
    {
      title: "Internet Banking System",
      desc: "US Banking Platform with React, Redux and secure transaction workflows.",
      stack: ["React", "Redux", "Material UI", "Axios"],
    },
    {
      title: "Subscription Management System",
      desc: "SaaS product platform for managing products, subscriptions and analytics.",
      stack: ["Next.js", "Redux Toolkit", "AWS S3"],
    },
  ];

  return (
    <section
      style={{
        background: "#020b2d",
        color: "white",
        minHeight: "100vh",
        padding: "80px",
      }}
    >
      <h1
        style={{
          color: "#00d4ff",
          marginBottom: "40px",
        }}
      >
        Featured Projects
      </h1>

      {projects.map((project, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #00d4ff",
            borderRadius: "12px",
            padding: "25px",
            marginBottom: "25px",
          }}
        >
          <h2>{project.title}</h2>

          <p>{project.desc}</p>

          <div>
            {project.stack.map((tech) => (
              <span
                key={tech}
                style={{
                  display: "inline-block",
                  marginRight: "10px",
                  marginTop: "10px",
                  padding: "6px 12px",
                  background: "#003b5c",
                  borderRadius: "20px",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default App;