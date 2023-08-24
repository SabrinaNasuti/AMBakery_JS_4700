const carrito = JSON.parse(localStorage.getItem("carrito"));

const carritoVacio = document.querySelector(".carrito-vacio");
const carritoProductos = document.querySelector(".carrito-productos");
const carritoProductoAgregado = document.querySelector(
  ".carrito-producto-agregado"
);
const carritoComprar = document.querySelector(".carrito-comprar");

if (carrito) {
  /* TRUE */
  carritoVacio.classList.add("no-mostrar");
  carritoProductos.classList.remove("no-mostrar");
  carritoProductoAgregado.classList.remove("no-mostrar");
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
        <small>${producto.cantidad * producto.precioCatalogo}</small>
        <p>$15000</p>
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
  carritoProductoAgregado.classList.add("no-mostrar");
  carritoComprar.classList.add("no-mostrar");
}
