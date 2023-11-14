import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import your router file
import Vue3Lottie from 'vue3-lottie';

createApp(App).use(router).use(Vue3Lottie).mount('#app');
