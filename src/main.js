import './assets/main.css'
import './assets/styles/global.css'  

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'        
import 'animate.css'                

const app = createApp(App)

app.use(router)
app.use(store)                      

// Inicializar o tema quando o app carregar
store.dispatch('initApp')           

app.mount('#app')