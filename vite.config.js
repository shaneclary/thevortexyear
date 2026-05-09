import { defineConfig } from "vite";

export default defineConfig({
  build: {
    target: "es2020",
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        // Keep one entry per page; let Rollup name the chunks.
        entryFileNames: "assets/[name]-[hash].js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
});
