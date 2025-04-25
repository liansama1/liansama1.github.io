const inp_tarea = document.getElementById("tarea");
const inp_fecha = document.getElementById("fecha");
const boton_guardar = document.getElementById("guardar");
const lista_tareas = document.getElementById("lista-tareas");
let tareas_guardadas = [];

function guardar_tarea(){
    let tarea = inp_tarea.value;
    let fecha = inp_fecha.value;
    let objeto_tarea = { "tarea": tarea, "fecha": fecha};
    tareas_guardadas.push(objeto_tarea);
    localStorage.setItem("tareas", JSON.stringify(tareas_guardadas));
    let nuevo_div = document.createElement("li");
    nuevo_div.textContent = tarea + " | " + fecha 
    lista_tareas.appendChild(nuevo_div);
}

function cargar_tareas(){
    tareas_guardadas = JSON.parse(localStorage.getItem("tareas"));
    if (!tareas_guardadas) {
        tareas_guardadas = [];
    }
    for (let i = 0; i < tareas_guardadas.length; i++){
        let elementos = tareas_guardadas[i];
        let tarea = elementos.tarea;
        let fecha = elementos.fecha;
        let nuevo_li = document.createElement("li");
        nuevo_li.textContent = tarea + " | " + fecha + " | " +
        let nuevo_boton = document.createElement("button");
        nuevo_boton.textContent = "Eliminar";
        nuevo_boton.addEventListener("click", function() {
            tareas_guardadas.splice(i, 1);
            localStorage.setItem("tareas", JSON.stringify(tareas_guardadas));
            lista_tareas.removeChild(nuevo_li);
        })
        lista_tareas.appendChild(nuevo_li);
    }
}

boton_guardar.addEventListener("click", guardar_tarea)

localStorage.setItem( tarea, fecha)

