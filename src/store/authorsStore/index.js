import axios from 'axios'

export const authorsStore = {
    namespaced: true,
    state: {
        authors: null,
    },
    getters: {
        authors(state) {
                return state.authors;
          } 
    },
    actions: {
        getAuthors({ commit }) {
                axios.get('http://localhost:3000/authors')
                .then(response => {
                  commit('SET_AUTHORS', response.data)
                })
              }
    },
    mutations: {
        SET_AUTHORS(state, payload) {
                state.authors = payload;
              }
    }
}