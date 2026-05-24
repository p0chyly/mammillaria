document.addEventListener("DOMContentLoaded", () => {
  const select1 = document.getElementById("select1");
  const containerDeProductos = document.querySelector(".product-content");

  function obtenerProductos(){
    return Array.from(containerDeProductos.querySelectorAll(".product")).map(producto => {
      const nombreDeProducto = producto.querySelector(".product-txt h3");
      const precioDeProducto = producto.querySelector(".precio");
      const titulo = nombreDeProducto ? nombreDeProducto.textContent.trim() : "";
      let textoPrecio = precioDeProducto ? precioDeProducto.textContent.replace(/[^\d.,-]/g, "").trim() : "0";
      textoPrecio = textoPrecio.replace(/\.(?=\d{3}\b)/g, "").replace(",", ".");
      const precio = parseFloat(textoPrecio) || 0;
      return {producto, titulo, precio};
    });}

  function actualizarUI(items){
    containerDeProductos.innerHTML = "";
    items.forEach(item => containerDeProductos.appendChild(item.producto));}

  function ordenarProductos(){
    const valor = select1.value;
    const items = obtenerProductos();
    switch (valor){
      case "0": items.sort((a, b) => a.precio - b.precio); break;
      case "1": items.sort((a, b) => b.precio - a.precio); break;
      case "2": items.sort((a, b) => a.titulo.localeCompare(b.titulo, undefined,{sensitivity:"base"})); break;
      case "3": items.sort((a, b) => b.titulo.localeCompare(a.titulo, undefined,{sensitivity:"base"})); break;
      default: break;}
    actualizarUI(items);
  }

  select1.addEventListener("change", ordenarProductos);
  ordenarProductos();
});

