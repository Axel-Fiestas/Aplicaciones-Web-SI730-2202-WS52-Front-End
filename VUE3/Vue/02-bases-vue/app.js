import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
    // template:
    // `
    // <h1> Hola mundo </h1>
    // <p> Desde app.js </p>
    // `
    // ,
    data() {
      return {
        quote:"Im batman",
        message: 'Hola mundo!!!',
        autor:"Bruce Wayne"
      }
    },
    methods: {
      changeQuote(){
        console.log("Hola mundo")
      }
    },
  }).mount('#app')