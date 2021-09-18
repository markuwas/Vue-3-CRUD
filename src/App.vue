<template>
    <div class="main">
        <TheHeader></TheHeader>
        <div class="second_c">
            <Sidebar></Sidebar>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import AuthorList from './components/AuthorList.vue';
import AuthorSearch from './components/AuthorSearch.vue';
import AuthorAdd from './components/AuthorAdd';
import Sidebar from './components/Sidebar.vue';
import TheHeader from './components/TheHeader.vue';
export default {
    components: {
        AuthorList,
        AuthorSearch,
        AuthorAdd,
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
        flex-direction: column;

        .header {
            text-align: center;
        }
        .second_c {
            display: flex;

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