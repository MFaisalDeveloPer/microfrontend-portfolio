function MyEdioDetails({ onBack }) {
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
        MyEdio E-Learning Platform
      </h1>

      <h2>Role</h2>
      <p>Senior Software Engineer</p>

      <h2>Duration</h2>
      <p>February 2023 - May 2025</p>

      <h2>Technology Stack</h2>

      <ul>
        <li>React.js</li>
        <li>Redux Toolkit</li>
        <li>.NET Core Microservices</li>
        <li>Micro Frontends</li>
        <li>SQL Server</li>
        <li>Redis</li>
        <li>REST APIs</li>
        <li>Azure DevOps</li>
      </ul>

      <h2>Modules</h2>

      <ul>
        <li>Analytics Dashboard</li>
        <li>Assessments</li>
        <li>Course Management</li>
        <li>Live Chat</li>
        <li>Profile Management</li>
        <li>Online / Offline Presence</li>
      </ul>

      <h2>Responsibilities</h2>

      <ul>
        <li>Reusable Components</li>
        <li>API Integrations</li>
        <li>Redux State Management</li>
        <li>Micro Frontend Development</li>
        <li>Performance Optimization</li>
      </ul>
    </section>
  );
}

export default MyEdioDetails;