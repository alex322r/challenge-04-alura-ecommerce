import { productoServicio } from "./productos-servicios.js";

const nuevoProducto = (name, price, imgUrl, id) => {
    const card =document.createElement('div');
    const contenido = `<img src="${imgUrl}">
    <p class="linea__producto__productos__item__title">${name}</p> 
    <p class="linea__producto__productos__item__precio">${price}</p>
    <p class="linea__producto__productos__item__ver">Ver producto</p>`;
    card.innerHTML = contenido;
    card.classList.add("linea__producto__productos__item")
    
    card.addEventListener("click", ()=> {

        window.location.href = `./descripcion-producto.html?id=${id}`
    })
    return card;
}




const producto = document.querySelector ("[data-producto1]")
const producto2 = document.querySelector ("[data-producto2]")
const producto3 = document.querySelector ("[data-producto3]")



const render = async () => {
    try {
        const listaProductos = await productoServicio.listaProductos();
        listaProductos.filter(e => e.categoria == "star-wars").forEach(element => {
            producto.appendChild(nuevoProducto(element.nombre, element.precio, element.url, element.id));

        });
        listaProductos.filter(e => e.categoria == "consolas").forEach(element => {
            
            producto2.appendChild(nuevoProducto(element.nombre, element.precio, element.url, element.id));
        });
        listaProductos.filter(e => e.categoria == "varios").forEach(element => {
            
            producto3.appendChild(nuevoProducto(element.nombre, element.precio, element.url, element.id));
        });    
    }catch(error){
        console.log(error)
    }
}
render()



