import { fileURLToPath, URL } from "node:url";

import vue from "@vitejs/plugin-vue";
import autoprefixer from "autoprefixer";

import tailwind from "tailwindcss";
import { defineConfig, loadEnv } from "vite";

// https://vite.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return defineConfig({
    css: {
      postcss: {
        plugins: [tailwind(), autoprefixer()],
      },
    },
    define: {
      "process.env": env,
    },
    plugins: [vue()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  });
};
