import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(router)




app.mount('#app')

/* Bootstrap */
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'