import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue"
import Read from "../views/Read.vue"

const routes = [{
        path: "/",
        component: Home
    },
    {
        path: "/read/:id",
        component: Read
    },

]

const route = createRouter({
    history: createWebHistory(),
    routes,
})

export default route