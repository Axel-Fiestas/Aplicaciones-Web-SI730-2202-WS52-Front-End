<script>
import {defineAsyncComponent} from 'vue'


export default {
  // name:'App',
  components:{
    NavBar: defineAsyncComponent( ()=> import(/*webpackChunkName:"Navbar"*/'./modules/shared/components/Navbar.vue'))
  }
}
// import NavBar2 from './modules/shared/components/Navbar.vue'
 
</script>

<template>

<NavBar />
<router-view></router-view>

</template>



<style scoped>
/* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
