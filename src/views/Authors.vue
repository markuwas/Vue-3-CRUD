<template>
    <div class="authors">
        <div class="container">
            <AuthorSearch></AuthorSearch>
            <AuthorAdd @add="addAuthor" :author="author"></AuthorAdd>
            <AuthorList @edit="editAuthor" :authors="authors"></AuthorList>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import AuthorList  from '@/components/AuthorList.vue'
import AuthorAdd from '@/components/AuthorAdd.vue'
import AuthorSearch from '@/components/AuthorSearch.vue'
import TheHeader from '@/components/TheHeader.vue'

export default {
  name: 'Authors',
  components: {
      AuthorList,
      AuthorAdd,
      AuthorSearch,
      TheHeader
  },
  data() {
            return {
                author: {},
            }
        },
    mounted() {
        this.$store.dispatch('authorsStore/getAuthors', { root: true });
    },
    computed: {
        authors() {
            return this.$store.getters['authorsStore/authors']
        }
    },
    methods: {
        addAuthor(author) {
            axios.post('http://localhost:3000/authors', author)
            .then( () => axios.get('http://localhost:3000/authors'))
            .then(response => (this.authors = response.data))
        },
        editAuthor(author) {
            console.log('eaa', author);
            this.author = author;
        },
    }
}
</script>

<style lang="scss">
    .container {
        border: 1px  grey;
        margin: 15px 20px;
        padding: 10px;
    }        
</style>