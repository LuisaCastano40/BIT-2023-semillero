
// console.log('Hola desarrolladores!')


//Datos primitivos

// let datoPrimitivo = undefined;
// datoPrimitivo=null;
// datoPrimitivo=NaN;
// console.log(typeof datoPrimitivo)


// let nombre = prompt("ingresa tu nombre");
// alert("hola usuario" + nombre);

// let numero1 = prompt ("ingresa número 1")
// let numero2 = prompt ("ingresa número 2")


// let conv1 = parseFloat(numero1)
// let conv2 = parseFloat(numero2)


// let number = prompt("Ingresa un número para optener el triple del mismo")
// let triple = parseFloat(number)*3

// alert(`hola! el triple de ${number} es: ${triple}`)

// let number = prompt("Ingresa un número para optener la tercera parte")
// let tercera = parseFloat(number)/3

// alert(`hola! la tercera parte de ${number} es: ${tercera}`)


// let number = prompt("Ingresa un número para optener la tercera parte")
// let tercera = parseFloat(number)/3

// alert(`hola! la tercera parte de ${number} es: ${tercera}`)


// let respuesta = prompt ("¿Desea continuar la operación? responda S para sí o N para No");
// let aux = false;

// while (aux == false){
//     if (respuesta == 'S'){
//         respuesta = prompt ("¿Desea continuar la operación? responda S para sí o N para No");
//     }
//     if (respuesta == 'N'){
//         alert('Ha terminado la operación')
//         aux = true;
//     }
// }


// let number = prompt("Ingresa un número")

// for (let i=0; i<=number; i++){
//     alert(`Los números son ${i}`);
// }



let number = prompt("Ingresa un número")
const numeros = [];

for (let i=parseInt(number); i>=0; i--){
    numeros.push(i);
 }
console.log(numeros);
 alert(`Los números son ${numeros.join(',')}`);
 

