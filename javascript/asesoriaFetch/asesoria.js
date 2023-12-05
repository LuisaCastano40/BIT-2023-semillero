// Tenemos dos formas de trabajar de forma asíncrona en js
//1. Fetch -> método de js que nos permite recibir peticiones -> promesas
//2. Async - await -> función asíncrona que ten permite hacer lo mismo fetch (versión más moderna)


//1. sintaxis fetch
// -> hacemos peticion ->Promesa, a la cual esperamos respuesta
// -> entonces se recibe la respuesta
// -> cuando usted tenga la respuesta entonces me hace algo (fn)
// -> es importante el manejo de errores, con el catch

// fetch(url de tu peticion/api)
// .then(recibimos la respuesta obtenida de la peticion)
// .then(con esa respuesta hágame algo)
// .catch(si hay un error atrápelo);


// 2. sintaxis fn asíncrona
//  async function nombreDeFuncion(){
    // await nos indica que es una promesa, y que se va a demorar la respuesta, así se puede ejecutar lo demás del código
    // const peticion = await fetch(url de tu peticion/api);
    //esperar a que nos llegue la respuesta de esa peticion (los datos)
//     const datos = await peticion.json();
//     return datos;
// }

// 

//fn flecha
// 3 tipos de funciones en js
// función declarada function numbre de la funcion (){} -> cuando necesitamos llamarlas nuevamente en algún momento 
// función flecha o callback (parametro) => {accion a ejecutar} -> que se ejecute la acción en ese momento y ya, no necesitamos llamarla
// funcion anónima -> function() {} -> que se ejecute la acción en ese momento y ya, no necesitamos llamarla


fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => mostrarDatos(data).json())
.catch(error => console.log(error));

//.then(response => response.json()) -> data = response.json()

function mostrarDatos(data){

    let body = '';

    for(let i = 0; i<data.length; i++){
        //+= se encarga de agregar elementos
        //creando una fila y 3 columnas para cada datos que se obtuvo de mi petición fetch
        body += `
        <tr>
            <td>${data[i].id}</td>
            <td>${data[i].name}</td>
            <td>${data[i].email}</td>
        </tr>  `
    }
    //
    document.getElementById("data").innerHTML = body;
}

