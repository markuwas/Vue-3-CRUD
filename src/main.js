import { createApp } from 'vue';
import App from './App';
import components from './components/UI';
import router from './router/router';

createApp(App).use(router).mount('#app');
