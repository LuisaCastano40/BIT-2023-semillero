const pantalla = document.getElementById('screen');
const botones = document.querySelectorAll('button');
let aux = false;


function  changeMode(pantalla) {
  if (aux){
    const c = pantalla.className ="container-screen2";
    const a = document.querySelector('.container-calculator').className ='container-calculator2';
    const b = document.querySelector('.container-buttons').className ='container-buttons2';
    console.log("dark Mode");
  }
  else{
    const c = pantalla.className ="container-screen";
    const a = document.querySelector('.container-calculator2').className ='container-calculator';
    const b = document.querySelector('.container-buttons2').className ='container-buttons';
  }

}

botones.forEach((btn) => {
  btn.addEventListener('click', () => {
    
    pantalla.value += btn.value;

    if (btn.id === '=') {
      pantalla.value = eval(pantalla.value);
    }
    else if (btn.id === 'C') {
      pantalla.value = '';
    }
    else if (btn.id === '%') {
      pantalla.value = parseInt(pantalla.value)/100;
    }
    else if (btn.id === 'DE') {
      pantalla.value = pantalla.value.slice(0,-1);
    }
    else if (btn.id === 'D/L') {
      aux=!aux;
      changeMode(pantalla);
    }
  })
})
