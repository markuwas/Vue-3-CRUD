<template>
    <div class="sidebar">
        <img class="logo" src="../assets/logo.png" alt="">
        <div id="nav">
            <router-link to="/authors">Authors</router-link> |
            <router-link to="/books">Books</router-link>
        </div>
          
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .sidebar {
        background: rgba(18, 90, 40, 0.22);
        display: flex;
        flex-direction: column;
        min-height: 875px;
        padding: 20px;
        .logo {
            padding: 5px;
            border-radius: 50%;
            margin-bottom: 40px;
        }
    }

    #nav {
    font-size: 19px;
    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
        color: #42b983;
        }
    }
}    
</style>