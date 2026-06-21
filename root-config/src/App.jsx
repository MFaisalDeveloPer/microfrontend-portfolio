import { Box } from "@mui/material";
import { useEffect, useState } from "react";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import MainContent from "./components/MainContent";
import SplashScreen from "./components/SplashScreen";
import GoogleLoginScreen from "./components/GoogleLoginScreen";

function App() {
  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");

    return savedUser
      ? JSON.parse(savedUser)
      : null;
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  if (!user) {
    return (
      <GoogleLoginScreen
        onLogin={(userData) => {
          console.log("Logged User:", userData);

          localStorage.setItem(
            "user",
            JSON.stringify(userData)
          );

          setUser(userData);
        }}
      />
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        bgcolor: "background.default",
      }}
    >
      <Sidebar />

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Topbar user={user} />

        <Box
          sx={{
            flex: 1,
            overflow: "auto",
            p: 4,
            bgcolor: "background.default",
            color: "text.primary",
          }}
        >
          <MainContent user={user} />
        </Box>
      </Box>
    </Box>
  );
}

export default App;