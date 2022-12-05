

const listaProductos = () => fetch("http://api.alexisrodriguez.tk:8080/productos").then(respuesta => respuesta.json());

    
const agregarProducto = (nombre, precio, url, categoria, descripcion) => {
  
  return fetch("http://api.alexisrodriguez.tk:8080/productos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json" 
    },
    body: JSON.stringify({nombre , precio, url, categoria, descripcion})
  })
};

const eliminarProducto = (id) => {
  return fetch(`http://api.alexisrodriguez.tk:8080/productos/${id}`, { 
    method: "DELETE"
  })
};

const detalleProducto = (id) => {
  return fetch(`http://api.alexisrodriguez.tk:8080/productos/${id}`).then((respuesta) => respuesta.json()
  );
};

const infoUsuario = (nombre) => {
  return fetch(`http://api.alexisrodriguez.tk:8080/users?usuario=${nombre}`).then((respuesta) => respuesta.json()
  );
}

export const productoServicio = {
    listaProductos,
    agregarProducto,
    eliminarProducto,
    detalleProducto,
    infoUsuario,
};


 