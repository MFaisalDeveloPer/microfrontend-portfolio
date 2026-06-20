import AppButton from "./components/AppButton";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0b1220",
      }}
    >
      <AppButton>
        Shared UI Working
      </AppButton>
    </div>
  );
}

export default App;