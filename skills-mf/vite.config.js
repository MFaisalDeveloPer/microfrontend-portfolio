import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig({
  plugins: [
    react(),

    federation({
      name: "skills",

      filename: "remoteEntry.js",

      exposes: {
        "./Skills": "./src/App.jsx",
      },

      shared: {
        react: {
          singleton: true,
          requiredVersion: false,
        },

        "react-dom": {
          singleton: true,
          requiredVersion: false,
        },

        "@mui/material": {
          singleton: true,
          requiredVersion: false,
        },

        "@emotion/react": {
          singleton: true,
          requiredVersion: false,
        },

        "@emotion/styled": {
          singleton: true,
          requiredVersion: false,
        },
      },

      dts: false,
    }),
  ],

  server: {
    port: 5179,
  },

  build: {
    target: "esnext",
  },
});