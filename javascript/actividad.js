'use strict'

const image = document.querySelector('figure');
const button = document.querySelector('button');

const callIAPI = (async () => {
    let res = await fetch("https://random-d.uk/api/v2/random")
    let data = await res.json()
    return data
})

button.addEventListener('click',optenerApi);







callIAPI().then(res => {
      //  console.log(res)
        setProductos(res)
    }).catch(error => {
        console.log(error)
    })