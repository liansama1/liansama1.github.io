//1. Esperar a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function() {
    const botonesAgregar = document.querySelectorAll(".agregar-carrito");
    if (botonesAgregar.length > 0) {
        inicializarPaginaProductos();
    }
    const paginaCarrito = document.getElementById("productos-carrito");
    if (paginaCarrito) {
        mostrarProductosCarrito();
    }
    actualizarContadorCarrito();
});

// 2. Funciones para la página de productos
function inicializarPaginaProductos() {
    const botonesAgregar = document.querySelectorAll(".agregar-carrito");
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

//agregar productos al carrito
function agregarAlCarrito(evento) {
    const boton = evento.target;
    const producto = boton.closest(".producto");
    const id = producto.dataset.id;
    const nombre = producto.dataset.nombre;
    const precio = parseFloat(producto.dataset.precio);
    const cantidad = parseInt(producto.querySelector(".cantidad").value);
    const productoAgregado = {
        id: id,
        nombre: nombre,
        precio: precio,
        cantidad: cantidad
    };
    guardarProductoEnCarrito(productoAgregado);
    alert(`Se agregó ${cantidad} ${nombre} al carrito`);
    actualizarContadorCarrito();
}

//guardar productos en localStorage
function guardarProductoEnCarrito(productoNuevo) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const productoExistente = carrito.findIndex(item => item.id === productoNuevo.id);
    if (productoExistente !== -1) {
        carrito[productoExistente].cantidad += productoNuevo.cantidad;
    } else {
        carrito.push(productoNuevo);
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// 5. Función para actualizar el contador del carrito
function actualizarContadorCarrito() {
    const contadorCarrito = document.getElementById("contador-carrito");
    if (!contadorCarrito) return;
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const totalProductos = carrito.reduce((total, producto) => total + producto.cantidad, 0);
    contadorCarrito.textContent = totalProductos;
}

