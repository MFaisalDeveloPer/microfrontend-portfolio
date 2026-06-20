import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

function GoogleLoginScreen({ onLogin }) {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        background: "#0f172a",
      }}
    >
      <h1
        style={{
          color: "white",
          fontSize: "3rem",
        }}
      >
        Welcome
      </h1>

      <p
        style={{
          color: "#cbd5e1",
        }}
      >
        Continue with Google to enter portfolio
      </p>

      <GoogleLogin
        onSuccess={(credentialResponse) => {
          const user = jwtDecode(
            credentialResponse.credential
          );

          console.log(user);

          onLogin(user);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />

      <button
        onClick={() =>
          onLogin({
            name: "Guest",
          })
        }
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Skip & Enter Portfolio
      </button>
    </div>
  );
}

export default GoogleLoginScreen;