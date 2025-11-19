import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig((conf) => {
  console.log("VITE :", conf);
  const env = loadEnv(conf.mode, process.cwd(), "");

  return {
    plugins: [
      react({
        babel: {
          plugins: [["babel-plugin-react-compiler"]],
        },
      }),
      tailwindcss(),
    ],
    server: {
      port: 3000,
      open: true,
    },
    define: {
      process: {
        env: {
          ...env,
          SECURE_STORAGE_SECRET: "pJSJ5HZhVy_p22L7FC2N7vzZaf_BuAYqRHsOD_TYGPs",
          SECURE_STORAGE_PREFIX: "slvr-lnk",
          // VITE_BASE_API: "https://panel-api.tg-iptv.site",
        },
      },
    },
  };
});
