function App() {
  const experiences = [
    {
      role: "Senior Software Engineer / Offshore Lead",
      company: "Ontime Global Solutions",
      period: "Aug 2025 - Present",
      client: "Verizon Communications",
    },
    {
      role: "Senior Software Engineer",
      company: "LearningMate",
      period: "Feb 2023 - May 2025",
      client: "Education Domain",
    },
    {
      role: "Software Engineer",
      company: "DreamCare Developers",
      period: "Jan 2019 - Dec 2022",
      client: "Banking & Healthcare",
    },
  ];

  return (
    <section
      style={{
        background: "#010824",
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
        Professional Experience
      </h1>

      {experiences.map((exp, index) => (
        <div
          key={index}
          style={{
            borderLeft: "4px solid #00d4ff",
            marginBottom: "30px",
            paddingLeft: "20px",
          }}
        >
          <h2>{exp.role}</h2>
          <h3>{exp.company}</h3>
          <p>{exp.period}</p>
          <p>{exp.client}</p>
        </div>
      ))}
    </section>
  );
}

export default App;