import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "navbar",

      filename: "remoteEntry.js",

      exposes: {
        "./Navbar": "./src/App.jsx",
      },

      shared: ["react", "react-dom"],

      dts: false, // IMPORTANT
    }),
  ],

  server: {
    port: 5174,
  },

  build: {
    target: "esnext",
  },
});