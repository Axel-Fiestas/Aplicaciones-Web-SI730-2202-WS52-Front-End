<template>

    <router-link to="/CommentNew">New Comment</router-link>
    <router-view></router-view>

    <h1>COMMENTS</h1>

    <Button>New Comment</Button>
    <DataTable :value="comments">

        <Column field="id" header="Id"></Column>
        <Column field="body" header="Body"></Column>
        <Column field="postId" header="Post Id"></Column>

    </DataTable>
</template>

<script>
import commentService from '../api/commentService.js'
export default {

    data(){
        return{
            comments:null
        }
    },
    created()
    {
        new commentService().getComment()
        .then(response=>{
            this.comments=response.data
        })
    }

}
</script>

<style>

</style>