const titulo = document.getElementById("miTitulo"); 
titulo.textContent = "Nuevo Título Modificado";

// Seleccionar el elemento

// Selección por selector CSS
const parrafo = document.querySelector("p");
const todosLosParrafos = document.querySelectorAll("p");


let elemento = document.getElementById("miElemento");  // Selecciona por ID

let cajas = document.getElementById("miCaja"); 

// Selección por clase
const elementos = document.getElementsByClassName("miClase2");

let boton = document.getElementById("miBoton");
boton.addEventListener("click", function() {
    alert("¡Botón presionado!");
});

let boton2 = document.getElementById("miBoton2");
boton2.addEventListener("click", function() {
    cajas.style.backgroundColor = "red";
});
let boton3 = document.getElementById("miBoton3");
boton3.addEventListener("click", function() {
    cajas.style.backgroundColor = "blue";
});

// Cambiar el texto de un elemento
 // Selecciona todos los elementos con la clase "miCaja"


console.log(titulo);

console.log(elementos);

let boton4 = document.getElementById("nuevoDiv");
boton4.addEventListener("click", function() {
    const nuevoDiv = document.createElement('div');
nuevoDiv.textContent = 'Soy un nuevo DIV';
cajas.appendChild(nuevoDiv);
});

let boton5 = document.getElementById("BorrarDiv");
boton5.addEventListener("click", function() {
    const elementoParaEliminar = document.querySelector("div");
elementoParaEliminar.remove();
});