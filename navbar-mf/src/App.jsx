function App() {
  return (
    <nav
      style={{
        background: "#071226",
        color: "white",
        padding: "20px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>Md Faisal</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <span>Home</span>
        <span>Projects</span>
        <span>Experience</span>
        <span>Contact</span>
      </div>
    </nav>
  );
}

export default App;