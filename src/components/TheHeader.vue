<template>
  <q-header rounded-borders class="bg-cyan">
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      <q-toolbar-title>
        <img
          class="logo__main"
          src="../assets/main_logo.png"
          alt="Fantasy authors"
        />
      </q-toolbar-title>
    </q-toolbar>

      <q-btn color="primary" align="right" :label="user">
        <q-menu>
          <div class="row no-wrap q-pa-md">
            <div class="column">
              <div class="text-h6 q-mb-md">Settings</div>
            </div>

            <q-separator vertical inset class="q-mx-lg" />

            <div class="column items-center">
              <q-avatar size="72px">
                <img src="https://cdn.quasar.dev/img/avatar4.jpg" />
              </q-avatar>

              <div class="text-subtitle1 q-mt-md q-mb-xs">{{ user }}</div>

              <q-btn
                color="primary"
                label="Logout"
                push
                size="sm"
                v-close-popup
              />
            </div>
          </div>
        </q-menu>
      </q-btn>

    <q-tabs align="center">
      <q-route-tab to="/authors" label="Authors" />
      <q-route-tab to="/books" label="Books" />
    </q-tabs>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" elevated>
      <div class="sidebar">
        <img class="logo" src="../assets/logo.png" alt="" />
        <div id="nav">
          <router-link to="/authors">Authors</router-link> |
          <router-link to="/books">Books</router-link>
        </div>
      </div>
    </q-drawer>
  </q-header>
</template>

<script>
export default {
  data() {
    return {
      user: "Aleksey Markin",
      rightDrawerOpen: false,
    };
  },
  methods: {
    toggleRightDrawer() {
      this.rightDrawerOpen != this.rightDrawerOpen;
    },
  },
};
</script>

<style lang="scss">
.logo__main {
  padding-top: 20px;
  width: 10%;
}
</style>
