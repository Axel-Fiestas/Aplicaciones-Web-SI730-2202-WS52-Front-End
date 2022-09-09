//Internalización
import { createI18n } from 'vue-i18n'; //Importar 
import en from './en.json';
import es from './es.json'
import tr from './tr.json'

const i18n=createI18n({ //Configurar
    locale:"es",
    messages:{
        en:en,
        es:es,
        tr:tr
    }


})

export default i18n;
