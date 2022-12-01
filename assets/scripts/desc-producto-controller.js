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
        } else {
            throw new Error();
            
        }
        

    } catch(error) {
        console.log("error not found")
        
    }
    
    
 };

 obtenerInformacion()