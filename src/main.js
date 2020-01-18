import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from "@/routes";
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';

Vue.use(VueRouter);
Vue.use(Buefy);
Vue.config.productionTip = false;

const router = new VueRouter({
    routes,
    mode: 'history'
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
