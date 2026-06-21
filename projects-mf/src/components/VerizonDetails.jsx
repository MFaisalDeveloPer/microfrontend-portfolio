function VerizonDetails({ onBack }) {
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
          marginBottom: "30px",
        }}
      >
        Verizon Enterprise Service Provisioning Platform
      </h1>

      <h2>Project Overview</h2>

      <p>
        Enterprise Order Management and Service
        Provisioning platform used internally by
        Verizon operations teams to manage
        enterprise network services through
        request creation, approvals,
        provisioning, activation and reporting.
      </p>

      <h2>Architecture</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        <div>React</div>
        <div>→</div>
        <div>Redux Toolkit</div>
        <div>→</div>
        <div>REST APIs</div>
        <div>→</div>
        <div>Node Microservices</div>
        <div>→</div>
        <div>SQL Server</div>
      </div>

      <h2 style={{ marginTop: "40px" }}>
        Workflow Lifecycle
      </h2>

      <div
        style={{
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
        }}
      >
        <span>Draft</span>
        <span>→</span>
        <span>Submitted</span>
        <span>→</span>
        <span>Validation</span>
        <span>→</span>
        <span>Approval</span>
        <span>→</span>
        <span>Provisioning</span>
        <span>→</span>
        <span>Activation</span>
        <span>→</span>
        <span>Completed</span>
      </div>

      <h2 style={{ marginTop: "40px" }}>
        Responsibilities
      </h2>

      <ul>
        <li>Dynamic Form Engine</li>
        <li>Workflow Management</li>
        <li>Redux State Management</li>
        <li>REST API Integrations</li>
        <li>RBAC Implementation</li>
        <li>Performance Optimization</li>
        <li>Reusable Components</li>
      </ul>
    </section>
  );
}

export default VerizonDetails;