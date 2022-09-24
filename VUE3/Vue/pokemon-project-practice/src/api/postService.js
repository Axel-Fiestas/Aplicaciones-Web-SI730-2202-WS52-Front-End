import axios from 'axios'

class PostService{

    getPost=()=>{
        return axios.get('http://localhost:3000/post')
    }

    postPost=(title,author)=>{
        return axios.post('http://localhost:3000/post',{
            title,
            author
        })
    }

    deletePost=(id)=>{
        return axios.delete('http://localhost:3000/post/'+id)
    }

    putPost=(id,title,author)=>{
        return axios.put('http://localhost:3000/post/'+id,{
            title,author
        })
    }

}

export default PostService