import { productoServicio } from "./productos-servicios.js";

const btnLogin = document.querySelector("[btn-login]")

btnLogin.addEventListener("click", () => {
    const usuario = document.querySelector("[data-user]").value
    const password = document.querySelector("[data-password]").value
    comprobarLogin(usuario,password)
     
})

const comprobarLogin = async (usuario,password) => {
    try {
        const  [infoUsuario] = await productoServicio.infoUsuario(usuario);
        
        if (infoUsuario.password == password) {
            console.log("inicio sesion correctamente")
            localStorage.setItem("auth", 1)
            window.location.href = "../productos.html"

        } else {
        console.log("contraseña incorrecta")
        }
    }
    catch(erro) {
        console.log(erro,"error");
    }
}



