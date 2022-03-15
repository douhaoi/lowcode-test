import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import WindiCSS from "vite-plugin-windicss";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
    AutoImport({
      imports: ["vue"],
      dts: resolve(__dirname, "src/auto-imports.d.ts"),
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dirs: [resolve(__dirname, "src/components")],
      dts: resolve(__dirname, "src/components.d.ts"),
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
