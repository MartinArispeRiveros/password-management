import Vue from 'vue';
import Vuex from 'vuex';
import global from './modules/global';
import passwordcard from './modules/password-card';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    global,
    passwordcard,
  },
});
