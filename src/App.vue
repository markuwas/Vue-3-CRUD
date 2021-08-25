<template>
    <div class="app">
        <header class="header">
            Best Fantasy Authors
        </header>
        <author-search></author-search>
        <author-add></author-add>
        <author-list></author-list>
    </div>
</template>

<script>
import AuthorList from '../components/AuthorList.vue';
import AuthorSearch from '../components/AuthorSearch.vue';
import AuthorAdd from '../components/AuthorAdd';
export default {
    components: {
        AuthorList,
        AuthorSearch,
        AuthorAdd
    },
}
</script>

<style>
    .app {
        display: flex;
        flex-direction: column;
    }
    .btn {
        width: 10%;
        margin: 15px 0;
        background: none;
        justify-content: start;
        padding: 5px 10px;
        border-radius: 5px;
    }
</style>