<template>
  <q-layout view="hHh lpr fFf">
    <TheHeader></TheHeader>
    <Sidebar></Sidebar>
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import AuthorList from "./components/AuthorList.vue";
import AuthorAdd from "./components/AuthorAdd";
import Sidebar from "./components/Sidebar.vue";
import TheHeader from "./components/TheHeader.vue";
export default {
  components: {
    AuthorList,
    AuthorAdd,
    Sidebar,
    TheHeader,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
