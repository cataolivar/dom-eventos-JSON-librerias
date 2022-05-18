// ARRAY

let productos = [
    {id:1, nombre: 'Televisor', precio: 2000 },
    {id:2, nombre: 'Celular', precio: 1800 },
    {id:3, nombre: 'Laptop', precio: 1600 },
];

// MAP + RETURN

const nombreProducto = productos.map(function(productos) { return productos.nombre; });
const precioProducto = productos.map(function(productos) { return productos.precio; });

//JSON almacenar datos

const almacenar = (clave,valor) => {localStorage.setItem (clave,valor)};
almacenar ("productosLista", JSON.stringify(productos));
//for (const producto of productos) {almacenar (producto.nombre, JSON.stringify(producto));}

//recuperalos

const almacenados = JSON.parse (localStorage.getItem ("productosLista"));
const nproductos = [];

for (i in productos)
nproductos.push (productos[i])

//DOM + EVENTOS
//OBTIENE LA TABLA
let tabla = document.getElementById("tabla");

//OBTIENE LOS BOTONES
let boton1 = document.getElementById("boton1");
let boton2 = document.getElementById("boton2");
let boton3 = document.getElementById("boton3");

//OBTIENE LOS PRODUCTOS Y VALORES
//mostrar datos del storage

let televisor = nproductos[0].nombre;
let precioTelevisor = nproductos[0].precio;

let celular = productos[1].nombre;
let precioCelular = productos[1].precio;

let laptop = productos [2].nombre;
let precioLaptop = productos[2].precio;

//AGREGAR A LA TABLA
function agregar(producto, precio)
{
    let row = tabla.insertRow(-1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    cell.textContent = producto;
    cell1.textContent = precio;
}

//SE AGREGAN LOS EVENTOS CON LA FNCION Y SUS PARAMETROS
boton1.addEventListener("click", function(e)
{
    e.preventDefault();
    agregar(televisor, precioTelevisor);

    Toastify({
        text: "Agregaste televisor a tu carrito.",
        duration: 3000,
        gravity: 'top',
        position: 'right',

        style: {
            background: "black",
          }
    }).showToast();
}
)

boton2.addEventListener("click", function(e)
{
    e.preventDefault();
    agregar(celular, precioCelular);

    Toastify({
        text: "Agregaste celular a tu carrito.",
        duration: 3000,
        gravity: 'top',
        position: 'right',

        style: {
            background: "black",
          }
    }).showToast();

})

boton3.addEventListener("click", function(e)
{
    e.preventDefault();
    agregar(laptop, precioLaptop);

    Toastify({
        text: "Agregaste laptop a tu carrito.",
        duration: 3000,
        gravity: 'top',
        position: 'right',

        style: {
            background: "black",
          }
    }).showToast();

})

/*

//SIMULADOR + ARROW

const resta = (a, b) => a - b;
const multiplicar = (a, b) => a * b;

let precio = prompt("Ingrese su monto para aplicar el descuento del 10%.")
let descuento = precio * 0.10;
let nuevoPrecio = resta(precio, descuento);

alert("El nuevo precio con el descuento aplicado es de $" + nuevoPrecio);

let cantidad = prompt("Ahora ingrese la cantidad de articulos")
let nuevoPrecio1 = multiplicar(nuevoPrecio, cantidad);

alert("El total es de $" + nuevoPrecio1)

*/


//FORMULARIO

let miFormulario = document.getElementById("formulario");
let enviar = document.getElementById("enviar");

miFormulario.addEventListener("submit", function (event) {miFormulario.submit; (console.log ("ok")); event.preventDefault()})
