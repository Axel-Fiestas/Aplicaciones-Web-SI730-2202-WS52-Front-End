import axios from 'axios'

export class CommentsServices {

    getComments =()=>{
        return axios.get('http://localhost:3000/comments')
    }


    postComment=(body,postId)=>{
        return axios.post(`http://localhost:3000/comments`,{
            "body":body,
            "postId":postId
        })


    }


    deleteComment(id) {

        return axios.delete("localhost:3000/comments/" + id);
    
    }

}

