import { productoServicio } from "./productos-servicios.js";



const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if (id == null) {
        console.log("producto no encontrado");
    }

    const nombre = document.querySelector("[data-producto]");
    const precio  = document.querySelector("[data-precio]");
    const descripcion = document.querySelector("[data-desc]")
    const img = document.querySelector("[data-img]")
    try {

        const producto = await productoServicio.detalleProducto(id)
        if (producto.nombre && producto.precio) {
            img.src = producto.url;
            nombre.innerText = producto.nombre;
            precio.innerText = producto.precio;
            descripcion.innerText = producto.descripcion;
            const productoSimilareElement = document.querySelector("[data-producto-sim]");
            const render = async () => {
                try {
                    const listaProductos = await productoServicio.listaProductos();
                    listaProductos.filter(e => e.categoria == producto.categoria & e.id != producto.id).forEach(element => {
                    productoSimilareElement.appendChild(productoSimilares(element.nombre, element.precio, element.url,  element.id))
                    });
                }
                catch(erro) {
                    console.log(erro);
                }
            }

            render()
        } else {
            throw new Error();
        }
        

    } catch(error) {
        console.log("error not found")
        
    }
    
    
 };

 obtenerInformacion()


 const productoSimilares = (name, price, imgUrl, id) => {
    const card = document.createElement('div');
      
    const contenido =  `
    
        <img src="${imgUrl}" alt="">
        <p class="desc__linea-producto__productos__card__nombre">${name}</p>
        <p class="desc__linea-producto__productos__card__precio">$ ${price}</p>
        <p link-producto class="desc__linea-producto__productos__card__ver">Ver producto</p>
    
`   
    card.innerHTML = contenido;
    card.classList.add("desc__linea-producto__productos__card")
    const verProducto = card.querySelector("[link-producto]")
    verProducto.addEventListener("click", ()=> {
        window.location.href = `./descripcion-producto.html?id=${id}`
    })
    
    return card;
}


