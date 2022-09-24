import { createApp } from 'vue'
import App from './App.vue'
import i18n from './locales/i18n.js'
const app=createApp(App)

import PrimeVue from 'primevue/config';
import Dialog from 'primevue/dialog';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

/*styles*/
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                            //icons

import router from './router.js'

  
app.use(router)
app.component('InputText',InputText)
app.component('Button',Button)
app.component('Dropdown', Dropdown);
app.component('Dialog', Dialog);
app.use(PrimeVue);
app.use(i18n)
app.mount('#app')
 