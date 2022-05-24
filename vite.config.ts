import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        VitePWA({
            injectRegister: "auto",
            filename: "service-worker.ts",
            strategies: "injectManifest",
            workbox: {
                sourcemap: true,
                swDest: "dist/service-worker.js",
            },
            manifest: {
                background_color: "#3a3a3a",
                theme_color: "#282828",
                description: "The best kaomoji pad",
                display: "fullscreen",
                icons: [
                    {
                        src: "logo.svg",
                        sizes: "128x128",
                        type: "image/svg+xml",
                    },
                    {
                        src: "logo.svg",
                        sizes: "192x192",
                        type: "image/svg+xml",
                    },
                    {
                        src: "logo.svg",
                        sizes: "512x512",
                        type: "image/svg+xml",
                    },
                    {
                        src: "/icons/android-chrome-192x192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "/icons/android-chrome-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                    {
                        src: "logo.svg",
                        sizes: "512x512",
                        type: "image/svg+xml",
                        purpose: "'any maskable",
                    },
                ],
                name: "Kaomoji-db",
                short_name: "kao-db",
                start_url: "/#",
            },
        }),
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
});

