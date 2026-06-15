import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "projects",

      filename: "remoteEntry.js",

      exposes: {
        "./Projects": "./src/App.jsx",
      },

      shared: {
        react: {
          singleton: true,
        },
        "react-dom": {
          singleton: true,
        },
      },

      dts: false,
    }),
  ],

  server: {
    port: 5177,
  },

  build: {
    target: "esnext",
  },
});