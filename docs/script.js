//Importamos mi objeto js con las preguntas
import { preguntas } from "./data.js";

const cardsContainer = document.getElementById('cardsContainer');
const closeForm = document.getElementById('closeForm');

//variables vaginación
const limit = 9;
let thisPage = 1;

// Almaceno las cards existentes y creadas
let cards = preguntas;


if (cards !== null && cards !== undefined && cards !== ''){
  renderCards ();
  loadCard();
}

closeForm.addEventListener('click', closingForm);

function renderCards() {
  cardsContainer.innerHTML = '';
  
    cards.forEach((card)=>{

       cardsContainer.innerHTML += `
         <div class="cardPregunta">
           <div class="container-pregunta">
               <div class="card-Image">
                   <img src="assets/images/img1.png" alt="images-card">
                   <div class="containerAction">
                       <img class="edit" src="assets/icons/IconEdit.svg" alt="editIcon" onclick="editCard(${card.id})">
                       <img class="trash" src="assets/icons/IconTrash.svg" alt="trashIcon" onclick="deleteCard(${card.id})">
                   </div>
               </div>
               <div class="card-Pregunta">
                   <span>${card.categoria}</span>
                   <h3>${card.pregunta}.</h3>
                   <p>${card.respuesta}.</p>
               </div>
           </div>       
         </div>`;
     });
   }

   function loadCard() {
  
    let beginGet = limit * (thisPage - 1);
    let endGet = limit * thisPage - 1;
  
    const cards = document.querySelectorAll('.cardPregunta');
  
    cards.forEach((card, index) => {
      if (index >= beginGet && index <= endGet) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
    listPage();
  };


  function changePage(i) {
      thisPage = i;
      loadCard();
      listPage(); // Rebuild the pagination links
  }
  
  function listPage() {
      let count = Math.ceil(cards.length / limit);
      let listPage = document.querySelector('.listPage');
      listPage.innerHTML = '';
  
      // prev
      if (thisPage != 1) {
          let prev = document.createElement('li');
          prev.innerHTML = 'prev';
          prev.addEventListener('click', () => changePage(thisPage - 1));
          listPage.appendChild(prev);
      }
  
      // new
      for (let i = 1; i <= count; i++) {
          let nextPage = document.createElement('li');
          nextPage.innerHTML = i;
  
          if (i == thisPage) {
              nextPage.classList.add('active');
          }
          nextPage.addEventListener('click', () => changePage(i));
          listPage.appendChild(nextPage);
      }
  
      // next
      if (thisPage != count) {
          let next = document.createElement('li');
          next.innerHTML = 'next';
          next.addEventListener('click', () => changePage(thisPage + 1));
          listPage.appendChild(next);
      }
  }
  

  function closingForm (){
    const visible = document.querySelector('.d-content');
    visible.style.visibility = 'hidden';
  }