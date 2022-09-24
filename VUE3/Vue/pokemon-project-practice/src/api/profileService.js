import axios from 'axios'

class ProfileService{

    getProfile=()=>{
        return axios.get('http://localhost:3000/profile')
    }

    postProfile=(name)=>{
        return axios.post('http://localhost:3000/profile',{
            name
        })
    }

    deleteProfile=(id)=>{
        return axios.delete('http://localhost:3000/profile/'+id)
    }

    putProfile=(id,name)=>{
        return axios.put('http://localhost:3000/profile/'+id,{
            name
        })
    }

}

export default ProfileService