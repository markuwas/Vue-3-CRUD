<template>
  <div class="wrapper">
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
                    <th></th>
                    <th>{{ author.firstname }}</th>
                    <th>{{ author.lastname }}</th>
                    <th>{{ author.dateofbirth }}</th>
                    <th>{{ author.dateofdeath }}</th>
                    <th></th>
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
            }
        },
        mounted() {
            axios.get('http://localhost:3000/authors')
            .then(response => (this.authors = response.data));
        },
        methods: {
            
      }
    }
</script>

<style>
    .wrapper {
        display: flex;
        flex-direction: column;
    }
    .my__table {
        width: 80%;
        border-collapse: collapse
    }   
    .my__table, th, tr {
        border: 1px solid grey;
        padding: 5px;
    }
    
</style>