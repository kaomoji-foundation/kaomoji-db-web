import { registerSW } from "virtual:pwa-register";

const updateSW = registerSW({
    onOfflineReady() {
        console.info("app ready to go offline");
    },
});

