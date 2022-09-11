app.component('product-display',{
    props:{
        premium:{
            type:Boolean,
            required:true
        }
    },

    template:
    /*html*/
    `      
      <div class="product-display">
        <div class="product-container">
          <div class="product-image">
              <img v-bind:src="image">
            <!-- v-bind:src="image" es lo mismo que usar  :src="image" -->

          </div>
          <div class="product-info">
              <h1>{{title}}</h1>
              <p v-if="onSale">{{Sale}}</p>
              <p>Description about the product: {{description}}</p>
              <a :href="url">Enlace</a>

               <p v-if="inStock">In Stock</p>
               <p v-else>Out of Stock</p>
               
               <p>Shipping: {{shipping}}</p>
                             
               <product-details :details="details"></product-details>

              <div
                      v-for="(variant,index) in variants"
                      :key="variant.id"
                      @mouseover="updateVariant(index)"
                      class="color-circle"
                        :style="{backgroundColor: variant.color}">

              </div>
              <!---<button class="button" v-on:click="addToCart">Add to Cart</button>
              -->
              <button
                      class="button"
                      :class="{disabledButton: !inStock}"
                      :disabled="!inStock"
                      @click="addToCart">
                      Add to Cart
                      </button>

              <button class="button" @click="quitToCart">Quit to Cart</button>

          </div>

        </div>
        
        <review-list v-if="reviews.length" :reviews="reviews"></review-list> 
        <review-form @review-submitted="addReview"></review-form>
        
      </div>
     
    `,
    data(){
        return {
            product:'Sucks',
            brand:"BestMarks",
            onSale:true,
            selectedVariant:0,
            description:"Perfect clothes and sucks",
            url:'https://amoramedias.pe',
            details:['50% cotton','30% wool',"20% polyester"],
            variants:[
                {id:2234,color:'green',size:'small',image:'assets/images/socks_green.jpg',quantity:50},
                {id:2235,color:'blue',size:'medium',image:'assets/images/socks_blue.jpg',quantity:0}
            ],
            reviews:[]

        }
    },
    methods:{
        addToCart() {
            this.$emit('add-to-cart',this.variants[this.selectedVariant].id)
        },
        updateVariant(index){
            this.selectedVariant=index;
        },
        quitToCart(){
            this.$emit('quit-to-cart')
        },
        addReview(review){
            this.reviews.push(review);
        }
    },
    computed:{
        title(){
            return this.brand+' '+this.product;
        },
        image(){
            return this.variants[this.selectedVariant].image
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity
        },
        Sale(){
            return this.brand+this.product+" is on sale";
        },
        shipping(){
            if(this.premium){
                return "Free";
            }
            return 2.99;
        }
    }

})