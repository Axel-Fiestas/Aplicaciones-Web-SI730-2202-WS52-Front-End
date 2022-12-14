import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';  
import Button from 'primevue/button'; 
import InputMask from 'primevue/inputmask';
import MultiSelect from 'primevue/multiselect';
import Dropdown from 'primevue/dropdown';
import InputNumber from 'primevue/inputnumber';
import ColorPicker from 'primevue/colorpicker';
import Calendar from 'primevue/calendar';
import RadioButton from 'primevue/radiobutton';
import InputSwitch from 'primevue/inputswitch';
import FileUpload from 'primevue/fileupload';
import Textarea from 'primevue/textarea';
import './assets/main.css'
import '/node_modules/primeflex/primeflex.css' 
import 'primevue/resources/themes/saga-green/theme.css'       
import 'primevue/resources/primevue.min.css'      
import 'primeicons/primeicons.css'
import { createRouter, createWebHistory } from 'vue-router'; //VueVite


import Home from './components/Home.vue';
import About from './components/About.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
]

const history= createWebHistory()

const router=createRouter(
    history,
    routes
)



import i18n from './locales/i18n';


const app = createApp(App);
app.use(PrimeVue);
app.use(i18n); //Inyectar

app.component('pv-Button', Button);
app.component('pv-InputMask',InputMask);
app.component('pv-MultiSelect',MultiSelect);
app.component('pv-Dropdown',Dropdown);
app.component('pv-InputNumber',InputNumber);
app.component('pv-ColorPicker',ColorPicker);
app.component('pv-Calendar',Calendar);
app.component('pv-RadioButton',RadioButton);
app.component('pv-InputSwitch',InputSwitch);
app.component('pv-FileUpload',FileUpload);
app.component('pv-Textarea',Textarea);



app.mount('#app')
