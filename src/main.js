import { createApp } from 'vue'
import route from "./routes/index.js"
import App from './App.vue'

createApp(App).use(route).mount('#app')