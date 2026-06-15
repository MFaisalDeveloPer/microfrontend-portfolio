import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "experience",

      filename: "remoteEntry.js",

      exposes: {
        "./Experience": "./src/App.jsx",
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
    port: 5178,
  },

  build: {
    target: "esnext",
  },
});