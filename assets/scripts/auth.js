class Auth {
    constructor() {
        document.querySelector("body").style.display = "none";
        const auth = localStorage.getItem("auth");
        this.validarAuth(auth)

    }

    validarAuth(auth) {
        if (auth!= 1) {
            window.location.replace("/");
        }else {
            document.querySelector("body").style.display = "unset";
        }
    }

    logOut() {
        localStorage.removeItem("auth")
    }
}