const valor1 = document.getElementById("valor1");
const valor2 = document.getElementById("valor2");


function ejecutar(){
let a = valor1.value
let b = valor2.value
let suma = a+b
console.log(typeof suma);
resultado1.textContent = suma;
}





let mensaje = (edad => 18) ? "Eres mayor de edad" : "Eres menor de edad";

console.log(mensaje)

let dia = 7;

switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    default:
        console.log("Día no válido");
}


// Ejemplo de bucle for
for (let i = 0; i < 5; i++) {
    console.log('Iteración número: ' + i);
}
           