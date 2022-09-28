<template>
  <v-app-bar app height="70" flat color="primary">    
    <v-toolbar-title class="font-weight-light hidden-xs-only v-application" v-text="`${getTitle}`" />
    <v-spacer />
  </v-app-bar>
</template>

<script>

export default {
  name: 'AppBarNav',
  computed: {
    getTitle() {
      return this.$route.name ? this.$route.name : '';
    },
  },
  methods: {
    toggleDrawer() {
      this.$store.dispatch('toggleDrawerState', !this.$store.getters.drawerState);
    },
  },
};
</script>
