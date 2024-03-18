import { createApp } from 'vue';
import ExampleComponent from './components/ExampleComponent.vue';

import 'bootstrap/dist/css/bootstrap.min.css';

// Create a Vue app instance
const app = createApp({});

// Register your Vue components
app.component('example-component', ExampleComponent);

// Mount the Vue app to a DOM element
app.mount('#app');
