<template>
    <div class="list">
        <table class="my__table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Date of birth</th>
                    <th>Date of death</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody v-for="author in authors" :key="author.id">
                <tr>
                    <th>{{ author.date }}</th>
                    <th>{{ author.firstname }}</th>
                    <th>{{ author.lastname }}</th>
                    <th>{{ author.dateofbirth }}</th>
                    <th>{{ author.dateofdeath }}</th>
                    <th>
                        <button @click="deleteAuthor(author.id)">Delete</button>
                        <button>Edit</button>
                        <button @click="showBooks(author.id)"></button>
                    </th>
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
                authors: null,
                errorMessage: '',
            }
        },
        mounted() {
            axios.get('http://localhost:3000/authors')
            .then(response => (this.authors = response.data))
           
        },
        methods: {
            deleteAuthor(id) {
               axios.delete(`http://localhost:3000/authors/${id}`)
                .then(response => console.log(response))
            },
            showBooks(id) {
                axios.get(`http://localhost:3000/authors/${id}/books`)
                .then(response => (this.authors = response.data)) 
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
        button {
            padding: 5px;
            margin: 5px;
            a {
                text-decoration: none;
            }
        }
    }
    
</style>