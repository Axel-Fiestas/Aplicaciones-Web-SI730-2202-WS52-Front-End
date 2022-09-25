import { createApp } from 'vue'
import App from './App.vue'

// import './assets/main.css'

import router from './routes/router.js'

const app=createApp(App)

app.use(router)
app.mount('#app')
