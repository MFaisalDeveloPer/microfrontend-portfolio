import { motion } from "framer-motion";

function ProjectCard({ project, onSelect }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.02,
        y: -5,
      }}
      transition={{
        duration: 0.4,
      }}
      style={{
        background:
          "linear-gradient(145deg,#0c1d3d,#102852)",
        border:
          "1px solid rgba(0,212,255,0.25)",
        borderRadius: "24px",
        padding: "25px",
        minHeight: "360px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow:
          "0 10px 30px rgba(0,0,0,0.25)",
      }}
    >
      <div>
        <h2
          style={{
            color: "#00d4ff",
            marginBottom: "20px",
            fontSize: "2rem",
            textAlign: "left",
          }}
        >
          {project.title}
        </h2>

        <p
          style={{
            marginBottom: "25px",
            lineHeight: "1.9",
            textAlign: "left",
            color: "#d1d5db",
            fontSize: "1rem",
          }}
        >
          {project.description}
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            marginBottom: "25px",
          }}
        >
          {project.tech.map((item) => (
            <span
              key={item}
              style={{
                background: "#16325f",
                color: "#fff",
                padding: "10px 16px",
                borderRadius: "999px",
                fontSize: "14px",
                border:
                  "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <button
        onClick={() => onSelect(project.title)}
        style={{
          background: "transparent",
          border: "1px solid #00d4ff",
          color: "#00d4ff",
          padding: "12px 20px",
          borderRadius: "12px",
          cursor: "pointer",
          width: "170px",
          fontWeight: "600",
          fontSize: "15px",
          transition: "0.3s",
        }}
      >
        View Details
      </button>
    </motion.div>
  );
}

export default ProjectCard;