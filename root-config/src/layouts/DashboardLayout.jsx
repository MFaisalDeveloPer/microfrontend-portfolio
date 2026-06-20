import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        background: "#0b1220",
        color: "white",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: "260px",
          borderRight: "1px solid #1e293b",
          padding: "20px",
        }}
      >
        <h2
          style={{
            marginBottom: "40px",
          }}
        >
          Developer Control Center
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div>Dashboard</div>
          <div>Skills</div>
          <div>Experience</div>
          <div>Projects</div>
          <div>Architecture</div>
          <div>Contact</div>
        </div>
      </div>

      {/* Main Area */}
      <div
        style={{
          flex: 1,
          overflow: "hidden",
        }}
      >
        {/* Top Bar */}
        <div
          style={{
            height: "70px",
            borderBottom: "1px solid #1e293b",
            display: "flex",
            alignItems: "center",
            padding: "0 24px",
          }}
        >
          <h3>Frontend Engineering Command Center</h3>
        </div>

        {/* Page Content */}
        <div
          style={{
            height: "calc(100vh - 70px)",
            overflow: "auto",
            padding: "24px",
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;