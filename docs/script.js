//Importamos mi objeto js con las preguntas
import { preguntas } from "./data.js";


//Traemos los elementos necesarios del HTML
const cardsContainer = document.getElementById('cardsContainer');
const closeForm = document.getElementById('closeForm');
const btnAdd = document.getElementById('btn-Add');
const categorieTec = document.getElementById('categorieTec');
const categorieGit = document.getElementById('categorieGit');
const categorieHtml = document.getElementById('categorieHtml');
const categorieCss = document.getElementById('categorieCss');
const categorieJs = document.getElementById('categorieJs');
const categorieAll = document.getElementById('categorieAll');

//variables paginación
const limit = 9;
let thisPage = 1;

// Almaceno las cards existentes y creadas
let cards = preguntas;


//Escuchamos los eventos
closeForm.addEventListener('click', closingForm);
btnAdd.addEventListener('click', openingForm);
window.addEventListener('resize', listPage);
categorieTec.addEventListener('click', () => {
  filter(1);
});
categorieGit.addEventListener('click', () => {
  filter(2);
});
categorieHtml.addEventListener('click', () => {
  filter(3);
});
categorieCss.addEventListener('click', () => {
  filter(4);
});
categorieJs.addEventListener('click', () => {
  filter(5);
});
categorieAll.addEventListener('click', () => {
  filter(6);
});



function renderCards() {
  cardsContainer.innerHTML = '';

  cards.forEach((card) => {

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
                   <span class="categoria">${card.categoria}</span>
                   <h3 class="pregunta">${card.pregunta}.</h3>
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
}

function listPage() {
  const maxVisibleLinks = calculateMaxVisibleLinks();
  let count = Math.ceil(cards.length / limit);
  let listPage = document.querySelector('.listPage');
  listPage.innerHTML = '';

  // prev
  if (thisPage != 1) {

    let prev = document.createElement('li');
    prev.innerHTML = ` <i class='bx bx-chevrons-left'>`;
    prev.addEventListener('click', () => changePage(thisPage - 1));
    listPage.appendChild(prev);
  }

  // new
  const startPage = Math.max(1, thisPage - Math.floor(maxVisibleLinks / 2));
  const endPage = Math.min(count, startPage + maxVisibleLinks - 1);

  for (let i = startPage; i <= endPage; i++) {
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
    next.innerHTML = ` <i class='bx bx-chevrons-right'>`;
    next.addEventListener('click', () => changePage(thisPage + 1));
    listPage.appendChild(next);
  }
}

function calculateMaxVisibleLinks() {
  // Calculate the maximum number of visible links based on screen width
  const screenWidth = window.innerWidth;

  if (screenWidth < 768) {
    return 3; // For smaller screens, show 3 links
  } else if (screenWidth < 1024) {
    return 5; // For medium screens, show 5 links
  } else {
    return 7; // For larger screens, show 7 links
  }
}

function closingForm() {
  const visible = document.querySelector('.d-content');
  visible.style.visibility = 'hidden';
}

function openingForm() {
  const visible = document.querySelector('.d-content');
  visible.style.visibility = 'visible';
}

function filter(num){
  const cardItems = document.querySelectorAll('.cardPregunta');
  

  cardItems.forEach(cardItem => {
    const cardCategorie = cardItem.querySelector('.categoria');
    const categoriaContent = cardCategorie.textContent.toLowerCase();

    if (num === 1 && categoriaContent.includes('tecnología')) {
      cardItem.style.display = 'block';
    } else if (num === 2 && categoriaContent.includes('git y github')) {
      cardItem.style.display = 'block';
    } else if (num === 3 && categoriaContent.includes('html')) {
      cardItem.style.display = 'block';
    } else if (num === 4 && categoriaContent.includes('css')) {
      cardItem.style.display = 'block';
    } else if (num === 5 && categoriaContent.includes('javascript')) {
      cardItem.style.display = 'block';
    } else if (num === 6 || !num) {
      cardItem.style.display = 'block';
        // Update pagination
          thisPage = 1;
          loadCard();
          listPage();
    } else {
      cardItem.style.display = 'none';
    }
  });

}


// Initial load
renderCards();
loadCard();
listPage();