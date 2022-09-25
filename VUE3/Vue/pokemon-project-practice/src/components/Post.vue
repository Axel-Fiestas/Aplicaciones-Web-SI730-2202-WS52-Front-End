<template>


    <h1>POSTS</h1>
    <router-link to="/PostNew">New Post</router-link>
    <router-view></router-view>

    <DataTable :value="post">

        <Column field="id" header="Id"></Column>
        <Column field="title" header="Titulo"></Column>
        <Column field="author" header="Autor">
            <!-- <template #body="slotProps">
            <Button @click="deleteComment(slotProps.data.id)">Eliminar</Button>
            </template> -->

        </Column>   
    </DataTable>

</template>

<script>
import postService from '../api/postService.js'

export default {

    data(){
        return{
            post:null
        }
    },
    methods:{

        //Falta delete
    },
    created(){
        new postService().getPost().
        then(Response=>{
            this.post=Response.data})
    }

}
</script>

<style>

</style>