
function prueba (){

   // var nombre ="juan"
    return nombre
}




// Comillas simples
let saludo = 'Hola, mundo';
let nuevoSaludo = saludo.replace("mundo", "amigo");



// Comillas dobles
let frase = "to identify protozoa in food";

// Plantillas literales
let nombre = 'Carlos';
let mensaje = `Hola, ${nombre}`;
            
let texto = "JavaScript";
let fraseConEspacios = "  Hola, JavaScript   ";

let lista = "manzana,banana,uva";
let arrayFrutas = lista.split(",");
let arrayfrase = frase.split(" ");         
let subcadena = frase.slice(11, 20);
let valor1 = 15
let valor2 = 12

let residuo = valor1 % valor2
console.log(valor1)
valor1 += valor2
console.log(valor1)
valor1-=valor2
console.log(valor1)


console.log(residuo)
console.log(nombre)
console.log(saludo)
console.log(frase)
console.log(frase.length)
console.log(mensaje)
console.log(nuevoSaludo); // "Hola, amigo"
console.log(texto.length); // 10
console.log(texto.toUpperCase()); // "JAVASCRIPT"
console.log(texto.toLowerCase()); // "javascript"
console.log(fraseConEspacios);
console.log(fraseConEspacios.trim()); // "Hola, JavaScript" recota espacios
console.log(arrayFrutas); // ["manzana", "banana", "uva"]           
console.log(arrayfrase)
console.log(subcadena); // "JavaScript"


let a =5
let b = "5"
let c = 9
let suma = a+b
console.log(a==b)
console.log(a===b)


console.log(typeof suma)
