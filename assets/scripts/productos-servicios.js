const listaProductos = () => fetch("http://localhost:3000/productos").then(respuesta => respuesta.json());

    
const agregarProducto = (nombre, precio, url, categoria, descripcion) => {
  
  return fetch("http://localhost:3000/productos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json" 
    },
    body: JSON.stringify({nombre , precio, url, categoria, descripcion})
  })
};

const eliminarProducto = (id) => {
  return fetch(`http://localhost:3000/productos/${id}`, {
    method: "DELETE"
  })
};

const detalleProducto = (id) => {
  return fetch(`http://localhost:3000/productos/${id}`).then((respuesta) => respuesta.json()
  );
};


export const productoServicio = {
    listaProductos,
    agregarProducto,
    eliminarProducto,
    detalleProducto,
};


 