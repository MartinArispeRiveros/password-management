<template>
  <v-navigation-drawer id="default-drawer" mini-variant-width="80" app width="260">
    <div :style="cssMenuProps">
      <v-list-item class="pa-5 justify-space-between pl-3">
        <v-img height="60" class="logo" contain src="../assets/logo.png"/>
      </v-list-item>
      <h3 class='py-3 text-center white--text'>Passwords Management</h3>
      <template v-for="item in items">
        <v-list-group color="grey" dark shaped v-if="item.items" :key="item.title" v-model="item.active" no-action>
          <template v-slot:activator>
            <v-list-item-action>
              <v-icon :class="{ 'menubar-list-item__active': isCurrentRoute(item), 'menubar-list-item__inactive': !isCurrentRoute(item)}">{{ item.action }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title :class="{ 'menubar-list-item__active': isCurrentRoute(item), 'menubar-list-item__inactive': !isCurrentRoute(item)}" v-text="item.title"/>
            </v-list-item-content>
          </template>
        </v-list-group>
        <v-list-item :class="{ 'menubar-list-item__active': isCurrentRoute(item)}" class="text-white" dark shaped
                      v-if="!item.items" v-bind:key="item.title" :to="item.to" v-model="item.active">
          <v-list-item-icon>
            <v-icon :class="{ 'menubar-list-item__active': isCurrentRoute(item)}" v-text="item.action"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title :class="{ 'menubar-list-item__active': isCurrentRoute(item), 'menubar-list-item__inactive': !isCurrentRoute(item)}"
                                v-text="item.title"/>
          </v-list-item-content>
        </v-list-item>
      </template>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'MenuSidebarNav',
  props: {
    currentRoute: {
      type: String,
      required: true,
    },
  },
  computed: {
    cssMenuProps() {
      return {
        '--bg-menu-active-background-color': 'black',
      };
    },
  },
  data() {
    return {
      selectedItem: 1,
      items: [
        {
          action: 'mdi-lock',
          title: 'Passwords',
          to: '/',
          active: true,
        },
      ],
    };
  },
  methods: {
    isCurrentRoute(item) {
      return item.title === this.currentRoute || (item.items && item.items.find(value => value.title === this.currentRoute) !== undefined);
    },
  },
};
</script>

<style scoped>
  .v-list .v-list-item--active {
    color:#fff;
  }
  ::v-deep .v-list-group {
    color:#fff !important;
  }
  ::v-deep .v-list-group--no-action, .v-list-item__icon, .v-list-group__header__prepend-icon {
    color:#fff !important;
    /* background-color: red; */
  }
  .menubar-list-item__active {
    color: var(--bg-menu-active-background-color);
  }

  .menubar-list-item__icon {
    margin-right: 0.5em !important;
  }

  .menubar-list-item__inactive {
    color: #fff !important;
  }

  ::v-deep .v-list-group__header > .v-list-group__header__append-icon .v-icon {
    color: white;
  }

  #default-drawer {
    background-color: #394452;
    color: white;
  }
</style>
