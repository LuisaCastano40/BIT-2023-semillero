const cardForm = document.getElementById('cardForm');
const cardsContainer = document.getElementById('cardsContainer');
const cardPregunta = document.querySelector('.cardPregunta');
const closeForm = document.getElementById('closeForm');

// Almaceno las cards creadas
let cards = [];

//Verifico contenido de mi local storage
let dataCards = JSON.parse(localStorage.getItem('cards'));
console.log(dataCards);

if (dataCards !== undefined && dataCards !== null){
  if (dataCards.length>0){
    for (i = 0; i<dataCards.length ;i++) {
      cards.push(dataCards[i]);
      console.log(cards);
    }
    renderCards();
  }
} else {
  dataCards = [];
}
console.log(dataCards);

// Event listener for the form submission
cardForm.addEventListener('submit', addCard);
closeForm.addEventListener('click', closingForm);

function closingForm (){
  const visible = document.querySelector('.d-content');
  visible.style.visibility = 'hidden';
}

function addCard (evento) {
  evento.preventDefault();
  
    // Get the form inputs
    const image = document.getElementById('image').value;
    // image.onchange = () =>{
    //   image.src = URL.createObjectURL(image.files[0]);
    // }
    console.log(image)
    const category = document.getElementById('categorie').value;
    const question = document.getElementById('question').value;
    const answer = document.getElementById('answer').value;
    const idCard = generateUniqueID();
    console.log(idCard);

    if (image === '' || category === '' || question === '' || answer === ''){
    alert('llene los datos');
    } else {
             // Create a new card object
            const card = { image, category, question, answer, idCard };
             // Add the card to the array
            cards.push(card);
            // guardo arreglo de tarjetas en mi localstorage
            localStorage.setItem('cards', JSON.stringify(cards));
            
            console.log(cards)

            // Clear the form inputs
            cardForm.reset();
            // Render the cards
            renderCards();
    }  
}

function renderCards() {
  cardsContainer.innerHTML = '';
  
    cards.forEach((card)=>{

       cardsContainer.innerHTML += `
         <div class="cardPregunta">
           <div class="container-pregunta">
               <div class="card-Image">
                   <img src="assets/images/img1.PNG" alt="images-card">
                   <div class="containerAction">
                       <img class="edit" src="assets/icons/IconEdit.svg" alt="editIcon" onclick="editCard(${card.idCard})">
                       <img class="trash" src="assets/icons/IconTrash.svg" alt="trashIcon" onclick="deleteCard(${card.idCard})">
                   </div>
               </div>
               <div class="card-Pregunta">
                   <span>${card.category}</span>
                   <h3>${card.question}.</h3>
                   <p>${card.answer}.</p>
               </div>
           </div>       
         </div>`;
     });
   }



function deleteCard(id){
  if(window.confirm('¿Estas seguro de eliminar esta tarjeta?')){ 
    cards.forEach((card, index)=>{
      if(card.idCard == id){
        cards.splice(index,1);
        localStorage.setItem('cards', JSON.stringify(cards));
        renderCards();
      }
    })
  }
}

// function editCard(id){
//   const image = document.getElementById('image').value;
//   const category = document.getElementById('categorie').value;
//   const question = document.getElementById('question').value;
//   const answer = document.getElementById('answer').value;
//   cards.forEach((card,index)=>{
//     if(card.idCard == id){
//       card.image=image;
//       card.category=category;
//       card.question=question;
//       card.answer=answer;
//       localStorage.setItem('cards', JSON.stringify(cards));
//       renderCards();
//     }
//   })
// }

function generateUniqueID() {
  const timestamp = Date.now().toString();
  const randomNum = Math.floor(Math.random() * 1000).toString();
  const uniqueID = timestamp + randomNum;
  return uniqueID;
}