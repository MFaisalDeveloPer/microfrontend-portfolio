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
          entry:
            "https://microfrontend-portfolio-3jzh-e5jae7z7e-mdfaisal.vercel.app/remoteEntry.js",
        },

        hero: {
          type: "module",
          name: "hero",
          entry:
            "https://microfrontend-portfolio-by2i.vercel.app/remoteEntry.js",
        },

        projects: {
          type: "module",
          name: "projects",
          entry:
            "https://microfrontend-portfolio-d2p5.vercel.app/remoteEntry.js",
        },

        skills: {
          type: "module",
          name: "skills",
          entry:
            "https://microfrontend-portfolio-oz6a.vercel.app/remoteEntry.js",
        },

        experience: {
          type: "module",
          name: "experience",
          entry:
            "https://microfrontend-portfolio-ql3h.vercel.app/remoteEntry.js",
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
      },

      dts: false,
    }),
  ],

  build: {
    target: "esnext",
  },
});