
const apiKey='PypSNUR0J4RrkNPRRDz8RxZ5MyosIlDw'


//https://api.giphy.com/v1/gifs/random?api_key=PypSNUR0J4RrkNPRRDz8RxZ5MyosIlDw


fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    .then( resp=>resp.json())
    .then( ( {data} )=>{
        const {url}=data.images.original
        

        const img=document.createElement("img")
        img.src=url
        document.body.append(img)

    })

console.log("Hola mundo")