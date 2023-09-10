let catalogoCompleto = [];

fetch("./productos.json")
  .then(response => response.json())
  .then(data => {
    catalogoCompleto = data;
    mostrarCatalogo(catalogoCompleto);
  })

const galeriaProductos = document.getElementById("galeria-productos");

const botonesMenu = document.querySelectorAll(".boton");

const tituloProductosHome = document.querySelector(".titulo-productos");

let botonAgregar = document.querySelectorAll(".agregar-producto");

let numeroDelCarrito = document.querySelector(".numero-productos");

let carritoDeCompras = [];

let productosEnCarritoMain;

const carritoLocasStorage = JSON.parse(localStorage.getItem("carrito"));
if(carritoLocasStorage){
  productosEnCarritoMain = carritoLocasStorage;
  actualizarNumeroEnCarrito();
}else{
  productosEnCarritoMain = [];
};

/* FUNCIONES */

function mostrarCatalogo(productosSeleccionados) {
  galeriaProductos.innerHTML = "";

  productosSeleccionados.forEach((catalogo) => {
    const div = document.createElement("div");
    div.classList.add("productos");
    div.innerHTML = `
        <img class="imagen-producto"
          src= "${catalogo.imagenCatalogo}"
          alt="${catalogo.nombreCatalogo}">
        <div class="informacion-producto">
          <h3 class="nombre-producto">${catalogo.nombreCatalogo}</h3>
          <p class="precio-producto">${catalogo.precioCatalogo}</p>
          <button class="agregar-producto" id="${catalogo.idCatalogo}">Agregar</button>
        </div>  
    `;
    /* Subo los cambios */
    galeriaProductos.append(div);
  });

  refrescarBotones();
}

// mostrarCatalogo(catalogoCompleto);

botonesMenu.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    if (
      e.currentTarget.id === boton.id &&
      e.currentTarget.id != "creacionesMenu"
    ) {
      const catalogoFiltrado = catalogoCompleto.filter(
        (filtro) => filtro.seccionCatalogo.nombrSeccion === e.currentTarget.id
      );
      tituloProductosHome.innerText = e.currentTarget.id;
      mostrarCatalogo(catalogoFiltrado);
    } else {
      tituloProductosHome.innerText = "Todos los productos";
      mostrarCatalogo(catalogoCompleto);
    }
  });
});

function refrescarBotones() {
  botonAgregar = document.querySelectorAll(".agregar-producto");

  botonAgregar.forEach((bAgregar) => {
    bAgregar.addEventListener("click", agregarCarrito);
  });
}

function agregarCarrito(e) {
  let item = e.currentTarget.id;
  const itemDelcarrito = catalogoCompleto.find(
    (productoDelCatalogo) => productoDelCatalogo.idCatalogo == item
  );

  let itemInCarrito = carritoDeCompras.find(
    (item) => item.idCatalogo === itemDelcarrito.idCatalogo
  );
  if (itemInCarrito === undefined) {
    itemDelcarrito.cantidad = 1;
    carritoDeCompras.push(itemDelcarrito);
  } else {
    itemInCarrito.cantidad = itemInCarrito.cantidad + 1;
  }
  actualizarNumeroEnCarrito();

  localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));
}


function actualizarNumeroEnCarrito() {
  let numeroDeItemEnCarrito = carritoDeCompras.reduce(
    (acumulador, producto) => acumulador + producto.cantidad,0);

    numeroDelCarrito.innerText = numeroDeItemEnCarrito;  

}
