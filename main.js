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

// VARIABLES
let producto1 = "";
let nombreProducto = "";
let precioProducto = 0;
let montoTotalPorProducto = 0;

elegirproducto();

// FUNCIONES

function elegirproducto() {
  producto1 = prompt(`Ingrese el número del producto deseada comprar: 
1 - Macarons;
2 - Torta Fantasía;
3 - Torta Marroc;
4 - CheeseCake;
5 - Lemon Pie; 
`);

  switch (producto1) {
    case "1":
      nombreProducto = "Macarons";
      precioProducto = 3500;
      console.log(`El producto seleccionado fue: ${nombreProducto}`);
      break;
    case "2":
      nombreProducto = "Torta Fantasía";
      precioProducto = 5800;
      console.log(`El producto seleccionado fue: ${nombreProducto}`);
      break;
    case "2":
      nombreProducto = "Torta Marroc";
      precioProducto = 5000;
      console.log(`El producto seleccionado fue: ${nombreProducto}`);
      break;
    case "3":
      nombreProducto = "CheeseCake";
      precioProducto = 2500;
      console.log(`El producto seleccionado fue: ${nombreProducto}`);
      break;
    case "4":
      nombreProducto = "CheeseCake";
      precioProducto = 3600;
      console.log(`El producto seleccionado fue: ${nombreProducto}`);
      break;
    case "5":
      nombreProducto = "Lemon Pie";
      precioProducto = 4000;
      console.log(`El producto seleccionado fue: ${nombreProducto}`);
      break;
    default:
      console.log("Ups! no seleccionó ningún producto");
      break;
  }
  control(producto1);
}

function control(producto1) {
  if (
    producto1 == "1" ||
    producto1 == "2" ||
    producto1 == "3" ||
    producto1 == "4" ||
    producto1 == "5"
  ) {
    let cantidad = prompt("Ingrese la cantidad deseada del producto");

    while (cantidad <= 0) {
      console.log("El monto debe ser mayor a cero");
      cantidad = prompt("Por favor ingrese la cantidad deseada");
    }
    calculoMontoProducto(nombreProducto, cantidad, precioProducto);
  } else {
    alert("Debe ingresar el número del producto que desea para continuar ");
    elegirproducto();
  }
}

function calculoMontoProducto(nombreProducto, cantidad, precioProducto) {
  montoTotalPorProducto = cantidad * precioProducto * 1.21;
  alert(
    `El monto total + IVA de ${nombreProducto} es: $ ${montoTotalPorProducto}`
  );
  alert("Gracias por su compra!");
}
