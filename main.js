/* INICIO */
alert("Bienvenido a AM Bakery");

let usuario = prompt("Ingrese su usuario");
let contrasenia = prompt("Ingrese la contraseña");

while (usuario == "") {
  alert("El usuario no puede ser vacío");
  usuario = prompt("Ingrese su usuario");
}

while (contrasenia == "") {
  alert("La contraseña no puede ser vacía");
  contrasenia = prompt("Ingrese la contraseña");
}

if (usuario == "Sabrina" || usuario == "sabrina") {
  alert("Binvenida Sabrina, te extrañamos!. ");
}

// DEFINICIÓN DEL CATALOGO:

const catalogoCompleto = [
  { id: 1, nombre: "Macarons", precio: 2500 },
  { id: 2, nombre: "Torta Fantasía", precio: 3000 },
  { id: 3, nombre: "Torta Marroc", precio: 3500 },
  { id: 4, nombre: "Torta CheeseCake", precio: 4000 },
  { id: 5, nombre: "Lemon Pie", precio: 4500 },
];

alert("Catalogo Completo:");
// Mostrar Catalogo:
for (const mostrarCatalogo of catalogoCompleto) {
  alert(mostrarCatalogo.nombre);
}

//alert("Filtro por monto:")
const montoFiltro = parseInt(
  prompt("Por favor ingrese el valor a filtrar o cero para continuar")
);

if (montoFiltro != 0) {
  const filtro = catalogoCompleto.filter(
    (producto) => producto.precio > montoFiltro
  );
  for (const productosFiltrados of filtro) {
    alert(productosFiltrados.nombre);
    alert(productosFiltrados.precio);
  }
} else {
  alert("No se filtrara por monto");
}

// CREACIÓN DEL CARRITO
const carrito = [];

do {
  elegirproducto();
  const productoSeleccionado = catalogoCompleto.find((p) => p.id == producto1);
  carrito.push(productoSeleccionado);
} while (producto1 != 0);

//borro el último registro que queda vacío
carrito.pop();

//MOSTRAR EL CARRITO:
alert("Carrito Seleccionado:");
for (const mostrarCarrito of carrito) {
  alert(mostrarCarrito.nombre);
}

//SUMATORIA DEL TOTAL
const subTotal = carrito.reduce((accum, prod) => {
  return accum + prod.precio;
}, 0);

alert("Subtotal:");
alert(String(subTotal));

montoTotal(subTotal);

alert("Monto Total con IVA:");
alert(String(montoTotalcarrito));

// FUNCIONES
function elegirproducto() {
  producto1 =
    prompt(`Ingrese el número del producto deseada comprar o 0 para terminar: 
1 - Macarons;
2 - Torta Fantasía;
3 - Torta Marroc;
4 - CheeseCake;
5 - Lemon Pie; 
`);
  return producto1;
}

function montoTotal(monto) {
  montoTotalcarrito = monto * 1.21;
  return montoTotalcarrito;
}
