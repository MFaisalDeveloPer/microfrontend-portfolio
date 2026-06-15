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
  experience: {
  type: "module",
  name: "experience",
  entry: "http://localhost:5178/remoteEntry.js",
},
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

  build: {
    target: "esnext",
  },
});