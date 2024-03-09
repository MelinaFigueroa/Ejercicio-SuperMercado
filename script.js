"use strict";

// Mensaje de bienvenida
alert("¡Bienvenid@ a mi página web!");

// Variables para almacenar datos de productos y precio
let total = 0;
let productos = [];
let precioUnitario = [];
let cantidadDeProducto = [];

// Obtener elementos del DOM
let botonAgregar = document.getElementById("agregarProducto");
botonAgregar.addEventListener("click", agregarProducto);

let botonCalcular = document.getElementById("calcularTotal");
botonCalcular.addEventListener("click", calcularCompra);

let miLista = document.querySelector(".lista");

let contenedor = document.querySelector(".contenedor");
contenedor.classList.add("contenedor");

let input = document.querySelector(".inputBlock");
input.classList.add("inputBlock");

let titulo = document.querySelector(".tipoDeLetra");
titulo.classList.add("tipoDeLetra");

let boton = document.querySelector(".boton");
boton.classList.add("boton");

// Función para agregar productos a la lista
function agregarProducto(){
    let producto = document.querySelector(".productoUnico").value;
    productos.push(producto);

    let precio = parseInt(document.querySelector(".precioUnitario").value);
    precioUnitario.push(precio);

    let cantidad = parseInt(document.querySelector(".cantidadProducto").value);
    cantidadDeProducto.push(cantidad);

    let lista = document.createElement("li");
    lista.innerHTML = "Producto: " + producto + " - Cantidad: " + cantidad + " - Precio: " + precio;
    miLista.appendChild(lista);
}

// Función para calcular el total de la compra
function calcularCompra(){
    total = 0;
    for(let i = 0; i < productos.length; i++){
        total += precioUnitario[i] * cantidadDeProducto[i];
    }
    document.querySelector("h1").innerHTML = "Total de su compra: " + total.toFixed(2);
}
