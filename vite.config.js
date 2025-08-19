import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [],
  optimizeDeps: {
    include: ["gsap", "three", "@splidejs/splide"],
  },
  // brak dodatkowego importu SCSS
  css: {
    preprocessorOptions: {
      scss: {}
    }
  },
  resolve: {
    alias: {
      // pages
      "@Home": resolve(__dirname, "./src/pages/Home"),
      "@About": resolve(__dirname, "./src/pages/About"),
      // Assets types
      "@Home/js": resolve(__dirname, "./src/pages/Home/js"),
      "@Home/css": resolve(__dirname, "./src/pages/Home/css"),
      "@Home/images": resolve(__dirname, "./src/pages/Home/images"),
      "@About/js": resolve(__dirname, "./src/pages/About/js"),
      "@About/css": resolve(__dirname, "./src/pages/About/css"),
      "@About/images": resolve(__dirname, "./src/pages/About/images"),
      
    },
  },
  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
    cssCodeSplit: true,
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about/index.html"),
        contact: resolve(__dirname, "contact/index.html"),
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
