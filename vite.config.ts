import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        VitePWA({
            injectRegister: null,
            workbox: {
                sourcemap: true,
            },
            registerType: "autoUpdate",
            manifest: {
                background_color: "#3a3a3a",
                theme_color: "#282828",
                description: "The best kaomoji pad",
                display: "fullscreen",
                icons: [
                    {
                        src: "logo.svg",
                        sizes: "512x512",
                        type: "image/svg+xml",
                        purpose: "any",
                    },
                    {
                        src: "logo.svg",
                        sizes: "144x144",
                        type: "image/svg+xml",
                        purpose: "maskable",
                    },
                    // TODO: Fix lighthouse PWA installable error:
                    // TODO: "Downloaded icon was empty or corrupted"
                    // TODO: The above is directly related to the 2 icons down below
                    {
                        src: "icons/android-192x192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "icons/android-512x512.png",
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

