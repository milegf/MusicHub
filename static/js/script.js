/*
let nombre = "Milenka"
let num1 = 123
let num2 = 654
let resultado = num1 + num2
console.log(resultado)
console.log(nombre)

function saludo(){
    console.log("Hola función")
}

function f_nombre(){
    console.log("Hola " + nombre)
}

saludo()
f_nombre()

if (resultado < 1000){
    console.log(resultado)
}
else if (resultado > 1000){
    console.log("Resultado sobre mil")
}
else {
    console.log("Else")
}

let usuario = document.getElementById("usuarioInput")
console.log(usuario)
*/
let datosAdmin ={
    "nombreCompleto": "Milenka Guerra",
    "usuario": "mile",
    "password": "mile123ñ",
    "estado": true
}

window.onload = function(){
    if (window.location.pathname.endsWith("home.html")){
        let usuarioLogin = JSON.parse(localStorage.getItem("datosUsuario"))
        if (usuarioLogin.estadoLogin){
            document.getElementById("tituloHome").textContent = "Bienvenidx " + usuarioLogin.nombre
        }
    }
}

function datosUsuario(){
    let usuario = document.getElementById("usuarioInput").value
    let psswd = document.getElementById("passwordInput").value

    if (usuario == "" || psswd == ""){
        alert("No puede tener datos vacíos.")
    }
    else if (usuario.length <3 || psswd.length <3){
        alert("Los datos deben tener mínimo 3 caracteres.")
    }
    else if (usuario == datosAdmin.usuario && psswd == datosAdmin.password) {
        let usuarioLogueado={
            "nombre": datosAdmin.nombreCompleto,
            "estadoLogin": datosAdmin.estado
        }
        localStorage.setItem("datosUsuario", JSON.stringify(usuarioLogueado))
        alert("Bienvenidx!")
        window.location.href="home.html"
    }
}


