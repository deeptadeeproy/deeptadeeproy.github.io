import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    assetsDir: "src/assets", // Ensure assets are copied to a directory named 'assets'
    rollupOptions: {
      output: {
        manualChunks: undefined, // Disable manual chunks
      },
    },
  },
  base: "/",
});
