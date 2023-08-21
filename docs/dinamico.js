// Initialize the variable to false by default
const icon1 = document.querySelector("#icon1");
const icon2 = document.querySelector("#icon2");
const button= document.querySelector(".btn");
let variable = false;

// Check if the variable state is stored in local storage
if (localStorage.getItem('variable')) {
  // If it is, use the stored value instead
  variable = JSON.parse(localStorage.getItem('variable'));
}

// Function to toggle the variable state and icon visibility
function changeVariableState() {
  variable = !variable; // Toggle the variable state
  localStorage.setItem('variable', JSON.stringify(variable)); // Save the new state to local storage

  // Toggle the visibility of the icons based on the variable state
  if (variable) {
        icon1.style.display = "none";
        icon2.style.display = "block";
      } else {
        icon1.style.display = "block";
        icon2.style.display = "none";
      }
}

// Check the initial state of the variable and set the icon visibility accordingly
if (variable) {
  icon1.style.display = 'none';
  icon2.style.display = 'block';
} else {
  icon1.style.display = 'block';
  icon2.style.display = 'none';
}

// Add an event listener to the button to toggle the variable and icon visibility on click
button.addEventListener("click", changeVariableState);

//OPCIÓN1


// const icon1 = document.querySelector("#icon1");
// const icon2 = document.querySelector("#icon2");
// const button= document.querySelector(".btn");
// let variable = false;

// function changeVariableState() {
//   variable = !variable;
//   if (variable) {
//     icon1.style.display = "none";
//     icon2.style.display = "block";
//   } else {
//     icon1.style.display = "block";
//     icon2.style.display = "none";
//   }
// }
// // La vista inicial de mis iconos
// document.addEventListener("DOMContentLoaded", () => {
//   icon1.style.display = "block";
//   icon2.style.display = "none";
// });

// button.addEventListener("click", changeVariableState);

