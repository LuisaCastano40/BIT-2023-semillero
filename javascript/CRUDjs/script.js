const d = document;
const list = d.getElementById('list');
const form = d.getElementById('form');


//Creamos mi objeto que trabaja como base de datos fake
const preguntasRespuestas = 
[{
    pregunta: "¿Qué es html?", 
    respuesta: "lenguaje de marcado"},
{
    pregunta: "¿Qué es css?", 
    respuesta: "lenguaje de estilos"
}];

let lists = null;
let isEdit= false;


//Lo que quiero se ejecute al cargar la página
d.addEventListener("DOMContentLoaded", () =>{
    showItems();
    eventListeners();
})

function eventListeners() {
    form.addEventListener("submit",addItem);

}

//handleSubmit
function addItem(e){
    e.preventDefault();

    const pregunta = form.pregunta.value;
    const respuesta = form.respuesta.value;
    
    console.log(preguntasRespuestas);
    if (isEdit){
        preguntasRespuestas[isEdit.id]={pregunta: pregunta, respuesta: respuesta};
        isEdit=false;
        textSubmit();
    } else{
        preguntasRespuestas.push({pregunta: pregunta, respuesta: respuesta});
    }
    
    form.reset();
    showItems();
}

function showItems(){

//Leemos lo que está en mi arreglo de objetos
let items = '';
for(let i=0;i < preguntasRespuestas.length; i++){
    items += 
    `<li id="${i}">
    ${preguntasRespuestas[i].pregunta} : 
    ${preguntasRespuestas[i].respuesta} 
    <button class="btn btn-update">editar</button>
    <button class="btn btn-delete">eliminar</button>
    </li>`
    console.log(preguntasRespuestas);
}
list.innerHTML = items;


//Leemos uno por uno cada elemento
const btnUpdate = d.querySelectorAll('.btn-update');
const btnDelete = d.querySelectorAll('.btn-delete');

//Identificamos cuando queremos editar
btnUpdate.forEach(btn =>{
    btn.addEventListener("click",()=>{
        handleUpdate(btn.parentNode.id)
        //siempre que se trabaje con eventos, para enviar argumentos, se hace dentro de otra función
    });
})

//Identificamos cuando queremos eliminar
btnDelete.forEach(btn =>{
    btn.addEventListener("click",()=>{
        handleDelete(btn.parentNode.id)
        //siempre que se trabaje con eventos, para enviar argumentos, se hace dentro de otra función
    });
})

}


function handleUpdate (id) {
    isEdit={id:id} //id:id
    
    const current =
    {pregunta: preguntasRespuestas[id].pregunta, 
    respuesta: preguntasRespuestas[id].respuesta};
    form.pregunta.value = current.pregunta;
    form.respuesta.value = current.respuesta;

    textSubmit();
}

function handleDelete (id) {
    console.log("deleteId:" + id);
    preguntasRespuestas.splice(id,1);
    showItems();
}

function textSubmit(){
    form.submit.textContent = isEdit ? 'guardar' : 'agregar';
}

//ciclo for of
// for (const pr of preguntasRespuestas){
//     items += `<li>${pr.pregunta} : 
//     ${pr.respuesta} <span id="">+<span> </li>`
//     console.log(pr);
// }
