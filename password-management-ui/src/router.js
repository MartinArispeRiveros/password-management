import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '/src/store/index';
import Passwords from '@/views/Passwords';

Vue.use(VueRouter);
Vue.use(store);

const routes = [
  {
    path: '/',
    name: 'Passwords',
    component: Passwords,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
