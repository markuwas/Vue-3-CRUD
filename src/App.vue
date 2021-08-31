<template>
    <div class="main">
        <Sidebar></Sidebar>
    </div>
</template>

<script>
import AuthorList from './components/AuthorList.vue';
import AuthorSearch from './components/AuthorSearch.vue';
import AuthorAdd from './components/AuthorAdd';
import MyModal from './components/UI'
import Sidebar from './components/Sidebar.vue';
import TheHeader from './components/TheHeader.vue';
export default {
    components: {
        AuthorList,
        AuthorSearch,
        AuthorAdd,
        MyModal,
        Sidebar,
        TheHeader
    },
}
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

    .main {
        display: flex;
        flex-direction: row;
        .header {
            text-align: center;
        }
        .btn {
        width: 10%;
        margin: 15px 0;
        background: none;
        padding: 5px 10px;
        border-radius: 5px;
    }
}
</style>