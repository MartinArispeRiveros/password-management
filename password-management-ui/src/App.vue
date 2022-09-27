<template>
  <v-app class="app__background">
    <app-bar-nav/>
    <menu-sidebar-nav :currentRoute="global.currentRoute"/>
    <v-main class="app__background">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';
import AppBarNav from '@/components/AppBarNav';
import MenuSidebarNav from '@/components/MenuSidebarNav';

export default {
  name: 'App',
  components: {
    AppBarNav,
    MenuSidebarNav
  },
  computed: {
    ...mapState(['global']),
  },
  data() {
    return {
      dataUser: null,
    };
  },
  updated() {
    this.dataUser = localStorage.getItem('tradeId') ? localStorage.getItem('tradeId') : null;
  },
};
</script>

<style scoped>
  .app__background {
    background-color: #E6E6E6;
  }
</style>
