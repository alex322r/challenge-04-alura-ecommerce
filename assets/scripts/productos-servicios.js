

const listaProductos = () => fetch("https://api.alexisrodriguez.tk/productos").then(respuesta => respuesta.json());

    
const agregarProducto = (nombre, precio, url, categoria, descripcion) => {
  
  return fetch("https://api.alexisrodriguez.tk/productos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json" 
    },
    body: JSON.stringify({nombre , precio, url, categoria, descripcion})
  })
};

const eliminarProducto = (id) => {
  return fetch(`https://api.alexisrodriguez.tk/productos/${id}`, { 
    method: "DELETE"
  })
};

const detalleProducto = (id) => {
  return fetch(`https://api.alexisrodriguez.tk/productos/${id}`).then((respuesta) => respuesta.json()
  );
};

const infoUsuario = (nombre) => {
  return fetch(`https://api.alexisrodriguez.tk/users?usuario=${nombre}`).then((respuesta) => respuesta.json()
  );
}

export const productoServicio = {
    listaProductos,
    agregarProducto,
    eliminarProducto,
    detalleProducto,
    infoUsuario,
};


 