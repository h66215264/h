// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Axios from 'axios';
import VueRouter from 'vue-router';
import goods from './components/goods/goods.vue';
import ratings from './components/ratings/ratings.vue';
import seller from './components/seller/seller.vue';

import './common/stylus/index.styl';

Vue.prototype.$axios = Axios;

Vue.use(VueRouter);
Vue.config.productionTip = false;
/* eslint-disable no-new */
let router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: {name: 'goods'}
        },
        {
            name: 'goods',
            path: '/goods',
            component: goods
        },
        {
            name: 'ratings',
            path: '/ratings',
            component: ratings
        },
        {
            name: 'seller',
            path: '/seller',
            component: seller
         }
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
});

new Vue({
  el: '#app',
  router,
  render: c => c(App),
  components: { App },
  template: '<App/>'
});
