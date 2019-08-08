/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';
import axios from 'axios';
import Buefy from 'buefy'
import 'buefy/dist/buefy.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import routes from './routes.js';

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

library.add(faEdit);
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('main-component', require('./components/MainComponent.vue').default);
Vue.component('categories-component', require('./components/CategoriesComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.prototype.$axios = axios;
Vue.use(VueRouter);
Vue.use(Buefy);

const app = new Vue({
    el: '#app',
    router: new VueRouter({routes, mode: 'history'})
});