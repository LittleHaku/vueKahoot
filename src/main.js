import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import axios from 'axios';


import './assets/main.css'

const app = createApp(App)
//const baseURL = 'https://cajut.onrender.com/';
const baseURL = 'http://127.0.0.1:8000/';
axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = false;



app.use(router)
app.use(store)




app.mount('#app')

/* Bootstrap */
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'