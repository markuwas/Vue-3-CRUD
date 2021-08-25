<template>
    <form class="authorAdd" @submit.prevent>
        <input type="text" v-bind:value="firstname" @input="firstname = $event.target.value" placeholder="First Name">
        <input type="text" v-bind:value="lastname" @input="lastname = $event.target.value" placeholder="Last Name">
        <input type="text" v-bind:value="dateofbirth" @input="dateofbirth = $event.target.value" placeholder="Date of birth">
        <input type="text" v-bind:value="dateofdeath" @input="dateofdeath = $event.target.value" placeholder="Date of death">
        <button @click="addAuthor">Add Author</button>
    </form>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            firstname: '',
            lastname: '',
            dateofbirth: '',
            dateofdeath: '',
        }
    },
    methods: {
        addAuthor() {
            axios.post('http://localhost:3000/authors',{
                "firstname": this.firstname,
                "lastname": this.lastname,
                "dateofbirth": this.dateofbirth,
                "dateofdeath": this.dateofdeath
            })
        }
    }
}
</script>

<style>
    .AuthorAdd, input {
        display: flex;
        flex-direction: row;
        margin: 5px;
    }
</style>