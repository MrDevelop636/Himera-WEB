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
        assetFileNames: (assetInfo) => {
          const path = assetInfo.name;
          
          // Specjalna obsługa plików HTML
          if (path.endsWith('.html')) {
            // Wyciągamy tylko nazwę pliku (bez ścieżki)
            const fileName = path.split('/').pop();
            return fileName;
          }

          // Domyślna obsługa innych assetów
          const extType = path.split('.').pop();
          if (/png|jpe?g|svg|gif|webp/i.test(extType)) {
            return 'assets/images/[name]-[hash][extname]';
          }
          if (/css/i.test(extType)) {
            return 'assets/css/[name]-[hash][extname]';
          }
          if (/woff2?|eot|ttf|otf/i.test(extType)) {
            return 'assets/fonts/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
        entryFileNames: 'assets/js/[name]-[hash].js',
        chunkFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    assetsInlineLimit: 0,
    emptyOutDir: true,
  },
});