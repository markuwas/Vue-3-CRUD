<template>
    <div class="list">
        <table class="my__table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Data of publication</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody v-for="book in books" :key="book.id">
                <tr>
                    <th>{{ book.title }}</th>
                    <th>{{ book.dateofpublication }}</th>
                    <th>{{ book.description }}</th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';
export default {
        data() {
            return {
                books: null,
                errorMessage: '',
            }
        },
        mounted() {
            axios.get('http://localhost:3000/books')
            .then(response => (this.books = response.data))
        },
        methods: {
            showBooks(id) {
                axios.get(`http://localhost:3000/authors/${id}/books`)
                .then(response => (this.books = response.data)) 
            }
      }
    }
</script>

<style lang='scss'>
    .list {
        display: flex;
        justify-self: center;
    }
    .my__table {
        border-collapse: collapse
    }   
    .my__table, th, tr {
        border: 1px solid grey;
        padding: 15px 35px;
    }
    
</style>