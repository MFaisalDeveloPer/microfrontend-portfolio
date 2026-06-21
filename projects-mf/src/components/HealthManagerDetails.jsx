function HealthManagerDetails({ onBack }) {
  return (
    <section
      style={{
        background: "#041128",
        minHeight: "100vh",
        padding: "60px",
        color: "white",
      }}
    >
      <button
        onClick={onBack}
        style={{
          background: "transparent",
          border: "1px solid #00d4ff",
          color: "#00d4ff",
          padding: "10px 20px",
          borderRadius: "10px",
          cursor: "pointer",
          marginBottom: "30px",
        }}
      >
        ← Back to Projects
      </button>

      <h1
        style={{
          color: "#00d4ff",
        }}
      >
        Health Manager Platform
      </h1>

      <h2>Technology Stack</h2>

      <ul>
        <li>MongoDB</li>
        <li>Express.js</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Redux Toolkit</li>
        <li>REST APIs</li>
      </ul>

      <h2>Modules</h2>

      <ul>
        <li>Patient Management</li>
        <li>Doctor Dashboard</li>
        <li>Appointment Scheduling</li>
        <li>Health Records</li>
        <li>Analytics Dashboard</li>
        <li>Reports</li>
        <li>Notifications</li>
      </ul>

      <h2>Responsibilities</h2>

      <ul>
        <li>Frontend Development</li>
        <li>Backend API Development</li>
        <li>MongoDB Design</li>
        <li>Reporting & Analytics</li>
        <li>Performance Optimization</li>
      </ul>
    </section>
  );
}

export default HealthManagerDetails;