import { productoServicio } from "./productos-servicios.js";

const todosNuevoProducto = (name, price, imgUrl, id) => {
    const card = document.createElement('div');
    let ids = "#0000"
    if (id > 9) {
        ids = "#000";
    } else if (id>99) {
        ids = "#00"
    } else if (id>999) {
        ids = "#0"
    }  
    const contenido =  `
    <div class="linha-producto__productos__item__card">
        <i data-delete id="${id}" class="linha-producto__productos__item__card__delete"></i>
        <i class="linha-producto__productos__item__card__edit"></i>
        <img class="linha-producto__productos__item__card__img" src="${imgUrl}" alt="">  
    </div>
    <p class="linea__producto__productos__item__title">${name}</p> 
    <p class="linea__producto__productos__item__precio">$ ${price}</p>
    <p class="linea__producto__productos__item__ver">${ids}${id}</p>
`   
    card.innerHTML = contenido;
    card.classList.add("linha-producto__productos__item")
    const btnDelete = card.querySelector("[data-delete]")
    btnDelete.addEventListener("click", () => {
        const id = btnDelete.id;
        productoServicio.eliminarProducto(id).then(respuesta => {
            console.log(respuesta)
          } ).catch((err) => alert("Ocurrio un error2"))
    })
    return card;
}


const todosProductosElement = document.querySelector("[data-productosAll]");

const renderAll = async () => {
    try {
        const listaProductos = await productoServicio.listaProductos();
        listaProductos.forEach(element => {
            todosProductosElement.appendChild(todosNuevoProducto(element.nombre, element.precio, element.url, element.id))
        });
    }
    catch(erro) {
        console.log(erro);
    }
}

renderAll()

const btnAgregarProducto = document.querySelector(".linha-producto__top__button");
btnAgregarProducto.addEventListener("click", () => {
    window.location.href = "./nuevo-producto.html"
})