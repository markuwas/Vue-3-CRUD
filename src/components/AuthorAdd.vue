<template>
    <form class="authorAdd" >
        <input type="text" v-bind:value="firstname" @input="firstname = $event.target.value" placeholder="First Name">
        <input type="text" v-bind:value="lastname" @input="lastname = $event.target.value" placeholder="Last Name">
        <input type="text" v-bind:value="dateofbirth" @input="dateofbirth = $event.target.value" placeholder="Date of birth">
        <input type="text" v-bind:value="dateofdeath" @input="dateofdeath = $event.target.value" placeholder="Date of death">
        <button class="btn__add" @click="addAuthor">Add Author</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            date: '',
            firstname: '',
            lastname: '',
            dateofbirth: '',
            dateofdeath: '',
        }
    },
    methods: {
        addAuthor() {
            this.$emit('add', {
                "date": new Date().toLocaleString(),
                "firstname": this.firstname,
                "lastname": this.lastname,
                "dateofbirth": this.dateofbirth,
                "dateofdeath": this.dateofdeath
            });
            this.firstname = '';
            this.lastname = '';
            this.dateofbirth = '';
            this.dateofdeath = '';
        }
    }
}
</script>

<style lang="scss">
    .AuthorAdd, input {
        display: flex;
        margin-bottom: 10px;
        padding: 5px 10px;

}
    .btn__add {
        display: flex;
        color: #2c3e50;
        font-weight: bold;
        background: none;
        padding: 10px 15px;
        border-radius: 5px;
        margin-top: 10px;
        margin-bottom: 20px;
        &:hover {
            background: #42b983;    
        }
    } 
</style>