<template>
    <div class="sidebar">
        <img class="logo" src="../assets/logo.png" alt="">
        <div id="nav">
            <router-link to="/Authors">Authors</router-link> |
            <router-link to="/Books">Books</router-link>
        </div>
    </div>
        <router-view/>  
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .sidebar {
        background: grey;
        display: flex;
        flex-direction: column;
        width: 232px;
        min-height: 937px;
        padding: 20px;
        .logo {
            border-radius: 50%;
        }
    }

    #nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
        color: #42b983;
        }
    }
}    
</style>