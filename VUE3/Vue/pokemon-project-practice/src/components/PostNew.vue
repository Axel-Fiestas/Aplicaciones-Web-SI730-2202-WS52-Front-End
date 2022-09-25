<template>
  
    <form>

        <div class="field grid">

            <label for="title">Titulo</label>
            <InputText id="title" type="text" v-model="title" />
    
        </div>


        <div class="field grid">
            
            <label for="author">Author</label>
            
            <InputText id="author" type="text" v-model="author" />
            

        </div>

        <Button @click="Save">Save</Button>

    </form>


</template>

<script>
import postService from '../api/postService.js'

export default {

    data(){
        return{
            title:"",
            author:""
        }
    },
    methods:{
        Save(){
            new postService().postPost(this.title,this.author)
            .then(()=>{
                console.log("Se añadió el nuevo post")
                this.$router.push('/Post')
            })
        }

    }

}
</script>

<style>

</style>