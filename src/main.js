import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from "@/routes";
import moment from 'moment';
import axios from 'axios';
import '@/assets/css/app.css';

import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import 'bulma-helpers/css/bulma-helpers.min.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faCheckCircle, faInfoCircle, faExclamationTriangle, faExclamationCircle,
    faArrowUp, faAngleRight, faAngleLeft, faAngleDown,
    faEye, faEyeSlash, faCaretDown, faCaretUp, faUpload, faPlus, faMinus, faStar, faTrash, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCheck, faCheckCircle, faInfoCircle, faExclamationTriangle, faExclamationCircle,
    faArrowUp, faAngleRight, faAngleLeft, faAngleDown,
    faEye, faEyeSlash, faCaretDown, faCaretUp, faUpload, faPlus, faMinus, faStar, faTrash, faTimes);
Vue.component('vue-fontawesome', FontAwesomeIcon);

Vue.use(Buefy, {
    defaultIconComponent: 'vue-fontawesome',
    defaultIconPack: 'fas',
});

Vue.use(VueRouter);
Vue.config.productionTip = false;

moment.locale('ru');
Vue.prototype.moment = moment;

axios.defaults.withCredentials = true;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.baseURL = 'http://localhost:8888';
Vue.prototype.axios = axios;

const router = new VueRouter({
    routes,
    mode: 'history'
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
