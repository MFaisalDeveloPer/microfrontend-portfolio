function InternetBankingDetails({ onBack }) {
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
        Internet Banking System
      </h1>

      <h2>Project Overview</h2>

      <p>
        Secure digital banking platform developed
        using the MERN stack to support customer
        banking operations, fund transfers,
        account management and transaction
        tracking through a responsive web
        application.
      </p>

      <h2>Technology Stack</h2>

      <ul>
        <li>MongoDB</li>
        <li>Express.js</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Redux Toolkit</li>
        <li>JWT Authentication</li>
        <li>REST APIs</li>
      </ul>

      <h2>Modules</h2>

      <ul>
        <li>Account Management</li>
        <li>Fund Transfer</li>
        <li>Transaction History</li>
        <li>Beneficiary Management</li>
        <li>Profile Management</li>
        <li>Notifications</li>
        <li>Dashboard</li>
      </ul>

      <h2>Responsibilities</h2>

      <ul>
        <li>Frontend Development</li>
        <li>Backend API Development</li>
        <li>Database Design</li>
        <li>REST API Integration</li>
        <li>Authentication & Authorization</li>
        <li>Reusable Component Development</li>
        <li>Performance Optimization</li>
      </ul>

      <h2>Key Features</h2>

      <ul>
        <li>Secure Login & Registration</li>
        <li>Account Summary Dashboard</li>
        <li>Money Transfer</li>
        <li>Transaction Reports</li>
        <li>Beneficiary Management</li>
        <li>Email Notifications</li>
      </ul>
    </section>
  );
}

export default InternetBankingDetails;