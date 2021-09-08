<template>
    <div class="list">
        <table class="my__table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Born</th>
                    <th>Died</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody 
              v-for="author in authors" 
              :key="author.id">
                <tr>
                    <td>{{ author.date }}</td>
                    <td>{{ author.firstname }}</td>
                    <td>{{ author.lastname }}</td>
                    <td>{{ author.dateofbirth }}</td>
                    <td>{{ author.dateofdeath }}</td>
                    <td>
                        <button @click="$emit('edit', author)">Edit</button>
                        <button @click="deleteAuthor(author.id)">Delete</button>
                        <button @click="showBooks(author.id)">Redirect</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
        props: {
            authors: {
                type: Array,
                required: true
            }
        },
        methods: {
            // editAuthor(author) {
            //     this.$emit('edit', {
            //         "firstname": author.firstname,
            //         "lastname": author.lastname,
            //         "dateofbirth": author.dateofbirth,
            //         "dateofdeath": author.dateofdeath
            //     })
            // },
            deleteAuthor(id) {
                this.$emit('delete', id)
            },
            showBooks(id) {
               this.$router.push({name: 'books', query: { authorId: id} })
            }
       }
    }
</script>

<style lang='scss' scoped>
    .list {
        display: flex;
        justify-self: center;
        background: url('../assets/bg2.jpg');
    }
    .my__table {
        border-collapse: collapse;
        & th {
            font-weight: bold;
	        padding: 15px 65px;
	        background: rgba(43, 61, 79, 0.54);
        }
        & td {
            border-bottom: 1px solid grey;
	        padding: 20px 65px;
        }
        & tbody:hover {
            background-color: #42b983;
            color: white;
        }
        button {
            padding: 5px;
            margin: 5px;
            a {
                text-decoration: none;
            }
        }
    }   
</style>