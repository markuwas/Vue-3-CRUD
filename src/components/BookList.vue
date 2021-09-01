<template>
    <div class="list">
        <div class="list__item"  v-for="book in books" :key="book.id">
            <div class="item__block">
                <div class="item__title">
                    <h4>Title: <span class="text_medium" >{{ book.title }}</span></h4>
                </div>
                <div class="item__author">
                    <h4>Author: <span class="text_medium">{{ getAuthorName(book.authorId) }}</span></h4>
                </div>
                <div class="item__picture-container">
                    <img :src="book.photo" :alt="book.title">
                </div>
                <div class="item__date">
                    <h4>Publication date: <span class="text_medium">{{ book.dateofpublication }}</span></h4>
                </div>
                    <h4>Description:</h4>
                <div class="item__description">
                    <p>{{ book.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
        data() {
            return {
                authors: [],
                books: null,
                errorMessage: '',
            }
        },
        mounted() {
            const authorId = this.$route.query.authorId;

            axios.get('http://localhost:3000/books', {
                params: { authorId }
            })
            .then( response => (this.books = response.data));

            axios.get('http://localhost:3000/authors')
            .then( response => {
                this.authors = response.data
            })
        },
        methods: {
            getAuthorName(id) {
                const author = this.authors.find(author => author.id == id)
                if (author !== undefined) {
                    return `${author.firstname} ${author.lastname}`
                } else {
                    return '';
                }
            }
        }
    }
</script>

<style lang='scss' scoped>
    .list {
        display: grid;
        grid-template-columns: repeat(3, 2fr);
        grid-auto-rows: 680px;
        margin: 15px 20px; 
        .list__item {
            display: flex;
            flex-direction: column;
            border-radius: 5px;
            margin: 10px 30px;
            padding: 15px;
            background-color: rgba(43, 61, 79, 0.03);
        }

        .item__picture-container {
            display: flex;

            img {
                border-radius: 5px;
                display: flex;
                align-self: center;
                margin: auto;
                height: 210px;
            }

        }

        .item__author {
            display: flex;
            flex-direction: column;
            padding: 10px;
        }

        .item__title {
            display: flex;
            flex-direction: column;
            padding: 5px;
        }

        .item__date {
            display: flex;
            flex-direction: column;
            padding: 5px;
            margin-bottom: 20px;
            margin-top: 10px;
        }

        .item__description {
            display: flex;
            line-height: 20px;
        } 

        .text_medium {
            font-weight: 200;
        }
    }
</style>