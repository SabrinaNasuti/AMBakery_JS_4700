const carrito = JSON.parse(localStorage.getItem("carrito"));

const carritoVacio = document.querySelector(".carrito-vacio");
const carritoProductos = document.querySelector(".carrito-productos");

const carritoComprar = document.querySelector(".carrito-comprar");

const totalCompra = document.querySelector("#totalCompra");

let botonesElminar = document.querySelectorAll(".carrito-producto-eliminar");

function cargarProductoEnCarrito() {
  if (carrito && carrito.length > 0) {
    /* TRUE */
    carritoVacio.classList.add("no-mostrar");
    carritoProductos.classList.remove("no-mostrar");
    carritoComprar.classList.remove("no-mostrar");

    carritoProductos.innerHTML = "";

    carrito.forEach((producto) => {
      const div = document.createElement("div");
      div.classList.add("carrito-producto-agregado");
      div.innerHTML = `
      <img class="imagen-carrito"
        src="${producto.imagenCatalogo}"
        alt="">
        <div class="carrito-pruducto-nombre">
           <small>Nombre del producto</small>
                <h3>${producto.nombreCatalogo}</h3>
        </div>
  
        <div class="carrito-producto-cantidad">
            <small>Cantidad</small>
            <p>${producto.cantidad}</p>
        </div>
  
        <div class="carrito-producto-precio">
          <small>Precio Unitario</small>
          <p>${producto.precioCatalogo}</p>
        </div>
  
        <div class="carrito-producto-subtotal">
          <small>Subtotal</small>
          <p>$ ${producto.cantidad * producto.precioCatalogo} </p>
        </div>
  
        <button class="carrito-producto-eliminar" id="${producto.idCatalogo}">
          <i class="bi bi-trash3"  ></i>
        </button>
      `;

      carritoProductos.append(div);
    });
  } else {
    carritoVacio.classList.remove("no-mostrar");
    carritoProductos.classList.add("no-mostrar");
    carritoComprar.classList.add("no-mostrar");
  }

  refrescarBotonesEliminar();
}

cargarProductoEnCarrito();
montoTotal();

function refrescarBotonesEliminar() {
  botonEliminar = document.querySelectorAll(".carrito-producto-eliminar");

  botonEliminar.forEach((bEliminar) => {
    bEliminar.addEventListener("click", eliminarDelCarrito);
  });
}

function eliminarDelCarrito(e) {
  const idBotonEliminar = e.currentTarget.idCatalogo;
  console.log(idBotonEliminar);
  const index = carrito.findIndex(
    (producto) => producto.id === idBotonEliminar
  );

  Swal.fire({
    title: "Borrar producto del carrito?",
    showCancelButton: true,
    confirmButtonText: "Sí",    
    confirmButtonColor: "black",
    cancelButtonColor: "black",
  }).then((result) => {
    if (result.isConfirmed) {
      carrito.splice(index, 1);
      cargarProductoEnCarrito();
      localStorage.setItem("productos-en-carrito", JSON.stringify(carrito));
      Swal.fire("Producto Eliminado!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("Changes are not saved", "", "info");
    }
  });
}

function montoTotal() {
  const totalCalculado = carrito.reduce(
    (acc, producto) => acc + producto.precioCatalogo * producto.cantidad,
    0
  );

  console.log(totalCalculado);
  totalCompra.innerHTML = `$${totalCalculado}`;
}
