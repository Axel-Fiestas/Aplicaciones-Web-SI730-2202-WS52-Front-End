import axios from 'axios'

console.log("Hola mundo")


const apiKey='PypSNUR0J4RrkNPRRDz8RxZ5MyosIlDw'
//   `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`


const giphyApi= axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params:{
        api_key: apiKey
    }
})



//Mi forma (mala xd)
// giphyApi.get('/random')
// .then(resp=>{

//     console.log(resp.data.data)

//     const {url}=resp.data.data.images.original

//     const img=document.createElement("img")
//     img.src=url
//     document.body.append(img)

// })

//Manera instructor
giphyApi.get('/random')
.then(resp=>{

    const { data }=resp.data
    const { url  }=data.images.original

    const img=document.createElement("img")
    img.src=url
    document.body.append(img)

})
