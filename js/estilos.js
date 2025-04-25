let caja = document.getElementById("miCaja")
const boton2 = document.getElementById("boton2")
const boton3 = document.getElementById("boton3")

function agregar(){
    caja.classList.add("highligth");
}

function quitar(){
    caja.classList.remove("highligth");
}

boton2.addEventListener("click", quitar)
boton3.addEventListener("click", function() {
    caja.classList.toggle("highlight")        
 });



 let estudiantes = ["jorge", "carlos", "Pedro", "juan", "Andres" ]

 let persona ={nombre: "andres", edad: 36}