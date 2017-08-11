import VueRouter from "vue-router";

import Cindex from "../component/index/index.vue"

export default new VueRouter({
    routes: [
        {path: "/", redirect: "/index"},
        {path: "/index", component: Cindex}
    ]
})