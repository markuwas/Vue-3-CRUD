<template>
  <header class="header">
    <img
      class="logo__main"
      src="../assets/main_logo.png"
      alt="Fantasy authors"
    />
      <div class="q-pa-md">
        <q-btn color="primary" :label="user">
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
      </div>
  </header>
</template>

<script>
export default {
    data() {
        return {
            user: 'Aleksey Markin'
        }
    }
};
</script>

<style lang="scss">
.logo__main {
  width: 10%;
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0;
  padding: 20px;
  background-color: rgba(18, 90, 40, 0.22);
}
</style>
