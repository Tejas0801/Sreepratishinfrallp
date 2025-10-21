// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // 👇 VERY IMPORTANT: This must match your repo name on GitHub
  base: "/Sreepratishinfrallp/",

  server: {
    host: "0.0.0.0",
    port: 8080,
  },

  plugins: [
    react(),
    mode === "development" && componentTagger?.(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
