import axios from 'axios'

export const booksStore = {
    namespaced: true,
    state: {
        books: null,
    },
    actions: {
        getBooks({commit, payload}) {
            console.log(payload)
            axios.get(`http://localhost:3000/books`, { params: { authorId: payload } })
            .then( response => commit('SET_BOOKS', response.data))
        }
    },
    mutations: {
        SET_BOOKS(state, payload) {
            state.books = payload;
        }
    },
    getters: {
        books(state) {
            return state.books;
        }
    }
}