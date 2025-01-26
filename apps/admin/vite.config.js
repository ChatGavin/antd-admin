import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // 如果是部署到github pages，则需要使用仓库名作为基础路径 /mono-flow/
});
