import { motion } from "framer-motion";

function SplashScreen() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#0f172a",
        color: "#fff",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        style={{
          fontSize: "4rem",
          marginBottom: "10px",
          letterSpacing: "4px",
        }}
      >
        M A FAISAL
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.8,
          duration: 0.8,
        }}
        style={{
          fontWeight: 400,
          marginBottom: "30px",
        }}
      >
        Senior Full Stack Developer
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.5,
          duration: 1,
        }}
      >
        React • Node.js • Microfrontends
      </motion.p>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "300px" }}
        transition={{
          delay: 2,
          duration: 1.5,
        }}
        style={{
          height: "4px",
          background: "#3b82f6",
          marginTop: "40px",
          borderRadius: "10px",
        }}
      />
    </div>
  );
}

export default SplashScreen;