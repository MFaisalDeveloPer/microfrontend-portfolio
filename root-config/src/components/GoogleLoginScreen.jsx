import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

function GoogleLoginScreen({ onLogin }) {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < 768
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        overflowY: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg,#020617,#081229,#0f172a)",
        padding: isMobile ? "15px" : "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",

          display: "grid",

          gridTemplateColumns: isMobile
            ? "1fr"
            : "1fr 1fr",

          background: "rgba(255,255,255,0.03)",

          border:
            "1px solid rgba(255,255,255,0.08)",

          borderRadius: "24px",

          backdropFilter: "blur(12px)",

          overflow: "hidden",

          boxShadow:
            "0 0 60px rgba(0,0,0,0.4)",
        }}
      >
        {/* LEFT SECTION */}

        <div
          style={{
            padding: isMobile
              ? "25px"
              : "40px",

            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            color: "white",
          }}
        >
          <div
            style={{
              width: isMobile
                ? "80px"
                : "120px",

              height: isMobile
                ? "80px"
                : "120px",

              borderRadius: "50%",

              border:
                "3px solid #3b82f6",

              display: "flex",

              alignItems: "center",

              justifyContent: "center",

              fontSize: isMobile
                ? "2rem"
                : "3rem",

              fontWeight: "bold",

              marginBottom: "30px",
            }}
          >
            MF
          </div>

          <h3
            style={{
              margin: 0,
              color: "#94a3b8",

              fontSize: isMobile
                ? "1.5rem"
                : "2rem",
            }}
          >
            Hi, I'm
          </h3>

          <h1
            style={{
              marginTop: "10px",

              marginBottom: "10px",

              fontSize: isMobile
                ? "2.8rem"
                : "3.5rem",

              fontWeight: 700,

              lineHeight: 1.2,

              background:
                "linear-gradient(90deg,#3b82f6,#8b5cf6)",

              WebkitBackgroundClip:
                "text",

              WebkitTextFillColor:
                "transparent",
            }}
          >
            Md Faisal
          </h1>

          <h2
            style={{
              color: "#38bdf8",

              marginTop: 0,

              fontWeight: 500,

              fontSize: isMobile
                ? "1.5rem"
                : "2rem",
            }}
          >
            Senior Full Stack Developer
          </h2>

          <p
            style={{
              color: "#cbd5e1",

              lineHeight: "1.8",

              maxWidth: "500px",

              marginTop: "20px",

              fontSize: isMobile
                ? "14px"
                : "16px",
            }}
          >
            Building scalable enterprise
            applications using React,
            Node.js, Microfrontends,
            Azure DevOps, Redux Toolkit
            and modern cloud
            technologies.
          </p>

          <div
            style={{
              display: "flex",

              flexWrap: "wrap",

              gap: "12px",

              marginTop: "30px",
            }}
          >
            <div style={badgeStyle}>
              React.js
            </div>

            <div style={badgeStyle}>
              Node.js
            </div>

            <div style={badgeStyle}>
              Microfrontends
            </div>

            <div style={badgeStyle}>
              Azure DevOps
            </div>

            <div style={badgeStyle}>
              Redux Toolkit
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}

        <div
          style={{
            display: "flex",

            justifyContent: "center",

            alignItems: "center",

            padding: isMobile
              ? "25px"
              : "40px",

            borderLeft: isMobile
              ? "none"
              : "1px solid rgba(255,255,255,0.08)",

            borderTop: isMobile
              ? "1px solid rgba(255,255,255,0.08)"
              : "none",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "420px",
              textAlign: "center",
            }}
          >
            <h1
              style={{
                color: "white",
                marginBottom: "15px",
                fontSize: isMobile
                  ? "2rem"
                  : "2.5rem",
              }}
            >
              Portfolio Access
            </h1>

            <p
              style={{
                color: "#94a3b8",

                marginBottom: "40px",

                lineHeight: "1.8",

                fontSize: isMobile
                  ? "14px"
                  : "16px",
              }}
            >
              Sign in with Google to
              explore projects,
              architecture decisions,
              experience and technical
              skills.
            </p>

            <div
              style={{
                display: "flex",

                justifyContent: "center",

                marginBottom: "25px",
              }}
            >
              <GoogleLogin
                onSuccess={(
                  credentialResponse
                ) => {
                  const user =
                    jwtDecode(
                      credentialResponse.credential
                    );

                  onLogin(user);
                }}
                onError={() => {
                  console.log(
                    "Login Failed"
                  );
                }}
              />
            </div>

            <button
              onClick={() =>
                onLogin({
                  name: "Guest",
                })
              }
              style={{
                width: "100%",

                padding: "15px",

                borderRadius: "12px",

                border:
                  "1px solid rgba(255,255,255,0.15)",

                background:
                  "transparent",

                color: "white",

                fontSize: "16px",

                cursor: "pointer",
              }}
            >
              Skip & Enter Portfolio
            </button>

            <p
              style={{
                color: "#64748b",

                marginTop: "25px",

                fontSize: "14px",
              }}
            >
              Secure Google
              Authentication
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const badgeStyle = {
  padding: "10px 18px",
  borderRadius: "999px",
  border:
    "1px solid rgba(255,255,255,0.1)",
  color: "#e2e8f0",
  background:
    "rgba(255,255,255,0.03)",
  fontSize: "14px",
};

export default GoogleLoginScreen;