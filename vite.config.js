import { defineConfig } from "vite";
import { resolve } from "path";
import viteImagemin from "vite-plugin-imagemin";

export default defineConfig({
  plugins: [
    viteImagemin({
      webp: { quality: 10 },
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "src/pages/about.html"),
        services: resolve(__dirname, "src/pages/services.html"),
      },
      output: {
        // Pozostałe ustawienia assetów (CSS, JS, obrazy itd.)
        assetFileNames: (assetInfo) => {
          const filename = assetInfo.name;

          // Przenieś pliki HTML do głównego folderu dist/
          if (filename.endsWith(".html")) {
            const baseName = filename.split("/").pop(); // wyciąga "about.html" z "src/pages/about.html"
            return baseName;
          }

          // Reszta assetów (obrazy, czcionki, CSS, JS)
          const extType = filename.split(".").pop();
          if (/png|jpe?g|svg|gif|webp/i.test(extType)) {
            return "assets/images/[name]-[hash][extname]";
          }
          if (/css/i.test(extType)) {
            return "assets/css/[name]-[hash][extname]";
          }
          if (/woff2?|eot|ttf|otf/i.test(extType)) {
            return "assets/fonts/[name]-[hash][extname]";
          }
          return "assets/[name]-[hash][extname]";
        },
        entryFileNames: "assets/js/[name]-[hash].js",
        chunkFileNames: "assets/js/[name]-[hash].js",
      },
    },
    assetsInlineLimit: 0,
    emptyOutDir: true,
  },
});