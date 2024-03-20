import { createApp } from 'vue';
import HomepageComponent from './components/HomepageComponent.vue';

import 'bootstrap/dist/css/bootstrap.min.css';

// Create a Vue app instance
const app = createApp({});

// Register your Vue components
app.component('homepage-component', HomepageComponent);

// Mount the Vue app to a DOM element
app.mount('#app');
