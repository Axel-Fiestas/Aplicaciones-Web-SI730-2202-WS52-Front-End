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
import './assets/main.css'
import '/node_modules/primeflex/primeflex.css' 
import 'primevue/resources/themes/saga-green/theme.css'       
import 'primevue/resources/primevue.min.css'      
import 'primeicons/primeicons.css'       


const app = createApp(App);

app.use(PrimeVue);
app.component('pv-Button', Button);
app.component('pv-InputMask',InputMask);
app.component('pv-MultiSelect',MultiSelect);
app.component('pv-Dropdown',Dropdown);
app.component('pv-InputNumber',InputNumber);
app.component('pv-ColorPicker',ColorPicker);
app.component('pv-Calendar',Calendar);



app.mount('#app')
