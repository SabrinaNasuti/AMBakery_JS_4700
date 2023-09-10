/* CATALOGO COMPLETO */
const catalogoCompleto = [
  {
    idCatalogo: 1,
    nombreCatalogo: "Torta Ensueño",
    precioCatalogo: "$2500",
    imagenCatalogo:
      "https://res.cloudinary.com/dfbwcrulp/image/upload/v1676417150/desarrollo_web/producto-1_os8f08.jpg",
    seccionCatalogo: {
      idSeccion: 1,
      nombrSeccion: "Tortas",
    },
  },

  {
    idCatalogo: 2,
    nombreCatalogo: "Torta White Album",
    precioCatalogo: "$2500",
    imagenCatalogo:
      "https://res.cloudinary.com/dfbwcrulp/image/upload/v1676417081/desarrollo_web/producto-3_ohyann.jpg",
    seccionCatalogo: {
      idSeccion: 2,
      nombrSeccion: "Tortas",
    },
  },
  {
    idCatalogo: 3,
    nombreCatalogo: "Torta Rainbow Party",
    precioCatalogo: "$2500",
    imagenCatalogo:
      "https://res.cloudinary.com/dfbwcrulp/image/upload/v1676417075/desarrollo_web/producto-4_lylxw4.webp",
    seccionCatalogo: {
      idSeccion: 3,
      nombrSeccion: "Tortas",
    },
  },

  {
    idCatalogo: 4,
    nombreCatalogo: "Torta Green Lovers",
    precioCatalogo: "$2500",
    imagenCatalogo:
      "https://res.cloudinary.com/dfbwcrulp/image/upload/v1676417080/desarrollo_web/producto-5_serrrj.jpg",
    seccionCatalogo: {
      idSeccion: 4,
      nombrSeccion: "Tortas",
    },
  },

  {
    idCatalogo: 5,
    nombreCatalogo: "Torta Sakura",
    precioCatalogo: "$2500",
    imagenCatalogo:
      "https://res.cloudinary.com/dfbwcrulp/image/upload/v1676417081/desarrollo_web/producto-6_cnlt0v.jpg",
    seccionCatalogo: {
      idSeccion: 5,
      nombrSeccion: "Tortas",
    },
  },

  {
    idCatalogo: 6,
    nombreCatalogo: "Violet Evergarden",
    precioCatalogo: "$2500",
    imagenCatalogo:
      "https://res.cloudinary.com/dfbwcrulp/image/upload/v1676417150/desarrollo_web/header-creaciones.jpg",
    seccionCatalogo: {
      idSeccion: 6,
      nombrSeccion: "Tortas",
    },
  },

  {
    idCatalogo: 7,
    nombreCatalogo: "Macarons Stargazers",
    precioCatalogo: "$2500",
    imagenCatalogo:
      "https://res.cloudinary.com/dfbwcrulp/image/upload/v1676417146/desarrollo_web/producto-7_enwyxn.jpg",
    seccionCatalogo: {
      idSeccion: 7,
      nombrSeccion: "Macarons",
    },
  },
  {
    idCatalogo: 8,
    nombreCatalogo: "Macarons Barbie",
    precioCatalogo: "$2500",
    imagenCatalogo:
      "https://res.cloudinary.com/dfbwcrulp/image/upload/v1676417081/desarrollo_web/producto-8_cccfqx.jpg",
    seccionCatalogo: {
      idSeccion: 8,
      nombrSeccion: "Macarons",
    },
  },
  {
    idCatalogo: 9,
    nombreCatalogo: "Alfajores Cumbre Argentina",
    precioCatalogo: "$2500",
    imagenCatalogo:
      "https://res.cloudinary.com/dfbwcrulp/image/upload/v1676417081/desarrollo_web/producto-2_bo01mv.jpg",
    seccionCatalogo: {
      idSeccion: 9,
      nombrSeccion: "Alfajores",
    },
  },
];

const galeriaProductos = document.getElementById("galeria-productos");

const botonesMenu = document.querySelectorAll(".boton");

const tituloProductosHome = document.querySelector(".titulo-productos");

let botonAgregar = document.querySelectorAll(".agregar-producto");

let numeroDelCarrito = document.querySelector(".numero-productos");

let carritoDeCompras = [];

let productosEnCarritoMain;

const carritoLocasStorage = JSON.parse(localStorage.getItem("carrito"));
if (carritoLocasStorage) {
  productosEnCarritoMain = carritoLocasStorage;
  actualizarNumeroEnCarrito();
} else {
  productosEnCarritoMain = [];
}

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

mostrarCatalogo(catalogoCompleto);

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
    (acumulador, producto) => acumulador + producto.cantidad,
    0
  );

  numeroDelCarrito.innerText = numeroDeItemEnCarrito;
}
