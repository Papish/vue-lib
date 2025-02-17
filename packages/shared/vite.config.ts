import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "Greetings",
      fileName: "index",
      formats: ["es"],
    },
  },
  plugins: [
    dts({
      rollupTypes: true,
      outDir: "./dist",
    }),
  ],
});
