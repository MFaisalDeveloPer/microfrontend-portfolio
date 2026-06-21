import { useState } from "react";

import { projects } from "./data/ProjectData.jsx";
import ProjectCard from "./components/ProjectCard";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  const [selectedProject, setSelectedProject] =
    useState("");

  if (selectedProject) {
    return (
      <ProjectDetails
        selectedProject={selectedProject}
        onBack={() =>
          setSelectedProject("")
        }
      />
    );
  }

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
            fontSize:
              "clamp(2.5rem,5vw,4.5rem)",
            marginBottom: "60px",
          }}
        >
          Featured Projects
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(500px,1fr))",
            gap: "35px",
          }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default App;