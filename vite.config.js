import { defineConfig } from "vite";
import { resolve } from "path";
import viteImagemin from "vite-plugin-imagemin";

export default defineConfig({
  plugins: [
    viteImagemin({
      webp: { quality: 10 },
    }),
  ],
  optimizeDeps: {
    include: ["gsap", "three", "@splidejs/splide"],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/css/base/_variables.css";`,
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@css": resolve(__dirname, "./src/css"),
      "@js": resolve(__dirname, "./src/js"),
      "@components": resolve(__dirname, "./src/js/components"),
      "@animation": resolve(__dirname, "./src/js/animation"),
      "@ui": resolve(__dirname, "./src/js/ui"),
    },
  },
  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "src/pages/about.html"),
        services: resolve(__dirname, "src/pages/services.html"),
      },
      output: {
        assetFileNames: (assetInfo) => {
          const extType = assetInfo.name.split(".").pop();
          if (/png|jpe?g|svg|gif|webp|avif|ico|bmp|tiff/i.test(extType)) {
            return "assets/images/[name]-[hash][extname]";
          }
          if (/css/i.test(extType)) {
            return "assets/css/[name]-[hash][extname]";
          }
          if (/woff2?|eot|ttf|otf/i.test(extType)) {
            return "assets/fonts/[name]-[hash][extname]";
          }
          if (/js/i.test(extType)) {
            return "assets/js/[name]-[hash][extname]";
          }
          return "assets/[name]-[hash][extname]";
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
});