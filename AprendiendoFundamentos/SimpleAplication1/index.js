
const app= Vue.createApp({
    template:
    `

    <input v-bind:value="value"
    v-on:input="input"
    >
    {{value}}
    
    <button v-on:click="increment()">Increment</button>
    <p>{{count}}</p>
    
    <div v-for="number in numbers" 
        v-bind:class="getClass(number)">
        <div>
        {{number}}
        </div>
        
        
    </div>
    
    `,

    data(){
        return{
            count:0,
            numbers:[1,2,3,4,5,6,7,8,9],
            value:"user",
            error:''
        }
    },
    computed:{
        evenList(){
            return this.numbers.filter(num=>this.isEven(num));
        }
    },
    methods:{
        increment(){
            this.count+=1;
        },
        isEven(number){
            return number%2===0;
        },
        getClass(number){
            return this.isEven(number) ? 'blue' : 'red'
        },
        input($event){
           this.value=$event.target.value
            if(this.value.length<5){
                this.error='Must be greater than 5'
            }
        }
    },

    script:
    `
    <script src="https://unpkg.com/vue@3"></script>
    `
})

app.mount("#app")