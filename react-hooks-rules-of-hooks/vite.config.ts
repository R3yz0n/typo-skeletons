import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
//@ts-ignore
import eslint from "vite-plugin-eslint";

// The Eslint plugin will automatically lint your code when you run the dev server or build your project.
export default defineConfig({
  plugins: [react(), eslint()],
});
