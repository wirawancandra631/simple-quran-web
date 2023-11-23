import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from "vite-plugin-pwa"
// https://vitejs.dev/config/
export default defineConfig({
    base: "/simple-quran-web/",
    plugins: [vue(), VitePWA({
        devOptions: {
            enabled: true
        },
        registerType: "autoUpdate",
        injectRegister: "inline",
        manifest: {
            name: "Simple Quran",
            short_name: "Simple Quran",
            description: "simple quran web",
            theme_color: "blue"
        }
    })],
})