const cardForm = document.getElementById('cardForm');
const cardsContainer = document.getElementById('cardsContainer');
const cardPregunta = document.querySelector('.cardPregunta');

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

const addCard = (evento)=>{
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
    console.log(image,category,question,answer);
    
    if (image === '' || category === '' || question === '' || answer === ''){
    alert('llene los datos')
    } else {
             // Create a new card object
            const card = { image, category, question, answer };
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
                       <img class="edit" src="assets/icons/IconEdit.svg" alt="editIcon">
                       <img class="trash" src="assets/icons/IconTrash.svg" alt="trashIcon">
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
  


// Event listener for the form submission
cardForm.addEventListener('submit', addCard);



