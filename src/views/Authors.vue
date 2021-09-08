<template>
    <div class="authors">
        <div class="container">
            <AuthorSearch></AuthorSearch>
            <AuthorAdd @add="addAuthor" ></AuthorAdd>
            <AuthorList @edit="editAuthor" @delete="deleteAuthor" :authors="authors"></AuthorList>
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
  props: {
            authors: {
                type: Array,
                required: true
            }
        },
  data() {
            return {
                authors: null,
                errorMessage: '',
            }
        },
    mounted() {
        axios.get('http://localhost:3000/authors')
        .then(response => (this.authors = response.data))
    },
    methods: {
        addAuthor(author) {
            axios.post('http://localhost:3000/authors', author)
            .then( () => axios.get('http://localhost:3000/authors'))
            .then(response => (this.authors = response.data))
        },
        // editAuthor(author) {
        //     console.log(author)
        // },
        deleteAuthor(id) {
            axios.delete(`http://localhost:3000/authors/${id}`)
            .then( () => axios.get('http://localhost:3000/authors'))
            .then(response => (this.authors = response.data))
        }
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