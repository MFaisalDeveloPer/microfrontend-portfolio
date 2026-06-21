import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig({
  plugins: [
    react(),

    federation({
      name: "shell",

      remotes: {
        navbar: {
          type: "module",
          name: "navbar",
          entry: "http://localhost:5174/remoteEntry.js",
        },

        hero: {
          type: "module",
          name: "hero",
          entry: "http://localhost:5175/remoteEntry.js",
        },

        projects: {
          type: "module",
          name: "projects",
          entry: "http://localhost:5177/remoteEntry.js",
        },

        skills: {
          type: "module",
          name: "skills",
          entry: "http://localhost:5179/remoteEntry.js",
        },

        experience: {
          type: "module",
          name: "experience",
          entry: "http://localhost:5178/remoteEntry.js",
        },
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

  build: {
    target: "esnext",
  },
});