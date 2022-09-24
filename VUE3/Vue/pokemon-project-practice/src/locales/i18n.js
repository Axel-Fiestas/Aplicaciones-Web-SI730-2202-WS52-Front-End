import {createI18n} from 'vue-i18n'
import en from '../lenguages/en.json'
import es from '../lenguages/es.json'


const i18n=createI18n({
    locale:"es",
    messages:{
        en:en,
        es:es 
    }
})

export default i18n;


