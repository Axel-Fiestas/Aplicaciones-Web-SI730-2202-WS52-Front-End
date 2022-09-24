<template>

    <form>

        <div class="field grid">

            <label for="body">Body Comment</label>
            <InputText id="body" type="text" v-model="bodyNew" />
    
        </div>


        <div class="field grid">
            
            <label for="postId">Id Post</label>
            <InputText id="postId" type="text" v-model="postIdNew" />
        
        </div>

        <Button @click="Save">Save</Button>

    </form>

</template>

<script>
import CommentServices from '../api/commentService.js'


export default {
    data(){
        return{
            bodyNew:'',
            postIdNew:''
        }
    },
    methods:{
        Save(){
            new CommentServices().postComment(this.bodyNew,this.postIdNew)
            .then(()=>{
                console.log("Comentario correctamente grabado")
            })
        }
    }
}
</script>

<style>

</style>