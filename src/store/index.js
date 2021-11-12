import { createStore } from 'vuex';
import { authorsStore } from '@/store/authorsStore';
import { booksStore } from '@/store/booksStore';

export default createStore({
    modules: {
    authorsStore,
    booksStore,
  }
})
