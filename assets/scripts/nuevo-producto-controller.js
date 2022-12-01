import { productoServicio } from "./productos-servicios.js";

const formulario = document.querySelector("[data-form]");



formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value
    const precio = document.querySelector("[data-precio]").value
    const imgUrl = document.querySelector("[data-imgUrl]").value
    const categoria = document.querySelector("[data-categoria]")
    const categoriaValue = categoria.options[categoria.selectedIndex].value;
    const descripcion = document.querySelector("[data-desc]").value
    
    productoServicio.agregarProducto(nombre, precio, imgUrl, categoriaValue, descripcion).then(respuesta => {
        window.location.href = "../productos.html"
    }).catch(err => console.log(err))
});

