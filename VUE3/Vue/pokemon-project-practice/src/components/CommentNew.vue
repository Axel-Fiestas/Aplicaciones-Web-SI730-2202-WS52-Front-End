<template>

    <form>

        <div class="field grid">

            <label for="body">Body Comment</label>
            <InputText id="body" type="text" v-model="bodyNew" />
    
        </div>


        <div class="field grid">
            
            <label for="postId">Id Post</label>
            <Dropdown v-model="selectedPost"  :options="posts" optionLabel="title" placeholder="Select a postId" />

        </div>

        <Button @click="Save">Save</Button>

    </form>

</template>

<script>
import CommentServices from '../api/commentService.js'
import PostServices from '../api/postService.js'


export default {
    data(){
        return{
            bodyNew:'',
            selectedPost:'',
            posts:null
        }
    },
    methods:{
        Save(){
            debugger
            new CommentServices().postComment(this.bodyNew,this.selectedPost.id)
            .then(()=>{
                console.log("Comentario correctamente grabado")
                this.$router.push('/Comment')
            })
        }
    },
    created() {
        new PostServices().getPost().
        then(response=>{
            this.posts=response.data
            console.log("Creado correctamente")
        }) 
        
    },
}
</script>

<style>

</style>