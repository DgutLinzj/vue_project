import Vue from "vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router";

Vue.use(VueResource);
Vue.use(VueRouter);

import App from "../component/App.vue";
import router from "./router.js";

var vm = new Vue({
    el: "#app",
    render: c => c(App),
    router
});
