import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

const host = process.env.TAURI_DEV_HOST;
const rootDir = resolve(__dirname);

export default defineConfig(async () => ({
  plugins: [react()],

  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  //
  // 1. prevent vite from obscuring rust errors
  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
    host: host || false,
    hmr: host
      ? {
          protocol: "ws",
          host,
          port: 1421,
        }
      : undefined,
    watch: {
      // 3. tell vite to ignore watching `src-tauri`
      ignored: ["**/src-tauri/**"],
    },
  },
  resolve: {
    alias: {
      "@images": resolve(__dirname, "src/assets/Images"),
      "@svg": resolve(__dirname, "src/assets/svg"),
      "@hooks": resolve(__dirname, "src/hooks"),
      "@FormFields": resolve(__dirname, "src/core/components/FormFields"),
      "@coreComps": resolve(__dirname, "src/core/components"),
      "@configs": resolve(__dirname, "src/core/configs"),
      "@providers": resolve(__dirname, "src/core/providers"),
      "@services": resolve(__dirname, "src/core/services"),
      "@typesDef": resolve(__dirname, "src/core/types"),
      "@core": resolve(__dirname, "src/core"),
      "@utils": resolve(__dirname, "src/utils"),
    },
  },
}));
