console.log('hola')

const boton = document.getElementById('btn');
const loader = document.getElementById('loader');
let variable = false;

function validarForm(e){

    e.preventDefault();

    const usuario = document.getElementById('usuario').value;
    const contraseña = document.getElementById('pasword').value;
    console.log(usuario,contraseña)

    if(usuario != 'BIT' || contraseña != '2023'){
        console.log('no entraste')
        const form = document.querySelector('.formulario').className = "formulario2"
        const list = document.querySelector('.desaprobado').className = "desaprobado2"
    } else {
        console.log('entraste')
        const form = document.querySelector('.formulario').className = "formulario2"
        const list = document.querySelector('.listaDeaprobacion').className = "listaDeaprobacion2"  
    }

    usuario.value = '';
    contraseña.value = '';

    getUser();
    createTask()

    if(localStorage.getItem('user')){
        const form = document.getElementById('form');
        const list = document.getElementById('list');

        form.style.display = 'none';
        list.style.display = 'block';
    }
}

boton.addEventListener('click', validarForm);


async function getUser() {
    try{
        let usuarios = await fetch('https://jsonplaceholder.typicode.com/users');
        data = await usuarios.json();
        return data;
    }catch (error){
        alert('ocurrió un error')
    }finally{
        loader.classList.toggle('d-none');
    }
}

function createTask() {
    getUser().then((data) => {
      const list = document.getElementById('list');
      let usuario = [];

      data.forEach((user) => {
        const listElement = document.createElement('li');
        listElement.textContent = user.name; // Corrected line
        list.appendChild(listElement);

        usuario.push(user.name)
        
      });

      const almacen = localStorage.setItem('users', JSON.stringify(data));
        console.log(almacen)
    }).catch((error) => {
      console.log(error);
    });
  }
