/// <reference types="vitest" />
import { defineConfig, UserConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    port: 3000
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./setup-tests.ts"]
  }
}) satisfies UserConfig;
