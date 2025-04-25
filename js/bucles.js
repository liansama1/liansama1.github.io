// Ejemplo de bucle for
//let total = 0;
//for (let i = 0; i <= 50; i++) {
//    console.log('Iteración número: ' + i);
//}

// Ejemplo de bucle while
//let contador = 0;
//while (contador < 13) {
 //   console.log('Contador: ' + contador);
   // contador++;
//}

// Ejemplo de bucle while
//let contador1 = 0;
//while (contador1 < 5) {
  //  console.log('Contador1: ' + contador1);
    //contador1++;
//}

// Ejemplo de bucle for...of
//let numeros = [10, 20, 30, 40, 50];
//for (let numero of numeros) {
//    console.log('Número: ' + numero);
//}
        
// Ejemplo de JavaScript Asincrónico con setTimeout
//console.log("Inicio");
//setTimeout(() => {
//    console.log("Tarea Asincrónica");
//}, 5000);
//console.log("Fin");

async function fetchData() {
    let respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");
    let datos = await respuesta.json();
    for(let valor of datos) {
        console.log(valor["title"]);
        const tablerow = document.createElement("tr");
        const tabletitle = document.createElement("td");
        const tablebody = document.createElement("td");
        const tableid = document.createElement("td");
        tabletitle. textContent = valor.title
        tablebody.textContent = valor.body
        tablerow.appendChild(tabletitle);
        tablerow.appendChild(tablebody);
        tableid.textContent = tableid
        tabla.appendChild(tablerow);

    }
}

fetchData();